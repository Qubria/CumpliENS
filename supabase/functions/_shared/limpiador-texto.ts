/**
 * limpiador-texto.ts
 *
 * Utilidad de limpieza de texto para archivos markdown generados por OCR
 * a partir de PDFs de normas CCN-STIC. Aplica 12 transformaciones basadas
 * en regex para eliminar ruido de OCR, marcas de agua, boilerplate y
 * artefactos de conversión de PDF.
 *
 * Diseñado para ejecutarse en Deno (Supabase Edge Functions).
 */

/**
 * Limpia el texto de una norma CCN-STIC eliminando ruido de OCR y artefactos
 * de conversión de PDF. Aplica 12 transformaciones en orden específico.
 *
 * @param textoOriginal - Texto markdown crudo proveniente de OCR de PDF
 * @returns Objeto con el texto limpio, tokens estimados y porcentaje de reducción
 */
export function limpiarTextoNorma(textoOriginal: string): {
  textoLimpio: string;
  tokensEstimados: number;
  porcentajeReduccion: number;
} {
  const longitudOriginal = textoOriginal.length;
  let texto = textoOriginal;

  // ─── 1. Eliminar frontmatter YAML ───
  // Elimina todo entre marcadores `---` al inicio del archivo (incluyendo los marcadores).
  // Solo se elimina si el frontmatter comienza en la primera línea.
  texto = texto.replace(/^---\r?\n[\s\S]*?\r?\n---[ \t]*\r?\n?/, "");

  // ─── 2. Eliminar referencias a imágenes ───
  // Elimina sintaxis de imagen markdown ![texto](ruta), incluyendo leyendas multilínea.
  texto = texto.replace(/!\[[^\]]*\]\([^)]*\)\r?\n?/g, "");

  // ─── 3. Eliminar marcadores de página ───
  // Elimina comentarios HTML del tipo <!-- Página X de Y --> o <!-- Pagina X de Y -->
  texto = texto.replace(/<!--\s*P[aá]gina\s+\d+\s+de\s+\d+\s*-->\r?\n?/gi, "");

  // ─── 4. Eliminar líneas "SIN CLASIFICAR" repetidas ───
  // Elimina líneas que solo contienen "SIN CLASIFICAR" (insensible a mayúsculas,
  // con posible espacio extra).
  texto = texto.replace(/^[ \t]*SIN\s+CLASIFICAR[ \t]*$/gim, "");

  // ─── 5. Eliminar separadores de página ───
  // Elimina `---` que aparece solo en una línea rodeado de líneas en blanco
  // (separadores de página PDF), pero NO frontmatter YAML ni contenido legítimo.
  texto = texto.replace(/(\r?\n[ \t]*\r?\n)---[ \t]*(\r?\n[ \t]*\r?\n)/g, "$1$2");

  // ─── 6. Corregir caracteres duplicados por OCR ───
  // Corrige patrones como "GGuuííaa" -> "Guía", "CCeennttrroo" -> "Centro".
  // El patrón OCR duplica cada carácter. Detectamos secuencias donde al menos 4
  // pares de caracteres idénticos consecutivos forman una "palabra duplicada" y
  // las deduplicamos. Se tiene cuidado de no afectar dobles legítimas como "cc"
  // en "acceso" o "ll" en "calle".
  texto = texto.replace(
    /(?<![a-záéíóúüñA-ZÁÉÍÓÚÜÑ])(([a-záéíóúüñA-ZÁÉÍÓÚÜÑ])\2){4,}(?![a-záéíóúüñA-ZÁÉÍÓÚÜÑ])/g,
    (coincidencia: string) => {
      // Tomamos solo los caracteres en posiciones pares (el original de cada par)
      let resultado = "";
      for (let i = 0; i < coincidencia.length; i += 2) {
        resultado += coincidencia[i];
      }
      return resultado;
    }
  );

  // ─── 7. Colapsar líneas de un solo carácter ───
  // Elimina secuencias de líneas donde cada una tiene un solo carácter visible
  // (artefacto OCR de texto vertical / marcas de agua leídas verticalmente).
  // Requiere al menos 3 líneas consecutivas de un solo carácter.
  texto = texto.replace(/(^[ \t]*\S[ \t]*$\r?\n){3,}/gm, "");

  // ─── 8. Eliminar boilerplate legal ───
  // Elimina pies de página recurrentes del Centro Criptológico Nacional.

  // 8a. Líneas de pie de página "Centro Criptológico Nacional"
  texto = texto.replace(
    /^[ \t]*Centro\s+Criptol[oó]gico\s+Nacional[ \t]*$/gim,
    ""
  );

  // 8b. "SIN CLASIFICAR" seguido de números de página
  texto = texto.replace(
    /^[ \t]*SIN\s+CLASIFICAR\s+\d+[ \t]*$/gim,
    ""
  );

  // 8c. Referencias BOE invertidas tipo "X-XXXX-XXXX-A-EOB"
  texto = texto.replace(
    /^[ \t]*\d+-\d{4}-\d{4}-[A-Z]-EOB[ \t]*$/gim,
    ""
  );

  // ─── 9. Eliminar números de página sueltos ───
  // Elimina líneas que son solo un número (1-999) con posible espacio alrededor.
  texto = texto.replace(/^[ \t]*\d{1,3}[ \t]*$/gm, "");

  // ─── 10. Eliminar texto de marcas de agua invertidas ───
  // Elimina cadenas que son texto leído al revés de marcas de agua del PDF,
  // como "80101-6102-A-EOB", ":evc", "se.eob.www//:ptth", "elbacifireV", "ne".
  const patronesMarcaAgua = [
    /^[ \t]*\d{5}-\d{4}-[A-Z]-EOB[ \t]*$/gm,       // "80101-6102-A-EOB"
    /^[ \t]*:evc[ \t]*$/gm,                          // ":evc" (cve: invertido)
    /^[ \t]*se\.eob\.www\/\/:ptth[ \t]*$/gm,         // "se.eob.www//:ptth" (http://www.boe.es invertido)
    /^[ \t]*elbacifireV[ \t]*$/gm,                    // "elbacifireV" (Verificable invertido)
    /^[ \t]*ne[ \t]*$/gm,                             // "ne" (en invertido)
    /^[ \t]*EOB[ \t]*$/gm,                            // "EOB" (BOE invertido)
    /^[ \t]*lanoicaN[ \t]*$/gm,                       // "lanoicaN" (Nacional invertido)
    /^[ \t]*ocigólotpirC[ \t]*$/gm,                   // "ocigólotpirC" (Criptológico invertido)
    /^[ \t]*ortneC[ \t]*$/gm,                         // "ortneC" (Centro invertido)
    /^[ \t]*RACIFISALC\s+NIS[ \t]*$/gm,              // "RACIFISALC NIS" (SIN CLASIFICAR invertido)
  ];

  for (const patronMarca of patronesMarcaAgua) {
    texto = texto.replace(patronMarca, "");
  }

  // ─── 11. Colapsar múltiples líneas en blanco ───
  // Reemplaza 3 o más líneas en blanco consecutivas por una sola línea en blanco.
  texto = texto.replace(/(\r?\n[ \t]*){3,}/g, "\n\n");

  // ─── 12. Recorte final ───
  // Elimina espacios en blanco al inicio y final del resultado completo.
  texto = texto.trim();

  // ─── Cálculos de métricas ───
  const longitudLimpia = texto.length;

  // Estimación de tokens: para texto en español, dividimos entre 4
  const tokensEstimados = Math.ceil(longitudLimpia / 4);

  // Porcentaje de reducción respecto al texto original
  const porcentajeReduccion =
    longitudOriginal > 0
      ? ((longitudOriginal - longitudLimpia) / longitudOriginal) * 100
      : 0;

  return {
    textoLimpio: texto,
    tokensEstimados,
    porcentajeReduccion: Math.round(porcentajeReduccion * 100) / 100,
  };
}
