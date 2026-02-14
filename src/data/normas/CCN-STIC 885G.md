---
**Author:** CCN
**CreationDate:** D:20240723131022+02'00'
**ModDate:** D:20240723131022+02'00'
---

<!-- Página 1 de 89 -->

Guía de Seguridad de las TIC
CCN-STIC 885G
Guía de configuración segura para Microsoft Defender para
Office 365
JUNIO 2024

![Imagen 1 - Página 1](CCN-STIC 885G_assets\pagina1_img1.png)

![Imagen 2 - Página 1](CCN-STIC 885G_assets\pagina1_img2.jpeg)

![Imagen 3 - Página 1](CCN-STIC 885G_assets\pagina1_img3.jpeg)

---

<!-- Página 2 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
s
e
.
Catálogo de Publicaciones de la Administración General del Estado
b
https://cpage.mpr.gob.es
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
Pº de la Castellana 109, 28046 Madrid
© Centro Criptológico Nacional, 2024
NIPO: 083-24-252-8
Fecha de Edición: junio de 2024
LIMITACIÓN DE RESPONSABILIDAD
El presente documento se proporciona de acuerdo con los términos en él recogidos, rechazando
expresamente cualquier tipo de garantía implícita que se pueda encontrar relacionada. En ningún caso,
el Centro Criptológico Nacional puede ser considerado responsable del daño directo, indirecto, fortuito
o extraordinario derivado de la utilización de la información y software que se indican incluso cuando se
advierta de tal posibilidad.
AVISO LEGAL
Quedan rigurosamente prohibidas, sin la autorización escrita del Centro Criptológico Nacional, bajo las
sanciones establecidas en las leyes, la reproducción parcial o total de este documento por cualquier
medio o procedimiento, comprendidos la reprografía y el tratamiento informático, y la distribución de
ejemplares del mismo mediante alquiler o préstamo públicos.
Centro Criptológico Nacional
2

![Imagen 1 - Página 2](CCN-STIC 885G_assets\pagina2_img1.png)

![Imagen 2 - Página 2](CCN-STIC 885G_assets\pagina2_img2.png)

![Imagen 3 - Página 2](CCN-STIC 885G_assets\pagina2_img3.png)

![Imagen 4 - Página 2](CCN-STIC 885G_assets\pagina2_img4.png)

![Imagen 5 - Página 2](CCN-STIC 885G_assets\pagina2_img5.png)

![Imagen 6 - Página 2](CCN-STIC 885G_assets\pagina2_img6.jpeg)

![Imagen 7 - Página 2](CCN-STIC 885G_assets\pagina2_img7.png)

![Imagen 8 - Página 2](CCN-STIC 885G_assets\pagina2_img8.png)

---

<!-- Página 3 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
ÍNDICE
1. MICROSOFT DEFENDER PARA OFFICE 365 ............................................................. 4
1.1 DESCRIPCIÓN DEL USO DE ESTA GUÍA ..................................................................... 4
1.2 DEFINICIÓN DE LA SOLUCIÓN .................................................................................. 4
1.2.1 DIRECTIVAS DE PROTECCIÓN CONTRA AMENAZAS ............................................ 4
1.2.2 INFORMES ........................................................................................................... 5
1.2.3 INVESTIGACIÓN Y RESPUESTA DE AMENAZAS .................................................... 5
1.3 PROTECCIÓN DEL PUESTO DE TRABAJO .................................................................. 6
1.3.1 INTEGRACIÓN CON MICROSOFT DEFENDER XDR ............................................... 8
1.3.2 INTEGRACIÓN CON MICROSOFT SENTINEL ......................................................... 9
1.4 FUNCIONALIDADES DEL PORTAL .............................................................................. 9
1.4.1 INVESTIGAR INCIDENTES Y RESPONDER A AMENAZAS ..................................... 10
1.4.2 BUSCAR AMENAZAS DE MANERA PROACTIVA.................................................. 11
1.4.3 REALIZAR UN SEGUIMIENTO Y RESPONDER A LAS AMENAZAS EMERGENTES . 11
1.4.4 SUPERVISAR LAS ACCIONES Y EL ESTADO DE INVESTIGACIÓN ......................... 13
1.4.5 PROTEGER OFFICE 365 ...................................................................................... 14
1.5 FASES DE PROTECCIÓN DE MICROSOFT DEFENDER PARA OFFICE 365 ................. 16
FASE 1: PROTECCIÓN PERIMETRAL .............................................................................. 16
FASE 2: INTELIGENCIA DE REMITENTE ......................................................................... 17
FASE 3: FILTRADO DE CONTENIDO .............................................................................. 18
FASE 4: PROTECCIÓN POSTERIOR A LA ENTREGA ....................................................... 20
1.6 PLANIFICACIÓN DE LA SEGURIDAD ........................................................................ 21
1.7 LICENCIAMIENTO Y PLANES ................................................................................... 21
2. CONFIGURACIÓN SEGURA PARA MICROSOFT DEFENDER PARA OFFICE 365......... 24
2.1 MARCO OPERACIONAL ........................................................................................... 24
2.1.1 CONTROL DE ACCESO ........................................................................................ 24
2.1.2 EXPLOTACIÓN .................................................................................................... 33
2.1.3 MONITORIZACIÓN DEL SISTEMA ....................................................................... 64
2.2 MEDIDAS DE PROTECCIÓN ..................................................................................... 66
2.2.1 PROTECCIÓN DE LA INFORMACIÓN .................................................................. 66
2.2.2 PROTECCIÓN DE LOS SERVICIOS ....................................................................... 69
3. OTRAS CONSIDERACIONES DE SEGURIDAD ......................................................... 69
3.1 ENTRENAMIENTO DE SIMULACIÓN DE ATAQUE ................................................... 69
3.1.1 CREAR UNA SIMULACIÓN DE ATAQUE .............................................................. 71
3.1.2 USUARIO AFECTADO POR LA SIMULACIÓN ....................................................... 77
3.1.3 ENTRENAMIENTO PARA EL USUARIO AFECTADO POR LA SIMULACIÓN .......... 79
3.1.4 ANÁLISIS DE LA CAMPAÑA ................................................................................ 80
4. GLOSARIO Y ABREVIATURAS .............................................................................. 82
5. CUADRO RESUMEN DE MEDIDAS DE SEGURIDAD ............................................... 85
Centro Criptológico Nacional
3

![Imagen 1 - Página 3](CCN-STIC 885G_assets\pagina3_img1.png)

![Imagen 2 - Página 3](CCN-STIC 885G_assets\pagina3_img2.png)

![Imagen 3 - Página 3](CCN-STIC 885G_assets\pagina3_img3.png)

![Imagen 4 - Página 3](CCN-STIC 885G_assets\pagina3_img4.png)

![Imagen 5 - Página 3](CCN-STIC 885G_assets\pagina3_img5.png)

---

<!-- Página 4 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
1. MICROSOFT DEFENDER PARA OFFICE 365
1.1 DESCRIPCIÓN DEL USO DE ESTA GUÍA
El objetivo de la presente guía es indicar los pasos a seguir para la configuración
segura y despliegue de Microsoft Defender para Office 365 cumpliendo con los
requisitos Esquema Nacional de Seguridad.
1.2 DEFINICIÓN DE LA SOLUCIÓN
Microsoft Defender para Office 365 forma parte de la suite de seguridad integrada
Microsoft Defender XDR (anteriormente Microsoft 365 Defender).
Microsoft Defender para Office 365 protege la organización contra las amenazas
malintencionadas que suponen los mensajes de correo electrónico, los vínculos
(URL) y las herramientas de colaboración. También proporciona
funcionalidades de investigación, búsqueda y corrección para identificar,
priorizar, investigar y responder amenazas de forme eficaz.
Microsoft Defender para Office 365 ofrece:
• Directivas de protección contra amenazas: definir directivas de protección
contra amenazas para establecer el nivel de protección adecuado para la
organización.
• Informes: ver informes en tiempo real para supervisar el rendimiento de
Microsoft Defender XDR para Office 365 en la organización.
• Investigación y respuesta de amenazas: usar las herramientas más avanzadas
para investigar, entender, simular y evitar las amenazas.
• Investigación automatizada y funcionalidades de respuesta: ahorrar tiempo y
esfuerzo al investigar y mitigar las amenazas.
1.2.1 DIRECTIVAS DE PROTECCIÓN CONTRA AMENAZAS
Las directivas definidas por la organización determinan el comportamiento y el nivel
de protección para las amenazas predefinidas. Las opciones de directivas son muy
flexibles. Por ejemplo, el equipo de seguridad de la organización puede establecer
protección contra amenazas específica para el nivel de usuario, organización,
destinatario y dominio.
• Archivos adjuntos seguros: proporciona protección de día cero para proteger
los sistemas de mensajería, comprobando si los archivos adjuntos del correo
electrónico contienen contenido malicioso. Dirige todos los mensajes y datos
adjuntos que no tienen una firma de virus o malware a un entorno especial y, a
continuación, utiliza técnicas de aprendizaje automático y análisis para detectar
fines malintencionados. Si no se encuentra ninguna actividad sospechosa, el
mensaje se reenvía al buzón.
Centro Criptológico Nacional
4

![Imagen 1 - Página 4](CCN-STIC 885G_assets\pagina4_img1.png)

![Imagen 2 - Página 4](CCN-STIC 885G_assets\pagina4_img2.png)

![Imagen 3 - Página 4](CCN-STIC 885G_assets\pagina4_img3.png)

![Imagen 4 - Página 4](CCN-STIC 885G_assets\pagina4_img4.png)

![Imagen 5 - Página 4](CCN-STIC 885G_assets\pagina4_img5.png)

---

<!-- Página 5 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
• Vínculos seguros: proporciona verificación del tiempo de clic de las URL, por
ejemplo, en mensajes de correo electrónico y archivos de Office. La protección
es continua y se aplica en las aplicaciones de Microsoft 365 tanto en Windows
como en Mac. Con cada clic los vínculos maliciosos se bloquean de forma
dinámica mientras que los vínculos seguros seguirán siendo accesibles.
• Documentos seguros: permite examinar documentos de Office abiertos en una
vista protegida o también denominada protección de aplicaciones para Office.
Protege contra malware y virus desconocidos, proporcionando protección cero
tanto en aplicaciones de Microsoft Office 365 como en versiones Office
2004(12730.x) o superior
• Protección para SharePoint, OneDrive y Microsoft Teams: protege la
organización de Microsoft Office 365 cuando los usuarios colaboran y
comparten archivos, identificando y bloqueando archivos maliciosos en sitios
de equipo y bibliotecas de documentos.
• Directivas de protección contra phishing en Microsoft Defender para Office
365: detecta los intentos de suplantar la identidad de sus usuarios y dominios
internos o personalizados. Aplica modelos de aprendizaje automático y
algoritmos avanzados de detección de suplantación para evitar ataques de
suplantación de identidad.
1.2.2 INFORMES
Los informes se actualizan en tiempo real y proporcionan los detalles más recientes.
Estos informes también proporcionan recomendaciones y avisan de amenazas
inminentes, permitiendo centrarse en los problemas de alta prioridad.
Los informes predefinidos incluyen:
- Informe de eliminación de mensajes de datos adjuntos seguros
- Informe de estado de protección contra amenazas
- Informe de protección e URL.
Se puede acceder a los informes en el portal de Microsoft Defender XDR
https://security.microsoft.com en Informes > Correo electrónico y colaboración >
Informes de correo electrónico y colaboración o directamente en
https://security.microsoft.com/emailandcollabreport.
1.2.3 INVESTIGACIÓN Y RESPUESTA DE AMENAZAS
El Plan 2 de Microsoft Defender para Office 365 incluye las mejores herramientas de
investigación y respuesta de amenazas. Con ellas, el equipo de seguridad de la
organización puede anticiparse a ataques malintencionados, entenderlos y evitarlos.
• Los incidentes proporcionan información sobre los problemas de
ciberseguridad existentes. Por ejemplo, puede verse información sobre el
malware más reciente, realizar un seguimiento y ejecutar correcciones.
Centro Criptológico Nacional
5

![Imagen 1 - Página 5](CCN-STIC 885G_assets\pagina5_img1.png)

![Imagen 2 - Página 5](CCN-STIC 885G_assets\pagina5_img2.png)

![Imagen 3 - Página 5](CCN-STIC 885G_assets\pagina5_img3.png)

![Imagen 4 - Página 5](CCN-STIC 885G_assets\pagina5_img4.png)

![Imagen 5 - Página 5](CCN-STIC 885G_assets\pagina5_img5.png)

---

<!-- Página 6 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
• Explorador de amenazas (o detecciones en tiempo real) es un informe en
tiempo real que permite identificar y analizar amenazas recientes. Se puede
configurar el Explorador para mostrar los datos de períodos personalizados.
Siendo el punto de partida de cualquier analista de seguridad
• El aprendizaje del simulador de ataques permite ejecutar escenarios de ataque
realistas en la organización para identificar vulnerabilidades. Están disponibles
simulaciones de diferentes tipos: cosecha de credenciales, datos adjuntos de
malware, vínculos a malware, etc.
• Investigación y respuesta de amenazas proporcionan funcionalidades
automatizadas de investigación y respuesta para ahorrar tiempo y esfuerzo
para correlacionar amenazas de usuarios en riesgo, datos y dispositivos. Se
desencadenan cuando se producen ciertas alertas o cuando el equipo de
operaciones de seguridad las inicia.
1.3 PROTECCIÓN DEL PUESTO DE TRABAJO
Microsoft Defender XDR (anteriormente Microsoft 365 Defender), es un conjunto
de defensa empresarial unificado previo y posterior a la vulneración.
Este sistema coordina de forma nativa la detección, prevención, investigación y
respuesta entre puntos de conexión, identidades, correo electrónico y aplicaciones
para proporcionar protección integrada contra ataques sofisticados.
Con la solución Microsoft Defender XDR integrada, los profesionales de seguridad
pueden unir las señales de amenaza que cada uno de estos productos recibe y
determinar el alcance completo y el impacto de la amenaza; cómo entró en el entorno,
lo que está afectado y cómo está afectando actualmente a la organización. Microsoft
Defender XDR realiza acciones automáticas para evitar o detener el ataque y auto
sanar los buzones, workloads, puntos de conexión e identidades de usuario afectados.
El conjunto de servicios de Microsoft Defender XDR protege:
• Puntos de Conexión con Microsoft Defender for Endpoint: Microsoft Defender
for Endpoint es una plataforma de extremo unificada para la protección
preventiva, la detección posterior a la infracción, la investigación automatizada
y la respuesta.
• Correo electrónico y colaboración con Microsoft Defender para Office 365:
protege la organización contra las amenazas malintencionadas que suponen los
mensajes de correo electrónico, los vínculos (URL) y las herramientas de
colaboración.
• Identidades con Microsoft Defender for Identity y Protección de Microsoft Entra
ID: Microsoft Defender for Identity es una solución de seguridad basada en la
nube que aprovecha las señales del Active Directory local, para identificar,
detectar e investigar amenazas avanzadas, identidades en peligro y acciones
internas malintencionadas dirigidas a su organización. Protección de Microsoft
Entra ID ayuda a las organizaciones a detectar, investigar y corregir los riesgos
relacionados con las identidades, que pueden ser utilizados posteriormente en
herramientas como Acceso condicional para tomar decisiones de acceso o
Centro Criptológico Nacional
6

![Imagen 1 - Página 6](CCN-STIC 885G_assets\pagina6_img1.png)

![Imagen 2 - Página 6](CCN-STIC 885G_assets\pagina6_img2.png)

![Imagen 3 - Página 6](CCN-STIC 885G_assets\pagina6_img3.png)

![Imagen 4 - Página 6](CCN-STIC 885G_assets\pagina6_img4.png)

![Imagen 5 - Página 6](CCN-STIC 885G_assets\pagina6_img5.png)

---

<!-- Página 7 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
alimentar una herramienta de administración de eventos e información de
seguridad (SIEM) para realizar una investigación más detallada.
• Aplicaciones con seguridad de Microsoft Cloud App: la seguridad de Microsoft
Cloud App es una solución completa entre SaaS que ofrece una visibilidad
profunda, controles de datos sólidos y una protección contra amenazas
mejorada para las aplicaciones en la nube.
• Administración de vulnerabilidades ofrece visibilidad continua de los recursos,
evaluaciones inteligentes basadas en riesgos y herramientas de corrección
integradas para ayudar a los equipos de TI y seguridad a priorizar y abordar
vulnerabilidades críticas y configuraciones incorrectas en toda la organización.
Microsoft Sentinel como SIEM/SOAR, es una plataforma de administración de
eventos e información de seguridad (SIEM) nativa de la nube que utiliza IA integrada
para ayudar a analizar grandes volúmenes de datos en toda una empresa,
rápidamente. Microsoft Sentinel agrega datos de todas las fuentes, incluidos usuarios,
aplicaciones, servidores y dispositivos que se ejecutan en la infraestructura local o en
cualquier nube, lo que te permite razonar sobre millones de registros en unos
segundos, permitiendo crear construir playbooks para dar una respuesta efectiva e
inmediata.
Centro Criptológico Nacional
7

![Imagen 1 - Página 7](CCN-STIC 885G_assets\pagina7_img1.png)

![Imagen 2 - Página 7](CCN-STIC 885G_assets\pagina7_img2.png)

![Imagen 3 - Página 7](CCN-STIC 885G_assets\pagina7_img3.png)

![Imagen 4 - Página 7](CCN-STIC 885G_assets\pagina7_img4.png)

![Imagen 5 - Página 7](CCN-STIC 885G_assets\pagina7_img5.png)

---

<!-- Página 8 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
1.3.1 INTEGRACIÓN CON MICROSOFT DEFENDER XDR
La integración de Microsoft Defender para Office 365 con Microsoft Defender XDR
ayuda al equipo de operaciones de seguridad a supervisar y tomar medidas
rápidamente cuando los dispositivos de los usuarios estén en riesgo. Por ejemplo, se
podrán ver los dispositivos potencialmente afectados por un incidente en un mensaje
de correo electrónico, así como cuántas alertas recientes se generaron para esos
dispositivos en Microsoft Defender for Endpoint.
* En este ejemplo, puede verse como la integración de todas las soluciones de
Microsoft Defender XDR se correlacionan entre sí, ante varias alertas que se
integran en un único incidente. Identificando tanto las identidades y los
dispositivos ante una amenaza detectada en Microsoft Defender para Office 365.
Centro Criptológico Nacional
8

![Imagen 1 - Página 8](CCN-STIC 885G_assets\pagina8_img1.jpeg)

![Imagen 2 - Página 8](CCN-STIC 885G_assets\pagina8_img2.png)

![Imagen 3 - Página 8](CCN-STIC 885G_assets\pagina8_img3.png)

![Imagen 4 - Página 8](CCN-STIC 885G_assets\pagina8_img4.png)

![Imagen 5 - Página 8](CCN-STIC 885G_assets\pagina8_img5.png)

![Imagen 6 - Página 8](CCN-STIC 885G_assets\pagina8_img6.png)

---

<!-- Página 9 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
1.3.2 INTEGRACIÓN CON MICROSOFT SENTINEL
A través del centro de contenido (Content hub), Microsoft Sentinel genera la
integración con Microsoft Defender XDR (M365XDR) permitiendo transmitir todos los
incidentes y alertas de M365XDR a Microsoft Sentinel y manteniendo todos los
incidentes sincronizados entre ambos portales. Los incidentes de M365XDR incluyen
todas sus alertas, entidades y otra información relevante de todos los servicios que lo
componen.
* Consultar: [CCN-STIC- 884E- Guía de configuración segura para Azure Sentinel].
1.4 FUNCIONALIDADES DEL PORTAL
El acceso a las funcionalidades de Microsoft Defender para Office 365 se realiza
desde el portal mejorado de seguridad de Microsoft Defender XDR, accediendo a la
siguiente URL:https://security.microsoft.com/
Centro Criptológico Nacional
9

![Imagen 1 - Página 9](CCN-STIC 885G_assets\pagina9_img1.png)

![Imagen 2 - Página 9](CCN-STIC 885G_assets\pagina9_img2.jpeg)

![Imagen 3 - Página 9](CCN-STIC 885G_assets\pagina9_img3.png)

![Imagen 4 - Página 9](CCN-STIC 885G_assets\pagina9_img4.png)

![Imagen 5 - Página 9](CCN-STIC 885G_assets\pagina9_img5.png)

![Imagen 6 - Página 9](CCN-STIC 885G_assets\pagina9_img6.png)

![Imagen 7 - Página 9](CCN-STIC 885G_assets\pagina9_img7.png)

---

<!-- Página 10 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
El nuevo portal de Microsoft Defender XDR, reúne las funcionalidades que solían
estar en portales independientes en un solo lugar, de modo que pueda protegerse de
una manera más sencilla y centralizada de cualquier tipo de amenaza.
Desde un punto de vista genérico, en este portal puede realizarse distintas acciones
relacionadas con la defensa empresarial (detección, prevención, investigación y
respuesta entre endpoints, identidades, correo electrónico, workloads y aplicaciones) e
integrase con Microsoft Sentinel y Microsoft Defender for Cloud.
1.4.1 INVESTIGAR INCIDENTES Y RESPONDER A AMENAZAS
Las alertas están categorizadas, combinadas y correlacionadas en incidentes
completos.
• Incidentes: Muestra una lista de incidentes de seguridad, con opciones para
investigar, clasificar y resolver cada incidente.
• Alertas: Proporciona una lista detallada de alertas individuales. Se visualiza la
fuente de la alerta, la descripción y tomar acciones como la investigación
adicional o la resolución.
Centro Criptológico Nacional
10

![Imagen 1 - Página 10](CCN-STIC 885G_assets\pagina10_img1.png)

![Imagen 2 - Página 10](CCN-STIC 885G_assets\pagina10_img2.png)

![Imagen 3 - Página 10](CCN-STIC 885G_assets\pagina10_img3.png)

![Imagen 4 - Página 10](CCN-STIC 885G_assets\pagina10_img4.png)

![Imagen 5 - Página 10](CCN-STIC 885G_assets\pagina10_img5.png)

![Imagen 6 - Página 10](CCN-STIC 885G_assets\pagina10_img6.png)

---

<!-- Página 11 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
1.4.2 BUSCAR AMENAZAS DE MANERA PROACTIVA
Mediante la creación de consultas avanzadas se permite buscar amenazas en
correos electrónicos y elementos de colaboración.
• Busqueda avanzada: herramienta que permite crear consultas personalizadas
utilizando un lenguaje de consulta avanzado para buscar indicadores de
compromiso (IOC) y actividades sospechosas en los datos recopilados por la
plataforma.
1.4.3 REALIZAR UN SEGUIMIENTO Y RESPONDER A LAS AMENAZAS
EMERGENTES
Microsoft Defender Threat Intelligence (Defender TI) permite acceder a la
información sobre amenazas desde el portal de Microsoft Defender.
Microsoft Defender TI ayuda a agilizar el triaje de los analistas de seguridad, la
respuesta a incidentes, la caza de amenazas y los flujos de trabajo de gestión de
vulnerabilidades. Defender TI agrega y enriquece la información crítica sobre
amenazas en una interfaz fácil de usar.
Este cambio introduce un nuevo menú de navegación dentro del portal de
Microsoft Defender denominado Inteligencia de amenazas.
Centro Criptológico Nacional
11

![Imagen 1 - Página 11](CCN-STIC 885G_assets\pagina11_img1.png)

![Imagen 2 - Página 11](CCN-STIC 885G_assets\pagina11_img2.png)

![Imagen 3 - Página 11](CCN-STIC 885G_assets\pagina11_img3.png)

![Imagen 4 - Página 11](CCN-STIC 885G_assets\pagina11_img4.png)

![Imagen 5 - Página 11](CCN-STIC 885G_assets\pagina11_img5.png)

![Imagen 6 - Página 11](CCN-STIC 885G_assets\pagina11_img6.png)

---

<!-- Página 12 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
En el menú de Inteligencia de amenazas existe la función Análisis de amenazas que
está diseñado para ayudar a los equipos de seguridad a ser más eficientes y dos nuevas
funcionalidades:
• Perfiles Intel: una nueva característica que facilita información sobre contenido
de actores de amenazas, sus herramientas y vulnerabilidades conocidas.
• Explorador de Intel: proporciona la experiencia existente de búsqueda e
investigación de contenidos de TI de Defender.
Centro Criptológico Nacional
12

![Imagen 1 - Página 12](CCN-STIC 885G_assets\pagina12_img1.png)

![Imagen 2 - Página 12](CCN-STIC 885G_assets\pagina12_img2.png)

![Imagen 3 - Página 12](CCN-STIC 885G_assets\pagina12_img3.png)

![Imagen 4 - Página 12](CCN-STIC 885G_assets\pagina12_img4.png)

![Imagen 5 - Página 12](CCN-STIC 885G_assets\pagina12_img5.png)

![Imagen 6 - Página 12](CCN-STIC 885G_assets\pagina12_img6.png)

---

<!-- Página 13 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
1.4.4 SUPERVISAR LAS ACCIONES Y EL ESTADO DE INVESTIGACIÓN
Está enfocado en la gestión de acciones de seguridad y la administración de
archivos o elementos sospechosos que han sido enviados para su análisis. Aquí se
describen las principales funciones y submenús que típicamente se encuentran en esta
sección:
• Actions(Acciones): esta sección se encarga de gestionar las acciones
recomendadas y las tareas de respuesta a incidentes de seguridad. Incluye:
o Pending Actions (Acciones Pendientes): muestra una lista de todas las
acciones de seguridad recomendadas que aún no se han completado.
Estas acciones pueden incluir tareas como aislar un dispositivo, ejecutar
un análisis completo, aplicar parches de seguridad, o eliminar software
malicioso. Cada acción pendiente suele incluir detalles como el tipo de
amenaza, el dispositivo afectado, y la urgencia de la acción
recomendada.
o Completed Actions (Acciones Completadas): registra todas las acciones
que han sido llevadas a cabo en respuesta a alertas o recomendaciones.
Esto permite a los administradores de seguridad revisar qué medidas se
han tomado y verificar que las respuestas adecuadas se han
implementado correctamente.
• Submissions(envios): permite a los usuarios enviar archivos sospechosos o
URLs para un análisis más profundo por parte de Microsoft. Esta función es
Centro Criptológico Nacional
13

![Imagen 1 - Página 13](CCN-STIC 885G_assets\pagina13_img1.png)

![Imagen 2 - Página 13](CCN-STIC 885G_assets\pagina13_img2.png)

![Imagen 3 - Página 13](CCN-STIC 885G_assets\pagina13_img3.png)

![Imagen 4 - Página 13](CCN-STIC 885G_assets\pagina13_img4.png)

![Imagen 5 - Página 13](CCN-STIC 885G_assets\pagina13_img5.png)

![Imagen 6 - Página 13](CCN-STIC 885G_assets\pagina13_img6.png)

---

<!-- Página 14 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
crucial para gestionar posibles falsos positivos y obtener una comprensión más
clara de las amenazas detectadas.
o File Submissions (Envío de Archivos): los usuarios envían archivos
sospechosos directamente a Microsoft para su análisis detallado. Esto
puede ser útil cuando hay dudas sobre si un archivo es realmente
malicioso o no. Microsoft proporciona un análisis detallado y una
respuesta sobre la naturaleza del archivo enviado.
o URL Submissions (Envío de URLs): similar a los envíos de archivos, esta
función permite enviar URLs sospechosas para su análisis. Esto ayuda a
identificar si una URL conduce a un sitio web malicioso o a un posible
ataque de phishing.
o Submission History (Historial de Envíos): proporciona un registro de
todos los archivos y URLs que se han enviado para análisis, junto con el
estado y los resultados de esos análisis. Esto ayuda a los equipos de
seguridad a mantener un seguimiento de lo que se ha revisado y las
conclusiones obtenidas
1.4.5 PROTEGER OFFICE 365
Ofrece herramientas y recursos para gestionar la seguridad del correo electrónico y
la colaboración. Los administradores pueden investigar incidentes, explorar datos,
revisar alertas e incidentes, y gestionar políticas y reglas de seguridad.
• Investigations (Investigaciones): proporciona detalles sobre incidentes
detectados, permite analizar la cadena de eventos, identificar usuarios
afectados, y documentar las acciones de respuesta tomadas.
Centro Criptológico Nacional
14

![Imagen 1 - Página 14](CCN-STIC 885G_assets\pagina14_img1.png)

![Imagen 2 - Página 14](CCN-STIC 885G_assets\pagina14_img2.png)

![Imagen 3 - Página 14](CCN-STIC 885G_assets\pagina14_img3.png)

![Imagen 4 - Página 14](CCN-STIC 885G_assets\pagina14_img4.png)

![Imagen 5 - Página 14](CCN-STIC 885G_assets\pagina14_img5.png)

![Imagen 6 - Página 14](CCN-STIC 885G_assets\pagina14_img6.png)

---

<!-- Página 15 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
• Explorer (Explorador): busca y visualiza eventos de seguridad relacionados con
correos electrónicos y colaboración, filtrar por diferentes criterios y obtener
detalles específicos sobre amenazas detectadas.
• Review (Revisión): lugar centralizado para revisar correos electrónicos y
actividades de colaboración marcadas como sospechosas, facilitando la
evaluación y toma de decisiones sobre las acciones a seguir.
• Campaigns (Campañas): detalla las campañas de phishing, malware y otras
amenazas dirigidas a la organización, incluyendo objetivos, métodos de ataque
y alcance de la campaña.
• Threat Tracker (Rastreador de Amenazas): proporciona actualizaciones y
seguimientos sobre amenazas activas, permitiendo a los equipos de seguridad
mantenerse informados sobre las amenazas emergentes y en curso.
• Exchange Message Trace (Rastreo de Mensajes de Exchange): rastrea el flujo
de correos electrónicos dentro de la organización, desde el remitente hasta el
destinatario, identificando posibles problemas de entrega y actividades
sospechosas.
• Attack Simulation Training (Entrenamiento de Simulación de Ataques): crea y
ejecuta simulaciones de ataques de phishing y otros vectores de amenazas para
entrenar a los empleados y mejorar la conciencia de seguridad dentro de la
organización.
• Policies & Rules (Políticas y Reglas): permite definir, aplicar y gestionar
políticas de seguridad específicas para correo electrónico y plataformas de
colaboración, estableciendo reglas para detectar y responder a amenazas.
Centro Criptológico Nacional
15

![Imagen 1 - Página 15](CCN-STIC 885G_assets\pagina15_img1.png)

![Imagen 2 - Página 15](CCN-STIC 885G_assets\pagina15_img2.png)

![Imagen 3 - Página 15](CCN-STIC 885G_assets\pagina15_img3.png)

![Imagen 4 - Página 15](CCN-STIC 885G_assets\pagina15_img4.png)

![Imagen 5 - Página 15](CCN-STIC 885G_assets\pagina15_img5.png)

---

<!-- Página 16 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
1.5 FASES DE PROTECCIÓN DE MICROSOFT DEFENDER PARA OFFICE 365
En esta sección se verá como la pila de protección de Microsoft Defender para
Office 365, puede proteger la organización frente amenazas de seguridad. Esta pila de
protección puede dividirse en 4 fases. En general, el correo entrante pasa a través de
todas estas fases antes de la entrega.
* Esta información que a continuación se describe es útil para entender la
configuración de las medidas de seguridad reflejadas en el apartado [3.1.2.1
Protección frente a código dañino].
* En las siguientes secciones se explican los distintos componentes con su
terminología en inglés para no perder la referencia de los tecnicismos utilizados en
la documentación de Microsoft.
FASE 1: PROTECCIÓN PERIMETRAL
Desafortunadamente, los bloques perimetrales que antes eran cruciales ahora son
relativamente sencillos de superar. Con el tiempo, se bloquea menos tráfico aquí, pero
sigue siendo una parte importante de la pila de protección.
Los bloques perimetrales están diseñados para ser automáticos. En el caso de falso
positivo, se notificará a los remitentes y se les indicará cómo solucionar su problema.
• Network throttling. La limitación de red protege la infraestructura de Office
365 infraestructura y clientes de ataques por denegación de servicio (DOS)
Centro Criptológico Nacional
16

![Imagen 1 - Página 16](CCN-STIC 885G_assets\pagina16_img1.png)

![Imagen 2 - Página 16](CCN-STIC 885G_assets\pagina16_img2.png)

![Imagen 3 - Página 16](CCN-STIC 885G_assets\pagina16_img3.png)

![Imagen 4 - Página 16](CCN-STIC 885G_assets\pagina16_img4.png)

![Imagen 5 - Página 16](CCN-STIC 885G_assets\pagina16_img5.png)

![Imagen 6 - Página 16](CCN-STIC 885G_assets\pagina16_img6.png)

![Imagen 7 - Página 16](CCN-STIC 885G_assets\pagina16_img7.png)

---

<!-- Página 17 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
limitando el número de mensajes que puede enviar un conjunto específico de
infraestructura.
• IP reputation and throttling. La reputación y la limitación de IP bloquearán los
mensajes que se envían desde direcciones IP de conexión no válidas conocidas.
Si una dirección IP específica envía muchos mensajes en un breve período de
tiempo, se limitarán.
• Domain reputation. La reputación del dominio bloqueará los mensajes que se
envíen desde un dominio sospechoso.
• Directory-based edge filtering. El filtro perimetral basado en directorios
bloquea los intentos de recopilar información de directorio de una organización
a través de SMTP.
• Backscatter detection. Detección de devolución impide que una organización
sea atacada a través de informes de “no entregados” (NDR) no válidos.
• Enhanced filtering for connectors. El filtrado mejorado para conectores
conserva la información de autenticación incluso cuando el tráfico pasa a través
de otro dispositivo antes de que llegue a Office 365. Esto mejora la precisión de
la pila de filtrado, incluso en escenarios de enrutamiento complejos o híbridos.
FASE 2: INTELIGENCIA DE REMITENTE
Las características de la inteligencia de remitente son fundamentales para capturar
mensajes de correo no deseado, masivos, y de suplantación. La mayoría de estas
características se pueden configurar individualmente.
• Account compromise detection. Los disparadores y alertas de detección de
cuentas comprometidas se desencadenan cuando una cuenta tiene un
comportamiento anómalo que puede llevar a una situación de riesgo. En
algunos casos, la cuenta de usuario se bloquea e impide enviar más mensajes
de correo electrónico hasta que el equipo de operaciones de seguridad de la
organización resuelva el problema.
• Email Authentication. La autenticación de correo electrónico involucra
métodos configurados en el cliente y métodos configurados en la nube,
destinados a garantizar que los remitentes sean remitentes autorizados y
auténticos. Estos métodos resisten la suplantación.
o SPF puede rechazar correos basados en registros TXT DNS que listan
direcciones IP y servidores permitidos para enviar correo en nombre de
la organización.
o DKIM proporciona una firma cifrada que autentica al remitente.
o DMARC permite a los administradores marcar SPF y DKIM según sea
necesario en su dominio y fuerza la alineación entre los resultados de
estas dos tecnologías.
Centro Criptológico Nacional
17

![Imagen 1 - Página 17](CCN-STIC 885G_assets\pagina17_img1.png)

![Imagen 2 - Página 17](CCN-STIC 885G_assets\pagina17_img2.png)

![Imagen 3 - Página 17](CCN-STIC 885G_assets\pagina17_img3.png)

![Imagen 4 - Página 17](CCN-STIC 885G_assets\pagina17_img4.png)

![Imagen 5 - Página 17](CCN-STIC 885G_assets\pagina17_img5.png)

![Imagen 6 - Página 17](CCN-STIC 885G_assets\pagina17_img6.png)

---

<!-- Página 18 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
o ARC no está configurado por el cliente, pero se basa en DMARC para
trabajar con el reenvío en listas de correo, mientras se registra una
cadena de autenticación.
• Spoof intelligence. La inteligencia suplantación de identidad es capaz de filtrar
aquellos emails de remitentes malintencionados que imitan dominios externos
conocidos u organizaciones. Separa el correo legítimo "en nombre de" de los
remitentes que suplantan la identidad para entregar mensajes de spam o
phishing.
• Intra-org spoof intelligence. Inteligencia contra la suplantación de identidad
dentro de la organización detecta y bloquea los intentos de suplantación de
identidad de un dominio dentro de la organización.
• Cross-domain spoof intelligence. Inteligencia contra la suplantación de
identidad entre dominios detecta y bloquea los intentos de suplantación de
identidad de un dominio fuera de la organización.
• Bulk filtering. El filtrado masivo permite a los administradores configurar un
nivel de confianza masivo (BCL) que indica si el mensaje se envió desde un
remitente masivo. Los administradores pueden usar el control deslizante
masivo en la directiva contra correo no deseado para decidir qué nivel de
correo masivo tratar como correo no deseado.
• Mailbox intelligence. Inteligencia de buzones aprende del comportamiento
estándar del correo electrónico del usuario. Aprovecha el flujo de comunicación
de un usuario para detectar cuándo un remitente parece ser alguien con el que
el usuario suele comunicarse, pero en realidad es malintencionado.
• Mailbox intelligence impersonation. La suplantación de inteligencia de
buzones habilita o deshabilita los resultados de suplantación mejorados en
función del mapa de remitentes individuales de un usuario.
• User impersonation. La suplantación de usuario permite a un administrador
crear una lista de objetivos de alto valor estratégico susceptibles de ser
suplantados. Si llega un correo donde el remitente parece tener el mismo
nombre y dirección que la cuenta de valor protegida, el correo se marca o
etiqueta. (Por ejemplo, trαcye@contoso.com para tracye@contoso.com).
• Domain impersonation. La suplantación de dominio detecta dominios que son
similares al dominio del destinatario y que intentan parecer un dominio
interno. Por ejemplo, tracye@liwαre.com para tracye@litware.com.
FASE 3: FILTRADO DE CONTENIDO
En esta fase, la pila de filtrado comienza a controlar el contenido específico del
correo, incluidos sus hipervínculos y datos adjuntos.
• Transport rules. Las reglas de transporte (también conocidas como reglas de
flujo de correo o reglas de transporte Exchange) permiten que un
Centro Criptológico Nacional
18

![Imagen 1 - Página 18](CCN-STIC 885G_assets\pagina18_img1.png)

![Imagen 2 - Página 18](CCN-STIC 885G_assets\pagina18_img2.png)

![Imagen 3 - Página 18](CCN-STIC 885G_assets\pagina18_img3.png)

![Imagen 4 - Página 18](CCN-STIC 885G_assets\pagina18_img4.png)

![Imagen 5 - Página 18](CCN-STIC 885G_assets\pagina18_img5.png)

![Imagen 6 - Página 18](CCN-STIC 885G_assets\pagina18_img6.png)

---

<!-- Página 19 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
administrador lleve a cabo una amplia variedad de acciones cuando se cumple
una amplia gama de condiciones para un mensaje. Todos los mensajes que
fluyen a través de la organización se evalúan con las reglas de flujo de correo
/reglas de transporte habilitadas.
• Microsoft Defender Antivirus junto con un motor de antivirus de terceros se
usan para detectar todo el malware conocido en los datos adjuntos. Los
motores antivirus (AV engines) pueden bloquear datos adjuntos de los tipos
especificados por el administrador. Para obtener la lista de tipos de archivo
admitidos, puede consultar el siguiente enlace: https://learn.microsoft.com/es-
es/defender-office-365/anti-malware-protection-about#true-type-matching-in-
the-common-attachments-filter
• Siempre que Microsoft Defender para Office 365 detecta datos adjuntos
malintencionados, el hash del archivo y un hash de su contenido activo se
agregan a la reputación de Exchange Online Protection (EOP). El bloqueo de
reputación de datos adjuntos (attachment reputation blocking) bloqueará ese
archivo en todo Office 365, y en los puntos de conexión.
• Heuristic clustering. La agrupación heurística puede determinar que un archivo
es sospechoso en función de la heurística de entrega. Cuando se encuentra un
archivo adjunto sospechoso, toda la campaña se pausa y el archivo se aísla. Si
se encuentra que el archivo es malintencionado, se bloquea toda la campaña.
• Machine learning models. Modelo de aprendizaje automático actúa sobre el
encabezado, el contenido del cuerpo y las direcciones URL de un mensaje para
detectar intentos de suplantación de identidad.
• Microsoft utiliza la reputación de esas URL aisladas, así como la reputación de
URL de terceras fuentes en el bloqueo de reputación de direcciones URL (URL
reputation blocking), para bloquear cualquier mensaje con una dirección URL
malintencionada conocida.
• Content heuristics. Los heurísticos de contenido pueden detectar mensajes
sospechosos en función de la estructura y la frecuencia de palabras dentro del
cuerpo del mensaje, mediante modelos de aprendizaje automático.
• Safe Attachments aísla los datos adjuntos de los clientes de Microsoft
Defender para Office 365, usando análisis dinámico para detectar amenazas
nunca vistas.
• Linked content detonation. Detonación de contenido vinculado trata todas las
direcciones URL que se vinculan a un archivo de un correo electrónico como
datos adjuntos, creando de forma asincrónica un espacio aislado en el archivo
en el momento de la entrega.
• URL Detonation. La detonación de URL se produce cuando la tecnología
antiphishing detecta que un mensaje o una dirección URL son sospechosos, y
aísla las direcciones URL del mensaje en el momento de la entrega.
Centro Criptológico Nacional
19

![Imagen 1 - Página 19](CCN-STIC 885G_assets\pagina19_img1.png)

![Imagen 2 - Página 19](CCN-STIC 885G_assets\pagina19_img2.png)

![Imagen 3 - Página 19](CCN-STIC 885G_assets\pagina19_img3.png)

![Imagen 4 - Página 19](CCN-STIC 885G_assets\pagina19_img4.png)

![Imagen 5 - Página 19](CCN-STIC 885G_assets\pagina19_img5.png)

---

<!-- Página 20 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
FASE 4: PROTECCIÓN POSTERIOR A LA ENTREGA
La última fase tiene lugar después de la entrega de correo o archivo, actuando en
correos que se encuentran en distintos buzones, o archivos y vínculos que aparecen en
clientes tales como Microsoft Teams.
• Safe Links. Vínculos seguros es la protección de tiempo de hacer clic (time-of-
click) de Microsoft Defender para Office 365. Cada dirección URL de cada
mensaje se ajusta para apuntar a servidores de vínculos seguros de Microsoft
(Microsoft Safe Links servers). Cuando se hace clic en una dirección URL, se
comprueba con la reputación más reciente del destino, antes de redirigir al
usuario.
• Zero-hour auto purge (ZAP) for phishing. La purga automática de hora cero
(ZAP) para la suplantación de identidad (phishing) detecta y neutraliza de forma
retroactiva los mensajes de suplantación de identidad malintencionados que ya
se han entregado Exchange Online buzones de correo.
• ZAP for malware. ZAP para malware detecta y neutraliza de forma retroactiva
los mensajes malintencionados de malware que ya se han entregado a buzones
de Exchange Online.
• ZAP for phishing. ZAP para la suplantación de identidad (phishing) detecta y
neutraliza de forma retroactiva los mensajes de correo no deseado
malintencionados que ya se han entregado a los buzones de Exchange Online.
• Campaign Views. Las vistas de campañas permiten a los administradores ver la
imagen general de un ataque, de manera más rápida y completa de lo que
cualquier equipo podría sin automatización. Microsoft aprovecha las grandes
cantidades de datos contra suplantación de identidad (phishing), antispam y
antimalware en todo el servicio para ayudar a identificar las campañas y, a
continuación, permite a los administradores investigarlas de principio a fin,
incluidos los destinos, los impactos y los flujos.
• The Report Message add-ins. Los complementos de mensaje de informe
permiten a los usuarios notificar fácilmente falsos positivos (correo electrónico
válido marcado erróneamente como negativo) o falsos negativos (correo
electrónico erróneo marcado como bueno) a Microsoft para su análisis
posterior.
• Safe Links for Office clients. Vínculos seguros para clientes de Office ofrece de
forma nativa la misma protección de tiempo de clic que “Safe Links”, dentro de
clientes de Office como Word, PowerPoint y Excel.
• Protection for OneDrive, SharePoint, and Teams. La protección para OneDrive,
SharePoint y Teams ofrece la misma protección de datos adjuntos seguros, de
forma nativa, dentro de OneDrive, SharePoint y Microsoft Teams.
Centro Criptológico Nacional
20

![Imagen 1 - Página 20](CCN-STIC 885G_assets\pagina20_img1.png)

![Imagen 2 - Página 20](CCN-STIC 885G_assets\pagina20_img2.png)

![Imagen 3 - Página 20](CCN-STIC 885G_assets\pagina20_img3.png)

![Imagen 4 - Página 20](CCN-STIC 885G_assets\pagina20_img4.png)

![Imagen 5 - Página 20](CCN-STIC 885G_assets\pagina20_img5.png)

![Imagen 6 - Página 20](CCN-STIC 885G_assets\pagina20_img6.png)

---

<!-- Página 21 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
• Cuando una URL que apunta a un fichero se selecciona, después de la entrega,
la detonación de contenido vinculado (linked content detonation) muestra una
página de advertencia hasta que se completa el aislamiento del archivo y se
encuentra que la dirección URL es segura.
1.6 PLANIFICACIÓN DE LA SEGURIDAD
Desde el punto de vista de la planificación, pueden seguirse distintas estrategias de
seguridad, por ejemplo, utilizando las políticas por defecto y usando la protección
standard o la estricta de forma sencilla, o bien configurando de manera más
personalizada las distintas opciones de seguridad en este portal. Una manera lógica de
abordar esta segunda estrategia podría ser:
• Configurar todo con "anti" en el nombre.
o Antimalware
o Anti-phishing
o Anti-spam (protección contra correo electrónico no deseado)
• Configurar todo con "seguro" en el nombre.
o Vínculos seguros
o Archivos adjuntos seguros
• Securizar workloads (ej. SharePoint Online, OneDrive y Teams)
• Proteger con purga automática de hora cero (ZAP – zero hour auto purge).
Para obtener más información sobre dicha configuración consultar la sección [1.5
Fases de protección de Microsoft Defender para Office 365] donde se explican las
distintas fases de la pila de protección de Microsoft Defender para Office 365, y la
sección [3.1.2.1 Protección frente a código dañino] donde se configuran las opciones
más relevantes para una configuración estricta de la seguridad.
Microsoft facilita una guía de onboarding para Microsoft Defender para Office 365
en el siguiente enlace
https://admin.microsoft.com/Adminportal/Home?Q=ADG#/modernonboarding/offi
ce365advancedthreatprotectionadvisor
1.7 LICENCIAMIENTO Y PLANES
Todas las suscripciones de Microsoft 365 cuentan con funcionalidades de seguridad.
Los objetivos y acciones que puede realizar dependen del foco de las diferentes
suscripciones. En Microsoft Defender para Office 365, existen tres servicios (o
productos) de seguridad principales vinculados al tipo de suscripción:
a) Exchange Online Protection (EOP)
b) Microsoft Defender para Office 365 Plan 1
c) Microsoft Defender para Office 365 Plan 2
Microsoft Defender para Office 365 se fundamenta sobre las principales
protecciones que ofrece EOP. EOP siempre está presente en todas las suscripciones de
Microsoft Defender para Office 365.
Centro Criptológico Nacional
21

![Imagen 1 - Página 21](CCN-STIC 885G_assets\pagina21_img1.png)

![Imagen 2 - Página 21](CCN-STIC 885G_assets\pagina21_img2.png)

![Imagen 3 - Página 21](CCN-STIC 885G_assets\pagina21_img3.png)

![Imagen 4 - Página 21](CCN-STIC 885G_assets\pagina21_img4.png)

![Imagen 5 - Página 21](CCN-STIC 885G_assets\pagina21_img5.png)

---

<!-- Página 22 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Microsoft Defender para Microsoft Defender para
EOP
Office 365 Plan 1 Office 365 Plan 2
Evita ataques generales Protege al correo Agrega investigación,
conocidos basados en el electrónico y a la búsqueda y respuesta
volumen. colaboración de la después de la vulneración,
vulnerabilidad de día cero así como automatización y
contra los ataques de simulación (para el
malware y suplantación de aprendizaje).
identidad (phishing) que
ponen en peligro al correo
electrónico empresarial.
El núcleo de la seguridad de Microsoft 365 es la protección EOP. Microsoft Defender
para Office 365 Plan 1 contiene EOP. Microsoft Defender para Office 365 Plan 2
contiene Plan 1 y EOP. La estructura es acumulativa. Es por ello por lo que, al
configurar este producto, se debería empezar con EOP y continuar hasta Microsoft
Defender para Office 365.
En cuanto al licenciamiento:
• EOP se incluye con cualquier suscripción que incluya Exchange Online y como
suscripción independiente para proteger entornos de correo electrónico
locales.
• Microsoft Defender para Office 365 plan 1 se ofrece de manera independiente
a través de un complemento o con otro tipo de licenciamiento como por
ejemplo puede ser Microsoft 365 Business o Microsoft 365 Enterprise E3.
• Microsoft Defender para Office 365 plan 2, también se ofrece de manera
independiente a través de un complemento y en determinadas suscripciones
Centro Criptológico Nacional
22

| EOP |  | Microsoft Defender para |  |  | Microsoft Defender para |  |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | Office 365 Plan 1 |  |  | Office 365 Plan 2 |  |
| Evita ataques generales <br> conocidos basados en el <br> volumen. |  | Protege al correo |  | Agrega investigación, <br> búsqueda y respuesta <br> después de la vulneración, <br> así como automatización y <br> simulación (para el <br> aprendizaje). | Agrega investigación, |  |
|  |  | electrónico y a la |  |  | búsqueda y respuesta |  |
|  |  | colaboración de la |  |  | después de la vulneración, |  |
|  |  | vulnerabilidad de día cero |  |  | así como automatización y |  |
|  |  | contra los ataques de |  |  | simulación (para el |  |
|  |  | malware y suplantación de |  |  | aprendizaje). |  |
|  |  | identidad (phishing) que |  |  |  |  |
|  |  | ponen en peligro al correo |  |  |  |  |
|  |  | electrónico empresarial. |  |  |  |  |


| Evita ataques generales |
| --- |
| conocidos basados en el |
| volumen. |


![Imagen 1 - Página 22](CCN-STIC 885G_assets\pagina22_img1.png)

![Imagen 2 - Página 22](CCN-STIC 885G_assets\pagina22_img2.jpeg)

![Imagen 3 - Página 22](CCN-STIC 885G_assets\pagina22_img3.png)

![Imagen 4 - Página 22](CCN-STIC 885G_assets\pagina22_img4.png)

![Imagen 5 - Página 22](CCN-STIC 885G_assets\pagina22_img5.png)

![Imagen 6 - Página 22](CCN-STIC 885G_assets\pagina22_img6.png)

---

<!-- Página 23 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
que incorporan medidas de seguridad más avanzadas, como pueden ser
Microsoft 365 E5 o Microsoft 365 A5.
La siguiente tabla es un resumen de lo que se incluye en cada plan:
Funcionalidades segun licenciamiento
Plan 1 de Microsoft Plan 2 de Microsoft
EOP
Defender para Office 365 Defender para Office 365
Prevención y detección: Capacidades EOP Capacidades del Plan 1 de
• Protección contra --- además --- Microsoft Defender para
malware, correo no Office 365
deseado, correo Prevención y detección: --- además ---
electrónico masivo • Directivas contra Prevención y detección:
y suplantación de suplantación de • Aprendizaje de
identidad identidad con simulación de ataque
• Protección contra protección contra
correo no deseado suplantación y Investigación y respuesta:
• Filtrado de conexión umbrales avanzados • Rastreadores de
y de correo no de suplantación de amenazas
deseado identidad • Explorador de
• Directivas de • Datos adjuntos amenazas
cuarentena seguros, incluidos • AIRE
• Detección de falsos los datos adjuntos • Búsqueda proactiva
positivos seguros para de amenazas con la
SharePoint, búsqueda avanzada
• Lista de permitidos
OneDrive y en Microsoft
y bloqueados
Microsoft Teams Defender XDR
según:
o Dominios • Vínculos seguros • Investigación de
o Direcciones Investigación y respuesta: incidentes en
Microsoft Defender
de correo • Detecciones en
XDR
o URLs tiempo real
o Archivos • Entidad de correo • Investigación de
alertas en Microsoft
Investigación y respuesta: electrónico
Defender XDR
• Informes y auditoria
de seguridad
• Seguimiento de
mensajes
• Purga automática
hora cero (ZAP),
• Refinamiento de
listas permitidos y
bloqueados
Centro Criptológico Nacional
23

|  | Funcionalidades segun licenciamiento |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EOP |  |  |  | Plan 1 de Microsoft |  |  | Plan 2 de Microsoft |  |
|  |  |  |  | Defender para Office 365 |  |  | Defender para Office 365 |  |
|  | Prevención y detección: |  | Capacidades EOP <br> --- además --- <br> Prevención y detección: <br> • Directivas contra <br> suplantación de <br> identidad con <br> protección contra <br> suplantación y <br> umbrales avanzados <br> de suplantación de <br> identidad <br> • Datos adjuntos <br> seguros, incluidos <br> los datos adjuntos <br> seguros para <br> SharePoint, <br> OneDrive y <br> Microsoft Teams <br> • Vínculos seguros <br> Investigación y respuesta: <br> • Detecciones en <br> tiempo real <br> • Entidad de correo <br> electrónico | Capacidades EOP |  | Capacidades del Plan 1 de <br> Microsoft Defender para <br> Office 365 <br> --- además --- <br> Prevención y detección: <br> • Aprendizaje de <br> simulación de ataque <br> Investigación y respuesta: <br> • Rastreadores de <br> amenazas <br> • Explorador de <br> amenazas <br> • AIRE <br> • Búsqueda proactiva <br> de amenazas con la <br> búsqueda avanzada <br> en Microsoft <br> Defender XDR <br> • Investigación de <br> incidentes en <br> Microsoft Defender <br> XDR <br> • Investigación de <br> alertas en Microsoft <br> Defender XDR | Capacidades del Plan 1 de |  |
|  | • Protección contra |  |  | --- además --- |  |  | Microsoft Defender para |  |
|  | malware, correo no |  |  |  |  |  | Office 365 |  |
|  | deseado, correo |  |  | Prevención y detección: |  |  | --- además --- |  |
|  | electrónico masivo |  |  | • Directivas contra |  |  | Prevención y detección: |  |
|  | y suplantación de |  |  | suplantación de |  |  | • Aprendizaje de |  |
|  | identidad |  |  | identidad con |  |  | simulación de ataque |  |
|  | • Protección contra |  |  | protección contra |  |  |  |  |
|  | correo no deseado |  |  | suplantación y |  |  | Investigación y respuesta: |  |
|  | • Filtrado de conexión |  |  | umbrales avanzados |  |  | • Rastreadores de |  |
|  | y de correo no |  |  | de suplantación de |  |  | amenazas |  |
|  | deseado |  |  | identidad |  |  | • Explorador de |  |
|  | • Directivas de |  |  | • Datos adjuntos |  |  | amenazas |  |
|  | cuarentena |  |  | seguros, incluidos |  |  | • AIRE |  |
|  | • Detección de falsos |  |  | los datos adjuntos |  |  | • Búsqueda proactiva |  |
|  | positivos |  |  | seguros para |  |  | de amenazas con la |  |
|  | • Lista de permitidos |  |  | SharePoint, |  |  | búsqueda avanzada |  |
|  | y bloqueados |  |  | OneDrive y |  |  | en Microsoft |  |
|  | según: |  |  | Microsoft Teams |  |  | Defender XDR |  |
|  | o Dominios |  |  | • Vínculos seguros |  |  | • Investigación de |  |
|  | o Direcciones |  |  | Investigación y respuesta: |  |  | incidentes en |  |
|  | de correo |  |  | • Detecciones en |  |  | Microsoft Defender |  |
|  | o URLs |  |  | tiempo real |  |  | XDR |  |
|  | o Archivos |  |  | • Entidad de correo |  |  | • Investigación de |  |
|  |  |  |  |  |  |  | alertas en Microsoft |  |
|  | Investigación y respuesta: |  |  | electrónico |  |  |  |  |
|  |  |  |  |  |  |  | Defender XDR |  |
|  | • Informes y auditoria |  |  |  |  |  |  |  |
|  | de seguridad |  |  |  |  |  |  |  |
|  | • Seguimiento de |  |  |  |  |  |  |  |
|  | mensajes |  |  |  |  |  |  |  |
|  | • Purga automática |  |  |  |  |  |  |  |
|  | hora cero (ZAP), |  |  |  |  |  |  |  |
|  | • Refinamiento de |  |  |  |  |  |  |  |
|  | listas permitidos y |  |  |  |  |  |  |  |
|  | bloqueados |  |  |  |  |  |  |  |


![Imagen 1 - Página 23](CCN-STIC 885G_assets\pagina23_img1.png)

![Imagen 2 - Página 23](CCN-STIC 885G_assets\pagina23_img2.png)

![Imagen 3 - Página 23](CCN-STIC 885G_assets\pagina23_img3.png)

![Imagen 4 - Página 23](CCN-STIC 885G_assets\pagina23_img4.png)

![Imagen 5 - Página 23](CCN-STIC 885G_assets\pagina23_img5.png)

---

<!-- Página 24 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
2. CONFIGURACIÓN SEGURA PARA MICROSOFT DEFENDER PARA OFFICE
365
2.1 MARCO OPERACIONAL
2.1.1 CONTROL DE ACCESO
El control de acceso comprende el conjunto de actividades preparatorias y
ejecutivas tendentes a permitir o denegar a una entidad, usuario o proceso, el acceso a
un recurso del sistema para la realización de una acción concreta.
2.1.1.1 IDENTIFICACION
La gestión de identidades de Microsoft Entra ID es común para el acceso a todas las
funcionalidades de todo Microsoft 365, lo que también incluye Microsoft Defender
para Office 365 y se describe en la guía [CCN-STIC-885A - Guía de configuración segura
para Office 365].
2.1.1.2 REQUISITOS DE ACCESO
Según el ENS, los recursos del sistema se protegerán con algún mecanismo que
impida su utilización, salvo a las entidades que disfruten de derechos de acceso
suficientes. Además, todos los usuarios autorizados deben tener un conjunto de
atributos de seguridad (privilegios) que puedan ser mantenidos individualmente.
El ENS recomienda bloquear recursos para personas que no necesiten utilizarlo,
reduciendo así la superficie de exposición. La mayoría de los ataques en la actualidad
están relacionados con el phishing, y las cuentas de menor privilegio suelen ser
comprometidas con mayor facilidad, por lo que si esas cuentas tuvieran privilegios de
administración supondrían un importante agujero de seguridad. De ahí que se deba
utilizar el principio de menor privilegio y el Just In Time mediante la opción de
Microsoft Entra Privileged Identity Managament que proporciona la opción de obtener
los privilegios, única y exclusivamente en el momento que verdaderamente se
necesiten
Los permisos del portal de Microsoft Defender XDR se basan en el modelo de
permisos de control de acceso basado en roles (RBAC) proporcionando una única
experiencia de administración de permisos en una ubicación central. RBAC es el mismo
modelo de permisos que se usa en la mayoría de los servicios de Microsoft 365, por lo
que sí está familiarizado con la estructura de permisos de estos servicios, le resultará
sencillo conceder permisos en el portal de Microsoft Defender XDR.
* Más información en la guía [CCN-STIC-884A - Guía de configuración segura para
Azure].
Centro Criptológico Nacional
24

![Imagen 1 - Página 24](CCN-STIC 885G_assets\pagina24_img1.png)

![Imagen 2 - Página 24](CCN-STIC 885G_assets\pagina24_img2.png)

![Imagen 3 - Página 24](CCN-STIC 885G_assets\pagina24_img3.png)

![Imagen 4 - Página 24](CCN-STIC 885G_assets\pagina24_img4.png)

![Imagen 5 - Página 24](CCN-STIC 885G_assets\pagina24_img5.png)

---

<!-- Página 25 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Para obtener acceso a las características de Microsoft Defender para Office 365, se
debe tener asignado el rol adecuado. En la tabla siguiente se incluyen algunos
ejemplos:
Roles necesarios para usar las características de Microsft Defender para Office 365
Role o grupo de roles Descripción
Acceso a todas las características administrativas en
todos los servicios de Microsoft 365. Los
administradores globales son los únicos que pueden
Administrador global
asignar otros roles de administrador. Para más
información, consultar Administrador global /
Administrador de empresa.
Controla la seguridad global de la organización
mediante la administración de directivas de seguridad,
Administrador de
la revisión de análisis de seguridad y los informes en los
seguridad
productos de Microsoft 365, Para más información,
consultar Administrador de seguridad.
La versión de solo lectura del rol de Administrador
global. Ver todas las configuraciones e información
Lector Global
administrativa en Microsoft 365. Para más
información, consultar Lector global.
Crea y administra todos los aspectos de la creación
de simulación de ataques, el lanzamiento o la
Administrador de
programación de la simulación y la revisión de los
simulación de ataques
resultados de la misma. Para más información,
consulte Administrador de simulación de ataque.
Realizar un seguimiento de los datos de su organización
a través de Microsoft 365, asegurarse de que están
Administrador de datos de protegidos y obtener información sobre los problemas
cumplimiento para ayudar a reducir los riesgos. Para obtener más
información, consultar Administrador de datos de
cumplimiento.
Para administrar permisos la cuenta debe ser de administrador global en Microsoft
Entra ID o un miembro del grupo de roles de Administración de la organización en el
portal de Microsoft defender XDR. En concreto, el rol de Administración de roles
permite a los usuarios ver, crear y modificar grupos de roles en el portal de Microsoft
Defender XDR y, de forma predeterminada, ese rol solo se asigna al grupo de roles
Administración de la organización.
Centro Criptológico Nacional
25

|  | Roles necesarios para usar las características de Microsft Defender para Office 365 |  |  |
| --- | --- | --- | --- |
|  | Role o grupo de roles | Descripción |  |
| Administrador global |  | Acceso a todas las características administrativas en |  |
|  |  | todos los servicios de Microsoft 365. Los |  |
|  |  | administradores globales son los únicos que pueden |  |
|  |  | asignar otros roles de administrador. Para más |  |
|  |  | información, consultar Administrador global / |  |
|  |  | Administrador de empresa. |  |
| Administrador de <br> seguridad |  | Controla la seguridad global de la organización <br> mediante la administración de directivas de seguridad, <br> la revisión de análisis de seguridad y los informes en los <br> productos de Microsoft 365, Para más información, <br> consultar Administrador de seguridad. |  |
| Lector Global |  | La versión de solo lectura del rol de Administrador |  |
|  |  | global. Ver todas las configuraciones e información |  |
|  |  | administrativa en Microsoft 365. Para más |  |
|  |  | información, consultar Lector global. |  |
| Administrador de <br> simulación de ataques |  | Crea y administra todos los aspectos de la creación <br> de simulación de ataques, el lanzamiento o la <br> programación de la simulación y la revisión de los <br> resultados de la misma. Para más información, <br> consulte Administrador de simulación de ataque. |  |
| Administrador de datos de <br> cumplimiento |  | Realizar un seguimiento de los datos de su organización |  |
|  |  | a través de Microsoft 365, asegurarse de que están |  |
|  |  | protegidos y obtener información sobre los problemas |  |
|  |  | para ayudar a reducir los riesgos. Para obtener más |  |
|  |  | información, consultar Administrador de datos de |  |
|  |  | cumplimiento. |  |


![Imagen 1 - Página 25](CCN-STIC 885G_assets\pagina25_img1.png)

![Imagen 2 - Página 25](CCN-STIC 885G_assets\pagina25_img2.png)

![Imagen 3 - Página 25](CCN-STIC 885G_assets\pagina25_img3.png)

![Imagen 4 - Página 25](CCN-STIC 885G_assets\pagina25_img4.png)

![Imagen 5 - Página 25](CCN-STIC 885G_assets\pagina25_img5.png)

---

<!-- Página 26 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
2.1.1.3 SEGREGACIÓN DE FUNCIONES Y TAREAS
Como determina el ENS, el sistema de control de acceso se organizará de forma que
se exija la concurrencia de dos o más personas para realizar tareas críticas, anulando la
posibilidad de que un solo individuo autorizado, pueda abusar de sus derechos para
cometer alguna acción ilícita.
Se necesita flexibilidad para dar permisos de administrador adecuados a las
personas de la organización, para ello, desde el portal de Microsoft Defender XDR en
https://security.microsoft.com se administran directamente permisos para los usuarios
que realizan tareas de seguridad en Microsoft 365. Al usar el portal de Microsoft
Defender XDR para administrar los permisos, se centralizan estas tareas relacionadas
con la seguridad.
A continuación, se describe como asignar roles relacionados con Microsoft Defender
para Office 365 y el Centro de Seguridad y Cumplimiento de Microsoft 365.
1. Desde el portal de Microsoft Defender XDR, acceder a [Permisos], o accediendo
al enlace: https://security.microsoft.com/securitypermissions
* Los roles de Microsoft Entra ID son roles centrales que asignan permisos para todos
los servicios de Microsoft 365. Existen roles específicos para los servicios de
Exchange y SharePoint, de tal manera que un administrador, podría ser
administrador del servicio de Exchange y no de SharePoint y viceversa. Para la
asignación de roles en los servicios específicos recomendamos usar los portales de
administración de cada uno de ellos.
Centro Criptológico Nacional
26

![Imagen 1 - Página 26](CCN-STIC 885G_assets\pagina26_img1.png)

![Imagen 2 - Página 26](CCN-STIC 885G_assets\pagina26_img2.jpeg)

![Imagen 3 - Página 26](CCN-STIC 885G_assets\pagina26_img3.png)

![Imagen 4 - Página 26](CCN-STIC 885G_assets\pagina26_img4.png)

![Imagen 5 - Página 26](CCN-STIC 885G_assets\pagina26_img5.png)

![Imagen 6 - Página 26](CCN-STIC 885G_assets\pagina26_img6.png)

---

<!-- Página 27 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
2. Seleccionar la opción [Roles de colaboración y correo electrónico]: son los mismos
grupos de roles que están disponibles en el Centro de seguridad y cumplimiento,
pero puede administrarse directamente desde este portal de Microsoft Defender
XDR.
AÑADIR MIEMBROS O GRUPOS A DE ROLES DE ADMINISTRACIÓN
1. Para añadir miembros o un grupo a un role de administración basta con
seleccionar el role y pulsar el botón [Editar]:
Centro Criptológico Nacional
27

![Imagen 1 - Página 27](CCN-STIC 885G_assets\pagina27_img1.png)

![Imagen 2 - Página 27](CCN-STIC 885G_assets\pagina27_img2.png)

![Imagen 3 - Página 27](CCN-STIC 885G_assets\pagina27_img3.png)

![Imagen 4 - Página 27](CCN-STIC 885G_assets\pagina27_img4.jpeg)

![Imagen 5 - Página 27](CCN-STIC 885G_assets\pagina27_img5.png)

![Imagen 6 - Página 27](CCN-STIC 885G_assets\pagina27_img6.png)

![Imagen 7 - Página 27](CCN-STIC 885G_assets\pagina27_img7.png)

---

<!-- Página 28 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
2. A continuación, elegir los integrantes (miembros o grupos):
MICROSOFT DEFENDER XDR CONTROL DE ACCESO UNIFICADO
Microsoft Defender XDR proporciona protección contra amenazas integrada,
detección y respuesta entre puntos de conexión, correo electrónico, identidades,
aplicaciones y datos dentro de un único portal. Controlar los permisos de un usuario en
torno a su acceso para ver datos o completar tareas es esencial para que las
organizaciones minimicen los riesgos asociados al acceso no autorizado.
El modelo de control de acceso basado en rol unificado (RBAC) de Microsoft
Defender XDR proporciona una única experiencia de administración de permisos que
proporciona una ubicación central para que los administradores controlen los
permisos de usuario en diferentes soluciones de seguridad.
Este modelo de segregación de roles, para Microsoft Defender para Office 365 solo
está disponible para organizaciones con licencias de Microsoft Defender para Office
365 Plan 2.A continuación se describe como activar el modelo RBAC unificado de
Microsoft Defender XDR. Existen dos maneras de activar las workloads desde la página
de Permisos y roles:
Centro Criptológico Nacional
28

![Imagen 1 - Página 28](CCN-STIC 885G_assets\pagina28_img1.png)

![Imagen 2 - Página 28](CCN-STIC 885G_assets\pagina28_img2.png)

![Imagen 3 - Página 28](CCN-STIC 885G_assets\pagina28_img3.png)

![Imagen 4 - Página 28](CCN-STIC 885G_assets\pagina28_img4.png)

![Imagen 5 - Página 28](CCN-STIC 885G_assets\pagina28_img5.png)

![Imagen 6 - Página 28](CCN-STIC 885G_assets\pagina28_img6.png)

---

<!-- Página 29 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Desde el portal https://security.microsoft.com/. En el panel de navegación, se
selecciona [Permisos y Roles] en Microsoft Defender XDR.
1. Activación de workloads (carga de trabajo).
• Seleccionar activar workloads en el banner situado encima de la lista de roles.
• Esto da acceso directamente a la pantalla Activar workloads.
• Activar cada workload una por una. Una vez que seleccione el botón de
alternancia individual, se activará (o desactivará) ese workload.
Centro Criptológico Nacional
29

![Imagen 1 - Página 29](CCN-STIC 885G_assets\pagina29_img1.png)

![Imagen 2 - Página 29](CCN-STIC 885G_assets\pagina29_img2.png)

![Imagen 3 - Página 29](CCN-STIC 885G_assets\pagina29_img3.png)

![Imagen 4 - Página 29](CCN-STIC 885G_assets\pagina29_img4.png)

![Imagen 5 - Página 29](CCN-STIC 885G_assets\pagina29_img5.png)

![Imagen 6 - Página 29](CCN-STIC 885G_assets\pagina29_img6.png)

![Imagen 7 - Página 29](CCN-STIC 885G_assets\pagina29_img7.png)

---

<!-- Página 30 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
2. Configuración de la carga de trabajo
• Seleccionar configuración de la workload.
• Esto da acceso a la página Permisos y roles de Microsoft Defender XDR.
• Seleccionar el botón de alternancia de la workload que desea activar.
• Seleccione Activar en el mensaje de confirmación.
Activar en la configuración de Microsoft Defender XDR
Con estos pasos se activar las workloads directamente en Microsoft Defender XDR
configuración:
1. Iniciar sesión en el portal de Microsoft Defender.
2. En el panel de navegación, seleccionar Configuración.
3. Seleccionar Microsoft Defender XDR.
4. Seleccionar Permisos y roles. Esto da acceso a la página Activar workloads.
5. Seleccionar el botón de alternancia de la workload que desea activar.
6. Seleccionar Activar en el mensaje de confirmación.
IMPORTAR ROLES CORREO Y COLABORACIÓN
Se pueden importar los roles existentes que se mantienen como parte de productos
admitidos individualmente en Microsoft Defender XDR al modelo de RBAC unificado de
Microsoft Defender XDR.
La importación de roles migrará y mantendrá los roles con paridad completa en
relación con sus permisos y asignaciones de usuario en el modelo de RBAC unificado
de Microsoft Defender XDR.
Los pasos siguientes guían sobre cómo importar roles en Microsoft Defender XDR
RBAC unificado:
1. Iniciar sesión en el portal de Microsoft Defender.
2. En el panel de navegación, seleccionar Permisos.
3. Seleccionar Roles en Microsoft Defender XDR para acceder a la página Permisos
y roles.
4. Seleccionar Importar rol.
5. Seleccionar los productos desde los que se importaran roles.
Centro Criptológico Nacional
30

| 1. Iniciar sesión en el portal de Microsoft Defender. |
| --- |
| 2. En el panel de navegación, seleccionar Configuración. |
| 3. Seleccionar Microsoft Defender XDR. |
| 4. Seleccionar Permisos y roles. Esto da acceso a la página Activar workloads. |
| 5. Seleccionar el botón de alternancia de la workload que desea activar. |
| 6. Seleccionar Activar en el mensaje de confirmación. |


| Se pueden importar los roles existentes que se mantienen como parte de productos |  |
| --- | --- |
| admitidos individualmente en Microsoft Defender XDR al modelo de RBAC unificado de |  |
| Microsoft Defender XDR. |  |
| La importación de roles migrará y mantendrá los roles con paridad completa en |  |
| relación con sus permisos y asignaciones de usuario en el modelo de RBAC unificado |  |
| de Microsoft Defender XDR. |  |
| Los pasos siguientes guían sobre cómo importar roles en Microsoft Defender XDR |  |
| RBAC unificado: |  |
|  | 1. Iniciar sesión en el portal de Microsoft Defender. |
|  | 2. En el panel de navegación, seleccionar Permisos. |
|  | 3. Seleccionar Roles en Microsoft Defender XDR para acceder a la página Permisos |
|  | y roles. |
|  | 4. Seleccionar Importar rol. |
|  | 5. Seleccionar los productos desde los que se importaran roles. |


![Imagen 1 - Página 30](CCN-STIC 885G_assets\pagina30_img1.png)

![Imagen 2 - Página 30](CCN-STIC 885G_assets\pagina30_img2.png)

![Imagen 3 - Página 30](CCN-STIC 885G_assets\pagina30_img3.png)

![Imagen 4 - Página 30](CCN-STIC 885G_assets\pagina30_img4.png)

![Imagen 5 - Página 30](CCN-STIC 885G_assets\pagina30_img5.png)

---

<!-- Página 31 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
6. Seleccionar siguiente para elegir los roles que se van a importar. Es posible
elegir todos los roles o seleccionar roles específicos de la lista.
7. Seleccionar los roles a importar y seleccione Siguiente.
8. Seleccionar Enviar.
9. En la página de confirmación, seleccionar Hecho.
En el siguiente enlace https://learn.microsoft.com/es-es/defender-xdr/compare-
rbac-roles#map-defender-for-office-365-permissions-to-the-microsoft-defender-xdr-
unified-rbac-permissions se puede ver la información sobre cómo se relacionan los
roles de Microsoft Defender para Office 365 , con los nuevos permisos RBAC unificados
de Microsoft Defender XDR. La asignación de estos roles se realiza de la misma forma
que en el apartado [2.1.1.3.1 Añadir miembros o grupos a de roles de administración]
2.1.1.4 PROCESO DE GESTIÓN DE DERECHOS DE ACCESO
Azure Multi-Factor Authentication (MFA) protege el acceso a los datos y
aplicaciones, y al mismo tiempo mantiene la simplicidad para los usuarios. Proporciona
más seguridad, ya que requiere una segunda forma de autenticación y ofrece
autenticación segura a través de una variedad de métodos de autenticación.
Microsoft Entra ID ofrece una amplia gama de métodos de autenticación
multifactorial flexibles, llamadas, datos biométricos y códigos de acceso únicos.
Si solo se usa una contraseña para autenticar a un usuario, se deja un vector
desprotegido frente a los ataques. Al exigir una segunda forma de autenticación,
aumenta la seguridad, ya que este factor adicional no es algo que resulte fácil de
obtener o duplicar para un atacante.
Centro Criptológico Nacional
31

|  | 6. Seleccionar siguiente para elegir los roles que se van a importar. Es posible |
| --- | --- |
|  | elegir todos los roles o seleccionar roles específicos de la lista. |
|  | 7. Seleccionar los roles a importar y seleccione Siguiente. |
|  | 8. Seleccionar Enviar. |
|  | 9. En la página de confirmación, seleccionar Hecho. |
| En el siguiente enlace https://learn.microsoft.com/es-es/defender-xdr/compare- |  |
| rbac-roles#map-defender-for-office-365-permissions-to-the-microsoft-defender-xdr- |  |
| unified-rbac-permissions se puede ver la información sobre cómo se relacionan los |  |
| roles de Microsoft Defender para Office 365 , con los nuevos permisos RBAC unificados |  |
| de Microsoft Defender XDR. La asignación de estos roles se realiza de la misma forma |  |
| que en el apartado [2.1.1.3.1 Añadir miembros o grupos a de roles de administración] |  |


| Si solo se usa una contraseña para autenticar a un usuario, se deja un vector |
| --- |
| desprotegido frente a los ataques. Al exigir una segunda forma de autenticación, |
| aumenta la seguridad, ya que este factor adicional no es algo que resulte fácil de |
| obtener o duplicar para un atacante. |


![Imagen 1 - Página 31](CCN-STIC 885G_assets\pagina31_img1.png)

![Imagen 2 - Página 31](CCN-STIC 885G_assets\pagina31_img2.png)

![Imagen 3 - Página 31](CCN-STIC 885G_assets\pagina31_img3.png)

![Imagen 4 - Página 31](CCN-STIC 885G_assets\pagina31_img4.png)

![Imagen 5 - Página 31](CCN-STIC 885G_assets\pagina31_img5.png)

![Imagen 6 - Página 31](CCN-STIC 885G_assets\pagina31_img6.png)

![Imagen 7 - Página 31](CCN-STIC 885G_assets\pagina31_img7.png)

---

<!-- Página 32 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Conviene evitar una mala práctica que suele producirse cuando se envía el código
de MFA al mismo dispositivo donde se encuentra la cuenta que se quiere proteger, en
este sentido se recomienda usar otro dispositivo. Más información en la guía [CCN-
STIC-884A - Guía de configuración segura para Azure].
2.1.1.5 MECANISMOS DE AUTENTICACIÓN (USUARIOS EXTERNOS)
En el entorno empresarial actual, la identidad es el nuevo perímetro de seguridad.
Si cada dispositivo, usuario, servidor, proceso y dispositivo IoT tiene una identidad
única, estas identidades se convierten en el nuevo “perímetro”, evitando el acceso no
autorizado a los datos y sistemas.
La autenticación es crucial en este contexto de la identidad como nuevo perímetro
de seguridad. Aquí hay algunas razones por las que la autenticación es de suma
importancia:
• Verificación de Identidad: La autenticación garantiza que la persona o el
dispositivo que intenta acceder a los recursos de la organización sea realmente
quien dice ser. Esto ayuda a prevenir el acceso no autorizado y protege contra
amenazas internas y externas.
• Control de Acceso: La autenticación permite a las organizaciones establecer
políticas de acceso basadas en roles.
• Prevención de Ataques de Fuerza Bruta: La autenticación sólida dificulta que
los atacantes adivinen o descifren las credenciales de acceso. La ausencia de
contraseñas (passwordless), la autenticación multifactor (MFA) y otros
métodos ayudan a prevenir ataques de fuerza bruta.
• Protección contra Amenazas Emergentes: A medida que las amenazas
evolucionan, la autenticación también debe adaptarse. Las soluciones
modernas, como la autenticación biométrica (huellas dactilares,
reconocimiento facial), ayudan a mitigar riesgos emergentes.
En resumen, la autenticación es fundamental para garantizar que solo las personas
y dispositivos autorizados tengan acceso a los recursos de la organización,
especialmente en un mundo donde la identidad es el nuevo perímetro de seguridad.
Se requiere establecer un “doble factor de autenticación” (MFA) y tener una política
adecuada de gestión de credenciales. Así mismo, se requiere un registro de intentos de
accesos con éxito y fallidos al sistema. Adicionalmente se puede controlar el acceso al
servicio mediante directivas de acceso condicional o reglas en ADFS.
El acceso a los portales de administración se puede realizar de forma
descentralizada. Se recomienda reforzar la seguridad:
Centro Criptológico Nacional
32

![Imagen 1 - Página 32](CCN-STIC 885G_assets\pagina32_img1.png)

![Imagen 2 - Página 32](CCN-STIC 885G_assets\pagina32_img2.png)

![Imagen 3 - Página 32](CCN-STIC 885G_assets\pagina32_img3.png)

![Imagen 4 - Página 32](CCN-STIC 885G_assets\pagina32_img4.png)

![Imagen 5 - Página 32](CCN-STIC 885G_assets\pagina32_img5.png)

---

<!-- Página 33 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
• Equipos administrados.
• Autenticación de doble factor.
• Conformidad de dispositivos.
• Ubicaciones de confianza.
• Evitar accesos de usuarios sin licenciamiento.
• Otras medidas a través de acceso condicional
Una configuración detallada puede consultarse en la guía [CCN-STIC-884A - Guía de
configuración segura para Azure].
2.1.1.6 MECANISMOS DE AUTENTICACIÓN (USUARIOS DE LA ORGANIZACIÓN)
Los mecanismos de autenticación que se utilizarán para proteger a los usuarios de la
organización serán los mismos que los indicados en el punto anterior para los usuarios
externos. Como se ha comentado, ahora el acceso a los recursos está descentralizado,
siendo la identidad el nuevo perímetro de seguridad, y, por lo tanto, no se debería
diferenciar entre tipos de usuarios en cuanto a las medidas de protección de acceso.
2.1.2 EXPLOTACIÓN
En esta sección se detallan aspectos relevantes de Microsoft Defender para Office
365 en cuanto a la explotación de los recursos.
2.1.2.1 PROTECCIÓN FRENTE A CÓDIGO DAÑINO
Las características de protección contra amenazas se incluyen en todas las
suscripciones Microsoft 365; sin embargo, algunas suscripciones tienen características
avanzadas. En la tabla siguiente se enumeran características de protección con los
requisitos mínimos de suscripción:
Tipo de protección Requisitos de suscripción
Registro de auditoría (para fines de informes) Exchange Online
Protección contra malware Exchange Online
Protection (EOP)
Protección contra phishing EOP
Protección contra correo no deseado EOP
Protección contra direcciones URL malintencionadas y Microsoft Defender para
archivos en documentos Office correo electrónico Office 365
* Conviene recordar que Microsoft Defender para Office 365 contiene y se construye
sobre EOP.
PROTECCIÓN ANTIMALWARE EN EOP
En organizaciones de Microsoft 365 con buzones de correo de Exchange Online u
organizaciones independientes de Exchange Online Protection (EOP) sin buzones de
Exchange Online, EOP protege automáticamente los mensajes de correo electrónico
entrantes contra el malware. Algunas de las categorías principales de malware son:
Centro Criptológico Nacional
33

|  | Tipo de protección |  |  | Requisitos de suscripción |  |
| --- | --- | --- | --- | --- | --- |
|  | Registro de auditoría (para fines de informes) |  |  | Exchange Online |  |
| Protección contra malware |  |  | Exchange Online <br> Protection (EOP) |  |  |
|  | Protección contra phishing |  |  | EOP |  |
| Protección contra correo no deseado |  |  | EOP |  |  |
|  | Protección contra direcciones URL malintencionadas y |  |  | Microsoft Defender para |  |
|  | archivos en documentos Office correo electrónico |  |  | Office 365 |  |


| En organizaciones de Microsoft 365 con buzones de correo de Exchange Online u |
| --- |
| organizaciones independientes de Exchange Online Protection (EOP) sin buzones de |
| Exchange Online, EOP protege automáticamente los mensajes de correo electrónico |
| entrantes contra el malware. Algunas de las categorías principales de malware son: |


![Imagen 1 - Página 33](CCN-STIC 885G_assets\pagina33_img1.png)

![Imagen 2 - Página 33](CCN-STIC 885G_assets\pagina33_img2.png)

![Imagen 3 - Página 33](CCN-STIC 885G_assets\pagina33_img3.png)

![Imagen 4 - Página 33](CCN-STIC 885G_assets\pagina33_img4.png)

![Imagen 5 - Página 33](CCN-STIC 885G_assets\pagina33_img5.png)

---

<!-- Página 34 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
• Virus que infectan otros programas y datos, y se propagan a través del equipo
o red en busca de programas para infectar.
• Spyware que recopila información personal, como la información de inicio de
sesión y los datos personales, y la envía de vuelta a su autor.
• Ransomware que cifra los datos y exige el pago para descifrarlos. El software
antimalware no le ayuda a descifrar archivos cifrados, pero puede detectar la
carga útil de malware asociada con el ransomware.
EOP ofrece protección contra malware multicapa diseñada para detectar todo el
malware conocido en Windows, Linux y Mac que viaja dentro o fuera de una
organización. Las opciones siguientes ayudan a proporcionar protección antimalware:
• Defensas en capas contra malware: varios motores de detección antimalware
ayudan a protegerse contra amenazas conocidas y desconocidas. Dichos
motores incluyen potente detección heurística que ofrece protección aún
durante las primeras etapas de un ataque de malware.
• Respuesta a amenazas en tiempo real: durante algunas amenazas, el
antimalware podría tener suficiente información sobre un virus u otra forma de
malware para escribir reglas de directiva sofisticadas que detecten la amenaza.
Esas reglas se publican en la red global cada 2 horas a fin de proporcionar a la
organización una capa adicional de protección contra ataques.
• Implementación rápida de definiciones antimalware: el antimalware mantiene
relaciones estrechas con otros asociados que desarrollan motores antimalware.
Como resultado, el servicio puede recibir e integrar definiciones y revisiones de
malware antes de que se lancen al público.
En EOP, los mensajes que contienen malware en los datos adjuntos se ponen en
cuarentena. Las directivas de cuarentena controlan si los destinatarios pueden ver o
interactuar con los mensajes en cuarentena. De forma predeterminada, los mensajes
que se pusieron en cuarentena debido a malware solo pueden ser vistos y publicados
por los administradores.
Microsoft 365 usa un motor de detección de virus común para examinar archivos
que los usuarios cargan en SharePoint Online, OneDrive y Microsoft Teams. El motor
de detección de virus de Microsoft 365 examina los archivos de forma asincrónica (en
algún momento después de la carga). Si un usuario intenta descargar un archivo en un
explorador web o desde Teams que no se ha examinado, se desencadena un examen
antes de que se permita la descarga. Todos los tipos de archivo no se examinan
automáticamente. La heurística determina los archivos que se van a examinar. Cuando
se detecta que un archivo contiene un virus, el archivo se marcará como malware.
Esto es lo que sucede:
1. Un usuario carga un archivo en SharePoint Online.
2. SharePoint Online, como parte de sus procesos de detección de virus,
determina más adelante si el archivo cumple los criterios para un examen.
Centro Criptológico Nacional
34

| EOP ofrece protección contra malware multicapa diseñada para detectar todo el |
| --- |
| malware conocido en Windows, Linux y Mac que viaja dentro o fuera de una |
| organización. Las opciones siguientes ayudan a proporcionar protección antimalware: |


| En EOP, los mensajes que contienen malware en los datos adjuntos se ponen en |  |
| --- | --- |
| cuarentena. Las directivas de cuarentena controlan si los destinatarios pueden ver o |  |
| interactuar con los mensajes en cuarentena. De forma predeterminada, los mensajes |  |
| que se pusieron en cuarentena debido a malware solo pueden ser vistos y publicados |  |
| por los administradores. |  |
| Microsoft 365 usa un motor de detección de virus común para examinar archivos |  |
| que los usuarios cargan en SharePoint Online, OneDrive y Microsoft Teams. El motor |  |
| de detección de virus de Microsoft 365 examina los archivos de forma asincrónica (en |  |
| algún momento después de la carga). Si un usuario intenta descargar un archivo en un |  |
| explorador web o desde Teams que no se ha examinado, se desencadena un examen |  |
| antes de que se permita la descarga. Todos los tipos de archivo no se examinan |  |
| automáticamente. La heurística determina los archivos que se van a examinar. Cuando |  |
| se detecta que un archivo contiene un virus, el archivo se marcará como malware. |  |
| Esto es lo que sucede: |  |
|  | 1. Un usuario carga un archivo en SharePoint Online. |
|  | 2. SharePoint Online, como parte de sus procesos de detección de virus, |
|  | determina más adelante si el archivo cumple los criterios para un examen. |


![Imagen 1 - Página 34](CCN-STIC 885G_assets\pagina34_img1.png)

![Imagen 2 - Página 34](CCN-STIC 885G_assets\pagina34_img2.png)

![Imagen 3 - Página 34](CCN-STIC 885G_assets\pagina34_img3.png)

![Imagen 4 - Página 34](CCN-STIC 885G_assets\pagina34_img4.png)

![Imagen 5 - Página 34](CCN-STIC 885G_assets\pagina34_img5.png)

---

<!-- Página 35 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
3. Si el archivo cumple los criterios para un examen, el motor de detección de
virus examina el archivo.
4. Si se encuentra un virus en el archivo examinado, el motor de virus establece
una propiedad en el archivo que indica que el archivo está infectado.
De forma predeterminada, los usuarios pueden descargar archivos infectados desde
SharePoint Online.
1. En un explorador web, un usuario intenta descargar un archivo de SharePoint
Online que resulta estar infectado.
2. Al usuario se le muestra una advertencia de que se detectó un virus en el
archivo. El usuario tiene la opción de continuar con la descarga e intentar
limpiarla mediante software antivirus en su dispositivo.
Se recomienda cambiar este comportamiento para que los usuarios no puedan
descargar archivos infectados. Los administradores pueden usar el
pparámetro DisallowInfectedFileDownload en el cmdlet Set-SPOTenant en PowerShell
de SharePoint Online. El valor $true para el parámetro DisallowInfectedFileDownload
bloquea completamente el acceso a los archivos detectados o bloqueados para los
usuarios.
Los administradores de SharePoint y los administradores globales pueden realizar
extracciones de archivos forenses de archivos infectados por malware en PowerShell
de SharePoint Online con el cmdlet Get-SPOMalwareFileContent . Los administradores
no necesitan acceso al sitio que hospeda el contenido infectado. Siempre que el
archivo esté marcado como malware, los administradores pueden usar Get-
SPOMalwareFileContent para extraer el archivo.
Las organizaciones de Microsoft 365 que tienen Microsoft Defender para Office
365 incluidas en su suscripción o compradas como complemento pueden habilitar
datos adjuntos seguros para SharePoint, OneDrive y Microsoft Teams para la creación
de informes y protección mejoradas
Para configurar las políticas antimalware para hacer frente a la amenaza de correos
maliciosos:
1. Entrar al portal se security.microsoft.com y a la opción [Reglas y directivas|
Directivas de amenazas| protección antimalware] o bien mediante el vínculo:
https://security.microsoft.com/antimalwarev2
Centro Criptológico Nacional
35

| 3. Si el archivo cumple los criterios para un examen, el motor de detección de |
| --- |
| virus examina el archivo. |
| 4. Si se encuentra un virus en el archivo examinado, el motor de virus establece |
| una propiedad en el archivo que indica que el archivo está infectado. |


| De forma predeterminada, los usuarios pueden descargar archivos infectados desde |  |
| --- | --- |
| SharePoint Online. |  |
|  | 1. En un explorador web, un usuario intenta descargar un archivo de SharePoint |
|  | Online que resulta estar infectado. |
|  | 2. Al usuario se le muestra una advertencia de que se detectó un virus en el |
|  | archivo. El usuario tiene la opción de continuar con la descarga e intentar |
|  | limpiarla mediante software antivirus en su dispositivo. |


| Se recomienda cambiar este comportamiento para que los usuarios no puedan |
| --- |
| descargar archivos infectados. Los administradores pueden usar el |
| pparámetro DisallowInfectedFileDownload en el cmdlet Set-SPOTenant en PowerShell |
| de SharePoint Online. El valor $true para el parámetro DisallowInfectedFileDownload |
| bloquea completamente el acceso a los archivos detectados o bloqueados para los |
| usuarios. |


![Imagen 1 - Página 35](CCN-STIC 885G_assets\pagina35_img1.png)

![Imagen 2 - Página 35](CCN-STIC 885G_assets\pagina35_img2.png)

![Imagen 3 - Página 35](CCN-STIC 885G_assets\pagina35_img3.png)

![Imagen 4 - Página 35](CCN-STIC 885G_assets\pagina35_img4.png)

![Imagen 5 - Página 35](CCN-STIC 885G_assets\pagina35_img5.png)

---

<!-- Página 36 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
2. En la página Antimalware, seleccionar la directiva denominada Default,
haciendo clic en el nombre.
3. En el control desplegable de detalles de directiva que se abre, hacer clic en
“Editar configuración de protección”:
A continuación, configurar las siguientes opciones que se clasifican en secciones.
Centro Criptológico Nacional
36

![Imagen 1 - Página 36](CCN-STIC 885G_assets\pagina36_img1.png)

![Imagen 2 - Página 36](CCN-STIC 885G_assets\pagina36_img2.png)

![Imagen 3 - Página 36](CCN-STIC 885G_assets\pagina36_img3.png)

![Imagen 4 - Página 36](CCN-STIC 885G_assets\pagina36_img4.png)

![Imagen 5 - Página 36](CCN-STIC 885G_assets\pagina36_img5.png)

![Imagen 6 - Página 36](CCN-STIC 885G_assets\pagina36_img6.png)

![Imagen 7 - Página 36](CCN-STIC 885G_assets\pagina36_img7.png)

---

<!-- Página 37 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
4. Configurar la sección “Configuración de la protección”:
• Habilitar el filtro de datos adjuntos comunes: seleccionar (activar).
• Hacer clic en “seleccionar tipos de archivo” para agregar más tipos de archivo.
• Seleccionar el tipo de acción que se ejecutará cuando detecte ese tipo de
ficheros:
o Enviar un informe de no entrega (NDR)
o Enviar el correo electrónico a cuarentena
* Los tipos de archivo especificados se consideran automáticamente como malware.
• Habilitar la purga automática de hora cero para malware: comprobar que esta
configuración está seleccionada.
* Para los mensajes leídos o no leídos que contienen malware después de la entrega,
ZAP pone en cuarentena el mensaje que contiene los datos adjuntos de malware.
Se pueden crear diferentes directivas de cuarentena para definir quién debe
acceder a ella y que acciones puede realizar de malware en cuarentena.
Centro Criptológico Nacional
37

![Imagen 1 - Página 37](CCN-STIC 885G_assets\pagina37_img1.png)

![Imagen 2 - Página 37](CCN-STIC 885G_assets\pagina37_img2.png)

![Imagen 3 - Página 37](CCN-STIC 885G_assets\pagina37_img3.png)

![Imagen 4 - Página 37](CCN-STIC 885G_assets\pagina37_img4.png)

![Imagen 5 - Página 37](CCN-STIC 885G_assets\pagina37_img5.png)

![Imagen 6 - Página 37](CCN-STIC 885G_assets\pagina37_img6.png)

![Imagen 7 - Página 37](CCN-STIC 885G_assets\pagina37_img7.png)

![Imagen 8 - Página 37](CCN-STIC 885G_assets\pagina37_img8.png)

---

<!-- Página 38 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
5. Configurar la sección de “Notificación”.
• Se recomienda activar las “Notificaciones del administrador”.
• Existe la posibilidad de personalizar la notificación, para modificar la que existe
por defecto.
6. De nuevo en el control flotante de detalles de la directiva, hacer clic en Cerrar.
Centro Criptológico Nacional
38

![Imagen 1 - Página 38](CCN-STIC 885G_assets\pagina38_img1.png)

![Imagen 2 - Página 38](CCN-STIC 885G_assets\pagina38_img2.png)

![Imagen 3 - Página 38](CCN-STIC 885G_assets\pagina38_img3.png)

![Imagen 4 - Página 38](CCN-STIC 885G_assets\pagina38_img4.png)

![Imagen 5 - Página 38](CCN-STIC 885G_assets\pagina38_img5.png)

![Imagen 6 - Página 38](CCN-STIC 885G_assets\pagina38_img6.png)

![Imagen 7 - Página 38](CCN-STIC 885G_assets\pagina38_img7.png)

---

<!-- Página 39 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
PROTECCIÓN ANTIPHISHING EN EOP Y MICROSOFT DEFENDER PARA OFFICE 365
Las organizaciones de Microsoft 365 con buzones en Exchange Online u
organizaciones EOP independientes sin buzones de correo Exchange Online contienen
las siguientes características que ayudan a proteger su organización frente a amenazas
de suplantación de identidad (phishing):
• Inteligencia de suplantación de identidad: revisa los remitentes suplantados
detectados en los mensajes de dominios externos e internos, y permitir o
bloquear manualmente los remitentes detectados.
• Directivas contra suplantación de identidad (phishing) en EOP: permite activar
o desactivar la inteligencia de suplantación de identidad, los indicadores de
remitente no autenticados en Outlook y especificar la acción para los
remitentes falsificados bloqueados.
• Respetar la directiva DMARC del remitente cuando el mensaje se detecta
como suplantación: permite controlar lo que sucede con los mensajes en los
que el remitente produce un error en las comprobaciones explícitas de
DMARC y la directiva DMARC.
• Permitir o bloquear remitentes suplantados en la lista de permitidos o
bloqueados de inquilinos: al invalidar el veredicto en la información de
inteligencia de suplantación de identidad, el remitente suplantado se convierte
en una entrada de bloqueo o permiso que solo aparecerá en la pestaña de
remitentes suplantados. También es posible crear manualmente entradas de
permiso o bloqueo para remitentes falsificados antes de que la inteligencia de
suplantación de identidad las detecte.
• Autenticación implícita de correo electrónico: EOP mejora las comprobaciones
de autenticación de correo electrónico estándar para el correo electrónico
entrante (SPF, DKIM y DMARC con reputación del remitente, historial de
remitentes, historial de destinatarios, análisis de comportamiento y otras
técnicas avanzadas para ayudar a identificar remitentes falsificados. Para
obtener más información, consulte Autenticación de correo electrónico de
Microsoft 365.
Microsoft Defender para Office 365 contiene características contra phishing
adicionales y más avanzadas:
• Directivas contra suplantación de identidad en Microsoft Defender para
Office 365: permite configuración de protección de suplantación para
remitentes y dominios de remitente de mensajes específicos, opciones de
inteligencia de buzones y umbrales de suplantación de identidad avanzados
ajustables. Se muestran las diferencias de las características de EOP y Microsoft
Defender para Office 365 en la siguiente imagen
Centro Criptológico Nacional
39

![Imagen 1 - Página 39](CCN-STIC 885G_assets\pagina39_img1.png)

![Imagen 2 - Página 39](CCN-STIC 885G_assets\pagina39_img2.png)

![Imagen 3 - Página 39](CCN-STIC 885G_assets\pagina39_img3.png)

![Imagen 4 - Página 39](CCN-STIC 885G_assets\pagina39_img4.png)

![Imagen 5 - Página 39](CCN-STIC 885G_assets\pagina39_img5.png)

---

<!-- Página 40 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
• Vistas de campaña: El aprendizaje automático y otras heurísticas identifican y
analizan los mensajes implicados en ataques de suplantación de identidad
(phishing) coordinados contra todo el servicio y la organización.
• Entrenamiento de simulación de ataque: Los administradores pueden crear
mensajes de phishing falsos y enviarlos a usuarios internos como una
herramienta de educación. Para obtener más información, consulte 3.1
Entrenamiento de simulación de ataque.
En el siguiente procedimiento se describe cómo configurar la directiva contra
suplantación de identidad predeterminada:
1. Abrir la página Anti-phishing en el portal Microsoft Defender XDR en:
https://security.microsoft.com/antiphishing o accediendo a [Reglas y directivas|
Directivas de amenazas| protección contra phishing].
Centro Criptológico Nacional
40

![Imagen 1 - Página 40](CCN-STIC 885G_assets\pagina40_img1.png)

![Imagen 2 - Página 40](CCN-STIC 885G_assets\pagina40_img2.png)

![Imagen 3 - Página 40](CCN-STIC 885G_assets\pagina40_img3.png)

![Imagen 4 - Página 40](CCN-STIC 885G_assets\pagina40_img4.png)

![Imagen 5 - Página 40](CCN-STIC 885G_assets\pagina40_img5.png)

![Imagen 6 - Página 40](CCN-STIC 885G_assets\pagina40_img6.png)

![Imagen 7 - Página 40](CCN-STIC 885G_assets\pagina40_img7.png)

---

<!-- Página 41 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
2. En la página Anti-phishing, seleccionar la directiva denominada “Office365
AntiPhish Default” (Valor predeterminado) haciendo clic en el nombre. En el
control desplegable de detalles de directiva que se abre, hacer clic en “Editar
configuración de protección”.
A continuación, configurar las siguientes opciones que se clasifican en secciones.
Umbral de correo electrónico de phishing
* Se recomienda aplicar como mínimo un grado 2 (agresivo), aunque este valor
requerirá un estudio más detallado de la casuística de la organización.
La probabilidad de falsos positivos (mensajes buenos marcados como negativos)
aumenta a medida que aumenta esta configuración.
Los umbrales avanzados de suplantación de identidad solo están disponibles en las
directivas contra suplantación de identidad en Microsoft Defender para Office 365.
Estos umbrales controlan la confidencialidad para aplicar modelos de aprendizaje
automático a los mensajes para determinar un veredicto de phishing.
Centro Criptológico Nacional
41

![Imagen 1 - Página 41](CCN-STIC 885G_assets\pagina41_img1.png)

![Imagen 2 - Página 41](CCN-STIC 885G_assets\pagina41_img2.png)

![Imagen 3 - Página 41](CCN-STIC 885G_assets\pagina41_img3.png)

![Imagen 4 - Página 41](CCN-STIC 885G_assets\pagina41_img4.png)

![Imagen 5 - Página 41](CCN-STIC 885G_assets\pagina41_img5.png)

![Imagen 6 - Página 41](CCN-STIC 885G_assets\pagina41_img6.png)

![Imagen 7 - Página 41](CCN-STIC 885G_assets\pagina41_img7.png)

---

<!-- Página 42 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Los distintos valores de este control son:
• 1 - Estándar: este es el valor predeterminado. La severidad de la acción que se
toma sobre el mensaje depende del grado de confianza de que el mensaje sea
de phishing (confianza baja, mediana, alta o muy alta). Por ejemplo, los
mensajes identificados como phishing con un grado de confianza muy alto
tienen las acciones más graves aplicadas, mientras que los mensajes que se
identifican como phishing con un bajo grado de confianza tienen acciones
menos graves aplicadas.
• 2 - Agresivo: los mensajes que se identifican como suplantación de identidad
con un alto grado de confianza se tratan como si se identificaron con un grado
de confianza muy alto.
• 3 - Más agresivo: los mensajes que se identifican como suplantación de
identidad con un grado de confianza medio o alto se tratan como si se
identificaron con un grado de confianza muy alto.
• 4 - Más agresivo: los mensajes que se identifican como suplantación de
identidad con un grado de confianza bajo, medio o alto se tratan como si se
identificaron con un grado de confianza muy alto.
Suplantación de usuarios que deben protegerse
Para protegerse de la suplantación personas clave, como los miembros de la junta
directiva de la organización, director general, director financiero y otros líderes.
Si se detecta suplantación en la dirección de correo electrónico del remitente, las
acciones de protección de suplantación para los usuarios se aplican al mensaje (qué
hacer con el mensaje, si se muestran sugerencias de seguridad de usuarios
suplantados, etc.).
De forma predeterminada, ninguna dirección de correo electrónico del remitente
está cubierta por la protección de suplantación, ya sea en la directiva predeterminada
o en directivas personalizadas.
Centro Criptológico Nacional
42

![Imagen 1 - Página 42](CCN-STIC 885G_assets\pagina42_img1.png)

![Imagen 2 - Página 42](CCN-STIC 885G_assets\pagina42_img2.png)

![Imagen 3 - Página 42](CCN-STIC 885G_assets\pagina42_img3.png)

![Imagen 4 - Página 42](CCN-STIC 885G_assets\pagina42_img4.png)

![Imagen 5 - Página 42](CCN-STIC 885G_assets\pagina42_img5.png)

![Imagen 6 - Página 42](CCN-STIC 885G_assets\pagina42_img6.png)

---

<!-- Página 43 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Suplantación de dominios para proteger
Evita que los dominios especificados se suplanten en el dominio del remitente del
mensaje.
Remitentes y dominios de confianza
Agregar remitentes y dominios de confianza para que no se marquen como un
ataque basado en la suplantación de identidad.
Inteligencia de buzones
Centro Criptológico Nacional
43

![Imagen 1 - Página 43](CCN-STIC 885G_assets\pagina43_img1.png)

![Imagen 2 - Página 43](CCN-STIC 885G_assets\pagina43_img2.png)

![Imagen 3 - Página 43](CCN-STIC 885G_assets\pagina43_img3.png)

![Imagen 4 - Página 43](CCN-STIC 885G_assets\pagina43_img4.png)

![Imagen 5 - Página 43](CCN-STIC 885G_assets\pagina43_img5.png)

![Imagen 6 - Página 43](CCN-STIC 885G_assets\pagina43_img6.png)

![Imagen 7 - Página 43](CCN-STIC 885G_assets\pagina43_img7.png)

![Imagen 8 - Página 43](CCN-STIC 885G_assets\pagina43_img8.png)

---

<!-- Página 44 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Habilitar la inteligencia artificial (IA) que determina los patrones de correo
electrónico del usuario con sus contactos frecuentes. Esta configuración ayuda a la IA a
distinguir entre mensajes de remitentes legítimos y suplantados.
Inteligencia contra la suplantación de identidad
Activar esta configuración para especificar la acción que se debe realizar en los
mensajes para las detecciones de suplantación:
• No aplicar ninguna acción.
• Redirigir el mensaje a otras direcciones de correo electrónico.
• Mover el mensaje a las carpetas de correo no deseado de los destinatarios.
• Poner en cuarentena el mensaje. Las directivas de cuarentena definen lo que
los usuarios pueden hacer con los mensajes en cuarentena.
• Entregar el mensaje y agregar otras direcciones a la línea CCO.
• Eliminar el mensaje antes de entregarlo.
Para configurar la inteligencia ante la suplantación de identidad se proporciona un
enlace a:
https://security.microsoft.com/tenantAllowBlockList?viewid=SpoofItem
Para más información consultar la página oficial de Microsoft:
https://docs.microsoft.com/es-es/microsoft-365/security/office-365-security/set-up-
anti-phishing-policies?view=o365-worldwide#impersonation-settings-in-anti-phishing-
policies-in-microsoft-defender-for-office-365
Centro Criptológico Nacional
44

![Imagen 1 - Página 44](CCN-STIC 885G_assets\pagina44_img1.png)

![Imagen 2 - Página 44](CCN-STIC 885G_assets\pagina44_img2.png)

![Imagen 3 - Página 44](CCN-STIC 885G_assets\pagina44_img3.png)

![Imagen 4 - Página 44](CCN-STIC 885G_assets\pagina44_img4.png)

![Imagen 5 - Página 44](CCN-STIC 885G_assets\pagina44_img5.png)

![Imagen 6 - Página 44](CCN-STIC 885G_assets\pagina44_img6.png)

![Imagen 7 - Página 44](CCN-STIC 885G_assets\pagina44_img7.png)

---

<!-- Página 45 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
3. En el control desplegable de detalles de directiva, hacer clic en “Editar acciones”.
Acciones
A continuación, aparecen una serie de desplegables con la acción que se debe
realizar en los mensajes entrantes que contienen intentos de suplantación contra los
usuarios y los dominios protegidos de la directiva. Se puede especificar diferentes
acciones para la suplantación de usuarios protegidos frente a la suplantación de
dominios protegidos:
• No aplicar ninguna acción.
• Redirigir el mensaje a otras direcciones de correo electrónico: envía el mensaje
a los destinatarios especificados en lugar de a los destinatarios previstos.
• Mover mensajes a las carpetas de correo no deseado de los destinatarios: el
mensaje se entrega en el buzón y se mueve a la carpeta correo no deseado.
o En Exchange Online, el mensaje se mueve a la carpeta Correo no
deseado si la regla de correo no deseado está habilitada en el buzón
(está habilitada de forma predeterminada).
Centro Criptológico Nacional
45

![Imagen 1 - Página 45](CCN-STIC 885G_assets\pagina45_img1.png)

![Imagen 2 - Página 45](CCN-STIC 885G_assets\pagina45_img2.png)

![Imagen 3 - Página 45](CCN-STIC 885G_assets\pagina45_img3.png)

![Imagen 4 - Página 45](CCN-STIC 885G_assets\pagina45_img4.png)

![Imagen 5 - Página 45](CCN-STIC 885G_assets\pagina45_img5.png)

![Imagen 6 - Página 45](CCN-STIC 885G_assets\pagina45_img6.png)

---

<!-- Página 46 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
• Poner en cuarentena el mensaje: envía el mensaje a la cuarentena en lugar de
los destinatarios previstos.
o Las directivas de cuarentena definen lo que los usuarios pueden hacer
con los mensajes en cuarentena.
• Entregar el mensaje y agregar otras direcciones a la línea CCO: entregar el
mensaje a los destinatarios previstos y de forma silenciosa a los destinatarios
especificados.
• Eliminar el mensaje antes de entregarlo: elimina silenciosamente todo el
mensaje, incluidos todos los datos adjuntos.
Para las configuraciones de la política por defecto recomendamos “Poner en
cuarentena el mensaje”:
Centro Criptológico Nacional
46

![Imagen 1 - Página 46](CCN-STIC 885G_assets\pagina46_img1.png)

![Imagen 2 - Página 46](CCN-STIC 885G_assets\pagina46_img2.png)

![Imagen 3 - Página 46](CCN-STIC 885G_assets\pagina46_img3.png)

![Imagen 4 - Página 46](CCN-STIC 885G_assets\pagina46_img4.png)

![Imagen 5 - Página 46](CCN-STIC 885G_assets\pagina46_img5.png)

![Imagen 6 - Página 46](CCN-STIC 885G_assets\pagina46_img6.png)

---

<!-- Página 47 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Sugerencias e indicadores de seguridad
Las sugerencias de seguridad son advertencias que se muestran a los destinatarios
cuando se tiene algún tipo de sospecha sobre el correo entrante:
Más información:
https://docs.microsoft.com/es-es/microsoft-365/security/office-365-security/set-up-
anti-phishing-policies?view=o365-worldwide#impersonation-settings-in-anti-phishing-
policies-in-microsoft-defender-for-office-365
Se recomienda activar todos los checks.
PROTECCIÓN ANTISPAM EN EOP
En organizaciones de Microsoft 365 con buzones de correo de Exchange Online u
organizaciones independientes de Exchange Online Protection (EOP) sin buzones de
Exchange Online, EOP protege automáticamente los mensajes de correo electrónico
contra el spam (correo no deseado).
Para ayudar a reducir el correo electrónico no deseado, EOP incluye protección
contra correo no deseado que usa tecnologías propietarias de filtrado de correo no
deseado (también conocidas como filtrado de contenido) para identificar y separar el
correo electrónico no deseado del correo electrónico legítimo. El filtrado de correo no
deseado de EOP aprende de amenazas conocidas de spam y phishing y comentarios de
los usuarios de nuestra plataforma de consumidores, Outlook.com. Los
comentarios continuos de administradores y usuarios ayudan a garantizar que las
tecnologías de EOP se entrene y mejore continuamente.
EOP usa los siguientes veredictos de filtrado de spam para clasificar los mensajes:
• Correo no deseado: el mensaje recibió un nivel de confianza de correo no
deseado (SCL) de 5 o 6.
• Spam de alta confianza: el mensaje recibió una SCL de 7, 8 o 9.
Centro Criptológico Nacional
47

| En organizaciones de Microsoft 365 con buzones de correo de Exchange Online u |
| --- |
| organizaciones independientes de Exchange Online Protection (EOP) sin buzones de |
| Exchange Online, EOP protege automáticamente los mensajes de correo electrónico |
| contra el spam (correo no deseado). |
| Para ayudar a reducir el correo electrónico no deseado, EOP incluye protección |
| contra correo no deseado que usa tecnologías propietarias de filtrado de correo no |
| deseado (también conocidas como filtrado de contenido) para identificar y separar el |
| correo electrónico no deseado del correo electrónico legítimo. El filtrado de correo no |
| deseado de EOP aprende de amenazas conocidas de spam y phishing y comentarios de |
| los usuarios de nuestra plataforma de consumidores, Outlook.com. Los |
| comentarios continuos de administradores y usuarios ayudan a garantizar que las |
| tecnologías de EOP se entrene y mejore continuamente. |
| EOP usa los siguientes veredictos de filtrado de spam para clasificar los mensajes: |


![Imagen 1 - Página 47](CCN-STIC 885G_assets\pagina47_img1.png)

![Imagen 2 - Página 47](CCN-STIC 885G_assets\pagina47_img2.png)

![Imagen 3 - Página 47](CCN-STIC 885G_assets\pagina47_img3.png)

![Imagen 4 - Página 47](CCN-STIC 885G_assets\pagina47_img4.png)

![Imagen 5 - Página 47](CCN-STIC 885G_assets\pagina47_img5.png)

![Imagen 6 - Página 47](CCN-STIC 885G_assets\pagina47_img6.png)

---

<!-- Página 48 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
• Suplantación de identidad (phishing)
• Suplantación de identidad de alta confianza: como parte de la seguridad de
forma predeterminada, los mensajes que se identifican como suplantación de
identidad de alta confianza siempre se ponen en cuarentena y los usuarios no
pueden liberar sus propios mensajes de suplantación de identidad de alta
confianza en cuarentena, independientemente de la configuración disponible
que configuren los administradores.
• En masa: el origen del mensaje cumplió o superó el nivel de queja masiva
(BCL) configurado. Umbral.
Para configurar las políticas antispam para frente a la recepción de correos no
deseados:
1. Entrar al portal se security.microsoft.com y a la opción [Reglas y directivas|
Directivas de amenazas| protección antispam] o bien mediante el vínculo:
https://security.microsoft.com/antispam
2. En la página Antispam, seleccionar la directiva denominada “Directiva de
entrada contra correo no deseado (Predeterminada)", haciendo clic en el
nombre.
3. En el control desplegable de detalles de directiva que se abre, configurar las
siguientes secciones:
• Editar umbral y propiedades de correo no deseado
• Editar acciones
• Editar remitentes y dominios permitidos y bloqueado
Centro Criptológico Nacional
48

![Imagen 1 - Página 48](CCN-STIC 885G_assets\pagina48_img1.png)

![Imagen 2 - Página 48](CCN-STIC 885G_assets\pagina48_img2.png)

![Imagen 3 - Página 48](CCN-STIC 885G_assets\pagina48_img3.png)

![Imagen 4 - Página 48](CCN-STIC 885G_assets\pagina48_img4.png)

![Imagen 5 - Página 48](CCN-STIC 885G_assets\pagina48_img5.png)

![Imagen 6 - Página 48](CCN-STIC 885G_assets\pagina48_img6.png)

---

<!-- Página 49 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Editar umbral y propiedades de correo no deseado
Recomendamos una configuración estricta para evitar que el correo no deseado
llegue a la bandeja de entrada de los empleados en la mayoría de las situaciones.
Nombre de la característica
Estándar Estricta
de seguridad
Umbral de correo
electrónico masivo &
propiedades de correo no
deseado
Umbral de correo 6 5
electrónico
masivo (BulkThreshold)
Correo no deseado en (On) (On)
masa (MarkAsSpamBulkMa
il)
Aumentar la configuración Desactivado ($false y En Desactivado ($false y En
de puntuación de correo no blanco) blanco)
deseado
Marcar como configuración Desactivado ($false y En Desactivado ($false y En
de correo no deseado blanco) blanco)
Contiene idiomas Ninguna Ninguna
específicos (EnableLanguag
eBlockList y LanguageBlock
List)
Centro Criptológico Nacional
49

|  | Nombre de la característica |  | Estándar |  |  | Estricta |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | de seguridad |  |  |  |  |  |  |  |
|  | Umbral de correo |  |  |  |  |  |  |  |
|  | electrónico masivo & |  |  |  |  |  |  |  |
|  | propiedades de correo no |  |  |  |  |  |  |  |
|  | deseado |  |  |  |  |  |  |  |
|  | Umbral de correo |  | 6 |  |  | 5 |  |  |
|  | electrónico |  |  |  |  |  |  |  |
|  | masivo (BulkThreshold) |  |  |  |  |  |  |  |
|  | Correo no deseado en |  | (On) |  |  | (On) |  |  |
|  | masa (MarkAsSpamBulkMa |  |  |  |  |  |  |  |
|  | il) |  |  |  |  |  |  |  |
|  | Aumentar la configuración |  | Desactivado ($false y En <br> blanco) |  |  | Desactivado ($false y En <br> blanco) |  |  |
|  | de puntuación de correo no |  |  |  |  |  |  |  |
|  | deseado |  |  |  |  |  |  |  |
|  | Marcar como configuración |  |  | Desactivado ($false y En |  |  | Desactivado ($false y En |  |
|  | de correo no deseado |  |  | blanco) |  |  | blanco) |  |
|  | Contiene idiomas |  | Ninguna | Ninguna |  | Ninguna | Ninguna |  |
|  | específicos (EnableLanguag |  |  |  |  |  |  |  |
|  | eBlockList y LanguageBlock |  |  |  |  |  |  |  |
|  | List) |  |  |  |  |  |  |  |


| Desactivado ($false y En |
| --- |
| blanco) |


| Desactivado ($false y En |
| --- |
| blanco) |


![Imagen 1 - Página 49](CCN-STIC 885G_assets\pagina49_img1.png)

![Imagen 2 - Página 49](CCN-STIC 885G_assets\pagina49_img2.png)

![Imagen 3 - Página 49](CCN-STIC 885G_assets\pagina49_img3.png)

![Imagen 4 - Página 49](CCN-STIC 885G_assets\pagina49_img4.png)

![Imagen 5 - Página 49](CCN-STIC 885G_assets\pagina49_img5.png)

![Imagen 6 - Página 49](CCN-STIC 885G_assets\pagina49_img6.png)

![Imagen 7 - Página 49](CCN-STIC 885G_assets\pagina49_img7.png)

---

<!-- Página 50 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Nombre de la característica
Estándar Estricta
de seguridad
De estos Desactivado ($false y En Desactivado ($false y En
países (EnableRegionBlockL blanco) blanco)
ist y RegionBlockList)
Modo de Desactivado ($false y En Desactivado ($false y En
prueba (TestModeAction) blanco) blanco)
Editar acciones
Se recomienda establecer la configuración estricta de parámetros:
Nombre de la característica
Estándar Estricta
de seguridad
El nivel de cumplimiento
Mover el mensaje a la
masivo (BCL) cumplió o
carpeta de correo Mover mensaje de
superó la acción de
electrónico no cuarentena (Quarantine)
detección
deseado (MoveToJmf)
(BulkSpamAction)
Mover el mensaje a la
Acción de detección
carpeta de correo Mover mensaje de
de correo no
electrónico no cuarentena (Quarantine)
deseado (SpamAction)
deseado (MoveToJmf)
Conservar el correo no
deseado en
cuarentena durante 15 días 30 días
estos días
QuarantineRetentionPeriod
* Donde quiera que seleccione mensaje de cuarentena, hay disponible un cuadro
Seleccionar directiva de cuarentena. Las directivas de cuarentena definen lo que
los usuarios pueden hacer en los mensajes en cuarentena.
Centro Criptológico Nacional
50

|  | Nombre de la característica |  | Estándar | Estricta |
| --- | --- | --- | --- | --- |
|  | de seguridad |  |  |  |
|  | De estos |  | Desactivado ($false y En <br> blanco) | Desactivado ($false y En <br> blanco) |
|  | países (EnableRegionBlockL |  |  |  |
|  | ist y RegionBlockList) |  |  |  |
|  | Modo de |  | Desactivado ($false y En <br> blanco) | Desactivado ($false y En <br> blanco) |
|  | prueba (TestModeAction) |  |  |  |


| Desactivado ($false y En |
| --- |
| blanco) |


| Desactivado ($false y En |
| --- |
| blanco) |


| Desactivado ($false y En |
| --- |
| blanco) |


| Desactivado ($false y En |
| --- |
| blanco) |


|  | Nombre de la característica |  | Estándar |  |  | Estricta |
| --- | --- | --- | --- | --- | --- | --- |
|  | de seguridad |  |  |  |  |  |
|  | El nivel de cumplimiento |  | Mover el mensaje a la <br> carpeta de correo <br> electrónico no <br> deseado (MoveToJmf) |  |  | Mover mensaje de <br> cuarentena (Quarantine) |
|  | masivo (BCL) cumplió o |  |  |  |  |  |
|  | superó la acción de |  |  |  |  |  |
|  | detección |  |  |  |  |  |
|  | (BulkSpamAction) |  |  |  |  |  |
| Acción de detección <br> de correo no <br> deseado (SpamAction) |  |  |  | Mover el mensaje a la |  | Mover mensaje de <br> cuarentena (Quarantine) |
|  |  |  |  | carpeta de correo |  |  |
|  |  |  |  | electrónico no |  |  |
|  |  |  |  | deseado (MoveToJmf) |  |  |
|  | Conservar el correo no |  | 15 días |  |  | 30 días |
|  | deseado en |  |  |  |  |  |
|  | cuarentena durante |  |  |  |  |  |
|  | estos días |  |  |  |  |  |
|  | QuarantineRetentionPeriod |  |  |  |  |  |


| Mover el mensaje a la |
| --- |
| carpeta de correo |
| electrónico no |
| deseado (MoveToJmf) |


| Mover mensaje de |
| --- |
| cuarentena (Quarantine) |


| Acción de detección |
| --- |
| de correo no |
| deseado (SpamAction) |


| Mover mensaje de |
| --- |
| cuarentena (Quarantine) |


![Imagen 1 - Página 50](CCN-STIC 885G_assets\pagina50_img1.png)

![Imagen 2 - Página 50](CCN-STIC 885G_assets\pagina50_img2.png)

![Imagen 3 - Página 50](CCN-STIC 885G_assets\pagina50_img3.png)

![Imagen 4 - Página 50](CCN-STIC 885G_assets\pagina50_img4.png)

![Imagen 5 - Página 50](CCN-STIC 885G_assets\pagina50_img5.png)

![Imagen 6 - Página 50](CCN-STIC 885G_assets\pagina50_img6.png)

---

<!-- Página 51 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Editar los remitentes y dominios permitidos y bloqueados
* No se recomienda agregar dominios a la lista de remitentes permitidos. Los
atacantes podrían enviar un correo electrónico desde eso dominios permitidos
que, de lo contrario, se filtraría. Se puede usar la información de inteligencia de
suplantación (spoof intelligence insight) en el portal de Microsoft 365 XDR para
identificar rápidamente a los remitentes falsificados que envían legítimamente
correo electrónico no autenticado (mensajes de dominios que no pasan las
comprobaciones de SPF, DKIM o DMARC) y permitir manualmente esos remitentes.
Del mismo modo, se pueden revisar los remitentes falsificados que fueron
permitidos por la “inteligencia de suplantación” y bloquear manualmente a esos
remitentes desde “spoof intelligence insight”:
https://security.microsoft.com/tenantAllowBlockList?viewid=SpoofItem
Más información en la documentación de Microsoft:
https://docs.microsoft.com/es-es/microsoft-365/security/office-365-
security/learn-about-spoof-intelligence?view=o365-worldwide
Al pulsar sobre el enlace aparecen las distintas opciones de configuración. Se
recomienda revisar o editar los remitentes y los dominios permitidos.
Centro Criptológico Nacional
51

![Imagen 1 - Página 51](CCN-STIC 885G_assets\pagina51_img1.png)

![Imagen 2 - Página 51](CCN-STIC 885G_assets\pagina51_img2.png)

![Imagen 3 - Página 51](CCN-STIC 885G_assets\pagina51_img3.png)

![Imagen 4 - Página 51](CCN-STIC 885G_assets\pagina51_img4.png)

![Imagen 5 - Página 51](CCN-STIC 885G_assets\pagina51_img5.png)

![Imagen 6 - Página 51](CCN-STIC 885G_assets\pagina51_img6.png)

![Imagen 7 - Página 51](CCN-STIC 885G_assets\pagina51_img7.png)

---

<!-- Página 52 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
PROTECCIÓN DE ADJUNTOS SEGUROS (SAFE ATTACHMENTS) EN MICROSOFT
DEFENDER PARAOFFICE 365
Datos adjuntos seguros en Microsoft Defender para Office 365 proporciona una
capa adicional de protección para los datos adjuntos de correo electrónico que ya han
sido examinados por la protección contra malware en Exchange Online Protection
(EOP). En concreto, Los datos adjuntos seguros usan un entorno virtual para
comprobar los datos adjuntos en los mensajes de correo electrónico antes de que se
entreguen a los destinatarios (un proceso conocido como detonación).
La protección de datos adjuntos seguros para mensajes de correo electrónico se
controla mediante directivas de datos adjuntos seguros. Aunque no hay ninguna
directiva de datos adjuntos seguros predeterminada, la directiva de seguridad
preestablecida de protección integrada proporciona protección de datos adjuntos
seguros a todos los destinatarios (usuarios que no están definidos en las directivas de
seguridad preestablecidas estándar o estricta o en directivas de datos adjuntos
seguros personalizadas).
Para configurar la protección de datos adjuntos seguros pueden seguirse los
siguientes pasos:
1. Entrar al portal se security.microsoft.com y a la opción [Reglas y directivas|
Directivas de amenazas| Datos adjuntos seguros] o bien mediante el vínculo:
https://security.microsoft.com/safeattachmentv2
2. En la página “Datos adjuntos seguros”, hacer clic en “Configuración global” y, a
continuación, configurar las siguientes opciones en el menú desplegable que
aparece:
Centro Criptológico Nacional
52

| Datos adjuntos seguros en Microsoft Defender para Office 365 proporciona una |
| --- |
| capa adicional de protección para los datos adjuntos de correo electrónico que ya han |
| sido examinados por la protección contra malware en Exchange Online Protection |
| (EOP). En concreto, Los datos adjuntos seguros usan un entorno virtual para |
| comprobar los datos adjuntos en los mensajes de correo electrónico antes de que se |
| entreguen a los destinatarios (un proceso conocido como detonación). |
| La protección de datos adjuntos seguros para mensajes de correo electrónico se |
| controla mediante directivas de datos adjuntos seguros. Aunque no hay ninguna |
| directiva de datos adjuntos seguros predeterminada, la directiva de seguridad |
| preestablecida de protección integrada proporciona protección de datos adjuntos |
| seguros a todos los destinatarios (usuarios que no están definidos en las directivas de |
| seguridad preestablecidas estándar o estricta o en directivas de datos adjuntos |
| seguros personalizadas). |


![Imagen 1 - Página 52](CCN-STIC 885G_assets\pagina52_img1.png)

![Imagen 2 - Página 52](CCN-STIC 885G_assets\pagina52_img2.png)

![Imagen 3 - Página 52](CCN-STIC 885G_assets\pagina52_img3.png)

![Imagen 4 - Página 52](CCN-STIC 885G_assets\pagina52_img4.png)

![Imagen 5 - Página 52](CCN-STIC 885G_assets\pagina52_img5.png)

![Imagen 6 - Página 52](CCN-STIC 885G_assets\pagina52_img6.png)

---

<!-- Página 53 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Se usará esta configuración para proteger a la organización del contenido
malintencionado que haya en los datos adjuntos de correo electrónico y en los
archivos de SharePoint, OneDrive y Microsoft Teams.
A continuación, se muestran los dos controles que se deben activar:
Activar Microsoft Defender para Office 365 para SharePoint, OneDrive y
Microsoft Teams
“Adjuntos Seguros” para SharePoint, OneDrive y Microsoft Teams en Microsoft
Defender para Office 365 proporcionan una capa adicional de protección para los
archivos que ya han sido examinados asincrónicamente por el motor de detección
de virus común en Microsoft 365. “Adjuntos Seguros” ayuda a detectar y bloquear
archivos existentes que se identifican como malintencionados en sitios de grupo y
bibliotecas de documentos.
“Adjuntos Seguros” para SharePoint, OneDrive y Microsoft Teams no está
habilitado de forma predeterminada. Hay que activarlo mediante el siguiente
control deslizante:
Centro Criptológico Nacional
53

![Imagen 1 - Página 53](CCN-STIC 885G_assets\pagina53_img1.png)

![Imagen 2 - Página 53](CCN-STIC 885G_assets\pagina53_img2.png)

![Imagen 3 - Página 53](CCN-STIC 885G_assets\pagina53_img3.png)

![Imagen 4 - Página 53](CCN-STIC 885G_assets\pagina53_img4.png)

![Imagen 5 - Página 53](CCN-STIC 885G_assets\pagina53_img5.png)

![Imagen 6 - Página 53](CCN-STIC 885G_assets\pagina53_img6.png)

![Imagen 7 - Página 53](CCN-STIC 885G_assets\pagina53_img7.png)

---

<!-- Página 54 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Activar documentos seguros para los clientes de Office
* Solo disponible con una licencia de Microsoft 365 E5 o Seguridad de MS 365 E5.
3. En la página “Datos adjuntos seguros”, hacer clic en “Crear” y, a continuación,
configurar las siguientes opciones en el menú desplegable que aparece:
En esta sección se puede configurar lo siguiente:
• Filtros de destinatarios: condiciones y excepciones para identificar los
destinatarios internos a los que se aplica la directiva. Se requiere al menos una
condición. Donde están disponibles los siguientes filtros de destinatario para
condiciones y excepciones:
o Usuarios: uno o varios buzones de correo, usuarios de correo o
contactos de correo de la organización.
o Grupos:
o Miembros de los grupos de distribución especificados o grupos
de seguridad habilitados para correo (no se admiten grupos de
distribución dinámicos).
o Los Grupos de Microsoft 365 especificados.
o Dominios: uno o varios de los dominios aceptados
configurados en Microsoft 365. La dirección de correo
electrónico principal del destinatario está en el dominio
especificado.
Centro Criptológico Nacional
54

| o Miembros de los grupos de distribución especificados o grupos |
| --- |
| de seguridad habilitados para correo (no se admiten grupos de |
| distribución dinámicos). |
| o Los Grupos de Microsoft 365 especificados. |
| o Dominios: uno o varios de los dominios aceptados |
| configurados en Microsoft 365. La dirección de correo |
| electrónico principal del destinatario está en el dominio |
| especificado. |


![Imagen 1 - Página 54](CCN-STIC 885G_assets\pagina54_img1.png)

![Imagen 2 - Página 54](CCN-STIC 885G_assets\pagina54_img2.png)

![Imagen 3 - Página 54](CCN-STIC 885G_assets\pagina54_img3.png)

![Imagen 4 - Página 54](CCN-STIC 885G_assets\pagina54_img4.png)

![Imagen 5 - Página 54](CCN-STIC 885G_assets\pagina54_img5.png)

![Imagen 6 - Página 54](CCN-STIC 885G_assets\pagina54_img6.png)

![Imagen 7 - Página 54](CCN-STIC 885G_assets\pagina54_img7.png)

---

<!-- Página 55 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Existe la opción de usar una condición o una excepción solo una vez, pero
la condición o la excepción pueden contener varios valores:
o Varios valores de la misma condición o excepción usan lógica OR
(por ejemplo, <recipient1> o <recipient2>):
o Condiciones: si el destinatario coincide con cualquiera de los
valores especificados, se le aplica la directiva.
o Excepciones: si el destinatario coincide con cualquiera de los
valores especificados, la directiva no se aplica a ellos.
o Los distintos tipos de excepciones usan lógica OR (por
ejemplo, <recipient1> o <miembro de group1> o <miembro de
domain1>). Si el destinatario coincide con cualquiera de los
valores de excepción especificados, la directiva no se aplica a
ellos.
o Los distintos tipos de condiciones usan lógica AND. El
destinatario debe coincidir con todas las condiciones
especificadas para que la directiva se aplique a ellos. Por
ejemplo, configure una condición con los siguientes valores:
o Usuarios: “usuario”
o Grupos: “grupos
• Respuesta de malware desconocida de datos adjuntos seguros: esta
configuración controla la acción para el análisis de malware de datos adjuntos
seguros en los mensajes de correo electrónico.
* Para ampliar más información podemos consultar el siguiente enlace
https://learn.microsoft.com/es-es/defender-office-365/safe-attachments-
about?redirectSourcePath=%252fen-us%252farticle%252fSafe-attachments-in-
Office-365-6e13311e-92ae-495e-a619-56d770199170#safe-attachments-policy-
settings
PROTECCIÓN DE VÍNCULOS SEGUROS (SAFE LINKS)
En las organizaciones con Microsoft Defender para Office 365, el análisis de vínculos
seguros protege a la organización frente a vínculos malintencionados que se usan en
suplantación de identidad (phishing) y otros ataques. En concreto, vínculos seguros
proporciona el examen de direcciones URL y la reescritura de mensajes de correo
electrónico entrantes durante el flujo de correo, y la verificación de tiempo de clic de
direcciones URL y vínculos en mensajes de correo electrónico, Teams y aplicaciones
Office 365 compatibles. El análisis de vínculos seguros se produce además de la
protección contra correo no deseado y antimalware normal.
La protección de vínculos seguros mediante directivas de vínculos seguros está
disponible en las siguientes ubicaciones:
• Email mensajes: Protección de vínculos seguros para vínculos en mensajes de
correo electrónico.
Centro Criptológico Nacional
55

| Existe la opción de usar una condición o una excepción solo una vez, pero |
| --- |
| la condición o la excepción pueden contener varios valores: |


|  | o Varios valores de la misma condición o excepción usan lógica OR |  |
| --- | --- | --- |
|  | (por ejemplo, <recipient1> o <recipient2>): |  |
|  |  | o Condiciones: si el destinatario coincide con cualquiera de los |
|  |  | valores especificados, se le aplica la directiva. |
|  |  | o Excepciones: si el destinatario coincide con cualquiera de los |
|  |  | valores especificados, la directiva no se aplica a ellos. |
|  | o Los distintos tipos de excepciones usan lógica OR (por |  |
|  | ejemplo, <recipient1> o <miembro de group1> o <miembro de |  |
|  | domain1>). Si el destinatario coincide con cualquiera de los |  |
|  | valores de excepción especificados, la directiva no se aplica a |  |
|  | ellos. |  |
|  | o Los distintos tipos de condiciones usan lógica AND. El |  |
|  | destinatario debe coincidir con todas las condiciones |  |
|  | especificadas para que la directiva se aplique a ellos. Por |  |
|  | ejemplo, configure una condición con los siguientes valores: |  |
|  | o Usuarios: “usuario” |  |
|  | o Grupos: “grupos |  |
| • Respuesta de malware desconocida de datos adjuntos seguros: esta |  |  |
| configuración controla la acción para el análisis de malware de datos adjuntos |  |  |
| seguros en los mensajes de correo electrónico. |  |  |


| • Email mensajes: Protección de vínculos seguros para vínculos en mensajes de |
| --- |
| correo electrónico. |


![Imagen 1 - Página 55](CCN-STIC 885G_assets\pagina55_img1.png)

![Imagen 2 - Página 55](CCN-STIC 885G_assets\pagina55_img2.png)

![Imagen 3 - Página 55](CCN-STIC 885G_assets\pagina55_img3.png)

![Imagen 4 - Página 55](CCN-STIC 885G_assets\pagina55_img4.png)

![Imagen 5 - Página 55](CCN-STIC 885G_assets\pagina55_img5.png)

---

<!-- Página 56 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
• Microsoft Teams: Protección de vínculos seguros para vínculos en
conversaciones de Teams, chats de grupo o desde canales.
• Aplicaciones de Office: Protección de vínculos seguros para aplicaciones web,
móviles y de escritorio de Office compatibles.
Para configurar la protección de vínculos seguros pueden seguirse los siguientes
pasos:
1. Entrar al portal se security.microsoft.com y a la opción [Reglas y directivas|
Directivas de amenazas| Vínculos seguros] o bien mediante el vínculo:
https://security.microsoft.com/safelinksv2
2. En la página “Vínculos seguros”, hacer clic en “Crear” y, a continuación,
configurar las siguientes opciones en el menú desplegable que aparece:
• En la página se asigna un nombre a la directiva, configure estas opciones:
o Nombre: Identificar un nombre único y descriptivo para la directiva.
o Descripción: Descripción opcional para la directiva.
• En la página Usuarios y dominios, identificar los destinatarios internos a los
que se aplica la directiva (condiciones de destinatario):
o Usuarios: los buzones de correo, los usuarios de correo o los contactos
de correo especificados.
o Grupos:
o Miembros de los grupos de distribución especificados (incluidos
los grupos de seguridad no habilitados para correo dentro de los
grupos de distribución) o grupos de seguridad habilitados para
correo (no se admiten grupos de distribución dinámicos).
o Los Grupos de Microsoft 365 especificados.
Centro Criptológico Nacional
56

| • Microsoft Teams: Protección de vínculos seguros para vínculos en |
| --- |
| conversaciones de Teams, chats de grupo o desde canales. |
| • Aplicaciones de Office: Protección de vínculos seguros para aplicaciones web, |
| móviles y de escritorio de Office compatibles. |


| • En la página Usuarios y dominios, identificar los destinatarios internos a los |
| --- |
| que se aplica la directiva (condiciones de destinatario): |


| o Miembros de los grupos de distribución especificados (incluidos |
| --- |
| los grupos de seguridad no habilitados para correo dentro de los |
| grupos de distribución) o grupos de seguridad habilitados para |
| correo (no se admiten grupos de distribución dinámicos). |
| o Los Grupos de Microsoft 365 especificados. |


![Imagen 1 - Página 56](CCN-STIC 885G_assets\pagina56_img1.png)

![Imagen 2 - Página 56](CCN-STIC 885G_assets\pagina56_img2.png)

![Imagen 3 - Página 56](CCN-STIC 885G_assets\pagina56_img3.png)

![Imagen 4 - Página 56](CCN-STIC 885G_assets\pagina56_img4.png)

![Imagen 5 - Página 56](CCN-STIC 885G_assets\pagina56_img5.png)

![Imagen 6 - Página 56](CCN-STIC 885G_assets\pagina56_img6.jpeg)

![Imagen 7 - Página 56](CCN-STIC 885G_assets\pagina56_img7.png)

---

<!-- Página 57 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
o Dominios: todos los destinatarios de la organización con una dirección
de correo electrónico principal en el dominio aceptado especificado.
• En la página Url & haga clic en Configuración de protección, configure las
siguientes opciones:
o Email sección:
o Activado: vínculos seguros comprueba una lista de vínculos
conocidos y malintencionados cuando los usuarios hacen clic en
vínculos de correo electrónico. Las direcciones URL se vuelven a
escribir de forma predeterminada: se selecciona esta opción para
activar la protección de vínculos seguros para vínculos en
mensajes de correo electrónico (reescritura de direcciones URL y
protección de la hora de clic). Estas opciones tienen disponible
las siguientes configuraciones:
▪ Aplicar vínculos seguros a los mensajes de correo
electrónico enviados dentro de la organización
▪ Aplicar el examen de direcciones URL en tiempo real en
busca de vínculos sospechosos y vínculos que apunten a
archivos
▪ No vuelva a escribir direcciones URL, realice
comprobaciones solo a través de safeLinks API:
▪ No reescribir las siguientes direcciones URL en la sección
de correo electrónico
o Sección de Teams:
o Activado: vínculos seguros comprueba una lista de vínculos
conocidos y malintencionados cuando los usuarios hacen clic en
vínculos en Microsoft Teams. Las direcciones URL no se
reescriben.
o Office 365 sección aplicaciones:
o Activado: vínculos seguros comprueba una lista de vínculos
malintencionados conocidos cuando los usuarios hacen clic en
vínculos en aplicaciones de Microsoft Office. Las direcciones URL
no se reescriben
o Configuración de protección:
o Seguimiento de los clics del usuario: esta opción seleccionada
habilita los clics del usuario de seguimiento en las direcciones
URL. Tiene disponibles las siguientes características:
▪ Permitir que los usuarios hagan clic en la dirección URL
original
▪ Mostrar la personalización de marca de la organización
en las páginas de notificación y advertencia.
* Para ampliar información de la configuración de los vínculos seguros, podemos
consultar el siguiente enlace Recomendaciones de Microsoft para la configuración
de seguridad de EOP y Defender para Office 365 - Microsoft Defender for Office
365 | Microsoft Learn
Centro Criptológico Nacional
57

| • En la página Url & haga clic en Configuración de protección, configure las |
| --- |
| siguientes opciones: |


| o Activado: vínculos seguros comprueba una lista de vínculos |  |
| --- | --- |
| conocidos y malintencionados cuando los usuarios hacen clic en |  |
| vínculos de correo electrónico. Las direcciones URL se vuelven a |  |
| escribir de forma predeterminada: se selecciona esta opción para |  |
| activar la protección de vínculos seguros para vínculos en |  |
| mensajes de correo electrónico (reescritura de direcciones URL y |  |
| protección de la hora de clic). Estas opciones tienen disponible |  |
| las siguientes configuraciones: |  |
|  | ▪ Aplicar vínculos seguros a los mensajes de correo |
|  | electrónico enviados dentro de la organización |
|  | ▪ Aplicar el examen de direcciones URL en tiempo real en |
|  | busca de vínculos sospechosos y vínculos que apunten a |
|  | archivos |
|  | ▪ No vuelva a escribir direcciones URL, realice |
|  | comprobaciones solo a través de safeLinks API: |
|  | ▪ No reescribir las siguientes direcciones URL en la sección |
|  | de correo electrónico |


|  | o Activado: vínculos seguros comprueba una lista de vínculos |  |
| --- | --- | --- |
|  | conocidos y malintencionados cuando los usuarios hacen clic en |  |
|  | vínculos en Microsoft Teams. Las direcciones URL no se |  |
|  | reescriben. |  |
| o Office 365 sección aplicaciones: |  |  |
|  | o Activado: vínculos seguros comprueba una lista de vínculos |  |
|  | malintencionados conocidos cuando los usuarios hacen clic en |  |
|  | vínculos en aplicaciones de Microsoft Office. Las direcciones URL |  |
|  | no se reescriben |  |
| o Configuración de protección: |  |  |
|  | o Seguimiento de los clics del usuario: esta opción seleccionada |  |
|  | habilita los clics del usuario de seguimiento en las direcciones |  |
|  | URL. Tiene disponibles las siguientes características: |  |
|  |  | ▪ Permitir que los usuarios hagan clic en la dirección URL |
|  |  | original |
|  |  | ▪ Mostrar la personalización de marca de la organización |
|  |  | en las páginas de notificación y advertencia. |


![Imagen 1 - Página 57](CCN-STIC 885G_assets\pagina57_img1.png)

![Imagen 2 - Página 57](CCN-STIC 885G_assets\pagina57_img2.png)

![Imagen 3 - Página 57](CCN-STIC 885G_assets\pagina57_img3.png)

![Imagen 4 - Página 57](CCN-STIC 885G_assets\pagina57_img4.png)

![Imagen 5 - Página 57](CCN-STIC 885G_assets\pagina57_img5.png)

---

<!-- Página 58 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
2.1.2.2 GESTIÓN DE INCIDENTES
En este apartado se describen las funcionalidades y capacidades que ofrece el
servicio de Microsoft Defender para Office 365 respecto a los procedimientos de
clasificación y reporte de incidentes que pudieran tener un impacto en la seguridad de
la Organización.
Las capacidades mejoradas de investigación y respuesta de amenazas (Threat
investigation and response) de Microsoft Defender XDR ayudan al equipo de seguridad
a proteger a los usuarios de ataques a través de archivos, correos electrónicos. Desde
dicho portal se supervisan señales y datos de distintos orígenes: actividad de usuario,
autenticación, correo electrónico, equipos en peligro e incidentes de seguridad, que
permiten a los responsables tomar medidas de prevención y respuesta a ciberataques.
Al ser un portal unificado, la gestión de incidentes permite obtener información de
distintos orígenes del servicio: Microsoft Defender for Identity, Microsoft Defender for
Endpoint y Microsoft Defender para Office 365, etc. A través de una única entrada
unificada para la gestión.
Los incidentes se administran desde La investigación & respuesta > Incidentes &
alertas > incidentes en el inicio rápido del portal de Microsoft Defender.
Al seleccionar un nombre de incidente se muestra la página del incidente,
empezando por todo el historial de ataques del incidente, incluidos:
• Página de alertas dentro del incidente: el ámbito de las alertas relacionadas
con el incidente y su información en la misma pestaña.
• Gráfico: representación visual del ataque que conecta las distintas entidades
sospechosas que forman parte del ataque con las entidades de recursos que
componen los destinos del ataque, como usuarios, dispositivos, aplicaciones y
buzones de correo.
Centro Criptológico Nacional
58

| Al seleccionar un nombre de incidente se muestra la página del incidente, |
| --- |
| empezando por todo el historial de ataques del incidente, incluidos: |


![Imagen 1 - Página 58](CCN-STIC 885G_assets\pagina58_img1.png)

![Imagen 2 - Página 58](CCN-STIC 885G_assets\pagina58_img2.png)

![Imagen 3 - Página 58](CCN-STIC 885G_assets\pagina58_img3.png)

![Imagen 4 - Página 58](CCN-STIC 885G_assets\pagina58_img4.png)

![Imagen 5 - Página 58](CCN-STIC 885G_assets\pagina58_img5.png)

![Imagen 6 - Página 58](CCN-STIC 885G_assets\pagina58_img6.jpeg)

---

<!-- Página 59 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Un gráfico nos muestra el recurso y otros detalles de entidad directamente y
permite actuar sobre ellos con opciones de respuesta, como deshabilitar una cuenta,
eliminar un archivo o aislar un dispositivo.
La página del incidente consta de las siguientes pestañas:
• Historia de ataque: Mencionada anteriormente, esta pestaña incluye la escala
de tiempo del ataque, incluidas todas las alertas, entidades de recursos y
acciones de corrección realizadas.
• Alertas: Todas las alertas relacionadas con el incidente, sus orígenes e
información.
• Activos: Todos los recursos (entidades protegidas como dispositivos, usuarios,
buzones, aplicaciones y recursos en la nube) que se han identificado para
formar parte del incidente o estar relacionados con él.
• Investigaciones: Todas las investigaciones automatizadas desencadenadas por
las alertas del incidente, incluido el estado de las investigaciones y sus
resultados.
• Evidencia y respuesta: Todas las entidades sospechosas de las alertas del
incidente, que constituyen pruebas que respaldan la historia del ataque. Estas
entidades pueden incluir direcciones IP, archivos, procesos, direcciones URL,
claves y valores del Registro, etc.
• Resumen: Información general rápida de los recursos afectados asociados a las
alertas.
Centro Criptológico Nacional
59

| Un gráfico nos muestra el recurso y otros detalles de entidad directamente y |
| --- |
| permite actuar sobre ellos con opciones de respuesta, como deshabilitar una cuenta, |
| eliminar un archivo o aislar un dispositivo. |
| La página del incidente consta de las siguientes pestañas: |


![Imagen 1 - Página 59](CCN-STIC 885G_assets\pagina59_img1.png)

![Imagen 2 - Página 59](CCN-STIC 885G_assets\pagina59_img2.png)

![Imagen 3 - Página 59](CCN-STIC 885G_assets\pagina59_img3.png)

![Imagen 4 - Página 59](CCN-STIC 885G_assets\pagina59_img4.png)

![Imagen 5 - Página 59](CCN-STIC 885G_assets\pagina59_img5.png)

![Imagen 6 - Página 59](CCN-STIC 885G_assets\pagina59_img6.jpeg)

---

<!-- Página 60 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Para seleccionar únicamente los relacionados con el ámbito de esta guía, se debe
aplicar un filtro especificando como origen del servicio: Microsoft Defender para Office
365.
Un ejemplo de una respuesta ante incidentes desde Microsoft Defender XDR, sería
el siguiente:
Otra herramienta eficaz para la gestión de incidentes relacionados con la
colaboración y el correo electrónico es el “Explorador de amenazas”.
Centro Criptológico Nacional
60

| Un ejemplo de una respuesta ante incidentes desde Microsoft Defender XDR, sería |
| --- |
| el siguiente: |


![Imagen 1 - Página 60](CCN-STIC 885G_assets\pagina60_img1.png)

![Imagen 2 - Página 60](CCN-STIC 885G_assets\pagina60_img2.png)

![Imagen 3 - Página 60](CCN-STIC 885G_assets\pagina60_img3.png)

![Imagen 4 - Página 60](CCN-STIC 885G_assets\pagina60_img4.png)

![Imagen 5 - Página 60](CCN-STIC 885G_assets\pagina60_img5.png)

![Imagen 6 - Página 60](CCN-STIC 885G_assets\pagina60_img6.png)

![Imagen 7 - Página 60](CCN-STIC 885G_assets\pagina60_img7.png)

---

<!-- Página 61 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Explorador de amenazas y detecciones en tiempo real
Explorador (también conocido como Explorador de amenazas) es otro punto de
partida del trabajo de investigación de cualquier analista de seguridad. Desde aquí se
pueden analizar amenazas, ver el volumen de ataques a lo largo del tiempo, analizar
datos por familias de amenazas, infraestructura de atacantes, etc.
Se accede desde el portal security.microsoft.com y a la opción [Colaboración y
correo electrónico| Explorador]:
En primera instancia, puede seleccionar que tipo de amenazas visualizar clasificadas
por All mail, Malware, Pish, Campaigns, Content Malware y URL clicks
Centro Criptológico Nacional
61

![Imagen 1 - Página 61](CCN-STIC 885G_assets\pagina61_img1.png)

![Imagen 2 - Página 61](CCN-STIC 885G_assets\pagina61_img2.png)

![Imagen 3 - Página 61](CCN-STIC 885G_assets\pagina61_img3.png)

![Imagen 4 - Página 61](CCN-STIC 885G_assets\pagina61_img4.png)

![Imagen 5 - Página 61](CCN-STIC 885G_assets\pagina61_img5.png)

![Imagen 6 - Página 61](CCN-STIC 885G_assets\pagina61_img6.png)

![Imagen 7 - Página 61](CCN-STIC 885G_assets\pagina61_img7.png)

---

<!-- Página 62 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Una vez seleccionado este primer filtro, aparecen una serie de campos que,
relacionados con la opción elegida, se puede filtrar aún más la información. Por
ejemplo, si se ha seleccionado [Malware] aparece una vista donde se muestra
información sobre el Top malware families, Email Orign, etc.
Otro ejemplo de filtrado de amenazas podría arrojar información sobre la dirección
URL de suplantación de identidad (phishing), permitiéndose hacer clic en datos de
veredicto.
Centro Criptológico Nacional
62

![Imagen 1 - Página 62](CCN-STIC 885G_assets\pagina62_img1.png)

![Imagen 2 - Página 62](CCN-STIC 885G_assets\pagina62_img2.png)

![Imagen 3 - Página 62](CCN-STIC 885G_assets\pagina62_img3.png)

![Imagen 4 - Página 62](CCN-STIC 885G_assets\pagina62_img4.png)

![Imagen 5 - Página 62](CCN-STIC 885G_assets\pagina62_img5.png)

![Imagen 6 - Página 62](CCN-STIC 885G_assets\pagina62_img6.png)

![Imagen 7 - Página 62](CCN-STIC 885G_assets\pagina62_img7.png)

---

<!-- Página 63 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
En las opciones que aparecen, seleccionar una o más opciones, como Bloqueado y
Bloquear invalidados y, a continuación, hacer clic en Actualizar (no actualizar la
ventana del explorador).
El informe se actualiza para mostrar las direcciones URL principales en los mensajes
de correo electrónico de suplantación de identidad por acción de entrega y ubicación.
Las tablas muestran los clics de dirección URL bloqueados o visitados a pesar de una
advertencia. Desde aquí, puede realizarse más análisis. Por ejemplo, debajo del gráfico
pueden verse las direcciones URL principales de los mensajes de correo electrónico
entregados o bloqueados en el entorno de la organización.
Centro Criptológico Nacional
63

![Imagen 1 - Página 63](CCN-STIC 885G_assets\pagina63_img1.png)

![Imagen 2 - Página 63](CCN-STIC 885G_assets\pagina63_img2.png)

![Imagen 3 - Página 63](CCN-STIC 885G_assets\pagina63_img3.png)

![Imagen 4 - Página 63](CCN-STIC 885G_assets\pagina63_img4.png)

![Imagen 5 - Página 63](CCN-STIC 885G_assets\pagina63_img5.png)

![Imagen 6 - Página 63](CCN-STIC 885G_assets\pagina63_img6.png)

![Imagen 7 - Página 63](CCN-STIC 885G_assets\pagina63_img7.png)

---

<!-- Página 64 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
2.1.3 MONITORIZACIÓN DEL SISTEMA
Integración con Microsoft Sentinel
Desde el punto de vista de la monitorización del sistema, se recomienda la
integración de Microsoft Defender para Office 365 con Azure Sentinel, que permita
transmitir eventos de búsqueda avanzada a Azure Sentinel, tal y como se describe en
la sección [1.3.1 Integración con Azure Sentinel].
Por otro lado, para ver los datos en los informes de protección contra amenazas, de
seguridad de correo electrónico y poder explotar la herramienta Explorador, se debe
activar el registro de auditoría (on).
* El registro de auditoría está disponible en suscripciones que incluyen Exchange
Online. Para más información sobre cómo activar el registro de auditoría, consultar
la guía [CCN-STIC-885A - Guía de configuración segura para Office 365].
2.1.3.1 VIGILANCIA
En esta sección se detallan aspectos relevantes de Microsoft Defender para Office
365 en cuanto a la vigilancia de los recursos.
Herramienta Analyzer
Configuration analyzer (Analizador de configuración), proporciona información del
estado del entorno de Microsoft Defender para Office 365, equiparándolo con las
medidas que se deben implementar de manera estándar o estricta. Para acceder esta
herramienta. Se debe entrar al portal se security.microsoft.com y a la opción [Reglas y
directivas| Directivas de amenazas|Configuration analyzer] o bien mediante el vínculo:
https://security.microsoft.com/configurationAnalyzer
Centro Criptológico Nacional
64

![Imagen 1 - Página 64](CCN-STIC 885G_assets\pagina64_img1.png)

![Imagen 2 - Página 64](CCN-STIC 885G_assets\pagina64_img2.png)

![Imagen 3 - Página 64](CCN-STIC 885G_assets\pagina64_img3.png)

![Imagen 4 - Página 64](CCN-STIC 885G_assets\pagina64_img4.png)

![Imagen 5 - Página 64](CCN-STIC 885G_assets\pagina64_img5.png)

![Imagen 6 - Página 64](CCN-STIC 885G_assets\pagina64_img6.png)

---

<!-- Página 65 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Una vez dentro del portal, muestra el estado actual de la configuración de la
organización en referencia a las medidas estándar o estrictas recomendadas, así como
un seguimiento de su implementación.
Campañas
En las organizaciones de Microsoft 365 con Microsoft Defender para Office 365 Plan
2, la característica campañas identifica y clasifica los ataques coordinados de correo
electrónico de phishing y malware.
Una campaña es un ataque coordinado por correo electrónico contra una o varias
organizaciones. Los ataques por correo electrónico que roban credenciales y datos de
la empresa son una industria grande y lucrativa. A medida que aumentan las
tecnologías para detener los ataques, los atacantes modifican sus métodos para
garantizar un éxito continuo.
Microsoft aplica las grandes cantidades de datos contra suplantación de identidad
(phishing), correo electrónico no deseado y software (phishing) y antimalware de todo
el servicio para identificar campañas. Analiza y clasifica la información del ataque en
función de varios factores:
• Origen del ataque: las direcciones IP de origen y los dominios de correo
electrónico del remitente.
• Propiedades del mensaje: el contenido, el estilo y el tono de los mensajes.
• Destinatarios del mensaje: cómo se relacionan los destinatarios. Por ejemplo,
los dominios de los destinatarios, las funciones de trabajo de los destinatarios
(administradores, ejecutivos, etc.), los tipos de empresas (grandes, pequeñas,
públicas, privadas, etc.) y los sectores.
• Carga de ataque: vínculos, archivos adjuntos u otras cargas maliciosas en los
mensajes
Centro Criptológico Nacional
65

![Imagen 1 - Página 65](CCN-STIC 885G_assets\pagina65_img1.png)

![Imagen 2 - Página 65](CCN-STIC 885G_assets\pagina65_img2.png)

![Imagen 3 - Página 65](CCN-STIC 885G_assets\pagina65_img3.png)

![Imagen 4 - Página 65](CCN-STIC 885G_assets\pagina65_img4.png)

![Imagen 5 - Página 65](CCN-STIC 885G_assets\pagina65_img5.png)

![Imagen 6 - Página 65](CCN-STIC 885G_assets\pagina65_img6.png)

---

<!-- Página 66 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Para acceder esta herramienta. Se debe entrar al portal se security.microsoft.com y
a la opción [Campañas]
2.2 MEDIDAS DE PROTECCIÓN
2.2.1 PROTECCIÓN DE LA INFORMACIÓN
Microsoft Defender XDR opera bajo Microsoft Azure y se ubica en los centros de
datos de la Unión Europea, el Reino Unido y los Estados Unidos. Los datos de cliente
recopilados por el servicio se almacenan en reposo en (a) la ubicación geográfica del
Tenant identificada durante el aprovisionamiento o, (b) si Microsoft Defender XDR usa
otro servicio en línea de Microsoft para procesar dichos datos, la geolocalización
definida por las reglas de almacenamiento de datos de ese otro servicio en línea.
Accediendo al portal de M365XDR en la opción [Configuración| Microsoft Defender
XDR]:
Centro Criptológico Nacional
66

![Imagen 1 - Página 66](CCN-STIC 885G_assets\pagina66_img1.png)

![Imagen 2 - Página 66](CCN-STIC 885G_assets\pagina66_img2.png)

![Imagen 3 - Página 66](CCN-STIC 885G_assets\pagina66_img3.png)

![Imagen 4 - Página 66](CCN-STIC 885G_assets\pagina66_img4.png)

![Imagen 5 - Página 66](CCN-STIC 885G_assets\pagina66_img5.png)

![Imagen 6 - Página 66](CCN-STIC 885G_assets\pagina66_img6.png)

![Imagen 7 - Página 66](CCN-STIC 885G_assets\pagina66_img7.png)

---

<!-- Página 67 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
En la sección “Cuenta” puede consultarse donde se almacenan los datos:
La información almacenada para Microsoft Defender XDR cumple las siguientes
características:
• No se puede cambiar la ubicación donde se almacenan los datos. Esto
proporciona una forma cómoda de minimizar el riesgo de cumplimiento
seleccionando activamente las ubicaciones geográficas donde residirán los
datos.
• De forma predeterminada, los datos se conservan durante 180 días; sin
embargo, se puede ampliarse puede especificar la directiva de retención de
datos para los datos.
• Microsoft aísla los datos mediante la autenticación de acceso y la segregación
lógica basada en el identificador del cliente. Cada cliente solo puede acceder a
los datos recopilados de su propia organización y a los datos genéricos que
Proporciona Microsoft.
• Los desarrolladores y administradores de Microsoft tienen, por diseño,
privilegios suficientes para llevar a cabo sus tareas asignadas para operar y
desarrollar el servicio. Microsoft implementa combinaciones de controles
preventivos, de detective y reactivos. Además, Microsoft lleva a cabo
comprobaciones en segundo plano de cierto personal de operaciones y limita el
acceso a aplicaciones, sistemas e infraestructura de red en proporción al nivel
de verificación en segundo plano. El personal de operaciones sigue un proceso
formal cuando se les exige tener acceso a la cuenta de un cliente o a la
información relacionada en el rendimiento de sus funciones.
Centro Criptológico Nacional
67

![Imagen 1 - Página 67](CCN-STIC 885G_assets\pagina67_img1.png)

![Imagen 2 - Página 67](CCN-STIC 885G_assets\pagina67_img2.png)

![Imagen 3 - Página 67](CCN-STIC 885G_assets\pagina67_img3.png)

![Imagen 4 - Página 67](CCN-STIC 885G_assets\pagina67_img4.png)

![Imagen 5 - Página 67](CCN-STIC 885G_assets\pagina67_img5.png)

![Imagen 6 - Página 67](CCN-STIC 885G_assets\pagina67_img6.png)

---

<!-- Página 68 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
La información relativa de Microsoft Defender para Office 365 depende del tipo de
licenciamiento:
Centro Criptológico Nacional
68

![Imagen 1 - Página 68](CCN-STIC 885G_assets\pagina68_img1.png)

![Imagen 2 - Página 68](CCN-STIC 885G_assets\pagina68_img2.png)

![Imagen 3 - Página 68](CCN-STIC 885G_assets\pagina68_img3.png)

![Imagen 4 - Página 68](CCN-STIC 885G_assets\pagina68_img4.png)

![Imagen 5 - Página 68](CCN-STIC 885G_assets\pagina68_img5.png)

![Imagen 6 - Página 68](CCN-STIC 885G_assets\pagina68_img6.png)

![Imagen 7 - Página 68](CCN-STIC 885G_assets\pagina68_img7.png)

---

<!-- Página 69 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
2.2.2 PROTECCIÓN DE LOS SERVICIOS
2.2.2.1 PROTECCIÓN FRENTE A LA DENEGACIÓN DE SERVICIO
Office 365 ofrece un sistema avanzado de detección de amenazas y sistemas de
mitigación para proteger la infraestructura subyacente de los ataques de denegación
de servicio (DoS) y prevenir la interrupción de servicio a los clientes.
El sistema de defensa DDoS de Azure está diseñado no solo para resistir ataques desde
el exterior, sino también desde otros Tenants de Azure. Los mecanismos de limitación
de peticiones de Exchange Online y SharePoint Online forman parte de un enfoque de
varias capas para defenderse contra ataques DoS.
Consultar la guía [CCN-STIC-884A - Guía de configuración segura para Azure] para
obtener más información sobre el sistema de defensa DDoS de Azure.
3. OTRAS CONSIDERACIONES DE SEGURIDAD
3.1 ENTRENAMIENTO DE SIMULACIÓN DE ATAQUE
Es una herramienta muy interesante, desde el punto de vista de la seguridad, al
permitir ejecutar escenarios de ataque realistas en la organización y así poder
identificar vulnerabilidades.
Están disponibles las simulaciones de los tipos de ataques habituales: cosecha de
credenciales, adjunto de malware, vínculos a malware, etc.
• Recolección de credenciales: un atacante envía al destinatario un mensaje que
contiene una dirección URL. Cuando el destinatario hace clic en la dirección
URL, se le traslada a un sitio web que normalmente muestra un cuadro de
diálogo que pide al usuario su nombre de usuario y contraseña. Normalmente,
Centro Criptológico Nacional
69

![Imagen 1 - Página 69](CCN-STIC 885G_assets\pagina69_img1.png)

![Imagen 2 - Página 69](CCN-STIC 885G_assets\pagina69_img2.png)

![Imagen 3 - Página 69](CCN-STIC 885G_assets\pagina69_img3.png)

![Imagen 4 - Página 69](CCN-STIC 885G_assets\pagina69_img4.png)

![Imagen 5 - Página 69](CCN-STIC 885G_assets\pagina69_img5.png)

![Imagen 6 - Página 69](CCN-STIC 885G_assets\pagina69_img6.jpeg)

---

<!-- Página 70 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
la página de destino tiene un formato que representa un sitio web conocido
para generar confianza en el usuario.
• Datos adjuntos de malware: un atacante envía al destinatario un mensaje que
contiene datos adjuntos. Cuando el destinatario abre los datos adjuntos, el
código arbitrario (por ejemplo, una macro) se ejecuta en el dispositivo del
usuario para ayudar al atacante a instalar código adicional o atrincherarse aún
más.
• Vínculo en datos adjuntos: se trata de un híbrido de una recolección de
credenciales. Un atacante envía al destinatario un mensaje que contiene una
dirección URL dentro de un archivo adjunto. Cuando el destinatario abre los
datos adjuntos y hace clic en la dirección URL, se le traslada a un sitio web que
normalmente muestra un cuadro de diálogo que pide al usuario su nombre de
usuario y contraseña. Normalmente, la página de destino tiene un formato que
representa un sitio web conocido para generar confianza en el usuario.
• Vínculo a malware: un atacante envía al destinatario un mensaje que contiene
un vínculo a un archivo adjunto en un sitio de uso compartido de archivos
conocido (por ejemplo, SharePoint Online o Dropbox). Cuando el destinatario
hace clic en la dirección URL, se abren los datos adjuntos y se ejecuta código
arbitrario (por ejemplo, una macro) en el dispositivo del usuario para ayudar al
atacante a instalar código adicional o reforzarse aún más.
• Drive-by-url: un atacante envía al destinatario un mensaje que contiene una
dirección URL. Cuando el destinatario hace clic en la dirección URL, se las
traslada a un sitio web que intenta ejecutar código en segundo plano. Este
código en segundo plano intenta recopilar información sobre el destinatario o
implementar código arbitrario en su dispositivo. Normalmente, el sitio web de
destino es un sitio web conocido que se ha visto comprometido o un clon de un
sitio web conocido. La familiaridad con el sitio web ayuda a convencer al
usuario de que el vínculo es seguro para hacer clic. Esta técnica también se
conoce como ataque de agujero de agua.
• Concesión de OAuth: un atacante crea un Aplicación de Azure malintencionado
que busca obtener acceso a los datos. La aplicación envía una solicitud de
correo electrónico que contiene una dirección URL. Cuando el destinatario hace
clic en la dirección URL, el mecanismo de concesión de consentimiento de la
aplicación solicita acceso a los datos (por ejemplo, la Bandeja de entrada del
usuario).
• Guía paso a paso: guía didáctica que contiene instrucciones para los usuarios
(por ejemplo, cómo informar de mensajes de phishing).
Centro Criptológico Nacional
70

![Imagen 1 - Página 70](CCN-STIC 885G_assets\pagina70_img1.png)

![Imagen 2 - Página 70](CCN-STIC 885G_assets\pagina70_img2.png)

![Imagen 3 - Página 70](CCN-STIC 885G_assets\pagina70_img3.png)

![Imagen 4 - Página 70](CCN-STIC 885G_assets\pagina70_img4.png)

![Imagen 5 - Página 70](CCN-STIC 885G_assets\pagina70_img5.png)

---

<!-- Página 71 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
3.1.1 CREAR UNA SIMULACIÓN DE ATAQUE
El aprendizaje de simulación de ataques en Microsoft Defender Office 365 permite
ejecutar simulaciones de ciberataque benignas en la organización. Estas simulaciones
prueban las directivas y prácticas de seguridad, así como capacitan a los empleados
para aumentar su concienciación y disminuir su susceptibilidad a los ataques.
En esta sección se explica cómo crear un ataque de suplantación de identidad
simulado mediante el entrenamiento de simulación de ataques.
1. En el portal Microsoft Defender XDR, seleccionar la opción [Colaboración y
correo electrónico| Entrenamiento de simulación de ataque].
https://security.microsoft.com/attacksimulator?viewid=simulations
2. En la pestaña “Simulaciones”, pulsar “Iniciar una Simulación”:
Centro Criptológico Nacional
71

![Imagen 1 - Página 71](CCN-STIC 885G_assets\pagina71_img1.png)

![Imagen 2 - Página 71](CCN-STIC 885G_assets\pagina71_img2.png)

![Imagen 3 - Página 71](CCN-STIC 885G_assets\pagina71_img3.png)

![Imagen 4 - Página 71](CCN-STIC 885G_assets\pagina71_img4.png)

![Imagen 5 - Página 71](CCN-STIC 885G_assets\pagina71_img5.png)

![Imagen 6 - Página 71](CCN-STIC 885G_assets\pagina71_img6.jpeg)

![Imagen 7 - Página 71](CCN-STIC 885G_assets\pagina71_img7.png)

---

<!-- Página 72 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
3. Se abrirá el Asistente para creación de simulación.
* Para el ejemplo se seleccionará Cosecha de credenciales (Credential Harvest).
4. Introducir un nombre y una descripción de la simulación:
Centro Criptológico Nacional
72

![Imagen 1 - Página 72](CCN-STIC 885G_assets\pagina72_img1.png)

![Imagen 2 - Página 72](CCN-STIC 885G_assets\pagina72_img2.png)

![Imagen 3 - Página 72](CCN-STIC 885G_assets\pagina72_img3.png)

![Imagen 4 - Página 72](CCN-STIC 885G_assets\pagina72_img4.png)

![Imagen 5 - Página 72](CCN-STIC 885G_assets\pagina72_img5.png)

![Imagen 6 - Página 72](CCN-STIC 885G_assets\pagina72_img6.png)

![Imagen 7 - Página 72](CCN-STIC 885G_assets\pagina72_img7.png)

---

<!-- Página 73 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
5. Seleccionar la carga (payload) para la simulación:
* Puede ordenarse por Idioma para ver las disponibles en español. Para el ejemplo se
seleccionará “Your password will expire soon”.
6. Seleccionar los usuarios de destino.
Agregar grupos y usuarios existentes o importar una lista de direcciones de correo
electrónico.
Centro Criptológico Nacional
73

![Imagen 1 - Página 73](CCN-STIC 885G_assets\pagina73_img1.png)

![Imagen 2 - Página 73](CCN-STIC 885G_assets\pagina73_img2.png)

![Imagen 3 - Página 73](CCN-STIC 885G_assets\pagina73_img3.png)

![Imagen 4 - Página 73](CCN-STIC 885G_assets\pagina73_img4.png)

![Imagen 5 - Página 73](CCN-STIC 885G_assets\pagina73_img5.png)

![Imagen 6 - Página 73](CCN-STIC 885G_assets\pagina73_img6.png)

![Imagen 7 - Página 73](CCN-STIC 885G_assets\pagina73_img7.png)

---

<!-- Página 74 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
7. Si fuese necesario, se excluyen los usuarios necesarios. Bien importando un csv
o excluyendo directamente a través de botón “add users to exclude”
8. Asignar entrenamiento.
Seleccionar las preferencias de entrenamiento, y la asignación.
9. Personalizar una página de aterrizaje para esta simulación, a través de las
plantillas que proporciona Microsoft o bien con una personalizada.
Centro Criptológico Nacional
74

![Imagen 1 - Página 74](CCN-STIC 885G_assets\pagina74_img1.png)

![Imagen 2 - Página 74](CCN-STIC 885G_assets\pagina74_img2.png)

![Imagen 3 - Página 74](CCN-STIC 885G_assets\pagina74_img3.png)

![Imagen 4 - Página 74](CCN-STIC 885G_assets\pagina74_img4.png)

![Imagen 5 - Página 74](CCN-STIC 885G_assets\pagina74_img5.png)

![Imagen 6 - Página 74](CCN-STIC 885G_assets\pagina74_img6.png)

![Imagen 7 - Página 74](CCN-STIC 885G_assets\pagina74_img7.png)

![Imagen 8 - Página 74](CCN-STIC 885G_assets\pagina74_img8.png)

---

<!-- Página 75 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
10. Seleccionar la notificación al usuario final. Al igual que en punto anterior es
posible personalizar la notificación, así como su idioma.
11. Configurar detalles del inicio.
Centro Criptológico Nacional
75

![Imagen 1 - Página 75](CCN-STIC 885G_assets\pagina75_img1.png)

![Imagen 2 - Página 75](CCN-STIC 885G_assets\pagina75_img2.png)

![Imagen 3 - Página 75](CCN-STIC 885G_assets\pagina75_img3.png)

![Imagen 4 - Página 75](CCN-STIC 885G_assets\pagina75_img4.png)

![Imagen 5 - Página 75](CCN-STIC 885G_assets\pagina75_img5.png)

![Imagen 6 - Página 75](CCN-STIC 885G_assets\pagina75_img6.png)

![Imagen 7 - Página 75](CCN-STIC 885G_assets\pagina75_img7.png)

---

<!-- Página 76 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
12. Revisar simulación.
Es conveniente enviar una prueba antes de lanzar a todos los usuarios.
Centro Criptológico Nacional
76

![Imagen 1 - Página 76](CCN-STIC 885G_assets\pagina76_img1.png)

![Imagen 2 - Página 76](CCN-STIC 885G_assets\pagina76_img2.png)

![Imagen 3 - Página 76](CCN-STIC 885G_assets\pagina76_img3.png)

![Imagen 4 - Página 76](CCN-STIC 885G_assets\pagina76_img4.png)

![Imagen 5 - Página 76](CCN-STIC 885G_assets\pagina76_img5.png)

![Imagen 6 - Página 76](CCN-STIC 885G_assets\pagina76_img6.png)

![Imagen 7 - Página 76](CCN-STIC 885G_assets\pagina76_img7.png)

---

<!-- Página 77 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Una vez comprobado, pulsar Enviar. Al finalizar el envío, aparecerá el siguiente
mensaje:
3.1.2 USUARIO AFECTADO POR LA SIMULACIÓN
Al usuario final objeto de la simulación, y poniendo como ejemplo la campaña
realizada en el apartado anterior, le llegaría un email del tipo:
Al pulsar en el enlace, se le deriva a una ventana de login para que introduzca sus
credenciales. Es una simulación parecida a la que utilizan los atacantes reales:
Centro Criptológico Nacional
77

![Imagen 1 - Página 77](CCN-STIC 885G_assets\pagina77_img1.png)

![Imagen 2 - Página 77](CCN-STIC 885G_assets\pagina77_img2.png)

![Imagen 3 - Página 77](CCN-STIC 885G_assets\pagina77_img3.png)

![Imagen 4 - Página 77](CCN-STIC 885G_assets\pagina77_img4.png)

![Imagen 5 - Página 77](CCN-STIC 885G_assets\pagina77_img5.png)

![Imagen 6 - Página 77](CCN-STIC 885G_assets\pagina77_img6.png)

![Imagen 7 - Página 77](CCN-STIC 885G_assets\pagina77_img7.png)

![Imagen 8 - Página 77](CCN-STIC 885G_assets\pagina77_img8.png)

---

<!-- Página 78 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Tras finalizar el proceso, se advierte al usuario de que ha podido ser objeto de una
suplantación de identidad:
Centro Criptológico Nacional
78

![Imagen 1 - Página 78](CCN-STIC 885G_assets\pagina78_img1.png)

![Imagen 2 - Página 78](CCN-STIC 885G_assets\pagina78_img2.png)

![Imagen 3 - Página 78](CCN-STIC 885G_assets\pagina78_img3.png)

![Imagen 4 - Página 78](CCN-STIC 885G_assets\pagina78_img4.png)

![Imagen 5 - Página 78](CCN-STIC 885G_assets\pagina78_img5.png)

![Imagen 6 - Página 78](CCN-STIC 885G_assets\pagina78_img6.png)

![Imagen 7 - Página 78](CCN-STIC 885G_assets\pagina78_img7.png)

---

<!-- Página 79 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
3.1.3 ENTRENAMIENTO PARA EL USUARIO AFECTADO POR LA SIMULACIÓN
Después de notificar al usuario que ha podido ser un objeto de suplantación de
identidad, se envía un correo electrónico para realizar un pequeño workshop de como
detectar ataques de suplantación de identidad.
Recibirá el siguiente correo:
Que dará lugar a un pequeño taller o workshop.
Centro Criptológico Nacional
79

![Imagen 1 - Página 79](CCN-STIC 885G_assets\pagina79_img1.png)

![Imagen 2 - Página 79](CCN-STIC 885G_assets\pagina79_img2.png)

![Imagen 3 - Página 79](CCN-STIC 885G_assets\pagina79_img3.png)

![Imagen 4 - Página 79](CCN-STIC 885G_assets\pagina79_img4.png)

![Imagen 5 - Página 79](CCN-STIC 885G_assets\pagina79_img5.png)

![Imagen 6 - Página 79](CCN-STIC 885G_assets\pagina79_img6.png)

![Imagen 7 - Página 79](CCN-STIC 885G_assets\pagina79_img7.png)

---

<!-- Página 80 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Donde se incluyen varias preguntas.
3.1.4 ANÁLISIS DE LA CAMPAÑA
Desde el portal de seguridad, en la opción [Colaboración y correo electrónico|
Entrenamiento de simulación de ataque], puede hacerse un seguimiento del resultado
de la campaña y analizar los resultados.
Al pulsar en la simulación, se mostrará un resumen del impacto en la organización:
Centro Criptológico Nacional
80

![Imagen 1 - Página 80](CCN-STIC 885G_assets\pagina80_img1.png)

![Imagen 2 - Página 80](CCN-STIC 885G_assets\pagina80_img2.png)

![Imagen 3 - Página 80](CCN-STIC 885G_assets\pagina80_img3.png)

![Imagen 4 - Página 80](CCN-STIC 885G_assets\pagina80_img4.png)

![Imagen 5 - Página 80](CCN-STIC 885G_assets\pagina80_img5.png)

![Imagen 6 - Página 80](CCN-STIC 885G_assets\pagina80_img6.jpeg)

![Imagen 7 - Página 80](CCN-STIC 885G_assets\pagina80_img7.png)

![Imagen 8 - Página 80](CCN-STIC 885G_assets\pagina80_img8.png)

---

<!-- Página 81 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Incluso obtenerse un informe de los usuarios afectados:
Centro Criptológico Nacional
81

![Imagen 1 - Página 81](CCN-STIC 885G_assets\pagina81_img1.png)

![Imagen 2 - Página 81](CCN-STIC 885G_assets\pagina81_img2.png)

![Imagen 3 - Página 81](CCN-STIC 885G_assets\pagina81_img3.png)

![Imagen 4 - Página 81](CCN-STIC 885G_assets\pagina81_img4.png)

![Imagen 5 - Página 81](CCN-STIC 885G_assets\pagina81_img5.png)

![Imagen 6 - Página 81](CCN-STIC 885G_assets\pagina81_img6.png)

---

<!-- Página 82 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
4. GLOSARIO Y ABREVIATURAS
A continuación de describen una serie de términos, acrónimos y abreviaturas en
materia de seguridad utilizados en esta guía:
Término Definición
AAD Azure Active Directory (Directorio Activo de Azure).
AD DS Active Directory Domain Services (Servicios de dominio de
Directorio Activo).
AIP Azure Information Protection.
AIR Automated Investigation and Response. Investigación y
respuesta automatizada ante incidentes.
Anti-phishing Medida que combate el phishing. El phishing es una técnica
muy utilizada por los ciberdelincuentes para engañar a los
usuarios y obtener información personal como contraseñas,
tarjetas de crédito, cuentas bancarias etc.
Anti-spam Medida que combate el spam. El spam es el correo electrónico
no solicitado que se envía a un gran número de destinatarios con
fines publicitarios o comerciales.
Anti- Medida que combate el spoofing. El spoofing consiste en
spoofing usurpar una identidad electrónica para ocultar la propia identidad
y así cometer delitos en Internet.
Entra ID Microsoft Entra ID
Centro de Portal de Administración de Office 365.
Administración
Accesible desde la url: admin.microsoft.com.
de Microsoft
365
CSC Centro de Seguridad y Cumplimiento de Office 365.
DDoS Distributed Denial of Service (Ataque de Denegación de Servicio
Distribuido), el cual se lleva a cabo generando un gran flujo de
información desde varios puntos de conexión hacia un mismo
punto de destino.
ENS Esquema Nacional de Seguridad.
Centro Criptológico Nacional
82

| Término | Definición |
| --- | --- |
| AAD | Azure Active Directory (Directorio Activo de Azure). |
| AD DS | Active Directory Domain Services (Servicios de dominio de <br> Directorio Activo). |
| AIP | Azure Information Protection. |
| AIR | Automated Investigation and Response. Investigación y <br> respuesta automatizada ante incidentes. |
| Anti-phishing | Medida que combate el phishing. El phishing es una técnica <br> muy utilizada por los ciberdelincuentes para engañar a los <br> usuarios y obtener información personal como contraseñas, <br> tarjetas de crédito, cuentas bancarias etc. |
| Anti-spam | Medida que combate el spam. El spam es el correo electrónico <br> no solicitado que se envía a un gran número de destinatarios con <br> fines publicitarios o comerciales. |
| Anti- <br> spoofing | Medida que combate el spoofing. El spoofing consiste en <br> usurpar una identidad electrónica para ocultar la propia identidad <br> y así cometer delitos en Internet. |
| Entra ID | Microsoft Entra ID |
| Centro de <br> Administración <br> de Microsoft <br> 365 | Portal de Administración de Office 365. <br> Accesible desde la url: admin.microsoft.com. |
| CSC | Centro de Seguridad y Cumplimiento de Office 365. |
| DDoS | Distributed Denial of Service (Ataque de Denegación de Servicio <br> Distribuido), el cual se lleva a cabo generando un gran flujo de <br> información desde varios puntos de conexión hacia un mismo <br> punto de destino. |
| ENS | Esquema Nacional de Seguridad. |


![Imagen 1 - Página 82](CCN-STIC 885G_assets\pagina82_img1.png)

![Imagen 2 - Página 82](CCN-STIC 885G_assets\pagina82_img2.png)

![Imagen 3 - Página 82](CCN-STIC 885G_assets\pagina82_img3.png)

![Imagen 4 - Página 82](CCN-STIC 885G_assets\pagina82_img4.png)

![Imagen 5 - Página 82](CCN-STIC 885G_assets\pagina82_img5.png)

---

<!-- Página 83 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
EOP Exchange Online Protection
Malware Malware o “software malicioso” es un término amplio que
describe cualquier programa o código malicioso que es dañino
para los sistemas.
MFA Multifactor Authentication (Autenticación Multifactor).
Sistema de seguridad que requiere más de una forma de
autenticarse, por ejemplo, a través de una app, sms, etc.
Microsoft Microsoft Intune es un servicio de administración de movilidad
Intune empresarial (EMM) basado en nube que ayuda a los empleados a
ser productivos mientras mantiene protegidos los datos
corporativos. Al igual que otros servicios de Azure, Microsoft
Intune está disponible en el portal de Azure. Intune permite:
-Administrar los dispositivos móviles y los equipos que los
empleados usan para tener acceso a datos de la empresa.
-Administrar las aplicaciones móviles que usa la plantilla.
-Proteger la información de la empresa al ayudar a
controlar la manera en que los empleados tienen acceso a ella
y la comparten.
-Garantizar que los dispositivos y las aplicaciones sean
compatibles con los requisitos de seguridad de la empresa
O365 Office 365.
Azure PowerShell (originalmente llamada Windows PowerShell) es
PowerShell una interfaz de consola (CLI) con posibilidad de escritura y unión
de comandos por medio de instrucciones (scripts).
PS PowerShell.
SaaS Software as a Service (Software como Servicio). Modelo de
distribución de software donde el soporte lógico y los datos que
maneja se alojan en servidores de una compañía de TIC, y se
accede vía internet.
Spoof Protección contra la suplantación de identidad en EOP.
intelligence
insight
Tenant Un tenant de Office 365 es un espacio reservado en la nube de
Microsoft desde el que tendremos acceso a los recursos y servicios
que Microsoft ofrece.
Centro Criptológico Nacional
83

| EOP | Exchange Online Protection |
| --- | --- |
| Malware | Malware o “software malicioso” es un término amplio que <br> describe cualquier programa o código malicioso que es dañino <br> para los sistemas. |
| MFA | Multifactor Authentication (Autenticación Multifactor). <br> Sistema de seguridad que requiere más de una forma de <br> autenticarse, por ejemplo, a través de una app, sms, etc. |
| Microsoft <br> Intune | Microsoft Intune es un servicio de administración de movilidad <br> empresarial (EMM) basado en nube que ayuda a los empleados a <br> ser productivos mientras mantiene protegidos los datos <br> corporativos. Al igual que otros servicios de Azure, Microsoft <br> Intune está disponible en el portal de Azure. Intune permite: <br> -Administrar los dispositivos móviles y los equipos que los <br> empleados usan para tener acceso a datos de la empresa. <br> -Administrar las aplicaciones móviles que usa la plantilla. <br> -Proteger la información de la empresa al ayudar a <br> controlar la manera en que los empleados tienen acceso a ella <br> y la comparten. <br> -Garantizar que los dispositivos y las aplicaciones sean <br> compatibles con los requisitos de seguridad de la empresa |
| O365 | Office 365. |
| Azure <br> PowerShell | PowerShell (originalmente llamada Windows PowerShell) es <br> una interfaz de consola (CLI) con posibilidad de escritura y unión <br> de comandos por medio de instrucciones (scripts). |
| PS | PowerShell. |
| SaaS | Software as a Service (Software como Servicio). Modelo de <br> distribución de software donde el soporte lógico y los datos que <br> maneja se alojan en servidores de una compañía de TIC, y se <br> accede vía internet. |
| Spoof <br> intelligence <br> insight | Protección contra la suplantación de identidad en EOP. |
| Tenant | Un tenant de Office 365 es un espacio reservado en la nube de <br> Microsoft desde el que tendremos acceso a los recursos y servicios <br> que Microsoft ofrece. |


![Imagen 1 - Página 83](CCN-STIC 885G_assets\pagina83_img1.png)

![Imagen 2 - Página 83](CCN-STIC 885G_assets\pagina83_img2.png)

![Imagen 3 - Página 83](CCN-STIC 885G_assets\pagina83_img3.png)

![Imagen 4 - Página 83](CCN-STIC 885G_assets\pagina83_img4.png)

![Imagen 5 - Página 83](CCN-STIC 885G_assets\pagina83_img5.png)

---

<!-- Página 84 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
TLS TLS (Seguridad de la capa de transporte) y SSL (antecesor de
TLS) son protocolos criptográficos que protegen la comunicación
por red con certificados de seguridad que cifran una conexión
entre equipos.
ZAP ZAP – zero hour auto purge. En Microsoft 365 organizaciones
con buzones en Exchange Online, la purga automática de hora
cero (ZAP) es una característica de protección de correo
electrónico que detecta y neutraliza de forma retroactiva
mensajes de phishing, correo no deseado o malware
malintencionados que ya se han entregado Exchange Online
buzones de correo.
XDR Solución que unifica múltiples productos de seguridad en una
sola plataforma para mejorar la detección, investigación y
respuesta a amenazas
Workshop Evento educativo y participativo diseñado para que los
asistentes aprendan y desarrollen habilidades específicas en un
área determinada
IA Es una rama de la informática que se enfoca en la creación de
sistemas y tecnologías capaces de realizar tareas que
normalmente requieren inteligencia humana
Defender IT
Microsoft Defender Threat Intelligence es una solución de
ciberseguridad que proporciona información detallada y
accionable sobre amenazas para ayudar a las organizaciones a
identificar, protegerse y responder a ataques cibernéticos
Workload Dentro de Microsoft Defender XDR son los diferentes tipos de
recursos y servicios que pueden ser protegidos por la solución.
Esto incluye dispositivos, identidades, aplicaciones, correo
electrónico, entornos de nube y aplicaciones SaaS, ofreciendo una
protección integral y unificada contra diversas amenazas y
vulnerabilidades en toda la infraestructura de TI de una
organización.
Centro Criptológico Nacional
84

| TLS | TLS (Seguridad de la capa de transporte) y SSL (antecesor de <br> TLS) son protocolos criptográficos que protegen la comunicación <br> por red con certificados de seguridad que cifran una conexión <br> entre equipos. |
| --- | --- |
| ZAP | ZAP – zero hour auto purge. En Microsoft 365 organizaciones <br> con buzones en Exchange Online, la purga automática de hora <br> cero (ZAP) es una característica de protección de correo <br> electrónico que detecta y neutraliza de forma retroactiva <br> mensajes de phishing, correo no deseado o malware <br> malintencionados que ya se han entregado Exchange Online <br> buzones de correo. |
| XDR | Solución que unifica múltiples productos de seguridad en una <br> sola plataforma para mejorar la detección, investigación y <br> respuesta a amenazas |
| Workshop | Evento educativo y participativo diseñado para que los <br> asistentes aprendan y desarrollen habilidades específicas en un <br> área determinada |
| IA | Es una rama de la informática que se enfoca en la creación de <br> sistemas y tecnologías capaces de realizar tareas que <br> normalmente requieren inteligencia humana |
| Defender IT | Microsoft Defender Threat Intelligence es una solución de <br> ciberseguridad que proporciona información detallada y <br> accionable sobre amenazas para ayudar a las organizaciones a <br> identificar, protegerse y responder a ataques cibernéticos |
| Workload | Dentro de Microsoft Defender XDR son los diferentes tipos de <br> recursos y servicios que pueden ser protegidos por la solución. <br> Esto incluye dispositivos, identidades, aplicaciones, correo <br> electrónico, entornos de nube y aplicaciones SaaS, ofreciendo una <br> protección integral y unificada contra diversas amenazas y <br> vulnerabilidades en toda la infraestructura de TI de una <br> organización. |


![Imagen 1 - Página 84](CCN-STIC 885G_assets\pagina84_img1.png)

![Imagen 2 - Página 84](CCN-STIC 885G_assets\pagina84_img2.png)

![Imagen 3 - Página 84](CCN-STIC 885G_assets\pagina84_img3.png)

![Imagen 4 - Página 84](CCN-STIC 885G_assets\pagina84_img4.png)

![Imagen 5 - Página 84](CCN-STIC 885G_assets\pagina84_img5.png)

---

<!-- Página 85 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
5. CUADRO RESUMEN DE MEDIDAS DE SEGURIDAD
Se facilita a continuación un cuadro resumen de configuraciones a aplicar para la protección del servicio, donde la organización podrá
valorar qué medidas de las propuestas se cumplen.
Control Configuracion Estado
ENS
op Marco Operacional
op.acc Control de Acceso
Op.acc.3 Segregación de funciones y tareas
Aplica: Cumple:
Se ha asignado adecuadamente los roles de administración y la asignación
de los usuarios a los grupos de seguridad (en función de los accesos que se
Si No Si No
quieran permitir).
Evidencias Recogidas: Observaciones:
Si No
Centro Criptológico Nacional
85

|  | Control |  | Configuracion | Estado |  |
| --- | --- | --- | --- | --- | --- |
|  | ENS |  |  |  |  |
| op |  |  | Marco Operacional |  |  |
| op.acc |  |  | Control de Acceso |  |  |
| Op.acc.3 |  |  | Segregación de funciones y tareas |  |  |
|  |  |  | Se ha asignado adecuadamente los roles de administración y la asignación <br> de los usuarios a los grupos de seguridad (en función de los accesos que se <br> quieran permitir). | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  |  |  | Evidencias Recogidas: <br> Si No | Observaciones: |


![Imagen 1 - Página 85](CCN-STIC 885G_assets\pagina85_img1.png)

![Imagen 2 - Página 85](CCN-STIC 885G_assets\pagina85_img2.png)

![Imagen 3 - Página 85](CCN-STIC 885G_assets\pagina85_img3.png)

![Imagen 4 - Página 85](CCN-STIC 885G_assets\pagina85_img4.png)

![Imagen 5 - Página 85](CCN-STIC 885G_assets\pagina85_img5.png)

![Imagen 6 - Página 85](CCN-STIC 885G_assets\pagina85_img6.png)

---

<!-- Página 86 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Op.acc.6 Mecanismo de autenticación (usuarios de la organización)
Aplica: Cumple:
Se encuentra habilitado el “doble factor de autenticación” y se dispone de
una adecuada política de gestión de credenciales.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Op.acc.6 Mecanismo de autenticación (usuarios de la organización)
Aplica: Cumple:
Se ha activado la Ubicación de red para permitir el acceso solo desde
determinadas direcciones IP. Y la limitación de acceso a los administradores.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
op.exp.6 Protección frente a código dañino
Aplica: Cumple:
Se ha habilitado el filtro de datos adjuntos comunes y añadido los tipos de
archivos correspondientes.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Centro Criptológico Nacional
86

| Op.acc.6 | Mecanismo de autenticación (usuarios de la organización) |  |  |
| --- | --- | --- | --- |
|  | Se encuentra habilitado el “doble factor de autenticación” y se dispone de <br> una adecuada política de gestión de credenciales. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| Op.acc.6 | Mecanismo de autenticación (usuarios de la organización) |  |  |
|  | Se ha activado la Ubicación de red para permitir el acceso solo desde <br> determinadas direcciones IP. Y la limitación de acceso a los administradores. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| op.exp.6 | Protección frente a código dañino |  |  |
|  | Se ha habilitado el filtro de datos adjuntos comunes y añadido los tipos de <br> archivos correspondientes. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |


![Imagen 1 - Página 86](CCN-STIC 885G_assets\pagina86_img1.png)

![Imagen 2 - Página 86](CCN-STIC 885G_assets\pagina86_img2.png)

![Imagen 3 - Página 86](CCN-STIC 885G_assets\pagina86_img3.png)

![Imagen 4 - Página 86](CCN-STIC 885G_assets\pagina86_img4.png)

![Imagen 5 - Página 86](CCN-STIC 885G_assets\pagina86_img5.png)

![Imagen 6 - Página 86](CCN-STIC 885G_assets\pagina86_img6.png)

---

<!-- Página 87 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
op.exp.6 Protección frente a código dañino
Aplica: Cumple:
Se ha activado la protección ZAP (Zero-hour auto purge).
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
op.exp.6 Protección frente a código dañino
Aplica: Cumple:
Se ha activado las notificaciones de malware a los administradores.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
op.exp.6 Protección frente a código dañino
Aplica: Cumple:
Se ha establecido adecuadamente un umbral de correo electrónico de
phishing y spam, así como el resto de las acciones descritas en la sección
Si No Si No
[3.1.2.1 Protección frente a código dañino].
Evidencias Recogidas: Observaciones:
Si No
Centro Criptológico Nacional
87

| op.exp.6 | Protección frente a código dañino |  |  |  |
| --- | --- | --- | --- | --- |
|  | Se ha activado la protección ZAP (Zero-hour auto purge). | Aplica: <br> Si No | Cumple: <br> Si No |  |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |  |
| op.exp.6 | Protección frente a código dañino |  |  |  |
|  | Se ha activado las notificaciones de malware a los administradores. | Aplica: <br> Si No | Cumple: <br> Si No |  |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |  |
| op.exp.6 | Protección frente a código dañino |  |  |  |
|  | Se ha establecido adecuadamente un umbral de correo electrónico de <br> phishing y spam, así como el resto de las acciones descritas en la sección <br> [3.1.2.1 Protección frente a código dañino]. | Aplica: <br> Si No | Cumple: <br> Si No |  |
|  |  |  |  | No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |  |


![Imagen 1 - Página 87](CCN-STIC 885G_assets\pagina87_img1.png)

![Imagen 2 - Página 87](CCN-STIC 885G_assets\pagina87_img2.png)

![Imagen 3 - Página 87](CCN-STIC 885G_assets\pagina87_img3.png)

![Imagen 4 - Página 87](CCN-STIC 885G_assets\pagina87_img4.png)

![Imagen 5 - Página 87](CCN-STIC 885G_assets\pagina87_img5.png)

![Imagen 6 - Página 87](CCN-STIC 885G_assets\pagina87_img6.png)

---

<!-- Página 88 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
op.mon Monitorización del sistema
Aplica: Cumple:
Se ha activado el registro de auditoría (on) para ver los datos en los
informes de protección contra amenazas, de seguridad de correo electrónico
Si No Si No
y poder explotar la herramienta Explorador
Evidencias Recogidas: Observaciones:
Si No
op.vig Vigilancia
Aplica: Cumple:
Se ha revisado la configuración actual, con los planes estrictos o estandar que nos ofrece
Microsoft para seguir sus buenas prácticas
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Otras Crear simulacion de ataque
Aplica: Cumple:
Se ha generado al menos una campaña de simulación de ataque para ver
el nivel de adopción que existe en la organización frente ataques de
Si No Si No
phishing.
Evidencias Recogidas: Observaciones:
Si No
Centro Criptológico Nacional
88

| op.mon | Monitorización del sistema |  |  |
| --- | --- | --- | --- |
|  | Se ha activado el registro de auditoría (on) para ver los datos en los <br> informes de protección contra amenazas, de seguridad de correo electrónico <br> y poder explotar la herramienta Explorador | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| op.vig | Vigilancia |  |  |
|  | Se ha revisado la configuración actual, con los planes estrictos o estandar que nos ofrece <br> Microsoft para seguir sus buenas prácticas | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| Otras | Crear simulacion de ataque |  |  |
|  | Se ha generado al menos una campaña de simulación de ataque para ver <br> el nivel de adopción que existe en la organización frente ataques de <br> phishing. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |


![Imagen 1 - Página 88](CCN-STIC 885G_assets\pagina88_img1.png)

![Imagen 2 - Página 88](CCN-STIC 885G_assets\pagina88_img2.png)

![Imagen 3 - Página 88](CCN-STIC 885G_assets\pagina88_img3.png)

![Imagen 4 - Página 88](CCN-STIC 885G_assets\pagina88_img4.png)

![Imagen 5 - Página 88](CCN-STIC 885G_assets\pagina88_img5.png)

![Imagen 6 - Página 88](CCN-STIC 885G_assets\pagina88_img6.png)

---

<!-- Página 89 de 89 -->

CCN-STIC-885G Guía de configuración segura para Microsoft Defender para Office 365
Centro Criptológico Nacional
89

![Imagen 1 - Página 89](CCN-STIC 885G_assets\pagina89_img1.png)

![Imagen 2 - Página 89](CCN-STIC 885G_assets\pagina89_img2.png)

![Imagen 3 - Página 89](CCN-STIC 885G_assets\pagina89_img3.png)

![Imagen 4 - Página 89](CCN-STIC 885G_assets\pagina89_img4.png)

![Imagen 5 - Página 89](CCN-STIC 885G_assets\pagina89_img5.png)

![Imagen 6 - Página 89](CCN-STIC 885G_assets\pagina89_img6.png)

![Imagen 7 - Página 89](CCN-STIC 885G_assets\pagina89_img7.png)