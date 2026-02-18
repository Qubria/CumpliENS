import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { History, Scale, Eye, Clock, CheckCircle, XCircle, AlertTriangle, Loader2 } from 'lucide-react'
import { listarAnalisis } from '@/services/analysis-service'
import type { AnalisisConDocumento } from '@/services/analysis-service'

const ESTADO_CONFIG: Record<string, { etiqueta: string; color: string; icono: typeof CheckCircle }> = {
  COMPLETADO: { etiqueta: 'Completado', color: 'bg-cumple-bg text-cumple-text', icono: CheckCircle },
  FALLIDO: { etiqueta: 'Fallido', color: 'bg-nocumple-bg text-nocumple-text', icono: XCircle },
  PENDIENTE: { etiqueta: 'Pendiente', color: 'bg-noaplica-bg text-noaplica-text', icono: Clock },
}

const CATEGORIA_COLOR: Record<string, string> = {
  BASICA: 'bg-ens-basica-bg text-ens-basica',
  MEDIA: 'bg-ens-media-bg text-ens-media',
  ALTA: 'bg-ens-alta-bg text-ens-alta',
}

export function HistorialPage() {
  const [analisis, setAnalisis] = useState<AnalisisConDocumento[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    cargarAnalisis()
  }, [])

  async function cargarAnalisis() {
    try {
      setCargando(true)
      // Usar org por defecto (en produccion vendria del contexto de auth)
      const datos = await listarAnalisis('11111111-1111-1111-1111-111111111111')
      setAnalisis(datos)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error cargando analisis')
    } finally {
      setCargando(false)
    }
  }

  if (cargando) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-3 text-text-body">Cargando historial...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-card border border-border rounded-xl shadow-card p-6 text-center">
        <XCircle className="h-12 w-12 text-nocumple-icon mx-auto mb-3" />
        <p className="text-nocumple-text">{error}</p>
        <button onClick={cargarAnalisis} className="mt-4 btn-primary">Reintentar</button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-heading flex items-center gap-3">
            <History className="h-7 w-7 text-primary" />
            Historial de Analisis
          </h2>
          <p className="text-sm text-text-muted mt-1">
            {analisis.length} {analisis.length === 1 ? 'analisis realizado' : 'analisis realizados'}
          </p>
        </div>
        <Link to="/new" className="btn-primary">
          + Nuevo Analisis
        </Link>
      </div>

      {analisis.length === 0 ? (
        <div className="bg-card border border-border rounded-xl shadow-card p-12 text-center">
          <History className="h-16 w-16 text-text-placeholder mx-auto mb-4" />
          <h3 className="text-lg font-medium text-text-body">Sin analisis todavia</h3>
          <p className="text-sm text-text-placeholder mt-2">Crea tu primer analisis para verlo aqui.</p>
          <Link to="/new" className="mt-6 inline-block btn-primary">Crear Analisis</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {analisis.map((a) => (
            <FilaAnalisis key={a.id} analisis={a} />
          ))}
        </div>
      )}
    </div>
  )
}

function FilaAnalisis({ analisis: a }: { analisis: AnalisisConDocumento }) {
  const cfg = ESTADO_CONFIG[a.estado] ?? { etiqueta: a.estado, color: 'bg-secondary text-primary', icono: Clock }
  const IconoEstado = cfg.icono
  const esCompletado = a.estado === 'COMPLETADO'
  const tieneIncumplimientos = (a.cantidad_no_conforme ?? 0) > 0 || (a.cantidad_parcial ?? 0) > 0
  const enProgreso = !esCompletado && a.estado !== 'FALLIDO'

  return (
    <div className="bg-card border border-border rounded-xl shadow-card p-5 hover:shadow-card-hover transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${cfg.color}`}>
              <IconoEstado className="h-3.5 w-3.5" />
              {cfg.etiqueta}
            </span>
            {a.categoria_ens && (
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${CATEGORIA_COLOR[a.categoria_ens] ?? 'bg-noaplica-bg text-noaplica-text'}`}>
                ENS {a.categoria_ens}
              </span>
            )}
            {enProgreso && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
          </div>

          <h3 className="font-semibold text-text-heading truncate">
            {a.documento_objetivo?.nombre ?? 'Documento sin nombre'}
          </h3>

          <div className="flex items-center gap-4 mt-2 text-sm text-text-muted">
            <span>
              {new Date(a.creado_en).toLocaleDateString('es-ES', {
                year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
              })}
            </span>
            {esCompletado && (
              <>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5 text-cumple-icon" />
                  {a.cantidad_conforme ?? 0} conformes
                </span>
                {(a.cantidad_no_conforme ?? 0) > 0 && (
                  <span className="flex items-center gap-1">
                    <XCircle className="h-3.5 w-3.5 text-nocumple-icon" />
                    {a.cantidad_no_conforme} no conformes
                  </span>
                )}
                {(a.cantidad_parcial ?? 0) > 0 && (
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="h-3.5 w-3.5 text-parcial-icon" />
                    {a.cantidad_parcial} parciales
                  </span>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 ml-4">
          <Link
            to={`/analysis/${a.id}`}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-body bg-secondary rounded-lg hover:bg-surface-subtle transition-colors"
          >
            <Eye className="h-4 w-4" />
            Ver
          </Link>
          {esCompletado && tieneIncumplimientos && (
            <Link
              to={`/analysis/${a.id}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent-foreground bg-accent rounded-lg hover:opacity-90 transition-colors"
            >
              <Scale className="h-4 w-4" />
              REMC
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
