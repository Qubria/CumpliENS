---
**Author:** CCN
**CreationDate:** D:20240723130745+02'00'
**ModDate:** D:20240723130745+02'00'
---

<!-- Página 1 de 109 -->

Guía de Seguridad de las TIC
CCN-STIC 885E
Guía de configuración segura para Microsoft Defender for
Endpoint
JUNIO 2024

![Imagen 1 - Página 1](CCN-STIC 885E_assets\pagina1_img1.jpeg)

![Imagen 2 - Página 1](CCN-STIC 885E_assets\pagina1_img2.png)

![Imagen 3 - Página 1](CCN-STIC 885E_assets\pagina1_img3.jpeg)

---

<!-- Página 2 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Catálogo de Publicaciones de la Administración General del Estado
https://cpage.mpr.gob.es
e
.
b
o
g
.
r
p
m
.
e
g
a
p
c
Edita:
s
Pº de la Castellana 109, 28046 Madrid
 Centro Criptológico Nacional, 2024
NIPO: 083-24-249-4
Fecha de Edición: junio de 2024
LIMITACIÓN DE RESPONSABILIDAD
El presente documento se proporciona de acuerdo con los términos en él recogidos, rechazando
expresamente cualquier tipo de garantía implícita que se pueda encontrar relacionada. En ningún caso, el
Centro Criptológico Nacional puede ser considerado responsable del daño directo, indirecto, fortuito o
extraordinario derivado de la utilización de la información y software que se indican incluso cuando se
advierta de tal posibilidad.
AVISO LEGAL
Quedan rigurosamente prohibidas, sin la autorización escrita del Centro Criptológico Nacional, bajo las
sanciones establecidas en las leyes, la reproducción parcial o total de este documento por cualquier medio
o procedimiento, comprendidos la reprografía y el tratamiento informático, y la distribución de
ejemplares del mismo mediante alquiler o préstamo públicos.
Centro Criptológico Nacional 2

![Imagen 1 - Página 2](CCN-STIC 885E_assets\pagina2_img1.png)

![Imagen 2 - Página 2](CCN-STIC 885E_assets\pagina2_img2.png)

![Imagen 3 - Página 2](CCN-STIC 885E_assets\pagina2_img3.png)

![Imagen 4 - Página 2](CCN-STIC 885E_assets\pagina2_img4.png)

![Imagen 5 - Página 2](CCN-STIC 885E_assets\pagina2_img5.jpeg)

![Imagen 6 - Página 2](CCN-STIC 885E_assets\pagina2_img6.png)

![Imagen 7 - Página 2](CCN-STIC 885E_assets\pagina2_img7.png)

---

<!-- Página 3 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
ÍNDICE
1. MICROSOFT DEFENDER FOR ENDPOINT ..................................................... 6
1.1 DESCRIPCIÓN DEL USO DE ESTA GUÍA ........................................................... 6
1.2 DEFINICIÓN DE LA SOLUCIÓN ........................................................................ 6
1.3 PROTECCIÓN DEL PUESTO DE TRABAJO ........................................................ 7
1.3.1 INTEGRACIÓN CON MICROSOFT SENTINEL ............................................... 8
1.3.2 INTEGRACIÓN CON MICROSOFT INTUNE .................................................. 9
1.4 FUNCIONALIDADES DEL PORTAL ................................................................... 9
1.4.1 INVESTIGAR INCIDENTES Y RESPONDER A AMENAZAS ........................... 10
1.4.2 BUSCAR AMENAZAS DE MANERA PROACTIVA ........................................ 11
1.4.3 REALIZAR UN SEGUIMIENTO Y RESPONDER A LAS AMENAZAS
EMERGENTES ............................................................................................................... 12
1.4.4 SUPERVISAR LAS ACCIONES Y EL ESTADO DE INVESTIGACIÓN ............... 13
1.4.5 PROTECCIÓN DEFENDER FOR ENDPOINT ................................................ 15
1.5 COMPARATIVA DE PORTALES ...................................................................... 17
1.6 POSIBILIDAD DEL USO DEL PORTAL ANTERIOR AL ACTUAL ........................ 18
1.7 PRERREQUISITOS MICROSOFT DEFENDER FOR ENDPOINT ......................... 18
1.7.1 REQUERIMIENTO DE LICENCIAS .............................................................. 19
1.7.2 REQUISITOS DE LOS EXPLORADORES ...................................................... 20
1.7.3 REQUISITOS DE HARDWARE Y SOFTWARE .............................................. 20
1.7.4 REQUISITOS DE CONFIGURACIÓN Y ALMACENAMIENTO DE DATOS Y RED
21
1.7.5 CONFIGURACIÓN DE DATOS DE DIAGNÓSTICO ...................................... 22
1.7.6 CONECTIVIDAD A INTERNET .................................................................... 22
1.7.7 REQUERIMIENTO DE CONFIGURACIÓN DEL MICROSOFT DEFENDER ..... 23
1.8 PRERREQUISITOS ACTUACIONES MEDIANTE POWERSHELL ....................... 23
2. DESPLIEGUE DE MICROSOFT DEFENDER FOR ENDPOINT ........................... 23
2.1 CONFIGURACIÓN Y REQUISITOS .................................................................. 24
2.1.1 VALIDACIÓN DE LICENCIA ........................................................................ 24
2.1.2 CONFIGURACIÓN DE INQUILINO ............................................................. 25
2.1.3 UBICACIÓN DEL CENTRO DE DATOS ........................................................ 26
2.1.4 CONFIGURACIÓN DE RED ........................................................................ 26
2.2 ASIGNACIONES DE FUNCIONES Y ROLES ..................................................... 26
Centro Criptológico Nacional 3

![Imagen 1 - Página 3](CCN-STIC 885E_assets\pagina3_img1.png)

![Imagen 2 - Página 3](CCN-STIC 885E_assets\pagina3_img2.png)

![Imagen 3 - Página 3](CCN-STIC 885E_assets\pagina3_img3.png)

![Imagen 4 - Página 3](CCN-STIC 885E_assets\pagina3_img4.png)

---

<!-- Página 4 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
2.2.1 CONTROL DE ACCESO BASADO EN ROLES (RBAC) ................................... 26
2.3 IDENTIFICAR LA ARQUITECTURA Y MÉTODO DE IMPLEMENTACIÓN ......... 26
2.3.1 IDENTIFICACIÓN DE LA ARQUITECTURA .................................................. 26
2.3.2 SELECCIONAR MÉTODO DE IMPLEMENTACIÓN ...................................... 31
2.4 INCORPORACIÓN DE DISPOSITIVOS EN MICROSOFT DEFENDER FOR
ENDPOINT 32
2.5 CONFIGURAR LAS FUNCIONALIDADES ........................................................ 32
2.5.1 EDR (ENDPOINT DETECTION AND REPONSE) .......................................... 32
2.5.2 DEFENDER VULNERABILITY MANAGEMENT ............................................ 32
2.5.3 PROTECCIÓN DE ÚLTIMA GENERACIÓN .................................................. 33
2.5.4 REDUCCIÓN DE LA SUPERFICIE EXPUESTA A ATAQUES .......................... 34
2.5.5 CAPACIDADES DE INVESTIGACIÓN Y REMEDIACIÓN AUTOMÁTICA
(AIR) 35
2.5.6 MICROSOFT DEFENDER EXPERTS FOR HUNTING .................................... 35
2.6 FASES DE IMPLEMENTACIÓN ...................................................................... 35
2.6.1 PREPARACIÓN .......................................................................................... 35
2.6.2 CONFIGURACIÓN ..................................................................................... 39
2.6.3 INCORPORACIÓN (ONBOARD) ................................................................. 40
2.7 DESPLIEGUE PASO A PASO CON SCRIPTING LOCAL ..................................... 41
2.7.1 SCRIPT LOCAL PARA WINDOWS 10/11 .................................................... 41
2.7.2 INVENTARIO DE DISPOSITIVOS AGREGADOS .......................................... 45
3. CONFIGURACIÓN SEGURA PARA MICROSOFT DEFENDER FOR ENDPOINT . 46
3.1 MARCO OPERACIONAL ................................................................................ 46
3.1.1 CONTROL DE ACCESO .............................................................................. 46
3.1.2 EXPLOTACIÓN .......................................................................................... 54
3.1.3 MONITORIZACIÓN DEL SISTEMA ............................................................. 67
3.2 MEDIDAS DE PROTECCIÓN .......................................................................... 70
3.2.1 PROTECCIÓN DE LOS EQUIPOS ................................................................ 70
3.2.2 PROTECCIÓN DE LOS SOPORTES DE INFORMACIÓN ............................... 70
3.2.3 PROTECCIÓN DE LA INFORMACIÓN ........................................................ 71
3.2.4 PROTECCIÓN DE LOS SERVICIOS .............................................................. 72
4. OTRAS CONSIDERACIONES DE SEGURIDAD .............................................. 80
Centro Criptológico Nacional 4

![Imagen 1 - Página 4](CCN-STIC 885E_assets\pagina4_img1.png)

![Imagen 2 - Página 4](CCN-STIC 885E_assets\pagina4_img2.png)

![Imagen 3 - Página 4](CCN-STIC 885E_assets\pagina4_img3.png)

![Imagen 4 - Página 4](CCN-STIC 885E_assets\pagina4_img4.png)

---

<!-- Página 5 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
4.1 CONFIGURACIÓN DE PARÁMETROS EN EL CENTRO DE SEGURIDAD DE
MICROSOFT DEFENDER ................................................................................................. 80
4.1.1 CONFIGURACIÓN GENERAL ..................................................................... 80
4.1.2 PERMISOS ................................................................................................ 85
4.1.3 API ............................................................................................................ 86
4.1.4 REGLAS ..................................................................................................... 87
4.1.5 ADMINISTRACIÓN DE LA CONFIGURACIÓN ............................................ 92
4.1.6 ADMINISTRACIÓN DE DISPOSITIVOS ....................................................... 93
4.1.7 EVALUACIONES DE RED ........................................................................... 94
5. GLOSARIO Y ABREVIATURAS .................................................................... 96
6. CUADRO RESUMEN DE MEDIDAS DE SEGURIDAD ..................................... 99
Centro Criptológico Nacional 5

![Imagen 1 - Página 5](CCN-STIC 885E_assets\pagina5_img1.png)

![Imagen 2 - Página 5](CCN-STIC 885E_assets\pagina5_img2.png)

![Imagen 3 - Página 5](CCN-STIC 885E_assets\pagina5_img3.png)

![Imagen 4 - Página 5](CCN-STIC 885E_assets\pagina5_img4.png)

---

<!-- Página 6 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
1. MICROSOFT DEFENDER FOR ENDPOINT
1.1 DESCRIPCIÓN DEL USO DE ESTA GUÍA
El objetivo de la presente guía es indicar los pasos a seguir para la configuración de
Guía de configuración segura para Microsoft Defender for Endpoint cumpliendo con los
requisitos Esquema Nacional de Seguridad.
1.2 DEFINICIÓN DE LA SOLUCIÓN
Microsoft Defender for Endpoint forma parte de la suite de seguridad integrada
Microsoft Defender XDR (anteriormente Microsoft 365 Defender).
Microsoft Defender for Endpoint es una plataforma de seguridad de extremo de
empresa diseñada para ayudar a las redes empresariales a prevenir, detectar, investigar
y responder a amenazas avanzadas.
Centro Criptológico Nacional 6

|  | es una plataforma de seguridad de extremo de |
| --- | --- |
| empresa diseñada para ayudar a las redes empresariales a prevenir, detectar, investigar |  |
| y responder a amenazas avanzadas. |  |


![Imagen 1 - Página 6](CCN-STIC 885E_assets\pagina6_img1.png)

![Imagen 2 - Página 6](CCN-STIC 885E_assets\pagina6_img2.jpeg)

![Imagen 3 - Página 6](CCN-STIC 885E_assets\pagina6_img3.png)

![Imagen 4 - Página 6](CCN-STIC 885E_assets\pagina6_img4.png)

![Imagen 5 - Página 6](CCN-STIC 885E_assets\pagina6_img5.png)

![Imagen 6 - Página 6](CCN-STIC 885E_assets\pagina6_img6.png)

---

<!-- Página 7 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Defender for Endpoint utiliza una combinación de tecnología integrada en Windows
10 y el servicio en la nube de Microsoft:
 Sensores de comportamiento de extremo: incrustados en Windows 10, estos
sensores recopilan y procesan señales de comportamiento del sistema operativo
y envían estos datos del sensor a la instancia privada en la nube de Microsoft
Defender for Endpoint.
 Análisis de seguridad en la nube: Al aprovechar los macrodatos (big-data), el
aprendizaje de dispositivos y la óptica exclusiva de Microsoft en todo el
ecosistema de Windows, los productos empresariales en la nube (como Office
365) y los activos en línea, las señales de comportamiento se traducen en
conocimientos, detecciones y respuestas recomendadas a amenazas avanzadas.
 Inteligencia de amenazas: generada por los hunters de Microsoft (equipo de
buscadores expertos en amenazas cibernéticas de Microsoft), equipos de
seguridad y enriquecida por la inteligencia de amenazas proporcionada por otros
partners, la inteligencia de amenazas permite a Defender for Endpoint identificar
herramientas, técnicas y procedimientos de atacantes y generar alertas cuando
se observan en datos de sensor recopilados.
Nota: Microsoft Defender XDR se conocía antes como Microsoft Threat Protection o MTP.
Microsoft Defender for Endpoint se conocía antes como Protección contra amenazas avanzada
de Microsoft Defender o MDATP.
Es posible ver los nombres antiguos en la documentación de Microsoft que todavía estarán en
uso durante un tiempo.
1.3 PROTECCIÓN DEL PUESTO DE TRABAJO
Microsoft Defender XDR, (anteriormente conocido como Microsoft Defender), es un
conjunto de defensa empresarial unificado previo y posterior a la vulneración.
Este sistema coordina de forma nativa la detección, prevención, investigación y
respuesta entre puntos de conexión, identidades, correo electrónico y aplicaciones para
proporcionar protección integrada contra ataques sofisticados.
Con la solución Microsoft Defender XDR integrada, los profesionales de seguridad
pueden unir las señales de amenaza que cada uno de estos productos recibe y
determinar el alcance completo y el impacto de la amenaza; cómo entró en el entorno,
lo que está afectado y cómo está afectando actualmente a la organización. Microsoft
Defender XDR realiza acciones automáticas para evitar o detener el ataque y auto sanar
los buzones, cargas de trabajo, puntos de conexión e identidades de usuario afectados.
El conjunto de aplicaciones de Microsoft Defender XDR protege:
 Puntos de Conexión con Microsoft Defender for Endpoint: Microsoft Defender
for Endpoint es una plataforma de extremo unificada para la protección
preventiva, la detección posterior a la infracción, la investigación automatizada
y la respuesta.
Centro Criptológico Nacional 7

| Nota: Microsoft Defender XDR se conocía antes como Microsoft Threat Protection o MTP. |
| --- |
| Microsoft Defender for Endpoint se conocía antes como Protección contra amenazas avanzada |
| de Microsoft Defender o MDATP. |
| Es posible ver los nombres antiguos en la documentación de Microsoft que todavía estarán en |
| uso durante un tiempo. |


![Imagen 1 - Página 7](CCN-STIC 885E_assets\pagina7_img1.png)

![Imagen 2 - Página 7](CCN-STIC 885E_assets\pagina7_img2.png)

![Imagen 3 - Página 7](CCN-STIC 885E_assets\pagina7_img3.png)

![Imagen 4 - Página 7](CCN-STIC 885E_assets\pagina7_img4.png)

---

<!-- Página 8 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
 Correo electrónico y colaboración con Microsoft Defender XDR for Office 365:
Defender for Office 365 protege la organización contra las amenazas
malintencionadas que suponen los mensajes de correo electrónico, los vínculos
(URL) y las herramientas de colaboración.
 Identidades con Defender for Identity y Protección de Microsoft Entra ID:
Microsoft Defender for Identity es una solución de seguridad basada en la nube
que aprovecha las señales del Active Directory local, para identificar, detectar e
investigar amenazas avanzadas, identidades en peligro y acciones internas
malintencionadas dirigidas a su organización. Protección de Microsoft Entra ID
ayuda a las organizaciones a detectar, investigar y corregir los riesgos
relacionados con las identidades, que pueden ser utilizados posteriormente en
herramientas como Acceso condicional para tomar decisiones de acceso o
alimentar una herramienta de administración de eventos e información de
seguridad (SIEM) para realizar una investigación más detallada.
 Aplicaciones con seguridad de Microsoft Cloud App: la seguridad de Microsoft
Cloud App es una solución completa entre SaaS que ofrece una visibilidad
profunda, controles de datos sólidos y una protección contra amenazas
mejorada para las aplicaciones en la nube.
 Administración de vulnerabilidades ofrece visibilidad continua de los recursos,
evaluaciones inteligentes basadas en riesgos y herramientas de corrección
integradas para ayudar a los equipos de TI y seguridad a priorizar y abordar
vulnerabilidades críticas y configuraciones incorrectas en toda la organización.
Microsoft Sentinel como SIEM/SOAR, es una plataforma de administración de
eventos e información de seguridad (SIEM) nativa de la nube que utiliza IA integrada
para ayudar a analizar grandes volúmenes de datos en toda una empresa, rápidamente.
Microsoft Sentinel agrega datos de todas las fuentes, incluidos usuarios, aplicaciones,
servidores y dispositivos que se ejecutan en la infraestructura local o en cualquier nube,
lo que te permite razonar sobre millones de registros en unos segundos, permitiendo
crear construir playbooks para dar una respuesta efectiva e inmediata.
1.3.1 INTEGRACIÓN CON MICROSOFT SENTINEL
A través del centro de contenido (Content hub), Microsoft Sentinel genera la
integración con Microsoft Defender XDR (M365XDR) permitiendo transmitir todos los
incidentes y alertas de M365XDR a Microsoft Sentinel y manteniendo todos los
incidentes sincronizados entre ambos portales. Los incidentes de M365XDR incluyen
todas sus alertas, entidades y otra información relevante de todos los servicios que lo
componen.
Centro Criptológico Nacional 8

![Imagen 1 - Página 8](CCN-STIC 885E_assets\pagina8_img1.png)

![Imagen 2 - Página 8](CCN-STIC 885E_assets\pagina8_img2.png)

![Imagen 3 - Página 8](CCN-STIC 885E_assets\pagina8_img3.png)

![Imagen 4 - Página 8](CCN-STIC 885E_assets\pagina8_img4.png)

---

<!-- Página 9 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Nota: Más información en la guía [CCN-STIC-884E - Guía de configuración segura para Microsoft
Sentinel].
1.3.2 INTEGRACIÓN CON MICROSOFT INTUNE
Con Microsoft Defender XDR para punto de conexión, se pueden usar directivas de
seguridad de punto de conexión desde Microsoft Intune para configurar la seguridad de
Defender en los dispositivos que se han incorporado a Defender sin inscribirlos con
Intune.
Esta integración brinda las siguientes funcionalidades:
 Con el Centro de administración de Intune o el portal de Defender 365, se
pueden crear y asignar directivas de seguridad para Defender para punto de
conexión con grupos de Entra ID.
 Los dispositivos reciben las directivas configuradas según su identificador de
objeto de dispositivo Entra.
 Los objetos de dispositivo Entra ID determinan las directivas asignadas a los
dispositivos.
Para más información sobre como integrar las herramientas revisar el punto [4.1.5.1
Administracion de configuración de la seguridad.]
Nota: Para más información sobre como integrar las herramientas desde la parte de Microsoft
Intune, en la guía [CCN-STIC-884F - Guía de configuración segura para Microsoft Intune].
1.4 FUNCIONALIDADES DEL PORTAL
El acceso a las funcionalidades de Microsoft Defender XDR for Office 365 se realiza
desde el portal mejorado de seguridad de Microsoft Defender XDR, accediendo a la
siguiente URL: https://security.microsoft.com/
Centro Criptológico Nacional 9

| Nota: Más información en la guía [CCN-STIC-884E - Guía de configuración segura para Microsoft |
| --- |
| Sentinel]. |


| Con el Centro de administración de Intune o el portal de Defender 365, se |
| --- |
| pueden crear y asignar directivas de seguridad para Defender para punto de |
| conexión con grupos de Entra ID. |
| Los dispositivos reciben las directivas configuradas según su identificador de |
| objeto de dispositivo Entra. |
| Los objetos de dispositivo Entra ID determinan las directivas asignadas a los |
| dispositivos. |


| Nota: Para más información sobre como integrar las herramientas desde la parte de Microsoft |
| --- |
| Intune, en la guía [CCN-STIC-884F - Guía de configuración segura para Microsoft Intune]. |


![Imagen 1 - Página 9](CCN-STIC 885E_assets\pagina9_img1.png)

![Imagen 2 - Página 9](CCN-STIC 885E_assets\pagina9_img2.png)

![Imagen 3 - Página 9](CCN-STIC 885E_assets\pagina9_img3.png)

![Imagen 4 - Página 9](CCN-STIC 885E_assets\pagina9_img4.png)

![Imagen 5 - Página 9](CCN-STIC 885E_assets\pagina9_img5.png)

---

<!-- Página 10 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
El nuevo portal de Microsoft Defender XDR, reúne las funcionalidades que solían estar
en portales independientes en un solo lugar, de modo que pueda protegerse de una
manera más sencilla y centralizada de cualquier tipo de amenaza.
Desde un punto de vista genérico, en este portal puede realizarse distintas acciones
relacionadas con la defensa empresarial (detección, prevención, investigación y
respuesta entre endpoints, identidades, correo electrónico, cargas de trabajo y
aplicaciones) e integrase con Microsoft Sentinel.
1.4.1 INVESTIGAR INCIDENTES Y RESPONDER A AMENAZAS
Las alertas están categorizadas, combinadas y correlacionadas en incidentes
completos.
Centro Criptológico Nacional 10

![Imagen 1 - Página 10](CCN-STIC 885E_assets\pagina10_img1.png)

![Imagen 2 - Página 10](CCN-STIC 885E_assets\pagina10_img2.png)

![Imagen 3 - Página 10](CCN-STIC 885E_assets\pagina10_img3.jpeg)

![Imagen 4 - Página 10](CCN-STIC 885E_assets\pagina10_img4.png)

![Imagen 5 - Página 10](CCN-STIC 885E_assets\pagina10_img5.png)

---

<!-- Página 11 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
 Incidentes: Muestra una lista de incidentes de seguridad, con opciones para
investigar, clasificar y resolver cada incidente.
 Alertas: Proporciona una lista detallada de alertas individuales. Puedes ver la
fuente de la alerta, la descripción y tomar acciones como la investigación
adicional o la resolución.
1.4.2 BUSCAR AMENAZAS DE MANERA PROACTIVA
Mediante la creación de consultas avanzadas se permite buscar amenazas en correos
electrónicos y elementos de colaboración.
Centro Criptológico Nacional 11

![Imagen 1 - Página 11](CCN-STIC 885E_assets\pagina11_img1.png)

![Imagen 2 - Página 11](CCN-STIC 885E_assets\pagina11_img2.png)

![Imagen 3 - Página 11](CCN-STIC 885E_assets\pagina11_img3.png)

![Imagen 4 - Página 11](CCN-STIC 885E_assets\pagina11_img4.png)

![Imagen 5 - Página 11](CCN-STIC 885E_assets\pagina11_img5.png)

---

<!-- Página 12 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
 Búsqueda avanzada: Herramienta que permite crear consultas personalizadas
utilizando un lenguaje de consulta avanzado para buscar indicadores de
compromiso (IOC) y actividades sospechosas en los datos recopilados por la
plataforma.
1.4.3 REALIZAR UN SEGUIMIENTO Y RESPONDER A LAS AMENAZAS
EMERGENTES
Microsoft Defender Threat Intelligence (Defender TI) permite acceder a la
información sobre amenazas desde el portal de Microsoft Defender.
Microsoft Defender TI ayuda a agilizar el triaje de los analistas de seguridad, la
respuesta a incidentes, la caza de amenazas y los flujos de trabajo de gestión de
vulnerabilidades. Defender TI agrega y enriquece la información crítica sobre amenazas
en una interfaz fácil de usar.
Este cambio introduce un nuevo menú de navegación dentro del portal de Microsoft
Defender denominado Inteligencia de amenazas.
Centro Criptológico Nacional 12

![Imagen 1 - Página 12](CCN-STIC 885E_assets\pagina12_img1.png)

![Imagen 2 - Página 12](CCN-STIC 885E_assets\pagina12_img2.png)

![Imagen 3 - Página 12](CCN-STIC 885E_assets\pagina12_img3.png)

![Imagen 4 - Página 12](CCN-STIC 885E_assets\pagina12_img4.png)

![Imagen 5 - Página 12](CCN-STIC 885E_assets\pagina12_img5.png)

---

<!-- Página 13 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
En el menú de Inteligencia de amenazas se encuentra el menú para la función Análisis
de amenazas que está diseñado para ayudar a los equipos de seguridad a ser más
eficientes y dos nuevas incorporaciones:
 Perfiles Intel: una nueva característica que introduce contenido curado
organizado por actores de amenazas, sus herramientas y vulnerabilidades
conocidas.
 Explorador de Intel: la experiencia existente de búsqueda e investigación de
contenidos de TI de Defender.
1.4.4 SUPERVISAR LAS ACCIONES Y EL ESTADO DE INVESTIGACIÓN
Está enfocado en la gestión de acciones de seguridad y la administración de archivos
o elementos sospechosos que han sido enviados para su análisis. Aquí se describen las
principales funciones y submenús que típicamente se encuentran en esta sección:
Centro Criptológico Nacional 13

![Imagen 1 - Página 13](CCN-STIC 885E_assets\pagina13_img1.png)

![Imagen 2 - Página 13](CCN-STIC 885E_assets\pagina13_img2.png)

![Imagen 3 - Página 13](CCN-STIC 885E_assets\pagina13_img3.png)

![Imagen 4 - Página 13](CCN-STIC 885E_assets\pagina13_img4.png)

![Imagen 5 - Página 13](CCN-STIC 885E_assets\pagina13_img5.png)

---

<!-- Página 14 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
 Acciones: Esta sección se encarga de gestionar las acciones recomendadas y las
tareas de respuesta a incidentes de seguridad. Incluye:
o Acciones Pendientes: Muestra una lista de todas las acciones de
seguridad recomendadas que aún no se han completado. Estas acciones
pueden incluir tareas como aislar un dispositivo, ejecutar un análisis
completo, aplicar parches de seguridad, o eliminar software malicioso.
Cada acción pendiente suele incluir detalles como el tipo de amenaza, el
dispositivo afectado, y la urgencia de la acción recomendada.
o Acciones Completadas: Registra todas las acciones que han sido llevadas
a cabo en respuesta a alertas o recomendaciones. Esto permite a los
administradores de seguridad revisar qué medidas se han tomado y
verificar que las respuestas adecuadas se han implementado
correctamente.
 Envíos: La sección de envíos permite a los usuarios enviar archivos sospechosos
o URLs para un análisis más profundo por parte de Microsoft. Esta función es
crucial para gestionar posibles falsos positivos y obtener una comprensión más
clara de las amenazas detectadas.
o Envío de Archivos: Permite a los usuarios enviar archivos sospechosos
directamente a Microsoft para su análisis detallado. Esto puede ser útil
cuando hay dudas sobre si un archivo es realmente malicioso o no.
Microsoft proporciona un análisis detallado y una respuesta sobre la
naturaleza del archivo enviado.
Centro Criptológico Nacional 14

![Imagen 1 - Página 14](CCN-STIC 885E_assets\pagina14_img1.png)

![Imagen 2 - Página 14](CCN-STIC 885E_assets\pagina14_img2.png)

![Imagen 3 - Página 14](CCN-STIC 885E_assets\pagina14_img3.png)

![Imagen 4 - Página 14](CCN-STIC 885E_assets\pagina14_img4.png)

![Imagen 5 - Página 14](CCN-STIC 885E_assets\pagina14_img5.png)

---

<!-- Página 15 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
o Envío de URLs: Similar a los envíos de archivos, esta función permite
enviar URLs sospechosas para su análisis. Esto ayuda a identificar si una
URL conduce a un sitio web malicioso o a un posible ataque de phishing.
o Historial de Envíos: Proporciona un registro de todos los archivos y URLs
que se han enviado para análisis, junto con el estado y los resultados de
esos análisis. Esto ayuda a los equipos de seguridad a mantener un
seguimiento de lo que se ha revisado y las conclusiones obtenidas
1.4.5 PROTECCIÓN DEFENDER FOR ENDPOINT
A continuación, se muestran las funcionalidades de Microsoft Defender para puntos
de conexión existentes en el portal de Microsoft Defender.
 Administración de vulnerabilidades: Sección para consultar la puntuación
segura de Microsoft para dispositivos, la puntuación de exposición, los
dispositivos expuestos, el software vulnerable y tomar medidas sobre las
recomendaciones de seguridad más destacadas.
o Panel: Este es el panel de control de seguridad. Muestra información
general sobre el número de alertas activas, los dispositivos y los
Centro Criptológico Nacional 15

![Imagen 1 - Página 15](CCN-STIC 885E_assets\pagina15_img1.png)

![Imagen 2 - Página 15](CCN-STIC 885E_assets\pagina15_img2.png)

![Imagen 3 - Página 15](CCN-STIC 885E_assets\pagina15_img3.png)

![Imagen 4 - Página 15](CCN-STIC 885E_assets\pagina15_img4.png)

![Imagen 5 - Página 15](CCN-STIC 885E_assets\pagina15_img5.png)

---

<!-- Página 16 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
usuarios que están en riesgo y la gravedad de las alertas, dispositivos
y usuarios. También se puede ver si algún dispositivo tiene problemas
con el sensor, el estado general del servicio y cómo se clasificaron
alertas pendientes.
o Recomendaciones: Contiene una lista de recomendaciones de
seguridad para las amenazas y vulnerabilidades que se encuentran en
la organización.
o Corrección: Cuando se envía una solicitud de corrección desde la
página de Recomendaciones de seguridad, se inicia una actividad de
corrección. Esto crea una tarea de seguridad que se puede
monitorear en la página de Corrección y también genera un vale de
corrección en Microsoft Intune.
En esta sección, seleccionar la actividad de corrección deseada para
seguir los pasos, monitorear el progreso, ver la recomendación
relacionada, exportar a CSV o marcar como completada.
o Inventario: Muestra la lista de dispositivos que están incorporados a
Defender for Endpoint, información sobre ellos y sus niveles de
exposición y riesgo.
o Puntos débiles: Muestra una lista de las vulnerabilidades CVE que
afectan a los dispositivos. Aquí se puede consultar la gravedad, la
clasificación del sistema de puntuación CVSS, y la información
relevante sobre violaciones y amenazas, entre otros detalles.
o Escala de tiempo del evento: Se puede consultar toda la información
relevante relacionada con un evento.
o Evaluación de líneas base: Evaluaciones continuas y en tiempo real
en comparación con los estándares del sector, como CIS y STIG.
Permite crear y gestionar perfiles, generar informes sobre
dispositivos no conformes, utilizar la búsqueda avanzada de
amenazas para consultar diferentes hallazgos, o emplear las nuevas
funciones de exportación de API para crear informes personalizados.
 Asociados y API: Se pueden ver las conexiones de partners compatibles, que
mejoran las capacidades de detección, investigación e inteligencia de
amenazas de la plataforma. También se pueden observar las aplicaciones
conectadas, el explorador de API, la información general sobre el uso de la
API y la configuración de exportación de datos.
o Aplicaciones conectadas: Ayuda a rastrear las diversas aplicaciones
de Entra ID que se integran con la plataforma de Microsoft Defender
ATP en su organización.
o Explorador de API: Es una herramienta que permite explorar de
manera interactiva las diversas APIs de Microsoft Defender ATP. Con
el Explorador de API, se puede:
 Ejecutar solicitudes para cualquier método y ver las
respuestas en tiempo real.
 Navegar rápidamente por los ejemplos de API y aprender qué
parámetros admiten.
Centro Criptológico Nacional 16

| Recomendaciones: Contiene una lista de recomendaciones de |
| --- |
| seguridad para las amenazas y vulnerabilidades que se encuentran en |
| la organización. |
| Corrección: Cuando se envía una solicitud de corrección desde la |
| página de Recomendaciones de seguridad, se inicia una actividad de |
| corrección. Esto crea una tarea de seguridad que se puede |
| monitorear en la página de Corrección y también genera un vale de |
| corrección en Microsoft Intune. |
| En esta sección, seleccionar la actividad de corrección deseada para |
| seguir los pasos, monitorear el progreso, ver la recomendación |
| relacionada, exportar a CSV o marcar como completada. |
| Inventario: |


| Puntos débiles: Muestra una lista de las vulnerabilidades CVE que |
| --- |
| afectan a los dispositivos. Aquí se puede consultar la gravedad, la |
| clasificación del sistema de puntuación CVSS, y la información |
| relevante sobre violaciones y amenazas, entre otros detalles. |
| Escala de tiempo del evento: Se puede consultar toda la información |
| relevante relacionada con un evento. |
| Evaluación de líneas base: Evaluaciones continuas y en tiempo real |
| en comparación con los estándares del sector, como CIS y STIG. |
| Permite crear y gestionar perfiles, generar informes sobre |
| dispositivos no conformes, utilizar la búsqueda avanzada de |
| amenazas para consultar diferentes hallazgos, o emplear las nuevas |
| funciones de exportación de API para crear informes personalizados. |


| Aplicaciones conectadas: Ayuda a rastrear las diversas aplicaciones |
| --- |
| de Entra ID que se integran con la plataforma de Microsoft Defender |
| ATP en su organización. |
| Explorador de API: Es una herramienta que permite explorar de |
| manera interactiva las diversas APIs de Microsoft Defender ATP. Con |
| el Explorador de API, se puede: |


| Ejecutar solicitudes para cualquier método y ver las |
| --- |
| respuestas en tiempo real. |
| Navegar rápidamente por los ejemplos de API y aprender qué |
| parámetros admiten. |


![Imagen 1 - Página 16](CCN-STIC 885E_assets\pagina16_img1.png)

![Imagen 2 - Página 16](CCN-STIC 885E_assets\pagina16_img2.png)

![Imagen 3 - Página 16](CCN-STIC 885E_assets\pagina16_img3.png)

![Imagen 4 - Página 16](CCN-STIC 885E_assets\pagina16_img4.png)

---

<!-- Página 17 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
 Realizar llamadas a la API fácilmente sin necesidad de
autenticación adicional más allá del inicio de sesión en el
portal de administración.
 Administración de configuración: Muestra los dispositivos abordo, la línea
base de seguridad de la organización, el análisis predictivo, la cobertura de
protección web y permite realizar la administración de superficies de ataques
en los dispositivos.
o Panel: Este es el panel de configuración de dispositivos. Muestra
información general sobre la configuración aplicada a los dispositivos
por MDE, controlar la administración de configuración de seguridad,
dispositivos incorporados, administración de superficie expuesta a
ataques de dispositivos, etc.
o Directivas de seguridad de puntos de conexión: Se pueden ver todas
las políticas de seguridad de Intune directamente. Además, se puede
filtrar la lista y buscar políticas específicas utilizando las funciones
integradas de "filtro" y "búsqueda".
1.5 COMPARATIVA DE PORTALES
La imagen y la tabla siguiente enumeran los cambios en la navegación entre el
Centro de seguridad de Microsoft Defender y Microsoft Defender XDR.
Centro de seguridad de Microsoft Defender Microsoft Defender XDR
Paneles Inicio
 Operaciones de seguridad  Análisis de amenazas
 Análisis de amenazas
Incidentes Alertas de & incidentes
Inventario de dispositivos Inventario de dispositivos
Cola de alertas Alertas de & incidentes
Investigaciones automatizadas Centro de actividades
Búsqueda avanzada de amenazas Búsqueda
Informes Informes
Partners & API Partners & API
Administración & vulnerabilidades de amenazas Administración de amenazas y
vulnerabilidades
Evaluación y tutoriales Tutoriales & evaluación
Administración de la configuración Administración de la configuración
Configuración Configuración
Centro Criptológico Nacional 17

| Realizar llamadas a la API fácilmente sin necesidad de |
| --- |
| autenticación adicional más allá del inicio de sesión en el |
| portal de administración. |


| Directivas de seguridad de puntos de conexión: Se pueden ver todas |
| --- |
| las políticas de seguridad de Intune directamente. Además, se puede |
| filtrar la lista y buscar políticas específicas utilizando las funciones |
| integradas de "filtro" y "búsqueda". |


|  | Centro de seguridad de Microsoft Defender |  |  | Microsoft Defender XDR |  |
| --- | --- | --- | --- | --- | --- |
|  | Paneles |  | Inicio <br>  Análisis de amenazas | Inicio |  |
|  |  Operaciones de seguridad |  |  |  Análisis de amenazas |  |
|  |  Análisis de amenazas |  |  |  |  |
| Incidentes |  |  | Alertas de & incidentes |  |  |
|  | Inventario de dispositivos |  |  | Inventario de dispositivos |  |
| Cola de alertas |  |  | Alertas de & incidentes |  |  |
|  | Investigaciones automatizadas |  |  | Centro de actividades |  |
| Búsqueda avanzada de amenazas |  |  | Búsqueda |  |  |
|  | Informes |  |  | Informes |  |
| Partners & API |  |  | Partners & API |  |  |
| Administración & vulnerabilidades de amenazas |  |  |  | Administración de amenazas y |  |
|  |  |  |  | vulnerabilidades |  |
| Evaluación y tutoriales |  |  | Tutoriales & evaluación |  |  |
|  | Administración de la configuración |  |  | Administración de la configuración |  |
| Configuración |  |  | Configuración |  |  |


![Imagen 1 - Página 17](CCN-STIC 885E_assets\pagina17_img1.png)

![Imagen 2 - Página 17](CCN-STIC 885E_assets\pagina17_img2.png)

![Imagen 3 - Página 17](CCN-STIC 885E_assets\pagina17_img3.png)

![Imagen 4 - Página 17](CCN-STIC 885E_assets\pagina17_img4.png)

---

<!-- Página 18 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
1.6 POSIBILIDAD DEL USO DEL PORTAL ANTERIOR AL ACTUAL
Para volver a la Centro de seguridad de Microsoft Defender anterior:
Iniciar sesión en el portal de Microsoft Defender como administrador global o con
una cuenta y con permisos de administrador de seguridad en Microsoft Entra ID.
a) Ir al redireccionamiento del Portal general de puntos de conexión de
configuración.
b) Cambiar la configuración de redireccionamiento automático a Desactivado.
c) Seleccionar Deshabilitar & compartir comentarios cuando se le solicite.
Esta configuración se puede habilitar de nuevo en cualquier momento.
Una vez deshabilitadas, las cuentas no se enrutan a security.microsoft.com y tendrá
acceso al portal anterior: securitycenter.windows.com o securitycenter.microsoft.com.
1.7 PRERREQUISITOS MICROSOFT DEFENDER FOR ENDPOINT
Para poder utilizar la solución e incorporar dispositivos a la misma, es necesario cumplir
unos requisitos mínimos.
Centro Criptológico Nacional 18

![Imagen 1 - Página 18](CCN-STIC 885E_assets\pagina18_img1.png)

![Imagen 2 - Página 18](CCN-STIC 885E_assets\pagina18_img2.png)

![Imagen 3 - Página 18](CCN-STIC 885E_assets\pagina18_img3.png)

![Imagen 4 - Página 18](CCN-STIC 885E_assets\pagina18_img4.png)

![Imagen 5 - Página 18](CCN-STIC 885E_assets\pagina18_img5.png)

---

<!-- Página 19 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
1.7.1 REQUERIMIENTO DE LICENCIAS
Microsoft Defender for Endpoint requiere una de las siguientes ofertas de licencias
por volumen de Microsoft:
 Microsoft Defender for Endpoint Plan 1 o Plan2.
Microsoft Defender para Endpoint P1 está disponible como una licencia de
suscripción de usuario independiente y como parte de Microsoft 365 E3/A3/G3.
Microsoft Defender para Endpoint P2 está disponible como licencia
independiente y como parte de los siguientes planes:
o Windows 11 Empresa E5/A5
o Windows 10 Empresa E5/A5
o Microsoft 365 E5/A5/G5 (que incluye Windows 10 o Windows 11
Enterprise E5)
o Seguridad de Microsoft 365 E5/A5/G5/F5
o Seguridad y cumplimiento de Microsoft 365 F5
En Defender para punto de conexión, un escenario de licencias mixtas se refiere
a cuando una organización combina licencias de Defender para punto de punto
1 y Plan 2.
En la siguiente tabla se muestran algunos ejemplos de escenarios de licencias
mixtas:
Escenario Descripción
Inquilino mixto Uso de diferentes conjuntos de funcionalidades para grupos de
usuarios y sus dispositivos. Algunos ejemplos son:
- Plan 1 de Defender para punto de conexión y Defender para
punto de conexión 2
- Microsoft 365 E3 y Microsoft 365 E5
Prueba mixta Test de una suscripción de nivel Premium para algunos usuarios.
Algunos ejemplos son:
- Plan 1 de Defender para punto de conexión (todos los usuarios)
y Plan 2 de Defender para punto de conexión (se ha iniciado una
suscripción de prueba para algunos usuarios)
- Microsoft 365 E3 (todos los usuarios) y Microsoft 365 E5 (se ha
iniciado una suscripción de prueba para algunos usuarios)
Actualizaciones Actualización de las licencias de usuario en fases. Algunos
por fases ejemplos son:
- Traslado de grupos de usuarios del plan 1 de Defender para
punto de conexión al plan 2
- Traslado de grupos de usuarios de Microsoft 365 E3 a E5
Centro Criptológico Nacional 19

|  | Escenario |  |  | Descripción |  |
| --- | --- | --- | --- | --- | --- |
| Inquilino mixto | Inquilino mixto |  |  | Uso de diferentes conjuntos de funcionalidades para grupos de |  |
|  |  |  |  | usuarios y sus dispositivos. Algunos ejemplos son: |  |
|  |  |  |  | - Plan 1 de Defender para punto de conexión y Defender para |  |
|  |  |  |  | punto de conexión 2 |  |
|  |  |  |  | - Microsoft 365 E3 y Microsoft 365 E5 |  |
| Prueba mixta |  |  | Test de una suscripción de nivel Premium para algunos usuarios. <br> Algunos ejemplos son: <br> - Plan 1 de Defender para punto de conexión (todos los usuarios) <br> y Plan 2 de Defender para punto de conexión (se ha iniciado una <br> suscripción de prueba para algunos usuarios) <br> - Microsoft 365 E3 (todos los usuarios) y Microsoft 365 E5 (se ha <br> iniciado una suscripción de prueba para algunos usuarios) |  |  |
| Actualizaciones <br> por fases |  |  |  | Actualización de las licencias de usuario en fases. Algunos |  |
|  |  |  |  | ejemplos son: |  |
|  |  |  |  | - Traslado de grupos de usuarios del plan 1 de Defender para |  |
|  |  |  |  | punto de conexión al plan 2 |  |
|  |  |  |  | - Traslado de grupos de usuarios de Microsoft 365 E3 a E5 |  |


| Actualizaciones |
| --- |
| por fases |


![Imagen 1 - Página 19](CCN-STIC 885E_assets\pagina19_img1.png)

![Imagen 2 - Página 19](CCN-STIC 885E_assets\pagina19_img2.png)

![Imagen 3 - Página 19](CCN-STIC 885E_assets\pagina19_img3.png)

![Imagen 4 - Página 19](CCN-STIC 885E_assets\pagina19_img4.png)

---

<!-- Página 20 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
El reporte de uso de licencias se basa en las actividades de inicio de sesión en el
dispositivo. Las licencias del plan 2 de Defender para punto de conexión son por
usuario y cada usuario puede tener hasta cinco dispositivos incorporados al mismo
tiempo.
 Microsoft Defender for Endpoint para servidores
Microsoft Defender para servidor está diseñado para proteger las cargas de trabajo
de los servidores tradicionales locales, y también funciona con servidores Windows
y Linux. Cada entorno de sistema operativo (OSE), ya sea un servidor o una máquina
virtual, necesita una licencia distinta.
Para la incorporación de servidores se requieren licencia de servidor, a elegir entre:
o Opción de Microsoft Defender para servidores Plan 1 o Plan 2 (incluidos en
Defender for Cloud).
o Microsoft Defender para EndPoint para servidores.
o Servidores Microsoft Defender for Business (solo para pequeñas y medianas
empresas).
1.7.2 REQUISITOS DE LOS EXPLORADORES
El acceso a Microsoft Defender for Endpoint se realiza a través de:
 Microsoft Edge
 Google Chrome
1.7.3 REQUISITOS DE HARDWARE Y SOFTWARE
1.7.3.1 REQUISITOS SOFTWARE
Versiones Windows compatibles:
 Windows 7 SP1 Enterprise (Requiere actualizaciones de seguridad extendidas,
ESU)
 Windows 7 SP1 Pro (Requiere actualizaciones de seguridad extendidas, ESU)
 Windows 8.1 Enterprise
 Windows 8.1 Pro
 Windows 10 Enterprise
 Windows 10 Enterprise LTSC 2016 (o posterior)
 Windows 10 Education
 Windows 10 Pro
 Windows 10 Pro Education
 Windows 11 Enterprise
 Windows 11 Education
 Windows 11 Pro
 Windows 11 Pro Education
 Windows servidor
o Windows Server 2012 R2
Centro Criptológico Nacional 20

|  Windows 7 SP1 Enterprise (Requiere actualizaciones de seguridad extendidas, |  |
| --- | --- |
| ESU) |  |
|  Windows 7 SP1 Pro (Requiere actualizaciones de seguridad extendidas, ESU) |  |
|  Windows 8.1 Enterprise |  |
|  Windows 8.1 Pro |  |
|  Windows 10 Enterprise |  |
|  Windows 10 Enterprise LTSC 2016 (o posterior) |  |
|  Windows 10 Education |  |
|  Windows 10 Pro |  |
|  Windows 10 Pro Education |  |
|  Windows 11 Enterprise |  |
|  Windows 11 Education |  |
|  Windows 11 Pro |  |
|  Windows 11 Pro Education |  |
|  Windows servidor |  |
|  | o Windows Server 2012 R2 |


![Imagen 1 - Página 20](CCN-STIC 885E_assets\pagina20_img1.png)

![Imagen 2 - Página 20](CCN-STIC 885E_assets\pagina20_img2.png)

![Imagen 3 - Página 20](CCN-STIC 885E_assets\pagina20_img3.png)

![Imagen 4 - Página 20](CCN-STIC 885E_assets\pagina20_img4.png)

---

<!-- Página 21 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
o Windows Server 2016
o Windows Servidor, versión 1803 o posterior
o Windows Server 2019
o Windows Server 2022
 Azure Virtual Desktop
 Windows 365, bajo uno de los sistemas operativos anteriores.
Otros sistemas operativos compatibles con Defender for Endpoint son:
 Android
 iOS
 Linux
 Subsistema de Windows para Linux (WSL)
 macOS
En máquinas virtuales con Windows 10 Enterprise 2016 LTSB pueden aparecer
problemas de rendimiento si se ejecutan en plataformas de virtualización que no son de
Microsoft.
Para entornos virtuales, se recomienda usar Windows 10 Enterprise LTSC 2019 o
posterior.
1.7.3.2 REQUISITOS HARDWARE
Defender para Endpoint en dispositivos Windows no tiene requisitos de hardware
más allá de los que ya tiene el sistema operativo (es decir, son iguales a los requisitos
del sistema operativo).
 Cores: 2 como mínimo, 4 como mejor opción
 Memoria: 1 GB como mínimo, 4 como mejor opción
1.7.4 REQUISITOS DE CONFIGURACIÓN Y ALMACENAMIENTO DE DATOS Y RED
Al ejecutar el asistente de incorporación por primera vez, se debe elegir el
datacenter (Centro de datos) dónde se almacena la información relacionada con
Microsoft Defender for Endpoint: Unión Europea, Reino Unido o Estados Unidos.
Nota: No se puede cambiar la ubicación de almacenamiento de datos después de la
configuración por primera vez.
Centro Criptológico Nacional 21

|  | o Windows Server 2016 |
| --- | --- |
|  | o Windows Servidor, versión 1803 o posterior |
|  | o Windows Server 2019 |
|  | o Windows Server 2022 |
|  Azure Virtual Desktop |  |
|  Windows 365, bajo uno de los sistemas operativos anteriores. |  |


|  Android |
| --- |
|  iOS |
|  Linux |
|  Subsistema de Windows para Linux (WSL) |
|  macOS |


| En máquinas virtuales con Windows 10 Enterprise 2016 LTSB pueden aparecer |
| --- |
| problemas de rendimiento si se ejecutan en plataformas de virtualización que no son de |
| Microsoft. |
| Para entornos virtuales, se recomienda usar Windows 10 Enterprise LTSC 2019 o |
| posterior. |


|  Cores: 2 como mínimo, 4 como mejor opción |
| --- |
|  Memoria: 1 GB como mínimo, 4 como mejor opción |


| Al ejecutar el asistente de incorporación por primera vez, se debe elegir el |
| --- |
| datacenter (Centro de datos) dónde se almacena la información relacionada con |
| Microsoft Defender for Endpoint: Unión Europea, Reino Unido o Estados Unidos. |


| Nota: No se puede cambiar la ubicación de almacenamiento de datos después de la |
| --- |
| configuración por primera vez. |


![Imagen 1 - Página 21](CCN-STIC 885E_assets\pagina21_img1.png)

![Imagen 2 - Página 21](CCN-STIC 885E_assets\pagina21_img2.png)

![Imagen 3 - Página 21](CCN-STIC 885E_assets\pagina21_img3.png)

![Imagen 4 - Página 21](CCN-STIC 885E_assets\pagina21_img4.png)

![Imagen 5 - Página 21](CCN-STIC 885E_assets\pagina21_img5.png)

---

<!-- Página 22 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
1.7.5 CONFIGURACIÓN DE DATOS DE DIAGNÓSTICO
Antes de comenzar con la configuración, es conveniente asegurarse que el servicio
de datos de diagnóstico está habilitado en todos los dispositivos de la organización. Este
servicio suele estar habilitado de forma predeterminada. Es una buena práctica
comprobarlo para asegurar que los datos del sensor se obtienen de ellos.
Para ello simplemente abrir un símbolo de sistema con privilegios elevados y
ejecutar el siguiente comando:
sc qc diagtrack
Si el servicio está habilitado, el resultado debería ser parecido a la siguiente captura
de pantalla:
Se establecerá el servicio para que se inicie de forma automática si el START_TYPE
no está establecido en AUTO_START.
Para ello, sobre un símbolo de sistema con privilegios elevados, escribir el siguiente
comando:
sc config diagtrack start=auto
Se muestra el siguiente mensaje de éxito:
Finalmente, para comprobar dicho cambio, escribir el siguiente comando:
sc qc diagtrack
1.7.6 CONECTIVIDAD A INTERNET
La conectividad a Internet en dispositivos es necesaria directamente o a través del
proxy.
Centro Criptológico Nacional 22

![Imagen 1 - Página 22](CCN-STIC 885E_assets\pagina22_img1.png)

![Imagen 2 - Página 22](CCN-STIC 885E_assets\pagina22_img2.png)

![Imagen 3 - Página 22](CCN-STIC 885E_assets\pagina22_img3.png)

![Imagen 4 - Página 22](CCN-STIC 885E_assets\pagina22_img4.png)

![Imagen 5 - Página 22](CCN-STIC 885E_assets\pagina22_img5.png)

![Imagen 6 - Página 22](CCN-STIC 885E_assets\pagina22_img6.png)

---

<!-- Página 23 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
El sensor Defender for Endpoint puede usar un ancho de banda promedio diario de
5 MB para comunicarse con el servicio en la nube de Defender for Endpoint e informar
de los datos. Las actividades únicas, como las cargas de archivos y la colección de
paquetes de investigación, no se incluyen en este ancho de banda promedio diario.
Como se ve en el punto anterior, antes de incorporar dispositivos, el servicio de
datos de diagnóstico debe estar habilitado. El servicio está habilitado de forma
predeterminada en Windows 10/11.
1.7.7 REQUERIMIENTO DE CONFIGURACIÓN DEL MICROSOFT DEFENDER
El agente de Defender for Endpoint depende de la capacidad de Antivirus de
Microsoft Defender para examinar archivos y proporcionar información sobre estos.
Se deben configurar las actualizaciones de seguridad, independientemente de si
Microsoft Defender Antivirus es o no el antimalware activo dentro de la compañía.
Cuando el Antivirus de Microsoft Defender no es el antimalware activo de la compañía
y se utiliza el servicio de Defender for Endpoint, el Antivirus de Microsoft Defender entra
en modo pasivo.
En caso de haber desactivado el Antivirus de Microsoft Defender mediante GPO o
cualquier otro método, los dispositivos que se vayan incorporando deberán excluirse de
la GPO.
Nota: Durante el proceso de aplicación de las medidas de seguridad establecidas por el ENS en
sistemas operativos Windows, se deshabilita el antivirus mediante directivas de grupo (GPO) y
en caso de requerir el uso de Windows Defender se deberán modificar las directivas
correspondientes.
Por otro lado, si se está ejecutando el Antivirus de Microsoft Defender como el
producto antimalware principal en los dispositivos, el agente de Defender for Endpoint
se incorporará correctamente.
1.8 PRERREQUISITOS ACTUACIONES MEDIANTE POWERSHELL
Para ejecutar mediante código Powershell algunos de los comandos descritos en la
presente guía es necesario disponer de un entorno con el módulo de Azure PowerShell.
Para obtener información de la instalación de dicho módulo, consultar la guía [CCN-
STIC-884A - Guía de configuración segura para Azure].
2. DESPLIEGUE DE MICROSOFT DEFENDER FOR ENDPOINT
Se recomienda realizar una planificación de la implementación de Microsoft
Defender for Endpoint de forma que se puedan aprovechar todas las capacidades de
seguridad dentro del conjunto de aplicaciones y así protegerse mejor de las amenazas.
La solución proporciona instrucciones sobre cómo configurar Microsoft Defender
para puntos de conexión, asignar funciones y permisos, identificar la arquitectura del
entorno, seleccionar el tipo de herramienta de implementación que mejor se adapte a
Centro Criptológico Nacional 23

| Nota: Durante el proceso de aplicación de las medidas de seguridad establecidas por el ENS en |
| --- |
| sistemas operativos Windows, se deshabilita el antivirus mediante directivas de grupo (GPO) y |
| en caso de requerir el uso de Windows Defender se deberán modificar las directivas |
| correspondientes. |


![Imagen 1 - Página 23](CCN-STIC 885E_assets\pagina23_img1.png)

![Imagen 2 - Página 23](CCN-STIC 885E_assets\pagina23_img2.png)

![Imagen 3 - Página 23](CCN-STIC 885E_assets\pagina23_img3.png)

![Imagen 4 - Página 23](CCN-STIC 885E_assets\pagina23_img4.png)

---

<!-- Página 24 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
las necesidades e instrucciones sobre cómo configurar las capacidades. En la siguiente
imagen se pueden observar los pasos principales de cara a poder realizar la planificación.
Configuración y Asignación de
requisitos funciones y permisos
Preparación del entorno Identificación y asignación
para el despliegue funciones y permisos
 Validación de licencia
 Configuración de
 Control de Acceso
inquilino
basado en roles.
 Configuración de la red
Identificar arquitectura Incorporación de Configurar las
y método de dispositivos funcionalidades
implementación
Identificar qué arquitectura Uso del método preferido Configurar las siguientes
representa mejor la organización para el despliegue funcionalidades:
y método de implementación
 Script local (hasta 10  Detección y respuesta
 Nativo en la nube
dispositivos)  Administración de
 Administración conjunta
 Política de grupo vulnerabilidades
 Arquitectura On-
 Microsoft Intune/  Protección de próxima
premises
Mobile Device generación
 Script y Evaluación
Manager  Reducción de la
 Microsoft Intune
 Microsoft Endpoint superficie de ataque
 SCCM
Configuration  Capacidades de
 Política de grupo
Manager investigación y
 Script local
 Script remediación
automática (AIR)
2.1 CONFIGURACIÓN Y REQUISITOS
Para empezar a usar Microsoft Defender para Endpoint, hay que preparar el entorno
de Defender para Endpoint.
Para la preparación del entorno es necesario revisar los siguientes puntos:
 Validación de licencia
 Configuración de inquilino
 Configuración de la red
2.1.1 VALIDACIÓN DE LICENCIA
Comprobar el estado de la licencia y si se aprovisionó correctamente, se puede
realizar a través del Centro de administración o a través del portal Microsoft Azure.
Centro Criptológico Nacional 24

|  | Configuración y |  |  | Asignación de |  |
| --- | --- | --- | --- | --- | --- |
|  | requisitos |  |  | funciones y permisos |  |
| Preparación del entorno <br> para el despliegue |  |  | Identificación y asignación <br> funciones y permisos |  |  |
|  Validación de licencia <br>  Configuración de <br> inquilino <br>  Configuración de la red |  |  |  Control de Acceso <br> basado en roles. |  |  |


|  | Identificar arquitectura |  | Incorporación de <br> dispositivos | Configurar las <br> funcionalidades |
| --- | --- | --- | --- | --- |
|  | y método de |  |  |  |
|  | implementación |  |  |  |
| Identificar qué arquitectura <br> representa mejor la organización <br> y método de implementación |  |  | Uso del método preferido <br> para el despliegue | Configurar las siguientes <br> funcionalidades: |
|  Nativo en la nube <br>  Administración conjunta <br>  Arquitectura On- <br> premises <br>  Script y Evaluación <br>  Microsoft Intune <br>  SCCM <br>  Política de grupo <br>  Script local |  |  |  Script local (hasta 10 <br> dispositivos) <br>  Política de grupo <br>  Microsoft Intune/ <br> Mobile Device <br> Manager <br>  Microsoft Endpoint <br> Configuration <br> Manager <br>  Script |  Detección y respuesta <br>  Administración de <br> vulnerabilidades <br>  Protección de próxima <br> generación <br>  Reducción de la <br> superficie de ataque <br>  Capacidades de <br> investigación y <br> remediación <br> automática (AIR) |


| Incorporación de |
| --- |
| dispositivos |


| Configurar las |
| --- |
| funcionalidades |


![Imagen 1 - Página 24](CCN-STIC 885E_assets\pagina24_img1.png)

![Imagen 2 - Página 24](CCN-STIC 885E_assets\pagina24_img2.png)

![Imagen 3 - Página 24](CCN-STIC 885E_assets\pagina24_img3.png)

![Imagen 4 - Página 24](CCN-STIC 885E_assets\pagina24_img4.png)

---

<!-- Página 25 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Para acceder a las licencias, entrar al portal de Entra, Facturación y a continuación
seleccionar “licencias”.
Como alternativa, se puede acceder desde el Centro de Administración de Microsoft
365:
Mas información en el punto de 1.7.1 Requerimientos de licencias.
2.1.2 CONFIGURACIÓN DE INQUILINO
Para comenzar el proceso de incorporación, elegir cualquier opción en la sección
Puntos finales del menú de navegación o cualquier función de Microsoft Defender XDR,
como Incidentes, Búsqueda, Centro de actividades o Análisis de amenazas.
Centro Criptológico Nacional 25

![Imagen 1 - Página 25](CCN-STIC 885E_assets\pagina25_img1.png)

![Imagen 2 - Página 25](CCN-STIC 885E_assets\pagina25_img2.png)

![Imagen 3 - Página 25](CCN-STIC 885E_assets\pagina25_img3.png)

![Imagen 4 - Página 25](CCN-STIC 885E_assets\pagina25_img4.png)

![Imagen 5 - Página 25](CCN-STIC 885E_assets\pagina25_img5.png)

![Imagen 6 - Página 25](CCN-STIC 885E_assets\pagina25_img6.png)

---

<!-- Página 26 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
2.1.3 UBICACIÓN DEL CENTRO DE DATOS
Al usar Microsoft Defender para Endpoint, los datos se guardarán y procesarán en la
misma ubicación que Microsoft Defender XDR. Si no se ha activado Microsoft Defender
XDR, al incorporarse a Microsoft Defender para Endpoint también se activará Microsoft
Defender XDR y se elegirá una ubicación nueva del centro de datos basada en la
ubicación de los servicios de seguridad activos de Microsoft 365.
2.1.4 CONFIGURACIÓN DE RED
Si la organización no requiere que los puntos de conexión usen un proxy para tener
acceso a Internet, omitir esta sección. En caso contrario, obtener información completa
en la documentación de Microsoft:
Configuración de Microsoft Defender para punto de conexión implementación -
Microsoft Defender for Endpoint | Microsoft Learn
2.2 ASIGNACIONES DE FUNCIONES Y ROLES
2.2.1 CONTROL DE ACCESO BASADO EN ROLES (RBAC)
Microsoft Defender for Endpoint admite dos formas de administrar permisos:
 Configuración de permisos básicos: asignación de permisos de acceso completo
o solo lectura. Los usuarios que tienen el rol de Administrador global o
Administrador de seguridad en Microsoft Entra ID tienen acceso completo. El rol
de lector de seguridad tiene acceso solo lectura y no permite ver el inventario de
máquinas/dispositivos.
 Control de acceso basado en roles (RBAC): defina permisos detallados creando
roles, asociando grupos de usuarios de Microsoft Entra a los roles y dando a los
grupos de usuarios acceso a los grupos de dispositivos.
Para más información en la documentación de Microsoft.
Uso del control de acceso basado en rol para conceder acceso específico a Microsoft
Defender portal - Microsoft Defender for Endpoint | Microsoft Learn
2.3 IDENTIFICAR LA ARQUITECTURA Y MÉTODO DE IMPLEMENTACIÓN
2.3.1 IDENTIFICACIÓN DE LA ARQUITECTURA
Cada entorno de empresa es único, por lo que se proporcionan varias opciones para
dar la flexibilidad necesaria para elegir cómo implementar el servicio. Ciertas
herramientas serán más o menos adecuadas para determinadas arquitecturas
dependiendo del entorno. La implementación se puede realizar basándose en las
siguientes arquitecturas:
 Nativo en la nube
 Administración conjunta
Centro Criptológico Nacional 26

![Imagen 1 - Página 26](CCN-STIC 885E_assets\pagina26_img1.png)

![Imagen 2 - Página 26](CCN-STIC 885E_assets\pagina26_img2.png)

![Imagen 3 - Página 26](CCN-STIC 885E_assets\pagina26_img3.png)

![Imagen 4 - Página 26](CCN-STIC 885E_assets\pagina26_img4.png)

---

<!-- Página 27 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
 Arquitectura On-premises
 Script y Evaluación
2.3.1.1 NATIVO EN LA NUBE
El despliegue se realiza mediante Microsoft Intune tal y como se refleja en la
siguiente imagen.
1. Iniciar sesión en el portal de Azure y configurar la inscripción automática para
Intune configurando el ámbito de usuario de MDM en Entra ID.
2. Asignar licencias de Intune a los usuarios en Entra ID y comprobar que los
dispositivos estén inscritos.
3. Iniciar sesión en el Centro de seguridad de Microsoft Defender y completar el
asistente de configuración inicial.
4. Iniciar sesión en el centro de administración de Microsoft Intune y navegar hasta
Abrir el Centro de seguridad de Microsoft Defender para conectarse al servicio
Microsoft Defender for Endpoint.
5. En el Centro de seguridad de Microsoft Defender, activar la configuración de
conexión de Microsoft Intune.
6. En el centro de administración de Microsoft Intune, crear una política de
configuración de dispositivos utilizando el tipo de perfil de Microsoft Defender
for Endpoint (escritorio de Windows 10/11). Los dispositivos que no son de
Windows requieren un paquete de instalación que debe descargarse del Centro
de seguridad de Microsoft Defender.
7. Para verificar que los dispositivos están correctamente integrados y generando
informes, ejecutar una prueba de detección en los dispositivos recién
incorporados. Estos comandos se encuentran en la configuración del Centro de
seguridad de Microsoft Defender en la sección Onboarding.
Centro Criptológico Nacional 27

![Imagen 1 - Página 27](CCN-STIC 885E_assets\pagina27_img1.png)

![Imagen 2 - Página 27](CCN-STIC 885E_assets\pagina27_img2.png)

![Imagen 3 - Página 27](CCN-STIC 885E_assets\pagina27_img3.png)

![Imagen 4 - Página 27](CCN-STIC 885E_assets\pagina27_img4.png)

![Imagen 5 - Página 27](CCN-STIC 885E_assets\pagina27_img5.png)

---

<!-- Página 28 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
2.3.1.2 ADMINISTRACIÓN CONJUNTA
El siguiente método de despliegue se realiza mediante Microsoft Intune o
Configuration Manager a través del denominado Co-management tal y como se refleja
en la siguiente imagen.
1. Iniciar sesión en el portal de Azure y configurar la inscripción automática para
Intune configurando el ámbito de usuario de MDM en Entra ID.
2. Asignar licencias de Intune a los usuarios en Entra ID y comprobar que los
dispositivos estén inscritos.
3. Elegir qué cargas de trabajo queremos que Microsoft Intune administre y
realizamos el cambio en el nodo de administración conjunta de Configuration
Manager.
4. Instalar el agente de Configuration Manager en dispositivos nuevos que se
inscriban automáticamente en Azure AD (Comprobar que Azure AD Connect esté
configurado en modo Azure AD híbrido) o configurar los dispositivos de Windows
10 que ya son clientes de Configuration Manager para unirlos a Azure AD híbrido
e inscribirlos en Intune.
5. Iniciar sesión en el Centro de seguridad de Microsoft Defender y completar el
asistente de configuración inicial.
6. Iniciar sesión en el centro de administración de Microsoft Intune y navegar hasta
Abrir el Centro de seguridad de Microsoft Defender para conectarse al servicio
Microsoft Defender for Endpoint.
7. En el Centro de seguridad de Microsoft Defender, activar la configuración de
conexión de Microsoft Intune.
Centro Criptológico Nacional 28

![Imagen 1 - Página 28](CCN-STIC 885E_assets\pagina28_img1.png)

![Imagen 2 - Página 28](CCN-STIC 885E_assets\pagina28_img2.png)

![Imagen 3 - Página 28](CCN-STIC 885E_assets\pagina28_img3.png)

![Imagen 4 - Página 28](CCN-STIC 885E_assets\pagina28_img4.png)

![Imagen 5 - Página 28](CCN-STIC 885E_assets\pagina28_img5.png)

---

<!-- Página 29 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
8. En el Centro de seguridad de Microsoft Defender, ir a Onboarding en la
configuración, descargar un paquete de System Center Configuration Manager e
importarlo en el entorno de Configuration Manager. O En el centro de
administración de Microsoft Intune, crear una política de configuración de
dispositivos utilizando el tipo de perfil de Microsoft Defender for Endpoint
(escritorio de Windows 10). Los dispositivos que no son de Windows requieren
un paquete de instalación que debe descargarse del Centro de seguridad de
Microsoft Defender.
9. Para verificar que los dispositivos están correctamente integrados y generando
informes, ejecutar una prueba de detección en los dispositivos recién
incorporados. Estos comandos se encuentran en la configuración del Centro de
seguridad de Microsoft Defender en la sección Onboarding.
2.3.1.3 ARQUITECTURA ON-PREMISES
El siguiente método de despliegue se realiza mediante Configuration Manager u
objetos de directiva de grupo (GPO).
1. Comprobar que los dispositivos que se incorporarán se estén comunicando con
el servicio de Configuration Manager o bien extraigan la política de un
controlador de dominio.
2. Iniciar sesión en el Centro de seguridad de Microsoft Defender y completar el
asistente de configuración inicial.
3. Para realizar la incorporación usando Configuration Manager, ir a la pestaña
Onboarding de Microsoft Defender Security Center en la configuración,
descargar un paquete de System Center Configuration Manager y desplegarlo en
una colección predefinida.
Centro Criptológico Nacional 29

![Imagen 1 - Página 29](CCN-STIC 885E_assets\pagina29_img1.png)

![Imagen 2 - Página 29](CCN-STIC 885E_assets\pagina29_img2.png)

![Imagen 3 - Página 29](CCN-STIC 885E_assets\pagina29_img3.png)

![Imagen 4 - Página 29](CCN-STIC 885E_assets\pagina29_img4.png)

![Imagen 5 - Página 29](CCN-STIC 885E_assets\pagina29_img5.png)

---

<!-- Página 30 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
a. Para hacer el onboard o incorporación mediante política de grupo, ir a la
pestaña Onboard del Centro de seguridad de Microsoft Defender en la
configuración, descargar un paquete de políticas de grupo, crear un
programa en la Consola de administración de políticas de grupo e indicar
que ejecute una tarea para ejecutar el script de incorporación como un
programa.
4. Para verificar que los dispositivos están correctamente integrados y generando
informes, ejecutaremos una prueba de detección en los dispositivos recién
incorporados. Estos comandos se encuentran en la configuración del Centro de
seguridad de Microsoft Defender en la sección Onboarding.
2.3.1.4 SCRIPT Y EVALUACIÓN
El siguiente método de despliegue se realiza mediante script local.
1. Iniciar sesión en el Centro de seguridad de Microsoft Defender y completar el
asistente de configuración inicial.
2. Ir a la pestaña Onboarding del Centro de seguridad de Microsoft Defender en la
configuración, seleccionamos el sistema operativo apropiado y descargar un
script local.
3. Copiar el script en los dispositivos que queremos incorporar y lo ejecutamos
localmente.
4. Para verificar que los dispositivos están correctamente integrados y generando
informes, ejecutaremos una prueba de detección en los dispositivos recién
incorporados. Estos comandos se encuentran en la configuración del Centro de
seguridad de Microsoft Defender en la sección Onboarding.
Centro Criptológico Nacional 30

![Imagen 1 - Página 30](CCN-STIC 885E_assets\pagina30_img1.png)

![Imagen 2 - Página 30](CCN-STIC 885E_assets\pagina30_img2.png)

![Imagen 3 - Página 30](CCN-STIC 885E_assets\pagina30_img3.png)

![Imagen 4 - Página 30](CCN-STIC 885E_assets\pagina30_img4.png)

![Imagen 5 - Página 30](CCN-STIC 885E_assets\pagina30_img5.png)

---

<!-- Página 31 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
2.3.2 SELECCIONAR MÉTODO DE IMPLEMENTACIÓN
Defender for Endpoint admite una variedad de puntos de conexión que se pueden
incorporar al servicio.
En la tabla siguiente se enumeran los puntos de conexión admitidos y la herramienta
de implementación correspondiente:
Extremo Herramienta de implementación
Windows Script local (hasta 10 dispositivos)
Directiva de grupo
Microsoft Intune/ Administrador de dispositivos móviles
Microsoft Endpoint Configuration Manager
Scripts VDI
macOS Script local
Microsoft Intune
Jamf Pro
Administración de dispositivos móviles
Servidores Windows Integración con Microsoft Defender para la nube
Servidores Linux
Servidor Linux Script local
Puppet
Ansible
iOS Basado en aplicaciones
Android Microsoft Intune
Para más información sobre los métodos de implementación, revisar el siguiente
enlace:
Identificación de la arquitectura y el método de implementación de Defender para
punto de conexión - Microsoft Defender for Endpoint | Microsoft Learn
Centro Criptológico Nacional 31

|  | Extremo |  |  | Herramienta de implementación |  |
| --- | --- | --- | --- | --- | --- |
| Windows | Windows |  |  | Script local (hasta 10 dispositivos) |  |
|  |  |  |  | Directiva de grupo |  |
|  |  |  |  | Microsoft Intune/ Administrador de dispositivos móviles |  |
|  |  |  |  | Microsoft Endpoint Configuration Manager |  |
|  |  |  |  | Scripts VDI |  |
| macOS |  |  | Script local <br> Microsoft Intune <br> Jamf Pro <br> Administración de dispositivos móviles |  |  |
|  | Servidores Windows |  | Integración con Microsoft Defender para la nube |  |  |
|  | Servidores Linux |  |  |  |  |
| Servidor Linux |  |  | Script local <br> Puppet <br> Ansible |  |  |
|  | iOS |  |  | Basado en aplicaciones |  |
| Android |  |  | Microsoft Intune |  |  |


![Imagen 1 - Página 31](CCN-STIC 885E_assets\pagina31_img1.png)

![Imagen 2 - Página 31](CCN-STIC 885E_assets\pagina31_img2.png)

![Imagen 3 - Página 31](CCN-STIC 885E_assets\pagina31_img3.png)

![Imagen 4 - Página 31](CCN-STIC 885E_assets\pagina31_img4.png)

---

<!-- Página 32 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
2.4 INCORPORACIÓN DE DISPOSITIVOS EN MICROSOFT DEFENDER FOR
ENDPOINT
Este punto de la configuración puede cambiar dependiendo del método elegido en
el punto anterior para la implementación.
La recomendación a la hora de afrontar una incorporación de dispositivos en
Microsoft Defender para Endpoint es realizar la implementación utilizando un enfoque
basado en anillos.
Un método basado en anillos es una forma de seleccionar un grupo de puntos finales
para integrar y comprobar que se satisfacen ciertas condiciones antes de continuar con
el despliegue del servicio en un número mayor de dispositivos.
2.5 CONFIGURAR LAS FUNCIONALIDADES
Después de incorporar puntos de conexión, se recomienda configurar las
funcionalidades de seguridad en Defender for Endpoint para maximizar la protección de
seguridad en el conjunto de servidores. Las funcionalidades incluyen:
 EDR (Endpoint Detection and Response)
 Defender Vulnerability Management
 Protección de última generación
 Reducción de la superficie expuesta a ataques
 Capacidades de investigación y remediación automática (AIR)
 Microsoft Experts
2.5.1 EDR (ENDPOINT DETECTION AND REPONSE)
Defender for Endpoint ofrece funciones de detección y respuesta de endpoints que
alertan de forma rápida y útil sobre los ataques avanzados. Los analistas de seguridad
pueden ordenar las alertas según su importancia, ver el alcance total de una intrusión y
tomar medidas de respuesta para eliminar las amenazas.
Para más información sobre este apartado, revisar el siguiente enlace:
Introducción a las funcionalidades de detección y respuesta de puntos de conexión
- Microsoft Defender for Endpoint | Microsoft Learn
2.5.2 DEFENDER VULNERABILITY MANAGEMENT
Defender Vulnerability Management permite ver los activos, realizar evaluaciones
inteligentes y usar herramientas de corrección integradas para Windows, macOS, Linux,
Android, iOS y dispositivos de red. Con la información de las amenazas de Microsoft, las
predicciones de las posibilidades de brechas, los contextos comerciales y las
evaluaciones de los dispositivos, Defender Vulnerability Management ordena
rápidamente y de forma continua las vulnerabilidades más graves en sus activos más
importantes y ofrece recomendaciones de seguridad para reducir el riesgo.
Centro Criptológico Nacional 32

![Imagen 1 - Página 32](CCN-STIC 885E_assets\pagina32_img1.png)

![Imagen 2 - Página 32](CCN-STIC 885E_assets\pagina32_img2.png)

![Imagen 3 - Página 32](CCN-STIC 885E_assets\pagina32_img3.png)

![Imagen 4 - Página 32](CCN-STIC 885E_assets\pagina32_img4.png)

---

<!-- Página 33 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Las herramientas avanzadas que ayudan a comprender y evaluar los riesgos son las
siguientes:
 Evaluación de líneas de base de seguridad: diseño de perfiles de línea de base a
medida para evaluar el cumplimiento de riesgos según criterios definidos.
 Conocimiento del software y de sus riesgos: acceso a una visión del inventario
de software de la organización y de las modificaciones del software, como
instalaciones, desinstalaciones y actualizaciones.
 Análisis de recursos compartidos de red: análisis de la configuración de redes
internas que tengan recursos compartidos expuestos a riesgos y posibilidad de
sugerencias de seguridad aplicables.
 Análisis autenticado para Windows: escaneo de forma periódica los dispositivos
Windows no administrados para detectar vulnerabilidades de software.
 Evaluación de vulnerabilidades y ordenamiento de eventos: uso de
ordenamientos de eventos y análisis de vulnerabilidades a nivel de entidad
para identificar y jerarquizar las vulnerabilidades.
 Revisión de las extensiones del navegador: consultas sobre listas de las
extensiones del navegador que se usan en los distintos navegadores de la
organización.
 Revisión de certificados digitales: consultas sobre los certificados que están
instalados en la organización en una página centralizada de inventario de
certificados.
 Revisión de hardware y firmware: consultas sobre la lista de hardware y
firmware conocidos en la organización clasificados por modelos de sistema,
procesadores y BIOS.
2.5.3 PROTECCIÓN DE ÚLTIMA GENERACIÓN
La protección de última generación se basa en Microsoft Defender Antivirus, que es
una solución antimalware integrada que proporciona protección de última generación
para computadoras de escritorio, laptops y servidores.
Esta herramienta incluye:
 Un sistema de protección basado en la nube que detecta y bloquea
rápidamente las amenazas nuevas y emergentes.
 Análisis constante mediante seguimiento avanzado del comportamiento de
procesos y archivos y otras técnicas (también llamado "protección en tiempo
real").
 Protección especializada basada en aprendizaje automático, análisis de datos
masivos con intervención humana y automática e investigación avanzada de
resiliencia frente a amenazas.
Centro Criptológico Nacional 33

![Imagen 1 - Página 33](CCN-STIC 885E_assets\pagina33_img1.png)

![Imagen 2 - Página 33](CCN-STIC 885E_assets\pagina33_img2.png)

![Imagen 3 - Página 33](CCN-STIC 885E_assets\pagina33_img3.png)

![Imagen 4 - Página 33](CCN-STIC 885E_assets\pagina33_img4.png)

---

<!-- Página 34 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
2.5.4 REDUCCIÓN DE LA SUPERFICIE EXPUESTA A ATAQUES
Las superficies de ataque son los puntos débiles de la organización donde puede ser
atacada por ciberamenazas. Defender for Endpoint ofrece varias funcionalidades para
ayudar a disminuir las superficies de ataque.
Entre las más importantes se encuentran:
 Las reglas de reducción de superficie de ataques
 Protección contra exploits
 Protección de red
 Acceso controlado a carpetas
 Control del dispositivo.
2.5.4.1 REGLAS DE SUPERFICIE DE ATAQUE
Las reglas de reducción de la superficie de ataque se centran en algunos aspectos
del comportamiento del software.
El software a veces muestra estos comportamientos en aplicaciones que son
legítimas. Sin embargo, estos comportamientos a menudo se consideran de riesgo
porque los atacantes suelen abusar de ellos mediante malware. Las reglas de reducción
de la superficie de ataque pueden limitar los comportamientos de riesgo basados en el
software y ayudar a mantener segura la organización.
Una guía paso a paso sobre cómo gestionar las reglas de reducción de la superficie
de ataque se puede consultar en los enlaces de cada punto:
 Descripción general de la implementación de reglas de reducción de la
superficie de ataque.
Microsoft Defender para punto de conexión introducción a la implementación
de reglas de reducción de superficie expuesta a ataques - Microsoft Defender
for Endpoint | Microsoft Learn
 Planificar la implementación de reglas de reducción de la superficie de ataque.
Planeación de la implementación de reglas de reducción de superficie expuesta
a ataques - Microsoft Defender for Endpoint | Microsoft Learn
 Pruebas sobre las reglas de reducción de la superficie de ataque.
Reglas de reducción de superficie expuesta a ataques de prueba - Microsoft
Defender for Endpoint | Microsoft Learn
 Habilitar reglas de reducción de la superficie de ataque.
Implementar las reglas de reducción de la superficie expuesta a ataques -
Microsoft Defender for Endpoint | Microsoft Learn
 Poner en práctica las reglas de reducción de la superficie de ataque.
Operacionalización de las reglas de reducción de superficie expuesta a ataques
- Microsoft Defender for Endpoint | Microsoft Learn
Centro Criptológico Nacional 34

![Imagen 1 - Página 34](CCN-STIC 885E_assets\pagina34_img1.png)

![Imagen 2 - Página 34](CCN-STIC 885E_assets\pagina34_img2.png)

![Imagen 3 - Página 34](CCN-STIC 885E_assets\pagina34_img3.png)

![Imagen 4 - Página 34](CCN-STIC 885E_assets\pagina34_img4.png)

---

<!-- Página 35 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
2.5.5 CAPACIDADES DE INVESTIGACIÓN Y REMEDIACIÓN AUTOMÁTICA (AIR)
Al usar esta característica se puede ahorra mucho tiempo ya que, esta herramienta
imita la estrategia ideal que seguiría un analista de seguridad para investigar y remediar
amenazas.
Se puede ajustar el nivel de automatización de la herramienta para que, al detectar
una amenaza, la entidad se pueda corregir de forma automática o solo con el visto
bueno del equipo de seguridad.
Para más información sobre la herramienta, consulte:
Configuración de funcionalidades automatizadas de investigación y corrección -
Microsoft Defender for Endpoint | Microsoft Learn
2.5.6 MICROSOFT DEFENDER EXPERTS FOR HUNTING
Es un servicio administrado que está pensado para organizaciones que cuentan con
un centro de operaciones de seguridad robusto pero que quieren que Microsoft les
apoye en la detección proactiva de amenazas usando datos de Microsoft Defender.
Para más información, acceder a la documentación oficial de Microsoft.
¿Qué es Expertos de detección de Microsoft Defender oferta? - Microsoft Defender
XDR | Microsoft Learn
2.6 FASES DE IMPLEMENTACIÓN
Como hemos visto en el punto anterior el despliegue de Microsoft Defender for
Endpoint comprende cinco fases principales que son preparación para el despliegue,
asignación de roles y permisos, identificación de la infraestructura, incorporación de
dispositivos y configuración de funcionalidades, tal y como se puede ver en la siguiente
imagen.
Para la correcta implementación de la herramienta se han resumido estas cinco fases
en tres, haciendo así la implementación más simple y segura.
2.6.1 PREPARACIÓN
La preparación es clave para realizar una implementación correcta. Aquí se exponen
los puntos que se deben tener en cuenta para preparar una implementación de
Defender for Endpoint.
Partes interesadas y aprobación
Centro Criptológico Nacional 35

![Imagen 1 - Página 35](CCN-STIC 885E_assets\pagina35_img1.png)

![Imagen 2 - Página 35](CCN-STIC 885E_assets\pagina35_img2.png)

![Imagen 3 - Página 35](CCN-STIC 885E_assets\pagina35_img3.png)

![Imagen 4 - Página 35](CCN-STIC 885E_assets\pagina35_img4.png)

![Imagen 5 - Página 35](CCN-STIC 885E_assets\pagina35_img5.png)

---

<!-- Página 36 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
En primer lugar, habrá que identificar a todas las partes interesadas que participan
en el proyecto y necesitan aprobar, revisar o mantenerse informados. Para ello se
recomienda confeccionar la siguiente tabla en donde quedará reflejado.
La siguiente sección sirve para identificar a todas las partes interesadas que
participan en el proyecto y necesitan aprobar, revisar o mantenerse informados.
En la tabla siguiente, se añadirá al personal interesado, según corresponda a nuestra
compañía. Según la acción a desempeñar, hay tres roles bien diferenciados que son:
 SO = Aprobar proyecto
 R = Revisar este proyecto y proporcionar entrada
 I = Informado de este proyecto
Nombre Función Acción
Nombre y correo Director de seguridad de la información (CISO) SO
electrónico
Representante ejecutivo que actúa como patrocinador dentro de la
organización para la nueva implementación de tecnología.
Nombre y correo Jefe del Centro de operaciones de Ciberdefensa (CDOC) SO
electrónico Representante del equipo CDOC encargado de definir cómo se alinea
este cambio con los procesos del equipo de operaciones de seguridad
de clientes.
Nombre y correo Arquitecto de Seguridad R
electrónico
Representante del equipo de seguridad encargado de definir cómo se
alinea este cambio con la arquitectura de seguridad principal de la
organización.
Nombre y correo Workplace Architect R
electrónico
Representante del equipo de IT encargado de definir cómo se alinea
este cambio con la arquitectura básica del lugar de trabajo de la
organización.
Nombre y correo Se pueden ver las alertas generadas desde dispositivos de las I
electrónico organizaciones.
Entorno
Garantiza que las partes interesadas entienden el entorno, lo que ayuda a identificar
posibles dependencias o cambios necesarios en tecnologías o procesos.
Qué Descripción
Recuento de extremos Recuento total de puntos de conexión por sistema operativo.
Centro Criptológico Nacional 36

|  | Nombre |  |  | Función |  |  | Acción |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nombre y correo <br> electrónico | Nombre y correo |  |  | Director de seguridad de la información (CISO) |  | SO | SO |  |
|  | electrónico |  |  |  |  |  |  |  |
|  |  |  |  | Representante ejecutivo que actúa como patrocinador dentro de la |  |  |  |  |
|  |  |  |  | organización para la nueva implementación de tecnología. |  |  |  |  |
| Nombre y correo <br> electrónico |  |  | Jefe del Centro de operaciones de Ciberdefensa (CDOC) <br> Representante del equipo CDOC encargado de definir cómo se alinea <br> este cambio con los procesos del equipo de operaciones de seguridad <br> de clientes. |  |  | SO |  |  |
| Nombre y correo <br> electrónico |  |  |  | Arquitecto de Seguridad |  | R |  |  |
|  |  |  |  | Representante del equipo de seguridad encargado de definir cómo se |  |  |  |  |
|  |  |  |  | alinea este cambio con la arquitectura de seguridad principal de la |  |  |  |  |
|  |  |  |  | organización. |  |  |  |  |
| Nombre y correo <br> electrónico |  |  | Workplace Architect <br> Representante del equipo de IT encargado de definir cómo se alinea <br> este cambio con la arquitectura básica del lugar de trabajo de la <br> organización. |  |  | R |  |  |
| Nombre y correo <br> electrónico |  |  | Se pueden ver las alertas generadas desde dispositivos de las <br> organizaciones. |  |  | I |  |  |


| Nombre y correo |
| --- |
| electrónico |


| Nombre y correo |
| --- |
| electrónico |


| Se pueden ver las alertas generadas desde dispositivos de las |
| --- |
| organizaciones. |


|  | Qué |  |  | Descripción |  |
| --- | --- | --- | --- | --- | --- |
| Recuento de extremos | Recuento de extremos |  | Recuento total de puntos de conexión por sistema operativo. | Recuento total de puntos de conexión por sistema operativo. |  |


![Imagen 1 - Página 36](CCN-STIC 885E_assets\pagina36_img1.png)

![Imagen 2 - Página 36](CCN-STIC 885E_assets\pagina36_img2.png)

![Imagen 3 - Página 36](CCN-STIC 885E_assets\pagina36_img3.png)

![Imagen 4 - Página 36](CCN-STIC 885E_assets\pagina36_img4.png)

---

<!-- Página 37 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Recuento de servidores Recuento total de servidores por versión del sistema operativo.
Motor de administración Nombre y versión del motor de administración (por ejemplo,
System Center Configuration Manager rama actual 1902).
Distribución de CDOC Estructura CDOC de alto nivel (por ejemplo, nivel 1
subcontratado a la empresa X, nivel 2 y nivel 3 internamente
distribuidos en Europa y Asia).
Información de Tecnología SIEM en uso.
seguridad y evento
(SIEM)
Control de acceso basado en roles
Se recomienda usar el concepto de privilegios mínimos. Defender for Endpoint
aprovecha los roles integrados dentro de Microsoft Entra y se recomienda revisar los
diferentes roles disponibles y elegir el adecuado para resolver las necesidades para cada
persona de la aplicación.
Más información en la sección [3.1.2 Control de acceso] de la presente guía.
Orden de adopción
En muchos casos, suele haber implementadas soluciones de seguridad endpoint o al
menos una solución de antivirus como mínimo, pero en otros, también podría haber
implementada ya una solución EDR.
Normalmente, sustituir cualquier solución de seguridad solía ser un proceso
complejo, tedioso y alargado en el tiempo debido a los nulos vínculos entre la capa de
infraestructura y la capa de aplicaciones. Sin embargo, puesto que Defender for
endpoint está integrado en el sistema operativo, es mucho más sencillo reemplazar
soluciones de terceros.
En este caso, se podrá elegir el componente de Defender for endpoint que se va a
utilizar y quitar los que no se apliquen. En la tabla siguiente se indica el orden que
recomendado que se debe seguir para habilitar la solución de Microsoft Defender for
Endpoint.
Componente Descripción Clasificación
de orden de
adopción
Detección de Endpoint Las capacidades de defender para detección y respuesta 1
& Respuesta (EDR) de puntos de conexión endpoint proporcionan
detecciones avanzadas de ataques que son casi en
tiempo real y procesables. Los analistas de seguridad
pueden asignar prioridades a las alertas de forma eficaz,
obtener visibilidad para todo el ámbito de la vulneración
Centro Criptológico Nacional 37

| Recuento de servidores |  |  | Recuento total de servidores por versión del sistema operativo. |
| --- | --- | --- | --- |
| Motor de administración |  |  | Nombre y versión del motor de administración (por ejemplo, <br> System Center Configuration Manager rama actual 1902). |
| Distribución de CDOC |  |  | Estructura CDOC de alto nivel (por ejemplo, nivel 1 <br> subcontratado a la empresa X, nivel 2 y nivel 3 internamente <br> distribuidos en Europa y Asia). |
|  | Información de |  | Tecnología SIEM en uso. |
|  | seguridad y evento |  |  |
|  | (SIEM) |  |  |


| Nombre y versión del motor de administración (por ejemplo, |
| --- |
| System Center Configuration Manager rama actual 1902). |


| Componente | Descripción |  |  |  | Clasificación |  |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  | de orden de |  |
|  |  |  |  |  | adopción |  |
| Detección de Endpoint <br> & Respuesta (EDR) |  | Las capacidades de defender para detección y respuesta |  | 1 | 1 |  |
|  |  | de puntos de conexión endpoint proporcionan |  |  |  |  |
|  |  | detecciones avanzadas de ataques que son casi en |  |  |  |  |
|  |  | tiempo real y procesables. Los analistas de seguridad |  |  |  |  |
|  |  | pueden asignar prioridades a las alertas de forma eficaz, |  |  |  |  |
|  |  | obtener visibilidad para todo el ámbito de la vulneración |  |  |  |  |


| Detección de Endpoint |
| --- |
| & Respuesta (EDR) |


![Imagen 1 - Página 37](CCN-STIC 885E_assets\pagina37_img1.png)

![Imagen 2 - Página 37](CCN-STIC 885E_assets\pagina37_img2.png)

![Imagen 3 - Página 37](CCN-STIC 885E_assets\pagina37_img3.png)

![Imagen 4 - Página 37](CCN-STIC 885E_assets\pagina37_img4.png)

---

<!-- Página 38 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
y llevar a cabo acciones de respuesta para corregir las
amenazas.
Amenazas & Threat & Vulnerability Management es un componente 2
Administración de de Microsoft Defender for endpoint y proporciona a los
vulnerabilidades (TVM) administradores de seguridad y a los equipos de
operaciones de seguridad un valor único, incluyendo:
- Información en tiempo detección y respuesta de
puntos de conexión (EDR) correlacionada con
vulnerabilidades de punto de conexión
- Contexto de vulnerabilidad de dispositivo
incalculable durante investigaciones de incidentes
- Procesos de corrección integrados mediante
Microsoft Intune y Microsoft System Center
Configuration Manager
Protección de última Antivirus de Microsoft Defender es una solución 3
generación (NGP) antimalware integrada que proporciona protección de
última generación para escritorios, equipos portátiles y
servidores. El Antivirus de Microsoft Defender incluye:
- Protección entregada en nube para la detección
casi instantánea y bloqueo de amenazas nuevas y
emergentes. Junto con Intelligent Security Graph y el
aprendizaje automático, la protección en la nube forma
parte de las tecnologías de última generación utilizadas
por el Antivirus de Microsoft Defender.
- Análisis continuo mediante la supervisión
avanzada del comportamiento de procesos y archivos y
otras heurísticas (también conocida como "protección
en tiempo real").
- Actualizaciones de protección dedicadas basadas
en machine learning, análisis de big data automatizado
e investigación detallada de resistencia a amenazas.
Reducción de superficie Las capacidades de reducción de ataque de superficie en No aplicable
de ataque (ASR) Microsoft Defender for endpoint ayudan a proteger los
dispositivos y aplicaciones de la compañía frente a
amenazas nuevas y emergentes.
Auto Investigation & Microsoft Defender for endpoint usa investigaciones No aplicable
Remediation (AIR) automatizadas para reducir significativamente el
volumen de alertas que deben investigarse
individualmente. La característica de investigación
automatizada aprovecha varios algoritmos de
inspección y procesos usados por analistas, como
playbooks, para examinar alertas y tomar medidas de
corrección inmediatas para resolver infracciones. Esto
reduce considerablemente el volumen de alertas, lo que
facilita que los expertos de operaciones de seguridad
Centro Criptológico Nacional 38

|  | y llevar a cabo acciones de respuesta para corregir las <br> amenazas. |  |  |  |
| --- | --- | --- | --- | --- |
| Amenazas & <br> Administración de <br> vulnerabilidades (TVM) | Threat & Vulnerability Management es un componente <br> de Microsoft Defender for endpoint y proporciona a los <br> administradores de seguridad y a los equipos de <br> operaciones de seguridad un valor único, incluyendo: <br> - Información en tiempo detección y respuesta de <br> puntos de conexión (EDR) correlacionada con <br> vulnerabilidades de punto de conexión <br> - Contexto de vulnerabilidad de dispositivo <br> incalculable durante investigaciones de incidentes <br> - Procesos de corrección integrados mediante <br> Microsoft Intune y Microsoft System Center <br> Configuration Manager |  |  | 2 |
| Protección de última <br> generación (NGP) |  | Antivirus de Microsoft Defender es una solución |  | 3 |
|  |  | antimalware integrada que proporciona protección de |  |  |
|  |  | última generación para escritorios, equipos portátiles y |  |  |
|  |  | servidores. El Antivirus de Microsoft Defender incluye: |  |  |
|  |  | - Protección entregada en nube para la detección |  |  |
|  |  | casi instantánea y bloqueo de amenazas nuevas y |  |  |
|  |  | emergentes. Junto con Intelligent Security Graph y el |  |  |
|  |  | aprendizaje automático, la protección en la nube forma |  |  |
|  |  | parte de las tecnologías de última generación utilizadas |  |  |
|  |  | por el Antivirus de Microsoft Defender. |  |  |
|  |  | - Análisis continuo mediante la supervisión |  |  |
|  |  | avanzada del comportamiento de procesos y archivos y |  |  |
|  |  | otras heurísticas (también conocida como "protección |  |  |
|  |  | en tiempo real"). |  |  |
|  |  | - Actualizaciones de protección dedicadas basadas |  |  |
|  |  | en machine learning, análisis de big data automatizado |  |  |
|  |  | e investigación detallada de resistencia a amenazas. |  |  |
| Reducción de superficie <br> de ataque (ASR) | Las capacidades de reducción de ataque de superficie en <br> Microsoft Defender for endpoint ayudan a proteger los <br> dispositivos y aplicaciones de la compañía frente a <br> amenazas nuevas y emergentes. |  |  | No aplicable |
| Auto Investigation & <br> Remediation (AIR) |  | Microsoft Defender for endpoint usa investigaciones |  | No aplicable |
|  |  | automatizadas para reducir significativamente el |  |  |
|  |  | volumen de alertas que deben investigarse |  |  |
|  |  | individualmente. La característica de investigación |  |  |
|  |  | automatizada aprovecha varios algoritmos de |  |  |
|  |  | inspección y procesos usados por analistas, como |  |  |
|  |  | playbooks, para examinar alertas y tomar medidas de |  |  |
|  |  | corrección inmediatas para resolver infracciones. Esto |  |  |
|  |  | reduce considerablemente el volumen de alertas, lo que |  |  |
|  |  | facilita que los expertos de operaciones de seguridad |  |  |


| y llevar a cabo acciones de respuesta para corregir las |
| --- |
| amenazas. |


| Protección de última |
| --- |
| generación (NGP) |


| Auto Investigation & |
| --- |
| Remediation (AIR) |


![Imagen 1 - Página 38](CCN-STIC 885E_assets\pagina38_img1.png)

![Imagen 2 - Página 38](CCN-STIC 885E_assets\pagina38_img2.png)

![Imagen 3 - Página 38](CCN-STIC 885E_assets\pagina38_img3.png)

![Imagen 4 - Página 38](CCN-STIC 885E_assets\pagina38_img4.png)

---

<!-- Página 39 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
puedan centrarse en amenazas más complejas y otras
iniciativas de alto valor.
Expertos en amenazas Expertos en amenazas de Microsoft es un servicio de No aplicable
de Microsoft (MTE) búsqueda administrado que proporciona a los Centros
de operaciones de seguridad (SOC) supervisión y análisis
de nivel de experto para ayudarles a garantizar que las
amenazas críticas en sus entornos únicos no se pierden.
2.6.2 CONFIGURACIÓN
Pasos iniciales para tener acceso al portal, como validar licencias, completar el
asistente de instalación y configuración de red.
Nota: Con el fin de mostrar una implementación típica, este escenario solo abarcará el uso de
Script local. Defender for Endpoint admite el uso de otras herramientas de incorporación, pero
no cubrirá esos escenarios en la guía de implementación.
Comprobar el estado de la licencia
Comprobar el estado de la licencia y si se aprovisionó correctamente, se puede
realizar a través del Centro de administración o a través del portal Microsoft Entra.
Para acceder a las licencias, entrar al portal de Azure, Entra y a continuación
seleccionar Facturación > licencias.
Como alternativa, se puede acceder desde el Centro de Administración de Microsoft
365:
Centro Criptológico Nacional 39

|  | puedan centrarse en amenazas más complejas y otras <br> iniciativas de alto valor. |  |
| --- | --- | --- |
| Expertos en amenazas <br> de Microsoft (MTE) | Expertos en amenazas de Microsoft es un servicio de <br> búsqueda administrado que proporciona a los Centros <br> de operaciones de seguridad (SOC) supervisión y análisis <br> de nivel de experto para ayudarles a garantizar que las <br> amenazas críticas en sus entornos únicos no se pierden. | No aplicable |


| puedan centrarse en amenazas más complejas y otras |
| --- |
| iniciativas de alto valor. |


| Nota: Con el fin de mostrar una implementación típica, este escenario solo abarcará el uso de |
| --- |
| Script local. Defender for Endpoint admite el uso de otras herramientas de incorporación, pero |
| no cubrirá esos escenarios en la guía de implementación. |


![Imagen 1 - Página 39](CCN-STIC 885E_assets\pagina39_img1.png)

![Imagen 2 - Página 39](CCN-STIC 885E_assets\pagina39_img2.png)

![Imagen 3 - Página 39](CCN-STIC 885E_assets\pagina39_img3.png)

![Imagen 4 - Página 39](CCN-STIC 885E_assets\pagina39_img4.png)

![Imagen 5 - Página 39](CCN-STIC 885E_assets\pagina39_img5.png)

---

<!-- Página 40 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Configuración del espacio empresarial
Desde un explorador web, acceder al Centro Microsoft 365 seguridad.
https://security.microsoft.com/
Configuración de red
Si la organización no requiere que los puntos de conexión usen un proxy para tener
acceso a Internet, omitir esta sección. En caso contrario, obtener información completa
en la documentación de Microsoft:
Configuración de Microsoft Defender para punto de conexión implementación -
Microsoft Defender for Endpoint | Microsoft Learn
2.6.3 INCORPORACIÓN (ONBOARD)
Después de identificar la arquitectura, hay que decidir qué método de
implementación usar. La herramienta de implementación que se elija influye en la forma
en que se incorporan puntos de conexión al servicio.
Centro Criptológico Nacional 40

![Imagen 1 - Página 40](CCN-STIC 885E_assets\pagina40_img1.png)

![Imagen 2 - Página 40](CCN-STIC 885E_assets\pagina40_img2.png)

![Imagen 3 - Página 40](CCN-STIC 885E_assets\pagina40_img3.png)

![Imagen 4 - Página 40](CCN-STIC 885E_assets\pagina40_img4.png)

![Imagen 5 - Página 40](CCN-STIC 885E_assets\pagina40_img5.png)

---

<!-- Página 41 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Nota: Consultar los distintos métodos de implementación en la sección [2.3.2 Seleccionar
método de implementación].
2.7 DESPLIEGUE PASO A PASO CON SCRIPTING LOCAL
A continuación, se explica, a modo de ejemplo, un despliegue paso a paso con el
método de implementación de “Script local”.
Existen otros métodos de despliegue, como se detalla en la sección [2.3.2
Seleccionar método de implementación].
2.7.1 SCRIPT LOCAL PARA WINDOWS 10/11
Cuando se ejecuta el script de incorporación en un dispositivo, se establece una
confianza con Microsoft Entra ID (si no existe previamente), se registra el dispositivo en
Microsoft Intune (si no está registrado todavía) y, luego, se incorpora el dispositivo a
Defender for Business.
1. Acceder al Centro de Seguridad con las credenciales de acceso.
2. En el panel de navegación, elegir Configuracion > Endpoints, y, a continuación,
elegir Incorporación.
Centro Criptológico Nacional 41

| Nota: Consultar los distintos métodos de implementación en la sección [2.3.2 Seleccionar |
| --- |
| método de implementación]. |


![Imagen 1 - Página 41](CCN-STIC 885E_assets\pagina41_img1.png)

![Imagen 2 - Página 41](CCN-STIC 885E_assets\pagina41_img2.png)

![Imagen 3 - Página 41](CCN-STIC 885E_assets\pagina41_img3.png)

![Imagen 4 - Página 41](CCN-STIC 885E_assets\pagina41_img4.png)

![Imagen 5 - Página 41](CCN-STIC 885E_assets\pagina41_img5.png)

---

<!-- Página 42 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
3. Seleccionar Windows 10 y 11 y, a continuación, en la sección Método de
implementación, elegir Script local.
4. Seleccionar Descargar el paquete de incorporación. Se recomienda guardar el
paquete de incorporación en una unidad extraíble.
Centro Criptológico Nacional 42

![Imagen 1 - Página 42](CCN-STIC 885E_assets\pagina42_img1.png)

![Imagen 2 - Página 42](CCN-STIC 885E_assets\pagina42_img2.png)

![Imagen 3 - Página 42](CCN-STIC 885E_assets\pagina42_img3.png)

![Imagen 4 - Página 42](CCN-STIC 885E_assets\pagina42_img4.png)

![Imagen 5 - Página 42](CCN-STIC 885E_assets\pagina42_img5.png)

---

<!-- Página 43 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
2.7.1.1 ONBOARDING DE DISPOSITIVOS
Siguiendo el orden de configuración anterior:
5. Acceder al dispositivo a incorporar y ejecutar el sw. descargado.
En este paso se ejecutará el script para incorporar un dispositivo. Deberá ejecutarse
en tantos dispositivos como sea necesario. Para el escenario que se está presentando,
se ejecutará en una máquina con Windows 11.
Nota: Para este escenario se utilizará una máquina virtual de HyperV, con sistema operativo Windows
11 Pro.
Para saber los dispositivos compatibles y resto de requerimientos consultar la sección [1. 7
Prerrequisitos Microsoft Defender for Endpoint].
Ejecutar el archivo con privilegios de administración:
Centro Criptológico Nacional 43

| Nota: Para este escenario se utilizará una máquina virtual de HyperV, con sistema operativo Windows |
| --- |
| 11 Pro. |
| Para saber los dispositivos compatibles y resto de requerimientos consultar la sección [1. 7 |
| Prerrequisitos Microsoft Defender for Endpoint]. |


![Imagen 1 - Página 43](CCN-STIC 885E_assets\pagina43_img1.png)

![Imagen 2 - Página 43](CCN-STIC 885E_assets\pagina43_img2.png)

![Imagen 3 - Página 43](CCN-STIC 885E_assets\pagina43_img3.png)

![Imagen 4 - Página 43](CCN-STIC 885E_assets\pagina43_img4.png)

![Imagen 5 - Página 43](CCN-STIC 885E_assets\pagina43_img5.png)

![Imagen 6 - Página 43](CCN-STIC 885E_assets\pagina43_img6.png)

![Imagen 7 - Página 43](CCN-STIC 885E_assets\pagina43_img7.jpeg)

---

<!-- Página 44 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
WindowsDefenderATPLocalOnboardingScript.cmd
A continuación, pulsar “Y”:
Comienza el proceso de Onboarding de Microsoft Defender for Endpoint:
Pulsar cualquier tecla para finalizar.
La máquina aparecerá en el portal entre 5-30 minutos después.
6. Comprobar que el dispositivo ha sido agregado adecuadamente:
Ejecutar el siguiente comando en el dispositivo incorporado en el paso anterior, en
una ventana CMD:
powershell.exe -NoExit -ExecutionPolicy Bypass -WindowStyle Hidden $ErrorActionPreference=
'silentlycontinue';(New-Object System.Net.WebClient).DownloadFile('http://127.0.0.1/1.exe',
'C:\\test-WDATP-test\\invoice.exe');Start-Process 'C:\\test-WDATP-test\\invoice.exe'
La ventana se cerrará automáticamente.
Si se realizó correctamente, la prueba de detección se marcará como completada y
en unos minutos se mostrará una nueva alerta en el portal de Microsoft Defender.
Centro Criptológico Nacional 44

![Imagen 1 - Página 44](CCN-STIC 885E_assets\pagina44_img1.png)

![Imagen 2 - Página 44](CCN-STIC 885E_assets\pagina44_img2.png)

![Imagen 3 - Página 44](CCN-STIC 885E_assets\pagina44_img3.png)

![Imagen 4 - Página 44](CCN-STIC 885E_assets\pagina44_img4.png)

![Imagen 5 - Página 44](CCN-STIC 885E_assets\pagina44_img5.png)

![Imagen 6 - Página 44](CCN-STIC 885E_assets\pagina44_img6.png)

![Imagen 7 - Página 44](CCN-STIC 885E_assets\pagina44_img7.png)

---

<!-- Página 45 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
2.7.2 INVENTARIO DE DISPOSITIVOS AGREGADOS
Así, por ejemplo, en “Dispositivos” aparecerá la lista de dispositivos inventariados
para Microsoft Defender:
Centro Criptológico Nacional 45

![Imagen 1 - Página 45](CCN-STIC 885E_assets\pagina45_img1.png)

![Imagen 2 - Página 45](CCN-STIC 885E_assets\pagina45_img2.png)

![Imagen 3 - Página 45](CCN-STIC 885E_assets\pagina45_img3.png)

![Imagen 4 - Página 45](CCN-STIC 885E_assets\pagina45_img4.png)

![Imagen 5 - Página 45](CCN-STIC 885E_assets\pagina45_img5.png)

![Imagen 6 - Página 45](CCN-STIC 885E_assets\pagina45_img6.png)

---

<!-- Página 46 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
3. CONFIGURACIÓN SEGURA PARA MICROSOFT DEFENDER FOR
ENDPOINT
Dentro de este apartado se definen una serie de medidas de obligado cumplimiento
para la normativa del Esquema Nacional de Seguridad (ENS) establecidas en el BOE-A-
2022-7191 Real Decreto 311/2022, de 3 de mayo:
https://www.boe.es/diario_boe/txt.php?id=BOE-A-2022-7191
3.1 MARCO OPERACIONAL
3.1.1 CONTROL DE ACCESO
El control de acceso comprende el conjunto de actividades preparatorias y ejecutivas
tendentes a permitir o denegar a una entidad, usuario o proceso, el acceso a un recurso
del sistema para la realización de una acción concreta.
3.1.1.1 IDENTIFICACIÓN
La gestión de identidades de Microsoft Entra ID es común para el acceso a todas las
funcionalidades de todo Microsoft 365, lo que también incluye Microsoft Defender para
O365 y se describe en la guía [CCN-STIC-885A - Guía de configuración segura para Office
365].
3.1.1.2 REQUISITOS DE ACCESO
Según el ENS, los recursos del sistema se protegerán con algún mecanismo que
impida su utilización, salvo a las entidades que disfruten de derechos de acceso
suficientes. Además, todos los usuarios autorizados deben tener un conjunto de
atributos de seguridad (privilegios) que puedan ser mantenidos individualmente.
Para dar cumplimiento a estos requerimientos, Defender for Endpoint dispone de un
sistema completo de permisos, administrados de dos formas distintas:
 Administración de Permisos Básicos: se establecen permisos de acceso
completo o solo lectura. En el caso de la gestión de permisos de usuarios como
Administrador global o Administrador de seguridad de Azure Active Directory,
tendrán acceso completo, mientras que el rol Lector de seguridad tiene acceso
de solo lectura.
 Control de acceso basado en roles (RBAC): Se establecen permisos granulares
definiendo roles, asignando grupos de usuarios de Azure AD a los roles y
concediendo a los grupos de usuarios acceso a grupos de dispositivos.
Nota: Para obtener información completa sobre la creación de roles RBAC consultar la guía [CCN-STIC-
884A - Guía de configuración segura para Azure].
Consideraciones
Centro Criptológico Nacional 46

| Nota: Para obtener información completa sobre la creación de roles RBAC consultar la guía [CCN-STIC- |
| --- |
| 884A - Guía de configuración segura para Azure]. |


![Imagen 1 - Página 46](CCN-STIC 885E_assets\pagina46_img1.png)

![Imagen 2 - Página 46](CCN-STIC 885E_assets\pagina46_img2.png)

![Imagen 3 - Página 46](CCN-STIC 885E_assets\pagina46_img3.png)

![Imagen 4 - Página 46](CCN-STIC 885E_assets\pagina46_img4.png)

---

<!-- Página 47 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Si ya se ha asignado permisos básicos, se puede cambiar a RBAC en cualquier
momento. Tenga en cuenta lo siguiente antes de realizar el cambio:
 A los usuarios con acceso completo (usuarios a los que se les asigna el rol de
directorio Administrador global o Administrador de seguridad en Azure AD), se
les asigna automáticamente el rol de administrador de Defender for Endpoint
predeterminado, que también tiene acceso completo. Después de cambiar a
RBAC, se pueden asignar grupos de usuarios de Azure AD adicionales al rol de
administrador Defender for Endpoint. Solo los usuarios asignados al rol de
administrador Defender for Endpoint pueden administrar permisos mediante
RBAC.
 Los usuarios con acceso de solo lectura (lectores de seguridad) perderán el
acceso al portal hasta que se les asigne un rol. Tenga en cuenta que solo se puede
asignar un rol a los grupos de usuarios de Azure AD en RBAC.
 Después de cambiar a RBAC, no se podrá volver a usar la administración de
permisos básicos.
Es posible que algunos roles deban aplicarse temporalmente y quitarse una vez
completada la implementación. Conviene llevar un control con los roles relacionados en
la organización, las funciones que realiza, si necesita algún rol adicional de Azure, y las
personas físicas a las cuales se les ha asignado:
Rol Funciones Rol de Azure AD (si Asignar
fuese necesario) a
Administrador de seguridad
Analista de seguridad
Administrador de extremos
Administrador de
infraestructura
Propietario/stakeholder de la
empresa
Es recomendable utilizar el denominado Privileged Identity Management (PIM) para
proporcionar auditoría, control y revisión de acceso adicionales para los usuarios con
permisos de directorio.
Se recomienda aprovechar RBAC para asegurarnos de que solo los usuarios que
tienen justificación pueden acceder a Defender for Endpoint. La persona responsable
del recurso deberá encargarse de administrar los derechos de acceso a los mismos, tal
y como se indica en el ENS.
En la siguiente tabla se puede ver un ejemplo de los roles que se podrían asignar a
un departamento de seguridad. De esta forma se podría definir una estructura RBAC
acorde al entorno.
Centro Criptológico Nacional 47

| Rol |  |  | Funciones |  |  |  | Rol de Azure AD (si |  |  | Asignar |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  | fuese necesario) |  |  | a |  |
|  | Administrador de seguridad |  |  |  |  |  |  |  |  |  |  |
| Analista de seguridad |  |  |  |  |  |  |  |  |  |  |  |
|  | Administrador de extremos |  |  |  |  |  |  |  |  |  |  |
| Administrador de <br> infraestructura |  |  |  |  |  |  |  |  |  |  |  |
|  | Propietario/stakeholder de la |  |  |  |  |  |  |  |  |  |  |
|  | empresa |  |  |  |  |  |  |  |  |  |  |


![Imagen 1 - Página 47](CCN-STIC 885E_assets\pagina47_img1.png)

![Imagen 2 - Página 47](CCN-STIC 885E_assets\pagina47_img2.png)

![Imagen 3 - Página 47](CCN-STIC 885E_assets\pagina47_img3.png)

![Imagen 4 - Página 47](CCN-STIC 885E_assets\pagina47_img4.png)

---

<!-- Página 48 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Nivel Descripción Permiso necesario
Nivel 1 Equipo de operaciones de seguridad local / equipo N/A
de TI
Este equipo normalmente realiza una clasificación e
investiga las alertas contenidas en la geolocalización
y escala al nivel 2 en los casos en los que se requiere
una corrección activa.
Nivel 2 Equipo de operaciones de seguridad regional Ver datos
Este equipo puede ver todos los dispositivos de la
región y realizar acciones de corrección.
Nivel 3 Equipo de operaciones de seguridad global Ver datos
Este equipo está formado por expertos en seguridad Investigación de alertas Acciones
y está autorizado a ver y realizar todas las acciones de corrección activas
desde el portal.
Investigación de alertas Acciones
de corrección activas
Administrar la configuración del
sistema del portal
Administrar la configuración de
seguridad
3.1.1.3 SEGREGACIÓN DE FUNCIONES Y TAREAS
Según el ENS, el sistema de control de acceso se organizará de forma que se exija la
concurrencia de dos o más personas para realizar tareas críticas, anulando la posibilidad
de que un solo individuo autorizado, pueda abusar de sus derechos para cometer alguna
acción ilícita.
Como se ha comentado en la sección de requisitos de acceso, una forma simplificada
de establecer el acceso a la aplicación es mediante la asignación de una serie de
permisos básicos englobados en dos roles:
 Acceso completo
Los usuarios con acceso completo pueden iniciar sesión, ver toda la información
del sistema y resolver alertas, enviar archivos para un análisis profundo y
descargar el paquete de incorporación. La asignación de derechos de acceso
completo requiere agregar los usuarios a los roles integrados "Administrador de
seguridad" o "Administrador global" de AAD.
 Acceso de solo lectura
Los usuarios con acceso de solo lectura pueden iniciar sesión, ver todas las
alertas e información relacionada. No podrán cambiar los estados de alerta,
enviar archivos para un análisis profundo o realizar operaciones de cambio de
Centro Criptológico Nacional 48

|  | Nivel |  |  | Descripción |  |  | Permiso necesario |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nivel 1 | Nivel 1 |  |  | Equipo de operaciones de seguridad local / equipo |  | N/A | N/A |  |
|  |  |  |  | de TI |  |  |  |  |
|  |  |  |  | Este equipo normalmente realiza una clasificación e |  |  |  |  |
|  |  |  |  | investiga las alertas contenidas en la geolocalización |  |  |  |  |
|  |  |  |  | y escala al nivel 2 en los casos en los que se requiere |  |  |  |  |
|  |  |  |  | una corrección activa. |  |  |  |  |
| Nivel 2 |  |  | Equipo de operaciones de seguridad regional <br> Este equipo puede ver todos los dispositivos de la <br> región y realizar acciones de corrección. |  |  | Ver datos |  |  |
| Nivel 3 |  |  | Equipo de operaciones de seguridad global <br> Este equipo está formado por expertos en seguridad <br> y está autorizado a ver y realizar todas las acciones <br> desde el portal. |  |  |  | Ver datos |  |
|  |  |  |  |  |  |  | Investigación de alertas Acciones |  |
|  |  |  |  |  |  |  | de corrección activas |  |
|  |  |  |  |  |  |  | Investigación de alertas Acciones |  |
|  |  |  |  |  |  |  | de corrección activas |  |
|  |  |  |  |  |  |  | Administrar la configuración del |  |
|  |  |  |  |  |  |  | sistema del portal |  |
|  |  |  |  |  |  |  | Administrar la configuración de |  |
|  |  |  |  |  |  |  | seguridad |  |


| Nivel 3 |
| --- |


| Equipo de operaciones de seguridad global |
| --- |
| Este equipo está formado por expertos en seguridad |
| y está autorizado a ver y realizar todas las acciones |
| desde el portal. |


![Imagen 1 - Página 48](CCN-STIC 885E_assets\pagina48_img1.png)

![Imagen 2 - Página 48](CCN-STIC 885E_assets\pagina48_img2.png)

![Imagen 3 - Página 48](CCN-STIC 885E_assets\pagina48_img3.png)

![Imagen 4 - Página 48](CCN-STIC 885E_assets\pagina48_img4.png)

---

<!-- Página 49 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
estado. La asignación de derechos de acceso de solo lectura requiere agregar los
usuarios al rol integrado de Azure AD "Lector de seguridad".
También pueden establecerse nuevos roles aún más segregados para tareas
específicas, como “acciones de corrección activas” e “investigación de alertas”.
Consultar el apartado [4.1.2 Permisos].
A continuación, se detallan las distintas opciones de permisos:
 Ver datos
- Operaciones de seguridad: ver todos los datos de operaciones de
seguridad en el portal.
- Administración de vulnerabilidades y amenazas: Ver amenazas y datos de
administración de vulnerabilidades en el portal.
 Acciones de corrección activas
- Operaciones de seguridad: realizar acciones de respuesta, aprobar o
descartar acciones de corrección pendientes, administrar listas
permitidas o bloqueadas para automatización.
- Amenazas y administración de vulnerabilidades - Control de
excepciones: crear nuevas excepciones y administrar excepciones
activas.
- Amenazas y administración de vulnerabilidades - Control de remediación:
enviar nuevas solicitudes de corrección, crear tickets y administrar las
actividades de remediación existentes.
 Investigación de alertas: administrar alertas, iniciar investigaciones
automatizadas, ejecutar exámenes, recopilar paquetes de investigación,
administrar etiquetas de dispositivo y descargar solo archivos portables
ejecutables (PE).
 Administrar la configuración de sistema del portal: configurar las opciones de
almacenamiento, SIEM y la API Intel de amenazas (se aplica globalmente), la
configuración avanzada, las cargas automatizadas de archivos, los roles y los
grupos de dispositivos
- Esta configuración solo está disponible en el rol Administrador de
Microsoft Defender for Endpoint (predeterminado).
 Administrar la configuración de seguridad en el Centro de seguridad: configure
la configuración de supresión de alertas, administre las exclusiones de carpetas
para la automatización, los dispositivos integrados y externos, y administre las
notificaciones de correo electrónico, administre el laboratorio de evaluación
 Capacidades de respuesta en directo:
- Comandos básicos:
 Iniciar una sesión de respuesta en directo
 Realizar comandos de solo lectura de respuesta en directo en
dispositivo remoto (excepto copia y ejecución de archivos)
 Descargar un archivo desde el dispositivo remoto a través de
una respuesta en directo
- Comandos avanzados:
Centro Criptológico Nacional 49

| - Operaciones de seguridad: ver todos los datos de operaciones de |
| --- |
| seguridad en el portal. |
| - Administración de vulnerabilidades y amenazas: Ver amenazas y datos de |
| administración de vulnerabilidades en el portal. |


| - Operaciones de seguridad: realizar acciones de respuesta, aprobar o |
| --- |
| descartar acciones de corrección pendientes, administrar listas |
| permitidas o bloqueadas para automatización. |
| - Amenazas y administración de vulnerabilidades - Control de |
| excepciones: crear nuevas excepciones y administrar excepciones |
| activas. |
| - Amenazas y administración de vulnerabilidades - Control de remediación: |
| enviar nuevas solicitudes de corrección, crear tickets y administrar las |
| actividades de remediación existentes. |


| - Esta configuración solo está disponible en el rol Administrador de |
| --- |
| Microsoft Defender for Endpoint (predeterminado). |


| - Comandos básicos: |  |
| --- | --- |
|  |  Iniciar una sesión de respuesta en directo |
|  |  Realizar comandos de solo lectura de respuesta en directo en |
|  | dispositivo remoto (excepto copia y ejecución de archivos) |
|  |  Descargar un archivo desde el dispositivo remoto a través de |
|  | una respuesta en directo |
| - Comandos avanzados: |  |


![Imagen 1 - Página 49](CCN-STIC 885E_assets\pagina49_img1.png)

![Imagen 2 - Página 49](CCN-STIC 885E_assets\pagina49_img2.png)

![Imagen 3 - Página 49](CCN-STIC 885E_assets\pagina49_img3.png)

![Imagen 4 - Página 49](CCN-STIC 885E_assets\pagina49_img4.png)

---

<!-- Página 50 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
 Descargar archivos PE y que no son PE de la página de archivos
 Cargar un archivo al dispositivo remoto
 Ver un script desde la biblioteca de archivos
 Ejecutar un script en el dispositivo remoto desde la biblioteca de
archivos
Para la asignación de roles, pueden usarse cualquiera de las siguientes soluciones:
Azure PowerShell o el Portal de Azure.
Establecer roles mediante PowerShell
Seguir estos pasos para asignar roles de seguridad:
 Para obtener acceso de lectura y escritura, se asignan usuarios al rol de
administrador de seguridad mediante el siguiente comando:
Add-MsolRoleMember -RoleName "Security Administrator" -RoleMemberEmailAddress
"secadmin@Contoso.onmicrosoft.com"
 Para el acceso de solo lectura, se asignan usuarios al rol de lector de seguridad
mediante el siguiente comando:
Add-MsolRoleMember -RoleName "Security Reader" -RoleMemberEmailAddress reader@Contoso.onmicrosoft.com
Establecer roles mediante el Portal Entra
Comúnmente, se asignan roles de Entra ID a los usuarios desde la página Roles
asignados de un usuario. Se puede igualmente configurar que se eleve la idoneidad del
usuario cuando sea necesario a un rol mediante Privileged Identity Management (PIM).
Nota: Para obtener información completa consultar la guía [CCN-STIC-884A - Guía de configuración
segura para Azure].
3.1.1.4 PROCESO DE GESTIÓN DE DERECHOS DE ACCESO
Según el ENS los derechos de acceso de cada entidad, usuario o proceso deben
limitarse.
Mediante el acceso condicional de Microsoft Entra, se podrá prohibir el acceso a los
servicios de Defender for Endpoint, salvo autorización expresa.
Nota: Para obtener información completa consultar la guía [CCN-STIC-884A - Guía de configuración
segura para Azure].
Para lograr el mínimo privilegio posible para el cumplimiento de obligaciones y funciones de los
usuarios, entidades o procesos, se hace uso de RBAC, asignando así el rol necesario con el mínimo
privilegio posible.
Establecer roles mediante la configuración de Microsoft Defender
En el apartado de Configuración del portal de Microsoft Defender, dirigirse a Puntos
de conexión para definir roles de administrador, permisos y grupos definidos a los roles
en el apartado Permisos -> Roles.
Centro Criptológico Nacional 50

|  Descargar archivos PE y que no son PE de la página de archivos |
| --- |
|  Cargar un archivo al dispositivo remoto |
|  Ver un script desde la biblioteca de archivos |
|  Ejecutar un script en el dispositivo remoto desde la biblioteca de |
| archivos |


| Nota: Para obtener información completa consultar la guía [CCN-STIC-884A - Guía de configuración |
| --- |
| segura para Azure]. |


| Nota: Para obtener información completa consultar la guía [CCN-STIC-884A - Guía de configuración |
| --- |
| segura para Azure]. |
| Para lograr el mínimo privilegio posible para el cumplimiento de obligaciones y funciones de los |
| usuarios, entidades o procesos, se hace uso de RBAC, asignando así el rol necesario con el mínimo |
| privilegio posible. |


![Imagen 1 - Página 50](CCN-STIC 885E_assets\pagina50_img1.png)

![Imagen 2 - Página 50](CCN-STIC 885E_assets\pagina50_img2.png)

![Imagen 3 - Página 50](CCN-STIC 885E_assets\pagina50_img3.png)

![Imagen 4 - Página 50](CCN-STIC 885E_assets\pagina50_img4.png)

---

<!-- Página 51 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Una vez en esta pantalla se puede crear el rol que se necesite en cada momento.
Para asignarlo después al grupo de usuarios que se quiera que tengan los roles
creados.
Centro Criptológico Nacional 51

![Imagen 1 - Página 51](CCN-STIC 885E_assets\pagina51_img1.png)

![Imagen 2 - Página 51](CCN-STIC 885E_assets\pagina51_img2.png)

![Imagen 3 - Página 51](CCN-STIC 885E_assets\pagina51_img3.png)

![Imagen 4 - Página 51](CCN-STIC 885E_assets\pagina51_img4.png)

![Imagen 5 - Página 51](CCN-STIC 885E_assets\pagina51_img5.png)

![Imagen 6 - Página 51](CCN-STIC 885E_assets\pagina51_img6.png)

---

<!-- Página 52 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Establecer roles mediante PowerShell
Seguir estos pasos para asignar roles de seguridad:
 Para obtener acceso de lectura y escritura, se asignan usuarios al rol de
administrador de seguridad mediante el siguiente comando:
Add-MsolRoleMember -RoleName "Security Administrator" -RoleMemberEmailAddress
"secadmin@Contoso.onmicrosoft.com"
 Para el acceso de solo lectura, se asignan usuarios al rol de lector de seguridad
mediante el siguiente comando:
Add-MsolRoleMember -RoleName "Security Reader" -RoleMemberEmailAddress reader@Contoso.onmicrosoft.com
Establecer roles mediante el Portal de Entra ID
Comúnmente, se asignan roles de Entra ID a los usuarios desde la página Roles
asignados de un usuario. Se puede igualmente configurar que se eleve la idoneidad del
usuario cuando sea necesario a un rol mediante Privileged Identity Management (PIM).
Para obtener información completa sobre la creación de roles RBAC consultar la guía
[CCN-STIC-884A - Guía de configuración segura para Azure].
En el siguiente apartado se puede permitir a los administradores de Microsoft
Defender conceder permisos de seguridad de puntos de conexión en Microsoft Intune.
Para ello, se debe acceder al apartado de Configuración del portal de Microsoft
Defender, dirigirse a Puntos de conexión, Administración de la configuración y
Permisos de Intune.
Aquí se podrá agregar un grupo de Entra ID, ese grupo tendrá permisos para la
configuración de directivas de punto de conexión en el portal de Microsoft Intune.
Centro Criptológico Nacional 52

![Imagen 1 - Página 52](CCN-STIC 885E_assets\pagina52_img1.png)

![Imagen 2 - Página 52](CCN-STIC 885E_assets\pagina52_img2.png)

![Imagen 3 - Página 52](CCN-STIC 885E_assets\pagina52_img3.png)

![Imagen 4 - Página 52](CCN-STIC 885E_assets\pagina52_img4.png)

![Imagen 5 - Página 52](CCN-STIC 885E_assets\pagina52_img5.png)

---

<!-- Página 53 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
3.1.1.5 MECANISMOS DE AUTENTICACIÓN (USUARIOS EXTERNOS)
El acceso remoto se entiende como el acceso remoto al realizado desde fuera de las
propias instalaciones de la organización, a través de redes de terceros. Se recomienda
reforzar la seguridad:
 Equipos administrados.
Al tener el acceso solo a los equipos administrados se evitan accesos desde
equipos que no pertenecen a la organización.
 Autenticación de doble factor.
Este proceso securizará el acceso remoto, protegiendo así los inicios de sesión
en todo momento.
 Conformidad de dispositivos.
Al asegurar que los dispositivos cumplan con las directivas de cumplimiento
asignadas, se asegura que el acceso remoto desde esos equipos será seguro.
 Ubicaciones de confianza.
Con las ubicaciones seguras de las políticas de acceso condicional, se asegura que
solo desde una localización confiable se conectarán los usuarios.
 Evitar accesos de usuarios sin licenciamiento.
Al evitar el acceso a usuarios sin licencia, se evitará de manera indirecta a todos
los usuarios que no pertenezcan a la organización.
 Información derechos usuario.
El sistema informará al usuario de sus derechos u obligaciones inmediatamente
después de obtener el acceso.
 Credenciales.
Centro Criptológico Nacional 53

![Imagen 1 - Página 53](CCN-STIC 885E_assets\pagina53_img1.png)

![Imagen 2 - Página 53](CCN-STIC 885E_assets\pagina53_img2.png)

![Imagen 3 - Página 53](CCN-STIC 885E_assets\pagina53_img3.png)

![Imagen 4 - Página 53](CCN-STIC 885E_assets\pagina53_img4.png)

![Imagen 5 - Página 53](CCN-STIC 885E_assets\pagina53_img5.png)

---

<!-- Página 54 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Las credenciales se cambiarán con una periodicidad marcada por la política de
seguridad de la organización.
 Otras medidas a través de acceso condicional.
El número de intentos permitidos será limitado, bloqueando la oportunidad de
acceso una vez superado tal número, y requiriendo una intervención específica
para reactivar la cuenta, que se describirá en la documentación.
La configuración de las medidas de seguridad mencionadas en los puntos anteriores
se puede consultar en la guía [CCN-STIC-884A - Guía de configuración segura para
Azure].
3.1.1.6 MECANISMOS DE AUTENTICACIÓN (USUARIOS DE LA ORGANIZACIÓN)
Se entiende como acceso local al acceso al servicio desde la red corporativa o sedes
autorizadas, aunque el servicio se encuentra alojado en las instalaciones del fabricante
(nube).
Se requiere establecer un “doble factor de autenticación” (MFA) y tener una política
adecuada de gestión de credenciales. Así mismo, se requiere un registro de intentos de
accesos con éxito y fallidos al sistema. Adicionalmente se puede controlar el acceso al
servicio mediante directivas de acceso condicional o reglas en ADFS, como se describe
en la guía [CCN-STIC-884A - Guía de configuración segura para Azure].
El acceso remoto se entiende como acceso desde Internet (cualquier IP). Se
recomienda reforzar la seguridad cuando se accede desde Internet (solo equipos
administrados, MFA, conformidad de dispositivos, etc.).
Más información en la guía [CCN-STIC-884A - Guía de configuración segura para
Azure].
3.1.2 EXPLOTACIÓN
En esta sección se detallan aspectos relevantes de Microsoft Defender for Endpoint
en cuanto a la Explotación de los recursos. Para acceder a información detallada de
todas las medidas de seguridad y mecanismos de protección y acceso consultar la guía
[CCN-STIC-884A - Guía de configuración segura para Azure].
3.1.2.1 INVENTARIO DE ACTIVOS
Se puede obtener un inventario actualizado, de todos los dispositivos endpoints
agregados a la plataforma de seguridad, accediendo al portal unificado Microsoft
Defender XDR [Extremos|Inventario de dispositivos]:
Centro Criptológico Nacional 54

![Imagen 1 - Página 54](CCN-STIC 885E_assets\pagina54_img1.png)

![Imagen 2 - Página 54](CCN-STIC 885E_assets\pagina54_img2.png)

![Imagen 3 - Página 54](CCN-STIC 885E_assets\pagina54_img3.png)

![Imagen 4 - Página 54](CCN-STIC 885E_assets\pagina54_img4.png)

---

<!-- Página 55 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Detección de dispositivos
Proteger el entorno requiere realizar un inventario de los dispositivos que están en
la red. Sin embargo, la asignación de dispositivos en una red a menudo puede ser
costosa, desafiante y consume mucho tiempo.
Microsoft Defender for Endpoint proporciona una funcionalidad de detección de
dispositivos que ayuda a encontrar dispositivos no administrados conectados a la red
corporativa sin necesidad de dispositivos adicionales o cambios engorrosos en el
proceso.
La funcionalidad de detección de dispositivos permite:
 Detectar puntos de conexión empresariales conectados a la red corporativa
Con las opciones de detección básicas o estándar, puede detectar estaciones
de trabajo, servidores y puntos de conexión móviles que aún no están
incorporados a Microsoft Defender para endpoint.
 Extremos detectados incorporados
Los puntos de conexión no administrados de la red pueden introducir
vulnerabilidades y riesgos en la red. Incorporarlos al servicio puede aumentar la
visibilidad de seguridad en ellos.
Métodos de detección
Hay dos modos de detección:
 Detección básica
 Detección estándar (recomendado)
Se puede cambiar y personalizar la configuración de detección, para obtener más
información, consultar [Configuración | Detección de dispositivos]:
Centro Criptológico Nacional 55

![Imagen 1 - Página 55](CCN-STIC 885E_assets\pagina55_img1.png)

![Imagen 2 - Página 55](CCN-STIC 885E_assets\pagina55_img2.png)

![Imagen 3 - Página 55](CCN-STIC 885E_assets\pagina55_img3.png)

![Imagen 4 - Página 55](CCN-STIC 885E_assets\pagina55_img4.png)

![Imagen 5 - Página 55](CCN-STIC 885E_assets\pagina55_img5.png)

---

<!-- Página 56 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Detección de dispositivos no administrados
Esta opción permite a los dispositivos integrados detectar dispositivos no
administrados en su red y evaluar las vulnerabilidades y los riesgos.
Para habilitarla, en el apartado Configuración del portal de Microsoft Defender,
Puntos de conexión > General > Características avanzadas, habilitar la opción
Detección de dispositivos.
Centro Criptológico Nacional 56

![Imagen 1 - Página 56](CCN-STIC 885E_assets\pagina56_img1.png)

![Imagen 2 - Página 56](CCN-STIC 885E_assets\pagina56_img2.png)

![Imagen 3 - Página 56](CCN-STIC 885E_assets\pagina56_img3.png)

![Imagen 4 - Página 56](CCN-STIC 885E_assets\pagina56_img4.png)

![Imagen 5 - Página 56](CCN-STIC 885E_assets\pagina56_img5.png)

![Imagen 6 - Página 56](CCN-STIC 885E_assets\pagina56_img6.png)

---

<!-- Página 57 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
3.1.2.2 CONFIGURACIÓN DE SEGURIDAD
Según el ENS, se configurarán los equipos previamente a su entrada en operación,
de forma que:
 Se retiren cuentas y contraseñas estándar.
 Se aplicará la regla de mínima funcionalidad.
 Se aplicará la regla de «seguridad por defecto», es decir:
A través de perfiles configuración y líneas base de seguridad configuradas en
Microsoft Intune es posible lograr los puntos anteriormente descritos.
Más información en la guía [CCN-STIC-884F - Guía de configuración segura para
Microsoft Intune].
Para que los dispositivos que no estén inscritos a Microsoft Intune, pero si
incorporados a Microsoft Defender for EndPoint, es posible permitir que MDE aplique
la configuración de seguridad de Microsoft Intune para estos dispositivos.
Para ello es necesario que la integración de MDE con Microsoft Intune está
habilitada, como se ve en el punto [4.1.5.1 Administración de la configuración de
seguridad]
Para habilitar el uso de MDE para aplicar las opciones de configuración de seguridad
de Intune:
En el apartado Configuración del portal de Microsoft Defender, Puntos de conexión
> General > Características avanzadas, habilitar la opción Uso de MDE para aplicar las
opciones de configuración de seguridad de Intune.
Centro Criptológico Nacional 57

![Imagen 1 - Página 57](CCN-STIC 885E_assets\pagina57_img1.png)

![Imagen 2 - Página 57](CCN-STIC 885E_assets\pagina57_img2.png)

![Imagen 3 - Página 57](CCN-STIC 885E_assets\pagina57_img3.png)

![Imagen 4 - Página 57](CCN-STIC 885E_assets\pagina57_img4.png)

![Imagen 5 - Página 57](CCN-STIC 885E_assets\pagina57_img5.png)

---

<!-- Página 58 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
3.1.2.3 GESTIÓN DE LA CONFIGURACIÓN DE SEGURIDAD
A través de las funcionalidades de detección y respuesta de puntos de conexión, los
analistas de seguridad pueden asignar prioridades a las alertas, obteniendo así
visibilidad para todo el ámbito de la vulneración y llevar a cabo acciones de respuesta
para corregir las amenazas.
3.1.2.4 MANTENIMIENTO Y ACTUALIZACIONES DE SEGURIDAD
En esta sección se detallan aspectos relevantes en cuanto al mantenimiento y
actualización de los activos en la organización.
Para acceder a información detallada de todas las medidas de mantenimiento y
actualizaciones de seguridad consultar la guía [CCN-STIC-884F – Guía de configuración
segura para Microsoft Intune].
3.1.2.5 PROTECCIÓN FRENTE A CÓDIGO DAÑINO
Defender for Endpoint utiliza una combinación de tecnología integrada en Windows
10/11 y el servicio en la nube de Microsoft:
 Sensores de comportamiento de extremo: incrustados en Windows 10/11,
estos sensores recopilan y procesan señales de comportamiento del sistema
operativo y envían estos datos de sensor a la instancia privada, aislada y en la
nube de Microsoft Defender for Endpoint.
 Análisis de seguridad en la nube: aprovechar los datos grandes, el aprendizaje
de dispositivos y la óptica única de Microsoft en todo el ecosistema de Windows,
los productos en la nube empresarial (como Office 365) y los activos en línea, las
señales de comportamiento se traducen en información, detecciones y
respuestas recomendadas a amenazas avanzadas.
Centro Criptológico Nacional 58

![Imagen 1 - Página 58](CCN-STIC 885E_assets\pagina58_img1.png)

![Imagen 2 - Página 58](CCN-STIC 885E_assets\pagina58_img2.png)

![Imagen 3 - Página 58](CCN-STIC 885E_assets\pagina58_img3.png)

![Imagen 4 - Página 58](CCN-STIC 885E_assets\pagina58_img4.png)

![Imagen 5 - Página 58](CCN-STIC 885E_assets\pagina58_img5.png)

---

<!-- Página 59 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
 Inteligencia de amenazas: generada por los hunters de Microsoft (equipo de
buscadores expertos en amenazas cibernéticas de Microsoft), equipos de
seguridad y enriquecida por la inteligencia de amenazas proporcionada por otros
partners, la inteligencia de amenazas permite a Defender for Endpoint identificar
herramientas, técnicas y procedimientos de atacantes y generar alertas cuando
se observan en datos de sensor recopilados.
Para consultar la puntuación segura de Microsoft para dispositivos, la puntuación de
exposición, los dispositivos expuestos, el software vulnerable y tomar medidas sobre las
recomendaciones de seguridad más destacadas, acceder al portal de Microsoft
Defender [Extremos|Administración de vulnerabilidades]:
Centro Criptológico Nacional 59

![Imagen 1 - Página 59](CCN-STIC 885E_assets\pagina59_img1.png)

![Imagen 2 - Página 59](CCN-STIC 885E_assets\pagina59_img2.png)

![Imagen 3 - Página 59](CCN-STIC 885E_assets\pagina59_img3.png)

![Imagen 4 - Página 59](CCN-STIC 885E_assets\pagina59_img4.png)

![Imagen 5 - Página 59](CCN-STIC 885E_assets\pagina59_img5.png)

![Imagen 6 - Página 59](CCN-STIC 885E_assets\pagina59_img6.png)

---

<!-- Página 60 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Panel de navegación
Área Descripción
Panel Vista de alto nivel de la puntuación de exposición
de la organización, puntuación segura de
Microsoft para dispositivos, distribución de
exposición de dispositivos, recomendaciones de
seguridad principales, software vulnerable
superior, actividades de corrección superior y
datos de dispositivos expuestos superiores.
Recomendaciones de Lista de recomendaciones de seguridad e
seguridad información de amenazas relacionada. Al
seleccionar un elemento de la lista, se abre un
panel desplegable con detalles de vulnerabilidad,
un vínculo para abrir la página de software y
opciones de corrección y excepción.
Corrección Ver las actividades de corrección que han creado
y las excepciones de recomendación.
Inventario de Consulta la lista de software vulnerable de la
software organización, junto con información de debilidad
y amenazas.
Debilidades Consultar la lista de vulnerabilidades y
exposiciones comunes (CVE) en la organización.
Línea de tiempo de Ver eventos que pueden afectar el riesgo de la
eventos organización.
Recomendaciones de seguridad
Al seleccionar un elemento de la lista, se abre un panel desplegable con detalles de
vulnerabilidad, un vínculo para abrir la página de software y opciones de corrección y
excepción.
Corrección
Las amenazas y administración de vulnerabilidades permiten a los administradores
de seguridad y a los administradores de TI colaborar sin problemas para solucionar
problemas.
Centro Criptológico Nacional 60

|  | Área |  |  | Descripción |  |
| --- | --- | --- | --- | --- | --- |
| Panel | Panel |  |  | Vista de alto nivel de la puntuación de exposición |  |
|  |  |  |  | de la organización, puntuación segura de |  |
|  |  |  |  | Microsoft para dispositivos, distribución de |  |
|  |  |  |  | exposición de dispositivos, recomendaciones de |  |
|  |  |  |  | seguridad principales, software vulnerable |  |
|  |  |  |  | superior, actividades de corrección superior y |  |
|  |  |  |  | datos de dispositivos expuestos superiores. |  |
| Recomendaciones de <br> seguridad |  |  | Lista de recomendaciones de seguridad e <br> información de amenazas relacionada. Al <br> seleccionar un elemento de la lista, se abre un <br> panel desplegable con detalles de vulnerabilidad, <br> un vínculo para abrir la página de software y <br> opciones de corrección y excepción. |  |  |
| Corrección |  |  |  | Ver las actividades de corrección que han creado |  |
|  |  |  |  | y las excepciones de recomendación. |  |
| Inventario de <br> software |  |  | Consulta la lista de software vulnerable de la <br> organización, junto con información de debilidad <br> y amenazas. |  |  |
| Debilidades |  |  |  | Consultar la lista de vulnerabilidades y |  |
|  |  |  |  | exposiciones comunes (CVE) en la organización. |  |
| Línea de tiempo de <br> eventos |  |  | Ver eventos que pueden afectar el riesgo de la <br> organización. |  |  |


![Imagen 1 - Página 60](CCN-STIC 885E_assets\pagina60_img1.png)

![Imagen 2 - Página 60](CCN-STIC 885E_assets\pagina60_img2.png)

![Imagen 3 - Página 60](CCN-STIC 885E_assets\pagina60_img3.png)

![Imagen 4 - Página 60](CCN-STIC 885E_assets\pagina60_img4.png)

![Imagen 5 - Página 60](CCN-STIC 885E_assets\pagina60_img5.png)

![Imagen 6 - Página 60](CCN-STIC 885E_assets\pagina60_img6.png)

---

<!-- Página 61 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
 Solicitudes de corrección enviadas a IT: crear una tarea de corrección en
Microsoft Intune desde una recomendación de seguridad específica.
 Mitigaciones alternativas: obtener información sobre mitigaciones adicionales,
como cambios de configuración que pueden reducir el riesgo asociado con
vulnerabilidades de software.
 Estado de corrección en tiempo real: supervisión en tiempo real del estado y el
progreso de las actividades de corrección en toda la organización.
Inventario de Software
Lista de software vulnerable de la organización, junto con información de debilidad
y amenazas.
Debilidades
Lista de vulnerabilidades y exposiciones comunes (CVE) en la organización:
Centro Criptológico Nacional 61

![Imagen 1 - Página 61](CCN-STIC 885E_assets\pagina61_img1.png)

![Imagen 2 - Página 61](CCN-STIC 885E_assets\pagina61_img2.png)

![Imagen 3 - Página 61](CCN-STIC 885E_assets\pagina61_img3.png)

![Imagen 4 - Página 61](CCN-STIC 885E_assets\pagina61_img4.png)

![Imagen 5 - Página 61](CCN-STIC 885E_assets\pagina61_img5.png)

![Imagen 6 - Página 61](CCN-STIC 885E_assets\pagina61_img6.png)

---

<!-- Página 62 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Línea de tiempo de eventos
Eventos que pueden afectar el riesgo de la organización:
Evaluación de líneas base de seguridad
La evaluación de líneas base de seguridad permiten monitorear de forma continua y
fácil el cumplimiento de las líneas base de seguridad de la organización e identificar los
cambios al instante, sin hacer exámenes de cumplimiento constantes.
Para configurar evaluaciones de seguridad:
1. Ir a Evaluación de líneas base en administración de vulnerabilidades en el portal
de Microsoft Defender.
2. Seleccionar la pestaña Perfiles en la parte superior y, a continuación, seleccionar
el botón Crear perfil.
3. En la página Ámbito del perfil de línea base, establezca la configuración del perfil
como software, base benchmark (CIS o STIG) y el nivel de cumplimiento y
seleccione Siguiente.
4. Seleccione las configuraciones que desea incluir en el perfil.
Centro Criptológico Nacional 62

![Imagen 1 - Página 62](CCN-STIC 885E_assets\pagina62_img1.png)

![Imagen 2 - Página 62](CCN-STIC 885E_assets\pagina62_img2.png)

![Imagen 3 - Página 62](CCN-STIC 885E_assets\pagina62_img3.png)

![Imagen 4 - Página 62](CCN-STIC 885E_assets\pagina62_img4.png)

![Imagen 5 - Página 62](CCN-STIC 885E_assets\pagina62_img5.png)

![Imagen 6 - Página 62](CCN-STIC 885E_assets\pagina62_img6.png)

---

<!-- Página 63 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
3.1.2.6 GESTIÓN DE INCIDENTES
En el portal de Microsoft Defender, seleccionar la opción Incidentes:
Aparecerá una lista con todos los incidentes y elementos sospechosos relacionados
con los dispositivos que se han agregado a Microsoft Defender for Endpoint.
Para obtener información detallada pulsar sobre el nombre del incidente:
Centro Criptológico Nacional 63

![Imagen 1 - Página 63](CCN-STIC 885E_assets\pagina63_img1.png)

![Imagen 2 - Página 63](CCN-STIC 885E_assets\pagina63_img2.png)

![Imagen 3 - Página 63](CCN-STIC 885E_assets\pagina63_img3.png)

![Imagen 4 - Página 63](CCN-STIC 885E_assets\pagina63_img4.png)

![Imagen 5 - Página 63](CCN-STIC 885E_assets\pagina63_img5.png)

![Imagen 6 - Página 63](CCN-STIC 885E_assets\pagina63_img6.png)

![Imagen 7 - Página 63](CCN-STIC 885E_assets\pagina63_img7.png)

---

<!-- Página 64 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
La cola Incidentes muestra una colección de incidentes marcados desde dispositivos
de la red. Ayuda a ordenar los incidentes para asignar prioridades y crear una decisión
de respuesta de ciberseguridad fundamentada.
Ordenar y filtrar la cola de incidentes
Se puede aplicar los siguientes filtros para limitar la lista de incidentes y obtener una
vista más centrada.
Gravedad
Gravedad del Descripción
incidente
Alto Amenazas asociadas a menudo con amenazas persistentes avanzadas (APT).
Estos incidentes indican un alto riesgo debido a la gravedad de los daños que
pueden causar en los dispositivos.
Medio Las amenazas rara vez se observan en la organización, como cambios anómalos
en el Registro, ejecución de archivos sospechosos y comportamientos
observados típicos de fases de ataque.
Bajo Amenazas asociadas con malware y herramientas de piratería que no indican
necesariamente una amenaza avanzada dirigida a la organización.
Informativo Es posible que los incidentes informativos no se consideren perjudiciales para
la red, pero podrían ser buenos para realizar un seguimiento.
Centro Criptológico Nacional 64

|  | Gravedad del |  | Descripción |  |  |
| --- | --- | --- | --- | --- | --- |
|  | incidente |  |  |  |  |
| Alto | Alto |  |  | Amenazas asociadas a menudo con amenazas persistentes avanzadas (APT). |  |
|  |  |  |  | Estos incidentes indican un alto riesgo debido a la gravedad de los daños que |  |
|  |  |  |  | pueden causar en los dispositivos. |  |
| Medio |  |  | Las amenazas rara vez se observan en la organización, como cambios anómalos <br> en el Registro, ejecución de archivos sospechosos y comportamientos <br> observados típicos de fases de ataque. |  |  |
| Bajo |  |  |  | Amenazas asociadas con malware y herramientas de piratería que no indican |  |
|  |  |  |  | necesariamente una amenaza avanzada dirigida a la organización. |  |
| Informativo |  |  | Es posible que los incidentes informativos no se consideren perjudiciales para <br> la red, pero podrían ser buenos para realizar un seguimiento. |  |  |


![Imagen 1 - Página 64](CCN-STIC 885E_assets\pagina64_img1.png)

![Imagen 2 - Página 64](CCN-STIC 885E_assets\pagina64_img2.png)

![Imagen 3 - Página 64](CCN-STIC 885E_assets\pagina64_img3.png)

![Imagen 4 - Página 64](CCN-STIC 885E_assets\pagina64_img4.png)

![Imagen 5 - Página 64](CCN-STIC 885E_assets\pagina64_img5.png)

![Imagen 6 - Página 64](CCN-STIC 885E_assets\pagina64_img6.png)

---

<!-- Página 65 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Asignado a
Se puede filtrar la lista seleccionando los incidentes asignados
a cualquiera o solo los asignados a su usuario.
Categoría
Los incidentes se clasifican en función de la descripción de la fase
en la que se encuentra la cadena de eliminación de
ciberseguridad. Esta vista ayuda al analista de amenazas a
determinar la prioridad, la urgencia y la estrategia de respuesta
correspondiente para implementar en función del contexto.
Estado
Limitar la lista de incidentes que se muestra en función de su estado para ver cuáles
están activos o resueltos.
Confidencialidad de datos
Mostrar incidentes que contienen etiquetas de confidencialidad.
Dentro del incidente se puede administrar con las siguientes opciones:
Centro Criptológico Nacional 65

![Imagen 1 - Página 65](CCN-STIC 885E_assets\pagina65_img1.png)

![Imagen 2 - Página 65](CCN-STIC 885E_assets\pagina65_img2.png)

![Imagen 3 - Página 65](CCN-STIC 885E_assets\pagina65_img3.png)

![Imagen 4 - Página 65](CCN-STIC 885E_assets\pagina65_img4.png)

![Imagen 5 - Página 65](CCN-STIC 885E_assets\pagina65_img5.png)

![Imagen 6 - Página 65](CCN-STIC 885E_assets\pagina65_img6.png)

---

<!-- Página 66 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Lo recomendable es categorizar los incidentes en base a su severidad, y asignarlos a
las personas con el rol correspondiente para que los atiendan.
3.1.2.7 REGISTRO DE ACTIVIDAD
Se mantiene y se guarda un registro tanto de los inicios de sesión como de los
registros de auditoría.
El primero de ellos se puede llegar a través del portal de Entra ID, supervisión y
mantenimiento > Registros de auditoría.
Más información en la guía [CCN-STIC-884A - Guía de configuración segura para
Azure].
Centro Criptológico Nacional 66

![Imagen 1 - Página 66](CCN-STIC 885E_assets\pagina66_img1.png)

![Imagen 2 - Página 66](CCN-STIC 885E_assets\pagina66_img2.png)

![Imagen 3 - Página 66](CCN-STIC 885E_assets\pagina66_img3.png)

![Imagen 4 - Página 66](CCN-STIC 885E_assets\pagina66_img4.png)

![Imagen 5 - Página 66](CCN-STIC 885E_assets\pagina66_img5.png)

![Imagen 6 - Página 66](CCN-STIC 885E_assets\pagina66_img6.png)

---

<!-- Página 67 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
En cuanto al registro de auditoría, se puede acceder desde el portal de Defender a
través del botón Auditar.
3.1.2.8 REGISTRO DE LA GESTIÓN DE INCIDENTES
Como se ve en el punto anterior, el registro de la gestión de incidentes se puede
revisar en el punto de Auditar accesible desde el punto del portal de Defender.
La auditoría (estándar) está activada de forma predeterminada cuando se hacen uso de
licencias de pago en el inquilino.
3.1.3 MONITORIZACIÓN DEL SISTEMA
Se recomienda la integración de Microsoft Defender for Endpoint con Microsoft
Sentinel. Mediante el conector específico se permite transmitir eventos de búsqueda
avanzada desde Microsoft Defender for Endpoint a Microsoft Sentinel, lo que permite
copiar consultas de búsqueda avanzada de Defender for Endpoint en Microsoft Sentinel,
enriquecer las alertas de Sentinel con datos de eventos sin formato de Defender for
Endpoint para proporcionar información adicional y almacenar los registros con una
mayor retención en Log Analytics.
Nota: Para más información de la integración con Microsoft Sentinel consultar la guía [CCN-STIC-884E -
Guía de configuración segura para Microsoft Sentinel].
3.1.3.1 DETECCIÓN DE INTRUSIÓN
Defender dispone de informes los cuales se pueden ver la detección de
vulnerabilidades e intrusiones de malware si existiesen.
Centro Criptológico Nacional 67

| Nota: Para más información de la integración con Microsoft Sentinel consultar la guía [CCN-STIC-884E - |
| --- |
| Guía de configuración segura para Microsoft Sentinel]. |


![Imagen 1 - Página 67](CCN-STIC 885E_assets\pagina67_img1.png)

![Imagen 2 - Página 67](CCN-STIC 885E_assets\pagina67_img2.png)

![Imagen 3 - Página 67](CCN-STIC 885E_assets\pagina67_img3.png)

![Imagen 4 - Página 67](CCN-STIC 885E_assets\pagina67_img4.png)

![Imagen 5 - Página 67](CCN-STIC 885E_assets\pagina67_img5.png)

---

<!-- Página 68 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
El informe presenta gráficos y diagramas de barras con tendencias de dispositivos
vulnerables y estadísticas recientes. El propósito es entender la dimensión y el impacto
de la exposición del dispositivo.
3.1.3.2 SISTEMA DE MÉTRICAS
Como se cometaba en el punto anterior recomendamos la integración de Microsoft
Defender for Endpoint con Microosft Sentinel. Mediante el conector específico se
permite transmitir eventos de búsqueda avanzada desde Microsoft Defender for
Endpoint a Microsoft Sentinel, lo que permite copiar consultas de búsqueda avanzada
de Defender for Endpoint en Microsoft Sentinel, enriquecer las alertas de Sentinel con
datos de eventos sin formato de Defender for Endpoint para proporcionar información
adicional y almacenar los registros con una mayor retención en Log Analytics.
De esta manera se lograrán buenas métricas para visualizar el estado.
Nota: Para más información de la integración con Microsoft Sentinel consultar la guía [CCN-STIC-884E -
Guía de configuración segura para Microsoft Sentinel].
3.1.3.3 VIGILANCIA
En esta categoría de vigilancia del ENS, se contemplan sistemas para detección de
amenazas avanzadas y comportamiento anómalos.
Las capacidades de defender para detección y respuesta de puntos de conexión
endpoint (EDR) proporcionan detecciones avanzadas de ataques que son casi en tiempo
real y respuestas inmediatas. Los analistas de seguridad pueden asignar prioridades a
las alertas de forma eficaz, obtener visibilidad para todo el ámbito de la vulneración y
llevar a cabo acciones de respuesta para corregir las amenazas.
Cuando se detecta una amenaza, se crean alertas en el sistema para que un analista
la investigue. Las alertas con las mismas técnicas de ataque o atribuidas al mismo
atacante se agregan a una entidad denominada incidente. Agregar alertas de esta
manera permite a los analistas investigar y responder de forma colectiva a las amenazas
con facilidad.
Centro Criptológico Nacional 68

| Nota: Para más información de la integración con Microsoft Sentinel consultar la guía [CCN-STIC-884E - |
| --- |
| Guía de configuración segura para Microsoft Sentinel]. |


![Imagen 1 - Página 68](CCN-STIC 885E_assets\pagina68_img1.png)

![Imagen 2 - Página 68](CCN-STIC 885E_assets\pagina68_img2.png)

![Imagen 3 - Página 68](CCN-STIC 885E_assets\pagina68_img3.png)

![Imagen 4 - Página 68](CCN-STIC 885E_assets\pagina68_img4.png)

![Imagen 5 - Página 68](CCN-STIC 885E_assets\pagina68_img5.png)

---

<!-- Página 69 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Inspirada en la mentalidad de "asumir vulneración", Defender for Endpoint recopila
continuamente la telemetría cibernética de comportamiento. Esto incluye la
información de procesos, las actividades de red, ópticas profundas en el kernel y el
administrador de memoria, las actividades de inicio de sesión de usuario, los cambios
en el registro y el sistema de archivos, entre otros. La información se almacena durante
seis meses, lo que permite que un analista se desplace hacia el tiempo de inicio de un
ataque. El analista puede dinamizar varias vistas y enfocar una investigación a través de
varios vectores.
Las capacidades de respuesta le ofrecen la posibilidad de solucionar rápidamente las
amenazas al actuar en las entidades afectadas.
Panel de Administración de vulnerabilidades de Microsoft Defender
Proporciona una introducción de alto nivel de dónde se han visto las detecciones y
resalta dónde se necesitan acciones de respuesta.
El panel se puede usar para:
 Obtener la puntuación de exposición y la Puntuación de seguridad de Microsoft
para dispositivos, así como las principales sugerencias de seguridad, las
vulnerabilidades de software, las acciones de corrección y los dispositivos
vulnerables.
 Relación entre la información de EDR y las vulnerabilidades de punto de
conexión y su tratamiento
 Selección de alternativas de corrección para valorar y monitorear las
actividades de corrección
 Elegir opciones de excepción y monitorear las excepciones vigentes
Desde el portal de Microsoft Defender [Extremos | Administración de
vulnerabilidades | Panel]:
Centro Criptológico Nacional 69

![Imagen 1 - Página 69](CCN-STIC 885E_assets\pagina69_img1.png)

![Imagen 2 - Página 69](CCN-STIC 885E_assets\pagina69_img2.png)

![Imagen 3 - Página 69](CCN-STIC 885E_assets\pagina69_img3.png)

![Imagen 4 - Página 69](CCN-STIC 885E_assets\pagina69_img4.png)

![Imagen 5 - Página 69](CCN-STIC 885E_assets\pagina69_img5.png)

---

<!-- Página 70 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
3.2 MEDIDAS DE PROTECCIÓN
3.2.1 PROTECCIÓN DE LOS EQUIPOS
Para la correcta protección de equipos en Defender para puntos de conexión es
necesaria la incorporación de estos en la plataforma de Defender para puntos de
conexión, tal y como se refleja en el punto [2.6.3 Incorporación (Onboard)].
Por otro lado, es muy importante recalcar la integración con Microsoft Intune con
Defender para puntos de conexión, parte esencial en la protección de los dispositivos.
Para acceder a información detallada de todas las medidas de configuración y
seguridad consultar la guía [CCN-STIC-884F – Guía de configuración segura para
Microsoft Intune].
3.2.2 PROTECCIÓN DE LOS SOPORTES DE INFORMACIÓN
3.2.2.1 CRIPTOGRAFÍA
Se puede hacer uso de BitLocker para cifrar los discos en dispositivos a través de
directivas de BitLocker para dispositivos Windows gestionados con Microsoft Intune.
A través del método de directivas de cifrado de disco de seguridad de punto final para
BitLocker se puede proteger toda la información de los dispositivos.
Al igual que el apartado anterior, para más información consultar la guía [CCN-STIC-884F
– Guía de configuración segura para Microsoft Intune].
Centro Criptológico Nacional 70

![Imagen 1 - Página 70](CCN-STIC 885E_assets\pagina70_img1.png)

![Imagen 2 - Página 70](CCN-STIC 885E_assets\pagina70_img2.png)

![Imagen 3 - Página 70](CCN-STIC 885E_assets\pagina70_img3.png)

![Imagen 4 - Página 70](CCN-STIC 885E_assets\pagina70_img4.png)

---

<!-- Página 71 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
3.2.3 PROTECCIÓN DE LA INFORMACIÓN
Microsoft Defender XDR opera en Microsoft Azure centros de datos de la Unión
Europea, el Reino Unido y los Estados Unidos. Los datos de cliente recopilados por el
servicio se almacenan en reposo en (a) la ubicación geográfica del inquilino identificada
durante el aprovisionamiento o, (b) si Microsoft Defender XDR usa otro servicio en línea
de Microsoft para procesar dichos datos, la geolocalización definida por las reglas de
almacenamiento de datos de ese otro servicio en línea.
La información almacenada cumple las siguientes características:
- Una vez configurado, no se puede cambiar la ubicación donde se almacenan los
datos. Esto proporciona una forma cómoda de minimizar el riesgo de
Centro Criptológico Nacional 71

![Imagen 1 - Página 71](CCN-STIC 885E_assets\pagina71_img1.png)

![Imagen 2 - Página 71](CCN-STIC 885E_assets\pagina71_img2.png)

![Imagen 3 - Página 71](CCN-STIC 885E_assets\pagina71_img3.png)

![Imagen 4 - Página 71](CCN-STIC 885E_assets\pagina71_img4.png)

![Imagen 5 - Página 71](CCN-STIC 885E_assets\pagina71_img5.png)

![Imagen 6 - Página 71](CCN-STIC 885E_assets\pagina71_img6.png)

---

<!-- Página 72 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
cumplimiento seleccionando activamente las ubicaciones geográficas donde
residirán los datos.
- De forma predeterminada, los datos se conservan durante 180 días; sin
embargo, se puede especificar la directiva de retención de datos para los datos.
Esto determina el tiempo que Windows Defender for Endpoint almacenará los
datos.
- Microsoft aísla los datos mediante la autenticación de acceso y la segregación
lógica basada en el identificador del cliente. Cada cliente solo puede acceder a
los datos recopilados de su propia organización y a los datos genéricos que
Proporciona Microsoft.
- Los desarrolladores y administradores de Microsoft tienen, por diseño,
privilegios suficientes para llevar a cabo sus tareas asignadas para operar y
desarrollar el servicio. Microsoft implementa combinaciones de controles
preventivos, de detective y reactivos. Además, Microsoft lleva a cabo
comprobaciones en segundo plano de cierto personal de operaciones y limita el
acceso a aplicaciones, sistemas e infraestructura de red en proporción al nivel de
verificación en segundo plano. El personal de operaciones sigue un proceso
formal cuando se les exige tener acceso a la cuenta de un cliente o a la
información relacionada en el rendimiento de sus funciones.
En cuanto a la protección de la información del dato en si en Microsoft 365, se hace
uso de Microsoft Purview.
Para más información sobre la protección de la información de Microsoft Purview [CCN-
STIC 885A - Guía de configuración segura para Office 365].
3.2.4 PROTECCIÓN DE LOS SERVICIOS
3.2.4.1 PROTECCIÓN DE LA NAVEGACIÓN WEB
Indicadores
Al crear indicadores para direcciones IP y direcciones URL o dominios, se puede
autorizar o rechazar direcciones IP, direcciones URL o dominios según su propia
inteligencia sobre amenazas.
Defender para punto de conexión puede usar lo siguiente para bloquear direcciones
IP o direcciones URL que Microsoft considere maliciosas:
 Windows Defender SmartScreen para exploradores de Microsoft
 Protección de red para exploradores que no son de Microsoft o llamadas
realizadas fuera de un explorador.
Requisitos
Para la creación de indicadores de IPs, direcciones IP o dominios se deben cumplir
los siguientes requisitos:
Permitir y bloquear direcciones URL/IP requiere que el componente de Microsoft
Defender para punto de conexión Protección de red esté habilitado en modo de
bloqueo.
Centro Criptológico Nacional 72

![Imagen 1 - Página 72](CCN-STIC 885E_assets\pagina72_img1.png)

![Imagen 2 - Página 72](CCN-STIC 885E_assets\pagina72_img2.png)

![Imagen 3 - Página 72](CCN-STIC 885E_assets\pagina72_img3.png)

![Imagen 4 - Página 72](CCN-STIC 885E_assets\pagina72_img4.png)

---

<!-- Página 73 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Para más información sobre este requisito, acceder a la siguiente URL:
Habilitar protección de red - Microsoft Defender for Endpoint | Microsoft Learn
Se admiten los siguientes sistemas operativos:
 Windows 10, versión 1709 o posterior
 Windows 11
 Windows Server 2016
 Windows Server 2012 R2
 Windows Server 2019
 Windows Server 2022
 macOS
 Linux
 iOS
 Android
Otro requisito obligatorio es que los indicadores de red estén habilitados en las
características avanzadas de Microsoft Defender.
Para hablitarlo, acceda al portal de Microsoft Defender -> Configuración -> Puntos
de conexión.
Una vez allí, General -> Características avanzadas.
Aquí habilitar los Indicadores de red personalizados.
Centro Criptológico Nacional 73

![Imagen 1 - Página 73](CCN-STIC 885E_assets\pagina73_img1.png)

![Imagen 2 - Página 73](CCN-STIC 885E_assets\pagina73_img2.png)

![Imagen 3 - Página 73](CCN-STIC 885E_assets\pagina73_img3.png)

![Imagen 4 - Página 73](CCN-STIC 885E_assets\pagina73_img4.png)

![Imagen 5 - Página 73](CCN-STIC 885E_assets\pagina73_img5.png)

---

<!-- Página 74 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Para crear el indicador.
 En el panel de navegación, Configuración -> Indicadores de puntos de
conexión.
 Seleccione la pestaña Direcciones IP, direcciones URL o dominios.
 Seleccione Agregar elemento.
 Especificar los detalles siguientes:
o Indicador: especifique los detalles de la entidad y defina la expiración
del indicador.
o Acción: especifique la acción que se va a realizar y proporcione una
descripción.
o Ámbito: defina el ámbito del grupo de máquinas.
Revise los detalles de la pestaña Resumen y, a continuación, seleccione Guardar.
Centro Criptológico Nacional 74

![Imagen 1 - Página 74](CCN-STIC 885E_assets\pagina74_img1.png)

![Imagen 2 - Página 74](CCN-STIC 885E_assets\pagina74_img2.png)

![Imagen 3 - Página 74](CCN-STIC 885E_assets\pagina74_img3.png)

![Imagen 4 - Página 74](CCN-STIC 885E_assets\pagina74_img4.png)

![Imagen 5 - Página 74](CCN-STIC 885E_assets\pagina74_img5.png)

![Imagen 6 - Página 74](CCN-STIC 885E_assets\pagina74_img6.png)

---

<!-- Página 75 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
En la siguiente imagen, se puede ver en un dispositivo bajo el amparo de Defender
para puntos de conexión, como se aplica el bloqueo al dominio previamente
configurado.
Centro Criptológico Nacional 75

![Imagen 1 - Página 75](CCN-STIC 885E_assets\pagina75_img1.png)

![Imagen 2 - Página 75](CCN-STIC 885E_assets\pagina75_img2.png)

![Imagen 3 - Página 75](CCN-STIC 885E_assets\pagina75_img3.png)

![Imagen 4 - Página 75](CCN-STIC 885E_assets\pagina75_img4.png)

![Imagen 5 - Página 75](CCN-STIC 885E_assets\pagina75_img5.png)

![Imagen 6 - Página 75](CCN-STIC 885E_assets\pagina75_img6.png)

![Imagen 7 - Página 75](CCN-STIC 885E_assets\pagina75_img7.png)

---

<!-- Página 76 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Filtrado de contenido Web
Otra manera de securizar la navegación web en los equipos de la organización con
Defender para puntos de conexión, es el filtrado de contenido web.
Para que esta característica de protección web funcione correctamente, se tienen
que cumplir los siguientes requisitos:
 Licenciamiento:
o Windows 10/11 Enterprise E5
o M365 E5/E3/A5,
o MDefender Plan ½.
 Cualquiera de estos exploradores:
o Microsoft Edge
o Google Chrome
o Mozilla FireFox
o Ópera
 Y las características de Windows Defender SmartScreen y la protección de red
habilitadas en los dispositivos de la organización.
Para más información sobre estas características, se añaden los siguientes
enlaces:
Introducción a SmartScreen de Microsoft Defender - Windows Security |
Microsoft Learn
Uso de la protección de red para evitar conexiones a sitios incorrectos -
Microsoft Defender for Endpoint | Microsoft Learn
 Debe estar activo el filtrado de contenido web, para habilitarlo:
o Ir al portal de Microsoft Defender e iniciar sesión.
o En el panel de navegación, seleccionar Configuración > Puntos de
conexión > Características avanzadas.
o Activar el filtrado de contenido web.
Centro Criptológico Nacional 76

![Imagen 1 - Página 76](CCN-STIC 885E_assets\pagina76_img1.png)

![Imagen 2 - Página 76](CCN-STIC 885E_assets\pagina76_img2.png)

![Imagen 3 - Página 76](CCN-STIC 885E_assets\pagina76_img3.png)

![Imagen 4 - Página 76](CCN-STIC 885E_assets\pagina76_img4.png)

---

<!-- Página 77 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Una vez cumplidos los requisitos, para crear una directiva de filtrado web:
En el portal de Microsoft Defender, elegir Configuración > Puntos de conexión >
Reglas Filtrado de contenido web > Agregar directiva.
Se asigna el nombre, y a continuación se elige el contenido que se quiere filtrar en
la organización, en este caso se ha elegido contenido para adultos.
Centro Criptológico Nacional 77

![Imagen 1 - Página 77](CCN-STIC 885E_assets\pagina77_img1.png)

![Imagen 2 - Página 77](CCN-STIC 885E_assets\pagina77_img2.png)

![Imagen 3 - Página 77](CCN-STIC 885E_assets\pagina77_img3.png)

![Imagen 4 - Página 77](CCN-STIC 885E_assets\pagina77_img4.png)

![Imagen 5 - Página 77](CCN-STIC 885E_assets\pagina77_img5.png)

![Imagen 6 - Página 77](CCN-STIC 885E_assets\pagina77_img6.png)

---

<!-- Página 78 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Por último, especificar el ámbito de la directiva. Solo se impedirá que los dispositivos
de los grupos de dispositivos seleccionados accedan a sitios web de las categorías
seleccionadas.
Una vez configurado, la experiencia del usuario final es la siguiente.
Al intentar acceder a una página de apuestas desde un dispositivo inscrito a
Defender para puntos de conexión, se bloqueará el acceso.
Centro Criptológico Nacional 78

![Imagen 1 - Página 78](CCN-STIC 885E_assets\pagina78_img1.png)

![Imagen 2 - Página 78](CCN-STIC 885E_assets\pagina78_img2.png)

![Imagen 3 - Página 78](CCN-STIC 885E_assets\pagina78_img3.png)

![Imagen 4 - Página 78](CCN-STIC 885E_assets\pagina78_img4.png)

![Imagen 5 - Página 78](CCN-STIC 885E_assets\pagina78_img5.png)

![Imagen 6 - Página 78](CCN-STIC 885E_assets\pagina78_img6.png)

---

<!-- Página 79 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
3.2.4.2 PROTECCIÓN FRENTE A LA DENEGACIÓN DE SERVICIO
Office 365 ofrece un sistema avanzado de detección de amenazas y sistemas de
mitigación para proteger la infraestructura subyacente de los ataques de denegación de
servicio (DoS) y prevenir la interrupción de servicio a los clientes.
El sistema de defensa DDoS de Azure está diseñado no solo para resistir ataques
desde el exterior, sino también desde otros tenants de Azure. Los mecanismos de
limitación de peticiones de Exchange Online y SharePoint Online forman parte de un
enfoque de varias capas para defenderse contra ataques DoS.
Consultar la guía [CCN-STIC-884A - Guía de configuración segura para Azure] para
obtener más información sobre el sistema de defensa DDoS de Azure, así como la guía
[CCN-STIC-884E - Guía de configuración segura para Microsoft Sentinel].
Centro Criptológico Nacional 79

![Imagen 1 - Página 79](CCN-STIC 885E_assets\pagina79_img1.png)

![Imagen 2 - Página 79](CCN-STIC 885E_assets\pagina79_img2.png)

![Imagen 3 - Página 79](CCN-STIC 885E_assets\pagina79_img3.png)

![Imagen 4 - Página 79](CCN-STIC 885E_assets\pagina79_img4.png)

---

<!-- Página 80 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
4. OTRAS CONSIDERACIONES DE SEGURIDAD
4.1 CONFIGURACIÓN DE PARÁMETROS EN EL CENTRO DE SEGURIDAD DE
MICROSOFT DEFENDER
En el menú Configuración (Settings) es posible modificar la configuración general, las
características avanzadas propias de los puntos de conexión, habilitar la detección de
dispositivos, identidades, aplicaciones en la nube etc.
En esta guía se abarcarán diferentes aspectos que pueden influir en el uso de
Defender para puntos de conexión.
Tema Descripción
General Modificar la configuración general que se definió como parte
del proceso de incorporación.
Permisos Administrar el acceso al portal mediante RBAC, así como
grupos de dispositivos.
API Habilitar la integración con el SIEM y la inteligencia de
amenazas.
Reglas Configurar reglas de supresión y opciones de automatización.
Administración de dispositivos Dispositivos integrados y no integrados.
Evaluaciones de red Elegir los dispositivos que se examinarán periódicamente y se
agregarán al inventario de dispositivos.
4.1.1 CONFIGURACIÓN GENERAL
Para la configuración de los siguientes parámetros se usa como referencia el portal
Defender: security.microsoft.com, como se describe en el apartado [1.4 Funcionalidades
del portal].
4.1.1.1 ALMACENAMIENTO DE DATOS Y PRIVACIDAD
Defender for Endpoint funciona en los centros de datos de Microsoft Azure en la
Unión Europea, el Reino Unido, Estados Unidos o Australia. Los datos del cliente que el
servicio recoge pueden guardarse en: la zona geográfica del arrendatario que se
determina durante la configuración o, la zona geográfica que establecen las normas de
almacenamiento de datos de un servicio online si Defender for Endpoint usa este
servicio online para procesar esos datos.
Centro Criptológico Nacional 80

|  | Tema |  |  | Descripción |  |
| --- | --- | --- | --- | --- | --- |
| General | General |  |  | Modificar la configuración general que se definió como parte |  |
|  |  |  |  | del proceso de incorporación. |  |
| Permisos |  |  | Administrar el acceso al portal mediante RBAC, así como <br> grupos de dispositivos. |  |  |
| API |  |  |  | Habilitar la integración con el SIEM y la inteligencia de |  |
|  |  |  |  | amenazas. |  |
| Reglas |  |  | Configurar reglas de supresión y opciones de automatización. |  |  |
|  | Administración de dispositivos |  |  | Dispositivos integrados y no integrados. |  |
| Evaluaciones de red |  |  | Elegir los dispositivos que se examinarán periódicamente y se <br> agregarán al inventario de dispositivos. |  |  |


| Defender: security.microsoft.com, como se describe en el apartado [1.4 Funcionalidades |
| --- |
| del portal]. |


![Imagen 1 - Página 80](CCN-STIC 885E_assets\pagina80_img1.png)

![Imagen 2 - Página 80](CCN-STIC 885E_assets\pagina80_img2.png)

![Imagen 3 - Página 80](CCN-STIC 885E_assets\pagina80_img3.png)

![Imagen 4 - Página 80](CCN-STIC 885E_assets\pagina80_img4.png)

---

<!-- Página 81 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Microsoft Defender for Endpoint guarda información de los dispositivos que se han
configurado y la mantiene en un espacio independiente y exclusivo para cada cliente del
servicio, para poder gestionarla, supervisarla e informar sobre ella.
Los datos de Microsoft Defender para punto de conexión se conservan durante 180
días, visibles en el portal. Sin embargo, en la experiencia de investigación de búsqueda
avanzada, es accesible a través de una consulta durante 30 días.
4.1.1.2 CONFIGURAR NOTIFICACIONES DE ALERTAS Y VULNERABILIDADES
Se accede desde [Settings|General|Notificaciones por correo electronico]:
Se puede configurar Defender for Endpoint para enviar notificaciones por correo
electrónico a destinatarios específicos para nuevas alertas. Esta característica posibilita
identificar un grupo de personas que se informarán inmediatamente y podrán actuar en
función de la gravedad de alerta.
4.1.1.3 CARACTERÍSTICAS AVANZADAS
En esta sección se proporciona un conjunto de funciones avanzadas que puede
habilitarse. Estas características requieren integración con otros productos. Se debe
verificar que esta configuración esté habilitada para usar las características.
Se accede desde [Configuración|Puntos de conexión | General|Caracerísticas
avanzadas]:
Centro Criptológico Nacional 81

![Imagen 1 - Página 81](CCN-STIC 885E_assets\pagina81_img1.png)

![Imagen 2 - Página 81](CCN-STIC 885E_assets\pagina81_img2.png)

![Imagen 3 - Página 81](CCN-STIC 885E_assets\pagina81_img3.png)

![Imagen 4 - Página 81](CCN-STIC 885E_assets\pagina81_img4.png)

![Imagen 5 - Página 81](CCN-STIC 885E_assets\pagina81_img5.png)

---

<!-- Página 82 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Restringir la correlación de los grupos de dispositivos en ámbito
Esta opción permite agrupar las alertas en incidentes distintos según el grupo de
dispositivos del ámbito. Por defecto, los incidentes se correlacionan para todo el ámbito
del espacio empresarial.
Habilitar EDR en modo bloqueo
Cuando está activado, Microsoft Defender for Endpoint aprovecha las capacidades
de contención bloqueando los comportamientos o artefactos maliciosos observados a
través de las capacidades de detección y respuesta de puntos de conexión (EDR)
posteriores a la infracción.
Resolver alertas automáticamente
Resuelve una alerta si la investigación automatizada no encuentra amenazas o ha
solucionado con éxito todos los artefactos maliciosos.
Permitir o bloquear archivo
Comprobar que el Antivirus de Windows Defender esté activado y la función de
protección basada en la nube esté habilitada en su organización para usar la función de
permitir o bloquear archivos.
Ocultar posibles registros de dispositivos duplicados
Cuando está activada, esta configuración oculta las duplicaciones que podrían
producirse al detectarse dispositivos más de una vez o no detectados accidentalmente.
Indicadores de red personalizados
Configurar dispositivos para permitir o bloquear conexiones a direcciones IP,
dominios o URL en las listas de indicadores personalizados.
Protección contra alteraciones
Centro Criptológico Nacional 82

![Imagen 1 - Página 82](CCN-STIC 885E_assets\pagina82_img1.png)

![Imagen 2 - Página 82](CCN-STIC 885E_assets\pagina82_img2.png)

![Imagen 3 - Página 82](CCN-STIC 885E_assets\pagina82_img3.png)

![Imagen 4 - Página 82](CCN-STIC 885E_assets\pagina82_img4.png)

![Imagen 5 - Página 82](CCN-STIC 885E_assets\pagina82_img5.png)

---

<!-- Página 83 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
La protección contra alteraciones evita que las aplicaciones maliciosas deshabiliten
funciones de seguridad como la protección antivirus y contra amenazas, el análisis del
comportamiento, la protección en la nube y otras más.
Mostrar detalles de usuario
Permite mostrar los detalles del usuario: imagen, nombre, cargo, departamento,
almacenados en Entra ID.
Integración de Skype para empresas
Permite la comunicación con los usuarios con un solo clic.
Microsoft Defender for Cloud Apps
Reenvía las señales de Microsoft Defender para punto de conexión a Defender for
Cloud Apps, dando a los administradores una visibilidad más profunda tanto de las
aplicaciones de nube sancionadas como de la shadow TI. También les da la capacidad de
bloquear aplicaciones no autorizadas cuando la configuración de los indicadores de red
personalizados está activada.
Filtrado de contenido web
Esta opción permite bloquear el acceso a los sitios web con contenido no deseado y
rastrear la actividad web en todos los dominios.
Registro de auditoría unificado
Si una actividad auditada es realizada por un usuario o un administrador, se creará
un registro de auditoría que se guardará en el registro de auditoría de Office 365 de su
organización.
Detección de dispositivos
Permite a los dispositivos integrados detectar dispositivos no administrados en su
red y evaluar las vulnerabilidades y los riesgos.
Descargar archivos en cuarentena
Realiza una copia de seguridad de los archivos en cuarentena en una ubicación
segura y compatible, para que se puedan descargar directamente desde la cuarentena.
Optimizar la conectividad durante la incorporación de dispositivos
Activa la opción de utilizar conectividad optimizada en paquetes de incorporación.
Esta configuración utiliza menos URL y admite rangos de IP estáticos.
Respuesta en vivo
Permite a los usuarios con los permisos adecuados de RBAC investigar los
dispositivos a los que están autorizados a acceder mediante una conexión de shell
remota.
Respuesta en vivo para servidores
Centro Criptológico Nacional 83

![Imagen 1 - Página 83](CCN-STIC 885E_assets\pagina83_img1.png)

![Imagen 2 - Página 83](CCN-STIC 885E_assets\pagina83_img2.png)

![Imagen 3 - Página 83](CCN-STIC 885E_assets\pagina83_img3.png)

![Imagen 4 - Página 83](CCN-STIC 885E_assets\pagina83_img4.png)

---

<!-- Página 84 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Permite a los usuarios con privilegios de respuesta en vivo conectarse de forma
remota a servidores (dispositivos Windows Server o Linux) a los que están autorizados
para acceder.
Ejecución de script sin firmar de Live Response
Habilita el uso de scripts sin firmar en Live Response.
Señuelos
Administre e implemente señuelos y cebos para atrapar a los atacantes en su
entorno. Tras activar esto, vaya a Reglas > Reglas contra señuelos para ejecutar
campañas de engaño.
Conexión de Microsoft Intune
Conectarse a Microsoft Intune para permitir compartir la información del dispositivo
y mejorar la aplicación de políticas.
Intune proporciona información adicional sobre dispositivos administrados para una
puntuación segura. Se puede utilizar información de riesgo para hacer cumplir el acceso
condicional y otras políticas de seguridad.
Telemetría autenticada
Mantén activada la telemetría autenticada para evitar la suplantación de identidad
en el panel.
Funciones de vista previa
Permita el acceso a las funciones de vista previa. Active el acceso para estar entre
los primeros en probar las próximas características.
4.1.1.4 LICENCIAS
En esta sección se puede hacer un seguimiento sobre la disponibilidad y el uso de las
licencias actualmente en la organización.
Centro Criptológico Nacional 84

![Imagen 1 - Página 84](CCN-STIC 885E_assets\pagina84_img1.png)

![Imagen 2 - Página 84](CCN-STIC 885E_assets\pagina84_img2.png)

![Imagen 3 - Página 84](CCN-STIC 885E_assets\pagina84_img3.png)

![Imagen 4 - Página 84](CCN-STIC 885E_assets\pagina84_img4.png)

---

<!-- Página 85 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
4.1.1.5 CORRECCIÓN AUTOMÁTICA
Se puede especificar un nivel de automatización para que cuando se detecte una
amenaza en un dispositivo, la entidad se pueda corregir automáticamente o solo tras la
aprobación del equipo de seguridad. Se puede configurar la investigación y la corrección
automatizadas con grupos de dispositivos.
Estos grupos de dispositivos se pueden crear en [Configuración|Puntos de conexión
| Permisos|Grupos de dispositivos].
4.1.2 PERMISOS
Con esta sección de configuración, accesible desde [Configuración|Puntos de
conexión | Permisos] se permite:
 Definir los roles de administrador, los permisos correspondientes y los grupos
de seguridad de Azure Active Directory asignados a los roles.
 Organizar los dispositivos en grupos, establecer niveles de corrección
automatizados y asignar administradores.
Centro Criptológico Nacional 85

![Imagen 1 - Página 85](CCN-STIC 885E_assets\pagina85_img1.png)

![Imagen 2 - Página 85](CCN-STIC 885E_assets\pagina85_img2.png)

![Imagen 3 - Página 85](CCN-STIC 885E_assets\pagina85_img3.png)

![Imagen 4 - Página 85](CCN-STIC 885E_assets\pagina85_img4.png)

![Imagen 5 - Página 85](CCN-STIC 885E_assets\pagina85_img5.png)

![Imagen 6 - Página 85](CCN-STIC 885E_assets\pagina85_img6.png)

---

<!-- Página 86 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
A continuación, se detallan las distintas opciones de permisos al añadir un rol:
La explicación de cada uno de ellos en la sección [3.1.2.2 Segregación de funciones
y tareas].
4.1.3 API
Se accede desde [Configuración|Puntos de conexión | APIs]
Desde esta sección se puede habilitar el conector SIEM para enviar alertas a la
solución de gestión de eventos y seguridad (SIEM) o para generar alertas directamente
a través de la API REST de alertas.
Centro Criptológico Nacional 86

![Imagen 1 - Página 86](CCN-STIC 885E_assets\pagina86_img1.png)

![Imagen 2 - Página 86](CCN-STIC 885E_assets\pagina86_img2.png)

![Imagen 3 - Página 86](CCN-STIC 885E_assets\pagina86_img3.png)

![Imagen 4 - Página 86](CCN-STIC 885E_assets\pagina86_img4.png)

![Imagen 5 - Página 86](CCN-STIC 885E_assets\pagina86_img5.png)

![Imagen 6 - Página 86](CCN-STIC 885E_assets\pagina86_img6.png)

---

<!-- Página 87 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
4.1.4 REGLAS
4.1.4.1 SUPRESIÓN DE ALERTAS
En algunos escenarios es deseable suprimir alertas para que no aparezcan en el
portal. Pueden crearse reglas de supresión para alertas específicas que se sabe que son
inocuas, como herramientas o procesos conocidos de la organización.
A través de [Configuración|Puntos de conexión | Reglas | Supresión de alertas] se
puede llegar a la configuración de Microsoft Defender XDR, donde se ha movido esta
opción.
Centro Criptológico Nacional 87

![Imagen 1 - Página 87](CCN-STIC 885E_assets\pagina87_img1.png)

![Imagen 2 - Página 87](CCN-STIC 885E_assets\pagina87_img2.png)

![Imagen 3 - Página 87](CCN-STIC 885E_assets\pagina87_img3.png)

![Imagen 4 - Página 87](CCN-STIC 885E_assets\pagina87_img4.png)

![Imagen 5 - Página 87](CCN-STIC 885E_assets\pagina87_img5.png)

---

<!-- Página 88 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Una vez en la nueva ubicación se obtiene una lista de todas las reglas de supresión,
pudiéndose activar o desactivar cada regla de supresión de alertas.
4.1.4.2 REGLAS CONTRA SEÑUELOS
La característica de señuelo del portal de Microsoft Defender usa reglas para generar
señuelos que se ajustan al entorno. La característica utiliza el aprendizaje automático
para proponer señuelos personalizados para la red. También se puede usar la
característica de engaño para crear los señuelos manualmente. Estos señuelos se
despliegan automáticamente en la red y se insertan en los dispositivos que elija
mediante PowerShell.
Centro Criptológico Nacional 88

![Imagen 1 - Página 88](CCN-STIC 885E_assets\pagina88_img1.png)

![Imagen 2 - Página 88](CCN-STIC 885E_assets\pagina88_img2.png)

![Imagen 3 - Página 88](CCN-STIC 885E_assets\pagina88_img3.png)

![Imagen 4 - Página 88](CCN-STIC 885E_assets\pagina88_img4.png)

![Imagen 5 - Página 88](CCN-STIC 885E_assets\pagina88_img5.png)

![Imagen 6 - Página 88](CCN-STIC 885E_assets\pagina88_img6.png)

---

<!-- Página 89 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Cuando un atacante usa un señuelo en cualquier cliente incorporado de Defender
for Endpoint, la funcionalidad de engaño desencadena una alerta que indica la posible
actividad del atacante, independientemente de si el engaño se implementó en el cliente
o no.
Para la creación de reglas de señuelo se accede desde [Configuración|Puntos de
conexión | Reglas | Reglas de señuelo]
Para más información sobre la creación de reglas de este tipo, acceder al enlace:
Configuración de la funcionalidad de engaño en Microsoft Defender XDR - Microsoft
Defender XDR | Microsoft Learn
4.1.4.3 INDICADORES
Se accede desde [Configuración|Puntos de conexión | Reglas |Indicadores].
El indicador de coincidencia de puntos de conexión (IoCs) es una característica
esencial en cada solución de protección de puntos de conexión. Esta funcionalidad
ofrece al equipo de operaciones de seguridad (SecOps) la capacidad de establecer una
lista de indicadores para la detección y para el bloqueo (prevención y respuesta).
Se pueden crear indicadores que definan la detección, prevención y exclusión de
entidades, además de definir la acción que se va a realizar, así como la duración de la
misma y el ámbito del grupo de dispositivos al que aplicarla.
Los orígenes compatibles actualmente son el motor de detección en la nube de
Defender for Endpoint, el motor automatizado de investigación y corrección y el motor
de prevención de puntos de conexión (Antivirus de Microsoft Defender).
Más información en la página oficial de Microsoft:
Crear indicadores - Microsoft Defender for Endpoint | Microsoft Learn
Centro Criptológico Nacional 89

![Imagen 1 - Página 89](CCN-STIC 885E_assets\pagina89_img1.png)

![Imagen 2 - Página 89](CCN-STIC 885E_assets\pagina89_img2.png)

![Imagen 3 - Página 89](CCN-STIC 885E_assets\pagina89_img3.png)

![Imagen 4 - Página 89](CCN-STIC 885E_assets\pagina89_img4.png)

![Imagen 5 - Página 89](CCN-STIC 885E_assets\pagina89_img5.png)

---

<!-- Página 90 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
4.1.4.4 FILTRADO DE CONTENIDO WEB
El filtrado de contenido web permite a la organización controlar y limitar el acceso a
sitios web según tipos de contenido. Muchos de estos sitios web (aunque no tengan
malas intenciones) pueden causar problemas por las normas de cumplimiento, el
consumo del ancho de banda u otras cuestiones.
Los navegadores web más populares ofrecen filtros de contenido web, que bloquean
sitios peligrosos con Windows Defender SmartScreen (Microsoft Edge) y protección de
red (Chrome, Firefox, Brave y Opera).
4.1.4.5 ADMINISTRAR AUTOMATIZACIÓN DE CARGAS DE ARCHIVOS
Se accede desde [Configuración|Puntos de conexión | Reglas | Cargas de
automatización].
Centro Criptológico Nacional 90

![Imagen 1 - Página 90](CCN-STIC 885E_assets\pagina90_img1.png)

![Imagen 2 - Página 90](CCN-STIC 885E_assets\pagina90_img2.png)

![Imagen 3 - Página 90](CCN-STIC 885E_assets\pagina90_img3.png)

![Imagen 4 - Página 90](CCN-STIC 885E_assets\pagina90_img4.png)

![Imagen 5 - Página 90](CCN-STIC 885E_assets\pagina90_img5.png)

---

<!-- Página 91 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Se recomienda habilitar la funcionalidad de análisis de contenido para que
determinados archivos y datos adjuntos de correo electrónico se puedan cargar
automáticamente en la nube para una inspección adicional en la investigación
automatizada.
Identificar los archivos y los datos adjuntos de correo electrónico especificando los
nombres de extensión de archivo y los nombres de extensión de datos adjuntos de
correo electrónico.
Por ejemplo, si se agrega exe y bat como nombres de extensión de archivo o datos
adjuntos, todos los archivos o datos adjuntos con esas extensiones se enviarán
automáticamente a la nube para una inspección adicional durante la investigación
automatizada.
4.1.4.6 ADMINISTRAR LAS EXCLUSIONES DE CARPETAS DE AUTOMATIZACIÓN
Se accede desde [Configuración|Puntos de conexión | Reglas | Exclusión de carpetas
de Automatización].
Las exclusiones de carpetas de automatización permiten especificar carpetas que
omitirá la investigación automatizada.
Se pueden controlar los siguientes atributos acerca de la carpeta que desea omitir:
 Carpetas: para especificar una carpeta y las subcarpetas que se omitirán.
 Extensiones de los archivos: especificar las extensiones que se excluirán en un
directorio específico. Las extensiones son una forma de impedir que un atacante
use una carpeta excluida para ocultar una vulnerabilidad. Las extensiones
definen explícitamente los archivos que se deben omitir.
 Nombres de archivo: se puede especificar los nombres de archivo que desea
excluir en un directorio específico. Los nombres son una forma de impedir que
un atacante use una carpeta excluida para ocultar una vulnerabilidad. Los
nombres definen explícitamente los archivos que se deben omitir.
Centro Criptológico Nacional 91

![Imagen 1 - Página 91](CCN-STIC 885E_assets\pagina91_img1.png)

![Imagen 2 - Página 91](CCN-STIC 885E_assets\pagina91_img2.png)

![Imagen 3 - Página 91](CCN-STIC 885E_assets\pagina91_img3.png)

![Imagen 4 - Página 91](CCN-STIC 885E_assets\pagina91_img4.png)

![Imagen 5 - Página 91](CCN-STIC 885E_assets\pagina91_img5.png)

---

<!-- Página 92 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
4.1.5 ADMINISTRACIÓN DE LA CONFIGURACIÓN
Microsoft Defender para punto de conexión permite aplicar directivas de seguridad
de punto de conexión desde Microsoft Intune para gestionar la configuración de
seguridad de Defender en los dispositivos que se han conectado a Defender sin registrar
esos dispositivos con Intune. Esta funcionalidad se llama administración de la
configuración de seguridad de Defender para punto de conexión.
4.1.5.1 ADMINISTRACIÓN DE LA CONFIGURACIÓN DE SEGURIDAD
Al administrar dispositivos mediante la administración de la configuración de
seguridad:
Se puede usar Microsoft Intune o el portal de Microsoft Defender XDR para
configurar directivas de seguridad de puntos de conexión y asignar esas directivas a
grupos de Microsoft Entra ID. El portal de Defender contiene la interfaz de usuario para
ver dispositivos, administrar directivas e informes para gestionar la configuración de
seguridad.
Para admitir la administración de la configuración de seguridad a través del centro
de administración de Microsoft Intune, se debe habilitar la comunicación entre ellos
desde cada consola.
Se accede desde [Configuración|Puntos de conexión | Administración de la
configuración | Ámbito de aplicación].
Centro Criptológico Nacional 92

![Imagen 1 - Página 92](CCN-STIC 885E_assets\pagina92_img1.png)

![Imagen 2 - Página 92](CCN-STIC 885E_assets\pagina92_img2.png)

![Imagen 3 - Página 92](CCN-STIC 885E_assets\pagina92_img3.png)

![Imagen 4 - Página 92](CCN-STIC 885E_assets\pagina92_img4.png)

![Imagen 5 - Página 92](CCN-STIC 885E_assets\pagina92_img5.png)

---

<!-- Página 93 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Para la habilitación de la característica de Microsoft Intune, consultar la guía [CCN-
STIC-884F – Guía de configuración segura para Microsoft Intune].
Para más información revisar la documentación oficial de Microsoft:
Use Intune para administrar la configuración de seguridad de Microsoft Defender en
dispositivos que no están inscritos con Microsoft Intune | Microsoft Learn
4.1.6 ADMINISTRACIÓN DE DISPOSITIVOS
4.1.6.1 INCORPORACIÓN
Se accede desde [Configuración|Puntos de conexión | Administración de
dispositivos|Incorporación].
Desde esta sección se puede incorporar cualquiera de los dispositivos compatibles,
como se ha explicado previamente en la sección [2.6.3 Incorporación (Onboard)]. Según
el dispositivo, se guiará con los pasos adecuados y se ofrecerán opciones de
herramientas de administración e implementación adecuadas para el dispositivo.
En general, para incorporar dispositivos al servicio:
 Comprobar que el dispositivo cumple los requisitos mínimos.
 Según el dispositivo, seguir los pasos de configuración proporcionados.
 Usar la herramienta de administración y el método de implementación
adecuados para los dispositivos.
 Ejecutar una prueba de detección para comprobar que los dispositivos están
correctamente incorporados e informando al servicio
Centro Criptológico Nacional 93

![Imagen 1 - Página 93](CCN-STIC 885E_assets\pagina93_img1.png)

![Imagen 2 - Página 93](CCN-STIC 885E_assets\pagina93_img2.png)

![Imagen 3 - Página 93](CCN-STIC 885E_assets\pagina93_img3.png)

![Imagen 4 - Página 93](CCN-STIC 885E_assets\pagina93_img4.png)

![Imagen 5 - Página 93](CCN-STIC 885E_assets\pagina93_img5.png)

---

<!-- Página 94 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
4.1.6.2 RETIRADA
Se accede desde [Configuración|Puntos de conexión | Administración de
dispositivos|Retirada].
Para dejar de supervisar un dispositivo específico con Microsoft Defender, cambia
una configuración.
4.1.7 EVALUACIONES DE RED
Se accede desde [Configuración|Puntos de conexión | Evaluaciones de red |
Trabajos de evaluación].
Los trabajos de evaluación de red se han movido a la configuración general de
Microsoft Defender, en la sección de Detección de dispositivos.
Centro Criptológico Nacional 94

![Imagen 1 - Página 94](CCN-STIC 885E_assets\pagina94_img1.png)

![Imagen 2 - Página 94](CCN-STIC 885E_assets\pagina94_img2.png)

![Imagen 3 - Página 94](CCN-STIC 885E_assets\pagina94_img3.png)

![Imagen 4 - Página 94](CCN-STIC 885E_assets\pagina94_img4.png)

![Imagen 5 - Página 94](CCN-STIC 885E_assets\pagina94_img5.png)

![Imagen 6 - Página 94](CCN-STIC 885E_assets\pagina94_img6.png)

---

<!-- Página 95 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Renombrados como Exámenes autenticados, proporcionan la capacidad de ejecutar
exámenes en dispositivos Windows no administrados.
Una vez configurados, los dispositivos no administrados de destino se examinarán
periódicamente en busca de vulnerabilidades de software.
Centro Criptológico Nacional 95

![Imagen 1 - Página 95](CCN-STIC 885E_assets\pagina95_img1.png)

![Imagen 2 - Página 95](CCN-STIC 885E_assets\pagina95_img2.png)

![Imagen 3 - Página 95](CCN-STIC 885E_assets\pagina95_img3.png)

![Imagen 4 - Página 95](CCN-STIC 885E_assets\pagina95_img4.png)

![Imagen 5 - Página 95](CCN-STIC 885E_assets\pagina95_img5.png)

![Imagen 6 - Página 95](CCN-STIC 885E_assets\pagina95_img6.png)

![Imagen 7 - Página 95](CCN-STIC 885E_assets\pagina95_img7.png)

---

<!-- Página 96 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
5. GLOSARIO Y ABREVIATURAS
A continuación de describen una serie de términos, acrónimos y abreviaturas en
materia de seguridad utilizados en esta guía:
Término Definición
AAD Azure Active Directory (Directorio Activo de Azure).
AD DS Active Directory Domain Services (Servicios de dominio de
Directorio Activo).
AIP Azure Information Protection.
Azure AD Azure Active Directory.
Azure RMS Azure Rights Management (Azure RMS).
Centro de Portal de Administración de Office 365.
Administración
Accesible desde la url: admin.microsoft.com.
de Microsoft
365
Entra ID Microsoft Entra ID
CSC Centro de Seguridad y Cumplimiento de Office 365.
CSP Cloud Service Provider
DDoS Distributed Denial of Service (Ataque de Denegación de Servicio
Distribuido), el cual se lleva a cabo generando un gran flujo de
información desde varios puntos de conexión hacia un mismo
punto de destino.
EDR Endpoint Detection and Response. Es una herramienta que
proporciona monitorización y análisis continuo del endpoint y la
red.
ENS Esquema Nacional de Seguridad.
IoCs Indicador de coincidencia de puntos de conexión
Hunting Búsqueda avanzada de amenazas cibernéticas
MFA Multifactor Authentication (Autenticación Multifactor). Sistema de
seguridad que requiere más de una forma de autenticarse, por
ejemplo, a través de una app, sms, etc.
Centro Criptológico Nacional 96

|  | Término |  |  | Definición |  |
| --- | --- | --- | --- | --- | --- |
|  | AAD |  |  | Azure Active Directory (Directorio Activo de Azure). |  |
| AD DS |  |  | Active Directory Domain Services (Servicios de dominio de <br> Directorio Activo). |  |  |
|  | AIP |  |  | Azure Information Protection. |  |
| Azure AD |  |  | Azure Active Directory. |  |  |
|  | Azure RMS |  |  | Azure Rights Management (Azure RMS). |  |
| Centro de <br> Administración <br> de Microsoft <br> 365 |  |  | Portal de Administración de Office 365. <br> Accesible desde la url: admin.microsoft.com. |  |  |
|  | Entra ID |  |  | Microsoft Entra ID |  |
| CSC |  |  | Centro de Seguridad y Cumplimiento de Office 365. |  |  |
|  | CSP |  |  | Cloud Service Provider |  |
| DDoS |  |  | Distributed Denial of Service (Ataque de Denegación de Servicio <br> Distribuido), el cual se lleva a cabo generando un gran flujo de <br> información desde varios puntos de conexión hacia un mismo <br> punto de destino. |  |  |
| EDR |  |  |  | Endpoint Detection and Response. Es una herramienta que |  |
|  |  |  |  | proporciona monitorización y análisis continuo del endpoint y la |  |
|  |  |  |  | red. |  |
| ENS |  |  | Esquema Nacional de Seguridad. |  |  |
|  | IoCs |  |  | Indicador de coincidencia de puntos de conexión |  |
| Hunting |  |  | Búsqueda avanzada de amenazas cibernéticas |  |  |
| MFA |  |  |  | Multifactor Authentication (Autenticación Multifactor). Sistema de |  |
|  |  |  |  | seguridad que requiere más de una forma de autenticarse, por |  |
|  |  |  |  | ejemplo, a través de una app, sms, etc. |  |


![Imagen 1 - Página 96](CCN-STIC 885E_assets\pagina96_img1.png)

![Imagen 2 - Página 96](CCN-STIC 885E_assets\pagina96_img2.png)

![Imagen 3 - Página 96](CCN-STIC 885E_assets\pagina96_img3.png)

![Imagen 4 - Página 96](CCN-STIC 885E_assets\pagina96_img4.png)

---

<!-- Página 97 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Microsoft Microsoft Intune es un servicio de administración de movilidad
Intune empresarial (EMM) basado en nube que ayuda a los empleados a
ser productivos mientras mantiene protegidos los datos
corporativos. Al igual que otros servicios de Azure, Microsoft
Intune está disponible en el portal de Azure. Intune permite:
- Administrar los dispositivos móviles y los equipos que los
empleados usan para tener acceso a datos de la empresa.
- Administrar las aplicaciones móviles que usa la plantilla.
- Proteger la información de la empresa al ayudar a controlar la
manera en que los empleados tienen acceso a ella y la
comparten.
- Garantizar que los dispositivos y las aplicaciones sean
compatibles con los requisitos de seguridad de la empresa
O365 Office 365.
Onboarding Proceso de incorporación de dispositivos
PE El formato Portable Executable (PE) es un formato de archivo para
archivos ejecutables, de código objeto, bibliotecas de enlace
dinámico (DLL), y otros usados en versiones de 32 bit y 64 bit del
sistema operativo Microsoft Windows.
PowerShell PowerShell (originalmente llamada Windows PowerShell) es una
interfaz de consola (CLI) con posibilidad de escritura y unión de
comandos por medio de instrucciones (scripts).
PS PowerShell.
SaaS Software as a Service (Software como Servicio). Modelo de
distribución de software donde el soporte lógico y los datos que
maneja se alojan en servidores de una compañía de TIC, y se
accede vía internet.
Sensitivity label Etiqueta de sensibilidad. Permiten clasificar, cifrar, agregar
marcadores y controlar accesos en documentos y correos
electrónicos en Office 365.
Spectre y Tanto Spectre como Meltdown son dos vulnerabilidades
Meltdown descubiertas en las CPU.
SOC SOC (Security Operations Center) o Centro de Operaciones de
Seguridad
Centro Criptológico Nacional 97

| Microsoft <br> Intune |  |  | Microsoft Intune es un servicio de administración de movilidad <br> empresarial (EMM) basado en nube que ayuda a los empleados a <br> ser productivos mientras mantiene protegidos los datos <br> corporativos. Al igual que otros servicios de Azure, Microsoft <br> Intune está disponible en el portal de Azure. Intune permite: <br> - Administrar los dispositivos móviles y los equipos que los <br> empleados usan para tener acceso a datos de la empresa. <br> - Administrar las aplicaciones móviles que usa la plantilla. <br> - Proteger la información de la empresa al ayudar a controlar la <br> manera en que los empleados tienen acceso a ella y la <br> comparten. <br> - Garantizar que los dispositivos y las aplicaciones sean <br> compatibles con los requisitos de seguridad de la empresa |  |  |
| --- | --- | --- | --- | --- | --- |
|  | O365 |  |  | Office 365. |  |
| Onboarding |  |  | Proceso de incorporación de dispositivos |  |  |
| PE |  |  |  | El formato Portable Executable (PE) es un formato de archivo para |  |
|  |  |  |  | archivos ejecutables, de código objeto, bibliotecas de enlace |  |
|  |  |  |  | dinámico (DLL), y otros usados en versiones de 32 bit y 64 bit del |  |
|  |  |  |  | sistema operativo Microsoft Windows. |  |
| PowerShell |  |  | PowerShell (originalmente llamada Windows PowerShell) es una <br> interfaz de consola (CLI) con posibilidad de escritura y unión de <br> comandos por medio de instrucciones (scripts). |  |  |
|  | PS |  |  | PowerShell. |  |
| SaaS |  |  | Software as a Service (Software como Servicio). Modelo de <br> distribución de software donde el soporte lógico y los datos que <br> maneja se alojan en servidores de una compañía de TIC, y se <br> accede vía internet. |  |  |
| Sensitivity label |  |  |  | Etiqueta de sensibilidad. Permiten clasificar, cifrar, agregar |  |
|  |  |  |  | marcadores y controlar accesos en documentos y correos |  |
|  |  |  |  | electrónicos en Office 365. |  |
| Spectre y <br> Meltdown |  |  | Tanto Spectre como Meltdown son dos vulnerabilidades <br> descubiertas en las CPU. |  |  |
| SOC |  |  |  | SOC (Security Operations Center) o Centro de Operaciones de |  |
|  |  |  |  | Seguridad |  |


![Imagen 1 - Página 97](CCN-STIC 885E_assets\pagina97_img1.png)

![Imagen 2 - Página 97](CCN-STIC 885E_assets\pagina97_img2.png)

![Imagen 3 - Página 97](CCN-STIC 885E_assets\pagina97_img3.png)

![Imagen 4 - Página 97](CCN-STIC 885E_assets\pagina97_img4.png)

---

<!-- Página 98 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Tenant Un tenant de Office 365 es un espacio reservado en la nube de
Microsoft desde el que tendremos acceso a los recursos y servicios
que Microsoft ofrece.
XDR Solución que unifica múltiples productos de seguridad en una sola
plataforma para mejorar la detección, investigación y respuesta a
amenazas
TLS TLS (Seguridad de la capa de transporte) y SSL (antecesor de TLS)
son protocolos criptográficos que protegen la comunicación por
red con certificados de seguridad que cifran una conexión entre
equipos.
Centro Criptológico Nacional 98

| Tenant | Un tenant de Office 365 es un espacio reservado en la nube de <br> Microsoft desde el que tendremos acceso a los recursos y servicios <br> que Microsoft ofrece. |  |  |
| --- | --- | --- | --- |
| XDR |  | Solución que unifica múltiples productos de seguridad en una sola |  |
|  |  | plataforma para mejorar la detección, investigación y respuesta a |  |
|  |  | amenazas |  |
| TLS | TLS (Seguridad de la capa de transporte) y SSL (antecesor de TLS) <br> son protocolos criptográficos que protegen la comunicación por <br> red con certificados de seguridad que cifran una conexión entre <br> equipos. |  |  |


![Imagen 1 - Página 98](CCN-STIC 885E_assets\pagina98_img1.png)

![Imagen 2 - Página 98](CCN-STIC 885E_assets\pagina98_img2.png)

![Imagen 3 - Página 98](CCN-STIC 885E_assets\pagina98_img3.png)

![Imagen 4 - Página 98](CCN-STIC 885E_assets\pagina98_img4.png)

---

<!-- Página 99 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
6. CUADRO RESUMEN DE MEDIDAS DE SEGURIDAD
Se facilita a continuación un cuadro resumen de configuraciones a aplicar para la protección del servicio, donde la organización podrá
valorar qué medidas de las propuestas se cumplen.
Control Configuracion Estado
ENS
op Marco Operacional
op.acc Control de Acceso
op.acc.1 Identificación
Se ha realizado adecuadamente la gestión de identidades. Aplica: Cumple:
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
op.acc.3 Segregación de funciones y tareas
Centro Criptológico Nacional
99

|  | Control |  | Configuracion | Estado |  |
| --- | --- | --- | --- | --- | --- |
|  | ENS |  |  |  |  |
| op |  |  | Marco Operacional |  |  |
| op.acc |  |  | Control de Acceso |  |  |
| op.acc.1 |  |  | Identificación |  |  |
|  |  |  | Se ha realizado adecuadamente la gestión de identidades. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  |  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| op.acc.3 |  |  | Segregación de funciones y tareas |  |  |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


![Imagen 1 - Página 99](CCN-STIC 885E_assets\pagina99_img1.png)

![Imagen 2 - Página 99](CCN-STIC 885E_assets\pagina99_img2.png)

![Imagen 3 - Página 99](CCN-STIC 885E_assets\pagina99_img3.png)

![Imagen 4 - Página 99](CCN-STIC 885E_assets\pagina99_img4.png)

---

<!-- Página 100 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Se ha asignado adecuadamente los roles de administración. Aplica: Cumple:
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
op.acc.5 Mecanismo de autenticación (usuarios externos)
Se ha habilitado Multi-Factor Authentication (MFA) para los usuarios Aplica: Cumple:
externos. Se han configurado directivas de acceso condicional para el control
Sí No Sí No
de acceso.
Evidencias Recogidas: Observaciones:
Sí No
op.acc.6 Mecanismo de autenticación (usuarios de la organización)
Se ha habilitado Multi-Factor Authentication (MFA) para los usuarios Aplica: Cumple:
externos. Se han configurado directivas de acceso condicional para el control
Sí No Sí No
de acceso y se dispone de una adecuada política de gestión de credenciales.
Centro Criptológico Nacional
100

|  | Se ha asignado adecuadamente los roles de administración. | Aplica: <br> Sí No | Cumple: <br> Sí No |
| --- | --- | --- | --- |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| op.acc.5 | Mecanismo de autenticación (usuarios externos) |  |  |
|  | Se ha habilitado Multi-Factor Authentication (MFA) para los usuarios <br> externos. Se han configurado directivas de acceso condicional para el control <br> de acceso. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| op.acc.6 | Mecanismo de autenticación (usuarios de la organización) |  |  |
|  | Se ha habilitado Multi-Factor Authentication (MFA) para los usuarios <br> externos. Se han configurado directivas de acceso condicional para el control <br> de acceso y se dispone de una adecuada política de gestión de credenciales. | Aplica: <br> Sí No | Cumple: <br> Sí No |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  |
| --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


![Imagen 1 - Página 100](CCN-STIC 885E_assets\pagina100_img1.png)

![Imagen 2 - Página 100](CCN-STIC 885E_assets\pagina100_img2.png)

![Imagen 3 - Página 100](CCN-STIC 885E_assets\pagina100_img3.png)

![Imagen 4 - Página 100](CCN-STIC 885E_assets\pagina100_img4.png)

---

<!-- Página 101 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Evidencias Recogidas: Observaciones:
Sí No
op.acc.6 Mecanismo de autenticación (usuarios de la organización)
Se ha activado la Ubicación de red para permitir el acceso solo desde Aplica: Cumple:
determinadas direcciones IP. Y la limitación de acceso a los administradores.
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
op.mon Monitorización del sistema
Se ha activado el registro de auditoría para ver los datos en los informes Aplica: Cumple:
de protección contra amenazas y poder explotar la herramienta Explorador.
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
op.vig Vigilancia
Centro Criptológico Nacional
101

|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| --- | --- | --- | --- |
| op.acc.6 | Mecanismo de autenticación (usuarios de la organización) |  |  |
|  | Se ha activado la Ubicación de red para permitir el acceso solo desde <br> determinadas direcciones IP. Y la limitación de acceso a los administradores. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| op.mon | Monitorización del sistema |  |  |
|  | Se ha activado el registro de auditoría para ver los datos en los informes <br> de protección contra amenazas y poder explotar la herramienta Explorador. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| op.vig | Vigilancia |  |  |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  |
| --- | --- |


| Sí |  | No |
| --- | --- | --- |


![Imagen 1 - Página 101](CCN-STIC 885E_assets\pagina101_img1.png)

![Imagen 2 - Página 101](CCN-STIC 885E_assets\pagina101_img2.png)

![Imagen 3 - Página 101](CCN-STIC 885E_assets\pagina101_img3.png)

![Imagen 4 - Página 101](CCN-STIC 885E_assets\pagina101_img4.png)

---

<!-- Página 102 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Se ha revisado la configuración actual, con los planes estrictos o estandar Aplica: Cumple:
que nos ofrece Microsoft para seguir sus buenas prácticas.
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Otras Configurar notificaciones de alertas y vulnerabilidades
Se ha configurado Defender for Endpoint para enviar notificaciones por Aplica: Cumple:
correo electrónico a destinatarios específicos para nuevas alertas.
Sí No Sí No
* Esta característica posibilita identificar un grupo de personas que se
informarán inmediatamente y podrán actuar en función de la gravedad de
alerta. Evidencias Recogidas: Observaciones:
Sí No
Otras Periodo de retención
Se ha establecido una retención adecuada de los datos en la instancia Aplica: Cumple:
Cloud.
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Centro Criptológico Nacional
102

|  | Se ha revisado la configuración actual, con los planes estrictos o estandar <br> que nos ofrece Microsoft para seguir sus buenas prácticas. | Aplica: <br> Sí No | Cumple: <br> Sí No |
| --- | --- | --- | --- |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| Otras | Configurar notificaciones de alertas y vulnerabilidades |  |  |
|  | Se ha configurado Defender for Endpoint para enviar notificaciones por <br> correo electrónico a destinatarios específicos para nuevas alertas. <br> * Esta característica posibilita identificar un grupo de personas que se <br> informarán inmediatamente y podrán actuar en función de la gravedad de <br> alerta. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| Otras | Periodo de retención |  |  |
|  | Se ha establecido una retención adecuada de los datos en la instancia <br> Cloud. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


![Imagen 1 - Página 102](CCN-STIC 885E_assets\pagina102_img1.png)

![Imagen 2 - Página 102](CCN-STIC 885E_assets\pagina102_img2.png)

![Imagen 3 - Página 102](CCN-STIC 885E_assets\pagina102_img3.png)

![Imagen 4 - Página 102](CCN-STIC 885E_assets\pagina102_img4.png)

---

<!-- Página 103 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Otras Investigación automatizada
Se han habilitado las capacidades de automatización para investigación y Aplica: Cumple:
respuesta.
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Otras Habilitar EDR en modo bloqueo
Se ha activado para aprovechar las capacidades de contención Aplica: Cumple:
bloqueando los comportamientos o artefactos maliciosos observados a través
Sí No Sí No
de las capacidades de detección y respuesta de puntos de conexión (EDR)
posteriores a la infracción.
Evidencias Recogidas: Observaciones:
Sí No
Otras Resolver alertas automáticamente
Aplica: Cumple:
Sí No Sí No
Centro Criptológico Nacional
103

| Otras | Investigación automatizada |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | Se han habilitado las capacidades de automatización para investigación y <br> respuesta. | Aplica: <br> Sí No | Cumple: <br> Sí No |  |  |  |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |  |  |  |
| Otras | Habilitar EDR en modo bloqueo |  |  |  |  |  |
|  | Se ha activado para aprovechar las capacidades de contención <br> bloqueando los comportamientos o artefactos maliciosos observados a través <br> de las capacidades de detección y respuesta de puntos de conexión (EDR) <br> posteriores a la infracción. | Aplica: <br> Sí No | Cumple: <br> Sí No |  |  |  |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |  |  |  |
| Otras | Resolver alertas automáticamente |  |  |  |  |  |
|  |  | Aplica: <br> Sí No | Cumple: <br> Sí No |  |  |  |
|  |  |  |  | Sí |  | No |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


![Imagen 1 - Página 103](CCN-STIC 885E_assets\pagina103_img1.png)

![Imagen 2 - Página 103](CCN-STIC 885E_assets\pagina103_img2.png)

![Imagen 3 - Página 103](CCN-STIC 885E_assets\pagina103_img3.png)

![Imagen 4 - Página 103](CCN-STIC 885E_assets\pagina103_img4.png)

---

<!-- Página 104 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Se ha activado la resolución automática de alertas. Es recomendable
resolver una alerta si la investigación automatizada no encuentra amenazas o
ha solucionado con éxito todos los artefactos maliciosos.
Evidencias Recogidas: Observaciones:
Sí No
Otras Mostrar detalles de usuario
Se ha habilitado el mostrar los detalles del usuario: imagen, nombre, Aplica: Cumple:
cargo, departamento, almacenados en Entra ID.
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Otras Integración con Microsoft Defender for Identity
Se ha activado la integración con Microsoft Defender for Identity. Aplica: Cumple:
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Centro Criptológico Nacional
104

|  | Se ha activado la resolución automática de alertas. Es recomendable <br> resolver una alerta si la investigación automatizada no encuentra amenazas o <br> ha solucionado con éxito todos los artefactos maliciosos. |  |  |
| --- | --- | --- | --- |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| Otras | Mostrar detalles de usuario |  |  |
|  | Se ha habilitado el mostrar los detalles del usuario: imagen, nombre, <br> cargo, departamento, almacenados en Entra ID. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| Otras | Integración con Microsoft Defender for Identity |  |  |
|  | Se ha activado la integración con Microsoft Defender for Identity. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


![Imagen 1 - Página 104](CCN-STIC 885E_assets\pagina104_img1.png)

![Imagen 2 - Página 104](CCN-STIC 885E_assets\pagina104_img2.png)

![Imagen 3 - Página 104](CCN-STIC 885E_assets\pagina104_img3.png)

![Imagen 4 - Página 104](CCN-STIC 885E_assets\pagina104_img4.png)

---

<!-- Página 105 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Otras Conexión de Microsoft Threat Intelligence (Inteligencia de amenzas)
Se ha habilitado la conexíon de Microsoft Threat Intelligence (Inteligencia Aplica: Cumple:
de amenzas).
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Otras Integración Cloud App
Se ha habilitado la integración Cloud App. Aplica: Cumple:
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Otras Conexión de Microsoft Intune
Se ha habilitado la conexión a Microsoft Intune para permitir compartir la
Aplica: Cumple:
información del dispositivo y mejorar la aplicación de políticas.
Sí No Sí No
Centro Criptológico Nacional
105

| Otras | Conexión de Microsoft Threat Intelligence (Inteligencia de amenzas) |  |  |
| --- | --- | --- | --- |
|  | Se ha habilitado la conexíon de Microsoft Threat Intelligence (Inteligencia <br> de amenzas). | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| Otras | Integración Cloud App |  |  |
|  | Se ha habilitado la integración Cloud App. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| Otras | Conexión de Microsoft Intune |  |  |
|  | Se ha habilitado la conexión a Microsoft Intune para permitir compartir la <br> información del dispositivo y mejorar la aplicación de políticas. | Aplica: <br> Sí No | Cumple: <br> Sí No |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


![Imagen 1 - Página 105](CCN-STIC 885E_assets\pagina105_img1.png)

![Imagen 2 - Página 105](CCN-STIC 885E_assets\pagina105_img2.png)

![Imagen 3 - Página 105](CCN-STIC 885E_assets\pagina105_img3.png)

![Imagen 4 - Página 105](CCN-STIC 885E_assets\pagina105_img4.png)

---

<!-- Página 106 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Evidencias Recogidas: Observaciones:
Sí No
Otras Descubrimiento de dispositivos (Device Discovery)
Se ha activado para permitir que los dispositivos incorporados descubran
Aplica: Cumple:
dispositivos no administrados en la red y evalúen vulnerabilidades y riesgos.
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Otras Indicador de coincidencia de puntos de conexión (IoCs)
Se han creado indicadores de coincidencia de puntos de conexión (IoCs).
Aplica: Cumple:
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Otras Administrar automatización de cargas de archivos
Centro Criptológico Nacional
106

|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| --- | --- | --- | --- |
| Otras | Descubrimiento de dispositivos (Device Discovery) |  |  |
|  | Se ha activado para permitir que los dispositivos incorporados descubran <br> dispositivos no administrados en la red y evalúen vulnerabilidades y riesgos. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| Otras | Indicador de coincidencia de puntos de conexión (IoCs) |  |  |
|  | Se han creado indicadores de coincidencia de puntos de conexión (IoCs). | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| Otras | Administrar automatización de cargas de archivos |  |  |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


![Imagen 1 - Página 106](CCN-STIC 885E_assets\pagina106_img1.png)

![Imagen 2 - Página 106](CCN-STIC 885E_assets\pagina106_img2.png)

![Imagen 3 - Página 106](CCN-STIC 885E_assets\pagina106_img3.png)

![Imagen 4 - Página 106](CCN-STIC 885E_assets\pagina106_img4.png)

---

<!-- Página 107 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Se ha habilitado la funcionalidad de análisis de contenido para que Aplica: Cumple:
determinados archivos y datos adjuntos de correo electrónico se puedan
Sí No Sí No
cargar automáticamente en la nube para una inspección adicional en la
investigación automatizada.
Evidencias Recogidas: Observaciones:
Sí No
Otras Administrar las exclusiones de carpeta de automatización
Se han especificado exclusiones de carpetas de automatización para Aplica: Cumple:
permitir especificar carpetas que omitirá la investigación automatizada.
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Otras Administración de dispositivos
Se ha realizado una prueba de detección para comprobar que los Aplica: Cumple:
dispositivos están correctamente incorporados e informando al servicio.
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Centro Criptológico Nacional
107

|  | Se ha habilitado la funcionalidad de análisis de contenido para que <br> determinados archivos y datos adjuntos de correo electrónico se puedan <br> cargar automáticamente en la nube para una inspección adicional en la <br> investigación automatizada. | Aplica: <br> Sí No | Cumple: <br> Sí No |
| --- | --- | --- | --- |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| Otras | Administrar las exclusiones de carpeta de automatización |  |  |
|  | Se han especificado exclusiones de carpetas de automatización para <br> permitir especificar carpetas que omitirá la investigación automatizada. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| Otras | Administración de dispositivos |  |  |
|  | Se ha realizado una prueba de detección para comprobar que los <br> dispositivos están correctamente incorporados e informando al servicio. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


![Imagen 1 - Página 107](CCN-STIC 885E_assets\pagina107_img1.png)

![Imagen 2 - Página 107](CCN-STIC 885E_assets\pagina107_img2.png)

![Imagen 3 - Página 107](CCN-STIC 885E_assets\pagina107_img3.png)

![Imagen 4 - Página 107](CCN-STIC 885E_assets\pagina107_img4.png)

---

<!-- Página 108 de 109 -->

CCN-ST C 885E Guía de configuración segura para Microsoft Defender for Endpoint
Otras Configurar zona horaria
Se ha establecido una correcta configuración de la zona horaria Aplica: Cumple:
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Otras Trabajo de evaluación de la red
Se han añadido un trabajo de evaluación de la red para ejecutar análisis Aplica: Cumple:
en dispositivos de red no administrados.
Sí No Sí No
Evidencias Recogidas: Observaciones:
Sí No
Centro Criptológico Nacional
108

| Otras | Configurar zona horaria |  |  |
| --- | --- | --- | --- |
|  | Se ha establecido una correcta configuración de la zona horaria | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |
| Otras | Trabajo de evaluación de la red |  |  |
|  | Se han añadido un trabajo de evaluación de la red para ejecutar análisis <br> en dispositivos de red no administrados. | Aplica: <br> Sí No | Cumple: <br> Sí No |
|  |  | Evidencias Recogidas: <br> Sí No | Observaciones: |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


| Sí |  | No |
| --- | --- | --- |


![Imagen 1 - Página 108](CCN-STIC 885E_assets\pagina108_img1.png)

![Imagen 2 - Página 108](CCN-STIC 885E_assets\pagina108_img2.png)

![Imagen 3 - Página 108](CCN-STIC 885E_assets\pagina108_img3.png)

![Imagen 4 - Página 108](CCN-STIC 885E_assets\pagina108_img4.png)

---

<!-- Página 109 de 109 -->

CCN-STIC 885E Guía de configuración segura para Microsoft Defender for Endpoint
Centro Crip tológico Nacional 109

![Imagen 1 - Página 109](CCN-STIC 885E_assets\pagina109_img1.png)

![Imagen 2 - Página 109](CCN-STIC 885E_assets\pagina109_img2.png)

![Imagen 3 - Página 109](CCN-STIC 885E_assets\pagina109_img3.png)

![Imagen 4 - Página 109](CCN-STIC 885E_assets\pagina109_img4.png)

![Imagen 5 - Página 109](CCN-STIC 885E_assets\pagina109_img5.png)

![Imagen 6 - Página 109](CCN-STIC 885E_assets\pagina109_img6.png)

![Imagen 7 - Página 109](CCN-STIC 885E_assets\pagina109_img7.png)