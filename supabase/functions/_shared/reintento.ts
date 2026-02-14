/**
 * reintento.ts - Utilidad de reintento con retroceso exponencial para llamadas a APIs.
 *
 * Usado por las Edge Functions para manejar fallos transitorios de las APIs
 * de Anthropic y OpenAI (429, 500, 502, 503, 529 y errores de red).
 *
 * @module reintento
 */

/** Opciones de configuracion para la logica de reintento. */
export interface OpcionesReintento {
  /** Numero maximo de intentos (incluido el primero). Por defecto 3. */
  maxIntentos: number;
  /** Retraso base en milisegundos antes del primer reintento. Por defecto 1000. */
  retrasoBaseMs: number;
  /** Factor multiplicador para el retroceso exponencial. Por defecto 2. */
  factorExponencial: number;
  /** Codigos de estado HTTP que deben reintentar. */
  codigosReintentables: number[];
  /** Callback opcional invocado antes de cada reintento. */
  enReintento?: (intento: number, error: Error, retrasoMs: number) => void;
}

/** Valores por defecto para las opciones de reintento. */
const OPCIONES_POR_DEFECTO: OpcionesReintento = {
  maxIntentos: 3,
  retrasoBaseMs: 1000,
  factorExponencial: 2,
  codigosReintentables: [429, 500, 502, 503, 529],
  enReintento: undefined,
};

/**
 * Error personalizado que incluye el codigo de estado HTTP de la respuesta.
 */
export class ErrorHTTP extends Error {
  public readonly codigoEstado: number;
  public readonly cabeceraRetryAfter: string | null;

  constructor(
    mensaje: string,
    codigoEstado: number,
    cabeceraRetryAfter: string | null = null,
  ) {
    super(mensaje);
    this.name = "ErrorHTTP";
    this.codigoEstado = codigoEstado;
    this.cabeceraRetryAfter = cabeceraRetryAfter;
  }
}

/**
 * Determina si un error es transitorio y deberia reintentarse.
 *
 * Reintentar cuando:
 * - El error es un ErrorHTTP con un codigo de estado reintentable.
 * - El error es un TypeError de red (fetch failed, ECONNRESET, ETIMEDOUT).
 */
function esErrorReintentable(
  error: unknown,
  codigosReintentables: number[],
): boolean {
  if (error instanceof ErrorHTTP) {
    return codigosReintentables.includes(error.codigoEstado);
  }

  if (error instanceof TypeError) {
    const mensaje = error.message.toLowerCase();
    return (
      mensaje.includes("fetch failed") ||
      mensaje.includes("econnreset") ||
      mensaje.includes("etimedout")
    );
  }

  if (error instanceof Error) {
    const mensaje = error.message.toLowerCase();
    return (
      mensaje.includes("econnreset") ||
      mensaje.includes("etimedout")
    );
  }

  return false;
}

/**
 * Calcula el retraso en milisegundos para un intento dado,
 * con retroceso exponencial y jitter aleatorio.
 *
 * Si el error es un 429 con cabecera Retry-After, usa ese valor.
 */
function calcularRetraso(
  intento: number,
  retrasoBaseMs: number,
  factorExponencial: number,
  error: unknown,
): number {
  // Si es un 429 con Retry-After, respetar la cabecera
  if (error instanceof ErrorHTTP && error.codigoEstado === 429 && error.cabeceraRetryAfter) {
    const valorRetryAfter = error.cabeceraRetryAfter;

    // Retry-After puede ser segundos (numero) o una fecha HTTP
    const segundos = Number(valorRetryAfter);
    if (!Number.isNaN(segundos) && segundos > 0) {
      return segundos * 1000;
    }

    // Intentar interpretar como fecha HTTP
    const fecha = Date.parse(valorRetryAfter);
    if (!Number.isNaN(fecha)) {
      const retrasoDesdeAhora = fecha - Date.now();
      if (retrasoDesdeAhora > 0) {
        return retrasoDesdeAhora;
      }
    }
  }

  // Retroceso exponencial: base * factor^intento
  const retrasoExponencial = retrasoBaseMs * Math.pow(factorExponencial, intento);

  // Jitter aleatorio entre 0 y 500ms
  const jitter = Math.random() * 500;

  return retrasoExponencial + jitter;
}

/**
 * Pausa la ejecucion durante el numero de milisegundos indicado.
 */
function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Ejecuta una funcion asincrona con logica de reintento y retroceso exponencial.
 *
 * @param fn - Funcion asincrona a ejecutar.
 * @param opciones - Opciones parciales de reintento (se fusionan con los valores por defecto).
 * @returns El resultado de la funcion si tiene exito.
 * @throws El ultimo error si se agotan todos los intentos.
 *
 * @example
 * ```ts
 * const resultado = await conReintento(
 *   () => fetch("https://api.anthropic.com/v1/messages", { method: "POST", ... }),
 *   { maxIntentos: 5, enReintento: (i, e, ms) => console.log(`Reintento ${i} en ${ms}ms`) }
 * );
 * ```
 */
export async function conReintento<T>(
  fn: () => Promise<T>,
  opciones?: Partial<OpcionesReintento>,
): Promise<T> {
  const config: OpcionesReintento = {
    ...OPCIONES_POR_DEFECTO,
    ...opciones,
  };

  let ultimoError: Error | undefined;

  for (let intento = 0; intento < config.maxIntentos; intento++) {
    try {
      return await fn();
    } catch (error: unknown) {
      ultimoError = error instanceof Error ? error : new Error(String(error));

      const esUltimoIntento = intento === config.maxIntentos - 1;

      if (esUltimoIntento || !esErrorReintentable(error, config.codigosReintentables)) {
        throw ultimoError;
      }

      const retrasoMs = calcularRetraso(
        intento,
        config.retrasoBaseMs,
        config.factorExponencial,
        error,
      );

      if (config.enReintento) {
        config.enReintento(intento + 1, ultimoError, retrasoMs);
      }

      await esperar(retrasoMs);
    }
  }

  // Este punto no deberia alcanzarse, pero por seguridad de tipos:
  throw ultimoError ?? new Error("conReintento: se agotaron los intentos");
}

/**
 * Envoltorio de conveniencia que realiza una peticion HTTP con `fetch`,
 * valida la respuesta y parsea el JSON, aplicando logica de reintento.
 *
 * @param url - URL del endpoint.
 * @param opciones - Opciones para `fetch` (method, headers, body, etc.).
 * @param opcionesReintento - Opciones parciales de reintento.
 * @returns El cuerpo de la respuesta parseado como JSON de tipo T.
 * @throws ErrorHTTP si la respuesta no es exitosa tras agotar los reintentos.
 *
 * @example
 * ```ts
 * const respuesta = await llamarAPIConReintento<{ id: string }>(
 *   "https://api.openai.com/v1/chat/completions",
 *   {
 *     method: "POST",
 *     headers: { "Authorization": "Bearer sk-...", "Content-Type": "application/json" },
 *     body: JSON.stringify({ model: "gpt-4", messages: [] }),
 *   },
 * );
 * ```
 */
export async function llamarAPIConReintento<T>(
  url: string,
  opciones: RequestInit,
  opcionesReintento?: Partial<OpcionesReintento>,
): Promise<T> {
  return conReintento<T>(async () => {
    const respuesta = await fetch(url, opciones);

    if (!respuesta.ok) {
      const cuerpo = await respuesta.text().catch(() => "Sin cuerpo de respuesta");
      const cabeceraRetryAfter = respuesta.headers.get("retry-after");

      throw new ErrorHTTP(
        `Error HTTP ${respuesta.status}: ${respuesta.statusText} - ${cuerpo}`,
        respuesta.status,
        cabeceraRetryAfter,
      );
    }

    return (await respuesta.json()) as T;
  }, opcionesReintento);
}
