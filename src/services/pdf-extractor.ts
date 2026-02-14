import * as pdfjsLib from 'pdfjs-dist'
import type { PaginaExtraida, ElementoTexto } from '@/types/analysis'
import type { ProgresoExtraccionPDF } from '@/types/document'
import { supabase } from '@/config/supabase'

// Configurar worker de pdf.js
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url
).toString()

export type CallbackProgreso = (progreso: ProgresoExtraccionPDF) => void

// Umbral minimo de caracteres por pagina para considerar texto valido
const UMBRAL_TEXTO_MINIMO = 50

export async function extraerTextoDePDF(
  archivo: File,
  alProgresar?: CallbackProgreso
): Promise<{ paginas: PaginaExtraida[]; numeroPaginas: number }> {
  const bufferArray = await archivo.arrayBuffer()

  alProgresar?.({
    estado: 'cargando',
    paginaActual: 0,
    totalPaginas: 0,
    porcentajeCompletado: 0,
  })

  const pdf = await pdfjsLib.getDocument({ data: bufferArray }).promise
  const totalPaginas = pdf.numPages
  const paginas: PaginaExtraida[] = []

  alProgresar?.({
    estado: 'extrayendo',
    paginaActual: 0,
    totalPaginas,
    porcentajeCompletado: 0,
  })

  // Fase 1: Intentar extraccion de texto normal con pdfjs
  let paginasVacias = 0

  for (let i = 1; i <= totalPaginas; i++) {
    const pagina = await pdf.getPage(i)
    const contenidoTexto = await pagina.getTextContent()

    const elementos: ElementoTexto[] = contenidoTexto.items
      .filter((elemento) => 'str' in elemento && (elemento as { str: string }).str.trim().length > 0)
      .map((elemento) => {
        const elementoTexto = elemento as { str: string; transform: number[]; fontName: string }
        return {
          texto: elementoTexto.str,
          x: elementoTexto.transform[4] ?? 0,
          y: elementoTexto.transform[5] ?? 0,
          tamanoFuente: Math.abs(elementoTexto.transform[0] ?? 12),
          nombreFuente: elementoTexto.fontName ?? '',
        }
      })

    const texto = reconstruirTextoPagina(elementos)

    if (texto.trim().length < UMBRAL_TEXTO_MINIMO) {
      paginasVacias++
    }

    paginas.push({
      numeroPagina: i,
      texto,
      elementos,
    })

    alProgresar?.({
      estado: 'extrayendo',
      paginaActual: i,
      totalPaginas,
      porcentajeCompletado: Math.round((i / totalPaginas) * 50), // 0-50% para extraccion normal
    })
  }

  // Fase 2: Si mas de la mitad de paginas estan vacias, es un PDF escaneado -> usar OCR
  const proporcionVacias = paginasVacias / totalPaginas
  if (proporcionVacias > 0.5 && totalPaginas > 0) {
    console.log(`PDF escaneado detectado: ${paginasVacias}/${totalPaginas} paginas vacias. Iniciando OCR...`)

    alProgresar?.({
      estado: 'extrayendo',
      paginaActual: 0,
      totalPaginas,
      porcentajeCompletado: 50,
    })

    for (let i = 0; i < paginas.length; i++) {
      const pagina = paginas[i]!

      // Solo aplicar OCR a paginas con texto insuficiente
      if (pagina.texto.trim().length >= UMBRAL_TEXTO_MINIMO) continue

      try {
        const pdfPage = await pdf.getPage(i + 1)
        const imagenBase64 = await renderizarPaginaABase64(pdfPage)

        const { data, error } = await supabase.functions.invoke('ocr-page', {
          body: { imagenBase64, numeroPagina: i + 1 },
        })

        if (error) {
          console.error(`OCR pagina ${i + 1} error:`, error.message)
          continue
        }

        const textoOCR = data?.texto ?? ''
        if (textoOCR.trim().length > 0) {
          paginas[i] = {
            numeroPagina: i + 1,
            texto: textoOCR,
            elementos: [], // OCR no produce elementos posicionales
          }
        }
      } catch (err) {
        console.error(`OCR pagina ${i + 1} fallo:`, err)
      }

      alProgresar?.({
        estado: 'extrayendo',
        paginaActual: i + 1,
        totalPaginas,
        porcentajeCompletado: 50 + Math.round(((i + 1) / totalPaginas) * 45), // 50-95%
      })
    }
  }

  return { paginas, numeroPaginas: totalPaginas }
}

/**
 * Renderiza una pagina PDF a una imagen PNG en base64
 */
async function renderizarPaginaABase64(pagina: pdfjsLib.PDFPageProxy): Promise<string> {
  const escala = 2.0 // 2x para buena calidad OCR
  const viewport = pagina.getViewport({ scale: escala })

  const canvas = document.createElement('canvas')
  canvas.width = viewport.width
  canvas.height = viewport.height

  const ctx = canvas.getContext('2d')!
  await pagina.render({
    canvasContext: ctx,
    viewport,
  }).promise

  // Convertir a base64 PNG (sin el prefijo data:image/png;base64,)
  const dataUrl = canvas.toDataURL('image/png', 0.85)
  const base64 = dataUrl.split(',')[1]!

  // Limpiar
  canvas.width = 0
  canvas.height = 0

  return base64
}

function reconstruirTextoPagina(elementos: ElementoTexto[]): string {
  if (elementos.length === 0) return ''

  // Ordenar por posicion Y (descendente, ya que Y en PDF es de abajo hacia arriba) luego posicion X
  const ordenados = [...elementos].sort((a, b) => {
    const diffY = b.y - a.y
    if (Math.abs(diffY) > 3) return diffY // Lineas diferentes
    return a.x - b.x // Misma linea, ordenar de izquierda a derecha
  })

  const lineas: string[] = []
  let lineaActual = ''
  let ultimoY = ordenados[0]?.y ?? 0

  for (const elemento of ordenados) {
    const diffY = Math.abs(elemento.y - ultimoY)

    if (diffY > 3) {
      // Nueva linea
      if (lineaActual.trim()) {
        lineas.push(lineaActual.trim())
      }
      lineaActual = elemento.texto
    } else {
      // Misma linea
      lineaActual += (lineaActual.endsWith(' ') || elemento.texto.startsWith(' ') ? '' : ' ') + elemento.texto
    }

    ultimoY = elemento.y
  }

  if (lineaActual.trim()) {
    lineas.push(lineaActual.trim())
  }

  return lineas.join('\n')
}
