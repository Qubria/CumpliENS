import { useEffect } from 'react'
import { supabase } from '@/config/supabase'
import { useAnalysisStore } from '@/stores/analysis-store'
import type { EstadoAnalisis } from '@/types/database'

export function useAnalysisProgress(analisisId: string | null) {
  const almacen = useAnalysisStore()

  useEffect(() => {
    if (!analisisId) return

    // Suscribirse a cambios en tiempo real en la tabla de analisis
    const canal = supabase
      .channel(`analisis-${analisisId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'analisis',
          filter: `id=eq.${analisisId}`,
        },
        (payload) => {
          const registro = payload.new as {
            estado: EstadoAnalisis
            porcentaje_progreso: number
            descripcion_paso_actual: string | null
            mensaje_error: string | null
          }

          if (registro.mensaje_error) {
            almacen.establecerError(registro.mensaje_error)
          } else {
            almacen.actualizarProgreso(
              registro.estado,
              registro.porcentaje_progreso,
              registro.descripcion_paso_actual
            )
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(canal)
    }
  }, [analisisId, almacen])

  return {
    estado: almacen.estado,
    porcentajeProgreso: almacen.porcentajeProgreso,
    descripcionPasoActual: almacen.descripcionPasoActual,
    mensajeError: almacen.mensajeError,
    estaCompleto: almacen.estado === 'COMPLETADO',
    haFallado: almacen.estado === 'FALLIDO',
    estaEjecutando: almacen.estado !== null && almacen.estado !== 'COMPLETADO' && almacen.estado !== 'FALLIDO' && almacen.estado !== 'PENDIENTE',
  }
}
