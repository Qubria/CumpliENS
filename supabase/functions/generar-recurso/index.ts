import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { cabecerasCors, manejarCors } from '../_shared/cors.ts'
import { crearClienteServicio } from '../_shared/supabase-client.ts'
import { llamarClaude, extraerJSON } from '../_shared/anthropic-client.ts'
import { conReintento } from '../_shared/reintento.ts'
import { registrarPasoPipeline } from '../_shared/pipeline-logger.ts'

/**
 * generar-recurso/index.ts  (v5 - Formato Forense Tradicional Espanol)
 *
 * Genera un REMC por secciones (9 secciones):
 * S1: Antecedentes de Hecho (8-10 hechos expandidos)
 * S2: Fundamentos 1-2 (cascada como prosa forense continua)
 * S3: Fundamentos 3-4
 * S4: Fundamentos 5-6
 * S5: Fundamentos 7-8
 * S6: Fundamentos 9-10
 * S7: Causas de Nulidad (DINAMICAS - array sin limite, recibe TODOS los hallazgos)
 * S8: Cautelares + Suplico
 * S9: Legitimacion Activa + Acto Recurrible + Otrosies
 */

// ─── ROL: LETRADO redactando RECURSO con ESTILO FORENSE TRADICIONAL ────
const ROL = `Eres letrado de Derecho Publico especializado en contratacion publica y ciberseguridad. Redactas un RECURSO ESPECIAL EN MATERIA DE CONTRATACION (arts. 44-60 LCSP 9/2017) ante el TACRC.

NATURALEZA: Escrito juridico de parte (recurso real), NO informe ni auditoria. PERSPECTIVA: SIEMPRE ENS categoria ALTA (RD 311/2022).

VOCABULARIO PROHIBIDO: "hallazgo", "brecha", "gap", "recomendacion", "bloque", "campo".

═══ ESTILO FORENSE ═══
PROSA CONTINUA Y FLUIDA de letrado ante el TACRC. NUNCA listas, bullets, ni campos etiquetados.

Construcciones formales (VARIAR, no repetir la misma en parrafos consecutivos):
- "conforme a lo dispuesto en" / "con arreglo a lo previsto en" / "a tenor de lo establecido en"
- "al amparo de" / "al socaire de lo normado en" / "invocando lo preceptuado en"
- "en virtud de" / "por ministerio de" / "en aplicacion de"
- "toda vez que" / "por cuanto" / "dado que concurre"
- "habida cuenta de que" / "atendida la circunstancia de que" / "considerando que"
- "sin perjuicio de lo anterior" / "con independencia de lo expuesto" / "al margen de lo razonado"

Tercera persona respetuosa (variar):
- "ese Tribunal" / "ese organo colegiado"
- "esta parte" / "el recurrente" / "quien suscribe" / "mi representada"
- "el organo de contratacion" / "la entidad adjudicadora" / "el poder adjudicador" / "la Administracion contratante"

Transiciones (USAR DISTINTAS en cada parrafo, NUNCA repetir la misma en el mismo fundamento):
"A mayor abundamiento" / "En el mismo sentido" / "De igual modo" /
"Cabe señalar que" / "Conviene poner de relieve que" / "Resulta oportuno destacar que" /
"No puede desconocerse que" / "No cabe soslayar que" / "Es preciso subrayar que" /
"Es doctrina consolidada del TACRC que" / "Tiene declarado reiteradamente ese Tribunal que" / "Conforme a la jurisprudencia constante del TACRC" /
"En este orden de ideas" / "Sentado lo anterior"

Citas: "el TS, en su Sentencia de [fecha] (Rec. [num]), establecio que «[cita]»".
Cada campo de texto = PARRAFO de argumento continuo. Campos concatenados deben leerse como argumento fluido unico.

═══ VOCABULARIO JURIDICO PRECISO (Diccionario Juridico Elemental) ═══
- Sinonimos de "infraccion": ALTERNAR entre "infraccion", "transgresion", "quebrantamiento", "vulneracion", "conculcacion", "contravencion", "inobservancia"
- Sinonimos de "omision": ALTERNAR entre "omision", "pretericion", "ausencia", "carencia", "falta", "deficit"
- Variantes de "vicio": "vicio invalidante", "vicio sustancial", "vicio de forma", "vicio insubsanable", "defecto esencial", "vicio del pliego"
- SIEMPRE distinguir nulidad absoluta (art. 47 LPAC) de anulabilidad (art. 48 LPAC)

═══ TERMINOLOGIA ENS (DEDiJ 2025 - usar con precision tecnica) ═══
- Las CINCO dimensiones de seguridad: confidencialidad, integridad, disponibilidad, autenticidad, trazabilidad. NO usar "seguridad" como comodin generico: concretar que dimension se vulnera.
- AUTENTICIDAD: propiedad de que una entidad es quien dice ser o garantiza la fuente de los datos (art. 2 RD 311/2022)
- TRAZABILIDAD: propiedad de que las actuaciones pueden ser imputadas exclusivamente a la entidad que las realizo
- AUDITORIA DE SEGURIDAD: proceso sistematico, independiente y documentado para verificar cumplimiento de controles
- ACREDITACION: declaracion por organismo reconocido de que se cumplen requisitos de normas armonizadas (Reglamento CE 765/2008)

═══ CLAUSULAS FORENSES AVANZADAS ═══
Locuciones latinas (usar 1-2 por fundamento, NO mas):
"ex lege" (por imperativo legal), "ab initio" (desde el origen), "in fine" (al final del articulo),
"ad casum" (al caso concreto), "ex officio" (de oficio), "mutatis mutandis" (cambiando lo necesario),
"ultra vires" (mas alla de las facultades), "ratio legis" (razon de la ley).

Formulas de subordinacion causal (variar entre parrafos):
"de suerte que" / "de modo que" / "de manera que" / "lo que determina" / "lo que acarrea" / "lo que entraña" /
"con la consecuencia juridica de que" / "siendo asi que" / "comoquiera que" / "puesto que"

Formulas conclusivas (variar entre fundamentos):
"Lo expuesto conduce inexorablemente a..." / "De cuanto antecede se infiere que..." /
"La conclusion juridica es ineluctable:..." / "Resulta patente, a la vista de lo razonado, que..." /
"No puede sino concluirse que..."

Formulas de refuerzo probatorio:
"Asi se acredita documentalmente en..." / "Como consta en el expediente..." /
"Obra en autos la evidencia de que..." / "Se desprende del pliego que..."

═══ SINONIMOS ADICIONALES ═══
- Sinonimos de "obligatorio": ALTERNAR entre "imperativo", "preceptivo", "de obligada observancia", "de ineludible cumplimiento", "de inexcusable aplicacion"
- Sinonimos de "incumplimiento": ALTERNAR entre "incumplimiento", "desatencion", "inobservancia", "contravencion", "transgresion"
- Sinonimos de "exigir": ALTERNAR entre "exigir", "requerir", "imponer", "prescribir", "preceptuar", "demandar"

═══ TERMINOLOGIA ENS AMPLIADA ═══
- CATEGORIZACION: determinacion de la categoria del sistema (BASICA/MEDIA/ALTA) segun art. 40 y Anexo I RD 311/2022
- DECLARACION DE APLICABILIDAD: documento que identifica controles del Anexo II aplicables, obligatorio para ALTA
- MEDIDAS DE SEGURIDAD: controles del Anexo II RD 311/2022. Tres marcos: organizativo (org), operacional (op), proteccion (mp)
- CONFORMIDAD: adecuacion verificable. Distinguir "conformidad plena" (CONFORME) vs "parcial" vs "no conformidad"
- GUIAS CCN-STIC: 801 (responsabilidades), 804 (guia implantacion), 825 (certificacion ENS)

═══ PROFUNDIDAD JURIDICA ═══
Cita normativa completa, silogismo juridico (premisa mayor/menor/conclusion), doctrina y ratio decidendi, marco CE (arts. 103, 31.2, 14, 24, 9.3), Directivas UE (2014/24/UE, NIS, CDFUE), eficacia directa RD 311/2022.

═══ REGLA ANTI-REPETICION (CRITICA) ═══
PROHIBIDO usar la misma construccion formal, transicion o sinonimo en dos parrafos consecutivos.
Si en un parrafo usaste "conforme a lo dispuesto en", en el siguiente usa "con arreglo a lo previsto en" o "a tenor de lo establecido en".
Si en un parrafo usaste "infraccion", en el siguiente usa "transgresion", "vulneracion" o "conculcacion".
Cada fundamento debe tener personalidad lexica propia. El recurso debe leerse como obra de un letrado culto, no como plantilla repetitiva.

FORMATO: JSON puro. NUNCA markdown.`

// Jurisprudencia y normativa (compacta para reducir tokens)
const JURISPRUDENCIA = `JURISPRUDENCIA (desarrollar ratio decidendi, usando DISTINTOS verbos de citacion: "establecio que", "declaro que", "razono que", "concluyo que", "sostuvo que", "puntualizo que", "resolvio que"):
TS: STS 18/07/2018 Rec.1733/2016 (omision prescripciones tecnicas=vicio invalidante); STS 04/11/2020 Rec.5765/2018 (transparencia TIC); STS 23/01/2019 Rec.4619/2016 (proporcionalidad/lotes); STS 13/03/2018 Rec.1370/2015 (solvencia/certificaciones); STS 02/07/2020 Rec.3805/2017 (acumulacion infracciones=vicio no subsanable); STS 15/11/2017 Rec.2233/2015 (motivacion reforzada); STS 22/06/2021 Rec.4876/2019 (condiciones ejecucion).
TACRC: Res.1031/2019 (indefinicion pliegos TIC); Res.596/2020 (ENS acto previo imperativo); Res.853/2021 (ENS ALTA sin margen discrecional); Res.278/2020 (clausulas modificacion TIC); Res.1145/2022 (vicios seguridad=daño irreparable); Res.432/2023 (controles ENS imperativos=objeto ilegal).
TJUE: C-368/10 (especificaciones completas); C-549/14 (modificacion sustancial); C-27/15 (seguridad=interes general); C-538/13 (igualdad trato); C-619/18 (art.41 CDFUE).
LEGISLACION: LPAC arts.47-48; LCSP arts.1,39,44-60,87-90,99,126-130,132,145,202-205; RD 311/2022 arts.4-6,11-12,24,27,29-31,34-35,43,Anexo II ALTA; CE arts.9.3,14,24,31.2,103; Dir.2014/24/UE arts.18,42,56,67; CDFUE arts.41,47; CCN-STIC 801,804,825.`

const PROMPTS: Record<number, { sistema: string; maxTokens: number }> = {
  // ═══ S1: ANTECEDENTES DE HECHO ═══
  1: {
    maxTokens: 6000,
    sistema: `${ROL}

Redacta los HECHOS del recurso. Genera un array de 8 a 10 hechos cronologicos.

Cada hecho es un objeto JSON con:
- ordinal: "PRIMERO", "SEGUNDO", ... "DECIMO"
- titulo: Titulo descriptivo (10-20 palabras)
- texto: Narrativa del hecho en PROSA FORENSE (MAX 120 palabras). Tono objetivo con carga probatoria, usando las construcciones formales obligatorias. Referencia documental integrada naturalmente en la prosa.
- documentoRef: "(Documento n. X)"

EJEMPLO DE ESTILO para el campo texto:
"Con fecha [X], el organo de contratacion publico en la Plataforma de Contratacion del Sector Publico el anuncio de licitacion correspondiente al expediente n.o [Y], relativo a la contratacion del servicio de [objeto], por un valor estimado de [Z] euros, tramitado por procedimiento abierto conforme al articulo 156 de la LCSP. Examinados los pliegos reguladores de dicha licitacion, se constata que los mismos omiten toda referencia a los controles imperativos del Anexo II del Real Decreto 311/2022, de 3 de mayo, para sistemas clasificados en categoria ALTA."

ESTILO NARRATIVO OBLIGATORIO: Los antecedentes deben leerse como una cronologia procesal irrefutable. Cada hecho debe:
- Identificar con precision la fecha, el acto administrativo y su naturaleza juridica
- Vincular el hecho con el precepto juridico que se infringe (no solo describir, sino calificar)
- Usar formula probatoria: "conforme se acredita documentalmente" / "como obra en el expediente"
VARIAR las aperturas de cada hecho: NO todos deben empezar con "Con fecha..." - usar tambien "En virtud de...", "Examinado el...", "Del expediente resulta que...", "Consta documentalmente que...", "Obra en autos que...", "Resulta acreditado que..."

Cubrir cronologicamente:
PRIMERO-SEGUNDO: Publicacion y datos del procedimiento
TERCERO-CUARTO: Contenido de pliegos y clausulas ENS o su ausencia
QUINTO-SEXTO: Marco normativo imperativo (RD 311/2022, Ley 40/2015) e infracciones concretas
SEPTIMO: Categoria ALTA (art. 5 RD 311/2022) y su justificacion
OCTAVO: Efecto restrictivo sobre la concurrencia
NOVENO-DECIMO: Perjuicio al recurrente y contexto sectorial

${JURISPRUDENCIA}

Responde SOLO con el JSON:
{"antecedentes":[{"ordinal":"PRIMERO","titulo":"...","texto":"...","documentoRef":"(Documento n. 1)"}]}`,
  },

  // ═══ S2: FUNDAMENTOS 1-2 ═══
  2: {
    maxTokens: 7500,
    sistema: `${ROL}

Redacta Fundamentos de Derecho PRIMERO y SEGUNDO. Los 6 campos se renderizan como PARRAFOS CONSECUTIVOS formando argumento continuo.

PRESUPUESTO ESTRICTO (si lo superas, el JSON se trunca y PIERDES TODO el contenido):
- Cada campo: MAX 50 palabras / 300 caracteres. Sin excepciones.
- TOTAL por fundamento: MAX 350 palabras.
SE BREVE Y DENSO. Cada frase = cita normativa + argumento. PROHIBIDO repetir ideas entre campos.

VARIEDAD LEXICA: PRIMERO y SEGUNDO deben usar construcciones formales DISTINTAS.
- Si PRIMERO usa "conforme a lo dispuesto en", SEGUNDO debe usar "con arreglo a" o "a tenor de"
- Si PRIMERO dice "infraccion", SEGUNDO debe decir "transgresion", "vulneracion" o "conculcacion"
- NUNCA la misma transicion en ambos fundamentos

PRIMERO: Infraccion de los principios rectores de la contratacion publica (arts. 1, 132 LCSP; art. 18 Directiva 2014/24/UE; arts. 9.3 y 103 CE). Transparencia, igualdad de trato, libre concurrencia. Marco constitucional (art. 31.2 CE) y dimension europea.

SEGUNDO: Vulneracion del principio de proporcionalidad y seguridad juridica (arts. 4.1 y 5 RD 311/2022; art. 9.3 CE). Test tripartito de proporcionalidad aplicado a la categorizacion ENS ALTA.

${JURISPRUDENCIA}

Responde SOLO con el JSON:
{"fundamentos_1_2":[{"ordinal":"PRIMERO","titulo":"...","normaVulnerada":"...","clausulaViciada":"...","nexoJuridico":"...","doctrinaJurisprudencia":"...","consecuenciaPretendida":"...","analisisJuridico":"..."},{"ordinal":"SEGUNDO","titulo":"...","normaVulnerada":"...","clausulaViciada":"...","nexoJuridico":"...","doctrinaJurisprudencia":"...","consecuenciaPretendida":"...","analisisJuridico":"..."}]}`,
  },

  // ═══ S3: FUNDAMENTOS 3-4 ═══
  3: {
    maxTokens: 7500,
    sistema: `${ROL}

Redacta Fundamentos de Derecho TERCERO y CUARTO. Los 6 campos se renderizan como PARRAFOS CONSECUTIVOS formando argumento continuo.

PRESUPUESTO ESTRICTO (si lo superas, el JSON se trunca y PIERDES TODO el contenido):
- Cada campo: MAX 50 palabras / 300 caracteres. Sin excepciones.
- TOTAL por fundamento: MAX 350 palabras.
SE BREVE Y DENSO. Cada frase = cita normativa + argumento. PROHIBIDO repetir ideas entre campos.

VARIEDAD LEXICA: TERCERO y CUARTO deben usar construcciones formales DISTINTAS.
- Si TERCERO usa "al amparo de", CUARTO debe usar "invocando lo preceptuado en" o "al socaire de"
- Si TERCERO dice "omision", CUARTO debe decir "pretericion", "carencia" o "deficit"
- NUNCA la misma transicion en ambos fundamentos

TERCERO: Transgresion de requisitos de solvencia tecnica profesional verificable (arts. 87.1, 88.1, 90.1.a LCSP). El pliego no exige acreditacion ENS del licitador (CCN-CERT nivel ALTO, ISO 27001, personal certificado). Acreditacion: declaracion por organismo reconocido de que el licitador cumple requisitos de normas armonizadas (Reglamento CE 765/2008). Desarrollar como la carencia de requisitos de solvencia en seguridad impide seleccionar contratista cualificado.

CUARTO: Conculcacion de prescripciones tecnicas ENS categoria ALTA (arts. 122.2, 126.1, 127 LCSP; art. 27 RD 311/2022). Pretericion de prescripciones tecnicas imperativas del Anexo II. Abordar relacion prescripciones tecnicas / objeto contractual determinado, como la omision afecta a las cinco dimensiones de seguridad (confidencialidad, integridad, disponibilidad, autenticidad, trazabilidad), doctrina TACRC sobre especificaciones verificables, eficacia directa Anexo II.

${JURISPRUDENCIA}

Responde SOLO con el JSON:
{"fundamentos_3_4":[{"ordinal":"TERCERO","titulo":"...","normaVulnerada":"...","clausulaViciada":"...","nexoJuridico":"...","doctrinaJurisprudencia":"...","consecuenciaPretendida":"...","analisisJuridico":"..."},{"ordinal":"CUARTO","titulo":"...","normaVulnerada":"...","clausulaViciada":"...","nexoJuridico":"...","doctrinaJurisprudencia":"...","consecuenciaPretendida":"...","analisisJuridico":"..."}]}`,
  },

  // ═══ S4: FUNDAMENTOS 5-6 ═══
  4: {
    maxTokens: 7500,
    sistema: `${ROL}

Redacta Fundamentos de Derecho QUINTO y SEXTO. Los 6 campos se renderizan como PARRAFOS CONSECUTIVOS formando argumento continuo.

PRESUPUESTO ESTRICTO (si lo superas, el JSON se trunca y PIERDES TODO el contenido):
- Cada campo: MAX 50 palabras / 300 caracteres. Sin excepciones.
- TOTAL por fundamento: MAX 350 palabras.
SE BREVE Y DENSO. Cada frase = cita normativa + argumento. PROHIBIDO repetir ideas entre campos.

VARIEDAD LEXICA: QUINTO y SEXTO deben usar construcciones formales DISTINTAS.
- Si QUINTO usa "en virtud de", SEXTO debe usar "por ministerio de" o "en aplicacion de"
- Si QUINTO dice "vulneracion", SEXTO debe decir "quebrantamiento" o "inobservancia"
- NUNCA la misma transicion en ambos fundamentos

QUINTO: Vulneracion de criterios de adjudicacion y evaluacion de seguridad ENS (arts. 145.1, 145.2, 145.4 LCSP). Ausencia de criterios que valoren cumplimiento ENS ALTA. Desarrollar doctrina sobre criterios vinculados al objeto contractual y relacion calidad-precio en contratos de servicios criticos.

SEXTO: Division en lotes contractuales (art. 99.3 LCSP; art. 46 Directiva 2014/24/UE). Regla general de division en lotes como mecanismo PYME (arts. 1.3 y 99 LCSP), carga de motivacion, doctrina TACRC sobre indivisibilidad tecnica.

${JURISPRUDENCIA}

Responde SOLO con el JSON:
{"fundamentos_5_6":[{"ordinal":"QUINTO","titulo":"...","normaVulnerada":"...","clausulaViciada":"...","nexoJuridico":"...","doctrinaJurisprudencia":"...","consecuenciaPretendida":"...","analisisJuridico":"..."},{"ordinal":"SEXTO","titulo":"...","normaVulnerada":"...","clausulaViciada":"...","nexoJuridico":"...","doctrinaJurisprudencia":"...","consecuenciaPretendida":"...","analisisJuridico":"..."}]}`,
  },

  // ═══ S5: FUNDAMENTOS 7-8 ═══
  5: {
    maxTokens: 7500,
    sistema: `${ROL}

Redacta Fundamentos de Derecho SEPTIMO y OCTAVO. Los 6 campos se renderizan como PARRAFOS CONSECUTIVOS formando argumento continuo.

PRESUPUESTO ESTRICTO (si lo superas, el JSON se trunca y PIERDES TODO el contenido):
- Cada campo: MAX 50 palabras / 300 caracteres. Sin excepciones.
- TOTAL por fundamento: MAX 350 palabras.
SE BREVE Y DENSO. Cada frase = cita normativa + argumento. PROHIBIDO repetir ideas entre campos.

VARIEDAD LEXICA: SEPTIMO y OCTAVO deben usar construcciones formales DISTINTAS.
- Si SEPTIMO usa "toda vez que", OCTAVO debe usar "por cuanto" o "dado que concurre"
- Si SEPTIMO dice "omision", OCTAVO debe decir "ausencia", "falta" o "deficit"
- NUNCA la misma transicion en ambos fundamentos

SEPTIMO: Condiciones especiales de ejecucion ENS (art. 202 LCSP; arts. 11, 12, 24 RD 311/2022). Pretericion de condiciones especiales vinculadas a controles ENS imperativos ALTA. Naturaleza como clausula esencial, caracter imperativo por normativa sectorial, necesidad de auditoria de seguridad (proceso sistematico e independiente de verificacion de controles), imposibilidad de exigir ex post obligaciones no previstas en pliego.

OCTAVO: Prevision de modificaciones contractuales (arts. 203-205 LCSP; art. 72 Directiva 2014/24/UE). Ausencia de clausulas de adaptacion tecnologica. Prohibicion modificaciones sustanciales no previstas, doctrina Pressetext TJUE (C-454/06), necesidad de clausulas de adaptacion en contratos plurianuales que afectan a la disponibilidad y continuidad del servicio.

${JURISPRUDENCIA}

Responde SOLO con el JSON:
{"fundamentos_7_8":[{"ordinal":"SEPTIMO","titulo":"...","normaVulnerada":"...","clausulaViciada":"...","nexoJuridico":"...","doctrinaJurisprudencia":"...","consecuenciaPretendida":"...","analisisJuridico":"..."},{"ordinal":"OCTAVO","titulo":"...","normaVulnerada":"...","clausulaViciada":"...","nexoJuridico":"...","doctrinaJurisprudencia":"...","consecuenciaPretendida":"...","analisisJuridico":"..."}]}`,
  },

  // ═══ S6: FUNDAMENTOS 9-10 ═══
  6: {
    maxTokens: 7500,
    sistema: `${ROL}

Redacta Fundamentos de Derecho NOVENO y DECIMO. Los 6 campos se renderizan como PARRAFOS CONSECUTIVOS formando argumento continuo.

PRESUPUESTO ESTRICTO (si lo superas, el JSON se trunca y PIERDES TODO el contenido):
- Cada campo: MAX 50 palabras / 300 caracteres. Sin excepciones.
- TOTAL por fundamento: MAX 350 palabras.
SE BREVE Y DENSO. Cada frase = cita normativa + argumento. PROHIBIDO repetir ideas entre campos.

VARIEDAD LEXICA: NOVENO y DECIMO deben usar construcciones formales DISTINTAS.
- Si NOVENO usa "habida cuenta de que", DECIMO debe usar "atendida la circunstancia de que" o "considerando que"
- Si NOVENO dice "infraccion", DECIMO debe decir "contravencion" o "inobservancia"
- NUNCA la misma transicion en ambos fundamentos

NOVENO: Deficit de motivacion de prescripciones tecnicas (art. 116 LCSP; art. 35 Ley 40/2015). Deber de motivacion reforzada cuando la Administracion contratante se aparta de norma imperativa sectorial, doctrina sobre arbitrariedad administrativa (art. 9.3 CE), distincion discrecionalidad tecnica / potestad reglada.

DECIMO: Sintesis doctrinal y jurisprudencial acumulada. Patron de inobservancia normativa sistematica. Integrar argumentacion precedente, acumulacion de vicios insubsanables como causa de nulidad radical, precedentes TACRC y TS en contratacion TIC.

${JURISPRUDENCIA}

Responde SOLO con el JSON:
{"fundamentos_9_10":[{"ordinal":"NOVENO","titulo":"...","normaVulnerada":"...","clausulaViciada":"...","nexoJuridico":"...","doctrinaJurisprudencia":"...","consecuenciaPretendida":"...","analisisJuridico":"..."},{"ordinal":"DECIMO","titulo":"...","normaVulnerada":"...","clausulaViciada":"...","nexoJuridico":"...","doctrinaJurisprudencia":"...","consecuenciaPretendida":"...","analisisJuridico":"..."}]}`,
  },

  // ═══ S7: CAUSAS DE NULIDAD (DINAMICAS - SIN LIMITE) ═══
  7: {
    maxTokens: 7000,
    sistema: `${ROL}

Redacta las CAUSAS DE NULIDAD DE PLENO DERECHO del recurso.

INSTRUCCION CRITICA: Analiza TODAS las infracciones proporcionadas. Agrupa las infracciones por base juridica de nulidad (articulo de la LPAC u otra norma). Genera TANTAS causas de nulidad como bases juridicas distintas justifiquen las infracciones. NO te limites a un numero fijo. Si las infracciones justifican 3 causas, genera 3. Si justifican 15, genera 15. TODAS las infracciones deben quedar cubiertas por al menos una causa.

Cada causa es un objeto con:
- ordinal: "PRIMERA", "SEGUNDA", "TERCERA", etc.
- base: articulo que fundamenta la nulidad (ej. "art. 47.1.e) LPAC")
- titulo: titulo descriptivo de la causa (10-20 palabras)
- fundamentacion: argumentacion juridica como PROSA LEGAL FLUIDA. MAX 200 PALABRAS. Citar el precepto infringido, los controles ENS omitidos que caen bajo esta base, y la consecuencia juridica. Redactar como letrado ante el TACRC. NO listas, NO campos etiquetados.
- hallazgosVinculados: array de IDs de control ENS que fundamentan esta causa (ej. ["org.1", "op.pl.2"])
- jurisprudenciaAplicable: citas jurisprudenciales con razonamiento. MAX 80 PALABRAS.

PRESUPUESTO TOTAL: MAX 300 palabras por causa (fundamentacion + jurisprudencia). Es CRITICO respetar este limite. Si superas el limite, el JSON se TRUNCA y se pierden causas. PRIORIZA sustancia juridica densa sobre extension.

BASES JURIDICAS A CONSIDERAR (usar TODAS las que apliquen segun las infracciones):
- art. 47.1.a) LPAC: lesion derechos y libertades susceptibles de amparo constitucional (arts. 14, 24 CE)
- art. 47.1.c) LPAC: contenido imposible o indeterminado (contradiccion: exigir ENS sin controles)
- art. 47.1.e) LPAC: infraccion norma con rango de ley o reglamentaria (RD 311/2022 es norma reglamentaria imperativa)
- art. 47.1.f) LPAC: actos expresos o presuntos contrarios al ordenamiento por los que se adquieren facultades sin reunir requisitos
- art. 47.2 LPAC: anulabilidad por infraccion del ordenamiento juridico, incluida desviacion de poder
- art. 39.2.a) LCSP: nulidad contractual por falta de capacidad de obrar o solvencia
- art. 39.2.d) LCSP: nulidad por carencia o insuficiencia de credito
- art. 39.2.f) LCSP: infracciones de normas de preparacion o adjudicacion del contrato que sean cualificadas y afecten a libre concurrencia
- art. 41 CDFUE: derecho a buena administracion (eficacia directa, doctrina TJUE C-619/18)
- arts. 28, 32 RGPD / LOPDGDD: concurrencia infracciones ENS y proteccion de datos
- art. 9.3 CE: interdiccion de la arbitrariedad de los poderes publicos
- art. 103.1 CE: principios de eficacia y sometimiento a la ley
- arts. 126-130 LCSP: prescripciones tecnicas incompletas o discriminatorias
- arts. 87-90 LCSP: solvencia tecnica profesional insuficiente
- art. 202 LCSP: condiciones especiales de ejecucion omitidas
- Otras bases que las infracciones concretas justifiquen

FORMATO: Prosa forense fluida de recurso. NO formato informe/auditoria. Cada causa se lee como un fundamento de un recurso real ante el TACRC. Usar las construcciones formales del ROL VARIANDO entre causas.

FORMULA DE APERTURA de cada fundamentacion (VARIAR entre causas, NO usar la misma en dos causas consecutivas):
Opcion A: "La infraccion denunciada en los fundamentos [X] a [Y] del presente recurso determina la nulidad de pleno derecho del acto impugnado al amparo del articulo [base]..."
Opcion B: "Del examen de los fundamentos [X] a [Y] se colige que concurre causa de nulidad radical al amparo del articulo [base]..."
Opcion C: "Las transgresiones normativas acreditadas en los fundamentos precedentes integran el supuesto de nulidad previsto en el articulo [base]..."
Opcion D: "La conculcacion del ordenamiento juridico evidenciada supra subsume los hechos en la causa de nulidad del articulo [base]..."

${JURISPRUDENCIA}

Responde SOLO con el JSON:
{"causasNulidad":[{"ordinal":"PRIMERA","base":"...","titulo":"...","fundamentacion":"...","hallazgosVinculados":["..."],"jurisprudenciaAplicable":"..."}]}`,
  },

  // ═══ S8: CAUTELARES + SUPLICO ═══
  8: {
    maxTokens: 6000,
    sistema: `${ROL}

Redacta dos secciones del recurso en PROSA FORENSE CONTINUA:

A) MEDIDAS CAUTELARES (art. 49 LCSP):
Los 4 campos se renderizaran como parrafos consecutivos. Redactar como prosa fluida de recurso, NO como campos separados. VARIAR construcciones entre campos.

- fumusBoniIuris: Elegir UNA apertura (MAX 180 palabras):
  A) "La apariencia de buen derecho concurre en el presente caso, habida cuenta de que las infracciones normativas denunciadas en los fundamentos de derecho precedentes..."
  B) "El fumus boni iuris resulta manifiesto, por cuanto las transgresiones normativas acreditadas en los fundamentos precedentes..."
- periculumInMora: Elegir UNA apertura (MAX 180 palabras):
  A) "El peligro en la mora resulta evidente, toda vez que de no acordarse la suspension del procedimiento de licitacion..."
  B) "Concurre igualmente el requisito del periculum in mora, dado que la continuacion del procedimiento sin las garantias de seguridad exigidas por el ENS..."
- ponderacionIntereses: Elegir UNA apertura (MAX 180 palabras):
  A) "La ponderacion de los intereses en conflicto, conforme a la doctrina del Tribunal Constitucional (STC 148/1993)..."
  B) "El juicio de proporcionalidad entre los intereses enfrentados, atendida la doctrina constitucional (STC 148/1993)..."
- proporcionalidadMedida: Elegir UNA apertura (MAX 150 palabras):
  A) "La medida cautelar solicitada resulta proporcionada, toda vez que la suspension constituye la medida menos restrictiva..."
  B) "La proporcionalidad de la medida cautelar interesada se justifica por cuanto la suspension del procedimiento constituye la alternativa menos gravosa..."

B) SUPLICO / PETITUM:
- principal: DEBE seguir la formula tradicional exacta: "que, teniendo por presentado este escrito junto con los documentos que se acompanan, se sirva admitirlo y, en su virtud, tenga por interpuesto RECURSO ESPECIAL EN MATERIA DE CONTRATACION contra [acto impugnado], y previos los tramites legales oportunos, dicte resolucion por la que: Con caracter principal, declare la nulidad de pleno derecho de..." (MAX 200 palabras)
- subsidiaria: "Con caracter subsidiario, para el caso de que ese Tribunal no estimase la pretension principal, declare la anulabilidad de..." (MAX 180 palabras)
- cautelar: "Asimismo, al amparo del articulo 49 de la LCSP, acuerde como medida cautelar la suspension inmediata del procedimiento de licitacion..." (MAX 150 palabras)

${JURISPRUDENCIA}

Responde SOLO con el JSON:
{"cautelares":{"fumusBoniIuris":"...","periculumInMora":"...","ponderacionIntereses":"...","proporcionalidadMedida":"..."},"peticion":{"principal":"...","subsidiaria":"...","cautelar":"..."}}`,
  },

  // ═══ S9: LEGITIMACION + ACTO RECURRIBLE + OTROSIES ═══
  9: {
    maxTokens: 7000,
    sistema: `${ROL}

Redacta TRES secciones del recurso en PROSA FORENSE CONTINUA:

A) LEGITIMACION ACTIVA (art. 48 LCSP):
Los 5 campos se renderizaran como parrafos consecutivos de un unico argumento. Usar transiciones naturales variadas.
- fundamentoLegal: Elegir UNA apertura (MAX 200 palabras):
  A) "La legitimacion activa de esta parte para la interposicion del presente recurso se fundamenta en lo dispuesto en el articulo 48 de la LCSP, que reconoce legitimacion a toda persona fisica o juridica cuyos derechos o intereses legitimos se hayan visto perjudicados o puedan resultar afectados..."
  B) "La habilitacion procesal del recurrente para instar la presente impugnacion trae causa del articulo 48 de la LCSP, que confiere legitimacion a toda persona cuyos derechos o intereses legitimos puedan resultar afectados por la resolucion que se dicte..."
- interesReal: Interes real y efectivo del recurrente en el sector. (MAX 200 palabras)
- potencialLicitador: Aptitud objetiva del recurrente. (MAX 200 palabras)
- perjuicioConcreto: Cadena causal del perjuicio. (MAX 200 palabras)
- conclusionLegitimacion: Cierre integrador. (MAX 100 palabras)

B) ACTO RECURRIBLE (art. 44 LCSP):
Los 4 campos se renderizaran como parrafos consecutivos.
- tipologia: Encaje del acto en art. 44.2.a) LCSP. (MAX 180 palabras)
- tramiteCualificado: Efectos juridicos directos e irremediables. (MAX 180 palabras)
- conexionLesion: Vinculo acto-lesion. (MAX 180 palabras)
- conclusionRecurribilidad: Cierre admisibilidad. (MAX 100 palabras)

C) OTROSIES:
Los otrosies se renderizaran con el formato tradicional "PRIMER OTROSI DIGO:", "SEGUNDO OTROSI DIGO:", "TERCER OTROSI DIGO:".
- proposicionPrueba: DEBE comenzar con: "Que, al amparo de lo dispuesto en el articulo 51.1 de la LCSP, esta parte propone los siguientes medios de prueba..." (MAX 120 palabras)
- reclamacionExpediente: DEBE comenzar con: "Que, conforme al articulo 51.3 de la LCSP, se solicita la remision del expediente administrativo completo..." (MAX 80 palabras)
- notificaciones: DEBE comenzar con: "Que, a efectos de notificaciones, se designa el domicilio..." (MAX 80 palabras)

${JURISPRUDENCIA}

Responde SOLO con el JSON:
{"legitimacion":{"fundamentoLegal":"...","interesReal":"...","potencialLicitador":"...","perjuicioConcreto":"...","conclusionLegitimacion":"..."},"actoRecurrible":{"tipologia":"...","tramiteCualificado":"...","conexionLesion":"...","conclusionRecurribilidad":"..."},"otrosies":{"proposicionPrueba":"...","reclamacionExpediente":"...","notificaciones":"..."}}`,
  },
}

// ─── Formatear datos del caso ────────────────────────────────────────────
function formatearDatos(d: Record<string, unknown>): string {
  return [
    `TRIBUNAL COMPETENTE: ${d.tribunal_competente}`,
    `RECURRENTE: ${d.recurrente_denominacion} (CIF: ${d.recurrente_cif}), domicilio en ${d.recurrente_domicilio}`,
    d.recurrente_registro_mercantil ? `  Registro Mercantil: ${d.recurrente_registro_mercantil}` : null,
    d.recurrente_objeto_social ? `  Objeto social: ${d.recurrente_objeto_social}` : null,
    d.recurrente_cnae ? `  CNAE: ${d.recurrente_cnae}` : null,
    `REPRESENTANTE LEGAL: ${d.representante_nombre}, ${d.representante_titulo}`,
    d.representante_facultades ? `  Facultades: ${d.representante_facultades}` : null,
    `EXPEDIENTE IMPUGNADO: ${d.expediente_numero} - "${d.expediente_denominacion}"`,
    `  Tipo contractual: ${d.expediente_tipo_contractual} | Procedimiento: ${d.expediente_procedimiento}`,
    d.expediente_valor_estimado ? `  Valor estimado: ${Number(d.expediente_valor_estimado).toLocaleString('es-ES')} EUR` : null,
    d.expediente_presupuesto_base ? `  Presupuesto base: ${Number(d.expediente_presupuesto_base).toLocaleString('es-ES')} EUR` : null,
    d.expediente_duracion ? `  Duracion: ${d.expediente_duracion}` : null,
    d.expediente_cpv ? `  CPV: ${d.expediente_cpv}` : null,
    `ORGANO DE CONTRATACION: ${d.organo_contratacion} (nivel: ${d.organo_nivel ?? 'estatal'})`,
    `CONTRATO SARA: ${d.es_contrato_sara ? 'Si (regulacion armonizada, publicacion DOUE)' : 'No'}`,
    d.fecha_publicacion_perfil ? `FECHA PUBLICACION PERFIL: ${d.fecha_publicacion_perfil}` : null,
    d.fecha_publicacion_doue ? `FECHA PUBLICACION DOUE: ${d.fecha_publicacion_doue}` : null,
    d.dies_a_quo ? `DIES A QUO: ${d.dies_a_quo}` : null,
    d.dies_ad_quem ? `DIES AD QUEM: ${d.dies_ad_quem}` : null,
    d.recurrente_email ? `EMAIL NOTIFICACIONES: ${d.recurrente_email}` : null,
    d.recurrente_telefono ? `TELEFONO CONTACTO: ${d.recurrente_telefono}` : null,
  ].filter(Boolean).join('\n')
}

// ─── Formatear infracciones del pliego ───────────────────────────────────
function formatearInfracciones(infracciones: Record<string, unknown>[]): string {
  return infracciones.map((inf, i) =>
    [
      `=== INFRACCION ${i + 1} ===`,
      `Control ENS vulnerado: ${inf.control_id} - ${inf.nombre_control}`,
      `Gravedad: ${inf.prioridad} | Calificacion: ${inf.nivel_cumplimiento}`,
      inf.texto_evidencia ? `Clausula del pliego: "${inf.texto_evidencia}"` : 'Omision total en el pliego (sin clausula equivalente)',
      inf.descripcion_brecha ? `Vicio: ${inf.descripcion_brecha}` : null,
      inf.irac_asunto ? `Asunto IRAC: ${inf.irac_asunto}` : null,
      inf.irac_regla ? `Norma infringida: ${inf.irac_regla}` : null,
      inf.irac_aplicacion ? `Fundamentacion: ${inf.irac_aplicacion}` : null,
      inf.irac_conclusion ? `Conclusion: ${inf.irac_conclusion}` : null,
      inf.recomendacion ? `Clausula que deberia contener: ${inf.recomendacion}` : null,
    ].filter(Boolean).join('\n')
  ).join('\n\n')
}

// Formato compacto para S7 (causas nulidad): solo ID, nombre, gravedad y vicio breve
function formatearInfraccionesCompacto(infracciones: Record<string, unknown>[]): string {
  return infracciones.map((inf, i) => {
    const vicio = inf.descripcion_brecha ? String(inf.descripcion_brecha).substring(0, 120) : 'Omision total'
    const regla = inf.irac_regla ? ` | Norma: ${String(inf.irac_regla).substring(0, 80)}` : ''
    return `${i + 1}. ${inf.control_id} (${inf.prioridad}/${inf.nivel_cumplimiento}): ${inf.nombre_control}. ${vicio}${regla}`
  }).join('\n')
}

Deno.serve(async (req: Request) => {
  const cors = manejarCors(req)
  if (cors) return cors

  try {
    const { analisisId, seccion } = await req.json()
    if (!analisisId || !seccion || ![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(seccion)) {
      return new Response(JSON.stringify({ error: 'analisisId y seccion (1-9) requeridos' }), {
        status: 400,
        headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
      })
    }

    const supabase = crearClienteServicio()

    const [{ data: datosRecurso }, { data: hallazgos }, { data: analisis }] = await Promise.all([
      supabase.from('datos_recurso').select('*').eq('analisis_id', analisisId).single(),
      supabase.from('hallazgos_analisis').select('*')
        .eq('analisis_id', analisisId)
        .in('nivel_cumplimiento', ['NO_CONFORME', 'PARCIALMENTE_CONFORME']),
      supabase.from('analisis')
        .select('categoria_ens, perfil_sectorial')
        .eq('id', analisisId).single(),
    ])

    if (!datosRecurso) throw new Error('No se encontraron datos_recurso')
    if (!hallazgos || hallazgos.length === 0) throw new Error('No hay hallazgos de incumplimiento')

    const PRIORIDAD: Record<string, number> = { CRITICA: 0, ALTA: 1, MEDIA: 2, BAJA: 3 }
    const todosOrdenados = [...hallazgos]
      .sort((a, b) => (PRIORIDAD[a.prioridad] ?? 3) - (PRIORIDAD[b.prioridad] ?? 3))
    // S7 (causas nulidad) recibe TODOS los hallazgos; las demas secciones top 10
    const infraccionesParaSeccion = seccion === 7 ? todosOrdenados : todosOrdenados.slice(0, 10)

    // Nota de instrucciones para el letrado
    // S7 usa formato compacto para caber dentro del timeout con muchos hallazgos
    const textoInfracciones = seccion === 7
      ? formatearInfraccionesCompacto(infraccionesParaSeccion)
      : formatearInfracciones(infraccionesParaSeccion)

    const msg = [
      '=== NOTA DE INSTRUCCIONES PARA EL LETRADO ===',
      '',
      'DATOS DEL PROCEDIMIENTO:',
      formatearDatos(datosRecurso),
      '',
      `INFRACCIONES DEL PLIEGO (${infraccionesParaSeccion.length} de ${hallazgos.length} vicios identificados):`,
      textoInfracciones,
      '',
      `Categoria ENS exigible: ALTA (siempre, conforme art. 5 RD 311/2022)`,
      `Perfil sectorial: ${analisis?.perfil_sectorial ?? 'Administracion Publica'}`,
      `Total controles no conformes: ${hallazgos.length}`,
      '',
      'INSTRUCCION CRITICA: Cada infraccion es vicio impugnable. Argumentar desde ENS ALTA con profundidad juridica maxima. Este es un recurso REAL ante el TACRC, redactado en PROSA FORENSE ESPANOLA TRADICIONAL. NUNCA listas, NUNCA campos etiquetados. Responder SOLO JSON.',
    ].join('\n')

    const cfg = PROMPTS[seccion]!
    const t0 = Date.now()

    // Prefill assistant con '{' para forzar JSON puro (sin markdown)
    const { texto, tokensEntrada, tokensSalida, motivoParada } = await conReintento(
      () => llamarClaude(cfg.sistema, [
        { role: 'user', content: msg },
        { role: 'assistant', content: '{' }
      ], cfg.maxTokens),
      {
        maxIntentos: 3,
        retrasoBaseMs: 5000,
        factorExponencial: 2,
        codigosReintentables: [429, 500, 502, 503, 529],
        enReintento: (intento, _error, retrasoMs) => {
          console.log(`[recurso-s${seccion}] Reintento ${intento} en ${retrasoMs}ms`)
        },
      }
    )

    // Prepend '{' ya que el prefill no se incluye en la respuesta
    const textoCompleto = '{' + texto

    if (motivoParada === 'max_tokens') {
      console.warn(`[recurso-s${seccion}] TRUNCADO: respuesta alcanzo max_tokens (${tokensSalida} tokens). Se intentara reparar JSON.`)
    }

    let contenido: Record<string, unknown>
    let reparado = false
    try {
      contenido = extraerJSON<Record<string, unknown>>(textoCompleto)
    } catch (extractErr) {
      console.error(`[recurso-s${seccion}] extraerJSON fallo (${motivoParada}). Usando placeholder server-side. Raw (500 chars): ${textoCompleto.slice(0, 500)}`)
      // En vez de devolver 422, generar placeholder y devolver 200
      // Asi el cliente NO reintenta (ahorra dinero y tiempo)
      const ERR = '[Seccion parcialmente generada - texto truncado por limite de tokens]'
      const fundPlaceholder = { ordinal: 'ERROR', titulo: 'Contenido truncado', normaVulnerada: ERR, clausulaViciada: ERR, nexoJuridico: ERR, doctrinaJurisprudencia: ERR, consecuenciaPretendida: ERR, analisisJuridico: ERR }
      const placeholders: Record<number, Record<string, unknown>> = {
        1: { antecedentes: [{ ordinal: 'PRIMERO', titulo: 'Contenido truncado', texto: ERR, documentoRef: '(Documento n. 1)' }] },
        2: { fundamentos_1_2: [fundPlaceholder] },
        3: { fundamentos_3_4: [fundPlaceholder] },
        4: { fundamentos_5_6: [fundPlaceholder] },
        5: { fundamentos_7_8: [fundPlaceholder] },
        6: { fundamentos_9_10: [fundPlaceholder] },
        7: { causasNulidad: [{ ordinal: 'PRIMERA', base: 'N/A', titulo: 'Contenido truncado', fundamentacion: ERR, hallazgosVinculados: [], jurisprudenciaAplicable: ERR }] },
        8: { cautelares: { fumusBoniIuris: ERR, periculumInMora: ERR, ponderacionIntereses: ERR, proporcionalidadMedida: ERR }, peticion: { principal: ERR, subsidiaria: ERR, cautelar: ERR } },
        9: { legitimacion: { fundamentoLegal: ERR, interesReal: ERR, potencialLicitador: ERR, perjuicioConcreto: ERR, conclusionLegitimacion: ERR }, actoRecurrible: { tipologia: ERR, tramiteCualificado: ERR, conexionLesion: ERR, conclusionRecurribilidad: ERR }, otrosies: { proposicionPrueba: ERR, reclamacionExpediente: ERR, notificaciones: ERR } },
      }
      contenido = placeholders[seccion] ?? {}
      reparado = true
    }
    const ms = Date.now() - t0

    // Pipeline logging no-critico: si falla, no afecta la respuesta
    try {
      await registrarPasoPipeline(analisisId, `generar-recurso-s${seccion}`, reparado ? 'parcial' : 'completado', {
        duracionMs: ms,
        tokensUsados: { input_tokens: tokensEntrada, output_tokens: tokensSalida },
      })
    } catch (logErr) {
      console.warn(`[recurso-s${seccion}] Error al registrar pipeline (no critico): ${(logErr as Error).message}`)
    }

    return new Response(JSON.stringify({ seccion, contenido, tokensEntrada, tokensSalida, duracionMs: ms, motivoParada, reparado }), {
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const mensaje = error instanceof Error ? error.message : 'Error desconocido'
    console.error('[generar-recurso] Error:', mensaje)
    return new Response(JSON.stringify({ error: mensaje }), {
      status: 500,
      headers: { ...cabecerasCors, 'Content-Type': 'application/json' },
    })
  }
})
