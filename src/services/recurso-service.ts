import type {
  DatosRecursoCompleto,
  ContenidoRecursoV4,
  ContenidoRecursoV3,
  ContenidoRecursoV2,
  ContenidoRecursoLegacy,
  AntecedenteHecho,
  FundamentoCascada,
  FundamentoCascadaV4,
  SeccionCausasNulidad,
  SeccionCausasNulidadV4,
  CausaNulidadV4,
  CausaNulidadDinamica,
  SeccionOtrosies,
  SeccionLegitimacionV3,
  SeccionActoRecurribleV3,
} from '@/types/recurso'
import { esFormatoV2, esFormatoV3, esFormatoV4, esFormatoV5, esCausasDinamicas } from '@/types/recurso'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function escaparHTML(texto: string | null | undefined): string {
  if (!texto) return ''
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function textoSeguro(valor: string | null | undefined, fallback = '[Pendiente de redaccion]'): string {
  const t = valor?.trim()
  return t && t.length > 0 ? t : fallback
}

function formatearMoneda(valor: number | undefined): string {
  if (valor === undefined || valor === null) return 'N/D'
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valor)
}

function formatearFecha(fecha: string | undefined): string {
  if (!fecha) return 'N/D'
  return fecha
}

// ─── CSS v2: Georgia 11.5pt, margenes 3cm izq / 2.5cm resto ────────────────

function generarCSS_v2(): string {
  return `
    @page {
      size: A4;
      margin: 2.5cm 2.5cm 2.5cm 3cm;
      @bottom-center {
        content: "Pagina " counter(page) " de " counter(pages);
        font-size: 8pt;
        color: #94a3b8;
      }
    }

    @media print {
      .page-break { page-break-before: always; }
      .no-print { display: none; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 11.5pt;
      line-height: 1.7;
      color: #1a202c;
      max-width: 210mm;
      margin: 0 auto;
      padding: 20px;
    }

    h1 {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 15pt;
      color: #1e3a8a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    h2.section-header {
      font-family: 'Georgia', 'Times New Roman', serif;
      color: #1e3a8a;
      font-size: 15pt;
      border-bottom: 3px solid #1e3a8a;
      padding-bottom: 8px;
      margin: 30px 0 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    h3 {
      font-family: 'Georgia', 'Times New Roman', serif;
      color: #2563eb;
      font-size: 12pt;
      margin: 20px 0 10px;
      font-weight: bold;
    }

    h4 {
      font-family: 'Georgia', 'Times New Roman', serif;
      color: #334155;
      font-size: 11pt;
      margin: 14px 0 8px;
      font-style: italic;
    }

    p { margin: 8px 0; text-align: justify; }

    /* Cover page */
    .cover {
      text-align: center;
      padding: 100px 40px 60px;
      min-height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .cover h1 {
      font-size: 24pt;
      color: #1e3a8a;
      margin-bottom: 12px;
      line-height: 1.2;
    }
    .cover .subtitle {
      font-size: 12pt;
      color: #4a5568;
      margin-bottom: 30px;
      font-style: italic;
    }
    .cover .meta-table {
      text-align: left;
      margin: 20px auto;
      border-collapse: collapse;
      font-size: 10pt;
    }
    .cover .meta-table td {
      padding: 4px 12px;
      border: none;
      vertical-align: top;
    }
    .cover .meta-table td:first-child {
      font-weight: 700;
      color: #1e3a8a;
      white-space: nowrap;
    }
    .cover .classification {
      margin-top: 30px;
      padding: 8px 24px;
      border: 2px solid #1e3a8a;
      display: inline-block;
      font-size: 10pt;
      font-weight: 700;
      color: #1e3a8a;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .page-break { page-break-before: always; }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 14px 0;
      font-size: 10pt;
    }
    th, td {
      border: 1px solid #cbd5e1;
      padding: 8px 10px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #1e3a8a;
      color: white;
      font-weight: 600;
      font-size: 9pt;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    tr:nth-child(even) { background: #f8fafc; }

    .legal-block {
      background: #f8fafc;
      border-left: 4px solid #1e3a8a;
      padding: 16px 20px;
      margin: 14px 0;
      border-radius: 0 6px 6px 0;
    }
    .legal-block p { margin: 6px 0; }

    .highlight-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 8px;
      padding: 16px 20px;
      margin: 14px 0;
    }

    .cascada-bloque {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px 20px;
      margin: 16px 0;
      break-inside: avoid;
    }
    .cascada-campo {
      margin: 8px 0;
      padding: 8px 12px;
      background: #f8fafc;
      border-left: 3px solid #3b82f6;
      border-radius: 0 4px 4px 0;
    }
    .cascada-campo .campo-etiqueta {
      font-size: 9pt;
      font-weight: 700;
      color: #1e3a8a;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      margin-bottom: 4px;
    }
    .cascada-campo .campo-texto {
      font-size: 10.5pt;
      color: #334155;
    }

    .analisis-juridico {
      background: #eff6ff;
      border-left: 4px solid #2563eb;
      padding: 16px 20px;
      margin: 12px 0 20px;
      border-radius: 0 6px 6px 0;
      font-size: 10.5pt;
      color: #1e293b;
    }
    .analisis-juridico .aj-titulo {
      font-size: 9pt;
      font-weight: 700;
      color: #1e3a8a;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      margin-bottom: 8px;
    }

    .jurisprudencia-bloque {
      background: #fefce8;
      border-left: 3px solid #ca8a04;
      padding: 10px 14px;
      margin: 8px 0;
      font-size: 10pt;
      color: #713f12;
      border-radius: 0 4px 4px 0;
    }

    .causa-card {
      border: 1px solid #e2e8f0;
      border-left: 4px solid #dc2626;
      border-radius: 0 8px 8px 0;
      padding: 14px 18px;
      margin: 12px 0;
      break-inside: avoid;
    }
    .causa-card .causa-base {
      font-size: 9pt;
      font-weight: 700;
      color: #dc2626;
      margin-bottom: 4px;
    }
    .causa-card .causa-titulo {
      font-weight: 700;
      color: #1e3a8a;
      font-size: 11pt;
      margin-bottom: 6px;
    }

    .clausula-card {
      border: 1px solid #e2e8f0;
      border-left: 4px solid #ef4444;
      border-radius: 0 8px 8px 0;
      padding: 14px 18px;
      margin: 12px 0;
      break-inside: avoid;
    }
    .clausula-card .clausula-header {
      font-weight: 700;
      color: #1e3a8a;
      font-size: 10pt;
      margin-bottom: 6px;
    }
    .clausula-card .clausula-meta {
      font-size: 9pt;
      color: #64748b;
      margin-bottom: 8px;
    }
    .clausula-card .clausula-text {
      font-style: italic;
      font-size: 10pt;
      color: #334155;
      padding: 8px 12px;
      background: #fef2f2;
      border-radius: 4px;
    }

    .badge {
      display: inline-block;
      padding: 2px 10px;
      border-radius: 12px;
      font-size: 8pt;
      font-weight: 600;
    }
    .badge-danger { background: #fee2e2; color: #991b1b; }
    .badge-warning { background: #fef3c7; color: #92400e; }

    .toc { margin: 20px 0; }
    .toc-entry {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 4px 0;
      border-bottom: 1px dotted #cbd5e1;
      font-size: 10pt;
    }
    .toc-entry.main {
      font-weight: 700;
      color: #1e3a8a;
      font-size: 11pt;
      margin-top: 6px;
    }

    .footer {
      text-align: center;
      color: #94a3b8;
      font-size: 8pt;
      margin-top: 40px;
      padding-top: 16px;
      border-top: 1px solid #e2e8f0;
    }
  `
}

// ─── v2 Section Generators (8 secciones Manual de Formalidades) ─────────────

function generarPortada_v2(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  return `
  <div class="cover">
    <h1>RECURSO ESPECIAL EN MATERIA<br>DE CONTRATACION</h1>
    <p class="subtitle">Arts. 44 a 60 de la Ley 9/2017, de Contratos del Sector Publico</p>
    <p style="font-size: 11pt; color: #334155; max-width: 500px; margin: 0 auto 10px;">Contra los pliegos del expediente n.&ordm; ${escaparHTML(f.expediente_numero)}</p>
    ${f.expediente_denominacion ? `<p style="font-size: 10pt; color: #4a5568; max-width: 500px; margin: 0 auto 20px;">&laquo;${escaparHTML(f.expediente_denominacion)}&raquo;</p>` : ''}
    <p style="font-size: 10pt; color: #64748b; margin-bottom: 20px;">Con solicitud de medida cautelar de suspension del procedimiento</p>

    <table class="meta-table">
      <tr><td>Recurrente:</td><td>${escaparHTML(f.recurrente_denominacion)}</td></tr>
      <tr><td>CIF:</td><td>${escaparHTML(f.recurrente_cif)}</td></tr>
      <tr><td>Expediente:</td><td>${escaparHTML(f.expediente_numero)}</td></tr>
      <tr><td>Organo contratacion:</td><td>${escaparHTML(f.organo_contratacion)}</td></tr>
      <tr><td>Tribunal:</td><td>${escaparHTML(f.tribunal_competente)}</td></tr>
      <tr><td>Fecha:</td><td>${escaparHTML(datos.fechaGeneracion)}</td></tr>
    </table>

    <div class="classification">Recurso Especial &mdash; Art. 44 LCSP</div>
  </div>`
}

function generarIndice_v2(): string {
  return `
  <div class="page-break"></div>
  <h2 class="section-header">INDICE</h2>

  <div class="toc">
    <div class="toc-entry main"><span>I. Encabezamiento</span></div>
    <div class="toc-entry main"><span>II. Antecedentes de Hecho</span></div>
    <div class="toc-entry main"><span>III. Fundamentos de Derecho</span></div>
    <div class="toc-entry main"><span>IV. Causas de Nulidad</span></div>
    <div class="toc-entry main"><span>V. Medidas Cautelares</span></div>
    <div class="toc-entry main"><span>VI. Suplico / Petitum</span></div>
    <div class="toc-entry main"><span>VII. Otrosies</span></div>
    <div class="toc-entry main"><span>VIII. Documentacion</span></div>
  </div>`
}

/** Seccion I: ENCABEZAMIENTO (merge de antiguas I-V) */
function generarSeccionI_v2(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  return `
  <div class="page-break"></div>
  <h2 class="section-header">I. ENCABEZAMIENTO</h2>

  <div class="legal-block">
    <p><strong>AL ${escaparHTML(f.tribunal_competente).toUpperCase()}</strong></p>
    ${f.tribunal_direccion ? `<p>${escaparHTML(f.tribunal_direccion)}</p>` : ''}
  </div>

  <p>D./D.&ordf; <strong>${escaparHTML(f.representante_nombre)}</strong>, en calidad de <strong>${escaparHTML(f.representante_titulo)}</strong> de la entidad <strong>${escaparHTML(f.recurrente_denominacion)}</strong> (CIF: ${escaparHTML(f.recurrente_cif)}), con domicilio social en ${escaparHTML(f.recurrente_domicilio)}${f.recurrente_registro_mercantil ? `, inscrita en el Registro Mercantil (${escaparHTML(f.recurrente_registro_mercantil)})` : ''}${f.recurrente_email ? `, con correo electronico a efectos de notificaciones: ${escaparHTML(f.recurrente_email)}` : ''}, ante ese Tribunal comparece y, como mejor proceda en Derecho,</p>

  <p><strong>DICE:</strong></p>

  <p>Que, al amparo de lo dispuesto en los articulos 44 y siguientes de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Publico (en adelante, LCSP), dentro del plazo legalmente establecido, interpone <strong>RECURSO ESPECIAL EN MATERIA DE CONTRATACION</strong> contra los pliegos reguladores del expediente de contratacion n.&ordm; ${escaparHTML(f.expediente_numero)}, denominado &laquo;${escaparHTML(f.expediente_denominacion)}&raquo;, tramitado por ${escaparHTML(f.organo_contratacion)}${f.organo_nivel ? ` (ambito ${escaparHTML(f.organo_nivel)})` : ''}, con solicitud de medida cautelar de suspension del procedimiento de adjudicacion, y ello en base a los siguientes antecedentes de hecho y fundamentos de derecho.</p>

  <div class="highlight-box">
    <p><strong>Datos del procedimiento:</strong></p>
    <p><strong>Tipo contractual:</strong> ${escaparHTML(f.expediente_tipo_contractual)} &mdash; Procedimiento ${escaparHTML(f.expediente_procedimiento)}</p>
    ${f.expediente_valor_estimado ? `<p><strong>Valor estimado:</strong> ${formatearMoneda(f.expediente_valor_estimado)}</p>` : ''}
    ${f.expediente_presupuesto_base ? `<p><strong>Presupuesto base:</strong> ${formatearMoneda(f.expediente_presupuesto_base)}</p>` : ''}
    ${f.expediente_duracion ? `<p><strong>Duracion:</strong> ${escaparHTML(f.expediente_duracion)}</p>` : ''}
    ${f.expediente_cpv ? `<p><strong>CPV:</strong> ${escaparHTML(f.expediente_cpv)}</p>` : ''}
    ${f.es_contrato_sara ? `<p><strong>Contrato sujeto a regulacion armonizada (SARA).</strong></p>` : ''}
  </div>

  <h3>Legitimacion activa</h3>
  <p>La legitimacion activa de esta parte se fundamenta en el articulo 48 de la LCSP, que reconoce legitimacion a toda persona cuyos derechos o intereses legitimos se hayan visto perjudicados o puedan resultar afectados por las decisiones objeto de recurso. La entidad recurrente ostenta plena capacidad de obrar conforme al articulo 65 de la LCSP y no concurre ninguna de las prohibiciones de contratar previstas en el articulo 71 de la LCSP.</p>

  <h3>Acto recurrible</h3>
  <p>El acto impugnado &mdash;los pliegos reguladores del expediente&mdash; es susceptible de recurso especial conforme al articulo 44.2.a) de la LCSP, en cuanto acto de tramite que determina directa e irremediablemente las condiciones de concurrencia al procedimiento.</p>

  <h3>Plazo y admisibilidad</h3>
  <div class="highlight-box">
    <table style="border: none;">
      <tr><td style="border: none; font-weight: 700; width: 200px;">Dies a quo:</td><td style="border: none;">${formatearFecha(f.dies_a_quo) !== 'N/D' ? formatearFecha(f.dies_a_quo) : 'Dia siguiente a la publicacion del acto impugnado'}</td></tr>
      <tr><td style="border: none; font-weight: 700;">Dies ad quem:</td><td style="border: none;">${formatearFecha(f.dies_ad_quem) !== 'N/D' ? formatearFecha(f.dies_ad_quem) : 'Decimoquinto dia habil desde el dies a quo'}</td></tr>
      ${f.fecha_publicacion_perfil ? `<tr><td style="border: none; font-weight: 700;">Publicacion perfil:</td><td style="border: none;">${escaparHTML(f.fecha_publicacion_perfil)}</td></tr>` : ''}
      ${f.fecha_publicacion_doue ? `<tr><td style="border: none; font-weight: 700;">Publicacion DOUE:</td><td style="border: none;">${escaparHTML(f.fecha_publicacion_doue)}</td></tr>` : ''}
      <tr><td style="border: none; font-weight: 700;">Fecha presentacion:</td><td style="border: none;">${escaparHTML(datos.fechaGeneracion)}</td></tr>
    </table>
  </div>

  <p>El presente recurso se interpone dentro del plazo legal de quince dias habiles previsto en el articulo 50 LCSP${f.dies_a_quo ? `, computado desde el ${escaparHTML(f.dies_a_quo)}` : ''}.</p>`
}

/** Seccion II: ANTECEDENTES DE HECHO */
function generarSeccionII_v2(datos: DatosRecursoCompleto, contenido: ContenidoRecursoV2): string {
  const antecedentes = contenido.antecedentes ?? []
  const clausulas = datos.clausulasImpugnadas

  let html = `
  <div class="page-break"></div>
  <h2 class="section-header">II. ANTECEDENTES DE HECHO</h2>`

  antecedentes.forEach((ant: AntecedenteHecho) => {
    html += `
    <h3>${escaparHTML(ant.ordinal)}.- ${escaparHTML(ant.titulo)}</h3>
    <div class="legal-block">
      ${escaparHTML(textoSeguro(ant.texto)).split('\n').map(p => `<p>${p}</p>`).join('')}
      <p style="text-align: right; font-size: 9pt; color: #64748b; font-style: italic;">${escaparHTML(ant.documentoRef)}</p>
    </div>`
  })

  // Incluir tabla de clausulas impugnadas
  if (clausulas.length > 0) {
    html += `
    <h3>Clausulas del pliego impugnadas</h3>
    ${clausulas.map((cl, idx) => `
    <div class="clausula-card">
      <div class="clausula-header">Clausula ${idx + 1}: ${escaparHTML(cl.controlId)}</div>
      <div class="clausula-meta">
        Norma infringida: ${escaparHTML(cl.normaFuente)} |
        Gravedad: <span class="badge ${cl.prioridad === 'ALTA' || cl.prioridad === 'CRITICA' ? 'badge-danger' : 'badge-warning'}">${escaparHTML(cl.prioridad)}</span>
      </div>
      ${cl.textoClausula ? `<div class="clausula-text">&laquo;${escaparHTML(cl.textoClausula)}&raquo;</div>` : '<p style="font-size: 9pt; color: #64748b;"><em>Omision total en el pliego: sin clausula equivalente al requisito normativo.</em></p>'}
      ${cl.explicacionIRAC ? `<p style="font-size: 9pt; color: #334155; margin-top: 6px;">${escaparHTML(cl.explicacionIRAC)}</p>` : ''}
    </div>`).join('')}`
  }

  return html
}

/** Seccion III: FUNDAMENTOS DE DERECHO (cascada argumental) */
function generarSeccionIII_v2(contenido: ContenidoRecursoV2): string {
  const fundamentos = contenido.fundamentos ?? []

  let html = `
  <div class="page-break"></div>
  <h2 class="section-header">III. FUNDAMENTOS DE DERECHO</h2>

  <p>Los fundamentos juridicos del presente recurso se estructuran conforme a la cascada argumental: norma vulnerada, clausula viciada, nexo juridico, doctrina y consecuencia pretendida.</p>`

  fundamentos.forEach((fund: FundamentoCascada, idx: number) => {
    html += `
    ${idx > 0 && idx % 3 === 0 ? '<div class="page-break"></div>' : ''}
    <h3>${escaparHTML(fund.ordinal)}.- ${escaparHTML(fund.titulo)}</h3>
    <div class="cascada-bloque">
      <div class="cascada-campo">
        <div class="campo-etiqueta">1. Norma vulnerada</div>
        <div class="campo-texto">${escaparHTML(textoSeguro(fund.normaVulnerada))}</div>
      </div>
      <div class="cascada-campo">
        <div class="campo-etiqueta">2. Clausula viciada del pliego</div>
        <div class="campo-texto">${escaparHTML(textoSeguro(fund.clausulaViciada))}</div>
      </div>
      <div class="cascada-campo">
        <div class="campo-etiqueta">3. Nexo juridico (silogismo)</div>
        <div class="campo-texto">${escaparHTML(textoSeguro(fund.nexoJuridico))}</div>
      </div>
      <div class="cascada-campo">
        <div class="campo-etiqueta">4. Doctrina y jurisprudencia</div>
        <div class="campo-texto">${escaparHTML(textoSeguro(fund.doctrinaJurisprudencia))}</div>
      </div>
      <div class="cascada-campo" style="border-left-color: #dc2626;">
        <div class="campo-etiqueta" style="color: #dc2626;">5. Consecuencia pretendida</div>
        <div class="campo-texto">${escaparHTML(textoSeguro(fund.consecuenciaPretendida))}</div>
      </div>
    </div>`
  })

  return html
}

/** Seccion IV: CAUSAS DE NULIDAD */
function generarSeccionIV_v2(contenido: ContenidoRecursoV2): string {
  const causas = contenido.causasNulidad
  if (!causas) {
    return `
    <div class="page-break"></div>
    <h2 class="section-header">IV. CAUSAS DE NULIDAD</h2>
    <div class="highlight-box"><p>[Pendiente de generacion]</p></div>`
  }

  const lista: { clave: keyof SeccionCausasNulidad; numero: number }[] = [
    { clave: 'infracciones_reglamentarias', numero: 1 },
    { clave: 'igualdad_trato', numero: 2 },
    { clave: 'contenido_imposible', numero: 3 },
    { clave: 'buena_administracion', numero: 4 },
    { clave: 'rgpd_concurrente', numero: 5 },
  ]

  let html = `
  <div class="page-break"></div>
  <h2 class="section-header">IV. CAUSAS DE NULIDAD</h2>

  <p>Las infracciones identificadas en los pliegos determinan las siguientes causas de nulidad de pleno derecho conforme a los articulos 47 y 48 de la Ley 39/2015 (LPAC) y articulo 39 de la LCSP:</p>`

  lista.forEach(({ clave, numero }) => {
    const causa = causas[clave]
    if (!causa) return
    html += `
    <div class="causa-card">
      <div class="causa-base">${escaparHTML(causa.base)}</div>
      <div class="causa-titulo">${numero}. ${escaparHTML(causa.titulo)}</div>
      <p>${escaparHTML(textoSeguro(causa.fundamentacion))}</p>
    </div>`
  })

  return html
}

/** Seccion V: MEDIDAS CAUTELARES */
function generarSeccionV_v2(contenido: ContenidoRecursoV2): string {
  const c = contenido.cautelares
  return `
  <div class="page-break"></div>
  <h2 class="section-header">V. MEDIDAS CAUTELARES</h2>

  <p>Al amparo del articulo 56 de la LCSP, esta parte solicita la adopcion de la medida cautelar de <strong>suspension del procedimiento de adjudicacion</strong>, fundamentada en los siguientes presupuestos:</p>

  <h3>Primero. Fumus Boni Iuris (Apariencia de Buen Derecho)</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(c?.fumusBoniIuris)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>Segundo. Periculum in Mora (Riesgo de Perdida de Finalidad)</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(c?.periculumInMora)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>Tercero. Ponderacion de Intereses</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(c?.ponderacionIntereses)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <p>Por todo ello, se solicita a ese Tribunal que acuerde la <strong>suspension inmediata del procedimiento de adjudicacion</strong> hasta la resolucion del presente recurso.</p>`
}

/** Seccion VI: SUPLICO / PETITUM */
function generarSeccionVI_v2(datos: DatosRecursoCompleto, contenido: ContenidoRecursoV2): string {
  const p = contenido.peticion
  const clausulas = datos.clausulasImpugnadas
  return `
  <div class="page-break"></div>
  <h2 class="section-header">VI. SUPLICO</h2>

  <div class="legal-block" style="border-left-color: #1e3a8a; background: #eff6ff;">
    <p>Por todo lo expuesto,</p>
    <p><strong>SUPLICO AL TRIBUNAL</strong> que, teniendo por presentado este escrito con los documentos que se acompanan, se sirva admitirlo y, en su virtud:</p>

    <h4>A) Con caracter principal</h4>
    ${escaparHTML(textoSeguro(p?.principal)).split('\n').map(pr => `<p>${pr}</p>`).join('')}
    ${clausulas.length > 0 ? `
    <p>En particular, declare la nulidad de las siguientes clausulas:</p>
    <table>
      <thead>
        <tr><th>#</th><th>Control ENS</th><th>Norma infringida</th><th>Vicio</th><th>Gravedad</th></tr>
      </thead>
      <tbody>
        ${clausulas.map((cl, idx) => `
        <tr>
          <td>${idx + 1}</td>
          <td>${escaparHTML(cl.controlId)}</td>
          <td>${escaparHTML(cl.normaFuente)}</td>
          <td>${escaparHTML(cl.textoClausula).substring(0, 150)}${(cl.textoClausula?.length ?? 0) > 150 ? '...' : ''}</td>
          <td><span class="badge ${cl.prioridad === 'ALTA' || cl.prioridad === 'CRITICA' ? 'badge-danger' : 'badge-warning'}">${escaparHTML(cl.prioridad)}</span></td>
        </tr>`).join('')}
      </tbody>
    </table>
    ` : ''}

    <h4>B) Con caracter subsidiario</h4>
    ${escaparHTML(textoSeguro(p?.subsidiaria)).split('\n').map(pr => `<p>${pr}</p>`).join('')}

    <h4>C) Como medida cautelar</h4>
    ${escaparHTML(textoSeguro(p?.cautelar)).split('\n').map(pr => `<p>${pr}</p>`).join('')}

    <p style="margin-top: 16px;"><strong>Todo ello con los demas pronunciamientos que en Derecho procedan.</strong></p>

    <p style="margin-top: 30px; text-align: right;">${escaparHTML(datos.datosFormulario.recurrente_domicilio ? datos.datosFormulario.recurrente_domicilio.split(',').pop()?.trim() || '' : '')}, a ${escaparHTML(datos.fechaGeneracion)}</p>
    <p style="text-align: right; margin-top: 12px;"><strong>Fdo.: ${escaparHTML(datos.datosFormulario.representante_nombre)}</strong></p>
    <p style="text-align: right; font-size: 9pt; color: #64748b;">${escaparHTML(datos.datosFormulario.representante_titulo)} de ${escaparHTML(datos.datosFormulario.recurrente_denominacion)}</p>
  </div>`
}

/** Seccion VII: OTROSIES */
function generarSeccionVII_v2(contenido: ContenidoRecursoV2): string {
  const o = contenido.otrosies as SeccionOtrosies | undefined
  return `
  <div class="page-break"></div>
  <h2 class="section-header">VII. OTROSIES</h2>

  <h3>PRIMER OTROSI. Proposicion de prueba</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(o?.proposicionPrueba, 'Se propone como prueba la documental adjunta al presente escrito, asi como pericial tecnica sobre los requisitos del Anexo II del RD 311/2022.')).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>SEGUNDO OTROSI. Reclamacion del expediente administrativo</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(o?.reclamacionExpediente, 'Se solicita la remision del expediente administrativo completo conforme al articulo 51.3 de la LCSP, en el plazo de dos dias habiles.')).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>TERCER OTROSI. Notificaciones</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(o?.notificaciones, 'Se designa como direccion a efectos de notificaciones electronicas el correo indicado en el encabezamiento del presente escrito.')).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>`
}

/** Seccion VIII: DOCUMENTACION (indice bates) */
function generarSeccionVIII_v2(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  const clausulas = datos.clausulasImpugnadas

  return `
  <div class="page-break"></div>
  <h2 class="section-header">VIII. DOCUMENTACION</h2>

  <p>Al amparo de lo dispuesto en el articulo 51.2 de la LCSP, se acompana al presente recurso la siguiente documentacion:</p>

  <table>
    <thead>
      <tr><th>Doc.</th><th>Titulo</th><th>Descripcion</th></tr>
    </thead>
    <tbody>
      <tr><td style="text-align: center; font-weight: 700;">1</td><td><strong>Poder de representacion</strong></td><td>Acreditacion de facultades para interponer recursos y solicitar cautelares</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">2</td><td><strong>Escrituras sociales</strong></td><td>Escritura de constitucion, nombramiento del administrador y certificacion registral</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">3</td><td><strong>PCAP</strong></td><td>Pliego de Clausulas Administrativas Particulares del expediente</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">4</td><td><strong>PPT</strong></td><td>Pliego de Prescripciones Tecnicas</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">5</td><td><strong>Anuncio de licitacion</strong></td><td>Publicacion en perfil del contratante${f.fecha_publicacion_perfil ? ` (${escaparHTML(f.fecha_publicacion_perfil)})` : ''}${f.fecha_publicacion_doue ? ` y DOUE (${escaparHTML(f.fecha_publicacion_doue)})` : ''}</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">6</td><td><strong>Aclaraciones</strong></td><td>Respuestas oficiales y rectificaciones publicadas</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">7</td><td><strong>Informe tecnico</strong></td><td>Analisis de requisitos ENS y evaluacion de alternativas menos restrictivas</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">8</td><td><strong>Justificante de registro</strong></td><td>Resguardo electronico acreditativo de la tempestividad de la presentacion</td></tr>
    </tbody>
  </table>

  ${clausulas.length > 0 ? `
  <h3>Tabla de correspondencia: clausulas impugnadas y fundamentos</h3>
  <table>
    <thead>
      <tr><th>Clausula</th><th>Control ENS</th><th>Norma infringida</th><th>Fundamento</th></tr>
    </thead>
    <tbody>
      ${clausulas.map((cl, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td>${escaparHTML(cl.controlId)}</td>
        <td>${escaparHTML(cl.normaFuente)}</td>
        <td>Fundamento ${idx < 2 ? 'Primero' : idx < 4 ? 'Segundo a Cuarto' : 'Quinto a Decimo'}</td>
      </tr>`).join('')}
    </tbody>
  </table>
  ` : ''}`
}

// ─── Main v2 HTML Generator ─────────────────────────────────────────────────

function seccionSegura(nombre: string, generador: () => string): string {
  try {
    return generador()
  } catch (err) {
    console.error(`Error generando seccion ${nombre}:`, err)
    return `<div class="page-break"></div><div class="highlight-box"><p><strong>Error:</strong> No se pudo generar la seccion ${escaparHTML(nombre)}.</p></div>`
  }
}

function generarRecursoHTML_v2(datos: DatosRecursoCompleto): string {
  const contenido = datos.contenidoRecurso as ContenidoRecursoV2

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>REMC - ${escaparHTML(datos.codigoRecurso)} - ${escaparHTML(datos.datosFormulario.expediente_numero)}</title>
  <style>${generarCSS_v2()}</style>
</head>
<body>
  ${generarPortada_v2(datos)}
  ${generarIndice_v2()}
  ${seccionSegura('I', () => generarSeccionI_v2(datos))}
  ${seccionSegura('II', () => generarSeccionII_v2(datos, contenido))}
  ${seccionSegura('III', () => generarSeccionIII_v2(contenido))}
  ${seccionSegura('IV', () => generarSeccionIV_v2(contenido))}
  ${seccionSegura('V', () => generarSeccionV_v2(contenido))}
  ${seccionSegura('VI', () => generarSeccionVI_v2(datos, contenido))}
  ${seccionSegura('VII', () => generarSeccionVII_v2(contenido))}
  ${seccionSegura('VIII', () => generarSeccionVIII_v2(datos))}

  <div class="footer">
    <p>Recurso Especial en Materia de Contratacion &mdash; ${escaparHTML(datos.codigoRecurso)}</p>
    <p>${escaparHTML(datos.datosFormulario.recurrente_denominacion)} | Expediente ${escaparHTML(datos.datosFormulario.expediente_numero)} | ${escaparHTML(datos.fechaGeneracion)}</p>
    <p>Documento destinado a su presentacion ante ${escaparHTML(datos.datosFormulario.tribunal_competente)}.</p>
  </div>
</body>
</html>`
}

// ══════════════════════════════════════════════════════════════════════════════
// V3 HTML Generator (12 secciones segun plantilla "base del recurso")
// ══════════════════════════════════════════════════════════════════════════════

/** Portada Tecnica V3: control versiones + clasificacion + codigo documento */
function generarPortada_v3(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  return `
  <div class="cover">
    <h1>RECURSO ESPECIAL EN MATERIA<br>DE CONTRATACION</h1>
    <p class="subtitle">Arts. 44 a 60 de la Ley 9/2017, de Contratos del Sector Publico</p>
    <p style="font-size: 11pt; color: #334155; max-width: 500px; margin: 0 auto 10px;">Contra los pliegos del expediente n.&ordm; ${escaparHTML(f.expediente_numero)}</p>
    ${f.expediente_denominacion ? `<p style="font-size: 10pt; color: #4a5568; max-width: 500px; margin: 0 auto 20px;">&laquo;${escaparHTML(f.expediente_denominacion)}&raquo;</p>` : ''}
    <p style="font-size: 10pt; color: #64748b; margin-bottom: 20px;">Con solicitud de medida cautelar de suspension del procedimiento</p>

    <table class="meta-table">
      <tr><td>Codigo documento:</td><td>${escaparHTML(datos.codigoRecurso)}</td></tr>
      <tr><td>Recurrente:</td><td>${escaparHTML(f.recurrente_denominacion)}</td></tr>
      <tr><td>CIF:</td><td>${escaparHTML(f.recurrente_cif)}</td></tr>
      <tr><td>Expediente:</td><td>${escaparHTML(f.expediente_numero)}</td></tr>
      <tr><td>Organo contratacion:</td><td>${escaparHTML(f.organo_contratacion)}</td></tr>
      <tr><td>Tribunal:</td><td>${escaparHTML(f.tribunal_competente)}</td></tr>
      <tr><td>Fecha:</td><td>${escaparHTML(datos.fechaGeneracion)}</td></tr>
      <tr><td>Version:</td><td>1.0</td></tr>
    </table>

    <div class="classification">Recurso Especial &mdash; Art. 44 LCSP</div>
  </div>`
}

/** Indice V3: 12 secciones */
function generarIndice_v3(): string {
  return `
  <div class="page-break"></div>
  <h2 class="section-header">INDICE</h2>

  <div class="toc">
    <div class="toc-entry main"><span>I. Encabezamiento</span></div>
    <div class="toc-entry main"><span>II. Comparecencia</span></div>
    <div class="toc-entry main"><span>III. Legitimacion Activa</span></div>
    <div class="toc-entry main"><span>IV. Acto Recurrible</span></div>
    <div class="toc-entry main"><span>V. Plazo y Admisibilidad</span></div>
    <div class="toc-entry main"><span>VI. Antecedentes de Hecho</span></div>
    <div class="toc-entry main"><span>VII. Fundamentos de Derecho</span></div>
    <div class="toc-entry main"><span>VIII. Medidas Cautelares</span></div>
    <div class="toc-entry main"><span>IX. Suplico / Petitum</span></div>
    <div class="toc-entry main"><span>Otrosies</span></div>
    <div class="toc-entry main"><span>X. Documentacion</span></div>
  </div>`
}

/** Seccion I V3: ENCABEZAMIENTO (competencia + objeto + perimetro) */
function generarSeccionI_v3(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  return `
  <div class="page-break"></div>
  <h2 class="section-header">I. ENCABEZAMIENTO</h2>

  <div class="legal-block">
    <p><strong>AL ${escaparHTML(f.tribunal_competente).toUpperCase()}</strong></p>
    ${f.tribunal_direccion ? `<p>${escaparHTML(f.tribunal_direccion)}</p>` : ''}
  </div>

  <h3>Competencia</h3>
  <p>El presente recurso se interpone ante ese Tribunal al amparo de los articulos 44 y siguientes de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Publico (LCSP), siendo el organo competente para conocer del mismo conforme al articulo 45 de la citada Ley.</p>

  <h3>Objeto del recurso</h3>
  <p>El presente recurso tiene por objeto la impugnacion de los pliegos reguladores (PCAP y PPT) del expediente de contratacion n.&ordm; ${escaparHTML(f.expediente_numero)}, denominado &laquo;${escaparHTML(f.expediente_denominacion)}&raquo;, tramitado por ${escaparHTML(f.organo_contratacion)}${f.organo_nivel ? ` (ambito ${escaparHTML(f.organo_nivel)})` : ''}, con solicitud de medida cautelar de suspension del procedimiento de adjudicacion.</p>

  <h3>Perimetro de analisis</h3>
  <div class="highlight-box">
    <p><strong>Tipo contractual:</strong> ${escaparHTML(f.expediente_tipo_contractual)} &mdash; Procedimiento ${escaparHTML(f.expediente_procedimiento)}</p>
    ${f.expediente_valor_estimado ? `<p><strong>Valor estimado:</strong> ${formatearMoneda(f.expediente_valor_estimado)}</p>` : ''}
    ${f.expediente_presupuesto_base ? `<p><strong>Presupuesto base:</strong> ${formatearMoneda(f.expediente_presupuesto_base)}</p>` : ''}
    ${f.expediente_duracion ? `<p><strong>Duracion:</strong> ${escaparHTML(f.expediente_duracion)}</p>` : ''}
    ${f.expediente_cpv ? `<p><strong>CPV:</strong> ${escaparHTML(f.expediente_cpv)}</p>` : ''}
    ${f.es_contrato_sara ? `<p><strong>Contrato sujeto a regulacion armonizada (SARA).</strong></p>` : ''}
    <p><strong>Marco normativo de referencia:</strong> RD 311/2022 (ENS), categoria ALTA.</p>
  </div>`
}

/** Seccion II V3: COMPARECENCIA (datos formulario, sin AI) */
function generarSeccionII_v3(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  return `
  <div class="page-break"></div>
  <h2 class="section-header">II. COMPARECENCIA</h2>

  <h3>Identificacion del recurrente</h3>
  <p>D./D.&ordf; <strong>${escaparHTML(f.representante_nombre)}</strong>, en calidad de <strong>${escaparHTML(f.representante_titulo)}</strong>
  ${f.representante_facultades ? `, con facultades para ${escaparHTML(f.representante_facultades)}` : ''}, en nombre y representacion de:</p>

  <div class="highlight-box">
    <table style="border: none; width: 100%;">
      <tr><td style="border: none; font-weight: 700; width: 200px; color: #1e3a8a;">Denominacion social:</td><td style="border: none;">${escaparHTML(f.recurrente_denominacion)}</td></tr>
      <tr><td style="border: none; font-weight: 700; color: #1e3a8a;">CIF:</td><td style="border: none;">${escaparHTML(f.recurrente_cif)}</td></tr>
      <tr><td style="border: none; font-weight: 700; color: #1e3a8a;">Domicilio social:</td><td style="border: none;">${escaparHTML(f.recurrente_domicilio)}</td></tr>
      ${f.recurrente_registro_mercantil ? `<tr><td style="border: none; font-weight: 700; color: #1e3a8a;">Registro Mercantil:</td><td style="border: none;">${escaparHTML(f.recurrente_registro_mercantil)}</td></tr>` : ''}
      ${f.recurrente_objeto_social ? `<tr><td style="border: none; font-weight: 700; color: #1e3a8a;">Objeto social:</td><td style="border: none;">${escaparHTML(f.recurrente_objeto_social)}</td></tr>` : ''}
      ${f.recurrente_cnae ? `<tr><td style="border: none; font-weight: 700; color: #1e3a8a;">CNAE:</td><td style="border: none;">${escaparHTML(f.recurrente_cnae)}</td></tr>` : ''}
      ${f.recurrente_email ? `<tr><td style="border: none; font-weight: 700; color: #1e3a8a;">Email notificaciones:</td><td style="border: none;">${escaparHTML(f.recurrente_email)}</td></tr>` : ''}
      ${f.recurrente_telefono ? `<tr><td style="border: none; font-weight: 700; color: #1e3a8a;">Telefono:</td><td style="border: none;">${escaparHTML(f.recurrente_telefono)}</td></tr>` : ''}
    </table>
  </div>

  <h3>Capacidad de obrar</h3>
  <p>La entidad recurrente ostenta plena capacidad de obrar conforme al articulo 65 de la LCSP, acreditada mediante escritura de constitucion debidamente inscrita en el Registro Mercantil${f.recurrente_registro_mercantil ? ` (${escaparHTML(f.recurrente_registro_mercantil)})` : ''}. No concurre ninguna de las prohibiciones de contratar previstas en el articulo 71 de la LCSP.</p>

  <h3>Representacion</h3>
  <p>La representacion de la entidad recurrente se acredita mediante poder de representacion otorgado a favor de D./D.&ordf; ${escaparHTML(f.representante_nombre)}, en calidad de ${escaparHTML(f.representante_titulo)}, con facultades suficientes para interponer recursos administrativos y solicitar medidas cautelares (Documento n. 1).</p>`
}

/** Seccion III V3: LEGITIMACION ACTIVA (AI genera S5) */
function generarSeccionIII_v3(contenido: ContenidoRecursoV3): string {
  const leg = contenido.legitimacion as SeccionLegitimacionV3 | undefined
  if (!leg) {
    return `
    <div class="page-break"></div>
    <h2 class="section-header">III. LEGITIMACION ACTIVA</h2>
    <div class="highlight-box"><p>[Pendiente de generacion]</p></div>`
  }

  return `
  <div class="page-break"></div>
  <h2 class="section-header">III. LEGITIMACION ACTIVA</h2>

  <h3>Fundamento juridico</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(leg.fundamentoLegal)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>Pilar 1. Interes real y efectivo</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(leg.interesReal)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>Pilar 2. Aptitud objetiva como potencial licitador</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(leg.potencialLicitador)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>Pilar 3. Cadena causal de perjuicio</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(leg.perjuicioConcreto)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <div class="highlight-box">
    <p><strong>Conclusion:</strong> ${escaparHTML(textoSeguro(leg.conclusionLegitimacion))}</p>
  </div>`
}

/** Seccion IV V3: ACTO RECURRIBLE (AI genera S5) */
function generarSeccionIV_v3(contenido: ContenidoRecursoV3): string {
  const acto = contenido.actoRecurrible as SeccionActoRecurribleV3 | undefined
  if (!acto) {
    return `
    <div class="page-break"></div>
    <h2 class="section-header">IV. ACTO RECURRIBLE</h2>
    <div class="highlight-box"><p>[Pendiente de generacion]</p></div>`
  }

  return `
  <div class="page-break"></div>
  <h2 class="section-header">IV. ACTO RECURRIBLE</h2>

  <h3>Tipologia del acto impugnado</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(acto.tipologia)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>Tramite cualificado con efectos juridicos directos</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(acto.tramiteCualificado)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>Conexion acto-lesion</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(acto.conexionLesion)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <div class="highlight-box">
    <p><strong>Conclusion:</strong> ${escaparHTML(textoSeguro(acto.conclusionRecurribilidad))}</p>
  </div>`
}

/** Seccion V V3: PLAZO Y ADMISIBILIDAD (datos formulario, expandido) */
function generarSeccionV_v3(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  return `
  <div class="page-break"></div>
  <h2 class="section-header">V. PLAZO Y ADMISIBILIDAD</h2>

  <h3>Computo del plazo</h3>
  <p>El articulo 50.1.a) de la LCSP establece un plazo de quince dias habiles para la interposicion del recurso especial contra los pliegos y documentos contractuales estableciendo condiciones.</p>

  <div class="highlight-box">
    <table style="border: none; width: 100%;">
      <tr><td style="border: none; font-weight: 700; width: 200px; color: #1e3a8a;">Dies a quo:</td><td style="border: none;">${formatearFecha(f.dies_a_quo) !== 'N/D' ? escaparHTML(f.dies_a_quo!) : 'Dia siguiente a la publicacion del acto impugnado en el perfil del contratante'}</td></tr>
      <tr><td style="border: none; font-weight: 700; color: #1e3a8a;">Dies ad quem:</td><td style="border: none;">${formatearFecha(f.dies_ad_quem) !== 'N/D' ? escaparHTML(f.dies_ad_quem!) : 'Decimoquinto dia habil desde el dies a quo'}</td></tr>
      ${f.fecha_publicacion_perfil ? `<tr><td style="border: none; font-weight: 700; color: #1e3a8a;">Publicacion perfil contratante:</td><td style="border: none;">${escaparHTML(f.fecha_publicacion_perfil)}</td></tr>` : ''}
      ${f.fecha_publicacion_doue ? `<tr><td style="border: none; font-weight: 700; color: #1e3a8a;">Publicacion DOUE:</td><td style="border: none;">${escaparHTML(f.fecha_publicacion_doue)}</td></tr>` : ''}
      <tr><td style="border: none; font-weight: 700; color: #1e3a8a;">Fecha de presentacion:</td><td style="border: none;">${escaparHTML(datos.fechaGeneracion)}</td></tr>
    </table>
  </div>

  <h3>Calendario de dias habiles</h3>
  <p>A los efectos del computo del plazo, se excluyen los sabados, domingos y festivos nacionales conforme al articulo 30.2 de la Ley 39/2015 (LPAC) y al calendario oficial de dias habiles publicado por resolucion del Ministerio.</p>

  <h3>Tempestividad</h3>
  <p>El presente recurso se interpone dentro del plazo legal de quince dias habiles previsto en el articulo 50 de la LCSP${f.dies_a_quo ? `, computado desde el ${escaparHTML(f.dies_a_quo)}` : ''}, resultando temporaneo y, por tanto, admisible.</p>

  <h3>Requisitos de admisibilidad</h3>
  <div class="legal-block">
    <p>Se cumplen la totalidad de los requisitos de admisibilidad previstos en los articulos 44 a 51 de la LCSP:</p>
    <p>&bull; <strong>Legitimacion activa</strong> (art. 48 LCSP): acreditada en la Seccion III.</p>
    <p>&bull; <strong>Acto susceptible de recurso</strong> (art. 44.2 LCSP): acreditado en la Seccion IV.</p>
    <p>&bull; <strong>Plazo</strong> (art. 50 LCSP): el recurso se presenta dentro de los 15 dias habiles.</p>
    <p>&bull; <strong>Organo competente</strong> (art. 45 LCSP): el recurso se dirige al tribunal competente.</p>
    <p>&bull; <strong>Contenido minimo</strong> (art. 51.2 LCSP): el escrito contiene la identificacion del recurrente, acto impugnado, motivos del recurso y petitum.</p>
  </div>`
}

/** Seccion VI V3: ANTECEDENTES DE HECHO (reutiliza la v2) */
function generarSeccionVI_v3(datos: DatosRecursoCompleto, contenido: ContenidoRecursoV3): string {
  const antecedentes = contenido.antecedentes ?? []
  const clausulas = datos.clausulasImpugnadas

  let html = `
  <div class="page-break"></div>
  <h2 class="section-header">VI. ANTECEDENTES DE HECHO</h2>`

  antecedentes.forEach((ant: AntecedenteHecho) => {
    html += `
    <h3>${escaparHTML(ant.ordinal)}.- ${escaparHTML(ant.titulo)}</h3>
    <div class="legal-block">
      ${escaparHTML(textoSeguro(ant.texto)).split('\n').map(p => `<p>${p}</p>`).join('')}
      <p style="text-align: right; font-size: 9pt; color: #64748b; font-style: italic;">${escaparHTML(ant.documentoRef)}</p>
    </div>`
  })

  if (clausulas.length > 0) {
    html += `
    <h3>Clausulas del pliego impugnadas</h3>
    ${clausulas.map((cl, idx) => `
    <div class="clausula-card">
      <div class="clausula-header">Clausula ${idx + 1}: ${escaparHTML(cl.controlId)}</div>
      <div class="clausula-meta">
        Norma infringida: ${escaparHTML(cl.normaFuente)} |
        Gravedad: <span class="badge ${cl.prioridad === 'ALTA' || cl.prioridad === 'CRITICA' ? 'badge-danger' : 'badge-warning'}">${escaparHTML(cl.prioridad)}</span>
      </div>
      ${cl.textoClausula ? `<div class="clausula-text">&laquo;${escaparHTML(cl.textoClausula)}&raquo;</div>` : '<p style="font-size: 9pt; color: #64748b;"><em>Omision total en el pliego: sin clausula equivalente al requisito normativo.</em></p>'}
      ${cl.explicacionIRAC ? `<p style="font-size: 9pt; color: #334155; margin-top: 6px;">${escaparHTML(cl.explicacionIRAC)}</p>` : ''}
    </div>`).join('')}`
  }

  return html
}

/** Seccion VII V3: FUNDAMENTOS DE DERECHO + CAUSAS DE NULIDAD (fusiona v2 III + IV) */
function generarSeccionVII_v3(contenido: ContenidoRecursoV3): string {
  const fundamentos = contenido.fundamentos ?? []
  const causas = contenido.causasNulidad

  let html = `
  <div class="page-break"></div>
  <h2 class="section-header">VII. FUNDAMENTOS DE DERECHO</h2>

  <p>Los fundamentos juridicos del presente recurso se estructuran conforme a la cascada argumental: norma vulnerada, clausula viciada, nexo juridico, doctrina y consecuencia pretendida.</p>`

  fundamentos.forEach((fund: FundamentoCascada, idx: number) => {
    html += `
    ${idx > 0 && idx % 3 === 0 ? '<div class="page-break"></div>' : ''}
    <h3>${escaparHTML(fund.ordinal)}.- ${escaparHTML(fund.titulo)}</h3>
    <div class="cascada-bloque">
      <div class="cascada-campo">
        <div class="campo-etiqueta">1. Norma vulnerada</div>
        <div class="campo-texto">${escaparHTML(textoSeguro(fund.normaVulnerada))}</div>
      </div>
      <div class="cascada-campo">
        <div class="campo-etiqueta">2. Clausula viciada del pliego</div>
        <div class="campo-texto">${escaparHTML(textoSeguro(fund.clausulaViciada))}</div>
      </div>
      <div class="cascada-campo">
        <div class="campo-etiqueta">3. Nexo juridico (silogismo)</div>
        <div class="campo-texto">${escaparHTML(textoSeguro(fund.nexoJuridico))}</div>
      </div>
      <div class="cascada-campo">
        <div class="campo-etiqueta">4. Doctrina y jurisprudencia</div>
        <div class="campo-texto">${escaparHTML(textoSeguro(fund.doctrinaJurisprudencia))}</div>
      </div>
      <div class="cascada-campo" style="border-left-color: #dc2626;">
        <div class="campo-etiqueta" style="color: #dc2626;">5. Consecuencia pretendida</div>
        <div class="campo-texto">${escaparHTML(textoSeguro(fund.consecuenciaPretendida))}</div>
      </div>
    </div>`
  })

  // Causas de nulidad integradas dentro de Fundamentos
  if (causas) {
    html += `
    <div class="page-break"></div>
    <h3>Causas de Nulidad de Pleno Derecho</h3>

    <p>Las infracciones identificadas en los pliegos determinan las siguientes causas de nulidad de pleno derecho conforme a los articulos 47 y 48 de la Ley 39/2015 (LPAC) y articulo 39 de la LCSP:</p>`

    const lista: { clave: keyof SeccionCausasNulidad; numero: number }[] = [
      { clave: 'infracciones_reglamentarias', numero: 1 },
      { clave: 'igualdad_trato', numero: 2 },
      { clave: 'contenido_imposible', numero: 3 },
      { clave: 'buena_administracion', numero: 4 },
      { clave: 'rgpd_concurrente', numero: 5 },
    ]

    lista.forEach(({ clave, numero }) => {
      const causa = causas[clave]
      if (!causa) return
      html += `
      <div class="causa-card">
        <div class="causa-base">${escaparHTML(causa.base)}</div>
        <div class="causa-titulo">${numero}. ${escaparHTML(causa.titulo)}</div>
        <p>${escaparHTML(textoSeguro(causa.fundamentacion))}</p>
      </div>`
    })
  }

  return html
}

/** Seccion VIII V3: MEDIDAS CAUTELARES (reutiliza v2) */
function generarSeccionVIII_v3(contenido: ContenidoRecursoV3): string {
  const c = contenido.cautelares
  return `
  <div class="page-break"></div>
  <h2 class="section-header">VIII. MEDIDAS CAUTELARES</h2>

  <p>Al amparo del articulo 56 de la LCSP, esta parte solicita la adopcion de la medida cautelar de <strong>suspension del procedimiento de adjudicacion</strong>, fundamentada en los siguientes presupuestos:</p>

  <h3>Primero. Fumus Boni Iuris (Apariencia de Buen Derecho)</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(c?.fumusBoniIuris)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>Segundo. Periculum in Mora (Riesgo de Perdida de Finalidad)</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(c?.periculumInMora)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>Tercero. Ponderacion de Intereses</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(c?.ponderacionIntereses)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <p>Por todo ello, se solicita a ese Tribunal que acuerde la <strong>suspension inmediata del procedimiento de adjudicacion</strong> hasta la resolucion del presente recurso.</p>`
}

/** Seccion IX V3: SUPLICO / PETITUM (reutiliza v2) */
function generarSeccionIX_v3(datos: DatosRecursoCompleto, contenido: ContenidoRecursoV3): string {
  const p = contenido.peticion
  const clausulas = datos.clausulasImpugnadas
  return `
  <div class="page-break"></div>
  <h2 class="section-header">IX. SUPLICO</h2>

  <div class="legal-block" style="border-left-color: #1e3a8a; background: #eff6ff;">
    <p>Por todo lo expuesto,</p>
    <p><strong>SUPLICO AL TRIBUNAL</strong> que, teniendo por presentado este escrito con los documentos que se acompanan, se sirva admitirlo y, en su virtud:</p>

    <h4>A) Con caracter principal</h4>
    ${escaparHTML(textoSeguro(p?.principal)).split('\n').map(pr => `<p>${pr}</p>`).join('')}
    ${clausulas.length > 0 ? `
    <p>En particular, declare la nulidad de las siguientes clausulas:</p>
    <table>
      <thead>
        <tr><th>#</th><th>Control ENS</th><th>Norma infringida</th><th>Vicio</th><th>Gravedad</th></tr>
      </thead>
      <tbody>
        ${clausulas.map((cl, idx) => `
        <tr>
          <td>${idx + 1}</td>
          <td>${escaparHTML(cl.controlId)}</td>
          <td>${escaparHTML(cl.normaFuente)}</td>
          <td>${escaparHTML(cl.textoClausula).substring(0, 150)}${(cl.textoClausula?.length ?? 0) > 150 ? '...' : ''}</td>
          <td><span class="badge ${cl.prioridad === 'ALTA' || cl.prioridad === 'CRITICA' ? 'badge-danger' : 'badge-warning'}">${escaparHTML(cl.prioridad)}</span></td>
        </tr>`).join('')}
      </tbody>
    </table>
    ` : ''}

    <h4>B) Con caracter subsidiario</h4>
    ${escaparHTML(textoSeguro(p?.subsidiaria)).split('\n').map(pr => `<p>${pr}</p>`).join('')}

    <h4>C) Como medida cautelar</h4>
    ${escaparHTML(textoSeguro(p?.cautelar)).split('\n').map(pr => `<p>${pr}</p>`).join('')}

    <p style="margin-top: 16px;"><strong>Todo ello con los demas pronunciamientos que en Derecho procedan.</strong></p>

    <p style="margin-top: 30px; text-align: right;">${escaparHTML(datos.datosFormulario.recurrente_domicilio ? datos.datosFormulario.recurrente_domicilio.split(',').pop()?.trim() || '' : '')}, a ${escaparHTML(datos.fechaGeneracion)}</p>
    <p style="text-align: right; margin-top: 12px;"><strong>Fdo.: ${escaparHTML(datos.datosFormulario.representante_nombre)}</strong></p>
    <p style="text-align: right; font-size: 9pt; color: #64748b;">${escaparHTML(datos.datosFormulario.representante_titulo)} de ${escaparHTML(datos.datosFormulario.recurrente_denominacion)}</p>
  </div>`
}

/** Otrosies V3 (reutiliza v2) */
function generarOtrosies_v3(contenido: ContenidoRecursoV3): string {
  const o = contenido.otrosies as SeccionOtrosies | undefined
  return `
  <div class="page-break"></div>
  <h2 class="section-header">OTROSIES</h2>

  <h3>PRIMER OTROSI. Proposicion de prueba</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(o?.proposicionPrueba, 'Se propone como prueba la documental adjunta al presente escrito, asi como pericial tecnica sobre los requisitos del Anexo II del RD 311/2022.')).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>SEGUNDO OTROSI. Reclamacion del expediente administrativo</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(o?.reclamacionExpediente, 'Se solicita la remision del expediente administrativo completo conforme al articulo 51.3 de la LCSP, en el plazo de dos dias habiles.')).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>TERCER OTROSI. Notificaciones</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(o?.notificaciones, 'Se designa como direccion a efectos de notificaciones electronicas el correo indicado en el encabezamiento del presente escrito.')).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>`
}

/** Seccion X V3: DOCUMENTACION (reutiliza v2) */
function generarSeccionX_v3(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  const clausulas = datos.clausulasImpugnadas

  return `
  <div class="page-break"></div>
  <h2 class="section-header">X. DOCUMENTACION</h2>

  <p>Al amparo de lo dispuesto en el articulo 51.2 de la LCSP, se acompana al presente recurso la siguiente documentacion:</p>

  <table>
    <thead>
      <tr><th>Doc.</th><th>Titulo</th><th>Descripcion</th></tr>
    </thead>
    <tbody>
      <tr><td style="text-align: center; font-weight: 700;">1</td><td><strong>Poder de representacion</strong></td><td>Acreditacion de facultades para interponer recursos y solicitar cautelares</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">2</td><td><strong>Escrituras sociales</strong></td><td>Escritura de constitucion, nombramiento del administrador y certificacion registral</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">3</td><td><strong>PCAP</strong></td><td>Pliego de Clausulas Administrativas Particulares del expediente</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">4</td><td><strong>PPT</strong></td><td>Pliego de Prescripciones Tecnicas</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">5</td><td><strong>Anuncio de licitacion</strong></td><td>Publicacion en perfil del contratante${f.fecha_publicacion_perfil ? ` (${escaparHTML(f.fecha_publicacion_perfil)})` : ''}${f.fecha_publicacion_doue ? ` y DOUE (${escaparHTML(f.fecha_publicacion_doue)})` : ''}</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">6</td><td><strong>Aclaraciones</strong></td><td>Respuestas oficiales y rectificaciones publicadas</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">7</td><td><strong>Informe tecnico</strong></td><td>Analisis de requisitos ENS y evaluacion de alternativas menos restrictivas</td></tr>
      <tr><td style="text-align: center; font-weight: 700;">8</td><td><strong>Justificante de registro</strong></td><td>Resguardo electronico acreditativo de la tempestividad de la presentacion</td></tr>
    </tbody>
  </table>

  ${clausulas.length > 0 ? `
  <h3>Tabla de correspondencia: clausulas impugnadas y fundamentos</h3>
  <table>
    <thead>
      <tr><th>Clausula</th><th>Control ENS</th><th>Norma infringida</th><th>Fundamento</th></tr>
    </thead>
    <tbody>
      ${clausulas.map((cl, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td>${escaparHTML(cl.controlId)}</td>
        <td>${escaparHTML(cl.normaFuente)}</td>
        <td>Fundamento ${idx < 2 ? 'Primero' : idx < 4 ? 'Segundo a Cuarto' : 'Quinto a Decimo'}</td>
      </tr>`).join('')}
    </tbody>
  </table>
  ` : ''}`
}

// ─── Main v3 HTML Generator ─────────────────────────────────────────────────

function generarRecursoHTML_v3(datos: DatosRecursoCompleto): string {
  const contenido = datos.contenidoRecurso as ContenidoRecursoV3

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>REMC - ${escaparHTML(datos.codigoRecurso)} - ${escaparHTML(datos.datosFormulario.expediente_numero)}</title>
  <style>${generarCSS_v2()}</style>
</head>
<body>
  ${generarPortada_v3(datos)}
  ${generarIndice_v3()}
  ${seccionSegura('I', () => generarSeccionI_v3(datos))}
  ${seccionSegura('II', () => generarSeccionII_v3(datos))}
  ${seccionSegura('III', () => generarSeccionIII_v3(contenido))}
  ${seccionSegura('IV', () => generarSeccionIV_v3(contenido))}
  ${seccionSegura('V', () => generarSeccionV_v3(datos))}
  ${seccionSegura('VI', () => generarSeccionVI_v3(datos, contenido))}
  ${seccionSegura('VII', () => generarSeccionVII_v3(contenido))}
  ${seccionSegura('VIII', () => generarSeccionVIII_v3(contenido))}
  ${seccionSegura('IX', () => generarSeccionIX_v3(datos, contenido))}
  ${seccionSegura('Otrosies', () => generarOtrosies_v3(contenido))}
  ${seccionSegura('X', () => generarSeccionX_v3(datos))}

  <div class="footer">
    <p>Recurso Especial en Materia de Contratacion &mdash; ${escaparHTML(datos.codigoRecurso)}</p>
    <p>${escaparHTML(datos.datosFormulario.recurrente_denominacion)} | Expediente ${escaparHTML(datos.datosFormulario.expediente_numero)} | ${escaparHTML(datos.fechaGeneracion)}</p>
    <p>Documento destinado a su presentacion ante ${escaparHTML(datos.datosFormulario.tribunal_competente)}.</p>
  </div>
</body>
</html>`
}

// ══════════════════════════════════════════════════════════════════════════════
// V4 HTML Generator (Profundidad Juridica Maxima)
// ══════════════════════════════════════════════════════════════════════════════

/** Seccion VII V4: FUNDAMENTOS DE DERECHO (prosa juridica fluida) + Causas Nulidad dinamicas */
function generarSeccionVII_v4(contenido: ContenidoRecursoV4): string {
  const fundamentos = contenido.fundamentos ?? []
  const causas = contenido.causasNulidad

  let html = `
  <div class="page-break"></div>
  <h2 class="section-header">VII. FUNDAMENTOS DE DERECHO</h2>

  <p>Al amparo de lo dispuesto en los articulos 44 y siguientes de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Publico, esta parte fundamenta el presente recurso especial en materia de contratacion en los siguientes motivos de Derecho, cada uno de los cuales constituye causa autonoma y suficiente para la estimacion del recurso:</p>`

  // Fundamentos: prosa juridica continua (sin bloques etiquetados)
  fundamentos.forEach((fund: FundamentoCascadaV4) => {
    html += `
    <div class="page-break"></div>
    <h3>${escaparHTML(fund.ordinal)}.- ${escaparHTML(fund.titulo)}</h3>

    <p>${escaparHTML(textoSeguro(fund.normaVulnerada))}</p>

    <p>${escaparHTML(textoSeguro(fund.clausulaViciada))}</p>

    <p>${escaparHTML(textoSeguro(fund.nexoJuridico))}</p>

    <p>${escaparHTML(textoSeguro(fund.doctrinaJurisprudencia))}</p>

    <p><strong>${escaparHTML(textoSeguro(fund.consecuenciaPretendida))}</strong></p>

    ${fund.analisisJuridico ? escaparHTML(textoSeguro(fund.analisisJuridico)).split('\n').map(p => `<p>${p}</p>`).join('') : ''}`
  })

  // Causas de nulidad
  if (causas) {
    html += `
    <div class="page-break"></div>
    <h3>Causas de Nulidad de Pleno Derecho</h3>

    <p>Las infracciones normativas acreditadas en los fundamentos precedentes determinan, a juicio de esta parte, las siguientes causas de nulidad de pleno derecho conforme a los articulos 47 y 48 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Comun de las Administraciones Publicas, en relacion con el articulo 39 de la Ley 9/2017, de Contratos del Sector Publico:</p>`

    if (esCausasDinamicas(causas)) {
      // Formato dinamico: array de causas sin limite
      causas.forEach((causa: CausaNulidadDinamica) => {
        html += `
        <h4>${escaparHTML(causa.ordinal)}.- ${escaparHTML(causa.titulo)} <em>(${escaparHTML(causa.base)})</em></h4>

        ${escaparHTML(textoSeguro(causa.fundamentacion)).split('\n').map(p => `<p>${p}</p>`).join('')}

        ${causa.jurisprudenciaAplicable ? `<p><em>${escaparHTML(textoSeguro(causa.jurisprudenciaAplicable))}</em></p>` : ''}`
      })
    } else {
      // Retrocompatibilidad: formato legacy de 5 claves fijas
      const lista: { clave: keyof SeccionCausasNulidadV4; numero: number }[] = [
        { clave: 'infracciones_reglamentarias', numero: 1 },
        { clave: 'igualdad_trato', numero: 2 },
        { clave: 'contenido_imposible', numero: 3 },
        { clave: 'buena_administracion', numero: 4 },
        { clave: 'rgpd_concurrente', numero: 5 },
      ]

      lista.forEach(({ clave, numero }) => {
        const causa = causas[clave] as CausaNulidadV4 | undefined
        if (!causa) return
        html += `
        <h4>${numero}.- ${escaparHTML(causa.titulo)} <em>(${escaparHTML(causa.base)})</em></h4>

        <p>${escaparHTML(textoSeguro(causa.fundamentacion))}</p>

        ${causa.jurisprudenciaAplicable ? `<p><em>${escaparHTML(textoSeguro(causa.jurisprudenciaAplicable))}</em></p>` : ''}`
      })
    }
  }

  return html
}

/** Seccion VIII V4: MEDIDAS CAUTELARES con proporcionalidadMedida */
function generarSeccionVIII_v4(contenido: ContenidoRecursoV4): string {
  const c = contenido.cautelares
  return `
  <div class="page-break"></div>
  <h2 class="section-header">VIII. MEDIDAS CAUTELARES</h2>

  <p>Al amparo del articulo 56 de la LCSP, esta parte solicita la adopcion de la medida cautelar de <strong>suspension del procedimiento de adjudicacion</strong>, fundamentada en los siguientes presupuestos:</p>

  <h3>Primero. Fumus Boni Iuris (Apariencia de Buen Derecho)</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(c?.fumusBoniIuris)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>Segundo. Periculum in Mora (Riesgo de Perdida de Finalidad)</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(c?.periculumInMora)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>Tercero. Ponderacion de Intereses</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(c?.ponderacionIntereses)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  ${c?.proporcionalidadMedida ? `
  <h3>Cuarto. Proporcionalidad de la Medida Cautelar</h3>
  <div class="legal-block">
    ${escaparHTML(textoSeguro(c.proporcionalidadMedida)).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>` : ''}

  <p>Por todo ello, se solicita a ese Tribunal que acuerde la <strong>suspension inmediata del procedimiento de adjudicacion</strong> hasta la resolucion del presente recurso.</p>`
}

// ─── Main v4 HTML Generator ─────────────────────────────────────────────────

// ══════════════════════════════════════════════════════════════════════════════
// v5: FORMATO FORENSE TRADICIONAL ESPANOL
// ══════════════════════════════════════════════════════════════════════════════

function generarCSS_forense(): string {
  return `
    @page { size: A4; margin: 2.54cm 2.54cm 2.54cm 3cm; }
    @media print {
      body { margin: 0; padding: 0; }
      .page-break { page-break-before: always; }
    }
    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 12pt;
      line-height: 1.8;
      color: #000;
      max-width: 210mm;
      margin: 0 auto;
      padding: 20px 25px;
    }
    h2.seccion {
      font-size: 14pt;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 0.5px;
      margin: 40px 0 24px;
      color: #000;
      border: none;
    }
    h3 {
      font-size: 12pt;
      font-weight: bold;
      color: #000;
      margin: 28px 0 12px;
    }
    p {
      margin: 0 0 12px;
      text-align: justify;
      text-indent: 1.5cm;
    }
    h2 + p, h3 + p, .no-indent { text-indent: 0; }
    .centered { text-align: center; text-indent: 0; }
    .dice {
      text-align: center;
      font-weight: bold;
      font-size: 14pt;
      text-indent: 0;
      margin: 24px 0;
    }
    .tribunal {
      text-align: center;
      font-size: 14pt;
      font-weight: bold;
      text-transform: uppercase;
      margin: 40px 0 30px;
      text-indent: 0;
    }
    em.latin { font-style: italic; }
    blockquote {
      margin: 12px 2cm;
      font-style: italic;
      font-size: 11pt;
      text-indent: 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 10pt;
    }
    th, td {
      border: 1px solid #000;
      padding: 6px 8px;
      text-align: left;
      text-indent: 0;
    }
    th { background: #000; color: #fff; font-weight: bold; }
    .firma {
      text-align: center;
      text-indent: 0;
      margin-top: 40px;
    }
    .page-break { page-break-before: always; }
  `
}

function generarEncabezamiento_v5(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  const tribunal = escaparHTML(f.tribunal_competente)
  const representante = escaparHTML(f.representante_nombre)
  const titulo = escaparHTML(f.representante_titulo)
  const empresa = escaparHTML(f.recurrente_denominacion)
  const cif = escaparHTML(f.recurrente_cif)
  const domicilio = escaparHTML(f.recurrente_domicilio)
  const expediente = escaparHTML(f.expediente_numero)
  const denominacion = escaparHTML(f.expediente_denominacion)
  const organo = escaparHTML(f.organo_contratacion)

  return `
  <p class="tribunal">AL ${tribunal}</p>

  <p class="no-indent">D./D&ntilde;a. <strong>${representante}</strong>, ${titulo}, en nombre y representaci&oacute;n de <strong>${empresa}</strong>, con CIF ${cif}, y domicilio a efectos de notificaciones en ${domicilio}${f.recurrente_email ? `, correo electr&oacute;nico ${escaparHTML(f.recurrente_email)}` : ''}, ante ese Tribunal comparece y, como mejor proceda en Derecho,</p>

  <p class="dice">DICE:</p>

  <p class="no-indent">Que, mediante el presente escrito, dentro del plazo legalmente establecido conforme al art&iacute;culo 50 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector P&uacute;blico (en adelante, LCSP), interpone <strong>RECURSO ESPECIAL EN MATERIA DE CONTRATACI&Oacute;N</strong> contra los pliegos reguladores del expediente n.&ordm; ${expediente}, denominado &laquo;${denominacion}&raquo;, promovido por ${organo}, al amparo de lo dispuesto en los art&iacute;culos 44 y siguientes de la LCSP, y ello en base a los siguientes</p>`
}

function generarHechos_v5(contenido: ContenidoRecursoV4): string {
  const antecedentes = contenido.antecedentes ?? []
  let html = `
  <h2 class="seccion">HECHOS</h2>`

  antecedentes.forEach((h: AntecedenteHecho) => {
    html += `
    <h3>${escaparHTML(h.ordinal)}.- ${escaparHTML(h.titulo)}</h3>
    <p>${escaparHTML(textoSeguro(h.texto))} ${escaparHTML(h.documentoRef)}</p>`
  })
  return html
}

function generarFundamentos_v5(contenido: ContenidoRecursoV4): string {
  const fundamentos = contenido.fundamentos ?? []
  let html = `
  <div class="page-break"></div>
  <h2 class="seccion">FUNDAMENTOS DE DERECHO</h2>`

  fundamentos.forEach((fund: FundamentoCascadaV4, idx: number) => {
    if (idx > 0 && idx % 3 === 0) html += '<div class="page-break"></div>'

    html += `
    <h3>${escaparHTML(fund.ordinal)}.- ${escaparHTML(fund.titulo)}</h3>
    <p>${escaparHTML(textoSeguro(fund.normaVulnerada))}</p>
    <p>${escaparHTML(textoSeguro(fund.clausulaViciada))}</p>
    <p>${escaparHTML(textoSeguro(fund.nexoJuridico))}</p>
    <p>${escaparHTML(textoSeguro(fund.doctrinaJurisprudencia))}</p>
    <p>${escaparHTML(textoSeguro(fund.consecuenciaPretendida))}</p>`

    if (fund.analisisJuridico) {
      const parrafos = textoSeguro(fund.analisisJuridico).split('\n').filter(p => p.trim())
      parrafos.forEach(p => { html += `\n    <p>${escaparHTML(p)}</p>` })
    }
  })
  return html
}

function generarCausasNulidad_v5(contenido: ContenidoRecursoV4): string {
  const causas = contenido.causasNulidad
  if (!causas) return ''

  let html = `
  <div class="page-break"></div>
  <h2 class="seccion">CAUSAS DE NULIDAD DE PLENO DERECHO</h2>
  <p>Las infracciones normativas acreditadas en los fundamentos de derecho precedentes determinan las siguientes causas de nulidad de pleno derecho:</p>`

  if (esCausasDinamicas(causas)) {
    causas.forEach((causa: CausaNulidadDinamica) => {
      html += `
      <h3>${escaparHTML(causa.ordinal)}.- ${escaparHTML(causa.titulo)} <em>(${escaparHTML(causa.base)})</em></h3>`
      const parrafos = textoSeguro(causa.fundamentacion).split('\n').filter(p => p.trim())
      parrafos.forEach(p => { html += `\n      <p>${escaparHTML(p)}</p>` })
      if (causa.jurisprudenciaAplicable) {
        html += `\n      <p><em>${escaparHTML(textoSeguro(causa.jurisprudenciaAplicable))}</em></p>`
      }
    })
  } else {
    // Legacy 5-key object fallback
    const claves = Object.keys(causas) as (keyof SeccionCausasNulidadV4)[]
    const ordinales = ['PRIMERA', 'SEGUNDA', 'TERCERA', 'CUARTA', 'QUINTA']
    claves.forEach((clave, i) => {
      const c = (causas as SeccionCausasNulidadV4)[clave] as CausaNulidadV4
      if (!c) return
      html += `
      <h3>${ordinales[i] ?? `${i + 1}.ª`}.- ${escaparHTML(c.titulo)} <em>(${escaparHTML(c.base)})</em></h3>
      <p>${escaparHTML(textoSeguro(c.fundamentacion))}</p>`
      if (c.jurisprudenciaAplicable) {
        html += `\n      <p><em>${escaparHTML(textoSeguro(c.jurisprudenciaAplicable))}</em></p>`
      }
    })
  }
  return html
}

function generarCautelares_v5(contenido: ContenidoRecursoV4): string {
  const c = contenido.cautelares
  if (!c) return ''

  return `
  <div class="page-break"></div>
  <h2 class="seccion">MEDIDAS CAUTELARES</h2>
  <p class="no-indent">De conformidad con lo previsto en el art&iacute;culo 49 de la LCSP, esta parte interesa la adopci&oacute;n de la medida cautelar de suspensi&oacute;n del procedimiento de licitaci&oacute;n, concurriendo los presupuestos legalmente exigidos que a continuaci&oacute;n se exponen.</p>
  <p>${escaparHTML(textoSeguro(c.fumusBoniIuris))}</p>
  <p>${escaparHTML(textoSeguro(c.periculumInMora))}</p>
  <p>${escaparHTML(textoSeguro(c.ponderacionIntereses))}</p>
  ${c.proporcionalidadMedida ? `<p>${escaparHTML(textoSeguro(c.proporcionalidadMedida))}</p>` : ''}`
}

function generarSuplico_v5(contenido: ContenidoRecursoV4): string {
  const p = contenido.peticion
  if (!p) return ''

  return `
  <div class="page-break"></div>
  <h2 class="seccion">S&Uacute;PLICO</h2>
  <p class="no-indent">Por todo lo expuesto,</p>
  <p class="no-indent"><strong>SUPLICO AL TRIBUNAL</strong> ${escaparHTML(textoSeguro(p.principal))}</p>
  <p class="no-indent"><strong>Con car&aacute;cter subsidiario,</strong> ${escaparHTML(textoSeguro(p.subsidiaria))}</p>
  <p class="no-indent"><strong>Asimismo,</strong> ${escaparHTML(textoSeguro(p.cautelar))}</p>`
}

function generarOtrosies_v5(contenido: ContenidoRecursoV4): string {
  const o = contenido.otrosies
  if (!o) return ''

  return `
  <p class="no-indent" style="margin-top:30px;"><strong>PRIMER OTROS&Iacute; DIGO:</strong> ${escaparHTML(textoSeguro(o.proposicionPrueba))}</p>
  <p class="no-indent"><strong>SEGUNDO OTROS&Iacute; DIGO:</strong> ${escaparHTML(textoSeguro(o.reclamacionExpediente))}</p>
  <p class="no-indent"><strong>TERCER OTROS&Iacute; DIGO:</strong> ${escaparHTML(textoSeguro(o.notificaciones))}</p>`
}

function generarCierre_v5(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  return `
  <p class="firma" style="margin-top:50px;">En ${escaparHTML(f.tribunal_direccion ?? 'Madrid')}, a ${escaparHTML(datos.fechaGeneracion)}.</p>
  <p class="firma" style="margin-top:20px;">Es justicia que pido en ${escaparHTML(f.tribunal_direccion ?? 'Madrid')}, en la fecha indicada.</p>
  <p class="firma" style="margin-top:40px;"><strong>Fdo.: ${escaparHTML(f.representante_nombre)}</strong><br>${escaparHTML(f.representante_titulo)} de ${escaparHTML(f.recurrente_denominacion)}</p>`
}

function generarLegitimacion_v5(contenido: ContenidoRecursoV4): string {
  const l = contenido.legitimacion
  if (!l) return ''

  return `
  <h2 class="seccion">LEGITIMACI&Oacute;N ACTIVA</h2>
  <p>${escaparHTML(textoSeguro(l.fundamentoLegal))}</p>
  <p>${escaparHTML(textoSeguro(l.interesReal))}</p>
  <p>${escaparHTML(textoSeguro(l.potencialLicitador))}</p>
  <p>${escaparHTML(textoSeguro(l.perjuicioConcreto))}</p>
  <p>${escaparHTML(textoSeguro(l.conclusionLegitimacion))}</p>`
}

function generarActoRecurrible_v5(contenido: ContenidoRecursoV4): string {
  const a = contenido.actoRecurrible
  if (!a) return ''

  return `
  <h2 class="seccion">ACTO RECURRIBLE</h2>
  <p>${escaparHTML(textoSeguro(a.tipologia))}</p>
  <p>${escaparHTML(textoSeguro(a.tramiteCualificado))}</p>
  <p>${escaparHTML(textoSeguro(a.conexionLesion))}</p>
  <p>${escaparHTML(textoSeguro(a.conclusionRecurribilidad))}</p>`
}

function generarRecursoHTML_v5(datos: DatosRecursoCompleto): string {
  const contenido = datos.contenidoRecurso as ContenidoRecursoV4

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>REMC - ${escaparHTML(datos.codigoRecurso)} - ${escaparHTML(datos.datosFormulario.expediente_numero)}</title>
  <style>${generarCSS_forense()}</style>
</head>
<body>
  ${generarEncabezamiento_v5(datos)}
  ${generarLegitimacion_v5(contenido)}
  ${generarActoRecurrible_v5(contenido)}
  ${generarHechos_v5(contenido)}
  ${generarFundamentos_v5(contenido)}
  ${generarCausasNulidad_v5(contenido)}
  ${generarCautelares_v5(contenido)}
  ${generarSuplico_v5(contenido)}
  ${generarOtrosies_v5(contenido)}
  ${generarCierre_v5(datos)}
</body>
</html>`
}

function generarRecursoHTML_v4(datos: DatosRecursoCompleto): string {
  const contenido = datos.contenidoRecurso as ContenidoRecursoV4
  // Cast to v3 for reused sections (field names are structurally compatible)
  const contenidoV3 = contenido as unknown as ContenidoRecursoV3

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>REMC v4 - ${escaparHTML(datos.codigoRecurso)} - ${escaparHTML(datos.datosFormulario.expediente_numero)}</title>
  <style>${generarCSS_v2()}</style>
</head>
<body>
  ${generarPortada_v3(datos)}
  ${generarIndice_v3()}
  ${seccionSegura('I', () => generarSeccionI_v3(datos))}
  ${seccionSegura('II', () => generarSeccionII_v3(datos))}
  ${seccionSegura('III', () => generarSeccionIII_v3(contenidoV3))}
  ${seccionSegura('IV', () => generarSeccionIV_v3(contenidoV3))}
  ${seccionSegura('V', () => generarSeccionV_v3(datos))}
  ${seccionSegura('VI', () => generarSeccionVI_v3(datos, contenidoV3))}
  ${seccionSegura('VII', () => generarSeccionVII_v4(contenido))}
  ${seccionSegura('VIII', () => generarSeccionVIII_v4(contenido))}
  ${seccionSegura('IX', () => generarSeccionIX_v3(datos, contenidoV3))}
  ${seccionSegura('Otrosies', () => generarOtrosies_v3(contenidoV3))}
  ${seccionSegura('X', () => generarSeccionX_v3(datos))}

  <div class="footer">
    <p>Recurso Especial en Materia de Contratacion &mdash; ${escaparHTML(datos.codigoRecurso)}</p>
    <p>${escaparHTML(datos.datosFormulario.recurrente_denominacion)} | Expediente ${escaparHTML(datos.datosFormulario.expediente_numero)} | ${escaparHTML(datos.fechaGeneracion)}</p>
    <p>Documento destinado a su presentacion ante ${escaparHTML(datos.datosFormulario.tribunal_competente)}.</p>
  </div>
</body>
</html>`
}

// ══════════════════════════════════════════════════════════════════════════════
// LEGACY v1 HTML Generator (para analisis existentes en BD)
// ══════════════════════════════════════════════════════════════════════════════

function generarCSS_legacy(): string {
  return `
    @page {
      size: A4;
      margin: 2.5cm;
      @bottom-center {
        content: "Pagina " counter(page) " de " counter(pages);
        font-size: 8pt;
        color: #94a3b8;
      }
    }

    @media print {
      .page-break { page-break-before: always; }
      .no-print { display: none; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 11pt;
      line-height: 1.7;
      color: #1a202c;
      max-width: 210mm;
      margin: 0 auto;
      padding: 20px;
    }

    h1, h2, h3, h4, h5 {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    }

    .cover {
      text-align: center;
      padding: 100px 40px 60px;
      min-height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .cover h1 {
      font-size: 26pt;
      color: #1e3a8a;
      margin-bottom: 12px;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }
    .cover .subtitle {
      font-size: 13pt;
      color: #4a5568;
      margin-bottom: 30px;
      font-style: italic;
    }
    .cover .meta-table {
      text-align: left;
      margin: 20px auto;
      border-collapse: collapse;
      font-size: 10pt;
    }
    .cover .meta-table td {
      padding: 4px 12px;
      border: none;
      vertical-align: top;
    }
    .cover .meta-table td:first-child {
      font-weight: 700;
      color: #1e3a8a;
      white-space: nowrap;
    }
    .cover .classification {
      margin-top: 30px;
      padding: 8px 24px;
      border: 2px solid #1e3a8a;
      display: inline-block;
      font-size: 10pt;
      font-weight: 700;
      color: #1e3a8a;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .page-break { page-break-before: always; }

    .section-header {
      color: #1e3a8a;
      font-size: 16pt;
      border-bottom: 3px solid #1e3a8a;
      padding-bottom: 8px;
      margin: 30px 0 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    h2 {
      color: #1e3a8a;
      font-size: 16pt;
      border-bottom: 2px solid #3b82f6;
      padding-bottom: 8px;
      margin: 28px 0 16px;
    }
    h3 {
      color: #2563eb;
      font-size: 13pt;
      margin: 20px 0 10px;
    }
    h4 {
      color: #334155;
      font-size: 11pt;
      margin: 14px 0 8px;
    }

    p { margin: 8px 0; text-align: justify; }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 14px 0;
      font-size: 10pt;
    }
    th, td {
      border: 1px solid #cbd5e1;
      padding: 8px 10px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #1e3a8a;
      color: white;
      font-weight: 600;
      font-family: 'Segoe UI', system-ui, sans-serif;
      font-size: 9pt;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    tr:nth-child(even) { background: #f8fafc; }

    .legal-block {
      background: #f8fafc;
      border-left: 4px solid #1e3a8a;
      padding: 16px 20px;
      margin: 14px 0;
      border-radius: 0 6px 6px 0;
    }
    .legal-block p { margin: 6px 0; }

    .highlight-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 8px;
      padding: 16px 20px;
      margin: 14px 0;
    }

    .clausula-card {
      border: 1px solid #e2e8f0;
      border-left: 4px solid #ef4444;
      border-radius: 0 8px 8px 0;
      padding: 14px 18px;
      margin: 12px 0;
      break-inside: avoid;
    }
    .clausula-card .clausula-header {
      font-family: 'Segoe UI', system-ui, sans-serif;
      font-weight: 700;
      color: #1e3a8a;
      font-size: 10pt;
      margin-bottom: 6px;
    }
    .clausula-card .clausula-meta {
      font-size: 9pt;
      color: #64748b;
      margin-bottom: 8px;
    }
    .clausula-card .clausula-text {
      font-style: italic;
      font-size: 10pt;
      color: #334155;
      padding: 8px 12px;
      background: #fef2f2;
      border-radius: 4px;
    }

    .toc { margin: 20px 0; }
    .toc-entry {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 4px 0;
      border-bottom: 1px dotted #cbd5e1;
      font-size: 10pt;
    }
    .toc-entry.main {
      font-weight: 700;
      color: #1e3a8a;
      font-size: 11pt;
      margin-top: 6px;
    }

    .badge {
      display: inline-block;
      padding: 2px 10px;
      border-radius: 12px;
      font-size: 8pt;
      font-weight: 600;
      font-family: 'Segoe UI', system-ui, sans-serif;
    }
    .badge-danger { background: #fee2e2; color: #991b1b; }
    .badge-warning { background: #fef3c7; color: #92400e; }

    .footer {
      text-align: center;
      color: #94a3b8;
      font-size: 8pt;
      margin-top: 40px;
      padding-top: 16px;
      border-top: 1px solid #e2e8f0;
      font-family: 'Segoe UI', system-ui, sans-serif;
    }
  `
}

function generarRecursoHTML_legacy(datos: DatosRecursoCompleto): string {
  const contenido = datos.contenidoRecurso as ContenidoRecursoLegacy
  const f = datos.datosFormulario
  const clausulas = datos.clausulasImpugnadas

  const portada = `
  <div class="cover">
    <h1>RECURSO ESPECIAL EN MATERIA<br>DE CONTRATACION</h1>
    <p class="subtitle">Arts. 44 a 60 de la Ley 9/2017, de Contratos del Sector Publico</p>
    <p style="font-size: 11pt; color: #334155; max-width: 500px; margin: 0 auto 10px;">Contra los pliegos del expediente n.&ordm; ${escaparHTML(f.expediente_numero)}</p>
    ${f.expediente_denominacion ? `<p style="font-size: 10pt; color: #4a5568; max-width: 500px; margin: 0 auto 20px;">&laquo;${escaparHTML(f.expediente_denominacion)}&raquo;</p>` : ''}
    <table class="meta-table">
      <tr><td>Recurrente:</td><td>${escaparHTML(f.recurrente_denominacion)}</td></tr>
      <tr><td>CIF:</td><td>${escaparHTML(f.recurrente_cif)}</td></tr>
      <tr><td>Expediente:</td><td>${escaparHTML(f.expediente_numero)}</td></tr>
      <tr><td>Tribunal:</td><td>${escaparHTML(f.tribunal_competente)}</td></tr>
      <tr><td>Fecha:</td><td>${escaparHTML(datos.fechaGeneracion)}</td></tr>
    </table>
    <div class="classification">Recurso Especial &mdash; Art. 44 LCSP</div>
  </div>`

  const secI = `
  <div class="page-break"></div>
  <h2 class="section-header">I. ENCABEZAMIENTO</h2>
  <div class="legal-block">
    <p><strong>AL ${escaparHTML(f.tribunal_competente).toUpperCase()}</strong></p>
  </div>
  <p>${escaparHTML(f.representante_nombre)}, en nombre y representacion de <strong>${escaparHTML(f.recurrente_denominacion)}</strong> (CIF: ${escaparHTML(f.recurrente_cif)}), interpone RECURSO ESPECIAL contra los pliegos del expediente n.&ordm; ${escaparHTML(f.expediente_numero)}.</p>`

  const c = contenido
  const secIII = `
  <div class="page-break"></div>
  <h2 class="section-header">III. LEGITIMACION ACTIVA</h2>
  <div class="legal-block">${escaparHTML(textoSeguro(c?.legitimacion?.interesReal)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <div class="legal-block">${escaparHTML(textoSeguro(c?.legitimacion?.potencialLicitador)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <div class="legal-block">${escaparHTML(textoSeguro(c?.legitimacion?.perjuicioConcreto)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>`

  const secIV = `
  <div class="page-break"></div>
  <h2 class="section-header">IV. ACTO RECURRIBLE</h2>
  <div class="legal-block">${escaparHTML(textoSeguro(c?.actoRecurrible?.tipologia)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <div class="legal-block">${escaparHTML(textoSeguro(c?.actoRecurrible?.tramiteCualificado)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>`

  const secVI = `
  <div class="page-break"></div>
  <h2 class="section-header">VI. HECHOS</h2>
  <h3>PRIMERO.</h3><div class="legal-block">${escaparHTML(textoSeguro(c?.hechos?.hecho1_publicacion)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <h3>SEGUNDO.</h3><div class="legal-block">${escaparHTML(textoSeguro(c?.hechos?.hecho2_clausulas)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  ${clausulas.length > 0 ? clausulas.map((cl, idx) => `
  <div class="clausula-card">
    <div class="clausula-header">Clausula ${idx + 1}: ${escaparHTML(cl.controlId)}</div>
    <div class="clausula-meta">Norma: ${escaparHTML(cl.normaFuente)} | <span class="badge ${cl.prioridad === 'ALTA' || cl.prioridad === 'CRITICA' ? 'badge-danger' : 'badge-warning'}">${escaparHTML(cl.prioridad)}</span></div>
    ${cl.textoClausula ? `<div class="clausula-text">&laquo;${escaparHTML(cl.textoClausula)}&raquo;</div>` : ''}
  </div>`).join('') : ''}
  <h3>TERCERO.</h3><div class="legal-block">${escaparHTML(textoSeguro(c?.hechos?.hecho3_contexto)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <h3>CUARTO.</h3><div class="legal-block">${escaparHTML(textoSeguro(c?.hechos?.hecho4_efecto)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <h3>QUINTO.</h3><div class="legal-block">${escaparHTML(textoSeguro(c?.hechos?.hecho5_perjuicio)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>`

  const fd = c?.fundamentos
  const secVII = `
  <div class="page-break"></div>
  <h2 class="section-header">VII. FUNDAMENTOS DE DERECHO</h2>
  <h3>PRIMERO.</h3><div class="legal-block">${escaparHTML(textoSeguro(fd?.modulo1_principios)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <h3>SEGUNDO.</h3><div class="legal-block">${escaparHTML(textoSeguro(fd?.modulo2_proporcionalidad)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <h3>TERCERO.</h3><div class="legal-block">${escaparHTML(textoSeguro(fd?.modulo3_solvencia)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <h3>CUARTO.</h3><div class="legal-block">${escaparHTML(textoSeguro(fd?.modulo4_tecnicas)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <h3>QUINTO.</h3><div class="legal-block">${escaparHTML(textoSeguro(fd?.modulo5_criterios)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <div class="page-break"></div>
  <h3>SEXTO.</h3><div class="legal-block">${escaparHTML(textoSeguro(fd?.modulo6_lotes)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <h3>SEPTIMO.</h3><div class="legal-block">${escaparHTML(textoSeguro(fd?.modulo7_ejecucion)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <h3>OCTAVO.</h3><div class="legal-block">${escaparHTML(textoSeguro(fd?.modulo8_modificaciones)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <h3>NOVENO.</h3><div class="legal-block">${escaparHTML(textoSeguro(fd?.modulo9_motivacion)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <h3>DECIMO.</h3><div class="legal-block">${escaparHTML(textoSeguro(fd?.modulo10_doctrina)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>`

  const secVIII = `
  <div class="page-break"></div>
  <h2 class="section-header">VIII. MEDIDAS CAUTELARES</h2>
  <div class="legal-block">${escaparHTML(textoSeguro(c?.cautelares?.fumusBoniIuris)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <div class="legal-block">${escaparHTML(textoSeguro(c?.cautelares?.periculumInMora)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>
  <div class="legal-block">${escaparHTML(textoSeguro(c?.cautelares?.ponderacionIntereses)).split('\n').map(p => `<p>${p}</p>`).join('')}</div>`

  const pe = c?.peticion
  const secIX = `
  <div class="page-break"></div>
  <h2 class="section-header">IX. SUPLICO</h2>
  <div class="legal-block" style="background: #eff6ff;">
    <p><strong>SUPLICO AL TRIBUNAL:</strong></p>
    <h4>A) Principal</h4>${escaparHTML(textoSeguro(pe?.principal)).split('\n').map(p => `<p>${p}</p>`).join('')}
    <h4>B) Subsidiaria</h4>${escaparHTML(textoSeguro(pe?.subsidiaria)).split('\n').map(p => `<p>${p}</p>`).join('')}
    <h4>C) Cautelar</h4>${escaparHTML(textoSeguro(pe?.cautelar)).split('\n').map(p => `<p>${p}</p>`).join('')}
    <p style="margin-top: 30px; text-align: right;"><strong>Fdo.: ${escaparHTML(f.representante_nombre)}</strong></p>
  </div>`

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>REMC - ${escaparHTML(datos.codigoRecurso)} - ${escaparHTML(f.expediente_numero)}</title>
  <style>${generarCSS_legacy()}</style>
</head>
<body>
  ${portada}
  ${secI}
  ${secIII}
  ${secIV}
  ${secVI}
  ${secVII}
  ${secVIII}
  ${secIX}
  <div class="footer">
    <p>REMC &mdash; ${escaparHTML(datos.codigoRecurso)} | ${escaparHTML(f.recurrente_denominacion)} | ${escaparHTML(datos.fechaGeneracion)}</p>
  </div>
</body>
</html>`
}

// ─── Public API ─────────────────────────────────────────────────────────────

export function generarRecursoHTML(datos: DatosRecursoCompleto): string {
  // Safety: if contenidoRecurso is a string (edge case), parse it
  if (typeof datos.contenidoRecurso === 'string') {
    try {
      datos = { ...datos, contenidoRecurso: JSON.parse(datos.contenidoRecurso as unknown as string) }
    } catch {
      console.error('[recurso-service] contenidoRecurso es string no-JSON:', String(datos.contenidoRecurso).slice(0, 100))
      throw new Error('El contenido del recurso tiene formato invalido')
    }
  }

  const version = (datos.contenidoRecurso as unknown as Record<string, unknown>)?._version
  console.log(`[recurso-service] Renderizando recurso version=${version}, claves=[${Object.keys(datos.contenidoRecurso).join(', ')}]`)

  if (esFormatoV5(datos.contenidoRecurso)) {
    return generarRecursoHTML_v5(datos)
  }
  if (esFormatoV4(datos.contenidoRecurso)) {
    return generarRecursoHTML_v4(datos)
  }
  if (esFormatoV3(datos.contenidoRecurso)) {
    return generarRecursoHTML_v3(datos)
  }
  if (esFormatoV2(datos.contenidoRecurso)) {
    return generarRecursoHTML_v2(datos)
  }
  return generarRecursoHTML_legacy(datos)
}

export function abrirRecursoImprimible(html: string): void {
  const ventanaImpresion = window.open('', '_blank')
  if (ventanaImpresion) {
    ventanaImpresion.document.write(html)
    ventanaImpresion.document.close()
    setTimeout(() => ventanaImpresion.print(), 500)
  } else {
    descargarComoHTML(html, 'recurso-remc.html')
  }
}

function descargarComoHTML(html: string, nombre: string): void {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nombre
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
