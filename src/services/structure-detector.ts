import type { PaginaExtraida, BloqueEstructurado } from '@/types/analysis'

// Patrones regex para elementos de estructura de documentos legales espanoles
const PATRONES = {
  titulo: /^(?:T[IiíÍ]TULO|Tit\.)\s+([IVXLCDM]+|\d+)[\s.:–-]*(.*)/i,
  capitulo: /^(?:CAP[IiíÍ]TULO|Cap\.)\s+([IVXLCDM]+|\d+)[\s.:–-]*(.*)/i,
  seccion: /^(?:Secci[oóÓ]n|SECCI[OÓ]N)\s+(\d+[a-z]?)[\s.:–-]*(.*)/i,
  articulo: /^(?:ART[IiíÍ]CULO|Art\.)\s+(\d+)[\s.:–-]*(.*)/i,
  anexo: /^(?:ANEXO|Anexo)\s+([IVXLCDM]+|\d+)[\s.:–-]*(.*)/i,
  disposicion: /^(?:Disposici[oóÓ]n|DISPOSICI[OÓ]N)\s+(adicional|transitoria|derogatoria|final)\s+(\w+)/i,
  listaNumerada: /^\d+\.\s+/,
  listaLetras: /^[a-z]\)\s+/,
  tabla: /^(?:\|.*\||\+[-+]+\+|Tabla\s+\d+)/i,
}

type NivelEncabezado = 'titulo' | 'capitulo' | 'seccion' | 'articulo' | 'anexo' | 'disposicion'

interface CoincidenciaEncabezado {
  nivel: NivelEncabezado
  id: string
  nombre: string
  linea: string
}

export function detectarEstructura(paginas: PaginaExtraida[]): BloqueEstructurado[] {
  const bloques: BloqueEstructurado[] = []
  const pilaEncabezados: { nivel: NivelEncabezado; etiqueta: string }[] = []

  let bloqueActual: {
    lineas: string[]
    tipo: BloqueEstructurado['tipo']
    paginaInicio: number
    paginaFin: number
    encabezado?: CoincidenciaEncabezado
  } | null = null

  for (const pagina of paginas) {
    const lineas = pagina.texto.split('\n')

    for (const linea of lineas) {
      const recortada = linea.trim()
      if (!recortada) continue

      const encabezado = coincidirEncabezado(recortada)

      if (encabezado) {
        // Vaciar bloque actual
        if (bloqueActual && bloqueActual.lineas.length > 0) {
          bloques.push(construirBloque(bloqueActual, pilaEncabezados))
        }

        // Actualizar pila de encabezados
        actualizarPilaEncabezados(pilaEncabezados, encabezado)

        // Iniciar nuevo bloque
        bloqueActual = {
          lineas: [recortada],
          tipo: encabezadoATipoFragmento(encabezado.nivel),
          paginaInicio: pagina.numeroPagina,
          paginaFin: pagina.numeroPagina,
          encabezado,
        }
      } else if (PATRONES.tabla.test(recortada)) {
        // Vaciar bloque actual
        if (bloqueActual && bloqueActual.lineas.length > 0) {
          bloques.push(construirBloque(bloqueActual, pilaEncabezados))
        }
        // Iniciar bloque de tabla
        bloqueActual = {
          lineas: [recortada],
          tipo: 'TABLA',
          paginaInicio: pagina.numeroPagina,
          paginaFin: pagina.numeroPagina,
        }
      } else {
        // Agregar al bloque actual o iniciar nuevo bloque generico
        if (!bloqueActual) {
          bloqueActual = {
            lineas: [recortada],
            tipo: 'GENERICO',
            paginaInicio: pagina.numeroPagina,
            paginaFin: pagina.numeroPagina,
          }
        } else {
          bloqueActual.lineas.push(recortada)
          bloqueActual.paginaFin = pagina.numeroPagina
        }
      }
    }
  }

  // Vaciar ultimo bloque
  if (bloqueActual && bloqueActual.lineas.length > 0) {
    bloques.push(construirBloque(bloqueActual, pilaEncabezados))
  }

  return bloques
}

function coincidirEncabezado(linea: string): CoincidenciaEncabezado | null {
  for (const [nivel, patron] of Object.entries(PATRONES) as [string, RegExp][]) {
    if (nivel === 'listaNumerada' || nivel === 'listaLetras' || nivel === 'tabla') continue

    const coincidencia = linea.match(patron)
    if (coincidencia) {
      return {
        nivel: nivel as NivelEncabezado,
        id: coincidencia[1] ?? '',
        nombre: (coincidencia[2] ?? '').trim(),
        linea,
      }
    }
  }
  return null
}

function encabezadoATipoFragmento(nivel: NivelEncabezado): BloqueEstructurado['tipo'] {
  switch (nivel) {
    case 'titulo': return 'TITULO'
    case 'capitulo': return 'SECCION'
    case 'seccion': return 'SECCION'
    case 'articulo': return 'ARTICULO'
    case 'anexo': return 'ANEXO'
    case 'disposicion': return 'SECCION'
  }
}

const PRIORIDAD_ENCABEZADO: Record<NivelEncabezado, number> = {
  titulo: 0,
  capitulo: 1,
  seccion: 2,
  articulo: 3,
  anexo: 0,
  disposicion: 1,
}

function actualizarPilaEncabezados(
  pila: { nivel: NivelEncabezado; etiqueta: string }[],
  encabezado: CoincidenciaEncabezado
): void {
  const prioridad = PRIORIDAD_ENCABEZADO[encabezado.nivel]

  // Eliminar todo con misma o menor prioridad
  while (pila.length > 0 && PRIORIDAD_ENCABEZADO[pila[pila.length - 1]!.nivel] >= prioridad) {
    pila.pop()
  }

  const etiqueta = encabezado.nombre
    ? `${capitalizar(encabezado.nivel)} ${encabezado.id}: ${encabezado.nombre}`
    : `${capitalizar(encabezado.nivel)} ${encabezado.id}`

  pila.push({ nivel: encabezado.nivel, etiqueta })
}

function construirBloque(
  bloque: {
    lineas: string[]
    tipo: BloqueEstructurado['tipo']
    paginaInicio: number
    paginaFin: number
  },
  pilaEncabezados: { nivel: NivelEncabezado; etiqueta: string }[]
): BloqueEstructurado {
  return {
    tipo: bloque.tipo,
    contenido: bloque.lineas.join('\n'),
    jerarquiaEncabezados: pilaEncabezados.map((e) => e.etiqueta),
    paginaInicio: bloque.paginaInicio,
    paginaFin: bloque.paginaFin,
  }
}

function capitalizar(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
