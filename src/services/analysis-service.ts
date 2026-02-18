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
    console.log('[pipeline] Iniciando Fase 2: limpiando hallazgos previos')
    await supabase.from('hallazgos_analisis').delete().eq('analisis_id', analisisId)

    const TOTAL_CONTROLES = 73
    const CONTROLES_POR_CHUNK = 3
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

    const { data: hallazgosFinales, error: errorHallazgos } = await supabase
      .from('hallazgos_analisis')
      .select('nivel_cumplimiento')
      .eq('analisis_id', analisisId)

    if (errorHallazgos) {
      console.error('[pipeline] Error al obtener hallazgos finales:', errorHallazgos.message)
    }

    const totalHallazgos = hallazgosFinales?.length ?? 0
    console.log(`[pipeline] Hallazgos finales: ${totalHallazgos} filas`)

    const conteo = { conforme: 0, parcial: 0, noConforme: 0, noAplica: 0 }
    hallazgosFinales?.forEach((h: { nivel_cumplimiento: string }) => {
      const valor = (h.nivel_cumplimiento ?? '').toUpperCase().trim()
      switch (valor) {
        case 'CONFORME': conteo.conforme++; break
        case 'PARCIALMENTE_CONFORME': conteo.parcial++; break
        case 'NO_CONFORME': conteo.noConforme++; break
        case 'NO_APLICA': conteo.noAplica++; break
        default:
          console.warn(`[pipeline] nivel_cumplimiento inesperado: "${h.nivel_cumplimiento}" → contado como NO_CONFORME`)
          conteo.noConforme++
          break
      }
    })

    console.log(`[pipeline] Conteo: conforme=${conteo.conforme}, parcial=${conteo.parcial}, noConforme=${conteo.noConforme}, noAplica=${conteo.noAplica}`)

    const costoUsd = (totalTokensEntrada * 3 / 1_000_000) + (totalTokensSalida * 15 / 1_000_000)

    const { error: errorUpdateConteos } = await supabase.from('analisis').update({
      total_hallazgos: totalHallazgos,
      cantidad_conforme: conteo.conforme,
      cantidad_parcial: conteo.parcial,
      cantidad_no_conforme: conteo.noConforme,
      cantidad_no_aplica: conteo.noAplica,
      total_requisitos_verificados: totalHallazgos,
      costo_estimado_usd: costoUsd,
    }).eq('id', analisisId)

    if (errorUpdateConteos) {
      console.error('[pipeline] Error al actualizar conteos:', errorUpdateConteos.message)
    }

    // ── Paso 4: Generar REMC v5 si hay incumplimientos (9 secciones, formato forense) ──
    const hayIncumplimientos = conteo.noConforme > 0 || conteo.parcial > 0
    console.log(`[pipeline] ¿Generar REMC? ${hayIncumplimientos} (noConforme=${conteo.noConforme}, parcial=${conteo.parcial})`)

    if (hayIncumplimientos) {
      // Limpiar contenido_recurso previo (por si es un reintento)
      await supabase.from('datos_recurso').update({
        contenido_recurso: null,
        recurso_generado_en: null,
      }).eq('analisis_id', analisisId)

      const contenidoRecurso: Record<string, unknown> = { _version: 5 }
      const etiquetas = [
        'antecedentes de hecho',
        'fundamentos 1-2',
        'fundamentos 3-4',
        'fundamentos 5-6',
        'fundamentos 7-8',
        'fundamentos 9-10',
        'causas de nulidad',
        'cautelares + suplico',
        'legitimacion + acto recurrible + otrosies',
      ]

      for (const seccion of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        console.log(`[pipeline] REMC seccion ${seccion}/9: ${etiquetas[seccion - 1]}`)

        await supabase.rpc('actualizar_progreso_analisis', {
          p_analisis_id: analisisId,
          p_estado: 'GENERANDO_RECURSO',
          p_progreso: 83 + Math.round((seccion / 9) * 15),
          p_descripcion: `Generando recurso: ${etiquetas[seccion - 1]} (${seccion}/9)...`,
        })

        // Primer intento - el Edge Function SIEMPRE devuelve 200 con contenido
        // (si extraerJSON falla, genera placeholder server-side)
        // Solo reintentamos en errores de red/timeout (500, 546)
        let { data: resultado, error: errorSeccion } = await supabase.functions.invoke('generar-recurso', {
          body: { analisisId, seccion },
        })

        // Reintento SOLO para errores de red/timeout (NO para 422, que ya no existe)
        if (errorSeccion) {
          console.warn(`[pipeline] REMC seccion ${seccion} intento 1 fallo (red/timeout): ${errorSeccion.message}. Reintentando en 5s...`)
          await new Promise(r => setTimeout(r, 5000))
          const retry = await supabase.functions.invoke('generar-recurso', {
            body: { analisisId, seccion },
          })
          resultado = retry.data
          errorSeccion = retry.error
        }

        if (errorSeccion) {
          // Fallo de red/timeout tras 2 intentos - placeholder cliente como ultimo recurso
          console.error(`[pipeline] REMC seccion ${seccion} fallo tras 2 intentos (red/timeout):`, errorSeccion.message)
          const ERR = '[Error de conexion generando seccion]'
          const fundErr = { ordinal: 'ERROR', titulo: 'Error de conexion', normaVulnerada: ERR, clausulaViciada: ERR, nexoJuridico: ERR, doctrinaJurisprudencia: ERR, consecuenciaPretendida: ERR, analisisJuridico: ERR }
          const placeholders: Record<number, Record<string, unknown>> = {
            1: { antecedentes: [{ ordinal: 'PRIMERO', titulo: 'Error de conexion', texto: ERR, documentoRef: '(Documento n. 1)' }] },
            2: { fundamentos_1_2: [fundErr] }, 3: { fundamentos_3_4: [fundErr] },
            4: { fundamentos_5_6: [fundErr] }, 5: { fundamentos_7_8: [fundErr] },
            6: { fundamentos_9_10: [fundErr] },
            7: { causasNulidad: [{ ordinal: 'PRIMERA', base: 'Error', titulo: 'Error de conexion', fundamentacion: ERR, hallazgosVinculados: [], jurisprudenciaAplicable: ERR }] },
            8: { cautelares: { fumusBoniIuris: ERR, periculumInMora: ERR, ponderacionIntereses: ERR, proporcionalidadMedida: ERR }, peticion: { principal: ERR, subsidiaria: ERR, cautelar: ERR } },
            9: { legitimacion: { fundamentoLegal: ERR, interesReal: ERR, potencialLicitador: ERR, perjuicioConcreto: ERR, conclusionLegitimacion: ERR }, actoRecurrible: { tipologia: ERR, tramiteCualificado: ERR, conexionLesion: ERR, conclusionRecurribilidad: ERR }, otrosies: { proposicionPrueba: ERR, reclamacionExpediente: ERR, notificaciones: ERR } },
          }
          Object.assign(contenidoRecurso, placeholders[seccion] ?? {})
          continue
        }

        if (resultado?.contenido) {
          const claves = Object.keys(resultado.contenido)
          console.log(`[pipeline] REMC seccion ${seccion} OK: claves=[${claves.join(', ')}]${resultado.reparado ? ' (reparado)' : ''}`)
          Object.assign(contenidoRecurso, resultado.contenido)
        } else {
          console.warn(`[pipeline] REMC seccion ${seccion}: respuesta sin contenido`, JSON.stringify(resultado)?.slice(0, 200))
        }
      }

      // Merge 5 fundamento arrays into unified fundamentos
      const fundKeys = ['fundamentos_1_2', 'fundamentos_3_4', 'fundamentos_5_6', 'fundamentos_7_8', 'fundamentos_9_10'] as const
      const allFundamentos: unknown[] = []
      for (const key of fundKeys) {
        const arr = contenidoRecurso[key] as unknown[] | undefined
        if (Array.isArray(arr)) {
          console.log(`[pipeline] Merge ${key}: ${arr.length} fundamentos`)
          allFundamentos.push(...arr)
        }
        delete contenidoRecurso[key]
      }
      if (allFundamentos.length > 0) {
        contenidoRecurso.fundamentos = allFundamentos
        console.log(`[pipeline] Total fundamentos merged: ${allFundamentos.length}`)
      }

      // Guardar REMC completo en datos_recurso
      const clavesRecurso = Object.keys(contenidoRecurso)
      console.log(`[pipeline] contenidoRecurso tiene ${clavesRecurso.length} claves: [${clavesRecurso.join(', ')}]`)

      if (clavesRecurso.length > 1) {
        const { error: errorSaveRecurso } = await supabase.from('datos_recurso').update({
          contenido_recurso: contenidoRecurso,
          recurso_generado_en: new Date().toISOString(),
        }).eq('analisis_id', analisisId)

        if (errorSaveRecurso) {
          console.error('[pipeline] ERROR CRITICO: No se pudo guardar contenido_recurso:', errorSaveRecurso.message)
          // Intentar guardar una version reducida (sin fundamentos extensos)
          try {
            const reducido = { ...contenidoRecurso }
            console.warn('[pipeline] Intentando guardar version reducida...')
            const { error: errorRetry } = await supabase.from('datos_recurso').update({
              contenido_recurso: reducido,
              recurso_generado_en: new Date().toISOString(),
            }).eq('analisis_id', analisisId)
            if (errorRetry) {
              console.error('[pipeline] Fallo tambien la version reducida:', errorRetry.message)
            } else {
              console.log('[pipeline] Version reducida guardada OK')
            }
          } catch (e) {
            console.error('[pipeline] Error en retry de guardado:', e)
          }
        } else {
          console.log('[pipeline] REMC guardado exitosamente en datos_recurso')
        }

        // Verificar que se guardo correctamente
        const { data: verificacion } = await supabase
          .from('datos_recurso')
          .select('contenido_recurso')
          .eq('analisis_id', analisisId)
          .maybeSingle()
        if (verificacion?.contenido_recurso) {
          console.log('[pipeline] Verificacion OK: contenido_recurso guardado en BD')
        } else {
          console.error('[pipeline] VERIFICACION FALLIDA: contenido_recurso es null en BD tras guardar')
        }
      } else {
        console.error('[pipeline] contenidoRecurso vacio (solo _version), no se guarda')
      }
    } else {
      console.log('[pipeline] Sin incumplimientos, REMC no necesario')
    }

    // ── Paso 5: Marcar como completado ──
    console.log('[pipeline] Marcando analisis como COMPLETADO')

    const { error: errorCompletado } = await supabase.from('analisis').update({
      estado: 'COMPLETADO',
      completado_en: new Date().toISOString(),
    }).eq('id', analisisId)

    if (errorCompletado) {
      console.error('[pipeline] Error al marcar COMPLETADO:', errorCompletado.message)
    }

    await supabase.rpc('actualizar_progreso_analisis', {
      p_analisis_id: analisisId,
      p_estado: 'COMPLETADO',
      p_progreso: 100,
      p_descripcion: 'Analisis completado.',
    })

    console.log('[pipeline] Pipeline completado exitosamente')
  } catch (err) {
    console.error('[pipeline] Error fatal en pipeline:', err)
    try {
      await supabase.from('analisis').update({
        estado: 'FALLIDO',
        mensaje_error: err instanceof Error ? err.message : 'Error desconocido',
        actualizado_en: new Date().toISOString(),
      }).eq('id', analisisId)
    } catch (dbErr) {
      console.error('[pipeline] Error adicional al marcar FALLIDO:', dbErr)
    }
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
