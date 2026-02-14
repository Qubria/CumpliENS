import { supabase } from '@/config/supabase'
import type { BaseDatos } from '@/types/database'
import type { DatosRecursoFormulario } from '@/types/recurso'

type FilaAnalisis = BaseDatos['public']['Tables']['analisis']['Row']
type FilaHallazgo = BaseDatos['public']['Tables']['hallazgos_analisis']['Row']
type FilaRegistroPipeline = BaseDatos['public']['Tables']['registro_pipeline']['Row']
type FilaDatosRecurso = BaseDatos['public']['Tables']['datos_recurso']['Row']

export type AnalisisConDocumento = FilaAnalisis & {
  documento_objetivo: { id: string; nombre: string } | null
}

export async function crearAnalisis(
  organizacionId: string,
  usuarioId: string,
  documentoObjetivoId: string,
  documentoTecnicoId: string,
  datosRecurso: DatosRecursoFormulario
): Promise<string> {
  // 1. Crear el analisis con ambos documentos
  const { data, error } = await supabase
    .from('analisis')
    .insert({
      organizacion_id: organizacionId,
      creado_por: usuarioId,
      documento_objetivo_id: documentoObjetivoId,
      documento_tecnico_id: documentoTecnicoId,
      documentos_referencia_ids: [],
      estado: 'PENDIENTE',
    })
    .select('id')
    .single()

  if (error || !data) {
    throw new Error(`Error al crear analisis: ${error?.message ?? 'Error desconocido'}`)
  }

  const analisisId = data.id as string

  // 2. Insertar datos del recurso (formulario del recurrente)
  const { error: errorRecurso } = await supabase
    .from('datos_recurso')
    .insert({
      analisis_id: analisisId,
      tribunal_competente: datosRecurso.tribunal_competente,
      tribunal_direccion: datosRecurso.tribunal_direccion ?? null,
      recurrente_denominacion: datosRecurso.recurrente_denominacion,
      recurrente_cif: datosRecurso.recurrente_cif,
      recurrente_domicilio: datosRecurso.recurrente_domicilio,
      recurrente_registro_mercantil: datosRecurso.recurrente_registro_mercantil ?? null,
      recurrente_objeto_social: datosRecurso.recurrente_objeto_social ?? null,
      recurrente_cnae: datosRecurso.recurrente_cnae ?? null,
      recurrente_email: datosRecurso.recurrente_email ?? null,
      recurrente_telefono: datosRecurso.recurrente_telefono ?? null,
      representante_nombre: datosRecurso.representante_nombre,
      representante_titulo: datosRecurso.representante_titulo,
      representante_facultades: datosRecurso.representante_facultades ?? null,
      expediente_numero: datosRecurso.expediente_numero,
      expediente_denominacion: datosRecurso.expediente_denominacion,
      expediente_tipo_contractual: datosRecurso.expediente_tipo_contractual,
      expediente_procedimiento: datosRecurso.expediente_procedimiento,
      expediente_valor_estimado: datosRecurso.expediente_valor_estimado ?? null,
      expediente_presupuesto_base: datosRecurso.expediente_presupuesto_base ?? null,
      expediente_duracion: datosRecurso.expediente_duracion ?? null,
      expediente_cpv: datosRecurso.expediente_cpv ?? null,
      organo_contratacion: datosRecurso.organo_contratacion,
      organo_nivel: datosRecurso.organo_nivel ?? null,
      fecha_publicacion_perfil: datosRecurso.fecha_publicacion_perfil ?? null,
      fecha_publicacion_doue: datosRecurso.fecha_publicacion_doue ?? null,
      es_contrato_sara: datosRecurso.es_contrato_sara ?? false,
      dies_a_quo: datosRecurso.dies_a_quo ?? null,
      dies_ad_quem: datosRecurso.dies_ad_quem ?? null,
    })

  if (errorRecurso) {
    throw new Error(`Error al guardar datos del recurso: ${errorRecurso.message}`)
  }

  return analisisId
}

/**
 * Pipeline dirigido desde el cliente.
 *
 * El orchestrator (Edge Function) maneja setup + Fase 1 (~30s).
 * Luego el cliente dirige Fase 2 en chunks + REMC para evitar
 * el timeout de 150s de Edge Functions.
 *
 * Esta funcion es fire-and-forget: el caller no necesita esperar.
 * El progreso se refleja en la BD y el AnalysisDetailPage lo muestra via polling.
 */
export async function iniciarPipeline(analisisId: string): Promise<void> {
  try {
    // ── Paso 1: Orchestrator hace setup + Fase 1 ──
    const { data: resultadoOrquestador, error: errorOrquestador } = await supabase.functions.invoke('pipeline-orchestrator', {
      body: { analisisId },
    })

    if (errorOrquestador) {
      throw new Error(`Error en orchestrator: ${errorOrquestador.message}`)
    }

    // Si no es aplicable, el orchestrator ya marco COMPLETADO
    if (!resultadoOrquestador?.aplicable) {
      return
    }

    // ── Paso 2: Fase 2 en chunks (dirigido por el cliente) ──
    // Limpiar hallazgos previos (por si es un reintento)
    await supabase.from('hallazgos_analisis').delete().eq('analisis_id', analisisId)

    const TOTAL_CONTROLES = 73
    const CONTROLES_POR_CHUNK = 7
    let totalTokensEntrada = 0
    let totalTokensSalida = 0

    for (let inicio = 0; inicio < TOTAL_CONTROLES; inicio += CONTROLES_POR_CHUNK) {
      const fin = Math.min(inicio + CONTROLES_POR_CHUNK, TOTAL_CONTROLES)

      // Actualizar progreso
      const porcentaje = 42 + Math.round((inicio / TOTAL_CONTROLES) * 38)
      await supabase.rpc('actualizar_progreso_analisis', {
        p_analisis_id: analisisId,
        p_estado: 'FASE2_VERIFICACION_REQUISITOS',
        p_progreso: porcentaje,
        p_descripcion: `Fase 2: Verificando controles ${inicio + 1}-${fin} de ${TOTAL_CONTROLES}...`,
      })

      const { data: resultadoChunk, error: errorChunk } = await supabase.functions.invoke('analyze-phase2', {
        body: { analisisId, controlInicio: inicio, controlFin: fin },
      })

      if (errorChunk) {
        console.error(`Fase 2 chunk [${inicio}-${fin}] fallo:`, errorChunk.message)
        continue // Continuar con el siguiente chunk
      }

      totalTokensEntrada += resultadoChunk?.tokensEntrada ?? 0
      totalTokensSalida += resultadoChunk?.tokensSalida ?? 0

      console.log(`Fase 2 chunk [${inicio}-${fin}] OK:`, resultadoChunk?.controlesVerificados, 'controles')
    }

    // ── Paso 3: Recalcular conteos finales ──
    await supabase.rpc('actualizar_progreso_analisis', {
      p_analisis_id: analisisId,
      p_estado: 'FASE4_GENERACION_INFORME',
      p_progreso: 85,
      p_descripcion: 'Finalizando resultados...',
    })

    const { data: hallazgosFinales } = await supabase
      .from('hallazgos_analisis')
      .select('nivel_cumplimiento')
      .eq('analisis_id', analisisId)

    const conteo = { conforme: 0, parcial: 0, noConforme: 0, noAplica: 0 }
    hallazgosFinales?.forEach((h: { nivel_cumplimiento: string }) => {
      switch (h.nivel_cumplimiento) {
        case 'CONFORME': conteo.conforme++; break
        case 'PARCIALMENTE_CONFORME': conteo.parcial++; break
        case 'NO_CONFORME': conteo.noConforme++; break
        case 'NO_APLICA': conteo.noAplica++; break
      }
    })

    const costoUsd = (totalTokensEntrada * 3 / 1_000_000) + (totalTokensSalida * 15 / 1_000_000)

    await supabase.from('analisis').update({
      total_hallazgos: hallazgosFinales?.length ?? 0,
      cantidad_conforme: conteo.conforme,
      cantidad_parcial: conteo.parcial,
      cantidad_no_conforme: conteo.noConforme,
      cantidad_no_aplica: conteo.noAplica,
      total_requisitos_verificados: hallazgosFinales?.length ?? 0,
      costo_estimado_usd: costoUsd,
    }).eq('id', analisisId)

    // ── Paso 4: Generar REMC si hay incumplimientos (4 secciones) ──
    if (conteo.noConforme > 0 || conteo.parcial > 0) {
      const contenidoRecurso: Record<string, unknown> = {}

      for (const seccion of [1, 2, 3, 4]) {
        const etiquetas = ['legitimacion/hechos', 'fundamentos 1-5', 'fundamentos 6-10', 'cautelares/peticion']
        await supabase.rpc('actualizar_progreso_analisis', {
          p_analisis_id: analisisId,
          p_estado: 'GENERANDO_RECURSO',
          p_progreso: 83 + (seccion * 3),
          p_descripcion: `Generando REMC: ${etiquetas[seccion - 1]} (${seccion}/4)...`,
        })

        const { data: resultado, error: errorSeccion } = await supabase.functions.invoke('generar-recurso', {
          body: { analisisId, seccion },
        })

        if (errorSeccion) {
          console.error(`REMC seccion ${seccion} fallo:`, errorSeccion.message)
          continue
        }

        if (resultado?.contenido) {
          Object.assign(contenidoRecurso, resultado.contenido)
        }
      }

      // Merge fundamentos_1_5 + fundamentos_6_10 into unified fundamentos
      const f15 = contenidoRecurso.fundamentos_1_5 as Record<string, unknown> | undefined
      const f610 = contenidoRecurso.fundamentos_6_10 as Record<string, unknown> | undefined
      if (f15 || f610) {
        contenidoRecurso.fundamentos = { ...f15, ...f610 }
        delete contenidoRecurso.fundamentos_1_5
        delete contenidoRecurso.fundamentos_6_10
      }

      // Guardar REMC completo en datos_recurso
      if (Object.keys(contenidoRecurso).length > 0) {
        await supabase.from('datos_recurso').update({
          contenido_recurso: contenidoRecurso,
          recurso_generado_en: new Date().toISOString(),
        }).eq('analisis_id', analisisId)
      }
    }

    // ── Paso 5: Marcar como completado ──
    await supabase.from('analisis').update({
      estado: 'COMPLETADO',
      completado_en: new Date().toISOString(),
    }).eq('id', analisisId)

    await supabase.rpc('actualizar_progreso_analisis', {
      p_analisis_id: analisisId,
      p_estado: 'COMPLETADO',
      p_progreso: 100,
      p_descripcion: 'Analisis completado.',
    })
  } catch (err) {
    console.error('Error en pipeline:', err)
    await supabase.from('analisis').update({
      estado: 'FALLIDO',
      mensaje_error: err instanceof Error ? err.message : 'Error desconocido',
      actualizado_en: new Date().toISOString(),
    }).eq('id', analisisId)
  }
}

export async function obtenerAnalisis(analisisId: string): Promise<FilaAnalisis | null> {
  const { data, error } = await supabase
    .from('analisis')
    .select('*')
    .eq('id', analisisId)
    .maybeSingle()

  if (error) throw new Error(error.message)
  return (data as unknown as FilaAnalisis) ?? null
}

export async function obtenerHallazgosAnalisis(analisisId: string): Promise<FilaHallazgo[]> {
  const { data, error } = await supabase
    .from('hallazgos_analisis')
    .select('*')
    .eq('analisis_id', analisisId)
    .order('control_id', { ascending: true })

  if (error) throw new Error(error.message)
  return (data ?? []) as unknown as FilaHallazgo[]
}

export async function listarAnalisis(organizacionId: string): Promise<AnalisisConDocumento[]> {
  const { data, error } = await supabase
    .from('analisis')
    .select(`
      *,
      documento_objetivo:documentos!documento_objetivo_id(id, nombre)
    `)
    .eq('organizacion_id', organizacionId)
    .order('creado_en', { ascending: false })

  if (error) throw new Error(error.message)
  return (data ?? []) as unknown as AnalisisConDocumento[]
}

export async function obtenerRegistrosPipeline(analisisId: string): Promise<FilaRegistroPipeline[]> {
  const { data, error } = await supabase
    .from('registro_pipeline')
    .select('*')
    .eq('analisis_id', analisisId)
    .order('creado_en', { ascending: true })

  if (error) throw new Error(error.message)
  return (data ?? []) as unknown as FilaRegistroPipeline[]
}

export async function obtenerDatosRecurso(analisisId: string): Promise<FilaDatosRecurso | null> {
  const { data, error } = await supabase
    .from('datos_recurso')
    .select('*')
    .eq('analisis_id', analisisId)
    .maybeSingle()

  if (error) throw new Error(error.message)
  return data as unknown as FilaDatosRecurso | null
}
