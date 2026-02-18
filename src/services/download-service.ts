/**
 * Servicio de descarga de documentos en PDF y Word (DOCX).
 * Convierte HTML generado por recurso-service e informe-grafico-service.
 *
 * PDF: Abre el HTML en una nueva pestaña y lanza window.print() automaticamente.
 *      El usuario selecciona "Guardar como PDF" en el dialogo de impresion.
 *      Usa el motor de renderizado nativo del navegador (100% fiel al HTML/CSS).
 * Word: Genera HTML con namespaces Office y descarga como .doc.
 */

// ─── PDF: ventana nueva + impresion nativa del navegador ─────────────────────

function descargarComoPDF(html: string, nombreArchivo: string): void {
  const titulo = nombreArchivo.replace(/\.pdf$/i, '')

  // Inyectar titulo (nombre del archivo en el dialogo de impresion)
  // y script de auto-impresion tras cargar
  const htmlConPrint = html.replace(
    '</head>',
    `<title>${titulo}</title>\n</head>`
  ).replace(
    '</body>',
    `<script>
window.addEventListener('load', function() {
  setTimeout(function() { window.print(); }, 400);
});
<\/script>\n</body>`
  )

  const blob = new Blob([htmlConPrint], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  const win = window.open(url, '_blank')

  if (!win) {
    // Popup bloqueado: descargar como HTML para que el usuario lo abra manualmente
    URL.revokeObjectURL(url)
    const blobFallback = new Blob([html], { type: 'text/html;charset=utf-8' })
    const urlFallback = URL.createObjectURL(blobFallback)
    const a = document.createElement('a')
    a.href = urlFallback
    a.download = titulo + '.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(urlFallback)
  }
}

// ─── Word: HTML con namespaces Office (compatible Word/LibreOffice) ──────────

function extraerContenidoHTML(html: string): { estilos: string; cuerpo: string } {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  let estilos = ''
  doc.querySelectorAll('style').forEach(s => { estilos += s.outerHTML + '\n' })

  const cuerpo = doc.body?.innerHTML ?? html

  return { estilos, cuerpo }
}

function descargarComoWord(html: string, nombreArchivo: string): void {
  const { estilos: estilosOriginales, cuerpo } = extraerContenidoHTML(html)

  const parser = new DOMParser()
  const tempDoc = parser.parseFromString(estilosOriginales, 'text/html')
  let cssOriginal = ''
  tempDoc.querySelectorAll('style').forEach(s => { cssOriginal += s.textContent + '\n' })

  const htmlWord = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="UTF-8">
<!--[if gte mso 9]>
<xml>
  <w:WordDocument>
    <w:View>Print</w:View>
    <w:Zoom>100</w:Zoom>
    <w:DoNotOptimizeForBrowser/>
  </w:WordDocument>
</xml>
<![endif]-->
<style>
  @page { size: A4; margin: 2.54cm 2.54cm 2.54cm 3cm; }
  body { font-family: Georgia, 'Times New Roman', serif; font-size: 11.5pt; line-height: 1.6; color: #1a1a1a; }
  h1 { font-size: 16pt; font-weight: bold; margin-top: 24pt; margin-bottom: 12pt; }
  h2 { font-size: 14pt; font-weight: bold; margin-top: 18pt; margin-bottom: 10pt; }
  h3 { font-size: 12pt; font-weight: bold; margin-top: 14pt; margin-bottom: 8pt; }
  h4 { font-size: 11.5pt; font-weight: bold; margin-top: 12pt; margin-bottom: 6pt; }
  p { margin-top: 0; margin-bottom: 6pt; text-align: justify; }
  table { border-collapse: collapse; width: 100%; }
  td, th { border: 1px solid #999; padding: 4pt 6pt; font-size: 10pt; }
  th { background-color: #f0f0f0; font-weight: bold; }
  ${cssOriginal}
</style>
</head>
<body>${cuerpo}</body>
</html>`

  const blob = new Blob(['\ufeff' + htmlWord], { type: 'application/msword' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nombreArchivo
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// ─── Exports ─────────────────────────────────────────────────────────────────

export async function descargarRecursoPDF(html: string, expediente: string): Promise<void> {
  const nombre = `REMC-${expediente.replace(/\//g, '-')}.pdf`
  descargarComoPDF(html, nombre)
}

export async function descargarRecursoWord(html: string, expediente: string): Promise<void> {
  const nombre = `REMC-${expediente.replace(/\//g, '-')}.doc`
  descargarComoWord(html, nombre)
}

export async function descargarInformeGraficoPDF(html: string): Promise<void> {
  descargarComoPDF(html, 'informe-grafico-ens.pdf')
}

export async function descargarInformeGraficoWord(html: string): Promise<void> {
  descargarComoWord(html, 'informe-grafico-ens.doc')
}

export async function descargarInformePDF(html: string): Promise<void> {
  descargarComoPDF(html, 'informe-ens.pdf')
}

export async function descargarInformeWord(html: string): Promise<void> {
  descargarComoWord(html, 'informe-ens.doc')
}
