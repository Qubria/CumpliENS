import { create } from 'zustand'
import type { EstadoAnalisis } from '@/types/database'

interface EstadoAlmacenAnalisis {
  // Analisis activo siendo rastreado
  analisisActivoId: string | null
  estado: EstadoAnalisis | null
  porcentajeProgreso: number
  descripcionPasoActual: string | null
  mensajeError: string | null

  establecerAnalisisActivo: (id: string) => void
  actualizarProgreso: (estado: EstadoAnalisis, porcentaje: number, descripcion: string | null) => void
  establecerError: (mensaje: string) => void
  reiniciar: () => void
}

export const useAnalysisStore = create<EstadoAlmacenAnalisis>((set) => ({
  analisisActivoId: null,
  estado: null,
  porcentajeProgreso: 0,
  descripcionPasoActual: null,
  mensajeError: null,

  establecerAnalisisActivo: (id) => set({
    analisisActivoId: id,
    estado: 'PENDIENTE',
    porcentajeProgreso: 0,
    descripcionPasoActual: 'Iniciando analisis...',
    mensajeError: null,
  }),

  actualizarProgreso: (estado, porcentaje, descripcion) => set({
    estado,
    porcentajeProgreso: porcentaje,
    descripcionPasoActual: descripcion,
  }),

  establecerError: (mensaje) => set({
    estado: 'FALLIDO',
    mensajeError: mensaje,
  }),

  reiniciar: () => set({
    analisisActivoId: null,
    estado: null,
    porcentajeProgreso: 0,
    descripcionPasoActual: null,
    mensajeError: null,
  }),
}))
