import { crearClienteServicio } from './supabase-client.ts'

export async function registrarPasoPipeline(
  analisisId: string,
  paso: string,
  estado: 'iniciado' | 'completado' | 'fallido' | 'reintentando',
  detalles?: {
    resumenEntrada?: Record<string, unknown>
    resumenSalida?: Record<string, unknown>
    mensajeError?: string
    duracionMs?: number
    tokensUsados?: { input_tokens: number; output_tokens: number }
  }
) {
  const supabase = crearClienteServicio()

  await supabase.from('registro_pipeline').insert({
    analisis_id: analisisId,
    paso,
    estado,
    resumen_entrada: detalles?.resumenEntrada ?? null,
    resumen_salida: detalles?.resumenSalida ?? null,
    mensaje_error: detalles?.mensajeError ?? null,
    duracion_ms: detalles?.duracionMs ?? null,
    tokens_usados: detalles?.tokensUsados ?? null,
  })
}

export async function actualizarProgresoAnalisis(
  analisisId: string,
  estado: string,
  progreso: number,
  descripcion?: string
) {
  const supabase = crearClienteServicio()

  await supabase.rpc('actualizar_progreso_analisis', {
    p_analisis_id: analisisId,
    p_estado: estado,
    p_progreso: progreso,
    p_descripcion: descripcion ?? null,
  })
}
