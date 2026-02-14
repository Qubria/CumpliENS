import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import {
  CheckCircle, AlertTriangle, XCircle, MinusCircle,
  Download, ChevronDown, ChevronUp, Scale,
} from 'lucide-react'
import { obtenerAnalisis, obtenerHallazgosAnalisis, obtenerDatosRecurso } from '@/services/analysis-service'
import { useAnalysisProgress } from '@/hooks/useAnalysisProgress'
import { useAnalysisStore } from '@/stores/analysis-store'
import { generarInformeHTML, abrirInformeImprimible } from '@/services/report-service'
import { generarRecursoHTML, abrirRecursoImprimible } from '@/services/recurso-service'
import type { DatosRecursoCompleto, ContenidoRecurso, ClausulaImpugnada } from '@/types/recurso'
import { PASOS_PIPELINE, DIMENSIONES_ENS, CATEGORIAS_ENS } from '@/config/constants'
import type { NivelCumplimiento, PrioridadHallazgo } from '@/types/database'
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Radar, ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip,
} from 'recharts'

export function AnalysisDetailPage() {
  const { id } = useParams<{ id: string }>()
  const almacenAnalisis = useAnalysisStore()

  // Rastrear progreso si es el analisis activo
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
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600" />
      </div>
    )
  }

  if (!analisis) {
    return <div className="text-center py-12 text-gray-500">Analisis no encontrado</div>
  }

  // Mostrar vista de progreso mientras se ejecuta
  if (analisis.estado !== 'COMPLETADO' && analisis.estado !== 'FALLIDO') {
    return <VistaProgreso analisis={analisis} progreso={progreso} />
  }

  // Mostrar vista de error
  if (analisis.estado === 'FALLIDO') {
    return (
      <div className="max-w-2xl mx-auto card p-8 text-center space-y-4">
        <XCircle className="h-12 w-12 text-red-500 mx-auto" />
        <h2 className="text-xl font-bold text-gray-900">Error en el Analisis</h2>
        <p className="text-sm text-red-600">{analisis.mensaje_error ?? 'Error desconocido'}</p>
      </div>
    )
  }

  // Mostrar resultados
  return <VistaResultados analisis={analisis} hallazgos={hallazgos ?? []} datosRecurso={datosRecurso ?? null} />
}

function VistaProgreso({ analisis, progreso }: {
  analisis: { estado: string; porcentaje_progreso: number; descripcion_paso_actual: string | null }
  progreso: ReturnType<typeof useAnalysisProgress>
}) {
  const estadoActual = progreso.estado ?? analisis.estado
  const porcentajeActual = progreso.porcentajeProgreso ?? analisis.porcentaje_progreso
  const descripcionActual = progreso.descripcionPasoActual ?? analisis.descripcion_paso_actual

  const pasos = Object.entries(PASOS_PIPELINE).filter(([clave]) => clave !== 'FALLIDO')

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto" />
        <h2 className="mt-4 text-xl font-bold text-gray-900">Analizando Documento</h2>
        <p className="text-sm text-gray-500 mt-1">{descripcionActual ?? 'Procesando...'}</p>
      </div>

      {/* Barra de progreso */}
      <div className="card p-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-gray-700">Progreso General</span>
          <span className="text-gray-500">{porcentajeActual}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-primary-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${porcentajeActual}%` }}
          />
        </div>
      </div>

      {/* Pasos */}
      <div className="card p-6 space-y-3">
        {pasos.map(([clave, paso]) => {
          const estaActivo = clave === estadoActual
          const esPasado = Object.keys(PASOS_PIPELINE).indexOf(clave) < Object.keys(PASOS_PIPELINE).indexOf(estadoActual)

          return (
            <div key={clave} className="flex items-center gap-3">
              {esPasado ? (
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              ) : estaActivo ? (
                <div className="h-5 w-5 border-2 border-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="h-2 w-2 bg-primary-600 rounded-full animate-pulse" />
                </div>
              ) : (
                <div className="h-5 w-5 border-2 border-gray-300 rounded-full flex-shrink-0" />
              )}
              <span className={`text-sm ${
                esPasado ? 'text-green-700' :
                estaActivo ? 'font-medium text-primary-700' :
                'text-gray-400'
              }`}>
                {paso.etiqueta}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function VistaResultados({ analisis, hallazgos, datosRecurso }: {
  analisis: NonNullable<Awaited<ReturnType<typeof obtenerAnalisis>>>
  hallazgos: Awaited<ReturnType<typeof obtenerHallazgosAnalisis>>
  datosRecurso: Awaited<ReturnType<typeof obtenerDatosRecurso>>
}) {
  const [hallazgoExpandido, setHallazgoExpandido] = useState<string | null>(null)

  const tasaCumplimiento = analisis.total_hallazgos && analisis.total_hallazgos > 0
    ? Math.round(((analisis.cantidad_conforme + analisis.cantidad_parcial * 0.5) / analisis.total_hallazgos) * 100)
    : 0

  // Preparar datos de graficos
  const datosDimensiones = analisis.dimensiones_afectadas
    ? DIMENSIONES_ENS.map((dim) => {
        const val = (analisis.dimensiones_afectadas as Record<string, { nivel: string }>)?.[dim.id]
        const nivel = val?.nivel ?? 'BAJO'
        return {
          dimension: dim.abreviatura,
          nombreCompleto: dim.etiqueta,
          valor: nivel === 'ALTO' ? 3 : nivel === 'MEDIO' ? 2 : 1,
        }
      })
    : []

  const datosTartaCumplimiento = [
    { nombre: 'Cumple', valor: analisis.cantidad_conforme, color: '#22c55e' },
    { nombre: 'Parcial', valor: analisis.cantidad_parcial, color: '#eab308' },
    { nombre: 'No Cumple', valor: analisis.cantidad_no_conforme, color: '#ef4444' },
    { nombre: 'No Aplica', valor: analisis.cantidad_no_aplica, color: '#94a3b8' },
  ].filter((d) => d.valor > 0)

  function handleImprimirInforme() {
    const datosInforme = {
      organizacion: 'Organizacion',
      nombreDocumento: 'Documento Analizado',
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
        control_id: h.control_id,
        nivel_cumplimiento: h.nivel_cumplimiento,
        resumen_hallazgo: h.resumen_hallazgo,
        irac: {
          asunto: h.irac_asunto ?? '',
          regla: h.irac_regla ?? '',
          aplicacion: h.irac_aplicacion ?? '',
          conclusion: h.irac_conclusion ?? '',
        },
        texto_evidencia: h.texto_evidencia,
        descripcion_brecha: h.descripcion_brecha,
        recomendacion: h.recomendacion,
        prioridad: (h.prioridad ?? 'MEDIA') as PrioridadHallazgo,
        confianza: 0.8,
      })),
      justificacionAplicabilidad: analisis.justificacion_categoria ?? '',
      totalRequisitosVerificados: analisis.total_requisitos_verificados ?? 0,
      totalNormasReferenciadas: analisis.total_normas_referenciadas ?? 0,
      perfilSectorial: analisis.perfil_sectorial,
      proveedoresNube: analisis.proveedores_nube ?? [],
    }

    const html = generarInformeHTML(datosInforme)
    abrirInformeImprimible(html)
  }

  function handleDescargarRecurso() {
    if (!datosRecurso?.contenido_recurso) return

    const contenido = datosRecurso.contenido_recurso as unknown as ContenidoRecurso

    const clausulasImpugnadas: ClausulaImpugnada[] = hallazgos
      .filter((h) => h.nivel_cumplimiento === 'NO_CONFORME' || h.nivel_cumplimiento === 'PARCIALMENTE_CONFORME')
      .map((h) => ({
        id: h.id,
        controlId: h.control_id,
        requisitoId: h.control_id,
        normaFuente: h.irac_regla ?? '',
        nivelCumplimiento: h.nivel_cumplimiento,
        textoClausula: h.resumen_hallazgo,
        evidenciaPliego: h.texto_evidencia,
        explicacionIRAC: h.irac_aplicacion ?? h.descripcion_brecha ?? '',
        prioridad: h.prioridad ?? 'MEDIA',
      }))

    const datos: DatosRecursoCompleto = {
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
      contenidoRecurso: contenido,
      clausulasImpugnadas,
      fechaGeneracion: datosRecurso.recurso_generado_en
        ? new Date(datosRecurso.recurso_generado_en).toLocaleDateString('es-ES')
        : new Date().toLocaleDateString('es-ES'),
      codigoRecurso: `REMC-${datosRecurso.expediente_numero.replace(/\//g, '-')}`,
    }

    const html = generarRecursoHTML(datos)
    abrirRecursoImprimible(html)
  }

  const tieneRecurso = datosRecurso?.contenido_recurso != null

  return (
    <div className="space-y-6">
      {/* Cabecera */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Resultados del Analisis</h2>
          <p className="text-sm text-gray-500 mt-1">
            {new Date(analisis.creado_en).toLocaleDateString('es-ES', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {analisis.categoria_ens && (
            <span className={`text-sm font-bold px-4 py-2 rounded-lg ${
              analisis.categoria_ens === 'BASICA' ? 'bg-green-100 text-green-800' :
              analisis.categoria_ens === 'MEDIA' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              ENS {CATEGORIAS_ENS[analisis.categoria_ens].etiqueta}
            </span>
          )}
          <button onClick={handleImprimirInforme} className="btn-primary flex items-center gap-2">
            <Download className="h-4 w-4" />
            Descargar Informe
          </button>
          {tieneRecurso && (
            <button onClick={handleDescargarRecurso} className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 text-sm font-medium">
              <Scale className="h-4 w-4" />
              Descargar Recurso REMC
            </button>
          )}
        </div>
      </div>

      {/* Tarjeta Recurso REMC */}
      {tieneRecurso && (
        <div className="card p-6 border-l-4 border-amber-500">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Scale className="h-5 w-5 text-amber-600" />
                Recurso REMC Generado
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Se ha generado automaticamente un Recurso Especial en Materia de Contratacion
                con {analisis.cantidad_no_conforme + analisis.cantidad_parcial} clausulas impugnadas
                en {datosRecurso?.recurso_generado_en
                  ? new Date(datosRecurso.recurso_generado_en).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
                  : 'fecha desconocida'}.
              </p>
            </div>
            <button onClick={handleDescargarRecurso}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 text-sm font-medium">
              <Download className="h-4 w-4" />
              Descargar REMC
            </button>
          </div>
        </div>
      )}

      {/* Mensaje de conformidad si no hay recurso */}
      {!tieneRecurso && analisis.cantidad_no_conforme === 0 && analisis.cantidad_parcial === 0 && (
        <div className="card p-6 border-l-4 border-green-500">
          <h3 className="font-semibold text-green-700 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Pliegos Conformes con el ENS
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            No se han detectado incumplimientos significativos. No es necesario generar un Recurso REMC.
          </p>
        </div>
      )}

      {/* Estadisticas resumen */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <TarjetaEstadistica etiqueta="Tasa de Cumplimiento" valor={`${tasaCumplimiento}%`} color="text-primary-600" />
        <TarjetaEstadistica etiqueta="Cumple" valor={analisis.cantidad_conforme} color="text-green-600" icono={<CheckCircle className="h-5 w-5" />} />
        <TarjetaEstadistica etiqueta="Parcial" valor={analisis.cantidad_parcial} color="text-yellow-600" icono={<AlertTriangle className="h-5 w-5" />} />
        <TarjetaEstadistica etiqueta="No Cumple" valor={analisis.cantidad_no_conforme} color="text-red-600" icono={<XCircle className="h-5 w-5" />} />
        <TarjetaEstadistica etiqueta="No Aplica" valor={analisis.cantidad_no_aplica} color="text-gray-500" icono={<MinusCircle className="h-5 w-5" />} />
      </div>

      {/* Trazabilidad de normas */}
      {(analisis.total_requisitos_verificados > 0 || analisis.total_normas_referenciadas > 0) && (
        <div className="card p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Trazabilidad Normativa</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary-600">{analisis.total_requisitos_verificados}</p>
              <p className="text-xs text-gray-500">Requisitos Verificados</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-600">{analisis.total_normas_referenciadas}</p>
              <p className="text-xs text-gray-500">Normas Referenciadas</p>
            </div>
            {analisis.perfil_sectorial && (
              <div>
                <p className="text-lg font-bold text-primary-600 capitalize">{analisis.perfil_sectorial.replace('_', ' ')}</p>
                <p className="text-xs text-gray-500">Perfil Sectorial</p>
              </div>
            )}
            {analisis.proveedores_nube && analisis.proveedores_nube.length > 0 && (
              <div>
                <p className="text-lg font-bold text-primary-600">{analisis.proveedores_nube.join(', ')}</p>
                <p className="text-xs text-gray-500">Proveedores Nube</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Graficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Grafico de tarta de cumplimiento */}
        <div className="card p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Distribucion de Cumplimiento</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={datosTartaCumplimiento}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="valor"
                label={({ nombre, valor }: { nombre: string; valor: number }) => `${nombre}: ${valor}`}
              >
                {datosTartaCumplimiento.map((entrada, indice) => (
                  <Cell key={indice} fill={entrada.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Grafico radar de dimensiones */}
        {datosDimensiones.length > 0 && (
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Dimensiones de Seguridad</h3>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={datosDimensiones}>
                <PolarGrid />
                <PolarAngleAxis dataKey="dimension" />
                <PolarRadiusAxis domain={[0, 3]} tickCount={4} />
                <Radar
                  name="Nivel"
                  dataKey="valor"
                  stroke="#2563eb"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                />
                <Tooltip formatter={(valor: number) => {
                  if (valor === 3) return 'ALTO'
                  if (valor === 2) return 'MEDIO'
                  return 'BAJO'
                }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Justificacion de categoria */}
      {analisis.justificacion_categoria && (
        <div className="card p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Justificacion de Categoria</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{analisis.justificacion_categoria}</p>
        </div>
      )}

      {/* Tabla de hallazgos */}
      <div className="card">
        <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Hallazgos por Control ({hallazgos.length})</h3>
        </div>

        <div className="divide-y divide-gray-200">
          {hallazgos.map((hallazgo) => (
            <div key={hallazgo.id} className="px-5 py-3">
              <button
                onClick={() => setHallazgoExpandido(hallazgoExpandido === hallazgo.id ? null : hallazgo.id)}
                className="w-full text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <IconoCumplimiento nivel={hallazgo.nivel_cumplimiento} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {hallazgo.control_id}: {hallazgo.nombre_control}
                    </p>
                    <p className="text-xs text-gray-500">{hallazgo.resumen_hallazgo}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {hallazgo.prioridad && <BadgePrioridad prioridad={hallazgo.prioridad as PrioridadHallazgo} />}
                  <BadgeCumplimiento nivel={hallazgo.nivel_cumplimiento} />
                  {hallazgoExpandido === hallazgo.id ? (
                    <ChevronUp className="h-4 w-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Detalle IRAC expandido */}
              {hallazgoExpandido === hallazgo.id && (
                <div className="mt-4 ml-8 space-y-3">
                  {hallazgo.irac_asunto && (
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <h4 className="text-xs font-bold uppercase text-gray-500">Analisis IRAC</h4>

                      <div>
                        <p className="text-xs font-semibold text-primary-700">Cuestion (Issue)</p>
                        <p className="text-sm text-gray-700">{hallazgo.irac_asunto}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary-700">Norma (Rule)</p>
                        <p className="text-sm text-gray-700">{hallazgo.irac_regla}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary-700">Aplicacion</p>
                        <p className="text-sm text-gray-700">{hallazgo.irac_aplicacion}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary-700">Conclusion</p>
                        <p className="text-sm text-gray-700">{hallazgo.irac_conclusion}</p>
                      </div>
                    </div>
                  )}

                  {hallazgo.texto_evidencia && (
                    <div className="bg-green-50 border-l-3 border-green-500 p-3 rounded">
                      <p className="text-xs font-semibold text-green-700 mb-1">Evidencia del Documento</p>
                      <p className="text-sm text-gray-700 italic">"{hallazgo.texto_evidencia}"</p>
                    </div>
                  )}

                  {hallazgo.descripcion_brecha && (
                    <div className="bg-red-50 border-l-3 border-red-500 p-3 rounded">
                      <p className="text-xs font-semibold text-red-700 mb-1">Brecha Identificada</p>
                      <p className="text-sm text-gray-700">{hallazgo.descripcion_brecha}</p>
                    </div>
                  )}

                  {hallazgo.recomendacion && (
                    <div className="bg-yellow-50 border-l-3 border-yellow-500 p-3 rounded">
                      <p className="text-xs font-semibold text-yellow-700 mb-1">Recomendacion</p>
                      <p className="text-sm text-gray-700">{hallazgo.recomendacion}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Resumen de costes */}
      {analisis.costo_estimado_usd > 0 && (
        <div className="text-xs text-gray-400 text-right">
          Coste estimado del analisis: ${analisis.costo_estimado_usd.toFixed(4)} USD |{' '}
          Tokens: {analisis.total_tokens_entrada + analisis.total_tokens_salida}
        </div>
      )}
    </div>
  )
}

function TarjetaEstadistica({ etiqueta, valor, color, icono }: {
  etiqueta: string; valor: string | number; color: string; icono?: React.ReactNode
}) {
  return (
    <div className="card p-4 text-center">
      {icono && <div className={`${color} flex justify-center mb-1`}>{icono}</div>}
      <p className={`text-2xl font-bold ${color}`}>{valor}</p>
      <p className="text-xs text-gray-500">{etiqueta}</p>
    </div>
  )
}

function IconoCumplimiento({ nivel }: { nivel: NivelCumplimiento }) {
  switch (nivel) {
    case 'CONFORME': return <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
    case 'PARCIALMENTE_CONFORME': return <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
    case 'NO_CONFORME': return <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
    case 'NO_APLICA': return <MinusCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
  }
}

function BadgeCumplimiento({ nivel }: { nivel: NivelCumplimiento }) {
  const clases: Record<NivelCumplimiento, string> = {
    CONFORME: 'badge-compliant',
    PARCIALMENTE_CONFORME: 'badge-partial',
    NO_CONFORME: 'badge-non-compliant',
    NO_APLICA: 'badge-not-applicable',
  }
  const etiquetas: Record<NivelCumplimiento, string> = {
    CONFORME: 'Cumple',
    PARCIALMENTE_CONFORME: 'Parcial',
    NO_CONFORME: 'No Cumple',
    NO_APLICA: 'N/A',
  }
  return <span className={clases[nivel]}>{etiquetas[nivel]}</span>
}

function BadgePrioridad({ prioridad }: { prioridad: PrioridadHallazgo }) {
  const clases: Record<PrioridadHallazgo, string> = {
    CRITICA: 'bg-red-600 text-white',
    ALTA: 'bg-red-100 text-red-700',
    MEDIA: 'bg-yellow-100 text-yellow-700',
    BAJA: 'bg-gray-100 text-gray-600',
  }
  return <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${clases[prioridad]}`}>{prioridad}</span>
}
