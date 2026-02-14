export interface ControlENS {
  id: string
  nombre: string
  categoria: string
  descripcion: string
  niveles: {
    basica: boolean
    media: boolean
    alta: boolean
  }
}

// Catalogo de controles ENS basado en Anexo II del RD 311/2022
// Organizado por categorias del marco
export const CONTROLES_ENS: ControlENS[] = [
  // Marco Organizativo
  { id: 'org.1', nombre: 'Politica de seguridad', categoria: 'Marco Organizativo', descripcion: 'Documento de politica de seguridad aprobado por la direccion', niveles: { basica: true, media: true, alta: true } },
  { id: 'org.2', nombre: 'Normativa de seguridad', categoria: 'Marco Organizativo', descripcion: 'Conjunto de normas que regulan el uso de los sistemas', niveles: { basica: true, media: true, alta: true } },
  { id: 'org.3', nombre: 'Procedimientos de seguridad', categoria: 'Marco Organizativo', descripcion: 'Procedimientos operativos para la gestion de la seguridad', niveles: { basica: true, media: true, alta: true } },
  { id: 'org.4', nombre: 'Proceso de autorizacion', categoria: 'Marco Organizativo', descripcion: 'Proceso formal de autorizacion de componentes del sistema', niveles: { basica: true, media: true, alta: true } },

  // Marco Operacional - Planificacion
  { id: 'op.pl.1', nombre: 'Analisis de riesgos', categoria: 'Marco Operacional', descripcion: 'Analisis de riesgos sobre los activos de informacion', niveles: { basica: true, media: true, alta: true } },
  { id: 'op.pl.2', nombre: 'Arquitectura de seguridad', categoria: 'Marco Operacional', descripcion: 'Diseno de la arquitectura de seguridad del sistema', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.pl.3', nombre: 'Adquisicion de nuevos componentes', categoria: 'Marco Operacional', descripcion: 'Proceso para la adquisicion de nuevos componentes', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.pl.4', nombre: 'Dimension de seguridad', categoria: 'Marco Operacional', descripcion: 'Dimensionamiento de los recursos de seguridad', niveles: { basica: false, media: false, alta: true } },
  { id: 'op.pl.5', nombre: 'Componentes certificados', categoria: 'Marco Operacional', descripcion: 'Uso de componentes certificados', niveles: { basica: false, media: false, alta: true } },

  // Marco Operacional - Control de acceso
  { id: 'op.acc.1', nombre: 'Identificacion', categoria: 'Marco Operacional', descripcion: 'Identificacion unica de usuarios del sistema', niveles: { basica: true, media: true, alta: true } },
  { id: 'op.acc.2', nombre: 'Requisitos de acceso', categoria: 'Marco Operacional', descripcion: 'Definicion de requisitos de acceso a los recursos', niveles: { basica: true, media: true, alta: true } },
  { id: 'op.acc.3', nombre: 'Segregacion de funciones y tareas', categoria: 'Marco Operacional', descripcion: 'Separacion de funciones incompatibles', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.acc.4', nombre: 'Proceso de gestion de derechos de acceso', categoria: 'Marco Operacional', descripcion: 'Gestion del ciclo de vida de los derechos de acceso', niveles: { basica: true, media: true, alta: true } },
  { id: 'op.acc.5', nombre: 'Mecanismo de autenticacion (usuarios externos)', categoria: 'Marco Operacional', descripcion: 'Mecanismos de autenticacion para usuarios externos', niveles: { basica: true, media: true, alta: true } },
  { id: 'op.acc.6', nombre: 'Mecanismo de autenticacion (usuarios de la organizacion)', categoria: 'Marco Operacional', descripcion: 'Mecanismos de autenticacion para usuarios internos', niveles: { basica: true, media: true, alta: true } },

  // Marco Operacional - Explotacion
  { id: 'op.exp.1', nombre: 'Inventario de activos', categoria: 'Marco Operacional', descripcion: 'Inventario actualizado de activos del sistema', niveles: { basica: true, media: true, alta: true } },
  { id: 'op.exp.2', nombre: 'Configuracion de seguridad', categoria: 'Marco Operacional', descripcion: 'Configuracion segura de los componentes del sistema', niveles: { basica: true, media: true, alta: true } },
  { id: 'op.exp.3', nombre: 'Gestion de la configuracion de seguridad', categoria: 'Marco Operacional', descripcion: 'Proceso de gestion de cambios en la configuracion', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.exp.4', nombre: 'Mantenimiento y actualizaciones de seguridad', categoria: 'Marco Operacional', descripcion: 'Actualizaciones y parches de seguridad', niveles: { basica: true, media: true, alta: true } },
  { id: 'op.exp.5', nombre: 'Gestion de cambios', categoria: 'Marco Operacional', descripcion: 'Proceso de control de cambios', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.exp.6', nombre: 'Proteccion frente a codigo danino', categoria: 'Marco Operacional', descripcion: 'Medidas contra malware y codigo malicioso', niveles: { basica: true, media: true, alta: true } },
  { id: 'op.exp.7', nombre: 'Gestion de incidentes', categoria: 'Marco Operacional', descripcion: 'Proceso de gestion de incidentes de seguridad', niveles: { basica: true, media: true, alta: true } },
  { id: 'op.exp.8', nombre: 'Registro de la actividad', categoria: 'Marco Operacional', descripcion: 'Registro de actividades de los usuarios y administradores', niveles: { basica: true, media: true, alta: true } },
  { id: 'op.exp.9', nombre: 'Registro de la gestion de incidentes', categoria: 'Marco Operacional', descripcion: 'Registro de la gestion de incidentes', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.exp.10', nombre: 'Proteccion de claves criptograficas', categoria: 'Marco Operacional', descripcion: 'Gestion y proteccion de claves criptograficas', niveles: { basica: false, media: true, alta: true } },

  // Marco Operacional - Recursos externos
  { id: 'op.ext.1', nombre: 'Contratacion y acuerdos de nivel de servicio', categoria: 'Marco Operacional', descripcion: 'Requisitos de seguridad en contratos con terceros', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.ext.2', nombre: 'Gestion diaria', categoria: 'Marco Operacional', descripcion: 'Supervision diaria de servicios externos', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.ext.3', nombre: 'Proteccion de la cadena de suministro', categoria: 'Marco Operacional', descripcion: 'Medidas de proteccion de la cadena de suministro', niveles: { basica: false, media: false, alta: true } },
  { id: 'op.ext.4', nombre: 'Interconexion de sistemas', categoria: 'Marco Operacional', descripcion: 'Control de interconexiones con sistemas externos', niveles: { basica: false, media: true, alta: true } },

  // Marco Operacional - Servicios en la nube
  { id: 'op.nub.1', nombre: 'Proteccion de servicios en la nube', categoria: 'Marco Operacional', descripcion: 'Medidas de proteccion para servicios cloud', niveles: { basica: true, media: true, alta: true } },

  // Marco Operacional - Continuidad del servicio
  { id: 'op.cont.1', nombre: 'Analisis de impacto', categoria: 'Marco Operacional', descripcion: 'Analisis de impacto en el negocio', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.cont.2', nombre: 'Plan de continuidad', categoria: 'Marco Operacional', descripcion: 'Plan de continuidad del servicio', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.cont.3', nombre: 'Pruebas periodicas', categoria: 'Marco Operacional', descripcion: 'Pruebas periodicas del plan de continuidad', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.cont.4', nombre: 'Medios alternativos', categoria: 'Marco Operacional', descripcion: 'Disponibilidad de medios alternativos', niveles: { basica: false, media: false, alta: true } },

  // Marco Operacional - Monitorizacion del sistema
  { id: 'op.mon.1', nombre: 'Deteccion de intrusion', categoria: 'Marco Operacional', descripcion: 'Sistemas de deteccion de intrusiones', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.mon.2', nombre: 'Sistema de metricas', categoria: 'Marco Operacional', descripcion: 'Metricas de seguridad del sistema', niveles: { basica: false, media: true, alta: true } },
  { id: 'op.mon.3', nombre: 'Vigilancia', categoria: 'Marco Operacional', descripcion: 'Vigilancia continua de la seguridad', niveles: { basica: false, media: false, alta: true } },

  // Medidas de Proteccion - Proteccion de las instalaciones
  { id: 'mp.if.1', nombre: 'Areas separadas y con control de acceso', categoria: 'Medidas de Proteccion', descripcion: 'Control de acceso fisico a las instalaciones', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.if.2', nombre: 'Identificacion de las personas', categoria: 'Medidas de Proteccion', descripcion: 'Identificacion de personas en las instalaciones', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.if.3', nombre: 'Acondicionamiento de los locales', categoria: 'Medidas de Proteccion', descripcion: 'Condiciones ambientales de las instalaciones', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.if.4', nombre: 'Energia electrica', categoria: 'Medidas de Proteccion', descripcion: 'Proteccion del suministro electrico', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.if.5', nombre: 'Proteccion frente a incendios', categoria: 'Medidas de Proteccion', descripcion: 'Medidas contra incendios', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.if.6', nombre: 'Proteccion frente a inundaciones', categoria: 'Medidas de Proteccion', descripcion: 'Medidas contra inundaciones', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.if.7', nombre: 'Registro de entrada y salida de equipamiento', categoria: 'Medidas de Proteccion', descripcion: 'Control de entrada y salida de equipos', niveles: { basica: false, media: true, alta: true } },

  // Medidas de Proteccion - Gestion del personal
  { id: 'mp.per.1', nombre: 'Caracterizacion del puesto de trabajo', categoria: 'Medidas de Proteccion', descripcion: 'Definicion de requisitos de seguridad por puesto', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.per.2', nombre: 'Deberes y obligaciones', categoria: 'Medidas de Proteccion', descripcion: 'Informacion sobre deberes y obligaciones de seguridad', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.per.3', nombre: 'Concienciacion', categoria: 'Medidas de Proteccion', descripcion: 'Programa de concienciacion en seguridad', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.per.4', nombre: 'Formacion', categoria: 'Medidas de Proteccion', descripcion: 'Programa de formacion en seguridad', niveles: { basica: true, media: true, alta: true } },

  // Medidas de Proteccion - Proteccion de los equipos
  { id: 'mp.eq.1', nombre: 'Puesto de trabajo despejado', categoria: 'Medidas de Proteccion', descripcion: 'Politica de escritorio limpio', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.eq.2', nombre: 'Bloqueo de puesto de trabajo', categoria: 'Medidas de Proteccion', descripcion: 'Bloqueo automatico del puesto de trabajo', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.eq.3', nombre: 'Proteccion de dispositivos portatiles', categoria: 'Medidas de Proteccion', descripcion: 'Medidas de proteccion para dispositivos moviles', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.eq.4', nombre: 'Otros dispositivos conectados a la red', categoria: 'Medidas de Proteccion', descripcion: 'Control de dispositivos conectados', niveles: { basica: false, media: true, alta: true } },

  // Medidas de Proteccion - Proteccion de las comunicaciones
  { id: 'mp.com.1', nombre: 'Perimetro seguro', categoria: 'Medidas de Proteccion', descripcion: 'Definicion de perimetro de seguridad de red', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.com.2', nombre: 'Proteccion de la confidencialidad', categoria: 'Medidas de Proteccion', descripcion: 'Cifrado de comunicaciones', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.com.3', nombre: 'Proteccion de la integridad y de la autenticidad', categoria: 'Medidas de Proteccion', descripcion: 'Integridad y autenticidad de comunicaciones', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.com.4', nombre: 'Segregacion de redes', categoria: 'Medidas de Proteccion', descripcion: 'Segmentacion de la red', niveles: { basica: false, media: true, alta: true } },

  // Medidas de Proteccion - Proteccion de los soportes de informacion
  { id: 'mp.si.1', nombre: 'Etiquetado', categoria: 'Medidas de Proteccion', descripcion: 'Etiquetado de soportes de informacion', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.si.2', nombre: 'Criptografia', categoria: 'Medidas de Proteccion', descripcion: 'Cifrado de soportes de informacion', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.si.3', nombre: 'Custodia', categoria: 'Medidas de Proteccion', descripcion: 'Custodia de soportes de informacion', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.si.4', nombre: 'Transporte', categoria: 'Medidas de Proteccion', descripcion: 'Proteccion en el transporte de soportes', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.si.5', nombre: 'Borrado y destruccion', categoria: 'Medidas de Proteccion', descripcion: 'Borrado y destruccion segura de soportes', niveles: { basica: true, media: true, alta: true } },

  // Medidas de Proteccion - Proteccion de las aplicaciones informaticas
  { id: 'mp.sw.1', nombre: 'Desarrollo de aplicaciones', categoria: 'Medidas de Proteccion', descripcion: 'Desarrollo seguro de aplicaciones', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.sw.2', nombre: 'Aceptacion y puesta en servicio', categoria: 'Medidas de Proteccion', descripcion: 'Proceso de aceptacion de aplicaciones', niveles: { basica: false, media: true, alta: true } },

  // Medidas de Proteccion - Proteccion de la informacion
  { id: 'mp.info.1', nombre: 'Datos de caracter personal', categoria: 'Medidas de Proteccion', descripcion: 'Proteccion de datos personales', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.info.2', nombre: 'Calificacion de la informacion', categoria: 'Medidas de Proteccion', descripcion: 'Clasificacion de la informacion', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.info.3', nombre: 'Firma electronica', categoria: 'Medidas de Proteccion', descripcion: 'Uso de firma electronica', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.info.4', nombre: 'Sellos de tiempo', categoria: 'Medidas de Proteccion', descripcion: 'Uso de sellos de tiempo', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.info.5', nombre: 'Limpieza de documentos', categoria: 'Medidas de Proteccion', descripcion: 'Eliminacion de metadatos en documentos', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.info.6', nombre: 'Copias de seguridad', categoria: 'Medidas de Proteccion', descripcion: 'Politica de copias de seguridad', niveles: { basica: true, media: true, alta: true } },

  // Medidas de Proteccion - Proteccion de los servicios
  { id: 'mp.s.1', nombre: 'Proteccion del correo electronico', categoria: 'Medidas de Proteccion', descripcion: 'Medidas de proteccion del correo', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.s.2', nombre: 'Proteccion de servicios y aplicaciones web', categoria: 'Medidas de Proteccion', descripcion: 'Seguridad web', niveles: { basica: true, media: true, alta: true } },
  { id: 'mp.s.3', nombre: 'Proteccion de la navegacion web', categoria: 'Medidas de Proteccion', descripcion: 'Navegacion web segura', niveles: { basica: false, media: true, alta: true } },
  { id: 'mp.s.4', nombre: 'Proteccion frente a la denegacion de servicio', categoria: 'Medidas de Proteccion', descripcion: 'Medidas anti-DDoS', niveles: { basica: false, media: true, alta: true } },
]

// Agrupar controles por categoria
export function obtenerControlesPorCategoria(): Record<string, ControlENS[]> {
  const agrupados: Record<string, ControlENS[]> = {}
  for (const control of CONTROLES_ENS) {
    if (!agrupados[control.categoria]) {
      agrupados[control.categoria] = []
    }
    agrupados[control.categoria]!.push(control)
  }
  return agrupados
}

// Obtener controles aplicables para una categoria ENS dada
export function obtenerControlesAplicables(categoria: 'BASICA' | 'MEDIA' | 'ALTA'): ControlENS[] {
  const clave = categoria.toLowerCase() as 'basica' | 'media' | 'alta'
  return CONTROLES_ENS.filter((c) => c.niveles[clave])
}
