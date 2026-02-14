import type { BloqueEstructurado, FragmentoDocumento } from '@/types/analysis'
import { CHUNK_TARGET_TOKENS, CHUNK_MAX_TOKENS, CHUNK_OVERLAP_PERCENT, CHARS_PER_TOKEN } from '@/config/constants'

export function fragmentarBloquesEstructurados(bloques: BloqueEstructurado[]): FragmentoDocumento[] {
  const fragmentos: FragmentoDocumento[] = []
  let indiceFragmento = 0

  for (const bloque of bloques) {
    const cantidadTokens = estimarTokens(bloque.contenido)

    if (cantidadTokens <= CHUNK_MAX_TOKENS) {
      // El bloque cabe en un solo fragmento
      fragmentos.push({
        contenido: bloque.contenido,
        tipoFragmento: bloque.tipo,
        jerarquiaEncabezados: [...bloque.jerarquiaEncabezados],
        indiceFragmento: indiceFragmento++,
        paginaInicio: bloque.paginaInicio,
        paginaFin: bloque.paginaFin,
        cantidadTokens,
      })
    } else if (cantidadTokens <= CHUNK_MAX_TOKENS * 2) {
      // Dividir en 2 fragmentos en limite de oracion
      const fragmentosDivididos = dividirEnLimiteOracion(bloque, 2)
      for (const fd of fragmentosDivididos) {
        fragmentos.push({ ...fd, indiceFragmento: indiceFragmento++ })
      }
    } else {
      // Division recursiva en limites de parrafo
      const fragmentosDivididos = dividirRecursivamente(bloque)
      for (const fd of fragmentosDivididos) {
        fragmentos.push({ ...fd, indiceFragmento: indiceFragmento++ })
      }
    }
  }

  return fragmentos
}

function estimarTokens(texto: string): number {
  return Math.ceil(texto.length / CHARS_PER_TOKEN)
}

function dividirEnLimiteOracion(bloque: BloqueEstructurado, partes: number): FragmentoDocumento[] {
  const oraciones = dividirOraciones(bloque.contenido)
  const totalTokens = estimarTokens(bloque.contenido)
  const objetivoPorParte = Math.ceil(totalTokens / partes)
  const tokensSolapamiento = Math.ceil(CHUNK_TARGET_TOKENS * CHUNK_OVERLAP_PERCENT)

  const fragmentos: FragmentoDocumento[] = []
  let oracionesActuales: string[] = []
  let tokensActuales = 0

  for (const oracion of oraciones) {
    const tokensOracion = estimarTokens(oracion)
    oracionesActuales.push(oracion)
    tokensActuales += tokensOracion

    if (tokensActuales >= objetivoPorParte && fragmentos.length < partes - 1) {
      const contenido = oracionesActuales.join(' ')
      fragmentos.push({
        contenido,
        tipoFragmento: bloque.tipo,
        jerarquiaEncabezados: [...bloque.jerarquiaEncabezados],
        indiceFragmento: 0,
        paginaInicio: bloque.paginaInicio,
        paginaFin: bloque.paginaFin,
        cantidadTokens: estimarTokens(contenido),
      })

      // Solapamiento: mantener ultimas oraciones
      const oracionesSolapamiento: string[] = []
      let conteoSolapamiento = 0
      for (let i = oracionesActuales.length - 1; i >= 0; i--) {
        const or = oracionesActuales[i]!
        conteoSolapamiento += estimarTokens(or)
        if (conteoSolapamiento > tokensSolapamiento) break
        oracionesSolapamiento.unshift(or)
      }

      oracionesActuales = oracionesSolapamiento
      tokensActuales = conteoSolapamiento
    }
  }

  // Vaciar restante
  if (oracionesActuales.length > 0) {
    const contenido = oracionesActuales.join(' ')
    fragmentos.push({
      contenido,
      tipoFragmento: bloque.tipo,
      jerarquiaEncabezados: [...bloque.jerarquiaEncabezados],
      indiceFragmento: 0,
      paginaInicio: bloque.paginaInicio,
      paginaFin: bloque.paginaFin,
      cantidadTokens: estimarTokens(contenido),
    })
  }

  return fragmentos
}

function dividirRecursivamente(bloque: BloqueEstructurado): FragmentoDocumento[] {
  const parrafos = bloque.contenido.split(/\n\s*\n/)
  const fragmentos: FragmentoDocumento[] = []
  let parrafosActuales: string[] = []
  let tokensActuales = 0
  const tokensSolapamiento = Math.ceil(CHUNK_TARGET_TOKENS * CHUNK_OVERLAP_PERCENT)

  for (const parrafo of parrafos) {
    const tokensParrafo = estimarTokens(parrafo)

    if (tokensParrafo > CHUNK_MAX_TOKENS) {
      // Vaciar lo que tenemos
      if (parrafosActuales.length > 0) {
        const contenido = parrafosActuales.join('\n\n')
        fragmentos.push({
          contenido,
          tipoFragmento: bloque.tipo,
          jerarquiaEncabezados: [...bloque.jerarquiaEncabezados],
          indiceFragmento: 0,
          paginaInicio: bloque.paginaInicio,
          paginaFin: bloque.paginaFin,
          cantidadTokens: estimarTokens(contenido),
        })
        parrafosActuales = []
        tokensActuales = 0
      }

      // Dividir el parrafo grande a nivel de oracion
      const subBloque: BloqueEstructurado = {
        ...bloque,
        contenido: parrafo,
      }
      const partesCantidad = Math.ceil(tokensParrafo / CHUNK_TARGET_TOKENS)
      const subFragmentos = dividirEnLimiteOracion(subBloque, partesCantidad)
      fragmentos.push(...subFragmentos)
      continue
    }

    if (tokensActuales + tokensParrafo > CHUNK_MAX_TOKENS && parrafosActuales.length > 0) {
      // Vaciar actual
      const contenido = parrafosActuales.join('\n\n')
      fragmentos.push({
        contenido,
        tipoFragmento: bloque.tipo,
        jerarquiaEncabezados: [...bloque.jerarquiaEncabezados],
        indiceFragmento: 0,
        paginaInicio: bloque.paginaInicio,
        paginaFin: bloque.paginaFin,
        cantidadTokens: estimarTokens(contenido),
      })

      // Solapamiento
      const ultimoParrafo = parrafosActuales[parrafosActuales.length - 1]
      if (ultimoParrafo && estimarTokens(ultimoParrafo) <= tokensSolapamiento) {
        parrafosActuales = [ultimoParrafo]
        tokensActuales = estimarTokens(ultimoParrafo)
      } else {
        parrafosActuales = []
        tokensActuales = 0
      }
    }

    parrafosActuales.push(parrafo)
    tokensActuales += tokensParrafo
  }

  // Vaciar restante
  if (parrafosActuales.length > 0) {
    const contenido = parrafosActuales.join('\n\n')
    fragmentos.push({
      contenido,
      tipoFragmento: bloque.tipo,
      jerarquiaEncabezados: [...bloque.jerarquiaEncabezados],
      indiceFragmento: 0,
      paginaInicio: bloque.paginaInicio,
      paginaFin: bloque.paginaFin,
      cantidadTokens: estimarTokens(contenido),
    })
  }

  return fragmentos
}

function dividirOraciones(texto: string): string[] {
  // Division de oraciones en espanol - manejar abreviaturas
  const oraciones = texto.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ])/)
  return oraciones.filter((o) => o.trim().length > 0)
}
