import { useState, useCallback } from 'react'
import type { ProgresoExtraccionPDF, ResultadoExtraccion } from '@/types/document'
import { extraerTextoDePDF } from '@/services/pdf-extractor'
import { detectarEstructura } from '@/services/structure-detector'

export function usePDFExtraction() {
  const [progreso, setProgreso] = useState<ProgresoExtraccionPDF>({
    estado: 'inactivo',
    paginaActual: 0,
    totalPaginas: 0,
    porcentajeCompletado: 0,
  })

  const extraer = useCallback(async (archivo: File): Promise<ResultadoExtraccion> => {
    setProgreso({
      estado: 'cargando',
      paginaActual: 0,
      totalPaginas: 0,
      porcentajeCompletado: 0,
    })

    try {
      const { paginas, numeroPaginas } = await extraerTextoDePDF(archivo, setProgreso)

      setProgreso({
        estado: 'detectando-estructura',
        paginaActual: numeroPaginas,
        totalPaginas: numeroPaginas,
        porcentajeCompletado: 95,
      })

      const bloquesEstructurados = detectarEstructura(paginas)
      const textoCompleto = paginas.map((p) => p.texto).join('\n\n')

      setProgreso({
        estado: 'completo',
        paginaActual: numeroPaginas,
        totalPaginas: numeroPaginas,
        porcentajeCompletado: 100,
      })

      return { texto: textoCompleto, numeroPaginas, bloquesEstructurados }
    } catch (err) {
      const mensaje = err instanceof Error ? err.message : 'Error desconocido'
      setProgreso({
        estado: 'error',
        paginaActual: 0,
        totalPaginas: 0,
        porcentajeCompletado: 0,
        error: mensaje,
      })
      throw err
    }
  }, [])

  const reiniciar = useCallback(() => {
    setProgreso({
      estado: 'inactivo',
      paginaActual: 0,
      totalPaginas: 0,
      porcentajeCompletado: 0,
    })
  }, [])

  return { progreso, extraer, reiniciar }
}
