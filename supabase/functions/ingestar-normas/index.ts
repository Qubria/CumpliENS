/**
 * ingestar-normas/index.ts
 *
 * Edge Function orquestadora de la ingesta de las 121 normas CCN-STIC / ENS.
 *
 * Acciones soportadas:
 *   - "estado"    : Devuelve el estado actual de la ingesta (totales, fallidas, pendientes).
 *   - "iniciar"   : Registra las 121 normas en norma_metadata si no existen.
 *   - "continuar"  : Devuelve la lista de normas pendientes/fallidas para que el frontend
 *                    las procese individualmente llamando a extraer-requisitos.
 *   - "cobertura" : Genera y almacena un informe de cobertura en la tabla informe_cobertura.
 *
 * Arquitectura:
 *   El frontend es quien lee cada archivo .md y lo envía a extraer-requisitos.
 *   Este orquestador gestiona ESTADO y PROGRESO, no el procesamiento en sí.
 */

import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { cabecerasCors, manejarCors } from '../_shared/cors.ts'
import { crearClienteServicio } from '../_shared/supabase-client.ts'

// =============================================================================
// Manifiesto de las 121 normas validas (duplicado de src/data/manifiesto-normas.ts
// porque las Edge Functions no pueden importar desde src/).
// =============================================================================
const MANIFIESTO_NORMAS: string[] = [
  '_CCN_STIC_887B.md',
  '_CCN-STIC 891 Perfil Cumplimiento Especifico Salud.md',
  '_CCN-STIC-889D_CS Oracle OCI Database-Instancias VM.md',
  '_CCN-STIC-889E_CS Oracle OCI Compute-Instancias VM y Bare Metal.md',
  '_CCN-STIC-889F CS Oracle C@C Sistemas Exadata-Autonomous DB.md',
  '11file.md',
  '800-Glosario_de_terminos_ENS.md',
  '801_ENS-responsabilidades.md',
  '802-Auditoria_ENS.md',
  '803_ENS-valoracion.md',
  '804_medidas_de_implantacion_del_ens.md',
  '805-ENS_politica.md',
  '806_ENS-adecuacion.md',
  '806_ENS-adecuacionAA.md',
  '807-Criptologia_de_empleo_ENS.md',
  '807-Criptologia_de_empleo_ENSC.md',
  '809.md',
  '811-Interconexion_en_el_ENS.md',
  '812-Entornos_y_aplicaciones_web.md',
  '813-Componentes_Certificados_en_el_ENS.md',
  '814-Seguridad_en_correo_electronico.md',
  '815_Metricas_e_indicadores_en_el_ENS.md',
  '816 OK.md',
  '820-Proteccion_contra_DoS.md',
  '821 1.md',
  '821 2.md',
  '821 3.md',
  '821 5.md',
  '821 6.md',
  '821 7.md',
  '8214.md',
  '821AA.md',
  '822-Procedimientos_de_seguridad-081112.md',
  '822-Procedimientos_de_seguridad-ANEXOI-081112.md',
  '822-Procedimientos_de_seguridad-ANEXOII-081112.md',
  '822-Procedimientos_de_seguridad-ANEXOIII-081112.md',
  '825.md',
  '825-27001_ENS.md',
  '827-Gestion_dispositivos_moviles_ENS.md',
  '834L.md',
  '852 AA.md',
  '852.md',
  '85211.md',
  '858 DD.md',
  '858 E.md',
  '858 RR.md',
  '881 22.md',
  '881.md',
  '881A.md',
  '881B.md',
  '881BC.md',
  '881C.md',
  '881GUIA.md',
  '882L.md',
  '88344.md',
  '884F.md',
  '885C.md',
  '885D.md',
  '885ES.md',
  '887.md',
  '887A.md',
  '887C.md',
  '887E.md',
  '887F.md',
  '887G.md',
  '8881A.md',
  '888C.md',
  '889-77.md',
  '889A.md',
  '889B.md',
  '889C.md',
  'Anexo III. Plan_Adecuación Diputaciones.md',
  'BOE-003_Codigo_de_la_Funcion_Publica.md',
  'BOE-029_Codigo_de_Administracion_Electronica.md',
  'BOE-031_Codigo_de_Contratos_del_Sector_Publico.md',
  'BOE-044_Codigo_de_Derecho_Administrativo.md',
  'BOE-282_Procedimiento_Administrativo_Comun.md',
  'BOE-A-2016-10108.md',
  'BOE-A-2016-10109.md',
  'BOE-A-2018-4573.md',
  'BOE-A-2018-5370.md',
  'CCN_STIC_836_Seguridad en VPN en el marco del ENS.md',
  'CCN-STIC 808.md',
  'CCN-STIC 819 Medidas Compensatorias.md',
  'CCN-STIC 823 Annex I - Clauses and Service Level Agreements-EN_.md',
  'CCN-STIC 831 Registro actividad de los usuarios.md',
  'CCN-STIC 883D - Perfil Cumplimiento Específico Diputaciones.md',
  'CCN-STIC 884D.md',
  'CCN-STIC 885A.md',
  'CCN-STIC 885B.md',
  'CCN-STIC 885E.md',
  'CCN-STIC 885F.md',
  'CCN-STIC 885G.md',
  'CCN-STIC 886 Perfil Cumplimiento Especifico para LORETO-NG BASE.md',
  'CCN-STIC 887D.md',
  'CCN-STIC 888B.md',
  'CCN-STIC 888-PERFIL_DE_CUMPLIMIENTO_GOOGLE_.md',
  'CCN-STIC 889J.md',
  'CCN-STIC 889K.md',
  'CCN-STIC 890.md',
  'CCN-STIC 896-PCE-SSG.md',
  'CCN-STIC 897.md',
  'CCN-STIC-817 National Security Framework cyber-incident management.md',
  'CCN-STIC-817_Gestion_de_Ciberincidentes_ENS.md',
  'CCN-STIC-823 Use of Cloud services-EN_.md',
  'CCN-STIC-826_Implementacion de Seguridad Nextcloud.md',
  'CCN-STIC-835 Borrado de Metadatos en el marco del ENS.md',
  'CCN-STIC-837 ENS - Seguridad en Bluetooth.md',
  'CCN-STIC-884A - Guia de Configuracion segura para Azure.md',
  'CCN-STIC-884B - Secure configuration guide for Azure Kubernetes Services EN.md',
  'CCN-STIC-884E - Guia de Configuracion segura para Azure Sentinel_.md',
  'CCN-STIC-885 - Office 365 Compliance Profile EN_.md',
  'CCN-STIC-885D - Secure configuration guide for Microsoft Teams EN.md',
  'CCN-STIC-889G.md',
  'CCN-STIC-889H.md',
  'CCN-STIC-889I.md',
  'ea89bfb7-7977-4f87-8164-7389948d9a5f.md',
  'file.html.md',
  'ORACLE889.md',
  'RD 311.2022.md',
  'SCP852.md',
]

const TOTAL_NORMAS_ESPERADAS = 121

// =============================================================================
// Lista maestra de controles ENS (marco de referencia del Anexo II del RD 311/2022)
// Se usa para detectar controles sin cobertura en el informe.
// =============================================================================
const CONTROLES_ENS_REFERENCIA: string[] = [
  // Marco organizativo [org]
  'org.1', 'org.2', 'org.3', 'org.4',
  // Marco operacional [op]
  'op.pl.1', 'op.pl.2', 'op.pl.3', 'op.pl.4', 'op.pl.5',
  'op.acc.1', 'op.acc.2', 'op.acc.3', 'op.acc.4', 'op.acc.5', 'op.acc.6', 'op.acc.7',
  'op.exp.1', 'op.exp.2', 'op.exp.3', 'op.exp.4', 'op.exp.5', 'op.exp.6', 'op.exp.7',
  'op.exp.8', 'op.exp.9', 'op.exp.10', 'op.exp.11',
  'op.ext.1', 'op.ext.2', 'op.ext.3', 'op.ext.4',
  'op.nub.1', 'op.nub.2',
  'op.cont.1', 'op.cont.2', 'op.cont.3', 'op.cont.4',
  'op.mon.1', 'op.mon.2', 'op.mon.3',
  // Medidas de proteccion [mp]
  'mp.if.1', 'mp.if.2', 'mp.if.3', 'mp.if.4', 'mp.if.5', 'mp.if.6', 'mp.if.7',
  'mp.per.1', 'mp.per.2', 'mp.per.3', 'mp.per.4',
  'mp.eq.1', 'mp.eq.2', 'mp.eq.3', 'mp.eq.4',
  'mp.com.1', 'mp.com.2', 'mp.com.3', 'mp.com.4',
  'mp.si.1', 'mp.si.2', 'mp.si.3', 'mp.si.4', 'mp.si.5',
  'mp.sw.1', 'mp.sw.2',
  'mp.info.1', 'mp.info.2', 'mp.info.3', 'mp.info.4', 'mp.info.5', 'mp.info.6',
  'mp.s.1', 'mp.s.2', 'mp.s.3', 'mp.s.4',
]

// =============================================================================
// Tipos internos
// =============================================================================

interface CuerpoSolicitud {
  accion: 'iniciar' | 'continuar' | 'estado' | 'cobertura'
  forzar_reprocesar?: boolean
}

interface EstadoIngesta {
  total_normas: number
  completadas: number
  fallidas: number
  pendientes: number
  en_proceso: number
  porcentaje_progreso: number
  normas_fallidas: NormaFallida[]
  ingesta_completa: boolean
}

interface NormaFallida {
  nombre_archivo: string
  error_mensaje: string | null
  intentos: number
  estado_ingesta: string
}

interface NormaPendiente {
  id: string
  nombre_archivo: string
  estado_ingesta: string
  intentos: number
}

interface ResultadoIniciar {
  normas_registradas: number
  normas_ya_existentes: number
  normas_reiniciadas: number
  total: number
}

interface ResultadoContinuar {
  normas_pendientes: NormaPendiente[]
  total_pendientes: number
  total_completadas: number
  total_fallidas_descartadas: number
  mensaje: string
}

interface EstadisticaCobertura {
  control_id: string
  total_requisitos: number
  normas_fuente: string[]
}

interface InformeCobertura {
  total_normas: number
  normas_completadas: number
  normas_fallidas: number
  total_requisitos: number
  controles_cubiertos: number
  controles_sin_cobertura: string[]
  normas_sin_requisitos: string[]
  estadisticas: Record<string, unknown>
}

// =============================================================================
// Funcion auxiliar: respuesta JSON con CORS
// =============================================================================

function respuestaJSON(cuerpo: unknown, estado = 200): Response {
  return new Response(JSON.stringify(cuerpo), {
    status: estado,
    headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
  })
}

function respuestaError(mensaje: string, estado = 500): Response {
  console.error(`[ingestar-normas] Error: ${mensaje}`)
  return respuestaJSON({ error: mensaje }, estado)
}

// =============================================================================
// Accion: "estado"
// Devuelve el resumen actual de la ingesta de normas.
// =============================================================================

async function manejarEstado(): Promise<Response> {
  const supabase = crearClienteServicio()

  // Contar normas por estado
  const { data: registros, error: errorConsulta } = await supabase
    .from('norma_metadata')
    .select('nombre_archivo, estado_ingesta, error_mensaje, intentos')

  if (errorConsulta) {
    return respuestaError(`Error consultando norma_metadata: ${errorConsulta.message}`)
  }

  const totalRegistros = registros?.length ?? 0
  const completadas = registros?.filter((r) => r.estado_ingesta === 'COMPLETADA').length ?? 0
  const fallidas = registros?.filter((r) => r.estado_ingesta === 'FALLIDA').length ?? 0
  const enProceso = registros?.filter((r) =>
    ['LIMPIANDO', 'CLASIFICANDO', 'EXTRAYENDO'].includes(r.estado_ingesta)
  ).length ?? 0
  const pendientes = registros?.filter((r) => r.estado_ingesta === 'PENDIENTE').length ?? 0

  const normasFallidas: NormaFallida[] = registros
    ?.filter((r) => r.estado_ingesta === 'FALLIDA')
    .map((r) => ({
      nombre_archivo: r.nombre_archivo,
      error_mensaje: r.error_mensaje,
      intentos: r.intentos,
      estado_ingesta: r.estado_ingesta,
    })) ?? []

  // Calcular normas no registradas aun
  const nombresRegistrados = new Set(registros?.map((r) => r.nombre_archivo) ?? [])
  const normasNoRegistradas = MANIFIESTO_NORMAS.filter(
    (nombre) => !nombresRegistrados.has(nombre)
  ).length

  const totalEfectivo = totalRegistros + normasNoRegistradas
  const porcentajeProgreso = totalEfectivo > 0
    ? Math.round((completadas / TOTAL_NORMAS_ESPERADAS) * 100)
    : 0

  const ingestaCompleta = completadas === TOTAL_NORMAS_ESPERADAS

  const estadoIngesta: EstadoIngesta = {
    total_normas: TOTAL_NORMAS_ESPERADAS,
    completadas,
    fallidas,
    pendientes: pendientes + normasNoRegistradas,
    en_proceso: enProceso,
    porcentaje_progreso: porcentajeProgreso,
    normas_fallidas: normasFallidas,
    ingesta_completa: ingestaCompleta,
  }

  // Si la ingesta esta completa, incluir resumen de cobertura
  if (ingestaCompleta) {
    const { data: ultimoInforme } = await supabase
      .from('informe_cobertura')
      .select('*')
      .order('creado_en', { ascending: false })
      .limit(1)
      .single()

    if (ultimoInforme) {
      return respuestaJSON({
        ...estadoIngesta,
        ultimo_informe_cobertura: ultimoInforme,
      })
    }
  }

  return respuestaJSON(estadoIngesta)
}

// =============================================================================
// Accion: "iniciar"
// Registra las 121 normas en norma_metadata si no existen.
// Con forzar_reprocesar=true, reinicia las completadas a PENDIENTE.
// =============================================================================

async function manejarIniciar(forzarReprocesar: boolean): Promise<Response> {
  const supabase = crearClienteServicio()

  // Obtener normas que ya existen en la BD
  const { data: existentes, error: errorConsulta } = await supabase
    .from('norma_metadata')
    .select('nombre_archivo, estado_ingesta')

  if (errorConsulta) {
    return respuestaError(`Error consultando norma_metadata: ${errorConsulta.message}`)
  }

  const mapaExistentes = new Map<string, string>()
  for (const registro of existentes ?? []) {
    mapaExistentes.set(registro.nombre_archivo, registro.estado_ingesta)
  }

  let normasRegistradas = 0
  let normasYaExistentes = 0
  let normasReiniciadas = 0

  for (const nombreArchivo of MANIFIESTO_NORMAS) {
    const estadoActual = mapaExistentes.get(nombreArchivo)

    if (!estadoActual) {
      // No existe: insertar como PENDIENTE
      const { error: errorInsert } = await supabase
        .from('norma_metadata')
        .insert({
          nombre_archivo: nombreArchivo,
          ccn_stic_id: extraerCcnSticId(nombreArchivo),
          titulo: extraerTituloDeNombreArchivo(nombreArchivo),
          categoria: clasificarCategoriaPorNombre(nombreArchivo),
          estado_ingesta: 'PENDIENTE',
          intentos: 0,
        })

      if (errorInsert) {
        // Si es un conflicto de unicidad, ignorar (race condition)
        if (!errorInsert.message.includes('duplicate key') &&
            !errorInsert.message.includes('unique constraint')) {
          console.error(`Error insertando ${nombreArchivo}: ${errorInsert.message}`)
        }
      } else {
        normasRegistradas++
      }
    } else if (estadoActual === 'COMPLETADA' && forzarReprocesar) {
      // Reiniciar a PENDIENTE si se fuerza el reprocesamiento
      const { error: errorUpdate } = await supabase
        .from('norma_metadata')
        .update({
          estado_ingesta: 'PENDIENTE',
          intentos: 0,
          error_mensaje: null,
          texto_limpio: null,
          total_requisitos: 0,
          procesado_en: null,
        })
        .eq('nombre_archivo', nombreArchivo)

      if (!errorUpdate) {
        normasReiniciadas++
      }
    } else if (estadoActual === 'COMPLETADA') {
      normasYaExistentes++
    } else if (estadoActual === 'FALLIDA') {
      // Las fallidas se reinician automaticamente si no han superado 3 intentos
      // (lo maneja "continuar"). No hacer nada aqui.
      normasYaExistentes++
    } else {
      // PENDIENTE u otro estado transitorio: no tocar
      normasYaExistentes++
    }
  }

  const resultado: ResultadoIniciar = {
    normas_registradas: normasRegistradas,
    normas_ya_existentes: normasYaExistentes,
    normas_reiniciadas: normasReiniciadas,
    total: TOTAL_NORMAS_ESPERADAS,
  }

  return respuestaJSON(resultado)
}

// =============================================================================
// Accion: "continuar"
// Devuelve la lista de normas pendientes/fallidas con intentos < 3 para que
// el frontend las procese una a una via extraer-requisitos.
// =============================================================================

async function manejarContinuar(): Promise<Response> {
  const supabase = crearClienteServicio()
  const MAX_INTENTOS = 3

  // Obtener normas que necesitan procesamiento
  const { data: pendientes, error: errorPendientes } = await supabase
    .from('norma_metadata')
    .select('id, nombre_archivo, estado_ingesta, intentos')
    .in('estado_ingesta', ['PENDIENTE', 'FALLIDA'])
    .lt('intentos', MAX_INTENTOS)
    .order('nombre_archivo', { ascending: true })

  if (errorPendientes) {
    return respuestaError(`Error consultando normas pendientes: ${errorPendientes.message}`)
  }

  // Obtener conteo de completadas
  const { count: totalCompletadas } = await supabase
    .from('norma_metadata')
    .select('*', { count: 'exact', head: true })
    .eq('estado_ingesta', 'COMPLETADA')

  // Obtener conteo de fallidas descartadas (intentos >= 3)
  const { count: totalFallidasDescartadas } = await supabase
    .from('norma_metadata')
    .select('*', { count: 'exact', head: true })
    .eq('estado_ingesta', 'FALLIDA')
    .gte('intentos', MAX_INTENTOS)

  const normasPendientes: NormaPendiente[] = (pendientes ?? []).map((r) => ({
    id: r.id,
    nombre_archivo: r.nombre_archivo,
    estado_ingesta: r.estado_ingesta,
    intentos: r.intentos,
  }))

  const totalPendientes = normasPendientes.length
  let mensaje: string

  if (totalPendientes === 0 && (totalCompletadas ?? 0) === TOTAL_NORMAS_ESPERADAS) {
    mensaje = `Ingesta completa: ${totalCompletadas} de ${TOTAL_NORMAS_ESPERADAS} normas procesadas.`
  } else if (totalPendientes === 0) {
    mensaje = `No hay normas pendientes de procesar. Completadas: ${totalCompletadas ?? 0}, fallidas descartadas (>= ${MAX_INTENTOS} intentos): ${totalFallidasDescartadas ?? 0}.`
  } else {
    mensaje = `${totalPendientes} normas pendientes de procesar. El frontend debe enviar cada archivo a extraer-requisitos.`
  }

  const resultado: ResultadoContinuar = {
    normas_pendientes: normasPendientes,
    total_pendientes: totalPendientes,
    total_completadas: totalCompletadas ?? 0,
    total_fallidas_descartadas: totalFallidasDescartadas ?? 0,
    mensaje,
  }

  return respuestaJSON(resultado)
}

// =============================================================================
// Accion: "cobertura"
// Genera un informe de cobertura y lo almacena en informe_cobertura.
// =============================================================================

async function manejarCobertura(): Promise<Response> {
  const supabase = crearClienteServicio()

  // 1. Obtener estadisticas de cobertura por control via RPC
  const { data: estadisticasRaw, error: errorEstadisticas } = await supabase
    .rpc('obtener_estadisticas_cobertura')

  if (errorEstadisticas) {
    return respuestaError(`Error obteniendo estadisticas de cobertura: ${errorEstadisticas.message}`)
  }

  const estadisticas: EstadisticaCobertura[] = (estadisticasRaw ?? []) as EstadisticaCobertura[]

  // 2. Determinar controles cubiertos vs sin cobertura
  const conjuntoControlesCubiertos = new Set<string>(
    estadisticas.map((e) => e.control_id)
  )

  const controlesSinCobertura = CONTROLES_ENS_REFERENCIA.filter(
    (control) => !conjuntoControlesCubiertos.has(control)
  )

  // 3. Obtener conteos de norma_metadata
  const { data: todasNormas, error: errorNormas } = await supabase
    .from('norma_metadata')
    .select('nombre_archivo, estado_ingesta, total_requisitos')

  if (errorNormas) {
    return respuestaError(`Error consultando norma_metadata: ${errorNormas.message}`)
  }

  const normasCompletadas = (todasNormas ?? []).filter(
    (n) => n.estado_ingesta === 'COMPLETADA'
  ).length
  const normasFallidas = (todasNormas ?? []).filter(
    (n) => n.estado_ingesta === 'FALLIDA'
  ).length

  // 4. Normas completadas sin requisitos extraidos
  const normasSinRequisitos = (todasNormas ?? [])
    .filter((n) => n.estado_ingesta === 'COMPLETADA' && (n.total_requisitos ?? 0) === 0)
    .map((n) => n.nombre_archivo)

  // 5. Contar total de requisitos unicos (no duplicados)
  const { count: totalRequisitos } = await supabase
    .from('norma_requisitos')
    .select('*', { count: 'exact', head: true })
    .is('duplicado_de', null)

  // 6. Construir estadisticas detalladas por control
  const estadisticasPorControl: Record<string, { total_requisitos: number; normas_fuente: string[] }> = {}
  for (const est of estadisticas) {
    estadisticasPorControl[est.control_id] = {
      total_requisitos: Number(est.total_requisitos),
      normas_fuente: est.normas_fuente,
    }
  }

  // 7. Calcular distribucion por categoria de control
  const distribucionCategoria: Record<string, { cubiertos: number; total: number }> = {}
  for (const control of CONTROLES_ENS_REFERENCIA) {
    // Extraer la categoria del control (ej: "org" de "org.1", "op.pl" de "op.pl.1")
    const partes = control.split('.')
    const categoria = partes.length >= 3
      ? `${partes[0]}.${partes[1]}`
      : partes[0]

    if (!distribucionCategoria[categoria]) {
      distribucionCategoria[categoria] = { cubiertos: 0, total: 0 }
    }
    distribucionCategoria[categoria].total++

    if (conjuntoControlesCubiertos.has(control)) {
      distribucionCategoria[categoria].cubiertos++
    }
  }

  // 8. Construir el informe completo
  const informe: InformeCobertura = {
    total_normas: TOTAL_NORMAS_ESPERADAS,
    normas_completadas: normasCompletadas,
    normas_fallidas: normasFallidas,
    total_requisitos: totalRequisitos ?? 0,
    controles_cubiertos: conjuntoControlesCubiertos.size,
    controles_sin_cobertura: controlesSinCobertura,
    normas_sin_requisitos: normasSinRequisitos,
    estadisticas: {
      total_controles_referencia: CONTROLES_ENS_REFERENCIA.length,
      porcentaje_cobertura_controles: CONTROLES_ENS_REFERENCIA.length > 0
        ? Math.round((conjuntoControlesCubiertos.size / CONTROLES_ENS_REFERENCIA.length) * 10000) / 100
        : 0,
      por_control: estadisticasPorControl,
      distribucion_categoria: distribucionCategoria,
      fecha_generacion: new Date().toISOString(),
    },
  }

  // 9. Almacenar en la tabla informe_cobertura
  const { data: informeInsertado, error: errorInsert } = await supabase
    .from('informe_cobertura')
    .insert({
      total_normas: informe.total_normas,
      normas_completadas: informe.normas_completadas,
      normas_fallidas: informe.normas_fallidas,
      total_requisitos: informe.total_requisitos,
      controles_cubiertos: informe.controles_cubiertos,
      controles_sin_cobertura: informe.controles_sin_cobertura,
      normas_sin_requisitos: informe.normas_sin_requisitos,
      estadisticas: informe.estadisticas,
    })
    .select()
    .single()

  if (errorInsert) {
    return respuestaError(`Error almacenando informe de cobertura: ${errorInsert.message}`)
  }

  return respuestaJSON({
    mensaje: 'Informe de cobertura generado correctamente.',
    informe: informeInsertado,
    resumen: {
      normas_procesadas: `${normasCompletadas}/${TOTAL_NORMAS_ESPERADAS}`,
      requisitos_extraidos: totalRequisitos ?? 0,
      controles_cubiertos: `${conjuntoControlesCubiertos.size}/${CONTROLES_ENS_REFERENCIA.length}`,
      controles_sin_cobertura: controlesSinCobertura.length,
      normas_sin_requisitos: normasSinRequisitos.length,
    },
  })
}

// =============================================================================
// Funciones auxiliares para clasificacion inicial
// =============================================================================

/**
 * Extrae un identificador CCN-STIC aproximado a partir del nombre de archivo.
 * Ejemplo: "807-Criptologia_de_empleo_ENS.md" -> "CCN-STIC-807"
 *          "CCN-STIC 885A.md" -> "CCN-STIC-885A"
 *          "BOE-A-2018-4573.md" -> "BOE-A-2018-4573"
 *          "RD 311.2022.md" -> "RD-311/2022"
 */
function extraerCcnSticId(nombreArchivo: string): string {
  const nombre = nombreArchivo.replace(/\.md$/, '')

  // Ya tiene prefijo CCN-STIC o _CCN
  const coincidenciaCcn = nombre.match(/^_?CCN[-_]STIC[-_ ]*(\d{3}\w*)/i)
  if (coincidenciaCcn) {
    return `CCN-STIC-${coincidenciaCcn[1]}`
  }

  // BOE
  const coincidenciaBoe = nombre.match(/^(BOE-A-\d{4}-\d+)/)
  if (coincidenciaBoe) {
    return coincidenciaBoe[1]
  }

  // RD (Real Decreto)
  const coincidenciaRd = nombre.match(/^RD\s+(\d+)\.(\d+)/)
  if (coincidenciaRd) {
    return `RD-${coincidenciaRd[1]}/${coincidenciaRd[2]}`
  }

  // Numero al inicio (tipico de guias 800-899)
  const coincidenciaNum = nombre.match(/^(\d{3}\w*)/)
  if (coincidenciaNum) {
    return `CCN-STIC-${coincidenciaNum[1]}`
  }

  // Archivo con UUID u otros
  if (nombre.match(/^[0-9a-f]{8}-/)) {
    return `DESCONOCIDO-${nombre.substring(0, 8)}`
  }

  // Otros archivos especiales
  if (nombre.startsWith('ORACLE')) {
    return `CCN-STIC-${nombre}`
  }
  if (nombre.startsWith('SCP')) {
    return `CCN-STIC-${nombre}`
  }
  if (nombre.startsWith('Anexo')) {
    return `ANEXO-ENS`
  }

  return `DESCONOCIDO-${nombre.substring(0, 30)}`
}

/**
 * Extrae un titulo legible a partir del nombre de archivo.
 * Ejemplo: "807-Criptologia_de_empleo_ENS.md" -> "Criptologia de empleo ENS"
 */
function extraerTituloDeNombreArchivo(nombreArchivo: string): string {
  let nombre = nombreArchivo.replace(/\.md$/, '')

  // Eliminar prefijos comunes
  nombre = nombre.replace(/^_?CCN[-_]STIC[-_ ]*/i, '')
  nombre = nombre.replace(/^BOE-A-\d{4}-\d+\s*/, '')

  // Eliminar numero de guia al inicio (800-899 etc.)
  nombre = nombre.replace(/^\d{3,5}\w*[-_ ]*/, '')

  // Reemplazar guiones bajos y guiones multiples por espacios
  nombre = nombre.replace(/_/g, ' ').replace(/-+/g, ' ')

  // Limpiar espacios multiples
  nombre = nombre.replace(/\s+/g, ' ').trim()

  // Si quedo vacio, usar el nombre de archivo original
  if (!nombre) {
    nombre = nombreArchivo.replace(/\.md$/, '')
  }

  return nombre
}

/**
 * Clasificacion basica de categoria a partir del nombre de archivo.
 * Categorias: 'guia_ens', 'perfil_cumplimiento', 'legislacion', 'nube',
 *             'procedimiento', 'glosario', 'otro'
 */
function clasificarCategoriaPorNombre(nombreArchivo: string): string {
  const nombreLower = nombreArchivo.toLowerCase()

  // Legislacion: BOE, RD
  if (nombreLower.startsWith('boe-') || nombreLower.startsWith('rd ')) {
    return 'legislacion'
  }

  // Perfiles de cumplimiento
  if (nombreLower.includes('perfil') || nombreLower.includes('cumplimiento') ||
      nombreLower.includes('compliance')) {
    return 'perfil_cumplimiento'
  }

  // Nube
  if (nombreLower.includes('azure') || nombreLower.includes('oracle') ||
      nombreLower.includes('google') || nombreLower.includes('cloud') ||
      nombreLower.includes('oci') || nombreLower.includes('aws') ||
      nombreLower.includes('nub') || nombreLower.includes('365') ||
      nombreLower.includes('teams') || nombreLower.includes('sentinel') ||
      nombreLower.includes('kubernetes')) {
    return 'nube'
  }

  // Glosario
  if (nombreLower.includes('glosario') || nombreLower.includes('glossary')) {
    return 'glosario'
  }

  // Procedimientos
  if (nombreLower.includes('procedimiento') || nombreLower.includes('procedure')) {
    return 'procedimiento'
  }

  // Guias ENS (por defecto para guias numericas 800-899)
  if (nombreLower.match(/^\d{3}/) || nombreLower.includes('ens') ||
      nombreLower.startsWith('ccn') || nombreLower.startsWith('_ccn')) {
    return 'guia_ens'
  }

  return 'otro'
}

// =============================================================================
// Punto de entrada principal (Deno.serve)
// =============================================================================

Deno.serve(async (req: Request) => {
  // Manejar preflight CORS
  const cors = manejarCors(req)
  if (cors) return cors

  // Solo aceptar POST
  if (req.method !== 'POST') {
    return respuestaError('Metodo no permitido. Use POST.', 405)
  }

  try {
    const cuerpo = await req.json() as CuerpoSolicitud

    if (!cuerpo.accion) {
      return respuestaError('Campo "accion" requerido. Valores validos: "iniciar", "continuar", "estado", "cobertura".', 400)
    }

    const accion = cuerpo.accion
    const forzarReprocesar = cuerpo.forzar_reprocesar ?? false

    console.log(`[ingestar-normas] Accion: ${accion}, forzar_reprocesar: ${forzarReprocesar}`)

    switch (accion) {
      case 'estado':
        return await manejarEstado()

      case 'iniciar':
        return await manejarIniciar(forzarReprocesar)

      case 'continuar':
        return await manejarContinuar()

      case 'cobertura':
        return await manejarCobertura()

      default:
        return respuestaError(
          `Accion desconocida: "${accion}". Valores validos: "iniciar", "continuar", "estado", "cobertura".`,
          400
        )
    }
  } catch (error: unknown) {
    const mensaje = error instanceof Error ? error.message : String(error)

    // Intentar detectar errores de parseo de JSON
    if (mensaje.includes('JSON') || mensaje.includes('Unexpected')) {
      return respuestaError('Cuerpo de la solicitud no es JSON valido.', 400)
    }

    return respuestaError(`Error interno: ${mensaje}`, 500)
  }
})
