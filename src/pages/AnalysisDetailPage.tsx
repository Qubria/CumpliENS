import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle, XCircle, Scale, Download, BarChart3,
  CheckCircle2, Loader2, Circle,
} from 'lucide-react'
import { obtenerAnalisis, obtenerHallazgosAnalisis, obtenerDatosRecurso } from '@/services/analysis-service'
import { useAnalysisProgress } from '@/hooks/useAnalysisProgress'
import { useAnalysisStore } from '@/stores/analysis-store'
import { generarRecursoHTML } from '@/services/recurso-service'
import { generarInformeGraficoHTML } from '@/services/informe-grafico-service'
import {
  descargarRecursoPDF, descargarRecursoWord,
  descargarInformeGraficoPDF, descargarInformeGraficoWord,
} from '@/services/download-service'
import type { ContenidoRecurso, ClausulaImpugnada } from '@/types/recurso'
import { PASOS_PIPELINE, SECCIONES_REMC, DIMENSIONES_ENS, CATEGORIAS_ENS } from '@/config/constants'
import type { PrioridadHallazgo } from '@/types/database'
import type { DimensionDataItem } from '@/components/charts/RadarDimensions'
import type { CategoryBarItem } from '@/components/charts/CategoryBars'
import type { RiskBarData } from '@/components/charts/RiskBars'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import CategoryBadge from '@/components/shared/CategoryBadge'
import { LogoMark } from '@/components/shared/Logo'
import type { EnsCategoryKey } from '@/config/designTokens'
import { ENS_DIMENSIONS } from '@/config/designTokens'
import ResumenTab from '@/pages/results/ResumenTab'
import MedidasTab from '@/pages/results/MedidasTab'
import DimensionesTab from '@/pages/results/DimensionesTab'
import RiesgosTab from '@/pages/results/RiesgosTab'

// ─── Tab definitions ─────────────────────────────────────────────
const TABS = [
  { id: "resumen", label: "Resumen" },
  { id: "medidas", label: "Medidas" },
  { id: "dimensiones", label: "Dimensiones" },
  { id: "riesgos", label: "Riesgos" },
] as const;

type TabId = (typeof TABS)[number]["id"];

// ─── Main page component ─────────────────────────────────────────
export function AnalysisDetailPage() {
  const { id } = useParams<{ id: string }>()
  const almacenAnalisis = useAnalysisStore()

  const estaRastreando = almacenAnalisis.analisisActivoId === id
  const progreso = useAnalysisProgress(estaRastreando ? id! : null)

  const [analisisExiste, setAnalisisExiste] = useState(true)

  const { data: analisis, isLoading: estaCargando } = useQuery({
    queryKey: ['analisis', id],
    queryFn: async () => {
      const resultado = await obtenerAnalisis(id!)
      setAnalisisExiste(resultado !== null)
      return resultado
    },
    enabled: !!id && analisisExiste,
    refetchInterval: analisisExiste && estaRastreando && !progreso.estaCompleto && !progreso.haFallado ? 5000 : false,
    retry: 2,
  })

  const { data: hallazgos } = useQuery({
    queryKey: ['hallazgos', id],
    queryFn: () => obtenerHallazgosAnalisis(id!),
    enabled: !!id && analisis?.estado === 'COMPLETADO',
  })

  const { data: datosRecurso } = useQuery({
    queryKey: ['datos-recurso', id],
    queryFn: () => obtenerDatosRecurso(id!),
    enabled: !!id && analisis?.estado === 'COMPLETADO',
  })

  if (estaCargando) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    )
  }

  if (!analisis) {
    return <div className="text-center py-12 text-text-muted">Analisis no encontrado</div>
  }

  // Progress view while running
  if (analisis.estado !== 'COMPLETADO' && analisis.estado !== 'FALLIDO') {
    return <VistaProgreso analisis={analisis} progreso={progreso} />
  }

  // Error view
  if (analisis.estado === 'FALLIDO') {
    return (
      <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl shadow-card p-8 text-center space-y-4">
        <XCircle className="h-12 w-12 text-nocumple-icon mx-auto" />
        <h2 className="text-xl font-bold text-text-heading">Error en el Analisis</h2>
        <p className="text-sm text-nocumple-text">{analisis.mensaje_error ?? 'Error desconocido'}</p>
      </div>
    )
  }

  // Results view
  return <VistaResultados analisis={analisis} hallazgos={hallazgos ?? []} datosRecurso={datosRecurso ?? null} />
}

// ─── Parsear seccion REMC del texto de descripcion ───────────────
function extraerSeccionREMC(descripcion: string | null): number {
  if (!descripcion) return 0
  const match = descripcion.match(/\((\d+)\/9\)/)
  return match?.[1] ? parseInt(match[1], 10) : 0
}

// ─── Progress view (diseño-style) ────────────────────────────────
function VistaProgreso({ analisis, progreso }: {
  analisis: { estado: string; porcentaje_progreso: number; descripcion_paso_actual: string | null }
  progreso: ReturnType<typeof useAnalysisProgress>
}) {
  const estadoActual = progreso.estado ?? analisis.estado
  const porcentajeActual = progreso.porcentajeProgreso ?? analisis.porcentaje_progreso
  const descripcionActual = progreso.descripcionPasoActual ?? analisis.descripcion_paso_actual

  const pasos = Object.entries(PASOS_PIPELINE).filter(([clave]) => clave !== 'FALLIDO')

  type StepStatus = 'done' | 'active' | 'pending'

  const getStepStatus = (clave: string): StepStatus => {
    const keys = Object.keys(PASOS_PIPELINE)
    const currentIdx = keys.indexOf(estadoActual)
    const stepIdx = keys.indexOf(clave)
    if (stepIdx < currentIdx) return 'done'
    if (stepIdx === currentIdx) return 'active'
    return 'pending'
  }

  const estaCompleto = estadoActual === 'COMPLETADO'
  const esGenerandoRecurso = estadoActual === 'GENERANDO_RECURSO'
  const seccionActualREMC = esGenerandoRecurso ? extraerSeccionREMC(descripcionActual) : 0

  // Tiempo estimado restante (solo durante REMC)
  const tiempoRestante = useMemo(() => {
    if (!esGenerandoRecurso || seccionActualREMC === 0) return 0
    return SECCIONES_REMC
      .filter(s => s.id >= seccionActualREMC)
      .reduce((sum, s) => sum + s.tiempoEstimadoSeg, 0)
  }, [esGenerandoRecurso, seccionActualREMC])

  const minutosRestantes = Math.ceil(tiempoRestante / 60)

  // Progreso REMC: usar seccionActualREMC / 9 para que S1 ya muestre 11%
  const pctREMC = seccionActualREMC > 0 ? Math.round((seccionActualREMC / 9) * 100) : 0

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Shield icon with breathing animation */}
        <div className="flex justify-center mb-8">
          <motion.div
            animate={
              estaCompleto
                ? { scale: [1, 1.1, 1] }
                : { scale: [1, 1.04, 1] }
            }
            transition={
              estaCompleto
                ? { duration: 0.4 }
                : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <LogoMark size={64} />
          </motion.div>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold tracking-tight text-text-heading mb-1">
            {estaCompleto ? 'Analisis completado' : 'Analizando documentos'}
          </h2>
          <p className="text-sm text-text-muted">
            {descripcionActual ?? 'Procesando...'}
          </p>
        </div>

        {/* General pipeline progress bar (always visible) */}
        <div className="w-full h-1 bg-muted rounded-full mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${porcentajeActual}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* General pipeline steps checklist */}
        <div className="space-y-2.5">
          {pasos.map(([clave, paso], i) => {
            const status = getStepStatus(clave)
            return (
              <motion.div
                key={clave}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2.5"
              >
                {status === 'done' ? (
                  <CheckCircle2 className="h-4 w-4 text-cumple-icon flex-shrink-0" />
                ) : status === 'active' ? (
                  <Loader2 className="h-4 w-4 text-primary animate-spin flex-shrink-0" />
                ) : (
                  <Circle className="h-4 w-4 text-border flex-shrink-0" />
                )}
                <span
                  className={`text-[13px] leading-tight ${
                    status === 'done'
                      ? 'text-text-muted'
                      : status === 'active'
                      ? 'text-text-heading font-medium'
                      : 'text-text-placeholder'
                  }`}
                >
                  {paso.etiqueta}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* REMC detailed sections panel (expands below pipeline when generating recurso) */}
        <AnimatePresence>
          {esGenerandoRecurso && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-5 border-t border-border">
                {/* REMC header + progress */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[12px] font-semibold text-text-heading">
                    Recurso REMC
                  </span>
                  <span className="text-[11px] text-text-muted">
                    {seccionActualREMC > 0 ? `${seccionActualREMC}/9` : '...'}
                    {minutosRestantes > 0 && ` · ~${minutosRestantes} min`}
                  </span>
                </div>

                {/* REMC progress bar */}
                <div className="w-full h-2 bg-muted rounded-full mb-4 overflow-hidden relative">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${pctREMC}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  {/* Shimmer overlay to show activity */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </div>

                {/* 9 REMC sections list */}
                <div className="space-y-1">
                  {SECCIONES_REMC.map((sec, i) => {
                    const secStatus: StepStatus = sec.id < seccionActualREMC
                      ? 'done'
                      : sec.id === seccionActualREMC
                      ? 'active'
                      : 'pending'
                    return (
                      <motion.div
                        key={sec.id}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.04 }}
                        className="flex items-center gap-2 py-0.5"
                      >
                        {secStatus === 'done' ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-cumple-icon flex-shrink-0" />
                        ) : secStatus === 'active' ? (
                          <Loader2 className="h-3.5 w-3.5 text-primary animate-spin flex-shrink-0" />
                        ) : (
                          <Circle className="h-3.5 w-3.5 text-border flex-shrink-0" />
                        )}
                        <span
                          className={`text-[12px] leading-tight ${
                            secStatus === 'done'
                              ? 'text-text-muted'
                              : secStatus === 'active'
                              ? 'text-text-heading font-semibold'
                              : 'text-text-placeholder'
                          }`}
                        >
                          {sec.etiqueta}
                        </span>
                        {secStatus === 'active' && (
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-[10px] text-primary font-medium ml-auto"
                          >
                            ~{Math.ceil(sec.tiempoEstimadoSeg / 60)} min
                          </motion.span>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ─── Download button with dropdown ────────────────────────────────
function BotonDescarga({
  label, icono, tipo, menuAbierto, setMenuAbierto, descargando, onDescargar, className = '',
}: {
  label: string
  icono: React.ReactNode
  tipo: 'recurso' | 'grafico'
  menuAbierto: string | null
  setMenuAbierto: (v: string | null) => void
  descargando: string | null
  onDescargar: (tipo: 'recurso' | 'grafico', formato: 'pdf' | 'word') => void
  className?: string
}) {
  const abierto = menuAbierto === tipo
  const estaCargandoPDF = descargando === `${tipo}-pdf`
  const estaCargandoWord = descargando === `${tipo}-word`
  const estaCargando = estaCargandoPDF || estaCargandoWord

  return (
    <div className="relative">
      <button
        onClick={() => setMenuAbierto(abierto ? null : tipo)}
        disabled={estaCargando}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${className} ${estaCargando ? 'opacity-60 cursor-wait' : ''}`}
      >
        {estaCargando ? <Loader2 className="h-4 w-4 animate-spin" /> : icono}
        {estaCargando ? 'Descargando...' : label}
      </button>
      {abierto && !estaCargando && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setMenuAbierto(null)} />
          <div className="absolute top-full left-0 mt-1 z-50 bg-card border border-border rounded-lg shadow-lg overflow-hidden min-w-[140px]">
            <button
              onClick={() => onDescargar(tipo, 'pdf')}
              className="w-full text-left px-4 py-2.5 text-sm text-text-heading hover:bg-muted transition-colors flex items-center gap-2"
            >
              <Download className="h-3.5 w-3.5 text-red-500" />
              PDF
            </button>
            <button
              onClick={() => onDescargar(tipo, 'word')}
              className="w-full text-left px-4 py-2.5 text-sm text-text-heading hover:bg-muted transition-colors flex items-center gap-2"
            >
              <Download className="h-3.5 w-3.5 text-blue-500" />
              Word (.docx)
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// ─── Results view ─────────────────────────────────────────────────
function VistaResultados({ analisis, hallazgos, datosRecurso }: {
  analisis: NonNullable<Awaited<ReturnType<typeof obtenerAnalisis>>>
  hallazgos: Awaited<ReturnType<typeof obtenerHallazgosAnalisis>>
  datosRecurso: Awaited<ReturnType<typeof obtenerDatosRecurso>>
}) {
  const [activeTab, setActiveTab] = useState<TabId>("resumen")
  const [menuAbierto, setMenuAbierto] = useState<string | null>(null)
  const [descargando, setDescargando] = useState<string | null>(null)

  // ── Derived data ───────────────────────────────────────────────
  const tasaCumplimiento = analisis.total_hallazgos && analisis.total_hallazgos > 0
    ? Math.round(((analisis.cantidad_conforme + analisis.cantidad_parcial * 0.5) / analisis.total_hallazgos) * 100)
    : 0

  const aplicables = analisis.total_hallazgos - analisis.cantidad_no_aplica

  // Dimension data for radar chart
  const datosDimensiones: DimensionDataItem[] = useMemo(() => {
    if (!analisis.dimensiones_afectadas) return []
    return DIMENSIONES_ENS.map((dim) => {
      const val = (analisis.dimensiones_afectadas as Record<string, { nivel: string }>)?.[dim.id]
      const nivel = val?.nivel ?? 'BAJO'
      return {
        label: dim.abreviatura,
        cumplimiento: nivel === 'ALTO' ? 100 : nivel === 'MEDIO' ? 67 : 33,
      }
    })
  }, [analisis.dimensiones_afectadas])

  // Dimension detail cards
  const dimensionDetails = useMemo(() => {
    if (!analisis.dimensiones_afectadas) return []
    const dims = analisis.dimensiones_afectadas as Record<string, { nivel: string }>
    return Object.entries(dims).map(([key, val]) => {
      const cumplimiento = val.nivel === 'ALTO' ? 100 : val.nivel === 'MEDIO' ? 67 : 33
      // Count hallazgos for this dimension (rough: hallazgos where control maps to dimension)
      const total = hallazgos.length > 0 ? Math.ceil(hallazgos.length / DIMENSIONES_ENS.length) : 0
      const cumplidas = Math.round(total * cumplimiento / 100)
      return {
        key,
        label: ENS_DIMENSIONS[key]?.label ?? key.charAt(0).toUpperCase() + key.slice(1),
        cumplimiento,
        description: `Nivel ${val.nivel}`,
        medidasCumplidas: cumplidas,
        totalMedidas: total || 1,
      }
    })
  }, [analisis.dimensiones_afectadas, hallazgos.length])

  // Category bars data
  const datosCategoria: CategoryBarItem[] = useMemo(() => {
    if (!analisis.categoria_ens) return []
    // Derive per-category compliance from hallazgos
    const categorias: Record<string, { cumple: number; total: number }> = {}
    hallazgos.forEach((h) => {
      const cat = (h.categoria_control ?? '').toLowerCase()
      if (!cat) return
      if (!categorias[cat]) categorias[cat] = { cumple: 0, total: 0 }
      categorias[cat].total++
      if (h.nivel_cumplimiento === 'CONFORME') categorias[cat].cumple++
      if (h.nivel_cumplimiento === 'PARCIALMENTE_CONFORME') categorias[cat].cumple += 0.5
    })
    const keys: EnsCategoryKey[] = ['basica', 'media', 'alta']
    return keys
      .filter((k) => categorias[k])
      .map((k) => ({
        key: k,
        label: CATEGORIAS_ENS[k.toUpperCase() as keyof typeof CATEGORIAS_ENS]?.etiqueta ?? k,
        cumplimiento: categorias[k]!.total > 0
          ? Math.round((categorias[k]!.cumple / categorias[k]!.total) * 100)
          : 0,
      }))
  }, [hallazgos, analisis.categoria_ens])

  // Risk data
  const datosRiesgo: RiskBarData = useMemo(() => {
    const counts: RiskBarData = { critico: 0, alto: 0, medio: 0, bajo: 0 }
    const map: Record<string, keyof RiskBarData> = {
      CRITICA: 'critico', ALTA: 'alto', MEDIA: 'medio', BAJA: 'bajo',
    }
    hallazgos.forEach((h) => {
      const key = map[h.prioridad ?? 'MEDIA']
      if (key) counts[key]++
    })
    return counts
  }, [hallazgos])

  // ── Generadores de HTML (reutilizados por PDF/Word) ──────────────────
  function generarHTMLRecurso(): string {
    if (!datosRecurso?.contenido_recurso) throw new Error('No hay datos del recurso')
    const contenido = datosRecurso.contenido_recurso as unknown as ContenidoRecurso
    const clausulasImpugnadas: ClausulaImpugnada[] = hallazgos
      .filter((h) => h.nivel_cumplimiento === 'NO_CONFORME' || h.nivel_cumplimiento === 'PARCIALMENTE_CONFORME')
      .map((h) => ({
        id: h.id, controlId: h.control_id, requisitoId: `${h.control_id}-REQ`,
        normaFuente: `ENS ${h.categoria_control ?? ''} - ${h.control_id}`,
        nivelCumplimiento: h.nivel_cumplimiento,
        textoClausula: h.texto_evidencia ?? h.resumen_hallazgo,
        evidenciaPliego: h.texto_evidencia,
        explicacionIRAC: [h.irac_aplicacion, h.descripcion_brecha].filter(Boolean).join(' '),
        prioridad: h.prioridad ?? 'MEDIA',
      }))
    const htmlResult = generarRecursoHTML({
      datosFormulario: {
        tribunal_competente: datosRecurso.tribunal_competente,
        tribunal_direccion: datosRecurso.tribunal_direccion ?? undefined,
        recurrente_denominacion: datosRecurso.recurrente_denominacion,
        recurrente_cif: datosRecurso.recurrente_cif,
        recurrente_domicilio: datosRecurso.recurrente_domicilio,
        recurrente_registro_mercantil: datosRecurso.recurrente_registro_mercantil ?? undefined,
        recurrente_objeto_social: datosRecurso.recurrente_objeto_social ?? undefined,
        recurrente_cnae: datosRecurso.recurrente_cnae ?? undefined,
        recurrente_email: datosRecurso.recurrente_email ?? undefined,
        recurrente_telefono: datosRecurso.recurrente_telefono ?? undefined,
        representante_nombre: datosRecurso.representante_nombre,
        representante_titulo: datosRecurso.representante_titulo,
        representante_facultades: datosRecurso.representante_facultades ?? undefined,
        expediente_numero: datosRecurso.expediente_numero,
        expediente_denominacion: datosRecurso.expediente_denominacion,
        expediente_tipo_contractual: datosRecurso.expediente_tipo_contractual,
        expediente_procedimiento: datosRecurso.expediente_procedimiento,
        expediente_valor_estimado: datosRecurso.expediente_valor_estimado ?? undefined,
        expediente_presupuesto_base: datosRecurso.expediente_presupuesto_base ?? undefined,
        expediente_duracion: datosRecurso.expediente_duracion ?? undefined,
        expediente_cpv: datosRecurso.expediente_cpv ?? undefined,
        organo_contratacion: datosRecurso.organo_contratacion,
        organo_nivel: datosRecurso.organo_nivel ?? undefined,
        fecha_publicacion_perfil: datosRecurso.fecha_publicacion_perfil ?? undefined,
        fecha_publicacion_doue: datosRecurso.fecha_publicacion_doue ?? undefined,
        es_contrato_sara: datosRecurso.es_contrato_sara,
        dies_a_quo: datosRecurso.dies_a_quo ?? undefined,
        dies_ad_quem: datosRecurso.dies_ad_quem ?? undefined,
      },
      contenidoRecurso: contenido, clausulasImpugnadas,
      fechaGeneracion: datosRecurso.recurso_generado_en
        ? new Date(datosRecurso.recurso_generado_en).toLocaleDateString('es-ES')
        : new Date().toLocaleDateString('es-ES'),
      codigoRecurso: `REMC-${datosRecurso.expediente_numero.replace(/\//g, '-')}`,
    })
    return htmlResult
  }

  function generarHTMLInformeGrafico(): string {
    // Extraer datos del recurso generado (fundamentos, causas nulidad, etc.)
    const contenidoRec = datosRecurso?.contenido_recurso as Record<string, unknown> | undefined
    const fundamentos = (contenidoRec && Array.isArray(contenidoRec.fundamentos))
      ? (contenidoRec.fundamentos as Array<{ ordinal: string; titulo: string }>).map(f => ({ ordinal: f.ordinal, titulo: f.titulo }))
      : []
    const causasRaw = contenidoRec?.causasNulidad
    const causasNulidad = Array.isArray(causasRaw)
      ? (causasRaw as Array<{ ordinal: string; base: string; titulo: string; hallazgosVinculados?: string[] }>).map(c => ({
          ordinal: c.ordinal, base: c.base, titulo: c.titulo, hallazgosVinculados: c.hallazgosVinculados ?? [],
        }))
      : []
    const antecedentes = contenidoRec && Array.isArray(contenidoRec.antecedentes) ? contenidoRec.antecedentes : []

    const resultado = generarInformeGraficoHTML({
      organizacion: datosRecurso?.organo_contratacion ?? datosRecurso?.recurrente_denominacion ?? 'Organizacion',
      nombreDocumento: datosRecurso?.expediente_denominacion ?? datosRecurso?.expediente_numero ?? 'Documento Analizado',
      fechaAnalisis: new Date(analisis.creado_en).toLocaleDateString('es-ES'),
      categoriaENS: analisis.categoria_ens!,
      dimensiones: (analisis.dimensiones_afectadas ?? {}) as import('@/types/analysis').ResultadoFase1['dimensiones'],
      justificacionCategoria: analisis.justificacion_categoria ?? '',
      totalControles: analisis.total_hallazgos,
      cantidadConforme: analisis.cantidad_conforme,
      cantidadParcial: analisis.cantidad_parcial,
      cantidadNoConforme: analisis.cantidad_no_conforme,
      cantidadNoAplica: analisis.cantidad_no_aplica,
      hallazgos: hallazgos.map((h) => ({
        control_id: h.control_id, nivel_cumplimiento: h.nivel_cumplimiento,
        resumen_hallazgo: h.resumen_hallazgo,
        irac: { asunto: h.irac_asunto ?? '', regla: h.irac_regla ?? '', aplicacion: h.irac_aplicacion ?? '', conclusion: h.irac_conclusion ?? '' },
        texto_evidencia: h.texto_evidencia, descripcion_brecha: h.descripcion_brecha,
        recomendacion: h.recomendacion, prioridad: (h.prioridad ?? 'MEDIA') as PrioridadHallazgo, confianza: 0.8,
      })),
      justificacionAplicabilidad: analisis.justificacion_categoria ?? '',
      totalRequisitosVerificados: analisis.total_requisitos_verificados ?? 0,
      totalNormasReferenciadas: analisis.total_normas_referenciadas ?? 0,
      perfilSectorial: analisis.perfil_sectorial,
      proveedoresNube: analisis.proveedores_nube ?? [],
      recurso: (fundamentos.length > 0 || causasNulidad.length > 0) ? {
        fundamentos,
        causasNulidad,
        totalAntecedentes: antecedentes.length,
        valorEstimado: datosRecurso?.expediente_valor_estimado ?? undefined,
        presupuestoBase: datosRecurso?.expediente_presupuesto_base ?? undefined,
        expediente: datosRecurso?.expediente_numero ?? '',
        recurrente: datosRecurso?.recurrente_denominacion ?? '',
        tribunal: datosRecurso?.tribunal_competente ?? '',
      } : undefined,
    })
    return resultado
  }

  // ── Handlers de descarga (PDF / Word) ──────────────────────────────
  async function handleDescargar(tipo: 'recurso' | 'grafico', formato: 'pdf' | 'word') {
    const id = `${tipo}-${formato}`
    setDescargando(id)
    setMenuAbierto(null)
    try {
      if (tipo === 'recurso') {
        const html = generarHTMLRecurso()
        if (formato === 'pdf') await descargarRecursoPDF(html, datosRecurso!.expediente_numero)
        else await descargarRecursoWord(html, datosRecurso!.expediente_numero)
      } else {
        const html = generarHTMLInformeGrafico()
        if (formato === 'pdf') await descargarInformeGraficoPDF(html)
        else await descargarInformeGraficoWord(html)
      }
    } catch (err) {
      console.error(`Error descargando ${tipo} como ${formato}:`, err)
      alert(`Error al descargar: ${err instanceof Error ? err.message : 'Error desconocido'}`)
    } finally {
      setDescargando(null)
    }
  }

  const tieneRecurso = datosRecurso?.contenido_recurso != null

  // ── Render ─────────────────────────────────────────────────────
  return (
    <div className="space-y-0">
      {/* ── Hero section ─────────────────────────────────────────── */}
      <div className="border-b border-border -mx-6 px-6">
        <div className="py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                {analisis.categoria_ens && (
                  <CategoryBadge category={analisis.categoria_ens.toLowerCase() as EnsCategoryKey} />
                )}
                <span className="text-xs text-text-muted">
                  {new Date(analisis.creado_en).toLocaleDateString('es-ES', {
                    year: 'numeric', month: 'long', day: 'numeric',
                  })}
                </span>
              </div>
              <p className="text-sm font-medium text-text-muted mb-1">
                Nivel de cumplimiento ENS
              </p>
              <div className="flex items-baseline gap-2">
                <AnimatedCounter
                  target={tasaCumplimiento}
                  className="text-5xl sm:text-6xl font-bold tracking-[-0.03em] text-text-heading"
                />
              </div>
              <p className="mt-1 text-sm text-text-muted">
                {analisis.cantidad_conforme} de {aplicables} medidas aplicables
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-2xl font-semibold text-cumple-icon">{analisis.cantidad_conforme}</span>
                <p className="text-text-muted">Cumple</p>
              </div>
              <div>
                <span className="text-2xl font-semibold text-parcial-icon">{analisis.cantidad_parcial}</span>
                <p className="text-text-muted">Parcial</p>
              </div>
              <div>
                <span className="text-2xl font-semibold text-nocumple-icon">{analisis.cantidad_no_conforme}</span>
                <p className="text-text-muted">No cumple</p>
              </div>
            </div>
          </div>

          {/* Action buttons with PDF/Word dropdowns */}
          <div className="mt-6 flex flex-wrap gap-3">
            {/* Informe de Analisis (con graficos) */}
            <BotonDescarga
              label="Descargar Informe de Analisis"
              icono={<BarChart3 className="h-4 w-4" />}
              tipo="grafico"
              menuAbierto={menuAbierto}
              setMenuAbierto={setMenuAbierto}
              descargando={descargando}
              onDescargar={handleDescargar}
              className="btn-primary"
            />
            {/* Recurso REMC */}
            {tieneRecurso && (
              <BotonDescarga
                label="Descargar Recurso REMC"
                icono={<Scale className="h-4 w-4" />}
                tipo="recurso"
                menuAbierto={menuAbierto}
                setMenuAbierto={setMenuAbierto}
                descargando={descargando}
                onDescargar={handleDescargar}
                className="bg-accent text-accent-foreground hover:opacity-90"
              />
            )}
          </div>
        </div>
      </div>

      {/* ── REMC Card ────────────────────────────────────────────── */}
      {tieneRecurso && (
        <div className="mt-6 bg-card border border-border rounded-xl shadow-card p-6 border-l-4 border-l-accent">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-text-heading flex items-center gap-2">
                <Scale className="h-5 w-5 text-accent" />
                Recurso REMC Generado
              </h3>
              <p className="text-sm text-text-body mt-1">
                Se ha generado automaticamente un Recurso Especial en Materia de Contratacion
                con {analisis.cantidad_no_conforme + analisis.cantidad_parcial} clausulas impugnadas
                en {datosRecurso?.recurso_generado_en
                  ? new Date(datosRecurso.recurso_generado_en).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
                  : 'fecha desconocida'}.
              </p>
            </div>
            <BotonDescarga
              label="Descargar REMC"
              icono={<Download className="h-4 w-4" />}
              tipo="recurso"
              menuAbierto={menuAbierto}
              setMenuAbierto={setMenuAbierto}
              descargando={descargando}
              onDescargar={handleDescargar}
              className="bg-accent text-accent-foreground hover:opacity-90"
            />
          </div>
        </div>
      )}

      {/* ── Conformity banner ────────────────────────────────────── */}
      {!tieneRecurso && analisis.cantidad_no_conforme === 0 && analisis.cantidad_parcial === 0 && (
        <div className="mt-6 bg-card border border-border rounded-xl shadow-card p-6 border-l-4 border-l-cumple-icon">
          <h3 className="font-semibold text-cumple-text flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Pliegos Conformes con el ENS
          </h3>
          <p className="text-sm text-text-body mt-1">
            No se han detectado incumplimientos significativos. No es necesario generar un Recurso REMC.
          </p>
        </div>
      )}

      {/* ── Tabs ─────────────────────────────────────────────────── */}
      <div className="mt-6">
        <div className="flex gap-0 overflow-x-auto border-b border-border">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "text-text-heading"
                  : "text-text-muted hover:text-text-body"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="py-6"
          >
            {activeTab === 'resumen' && (
              <ResumenTab
                analisis={analisis}
                hallazgos={hallazgos}
                tasaCumplimiento={tasaCumplimiento}
                datosDimensiones={datosDimensiones}
                datosCategoria={datosCategoria}
                datosRiesgo={datosRiesgo}
              />
            )}
            {activeTab === 'medidas' && (
              <MedidasTab hallazgos={hallazgos} />
            )}
            {activeTab === 'dimensiones' && (
              <DimensionesTab
                dimensions={datosDimensiones}
                dimensionDetails={dimensionDetails}
              />
            )}
            {activeTab === 'riesgos' && (
              <RiesgosTab
                hallazgos={hallazgos}
                datosRiesgo={datosRiesgo}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Cost summary ─────────────────────────────────────────── */}
      {analisis.costo_estimado_usd > 0 && (
        <div className="text-xs text-text-placeholder text-right pb-4">
          Coste estimado del analisis: ${analisis.costo_estimado_usd.toFixed(4)} USD |{' '}
          Tokens: {analisis.total_tokens_entrada + analisis.total_tokens_salida}
        </div>
      )}
    </div>
  )
}
