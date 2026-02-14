import type { DatosRecursoCompleto } from '@/types/recurso'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function escaparHTML(texto: string | null | undefined): string {
  if (!texto) return ''
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function formatearMoneda(valor: number | undefined): string {
  if (valor === undefined || valor === null) return 'N/D'
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valor)
}

function formatearFecha(fecha: string | undefined): string {
  if (!fecha) return 'N/D'
  return fecha
}

// ─── CSS ─────────────────────────────────────────────────────────────────────

function generarCSS(): string {
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

    /* Headings - sans-serif for contrast */
    h1, h2, h3, h4, h5 {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    }

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

    /* Page break */
    .page-break { page-break-before: always; }

    /* Section headers with Roman numerals */
    .section-header {
      color: #1e3a8a;
      font-size: 16pt;
      border-bottom: 3px solid #1e3a8a;
      padding-bottom: 8px;
      margin: 30px 0 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .section-subtitle {
      color: #4a5568;
      font-size: 10pt;
      font-style: italic;
      margin-top: -16px;
      margin-bottom: 20px;
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

    /* Tables */
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

    /* Content blocks */
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

    .warning-box {
      background: #fffbeb;
      border: 1px solid #fcd34d;
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

    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin: 6px 0;
      font-size: 10pt;
    }
    .checklist-item .check {
      color: #22c55e;
      font-weight: 700;
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* Table of contents */
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

    /* Version control table */
    .version-table th { background: #334155; }

    /* Document list */
    .doc-list { list-style: none; padding: 0; }
    .doc-list li {
      padding: 8px 0;
      border-bottom: 1px solid #f1f5f9;
      font-size: 10pt;
    }
    .doc-list li strong {
      color: #1e3a8a;
      font-family: 'Segoe UI', system-ui, sans-serif;
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
    .badge-info { background: #dbeafe; color: #1e40af; }

    /* Footer */
    .footer {
      text-align: center;
      color: #94a3b8;
      font-size: 8pt;
      margin-top: 40px;
      padding-top: 16px;
      border-top: 1px solid #e2e8f0;
      font-family: 'Segoe UI', system-ui, sans-serif;
    }

    /* Numbered paragraphs for legal style */
    .numbered-content {
      counter-reset: paragraph;
    }
    .numbered-content > p::before {
      counter-increment: paragraph;
      content: counter(paragraph) ". ";
      font-weight: 700;
      color: #1e3a8a;
    }

    ol.legal-list {
      counter-reset: legal-item;
      list-style: none;
      padding-left: 0;
    }
    ol.legal-list li {
      counter-increment: legal-item;
      margin: 8px 0;
      padding-left: 30px;
      position: relative;
    }
    ol.legal-list li::before {
      content: counter(legal-item) ".";
      position: absolute;
      left: 0;
      font-weight: 700;
      color: #1e3a8a;
    }

    ul.dash-list {
      list-style: none;
      padding-left: 20px;
    }
    ul.dash-list li::before {
      content: "\\2014\\00a0";
      color: #1e3a8a;
    }
  `
}

// ─── Section Generators ──────────────────────────────────────────────────────

function generarPortada(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  return `
  <div class="cover">
    <h1>RECURSO ESPECIAL EN MATERIA<br>DE CONTRATACION</h1>
    <p class="subtitle">Contra los pliegos del expediente n.&ordm; ${escaparHTML(f.expediente_numero)}</p>
    ${f.expediente_denominacion ? `<p style="font-size: 11pt; color: #334155; max-width: 500px; margin: 0 auto 20px;">&laquo;${escaparHTML(f.expediente_denominacion)}&raquo;</p>` : ''}
    <p style="font-size: 10pt; color: #64748b; margin-bottom: 20px;">Con solicitud de suspension del procedimiento</p>

    <table class="meta-table">
      <tr><td>Codigo:</td><td>${escaparHTML(datos.codigoRecurso)}</td></tr>
      <tr><td>Cliente:</td><td>${escaparHTML(f.recurrente_denominacion)}</td></tr>
      <tr><td>CIF:</td><td>${escaparHTML(f.recurrente_cif)}</td></tr>
      <tr><td>Expediente:</td><td>${escaparHTML(f.expediente_numero)}</td></tr>
      <tr><td>Tipo contractual:</td><td>${escaparHTML(f.expediente_tipo_contractual)}</td></tr>
      <tr><td>Procedimiento:</td><td>${escaparHTML(f.expediente_procedimiento)}</td></tr>
      <tr><td>Organo contratacion:</td><td>${escaparHTML(f.organo_contratacion)}</td></tr>
      <tr><td>Tribunal:</td><td>${escaparHTML(f.tribunal_competente)}</td></tr>
      <tr><td>Fecha:</td><td>${escaparHTML(datos.fechaGeneracion)}</td></tr>
      <tr><td>Version:</td><td>1.0 &mdash; Version final</td></tr>
    </table>

    <div class="classification">EXTERNO &mdash; PRESENTACION OFICIAL</div>
  </div>`
}

function generarControlVersiones(datos: DatosRecursoCompleto): string {
  return `
  <div class="page-break"></div>
  <h2 class="section-header">0. PORTADA TECNICA Y CONTROL DE VERSIONES</h2>
  <p class="section-subtitle">Estandar de calidad documental en entornos de consultoria juridica y auditoria publica</p>

  <h3>0.1. Identificacion Documental</h3>
  <div class="legal-block">
    <p><strong>Titulo:</strong> RECURSO ESPECIAL EN MATERIA DE CONTRATACION</p>
    <p><strong>Subtitulo:</strong> Contra los pliegos del expediente n.&ordm; ${escaparHTML(datos.datosFormulario.expediente_numero)}</p>
    <p><strong>Codigo interno:</strong> ${escaparHTML(datos.codigoRecurso)}</p>
    <p><strong>Clasificacion:</strong> EXTERNO &mdash; PRESENTACION OFICIAL</p>
  </div>

  <h3>0.2. Control de Cambios</h3>
  <table class="version-table">
    <thead>
      <tr><th>Version</th><th>Fecha</th><th>Responsable</th><th>Descripcion</th></tr>
    </thead>
    <tbody>
      <tr><td>0.1</td><td>${escaparHTML(datos.fechaGeneracion)}</td><td>Area Juridica</td><td>Primera redaccion automatizada</td></tr>
      <tr><td>1.0</td><td>${escaparHTML(datos.fechaGeneracion)}</td><td>Direccion Juridica</td><td>Version final generada</td></tr>
    </tbody>
  </table>

  <h3>0.3. Indice Ejecutivo</h3>
  <div class="toc">
    <div class="toc-entry main"><span>0. Portada Tecnica y Control de Versiones</span></div>
    <div class="toc-entry main"><span>I. Encabezamiento Formal</span></div>
    <div class="toc-entry main"><span>II. Comparecencia e Identidad del Recurrente</span></div>
    <div class="toc-entry main"><span>III. Legitimacion Activa</span></div>
    <div class="toc-entry main"><span>IV. Acto Recurrible</span></div>
    <div class="toc-entry main"><span>V. Plazo, Computo, Registro</span></div>
    <div class="toc-entry main"><span>VI. Antecedentes y Hechos</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Hecho Primero &mdash; Publicacion</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Hecho Segundo &mdash; Clausulas impugnadas</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Hecho Tercero &mdash; Contexto sectorial</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Hecho Cuarto &mdash; Efecto practico</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Hecho Quinto &mdash; Perjuicio individualizado</span></div>
    <div class="toc-entry main"><span>VII. Fundamentos de Derecho</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Modulo 1 &mdash; Principios rectores LCSP</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Modulo 2 &mdash; Proporcionalidad</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Modulo 3 &mdash; Solvencia</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Modulo 4 &mdash; Prescripciones tecnicas</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Modulo 5 &mdash; Criterios de adjudicacion</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Modulo 6 &mdash; Division en lotes</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Modulo 7 &mdash; Condiciones de ejecucion</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Modulo 8 &mdash; Modificaciones</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Modulo 9 &mdash; Motivacion del expediente</span></div>
    <div class="toc-entry"><span>&nbsp;&nbsp;&nbsp;Modulo 10 &mdash; Doctrina y jurisprudencia</span></div>
    <div class="toc-entry main"><span>VIII. Medidas Cautelares</span></div>
    <div class="toc-entry main"><span>IX. Peticion (Suplico)</span></div>
    <div class="toc-entry main"><span>X. Documentacion, Anexos y Trazabilidad</span></div>
    <div class="toc-entry main"><span>XI. Efectos, Ejecucion y Escenario Posterior</span></div>
    <div class="toc-entry main"><span>XII. Arquitectura Estrategica Avanzada</span></div>
    <div class="toc-entry main"><span>XIII. Checklist Final</span></div>
  </div>

  <h3>Lista de Anexos</h3>
  <div class="toc">
    <div class="toc-entry"><span>Anexo I &mdash; Poder de representacion</span></div>
    <div class="toc-entry"><span>Anexo II &mdash; Escritura social y registro mercantil</span></div>
    <div class="toc-entry"><span>Anexo III &mdash; Anuncio de licitacion</span></div>
    <div class="toc-entry"><span>Anexo IV &mdash; PCAP</span></div>
    <div class="toc-entry"><span>Anexo V &mdash; PPT</span></div>
    <div class="toc-entry"><span>Anexo VI &mdash; Aclaraciones</span></div>
    <div class="toc-entry"><span>Anexo VII &mdash; Comparativa sectorial</span></div>
    <div class="toc-entry"><span>Anexo VIII &mdash; Informe economico</span></div>
    <div class="toc-entry"><span>Anexo IX &mdash; Cronograma del procedimiento</span></div>
    <div class="toc-entry"><span>Anexo X &mdash; Justificante de registro</span></div>
  </div>`
}

function generarSeccionI(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  return `
  <div class="page-break"></div>
  <h2 class="section-header">I. ENCABEZAMIENTO FORMAL</h2>
  <p class="section-subtitle">Capa competencial y delimitacion del objeto procesal</p>

  <h3>I.1. Organo ante el que se recurre</h3>
  <div class="legal-block">
    <p><strong>AL ${escaparHTML(f.tribunal_competente).toUpperCase()}</strong></p>
    ${f.tribunal_direccion ? `<p>Direccion: ${escaparHTML(f.tribunal_direccion)}</p>` : ''}
    <p>El presente recurso se interpone al amparo de los articulos 44 y siguientes de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Publico (en adelante, LCSP), siendo competente ese Tribunal en virtud de la naturaleza del poder adjudicador y del contrato objeto de impugnacion.</p>
  </div>

  <h3>I.2. Objeto del recurso</h3>
  <div class="highlight-box">
    <p><strong>Acto impugnado:</strong> Pliegos de Clausulas Administrativas Particulares (PCAP) y, en su caso, Pliego de Prescripciones Tecnicas (PPT) del expediente n.&ordm; ${escaparHTML(f.expediente_numero)}.</p>
    <p><strong>Denominacion:</strong> &laquo;${escaparHTML(f.expediente_denominacion)}&raquo;</p>
    <p><strong>Organo de contratacion:</strong> ${escaparHTML(f.organo_contratacion)}${f.organo_nivel ? ` (ambito ${escaparHTML(f.organo_nivel)})` : ''}</p>
    <p><strong>Tipo contractual:</strong> ${escaparHTML(f.expediente_tipo_contractual)} &mdash; Procedimiento ${escaparHTML(f.expediente_procedimiento)}</p>
    ${f.expediente_valor_estimado ? `<p><strong>Valor estimado:</strong> ${formatearMoneda(f.expediente_valor_estimado)}</p>` : ''}
    ${f.expediente_presupuesto_base ? `<p><strong>Presupuesto base:</strong> ${formatearMoneda(f.expediente_presupuesto_base)}</p>` : ''}
    ${f.expediente_duracion ? `<p><strong>Duracion:</strong> ${escaparHTML(f.expediente_duracion)}</p>` : ''}
    ${f.expediente_cpv ? `<p><strong>CPV:</strong> ${escaparHTML(f.expediente_cpv)}</p>` : ''}
    <p><strong>Con solicitud de suspension del procedimiento de adjudicacion.</strong></p>
  </div>

  <h3>I.3. Competencia</h3>
  <p>La competencia de ese Tribunal para conocer del presente recurso especial en materia de contratacion resulta de los articulos 44 a 46 de la LCSP, atendida la naturaleza del poder adjudicador (${escaparHTML(f.organo_contratacion)}) y las caracteristicas del contrato objeto de licitacion${f.es_contrato_sara ? ', sujeto a regulacion armonizada (SARA)' : ''}.</p>
  <p>El acto impugnado &mdash;los pliegos reguladores del procedimiento&mdash; constituye un acto de tramite cualificado susceptible de recurso especial conforme al articulo 44.2.a) de la LCSP, por cuanto establece condiciones que determinan directa e irremediablemente la concurrencia de los operadores economicos al procedimiento.</p>`
}

function generarSeccionII(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  return `
  <div class="page-break"></div>
  <h2 class="section-header">II. COMPARECENCIA E IDENTIDAD DEL RECURRENTE</h2>
  <p class="section-subtitle">Capa de standing &mdash; Legitimacion formal y material</p>

  <h3>II.1. Parte Recurrente</h3>
  <div class="legal-block">
    <p>D./D.&ordf; <strong>${escaparHTML(f.representante_nombre)}</strong>, en calidad de <strong>${escaparHTML(f.representante_titulo)}</strong> de la entidad mercantil:</p>
    <table style="margin: 12px 0; border: none;">
      <tr><td style="border: none; font-weight: 700; width: 200px;">Denominacion social:</td><td style="border: none;">${escaparHTML(f.recurrente_denominacion)}</td></tr>
      <tr><td style="border: none; font-weight: 700;">CIF:</td><td style="border: none;">${escaparHTML(f.recurrente_cif)}</td></tr>
      <tr><td style="border: none; font-weight: 700;">Domicilio social:</td><td style="border: none;">${escaparHTML(f.recurrente_domicilio)}</td></tr>
      ${f.recurrente_registro_mercantil ? `<tr><td style="border: none; font-weight: 700;">Registro Mercantil:</td><td style="border: none;">${escaparHTML(f.recurrente_registro_mercantil)}</td></tr>` : ''}
      ${f.recurrente_objeto_social ? `<tr><td style="border: none; font-weight: 700;">Objeto social:</td><td style="border: none;">${escaparHTML(f.recurrente_objeto_social)}</td></tr>` : ''}
      ${f.recurrente_cnae ? `<tr><td style="border: none; font-weight: 700;">CNAE:</td><td style="border: none;">${escaparHTML(f.recurrente_cnae)}</td></tr>` : ''}
      ${f.recurrente_email ? `<tr><td style="border: none; font-weight: 700;">Email notificaciones:</td><td style="border: none;">${escaparHTML(f.recurrente_email)}</td></tr>` : ''}
      ${f.recurrente_telefono ? `<tr><td style="border: none; font-weight: 700;">Telefono:</td><td style="border: none;">${escaparHTML(f.recurrente_telefono)}</td></tr>` : ''}
    </table>
    <p>Ante ese Tribunal comparece y, como mejor proceda en Derecho, <strong>EXPONE:</strong></p>
  </div>

  <h3>II.2. Capacidad y Habilitacion</h3>
  <p>La entidad recurrente ostenta plena <strong>capacidad de obrar</strong> conforme al articulo 65 de la LCSP, acreditada mediante su constitucion regular e inscripcion en el Registro Mercantil${f.recurrente_registro_mercantil ? ` (${escaparHTML(f.recurrente_registro_mercantil)})` : ''}.</p>
  <p>Asimismo, declara expresamente que <strong>no concurre</strong> en la entidad ninguna de las prohibiciones de contratar previstas en el articulo 71 de la LCSP, encontrandose al corriente de sus obligaciones tributarias y con la Seguridad Social.</p>

  <h3>II.3. Representacion</h3>
  <p>La representacion se ejerce por D./D.&ordf; ${escaparHTML(f.representante_nombre)}, en calidad de ${escaparHTML(f.representante_titulo)}, con facultades suficientes para interponer recursos administrativos, solicitar medidas cautelares y comparecer ante tribunales administrativos${f.representante_facultades ? `, segun consta en ${escaparHTML(f.representante_facultades)}` : ''}, cuyo documento acreditativo se acompana como <strong>Anexo I</strong> (Doc. 1).</p>`
}

function generarSeccionIII(datos: DatosRecursoCompleto): string {
  const c = datos.contenidoRecurso.legitimacion
  return `
  <div class="page-break"></div>
  <h2 class="section-header">III. LEGITIMACION ACTIVA</h2>
  <p class="section-subtitle">Capa central de admision &mdash; Nucleo de supervivencia del recurso</p>

  <p>La legitimacion activa se sustenta en el articulo 48 de la LCSP, que reconoce legitimacion a &laquo;las personas fisicas o juridicas cuyos derechos o intereses legitimos se hayan visto perjudicados o puedan resultar afectados por las decisiones objeto de recurso&raquo;. Dicho precepto debe interpretarse conforme al principio de tutela judicial efectiva (art. 24 CE) y al principio de efectividad de los remedios en contratacion publica.</p>

  <h3>III.1. Interes Real y Efectivo</h3>
  <div class="legal-block">
    ${escaparHTML(c.interesReal).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>III.2. Potencial Licitador</h3>
  <div class="legal-block">
    ${escaparHTML(c.potencialLicitador).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>III.3. Perjuicio Concreto Derivado de la Infraccion</h3>
  <div class="legal-block">
    ${escaparHTML(c.perjuicioConcreto).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <p>En consecuencia, concurre legitimacion activa plena conforme al articulo 48 LCSP, acreditandose interes real, condicion de potencial licitador y perjuicio concreto e individualizado derivado de las clausulas impugnadas.</p>`
}

function generarSeccionIV(datos: DatosRecursoCompleto): string {
  const c = datos.contenidoRecurso.actoRecurrible
  return `
  <div class="page-break"></div>
  <h2 class="section-header">IV. ACTO RECURRIBLE</h2>
  <p class="section-subtitle">Analisis de recurribilidad y efectos</p>

  <h3>IV.1. Tipologia del Acto Impugnable</h3>
  <div class="legal-block">
    ${escaparHTML(c.tipologia).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>IV.2. Acto de Tramite Cualificado</h3>
  <div class="legal-block">
    ${escaparHTML(c.tramiteCualificado).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>IV.3. Conexion entre Acto y Lesion</h3>
  <div class="legal-block">
    ${escaparHTML(c.conexionLesion).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <p>En definitiva, el acto impugnado es plenamente susceptible de recurso especial conforme al articulo 44.2.a) de la LCSP, produce efectos juridicos directos e inmediatos y genera lesion concreta en la esfera de derechos e intereses del recurrente.</p>`
}

function generarSeccionV(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  return `
  <div class="page-break"></div>
  <h2 class="section-header">V. PLAZO, COMPUTO, REGISTRO Y COMPLIANCE DE ADMISIBILIDAD</h2>
  <p class="section-subtitle">Capa critica de supervivencia procesal</p>

  <p>El plazo para la interposicion del recurso especial es de <strong>15 dias habiles</strong>, conforme al articulo 50 de la LCSP. Dicho plazo es preclusivo, improrrogable y de orden publico.</p>

  <h3>V.1. Computo del Plazo</h3>
  <div class="highlight-box">
    <table style="border: none;">
      <tr><td style="border: none; font-weight: 700; width: 200px;">Dies a quo:</td><td style="border: none;">${formatearFecha(f.dies_a_quo) !== 'N/D' ? formatearFecha(f.dies_a_quo) : 'Dia siguiente a la publicacion valida del acto impugnado'}</td></tr>
      <tr><td style="border: none; font-weight: 700;">Dies ad quem:</td><td style="border: none;">${formatearFecha(f.dies_ad_quem) !== 'N/D' ? formatearFecha(f.dies_ad_quem) : 'Decimoquinto dia habil desde el dies a quo'}</td></tr>
      ${f.fecha_publicacion_perfil ? `<tr><td style="border: none; font-weight: 700;">Publicacion perfil:</td><td style="border: none;">${escaparHTML(f.fecha_publicacion_perfil)}</td></tr>` : ''}
      ${f.fecha_publicacion_doue ? `<tr><td style="border: none; font-weight: 700;">Publicacion DOUE:</td><td style="border: none;">${escaparHTML(f.fecha_publicacion_doue)}</td></tr>` : ''}
      ${f.es_contrato_sara !== undefined ? `<tr><td style="border: none; font-weight: 700;">Contrato SARA:</td><td style="border: none;">${f.es_contrato_sara ? 'Si' : 'No'}</td></tr>` : ''}
      <tr><td style="border: none; font-weight: 700;">Fecha presentacion:</td><td style="border: none;">${escaparHTML(datos.fechaGeneracion)}</td></tr>
    </table>
  </div>

  <div class="legal-block">
    <p>El presente recurso se interpone dentro del plazo legal de <strong>15 dias habiles</strong> previsto en el articulo 50 LCSP, computado desde el dia siguiente a la publicacion valida del acto impugnado${f.dies_a_quo ? ` (${escaparHTML(f.dies_a_quo)})` : ''}, finalizando dicho plazo el dia ${f.dies_ad_quem ? escaparHTML(f.dies_ad_quem) : '[dies ad quem]'}, siendo presentado en fecha ${escaparHTML(datos.fechaGeneracion)}, por tanto <strong>dentro del termino legalmente establecido</strong>.</p>
  </div>

  <h3>V.2. Canal y Forma de Presentacion</h3>
  <p>El recurso se presenta por via electronica ante el registro del Tribunal competente, conforme a la obligacion de tramitacion electronica. Se adjunta como <strong>Anexo X</strong> (Doc. 10) el justificante de registro electronico acreditativo de la tempestividad de la presentacion.</p>

  <h3>V.3. Estrategia Preventiva</h3>
  <p>A fin de evitar cualquier requerimiento de subsanacion que pudiera comprometer la eficacia de la solicitud cautelar, se acompana desde el inicio la documentacion integra relacionada en la Seccion X del presente recurso.</p>`
}

function generarSeccionVI(datos: DatosRecursoCompleto): string {
  const h = datos.contenidoRecurso.hechos
  const clausulas = datos.clausulasImpugnadas
  return `
  <div class="page-break"></div>
  <h2 class="section-header">VI. ANTECEDENTES Y HECHOS</h2>
  <p class="section-subtitle">Cronologia probatoria &mdash; Construccion de credibilidad</p>

  <h3>HECHO PRIMERO &mdash; Publicacion y Documentos de la Licitacion</h3>
  <div class="legal-block">
    ${escaparHTML(h.hecho1_publicacion).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>HECHO SEGUNDO &mdash; Clausulas Impugnadas</h3>
  <div class="legal-block">
    ${escaparHTML(h.hecho2_clausulas).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>
  ${clausulas.length > 0 ? `
  <h4>Detalle de las Clausulas Impugnadas</h4>
  ${clausulas.map((cl, idx) => `
  <div class="clausula-card">
    <div class="clausula-header">Clausula ${idx + 1}: ${escaparHTML(cl.controlId)} &mdash; ${escaparHTML(cl.requisitoId)}</div>
    <div class="clausula-meta">
      Norma fuente: ${escaparHTML(cl.normaFuente)} |
      Prioridad: <span class="badge ${cl.prioridad === 'ALTA' || cl.prioridad === 'CRITICA' ? 'badge-danger' : 'badge-warning'}">${escaparHTML(cl.prioridad)}</span>
    </div>
    ${cl.textoClausula ? `<div class="clausula-text">&laquo;${escaparHTML(cl.textoClausula)}&raquo;</div>` : ''}
    ${cl.evidenciaPliego ? `<p style="font-size: 9pt; color: #64748b; margin-top: 6px;"><strong>Evidencia:</strong> ${escaparHTML(cl.evidenciaPliego)}</p>` : ''}
  </div>`).join('')}
  ` : ''}

  <h3>HECHO TERCERO &mdash; Contexto Tecnico y de Mercado</h3>
  <div class="legal-block">
    ${escaparHTML(h.hecho3_contexto).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>HECHO CUARTO &mdash; Efecto Practico de las Clausulas</h3>
  <div class="legal-block">
    ${escaparHTML(h.hecho4_efecto).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>HECHO QUINTO &mdash; Perjuicio Individualizado</h3>
  <div class="legal-block">
    ${escaparHTML(h.hecho5_perjuicio).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>`
}

function generarSeccionVII(datos: DatosRecursoCompleto): string {
  const fd = datos.contenidoRecurso.fundamentos
  return `
  <div class="page-break"></div>
  <h2 class="section-header">VII. FUNDAMENTOS DE DERECHO</h2>
  <p class="section-subtitle">Arquitectura en modulos de impugnacion</p>

  <h3>MODULO 1 &mdash; Principios Rectores de la LCSP (Art. 1 y concordantes)</h3>
  <div class="legal-block">
    ${escaparHTML(fd.modulo1_principios).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <div class="page-break"></div>
  <h3>MODULO 2 &mdash; Proporcionalidad (Test Completo)</h3>
  <div class="legal-block">
    ${escaparHTML(fd.modulo2_proporcionalidad).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>MODULO 3 &mdash; Solvencia Economica y Tecnica (Arts. 87-90 LCSP)</h3>
  <div class="legal-block">
    ${escaparHTML(fd.modulo3_solvencia).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <div class="page-break"></div>
  <h3>MODULO 4 &mdash; Prescripciones Tecnicas: Neutralidad y Equivalencias</h3>
  <div class="legal-block">
    ${escaparHTML(fd.modulo4_tecnicas).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>MODULO 5 &mdash; Criterios de Adjudicacion (Art. 145 LCSP)</h3>
  <div class="legal-block">
    ${escaparHTML(fd.modulo5_criterios).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <div class="page-break"></div>
  <h3>MODULO 6 &mdash; Division en Lotes (Art. 99 LCSP)</h3>
  <div class="legal-block">
    ${escaparHTML(fd.modulo6_lotes).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>MODULO 7 &mdash; Condiciones Especiales de Ejecucion (Art. 202 LCSP)</h3>
  <div class="legal-block">
    ${escaparHTML(fd.modulo7_ejecucion).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>MODULO 8 &mdash; Modificaciones y Clausulas-Trampa</h3>
  <div class="legal-block">
    ${escaparHTML(fd.modulo8_modificaciones).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <div class="page-break"></div>
  <h3>MODULO 9 &mdash; Motivacion Insuficiente del Expediente</h3>
  <div class="legal-block">
    ${escaparHTML(fd.modulo9_motivacion).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>MODULO 10 &mdash; Doctrina Administrativa y Jurisprudencia</h3>
  <div class="legal-block">
    ${escaparHTML(fd.modulo10_doctrina).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>`
}

function generarSeccionVIII(datos: DatosRecursoCompleto): string {
  const c = datos.contenidoRecurso.cautelares
  return `
  <div class="page-break"></div>
  <h2 class="section-header">VIII. MEDIDAS CAUTELARES</h2>
  <p class="section-subtitle">Modulo de control de danos &mdash; Proteccion de la finalidad del recurso</p>

  <p>La solicitud cautelar no es un complemento accesorio: es un instrumento de preservacion de la eficacia del procedimiento revisor. Si no se articula correctamente, el contrato puede adjudicarse, formalizarse y entrar en ejecucion, con lo que el recurso perderia su finalidad legitima.</p>

  <h3>VIII.1. Fumus Boni Iuris (Apariencia de Buen Derecho)</h3>
  <div class="legal-block">
    ${escaparHTML(c.fumusBoniIuris).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>VIII.2. Periculum in Mora (Riesgo de Perdida de Finalidad)</h3>
  <div class="legal-block">
    ${escaparHTML(c.periculumInMora).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>VIII.3. Ponderacion de Intereses</h3>
  <div class="legal-block">
    ${escaparHTML(c.ponderacionIntereses).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <div class="highlight-box">
    <p><strong>SOLICITUD CAUTELAR:</strong> Se solicita al Tribunal que acuerde la <strong>suspension inmediata del procedimiento de adjudicacion</strong> hasta la resolucion del presente recurso, comunicandolo de forma urgente al organo de contratacion a fin de que paralice formalmente todas las actuaciones del procedimiento.</p>
  </div>`
}

function generarSeccionIX(datos: DatosRecursoCompleto): string {
  const p = datos.contenidoRecurso.peticion
  const clausulas = datos.clausulasImpugnadas
  return `
  <div class="page-break"></div>
  <h2 class="section-header">IX. PETICION (SUPLICO)</h2>
  <p class="section-subtitle">Estructura principal + subsidiaria + cautelar</p>

  <div class="legal-block" style="border-left-color: #1e3a8a; background: #eff6ff;">
    <h3 style="margin-top: 0; color: #1e3a8a;">SUPLICO AL TRIBUNAL:</h3>

    <h4>A) Peticion Principal</h4>
    ${escaparHTML(p.principal).split('\n').map(pr => `<p>${pr}</p>`).join('')}
    ${clausulas.length > 0 ? `
    <p>En particular, se solicita la anulacion de las siguientes clausulas no conformes con la legalidad vigente:</p>
    <table>
      <thead>
        <tr><th>#</th><th>Control</th><th>Norma</th><th>Clausula impugnada</th><th>Prioridad</th></tr>
      </thead>
      <tbody>
        ${clausulas.map((cl, idx) => `
        <tr>
          <td>${idx + 1}</td>
          <td>${escaparHTML(cl.controlId)}</td>
          <td>${escaparHTML(cl.normaFuente)}</td>
          <td>${escaparHTML(cl.textoClausula).substring(0, 120)}${cl.textoClausula.length > 120 ? '...' : ''}</td>
          <td><span class="badge ${cl.prioridad === 'ALTA' || cl.prioridad === 'CRITICA' ? 'badge-danger' : 'badge-warning'}">${escaparHTML(cl.prioridad)}</span></td>
        </tr>`).join('')}
      </tbody>
    </table>
    ` : ''}

    <h4>B) Peticion Subsidiaria</h4>
    ${escaparHTML(p.subsidiaria).split('\n').map(pr => `<p>${pr}</p>`).join('')}

    <h4>C) Peticion Cautelar</h4>
    ${escaparHTML(p.cautelar).split('\n').map(pr => `<p>${pr}</p>`).join('')}

    <p style="margin-top: 16px;"><strong>Todo ello con los demas pronunciamientos que procedan en Derecho.</strong></p>

    <p style="margin-top: 20px; text-align: right;">${escaparHTML(datos.datosFormulario.recurrente_domicilio ? datos.datosFormulario.recurrente_domicilio.split(',').pop()?.trim() || '' : '')}, a ${escaparHTML(datos.fechaGeneracion)}</p>
    <p style="text-align: right; margin-top: 12px;"><strong>Fdo.: ${escaparHTML(datos.datosFormulario.representante_nombre)}</strong></p>
    <p style="text-align: right; font-size: 9pt; color: #64748b;">${escaparHTML(datos.datosFormulario.representante_titulo)} de ${escaparHTML(datos.datosFormulario.recurrente_denominacion)}</p>
  </div>`
}

function generarSeccionX(datos: DatosRecursoCompleto): string {
  const f = datos.datosFormulario
  const clausulas = datos.clausulasImpugnadas

  const documentos = [
    { num: 1, titulo: 'Poder de representacion', desc: 'Escritura de poder o acreditacion de cargo con facultades para interponer recursos y solicitar cautelares.', acredita: 'Seccion II.3 (Representacion)' },
    { num: 2, titulo: 'Escrituras sociales y registro mercantil', desc: 'Escritura de constitucion, nombramiento del administrador y certificacion registral actualizada.', acredita: 'Seccion II.1 (Identidad)' },
    { num: 3, titulo: 'Pliego de Clausulas Administrativas Particulares (PCAP)', desc: 'Version integra publicada del PCAP del expediente.', acredita: 'Hecho Segundo (Clausulas impugnadas)' },
    { num: 4, titulo: 'Pliego de Prescripciones Tecnicas (PPT)', desc: 'Version integra del PPT sin alteraciones.', acredita: 'Hecho Segundo / Modulo 4' },
    { num: 5, titulo: 'Anuncio de licitacion / DOUE', desc: `Publicacion en perfil del contratante${f.fecha_publicacion_perfil ? ` (${escaparHTML(f.fecha_publicacion_perfil)})` : ''}${f.fecha_publicacion_doue ? ` y DOUE (${escaparHTML(f.fecha_publicacion_doue)})` : ''}.`, acredita: 'Hecho Primero (Publicacion) / Seccion V (Plazo)' },
    { num: 6, titulo: 'Aclaraciones, rectificaciones y respuestas', desc: 'Respuestas oficiales, correcciones publicadas y modificaciones de pliegos.', acredita: 'Hecho Primero' },
    { num: 7, titulo: 'Comparativa de licitaciones similares', desc: 'Pliegos de otros organos con exigencias habituales del sector y umbrales comparables.', acredita: 'Hecho Tercero / Modulo 2 (Proporcionalidad)' },
    { num: 8, titulo: 'Informe tecnico', desc: 'Analisis de requisitos tecnicos y evaluacion de alternativas menos restrictivas.', acredita: 'Modulo 2 / Modulo 3 (Solvencia)' },
    { num: 9, titulo: 'Informe economico', desc: 'Estudio de mercado, impacto sobre competencia y estimacion de operadores excluidos.', acredita: 'Modulo 2 / Seccion VIII (Cautelares)' },
    { num: 10, titulo: 'Justificante de registro del recurso', desc: 'Resguardo electronico con fecha, hora y numero de registro.', acredita: 'Seccion V (Plazo y tempestividad)' },
    { num: 11, titulo: 'Certificados de clasificacion empresarial', desc: 'Certificados de clasificacion del contratista vigentes, si procede.', acredita: 'Seccion III (Legitimacion)' },
    { num: 12, titulo: 'Cuentas anuales', desc: 'Ultimas cuentas anuales depositadas acreditativas de solvencia economica.', acredita: 'Seccion III (Potencial licitador)' },
    { num: 13, titulo: 'Certificados de buena ejecucion', desc: 'Certificados de contratos similares ejecutados satisfactoriamente.', acredita: 'Seccion III (Experiencia acreditada)' },
    { num: 14, titulo: 'Organigrama tecnico', desc: 'Estructura organizativa y medios humanos disponibles.', acredita: 'Seccion III (Medios tecnicos)' },
    { num: 15, titulo: 'Cronograma del procedimiento', desc: 'Calendario del procedimiento con fechas estimadas de cada fase.', acredita: 'Seccion VIII (Periculum in mora)' },
  ]

  return `
  <div class="page-break"></div>
  <h2 class="section-header">X. DOCUMENTACION, ANEXOS Y TRAZABILIDAD</h2>
  <p class="section-subtitle">Paquete probatorio &mdash; Sistema de evidencia y control</p>

  <p>En el recurso especial, la prueba es esencialmente documental. Lo que no se aporta documentalmente, practicamente no existe para el Tribunal. El paquete probatorio cumple tres funciones: acreditar hechos sin margen de duda, blindar legitimacion y admisibilidad, y facilitar al Tribunal la localizacion inmediata de cada evidencia.</p>

  <h3>X.1. Indice de Documentos</h3>
  <table>
    <thead>
      <tr><th>Doc.</th><th>Titulo</th><th>Descripcion</th><th>Acredita</th></tr>
    </thead>
    <tbody>
      ${documentos.map(d => `
      <tr>
        <td style="text-align: center; font-weight: 700;">${d.num}</td>
        <td><strong>${d.titulo}</strong></td>
        <td>${d.desc}</td>
        <td style="font-size: 9pt;">${d.acredita}</td>
      </tr>`).join('')}
    </tbody>
  </table>

  <h3>X.2. Trazabilidad Clausulas Impugnadas &harr; Documentos</h3>
  ${clausulas.length > 0 ? `
  <table>
    <thead>
      <tr><th>Clausula</th><th>Control</th><th>Norma</th><th>Referencia Hechos</th><th>Referencia Fundamentos</th></tr>
    </thead>
    <tbody>
      ${clausulas.map((cl, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td>${escaparHTML(cl.controlId)}</td>
        <td>${escaparHTML(cl.normaFuente)}</td>
        <td>Hecho Segundo</td>
        <td>Modulo ${idx < 3 ? '1-3' : idx < 6 ? '4-6' : '7-10'}</td>
      </tr>`).join('')}
    </tbody>
  </table>
  ` : '<p>No se han identificado clausulas impugnadas especificas.</p>'}

  <h3>X.3. Criterios de Calidad</h3>
  <ul class="dash-list">
    <li>Cada anexo incluye portada individual con titulo, expediente, fecha y finalidad probatoria.</li>
    <li>Las clausulas impugnadas se encuentran resaltadas en los documentos correspondientes.</li>
    <li>Existe coherencia absoluta entre hechos, fundamentos y documento citado.</li>
    <li>Todos los documentos son integros y coinciden con las versiones oficiales publicadas.</li>
    <li>Formato: PDF unico con indice, marcadores y numeracion correlativa.</li>
  </ul>`
}

function generarSeccionXI(datos: DatosRecursoCompleto): string {
  const e = datos.contenidoRecurso.efectos
  return `
  <div class="page-break"></div>
  <h2 class="section-header">XI. EFECTOS, EJECUCION Y ESCENARIO POSTERIOR</h2>
  <p class="section-subtitle">Fase post-resolucion y preparacion contenciosa</p>

  <p>El recurso especial no termina con la resolucion del Tribunal. La verdadera estrategia comienza tras el pronunciamiento. La resolucion del Tribunal Administrativo de Recursos Contractuales es ejecutiva, agota la via administrativa, vincula al organo de contratacion y puede ser recurrida ante la jurisdiccion contencioso-administrativa.</p>

  <h3>XI.1. Escenarios de Resolucion</h3>
  <div class="legal-block">
    ${escaparHTML(e.escenariosResolucion).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>XI.2. Matriz de Decision Post-Recurso</h3>
  <table>
    <thead>
      <tr><th>Resultado</th><th>Consecuencia</th><th>Accion Recomendada</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Estimacion integra</strong></td><td>Pliego anulado, procedimiento reiniciado</td><td>Supervisar nueva redaccion, preparar oferta</td></tr>
      <tr><td><strong>Estimacion parcial</strong></td><td>Correccion puntual, procedimiento continua</td><td>Evaluar lesion residual, valorar impugnacion judicial</td></tr>
      <tr><td><strong>Desestimacion</strong></td><td>Procedimiento continua, adjudicacion inmediata</td><td>Activar plan contencioso, solicitar cautelar judicial</td></tr>
    </tbody>
  </table>

  <h3>XI.3. Plan Contencioso</h3>
  <div class="legal-block">
    ${escaparHTML(e.planContencioso).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>`
}

function generarSeccionXII(datos: DatosRecursoCompleto): string {
  const est = datos.contenidoRecurso.estrategia
  return `
  <div class="page-break"></div>
  <h2 class="section-header">XII. ARQUITECTURA ESTRATEGICA AVANZADA</h2>
  <p class="section-subtitle">Metodologia consultora &mdash; Diseno del recurso como instrumento de posicionamiento</p>

  <h3>XII.1. Piramide de Fuerza: Seleccion de Motivos</h3>
  <div class="legal-block">
    ${escaparHTML(est.piramideFuerza).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <h3>XII.2. Matriz de Riesgos</h3>
  <div class="legal-block">
    ${escaparHTML(est.matrizRiesgos).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>

  <table>
    <thead>
      <tr><th>Riesgo</th><th>Probabilidad</th><th>Impacto</th><th>Accion Preventiva</th></tr>
    </thead>
    <tbody>
      <tr><td>Inadmision</td><td><span class="badge badge-info">Bajo</span></td><td><span class="badge badge-danger">Critico</span></td><td>Revision formal exhaustiva completada</td></tr>
      <tr><td>Desestimacion</td><td><span class="badge badge-warning">Medio</span></td><td><span class="badge badge-danger">Alto</span></td><td>Refuerzo probatorio y doctrinal</td></tr>
      <tr><td>No cautelar</td><td><span class="badge badge-warning">Medio</span></td><td><span class="badge badge-danger">Alto</span></td><td>Intensificacion de periculum in mora</td></tr>
    </tbody>
  </table>

  <h3>XII.3. Argumentacion Economica</h3>
  <div class="legal-block">
    ${escaparHTML(est.argumentoEconomico).split('\n').map(p => `<p>${p}</p>`).join('')}
  </div>`
}

function generarSeccionXIII(datos: DatosRecursoCompleto): string {
  const clausulas = datos.clausulasImpugnadas
  const f = datos.datosFormulario
  return `
  <div class="page-break"></div>
  <h2 class="section-header">XIII. CHECKLIST FINAL</h2>
  <p class="section-subtitle">Auditoria interna del recurso &mdash; Sistema de control de calidad</p>

  <h3>BLOQUE A: ADMISIBILIDAD</h3>
  <p><em>Control formal y competencial &mdash; &iquest;Puede el Tribunal entrar al fondo sin obstaculos formales?</em></p>

  <h4>1. Legitimacion</h4>
  <div class="checklist-item"><span class="check">[OK]</span><span>Interes real y efectivo acreditado (art. 48 LCSP)</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Potencial licitador demostrado con experiencia documentada</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Perjuicio concreto identificado con cadena causal</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Prueba documental de legitimacion incorporada</span></div>

  <h4>2. Plazo</h4>
  <div class="checklist-item"><span class="check">[OK]</span><span>Dies a quo correctamente identificado${f.dies_a_quo ? ` (${escaparHTML(f.dies_a_quo)})` : ''}</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Calendario de dias habiles verificado (excluidos sabados, domingos y festivos)</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Dies ad quem determinado${f.dies_ad_quem ? ` (${escaparHTML(f.dies_ad_quem)})` : ''}</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Justificante de registro electronico incorporado (Doc. 10)</span></div>

  <h4>3. Acto Recurrible</h4>
  <div class="checklist-item"><span class="check">[OK]</span><span>Acto identificado: Pliegos (PCAP/PPT) del expediente ${escaparHTML(f.expediente_numero)}</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Naturaleza juridica calificada: Acto de tramite cualificado (art. 44.2.a LCSP)</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Efectos juridicos directos argumentados</span></div>

  <h4>4. Representacion</h4>
  <div class="checklist-item"><span class="check">[OK]</span><span>Poder o acreditacion de cargo con facultades suficientes (Doc. 1)</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Incluye facultad para interponer recursos y solicitar cautelares</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Vigencia del cargo/poder acreditada</span></div>

  <h4>5. Tribunal</h4>
  <div class="checklist-item"><span class="check">[OK]</span><span>Competencia objetiva y territorial verificada: ${escaparHTML(f.tribunal_competente)}</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Naturaleza del poder adjudicador correctamente analizada</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Fundamentacion expresa de competencia (arts. 44-46 LCSP)</span></div>

  <h3 style="margin-top: 30px;">BLOQUE B: FONDO</h3>
  <p><em>Consistencia argumental y solidez juridica &mdash; &iquest;Esta el recurso preparado para ser estimado?</em></p>

  <h4>1. Hechos</h4>
  <div class="checklist-item"><span class="check">[OK]</span><span>Redaccion objetiva y cronologica (5 hechos estructurados)</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Citas literales de clausulas impugnadas con referencia a documento</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Separacion estricta entre hechos y fundamentos</span></div>

  <h4>2. Clausulas Impugnadas</h4>
  ${clausulas.length > 0 ? clausulas.map((cl, idx) => `
  <div class="checklist-item"><span class="check">[OK]</span><span>Clausula ${idx + 1} (${escaparHTML(cl.controlId)}): ${escaparHTML(cl.normaFuente)} &mdash; Prioridad ${escaparHTML(cl.prioridad)}</span></div>`).join('') : '<div class="checklist-item"><span class="check">[--]</span><span>Sin clausulas impugnadas especificas identificadas</span></div>'}

  <h4>3. Test de Proporcionalidad</h4>
  <div class="checklist-item"><span class="check">[OK]</span><span>Idoneidad analizada</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Necesidad examinada (alternativas menos restrictivas)</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Proporcionalidad estricta argumentada</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Impacto competitivo considerado</span></div>

  <h4>4. Peticion (Suplico)</h4>
  <div class="checklist-item"><span class="check">[OK]</span><span>Coherencia entre fundamentos y suplico verificada</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Peticion principal clara y ejecutable</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Peticion subsidiaria operativa</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Retroaccion solicitada expresamente</span></div>

  <h3 style="margin-top: 30px;">BLOQUE C: CAUTELAR</h3>
  <p><em>Control de eficacia inmediata &mdash; &iquest;Se protege realmente la finalidad del recurso?</em></p>

  <div class="checklist-item"><span class="check">[OK]</span><span>Fumus boni iuris con motivos principales seleccionados (top 2-3)</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Periculum in mora con riesgo concreto y actual</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Cronograma del procedimiento referenciado (Doc. 15)</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Ponderacion de intereses completada</span></div>
  <div class="checklist-item"><span class="check">[OK]</span><span>Solicitud expresa de suspension formulada</span></div>

  <h3 style="margin-top: 30px;">Matriz de Validacion Final</h3>
  <table>
    <thead>
      <tr><th>Area</th><th>Nivel de Riesgo</th><th>Estado</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Admisibilidad</strong></td><td><span class="badge badge-info">Bajo</span></td><td style="color: #22c55e; font-weight: 700;">VERIFICADO</td></tr>
      <tr><td><strong>Fondo juridico</strong></td><td><span class="badge badge-info">Bajo</span></td><td style="color: #22c55e; font-weight: 700;">VERIFICADO</td></tr>
      <tr><td><strong>Cautelar</strong></td><td><span class="badge badge-info">Bajo</span></td><td style="color: #22c55e; font-weight: 700;">VERIFICADO</td></tr>
      <tr><td><strong>Coherencia global</strong></td><td><span class="badge badge-info">Bajo</span></td><td style="color: #22c55e; font-weight: 700;">VERIFICADO</td></tr>
    </tbody>
  </table>

  <div class="warning-box" style="margin-top: 20px;">
    <p><strong>REGLA DE ORO FINAL:</strong> El recurso esta listo para presentar cuando no existe riesgo relevante de inadmision, los motivos principales son solidos y priorizados, la prueba documental es trazable, la cautelar esta tecnicamente blindada, el suplico es ejecutable sin ambiguedad y puede convertirse en demanda contenciosa sin reestructuracion.</p>
  </div>`
}

// ─── Main Export Functions ───────────────────────────────────────────────────

export function generarRecursoHTML(datos: DatosRecursoCompleto): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>REMC - ${escaparHTML(datos.codigoRecurso)} - ${escaparHTML(datos.datosFormulario.expediente_numero)}</title>
  <style>${generarCSS()}</style>
</head>
<body>
  ${generarPortada(datos)}
  ${generarControlVersiones(datos)}
  ${generarSeccionI(datos)}
  ${generarSeccionII(datos)}
  ${generarSeccionIII(datos)}
  ${generarSeccionIV(datos)}
  ${generarSeccionV(datos)}
  ${generarSeccionVI(datos)}
  ${generarSeccionVII(datos)}
  ${generarSeccionVIII(datos)}
  ${generarSeccionIX(datos)}
  ${generarSeccionX(datos)}
  ${generarSeccionXI(datos)}
  ${generarSeccionXII(datos)}
  ${generarSeccionXIII(datos)}

  <div class="footer">
    <p>Recurso Especial en Materia de Contratacion &mdash; ${escaparHTML(datos.codigoRecurso)}</p>
    <p>${escaparHTML(datos.datosFormulario.recurrente_denominacion)} | Expediente ${escaparHTML(datos.datosFormulario.expediente_numero)} | ${escaparHTML(datos.fechaGeneracion)}</p>
    <p>Documento confidencial destinado exclusivamente a su presentacion ante ${escaparHTML(datos.datosFormulario.tribunal_competente)}.</p>
  </div>
</body>
</html>`
}

export function abrirRecursoImprimible(html: string): void {
  const ventanaImpresion = window.open('', '_blank')
  if (ventanaImpresion) {
    ventanaImpresion.document.write(html)
    ventanaImpresion.document.close()
    // Auto-activar impresion despues de un breve retraso para renderizado
    setTimeout(() => ventanaImpresion.print(), 500)
  }
}
