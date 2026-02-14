import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { cabecerasCors, manejarCors } from '../_shared/cors.ts'
import { crearClienteServicio } from '../_shared/supabase-client.ts'
import { llamarClaude, extraerJSON } from '../_shared/anthropic-client.ts'
import { generarEmbeddings } from '../_shared/openai-client.ts'
import { limpiarTextoNorma } from '../_shared/limpiador-texto.ts'
import { conReintento } from '../_shared/reintento.ts'

// ─────────────────────────────────────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────────────────────────────────────

interface ClasificacionNorma {
  ccn_stic_id: string
  titulo: string
  fecha_version: string | null
  idioma: string
  categoria: 'marco' | 'control_tecnico' | 'proveedor_nube' | 'perfil_sectorial' | 'legal' | 'procedimiento' | 'otro'
  proveedor_nube: string | null
  controles_aplicables: string[]
  niveles_aplicables: string[]
  es_duplicado_de: string | null
  tokens_estimados: number
}

interface RequisitoExtraido {
  requisito_id: string
  seccion_fuente: string
  texto_requisito: string
  resumen_requisito: string
  control_ids_ens: string[]
  niveles_ens: string[]
  criterios_verificacion: string
  es_obligatorio: boolean
  palabras_clave: string[]
}

interface ResultadoSimilitud {
  requisito_id: string
  similitud: number
}

// ─────────────────────────────────────────────────────────────────────────────
// Prompts del sistema
// ─────────────────────────────────────────────────────────────────────────────

const PROMPT_CLASIFICACION = `Eres un experto en normativa de ciberseguridad del Centro Criptologico Nacional (CCN) de Espana. Tu tarea es analizar el comienzo de una guia CCN-STIC y extraer metadatos estructurados para su catalogacion.

CONTEXTO:
Las guias CCN-STIC son documentos normativos que implementan el Esquema Nacional de Seguridad (ENS), regulado por el Real Decreto 311/2022. Cada guia tiene un identificador CCN-STIC-XXX y aborda controles, procedimientos o perfiles especificos.

CATEGORIAS POSIBLES:
- "marco": Guias que definen el marco general del ENS, politicas y estructura (ej. CCN-STIC-801, 802, 803, 804, 805)
- "control_tecnico": Guias que detallan la implementacion tecnica de controles especificos (ej. CCN-STIC-811 a 899)
- "proveedor_nube": Guias especificas para proveedores cloud (ej. CCN-STIC-823, guias AWS, Azure, Google)
- "perfil_sectorial": Guias de adecuacion para sectores especificos (ej. sanidad, educacion, justicia)
- "legal": Guias sobre requisitos legales, proteccion de datos, normativa complementaria
- "procedimiento": Guias de procedimientos operativos, gestion de incidentes, auditorias
- "otro": Guias que no encajan en las categorias anteriores

CONTROLES DEL ANEXO II (RD 311/2022):
Los controles siguen el patron: org.1-4, op.pl.1-5, op.acc.1-7, op.exp.1-11, op.ext.1-4, op.nub.1, op.cont.1-4, op.mon.1-3, mp.if.1-7, mp.per.1-4, mp.eq.1-4, mp.com.1-4, mp.si.1-5, mp.sw.1-2, mp.info.1-6, mp.s.1-4

NIVELES ENS: BASICA, MEDIA, ALTA

INSTRUCCIONES:
1. Analiza el texto proporcionado (comienzo de la guia).
2. Extrae los metadatos con precision.
3. Para controles_aplicables, lista SOLO los controles del Anexo II que esta guia aborda directamente.
4. Para niveles_aplicables, indica a que niveles ENS aplica la guia.
5. Si no puedes determinar un campo, usa null.
6. es_duplicado_de debe ser null a menos que el texto indique explicitamente que es una version traducida o duplicada de otra guia (indicar el nombre_archivo de la original).

RESPONDE EXCLUSIVAMENTE en formato JSON valido:
{
  "ccn_stic_id": "CCN-STIC-XXX",
  "titulo": "Titulo completo de la guia",
  "fecha_version": "YYYY-MM o null",
  "idioma": "es | en | otro",
  "categoria": "marco | control_tecnico | proveedor_nube | perfil_sectorial | legal | procedimiento | otro",
  "proveedor_nube": "AWS | Azure | Google Cloud | null",
  "controles_aplicables": ["op.acc.1", "op.acc.2", ...],
  "niveles_aplicables": ["BASICA", "MEDIA", "ALTA"],
  "es_duplicado_de": "nombre_archivo.md o null",
  "tokens_estimados": 12345
}`

const PROMPT_EXTRACCION = `Eres un auditor experto en el Esquema Nacional de Seguridad (ENS) de Espana (RD 311/2022). Tu tarea es extraer TODOS los requisitos auditables y verificables del texto de una guia CCN-STIC.

DEFINICION DE REQUISITO AUDITABLE:
Un requisito auditable es una exigencia concreta, medible y verificable que una organizacion debe cumplir. Incluye:
- Obligaciones explicitas ("se debe", "es obligatorio", "se requiere")
- Controles tecnicos especificos que deben implementarse
- Configuraciones de seguridad que deben aplicarse
- Procedimientos que deben documentarse o ejecutarse
- Metricas o umbrales que deben cumplirse

NO son requisitos:
- Definiciones o glosarios
- Texto informativo o explicativo sin obligacion
- Referencias a otras normas sin exigencia concreta
- Recomendaciones opcionales ("se recomienda", "conviene")

CONTROLES DEL ANEXO II (RD 311/2022):
Marco organizativo: org.1 (Politica de seguridad), org.2 (Normativa de seguridad), org.3 (Procedimientos de seguridad), org.4 (Proceso de autorizacion)
Marco operacional - Planificacion: op.pl.1 (Analisis de riesgos), op.pl.2 (Arquitectura de seguridad), op.pl.3 (Adquisicion de nuevos componentes), op.pl.4 (Dimension de seguridad), op.pl.5 (Componentes certificados)
Marco operacional - Control de acceso: op.acc.1 (Identificacion), op.acc.2 (Requisitos de acceso), op.acc.3 (Segregacion de funciones), op.acc.4 (Proceso de gestion de derechos), op.acc.5 (Mecanismo de autenticacion), op.acc.6 (Acceso local), op.acc.7 (Acceso remoto)
Marco operacional - Explotacion: op.exp.1 (Inventario de activos), op.exp.2 (Configuracion de seguridad), op.exp.3 (Gestion de la configuracion), op.exp.4 (Mantenimiento y actualizaciones), op.exp.5 (Gestion de cambios), op.exp.6 (Proteccion frente a codigo danino), op.exp.7 (Gestion de incidentes), op.exp.8 (Registro de actividad), op.exp.9 (Registro de gestion de incidentes), op.exp.10 (Proteccion de claves criptograficas), op.exp.11 (Proteccion de los servicios)
Marco operacional - Servicios externos: op.ext.1 (Contratacion y acuerdos de nivel de servicio), op.ext.2 (Gestion diaria), op.ext.3 (Proteccion de la cadena de suministro), op.ext.4 (Interconexion de sistemas)
Marco operacional - Servicios en la nube: op.nub.1 (Proteccion de servicios en la nube)
Marco operacional - Continuidad: op.cont.1 (Analisis de impacto), op.cont.2 (Plan de continuidad), op.cont.3 (Pruebas periodicas), op.cont.4 (Medios alternativos)
Marco operacional - Monitorizacion: op.mon.1 (Deteccion de intrusiones), op.mon.2 (Sistema de metricas), op.mon.3 (Vigilancia)
Medidas de proteccion - Instalaciones: mp.if.1 a mp.if.7
Medidas de proteccion - Personal: mp.per.1 a mp.per.4
Medidas de proteccion - Equipos: mp.eq.1 a mp.eq.4
Medidas de proteccion - Comunicaciones: mp.com.1 a mp.com.4
Medidas de proteccion - Soportes de informacion: mp.si.1 a mp.si.5
Medidas de proteccion - Software: mp.sw.1 a mp.sw.2
Medidas de proteccion - Informacion: mp.info.1 a mp.info.6
Medidas de proteccion - Servicios: mp.s.1 a mp.s.4

NIVELES ENS: BASICA, MEDIA, ALTA

FORMATO DE requisito_id:
Usa el patron: {ccn_stic_id}-REQ-{numero_secuencial_3_digitos}
Ejemplo: CCN-STIC-804-REQ-001, CCN-STIC-804-REQ-002

INSTRUCCIONES:
1. Lee el texto completo de la guia.
2. Extrae CADA requisito auditable que encuentres.
3. Para cada requisito, mapea al control o controles del Anexo II mas cercanos.
4. Especifica los niveles ENS a los que aplica (si la guia no lo indica, asume los tres niveles).
5. Genera criterios de verificacion: como comprobaria un auditor que este requisito se cumple en un pliego de prescripciones tecnicas.
6. Genera palabras clave para busqueda semantica (terminos tecnicos relevantes para RAG).
7. Indica si es obligatorio (true) o recomendado (false).

RESPONDE EXCLUSIVAMENTE en formato JSON valido:
{
  "requisitos": [
    {
      "requisito_id": "CCN-STIC-XXX-REQ-001",
      "seccion_fuente": "Seccion o capitulo de donde proviene",
      "texto_requisito": "Texto literal o parafraseado del requisito",
      "resumen_requisito": "Resumen conciso en una frase",
      "control_ids_ens": ["op.acc.1", "op.acc.5"],
      "niveles_ens": ["BASICA", "MEDIA", "ALTA"],
      "criterios_verificacion": "El pliego debe especificar...; se debe evidenciar...",
      "es_obligatorio": true,
      "palabras_clave": ["autenticacion", "multifactor", "MFA", "control de acceso"]
    }
  ]
}`

// ─────────────────────────────────────────────────────────────────────────────
// Constantes
// ─────────────────────────────────────────────────────────────────────────────

const UMBRAL_TOKENS_PEQUENO = 30_000
const UMBRAL_TOKENS_MEDIANO = 100_000
const TAMANO_VENTANA_TOKENS = 80_000
const SOLAPAMIENTO_VENTANA_TOKENS = 5_000
const LOTE_EMBEDDINGS = 20
const UMBRAL_SIMILITUD_DUPLICADO = 0.92

// ─────────────────────────────────────────────────────────────────────────────
// Funciones auxiliares
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Estima la cantidad de tokens de un texto en espanol (aprox. 1 token cada 4 caracteres).
 */
function estimarTokens(texto: string): number {
  return Math.ceil(texto.length / 4)
}

/**
 * Actualiza el estado de ingesta de una norma en la BD.
 */
async function actualizarEstadoNorma(
  supabase: ReturnType<typeof crearClienteServicio>,
  nombreArchivo: string,
  estado: string,
  camposExtra: Record<string, unknown> = {},
): Promise<void> {
  const { error } = await supabase
    .from('norma_metadata')
    .update({ estado_ingesta: estado, ...camposExtra })
    .eq('nombre_archivo', nombreArchivo)

  if (error) {
    console.error(`Error actualizando estado a ${estado}:`, error.message)
  }
}

/**
 * Registra un fallo en la norma: estado FALLIDA, mensaje de error e incrementa intentos.
 */
async function registrarFalloNorma(
  supabase: ReturnType<typeof crearClienteServicio>,
  nombreArchivo: string,
  mensajeError: string,
): Promise<void> {
  // Primero obtener los intentos actuales
  const { data: normaActual } = await supabase
    .from('norma_metadata')
    .select('intentos')
    .eq('nombre_archivo', nombreArchivo)
    .single()

  const intentosActuales = normaActual?.intentos ?? 0

  await supabase
    .from('norma_metadata')
    .update({
      estado_ingesta: 'FALLIDA',
      error_mensaje: mensajeError.slice(0, 2000),
      intentos: intentosActuales + 1,
    })
    .eq('nombre_archivo', nombreArchivo)
}

/**
 * Divide el texto en secciones usando encabezados markdown (## o ###).
 * Cada seccion incluye su encabezado y el texto hasta el siguiente encabezado.
 */
function dividirPorSecciones(texto: string): string[] {
  const secciones: string[] = []
  const lineas = texto.split('\n')
  let seccionActual = ''

  for (const linea of lineas) {
    if (/^#{2,3}\s/.test(linea) && seccionActual.trim().length > 0) {
      secciones.push(seccionActual.trim())
      seccionActual = ''
    }
    seccionActual += linea + '\n'
  }

  if (seccionActual.trim().length > 0) {
    secciones.push(seccionActual.trim())
  }

  return secciones
}

/**
 * Agrupa secciones en bloques que no excedan el limite de tokens.
 */
function agruparSecciones(secciones: string[], limiteTokens: number): string[] {
  const bloques: string[] = []
  let bloqueActual = ''

  for (const seccion of secciones) {
    const tokensSeccion = estimarTokens(seccion)
    const tokensBloque = estimarTokens(bloqueActual)

    if (tokensBloque + tokensSeccion > limiteTokens && bloqueActual.length > 0) {
      bloques.push(bloqueActual.trim())
      bloqueActual = ''
    }

    bloqueActual += seccion + '\n\n'
  }

  if (bloqueActual.trim().length > 0) {
    bloques.push(bloqueActual.trim())
  }

  return bloques
}

/**
 * Divide texto largo en ventanas deslizantes con solapamiento.
 */
function dividirEnVentanas(
  texto: string,
  tamanoVentanaTokens: number,
  solapamientoTokens: number,
): string[] {
  const ventanas: string[] = []
  const caracteresPorToken = 4
  const tamanoVentanaChars = tamanoVentanaTokens * caracteresPorToken
  const solapamientoChars = solapamientoTokens * caracteresPorToken

  let posicion = 0
  while (posicion < texto.length) {
    const fin = Math.min(posicion + tamanoVentanaChars, texto.length)
    ventanas.push(texto.slice(posicion, fin))

    if (fin >= texto.length) break
    posicion += tamanoVentanaChars - solapamientoChars
  }

  return ventanas
}

/**
 * Deduplica requisitos por requisito_id dentro del mismo lote.
 */
function deduplicarRequisitosLocales(requisitos: RequisitoExtraido[]): RequisitoExtraido[] {
  const vistos = new Set<string>()
  const unicos: RequisitoExtraido[] = []

  for (const req of requisitos) {
    if (!vistos.has(req.requisito_id)) {
      vistos.add(req.requisito_id)
      unicos.push(req)
    }
  }

  return unicos
}

/**
 * Renumera los requisito_id para que sean secuenciales tras la fusion de bloques.
 */
function renumerarRequisitos(
  requisitos: RequisitoExtraido[],
  prefijoId: string,
): RequisitoExtraido[] {
  return requisitos.map((req, indice) => ({
    ...req,
    requisito_id: `${prefijoId}-REQ-${String(indice + 1).padStart(3, '0')}`,
  }))
}

// ─────────────────────────────────────────────────────────────────────────────
// Funciones principales del pipeline
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Paso 1: Clasificar la norma con Claude.
 */
async function clasificarNorma(
  textoLimpio: string,
  nombreArchivo: string,
): Promise<ClasificacionNorma> {
  // Enviar los primeros ~2000 tokens (8000 caracteres) para clasificacion
  const fragmentoClasificacion = textoLimpio.slice(0, 8000)

  const resultado = await conReintento(
    () => llamarClaude(
      PROMPT_CLASIFICACION,
      [{
        role: 'user',
        content: `Analiza el comienzo de esta guia CCN-STIC y extrae los metadatos.\n\nNombre del archivo: ${nombreArchivo}\n\n---\n\n${fragmentoClasificacion}`,
      }],
      2048,
    ),
    { maxIntentos: 3 },
  )

  console.log(`Clasificacion: ${resultado.tokensEntrada} tokens entrada, ${resultado.tokensSalida} tokens salida`)

  const clasificacion = extraerJSON<ClasificacionNorma>(resultado.texto)
  return clasificacion
}

/**
 * Paso 2: Extraer requisitos de un bloque de texto con Claude.
 */
async function extraerRequisitosBloque(
  textoBloque: string,
  ccnSticId: string,
  numeroBloque: number,
  totalBloques: number,
): Promise<RequisitoExtraido[]> {
  const contextoBloque = totalBloques > 1
    ? `\n\nNOTA: Este es el bloque ${numeroBloque} de ${totalBloques} del documento ${ccnSticId}. Genera requisito_id con el prefijo ${ccnSticId}.`
    : `\n\nDocumento: ${ccnSticId}`

  const resultado = await conReintento(
    () => llamarClaude(
      PROMPT_EXTRACCION,
      [{
        role: 'user',
        content: `Extrae todos los requisitos auditables del siguiente texto de la guia ${ccnSticId}.${contextoBloque}\n\n---\n\n${textoBloque}`,
      }],
      8192,
    ),
    { maxIntentos: 3 },
  )

  console.log(`Extraccion bloque ${numeroBloque}/${totalBloques}: ${resultado.tokensEntrada} tokens entrada, ${resultado.tokensSalida} tokens salida`)

  const datosExtraidos = extraerJSON<{ requisitos: RequisitoExtraido[] }>(resultado.texto)
  return datosExtraidos.requisitos ?? []
}

/**
 * Paso 2 completo: Estrategia de extraccion segun tamano del texto.
 */
async function extraerTodosRequisitos(
  textoLimpio: string,
  ccnSticId: string,
  tokensEstimados: number,
): Promise<RequisitoExtraido[]> {
  let todosRequisitos: RequisitoExtraido[] = []

  if (tokensEstimados < UMBRAL_TOKENS_PEQUENO) {
    // Texto pequeno: enviar completo en una sola llamada
    console.log(`Estrategia: texto pequeno (${tokensEstimados} tokens), una sola llamada`)
    todosRequisitos = await extraerRequisitosBloque(textoLimpio, ccnSticId, 1, 1)

  } else if (tokensEstimados < UMBRAL_TOKENS_MEDIANO) {
    // Texto mediano: dividir por secciones/capitulos
    console.log(`Estrategia: texto mediano (${tokensEstimados} tokens), division por secciones`)
    const secciones = dividirPorSecciones(textoLimpio)
    const bloques = agruparSecciones(secciones, TAMANO_VENTANA_TOKENS)
    console.log(`Dividido en ${bloques.length} bloques`)

    for (let i = 0; i < bloques.length; i++) {
      const requisitosBloque = await extraerRequisitosBloque(
        bloques[i],
        ccnSticId,
        i + 1,
        bloques.length,
      )
      todosRequisitos.push(...requisitosBloque)
    }

  } else {
    // Texto grande: ventanas deslizantes
    console.log(`Estrategia: texto grande (${tokensEstimados} tokens), ventanas deslizantes`)
    const ventanas = dividirEnVentanas(textoLimpio, TAMANO_VENTANA_TOKENS, SOLAPAMIENTO_VENTANA_TOKENS)
    console.log(`Dividido en ${ventanas.length} ventanas`)

    for (let i = 0; i < ventanas.length; i++) {
      const requisitosVentana = await extraerRequisitosBloque(
        ventanas[i],
        ccnSticId,
        i + 1,
        ventanas.length,
      )
      todosRequisitos.push(...requisitosVentana)
    }
  }

  // Deduplicar requisitos locales (posibles duplicados entre ventanas solapadas)
  todosRequisitos = deduplicarRequisitosLocales(todosRequisitos)

  // Renumerar secuencialmente
  todosRequisitos = renumerarRequisitos(todosRequisitos, ccnSticId)

  console.log(`Total requisitos extraidos: ${todosRequisitos.length}`)
  return todosRequisitos
}

/**
 * Paso 3: Generar embeddings en lotes para todos los requisitos.
 */
async function generarEmbeddingsRequisitos(
  requisitos: RequisitoExtraido[],
): Promise<number[][]> {
  const textosParaEmbedding = requisitos.map(
    (req) => `${req.resumen_requisito} ${req.palabras_clave.join(' ')}`,
  )

  const todosEmbeddings: number[][] = []

  for (let i = 0; i < textosParaEmbedding.length; i += LOTE_EMBEDDINGS) {
    const lote = textosParaEmbedding.slice(i, i + LOTE_EMBEDDINGS)
    console.log(`Generando embeddings: lote ${Math.floor(i / LOTE_EMBEDDINGS) + 1}/${Math.ceil(textosParaEmbedding.length / LOTE_EMBEDDINGS)}`)

    const embeddingsLote = await conReintento(
      () => generarEmbeddings(lote),
      { maxIntentos: 3 },
    )

    todosEmbeddings.push(...embeddingsLote)
  }

  return todosEmbeddings
}

/**
 * Paso 4: Verificar duplicados contra requisitos existentes en la BD.
 */
async function verificarDuplicados(
  supabase: ReturnType<typeof crearClienteServicio>,
  requisitos: RequisitoExtraido[],
  embeddings: number[][],
): Promise<(string | null)[]> {
  const resultadosDuplicado: (string | null)[] = []

  for (let i = 0; i < requisitos.length; i++) {
    try {
      const { data: similares, error } = await supabase
        .rpc('buscar_requisitos_similares', {
          p_embedding: JSON.stringify(embeddings[i]),
          p_umbral: UMBRAL_SIMILITUD_DUPLICADO,
          p_limite: 1,
        })

      if (error) {
        console.error(`Error buscando duplicados para ${requisitos[i].requisito_id}:`, error.message)
        resultadosDuplicado.push(null)
        continue
      }

      const listaSimilares = similares as ResultadoSimilitud[] | null
      if (listaSimilares && listaSimilares.length > 0) {
        console.log(`Duplicado detectado: ${requisitos[i].requisito_id} ~ ${listaSimilares[0].requisito_id} (similitud: ${listaSimilares[0].similitud.toFixed(4)})`)
        resultadosDuplicado.push(listaSimilares[0].requisito_id)
      } else {
        resultadosDuplicado.push(null)
      }
    } catch (err) {
      console.error(`Excepcion verificando duplicado para ${requisitos[i].requisito_id}:`, err)
      resultadosDuplicado.push(null)
    }
  }

  return resultadosDuplicado
}

/**
 * Paso 5: Almacenar requisitos en la tabla norma_requisitos.
 */
async function almacenarRequisitos(
  supabase: ReturnType<typeof crearClienteServicio>,
  normaMetadataId: string,
  requisitos: RequisitoExtraido[],
  embeddings: number[][],
  duplicados: (string | null)[],
): Promise<number> {
  let insertados = 0

  // Insertar en lotes de 50 para evitar payloads demasiado grandes
  const TAMANO_LOTE_INSERT = 50

  for (let i = 0; i < requisitos.length; i += TAMANO_LOTE_INSERT) {
    const loteRequisitos = requisitos.slice(i, i + TAMANO_LOTE_INSERT)
    const loteEmbeddings = embeddings.slice(i, i + TAMANO_LOTE_INSERT)
    const loteDuplicados = duplicados.slice(i, i + TAMANO_LOTE_INSERT)

    const registros = loteRequisitos.map((req, j) => ({
      norma_metadata_id: normaMetadataId,
      requisito_id: req.requisito_id,
      seccion_fuente: req.seccion_fuente,
      texto_requisito: req.texto_requisito,
      resumen_requisito: req.resumen_requisito,
      control_ids_ens: req.control_ids_ens,
      niveles_ens: req.niveles_ens,
      criterios_verificacion: req.criterios_verificacion,
      palabras_clave: req.palabras_clave,
      es_obligatorio: req.es_obligatorio,
      duplicado_de: loteDuplicados[j],
      embedding: JSON.stringify(loteEmbeddings[j]),
    }))

    const { error } = await supabase
      .from('norma_requisitos')
      .insert(registros)

    if (error) {
      console.error(`Error insertando lote ${Math.floor(i / TAMANO_LOTE_INSERT) + 1}:`, error.message)
      // Intentar insertar uno a uno como fallback
      for (const registro of registros) {
        const { error: errorIndividual } = await supabase
          .from('norma_requisitos')
          .insert(registro)

        if (errorIndividual) {
          console.error(`Error insertando ${registro.requisito_id}:`, errorIndividual.message)
        } else {
          insertados++
        }
      }
    } else {
      insertados += loteRequisitos.length
    }
  }

  return insertados
}

// ─────────────────────────────────────────────────────────────────────────────
// Handler principal
// ─────────────────────────────────────────────────────────────────────────────

Deno.serve(async (req: Request) => {
  const cors = manejarCors(req)
  if (cors) return cors

  const supabase = crearClienteServicio()
  let nombreArchivo = ''

  try {
    // ── Validar entrada ──
    const cuerpo = await req.json()
    nombreArchivo = cuerpo.nombre_archivo
    const textoCrudo: string = cuerpo.texto_crudo

    if (!nombreArchivo || !textoCrudo) {
      return new Response(
        JSON.stringify({ error: 'Se requieren nombre_archivo y texto_crudo' }),
        { status: 400, headers: { ...cabecerasCors, 'Content-Type': 'application/json' } },
      )
    }

    console.log(`Iniciando procesamiento de: ${nombreArchivo} (${textoCrudo.length} caracteres)`)

    // ── Verificar o crear registro en norma_metadata ──
    const { data: normaExistente } = await supabase
      .from('norma_metadata')
      .select('id, estado_ingesta')
      .eq('nombre_archivo', nombreArchivo)
      .single()

    let normaMetadataId: string

    if (normaExistente) {
      normaMetadataId = normaExistente.id

      // Si ya esta completada, no reprocesar salvo que se fuerce
      if (normaExistente.estado_ingesta === 'COMPLETADA') {
        return new Response(
          JSON.stringify({
            mensaje: 'Norma ya procesada',
            norma_metadata_id: normaMetadataId,
          }),
          { status: 200, headers: { ...cabecerasCors, 'Content-Type': 'application/json' } },
        )
      }

      // Limpiar requisitos anteriores si hay un reprocesamiento
      await supabase
        .from('norma_requisitos')
        .delete()
        .eq('norma_metadata_id', normaMetadataId)
    } else {
      // Crear registro inicial
      const { data: nuevaNorma, error: errorCrear } = await supabase
        .from('norma_metadata')
        .insert({
          nombre_archivo: nombreArchivo,
          ccn_stic_id: 'PENDIENTE',
          titulo: 'Pendiente de clasificacion',
          categoria: 'otro',
          estado_ingesta: 'PENDIENTE',
          tokens_estimados: estimarTokens(textoCrudo),
        })
        .select('id')
        .single()

      if (errorCrear || !nuevaNorma) {
        throw new Error(`Error creando registro norma_metadata: ${errorCrear?.message}`)
      }

      normaMetadataId = nuevaNorma.id
    }

    // ════════════════════════════════════════════════════════════════════════
    // PASO 1: Limpieza de texto
    // ════════════════════════════════════════════════════════════════════════
    await actualizarEstadoNorma(supabase, nombreArchivo, 'LIMPIANDO')
    console.log('Paso 1: Limpiando texto...')

    const { textoLimpio, tokensEstimados, porcentajeReduccion } = limpiarTextoNorma(textoCrudo)
    console.log(`Limpieza completada: ${tokensEstimados} tokens estimados, ${porcentajeReduccion}% reduccion`)

    // ════════════════════════════════════════════════════════════════════════
    // PASO 2: Clasificacion con Claude
    // ════════════════════════════════════════════════════════════════════════
    await actualizarEstadoNorma(supabase, nombreArchivo, 'CLASIFICANDO', {
      tokens_limpios: tokensEstimados,
    })
    console.log('Paso 2: Clasificando norma con Claude...')

    const clasificacion = await clasificarNorma(textoLimpio, nombreArchivo)
    console.log(`Clasificacion: ${clasificacion.ccn_stic_id} - ${clasificacion.titulo} [${clasificacion.categoria}]`)

    // Actualizar norma_metadata con la clasificacion y el texto limpio
    const { error: errorActualizarClasificacion } = await supabase
      .from('norma_metadata')
      .update({
        ccn_stic_id: clasificacion.ccn_stic_id,
        titulo: clasificacion.titulo,
        fecha_version: clasificacion.fecha_version,
        idioma: clasificacion.idioma,
        categoria: clasificacion.categoria,
        proveedor_nube: clasificacion.proveedor_nube,
        controles_aplicables: clasificacion.controles_aplicables,
        niveles_aplicables: clasificacion.niveles_aplicables,
        es_duplicado_de: clasificacion.es_duplicado_de,
        tokens_estimados: clasificacion.tokens_estimados || tokensEstimados,
        texto_limpio: textoLimpio,
      })
      .eq('id', normaMetadataId)

    if (errorActualizarClasificacion) {
      console.error('Error actualizando clasificacion:', errorActualizarClasificacion.message)
    }

    // Si es un duplicado, marcar como completada sin extraer requisitos
    if (clasificacion.es_duplicado_de) {
      console.log(`Norma marcada como duplicado de: ${clasificacion.es_duplicado_de}`)
      await actualizarEstadoNorma(supabase, nombreArchivo, 'COMPLETADA', {
        total_requisitos: 0,
        procesado_en: new Date().toISOString(),
      })

      return new Response(
        JSON.stringify({
          mensaje: 'Norma clasificada como duplicado',
          norma_metadata_id: normaMetadataId,
          clasificacion,
          es_duplicado_de: clasificacion.es_duplicado_de,
        }),
        { status: 200, headers: { ...cabecerasCors, 'Content-Type': 'application/json' } },
      )
    }

    // ════════════════════════════════════════════════════════════════════════
    // PASO 3: Extraccion de requisitos con Claude
    // ════════════════════════════════════════════════════════════════════════
    await actualizarEstadoNorma(supabase, nombreArchivo, 'EXTRAYENDO')
    console.log('Paso 3: Extrayendo requisitos con Claude...')

    const requisitos = await extraerTodosRequisitos(
      textoLimpio,
      clasificacion.ccn_stic_id,
      tokensEstimados,
    )

    if (requisitos.length === 0) {
      console.log('No se encontraron requisitos auditables')
      await actualizarEstadoNorma(supabase, nombreArchivo, 'COMPLETADA', {
        total_requisitos: 0,
        procesado_en: new Date().toISOString(),
      })

      return new Response(
        JSON.stringify({
          mensaje: 'Procesamiento completado sin requisitos',
          norma_metadata_id: normaMetadataId,
          clasificacion,
          total_requisitos: 0,
        }),
        { status: 200, headers: { ...cabecerasCors, 'Content-Type': 'application/json' } },
      )
    }

    // ════════════════════════════════════════════════════════════════════════
    // PASO 4: Generar embeddings
    // ════════════════════════════════════════════════════════════════════════
    console.log(`Paso 4: Generando embeddings para ${requisitos.length} requisitos...`)

    const embeddings = await generarEmbeddingsRequisitos(requisitos)
    console.log(`Embeddings generados: ${embeddings.length}`)

    // ════════════════════════════════════════════════════════════════════════
    // PASO 5: Verificar duplicados contra la BD
    // ════════════════════════════════════════════════════════════════════════
    console.log('Paso 5: Verificando duplicados contra requisitos existentes...')

    const duplicados = await verificarDuplicados(supabase, requisitos, embeddings)
    const totalDuplicados = duplicados.filter((d) => d !== null).length
    console.log(`Duplicados encontrados: ${totalDuplicados} de ${requisitos.length}`)

    // ════════════════════════════════════════════════════════════════════════
    // PASO 6: Almacenar requisitos en la BD
    // ════════════════════════════════════════════════════════════════════════
    console.log('Paso 6: Almacenando requisitos en la base de datos...')

    const totalInsertados = await almacenarRequisitos(
      supabase,
      normaMetadataId,
      requisitos,
      embeddings,
      duplicados,
    )
    console.log(`Requisitos almacenados: ${totalInsertados}`)

    // ════════════════════════════════════════════════════════════════════════
    // PASO 7: Actualizar norma_metadata con resultado final
    // ════════════════════════════════════════════════════════════════════════
    await actualizarEstadoNorma(supabase, nombreArchivo, 'COMPLETADA', {
      total_requisitos: totalInsertados,
      procesado_en: new Date().toISOString(),
      error_mensaje: null,
    })

    console.log(`Procesamiento completado exitosamente: ${nombreArchivo} -> ${totalInsertados} requisitos`)

    return new Response(
      JSON.stringify({
        mensaje: 'Procesamiento completado',
        norma_metadata_id: normaMetadataId,
        clasificacion: {
          ccn_stic_id: clasificacion.ccn_stic_id,
          titulo: clasificacion.titulo,
          categoria: clasificacion.categoria,
        },
        total_requisitos: totalInsertados,
        total_duplicados: totalDuplicados,
        tokens_estimados: tokensEstimados,
        porcentaje_reduccion: porcentajeReduccion,
      }),
      { status: 200, headers: { ...cabecerasCors, 'Content-Type': 'application/json' } },
    )

  } catch (error: unknown) {
    const mensajeError = error instanceof Error ? error.message : String(error)
    console.error(`Error procesando ${nombreArchivo}:`, mensajeError)

    // Registrar el fallo en la BD si tenemos nombre_archivo
    if (nombreArchivo) {
      await registrarFalloNorma(supabase, nombreArchivo, mensajeError)
    }

    return new Response(
      JSON.stringify({
        error: 'Error procesando norma',
        detalle: mensajeError,
        nombre_archivo: nombreArchivo,
      }),
      { status: 500, headers: { ...cabecerasCors, 'Content-Type': 'application/json' } },
    )
  }
})
