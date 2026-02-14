import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { cabecerasCors, manejarCors } from '../_shared/cors.ts'
import { crearClienteServicio } from '../_shared/supabase-client.ts'
import { llamarClaude, extraerJSON } from '../_shared/anthropic-client.ts'
import { conReintento } from '../_shared/reintento.ts'
import { registrarPasoPipeline } from '../_shared/pipeline-logger.ts'

/**
 * generar-recurso/index.ts
 *
 * Genera un REMC por secciones (4 llamadas independientes).
 *   seccion 1: legitimacion + actoRecurrible + hechos
 *   seccion 2: fundamentos modulos 1-5
 *   seccion 3: fundamentos modulos 6-10
 *   seccion 4: cautelares + peticion + efectos + estrategia
 */

const PROMPTS: Record<number, { sistema: string; maxTokens: number }> = {
  1: {
    maxTokens: 3500,
    sistema: `Eres abogado experto en contratacion publica espanola (LCSP 9/2017) y ENS (RD 311/2022). Redacta secciones iniciales de un REMC.

Responde SOLO JSON:
{
  "legitimacion": {
    "interesReal": "1 parrafo: interes directo del recurrente (art. 48 LCSP)",
    "potencialLicitador": "1 parrafo: condicion de potencial licitador",
    "perjuicioConcreto": "1 parrafo: perjuicio concreto derivado de clausulas impugnadas"
  },
  "actoRecurrible": {
    "tipologia": "1 parrafo: acto impugnado (art. 44.2 LCSP)",
    "tramiteCualificado": "1 parrafo: tipo de tramite",
    "conexionLesion": "1 parrafo: conexion clausulas-lesion"
  },
  "hechos": {
    "hecho1_publicacion": "1 parrafo: publicacion del procedimiento",
    "hecho2_clausulas": "1 parrafo: clausulas del pliego que incumplen ENS",
    "hecho3_contexto": "1 parrafo: contexto normativo",
    "hecho4_efecto": "1 parrafo: efecto restrictivo",
    "hecho5_perjuicio": "1 parrafo: perjuicio directo"
  }
}
Tono juridico formal. Citas normativas precisas. SOLO JSON.`,
  },
  2: {
    maxTokens: 3500,
    sistema: `Eres abogado experto en LCSP 9/2017 y ENS RD 311/2022. Redacta 5 fundamentos de derecho de un REMC.

RESPONDE EXCLUSIVAMENTE un objeto JSON valido. Sin texto antes ni despues del JSON.
{
  "fundamentos_1_5": {
    "modulo1_principios": "string: Vulneracion igualdad, transparencia, proporcionalidad (arts. 1, 132 LCSP). Un parrafo con IRAC.",
    "modulo2_proporcionalidad": "string: Test tripartito. Un parrafo con IRAC.",
    "modulo3_solvencia": "string: Solvencia tecnica ENS (arts. 87-90 LCSP). Un parrafo con IRAC.",
    "modulo4_tecnicas": "string: Prescripciones tecnicas (arts. 126-130 LCSP). Un parrafo con IRAC.",
    "modulo5_criterios": "string: Criterios adjudicacion ENS (art. 145 LCSP). Un parrafo con IRAC."
  }
}
IMPORTANTE: Cada modulo es un STRING (no un objeto). Un parrafo con Issue-Rule-Application-Conclusion integrados. Si un modulo no tiene conexion con los hallazgos: "No aplicable al presente recurso."`,
  },
  3: {
    maxTokens: 4500,
    sistema: `Eres abogado experto en LCSP 9/2017 y ENS RD 311/2022. Redacta 5 fundamentos de derecho adicionales de un REMC.

Tu respuesta debe ser UNICAMENTE un objeto JSON. No escribas nada antes ni despues del JSON. Ejemplo de formato:

{"fundamentos_6_10":{"modulo6_lotes":"texto aqui","modulo7_ejecucion":"texto aqui","modulo8_modificaciones":"texto aqui","modulo9_motivacion":"texto aqui","modulo10_doctrina":"texto aqui"}}

Contenido de cada modulo:
- modulo6_lotes: Division en lotes y ENS (art. 99 LCSP). IRAC.
- modulo7_ejecucion: Condiciones ejecucion seguridad (art. 202 LCSP). IRAC.
- modulo8_modificaciones: Riesgo modificaciones por deficiente ENS (arts. 203-205). IRAC.
- modulo9_motivacion: Deber motivacion requisitos seguridad. IRAC.
- modulo10_doctrina: Precedentes TACRC en ENS. IRAC.

Cada valor es un STRING con un parrafo IRAC. Si no aplica a los hallazgos: "No aplicable al presente recurso."
TODOS los 5 campos son obligatorios en el JSON.`,
  },
  4: {
    maxTokens: 4000,
    sistema: `Eres abogado experto en LCSP 9/2017 y ENS RD 311/2022. Redacta secciones finales de un REMC.

Responde SOLO JSON:
{
  "cautelares": {
    "fumusBoniIuris": "1 parrafo: apariencia de buen derecho",
    "periculumInMora": "1 parrafo: peligro por demora",
    "ponderacionIntereses": "1 parrafo: ponderacion intereses"
  },
  "peticion": {
    "principal": "1 parrafo: anulacion clausulas",
    "subsidiaria": "1 parrafo: peticion alternativa",
    "cautelar": "1 parrafo: suspension procedimiento"
  },
  "efectos": {
    "escenariosResolucion": "1 parrafo: escenarios posibles",
    "planContencioso": "1 parrafo: via contencioso-administrativa"
  },
  "estrategia": {
    "piramideFuerza": "1 parrafo: argumentos por solidez",
    "matrizRiesgos": "1 parrafo: riesgos del recurso",
    "argumentoEconomico": "1 parrafo: impacto presupuestario"
  }
}
Tono juridico formal. SOLO JSON.`,
  },
}

function formatearDatos(d: Record<string, unknown>): string {
  return [
    `TRIBUNAL: ${d.tribunal_competente}`,
    `RECURRENTE: ${d.recurrente_denominacion} (CIF: ${d.recurrente_cif}), ${d.recurrente_domicilio}`,
    `REPRESENTANTE: ${d.representante_nombre}, ${d.representante_titulo}`,
    `EXPEDIENTE: ${d.expediente_numero} - ${d.expediente_denominacion}`,
    `  Tipo: ${d.expediente_tipo_contractual}, Proc: ${d.expediente_procedimiento}`,
    d.expediente_valor_estimado ? `  Valor: ${d.expediente_valor_estimado} EUR` : null,
    `ORGANO: ${d.organo_contratacion}`,
    `SARA: ${d.es_contrato_sara ? 'Si' : 'No'}`,
  ].filter(Boolean).join('\n')
}

function formatearHallazgos(hallazgos: Record<string, unknown>[]): string {
  return hallazgos.map((h, i) =>
    `${i + 1}. [${h.nivel_cumplimiento}] ${h.control_id} - ${h.nombre_control} (${h.prioridad}): ${(h.descripcion_brecha as string ?? h.resumen_hallazgo as string ?? '').slice(0, 120)}`
  ).join('\n')
}

Deno.serve(async (req: Request) => {
  const cors = manejarCors(req)
  if (cors) return cors

  try {
    const { analisisId, seccion } = await req.json()
    if (!analisisId || !seccion || ![1, 2, 3, 4].includes(seccion)) {
      return new Response(JSON.stringify({ error: 'analisisId y seccion (1-4) requeridos' }), {
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
    const top = [...hallazgos]
      .sort((a, b) => (PRIORIDAD[a.prioridad] ?? 3) - (PRIORIDAD[b.prioridad] ?? 3))
      .slice(0, 10)

    const msg = [
      '=== DATOS ===',
      formatearDatos(datosRecurso),
      `\n=== ${top.length} HALLAZGOS (de ${hallazgos.length}) ===`,
      formatearHallazgos(top),
      `\n=== CONTEXTO ===`,
      `ENS: ${analisis?.categoria_ens ?? '?'} | Perfil: ${analisis?.perfil_sectorial ?? '?'}`,
    ].join('\n')

    const cfg = PROMPTS[seccion]!
    const t0 = Date.now()

    const { texto, tokensEntrada, tokensSalida } = await conReintento(
      () => llamarClaude(cfg.sistema, [{ role: 'user', content: msg }], cfg.maxTokens),
      {
        maxIntentos: 2,
        retrasoBaseMs: 3000,
        factorExponencial: 2,
        codigosReintentables: [429, 500, 502, 503, 529],
        enReintento: (intento, _error, retrasoMs) => {
          console.log(`[recurso-s${seccion}] Reintento ${intento} en ${retrasoMs}ms`)
        },
      }
    )

    let contenido: Record<string, unknown>
    try {
      contenido = extraerJSON<Record<string, unknown>>(texto)
    } catch {
      // Si falla la extraccion, intentar wrappear como JSON valido
      console.error(`[recurso-s${seccion}] JSON extraction failed. Raw text (first 500): ${texto.slice(0, 500)}`)
      // Devolver el texto raw como fallback
      contenido = { texto_raw: texto }
    }
    const ms = Date.now() - t0

    await registrarPasoPipeline(analisisId, `generar-recurso-s${seccion}`, 'completado', {
      duracionMs: ms,
      tokensUsados: { input_tokens: tokensEntrada, output_tokens: tokensSalida },
    })

    return new Response(JSON.stringify({ seccion, contenido, tokensEntrada, tokensSalida, duracionMs: ms }), {
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
