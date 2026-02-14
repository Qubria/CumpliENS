/**
 * informe-cobertura/index.ts
 *
 * Edge Function dedicada a generar un informe de cobertura tras la ingesta
 * de normas. Analiza que controles ENS del Anexo II (RD 311/2022) estan
 * cubiertos por los requisitos extraidos y detecta las brechas.
 *
 * Recibe un POST sin cuerpo (o cuerpo vacio). Devuelve el informe generado.
 *
 * Pasos:
 *   1. Verificar el estado de la ingesta (normas por estado).
 *   2. Obtener estadisticas de cobertura via RPC.
 *   3. Comparar contra los 73 controles del Anexo II.
 *   4. Identificar normas completadas sin requisitos.
 *   5. Calcular estadisticas detalladas.
 *   6. Almacenar el informe en informe_cobertura.
 *   7. Devolver el informe como JSON.
 */

import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { cabecerasCors, manejarCors } from '../_shared/cors.ts'
import { crearClienteServicio } from '../_shared/supabase-client.ts'

// =============================================================================
// Lista maestra de los 73 controles ENS del Anexo II (RD 311/2022)
// =============================================================================

const CONTROLES_ENS_REFERENCIA: string[] = [
  // Marco organizativo [org] — 4 controles
  'org.1', 'org.2', 'org.3', 'org.4',

  // Marco operacional - Planificacion [op.pl] — 5 controles
  'op.pl.1', 'op.pl.2', 'op.pl.3', 'op.pl.4', 'op.pl.5',

  // Marco operacional - Control de acceso [op.acc] — 7 controles
  'op.acc.1', 'op.acc.2', 'op.acc.3', 'op.acc.4', 'op.acc.5', 'op.acc.6', 'op.acc.7',

  // Marco operacional - Explotacion [op.exp] — 11 controles
  'op.exp.1', 'op.exp.2', 'op.exp.3', 'op.exp.4', 'op.exp.5', 'op.exp.6',
  'op.exp.7', 'op.exp.8', 'op.exp.9', 'op.exp.10', 'op.exp.11',

  // Marco operacional - Servicios externos [op.ext] — 3 controles
  'op.ext.1', 'op.ext.2', 'op.ext.3',

  // Marco operacional - Servicios en la nube [op.nub] — 1 control
  'op.nub.1',

  // Marco operacional - Continuidad [op.cont] — 4 controles
  'op.cont.1', 'op.cont.2', 'op.cont.3', 'op.cont.4',

  // Marco operacional - Monitorizacion [op.mon] — 3 controles
  'op.mon.1', 'op.mon.2', 'op.mon.3',

  // Medidas de proteccion - Instalaciones [mp.if] — 7 controles
  'mp.if.1', 'mp.if.2', 'mp.if.3', 'mp.if.4', 'mp.if.5', 'mp.if.6', 'mp.if.7',

  // Medidas de proteccion - Personal [mp.per] — 4 controles
  'mp.per.1', 'mp.per.2', 'mp.per.3', 'mp.per.4',

  // Medidas de proteccion - Equipos [mp.eq] — 3 controles
  'mp.eq.1', 'mp.eq.2', 'mp.eq.3',

  // Medidas de proteccion - Comunicaciones [mp.com] — 4 controles
  'mp.com.1', 'mp.com.2', 'mp.com.3', 'mp.com.4',

  // Medidas de proteccion - Soportes de informacion [mp.si] — 5 controles
  'mp.si.1', 'mp.si.2', 'mp.si.3', 'mp.si.4', 'mp.si.5',

  // Medidas de proteccion - Software [mp.sw] — 2 controles
  'mp.sw.1', 'mp.sw.2',

  // Medidas de proteccion - Informacion [mp.info] — 6 controles
  'mp.info.1', 'mp.info.2', 'mp.info.3', 'mp.info.4', 'mp.info.5', 'mp.info.6',

  // Medidas de proteccion - Servicios [mp.s] — 4 controles
  'mp.s.1', 'mp.s.2', 'mp.s.3', 'mp.s.4',

  // Medidas de proteccion - Copias de seguridad [mp.cop] — 3 controles
  'mp.cop.1', 'mp.cop.2', 'mp.cop.3',
]

const TOTAL_CONTROLES_REFERENCIA = CONTROLES_ENS_REFERENCIA.length // 73

// =============================================================================
// Tipos internos
// =============================================================================

interface EstadisticaCobertura {
  control_id: string
  total_requisitos: number
  normas_fuente: string[]
}

interface DistribucionCategoria {
  cubiertos: number
  total: number
  porcentaje: number
  controles: string[]
  controles_sin_cobertura: string[]
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

interface ConteoEstadoIngesta {
  estado: string
  cantidad: number
}

// =============================================================================
// Funciones auxiliares
// =============================================================================

function respuestaJSON(cuerpo: unknown, estado = 200): Response {
  return new Response(JSON.stringify(cuerpo), {
    status: estado,
    headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
  })
}

function respuestaError(mensaje: string, estado = 500): Response {
  console.error(`[informe-cobertura] Error: ${mensaje}`)
  return respuestaJSON({ error: mensaje }, estado)
}

/**
 * Extrae la categoria de un control ENS.
 * Ejemplos:
 *   "org.1"     -> "org"
 *   "op.pl.1"   -> "op.pl"
 *   "mp.info.3" -> "mp.info"
 */
function extraerCategoriaControl(controlId: string): string {
  const partes = controlId.split('.')
  if (partes.length >= 3) {
    return `${partes[0]}.${partes[1]}`
  }
  return partes[0]
}

// =============================================================================
// Logica principal del informe
// =============================================================================

async function generarInformeCobertura(): Promise<Response> {
  const supabase = crearClienteServicio()

  // ────────────────────────────────────────────────────────────────────────
  // PASO 1: Contar normas por estado de ingesta
  // ────────────────────────────────────────────────────────────────────────
  console.log('[informe-cobertura] Paso 1: Verificando estado de la ingesta...')

  const { data: registrosNormas, error: errorNormas } = await supabase
    .from('norma_metadata')
    .select('nombre_archivo, estado_ingesta, total_requisitos')

  if (errorNormas) {
    return respuestaError(
      `Error consultando norma_metadata: ${errorNormas.message}`
    )
  }

  const normas = registrosNormas ?? []

  // Agrupar por estado
  const conteoPorEstado: Record<string, number> = {}
  for (const norma of normas) {
    const estado = norma.estado_ingesta as string
    conteoPorEstado[estado] = (conteoPorEstado[estado] ?? 0) + 1
  }

  const totalNormas = normas.length
  const normasCompletadas = conteoPorEstado['COMPLETADA'] ?? 0
  const normasFallidas = conteoPorEstado['FALLIDA'] ?? 0
  const normasPendientes = conteoPorEstado['PENDIENTE'] ?? 0
  const normasEnProceso =
    (conteoPorEstado['LIMPIANDO'] ?? 0) +
    (conteoPorEstado['CLASIFICANDO'] ?? 0) +
    (conteoPorEstado['EXTRAYENDO'] ?? 0)

  // Si hay normas pendientes o en proceso, devolver advertencia
  if (normasPendientes > 0 || normasEnProceso > 0) {
    const detalleEstados: ConteoEstadoIngesta[] = Object.entries(conteoPorEstado)
      .map(([estado, cantidad]) => ({ estado, cantidad }))
      .sort((a, b) => b.cantidad - a.cantidad)

    console.log(
      `[informe-cobertura] Advertencia: ingesta incompleta. ` +
      `Pendientes: ${normasPendientes}, en proceso: ${normasEnProceso}`
    )

    return respuestaJSON({
      advertencia: 'La ingesta de normas no esta completa. ' +
        'Hay normas pendientes o en proceso. ' +
        'El informe podria no reflejar la cobertura real.',
      ingesta_completa: false,
      total_normas: totalNormas,
      normas_completadas: normasCompletadas,
      normas_pendientes: normasPendientes,
      normas_en_proceso: normasEnProceso,
      normas_fallidas: normasFallidas,
      detalle_estados: detalleEstados,
    }, 200)
  }

  // ────────────────────────────────────────────────────────────────────────
  // PASO 2: Obtener estadisticas de cobertura via RPC
  // ────────────────────────────────────────────────────────────────────────
  console.log('[informe-cobertura] Paso 2: Obteniendo estadisticas de cobertura...')

  const { data: estadisticasRaw, error: errorEstadisticas } = await supabase
    .rpc('obtener_estadisticas_cobertura')

  if (errorEstadisticas) {
    return respuestaError(
      `Error obteniendo estadisticas de cobertura: ${errorEstadisticas.message}`
    )
  }

  const estadisticasCobertura: EstadisticaCobertura[] =
    (estadisticasRaw ?? []) as EstadisticaCobertura[]

  // Indexar por control_id para acceso rapido
  const mapaCoberturaControl = new Map<string, EstadisticaCobertura>()
  for (const est of estadisticasCobertura) {
    mapaCoberturaControl.set(est.control_id, est)
  }

  // ────────────────────────────────────────────────────────────────────────
  // PASO 3: Comparar contra los 73 controles del Anexo II
  // ────────────────────────────────────────────────────────────────────────
  console.log('[informe-cobertura] Paso 3: Comparando contra controles de referencia...')

  const conjuntoControlesCubiertos = new Set<string>()
  const controlesSinCobertura: string[] = []

  for (const controlId of CONTROLES_ENS_REFERENCIA) {
    if (mapaCoberturaControl.has(controlId)) {
      conjuntoControlesCubiertos.add(controlId)
    } else {
      controlesSinCobertura.push(controlId)
    }
  }

  const totalControlesCubiertos = conjuntoControlesCubiertos.size

  console.log(
    `[informe-cobertura] Controles cubiertos: ${totalControlesCubiertos}/${TOTAL_CONTROLES_REFERENCIA}. ` +
    `Sin cobertura: ${controlesSinCobertura.length}`
  )

  // ────────────────────────────────────────────────────────────────────────
  // PASO 4: Identificar normas completadas sin requisitos
  // ────────────────────────────────────────────────────────────────────────
  console.log('[informe-cobertura] Paso 4: Identificando normas sin requisitos...')

  const normasSinRequisitos = normas
    .filter(
      (n) =>
        n.estado_ingesta === 'COMPLETADA' &&
        (n.total_requisitos ?? 0) === 0
    )
    .map((n) => n.nombre_archivo)

  console.log(
    `[informe-cobertura] Normas completadas sin requisitos: ${normasSinRequisitos.length}`
  )

  // ────────────────────────────────────────────────────────────────────────
  // PASO 5: Calcular estadisticas detalladas
  // ────────────────────────────────────────────────────────────────────────
  console.log('[informe-cobertura] Paso 5: Calculando estadisticas...')

  // 5a. Total de requisitos unicos (sin duplicados)
  const { count: totalRequisitosUnicos } = await supabase
    .from('norma_requisitos')
    .select('*', { count: 'exact', head: true })
    .is('duplicado_de', null)

  const totalRequisitos = totalRequisitosUnicos ?? 0

  // 5b. Promedio de requisitos por norma (solo normas completadas con requisitos > 0)
  const normasConRequisitos = normas.filter(
    (n) =>
      n.estado_ingesta === 'COMPLETADA' &&
      (n.total_requisitos ?? 0) > 0
  )

  const sumaRequisitosNormas = normasConRequisitos.reduce(
    (acumulador, n) => acumulador + (n.total_requisitos ?? 0),
    0
  )

  const promedioRequisitosPorNorma =
    normasConRequisitos.length > 0
      ? Math.round((sumaRequisitosNormas / normasConRequisitos.length) * 100) / 100
      : 0

  // 5c. Distribucion por categoria de control
  const distribucionCategoria: Record<string, DistribucionCategoria> = {}

  for (const controlId of CONTROLES_ENS_REFERENCIA) {
    const categoria = extraerCategoriaControl(controlId)

    if (!distribucionCategoria[categoria]) {
      distribucionCategoria[categoria] = {
        cubiertos: 0,
        total: 0,
        porcentaje: 0,
        controles: [],
        controles_sin_cobertura: [],
      }
    }

    distribucionCategoria[categoria].total++
    distribucionCategoria[categoria].controles.push(controlId)

    if (conjuntoControlesCubiertos.has(controlId)) {
      distribucionCategoria[categoria].cubiertos++
    } else {
      distribucionCategoria[categoria].controles_sin_cobertura.push(controlId)
    }
  }

  // Calcular porcentajes por categoria
  for (const categoria of Object.keys(distribucionCategoria)) {
    const datos = distribucionCategoria[categoria]
    datos.porcentaje =
      datos.total > 0
        ? Math.round((datos.cubiertos / datos.total) * 10000) / 100
        : 0
  }

  // 5d. Estadisticas detalladas por control (requisitos y normas fuente)
  const estadisticasPorControl: Record<
    string,
    { total_requisitos: number; normas_fuente: string[] }
  > = {}

  for (const est of estadisticasCobertura) {
    estadisticasPorControl[est.control_id] = {
      total_requisitos: Number(est.total_requisitos),
      normas_fuente: est.normas_fuente,
    }
  }

  // 5e. Controles con mas y menos cobertura
  const controlesOrdenadosPorRequisitos = estadisticasCobertura
    .filter((e) => CONTROLES_ENS_REFERENCIA.includes(e.control_id))
    .sort((a, b) => Number(b.total_requisitos) - Number(a.total_requisitos))

  const controlesMasCobertura = controlesOrdenadosPorRequisitos
    .slice(0, 10)
    .map((e) => ({
      control_id: e.control_id,
      total_requisitos: Number(e.total_requisitos),
      total_normas_fuente: e.normas_fuente.length,
    }))

  const controlesMenosCobertura = controlesOrdenadosPorRequisitos
    .filter((e) => Number(e.total_requisitos) > 0)
    .slice(-10)
    .reverse()
    .map((e) => ({
      control_id: e.control_id,
      total_requisitos: Number(e.total_requisitos),
      total_normas_fuente: e.normas_fuente.length,
    }))

  // 5f. Porcentaje de cobertura global
  const porcentajeCoberturaGlobal =
    TOTAL_CONTROLES_REFERENCIA > 0
      ? Math.round(
          (totalControlesCubiertos / TOTAL_CONTROLES_REFERENCIA) * 10000
        ) / 100
      : 0

  // ────────────────────────────────────────────────────────────────────────
  // PASO 6: Almacenar el informe en informe_cobertura
  // ────────────────────────────────────────────────────────────────────────
  console.log('[informe-cobertura] Paso 6: Almacenando informe en la base de datos...')

  const estadisticasCompletas = {
    total_controles_referencia: TOTAL_CONTROLES_REFERENCIA,
    porcentaje_cobertura_global: porcentajeCoberturaGlobal,
    promedio_requisitos_por_norma: promedioRequisitosPorNorma,
    total_normas_con_requisitos: normasConRequisitos.length,
    total_normas_sin_requisitos: normasSinRequisitos.length,
    distribucion_categoria: distribucionCategoria,
    por_control: estadisticasPorControl,
    controles_mas_cobertura: controlesMasCobertura,
    controles_menos_cobertura: controlesMenosCobertura,
    conteo_por_estado_ingesta: conteoPorEstado,
    fecha_generacion: new Date().toISOString(),
  }

  const informe: InformeCobertura = {
    total_normas: totalNormas,
    normas_completadas: normasCompletadas,
    normas_fallidas: normasFallidas,
    total_requisitos: totalRequisitos,
    controles_cubiertos: totalControlesCubiertos,
    controles_sin_cobertura: controlesSinCobertura,
    normas_sin_requisitos: normasSinRequisitos,
    estadisticas: estadisticasCompletas,
  }

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
    return respuestaError(
      `Error almacenando informe de cobertura: ${errorInsert.message}`
    )
  }

  console.log(
    `[informe-cobertura] Informe almacenado con id: ${informeInsertado.id}`
  )

  // ────────────────────────────────────────────────────────────────────────
  // PASO 7: Devolver el informe como JSON
  // ────────────────────────────────────────────────────────────────────────
  console.log('[informe-cobertura] Paso 7: Generacion completada.')

  return respuestaJSON({
    mensaje: 'Informe de cobertura generado correctamente.',
    informe: informeInsertado,
    resumen: {
      normas_procesadas: `${normasCompletadas}/${totalNormas}`,
      normas_fallidas: normasFallidas,
      requisitos_unicos: totalRequisitos,
      promedio_requisitos_por_norma: promedioRequisitosPorNorma,
      controles_cubiertos: `${totalControlesCubiertos}/${TOTAL_CONTROLES_REFERENCIA}`,
      porcentaje_cobertura: `${porcentajeCoberturaGlobal}%`,
      controles_sin_cobertura: controlesSinCobertura.length,
      normas_sin_requisitos: normasSinRequisitos.length,
    },
  })
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
    // Consumir el cuerpo si existe (se acepta vacio)
    try {
      await req.json()
    } catch {
      // Cuerpo vacio o no-JSON: aceptable, no se necesitan parametros
    }

    return await generarInformeCobertura()
  } catch (error: unknown) {
    const mensajeError = error instanceof Error ? error.message : String(error)
    console.error(`[informe-cobertura] Error interno: ${mensajeError}`)
    return respuestaError(`Error interno: ${mensajeError}`, 500)
  }
})
