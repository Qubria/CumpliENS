import type { InformeCumplimiento } from '@/types/analysis'
import type { NivelCumplimiento } from '@/types/database'

const ETIQUETAS_CUMPLIMIENTO: Record<NivelCumplimiento, string> = {
  CONFORME: 'Cumple',
  PARCIALMENTE_CONFORME: 'Cumple Parcialmente',
  NO_CONFORME: 'No Cumple',
  NO_APLICA: 'No Aplica',
}

const COLORES_CUMPLIMIENTO: Record<NivelCumplimiento, string> = {
  CONFORME: '#22c55e',
  PARCIALMENTE_CONFORME: '#eab308',
  NO_CONFORME: '#ef4444',
  NO_APLICA: '#94a3b8',
}

export function generarInformeHTML(informe: InformeCumplimiento): string {
  const tasaCumplimiento = informe.totalControles > 0
    ? Math.round(((informe.cantidadConforme + informe.cantidadParcial * 0.5) / informe.totalControles) * 100)
    : 0

  const hallazgosPorCategoria = agruparPor(informe.hallazgos, (h) => {
    const partes = h.control_id.split('.')
    if (partes[0] === 'org') return 'Marco Organizativo'
    if (partes[0] === 'op') return 'Marco Operacional'
    if (partes[0] === 'mp') return 'Medidas de Proteccion'
    return 'Otros'
  })

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Informe de Auditoria ENS - ${informe.nombreDocumento}</title>
  <style>
    @page { size: A4; margin: 2cm 2.5cm; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; font-size: 11pt; line-height: 1.6; color: #1a202c; }

    .cover { text-align: center; padding: 120px 40px; }
    .cover h1 { font-size: 28pt; color: #1e3a8a; margin-bottom: 20px; }
    .cover .subtitle { font-size: 14pt; color: #4a5568; margin-bottom: 40px; }
    .cover .meta { font-size: 11pt; color: #718096; }
    .cover .meta p { margin: 4px 0; }
    .cover .category-badge { display: inline-block; padding: 8px 24px; border-radius: 8px; font-size: 14pt; font-weight: 700; margin: 20px 0; }

    .page-break { page-break-before: always; }

    h2 { color: #1e3a8a; font-size: 16pt; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin: 24px 0 16px; }
    h3 { color: #2563eb; font-size: 13pt; margin: 16px 0 8px; }
    h4 { color: #4a5568; font-size: 11pt; margin: 12px 0 6px; }

    .summary-box { background: #f0f4ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 20px; margin: 16px 0; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0; }
    .stat-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; text-align: center; }
    .stat-number { font-size: 24pt; font-weight: 700; }
    .stat-label { font-size: 9pt; color: #718096; text-transform: uppercase; letter-spacing: 0.5px; }

    table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 10pt; }
    th, td { border: 1px solid #e2e8f0; padding: 8px 10px; text-align: left; }
    th { background: #f1f5f9; font-weight: 600; color: #334155; }

    .hallazgo { border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 12px 0; break-inside: avoid; }
    .hallazgo.conforme { border-left: 4px solid #22c55e; }
    .hallazgo.parcial { border-left: 4px solid #eab308; }
    .hallazgo.no-conforme { border-left: 4px solid #ef4444; }
    .hallazgo.no-aplica { border-left: 4px solid #94a3b8; }

    .badge { display: inline-block; padding: 2px 10px; border-radius: 12px; font-size: 9pt; font-weight: 600; }

    .irac { background: #f8fafc; border-radius: 6px; padding: 12px; margin-top: 8px; }
    .irac h4 { margin: 8px 0 4px; color: #1e3a8a; font-size: 10pt; }
    .irac p { font-size: 10pt; margin: 0 0 8px; }

    .recomendacion { background: #fffbeb; border: 1px solid #fcd34d; border-radius: 6px; padding: 10px; margin-top: 8px; font-size: 10pt; }
    .evidencia { background: #f0fdf4; border-left: 3px solid #22c55e; padding: 8px 12px; margin: 8px 0; font-style: italic; font-size: 10pt; }

    .footer { text-align: center; color: #94a3b8; font-size: 8pt; margin-top: 40px; padding-top: 16px; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <!-- PORTADA -->
  <div class="cover">
    <h1>Informe de Auditoria ENS</h1>
    <p class="subtitle">${informe.nombreDocumento}</p>
    <div class="category-badge" style="background: ${obtenerFondoCategoria(informe.categoriaENS)}; color: ${obtenerColorCategoria(informe.categoriaENS)};">
      Categoria ${informe.categoriaENS}
    </div>
    <div class="meta">
      <p><strong>Organizacion:</strong> ${informe.organizacion}</p>
      <p><strong>Fecha:</strong> ${informe.fechaAnalisis}</p>
      <p><strong>Tasa de cumplimiento:</strong> ${tasaCumplimiento}%</p>
    </div>
  </div>

  <div class="page-break"></div>

  <!-- RESUMEN EJECUTIVO -->
  <h2>1. Resumen Ejecutivo</h2>
  <div class="summary-box">
    <p>${informe.justificacionAplicabilidad}</p>
    <p style="margin-top: 8px;"><strong>Categoria asignada:</strong> ${informe.categoriaENS} - ${informe.justificacionCategoria}</p>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-number" style="color: #22c55e;">${informe.cantidadConforme}</div>
      <div class="stat-label">Cumple</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" style="color: #eab308;">${informe.cantidadParcial}</div>
      <div class="stat-label">Parcial</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" style="color: #ef4444;">${informe.cantidadNoConforme}</div>
      <div class="stat-label">No Cumple</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" style="color: #94a3b8;">${informe.cantidadNoAplica}</div>
      <div class="stat-label">No Aplica</div>
    </div>
  </div>

  <div class="page-break"></div>

  <!-- DIMENSIONES -->
  <h2>2. Analisis de Dimensiones de Seguridad</h2>
  <table>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>Nivel</th>
        <th>Justificacion</th>
      </tr>
    </thead>
    <tbody>
      ${Object.entries(informe.dimensiones).map(([clave, dim]) => `
      <tr>
        <td><strong>${capitalizar(clave)}</strong></td>
        <td><span class="badge" style="background: ${obtenerFondoNivel(dim.nivel)}; color: ${obtenerColorNivel(dim.nivel)};">${dim.nivel}</span></td>
        <td>${dim.justificacion}</td>
      </tr>`).join('')}
    </tbody>
  </table>

  <div class="page-break"></div>

  <!-- HALLAZGOS -->
  <h2>3. Analisis de Brechas por Control</h2>
  ${Object.entries(hallazgosPorCategoria).map(([categoria, hallazgos]) => `
    <h3>${categoria}</h3>
    ${hallazgos.map((h) => `
    <div class="hallazgo ${obtenerClaseCumplimiento(h.nivel_cumplimiento)}">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <h4 style="margin: 0;">${h.control_id}: ${h.resumen_hallazgo}</h4>
        <span class="badge" style="background: ${COLORES_CUMPLIMIENTO[h.nivel_cumplimiento]}20; color: ${COLORES_CUMPLIMIENTO[h.nivel_cumplimiento]};">${ETIQUETAS_CUMPLIMIENTO[h.nivel_cumplimiento]}</span>
      </div>

      ${h.irac ? `
      <div class="irac">
        <h4>Asunto</h4>
        <p>${h.irac.asunto}</p>
        <h4>Regla</h4>
        <p>${h.irac.regla}</p>
        <h4>Aplicacion</h4>
        <p>${h.irac.aplicacion}</p>
        <h4>Conclusion</h4>
        <p>${h.irac.conclusion}</p>
      </div>` : ''}

      ${h.texto_evidencia ? `<div class="evidencia">${h.texto_evidencia}</div>` : ''}
      ${h.descripcion_brecha ? `<p style="margin-top: 8px; font-size: 10pt;"><strong>Brecha:</strong> ${h.descripcion_brecha}</p>` : ''}
      ${h.recomendacion ? `<div class="recomendacion"><strong>Recomendacion:</strong> ${h.recomendacion}</div>` : ''}
    </div>`).join('')}
  `).join('')}

  <div class="page-break"></div>

  <!-- COBERTURA NORMATIVA -->
  <h2>4. Cobertura Normativa</h2>
  <div class="summary-box">
    <p>Este analisis ha verificado el pliego contra requisitos pre-extraidos de las normas CCN-STIC del Esquema Nacional de Seguridad.</p>
    ${informe.totalRequisitosVerificados ? `<p style="margin-top: 8px;"><strong>Requisitos verificados:</strong> ${informe.totalRequisitosVerificados}</p>` : ''}
    ${informe.totalNormasReferenciadas ? `<p><strong>Normas referenciadas:</strong> ${informe.totalNormasReferenciadas} de 121</p>` : ''}
    ${informe.perfilSectorial ? `<p><strong>Perfil sectorial detectado:</strong> ${informe.perfilSectorial}</p>` : ''}
    ${informe.proveedoresNube && informe.proveedoresNube.length > 0 ? `<p><strong>Proveedores nube detectados:</strong> ${informe.proveedoresNube.join(', ')}</p>` : ''}
  </div>

  <div class="page-break"></div>

  <!-- METODOLOGIA -->
  <h2>5. Anexo: Metodologia</h2>
  <p>Este informe ha sido generado mediante un analisis automatizado basado en inteligencia artificial, utilizando la metodologia IRAC (Issue, Rule, Application, Conclusion) para la evaluacion de cada control del ENS.</p>
  <h3>Base Normativa</h3>
  <ul style="margin-left: 20px; margin-top: 8px;">
    <li>Real Decreto 311/2022, de 3 de mayo (Esquema Nacional de Seguridad)</li>
    <li>Guias CCN-STIC del Centro Criptologico Nacional</li>
    <li>Instrucciones Tecnicas de Seguridad del ENS</li>
  </ul>
  <h3>Limitaciones</h3>
  <p style="margin-top: 8px;">Este analisis se basa exclusivamente en el contenido textual del documento evaluado y las guias de referencia proporcionadas. No sustituye una auditoria presencial ni una evaluacion manual por un auditor certificado. Los resultados deben ser revisados por un profesional cualificado.</p>

  <div class="footer">
    <p>Generado por ENS Compliance Auditor | ${informe.fechaAnalisis}</p>
    <p>Este documento es confidencial y esta destinado exclusivamente al uso interno de ${informe.organizacion}.</p>
  </div>
</body>
</html>`
}

function obtenerFondoCategoria(cat: string): string {
  if (cat === 'BASICA') return '#dcfce7'
  if (cat === 'MEDIA') return '#fef9c3'
  return '#fee2e2'
}

function obtenerColorCategoria(cat: string): string {
  if (cat === 'BASICA') return '#166534'
  if (cat === 'MEDIA') return '#854d0e'
  return '#991b1b'
}

function obtenerFondoNivel(nivel: string): string {
  if (nivel === 'BAJO') return '#dcfce7'
  if (nivel === 'MEDIO') return '#fef9c3'
  return '#fee2e2'
}

function obtenerColorNivel(nivel: string): string {
  if (nivel === 'BAJO') return '#166534'
  if (nivel === 'MEDIO') return '#854d0e'
  return '#991b1b'
}

function obtenerClaseCumplimiento(nivel: NivelCumplimiento): string {
  switch (nivel) {
    case 'CONFORME': return 'conforme'
    case 'PARCIALMENTE_CONFORME': return 'parcial'
    case 'NO_CONFORME': return 'no-conforme'
    case 'NO_APLICA': return 'no-aplica'
  }
}

function capitalizar(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function agruparPor<T>(arr: T[], funcionClave: (elemento: T) => string): Record<string, T[]> {
  const resultado: Record<string, T[]> = {}
  for (const elemento of arr) {
    const clave = funcionClave(elemento)
    if (!resultado[clave]) resultado[clave] = []
    resultado[clave]!.push(elemento)
  }
  return resultado
}

export function abrirInformeImprimible(html: string): void {
  const ventanaImpresion = window.open('', '_blank')
  if (ventanaImpresion) {
    ventanaImpresion.document.write(html)
    ventanaImpresion.document.close()
    // Auto-activar impresion despues de un breve retraso para renderizado
    setTimeout(() => ventanaImpresion.print(), 500)
  }
}
