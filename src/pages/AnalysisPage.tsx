import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ScanSearch, FileText, Play, AlertCircle, Shield, Upload,
  ChevronRight, ChevronLeft, Building2, Briefcase, Check,
  User, Scale, Loader2, BookOpen,
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { subirDocumento, procesarFragmentosDocumento } from '@/services/document-service'
import { crearAnalisis, iniciarPipeline } from '@/services/analysis-service'
import { useAnalysisStore } from '@/stores/analysis-store'
import {
  verificarNormasIngresadas,
  ingestarNormasDirectas,
  type ProgresoIngesta,
} from '@/services/norma-ingestion-service'
import {
  TIPOS_CONTRACTUALES,
  PROCEDIMIENTOS,
  TRIBUNALES,
  NIVELES_ORGANO,
  type DatosRecursoFormulario,
} from '@/types/recurso'

const PASOS = [
  { titulo: 'Recurrente', icono: Building2 },
  { titulo: 'Expediente', icono: Briefcase },
  { titulo: 'Documentos', icono: FileText },
  { titulo: 'Confirmar', icono: Check },
] as const

type EstadoSubida = 'idle' | 'extrayendo' | 'fragmentando' | 'completado' | 'error'

interface DocumentoSubido {
  id: string
  nombre: string
  paginas: number
  estado: EstadoSubida
  error?: string
}

export function AnalysisPage() {
  const { organizacionId, usuario } = useAuth()
  const navigate = useNavigate()
  const establecerAnalisisActivo = useAnalysisStore((s) => s.establecerAnalisisActivo)

  // Estado de ingesta de normas
  const [normasListas, setNormasListas] = useState<boolean | null>(null) // null = verificando
  const [progresoIngesta, setProgresoIngesta] = useState<ProgresoIngesta | null>(null)

  // Verificar e ingestar normas al montar
  useEffect(() => {
    let cancelado = false
    async function verificarEIngestar() {
      const { ingresadas } = await verificarNormasIngresadas()
      if (cancelado) return
      if (ingresadas) {
        setNormasListas(true)
        return
      }
      // Ingestar normas automaticamente
      setNormasListas(false)
      await ingestarNormasDirectas((progreso) => {
        if (!cancelado) setProgresoIngesta(progreso)
      })
      if (!cancelado) {
        setNormasListas(true)
        setProgresoIngesta(null)
      }
    }
    verificarEIngestar()
    return () => { cancelado = true }
  }, [])

  const [pasoActual, setPasoActual] = useState(0)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Paso 1: Datos del recurrente
  const [recurrente, setRecurrente] = useState({
    denominacion: '',
    cif: '',
    domicilio: '',
    registroMercantil: '',
    objetoSocial: '',
    cnae: '',
    email: '',
    telefono: '',
    representanteNombre: '',
    representanteTitulo: '',
    representanteFacultades: '',
  })

  // Paso 2: Datos del expediente
  const [expediente, setExpediente] = useState({
    numero: '',
    denominacion: '',
    tipoContractual: 'servicios',
    procedimiento: 'abierto',
    valorEstimado: '',
    presupuestoBase: '',
    duracion: '',
    cpv: '',
    organoContratacion: '',
    organoNivel: 'estatal',
    tribunalCompetente: 'TACRC',
    fechaPublicacionPerfil: '',
    fechaPublicacionDoue: '',
    esContratoSara: false,
    diesAQuo: '',
    diesAdQuem: '',
  })

  // Paso 3: Documentos
  const [docPCAP, setDocPCAP] = useState<DocumentoSubido | null>(null)
  const [docPPT, setDocPPT] = useState<DocumentoSubido | null>(null)
  const [progresoSubida, setProgresoSubida] = useState<string | null>(null)

  // ─── Validacion por paso ────────────────────────────────────────────

  function validarPaso(paso: number): string | null {
    if (paso === 0) {
      if (!recurrente.denominacion.trim()) return 'La denominacion social es obligatoria'
      if (!recurrente.cif.trim()) return 'El CIF es obligatorio'
      if (!recurrente.domicilio.trim()) return 'El domicilio es obligatorio'
      if (!recurrente.representanteNombre.trim()) return 'El nombre del representante es obligatorio'
      if (!recurrente.representanteTitulo.trim()) return 'El titulo del representante es obligatorio'
    }
    if (paso === 1) {
      if (!expediente.numero.trim()) return 'El numero de expediente es obligatorio'
      if (!expediente.denominacion.trim()) return 'La denominacion del contrato es obligatoria'
      if (!expediente.organoContratacion.trim()) return 'El organo de contratacion es obligatorio'
    }
    if (paso === 2) {
      if (!docPCAP || docPCAP.estado !== 'completado') return 'Debes subir el Pliego Administrativo (PCAP)'
      if (!docPPT || docPPT.estado !== 'completado') return 'Debes subir el Pliego Tecnico (PPT)'
    }
    return null
  }

  function handleSiguiente() {
    const errorValidacion = validarPaso(pasoActual)
    if (errorValidacion) {
      setError(errorValidacion)
      return
    }
    setError(null)
    setPasoActual((p) => Math.min(p + 1, 3))
  }

  function handleAnterior() {
    setError(null)
    setPasoActual((p) => Math.max(p - 1, 0))
  }

  // ─── Subida de documentos ───────────────────────────────────────────

  const handleSubirDoc = useCallback(async (
    archivo: File,
    tipo: 'PCAP' | 'PPT',
  ) => {
    if (!organizacionId || !usuario) return

    const setDoc = tipo === 'PCAP' ? setDocPCAP : setDocPPT
    const tipoDoc = tipo === 'PCAP' ? 'DOCUMENTO_LEGAL' as const : 'PLIEGO_TECNICO' as const

    setDoc({ id: '', nombre: archivo.name, paginas: 0, estado: 'extrayendo' })
    setError(null)

    try {
      setProgresoSubida(`Extrayendo texto de ${tipo}...`)
      const { documentoId, resultadoExtraccion } = await subirDocumento(
        archivo,
        archivo.name,
        tipoDoc,
        organizacionId,
        usuario.id,
        (progreso) => {
          if (progreso.estado === 'extrayendo') {
            setProgresoSubida(`${tipo}: Extrayendo pagina ${progreso.paginaActual}/${progreso.totalPaginas}`)
          }
        },
      )

      setDoc({ id: documentoId, nombre: archivo.name, paginas: resultadoExtraccion.numeroPaginas, estado: 'fragmentando' })
      setProgresoSubida(`${tipo}: Fragmentando documento...`)

      await procesarFragmentosDocumento(documentoId, resultadoExtraccion.bloquesEstructurados)

      setDoc({ id: documentoId, nombre: archivo.name, paginas: resultadoExtraccion.numeroPaginas, estado: 'completado' })
      setProgresoSubida(null)
    } catch (err) {
      setDoc({ id: '', nombre: archivo.name, paginas: 0, estado: 'error', error: err instanceof Error ? err.message : 'Error desconocido' })
      setProgresoSubida(null)
      setError(`Error al subir ${tipo}: ${err instanceof Error ? err.message : 'Error desconocido'}`)
    }
  }, [organizacionId, usuario])

  // ─── Calcular dies ad quem automAticamente ──────────────────────────

  function calcularDiesAdQuem(diesAQuo: string): string {
    if (!diesAQuo) return ''
    const fecha = new Date(diesAQuo)
    let diasHabiles = 0
    while (diasHabiles < 15) {
      fecha.setDate(fecha.getDate() + 1)
      const dia = fecha.getDay()
      if (dia !== 0 && dia !== 6) diasHabiles++
    }
    return fecha.toISOString().split('T')[0]!
  }

  // ─── Iniciar analisis ───────────────────────────────────────────────

  async function handleIniciar() {
    if (!organizacionId || !usuario || !docPCAP || !docPPT) return

    const errorValidacion = validarPaso(2)
    if (errorValidacion) {
      setError(errorValidacion)
      return
    }

    setCargando(true)
    setError(null)

    try {
      const datosRecurso: DatosRecursoFormulario = {
        tribunal_competente: expediente.tribunalCompetente,
        recurrente_denominacion: recurrente.denominacion,
        recurrente_cif: recurrente.cif,
        recurrente_domicilio: recurrente.domicilio,
        recurrente_registro_mercantil: recurrente.registroMercantil || undefined,
        recurrente_objeto_social: recurrente.objetoSocial || undefined,
        recurrente_cnae: recurrente.cnae || undefined,
        recurrente_email: recurrente.email || undefined,
        recurrente_telefono: recurrente.telefono || undefined,
        representante_nombre: recurrente.representanteNombre,
        representante_titulo: recurrente.representanteTitulo,
        representante_facultades: recurrente.representanteFacultades || undefined,
        expediente_numero: expediente.numero,
        expediente_denominacion: expediente.denominacion,
        expediente_tipo_contractual: expediente.tipoContractual,
        expediente_procedimiento: expediente.procedimiento,
        expediente_valor_estimado: expediente.valorEstimado ? parseFloat(expediente.valorEstimado) : undefined,
        expediente_presupuesto_base: expediente.presupuestoBase ? parseFloat(expediente.presupuestoBase) : undefined,
        expediente_duracion: expediente.duracion || undefined,
        expediente_cpv: expediente.cpv || undefined,
        organo_contratacion: expediente.organoContratacion,
        organo_nivel: expediente.organoNivel || undefined,
        fecha_publicacion_perfil: expediente.fechaPublicacionPerfil || undefined,
        fecha_publicacion_doue: expediente.fechaPublicacionDoue || undefined,
        es_contrato_sara: expediente.esContratoSara,
        dies_a_quo: expediente.diesAQuo || undefined,
        dies_ad_quem: expediente.diesAdQuem || undefined,
      }

      const analisisId = await crearAnalisis(
        organizacionId,
        usuario.id,
        docPCAP.id,
        docPPT.id,
        datosRecurso,
      )

      establecerAnalisisActivo(analisisId)
      await iniciarPipeline(analisisId)

      navigate(`/analysis/${analisisId}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar analisis')
      setCargando(false)
    }
  }

  // ─── Render ─────────────────────────────────────────────────────────

  // ─── Pantalla de ingesta de normas ─────────────────────────────────
  if (normasListas === null || normasListas === false) {
    return (
      <div className="max-w-2xl mx-auto mt-16 space-y-6">
        <div className="text-center">
          <BookOpen className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">Preparando Base de Normas ENS</h2>
          <p className="text-sm text-gray-500 mt-2">
            {normasListas === null
              ? 'Verificando si las normas CCN-STIC estan cargadas...'
              : 'Cargando las 121 normas CCN-STIC para el analisis. Esto solo ocurre la primera vez.'}
          </p>
        </div>

        {progresoIngesta && (
          <div className="card p-6 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">
                {progresoIngesta.fase === 'verificando' && 'Verificando...'}
                {progresoIngesta.fase === 'fragmentando' && 'Fragmentando normas...'}
                {progresoIngesta.fase === 'embeddings' && 'Generando embeddings...'}
                {progresoIngesta.fase === 'completado' && 'Completado'}
                {progresoIngesta.fase === 'error' && 'Error'}
              </span>
              <span className="text-gray-500">{progresoIngesta.actual}/{progresoIngesta.total}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progresoIngesta.total > 0 ? (progresoIngesta.actual / progresoIngesta.total) * 100 : 0}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 truncate">{progresoIngesta.mensaje}</p>
          </div>
        )}

        {!progresoIngesta && (
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 text-primary-600 animate-spin" />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Nuevo Analisis ENS + Recurso REMC</h2>
        <p className="text-sm text-gray-500 mt-1">
          Completa los datos del recurrente, expediente, sube los pliegos y lanza el analisis
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Indicador de pasos */}
      <div className="flex items-center justify-between">
        {PASOS.map((paso, idx) => {
          const IconoPaso = paso.icono
          const esActivo = idx === pasoActual
          const esCompletado = idx < pasoActual
          return (
            <div key={idx} className="flex items-center flex-1">
              <button
                onClick={() => { if (idx < pasoActual) { setError(null); setPasoActual(idx) } }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  esActivo ? 'bg-primary-100 text-primary-700' :
                  esCompletado ? 'bg-green-100 text-green-700 cursor-pointer' :
                  'bg-gray-100 text-gray-400'
                }`}
              >
                {esCompletado ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <IconoPaso className="h-4 w-4" />
                )}
                <span className="hidden sm:inline">{paso.titulo}</span>
                <span className="sm:hidden">{idx + 1}</span>
              </button>
              {idx < 3 && <div className={`flex-1 h-0.5 mx-2 ${esCompletado ? 'bg-green-300' : 'bg-gray-200'}`} />}
            </div>
          )
        })}
      </div>

      {/* Contenido del paso */}
      <div className="card p-6">
        {pasoActual === 0 && (
          <PasoRecurrente recurrente={recurrente} setRecurrente={setRecurrente} />
        )}
        {pasoActual === 1 && (
          <PasoExpediente
            expediente={expediente}
            setExpediente={setExpediente}
            calcularDiesAdQuem={calcularDiesAdQuem}
          />
        )}
        {pasoActual === 2 && (
          <PasoDocumentos
            docPCAP={docPCAP}
            docPPT={docPPT}
            progresoSubida={progresoSubida}
            onSubir={handleSubirDoc}
          />
        )}
        {pasoActual === 3 && (
          <PasoConfirmar
            recurrente={recurrente}
            expediente={expediente}
            docPCAP={docPCAP}
            docPPT={docPPT}
          />
        )}
      </div>

      {/* Navegacion */}
      <div className="flex justify-between">
        <button
          onClick={handleAnterior}
          disabled={pasoActual === 0}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
          Anterior
        </button>

        {pasoActual < 3 ? (
          <button
            onClick={handleSiguiente}
            className="btn-primary flex items-center gap-1"
          >
            Siguiente
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleIniciar}
            disabled={cargando}
            className="btn-primary flex items-center gap-2"
          >
            {cargando ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
            {cargando ? 'Iniciando...' : 'Iniciar Analisis y Recurso'}
          </button>
        )}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// PASO 1: Datos del recurrente
// ═══════════════════════════════════════════════════════════════════════

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PasoRecurrente({ recurrente, setRecurrente }: {
  recurrente: Record<string, string>
  setRecurrente: (fn: (prev: any) => any) => void
}) {
  const set = (campo: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setRecurrente((prev) => ({ ...prev, [campo]: e.target.value }))

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Building2 className="h-5 w-5 text-primary-600" />
        <h3 className="font-semibold text-gray-900">Datos del Recurrente</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Denominacion Social *</label>
          <input type="text" value={recurrente.denominacion} onChange={set('denominacion')}
            placeholder="Empresa Tecnologica S.L." className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CIF *</label>
          <input type="text" value={recurrente.cif} onChange={set('cif')}
            placeholder="B12345678" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CNAE</label>
          <input type="text" value={recurrente.cnae} onChange={set('cnae')}
            placeholder="6201" className="input-field" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Domicilio Social *</label>
          <input type="text" value={recurrente.domicilio} onChange={set('domicilio')}
            placeholder="Calle Gran Via 28, 28013 Madrid" className="input-field" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Registro Mercantil</label>
          <input type="text" value={recurrente.registroMercantil} onChange={set('registroMercantil')}
            placeholder="Tomo XXXX, Folio XX, Hoja M-XXXXXX" className="input-field" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Objeto Social (extracto relevante)</label>
          <textarea value={recurrente.objetoSocial} onChange={set('objetoSocial')} rows={2}
            placeholder="Consultoria y desarrollo de soluciones tecnologicas..." className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email de Contacto</label>
          <input type="email" value={recurrente.email} onChange={set('email')}
            placeholder="legal@empresa.com" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
          <input type="tel" value={recurrente.telefono} onChange={set('telefono')}
            placeholder="+34 91 123 45 67" className="input-field" />
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex items-center gap-2 mb-2">
        <User className="h-5 w-5 text-primary-600" />
        <h3 className="font-semibold text-gray-900">Representante Legal</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo *</label>
          <input type="text" value={recurrente.representanteNombre} onChange={set('representanteNombre')}
            placeholder="Juan Garcia Lopez" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Titulo / Cargo *</label>
          <input type="text" value={recurrente.representanteTitulo} onChange={set('representanteTitulo')}
            placeholder="Administrador Unico / Apoderado" className="input-field" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Facultades de Representacion</label>
          <input type="text" value={recurrente.representanteFacultades} onChange={set('representanteFacultades')}
            placeholder="Poder notarial otorgado ante el Notario..." className="input-field" />
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// PASO 2: Datos del expediente
// ═══════════════════════════════════════════════════════════════════════

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PasoExpediente({ expediente, setExpediente, calcularDiesAdQuem }: {
  expediente: Record<string, string | boolean>
  setExpediente: (fn: (prev: any) => any) => void
  calcularDiesAdQuem: (diesAQuo: string) => string
}) {
  const set = (campo: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setExpediente((prev) => ({ ...prev, [campo]: e.target.value }))

  const setCheck = (campo: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setExpediente((prev) => ({ ...prev, [campo]: e.target.checked }))

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Briefcase className="h-5 w-5 text-primary-600" />
        <h3 className="font-semibold text-gray-900">Datos del Expediente</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Numero de Expediente *</label>
          <input type="text" value={expediente.numero as string} onChange={set('numero')}
            placeholder="EXP-2024/001234" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CPV</label>
          <input type="text" value={expediente.cpv as string} onChange={set('cpv')}
            placeholder="72000000-5" className="input-field" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Denominacion del Contrato *</label>
          <input type="text" value={expediente.denominacion as string} onChange={set('denominacion')}
            placeholder="Servicio de mantenimiento de sistemas informaticos..." className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo Contractual</label>
          <select value={expediente.tipoContractual as string} onChange={set('tipoContractual')} className="input-field">
            {TIPOS_CONTRACTUALES.map((t) => <option key={t.valor} value={t.valor}>{t.etiqueta}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Procedimiento</label>
          <select value={expediente.procedimiento as string} onChange={set('procedimiento')} className="input-field">
            {PROCEDIMIENTOS.map((p) => <option key={p.valor} value={p.valor}>{p.etiqueta}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Valor Estimado (EUR)</label>
          <input type="number" value={expediente.valorEstimado as string} onChange={set('valorEstimado')}
            placeholder="500000.00" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Presupuesto Base (EUR)</label>
          <input type="number" value={expediente.presupuestoBase as string} onChange={set('presupuestoBase')}
            placeholder="400000.00" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Duracion y Prorrogas</label>
          <input type="text" value={expediente.duracion as string} onChange={set('duracion')}
            placeholder="24 meses + 12 prorroga" className="input-field" />
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex items-center gap-2 mb-2">
        <Scale className="h-5 w-5 text-primary-600" />
        <h3 className="font-semibold text-gray-900">Organo de Contratacion y Tribunal</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Organo de Contratacion *</label>
          <input type="text" value={expediente.organoContratacion as string} onChange={set('organoContratacion')}
            placeholder="Ministerio de Transformacion Digital" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nivel Territorial</label>
          <select value={expediente.organoNivel as string} onChange={set('organoNivel')} className="input-field">
            {NIVELES_ORGANO.map((n) => <option key={n.valor} value={n.valor}>{n.etiqueta}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tribunal Competente</label>
          <select value={expediente.tribunalCompetente as string} onChange={set('tribunalCompetente')} className="input-field">
            {TRIBUNALES.map((t) => <option key={t.valor} value={t.valor}>{t.etiqueta}</option>)}
          </select>
        </div>
      </div>

      <hr className="border-gray-200" />

      <h4 className="font-medium text-gray-800">Publicacion y Plazos</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Publicacion Perfil</label>
          <input type="date" value={expediente.fechaPublicacionPerfil as string} onChange={set('fechaPublicacionPerfil')} className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Publicacion DOUE</label>
          <input type="date" value={expediente.fechaPublicacionDoue as string} onChange={set('fechaPublicacionDoue')} className="input-field" />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="sara" checked={expediente.esContratoSara as boolean}
            onChange={setCheck('esContratoSara')} className="rounded border-gray-300" />
          <label htmlFor="sara" className="text-sm font-medium text-gray-700">Contrato SARA (sujeto a regulacion armonizada)</label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Dies a quo (inicio plazo)</label>
          <input type="date" value={expediente.diesAQuo as string}
            onChange={(e) => {
              const val = e.target.value
              setExpediente((prev) => ({
                ...prev,
                diesAQuo: val,
                diesAdQuem: calcularDiesAdQuem(val),
              }))
            }}
            className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Dies ad quem (fin plazo, auto-calculado)</label>
          <input type="date" value={expediente.diesAdQuem as string} onChange={set('diesAdQuem')} className="input-field" />
          <p className="text-xs text-gray-400 mt-1">15 dias habiles desde dies a quo (editable)</p>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// PASO 3: Documentos
// ═══════════════════════════════════════════════════════════════════════

function PasoDocumentos({ docPCAP, docPPT, progresoSubida, onSubir }: {
  docPCAP: DocumentoSubido | null
  docPPT: DocumentoSubido | null
  progresoSubida: string | null
  onSubir: (archivo: File, tipo: 'PCAP' | 'PPT') => void
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <FileText className="h-5 w-5 text-primary-600" />
        <h3 className="font-semibold text-gray-900">Pliegos a Analizar</h3>
      </div>

      <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-blue-700">
          <p className="font-medium">Sube ambos pliegos para el analisis</p>
          <p className="mt-1">
            Se analizaran contra las 121 normas CCN-STIC del ENS. Si se detectan incumplimientos,
            se generara automaticamente un Recurso REMC con el formato obligatorio.
          </p>
        </div>
      </div>

      {progresoSubida && (
        <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
          <Loader2 className="h-4 w-4 animate-spin flex-shrink-0" />
          {progresoSubida}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ZonaSubida
          titulo="Pliego Administrativo (PCAP)"
          descripcion="Pliego de Clausulas Administrativas Particulares"
          doc={docPCAP}
          onSubir={(archivo) => onSubir(archivo, 'PCAP')}
          obligatorio
        />
        <ZonaSubida
          titulo="Pliego Tecnico (PPT)"
          descripcion="Pliego de Prescripciones Tecnicas"
          doc={docPPT}
          onSubir={(archivo) => onSubir(archivo, 'PPT')}
          obligatorio
        />
      </div>
    </div>
  )
}

function ZonaSubida({ titulo, descripcion, doc, onSubir, obligatorio }: {
  titulo: string
  descripcion: string
  doc: DocumentoSubido | null
  onSubir: (archivo: File) => void
  obligatorio?: boolean
}) {
  const estaSubiendo = doc?.estado === 'extrayendo' || doc?.estado === 'fragmentando'

  return (
    <div className={`border-2 border-dashed rounded-lg p-6 text-center ${
      doc?.estado === 'completado' ? 'border-green-300 bg-green-50' :
      doc?.estado === 'error' ? 'border-red-300 bg-red-50' :
      estaSubiendo ? 'border-blue-300 bg-blue-50' :
      'border-gray-300 hover:border-primary-400'
    }`}>
      {doc?.estado === 'completado' ? (
        <div>
          <Check className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <p className="text-sm font-medium text-green-700">{doc.nombre}</p>
          <p className="text-xs text-green-600 mt-1">{doc.paginas} paginas procesadas</p>
        </div>
      ) : estaSubiendo ? (
        <div>
          <Loader2 className="h-8 w-8 text-blue-500 mx-auto mb-2 animate-spin" />
          <p className="text-sm font-medium text-blue-700">
            {doc?.estado === 'extrayendo' ? 'Extrayendo texto...' : 'Fragmentando...'}
          </p>
        </div>
      ) : (
        <label className="cursor-pointer block">
          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-700">{titulo} {obligatorio && '*'}</p>
          <p className="text-xs text-gray-500 mt-1">{descripcion}</p>
          <p className="text-xs text-gray-400 mt-2">PDF (max. 50MB)</p>
          {doc?.estado === 'error' && (
            <p className="text-xs text-red-600 mt-2">{doc.error}</p>
          )}
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => {
              const archivo = e.target.files?.[0]
              if (archivo) onSubir(archivo)
            }}
          />
        </label>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// PASO 4: Confirmar
// ═══════════════════════════════════════════════════════════════════════

function PasoConfirmar({ recurrente, expediente, docPCAP, docPPT }: {
  recurrente: Record<string, string>
  expediente: Record<string, string | boolean>
  docPCAP: DocumentoSubido | null
  docPPT: DocumentoSubido | null
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <ScanSearch className="h-5 w-5 text-primary-600" />
        <h3 className="font-semibold text-gray-900">Confirmar y Lanzar Analisis</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 uppercase font-medium mb-2">Recurrente</p>
          <p className="text-sm font-medium text-gray-900">{recurrente.denominacion}</p>
          <p className="text-xs text-gray-600">CIF: {recurrente.cif}</p>
          <p className="text-xs text-gray-600">Rep: {recurrente.representanteNombre}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 uppercase font-medium mb-2">Expediente</p>
          <p className="text-sm font-medium text-gray-900">{expediente.numero}</p>
          <p className="text-xs text-gray-600">{expediente.denominacion}</p>
          <p className="text-xs text-gray-600">Organo: {expediente.organoContratacion}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 uppercase font-medium mb-2">Pliego Administrativo (PCAP)</p>
          <p className="text-sm font-medium text-gray-900">{docPCAP?.nombre ?? '-'}</p>
          <p className="text-xs text-gray-600">{docPCAP?.paginas ?? 0} paginas</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 uppercase font-medium mb-2">Pliego Tecnico (PPT)</p>
          <p className="text-sm font-medium text-gray-900">{docPPT?.nombre ?? '-'}</p>
          <p className="text-xs text-gray-600">{docPPT?.paginas ?? 0} paginas</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-700">
            Se analizaran <strong>ambos pliegos</strong> contra las 121 normas CCN-STIC del ENS
            en 4 fases: Clasificacion, Verificacion de Requisitos, Analisis Profundo y Generacion de Informe.
          </p>
        </div>
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-700">
            Si se detectan incumplimientos, se generara automaticamente un <strong>Recurso Especial en Materia
            de Contratacion (REMC)</strong> con las 14 secciones obligatorias del formato reglamentario.
          </p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            El proceso completo puede tardar entre 5-15 minutos. Podras seguir el progreso en tiempo real.
          </p>
        </div>
      </div>
    </div>
  )
}
