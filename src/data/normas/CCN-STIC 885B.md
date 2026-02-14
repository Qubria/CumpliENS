---
**Author:** CCN
**CreationDate:** D:20240723130831+02'00'
**Creator:** Microsoft® Word 2021
**ModDate:** D:20240723130831+02'00'
**Producer:** Microsoft® Word 2021
---

<!-- Página 1 de 63 -->

Guía de Seguridad de las TIC
CCN-STIC 885B
Guía de configuración segura para SharePoint Online
JUNIO 2024

![Imagen 1 - Página 1](CCN-STIC 885B_assets\pagina1_img1.png)

![Imagen 2 - Página 1](CCN-STIC 885B_assets\pagina1_img2.jpeg)

![Imagen 3 - Página 1](CCN-STIC 885B_assets\pagina1_img3.jpeg)

---

<!-- Página 2 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Catálogo de Publicaciones de la Administración General del Estado s
https://cpage.mpr.gob.es e
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
Edita:
c
Pº de la Castellana 109, 28046 Madrid
© Centro Criptológico Nacional, 2024
NIPO: 083-24-248-9
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
Centro Crip tológico Nacional 2

![Imagen 1 - Página 2](CCN-STIC 885B_assets\pagina2_img1.png)

![Imagen 2 - Página 2](CCN-STIC 885B_assets\pagina2_img2.png)

![Imagen 3 - Página 2](CCN-STIC 885B_assets\pagina2_img3.png)

![Imagen 4 - Página 2](CCN-STIC 885B_assets\pagina2_img4.png)

![Imagen 5 - Página 2](CCN-STIC 885B_assets\pagina2_img5.png)

![Imagen 6 - Página 2](CCN-STIC 885B_assets\pagina2_img6.jpeg)

![Imagen 7 - Página 2](CCN-STIC 885B_assets\pagina2_img7.png)

![Imagen 8 - Página 2](CCN-STIC 885B_assets\pagina2_img8.png)

---

<!-- Página 3 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
ÍNDICE
1. SHAREPOINT ONLINE ........................................................................................... 4
1.1 DESCRIPCIÓN DEL USO DE ESTA GUÍA ..................................................................... 4
1.2 DEFINICIÓN DEL SERVICIO ........................................................................................ 4
1.3 PRERREQUISITOS PARA EL DESPLIEGUE MEDIANTE POWERSHELL ......................... 6
2. DESPLIEGUE DE SHAREPOINT ONLINE ................................................................... 6
2.1 ADMINISTRADOR – CONFIGURACIÓN INICIAL ......................................................... 6
2.2 USUARIO FINAL – PRIMEROS PASOS ........................................................................ 9
2.2.1 CREAR UN SITIO ................................................................................................. 10
3. CONFIGURACIÓN DE SHAREPOINT ONLINE ......................................................... 17
3.1 MARCO OPERACIONAL ........................................................................................... 17
3.1.1 CONTROL DE ACCESO ........................................................................................ 17
3.1.2 EXPLOTACIÓN .................................................................................................... 27
3.1.3 MONITORIZACIÓN DEL SISTEMA ....................................................................... 29
3.2 MEDIDAS DE PROTECCIÓN ..................................................................................... 29
3.2.1 PROTECCIÓN DE LAS COMUNICACIONES .......................................................... 29
3.2.2 PROTECCIÓN DE LA INFORMACIÓN .................................................................. 30
3.2.3 PROTECCIÓN DE LOS SERVICIOS ....................................................................... 37
4. SCRIPTS DE CONFIGURACIÓN ............................................................................. 38
5. OTRAS CONSIDERACIONES DE SEGURIDAD ......................................................... 39
5.1 CONTROL DE VERSIONES ....................................................................................... 39
5.2 PAPELERA DE RECICLAJE ........................................................................................ 41
5.3 DIRECTIVAS DE USO COMPARTIDO ........................................................................ 43
5.4 BLOQUEAR LA INTEGRACIÓN CON YAMMER ........................................................ 45
6. GLOSARIO Y ABREVIATURAS .............................................................................. 46
7. CUADRO RESUMEN DE MEDIDAS DE SEGURIDAD ............................................... 47
Centro Crip tológico Nacional 3

![Imagen 1 - Página 3](CCN-STIC 885B_assets\pagina3_img1.png)

![Imagen 2 - Página 3](CCN-STIC 885B_assets\pagina3_img2.png)

![Imagen 3 - Página 3](CCN-STIC 885B_assets\pagina3_img3.png)

![Imagen 4 - Página 3](CCN-STIC 885B_assets\pagina3_img4.png)

![Imagen 5 - Página 3](CCN-STIC 885B_assets\pagina3_img5.png)

---

<!-- Página 4 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
1. SHAREPOINT ONLINE
1.1 DESCRIPCIÓN DEL USO DE ESTA GUÍA
El objetivo de la presente guía es indicar los pasos a seguir para la configuración del
servicio SharePoint Online cumpliendo con los requisitos necesarios del Esquema
Nacional de Seguridad en su categoría ALTA.
Esta guía debe usarse en conjunto con “CCN-STIC-885A - Guía de configuración
segura para Office 365”, donde se describen generalidades de Microsoft 365 y
características comunes a todos los servicios, así como un glosario con los términos y
abreviaturas de seguridad utilizadas en estas guías.
Para la confección de esta guía se han consultado las siguientes fuentes:
- Documentación oficial de Microsoft.
- CCN-STIC-823 Servicios en la Nube.
- CCN-STIC-884A - Guía de configuración segura para Azure.
- CCN-STIC-885A - Guía de configuración segura para Office 365.
- ENS Real Decreto BOE-A-2022-7191.
1.2 DEFINICIÓN DEL SERVICIO
SharePoint Online (SPO) es un servicio basado en la nube que ayuda a las
organizaciones a compartir y administrar contenidos, conocimiento y aplicaciones para
habilitar el trabajo en equipo y buscar información de manera eficaz. Se encuentra
enmarcado dentro de Microsoft 365, conjunto de aplicaciones y servicios basados en la
nube alojados en servidores propiedad de Microsoft y disponibles desde dispositivos
con conexión a Internet. Hay que destacar también que Microsoft 365 funciona sobre
Microsoft Azure.
Las principales características de SharePoint Online son:
• Compartición sencilla y colaboración continua.
Proporcionar a los contactos un lugar donde organizarse y colaborar en el
contenido, los datos y noticias para que estén en sintonía.
• Informar y poner en contacto a la organización.
Compartir recursos y aplicaciones comunes y difundir mensajes con páginas
dinámicas y enriquecidas.
• Inteligencia.
Búsqueda empresarial potente de archivos, sitios y contactos.
Centro Crip tológico Nacional 4

|  |  | e encuentra |
| --- | --- | --- |
| enmarcado dentro de | , conjunto de aplicaciones y servicios basados en la |  |
| nube alojados en servidores propiedad de Microsoft y disponibles desde dispositivos |  |  |
| con conexión a Internet. Hay que destacar también que Microsoft 365 funciona sobre |  |  |
| Microsoft Azure. |  |  |


![Imagen 1 - Página 4](CCN-STIC 885B_assets\pagina4_img1.png)

![Imagen 2 - Página 4](CCN-STIC 885B_assets\pagina4_img2.png)

![Imagen 3 - Página 4](CCN-STIC 885B_assets\pagina4_img3.png)

![Imagen 4 - Página 4](CCN-STIC 885B_assets\pagina4_img4.png)

![Imagen 5 - Página 4](CCN-STIC 885B_assets\pagina4_img5.png)

---

<!-- Página 5 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
SharePoint Online incluye:
Almacenamiento de
OneDrive proporciona espacio de almacenamiento
archivos personal en la nube.
Uso compartido
Compartir archivos y contenido de forma segura con los
externo contactos de dentro y fuera de la organización.
Organizar y administrar contenido en bibliotecas y listas
Administración de
con metadatos, administración de registros y directivas
contenido
de retención.
Proporcionar un lugar para que el equipo se organice y
Sitios de grupo colabore en el contenido, los datos y noticias para que
estén en sintonía.
Difundir mensajes de un grupo y compartirlo con los
Sitios de
miembros de la organización con sitios de comunicación
comunicación
atractivos y dinámicos.
Informar e involucrar a la organización con intranets y
sitios para dotar de contenidos, anunciar las novedades,
Intranets
compartir recursos, simplificar los procesos e involucrar
a los contactos.
Obtener acceso a las intranets, sitios de grupo y
contenido con la aplicación móvil de SharePoint para
Aplicaciones móviles
Android™, iOS®, y Windows y las aplicaciones móviles
de OneDrive para Android, iOS y Windows.
Automatizar el
Automatizar los procesos empresariales con alertas y
trabajo flujos de trabajo.
Descubrir los contactos relevantes y el contenido
Detección
importante cuando más se necesite.
Personalización de la búsqueda empresarial y los
Búsqueda resultados con características mejoradas para que
aparezcan los recursos en Microsoft 365.
Buscar contenido en formato electrónico para
eDiscovery
escenarios de retención o auditoría.
Usar las funcionalidades de prevención de pérdida de
Funcionalidades DLP datos (DLP) avanzadas para identificar, supervisar y
proteger la información sensible.
Usar la conservación local para prevenir la eliminación o
Conservación local
edición de contenido mediante programación.
Centro Crip tológico Nacional 5

|  | Almacenamiento de <br> archivos | OneDrive proporciona espacio de almacenamiento <br> personal en la nube. |
| --- | --- | --- |
|  | Uso compartido <br> externo | Compartir archivos y contenido de forma segura con los <br> contactos de dentro y fuera de la organización. |
|  | Administración de <br> contenido | Organizar y administrar contenido en bibliotecas y listas <br> con metadatos, administración de registros y directivas <br> de retención. |
|  | Sitios de grupo | Proporcionar un lugar para que el equipo se organice y <br> colabore en el contenido, los datos y noticias para que <br> estén en sintonía. |
|  | Sitios de <br> comunicación | Difundir mensajes de un grupo y compartirlo con los <br> miembros de la organización con sitios de comunicación <br> atractivos y dinámicos. |
|  | Intranets | Informar e involucrar a la organización con intranets y <br> sitios para dotar de contenidos, anunciar las novedades, <br> compartir recursos, simplificar los procesos e involucrar <br> a los contactos. |
|  | Aplicaciones móviles | Obtener acceso a las intranets, sitios de grupo y <br> contenido con la aplicación móvil de SharePoint para <br> Android™, iOS®, y Windows y las aplicaciones móviles <br> de OneDrive para Android, iOS y Windows. |
|  | Automatizar el <br> trabajo | Automatizar los procesos empresariales con alertas y <br> flujos de trabajo. |
|  | Detección | Descubrir los contactos relevantes y el contenido <br> importante cuando más se necesite. |
|  | Búsqueda | Personalización de la búsqueda empresarial y los <br> resultados con características mejoradas para que <br> aparezcan los recursos en Microsoft 365. |
|  | eDiscovery | Buscar contenido en formato electrónico para <br> escenarios de retención o auditoría. |
|  | Funcionalidades DLP | Usar las funcionalidades de prevención de pérdida de <br> datos (DLP) avanzadas para identificar, supervisar y <br> proteger la información sensible. |
|  | Conservación local | Usar la conservación local para prevenir la eliminación o <br> edición de contenido mediante programación. |


![Imagen 1 - Página 5](CCN-STIC 885B_assets\pagina5_img1.png)

![Imagen 2 - Página 5](CCN-STIC 885B_assets\pagina5_img2.png)

![Imagen 3 - Página 5](CCN-STIC 885B_assets\pagina5_img3.png)

![Imagen 4 - Página 5](CCN-STIC 885B_assets\pagina5_img4.png)

![Imagen 5 - Página 5](CCN-STIC 885B_assets\pagina5_img5.png)

![Imagen 6 - Página 5](CCN-STIC 885B_assets\pagina5_img6.png)

![Imagen 7 - Página 5](CCN-STIC 885B_assets\pagina5_img7.png)

![Imagen 8 - Página 5](CCN-STIC 885B_assets\pagina5_img8.png)

![Imagen 9 - Página 5](CCN-STIC 885B_assets\pagina5_img9.png)

![Imagen 10 - Página 5](CCN-STIC 885B_assets\pagina5_img10.png)

![Imagen 11 - Página 5](CCN-STIC 885B_assets\pagina5_img11.png)

![Imagen 12 - Página 5](CCN-STIC 885B_assets\pagina5_img12.png)

![Imagen 13 - Página 5](CCN-STIC 885B_assets\pagina5_img13.png)

![Imagen 14 - Página 5](CCN-STIC 885B_assets\pagina5_img14.png)

![Imagen 15 - Página 5](CCN-STIC 885B_assets\pagina5_img15.png)

![Imagen 16 - Página 5](CCN-STIC 885B_assets\pagina5_img16.png)

![Imagen 17 - Página 5](CCN-STIC 885B_assets\pagina5_img17.png)

![Imagen 18 - Página 5](CCN-STIC 885B_assets\pagina5_img18.png)

---

<!-- Página 6 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
1.3 PRERREQUISITOS PARA EL DESPLIEGUE MEDIANTE POWERSHELL
PowerShell de Microsoft 365 permite gestionar y configurar SharePoint Online
desde la línea de comandos, con un usuario con derechos de administración. Consultar
la guía [CCN-STIC-885A - Guía de configuración segura para Office 365]
2. DESPLIEGUE DE SHAREPOINT ONLINE
SharePoint Online no necesita instalación previa en el entorno on-premise del
cliente, ya que es un servicio on-line accesible desde Internet y alojado en el tenant de
Microsoft 365 de la organización. Utiliza la infraestructura de “Nube pública” referida
en la guía [823-Cloud Computing].
SharePoint Online, así como el conjunto de Microsoft 365, se encuentra englobado
en la categoría de servicio SaaS (Software as a Service). El CSP (Microsoft) es el
encargado de ofrecer al cliente el software como un servicio.
2.1 ADMINISTRADOR – CONFIGURACIÓN INICIAL
El usuario administrador podrá acceder al portal de administración de SharePoint
Online a través del portal de administración de Microsoft 365
(https://admin.microsoft.com).
Centro Crip tológico Nacional 6

![Imagen 1 - Página 6](CCN-STIC 885B_assets\pagina6_img1.png)

![Imagen 2 - Página 6](CCN-STIC 885B_assets\pagina6_img2.png)

![Imagen 3 - Página 6](CCN-STIC 885B_assets\pagina6_img3.png)

![Imagen 4 - Página 6](CCN-STIC 885B_assets\pagina6_img4.png)

![Imagen 5 - Página 6](CCN-STIC 885B_assets\pagina6_img5.png)

![Imagen 6 - Página 6](CCN-STIC 885B_assets\pagina6_img6.png)

---

<!-- Página 7 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
En el menú [Configuración] se puede controlar qué características están disponibles
para los usuarios de la organización tanto a nivel de OneDrive, Stream y SharePoint.
Creación de sitios
Permite elegir la ubicación de los sites de grupo
de la organización.
Configurar la zona horaria.
Activar o desactivar la creación de sitios por
parte de los usuarios.
*Recomendación: elegir la zona horaria
adecuada y dejar resto de valores por defecto.
Centro Crip tológico Nacional 7

![Imagen 1 - Página 7](CCN-STIC 885B_assets\pagina7_img1.png)

![Imagen 2 - Página 7](CCN-STIC 885B_assets\pagina7_img2.png)

![Imagen 3 - Página 7](CCN-STIC 885B_assets\pagina7_img3.png)

![Imagen 4 - Página 7](CCN-STIC 885B_assets\pagina7_img4.png)

![Imagen 5 - Página 7](CCN-STIC 885B_assets\pagina7_img5.png)

![Imagen 6 - Página 7](CCN-STIC 885B_assets\pagina7_img6.png)

![Imagen 7 - Página 7](CCN-STIC 885B_assets\pagina7_img7.png)

![Imagen 8 - Página 7](CCN-STIC 885B_assets\pagina7_img8.png)

---

<!-- Página 8 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Límites de almacenamiento del sitio
Automático para compartir el
almacenamiento entre todos
los sitios.
Manual: establecer límites
específicos para cada sitio.
*Recomendación: dejar valor
por defecto. No afecta a la
seguridad.
Notificaciones
Para permitir las notificaciones
en las aplicaciones móviles
relacionadas con SharePoint.
*Recomendación: dejar valor
por defecto. No afecta a la
seguridad.
Sincronizar
Para controlar la sincronización
de archivos en OneDrive y
SharePoint.
*Recomendación: dejar valor
por defecto.
Retención
Para controlar la retención
predeterminada en OneDrive
cuando se elimina una cuenta
de usuario.
*Recomendación: dejar valor
por defecto.
Centro Crip tológico Nacional 8

![Imagen 1 - Página 8](CCN-STIC 885B_assets\pagina8_img1.png)

![Imagen 2 - Página 8](CCN-STIC 885B_assets\pagina8_img2.png)

![Imagen 3 - Página 8](CCN-STIC 885B_assets\pagina8_img3.png)

![Imagen 4 - Página 8](CCN-STIC 885B_assets\pagina8_img4.png)

![Imagen 5 - Página 8](CCN-STIC 885B_assets\pagina8_img5.png)

![Imagen 6 - Página 8](CCN-STIC 885B_assets\pagina8_img6.png)

![Imagen 7 - Página 8](CCN-STIC 885B_assets\pagina8_img7.png)

![Imagen 8 - Página 8](CCN-STIC 885B_assets\pagina8_img8.png)

![Imagen 9 - Página 8](CCN-STIC 885B_assets\pagina8_img9.png)

---

<!-- Página 9 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
2.2 USUARIO FINAL – PRIMEROS PASOS
El usuario final podrá acceder al portal Office 365 a través de la url:
microsoft365.com u office.com. Tras introducir las credenciales se muestra un panel
con todas las aplicaciones y características a las que tiene acceso el usuario en
cuestión.
Pulsando en el icono de la parte superior izquierda de la pantalla y pulsando en
el icono de SharePoint se podrá acceder al portal de SharePoint.
La pantalla de inicio de SharePoint Online se encuentra dividida en dos secciones:
• Menú lateral izquierdo. Con opciones de búsqueda, sitios que se siguen y sitios
recientes.
• Panel principal. Para crear sitios y noticias y visualizar sitios frecuentes.
Centro Crip tológico Nacional 9

|  | El usuario final podrá acceder al portal Office 365 a través de la url: |
| --- | --- |
| microsoft365.com u office.com. Tras introducir las credenciales se muestra un panel |  |
| con todas las aplicaciones y características a las que tiene acceso el usuario en |  |
| cuestión. |  |


![Imagen 1 - Página 9](CCN-STIC 885B_assets\pagina9_img1.jpeg)

![Imagen 2 - Página 9](CCN-STIC 885B_assets\pagina9_img2.png)

![Imagen 3 - Página 9](CCN-STIC 885B_assets\pagina9_img3.png)

![Imagen 4 - Página 9](CCN-STIC 885B_assets\pagina9_img4.png)

![Imagen 5 - Página 9](CCN-STIC 885B_assets\pagina9_img5.png)

![Imagen 6 - Página 9](CCN-STIC 885B_assets\pagina9_img6.png)

![Imagen 7 - Página 9](CCN-STIC 885B_assets\pagina9_img7.png)

![Imagen 8 - Página 9](CCN-STIC 885B_assets\pagina9_img8.png)

---

<!-- Página 10 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
2.2.1 CREAR UN SITIO
Pulsando el botón “Crear sitio” del
panel principal, se despliegan dos
opciones:
• Sitio de comunicación: para difundir información, compartir noticias, informes,
estados, etc. a una audiencia amplia en un formato visualmente atractivo. Sólo
genera contenido un pequeño conjunto de miembros y es un público mucho
mayor quien lo consulta.
• Sitio de grupo: proporciona una ubicación concreta en la que un grupo de
personas pueden trabajar en un proyecto concreto y compartir información
desde cualquier lugar con cualquier dispositivo. Son grupos cerrados, la
información se limita sólo a los miembros del grupo o participantes específicos.
Adicionalmente, desde el Centro de administración de SharePoint se muestran otras
opciones desde el botón “Examinar más sitios”, donde poder crear un sitio de grupo
sin un grupo de Microsoft 365, o bien un centro de documentos, una wiki empresarial,
un portal de publicación, centro de contenidos y más plantillas adicionales.
Centro Crip tológico Nacional 10

![Imagen 1 - Página 10](CCN-STIC 885B_assets\pagina10_img1.png)

![Imagen 2 - Página 10](CCN-STIC 885B_assets\pagina10_img2.jpeg)

![Imagen 3 - Página 10](CCN-STIC 885B_assets\pagina10_img3.png)

![Imagen 4 - Página 10](CCN-STIC 885B_assets\pagina10_img4.png)

![Imagen 5 - Página 10](CCN-STIC 885B_assets\pagina10_img5.png)

![Imagen 6 - Página 10](CCN-STIC 885B_assets\pagina10_img6.png)

![Imagen 7 - Página 10](CCN-STIC 885B_assets\pagina10_img7.png)

---

<!-- Página 11 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
2.2.1.1 CREAR UN SITIO DE GRUPO
1. Se puede seleccionar una plantilla de las que proporciona Microsoft o una
plantilla de la propia organización.
2. Las características de la plantilla seleccionada pueden ser visualizadas y
proceder a pulsar sobre el botón ‘Usar plantilla’.
3. Agregar nombre del sitio, descripción y propietario del grupo.
Centro Crip tológico Nacional 11

![Imagen 1 - Página 11](CCN-STIC 885B_assets\pagina11_img1.jpeg)

![Imagen 2 - Página 11](CCN-STIC 885B_assets\pagina11_img2.png)

![Imagen 3 - Página 11](CCN-STIC 885B_assets\pagina11_img3.png)

![Imagen 4 - Página 11](CCN-STIC 885B_assets\pagina11_img4.png)

![Imagen 5 - Página 11](CCN-STIC 885B_assets\pagina11_img5.png)

![Imagen 6 - Página 11](CCN-STIC 885B_assets\pagina11_img6.png)

![Imagen 7 - Página 11](CCN-STIC 885B_assets\pagina11_img7.png)

---

<!-- Página 12 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
4. En este punto es donde se decide si el sitio va a ser público (accesible por
cualquier persona de la organización- útil para contenido genérico) o privado
(sólo los miembros pueden acceder).
5. Agregar miembros o más propietarios.
Centro Crip tológico Nacional 12

![Imagen 1 - Página 12](CCN-STIC 885B_assets\pagina12_img1.png)

![Imagen 2 - Página 12](CCN-STIC 885B_assets\pagina12_img2.png)

![Imagen 3 - Página 12](CCN-STIC 885B_assets\pagina12_img3.png)

![Imagen 4 - Página 12](CCN-STIC 885B_assets\pagina12_img4.png)

![Imagen 5 - Página 12](CCN-STIC 885B_assets\pagina12_img5.png)

![Imagen 6 - Página 12](CCN-STIC 885B_assets\pagina12_img6.png)

![Imagen 7 - Página 12](CCN-STIC 885B_assets\pagina12_img7.png)

---

<!-- Página 13 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
6. Al pulsar el botón “Finalizar” se crea el sitio de grupo y se navega a la página del
sitio recién creado.
7. Los siguientes pasos para el usuario podrían ser:
Centro Crip tológico Nacional 13

![Imagen 1 - Página 13](CCN-STIC 885B_assets\pagina13_img1.png)

![Imagen 2 - Página 13](CCN-STIC 885B_assets\pagina13_img2.png)

![Imagen 3 - Página 13](CCN-STIC 885B_assets\pagina13_img3.png)

![Imagen 4 - Página 13](CCN-STIC 885B_assets\pagina13_img4.png)

![Imagen 5 - Página 13](CCN-STIC 885B_assets\pagina13_img5.png)

![Imagen 6 - Página 13](CCN-STIC 885B_assets\pagina13_img6.png)

![Imagen 7 - Página 13](CCN-STIC 885B_assets\pagina13_img7.png)

---

<!-- Página 14 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
• Personalizar el sitio
• Invitar miembros
• Cargar archivos en el sitio
• Publicar noticias
• Agregar chat en Teams
• Cambiar aspecto
2.2.1.2 CREAR UN SITIO DE COMUNICACIÓN
1. Se puede seleccionar una plantilla de las que proporciona Microsoft o una
plantilla de la propia organización.
Centro Crip tológico Nacional 14

![Imagen 1 - Página 14](CCN-STIC 885B_assets\pagina14_img1.png)

![Imagen 2 - Página 14](CCN-STIC 885B_assets\pagina14_img2.png)

![Imagen 3 - Página 14](CCN-STIC 885B_assets\pagina14_img3.png)

![Imagen 4 - Página 14](CCN-STIC 885B_assets\pagina14_img4.png)

![Imagen 5 - Página 14](CCN-STIC 885B_assets\pagina14_img5.png)

![Imagen 6 - Página 14](CCN-STIC 885B_assets\pagina14_img6.png)

---

<!-- Página 15 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
2. Las características de la plantilla seleccionada pueden ser visualizadas y
proceder a pulsar sobre el botón ‘Usar plantilla’:
3. Agregar nombre del sitio, descripción y propietario del grupo.
Centro Crip tológico Nacional 15

![Imagen 1 - Página 15](CCN-STIC 885B_assets\pagina15_img1.jpeg)

![Imagen 2 - Página 15](CCN-STIC 885B_assets\pagina15_img2.jpeg)

![Imagen 3 - Página 15](CCN-STIC 885B_assets\pagina15_img3.png)

![Imagen 4 - Página 15](CCN-STIC 885B_assets\pagina15_img4.png)

![Imagen 5 - Página 15](CCN-STIC 885B_assets\pagina15_img5.png)

![Imagen 6 - Página 15](CCN-STIC 885B_assets\pagina15_img6.png)

![Imagen 7 - Página 15](CCN-STIC 885B_assets\pagina15_img7.png)

---

<!-- Página 16 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
4. Establecemos idioma y otras opciones.
5. Al pulsar “Crear sitio”, se crea el sitio de comunicación.
Centro Crip tológico Nacional 16

![Imagen 1 - Página 16](CCN-STIC 885B_assets\pagina16_img1.png)

![Imagen 2 - Página 16](CCN-STIC 885B_assets\pagina16_img2.png)

![Imagen 3 - Página 16](CCN-STIC 885B_assets\pagina16_img3.png)

![Imagen 4 - Página 16](CCN-STIC 885B_assets\pagina16_img4.png)

![Imagen 5 - Página 16](CCN-STIC 885B_assets\pagina16_img5.png)

![Imagen 6 - Página 16](CCN-STIC 885B_assets\pagina16_img6.png)

![Imagen 7 - Página 16](CCN-STIC 885B_assets\pagina16_img7.png)

---

<!-- Página 17 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
3. CONFIGURACIÓN DE SHAREPOINT ONLINE
A continuación, se abordará la configuración del servicio SharePoint Online
centrándose en el cumplimiento de los requisitos del Esquema Nacional de Seguridad
(ENS) establecidas en el BOE-A-2022-7191 Real Decreto 311/2022, de 3 de mayo que
aplican exclusivamente a este servicio:
https://www.boe.es/diario_boe/txt.php?id=BOE-A-2022-7191
3.1 MARCO OPERACIONAL
3.1.1 CONTROL DE ACCESO
El control de acceso comprende el conjunto de actividades preparatorias y
ejecutivas tendentes a permitir o denegar a una entidad, usuario o proceso, el acceso a
un recurso del sistema para la realización de una acción concreta.
Microsoft Entra ID es la herramienta principal para la gestión de accesos y
privilegios sobre los recursos de Azure dentro de una organización. Al ser SharePoint
Online un recurso de Azure, el proveedor de identidad será Microsoft Entra ID.
Si bien esta guía trata únicamente la gestión de cuentas de usuarios en nube
Microsoft Entra ID, también permite configuraciones hibridas. Se puede consultar la
documentación de identidades hibridas en el enlace:
https://docs.microsoft.com/es-es/azure/active-directory/hybrid/index
Para cumplir con los requisitos exigidos dentro del ámbito del ENS, se recomienda
consultar la guía [CCN-STIC-884A Guía de Configuración segura para Azure].
3.1.1.1 IDENTIFICACIÓN
La gestión de identidades de SharePoint Online es común a todas las aplicaciones de
la solución Microsoft 365 y se describe en la guía [CCN-STIC-885A - Guía de
configuración segura para Office 365].
3.1.1.2 REQUISITOS DE ACCESO
SharePoint Online establece un conjunto de niveles de permisos para proteger el
acceso a los recursos.
El modelo de objetos en SharePoint Online
SharePoint proporciona distintas alternativas para controlar el acceso a los objetos:
• Los objetos pueden usar, bien los mismos permisos que el sitio web, la lista o la
carpeta primarios al heredar tanto los roles como los usuarios disponibles en el
objeto primario, o bien permisos únicos.
Centro Crip tológico Nacional 17

![Imagen 1 - Página 17](CCN-STIC 885B_assets\pagina17_img1.png)

![Imagen 2 - Página 17](CCN-STIC 885B_assets\pagina17_img2.png)

![Imagen 3 - Página 17](CCN-STIC 885B_assets\pagina17_img3.png)

![Imagen 4 - Página 17](CCN-STIC 885B_assets\pagina17_img4.png)

![Imagen 5 - Página 17](CCN-STIC 885B_assets\pagina17_img5.png)

---

<!-- Página 18 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
• SharePoint incluye los cuatro grupos siguientes de forma predeterminada, con
un nivel de permisos asociado:
- Administradores: Tienen los mismos permisos de Control total que el
propietario de un sitio, y pueden realizar acciones como administrar la
búsqueda, la papelera de reciclaje y las características de la colección de
sitios. También tienen acceso a todos los elementos del sitio, incluidos
los subsitios, aún si se ha roto la herencia de permisos.
- Propietarios: Tienen un control total del sitio de SharePoint. Si el sitio
tiene un grupo o equipo de Microsoft 365 asociado, los propietarios del
grupo o del equipo se incluyen automáticamente como propietarios del
sitio.
- Miembros: Tienen permisos de edición para el sitio de SharePoint y
pueden agregar y quitar archivos, listas y bibliotecas. Si el sitio tiene un
grupo o equipo de Microsoft 365 asociado, los miembros del grupo o
del equipo se incluyen automáticamente como miembros del sitio
- Visitantes: Tienen permisos de solo vista para el sitio de SharePoint.
Este nivel de permisos solo se usa en SharePoint y no está relacionado
con los permisos de un grupo o equipo de Microsoft 365 asociado.
Estos grupos son independientes de los grupos de Microsoft 365 y Microsoft
Entra ID (anteriormente conocido como Azure Active Directory) y constituyen la
base para asignar permisos a los recursos del sitio.
Cuando se crea un sitio web con permisos únicos (no heredados del sitio padre)
con la interfaz de usuario, se navega a una página donde puede asignar
usuarios a estos grupos como parte del aprovisionamiento del sitio. Ver
apartado [2.2 Usuario final - primeros pasos] y [3.1.1.4 Proceso de gestión de
derechos de acceso].
Agregar un nuevo propietario a un sitio de grupo desde el Centro de administración
de SharePoint
Como administrador de SharePoint es posible asignar nuevos propietarios (owners)
a un sitio. Esta opción es interesante si se desea compartir tareas de administración.
1. Desde el Centro de administración de SharePoint, menú [Sitios\Sitios activos] y
accediendo a las propiedades del sitio seleccionado. Pulsar sobre la pestaña
“Pertenencia” y después sobre “Propietarios del sitio”:
Centro Crip tológico Nacional 18

![Imagen 1 - Página 18](CCN-STIC 885B_assets\pagina18_img1.png)

![Imagen 2 - Página 18](CCN-STIC 885B_assets\pagina18_img2.png)

![Imagen 3 - Página 18](CCN-STIC 885B_assets\pagina18_img3.png)

![Imagen 4 - Página 18](CCN-STIC 885B_assets\pagina18_img4.png)

![Imagen 5 - Página 18](CCN-STIC 885B_assets\pagina18_img5.png)

---

<!-- Página 19 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
2. Pulsar sobre “Agregar propietarios de sitio”.
Para agregar un nuevo propietario basta con escribir el
nombre o la dirección de correo electrónico y pulsar
sobre el botón “Agregar”.
Para eliminar un
propietarios seleccionar al
usuario o usuarios y pulsar
sobre el botón “Quitar
como propietario del
sitio”.
Siempre debe existir al menos un propietario del sitio. Al agregar o quitar usuarios
de un sitio de grupo, se agregan o eliminan también del grupo de Microsoft 365,
Exchange Online, Teams, etc.
Para proporcionar o restringir el acceso de los usuarios a un sitio SharePoint
consultar el apartado [3.1.1.4 Proceso de gestión de derechos de acceso].
Centro Crip tológico Nacional 19

![Imagen 1 - Página 19](CCN-STIC 885B_assets\pagina19_img1.png)

![Imagen 2 - Página 19](CCN-STIC 885B_assets\pagina19_img2.png)

![Imagen 3 - Página 19](CCN-STIC 885B_assets\pagina19_img3.png)

![Imagen 4 - Página 19](CCN-STIC 885B_assets\pagina19_img4.png)

![Imagen 5 - Página 19](CCN-STIC 885B_assets\pagina19_img5.png)

![Imagen 6 - Página 19](CCN-STIC 885B_assets\pagina19_img6.png)

![Imagen 7 - Página 19](CCN-STIC 885B_assets\pagina19_img7.png)

![Imagen 8 - Página 19](CCN-STIC 885B_assets\pagina19_img8.png)

---

<!-- Página 20 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
3.1.1.3 SEGREGACIÓN DE FUNCIONES Y TAREAS
Rol de administrador
Los administradores globales de Microsoft 365 pueden asignar usuarios al rol de
administrador de SharePoint para ayudarle con la administración de SharePoint
Online. Se recomienda establecer un administrador para cada servicio de la solución de
Microsoft 365. En aquellas organizaciones donde exista una delegación de tareas de
administración se requiere establecer un administrador por cada servicio delegado.
1. Abrir el Centro de administración de Microsoft 365, menú [Usuarios\Usuarios
activos], y pulsar sobre el nombre del usuario. En la ventana emergente, pulsar
sobre el enlace “Administrar roles”.
2. Pulsar sobre el nombre del usuario y, en el panel derecho de propiedades, pulsar el
enlace “Administrar roles”:
Puede ser interesante asociar, junto con
el rol de administrador de SharePoint, la
función de administrador de soporte
técnico de servicio. De esta forma, puede
ver información relacionada con el
servicio en el Centro de administración de
Microsoft 365: crear y administrar
solicitudes de soporte técnico con
Microsoft relativas a servicios de Azure y
Microsoft 365, consultar el centro de
mensajes y el panel de servicios de Azure
Portal y el Centro de administración de
Microsoft 365.
Los usuarios a los que se ha asignado el
rol de administrador de SharePoint tienen
Centro Crip tológico Nacional 20

![Imagen 1 - Página 20](CCN-STIC 885B_assets\pagina20_img1.png)

![Imagen 2 - Página 20](CCN-STIC 885B_assets\pagina20_img2.png)

![Imagen 3 - Página 20](CCN-STIC 885B_assets\pagina20_img3.png)

![Imagen 4 - Página 20](CCN-STIC 885B_assets\pagina20_img4.png)

![Imagen 5 - Página 20](CCN-STIC 885B_assets\pagina20_img5.png)

![Imagen 6 - Página 20](CCN-STIC 885B_assets\pagina20_img6.png)

![Imagen 7 - Página 20](CCN-STIC 885B_assets\pagina20_img7.png)

---

<!-- Página 21 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
acceso al centro de administración de SharePoint y pueden crear y administrar
colecciones de sitios, designar administradores de colecciones de sitios, administrar
perfiles de usuario, la configuración global de SharePoint y mucho más.
Más información sobre roles en la guía [CCN-STIC-885A - Guía de configuración
segura para Office 365]
3.1.1.4 PROCESO DE GESTIÓN DE DERECHOS DE ACCESO
Configurar permisos del sitio por un propietario
Después de crear un sitio de SharePoint, se debe proporcionar o restringir el
acceso de los usuarios al sitio o a su contenido. Por ejemplo, puede proporcionarse
acceso solo a los miembros de un equipo, o bien a todos los usuarios, pero restringir la
edición para algunos. La manera más sencilla de trabajar con permisos es usar los
niveles de permisos y grupos predeterminados ofrecidos, que abarcan los escenarios
más comunes.
1. Desde el menú de configuración del sitio del portal de usuario de SharePoint, en la
esquina superior derecha, se accede a los permisos del sitio
[Configuración\Permisos del sitio]:
2. Desde aquí, un propietario puede invitar a nuevas personas y gestionar su nivel de
permisos: propietarios del sitio (control total del contenido del sitio), miembros del
sitio (control limitado, puede editar y ver el contenido del sitio), visitante (sin
control, puede ver el contenido del sitio).
Centro Crip tológico Nacional 21

![Imagen 1 - Página 21](CCN-STIC 885B_assets\pagina21_img1.jpeg)

![Imagen 2 - Página 21](CCN-STIC 885B_assets\pagina21_img2.png)

![Imagen 3 - Página 21](CCN-STIC 885B_assets\pagina21_img3.png)

![Imagen 4 - Página 21](CCN-STIC 885B_assets\pagina21_img4.png)

![Imagen 5 - Página 21](CCN-STIC 885B_assets\pagina21_img5.png)

![Imagen 6 - Página 21](CCN-STIC 885B_assets\pagina21_img6.png)

---

<!-- Página 22 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
3. Pinchar sobre el enlace “Configuración de permisos avanzada”, para un control
más exhaustivo de los permisos a aplicar.
4. Pulsando sobre cada uno de los grupos de SharePoint se accede a una gestión
detallada, donde es posible añadir nuevos usuarios al grupo y administrar otras
opciones de configuración.
Centro Crip tológico Nacional 22

![Imagen 1 - Página 22](CCN-STIC 885B_assets\pagina22_img1.png)

![Imagen 2 - Página 22](CCN-STIC 885B_assets\pagina22_img2.png)

![Imagen 3 - Página 22](CCN-STIC 885B_assets\pagina22_img3.png)

![Imagen 4 - Página 22](CCN-STIC 885B_assets\pagina22_img4.png)

![Imagen 5 - Página 22](CCN-STIC 885B_assets\pagina22_img5.png)

![Imagen 6 - Página 22](CCN-STIC 885B_assets\pagina22_img6.png)

![Imagen 7 - Página 22](CCN-STIC 885B_assets\pagina22_img7.png)

![Imagen 8 - Página 22](CCN-STIC 885B_assets\pagina22_img8.png)

---

<!-- Página 23 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Niveles de permisos
Dentro de la “Configuración de permisos avanzada”, en la pestaña “PERMISOS”,
pulsar el vínculo “Niveles de Permisos”.
Un nivel de permisos es un conjunto de permisos. En este sentido, SharePoint
cuenta con niveles de permisos predeterminados que permiten proporcionar de forma
rápida y sencilla niveles de permisos comunes para un usuario o grupos de usuarios.
Se puede realizar cambios en cualquiera de los niveles de permisos
predeterminados, excepto Control total y Acceso limitado.
Puede resultar conveniente establecer niveles de permisos personalizados para
crear nuevos roles y adaptarlos a las necesidades de cada organización. Por ejemplo,
un usuario con permisos para agregar documentos pero no eliminarlos.
1. Pulsar el enlace “Agregar un nivel de permisos”.
Centro Crip tológico Nacional 23

![Imagen 1 - Página 23](CCN-STIC 885B_assets\pagina23_img1.png)

![Imagen 2 - Página 23](CCN-STIC 885B_assets\pagina23_img2.png)

![Imagen 3 - Página 23](CCN-STIC 885B_assets\pagina23_img3.png)

![Imagen 4 - Página 23](CCN-STIC 885B_assets\pagina23_img4.png)

![Imagen 5 - Página 23](CCN-STIC 885B_assets\pagina23_img5.png)

![Imagen 6 - Página 23](CCN-STIC 885B_assets\pagina23_img6.png)

![Imagen 7 - Página 23](CCN-STIC 885B_assets\pagina23_img7.png)

![Imagen 8 - Página 23](CCN-STIC 885B_assets\pagina23_img8.png)

---

<!-- Página 24 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
2. Asignar nombre y descripción, y la lista de permisos adecuada.
Configuración de solicitud de acceso
Es recomendable indicar cómo se configura el comportamiento para solicitar acceso
a un sitio. Desde el punto de vista de la seguridad, se puede bloquear el que un usuario
comparta el sitio o contenidos con otros usuarios o enviar invitaciones al grupo
miembros del sitio. Estos detalles son importantes para evitar fuga de información sin
control. Esta configuración es independiente del “Directivas de uso compartido”,
indicado en el punto 5.3.
Dentro de la “Configuración de permisos avanzada”, en la pestaña “PERMISOS”,
pulsar el vínculo “Configuración de solicitud de acceso”.
Desde esta pantalla se elige quién puede solicitar acceso o invitar a otros a este sitio.
Centro Crip tológico Nacional 24

![Imagen 1 - Página 24](CCN-STIC 885B_assets\pagina24_img1.png)

![Imagen 2 - Página 24](CCN-STIC 885B_assets\pagina24_img2.png)

![Imagen 3 - Página 24](CCN-STIC 885B_assets\pagina24_img3.png)

![Imagen 4 - Página 24](CCN-STIC 885B_assets\pagina24_img4.png)

![Imagen 5 - Página 24](CCN-STIC 885B_assets\pagina24_img5.png)

![Imagen 6 - Página 24](CCN-STIC 885B_assets\pagina24_img6.png)

![Imagen 7 - Página 24](CCN-STIC 885B_assets\pagina24_img7.png)

![Imagen 8 - Página 24](CCN-STIC 885B_assets\pagina24_img8.png)

---

<!-- Página 25 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
3.1.1.5 MECANISMOS DE AUTENTICACIÓN (USUARIOS EXTERNOS)
Los mecanismos de autenticación de SharePoint Online son comunes a todas las
aplicaciones de la solución Microsoft 365 y se describen en la guía [CCN-STIC-885A -
Guía de configuración segura para Office 365].
Información sobre políticas de contraseñas, autenticación MFA y otros aspectos
relacionados con la autenticación se describen en la guía [CCN-STIC-885A - Guía de
configuración segura para Office 365].
En el siguiente diagrama se describe el proceso de autenticación de SharePoint
Online:
Se explica cómo funciona el escenario con el IdP (Identity Provider) predeterminado
de Microsoft Entra ID.
La cookie de autenticación de Federación
(FedAuth) es para cada sitio de alto nivel de
SharePoint Online, como el sitio raíz, mySite y el
sitio de administración. La cookie de autenticación
de Federación raíz (rtFA) se usa en todos los
SharePoint Online. Cuando un usuario visita un
nuevo sitio de alto nivel o la página de otra
empresa, la cookie rtFA se usa para autenticarlas
en modo silencioso sin que se le pregunte.
Cuando un usuario cierra sesión en SharePoint
Online, se elimina la cookie rtFA.
Sesión y cookies persistentes
De forma predeterminada, todas las cookies de SharePoint Online son cookies de
sesión. Estas cookies no se guardan en la caché de cookies del explorador y, en su
lugar, se eliminan siempre que se cierra el explorador.
Microsoft Entra ID muestra durante el inicio de sesión un check: “mantener la sesión
iniciada” para habilitar las cookies persistentes. Estas cookies se guardan en la
memoria caché del explorador y se conservan, aunque el explorador se cierre o reinicie
el equipo.
Ante la pregunta: ¿Quiere
mantener la sesión iniciada?
Responder: No.
Centro Crip tológico Nacional 25

![Imagen 1 - Página 25](CCN-STIC 885B_assets\pagina25_img1.png)

![Imagen 2 - Página 25](CCN-STIC 885B_assets\pagina25_img2.png)

![Imagen 3 - Página 25](CCN-STIC 885B_assets\pagina25_img3.jpeg)

![Imagen 4 - Página 25](CCN-STIC 885B_assets\pagina25_img4.png)

![Imagen 5 - Página 25](CCN-STIC 885B_assets\pagina25_img5.png)

![Imagen 6 - Página 25](CCN-STIC 885B_assets\pagina25_img6.png)

![Imagen 7 - Página 25](CCN-STIC 885B_assets\pagina25_img7.png)

![Imagen 8 - Página 25](CCN-STIC 885B_assets\pagina25_img8.png)

---

<!-- Página 26 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Se deben mantener deshabilitadas las cookies persistentes de inicio de sesión para
evitar que se mantenga la sesión iniciada una vez se cierra el navegador y de esta
forma forzar al usuario a reautenticarse siempre que utilice el servicio. Esta opción no
es configurable a nivel de administración y por tanto es responsabilidad del usuario su
cumplimiento.
Cierre de sesión inactiva
Conviene advertir y después cerrar la sesión de los usuarios en dispositivos no
administrados después de un período de inactividad. Esta configuración se aplica
cuando los usuarios no seleccionan mantener la sesión iniciada.
Se accede desde el Centro de administración de SharePoint, menú
[Directivas\Control de acceso\Cierre de sesión inactiva].
Aplicaciones que no usan la autenticación moderna
Algunas aplicaciones de terceros y versiones anteriores de Office no pueden
imponer restricciones basadas en dispositivos. Conviene bloquear los accesos de estas
aplicaciones.
Se accede desde el Centro de administración de SharePoint, menú
[Directiva\Control de acceso\Aplicaciones que no usan la autenticación moderna].
Centro Crip tológico Nacional 26

![Imagen 1 - Página 26](CCN-STIC 885B_assets\pagina26_img1.png)

![Imagen 2 - Página 26](CCN-STIC 885B_assets\pagina26_img2.png)

![Imagen 3 - Página 26](CCN-STIC 885B_assets\pagina26_img3.png)

![Imagen 4 - Página 26](CCN-STIC 885B_assets\pagina26_img4.png)

![Imagen 5 - Página 26](CCN-STIC 885B_assets\pagina26_img5.png)

![Imagen 6 - Página 26](CCN-STIC 885B_assets\pagina26_img6.png)

![Imagen 7 - Página 26](CCN-STIC 885B_assets\pagina26_img7.png)

---

<!-- Página 27 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Se requiere establecer un “doble factor de autenticación” (MFA), tener una política
adecuada de gestión de credenciales y políticas de acceso condicional. Así mismo, se
requiere un registro de intentos de accesos con éxito y fallidos al sistema, descritos en
el apartado [3.1.2.3 Registro de actividad]. Adicionalmente se puede controlar el
acceso a Microsoft 365 mediante directivas de acceso condicional o reglas en AD FS,
como se describe en la guía [CCN-STIC-884A - Guía de configuración segura para
Azure].
3.1.1.6 MECANISMOS DE AUTENTICACIÓN (USUARIOS DE LA ORGANIZACIÓN)
Ídem que el apartado anterior.
3.1.2 EXPLOTACIÓN
SharePoint Online siempre estará actualizado. Es decir, el servicio es mantenido
permanentemente por Microsoft, encargándose de las actualizaciones y parches, así
como de establecer los mecanismos de detección y protección ante amenazas.
3.1.2.1 PROTECCIÓN FRENTE A CÓDIGO DAÑINO
Si la organización dispone de Microsoft Defender para Office 365 tendrá un
explorador de detecciones en tiempo real, accesible desde el Centro de Seguridad y
cumplimiento de Office 365. Consultar la guía [CCN-STIC-885A - Guía de configuración
segura para Office 365].
Si además se dispone de Exchange Online, se proporciona automáticamente
protección contra malware para los archivos que se cargan y guardan en bibliotecas de
documentos. Esta protección la proporciona el motor antimalware de Microsoft que
también está integrado en Exchange.
Permitir o bloquear scripts personalizados
Permitir que los usuarios personalicen sitios y páginas en SharePoint mediante la
inserción de una secuencia de comandos puede dar la flexibilidad necesaria para
satisfacer las distintas necesidades de la organización. Sin embargo, debe tenerse en
cuenta las implicaciones de seguridad de los scripts personalizados.
Cuando se permite a los usuarios ejecutar scripts personalizados, ya no se puede
exigir la gobernanza, el ámbito de las capacidades del código insertado. En lugar de
permitir un script personalizado, se recomienda usar SharePoint Framework. Todos los
scripts que se ejecutan en una página de SharePoint (ya sea una página HTML en una
biblioteca de documentos o un JavaScript en un elemento Web de editor de scripts)
siempre se ejecutan en el contexto del usuario que visita la página y la aplicación de
SharePoint.
Una vez que permita el scripting, no se podrá identificar:
Centro Crip tológico Nacional 27

![Imagen 1 - Página 27](CCN-STIC 885B_assets\pagina27_img1.png)

![Imagen 2 - Página 27](CCN-STIC 885B_assets\pagina27_img2.png)

![Imagen 3 - Página 27](CCN-STIC 885B_assets\pagina27_img3.png)

![Imagen 4 - Página 27](CCN-STIC 885B_assets\pagina27_img4.png)

![Imagen 5 - Página 27](CCN-STIC 885B_assets\pagina27_img5.png)

---

<!-- Página 28 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
• Qué código se ha insertado.
• Dónde se ha insertado el código.
• Quién insertó el código.
Si se insertó un script peligroso o malintencionado, la única forma de detenerlo es
eliminar la página que lo hospeda. Esto puede provocar la pérdida de datos.
Para permitir o bloquear scripts personalizados:
1. Acceder al Centro de administración de SharePoint, menú [Configuración], y
acceder al link de la parte inferior de la página “página de configuración clásica”.
2. En la pantalla de configuración, navegar a la sección de “Script personalizado” y
establecer los valores deseados.
3.1.2.2 GESTIÓN DE INCIDENTES
Ver apartado [3.1.2.1 Protección frente a código dañino] de la guía [CCN-STIC-885A
- Guía de configuración segura para Office 365] donde se explica cómo acceder a los
informes de “Administración de Amenazas”.
3.1.2.3 REGISTRO DE LA ACTIVIDAD
Para configurar el registro de actividad del servicio de SharePoint, será necesario
hacer uso de la funcionalidad de Auditoría disponible a través del portal de Microsoft
Purview, anteriormente conocido como Centro de Seguridad y cumplimiento de Office
Centro Crip tológico Nacional 28

![Imagen 1 - Página 28](CCN-STIC 885B_assets\pagina28_img1.png)

![Imagen 2 - Página 28](CCN-STIC 885B_assets\pagina28_img2.png)

![Imagen 3 - Página 28](CCN-STIC 885B_assets\pagina28_img3.png)

![Imagen 4 - Página 28](CCN-STIC 885B_assets\pagina28_img4.png)

![Imagen 5 - Página 28](CCN-STIC 885B_assets\pagina28_img5.png)

![Imagen 6 - Página 28](CCN-STIC 885B_assets\pagina28_img6.png)

![Imagen 7 - Página 28](CCN-STIC 885B_assets\pagina28_img7.png)

---

<!-- Página 29 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
365. Más información en la guía [CCN-STIC-885A - Guía de configuración segura para
Office 365].
Mencionar además que existen muchas actividades relacionadas con Teams en el
registro de auditoría, accesibles desde el portal de Microsoft Purview, en el menú
[Auditar/Nueva búsqueda]:
3.1.3 MONITORIZACIÓN DEL SISTEMA
Consultar la guía [CCN-STIC-885A - Guía de configuración segura para Office 365]
para ver los distintos mecanismos de monitorización del servicio.
Conviene destacar que, a nivel de configuración de directivas de alertas, existen
muchas actividades relacionadas con los sitios y objetos almacenados en SharePoint de
manera predeterminada. Aunque dichas directivas están en desuso en función de los
comentarios de los clientes como falsos positivos. Para conservar la funcionalidad de
estas directivas de alerta, se pueden crear directivas de alerta personalizadas con la
misma o distinta configuración. Reseñamos la que aún está en vigor:
• Volumen inusual de uso compartido de archivos externos. Genera una alerta
cuando se comparte un número inusualmente grande de archivos en
SharePoint o OneDrive con usuarios fuera de la organización. Esta directiva
tiene una configuración de gravedad media.
3.2 MEDIDAS DE PROTECCIÓN
3.2.1 PROTECCIÓN DE LAS COMUNICACIONES
En cuanto a la protección de las comunicaciones, cabe reseñar que se usan los
protocolos criptográficos para conexiones TLS, integrados en Microsoft 365 de manera
automática (Todas las conexiones SSL se establecen con claves de 2048 bits). Esto es
así cuando:
Centro Crip tológico Nacional 29

![Imagen 1 - Página 29](CCN-STIC 885B_assets\pagina29_img1.png)

![Imagen 2 - Página 29](CCN-STIC 885B_assets\pagina29_img2.png)

![Imagen 3 - Página 29](CCN-STIC 885B_assets\pagina29_img3.png)

![Imagen 4 - Página 29](CCN-STIC 885B_assets\pagina29_img4.png)

![Imagen 5 - Página 29](CCN-STIC 885B_assets\pagina29_img5.png)

![Imagen 6 - Página 29](CCN-STIC 885B_assets\pagina29_img6.png)

---

<!-- Página 30 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
• Los usuarios trabajan con archivos guardados en OneDrive for Business o
SharePoint Online.
• Los usuarios comparten archivos en reuniones en línea y conversaciones de
mensajería instantánea.
En realidad, todas las comunicaciones de Microsoft 365 están cifradas: Clientes de
correo (POP, IMAP, SMTP-TLS), Clientes Outlook (MAPI-HTTPS), Navegadores (Web
HTTPS), Dispositivos móviles (ActiveSync HTTPS), Teams y Skype (SIP-TLS). No es
necesario realizar ninguna configuración adicional, pero es importante indicar que, a
partir de junio 2020, se eliminó soporte de TLS 1.0 y 1.1. Esto tiene implicaciones
directas en los clientes.
3.2.2 PROTECCIÓN DE LA INFORMACIÓN
3.2.2.1 CALIFICACIÓN DE LA INFORMACIÓN
Microsoft 365 cuenta con diversos mecanismos para calificar la información, como
se explican en el apartado [3.2.2.1 Calificación de la información] de la guía [CCN-STIC-
885A - Guía de configuración segura para Office 365]. A continuación se describen
varios desde el punto de vista de SharePoint Online.
3.2.2.1.1 ETIQUETAS DE RETENCIÓN
Se puede definir el tiempo que un documento debe retenerse, o el tiempo después
del cual debe borrarse. Más información sobre la creación de etiquetas de retención
en la guía [CCN-STIC-885A - Guía de configuración segura para Office 365].
1. Para aplicar una directiva de retención en un documento, navegar por el panel
derecho de propiedades del documento, y seleccionar la opción “Aplicar
etiqueta de retención”:
2. Se muestra un desplegable para seleccionar la etiqueta de retención a aplicar al
documento.
Centro Crip tológico Nacional 30

![Imagen 1 - Página 30](CCN-STIC 885B_assets\pagina30_img1.png)

![Imagen 2 - Página 30](CCN-STIC 885B_assets\pagina30_img2.png)

![Imagen 3 - Página 30](CCN-STIC 885B_assets\pagina30_img3.png)

![Imagen 4 - Página 30](CCN-STIC 885B_assets\pagina30_img4.png)

![Imagen 5 - Página 30](CCN-STIC 885B_assets\pagina30_img5.png)

![Imagen 6 - Página 30](CCN-STIC 885B_assets\pagina30_img6.png)

---

<!-- Página 31 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Es posible seleccionar varios documentos a la
vez y aplicar “en masa” la etiqueta.
Si, por ejemplo, se ha aplicado una etiqueta de
retención de un documento que impida su
borrado durante 5 años al intentar eliminar el
documento aparecerá este mensaje.
3.2.2.1.2 SENSITIVITY LABELS
Esta característica está disponible en las aplicaciones de escritorio de Windows y
Web (Word, Excel, PowerPoint y Outlook), así como en aplicaciones de otras
plataformas (Mac, iOS y Android).
¿Cómo se usan las sensitivity labels desde un documento?
A fecha de edición de esta guía, ya no es necesario la instalación de ningún
complemento para usar esta característica. Dicha característica está integrada
directamente en las aplicaciones de Office (Word, Excel PowerPoint y Outlook) y el
complemento que anteriormente era necesario instalarse ha sido deprecado con fecha
de abril de 2024. Se deberá implementar una edición de suscripción de Office (ahora
denominada Microsoft 365 Apps), ya que el etiquetado integrado no está disponible
con las ediciones independientes de Office (a veces denominadas "Office Perpetual").
En las aplicaciones de Office está el icono:
1. En la pestaña Inicio , seleccionar el botón “Sensitivity”.
Importante: La confidencialidad no está visible si la cuenta de Office no es una
cuenta profesional con al menos licencia de Office 365 E3/E5 asignada, si el
administrador no ha configurado etiquetas de confidencialidad y ha habilitado la
característica.
2. Elegir la sensitivity label que se aplicará en el documento.
Centro Crip tológico Nacional 31

![Imagen 1 - Página 31](CCN-STIC 885B_assets\pagina31_img1.png)

![Imagen 2 - Página 31](CCN-STIC 885B_assets\pagina31_img2.png)

![Imagen 3 - Página 31](CCN-STIC 885B_assets\pagina31_img3.png)

![Imagen 4 - Página 31](CCN-STIC 885B_assets\pagina31_img4.png)

![Imagen 5 - Página 31](CCN-STIC 885B_assets\pagina31_img5.png)

![Imagen 6 - Página 31](CCN-STIC 885B_assets\pagina31_img6.png)

![Imagen 7 - Página 31](CCN-STIC 885B_assets\pagina31_img7.png)

![Imagen 8 - Página 31](CCN-STIC 885B_assets\pagina31_img8.png)

![Imagen 9 - Página 31](CCN-STIC 885B_assets\pagina31_img9.png)

![Imagen 10 - Página 31](CCN-STIC 885B_assets\pagina31_img10.png)

---

<!-- Página 32 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Para quitar una etiqueta que ya se ha aplicado al
documento, anular la selección en el menú.
Nota: Si la organización tiene etiquetas configuradas en el portal de Azure Information
Protection (AIP), es necesario migrarlas. URL.
¿Qué sucede al aplicar una sensitivity label a un documento?
Al aplicar una sensitivity label, la información de la etiqueta se conservará con el
documento o correo electrónico, incluso a medida que se comparte entre dispositivos,
aplicaciones y servicios en la nube. Al aplicar una sensitivity label también se pueden
producir cambios en el documento o correo electrónico según la configuración de la
organización, por ejemplo:
• El cifrado con Azure Rights Management se puede aplicar al correo electrónico,
invitaciones de reuniones o documentos.
• Puede aparecer un encabezado o pie de página en el documento o correo
electrónico.
• Puede aparecer una marca de agua en el documento
3.2.2.2 LIMPIEZA DE DOCUMENTOS
Al compartir una copia electrónica de determinados documentos de Microsoft 365
o al exponer cierta documentación en Internet, es una buena práctica revisar el
documento en busca de datos ocultos, información personal y en general cualquier
metadato que pudiera estar asociado. Es posible eliminar esta información a través del
Inspector de documentos, característica que se accede desde las propias aplicaciones
de Word, Excel, PowerPoint o Visio.
3.2.2.3 COPIAS DE SEGURIDAD
No existe una solución global de respaldo de Microsoft 365. A fecha de edición de
esta guía, nos encontramos con que a finales del año 2024 Microsoft tiene previsto
sacar a disposición general un nuevo servicio llamado Microsoft 365 Backup. Dicho
servicio será en modalidad de pago por uso y necesitará de una suscripción de Azure y
un grupo de recursos.
Centro Crip tológico Nacional 32

| Nota: Si la organización tiene etiquetas configuradas en el portal de Azure Information |
| --- |
| Protection (AIP), es necesario migrarlas. URL. |


![Imagen 1 - Página 32](CCN-STIC 885B_assets\pagina32_img1.png)

![Imagen 2 - Página 32](CCN-STIC 885B_assets\pagina32_img2.png)

![Imagen 3 - Página 32](CCN-STIC 885B_assets\pagina32_img3.png)

![Imagen 4 - Página 32](CCN-STIC 885B_assets\pagina32_img4.png)

![Imagen 5 - Página 32](CCN-STIC 885B_assets\pagina32_img5.png)

![Imagen 6 - Página 32](CCN-STIC 885B_assets\pagina32_img6.png)

---

<!-- Página 33 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Aunque existen mecanismos relacionados que se describen en el apartado [5.
OTRAS CONSIDERACIONES DE SEGURIDAD] de la presente guía: control de versiones y
papelera de reciclaje.
Así mismo, un mecanismo basado en “políticas de retención” en ciertos casos
puede resultar suficiente para garantizar el respaldo de la información. Consultar el
apartado [3.2.2.1 Calificación de la información] para ver cómo se aplican a un
documento y cómo puede servir para protegerlo de ser eliminado.
3.2.2.4 DIRECTIVAS DE ADMINISTRACIÓN DE INFORMACIÓN
Las directivas de administración de información permiten controlar quién tiene
acceso a la información de la organización, qué se puede hacer con esta y cuánto
tiempo pueden conservarla. Una directiva puede ayudar a exigir el cumplimiento de
normativas gubernamentales y legales, o de procesos empresariales internos. El
administrador, puede configurar una directiva para controlar cómo realizar un
seguimiento de los documentos, quién tiene acceso a estos y cuánto tiempo pueden
conservarlos.
Se puede crear una directiva de administración de información en un sitio de tres
maneras distintas:
• Crear una directiva de administración de información para usar en varios tipos
de contenido dentro de una colección de sitios.
• Crear una directiva de administración de información para un tipo de contenido
de sitio.
• Crear una directiva de administración de información para una lista o
biblioteca.
A continuación se describe cómo crear una directiva de administración de
información para un tipo de contenido de sitio, el resto se realiza de forma análoga.
Más información.
Crear una directiva de administración de información para un tipo de contenido de
sitio
1. Acceder a la página principal del sitio, pulsar el icono “Configuración” y seleccionar
el enlace “Información del sitio”.
Centro Crip tológico Nacional 33

![Imagen 1 - Página 33](CCN-STIC 885B_assets\pagina33_img1.png)

![Imagen 2 - Página 33](CCN-STIC 885B_assets\pagina33_img2.png)

![Imagen 3 - Página 33](CCN-STIC 885B_assets\pagina33_img3.png)

![Imagen 4 - Página 33](CCN-STIC 885B_assets\pagina33_img4.png)

![Imagen 5 - Página 33](CCN-STIC 885B_assets\pagina33_img5.png)

![Imagen 6 - Página 33](CCN-STIC 885B_assets\pagina33_img6.png)

---

<!-- Página 34 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
2. Seleccionar “Ver todas las opciones de configuración del sitio”:
3. En “Configuración del sitio”, seleccionar “Características de colección de sitios”.
4. En la pantalla de características del sitio, navegar hasta “Directiva del sitio”, y
activarlo.
Centro Crip tológico Nacional 34

![Imagen 1 - Página 34](CCN-STIC 885B_assets\pagina34_img1.png)

![Imagen 2 - Página 34](CCN-STIC 885B_assets\pagina34_img2.png)

![Imagen 3 - Página 34](CCN-STIC 885B_assets\pagina34_img3.png)

![Imagen 4 - Página 34](CCN-STIC 885B_assets\pagina34_img4.png)

![Imagen 5 - Página 34](CCN-STIC 885B_assets\pagina34_img5.png)

![Imagen 6 - Página 34](CCN-STIC 885B_assets\pagina34_img6.png)

![Imagen 7 - Página 34](CCN-STIC 885B_assets\pagina34_img7.png)

---

<!-- Página 35 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
5. Volver a la pantalla de “Configuración del sitio” y pulsar el nuevo enlace
“Directivas de sitio”.
6. En la pantalla de “Directivas del sitio” pulsar el botón “Crear”.
7. Establecer la política de retención adecuada.
Centro Crip tológico Nacional 35

![Imagen 1 - Página 35](CCN-STIC 885B_assets\pagina35_img1.png)

![Imagen 2 - Página 35](CCN-STIC 885B_assets\pagina35_img2.png)

![Imagen 3 - Página 35](CCN-STIC 885B_assets\pagina35_img3.png)

![Imagen 4 - Página 35](CCN-STIC 885B_assets\pagina35_img4.png)

![Imagen 5 - Página 35](CCN-STIC 885B_assets\pagina35_img5.png)

![Imagen 6 - Página 35](CCN-STIC 885B_assets\pagina35_img6.png)

![Imagen 7 - Página 35](CCN-STIC 885B_assets\pagina35_img7.png)

![Imagen 8 - Página 35](CCN-STIC 885B_assets\pagina35_img8.png)

---

<!-- Página 36 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
3.2.2.5 EVITAR QUE UNA BIBLIOTECA SE MUESTRA EN LOS RESULTADOS DE
BÚSQUEDA
De forma predeterminada todas las bibliotecas se indizan en el buscador. Si alguna de
ellas tiene contenido sensible se puede evitar que aparezca en los resultados.
1. Abrir la configuración de la biblioteca, opción [Configuración avanzada].
2. Desactivar la búsqueda.
3.2.2.6 EVITAR QUE LOS ELEMENTOS SE DESCARGUEN EN CLIENTES SIN CONEXIÓN
Si una biblioteca incluye información sensible, se puede evitar que se sincronice con
clientes sin conexión como OneDrive.
Centro Crip tológico Nacional 36

![Imagen 1 - Página 36](CCN-STIC 885B_assets\pagina36_img1.png)

![Imagen 2 - Página 36](CCN-STIC 885B_assets\pagina36_img2.png)

![Imagen 3 - Página 36](CCN-STIC 885B_assets\pagina36_img3.png)

![Imagen 4 - Página 36](CCN-STIC 885B_assets\pagina36_img4.png)

![Imagen 5 - Página 36](CCN-STIC 885B_assets\pagina36_img5.png)

![Imagen 6 - Página 36](CCN-STIC 885B_assets\pagina36_img6.png)

![Imagen 7 - Página 36](CCN-STIC 885B_assets\pagina36_img7.png)

![Imagen 8 - Página 36](CCN-STIC 885B_assets\pagina36_img8.png)

---

<!-- Página 37 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
1. Abrir la configuración de la biblioteca, opción [Configuración avanzada].
2. Bloquear que los elementos de esta biblioteca de documentos puedan descargarse
a los clientes sin conexión.
3.2.3 PROTECCIÓN DE LOS SERVICIOS
3.2.3.1 PROTECCIÓN FRENTE A LA DENEGACIÓN DE SERVICIO
Microsoft 365 ofrece un sistema avanzado de detección de amenazas y sistemas de
mitigación para proteger la infraestructura subyacente de los ataques de denegación
de servicio (DoS) y prevenir la interrupción de servicio a los clientes.
El sistema de defensa DDoS de Azure está diseñado no solo para resistir ataques
desde el exterior, sino también desde otros Tenants de Azure. Los mecanismos de
limitación de peticiones de Exchange Online y SharePoint Online forman parte de un
enfoque de varias capas para defenderse contra ataques DoS.
Consultar la guía [CCN-STIC-884A - Guía de configuración segura para Azure] para
obtener más información sobre el sistema de defensa DDoS de Azure.
Centro Crip tológico Nacional 37

![Imagen 1 - Página 37](CCN-STIC 885B_assets\pagina37_img1.png)

![Imagen 2 - Página 37](CCN-STIC 885B_assets\pagina37_img2.png)

![Imagen 3 - Página 37](CCN-STIC 885B_assets\pagina37_img3.png)

![Imagen 4 - Página 37](CCN-STIC 885B_assets\pagina37_img4.png)

![Imagen 5 - Página 37](CCN-STIC 885B_assets\pagina37_img5.png)

![Imagen 6 - Página 37](CCN-STIC 885B_assets\pagina37_img6.png)

![Imagen 7 - Página 37](CCN-STIC 885B_assets\pagina37_img7.png)

---

<!-- Página 38 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
4. SCRIPTS DE CONFIGURACIÓN
Existen tareas de administración que pueden realizarse de manera más ágil a través
del módulo de PowerShell “SharePoint Online Management Shell”. Este módulo se
utiliza para administrar usuarios, sitios y colecciones de sitios. Todos los cmdlets del
módulo comienzan con el prefijo SPO.
Los requerimientos mínimos de instalación en cuanto a Sistema operativo compatible:
Windows 11; Windows 10; Windows 7 Service Pack 1; Windows 8; Windows Server 2008 R2 SP1; Windows
Server 2008 Service Pack 2; Windows Server 2012; Windows Server 2016
Y la versión de PowerShell 3.0.
1. Comprobar si ya tenemos el módulo instalado, y si no, instalarlo.
Get-Module -Name Microsoft.Online.SharePoint.PowerShell -ListAvailable | Select Name,Version
Para instalarlo:
Install-Module -Name Microsoft.Online.SharePoint.PowerShell
2. Conectarse.
2.1. Con usuario y password:
$adminUPN="<Dirección de correo eléctronico complete de un administrador de SharePoint,
ejemplo: jdoe@contosotoycompany.onmicrosoft.com>"
$orgName="<Nombre de la organización de Microsoft 365, ejemplo: contosotoycompany>"
$userCredential = Get-Credential -UserName $adminUPN -Message "Type the password."
Connect-SPOService -Url https://$orgName-admin.sharepoint.com -Credential $userCredential.
2.2. Con MFA:
$orgName="< Nombre de la organización de Microsoft 365, ejemplo: contosotoycompany>"
Connect-SPOService -Url https://$orgName-admin.sharepoint.com
A continuación se muestran algunos ejemplos de cmdlets relacionados:
Obtener todas las colecciones de sitios
Get-SPOSite
Obtener información de una colección de sitio concreta
Get-SPOSite -Identity https://contoso.sharepoint.com
Obtener información detallada de un sitio de grupo
Get-SPOSite -Identity https://contoso.sharepoint.com/sites/groupname -detailed |fl
Deshabilitar la compartición de un sitio para los “no propietarios”
Get-SPOSite -Identity https://contoso.sharepoint.com -DisableSharingForNonOwnersStatus
Centro Crip tológico Nacional 38

![Imagen 1 - Página 38](CCN-STIC 885B_assets\pagina38_img1.png)

![Imagen 2 - Página 38](CCN-STIC 885B_assets\pagina38_img2.png)

![Imagen 3 - Página 38](CCN-STIC 885B_assets\pagina38_img3.png)

![Imagen 4 - Página 38](CCN-STIC 885B_assets\pagina38_img4.png)

![Imagen 5 - Página 38](CCN-STIC 885B_assets\pagina38_img5.png)

---

<!-- Página 39 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
5. OTRAS CONSIDERACIONES DE SEGURIDAD
5.1 CONTROL DE VERSIONES
Cuando el control de versiones está habilitado en la lista o biblioteca de SharePoint,
puede almacenar, hacer un seguimiento y restaurar elementos en una lista y archivos
de una biblioteca cada vez que cambien.
El control de versiones es, sin duda, una de las herramientas más útiles en
SharePoint: permite ver qué cambios se han producido en los documentos, mostrando
el número de versión y tamaño de cada documento, quién y cuándo realizó el último
cambio y ver y/o restaurar cualquier versión anterior.
Habilitar y configurar las versiones para una lista o biblioteca
1. Abrir la configuración de la biblioteca y pulsar enlace “Configuración de versiones”.
2. Configurar las opciones.
Centro Crip tológico Nacional 39

![Imagen 1 - Página 39](CCN-STIC 885B_assets\pagina39_img1.png)

![Imagen 2 - Página 39](CCN-STIC 885B_assets\pagina39_img2.png)

![Imagen 3 - Página 39](CCN-STIC 885B_assets\pagina39_img3.png)

![Imagen 4 - Página 39](CCN-STIC 885B_assets\pagina39_img4.png)

![Imagen 5 - Página 39](CCN-STIC 885B_assets\pagina39_img5.png)

![Imagen 6 - Página 39](CCN-STIC 885B_assets\pagina39_img6.png)

![Imagen 7 - Página 39](CCN-STIC 885B_assets\pagina39_img7.png)

---

<!-- Página 40 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Consultar el historial de versiones
1. Se accede a través del [menú de acciones] que aparece en la propia línea del
documento a consultar.
2. Se despliega a continuación todo el historial de versiones del documento:
Centro Crip tológico Nacional 40

![Imagen 1 - Página 40](CCN-STIC 885B_assets\pagina40_img1.png)

![Imagen 2 - Página 40](CCN-STIC 885B_assets\pagina40_img2.png)

![Imagen 3 - Página 40](CCN-STIC 885B_assets\pagina40_img3.png)

![Imagen 4 - Página 40](CCN-STIC 885B_assets\pagina40_img4.png)

![Imagen 5 - Página 40](CCN-STIC 885B_assets\pagina40_img5.png)

![Imagen 6 - Página 40](CCN-STIC 885B_assets\pagina40_img6.png)

![Imagen 7 - Página 40](CCN-STIC 885B_assets\pagina40_img7.png)

---

<!-- Página 41 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
3. En cada item del historial, en el campo “modificado”, se muestra un desplegable
con las acciones a realizar sobre esa versión concreta:
5.2 PAPELERA DE RECICLAJE
SharePoint Online establece dos niveles de papelera de reciclaje con dos áreas de
almacenamiento independientes, cada una con un período de retención de la
información. A diferencia de versiones anteriores no es configurable.
Nota: Para documentos sensibles que exijan un borrado inmediato, es responsabilidad del
usuario su eliminación definitiva de todas las áreas de la papelera de reciclaje.
1. Cuando se eliminan elementos (incluidos los de OneDrive for Business) de un sitio
de SharePoint, se envían a la papelera de reciclaje del sitio, también denominada
papelera de reciclaje de primer nivel, donde puede restaurarlos si es necesario.
2. Cuando se eliminan elementos de una papelera de reciclaje de un sitio, se envían a
la papelera de reciclaje de la colección de sitios, también denominada papelera de
reciclaje de segundo nivel.
Centro Crip tológico Nacional 41

| Nota: Para documentos sensibles que exijan un borrado inmediato, es responsabilidad del |
| --- |
| usuario su eliminación definitiva de todas las áreas de la papelera de reciclaje. |


![Imagen 1 - Página 41](CCN-STIC 885B_assets\pagina41_img1.png)

![Imagen 2 - Página 41](CCN-STIC 885B_assets\pagina41_img2.png)

![Imagen 3 - Página 41](CCN-STIC 885B_assets\pagina41_img3.png)

![Imagen 4 - Página 41](CCN-STIC 885B_assets\pagina41_img4.png)

![Imagen 5 - Página 41](CCN-STIC 885B_assets\pagina41_img5.png)

![Imagen 6 - Página 41](CCN-STIC 885B_assets\pagina41_img6.png)

![Imagen 7 - Página 41](CCN-STIC 885B_assets\pagina41_img7.png)

![Imagen 8 - Página 41](CCN-STIC 885B_assets\pagina41_img8.png)

---

<!-- Página 42 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Un administrador de la colección de sitios de SharePoint puede ver y restaurar los
elementos eliminados de la papelera de reciclaje de la colección de sitios a su
ubicación original. Si se elimina un elemento de la papelera de reciclaje de la colección
de sitios, o se supera el tiempo de retención, se eliminará de forma permanente.
¿Cuánto tiempo se conservan los elementos eliminados en la Papelera de reciclaje?
En SharePoint Online, los elementos se conservan por 93 días desde el momento en
que se eliminan de su ubicación original. Permanecen en la papelera de reciclaje del
sitio todo el tiempo, a menos que alguien lo elimine o vacíe esa papelera de reciclaje.
Centro Crip tológico Nacional 42

![Imagen 1 - Página 42](CCN-STIC 885B_assets\pagina42_img1.png)

![Imagen 2 - Página 42](CCN-STIC 885B_assets\pagina42_img2.png)

![Imagen 3 - Página 42](CCN-STIC 885B_assets\pagina42_img3.png)

![Imagen 4 - Página 42](CCN-STIC 885B_assets\pagina42_img4.png)

![Imagen 5 - Página 42](CCN-STIC 885B_assets\pagina42_img5.png)

![Imagen 6 - Página 42](CCN-STIC 885B_assets\pagina42_img6.png)

![Imagen 7 - Página 42](CCN-STIC 885B_assets\pagina42_img7.png)

---

<!-- Página 43 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
En ese caso, los elementos van a la papelera de reciclaje de la colección de sitios,
donde permanecen durante el resto de 93 días, a menos que:
• la papelera de reciclaje de la colección de sitios supera su cuota y comienza a
purgar los elementos más antiguos.
• el administrador de la colección de sitios elimina manualmente los elementos
de la papelera de reciclaje de la colección de sitios.
El almacenamiento de la papelera de reciclaje del sitio cuenta con la cuota de
almacenamiento de la colección de sitios y el umbral de vista de lista. La cantidad de
espacio asignado a la papelera de reciclaje de la colección de sitios es 200% de la cuota
de la colección de sitios. Estos valores no se pueden configurar.
3. Tercer nivel de copia de seguridad.
SharePoint Online conserva las copias de seguridad de todo el contenido durante
14 días adicionales más allá de la eliminación real. Si el contenido no se puede
restaurar a través de la papelera de reciclaje o de la restauración de archivos, un
administrador puede ponerse en contacto con el soporte técnico de Microsoft para
solicitar una restauración en cualquier momento dentro de la ventana de 14 días.
5.3 DIRECTIVAS DE USO COMPARTIDO
Los administradores globales y de SharePoint en Microsoft 365 pueden cambiar su
configuración de uso compartido de nivel de organización para SharePoint y OneDrive.
Para ello acceder al Centro de administración de SharePoint Online:
Los niveles establecidos son los siguientes:
Todos Los usuarios pueden compartir archivos y carpetas con vínculos que
no requieren inicio de sesión.
Centro Crip tológico Nacional 43

| Todos | Los usuarios pueden compartir archivos y carpetas con vínculos que <br> no requieren inicio de sesión. |
| --- | --- |


![Imagen 1 - Página 43](CCN-STIC 885B_assets\pagina43_img1.png)

![Imagen 2 - Página 43](CCN-STIC 885B_assets\pagina43_img2.png)

![Imagen 3 - Página 43](CCN-STIC 885B_assets\pagina43_img3.png)

![Imagen 4 - Página 43](CCN-STIC 885B_assets\pagina43_img4.png)

![Imagen 5 - Página 43](CCN-STIC 885B_assets\pagina43_img5.png)

![Imagen 6 - Página 43](CCN-STIC 885B_assets\pagina43_img6.png)

---

<!-- Página 44 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Invitados nuevos y existentes Los invitados deben iniciar sesión o proporcionar un código de
verificación.
Invitados existentes Solo los invitados que ya forman parte del directorio de su
organización.
Solo los miembros de su No se permite ningún tipo de uso compartido externo.
organización
1. Seleccionar el nivel menos permisivo para no permitir el uso compartido
externo, es decir, sólo se permitirá la compartición de documentos entre
miembros de la organización.
2. A continuación, se elige la opción que les aparecerá a los usuarios de forma
predeterminada.
Así, por ejemplo, con esta opción a los usuarios les aparecerá al compartir un
documento lo siguiente:
3. Elegir tipo de vínculo.
4. Seleccionar otras opciones de configuración.
Centro Crip tológico Nacional 44

| Invitados nuevos y existentes | Los invitados deben iniciar sesión o proporcionar un código de <br> verificación. |
| --- | --- |
| Invitados existentes | Solo los invitados que ya forman parte del directorio de su <br> organización. |
| Solo los miembros de su <br> organización | No se permite ningún tipo de uso compartido externo. |


![Imagen 1 - Página 44](CCN-STIC 885B_assets\pagina44_img1.png)

![Imagen 2 - Página 44](CCN-STIC 885B_assets\pagina44_img2.png)

![Imagen 3 - Página 44](CCN-STIC 885B_assets\pagina44_img3.png)

![Imagen 4 - Página 44](CCN-STIC 885B_assets\pagina44_img4.png)

![Imagen 5 - Página 44](CCN-STIC 885B_assets\pagina44_img5.png)

![Imagen 6 - Página 44](CCN-STIC 885B_assets\pagina44_img6.png)

![Imagen 7 - Página 44](CCN-STIC 885B_assets\pagina44_img7.png)

![Imagen 8 - Página 44](CCN-STIC 885B_assets\pagina44_img8.png)

---

<!-- Página 45 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
5. Elegir “permiso de vínculo predeterminado”. Valor recomendado: Ver.
5.4 BLOQUEAR LA INTEGRACIÓN CON YAMMER
De forma predeterminada SharePoint Online habilita la integración con Yammer.
Esto se puede restringir. Esta integración reemplaza a Newsfeed y cambia la
navegación global de Microsoft 365. Además, Yammer no es un servicio disponible
actualmente en el Centro de confianza de O365. Al habilitar la integración, Yammer
podrá leer y copiar el acceso a la información de usuario y de grupo de la empresa.
Se puede activar o desactivar Yammer para conversaciones en SharePoint desde el
Centro de administración de SharePoint Online.
1. Iniciar la página de configuración clásica.
2. En colaboración social empresarial, seleccionar “Utilizar SharePoint Newsfeed”.
Centro Crip tológico Nacional 45

![Imagen 1 - Página 45](CCN-STIC 885B_assets\pagina45_img1.png)

![Imagen 2 - Página 45](CCN-STIC 885B_assets\pagina45_img2.png)

![Imagen 3 - Página 45](CCN-STIC 885B_assets\pagina45_img3.png)

![Imagen 4 - Página 45](CCN-STIC 885B_assets\pagina45_img4.png)

![Imagen 5 - Página 45](CCN-STIC 885B_assets\pagina45_img5.png)

![Imagen 6 - Página 45](CCN-STIC 885B_assets\pagina45_img6.png)

![Imagen 7 - Página 45](CCN-STIC 885B_assets\pagina45_img7.png)

![Imagen 8 - Página 45](CCN-STIC 885B_assets\pagina45_img8.png)

![Imagen 9 - Página 45](CCN-STIC 885B_assets\pagina45_img9.png)

---

<!-- Página 46 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
6. GLOSARIO Y ABREVIATURAS
A continuación de describen una serie de términos, acrónimos y abreviaturas en
materia de seguridad utilizados en esta guía:
Término Definición
IRM Information Rights Management.
SPO SharePoint Online
Sitio de SPO es un sitio web que ofrece un espacio central de colaboración
y almacenamiento de documentos, información e ideas.
Sitio de para difundir información, compartir noticias, informes,
comunicación estados, etc. a una audiencia amplia en un formato
visualmente atractivo. Sólo genera contenido un pequeño
conjunto de miembros y es un público mucho mayor quien lo
consulta.
Sitio de grupo proporciona una ubicación concreta en la que un grupo de
personas
pueden trabajar en un proyecto concreto y compartir
información desde cualquier lugar con cualquier dispositivo.
Son grupos cerrados, la información se limita sólo a los
miembros del grupo o participantes específicos.
Sitio de grupo sitio de SPO accesible por cualquier persona de la
público organización.
Sitio de grupo sitio de SPO sólo accesible por miembros del grupo.
privado
Centro Crip tológico Nacional 46

| Término | Definición |
| --- | --- |
| IRM | Information Rights Management. |
| SPO | SharePoint Online |
| Sitio de SPO | es un sitio web que ofrece un espacio central de colaboración <br> y almacenamiento de documentos, información e ideas. |
| Sitio de <br> comunicación | para difundir información, compartir noticias, informes, <br> estados, etc. a una audiencia amplia en un formato <br> visualmente atractivo. Sólo genera contenido un pequeño <br> conjunto de miembros y es un público mucho mayor quien lo <br> consulta. |
| Sitio de grupo | proporciona una ubicación concreta en la que un grupo de <br> personas <br> pueden trabajar en un proyecto concreto y compartir <br> información desde cualquier lugar con cualquier dispositivo. <br> Son grupos cerrados, la información se limita sólo a los <br> miembros del grupo o participantes específicos. |
| Sitio de grupo <br> público | sitio de SPO accesible por cualquier persona de la <br> organización. |
| Sitio de grupo <br> privado | sitio de SPO sólo accesible por miembros del grupo. |


![Imagen 1 - Página 46](CCN-STIC 885B_assets\pagina46_img1.png)

![Imagen 2 - Página 46](CCN-STIC 885B_assets\pagina46_img2.png)

![Imagen 3 - Página 46](CCN-STIC 885B_assets\pagina46_img3.png)

![Imagen 4 - Página 46](CCN-STIC 885B_assets\pagina46_img4.png)

![Imagen 5 - Página 46](CCN-STIC 885B_assets\pagina46_img5.png)

---

<!-- Página 47 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
7. CUADRO RESUMEN DE MEDIDAS DE SEGURIDAD
Se facilita a continuación un cuadro resumen de configuraciones a aplicar para la protección del servicio, donde la organización podrá
valorar qué medidas de las propuestas se cumplen.
Control ENS Configuracion Estado
op Marco Operacional
op.acc Control de Acceso
op.acc.1 Identificación
Se ha configurado el uso de cuentas y la asignación de licencias a usuarios. Aplica: Cumple:
Siguiendo las recomendaciones de Office 365 basada en la guía [CCN-STIC-885A -
Guía de configuración segura para Office 365] Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Op.acc.2 Requisitos de Acceso
Centro Crip tológico Nacional 47

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| op |  |  | Marco Operacional |  |  |  |  |  |  |
| op.acc |  |  | Control de Acceso |  |  |  |  |  |  |
| op.acc.1 |  |  | Identificación |  |  |  |  |  |  |
|  |  |  | Se ha configurado el uso de cuentas y la asignación de licencias a usuarios. <br> Siguiendo las recomendaciones de Office 365 basada en la guía [CCN-STIC-885A - <br> Guía de configuración segura para Office 365] |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| Op.acc.2 |  |  | Requisitos de Acceso |  |  |  |  |  |  |


|  | No |
| --- | --- |


![Imagen 1 - Página 47](CCN-STIC 885B_assets\pagina47_img1.png)

![Imagen 2 - Página 47](CCN-STIC 885B_assets\pagina47_img2.png)

![Imagen 3 - Página 47](CCN-STIC 885B_assets\pagina47_img3.png)

![Imagen 4 - Página 47](CCN-STIC 885B_assets\pagina47_img4.png)

![Imagen 5 - Página 47](CCN-STIC 885B_assets\pagina47_img5.png)

---

<!-- Página 48 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
Se han comprobado los niveles de permisos para los recursos de la Aplica: Cumple:
organización: propietarios, miembros y visitantes.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Op.acc.3 Segregación de funciones y tareas
Se ha asignado adecuadamente el rol de Admin a un usuario administrador Aplica: Cumple:
de SharePoint (en caso de que se haya establecido una delegación para este
servicio).
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Centro Crip tológico Nacional 48

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | Se han comprobado los niveles de permisos para los recursos de la <br> organización: propietarios, miembros y visitantes. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| Op.acc.3 |  |  | Segregación de funciones y tareas |  |  |  |  |  |  |
|  |  |  | Se ha asignado adecuadamente el rol de Admin a un usuario administrador <br> de SharePoint (en caso de que se haya establecido una delegación para este <br> servicio). |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |


|  | No |
| --- | --- |


|  | No |
| --- | --- |


![Imagen 1 - Página 48](CCN-STIC 885B_assets\pagina48_img1.png)

![Imagen 2 - Página 48](CCN-STIC 885B_assets\pagina48_img2.png)

![Imagen 3 - Página 48](CCN-STIC 885B_assets\pagina48_img3.png)

![Imagen 4 - Página 48](CCN-STIC 885B_assets\pagina48_img4.png)

![Imagen 5 - Página 48](CCN-STIC 885B_assets\pagina48_img5.png)

---

<!-- Página 49 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
Op.acc.4 Proceso de gestión de derechos de acceso
Se han creado “niveles de permisos” específicos para la organización. Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Op.acc.5 Mecanismo de autenticación (usuarios externos)
Se ha informado a los usuarios que mantengan deshabilitadas las cookies Aplica: Cumple:
persistentes en el inicio de sesión.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Centro Crip tológico Nacional 49

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Op.acc.4 |  |  | Proceso de gestión de derechos de acceso |  |  |  |  |  |  |
|  |  |  | Se han creado “niveles de permisos” específicos para la organización. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| Op.acc.5 |  |  | Mecanismo de autenticación (usuarios externos) |  |  |  |  |  |  |
|  |  |  | Se ha informado a los usuarios que mantengan deshabilitadas las cookies <br> persistentes en el inicio de sesión. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> No |  | Observaciones: |  |


|  | No |
| --- | --- |


|  | No |
| --- | --- |


| Si |
| --- |


| No |
| --- |


![Imagen 1 - Página 49](CCN-STIC 885B_assets\pagina49_img1.png)

![Imagen 2 - Página 49](CCN-STIC 885B_assets\pagina49_img2.png)

![Imagen 3 - Página 49](CCN-STIC 885B_assets\pagina49_img3.png)

![Imagen 4 - Página 49](CCN-STIC 885B_assets\pagina49_img4.png)

![Imagen 5 - Página 49](CCN-STIC 885B_assets\pagina49_img5.png)

---

<!-- Página 50 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
Op.acc.5 Mecanismo de autenticación (usuarios externos)
Se ha configurado la advertencia y cierre de las sesiones de los usuarios Aplica: Cumple:
después de un período de inactividad.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Op.acc.5 Mecanismo de autenticación (usuarios externos)
Se ha bloqueado el acceso a aplicaciones que no usan la autenticación Aplica: Cumple:
moderna.
Si No Si No
Evidencias Recogidas: Observaciones:
Centro Crip tológico Nacional 50

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Op.acc.5 |  |  | Mecanismo de autenticación (usuarios externos) |  |  |  |  |  |  |
|  |  |  | Se ha configurado la advertencia y cierre de las sesiones de los usuarios <br> después de un período de inactividad. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| Op.acc.5 |  |  | Mecanismo de autenticación (usuarios externos) |  |  |  |  |  |  |
|  |  |  | Se ha bloqueado el acceso a aplicaciones que no usan la autenticación <br> moderna. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: |  | Observaciones: |  |


|  | No |
| --- | --- |


|  | No |
| --- | --- |


![Imagen 1 - Página 50](CCN-STIC 885B_assets\pagina50_img1.png)

![Imagen 2 - Página 50](CCN-STIC 885B_assets\pagina50_img2.png)

![Imagen 3 - Página 50](CCN-STIC 885B_assets\pagina50_img3.png)

![Imagen 4 - Página 50](CCN-STIC 885B_assets\pagina50_img4.png)

![Imagen 5 - Página 50](CCN-STIC 885B_assets\pagina50_img5.png)

---

<!-- Página 51 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
Si No
Op.acc.5 Mecanismo de autenticación (usuarios externos)
Se encuentra habilitado el “doble factor de autenticación” y se dispone de Aplica: Cumple:
una adecuada política de gestión de credenciales.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Op.acc.5 Mecanismo de autenticación (usuarios externos)
Se han configurado directivas de acceso condicional o reglas en AD FS, como Aplica: Cumple:
se describe en la guía [CCN-STIC-885A - Guía de configuración segura para
Office 365].
Si No Si No
Centro Crip tológico Nacional 51

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  | Si No |  |  |  |
| Op.acc.5 |  |  | Mecanismo de autenticación (usuarios externos) |  |  |  |  |  |  |
|  |  |  | Se encuentra habilitado el “doble factor de autenticación” y se dispone de <br> una adecuada política de gestión de credenciales. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| Op.acc.5 |  |  | Mecanismo de autenticación (usuarios externos) |  |  |  |  |  |  |
|  |  |  | Se han configurado directivas de acceso condicional o reglas en AD FS, como <br> se describe en la guía [CCN-STIC-885A - Guía de configuración segura para <br> Office 365]. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |


|  | No |
| --- | --- |


|  | No |
| --- | --- |


![Imagen 1 - Página 51](CCN-STIC 885B_assets\pagina51_img1.png)

![Imagen 2 - Página 51](CCN-STIC 885B_assets\pagina51_img2.png)

![Imagen 3 - Página 51](CCN-STIC 885B_assets\pagina51_img3.png)

![Imagen 4 - Página 51](CCN-STIC 885B_assets\pagina51_img4.png)

![Imagen 5 - Página 51](CCN-STIC 885B_assets\pagina51_img5.png)

---

<!-- Página 52 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
Evidencias Recogidas: Observaciones:
Si No
Op.acc.5 Mecanismo de autenticación (usuarios externos)
Se ha activado la Ubicación de red para permitir el acceso solo desde Aplica: Cumple:
determinadas direcciones IP. Y la limitación de acceso a los administradores.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Op.acc.5 Mecanismo de autenticación (usuarios externos)
Se han configurado directivas de acceso condicional para el acceso remoto, Aplica: Cumple:
como se describe en la guía [CCN-STIC-885A - Guía de configuración segura
para Office 365].
Si No Si No
Centro Crip tológico Nacional 52

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| Op.acc.5 |  |  | Mecanismo de autenticación (usuarios externos) |  |  |  |  |  |  |
|  |  |  | Se ha activado la Ubicación de red para permitir el acceso solo desde <br> determinadas direcciones IP. Y la limitación de acceso a los administradores. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| Op.acc.5 |  |  | Mecanismo de autenticación (usuarios externos) |  |  |  |  |  |  |
|  |  |  | Se han configurado directivas de acceso condicional para el acceso remoto, <br> como se describe en la guía [CCN-STIC-885A - Guía de configuración segura <br> para Office 365]. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |


|  | No |
| --- | --- |


|  | No |
| --- | --- |


![Imagen 1 - Página 52](CCN-STIC 885B_assets\pagina52_img1.png)

![Imagen 2 - Página 52](CCN-STIC 885B_assets\pagina52_img2.png)

![Imagen 3 - Página 52](CCN-STIC 885B_assets\pagina52_img3.png)

![Imagen 4 - Página 52](CCN-STIC 885B_assets\pagina52_img4.png)

![Imagen 5 - Página 52](CCN-STIC 885B_assets\pagina52_img5.png)

---

<!-- Página 53 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
Evidencias Recogidas: Observaciones:
Si No
Op.acc.6 Mecanismo de autenticación (usuarios de la organización)
Ídem controles aplicados a Op.acc.5 Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
op.exp Explotacion
op.exp.6 Protección frente a código dañino
Se ha bloqueado que los usuarios puedan ejecutar scripts personalizados en Aplica: Cumple:
Centro Crip tológico Nacional 53

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| Op.acc.6 |  |  | Mecanismo de autenticación (usuarios de la organización) |  |  |  |  |  |  |
|  |  |  | Ídem controles aplicados a Op.acc.5 |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| op.exp |  |  | Explotacion |  |  |  |  |  |  |
| op.exp.6 |  |  | Protección frente a código dañino |  |  |  |  |  |  |
|  |  |  | Se ha bloqueado que los usuarios puedan ejecutar scripts personalizados en |  |  | Aplica: |  | Cumple: |  |


|  | No |
| --- | --- |


![Imagen 1 - Página 53](CCN-STIC 885B_assets\pagina53_img1.png)

![Imagen 2 - Página 53](CCN-STIC 885B_assets\pagina53_img2.png)

![Imagen 3 - Página 53](CCN-STIC 885B_assets\pagina53_img3.png)

![Imagen 4 - Página 53](CCN-STIC 885B_assets\pagina53_img4.png)

![Imagen 5 - Página 53](CCN-STIC 885B_assets\pagina53_img5.png)

---

<!-- Página 54 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
sitios personales y en sitios creados por ellos mismos.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
op.exp.6 Protección frente a código dañino
Se recomienda la detección de amenazas en tiempo real, accesible desde el Aplica: Cumple:
Centro de Seguridad y cumplimiento de Office 365.
*Para dichas tareas la organización debe dispone de Microsoft Defender Si No Si No
para Office 365.
Evidencias Recogidas: Observaciones:
Si No
op.exp.8 Registro de la actividad
Centro Crip tológico Nacional 54

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | sitios personales y en sitios creados por ellos mismos. |  |  | Si No |  | Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| op.exp.6 |  |  | Protección frente a código dañino |  |  |  |  |  |  |
|  |  |  | Se recomienda la detección de amenazas en tiempo real, accesible desde el <br> Centro de Seguridad y cumplimiento de Office 365. <br> *Para dichas tareas la organización debe dispone de Microsoft Defender <br> para Office 365. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| op.exp.8 |  |  | Registro de la actividad |  |  |  |  |  |  |


|  | No |
| --- | --- |


|  | No |
| --- | --- |


![Imagen 1 - Página 54](CCN-STIC 885B_assets\pagina54_img1.png)

![Imagen 2 - Página 54](CCN-STIC 885B_assets\pagina54_img2.png)

![Imagen 3 - Página 54](CCN-STIC 885B_assets\pagina54_img3.png)

![Imagen 4 - Página 54](CCN-STIC 885B_assets\pagina54_img4.png)

![Imagen 5 - Página 54](CCN-STIC 885B_assets\pagina54_img5.png)

---

<!-- Página 55 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
Se ha activado el registro de auditoría. Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
op.mon Monitorización del sistema
Se han configurado alertas en el Centro de Seguridad y cumplimiento. Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Centro Crip tológico Nacional 55

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | Se ha activado el registro de auditoría. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| op.mon |  |  | Monitorización del sistema |  |  |  |  |  |  |
|  |  |  | Se han configurado alertas en el Centro de Seguridad y cumplimiento. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |


|  | No |
| --- | --- |


|  | No |
| --- | --- |


![Imagen 1 - Página 55](CCN-STIC 885B_assets\pagina55_img1.png)

![Imagen 2 - Página 55](CCN-STIC 885B_assets\pagina55_img2.png)

![Imagen 3 - Página 55](CCN-STIC 885B_assets\pagina55_img3.png)

![Imagen 4 - Página 55](CCN-STIC 885B_assets\pagina55_img4.png)

![Imagen 5 - Página 55](CCN-STIC 885B_assets\pagina55_img5.png)

---

<!-- Página 56 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
mp Medidas de Protección
mp.info Protección de la información
mp.info.2 Calificación de la información
Se han aplicado políticas de retención. Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
mp.info.2 Calificación de la información
Se han aplicado políticas de DLPs cómo se describe en el apartado Aplica: Cumple:
Calificación de la información de la guía [CCN-STIC-884A - Guía de
configuración segura para Azure].
Si No Si No
Centro Crip tológico Nacional 56

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| mp |  |  | Medidas de Protección |  |  |  |  |  |  |
| mp.info |  |  | Protección de la información |  |  |  |  |  |  |
| mp.info.2 |  |  | Calificación de la información |  |  |  |  |  |  |
|  |  |  | Se han aplicado políticas de retención. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| mp.info.2 |  |  | Calificación de la información |  |  |  |  |  |  |
|  |  |  | Se han aplicado políticas de DLPs cómo se describe en el apartado <br> Calificación de la información de la guía [CCN-STIC-884A - Guía de <br> configuración segura para Azure]. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |


|  | No |
| --- | --- |


|  | No |
| --- | --- |


![Imagen 1 - Página 56](CCN-STIC 885B_assets\pagina56_img1.png)

![Imagen 2 - Página 56](CCN-STIC 885B_assets\pagina56_img2.png)

![Imagen 3 - Página 56](CCN-STIC 885B_assets\pagina56_img3.png)

![Imagen 4 - Página 56](CCN-STIC 885B_assets\pagina56_img4.png)

![Imagen 5 - Página 56](CCN-STIC 885B_assets\pagina56_img5.png)

---

<!-- Página 57 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
Evidencias Recogidas: Observaciones:
Si No
mp.info.2 Calificación de la información
Se han aplicado sensitivity labels. Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
mp.info.2 Calificación de la información
Se ha aplicado un cifrado especial mediante etiquetas de sensibilidad a sitios Aplica: Cumple:
de SharePoint que precisan una protección especial.
Si No Si No
Centro Crip tológico Nacional 57

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| mp.info.2 |  |  | Calificación de la información |  |  |  |  |  |  |
|  |  |  | Se han aplicado sensitivity labels. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| mp.info.2 |  |  | Calificación de la información |  |  |  |  |  |  |
|  |  |  | Se ha aplicado un cifrado especial mediante etiquetas de sensibilidad a sitios <br> de SharePoint que precisan una protección especial. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |


|  | No |
| --- | --- |


|  | No |
| --- | --- |


![Imagen 1 - Página 57](CCN-STIC 885B_assets\pagina57_img1.png)

![Imagen 2 - Página 57](CCN-STIC 885B_assets\pagina57_img2.png)

![Imagen 3 - Página 57](CCN-STIC 885B_assets\pagina57_img3.png)

![Imagen 4 - Página 57](CCN-STIC 885B_assets\pagina57_img4.png)

![Imagen 5 - Página 57](CCN-STIC 885B_assets\pagina57_img5.png)

---

<!-- Página 58 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
* Microsoft cifra automáticamente los datos en reposo y de manera
transparente para el usuario. Para un cifrado adicional se pueden usar las
Evidencias Recogidas: Observaciones:
sensitivity labels.
Si No
mp.info.5 Limpieza de documentos
Se ha eliminado información personal y en general cualquier metadato que Aplica: Cumple:
pudiera estar asociado a los documentos.
*Mediante la herramienta Inspector de documentos (característica que se Si No Si No
accede desde las propias aplicaciones de Word, Excel, PowerPoint o Visio) o
aplicaciones de terceros. Como se describe en el apartado Limpieza de
documentos de la guía [CCN-STIC-885A - Guía de configuración segura para
Evidencias Recogidas: Observaciones:
Office 365].
Si No
mp.info.6 Copias de seguridad
Se han aplicado políticas de retención para gestionar el tiempo de Aplica: Cumple:
almacenamiento de los documentos y correos.
Si No Si No
Centro Crip tológico Nacional 58

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | * Microsoft cifra automáticamente los datos en reposo y de manera <br> transparente para el usuario. Para un cifrado adicional se pueden usar las <br> sensitivity labels. |  |  |  |  |  |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| mp.info.5 |  |  | Limpieza de documentos |  |  |  |  |  |  |
|  |  |  | Se ha eliminado información personal y en general cualquier metadato que <br> pudiera estar asociado a los documentos. <br> *Mediante la herramienta Inspector de documentos (característica que se <br> accede desde las propias aplicaciones de Word, Excel, PowerPoint o Visio) o <br> aplicaciones de terceros. Como se describe en el apartado Limpieza de <br> documentos de la guía [CCN-STIC-885A - Guía de configuración segura para <br> Office 365]. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| mp.info.6 |  |  | Copias de seguridad |  |  |  |  |  |  |
|  |  |  | Se han aplicado políticas de retención para gestionar el tiempo de <br> almacenamiento de los documentos y correos. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |


|  | No |
| --- | --- |


|  | No |
| --- | --- |


![Imagen 1 - Página 58](CCN-STIC 885B_assets\pagina58_img1.png)

![Imagen 2 - Página 58](CCN-STIC 885B_assets\pagina58_img2.png)

![Imagen 3 - Página 58](CCN-STIC 885B_assets\pagina58_img3.png)

![Imagen 4 - Página 58](CCN-STIC 885B_assets\pagina58_img4.png)

![Imagen 5 - Página 58](CCN-STIC 885B_assets\pagina58_img5.png)

---

<!-- Página 59 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
Evidencias Recogidas: Observaciones:
Si No
mp.info.6 Copias de seguridad
Se ha comunicado a los usuarios cómo gestionar el “control de versiones” de Aplica: Cumple:
los documentos y la papelera de reciclaje.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
mp.info Evitar indización de bibliotecas con contenido sensible
Se ha configurado que las bibliotecas con contenido sensible no aparezcan Aplica: Cumple:
en el buscador.
Si No Si No
Centro Crip tológico Nacional 59

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |  |
| mp.info.6 |  |  | Copias de seguridad |  |  |  |  |  |  |  |
|  |  |  | Se ha comunicado a los usuarios cómo gestionar el “control de versiones” de <br> los documentos y la papelera de reciclaje. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |  |
| mp.info |  |  | Evitar indización de bibliotecas con contenido sensible |  |  |  |  |  |  |  |
|  |  |  | Se ha configurado que las bibliotecas con contenido sensible no aparezcan <br> en el buscador. |  |  | Aplica: |  | Cumple: <br> No |  |  |
|  |  |  |  |  |  |  |  |  | No |  |


|  | No |
| --- | --- |


| Si |
| --- |


| No |
| --- |


| Si |
| --- |


![Imagen 1 - Página 59](CCN-STIC 885B_assets\pagina59_img1.png)

![Imagen 2 - Página 59](CCN-STIC 885B_assets\pagina59_img2.png)

![Imagen 3 - Página 59](CCN-STIC 885B_assets\pagina59_img3.png)

![Imagen 4 - Página 59](CCN-STIC 885B_assets\pagina59_img4.png)

![Imagen 5 - Página 59](CCN-STIC 885B_assets\pagina59_img5.png)

---

<!-- Página 60 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
Evidencias Recogidas: Observaciones:
Si No
mp.info Evitar indización de bibliotecas con contenido sensible
Se ha configurado que las bibliotecas con contenido sensible no aparezcan Aplica: Cumple:
en el buscador. Incluyendo de igual modo la descarga de elementos cuando
no existe conexión.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
mp.s Protección de los servicios
mp.s.4 Protección frente a la denegación de servicio
Centro Crip tológico Nacional 60

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| mp.info |  |  | Evitar indización de bibliotecas con contenido sensible |  |  |  |  |  |  |
|  |  |  | Se ha configurado que las bibliotecas con contenido sensible no aparezcan <br> en el buscador. Incluyendo de igual modo la descarga de elementos cuando <br> no existe conexión. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| mp.s |  |  | Protección de los servicios |  |  |  |  |  |  |
| mp.s.4 |  |  | Protección frente a la denegación de servicio |  |  |  |  |  |  |


|  | No |
| --- | --- |


![Imagen 1 - Página 60](CCN-STIC 885B_assets\pagina60_img1.png)

![Imagen 2 - Página 60](CCN-STIC 885B_assets\pagina60_img2.png)

![Imagen 3 - Página 60](CCN-STIC 885B_assets\pagina60_img3.png)

![Imagen 4 - Página 60](CCN-STIC 885B_assets\pagina60_img4.png)

![Imagen 5 - Página 60](CCN-STIC 885B_assets\pagina60_img5.png)

---

<!-- Página 61 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Control ENS Configuracion Estado
Se ha tenido en cuenta la información detallada en la guía [CCN-STIC-884A - Aplica: Cumple:
Guía de configuración segura para Azure] sobre el sistema de defensa DDoS
de Azure.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Centro Crip tológico Nacional 61

|  | Control ENS |  |  | Configuracion |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | Se ha tenido en cuenta la información detallada en la guía [CCN-STIC-884A - <br> Guía de configuración segura para Azure] sobre el sistema de defensa DDoS <br> de Azure. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |


|  | No |
| --- | --- |


![Imagen 1 - Página 61](CCN-STIC 885B_assets\pagina61_img1.png)

![Imagen 2 - Página 61](CCN-STIC 885B_assets\pagina61_img2.png)

![Imagen 3 - Página 61](CCN-STIC 885B_assets\pagina61_img3.png)

![Imagen 4 - Página 61](CCN-STIC 885B_assets\pagina61_img4.png)

![Imagen 5 - Página 61](CCN-STIC 885B_assets\pagina61_img5.png)

---

<!-- Página 62 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
OTRAS CONSIDERACIONES DE SEGURIDAD
Uso compartido externo
Se ha restringido el uso compartido externo. Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Integración con Yammer
Se ha bloqueado la integración con Yammer Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Centro Crip tológico Nacional 62

|  | OTRAS CONSIDERACIONES DE SEGURIDAD |  |  |
| --- | --- | --- | --- |
|  | Uso compartido externo |  |  |
|  | Se ha restringido el uso compartido externo. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
|  | Integración con Yammer |  |  |
|  | Se ha bloqueado la integración con Yammer | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |


|  | No |
| --- | --- |


|  | No |
| --- | --- |


![Imagen 1 - Página 62](CCN-STIC 885B_assets\pagina62_img1.png)

![Imagen 2 - Página 62](CCN-STIC 885B_assets\pagina62_img2.png)

![Imagen 3 - Página 62](CCN-STIC 885B_assets\pagina62_img3.png)

![Imagen 4 - Página 62](CCN-STIC 885B_assets\pagina62_img4.png)

![Imagen 5 - Página 62](CCN-STIC 885B_assets\pagina62_img5.png)

---

<!-- Página 63 de 63 -->

CCN-STIC-885B Guía de configuración segura para SharePoint Online
Centro Crip tológico Nacional 63

![Imagen 1 - Página 63](CCN-STIC 885B_assets\pagina63_img1.png)

![Imagen 2 - Página 63](CCN-STIC 885B_assets\pagina63_img2.png)

![Imagen 3 - Página 63](CCN-STIC 885B_assets\pagina63_img3.png)

![Imagen 4 - Página 63](CCN-STIC 885B_assets\pagina63_img4.png)

![Imagen 5 - Página 63](CCN-STIC 885B_assets\pagina63_img5.png)

![Imagen 6 - Página 63](CCN-STIC 885B_assets\pagina63_img6.png)

![Imagen 7 - Página 63](CCN-STIC 885B_assets\pagina63_img7.png)