# Simulacion Completa: Analisis de un Pliego con CumpliENS

## Escenario

Un ayuntamiento licita un pliego tecnico para un "Sistema de Gestion de Expedientes Electronicos".
El analista sube el PDF del pliego (85 paginas) a CumpliENS.

---

## 1. DATOS DE ENTRADA

### Pliego subido
```
Nombre: "Pliego_Tecnico_Expedientes_Electronicos_Ayto_Fuenlabrada_2026.pdf"
Paginas: 85
Tamaño: 2.4 MB
```

---

## 2. REGISTRO EN BD: tabla `analisis`

```json
{
  "id": "a1b2c3d4-5678-9abc-def0-111111111111",
  "organizacion_id": "org-uuid-ayto-fuenlabrada",
  "creado_por": "user-uuid-analista-juan",
  "documento_objetivo_id": "doc-uuid-pliego",
  "estado": "COMPLETADO",
  "porcentaje_progreso": 100,
  "descripcion_paso_actual": "Informe generado correctamente",

  "categoria_ens": "MEDIA",
  "justificacion_categoria": "El pliego establece requisitos de nivel MEDIO para las dimensiones de confidencialidad e integridad. Maneja datos personales de ciudadanos (expedientes administrativos) pero no datos especialmente protegidos. La disponibilidad se clasifica como MEDIA dado que interrupciones afectan tramites administrativos pero no servicios criticos de emergencia.",

  "perfil_sectorial": "administracion_local",
  "proveedores_nube": ["Microsoft Azure", "Microsoft 365"],
  "dimensiones_afectadas": {
    "confidencialidad": "MEDIA",
    "integridad": "MEDIA",
    "disponibilidad": "MEDIA",
    "trazabilidad": "MEDIA",
    "autenticidad": "ALTA"
  },

  "total_hallazgos": 73,
  "cantidad_conforme": 31,
  "cantidad_parcial": 22,
  "cantidad_no_conforme": 15,
  "cantidad_no_aplica": 5,

  "total_requisitos_verificados": 847,
  "total_normas_referenciadas": 68,

  "total_tokens_entrada": 1245000,
  "total_tokens_salida": 312000,
  "total_tokens_embedding": 89000,
  "costo_estimado_usd": 4.37,

  "iniciado_en": "2026-02-12T10:15:00Z",
  "completado_en": "2026-02-12T10:28:43Z"
}
```

---

## 3. FRAGMENTOS DEL PLIEGO: tabla `fragmentos_documento`

Se generan ~180 fragmentos. Ejemplo de 3:

### Fragmento #12
```json
{
  "id": "frag-uuid-012",
  "documento_id": "doc-uuid-pliego",
  "indice_fragmento": 12,
  "contenido": "4.3.2 Control de Acceso\n\nEl sistema debera implementar un mecanismo de autenticacion basado en certificados electronicos y Cl@ve. Los usuarios internos del ayuntamiento accederan mediante certificado de empleado publico o usuario/contraseña con segundo factor de autenticacion (OTP via aplicacion movil). Los ciudadanos accederan mediante Cl@ve PIN, Cl@ve Permanente o certificado electronico reconocido.\n\nSe implementara un sistema de roles con al menos los siguientes perfiles: administrador del sistema, responsable de area, tramitador, consultor y ciudadano. Cada rol tendra permisos granulares sobre las operaciones disponibles.",
  "tipo_fragmento": "SECCION",
  "jerarquia_encabezados": ["4. Requisitos Tecnicos", "4.3 Seguridad", "4.3.2 Control de Acceso"],
  "pagina_inicio": 34,
  "pagina_fin": 35,
  "cantidad_tokens": 412,
  "embedding": [0.0234, -0.0891, ...]
}
```

### Fragmento #45
```json
{
  "indice_fragmento": 45,
  "contenido": "5.2 Requisitos de Disponibilidad\n\nEl sistema debera garantizar una disponibilidad minima del 99.5% medida en horario de atencion (lunes a viernes, 8:00-20:00). Se excluyen las ventanas de mantenimiento programado, que deberan realizarse en horario nocturno (22:00-06:00) con preaviso minimo de 48 horas.\n\nEl sistema debera contar con un plan de contingencia que permita la recuperacion del servicio en un tiempo maximo de 4 horas (RTO) y con una perdida maxima de datos de 1 hora (RPO).",
  "tipo_fragmento": "SECCION",
  "jerarquia_encabezados": ["5. Niveles de Servicio", "5.2 Requisitos de Disponibilidad"],
  "pagina_inicio": 52,
  "pagina_fin": 53,
  "cantidad_tokens": 389
}
```

### Fragmento #78
```json
{
  "indice_fragmento": 78,
  "contenido": "7.1 Proteccion de Datos\n\nEl adjudicatario debera cumplir con el Reglamento General de Proteccion de Datos (RGPD) y la Ley Organica 3/2018. Se firmara un contrato de encargado de tratamiento conforme al articulo 28 del RGPD.\n\nNOTA: No se especifican requisitos de cifrado para datos en reposo ni en transito.",
  "tipo_fragmento": "SECCION",
  "jerarquia_encabezados": ["7. Requisitos Legales", "7.1 Proteccion de Datos"],
  "pagina_inicio": 71,
  "pagina_fin": 71,
  "cantidad_tokens": 287
}
```

---

## 4. FASE 1 - CLASIFICACION: tabla `registro_pipeline`

```json
{
  "paso": "FASE1_CLASIFICACION",
  "estado": "completado",
  "resumen_entrada": {
    "fragmentos_analizados": 15,
    "tokens_contexto": 6200
  },
  "resumen_salida": {
    "categoria_ens": "MEDIA",
    "perfil_sectorial": "administracion_local",
    "proveedores_nube": ["Microsoft Azure", "Microsoft 365"],
    "tipos_sistema": ["gestion_expedientes", "sede_electronica", "archivo_electronico"],
    "normas_prioritarias": [
      "804_medidas_de_implantacion_del_ens.md",
      "CCN-STIC 885A.md",
      "CCN-STIC 885E.md",
      "806_ENS-adecuacion.md",
      "BOE-029_Codigo_de_Administracion_Electronica.md"
    ]
  },
  "duracion_ms": 3200,
  "tokens_usados": { "entrada": 6200, "salida": 1100 }
}
```

---

## 5. FASE 2 - VERIFICACION EXHAUSTIVA: tabla `verificacion_requisitos`

Se verifican 847 requisitos de 68 normas contra los 180 fragmentos del pliego.
Ejemplos de 5 verificaciones representativas:

### Verificacion CONFORME
```json
{
  "id": "ver-uuid-001",
  "analisis_id": "a1b2c3d4-...",
  "requisito_id": "CCN-STIC-804-REQ-042",
  "norma_fuente": "804_medidas_de_implantacion_del_ens.md",
  "control_id": "op.acc.1",
  "nivel_cumplimiento": "CONFORME",
  "evidencia_texto": "El sistema debera implementar un mecanismo de autenticacion basado en certificados electronicos y Cl@ve. Los usuarios internos del ayuntamiento accederan mediante certificado de empleado publico o usuario/contraseña con segundo factor de autenticacion (OTP via aplicacion movil).",
  "explicacion": "El pliego cumple con el requisito op.acc.1 de identificacion y autenticacion. Especifica mecanismos concretos: certificados electronicos, Cl@ve (PIN y Permanente), y doble factor de autenticacion para usuarios internos (OTP). Esto satisface los requisitos de nivel MEDIA del ENS que exige autenticacion robusta mediante al menos dos factores.",
  "confianza": 0.95,
  "ids_fragmentos_fuente": ["frag-uuid-012", "frag-uuid-013"]
}
```

### Verificacion PARCIALMENTE_CONFORME
```json
{
  "requisito_id": "CCN-STIC-804-REQ-089",
  "norma_fuente": "804_medidas_de_implantacion_del_ens.md",
  "control_id": "op.exp.3",
  "nivel_cumplimiento": "PARCIALMENTE_CONFORME",
  "evidencia_texto": "El adjudicatario debera realizar copias de seguridad diarias incrementales y semanales completas. Las copias se almacenaran en una ubicacion geografica distinta al centro de datos principal.",
  "explicacion": "El pliego aborda parcialmente el requisito de gestion de la configuracion (op.exp.3). Especifica politica de copias de seguridad y almacenamiento off-site, pero NO menciona: (1) control de versiones de la configuracion del sistema, (2) procedimiento de restauracion a una configuracion conocida segura, (3) documentacion de la linea base de configuracion. Estos elementos son obligatorios para nivel MEDIA segun la guia CCN-STIC-804 seccion 5.4.3.",
  "confianza": 0.88,
  "ids_fragmentos_fuente": ["frag-uuid-056", "frag-uuid-057"]
}
```

### Verificacion NO_CONFORME (brecha critica)
```json
{
  "requisito_id": "CCN-STIC-804-REQ-112",
  "norma_fuente": "804_medidas_de_implantacion_del_ens.md",
  "control_id": "mp.com.2",
  "nivel_cumplimiento": "NO_CONFORME",
  "evidencia_texto": null,
  "explicacion": "El pliego NO aborda el requisito de proteccion de la confidencialidad de las comunicaciones (mp.com.2). No se encontro ninguna mencion a cifrado de datos en transito, protocolos TLS/SSL, VPN, ni mecanismos de proteccion de las comunicaciones. Para nivel MEDIA, el ENS exige cifrado de las comunicaciones que transporten informacion clasificada. La guia CCN-STIC-804 seccion 7.2.2 requiere especificamente el uso de algoritmos y protocolos aprobados por el CCN para la proteccion de las comunicaciones.",
  "confianza": 0.97,
  "ids_fragmentos_fuente": []
}
```

### Verificacion NO_CONFORME (ausencia de evidencia)
```json
{
  "requisito_id": "CCN-STIC-836-REQ-008",
  "norma_fuente": "CCN_STIC_836_Seguridad en VPN en el marco del ENS.md",
  "control_id": "mp.com.3",
  "nivel_cumplimiento": "NO_CONFORME",
  "evidencia_texto": null,
  "explicacion": "El pliego no menciona requisitos de VPN ni tunelizacion segura. Aunque el sistema opera principalmente en nube (Azure), la guia CCN-STIC-836 seccion 4.1 requiere que las conexiones de administracion remota utilicen VPN con cifrado aprobado. El pliego deberia especificar el uso de VPN para el acceso de administracion al entorno Azure y para las conexiones desde las sedes del ayuntamiento al centro de datos.",
  "confianza": 0.92,
  "ids_fragmentos_fuente": []
}
```

### Verificacion NO_APLICA
```json
{
  "requisito_id": "CCN-STIC-837-REQ-003",
  "norma_fuente": "CCN-STIC-837 ENS - Seguridad en Bluetooth.md",
  "control_id": "mp.com.4",
  "nivel_cumplimiento": "NO_APLICA",
  "evidencia_texto": null,
  "explicacion": "El pliego describe un sistema de gestion de expedientes electronicos basado en web y nube. No se menciona conectividad Bluetooth ni dispositivos que requieran esta tecnologia. Los requisitos de seguridad Bluetooth de la guia CCN-STIC-837 no son aplicables a este sistema.",
  "confianza": 0.99,
  "ids_fragmentos_fuente": []
}
```

---

## 6. HALLAZGOS CONSOLIDADOS: tabla `hallazgos_analisis`

Cada control ENS genera UN hallazgo consolidado. Ejemplo de 3:

### Hallazgo CONFORME
```json
{
  "control_id": "op.acc.1",
  "nombre_control": "Identificacion",
  "categoria_control": "op.acc",
  "nivel_cumplimiento": "CONFORME",
  "resumen_hallazgo": "El pliego especifica mecanismos robustos de identificacion y autenticacion: certificados electronicos, Cl@ve (PIN y Permanente), y doble factor para usuarios internos.",
  "texto_evidencia": "Seccion 4.3.2, paginas 34-35: 'El sistema debera implementar un mecanismo de autenticacion basado en certificados electronicos y Cl@ve...'",
  "descripcion_brecha": null,
  "recomendacion": null,
  "prioridad": null,

  "irac_asunto": "Cumplimiento del control op.acc.1 (Identificacion) del Anexo II del ENS para nivel MEDIA.",
  "irac_regla": "El RD 311/2022 Anexo II, medida op.acc.1, exige que el sistema identifique de forma unica a cada usuario y verifique su identidad antes de conceder acceso. Para nivel MEDIA, se requiere autenticacion de doble factor o certificados electronicos. La guia CCN-STIC-804 seccion 5.1.1 detalla los mecanismos aceptables.",
  "irac_aplicacion": "El pliego (seccion 4.3.2, pag. 34-35) establece: (1) autenticacion por certificado electronico de empleado publico para usuarios internos, (2) autenticacion por Cl@ve PIN/Permanente para ciudadanos, (3) segundo factor OTP para acceso con usuario/contraseña, (4) sistema de roles con 5 perfiles diferenciados. Se verificaron 4 requisitos de la norma CCN-STIC-804 y 2 de la CCN-STIC-885A, todos satisfechos.",
  "irac_conclusion": "CONFORME. El pliego cumple satisfactoriamente con los requisitos de identificacion y autenticacion para nivel MEDIA del ENS.",

  "ids_fragmentos_fuente": ["frag-uuid-012", "frag-uuid-013", "frag-uuid-014"]
}
```

### Hallazgo NO_CONFORME (brecha critica)
```json
{
  "control_id": "mp.com.2",
  "nombre_control": "Proteccion de la confidencialidad",
  "categoria_control": "mp.com",
  "nivel_cumplimiento": "NO_CONFORME",
  "resumen_hallazgo": "El pliego no especifica ningun requisito de cifrado de comunicaciones. No se menciona TLS, SSL, VPN ni ningun protocolo de proteccion de datos en transito.",
  "texto_evidencia": null,
  "descripcion_brecha": "Ausencia total de requisitos de cifrado de comunicaciones. El pliego no aborda: (1) cifrado TLS para conexiones web, (2) cifrado de comunicaciones internas entre componentes, (3) protocolos de cifrado aprobados por el CCN, (4) gestion de certificados digitales para servidores. Esto supone un riesgo CRITICO de interceptacion de datos de ciudadanos en transito.",
  "recomendacion": "Incluir clausula especifica que exija: (a) TLS 1.2 o superior para todas las conexiones web, (b) cifrado de comunicaciones entre componentes del sistema, (c) uso de algoritmos aprobados en la guia CCN-STIC-807, (d) renovacion automatica de certificados. Referencia: CCN-STIC-804 seccion 7.2.2, CCN-STIC-807 seccion 4.3.",
  "prioridad": "CRITICA",

  "irac_asunto": "Cumplimiento del control mp.com.2 (Proteccion de la confidencialidad) del Anexo II del ENS para nivel MEDIA.",
  "irac_regla": "El RD 311/2022 Anexo II, medida mp.com.2, requiere proteger la confidencialidad de la informacion transmitida tanto por la red interna como por redes publicas. Para nivel MEDIA, se exige el uso de redes privadas virtuales o cifrado del canal. La guia CCN-STIC-804 seccion 7.2.2 especifica que deben usarse algoritmos y protocolos aprobados por el CCN (referencia CCN-STIC-807). La guia CCN-STIC-836 detalla requisitos especificos de VPN.",
  "irac_aplicacion": "Se realizo busqueda exhaustiva en los 180 fragmentos del pliego utilizando las palabras clave: 'cifrado', 'TLS', 'SSL', 'VPN', 'protocolo seguro', 'comunicaciones seguras', 'encriptacion', 'HTTPS', 'certificado servidor'. No se encontro evidencia alguna de que el pliego aborde este control. Se verificaron 6 requisitos de CCN-STIC-804, 2 de CCN-STIC-836 y 1 de CCN-STIC-807, ninguno satisfecho.",
  "irac_conclusion": "NO CONFORME. Brecha CRITICA. El pliego carece completamente de requisitos de proteccion de comunicaciones, incumpliendo el control mp.com.2 obligatorio para nivel MEDIA.",

  "ids_fragmentos_fuente": []
}
```

### Hallazgo PARCIALMENTE_CONFORME
```json
{
  "control_id": "op.cont.1",
  "nombre_control": "Analisis de impacto",
  "categoria_control": "op.cont",
  "nivel_cumplimiento": "PARCIALMENTE_CONFORME",
  "resumen_hallazgo": "El pliego define RTO (4h) y RPO (1h) pero no incluye un analisis de impacto en el negocio (BIA) ni identifica procesos criticos del ayuntamiento.",
  "texto_evidencia": "Seccion 5.2, paginas 52-53: 'El sistema debera garantizar una disponibilidad minima del 99.5%... recuperacion del servicio en un tiempo maximo de 4 horas (RTO) y con una perdida maxima de datos de 1 hora (RPO).'",
  "descripcion_brecha": "Se establecen metricas de recuperacion (RTO/RPO) pero faltan: (1) analisis de impacto en el negocio (BIA) que justifique esos valores, (2) identificacion de procesos criticos del ayuntamiento que dependen del sistema, (3) clasificacion de la informacion manejada segun su criticidad, (4) escenarios de desastre considerados.",
  "recomendacion": "Incorporar requisito de elaboracion de un BIA por el adjudicatario en los primeros 30 dias, que incluya: identificacion de procesos criticos municipales, clasificacion de datos, escenarios de fallo, y validacion de que RTO/RPO son adecuados. Referencia: CCN-STIC-804 seccion 6.1, guia 822-Procedimientos seccion 3.2.",
  "prioridad": "ALTA",

  "irac_asunto": "Cumplimiento del control op.cont.1 (Analisis de impacto) del Anexo II del ENS para nivel MEDIA.",
  "irac_regla": "El RD 311/2022 Anexo II, medida op.cont.1, requiere realizar un analisis de impacto que permita determinar los requisitos de disponibilidad de cada servicio, identificar los elementos criticos del sistema, y establecer los objetivos de recuperacion. La guia CCN-STIC-804 seccion 6.1 detalla que el BIA debe incluir procesos criticos, dependencias y umbrales de tolerancia.",
  "irac_aplicacion": "El pliego (seccion 5.2, pag. 52-53) define valores de RTO=4h y RPO=1h, y establece disponibilidad del 99.5%. Sin embargo, no se encontro evidencia de: analisis de impacto previo, identificacion de procesos criticos, clasificacion de informacion, ni justificacion de los valores RTO/RPO. Se verificaron 3 requisitos de CCN-STIC-804 y 2 de 822-Procedimientos: parcialmente satisfechos.",
  "irac_conclusion": "PARCIALMENTE CONFORME. El pliego define metricas de recuperacion pero carece del analisis de impacto subyacente que las justifique y que es obligatorio para nivel MEDIA.",

  "ids_fragmentos_fuente": ["frag-uuid-045", "frag-uuid-046"]
}
```

---

## 7. INFORME GENERADO (HTML)

El informe se genera como HTML con CSS para impresion. Estructura:

```
┌─────────────────────────────────────────────────────────────┐
│                        PORTADA                               │
│                                                              │
│  INFORME DE CUMPLIMIENTO ENS                                │
│  ─────────────────────────                                  │
│  Pliego: Sistema de Gestion de Expedientes Electronicos     │
│  Entidad: Ayuntamiento de Fuenlabrada                       │
│  Fecha: 12 de febrero de 2026                               │
│  Categoria ENS: MEDIA                                       │
│  Perfil: Administracion Local                               │
│                                                              │
│  Generado por CumpliENS v1.0                                │
│  Normas verificadas: 68 de 121                              │
│  Requisitos evaluados: 847                                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   RESUMEN EJECUTIVO                          │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ CONFORME │ │ PARCIAL  │ │NO CONFORME│ │NO APLICA │       │
│  │    31    │ │    22    │ │    15     │ │    5     │       │
│  │   42%    │ │   30%    │ │   21%     │ │    7%    │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
│                                                              │
│  BRECHAS CRITICAS (requieren accion inmediata):             │
│  ● mp.com.2 - Proteccion confidencialidad comunicaciones    │
│  ● mp.si.2  - Cifrado de informacion en reposo             │
│  ● mp.info.3 - Firma electronica                           │
│                                                              │
│  BRECHAS ALTAS (requieren inclusion en pliego):             │
│  ● op.cont.1 - Analisis de impacto incompleto              │
│  ● op.exp.8  - Registro de actividad insuficiente          │
│  ● mp.per.2  - Formacion en seguridad no especificada      │
│  ● op.mon.1  - Deteccion de intrusiones ausente            │
│  ● ... (8 mas)                                              │
│                                                              │
│  COSTE DEL ANALISIS: $4.37 USD                              │
│  DURACION: 13 minutos 43 segundos                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              MATRIZ DE COBERTURA DE NORMAS                   │
│                                                              │
│  De las 121 normas del repositorio, 68 fueron relevantes    │
│  para este pliego (perfil: admin local, nivel MEDIA, Azure) │
│                                                              │
│  ┌─────────────────────────────────────┐                    │
│  │ Norma                   │ Requisitos│ Estado  │          │
│  │─────────────────────────│───────────│─────────│          │
│  │ CCN-STIC-804            │    89     │ Aplicada│          │
│  │ CCN-STIC-885A (O365)    │    67     │ Aplicada│          │
│  │ CCN-STIC-885E (Azure)   │    54     │ Aplicada│          │
│  │ RD 311/2022             │    73     │ Aplicada│          │
│  │ 802-Auditoria_ENS       │    42     │ Aplicada│          │
│  │ 806_ENS-adecuacion      │    38     │ Aplicada│          │
│  │ BOE-029 Admin Electr.   │    31     │ Aplicada│          │
│  │ 822-Procedimientos      │    28     │ Aplicada│          │
│  │ ... (60 normas mas)     │   ...     │ ...     │          │
│  │─────────────────────────│───────────│─────────│          │
│  │ TOTAL                   │   847     │ 68/121  │          │
│  └─────────────────────────────────────┘                    │
│                                                              │
│  53 normas no aplicables: perfiles Oracle, AWS, Google,     │
│  Bluetooth, VPN dedicada, sector salud, etc.                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│         HALLAZGOS POR CONTROL (73 secciones)                │
│                                                              │
│  ═══════════════════════════════════════════                 │
│  MARCO ORGANIZATIVO (org)                                   │
│  ═══════════════════════════════════════════                 │
│                                                              │
│  ┌─ org.1 - Politica de seguridad ──────── CONFORME ────┐  │
│  │ El pliego (clausula 3.1, pag. 12) exige que el       │  │
│  │ adjudicatario cumpla con la politica de seguridad     │  │
│  │ del ayuntamiento y el ENS.                            │  │
│  │                                                       │  │
│  │ Normas verificadas: CCN-STIC-804 (3 req),            │  │
│  │                     805-ENS_politica (5 req),         │  │
│  │                     RD 311/2022 (2 req)               │  │
│  │ Confianza media: 0.91                                 │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─ org.2 - Normativa de seguridad ─── PARCIAL ────────┐  │
│  │ ASUNTO: Cumplimiento del control org.2 del ENS.      │  │
│  │                                                       │  │
│  │ REGLA: El RD 311/2022 requiere un cuerpo normativo   │  │
│  │ que incluya directrices de estructuracion de la       │  │
│  │ documentacion de seguridad, politica de acceso,       │  │
│  │ politica de uso aceptable, etc.                       │  │
│  │                                                       │  │
│  │ APLICACION: El pliego exige cumplimiento del ENS      │  │
│  │ (clausula 3.1) pero NO detalla los documentos         │  │
│  │ normativos especificos que debe producir el           │  │
│  │ adjudicatario. Falta: politica de uso aceptable,      │  │
│  │ normativa de clasificacion de informacion.            │  │
│  │                                                       │  │
│  │ CONCLUSION: PARCIALMENTE CONFORME. Referencia          │  │
│  │ generica al ENS pero sin despliegue normativo         │  │
│  │ especifico.                                           │  │
│  │                                                       │  │
│  │ BRECHA: Falta exigir documentos normativos            │  │
│  │ RECOMENDACION: Incluir entregable de politica de      │  │
│  │ uso aceptable, clasificacion de informacion y         │  │
│  │ procedimientos operativos.                            │  │
│  │ PRIORIDAD: MEDIA                                      │  │
│  │ Normas: CCN-STIC-804 sec. 3.2, 805-ENS_politica      │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  ... (71 controles mas con el mismo formato IRAC) ...       │
│                                                              │
│  ═══════════════════════════════════════════                 │
│  MEDIDAS DE PROTECCION - COMUNICACIONES (mp.com)            │
│  ═══════════════════════════════════════════                 │
│                                                              │
│  ┌─ mp.com.2 - Proteccion confidencialidad ─ NO CONFORME┐  │
│  │                     ⚠ PRIORIDAD CRITICA ⚠              │  │
│  │                                                       │  │
│  │ ASUNTO: El pliego carece completamente de requisitos  │  │
│  │ de cifrado de comunicaciones.                         │  │
│  │                                                       │  │
│  │ REGLA: RD 311/2022 Anexo II mp.com.2 exige...        │  │
│  │ (ver hallazgo completo arriba)                        │  │
│  │                                                       │  │
│  │ APLICACION: Busqueda exhaustiva sin resultados.       │  │
│  │ Palabras clave: cifrado, TLS, SSL, VPN, HTTPS...     │  │
│  │ 0 de 180 fragmentos contienen evidencia.              │  │
│  │                                                       │  │
│  │ CONCLUSION: NO CONFORME. Brecha CRITICA.              │  │
│  │                                                       │  │
│  │ RECOMENDACION: Incluir clausula que exija TLS 1.2+,   │  │
│  │ cifrado entre componentes, algoritmos CCN-STIC-807.   │  │
│  │                                                       │  │
│  │ Normas: CCN-STIC-804 (6 req), CCN-STIC-836 (2 req), │  │
│  │         CCN-STIC-807 (1 req)                          │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              ANEXO A: RESUMEN DE BRECHAS                    │
│                                                              │
│  #  │ Control   │ Nivel       │ Prioridad │ Norma principal │
│  ───│───────────│─────────────│───────────│─────────────────│
│  1  │ mp.com.2  │ NO_CONFORME │ CRITICA   │ CCN-STIC-804   │
│  2  │ mp.si.2   │ NO_CONFORME │ CRITICA   │ CCN-STIC-804   │
│  3  │ mp.info.3 │ NO_CONFORME │ CRITICA   │ CCN-STIC-804   │
│  4  │ op.cont.1 │ PARCIAL     │ ALTA      │ CCN-STIC-804   │
│  5  │ op.exp.8  │ NO_CONFORME │ ALTA      │ CCN-STIC-831   │
│  6  │ mp.per.2  │ NO_CONFORME │ ALTA      │ 801_ENS-resp   │
│  ... │ ...      │ ...         │ ...       │ ...             │
│  37 │ op.exp.3  │ PARCIAL     │ BAJA      │ CCN-STIC-804   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│           ANEXO B: NORMAS PROCESADAS (121)                  │
│                                                              │
│  Estado: ✓ = Aplicada al analisis, ○ = No aplicable         │
│                                                              │
│  ✓ 800-Glosario_de_terminos_ENS.md (12 requisitos)         │
│  ✓ 801_ENS-responsabilidades.md (18 requisitos)             │
│  ✓ 802-Auditoria_ENS.md (42 requisitos)                    │
│  ✓ 804_medidas_de_implantacion_del_ens.md (89 requisitos)   │
│  ✓ 806_ENS-adecuacion.md (38 requisitos)                   │
│  ...                                                         │
│  ✓ CCN-STIC-885A - Office 365 (67 requisitos)              │
│  ✓ CCN-STIC-885E - Azure (54 requisitos)                   │
│  ○ CCN-STIC-884A - Azure Config (no aplicable: nivel ALTA)  │
│  ○ CCN-STIC-889D - Oracle OCI (no aplicable: otro proveedor)│
│  ○ CCN-STIC-891 - Salud (no aplicable: otro sector)        │
│  ...                                                         │
│  ✓ BOE-029 Admin Electronica (31 requisitos)                │
│  ✓ RD 311/2022 (73 requisitos)                              │
│  ...                                                         │
│  Total: 68 aplicadas, 53 no aplicables                      │
│  Requisitos verificados: 847                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    NOTA METODOLOGICA                         │
│                                                              │
│  Este informe ha sido generado automaticamente por           │
│  CumpliENS v1.0 utilizando inteligencia artificial.         │
│                                                              │
│  Metodologia: IRAC (Issue, Rule, Application, Conclusion)   │
│  Motor de IA: Claude Sonnet 4.5 (Anthropic)                │
│  Embeddings: text-embedding-3-small (OpenAI)                │
│  Normas base: 121 guias CCN-STIC/BOE/RD procesadas         │
│  Requisitos en BD: ~3,500 requisitos auditables             │
│                                                              │
│  Coste del analisis: $4.37 USD                              │
│  Tokens procesados: 1,646,000                               │
│  Duracion: 13 min 43 seg                                    │
│                                                              │
│  AVISO: Este informe es una herramienta de apoyo al         │
│  analisis. Los resultados deben ser revisados por un        │
│  profesional cualificado en seguridad de la informacion     │
│  y cumplimiento normativo del ENS.                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. RESUMEN DE COSTES Y TIEMPOS

### Coste unico (ingesta de 121 normas)
| Concepto | Tokens | Coste |
|----------|--------|-------|
| Limpieza (regex) | 0 | $0.00 |
| Clasificacion (121 x ~2K tokens) | ~242K | ~$0.73 |
| Extraccion requisitos (~9.5M tokens input) | ~9.5M | ~$28.50 |
| Embeddings (~3,500 requisitos) | ~350K | ~$0.01 |
| **TOTAL UNICO** | | **~$29.24** |

### Coste por analisis de pliego
| Concepto | Tokens | Coste |
|----------|--------|-------|
| Procesamiento PDF (cliente) | 0 | $0.00 |
| Embeddings pliego (~180 chunks) | ~81K | ~$0.003 |
| Fase 1 clasificacion | ~7K | ~$0.14 |
| Fase 2 verificacion (847 req / 10 por lote) | ~1.2M | ~$3.60 |
| Fase 3 re-evaluacion (~15 hallazgos) | ~50K | ~$0.15 |
| Fase 4 generacion informe | ~20K | ~$0.06 |
| **TOTAL POR ANALISIS** | ~1.36M | **~$3.96** |

Con prompt caching de Anthropic: **~$2.80** por analisis.
