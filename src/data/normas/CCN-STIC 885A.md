---
**Author:** CCN
**CreationDate:** D:20240530121837+02'00'
**ModDate:** D:20240530121837+02'00'
---

<!-- Página 1 de 102 -->

Guía de Seguridad de las TIC
CCN-STIC 885A
Guía de configuración segura para Office 365
MAYO 2024

![Imagen 1 - Página 1](CCN-STIC 885A_assets\pagina1_img1.png)

![Imagen 2 - Página 1](CCN-STIC 885A_assets\pagina1_img2.jpeg)

![Imagen 3 - Página 1](CCN-STIC 885A_assets\pagina1_img3.jpeg)

---

<!-- Página 2 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
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
 Centro Criptológico Nacional, 2024
NIPO: 083-24-177-0
Fecha de Edición: mayo de 2024
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

![Imagen 1 - Página 2](CCN-STIC 885A_assets\pagina2_img1.png)

![Imagen 2 - Página 2](CCN-STIC 885A_assets\pagina2_img2.png)

![Imagen 3 - Página 2](CCN-STIC 885A_assets\pagina2_img3.png)

![Imagen 4 - Página 2](CCN-STIC 885A_assets\pagina2_img4.png)

![Imagen 5 - Página 2](CCN-STIC 885A_assets\pagina2_img5.png)

![Imagen 6 - Página 2](CCN-STIC 885A_assets\pagina2_img6.jpeg)

![Imagen 7 - Página 2](CCN-STIC 885A_assets\pagina2_img7.png)

![Imagen 8 - Página 2](CCN-STIC 885A_assets\pagina2_img8.png)

---

<!-- Página 3 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
ÍNDICE
1. OFFICE 365 ........................................................................................................... 4
1.1 DESCRIPCION DEL USO DE ESTA GUÍA ..................................................................... 4
1.2 DEFICIÓN DE LA SOLUCIÓN ...................................................................................... 4
1.3 PRERREQUISITOS PARA EL DESPLIEGUE MEDIANTE POWERSHELL ......................... 5
2. DESPLIEGUE DE OFFICE 365 .................................................................................. 7
2.1 ADMINISTRADOR – CONFIGURACION INICIAL ......................................................... 7
2.2 USUARIO FINAL – PRIMEROS PASOS ...................................................................... 11
3. CONFIGURACIÓN DE OFFICE 365 ........................................................................ 13
3.1 MARCO OPERACIONAL ........................................................................................... 13
3.1.1 CONTROL DE ACCESO ........................................................................................ 13
3.1.1.1 IDENTIFICACIÓN ............................................................................................ 13
3.1.1.2 REQUISITOS DE ACCESO ............................................................................... 27
3.1.1.3 SEGREGACIÓN DE FUNCIONES Y TAREAS ..................................................... 27
3.1.1.4 PROCESO DE GESTIÓN DE DERECHOS DE ACCESO ....................................... 36
3.1.1.5 MECANISMO DE AUTENTICACIÓN (USUARIOS EXTERNOS) ......................... 36
3.1.1.6 MECANISMO DE AUTENTICACIÓN (USUARIOS DE LA ORGANIZACIÓN) ...... 42
3.1.2 EXPLOTACIÓN .................................................................................................... 42
3.1.2.1 PROTECCIÓN FRENTE A CÓDIGO DAÑINO .................................................... 42
3.1.2.2 GESTIÓN DE INCIDENTES .............................................................................. 44
3.1.2.3 REGISTRO DE LA ACTIVIDAD ......................................................................... 46
3.1.3 MONITORIZACIÓN DEL SISTEMA ....................................................................... 49
3.2 MEDIDAS DE PROTECCIÓN ..................................................................................... 55
3.2.1 PROTECCIÓN DE LAS COMUNICACIONES .......................................................... 55
3.2.2 PROTECCIÓN DE LA INFORMACIÓN .................................................................. 56
3.2.2.1 CALIFICACIÓN DE LA INFORMACIÓN ............................................................ 56
3.2.2.2 LIMPIEZA DE DOCUMENTOS......................................................................... 85
3.2.2.3 COPIAS DE SEGURIDAD ................................................................................. 85
3.2.3 PROTECCIÓN DE LOS SERVICIOS ....................................................................... 86
3.2.3.1 PROTECCIÓN FRENTE A DENEGACIÓN DE SERVICIO .................................... 86
4. OTRAS CONSIDERACIONES DE SEGURIDAD ......................................................... 87
4.1 SERVICIOS Y COMPLEMENTOS ............................................................................... 87
5. CARACTERÍSTICAS DISPONIBLES POR LICENCIAMIENTO ...................................... 88
6. GLOSARIO Y ABREVIATURAS .............................................................................. 90
7. ANEXO A. CREAR UNA CUENTA DE USUARIO INDIVIDUAL ................................... 92
8. ANEXO B. CREAR VARIAS CUENTAS DE USUARIO ................................................ 93
9. CUADRO RESUMEN DE MEDIDAS DE SEGURIDAD ............................................... 95
Centro Crip tológico Nacional 3

![Imagen 1 - Página 3](CCN-STIC 885A_assets\pagina3_img1.png)

![Imagen 2 - Página 3](CCN-STIC 885A_assets\pagina3_img2.png)

![Imagen 3 - Página 3](CCN-STIC 885A_assets\pagina3_img3.png)

![Imagen 4 - Página 3](CCN-STIC 885A_assets\pagina3_img4.png)

![Imagen 5 - Página 3](CCN-STIC 885A_assets\pagina3_img5.png)

---

<!-- Página 4 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
1. OFFICE 365
1.1 DESCRIPCION DEL USO DE ESTA GUÍA
El objetivo de la presente guía es indicar los pasos a seguir para la configuración de
Office 365 cumpliendo con los requisitos Esquema Nacional de Seguridad en su
categoría ALTA.
En esta guía se abordarán los servicios esenciales comunes a todos los servicios de
la solución informática Office 365 y debe consultarse juntamente con el resto de las
guías específicas de cada servicio: Sharepoint Online [CCN-STIC-885B - Guía de
configuración segura para Sharepoint Online], Exchange Online [CCN-STIC-885C - Guía
de configuración segura para Exchange Online] y Teams [CCN-STIC-885D - Guía de
configuración segura para Microsoft Teams].
El escenario que se presenta en las guías es el de “sólo nube”, no contemplándose
la hibridación de sistemas On-premises de la organización con entorno Cloud.
Para la confección de esta guía se han consultado las siguientes fuentes:
 Documentación oficial de Microsoft.
 CCN-STIC-884A - Guía de configuración segura para Azure.
 ENS Real Decreto BOE-A-2010-1330.
 ENS Real Decreto BOE-A-2022-7191.
1.2 DEFICIÓN DE LA SOLUCIÓN
Office 365 es un conjunto de aplicaciones y servicios basados en la nube alojados en
servidores propiedad de Microsoft y disponibles desde dispositivos con conexión a
Internet. Office 365 funciona sobre Entra ID.
Se trata de una solución de Microsoft que
nos permite crear, acceder y compartir
documentos de Word, Excel, OneNote y
PowerPoint desde cualquier dispositivo que
tenga acceso a internet.
Además de proporcionar herramientas
adicionales de correo electrónico, mensajería
instantánea, videoconferencias, pantallas
compartidas, almacenamiento en la nube,
calendarios, contactos, etc.
Centro Crip tológico Nacional 4

![Imagen 1 - Página 4](CCN-STIC 885A_assets\pagina4_img1.png)

![Imagen 2 - Página 4](CCN-STIC 885A_assets\pagina4_img2.png)

![Imagen 3 - Página 4](CCN-STIC 885A_assets\pagina4_img3.png)

![Imagen 4 - Página 4](CCN-STIC 885A_assets\pagina4_img4.png)

![Imagen 5 - Página 4](CCN-STIC 885A_assets\pagina4_img5.png)

![Imagen 6 - Página 4](CCN-STIC 885A_assets\pagina4_img6.png)

---

<!-- Página 5 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
1.3 PRERREQUISITOS PARA EL DESPLIEGUE MEDIANTE POWERSHELL
PowerShell de Office 365 permite administrar la configuración de Office 365 desde
la línea de comandos. Conectarse a PowerShell de Office 365 es un proceso sencillo
que consiste en instalar el software necesario y conectarse a la organización de Office
365.
Hay tres versiones del módulo de PowerShell que puede usarse para conectarse a
Office 365 y administrar cuentas de usuario, grupos y licencias:
a) Microsoft Azure Active Directory PowerShell para Graph (los cmdlets incluyen
Azure AD en su nombre).
b) Microsoft Azure Active Directory para Windows PowerShell (los cmdlets incluyen
MSOL en su nombre).
c) Microsoft Graph PowerShell (los cmdlets incluyen MG en su nombre).
El día 30 de marzo del 2024, los módulos Microsoft Azure Active Directory
PowerShell para Graph y Módulo Microsoft Azure Active Directory para Windows
PowerShell fueron deprecados y sustituidos por Microsoft Graph PowerShell. Esto no
significa que no se puedan utilizar, si no que al estar deprecados dejaran de recibir
actualizaciones.
Conviene destacar que existen dos caminos para la ejecución de los comandos de
PowerShell descritos en esta guía: Azure Cloud Shell, incluido en el propio portal de
Entra ID; y ejecución remota de PowerShell, instalando los módulos necesarios en el
equipo cliente del administrador. La seguridad para la conexión con Microsoft Graph,
se hace desde:
a) Autenticación inicial. Mediante un usuario, Token y Certificado digital con los
derechos adecuados para la administración del servicio.
b) Cifrado continuo de la comunicación. Una vez completada la autenticación
inicial, el protocolo de comunicación remota de PowerShell cifra toda la
comunicación con una clave simétrica AES256 por sesión.
Requerimientos previos
Usar una versión de 64 bits de Windows. Es necesario así mismo, usar la versión 7 o
posterior de PowerShell. Más información sobre requerimientos previos de
plataformas en: Install the Microsoft Graph PowerShell SDK | Microsoft Learn
Instalar módulo Microsoft Graph PowerShell
Estos pasos son necesarios una sola vez en el equipo, no cada vez que se conecta.
Sin embargo, probablemente se necesitará instalar las versiones más recientes de
software periódicamente.
a) Instalar el Módulo Microsoft Graph PowerShell para Windows siguiendo estos
pasos:
1. Abrir un símbolo del sistema de Windows PowerShell con privilegios
elevados (ejecute Windows PowerShell como administrador).
Centro Crip tológico Nacional 5

![Imagen 1 - Página 5](CCN-STIC 885A_assets\pagina5_img1.png)

![Imagen 2 - Página 5](CCN-STIC 885A_assets\pagina5_img2.png)

![Imagen 3 - Página 5](CCN-STIC 885A_assets\pagina5_img3.png)

![Imagen 4 - Página 5](CCN-STIC 885A_assets\pagina5_img4.png)

![Imagen 5 - Página 5](CCN-STIC 885A_assets\pagina5_img5.png)

---

<!-- Página 6 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
2. Ejecutar el comando:
Install-Module Microsoft.Graph -Scope CurrentUser
b) Para actualizar una nueva versión del módulo ejecutar el comando anterior con
el parámetro Force:
Update-Module Microsoft.Graph
Nota: Se recomienda realizar actualizaciones mensuales.
c) Conectarse a Microsoft Graph
Para conectarse a Microsoft Graph tenemos varios métodos, por usuario y
contraseña, token, certificado, etc. El método más rápido es:
Connect-MgGraph -Scopes "User.ReadWrite.All"
La etiqueta -Scope se refiere a los permisos que tendrá el usuario cuando haga
login, en este ejemplo son de lectura y escritura de usuarios. Existen más
métodos de login con este comando, para obtener más información, revisar el
enlace Connect-MgGraph.
Una vez ejecutado el
comando anterior nos saldrá
esta ventana, pidiendo
permisos sobre el tenant,
click en Aceptar.
Centro Crip tológico Nacional 6

|  | Install-Module Microsoft.Graph -Scope CurrentUser |
| --- | --- |


|  | Update-Module Microsoft.Graph |
| --- | --- |


|  | Connect-MgGraph -Scopes "User.ReadWrite.All" |
| --- | --- |


![Imagen 1 - Página 6](CCN-STIC 885A_assets\pagina6_img1.jpeg)

![Imagen 2 - Página 6](CCN-STIC 885A_assets\pagina6_img2.png)

![Imagen 3 - Página 6](CCN-STIC 885A_assets\pagina6_img3.png)

![Imagen 4 - Página 6](CCN-STIC 885A_assets\pagina6_img4.png)

![Imagen 5 - Página 6](CCN-STIC 885A_assets\pagina6_img5.png)

![Imagen 6 - Página 6](CCN-STIC 885A_assets\pagina6_img6.png)

---

<!-- Página 7 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
2. DESPLIEGUE DE OFFICE 365
Esta guía hace referencia a la configuración de seguridad de Office 365. La
información específica de cada servicio se encuentra en las siguientes guías:
Sharepoint Online [CCN-STIC-885B - Guía de configuración segura para Sharepoint
Online], Exchange Online [CCN-STIC-885C - Guía de configuración segura para
Exchange Online] y Teams [CCN-STIC-885D - Guía de configuración segura para
Microsoft Teams].
Office 365 se encuentra englobado en la categoría de servicio SaaS (Software as a
Service). El CSP (Microsoft) es el encargado de ofrecer al cliente el software como un
servicio.
2.1 ADMINISTRADOR – CONFIGURACION INICIAL
a) Acceder al portal de Office 365 con usuario administrador.
El usuario administrador podrá acceder al portal Office 365 a través de esta URL
que el usuario final: portal.office365.com.
Al crear la suscripción de Office 365, Microsoft envía un correo con el usuario y
una password temporal que deberá cambiarse en el primer login.
Además de las aplicaciones a las que tiene acceso según
su licencia, cuenta con un icono de administración, para
acceder al Centro de Administración de Microsoft 365.
La primera vez que se accede al portal de Office 365 como administrador, puede
aparecer un mensaje como el de la figura de abajo. Se muestra cuando aún no
se han asignado licencias de productos a los usuarios de la organización.
La asignación de licencias a usuarios se realiza desde el Centro de
administración de Microsoft 365.
Centro Crip tológico Nacional 7

![Imagen 1 - Página 7](CCN-STIC 885A_assets\pagina7_img1.png)

![Imagen 2 - Página 7](CCN-STIC 885A_assets\pagina7_img2.png)

![Imagen 3 - Página 7](CCN-STIC 885A_assets\pagina7_img3.png)

![Imagen 4 - Página 7](CCN-STIC 885A_assets\pagina7_img4.png)

![Imagen 5 - Página 7](CCN-STIC 885A_assets\pagina7_img5.png)

![Imagen 6 - Página 7](CCN-STIC 885A_assets\pagina7_img6.png)

![Imagen 7 - Página 7](CCN-STIC 885A_assets\pagina7_img7.png)

![Imagen 8 - Página 7](CCN-STIC 885A_assets\pagina7_img8.png)

---

<!-- Página 8 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
b) Cambiar el idioma a español.
Se accede desde el icono de Configuración de la barra superior del portal.
Click en Idioma y zona horaria.
Click en Cambiar idioma para mostrar y seleccionamos el idioma.
c) Acceder al Centro de Administración de Microsoft 365.
Se accede a través del icono Admin del portal de Office 365 o bien mediante la
url: admin.microsoft.com.
Si es la primera que se accede al panel aparecerá el siguiente mensaje indicando
el terminar la configuración de 365. Es este ejemplo tenemos la licencia M365
Empresa Estándar.
Pulsar el botón “Ir a la configuración guiada”:
Centro Crip tológico Nacional 8

![Imagen 1 - Página 8](CCN-STIC 885A_assets\pagina8_img1.png)

![Imagen 2 - Página 8](CCN-STIC 885A_assets\pagina8_img2.png)

![Imagen 3 - Página 8](CCN-STIC 885A_assets\pagina8_img3.png)

![Imagen 4 - Página 8](CCN-STIC 885A_assets\pagina8_img4.png)

![Imagen 5 - Página 8](CCN-STIC 885A_assets\pagina8_img5.png)

![Imagen 6 - Página 8](CCN-STIC 885A_assets\pagina8_img6.png)

![Imagen 7 - Página 8](CCN-STIC 885A_assets\pagina8_img7.png)

![Imagen 8 - Página 8](CCN-STIC 885A_assets\pagina8_img8.png)

---

<!-- Página 9 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
1. Instalar Microsoft 365
Una vez dentro de la configuración, dará la opción de instalar las aplicaciones
del paquete office. En el caso de querer instalarlas, simplemente hacer click en
el botón de descargar.
En el caso de que querer omitir este paso, hacer click en “Continuar”.
2. Configuración de un dominio personalizado
Se recomienda la personalización con un dominio propio de la organización.
Centro Crip tológico Nacional 9

![Imagen 1 - Página 9](CCN-STIC 885A_assets\pagina9_img1.png)

![Imagen 2 - Página 9](CCN-STIC 885A_assets\pagina9_img2.png)

![Imagen 3 - Página 9](CCN-STIC 885A_assets\pagina9_img3.png)

![Imagen 4 - Página 9](CCN-STIC 885A_assets\pagina9_img4.png)

![Imagen 5 - Página 9](CCN-STIC 885A_assets\pagina9_img5.png)

![Imagen 6 - Página 9](CCN-STIC 885A_assets\pagina9_img6.png)

![Imagen 7 - Página 9](CCN-STIC 885A_assets\pagina9_img7.png)

![Imagen 8 - Página 9](CCN-STIC 885A_assets\pagina9_img8.png)

---

<!-- Página 10 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
3. Agregar nuevos usuarios
Para la asignación de licencias a los usuarios que se especifiquen en este paso.
4. Fin del proceso de instalación.
Información más detallada de cómo añadir usuarios y licencias en el apartado
[3.1.1 Control de acceso] de la presente guía.
Centro Crip tológico Nacional 10

![Imagen 1 - Página 10](CCN-STIC 885A_assets\pagina10_img1.png)

![Imagen 2 - Página 10](CCN-STIC 885A_assets\pagina10_img2.jpeg)

![Imagen 3 - Página 10](CCN-STIC 885A_assets\pagina10_img3.png)

![Imagen 4 - Página 10](CCN-STIC 885A_assets\pagina10_img4.png)

![Imagen 5 - Página 10](CCN-STIC 885A_assets\pagina10_img5.png)

![Imagen 6 - Página 10](CCN-STIC 885A_assets\pagina10_img6.png)

![Imagen 7 - Página 10](CCN-STIC 885A_assets\pagina10_img7.png)

![Imagen 8 - Página 10](CCN-STIC 885A_assets\pagina10_img8.png)

---

<!-- Página 11 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
2.2 USUARIO FINAL – PRIMEROS PASOS
El usuario final podrá acceder al portal Office 365 a través de la url:
portal.office365.com. Tras introducir las credenciales se muestra un panel con todas
las aplicaciones a las que tiene acceso.
En algunas ocasiones, si la licencia de usuario no ha sido asignada correctamente,
podría aparecer el siguiente mensaje de aviso:
Desde el propio panel de Office 365 se permite instalar la versión de escritorio de
las aplicaciones.
Nota: Para la configuración de seguridad de la versión de escritorio de las aplicaciones
Office remitirse a la Guía CCN-STIC más actualizada (CCN-STIC-585 en el momento de
edición de la presente guía).
Una vez asignadas la licencia al usuario final, y tras logarse en el portal de Office
365, se mostrará una página de inicio con los iconos de todas las aplicaciones a las que
se tiene acceso.
Centro Crip tológico Nacional 11

| Nota: Para la configuración de seguridad de la versión de escritorio de las aplicaciones |
| --- |
| Office remitirse a la Guía CCN-STIC más actualizada (CCN-STIC-585 en el momento de |
| edición de la presente guía). |


![Imagen 1 - Página 11](CCN-STIC 885A_assets\pagina11_img1.jpeg)

![Imagen 2 - Página 11](CCN-STIC 885A_assets\pagina11_img2.png)

![Imagen 3 - Página 11](CCN-STIC 885A_assets\pagina11_img3.png)

![Imagen 4 - Página 11](CCN-STIC 885A_assets\pagina11_img4.png)

![Imagen 5 - Página 11](CCN-STIC 885A_assets\pagina11_img5.png)

![Imagen 6 - Página 11](CCN-STIC 885A_assets\pagina11_img6.png)

![Imagen 7 - Página 11](CCN-STIC 885A_assets\pagina11_img7.png)

---

<!-- Página 12 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Es aconsejable establecer el idioma y la zona horaria.
Click en Idioma y región.
Es posible instalar las versiones de escritorio de las aplicaciones o acceder on-line,
pulsando los iconos correspondientes.
Centro Crip tológico Nacional 12

![Imagen 1 - Página 12](CCN-STIC 885A_assets\pagina12_img1.png)

![Imagen 2 - Página 12](CCN-STIC 885A_assets\pagina12_img2.jpeg)

![Imagen 3 - Página 12](CCN-STIC 885A_assets\pagina12_img3.png)

![Imagen 4 - Página 12](CCN-STIC 885A_assets\pagina12_img4.jpeg)

![Imagen 5 - Página 12](CCN-STIC 885A_assets\pagina12_img5.png)

![Imagen 6 - Página 12](CCN-STIC 885A_assets\pagina12_img6.png)

![Imagen 7 - Página 12](CCN-STIC 885A_assets\pagina12_img7.png)

![Imagen 8 - Página 12](CCN-STIC 885A_assets\pagina12_img8.png)

![Imagen 9 - Página 12](CCN-STIC 885A_assets\pagina12_img9.png)

---

<!-- Página 13 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
3. CONFIGURACIÓN DE OFFICE 365
A continuación, se abordará la configuración de Office 365 centrándose en el
cumplimiento de los requisitos del Esquema Nacional de Seguridad.
3.1 MARCO OPERACIONAL
3.1.1 CONTROL DE ACCESO
El control de acceso comprende el conjunto de actividades preparatorias y
ejecutivas tendentes a permitir o denegar a una entidad, usuario o proceso, el acceso a
un recurso del sistema para la realización de una acción concreta.
3.1.1.1 IDENTIFICACIÓN
Office 365 usa Microsoft Entra ID, una identidad de usuario basada en la nube y un
servicio de autenticación que se incluye con la suscripción a Office 365, para
administrar las identidades y la autenticación de Office 365. Para más información
consultar [CCN-STIC-884A - Guía de configuración segura para Azure].
MODELOS DE GESTIÓN DE IDENTIDADES
En esta sección se abordarán los distintos modelos y mecanismos para la gestión de
identidades en Office 365. Principalmente nos centraremos en dos: modelo identidad
sólo nube (que será tomado como referencia en esta guía) y modelo de identidad
híbrida.
Identidad solo de nube Identidad híbrida
Definición La cuenta de usuario existe en AD DS y
La cuenta de usuario solo una copia también se encuentra en el
existe en el tenant de tenant de Entra ID para su suscripción a
Entra ID para su Microsoft 365. La cuenta de usuario en
suscripción a Microsoft Entra ID también puede incluir una
365. versión hash de la contraseña de la
cuenta de usuario.
Cómo autentica El tenant de Entra ID para El tenant de Entra ID para su suscripción
Microsoft 365 las su suscripción a Microsoft de Microsoft 365 administra el proceso
credenciales de 365 realiza la de autenticación o redirige al usuario a
usuario autenticación con la otro proveedor de identidades.
cuenta de identidad de
nube.
Ideal para Organizaciones que no Organizaciones que usan AD DS u otro
tienen ni necesitan un AD proveedor de identidades.
DS local.
Centro Crip tológico Nacional 13

|  |  |  |  | Identidad solo de nube |  |  | Identidad híbrida |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Definición | Definición |  | La cuenta de usuario solo <br> existe en el tenant de <br> Entra ID para su <br> suscripción a Microsoft <br> 365. |  |  |  | La cuenta de usuario existe en AD DS y |  |
|  |  |  |  |  |  |  | una copia también se encuentra en el |  |
|  |  |  |  |  |  |  | tenant de Entra ID para su suscripción a |  |
|  |  |  |  |  |  |  | Microsoft 365. La cuenta de usuario en |  |
|  |  |  |  |  |  |  | Entra ID también puede incluir una |  |
|  |  |  |  |  |  |  | versión hash de la contraseña de la |  |
|  |  |  |  |  |  |  | cuenta de usuario. |  |
| Cómo autentica <br> Microsoft 365 las <br> credenciales de <br> usuario |  |  | El tenant de Entra ID para <br> su suscripción a Microsoft <br> 365 realiza la <br> autenticación con la <br> cuenta de identidad de <br> nube. |  |  | El tenant de Entra ID para su suscripción <br> de Microsoft 365 administra el proceso <br> de autenticación o redirige al usuario a <br> otro proveedor de identidades. |  |  |
| Ideal para |  |  |  | Organizaciones que no |  | Organizaciones que usan AD DS u otro <br> proveedor de identidades. |  |  |
|  |  |  |  | tienen ni necesitan un AD |  |  |  |  |
|  |  |  |  | DS local. |  |  |  |  |


| La cuenta de usuario solo |
| --- |
| existe en el tenant de |
| Entra ID para su |
| suscripción a Microsoft |
| 365. |


| Cómo autentica |
| --- |
| Microsoft 365 las |
| credenciales de |
| usuario |


| Organizaciones que usan AD DS u otro |
| --- |
| proveedor de identidades. |


![Imagen 1 - Página 13](CCN-STIC 885A_assets\pagina13_img1.png)

![Imagen 2 - Página 13](CCN-STIC 885A_assets\pagina13_img2.png)

![Imagen 3 - Página 13](CCN-STIC 885A_assets\pagina13_img3.png)

![Imagen 4 - Página 13](CCN-STIC 885A_assets\pagina13_img4.png)

![Imagen 5 - Página 13](CCN-STIC 885A_assets\pagina13_img5.png)

---

<!-- Página 14 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Mayor beneficio Fácil de usar. No se Los usuarios pueden usar las mismas
necesitan servidores o credenciales al obtener acceso a los
herramientas de recursos locales o basados en la nube.
directorio adicionales.
Modelo identidad sólo nube
Una identidad de solo nube usa cuentas de usuario que solo existen en Entra ID. La
identidad de nube suele usarse en organizaciones pequeñas que no tienen servidores
locales o que no usan AD DS para administrar identidades locales.
Estos son los componentes básicos de la identidad solo de la nube.
Los usuarios locales y remotos (en línea) usan sus cuentas de usuario y contraseñas
de Entra ID para acceder a los servicios en la nube de Office 365. Entra ID autentica las
credenciales de usuario en función de sus cuentas de usuario y contraseñas
almacenadas.
Administración
Como las cuentas de usuario se almacenan solo en Entra ID, se puede administrar
las identidades de nube con herramientas como el Centro de administración de
Microsoft 365 y Windows PowerShell.
Modelo identidad híbrido
La identidad híbrida usa cuentas que se originan en un AD DS local y tienen una
copia en el tenant de Entra ID de una suscripción a Microsoft 365. Sin embargo, la
mayoría de los cambios solo fluyen en un sentido. Los cambios que realice en las
cuentas de usuario de AD DS se sincronizan con su copia en Entra ID. Pero los cambios
realizados en cuentas basadas en la nube en Entra ID, como nuevas cuentas de
usuario, no se sincronizan con AD DS.
Microsoft Entra Connect proporciona la sincronización de cuentas en curso. Se
ejecuta en un servidor local, comprueba los cambios en AD DS y reenvía dichos
cambios a Entra ID. Microsoft Entra Connect permite filtrar las cuentas que se van a
Centro Crip tológico Nacional 14

| Fácil de usar. No se <br> necesitan servidores o <br> herramientas de <br> directorio adicionales. | Los usuarios pueden usar las mismas <br> credenciales al obtener acceso a los <br> recursos locales o basados en la nube. |
| --- | --- |


![Imagen 1 - Página 14](CCN-STIC 885A_assets\pagina14_img1.png)

![Imagen 2 - Página 14](CCN-STIC 885A_assets\pagina14_img2.png)

![Imagen 3 - Página 14](CCN-STIC 885A_assets\pagina14_img3.png)

![Imagen 4 - Página 14](CCN-STIC 885A_assets\pagina14_img4.png)

![Imagen 5 - Página 14](CCN-STIC 885A_assets\pagina14_img5.png)

![Imagen 6 - Página 14](CCN-STIC 885A_assets\pagina14_img6.png)

---

<!-- Página 15 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
sincronizar y si se debe sincronizar una versión hash de las contraseñas de usuario,
conocidas como sincronización de hash de contraseña (PHS).
Al implementar la identidad híbrida, su AD DS local es el origen de autoridad para la
información de la cuenta. Esto significa que las tareas de administración se realizan
principalmente en el entorno local, que luego se sincronizan con Entra ID.
Estos son los componentes de la identidad híbrida.
El tenant de Entra ID tiene una copia de las cuentas de AD DS. En esta configuración,
los usuarios locales y remotos que tienen acceso a los servicios en la nube de Microsoft
365 se autentican con Entra ID.
GESTIÓN DE IDENTIDADES EN EL MODELO SÓLO NUBE
Con la identidad solo de nube, todos los usuarios, grupos y contactos se almacenan
en el tenant de Microsoft Entra ID de la suscripción a Office 365.
Tanto la creación de usuarios como de grupos puede realizarse desde:
 Centro de administración de Microsoft 365
 Microsoft Graph PowerShell
Centro de Administración de Microsoft 365
Se accede a través del icono Admin del portal de Office 365 o bien mediante la url:
admin.microsoft.com.
Centro Crip tológico Nacional 15

![Imagen 1 - Página 15](CCN-STIC 885A_assets\pagina15_img1.png)

![Imagen 2 - Página 15](CCN-STIC 885A_assets\pagina15_img2.png)

![Imagen 3 - Página 15](CCN-STIC 885A_assets\pagina15_img3.png)

![Imagen 4 - Página 15](CCN-STIC 885A_assets\pagina15_img4.png)

![Imagen 5 - Página 15](CCN-STIC 885A_assets\pagina15_img5.png)

![Imagen 6 - Página 15](CCN-STIC 885A_assets\pagina15_img6.png)

---

<!-- Página 16 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Creación de usuarios
a) Desde el menú [Usuarios\Usuarios activos] pulsar el icono
“Agregar un usuario”, y rellenar el formulario.
Nota: más información sobre gestión de contraseñas en el apartado [3.1.1.5
Mecanismos de autenticación].
b) Se asigna la licencia y se asocian las aplicaciones a las que tendrá acceso el
usuario.
Centro Crip tológico Nacional 16

| Nota: más información sobre gestión de contraseñas en el apartado [3.1.1.5 |
| --- |
| Mecanismos de autenticación]. |


![Imagen 1 - Página 16](CCN-STIC 885A_assets\pagina16_img1.png)

![Imagen 2 - Página 16](CCN-STIC 885A_assets\pagina16_img2.png)

![Imagen 3 - Página 16](CCN-STIC 885A_assets\pagina16_img3.png)

![Imagen 4 - Página 16](CCN-STIC 885A_assets\pagina16_img4.png)

![Imagen 5 - Página 16](CCN-STIC 885A_assets\pagina16_img5.png)

![Imagen 6 - Página 16](CCN-STIC 885A_assets\pagina16_img6.png)

![Imagen 7 - Página 16](CCN-STIC 885A_assets\pagina16_img7.png)

![Imagen 8 - Página 16](CCN-STIC 885A_assets\pagina16_img8.png)

![Imagen 9 - Página 16](CCN-STIC 885A_assets\pagina16_img9.png)

---

<!-- Página 17 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
c) En el caso de que el usuario requiera un rol especial, seleccionar uno desde el
listado. Si el usuario no necesita ningún rol, dejar marcada la opción Usuario (sin
acceso al centro de administración).
d) Añadimos información del usuario, si es necesario.
Centro Crip tológico Nacional 17

![Imagen 1 - Página 17](CCN-STIC 885A_assets\pagina17_img1.png)

![Imagen 2 - Página 17](CCN-STIC 885A_assets\pagina17_img2.png)

![Imagen 3 - Página 17](CCN-STIC 885A_assets\pagina17_img3.png)

![Imagen 4 - Página 17](CCN-STIC 885A_assets\pagina17_img4.png)

![Imagen 5 - Página 17](CCN-STIC 885A_assets\pagina17_img5.png)

![Imagen 6 - Página 17](CCN-STIC 885A_assets\pagina17_img6.png)

![Imagen 7 - Página 17](CCN-STIC 885A_assets\pagina17_img7.png)

---

<!-- Página 18 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
e) Una vez creado el usuario aparece el siguiente mensaje.
Para comprobar que el usuario se ha creado correctamente revisar la lista de
“usuarios activos”.
Operaciones básicas sobre usuarios
Desde el menú [Usuarios\Usuarios activos] seleccionar el usuario y se
pulsar sobre el icono “Más opciones”.
Centro Crip tológico Nacional 18

![Imagen 1 - Página 18](CCN-STIC 885A_assets\pagina18_img1.png)

![Imagen 2 - Página 18](CCN-STIC 885A_assets\pagina18_img2.jpeg)

![Imagen 3 - Página 18](CCN-STIC 885A_assets\pagina18_img3.png)

![Imagen 4 - Página 18](CCN-STIC 885A_assets\pagina18_img4.png)

![Imagen 5 - Página 18](CCN-STIC 885A_assets\pagina18_img5.png)

![Imagen 6 - Página 18](CCN-STIC 885A_assets\pagina18_img6.png)

![Imagen 7 - Página 18](CCN-STIC 885A_assets\pagina18_img7.png)

![Imagen 8 - Página 18](CCN-STIC 885A_assets\pagina18_img8.png)

![Imagen 9 - Página 18](CCN-STIC 885A_assets\pagina18_img9.png)

---

<!-- Página 19 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Administrar licencias
Desde el menú [Usuario\Usuarios activos] se despliega la lista de usuarios con las
licencias asignadas. Seleccionar el usuario adecuado y pulsar sobre el nombre. En el
panel de la derecha, pestaña “Licencias y Aplicaciones” configurar las opciones
pertinentes.
Asignar usuario a grupo
Desde el menú [Usuarios\Usuarios activos] pulsando sobre el icono “Más
opciones” del usuario.
Centro Crip tológico Nacional 19

![Imagen 1 - Página 19](CCN-STIC 885A_assets\pagina19_img1.png)

![Imagen 2 - Página 19](CCN-STIC 885A_assets\pagina19_img2.png)

![Imagen 3 - Página 19](CCN-STIC 885A_assets\pagina19_img3.png)

![Imagen 4 - Página 19](CCN-STIC 885A_assets\pagina19_img4.png)

![Imagen 5 - Página 19](CCN-STIC 885A_assets\pagina19_img5.png)

![Imagen 6 - Página 19](CCN-STIC 885A_assets\pagina19_img6.png)

![Imagen 7 - Página 19](CCN-STIC 885A_assets\pagina19_img7.png)

---

<!-- Página 20 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Editar usuario
a) Desde el menú [Usuarios\Usuarios activos] pulsando sobre el “nombre” del
usuario.
b) Para asignar roles al usuario consultar el apartado [3.1.1.3 Segregación de
funciones y tareas].
Centro Crip tológico Nacional 20

![Imagen 1 - Página 20](CCN-STIC 885A_assets\pagina20_img1.png)

![Imagen 2 - Página 20](CCN-STIC 885A_assets\pagina20_img2.png)

![Imagen 3 - Página 20](CCN-STIC 885A_assets\pagina20_img3.png)

![Imagen 4 - Página 20](CCN-STIC 885A_assets\pagina20_img4.png)

![Imagen 5 - Página 20](CCN-STIC 885A_assets\pagina20_img5.png)

![Imagen 6 - Página 20](CCN-STIC 885A_assets\pagina20_img6.png)

---

<!-- Página 21 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Eliminar usuario
Desde el menú [Usuarios\Usuarios activos] pulsando sobre el icono “Más
opciones” del usuario.
Nos saldrá la siguiente ventana. Click en Eliminar usuario.
Se deberá mover los archivos que quiera conservar dentro del período de
retención establecido para los archivos de OneDrive. De forma predeterminada, el
período de retención es de 30 días.
Centro Crip tológico Nacional 21

![Imagen 1 - Página 21](CCN-STIC 885A_assets\pagina21_img1.png)

![Imagen 2 - Página 21](CCN-STIC 885A_assets\pagina21_img2.png)

![Imagen 3 - Página 21](CCN-STIC 885A_assets\pagina21_img3.png)

![Imagen 4 - Página 21](CCN-STIC 885A_assets\pagina21_img4.png)

![Imagen 5 - Página 21](CCN-STIC 885A_assets\pagina21_img5.png)

![Imagen 6 - Página 21](CCN-STIC 885A_assets\pagina21_img6.png)

![Imagen 7 - Página 21](CCN-STIC 885A_assets\pagina21_img7.png)

---

<!-- Página 22 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Crear grupo
En la sección grupos del Centro de administración de Microsoft 365, puede crear
y administrar estos tipos de grupos:
 Los grupos de Office 365 se usan para la colaboración entre usuarios, tanto
dentro como fuera de la compañía.
 Los grupos de distribución se usan para enviar notificaciones a un grupo de
personas.
 Los grupos de seguridad se usan para conceder acceso a los recursos de
SharePoint.
 Los grupos de seguridad habilitados para correo se usan para conceder
acceso a los recursos de SharePoint y enviar notificaciones por correo
electrónico a dichos usuarios.
 Los buzones compartidos se usan cuando varias personas necesitan tener
acceso al mismo buzón, como la información de la empresa o la dirección de
correo electrónico de soporte técnico.
Es importante activar la “Auditoría de buzones compartidos” para permitir la
trazabilidad en estos buzones, como se describe en la guía [CCN-STIC-885C - Guía de
configuración segura para Exchange Online].
a) Agregar grupo.
Desde el menú [Teams y grupos], pulsar la opción Grupos y equipos activos,
una vez dentro pulsar el icono “Agregar un grupo de Microsoft 365”.
b) Cumplimentar información del grupo.
Centro Crip tológico Nacional 22

![Imagen 1 - Página 22](CCN-STIC 885A_assets\pagina22_img1.png)

![Imagen 2 - Página 22](CCN-STIC 885A_assets\pagina22_img2.png)

![Imagen 3 - Página 22](CCN-STIC 885A_assets\pagina22_img3.png)

![Imagen 4 - Página 22](CCN-STIC 885A_assets\pagina22_img4.png)

![Imagen 5 - Página 22](CCN-STIC 885A_assets\pagina22_img5.png)

![Imagen 6 - Página 22](CCN-STIC 885A_assets\pagina22_img6.png)

![Imagen 7 - Página 22](CCN-STIC 885A_assets\pagina22_img7.png)

---

<!-- Página 23 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
c) Desde este apartado se agrega el propietario
d) Desde este apartado se agrega los miembros del grupo
e) Configuración del grupo
Centro Crip tológico Nacional 23

![Imagen 1 - Página 23](CCN-STIC 885A_assets\pagina23_img1.png)

![Imagen 2 - Página 23](CCN-STIC 885A_assets\pagina23_img2.png)

![Imagen 3 - Página 23](CCN-STIC 885A_assets\pagina23_img3.png)

![Imagen 4 - Página 23](CCN-STIC 885A_assets\pagina23_img4.png)

![Imagen 5 - Página 23](CCN-STIC 885A_assets\pagina23_img5.jpeg)

![Imagen 6 - Página 23](CCN-STIC 885A_assets\pagina23_img6.png)

![Imagen 7 - Página 23](CCN-STIC 885A_assets\pagina23_img7.png)

![Imagen 8 - Página 23](CCN-STIC 885A_assets\pagina23_img8.png)

---

<!-- Página 24 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
1) Añadimos un nombre al grupo
2) Privacidad:
 Privado: Los grupos privados no están disponibles para que
cualquier usuario se una a estos, y solo los propietarios del grupo
pueden agregar miembros. Solo los miembros pueden acceder al
contenido del grupo.
 Público: Todos los usuarios pueden unirse a un grupo público sin
necesidad de la aprobación de un propietario del grupo.
Cualquier usuario puede acceder al contenido del grupo.
Nota: Si se requiere un mayor control sobre el acceso a la información del
grupo por parte de los usuarios, entonces se recomienda el uso del valor
Privado.
3) Para asignar roles al grupo
 La opción de Privacidad debe estar en Privado.
 La opción de Agregar Microsoft Teams al grupo debe esta
desactivada.
4) Agregar Microsoft Teams al grupo
 Activar esta opción si se requiere agregar un equipo de teams al
grupo.
f) Revisar y terminar de agregar el grupo
Centro Crip tológico Nacional 24

| Nota: Si se requiere un mayor control sobre el acceso a la información del |
| --- |
| grupo por parte de los usuarios, entonces se recomienda el uso del valor |
| Privado. |


![Imagen 1 - Página 24](CCN-STIC 885A_assets\pagina24_img1.png)

![Imagen 2 - Página 24](CCN-STIC 885A_assets\pagina24_img2.png)

![Imagen 3 - Página 24](CCN-STIC 885A_assets\pagina24_img3.png)

![Imagen 4 - Página 24](CCN-STIC 885A_assets\pagina24_img4.png)

![Imagen 5 - Página 24](CCN-STIC 885A_assets\pagina24_img5.png)

![Imagen 6 - Página 24](CCN-STIC 885A_assets\pagina24_img6.png)

---

<!-- Página 25 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
g) Revisar y finalizar
Gestionar miembros de un grupo
a) Desde el menú [Grupos y equipos activos] pulsando sobre el nombre del
grupo, se despliega el panel del grupo con distintas pestañas. Seleccionar la
pestaña Pertenencia y luego dentro Miembros.
b) Buscamos los usuarios a través del nombre o del correo electrónico y hacer
click en agregar.
Centro Crip tológico Nacional 25

![Imagen 1 - Página 25](CCN-STIC 885A_assets\pagina25_img1.png)

![Imagen 2 - Página 25](CCN-STIC 885A_assets\pagina25_img2.png)

![Imagen 3 - Página 25](CCN-STIC 885A_assets\pagina25_img3.png)

![Imagen 4 - Página 25](CCN-STIC 885A_assets\pagina25_img4.png)

![Imagen 5 - Página 25](CCN-STIC 885A_assets\pagina25_img5.png)

![Imagen 6 - Página 25](CCN-STIC 885A_assets\pagina25_img6.png)

![Imagen 7 - Página 25](CCN-STIC 885A_assets\pagina25_img7.png)

![Imagen 8 - Página 25](CCN-STIC 885A_assets\pagina25_img8.png)

---

<!-- Página 26 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Eliminar grupo
Desde el menú [Teams y grupos/ Grupos y equipos activos], seleccionar el grupo a
eliminar y desde más opciones, click en Eliminar equipo.
Click en Eliminar equipo.
Centro Crip tológico Nacional 26

![Imagen 1 - Página 26](CCN-STIC 885A_assets\pagina26_img1.png)

![Imagen 2 - Página 26](CCN-STIC 885A_assets\pagina26_img2.png)

![Imagen 3 - Página 26](CCN-STIC 885A_assets\pagina26_img3.png)

![Imagen 4 - Página 26](CCN-STIC 885A_assets\pagina26_img4.png)

![Imagen 5 - Página 26](CCN-STIC 885A_assets\pagina26_img5.png)

![Imagen 6 - Página 26](CCN-STIC 885A_assets\pagina26_img6.png)

![Imagen 7 - Página 26](CCN-STIC 885A_assets\pagina26_img7.png)

![Imagen 8 - Página 26](CCN-STIC 885A_assets\pagina26_img8.png)

---

<!-- Página 27 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Powershell de Office 365
Para la ejecución de los siguientes scripts se requiere el módulo de Microsoft Graph
PowerShell SDK para windows PowerShell.
Crear una cuenta de usuario individual
Ver Anexo A en el final del documento.
Crear varias cuentas de usuario
Ver Anexo B en el final del documento.
3.1.1.2 REQUISITOS DE ACCESO
Los mecanismos de acceso a los recursos se detallan en las guías específicas de cada
servicio: Sharepoint Online [CCN-STIC-885B - Guía de configuración segura para
Sharepoint Online], Exchange Online [CCN-STIC-885C - Guía de configuración segura
para Exchange Online] y Teams [CCN-STIC 885D - Guía de configuración segura para
Microsoft Teams].
3.1.1.3 SEGREGACIÓN DE FUNCIONES Y TAREAS
Roles de administración
La suscripción de O365 incluye un conjunto de roles de administrador que se
pueden asignar a los usuarios de la organización. Cada rol de administrador se asigna a
funciones empresariales comunes y proporciona a los usuarios permisos para realizar
tareas específicas en los centros de administración.
Como los administradores tienen acceso a los datos y archivos sensibles, Microsoft
recomienda seguir estas directrices para mantener los datos de la organización más
seguros.
Recomendación ¿Por qué es importante?
Los administradores globales tienen acceso casi ilimitado
a la configuración de su organización y a la mayoría de
sus datos. Se recomienda limitar el número de
administradores globales tanto como sea posible. Un
Administración global puede bloquear accidentalmente
su cuenta y requerir un restablecimiento de contraseña.
Tener de 2 a 4
Otra Administración global o una Administración de
administradores globales
autenticación con privilegios pueden restablecer la
contraseña de un Administración global. Por lo tanto, se
recomienda tener al menos una Administración global
más o una Administración de autenticación con
privilegios en caso de que un Administración global
bloquee su cuenta.
Centro Crip tológico Nacional 27

|  | Recomendación |  |  | ¿Por qué es importante? |  |
| --- | --- | --- | --- | --- | --- |
| Tener de 2 a 4 <br> administradores globales |  |  |  | Los administradores globales tienen acceso casi ilimitado |  |
|  |  |  |  | a la configuración de su organización y a la mayoría de |  |
|  |  |  |  | sus datos. Se recomienda limitar el número de |  |
|  |  |  |  | administradores globales tanto como sea posible. Un |  |
|  |  |  |  | Administración global puede bloquear accidentalmente |  |
|  |  |  |  | su cuenta y requerir un restablecimiento de contraseña. |  |
|  |  |  |  | Otra Administración global o una Administración de |  |
|  |  |  |  | autenticación con privilegios pueden restablecer la |  |
|  |  |  |  | contraseña de un Administración global. Por lo tanto, se |  |
|  |  |  |  | recomienda tener al menos una Administración global |  |
|  |  |  |  | más o una Administración de autenticación con |  |
|  |  |  |  | privilegios en caso de que un Administración global |  |
|  |  |  |  | bloquee su cuenta. |  |


| Tener de 2 a 4 |
| --- |
| administradores globales |


![Imagen 1 - Página 27](CCN-STIC 885A_assets\pagina27_img1.png)

![Imagen 2 - Página 27](CCN-STIC 885A_assets\pagina27_img2.png)

![Imagen 3 - Página 27](CCN-STIC 885A_assets\pagina27_img3.png)

![Imagen 4 - Página 27](CCN-STIC 885A_assets\pagina27_img4.png)

![Imagen 5 - Página 27](CCN-STIC 885A_assets\pagina27_img5.png)

---

<!-- Página 28 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Asignar el rol menos Asignar el rol menos permisivo significa conceder a los
permisivo administradores solo el acceso que necesitan para
realizar el trabajo. Por ejemplo, si quiere que alguien
restablezca las contraseñas de los empleados, no debe
asignar el rol de administrador global ilimitado, debe
asignar un rol de administrador limitado, como
administrador de contraseñas o administrador del
departamento de soporte técnico.
Requerir la autenticación Es una buena idea requerir MFA para todos los usuarios,
multifactor para pero definitivamente se debe exigir a los administradores
administradores usar la MFA para iniciar sesión. MFA hace que los
usuarios usen un segundo método de identificación para
comprobar su identidad. Los administradores pueden
tener acceso a gran parte de los datos de clientes y
empleados. Si necesita MFA, incluso si la contraseña del
administrador se pone en peligro, la contraseña no sirve
para nada sin el segundo método de identificación.
Al activar la MFA, la próxima vez que el usuario inicie
sesión, deberá proporcionar una dirección de correo
electrónico y un número de teléfono alternativos para
recuperar la cuenta.
Asignar roles de administrador a un usuario
Desde el centro de administración,
ir a los detalles del usuario y
administrar funciones para asignar
un rol al usuario.
Centro Crip tológico Nacional 28

| Asignar el rol menos <br> permisivo | Asignar el rol menos permisivo significa conceder a los <br> administradores solo el acceso que necesitan para <br> realizar el trabajo. Por ejemplo, si quiere que alguien <br> restablezca las contraseñas de los empleados, no debe <br> asignar el rol de administrador global ilimitado, debe <br> asignar un rol de administrador limitado, como <br> administrador de contraseñas o administrador del <br> departamento de soporte técnico. |  |  |
| --- | --- | --- | --- |
| Requerir la autenticación <br> multifactor para <br> administradores |  | Es una buena idea requerir MFA para todos los usuarios, |  |
|  |  | pero definitivamente se debe exigir a los administradores |  |
|  |  | usar la MFA para iniciar sesión. MFA hace que los |  |
|  |  | usuarios usen un segundo método de identificación para |  |
|  |  | comprobar su identidad. Los administradores pueden |  |
|  |  | tener acceso a gran parte de los datos de clientes y |  |
|  |  | empleados. Si necesita MFA, incluso si la contraseña del |  |
|  |  | administrador se pone en peligro, la contraseña no sirve |  |
|  |  | para nada sin el segundo método de identificación. |  |
|  |  | Al activar la MFA, la próxima vez que el usuario inicie |  |
|  |  | sesión, deberá proporcionar una dirección de correo |  |
|  |  | electrónico y un número de teléfono alternativos para |  |
|  |  | recuperar la cuenta. |  |


| Asignar el rol menos |
| --- |
| permisivo |


| Requerir la autenticación |
| --- |
| multifactor para |
| administradores |


![Imagen 1 - Página 28](CCN-STIC 885A_assets\pagina28_img1.png)

![Imagen 2 - Página 28](CCN-STIC 885A_assets\pagina28_img2.png)

![Imagen 3 - Página 28](CCN-STIC 885A_assets\pagina28_img3.png)

![Imagen 4 - Página 28](CCN-STIC 885A_assets\pagina28_img4.png)

![Imagen 5 - Página 28](CCN-STIC 885A_assets\pagina28_img5.png)

![Imagen 6 - Página 28](CCN-STIC 885A_assets\pagina28_img6.png)

---

<!-- Página 29 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Centro Crip tológico Nacional 29

![Imagen 1 - Página 29](CCN-STIC 885A_assets\pagina29_img1.png)

![Imagen 2 - Página 29](CCN-STIC 885A_assets\pagina29_img2.png)

![Imagen 3 - Página 29](CCN-STIC 885A_assets\pagina29_img3.png)

![Imagen 4 - Página 29](CCN-STIC 885A_assets\pagina29_img4.png)

![Imagen 5 - Página 29](CCN-STIC 885A_assets\pagina29_img5.png)

![Imagen 6 - Página 29](CCN-STIC 885A_assets\pagina29_img6.png)

---

<!-- Página 30 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Roles disponibles en el centro de administración de Microsoft 365
El centro de administración Microsoft 365 permite administrar más de 30 roles de
Entra ID. Sin embargo, estos roles son un subconjunto de las funciones disponibles en
portal de Entra ID.
Usualmente es suficiente con asignar los siguientes roles a la organización:
Rol de administrador ¿A quién se le debe asignar este rol?
Asigne el rol de administrador de facturación a los usuarios
que hagan compras, administren suscripciones y solicitudes
de servicio y supervisen el estado del servicio.
Administrador de
facturación Los administradores de facturación también pueden:
- Administrar todos los aspectos de la facturación
- Crear y administrar vales de soporte técnico en el portal de
Entra ID.
Asigne el rol de administrador de Exchange a los usuarios que
necesiten ver y administrar los buzones de correo de sus
usuarios, los grupos de Microsoft 365 y Exchange Online.
Administrador de
Exchange Los administradores de Exchange también pueden:
- Recuperar elementos eliminados en un buzón de usuario
- Configurar los delegados "Enviar como" y "Enviar en nombre
de"
Administrador de Asigne el rol de administrador de Fabric a los usuarios que
Fabric necesiten hacer lo siguiente:
- Administración de todas las características de administrador
para Microsoft Fabric y Power BI
- Informe sobre el uso y el rendimiento
- Revisión y administración de auditorías
Centro Crip tológico Nacional 30

|  | Rol de administrador |  |  | ¿A quién se le debe asignar este rol? |  |
| --- | --- | --- | --- | --- | --- |
| Administrador de <br> facturación |  |  |  | Asigne el rol de administrador de facturación a los usuarios |  |
|  |  |  |  | que hagan compras, administren suscripciones y solicitudes |  |
|  |  |  |  | de servicio y supervisen el estado del servicio. |  |
|  |  |  |  | Los administradores de facturación también pueden: |  |
|  |  |  |  | - Administrar todos los aspectos de la facturación |  |
|  |  |  |  | - Crear y administrar vales de soporte técnico en el portal de |  |
|  |  |  |  | Entra ID. |  |
| Administrador de <br> Exchange |  |  | Asigne el rol de administrador de Exchange a los usuarios que <br> necesiten ver y administrar los buzones de correo de sus <br> usuarios, los grupos de Microsoft 365 y Exchange Online. <br> Los administradores de Exchange también pueden: <br> - Recuperar elementos eliminados en un buzón de usuario <br> - Configurar los delegados "Enviar como" y "Enviar en nombre <br> de" |  |  |
| Administrador de <br> Fabric |  |  | Asigne el rol de administrador de Fabric a los usuarios que <br> necesiten hacer lo siguiente: <br> - Administración de todas las características de administrador <br> para Microsoft Fabric y Power BI <br> - Informe sobre el uso y el rendimiento <br> - Revisión y administración de auditorías |  |  |


| Administrador de |
| --- |
| facturación |


| Administrador de |
| --- |
| Exchange |


| Administrador de |
| --- |
| Fabric |


![Imagen 1 - Página 30](CCN-STIC 885A_assets\pagina30_img1.png)

![Imagen 2 - Página 30](CCN-STIC 885A_assets\pagina30_img2.png)

![Imagen 3 - Página 30](CCN-STIC 885A_assets\pagina30_img3.png)

![Imagen 4 - Página 30](CCN-STIC 885A_assets\pagina30_img4.png)

![Imagen 5 - Página 30](CCN-STIC 885A_assets\pagina30_img5.png)

---

<!-- Página 31 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Asigne el rol de administrador global a los usuarios que
necesiten acceso global a la mayoría de las características de
administración y datos en los servicios en línea de Microsoft.
Dar acceso global a demasiados usuarios supone un riesgo
para la seguridad y se recomienda tener entre dos y cuatro
administradores globales.
Administrador global
Solo los administradores globales pueden:
- Restablecer las contraseñas de todos los usuarios
- Agregar y administrar dominios
- Desbloquear a otro administrador global
Nota: La persona que se registró en Microsoft servicios en
línea se convierte automáticamente en administrador global.
Asigne el rol de lector global a los usuarios que necesiten ver
la configuración y las funciones de administración en los
Lector global centros de administración que el administrador global puede
ver. El administrador del lector global no puede editar
ninguna configuración.
Asigne el rol de administrador de grupos a los usuarios que
necesiten administrar la configuración de todos los grupos en
los centros de administración, incluido el Centro de
administración de Microsoft 365 y el Centro de administración
de Microsoft Entra.
Administrador de
Los administradores de grupos pueden:
grupos
- Crear, editar, eliminar y restaurar los grupos de Microsoft
365
- Crear y actualizar las directivas de creación, expiración y
nomenclatura de grupos
- Creación, edición, eliminación y restauración Microsoft Entra
grupos de seguridad
Centro Crip tológico Nacional 31

| Administrador global |  | Asigne el rol de administrador global a los usuarios que |  |
| --- | --- | --- | --- |
|  |  | necesiten acceso global a la mayoría de las características de |  |
|  |  | administración y datos en los servicios en línea de Microsoft. |  |
|  |  | Dar acceso global a demasiados usuarios supone un riesgo |  |
|  |  | para la seguridad y se recomienda tener entre dos y cuatro |  |
|  |  | administradores globales. |  |
|  |  | Solo los administradores globales pueden: |  |
|  |  | - Restablecer las contraseñas de todos los usuarios |  |
|  |  | - Agregar y administrar dominios |  |
|  |  | - Desbloquear a otro administrador global |  |
|  |  | Nota: La persona que se registró en Microsoft servicios en |  |
|  |  | línea se convierte automáticamente en administrador global. |  |
| Lector global | Asigne el rol de lector global a los usuarios que necesiten ver <br> la configuración y las funciones de administración en los <br> centros de administración que el administrador global puede <br> ver. El administrador del lector global no puede editar <br> ninguna configuración. |  |  |
| Administrador de <br> grupos |  | Asigne el rol de administrador de grupos a los usuarios que |  |
|  |  | necesiten administrar la configuración de todos los grupos en |  |
|  |  | los centros de administración, incluido el Centro de |  |
|  |  | administración de Microsoft 365 y el Centro de administración |  |
|  |  | de Microsoft Entra. |  |
|  |  | Los administradores de grupos pueden: |  |
|  |  | - Crear, editar, eliminar y restaurar los grupos de Microsoft |  |
|  |  | 365 |  |
|  |  | - Crear y actualizar las directivas de creación, expiración y |  |
|  |  | nomenclatura de grupos |  |
|  |  | - Creación, edición, eliminación y restauración Microsoft Entra |  |
|  |  | grupos de seguridad |  |


| Administrador de |
| --- |
| grupos |


![Imagen 1 - Página 31](CCN-STIC 885A_assets\pagina31_img1.png)

![Imagen 2 - Página 31](CCN-STIC 885A_assets\pagina31_img2.png)

![Imagen 3 - Página 31](CCN-STIC 885A_assets\pagina31_img3.png)

![Imagen 4 - Página 31](CCN-STIC 885A_assets\pagina31_img4.png)

![Imagen 5 - Página 31](CCN-STIC 885A_assets\pagina31_img5.png)

---

<!-- Página 32 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Asigne el rol de administrador del departamento de soporte
técnico a los usuarios que necesiten que hacer lo siguiente:
- Restablecer contraseñas
- Forzar a los usuarios a cerrar sesión
- Administrar solicitudes de servicio
Administrador del - Supervisar el estado del servicio
departamento de
soporte técnico Nota: el administrador del departamento de soporte técnico
solo puede ayudar a usuarios que no son administradores y a
usuarios que tienen asignados estos roles: Lector de
directorios, Invitador de usuarios invitados, Administrador del
departamento de soporte técnico, Lector del centro de
mensajes y Lector de informes.
Asigne el rol de administrador de licencias a los usuarios que
necesiten asignar y quitar licencias a usuarios y editar su
ubicación de uso.
Administrador de
Los administradores de licencias también pueden:
licencias
- Volver a procesar asignaciones de licencia para licencias
basadas en grupos
- Asignar licencias de producto a grupos de licencias basadas
en grupos
Asigne el rol de lector de privacidad del Centro de mensajes a
los usuarios que necesiten leer mensajes y actualizaciones de
privacidad y seguridad en el Centro de mensajes de Microsoft
365. Los lectores de privacidad del centro de mensajes
pueden recibir notificaciones por correo electrónico
relacionadas con la privacidad de los datos, en función de sus
preferencias, y pueden cancelar la suscripción mediante las
preferencias del Centro de mensajes. Solo los administradores
Lector de privacidad
globales y los lectores de privacidad del Centro de mensajes
del centro de
pueden leer los mensajes de privacidad de datos. Este rol no
mensajes
tiene permiso para ver, crear o administrar solicitudes de
servicio.
Los lectores de privacidad del centro de mensajes también
pueden:
- Supervisar todas las notificaciones en el Centro de mensajes,
incluidos los mensajes de privacidad de datos
- Ver grupos, dominios y suscripciones
Centro Crip tológico Nacional 32

| Administrador del <br> departamento de <br> soporte técnico | Asigne el rol de administrador del departamento de soporte <br> técnico a los usuarios que necesiten que hacer lo siguiente: <br> - Restablecer contraseñas <br> - Forzar a los usuarios a cerrar sesión <br> - Administrar solicitudes de servicio <br> - Supervisar el estado del servicio <br> Nota: el administrador del departamento de soporte técnico <br> solo puede ayudar a usuarios que no son administradores y a <br> usuarios que tienen asignados estos roles: Lector de <br> directorios, Invitador de usuarios invitados, Administrador del <br> departamento de soporte técnico, Lector del centro de <br> mensajes y Lector de informes. |  |  |
| --- | --- | --- | --- |
| Administrador de <br> licencias |  | Asigne el rol de administrador de licencias a los usuarios que |  |
|  |  | necesiten asignar y quitar licencias a usuarios y editar su |  |
|  |  | ubicación de uso. |  |
|  |  | Los administradores de licencias también pueden: |  |
|  |  | - Volver a procesar asignaciones de licencia para licencias |  |
|  |  | basadas en grupos |  |
|  |  | - Asignar licencias de producto a grupos de licencias basadas |  |
|  |  | en grupos |  |
| Lector de privacidad <br> del centro de <br> mensajes | Asigne el rol de lector de privacidad del Centro de mensajes a <br> los usuarios que necesiten leer mensajes y actualizaciones de <br> privacidad y seguridad en el Centro de mensajes de Microsoft <br> 365. Los lectores de privacidad del centro de mensajes <br> pueden recibir notificaciones por correo electrónico <br> relacionadas con la privacidad de los datos, en función de sus <br> preferencias, y pueden cancelar la suscripción mediante las <br> preferencias del Centro de mensajes. Solo los administradores <br> globales y los lectores de privacidad del Centro de mensajes <br> pueden leer los mensajes de privacidad de datos. Este rol no <br> tiene permiso para ver, crear o administrar solicitudes de <br> servicio. <br> Los lectores de privacidad del centro de mensajes también <br> pueden: <br> - Supervisar todas las notificaciones en el Centro de mensajes, <br> incluidos los mensajes de privacidad de datos <br> - Ver grupos, dominios y suscripciones |  |  |


| Administrador del |
| --- |
| departamento de |
| soporte técnico |


| Administrador de |
| --- |
| licencias |


| Lector de privacidad |
| --- |
| del centro de |
| mensajes |


![Imagen 1 - Página 32](CCN-STIC 885A_assets\pagina32_img1.png)

![Imagen 2 - Página 32](CCN-STIC 885A_assets\pagina32_img2.png)

![Imagen 3 - Página 32](CCN-STIC 885A_assets\pagina32_img3.png)

![Imagen 4 - Página 32](CCN-STIC 885A_assets\pagina32_img4.png)

![Imagen 5 - Página 32](CCN-STIC 885A_assets\pagina32_img5.png)

---

<!-- Página 33 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Asigne el rol de Lector del Centro de mensajes a los usuarios
que necesiten hacer lo siguiente:
- Supervisar las notificaciones del Centro de mensajes
Lector del Centro de - Obtener resúmenes semanales por correo electrónico de las
mensajes publicaciones y actualizaciones del Centro de mensajes
- Compartir publicaciones del Centro de mensajes
- Tener acceso de solo lectura a Microsoft Entra servicios,
como usuarios y grupos
Asigne el rol Administrador de migración de Microsoft 365 a
los usuarios que necesiten realizar las siguientes tareas:
- Use el Administrador de migración en el Centro de
administración de Microsoft 365 para administrar la migración
de contenido a Microsoft 365, incluidos los sitios de Teams,
OneDrive para la Empresa y SharePoint, desde diversos
orígenes, como Google Drive, Dropbox y Box.
- Seleccione orígenes de migración, cree inventarios de
migración (como listas de usuarios de Google Drive),
programe y ejecute migraciones y descargue informes.
- Cree nuevos sitios de SharePoint si los sitios de destino aún
Administrador de
no existen, cree listas de SharePoint en los sitios de
migración
administración de SharePoint y cree y actualice elementos en
listas de SharePoint.
- Administrar la configuración del proyecto de migración y el
ciclo de vida de la migración para las tareas, así como
administrar asignaciones de permisos de origen a destino.
Nota: Con este rol, solo puedes migrar desde Google Drive,
Box, Dropbox y Egnyte. Este rol no permite migrar desde
orígenes de recursos compartidos de archivos desde el Centro
de administración de SharePoint. Use un administrador de
SharePoint o un administrador global para migrar desde
orígenes de recursos compartidos de archivos.
Asigne el rol de administrador de aplicaciones de Office a los
usuarios que necesiten hacer lo siguiente:
- Use el servicio Cloud Policy para Microsoft 365 para crear y
Administrador de administrar directivas basadas en la nube.
aplicaciones de Office - Crear y administrar solicitudes de servicio
- Administrar el contenido novedades que los usuarios ven en
sus aplicaciones de Microsoft 365
- Supervisar el estado del servicio
Escritor de mensajes Asigne el rol Escritor de mensajes de la organización a los
de la organización usuarios que necesiten escribir, publicar, administrar y revisar
los mensajes de la organización para los usuarios finales a
través de superficies de productos de Microsoft.
Centro Crip tológico Nacional 33

| Lector del Centro de <br> mensajes |  | Asigne el rol de Lector del Centro de mensajes a los usuarios |  |
| --- | --- | --- | --- |
|  |  | que necesiten hacer lo siguiente: |  |
|  |  | - Supervisar las notificaciones del Centro de mensajes |  |
|  |  | - Obtener resúmenes semanales por correo electrónico de las |  |
|  |  | publicaciones y actualizaciones del Centro de mensajes |  |
|  |  | - Compartir publicaciones del Centro de mensajes |  |
|  |  | - Tener acceso de solo lectura a Microsoft Entra servicios, |  |
|  |  | como usuarios y grupos |  |
| Administrador de <br> migración | Asigne el rol Administrador de migración de Microsoft 365 a <br> los usuarios que necesiten realizar las siguientes tareas: <br> - Use el Administrador de migración en el Centro de <br> administración de Microsoft 365 para administrar la migración <br> de contenido a Microsoft 365, incluidos los sitios de Teams, <br> OneDrive para la Empresa y SharePoint, desde diversos <br> orígenes, como Google Drive, Dropbox y Box. <br> - Seleccione orígenes de migración, cree inventarios de <br> migración (como listas de usuarios de Google Drive), <br> programe y ejecute migraciones y descargue informes. <br> - Cree nuevos sitios de SharePoint si los sitios de destino aún <br> no existen, cree listas de SharePoint en los sitios de <br> administración de SharePoint y cree y actualice elementos en <br> listas de SharePoint. <br> - Administrar la configuración del proyecto de migración y el <br> ciclo de vida de la migración para las tareas, así como <br> administrar asignaciones de permisos de origen a destino. <br> Nota: Con este rol, solo puedes migrar desde Google Drive, <br> Box, Dropbox y Egnyte. Este rol no permite migrar desde <br> orígenes de recursos compartidos de archivos desde el Centro <br> de administración de SharePoint. Use un administrador de <br> SharePoint o un administrador global para migrar desde <br> orígenes de recursos compartidos de archivos. |  |  |
| Administrador de <br> aplicaciones de Office |  | Asigne el rol de administrador de aplicaciones de Office a los |  |
|  |  | usuarios que necesiten hacer lo siguiente: |  |
|  |  | - Use el servicio Cloud Policy para Microsoft 365 para crear y |  |
|  |  | administrar directivas basadas en la nube. |  |
|  |  | - Crear y administrar solicitudes de servicio |  |
|  |  | - Administrar el contenido novedades que los usuarios ven en |  |
|  |  | sus aplicaciones de Microsoft 365 |  |
|  |  | - Supervisar el estado del servicio |  |
| Escritor de mensajes <br> de la organización | Asigne el rol Escritor de mensajes de la organización a los <br> usuarios que necesiten escribir, publicar, administrar y revisar <br> los mensajes de la organización para los usuarios finales a <br> través de superficies de productos de Microsoft. |  |  |


| Lector del Centro de |
| --- |
| mensajes |


| Administrador de |
| --- |
| migración |


| Administrador de |
| --- |
| aplicaciones de Office |


| Escritor de mensajes |
| --- |
| de la organización |


![Imagen 1 - Página 33](CCN-STIC 885A_assets\pagina33_img1.png)

![Imagen 2 - Página 33](CCN-STIC 885A_assets\pagina33_img2.png)

![Imagen 3 - Página 33](CCN-STIC 885A_assets\pagina33_img3.png)

![Imagen 4 - Página 33](CCN-STIC 885A_assets\pagina33_img4.png)

![Imagen 5 - Página 33](CCN-STIC 885A_assets\pagina33_img5.png)

---

<!-- Página 34 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Aprobador de Asigne el rol Aprobador de mensajes organizativos a los
mensajes de la usuarios que necesiten revisar, aprobar o rechazar nuevos
organización mensajes de la organización para su entrega en el Centro de
administración de Microsoft 365 antes de que se envíen a los
usuarios a través de superficies de productos de Microsoft.
Administrador de Asigne el rol de administrador de contraseñas a un usuario
contraseñas que necesite restablecer las contraseñas de los no
administradores y los administradores de contraseñas.
Administrador de Asigne el rol de administrador de Power Platform a los
Power Platform usuarios que necesiten hacer lo siguiente:
- Administrar todas las características de administración de
Power Apps, Power Automate, Power BI, Microsoft Fabric y
Prevención de pérdida de datos de Microsoft Purview
- Crear y administrar solicitudes de servicio
- Supervisar el estado del servicio
Lector de informes Asigne el rol de lector de informes a los usuarios que
necesiten hacer lo siguiente:
- Ver datos de uso e informes de actividad en el Centro de
administración de Microsoft 365
- Obtener acceso al paquete de contenido de adopción de
Power BI
- Obtener acceso a los informes de inicio de sesión y la
actividad en Microsoft Entra ID
- Ver datos devueltos por la API de informes de Microsoft
Graph
Administrador de Asigne el rol de administrador Búsqueda a los usuarios que
búsqueda necesitan crear y administrar el contenido de los resultados
de búsqueda y definir la configuración de consulta para
mejorar los resultados de búsqueda dentro de la organización.
El administrador de Búsqueda administra la configuración de
búsqueda de Microsoft y puede realizar todas las tareas de
administración de contenido que puede realizar un editor de
Búsqueda.
Administrador de Asigne el rol de administrador de soporte técnico de servicio
soporte técnico del como un rol adicional a los administradores o usuarios que
servicio necesiten hacer, además de su rol de administrador habitual,
lo siguiente:
- Abrir y administrar solicitudes de servicio
- Ver y compartir publicaciones del centro de mensajes
- Supervisar el estado del servicio
Centro Crip tológico Nacional 34

| Aprobador de <br> mensajes de la <br> organización |  | Asigne el rol Aprobador de mensajes organizativos a los |  |
| --- | --- | --- | --- |
|  |  | usuarios que necesiten revisar, aprobar o rechazar nuevos |  |
|  |  | mensajes de la organización para su entrega en el Centro de |  |
|  |  | administración de Microsoft 365 antes de que se envíen a los |  |
|  |  | usuarios a través de superficies de productos de Microsoft. |  |
| Administrador de <br> contraseñas | Asigne el rol de administrador de contraseñas a un usuario <br> que necesite restablecer las contraseñas de los no <br> administradores y los administradores de contraseñas. |  |  |
| Administrador de <br> Power Platform |  | Asigne el rol de administrador de Power Platform a los |  |
|  |  | usuarios que necesiten hacer lo siguiente: |  |
|  |  | - Administrar todas las características de administración de |  |
|  |  | Power Apps, Power Automate, Power BI, Microsoft Fabric y |  |
|  |  | Prevención de pérdida de datos de Microsoft Purview |  |
|  |  | - Crear y administrar solicitudes de servicio |  |
|  |  | - Supervisar el estado del servicio |  |
| Lector de informes |  | Asigne el rol de lector de informes a los usuarios que |  |
|  |  | necesiten hacer lo siguiente: |  |
|  |  | - Ver datos de uso e informes de actividad en el Centro de |  |
|  |  | administración de Microsoft 365 |  |
|  |  | - Obtener acceso al paquete de contenido de adopción de |  |
|  |  | Power BI |  |
|  |  | - Obtener acceso a los informes de inicio de sesión y la |  |
|  |  | actividad en Microsoft Entra ID |  |
|  |  | - Ver datos devueltos por la API de informes de Microsoft |  |
|  |  | Graph |  |
| Administrador de <br> búsqueda |  | Asigne el rol de administrador Búsqueda a los usuarios que |  |
|  |  | necesitan crear y administrar el contenido de los resultados |  |
|  |  | de búsqueda y definir la configuración de consulta para |  |
|  |  | mejorar los resultados de búsqueda dentro de la organización. |  |
|  |  | El administrador de Búsqueda administra la configuración de |  |
|  |  | búsqueda de Microsoft y puede realizar todas las tareas de |  |
|  |  | administración de contenido que puede realizar un editor de |  |
|  |  | Búsqueda. |  |
| Administrador de <br> soporte técnico del <br> servicio |  | Asigne el rol de administrador de soporte técnico de servicio |  |
|  |  | como un rol adicional a los administradores o usuarios que |  |
|  |  | necesiten hacer, además de su rol de administrador habitual, |  |
|  |  | lo siguiente: |  |
|  |  | - Abrir y administrar solicitudes de servicio |  |
|  |  | - Ver y compartir publicaciones del centro de mensajes |  |
|  |  | - Supervisar el estado del servicio |  |


| Aprobador de |
| --- |
| mensajes de la |
| organización |


| Administrador de |
| --- |
| contraseñas |


| Administrador de |
| --- |
| Power Platform |


| Administrador de |
| --- |
| búsqueda |


| Administrador de |
| --- |
| soporte técnico del |
| servicio |


![Imagen 1 - Página 34](CCN-STIC 885A_assets\pagina34_img1.png)

![Imagen 2 - Página 34](CCN-STIC 885A_assets\pagina34_img2.png)

![Imagen 3 - Página 34](CCN-STIC 885A_assets\pagina34_img3.png)

![Imagen 4 - Página 34](CCN-STIC 885A_assets\pagina34_img4.png)

![Imagen 5 - Página 34](CCN-STIC 885A_assets\pagina34_img5.png)

---

<!-- Página 35 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Administrador de Asigne el rol de administrador de SharePoint a los usuarios
SharePoint que necesiten acceder y administrar el centro de
administración de SharePoint Online.
Los administradores de SharePoint también pueden:
- Crear y eliminar sitios
- Administrar colecciones de sitios y la configuración global de
SharePoint
Administrador de Asigne el rol de administrador de Teams a los usuarios que
Teams necesiten acceder y administrar el Centro de administración
de Teams.
El administrador de Teams también puede:
- Administrar reuniones
- Administrar puentes de conferencia
- Administrar la configuración de toda la organización, incluida
la federación, la actualización de equipos y la configuración de
cliente de equipos
Administrador de Asigne el rol de administrador de usuarios a los usuarios que
usuarios necesiten hacer lo siguiente para todos los usuarios:
- Agregar usuarios y grupos
- Asignar licencias
- Administrar las propiedades de la mayoría de los usuarios
- Crear y administrar vistas de usuarios
- Actualizar las directivas de expiración de contraseña
- Administrar solicitudes de servicio
- Supervisar el estado del servicio
El administrador de usuario también puede realizar las
siguientes acciones para los usuarios que no sean
administradores y para los usuarios que tengan asignados los
siguientes roles: Lector de directorios, Invitador de usuarios
invitados, Administrador del departamento de soporte
técnico, Lector del centro de mensajes y Lector de informes:
- Administrar nombres de usuario
- Eliminar y restaurar usuarios
- Restablecer contraseñas
- Forzar a los usuarios a cerrar sesión
- Actualizar claves de dispositivo (FIDO)
Administrador de Asigne el rol Administrador de éxito de experiencia de usuario
éxito de la a los usuarios que necesitan acceder a Experience Insights, la
experiencia del puntuación de adopción y el Centro de mensajes en el Centro
usuario de administración de Microsoft 365. Este rol incluye los
permisos del rol Lector de informes de resumen de uso.
Centro Crip tológico Nacional 35

| Administrador de <br> SharePoint |  | Asigne el rol de administrador de SharePoint a los usuarios |  |
| --- | --- | --- | --- |
|  |  | que necesiten acceder y administrar el centro de |  |
|  |  | administración de SharePoint Online. |  |
|  |  | Los administradores de SharePoint también pueden: |  |
|  |  | - Crear y eliminar sitios |  |
|  |  | - Administrar colecciones de sitios y la configuración global de |  |
|  |  | SharePoint |  |
| Administrador de <br> Teams |  | Asigne el rol de administrador de Teams a los usuarios que |  |
|  |  | necesiten acceder y administrar el Centro de administración |  |
|  |  | de Teams. |  |
|  |  | El administrador de Teams también puede: |  |
|  |  | - Administrar reuniones |  |
|  |  | - Administrar puentes de conferencia |  |
|  |  | - Administrar la configuración de toda la organización, incluida |  |
|  |  | la federación, la actualización de equipos y la configuración de |  |
|  |  | cliente de equipos |  |
| Administrador de <br> usuarios |  | Asigne el rol de administrador de usuarios a los usuarios que |  |
|  |  | necesiten hacer lo siguiente para todos los usuarios: |  |
|  |  | - Agregar usuarios y grupos |  |
|  |  | - Asignar licencias |  |
|  |  | - Administrar las propiedades de la mayoría de los usuarios |  |
|  |  | - Crear y administrar vistas de usuarios |  |
|  |  | - Actualizar las directivas de expiración de contraseña |  |
|  |  | - Administrar solicitudes de servicio |  |
|  |  | - Supervisar el estado del servicio |  |
|  |  | El administrador de usuario también puede realizar las |  |
|  |  | siguientes acciones para los usuarios que no sean |  |
|  |  | administradores y para los usuarios que tengan asignados los |  |
|  |  | siguientes roles: Lector de directorios, Invitador de usuarios |  |
|  |  | invitados, Administrador del departamento de soporte |  |
|  |  | técnico, Lector del centro de mensajes y Lector de informes: |  |
|  |  | - Administrar nombres de usuario |  |
|  |  | - Eliminar y restaurar usuarios |  |
|  |  | - Restablecer contraseñas |  |
|  |  | - Forzar a los usuarios a cerrar sesión |  |
|  |  | - Actualizar claves de dispositivo (FIDO) |  |
| Administrador de <br> éxito de la <br> experiencia del <br> usuario |  | Asigne el rol Administrador de éxito de experiencia de usuario |  |
|  |  | a los usuarios que necesitan acceder a Experience Insights, la |  |
|  |  | puntuación de adopción y el Centro de mensajes en el Centro |  |
|  |  | de administración de Microsoft 365. Este rol incluye los |  |
|  |  | permisos del rol Lector de informes de resumen de uso. |  |


| Administrador de |
| --- |
| SharePoint |


| Administrador de |
| --- |
| Teams |


| Administrador de |
| --- |
| usuarios |


| Administrador de |
| --- |
| éxito de la |
| experiencia del |
| usuario |


![Imagen 1 - Página 35](CCN-STIC 885A_assets\pagina35_img1.png)

![Imagen 2 - Página 35](CCN-STIC 885A_assets\pagina35_img2.png)

![Imagen 3 - Página 35](CCN-STIC 885A_assets\pagina35_img3.png)

![Imagen 4 - Página 35](CCN-STIC 885A_assets\pagina35_img4.png)

![Imagen 5 - Página 35](CCN-STIC 885A_assets\pagina35_img5.png)

---

<!-- Página 36 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
El portal de Entra ID tiene más roles que los disponibles en el Centro de
administración de Microsoft 365.
Desde Entra ID es posible crear roles personalizados. Se necesita Entra ID Premium
P1 o P2.
3.1.1.4 PROCESO DE GESTIÓN DE DERECHOS DE ACCESO
Más información en las guías específicas de cada servicio: Sharepoint Online [CCN-
STIC-885B - Guía de configuración segura para Sharepoint Online], Exchange Online
[CCN-STIC-885C - Guía de configuración segura para Exchange Online] y Teams [CCN-
STIC 885D - Guía de configuración segura para Microsoft Teams].
3.1.1.5 MECANISMO DE AUTENTICACIÓN (USUARIOS EXTERNOS)
Desde el Centro de administración de Microsoft 365 en el menú [Configuración\
\configuración de la organización\Seguridad y Privacidad] se pueden establecer
Directivas de expiración de contraseñas para todos los usuarios de la organización.
Se recomienda activar la opción Establecer que las contraseñas nunca expiren
(recomendado).
Desde Office 365 sólo se pueden modificar estos parámetros, cuyos valores por
defecto son:
Días antes de que las contraseñas expiren: 90
Nota: Las notificaciones de expiración de contraseñas ya no se admiten en las
aplicaciones Centro de administración de Microsoft 365 y Microsoft 365.
Para una gestión más avanzada hay que recurrir a Entra ID. Consultar guía [CCN-
STIC-884A - Guía de configuración segura para Azure].
Powershell
Desde PS se pueden consultar y/o modificar un parámetro relacionado con la
contraseña del usuario:
 PasswordNeverExpires: si la contraseña nunca expira.
Listado de usuarios con información de caducidad
Get-MgUser -All | Select-Object UserPrincipalName,
@{N="PasswordNeverExpires";E={$_.PasswordPolicies -contains
"DisablePasswordExpiration"}}
Centro Crip tológico Nacional 36

| Nota: Las notificaciones de expiración de contraseñas ya no se admiten en las |
| --- |
| aplicaciones Centro de administración de Microsoft 365 y Microsoft 365. |


|  | Get-MgUser -All \| Select-Object UserPrincipalName, |  |
| --- | --- | --- |
|  | @{N="PasswordNeverExpires";E={$_.PasswordPolicies -contains |  |
|  | "DisablePasswordExpiration"}} |  |


![Imagen 1 - Página 36](CCN-STIC 885A_assets\pagina36_img1.png)

![Imagen 2 - Página 36](CCN-STIC 885A_assets\pagina36_img2.png)

![Imagen 3 - Página 36](CCN-STIC 885A_assets\pagina36_img3.png)

![Imagen 4 - Página 36](CCN-STIC 885A_assets\pagina36_img4.png)

![Imagen 5 - Página 36](CCN-STIC 885A_assets\pagina36_img5.png)

![Imagen 6 - Página 36](CCN-STIC 885A_assets\pagina36_img6.png)

![Imagen 7 - Página 36](CCN-STIC 885A_assets\pagina36_img7.png)

---

<!-- Página 37 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Modificar parámetros de contraseñas
Se recomienda aplicar el siguiente comando:
Update-MgUser -UserId <user ID> -PasswordPolicies DisablePasswordExpiration
Nota: Se recomienda configurar el parámetro PasswordNeverExpires en los entornos
de Producción de la empresa.
Cómo ya se ha comentado, para una configuración avanzada de la política de
contraseña hay que recurrir a la guía [CCN-STIC-884A - Guía de configuración segura
para Azure].
A continuación, se desglosan las características de las cuentas de usuario de Entra
ID, y los comandos para modificarlas:
Propiedad Requerimiento de UPN (User Principal Name)
Caracteres permitidos Caracteres en mayúsculas (A - Z)
Caracteres en minúsculas (a - z)
Números (0 - 9)
Símbolos:
- @ # $ % ^ & * - _ ! + = [ ] { } | \ : ' , . ? / ` ~ " ( ) ; <>
- espacio en blanco
Caracteres no Caracteres unicode
permitidos en las Espacios
contraseñas
Longitud de la Las contraseñas requieren lo siguiente
contraseña - Una longitud mínima de ocho caracteres
- 256 caracteres como máximo.
Complejidad de la Las contraseñas requieren tres de las cuatro categorías
contraseña siguientes:
- Caracteres en mayúsculas
- Caracteres en minúsculas
- Números
- Símbolos
Nota: La comprobación de complejidad de la contraseña no
es necesaria para los tenants de Education.
Contraseña no usada Cuando un usuario cambie su contraseña, la nueva
recientemente contraseña no debería ser la misma que la contraseña actual.
La protección de La contraseña no puede estar en la lista global de
contraseñas de contraseñas prohibidas de la protección de contraseñas de
Microsoft Entra no ha Microsoft Entra ni en la lista personalizable de contraseñas
prohibido la prohibidas específicas de la organización.
contraseña
Centro Crip tológico Nacional 37

|  | Update-MgUser -UserId <user ID> -PasswordPolicies DisablePasswordExpiration |  |
| --- | --- | --- |


| Nota: Se recomienda configurar el parámetro PasswordNeverExpires en los entornos |
| --- |
| de Producción de la empresa. |


| Propiedad |  |  | Requerimiento de UPN (User Principal Name) |
| --- | --- | --- | --- |
| Caracteres permitidos |  |  | Caracteres en mayúsculas (A - Z) |
|  |  |  | Caracteres en minúsculas (a - z) |
|  |  |  | Números (0 - 9) |
|  |  |  | Símbolos: |
|  |  |  | - @ # $ % ^ & * - _ ! + = [ ] { } \| \ : ' , . ? / ` ~ " ( ) ; <> |
|  |  |  | - espacio en blanco |
| Caracteres no |  | Caracteres unicode <br> Espacios |  |
| permitidos en las |  |  |  |
| contraseñas |  |  |  |
| Longitud de la |  |  | Las contraseñas requieren lo siguiente |
| contraseña |  |  | - Una longitud mínima de ocho caracteres |
|  |  |  | - 256 caracteres como máximo. |
|  |  | Las contraseñas requieren tres de las cuatro categorías <br> siguientes: <br> - Caracteres en mayúsculas <br> - Caracteres en minúsculas <br> - Números <br> - Símbolos <br> Nota: La comprobación de complejidad de la contraseña no <br> es necesaria para los tenants de Education. |  |
| Contraseña no usada |  |  | Cuando un usuario cambie su contraseña, la nueva |
| recientemente |  |  | contraseña no debería ser la misma que la contraseña actual. |
| La protección de |  | La contraseña no puede estar en la lista global de <br> contraseñas prohibidas de la protección de contraseñas de <br> Microsoft Entra ni en la lista personalizable de contraseñas <br> prohibidas específicas de la organización. |  |
| contraseñas de |  |  |  |
| Microsoft Entra no ha |  |  |  |
| prohibido la |  |  |  |
| contraseña |  |  |  |


| Complejidad de la |
| --- |
| contraseña |


![Imagen 1 - Página 37](CCN-STIC 885A_assets\pagina37_img1.png)

![Imagen 2 - Página 37](CCN-STIC 885A_assets\pagina37_img2.png)

![Imagen 3 - Página 37](CCN-STIC 885A_assets\pagina37_img3.png)

![Imagen 4 - Página 37](CCN-STIC 885A_assets\pagina37_img4.png)

![Imagen 5 - Página 37](CCN-STIC 885A_assets\pagina37_img5.png)

---

<!-- Página 38 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Activar la autenticación multifactor (MFA)
Elemento Al estar habilitado Al estar Método de
deshabilitado autenticación
secundario
Security defaults No se pueden usar Se pueden usar Aplicación Microsoft
directivas de acceso directivas de acceso Authenticator
condicional condicional
Directivas de acceso Si hay alguno Si se deshabilitan Especificado por el
condicional habilitado, no puede todos, puede usuario durante el
habilitar los valores habilitar los valores registro de MFA
predeterminados de predeterminados de
seguridad. seguridad
MFA heredada por Invalida los valores Invalidado por Especificado por el
usuario (no predeterminados de valores usuario durante el
recomendado) seguridad y las predeterminados de registro de MFA
directivas de acceso seguridad y
condicional que directivas de acceso
requieren MFA en condicional
cada inicio de sesión
Como se describe en el apartado [3.1.1.3 Segregación de funciones y tareas] es
importante habilitar MFA al menos para los usuarios con el rol de administración. Para
ello:
Security defaults
Para activar el MFA a través de este método:
a) Iniciar sesión en el Centro de administración Microsoft Entra como
administrador de seguridad como mínimo.
b) Navegar a Información general > Propiedades.
c) Seleccionar Administrar los valores predeterminados de seguridad.
d) Cambiar los valores predeterminados de Seguridad a Habilitado.
e) Click en guardar.
Centro Crip tológico Nacional 38

| Elemento | Al estar habilitado |  |  | Al estar <br> deshabilitado |  |  |  | Método de |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  | autenticación |  |
|  |  |  |  |  |  |  |  | secundario |  |
| Security defaults |  | No se pueden usar |  |  | Se pueden usar |  | Aplicación Microsoft <br> Authenticator | Aplicación Microsoft |  |
|  |  | directivas de acceso |  |  | directivas de acceso |  |  | Authenticator |  |
|  |  | condicional |  |  | condicional |  |  |  |  |
| Directivas de acceso <br> condicional | Si hay alguno <br> habilitado, no puede <br> habilitar los valores <br> predeterminados de <br> seguridad. |  |  | Si se deshabilitan <br> todos, puede <br> habilitar los valores <br> predeterminados de <br> seguridad |  |  | Especificado por el <br> usuario durante el <br> registro de MFA |  |  |
| MFA heredada por <br> usuario (no <br> recomendado) |  | Invalida los valores |  | Invalidado por <br> valores <br> predeterminados de <br> seguridad y <br> directivas de acceso <br> condicional |  |  | Especificado por el <br> usuario durante el <br> registro de MFA |  |  |
|  |  | predeterminados de |  |  |  |  |  |  |  |
|  |  | seguridad y las |  |  |  |  |  |  |  |
|  |  | directivas de acceso |  |  |  |  |  |  |  |
|  |  | condicional que |  |  |  |  |  |  |  |
|  |  | requieren MFA en |  |  |  |  |  |  |  |
|  |  | cada inicio de sesión |  |  |  |  |  |  |  |


| Al estar |
| --- |
| deshabilitado |


| Directivas de acceso |
| --- |
| condicional |


| MFA heredada por |
| --- |
| usuario (no |
| recomendado) |


| Invalidado por |
| --- |
| valores |
| predeterminados de |
| seguridad y |
| directivas de acceso |
| condicional |


| Especificado por el |
| --- |
| usuario durante el |
| registro de MFA |


![Imagen 1 - Página 38](CCN-STIC 885A_assets\pagina38_img1.png)

![Imagen 2 - Página 38](CCN-STIC 885A_assets\pagina38_img2.png)

![Imagen 3 - Página 38](CCN-STIC 885A_assets\pagina38_img3.png)

![Imagen 4 - Página 38](CCN-STIC 885A_assets\pagina38_img4.png)

![Imagen 5 - Página 38](CCN-STIC 885A_assets\pagina38_img5.png)

![Imagen 6 - Página 38](CCN-STIC 885A_assets\pagina38_img6.png)

---

<!-- Página 39 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
MFA heredada por usuario (no recomendado)
a) Acceder al menú [Usuarios\Usuarios Activos].
b) Pulsar el icono “Autenticación multifactor” de la barra superior.
c) Se accede a un nuevo panel de administración:
d) Marcar un usuario con el check correspondiente y habilitar o deshabilitar el MFA
en el panel derecho.
Nota: El método Per-user MFA será deprecado el 30 de septiembre de 2025 y
será sustituido por Authentication methods de Entra ID. Para migrar al nuevo
método, ver el siguiente enlace; Migración a la directiva de métodos de
autenticación - Microsoft Entra ID | Microsoft Learn
Directivas de acceso condicional
Las directivas de acceso condicional son un conjunto de reglas que especifican las
condiciones en las que se evalúan y permiten los inicios de sesión. Por ejemplo, puede
crear una directiva de acceso condicional que indique lo siguiente:
 Si el nombre de la cuenta de usuario es miembro de un grupo de usuarios a los
que se han asignado los roles de administrador de Exchange, de usuarios, de
contraseñas, de seguridad, de SharePoint o global, requerir MFA antes de
permitir el acceso.
Esta directiva le permite exigir la MFA en función de la pertenencia a grupos, en
lugar de intentar configurar cuentas de usuario individuales para la MFA cuando se
asignan o se quitan estos roles de administrador.
Centro Crip tológico Nacional 39

| Nota: El método Per-user MFA será deprecado el 30 de septiembre de 2025 y |
| --- |
| será sustituido por Authentication methods de Entra ID. Para migrar al nuevo |
| método, ver el siguiente enlace; Migración a la directiva de métodos de |
| autenticación - Microsoft Entra ID \| Microsoft Learn |


![Imagen 1 - Página 39](CCN-STIC 885A_assets\pagina39_img1.png)

![Imagen 2 - Página 39](CCN-STIC 885A_assets\pagina39_img2.png)

![Imagen 3 - Página 39](CCN-STIC 885A_assets\pagina39_img3.png)

![Imagen 4 - Página 39](CCN-STIC 885A_assets\pagina39_img4.png)

![Imagen 5 - Página 39](CCN-STIC 885A_assets\pagina39_img5.png)

![Imagen 6 - Página 39](CCN-STIC 885A_assets\pagina39_img6.jpeg)

![Imagen 7 - Página 39](CCN-STIC 885A_assets\pagina39_img7.png)

![Imagen 8 - Página 39](CCN-STIC 885A_assets\pagina39_img8.png)

---

<!-- Página 40 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
También puede usar directivas de acceso condicional para funcionalidades más
avanzadas, como requerir MFA para aplicaciones específicas o que el inicio de sesión
se realice desde un dispositivo compatible, como el equipo portátil que ejecuta
Windows 10.
Para más información consultar [CCN-STIC-884A - Guía de configuración segura para
Azure]
Powershell de Office 365
Planificación de los métodos de autenticación
Los administradores pueden elegir los métodos de autenticación que quieren que
estén disponibles para los usuarios. Es importante habilitar más de un método de
autenticación para que los usuarios tengan disponible un método alternativo en caso
de que su método principal no esté disponible. Los métodos siguientes están
disponibles para que los administradores los habiliten:
a) FIDO2 security key: El usuario conecta la clave de seguridad FIDO2 en su
equipo, Windows detecta la llave de seguridad FIDO2, entonces el usuario
realiza su gesto para desbloquear la clave privada almacenada en el enclave
seguro de la llave de seguridad FIDO2.
Para más información: Inicio de sesión sin contraseña de Microsoft Entra -
Microsoft Entra ID | Microsoft Learn
b) Notificación a través de aplicación móvil: Se envía una notificación push a la
aplicación Microsoft Authenticator del dispositivo móvil. El usuario ve la
notificación y selecciona Aprobar para completar la comprobación. Las
notificaciones push a través de una aplicación móvil proporcionan la opción
menos intrusiva para los usuarios.
Para más información: Método de autenticación de Microsoft Authenticator -
Microsoft Entra ID | Microsoft Learn
c) Código de verificación desde aplicación móvil: Una aplicación móvil como la de
Microsoft Authenticator genera un nuevo código de verificación de OATH cada
30 segundos. El usuario escribe el código de verificación en la interfaz de inicio
de sesión. La opción de aplicación móvil puede utilizarse independientemente
de si el teléfono tiene una señal de telefonía móvil o datos.
Para más información: Método de autenticación de Microsoft Authenticator -
Microsoft Entra ID | Microsoft Learn
d) SMS: Se envía al usuario un mensaje de texto que contiene un código de
verificación; después, se le pide al usuario que escriba el código de verificación
en la interfaz de inicio de sesión.
Para más información: Métodos de autenticación de teléfono - Microsoft Entra
ID | Microsoft Learn
Centro Crip tológico Nacional 40

![Imagen 1 - Página 40](CCN-STIC 885A_assets\pagina40_img1.png)

![Imagen 2 - Página 40](CCN-STIC 885A_assets\pagina40_img2.png)

![Imagen 3 - Página 40](CCN-STIC 885A_assets\pagina40_img3.png)

![Imagen 4 - Página 40](CCN-STIC 885A_assets\pagina40_img4.png)

![Imagen 5 - Página 40](CCN-STIC 885A_assets\pagina40_img5.png)

---

<!-- Página 41 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
e) Pase de acceso temporal (TAP): El pase de acceso temporal (TAP) es un código
de acceso de tiempo limitado que puede configurarse para usarse una o varias
veces. Los usuarios pueden iniciar sesión con un TAP para incorporar otros
métodos de autenticación sin contraseña, como Microsoft Authenticator, FIDO2
y Windows Hello para empresas.
Para más información: Configuración de un pase de acceso temporal en Id. de
Microsoft Entra para registrar métodos de autenticación sin contraseña -
Microsoft Entra ID | Microsoft Learn
f) Tokens de hardware OATH (versión preliminar): Microsoft Entra ID admite el
uso de tokens OATH-TOTP SHA-1 que actualizan los códigos cada 30 o 60
segundos. Los clientes pueden adquirir estos tokens a través de proveedores de
terceros. Los tokens OATH de hardware están disponibles para usuarios con una
licencia Microsoft Entra ID P1 o P2.
Los tokens de hardware TOTP de OATH suelen incluir una clave secreta, o valor
de inicialización, programada previamente en el token. Estas claves deben
introducirse en Microsoft Entra ID tal como se describe en los pasos siguientes.
Las claves secretas están limitadas a 128 caracteres, que no son compatibles con
algunos tokens. La clave secreta solo puede contener los caracteres a-z o A-Z y
los dígitos 2-7, y debe estar codificada en base 32.
Para más información: Método de autenticación de token OATH - Microsoft
Entra ID | Microsoft Learn
Nota: La versión preliminar solo se admite en nubes globales de Entra ID y Entra ID
Government.
g) Tokens de software OATH: Los tokens de software OATH suelen ser
aplicaciones, como la aplicación Microsoft Authenticator y otras aplicaciones de
autenticador. Microsoft Entra ID genera la clave secreta o valor de inicialización,
que se introduce en la aplicación y se usa para generar cada OTP.
Para más información: Método de autenticación de token OATH - Microsoft
Entra ID | Microsoft Learn
h) Llamada al teléfono: Se realiza una llamada de voz automática al usuario. El
usuario responde a la llamada y pulsa # en el teclado del teléfono para aprobar
su autenticación. La llamada a teléfono es un método alternativo excelente para
los códigos de verificación o notificación de una aplicación móvil.
Para más información: Métodos de autenticación de teléfono - Microsoft Entra
ID | Microsoft Learn
i) Email OTP: La característica de código de acceso de un solo uso por correo
electrónico es una manera de autenticar a los usuarios de colaboración B2B
cuando no se pueden autenticar a través de otros medios, como Microsoft Entra
ID, la cuenta Microsoft (MSA) o los proveedores de identidades sociales. Cuando
un usuario invitado B2B intenta canjear la invitación o iniciar sesión en los
Centro Crip tológico Nacional 41

| Nota: La versión preliminar solo se admite en nubes globales de Entra ID y Entra ID |
| --- |
| Government. |


![Imagen 1 - Página 41](CCN-STIC 885A_assets\pagina41_img1.png)

![Imagen 2 - Página 41](CCN-STIC 885A_assets\pagina41_img2.png)

![Imagen 3 - Página 41](CCN-STIC 885A_assets\pagina41_img3.png)

![Imagen 4 - Página 41](CCN-STIC 885A_assets\pagina41_img4.png)

![Imagen 5 - Página 41](CCN-STIC 885A_assets\pagina41_img5.png)

---

<!-- Página 42 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
recursos compartidos, puede solicitar un código de acceso temporal, que se
envía a su dirección de correo electrónico. A continuación, escribe el código de
acceso para continuar con el inicio de sesión.
Para los usuarios internos del tenant, este método solamente se puede utilizar
para la recuperación de la contraseña.
Para más información Autenticación de código de acceso de un solo uso para
usuarios invitados de B2B - Microsoft Entra External ID | Microsoft Learn
j) Autenticación basada en certificados: La autenticación basada en certificados
(CBA) de Microsoft Entra habilita a los clientes para permitir o requerir que los
usuarios se autentiquen directamente con certificados X.509 en Microsoft Entra
ID para aplicaciones e inicio de sesión en el explorador. Esta característica
permite a los clientes adoptar una autenticación resistente a la suplantación de
identidad (phishing) y autenticarse con un certificado X.509 en su
infraestructura de clave pública (PKI).
Para más información Introducción a la autenticación basada en certificados de
Microsoft Entra - Microsoft Entra ID | Microsoft Learn
Más información de cómo configurar los distintos métodos de autenticación en la
guía [CCN-STIC-884A - Guía de configuración segura para Azure.]
3.1.1.6 MECANISMO DE AUTENTICACIÓN (USUARIOS DE LA ORGANIZACIÓN)
Ver el apartado 3.1.1.5 MECANISMO DE AUTENTICACIÓN (USUARIOS EXTERNOS)
3.1.2 EXPLOTACIÓN
Office 365, al ser un software ofrecido como servicio (SaaS), siempre estará
actualizado. Es decir, el servicio es mantenido permanentemente por Microsoft,
encargándose de las actualizaciones y parches, así como de establecer los mecanismos
de detección y protección ante amenazas, cumpliendo con los requisitos Esquema
Nacional de Seguridad en su categoría ALTA.
En esta sección se explicará el funcionamiento y las características del Centro de
Seguridad al que se accede desde el portal de Administración.
3.1.2.1 PROTECCIÓN FRENTE A CÓDIGO DAÑINO
Si la organización dispone de las licencias correspondientes podrá ver el informe de
“Estado de protección contra amenazas”. El informe de estado de protección contra
amenazas proporciona información sobre las amenazas detectadas antes de la entrega
de correo electrónico, que abarca tecnologías de detección relevantes, tipos de
directivas y acciones de entrega.
Centro Crip tológico Nacional 42

![Imagen 1 - Página 42](CCN-STIC 885A_assets\pagina42_img1.png)

![Imagen 2 - Página 42](CCN-STIC 885A_assets\pagina42_img2.png)

![Imagen 3 - Página 42](CCN-STIC 885A_assets\pagina42_img3.png)

![Imagen 4 - Página 42](CCN-STIC 885A_assets\pagina42_img4.png)

![Imagen 5 - Página 42](CCN-STIC 885A_assets\pagina42_img5.png)

![Imagen 6 - Página 42](CCN-STIC 885A_assets\pagina42_img6.png)

---

<!-- Página 43 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
a) Desde el Centro de Seguridad de Office 365 menú [Informes\Informes de
colaboración y correo electrónico].
b) Click en el botón [Ver detalle] de la tarjeta [Estado de protección contra
amenazas]:
Centro Crip tológico Nacional 43

![Imagen 1 - Página 43](CCN-STIC 885A_assets\pagina43_img1.png)

![Imagen 2 - Página 43](CCN-STIC 885A_assets\pagina43_img2.png)

![Imagen 3 - Página 43](CCN-STIC 885A_assets\pagina43_img3.png)

![Imagen 4 - Página 43](CCN-STIC 885A_assets\pagina43_img4.png)

![Imagen 5 - Página 43](CCN-STIC 885A_assets\pagina43_img5.png)

![Imagen 6 - Página 43](CCN-STIC 885A_assets\pagina43_img6.png)

![Imagen 7 - Página 43](CCN-STIC 885A_assets\pagina43_img7.png)

![Imagen 8 - Página 43](CCN-STIC 885A_assets\pagina43_img8.png)

![Imagen 9 - Página 43](CCN-STIC 885A_assets\pagina43_img9.png)

---

<!-- Página 44 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Desde este informe se puede ver:
 Ver datos por Información general
 Ver datos por correos electrónicos de suplantación de identidad (phishing)
 Ver datos por correo electrónico de Malware
 Ver datos por correo electrónico de Correo no deseado
 Ver datos por contenido de software malintencionado
 Ver datos por invalidación del sistema
Para más sobre este informe Ver informes de Defender para Office 365 - Microsoft
Defender for Office 365 | Microsoft Learn
Más información en la guía [CCN-STIC-885C - Guía de configuración segura para
Exchange Online].
3.1.2.2 GESTIÓN DE INCIDENTES
Otros informes relevantes relacionados con la gestión de incidentes y accesibles
desde el Centro de Seguridad son:
 Panel de alertas. [Inicio] Widget del panel principal
https://security.microsoft.com/homepage
Centro Crip tológico Nacional 44

![Imagen 1 - Página 44](CCN-STIC 885A_assets\pagina44_img1.png)

![Imagen 2 - Página 44](CCN-STIC 885A_assets\pagina44_img2.png)

![Imagen 3 - Página 44](CCN-STIC 885A_assets\pagina44_img3.png)

![Imagen 4 - Página 44](CCN-STIC 885A_assets\pagina44_img4.png)

![Imagen 5 - Página 44](CCN-STIC 885A_assets\pagina44_img5.png)

![Imagen 6 - Página 44](CCN-STIC 885A_assets\pagina44_img6.png)

---

<!-- Página 45 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
 Panel de informes. Menú [Informes].
https://security.microsoft.com/securityreports
 Informes para su descarga. Menú [Informes\Informes para su descarga].
https://security.microsoft.com/ReportsForDownload
Centro Crip tológico Nacional 45

![Imagen 1 - Página 45](CCN-STIC 885A_assets\pagina45_img1.png)

![Imagen 2 - Página 45](CCN-STIC 885A_assets\pagina45_img2.png)

![Imagen 3 - Página 45](CCN-STIC 885A_assets\pagina45_img3.png)

![Imagen 4 - Página 45](CCN-STIC 885A_assets\pagina45_img4.png)

![Imagen 5 - Página 45](CCN-STIC 885A_assets\pagina45_img5.png)

![Imagen 6 - Página 45](CCN-STIC 885A_assets\pagina45_img6.png)

![Imagen 7 - Página 45](CCN-STIC 885A_assets\pagina45_img7.png)

---

<!-- Página 46 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
 Panel de Flujo de correo. Menú [Flujo de correo\Panel].
https://security.microsoft.com/emailandcollabreport
3.1.2.3 REGISTRO DE LA ACTIVIDAD
En lo relativo al registro de la actividad de usuarios y administradores se requiere la
activación de la Auditoría de Office 365.
Cuando se activa la búsqueda de registros de auditoría en el Centro de Seguridad, la
actividad de usuario y administrador de la organización se registra en el registro de
auditoría y se conserva durante 180 días.
Activar/Desactivar registro de auditoría
Se debe tener asignado el rol de Audit Logs or View-Only Audit Logs para activar o
desactivar la búsqueda de registros de auditoría en su organización de Office 365. De
forma predeterminada, este rol se asigna a los grupos de roles administración de
cumplimiento y administración de la organización en la página permisos del centro de
administración de Exchange. Los administradores globales de Office 365 son miembros
del grupo de funciones de administración de la organización en Exchange Online.
a) Desde el Centro de Seguridad de Office 365 menú [Auditar], pulsar el botón
“Grabar la actividad de usuarios y administradores”.
Centro Crip tológico Nacional 46

![Imagen 1 - Página 46](CCN-STIC 885A_assets\pagina46_img1.png)

![Imagen 2 - Página 46](CCN-STIC 885A_assets\pagina46_img2.png)

![Imagen 3 - Página 46](CCN-STIC 885A_assets\pagina46_img3.png)

![Imagen 4 - Página 46](CCN-STIC 885A_assets\pagina46_img4.png)

![Imagen 5 - Página 46](CCN-STIC 885A_assets\pagina46_img5.png)

![Imagen 6 - Página 46](CCN-STIC 885A_assets\pagina46_img6.png)

![Imagen 7 - Página 46](CCN-STIC 885A_assets\pagina46_img7.png)

---

<!-- Página 47 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
b) Nos saldrá un pop-up solicitando confirmación, Pulsar “Sí”.
Nota: Pueden pasar varias horas desde que se activa el registro de auditoría
hasta que estén accesibles los datos en la búsqueda.
Powershell de Office 365
a) Conexión a Exchange Online mediante PowerShell.
b) Ejecutar el siguiente comando de PowerShell para activar/desactivar la
búsqueda de registros de auditoría en Office 365:
1. Activar auditoría:
Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true
2. Desactivar auditoría:
Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $false
Consultar registro de auditoría
Permite buscar en el registro de auditoría lo que hacen los usuarios y
administradores de la organización: actividades relacionadas con el correo electrónico,
grupos, documentos, permisos, servicios de directorio y mucho más.
Nota: Para realizar búsquedas en el registro de auditoría deben pasar al menos 24 h.
En el desplegable de Actividades se muestran todas las búsquedas posibles
relacionadas con el registro de auditoría y clasificadas por temas. Ejemplo de consulta
relacionada con la descarga de ficheros:
Centro Crip tológico Nacional 47

| Nota: Pueden pasar varias horas desde que se activa el registro de auditoría |
| --- |
| hasta que estén accesibles los datos en la búsqueda. |


|  | Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true |  |
| --- | --- | --- |


|  | Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $false |  |
| --- | --- | --- |


![Imagen 1 - Página 47](CCN-STIC 885A_assets\pagina47_img1.png)

![Imagen 2 - Página 47](CCN-STIC 885A_assets\pagina47_img2.png)

![Imagen 3 - Página 47](CCN-STIC 885A_assets\pagina47_img3.png)

![Imagen 4 - Página 47](CCN-STIC 885A_assets\pagina47_img4.png)

![Imagen 5 - Página 47](CCN-STIC 885A_assets\pagina47_img5.png)

![Imagen 6 - Página 47](CCN-STIC 885A_assets\pagina47_img6.png)

---

<!-- Página 48 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Protección de los registros de actividad
A través del uso de roles de usuarios se puede securizar quién puede consultar la
información del registro de actividad. Los roles definidos para tal fin son:
- Administradores globales.
- Administradores de Exchange.
- Administradores de SharePoint
- Administradores de Teams.
- Lector de informes.
API de Actividad de administración de Office 365
A parte del Centro de Seguridad Office 365, existe una API de Actividad de
administración de Office 365 para recuperar información sobre acciones y eventos de
usuario, administrador, sistema y directivas de los registros de actividad de Office 365
y Entra ID.
La API de Actividad de administración de Office 365 es un servicio web REST que se
puede usar para desarrollar soluciones mediante cualquier lenguaje y entorno de
hospedaje que admita HTTPS y certificados X.509. La API se basa en Microsoft Entra ID
y el protocolo OAuth2 para la autenticación y autorización. Para acceder a la API desde
la aplicación, primero debe registrarla en Microsoft Entra ID y configurarla con los
permisos adecuados. Esto permitirá que la aplicación solicite los tokens de acceso
OAuth2 que necesita para llamar a la API. Para obtener más información, vea Get
started with Office 365 Management APIs (Introducción a las API de administración de
Office 365).
Para obtener información sobre los datos que devuelve la API de Actividad de
administración de Office 365, vea: Esquema de la API de Actividad de administración
de Office 365 | Microsoft Learn
Informes de actividades en el centro de administración de Microsoft 365
Otra manera de obtener información de cómo los usuarios de la organización usan
los servicios de Office 365 es a través del Centro de administración de Microsoft 365,
menú [Informes/Uso]. Por ejemplo, se puede identificar quién está usando mucho un
servicio, quién alcanza las cuotas o quién es posible que no necesite una licencia de
Office 365 en absoluto.
Centro Crip tológico Nacional 48

![Imagen 1 - Página 48](CCN-STIC 885A_assets\pagina48_img1.png)

![Imagen 2 - Página 48](CCN-STIC 885A_assets\pagina48_img2.png)

![Imagen 3 - Página 48](CCN-STIC 885A_assets\pagina48_img3.png)

![Imagen 4 - Página 48](CCN-STIC 885A_assets\pagina48_img4.png)

![Imagen 5 - Página 48](CCN-STIC 885A_assets\pagina48_img5.png)

![Imagen 6 - Página 48](CCN-STIC 885A_assets\pagina48_img6.png)

---

<!-- Página 49 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Los informes pueden obtenerse para los últimos 7, 30, 90 o 180 días. Pulsando
sobre cada widget del informe se profundiza en la información suministrada, bajando a
un nivel de más detalle.
Nota: los datos no estarán disponibles para todos los períodos de informes al instante
(usualmente a las 48 horas).
3.1.3 MONITORIZACIÓN DEL SISTEMA
Es posible definir alertas en Office 365 a través del Centro de Seguridad de Office
365.
Se pueden usar las alertas de actividad para enviar notificaciones de correo
electrónico a responsables del sistema cuando los usuarios realizan actividades
específicas en Office 365. Las alertas de actividad son similares a la búsqueda de
eventos en el registro de auditoría de Office 365, excepto que se enviará un mensaje
de correo electrónico cuando se produzca un evento en el que se haya creado una
alerta.
Cómo funcionan las directivas de alerta
A continuación, se presenta una introducción rápida sobre cómo funcionan las
directivas de alertas y las alertas que se desencadenan cuando la actividad de usuario
o de administrador cumpla las condiciones de una directiva de alerta.
Centro Crip tológico Nacional 49

| Nota: los datos no estarán disponibles para todos los períodos de informes al instante |
| --- |
| (usualmente a las 48 horas). |


![Imagen 1 - Página 49](CCN-STIC 885A_assets\pagina49_img1.png)

![Imagen 2 - Página 49](CCN-STIC 885A_assets\pagina49_img2.png)

![Imagen 3 - Página 49](CCN-STIC 885A_assets\pagina49_img3.png)

![Imagen 4 - Página 49](CCN-STIC 885A_assets\pagina49_img4.png)

![Imagen 5 - Página 49](CCN-STIC 885A_assets\pagina49_img5.png)

![Imagen 6 - Página 49](CCN-STIC 885A_assets\pagina49_img6.png)

---

<!-- Página 50 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
 Un administrador de la organización crea, configura y activa una directiva de
alertas mediante la página Directivas de alerta del portal de purview o del
portal de Microsoft Defender. También se puede crear directivas de alerta
mediante el cmdlet New-ProtectionAlert en PowerShell de seguridad &
Purview.
 Un usuario realiza una actividad que coincide con las condiciones de una
directiva de alerta. En el caso de ataques de malware, los mensajes de
correo electrónico infectados enviados a los usuarios de su organización
desencadenan una alerta.
 Microsoft 365 genera una alerta que se muestra en la página Alertas en el
Portal de Purview o en el portal de Defender. Además, si las notificaciones
por correo electrónico están habilitadas para la directiva de alertas,
Microsoft envía una notificación a una lista de destinatarios. Las alertas que
un administrador u otros usuarios pueden ver que en la página Alertas están
determinadas por los roles asignados al usuario.
 Un administrador administra las alertas en el Portal de Purview. La
administración de alertas consiste en asignar un estado de alerta para
ayudar a realizar un seguimiento y administrar cualquier investigación.
Ver/editar directivas de alerta de sistema
Con las directivas de alerta es posible realizar el seguimiento de las actividades de
administradores y usuarios, amenazas de malware o incidentes de pérdida de datos en
la organización. Después de elegir la actividad sobre la que se requiere el aviso, se
puede afinar la directiva agregando condiciones, decidiendo cuándo activar la alerta y
quién debería recibir las notificaciones.
Centro Crip tológico Nacional 50

![Imagen 1 - Página 50](CCN-STIC 885A_assets\pagina50_img1.png)

![Imagen 2 - Página 50](CCN-STIC 885A_assets\pagina50_img2.png)

![Imagen 3 - Página 50](CCN-STIC 885A_assets\pagina50_img3.png)

![Imagen 4 - Página 50](CCN-STIC 885A_assets\pagina50_img4.png)

![Imagen 5 - Página 50](CCN-STIC 885A_assets\pagina50_img5.png)

![Imagen 6 - Página 50](CCN-STIC 885A_assets\pagina50_img6.png)

---

<!-- Página 51 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
a) Acceder al menú [Reglas y directivas\Directivas de alerta] desde el Centro de
Seguridad de Office 365.
b) Marcar las alertas sobre las cuales se quiere realizar el seguimiento de la lista de
alertas predefinidas. Las alertas predefinidas se pueden activar o desactivar y
cambiar parte de su configuración.
Más información de las alertas predeterminadas en la documentación de
Microsoft. Directivas de alertas de Microsoft 365 | Microsoft Learn
c) Pulsar sobre una directiva concreta para acceder a sus propiedades.
Por ejemplo, la directiva “Suspicious email sending patterns detected” la cual se
activa cuando se detecta que un usuario ha enviado un correo o correos con
texto con patrones sospechosos.
Centro Crip tológico Nacional 51

![Imagen 1 - Página 51](CCN-STIC 885A_assets\pagina51_img1.png)

![Imagen 2 - Página 51](CCN-STIC 885A_assets\pagina51_img2.png)

![Imagen 3 - Página 51](CCN-STIC 885A_assets\pagina51_img3.png)

![Imagen 4 - Página 51](CCN-STIC 885A_assets\pagina51_img4.png)

![Imagen 5 - Página 51](CCN-STIC 885A_assets\pagina51_img5.png)

![Imagen 6 - Página 51](CCN-STIC 885A_assets\pagina51_img6.png)

![Imagen 7 - Página 51](CCN-STIC 885A_assets\pagina51_img7.png)

---

<!-- Página 52 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Crear directivas de alerta personalizadas
Para crear una directiva de alerta personalizada pulsar el botón “Nueva directiva
de alertas”, en el menú [Reglas y directivas\Directivas de alertas]. Como ejemplo se
va a crear una directiva para el borrado sospechoso de ficheros word en una
ubicación concreta (sitio de Sharepoint CCN-SPO-SITIO1).
a) Asignar un nombre.
Centro Crip tológico Nacional 52

![Imagen 1 - Página 52](CCN-STIC 885A_assets\pagina52_img1.png)

![Imagen 2 - Página 52](CCN-STIC 885A_assets\pagina52_img2.png)

![Imagen 3 - Página 52](CCN-STIC 885A_assets\pagina52_img3.png)

![Imagen 4 - Página 52](CCN-STIC 885A_assets\pagina52_img4.png)

![Imagen 5 - Página 52](CCN-STIC 885A_assets\pagina52_img5.png)

![Imagen 6 - Página 52](CCN-STIC 885A_assets\pagina52_img6.png)

![Imagen 7 - Página 52](CCN-STIC 885A_assets\pagina52_img7.png)

---

<!-- Página 53 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
b) Crear configuración de alerta.
¿Sobre qué se quiere enviar alertas? Seleccionar una actividad:
Agregar condiciones:
Para la mayoría de las actividades, se puede definir condiciones adicionales
que deben cumplirse para desencadenar una alerta. Las condiciones comunes
incluyen referencias a direcciones IP (por lo que se desencadena una alerta
cuando el usuario realiza la actividad en un equipo con una dirección IP
específica o dentro de un intervalo de direcciones IP), usuarios concretos,
nombres de archivos, urls de sitios o extensiones de archivos.
Centro Crip tológico Nacional 53

![Imagen 1 - Página 53](CCN-STIC 885A_assets\pagina53_img1.png)

![Imagen 2 - Página 53](CCN-STIC 885A_assets\pagina53_img2.png)

![Imagen 3 - Página 53](CCN-STIC 885A_assets\pagina53_img3.png)

![Imagen 4 - Página 53](CCN-STIC 885A_assets\pagina53_img4.png)

![Imagen 5 - Página 53](CCN-STIC 885A_assets\pagina53_img5.png)

![Imagen 6 - Página 53](CCN-STIC 885A_assets\pagina53_img6.png)

![Imagen 7 - Página 53](CCN-STIC 885A_assets\pagina53_img7.png)

---

<!-- Página 54 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
En el ejemplo:
¿Cómo quiere que se active la alerta?
Puede configurar una configuración que defina la frecuencia con la que se
puede producir una actividad antes de que se desencadene una alerta.
Puede configurar una directiva para generar una alerta cada vez que una
actividad coincide con las condiciones de la directiva, cuando se supera un
umbral determinado.
Puede configurar la directiva para generar una alerta cuando la aparición de la
actividad que la alerta está realizando se vuelve inusual para su organización. Si
selecciona la configuración en función de una actividad inusual, Microsoft
establece un valor de línea base que define la frecuencia normal de la actividad
seleccionada. El establecimiento de esta línea base tarda hasta siete días,
durante los cuales no se generarán alertas. Una vez establecida la línea base, se
desencadena una alerta cuando la frecuencia de la actividad a la que realiza el
seguimiento la directiva de alerta supera en gran medida el valor de línea base.
Centro Crip tológico Nacional 54

![Imagen 1 - Página 54](CCN-STIC 885A_assets\pagina54_img1.png)

![Imagen 2 - Página 54](CCN-STIC 885A_assets\pagina54_img2.png)

![Imagen 3 - Página 54](CCN-STIC 885A_assets\pagina54_img3.png)

![Imagen 4 - Página 54](CCN-STIC 885A_assets\pagina54_img4.png)

![Imagen 5 - Página 54](CCN-STIC 885A_assets\pagina54_img5.png)

![Imagen 6 - Página 54](CCN-STIC 885A_assets\pagina54_img6.png)

![Imagen 7 - Página 54](CCN-STIC 885A_assets\pagina54_img7.png)

---

<!-- Página 55 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
c) Configurar los destinatarios
Consultar directivas de alertas
Desde el menú [Alertas\Directivas de alertas] pueden consultarse las directivas
personalizadas, así como todas las directivas predeterminadas en el Centro de
Seguridad de Office 365.
3.2 MEDIDAS DE PROTECCIÓN
3.2.1 PROTECCIÓN DE LAS COMUNICACIONES
En cuanto a la protección de las comunicaciones, cabe reseñar que se usan los
protocolos criptográficos para conexiones TLS, integrados en Office 365 de manera
automática. Esto es así cuando:
 Los usuarios trabajan con archivos guardados en OneDrive For Business o
SharePoint Online.
 Los usuarios comparten archivos en reuniones en línea y conversaciones de
mensajería instantánea.
Centro Crip tológico Nacional 55

![Imagen 1 - Página 55](CCN-STIC 885A_assets\pagina55_img1.png)

![Imagen 2 - Página 55](CCN-STIC 885A_assets\pagina55_img2.png)

![Imagen 3 - Página 55](CCN-STIC 885A_assets\pagina55_img3.png)

![Imagen 4 - Página 55](CCN-STIC 885A_assets\pagina55_img4.png)

![Imagen 5 - Página 55](CCN-STIC 885A_assets\pagina55_img5.png)

![Imagen 6 - Página 55](CCN-STIC 885A_assets\pagina55_img6.png)

![Imagen 7 - Página 55](CCN-STIC 885A_assets\pagina55_img7.png)

---

<!-- Página 56 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
 Los usuarios se comunican por correo electrónico.
Todas las comunicaciones de Office 365 están cifradas.
3.2.2 PROTECCIÓN DE LA INFORMACIÓN
3.2.2.1 CALIFICACIÓN DE LA INFORMACIÓN
En este apartado se tratarán principalmente los mecanismos que ofrece Office
365 para calificar la información y aplicar políticas determinadas. En concreto:
Tipos de información confidencial.
 Ciclo de vida del dato (Conocido anteriormente como Políticas de
retención): La administración del ciclo de vida de datos de Microsoft
Purview (anteriormente gobernanza de información de Microsoft) le
proporciona herramientas y capacidades para conservar el contenido que
necesita conservar y eliminar el que no.
 DLPs (Data Loss Prevention). Con estas políticas de Prevención de
Pérdida de Datos se puede identificar, supervisar y proteger información
sensible en todo Office 365.
 Sensitivity labels. Permiten clasificar, cifrar, agregar marcadores y
controlar accesos en documentos y correos electrónicos en Office 365.
POLÍTICAS DE RETENCIÓN
Definición de etiquetas de retención
Estas etiquetas se definen en el Portal de Purview de Office 365, en el menú
[Administración del ciclo de vida de datos\Microsoft 365\Etiquetas], una vez
dentro y se utilizan para aplicar políticas de retención a correos de Exchange y
documentos de SharePoint y OneDrive. Se puede definir el tiempo que el correo
o el documento debe retenerse, o el tiempo después del cual debe borrarse.
Además, las retenciones se pueden aplicar a partir de la fecha de creación, de
última modificación, o a partir de la fecha de aplicación de la etiqueta.
También se puede declarar un documento como Registro para impedir que
sea editado o borrado.
Las etiquetas pueden aplicarse automáticamente según las condiciones
establecidas en el Portal de Purview de Office 365, y los usuarios también
pueden aplicar estas etiquetas directamente en las aplicaciones Office, así como
en SharePoint o OneDrive.
Centro Crip tológico Nacional 56

![Imagen 1 - Página 56](CCN-STIC 885A_assets\pagina56_img1.png)

![Imagen 2 - Página 56](CCN-STIC 885A_assets\pagina56_img2.png)

![Imagen 3 - Página 56](CCN-STIC 885A_assets\pagina56_img3.png)

![Imagen 4 - Página 56](CCN-STIC 885A_assets\pagina56_img4.png)

![Imagen 5 - Página 56](CCN-STIC 885A_assets\pagina56_img5.png)

![Imagen 6 - Página 56](CCN-STIC 885A_assets\pagina56_img6.png)

---

<!-- Página 57 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Las etiquetas de retención tienen que ver con el cumplimiento, y se aplican a
correos o documentos en una ubicación determinada.
Ejemplo: en el departamento comercial se precisa aplicar políticas de
retención sobre documentos diversos:
 Presupuestos: retención de 5 años después de la fecha límite del
presupuesto.
 Contratos: retención de 10 años después de la fecha de finalización del
contrato.
 Hojas de producto: declarado como registro (no borrar).
Consulta y modificación de etiquetas de retención
a) Acceder a la pestaña de [Etiquetas].
b) Seleccionar una etiqueta.
c) Editar etiqueta. En el panel derecho pulsar el botón “Editar etiqueta”. Definimos
la configuración de etiqueta.
Centro Crip tológico Nacional 57

![Imagen 1 - Página 57](CCN-STIC 885A_assets\pagina57_img1.png)

![Imagen 2 - Página 57](CCN-STIC 885A_assets\pagina57_img2.png)

![Imagen 3 - Página 57](CCN-STIC 885A_assets\pagina57_img3.png)

![Imagen 4 - Página 57](CCN-STIC 885A_assets\pagina57_img4.png)

![Imagen 5 - Página 57](CCN-STIC 885A_assets\pagina57_img5.png)

![Imagen 6 - Página 57](CCN-STIC 885A_assets\pagina57_img6.png)

![Imagen 7 - Página 57](CCN-STIC 885A_assets\pagina57_img7.png)

---

<!-- Página 58 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
d) Configuramos el periodo de retención
e) Configuramos la acción a ejecutar después del periodo
Una vez termine el periodo de retención establecido en la etiqueta, se debe
elegir qué hacer con el elemento etiquetado:
 Eliminar elementos automáticamente. Se quitarán permanentemente
los elementos etiquetados desde cualquier lugar en el que se almacenen.
 Iniciar una revisión para su eliminación. Permite que revisores para
eliminación que se asignen decidan si los elementos se pueden eliminar o
si deben realizar otras acciones.
 Cambiar la etiqueta. Se puede ampliar el periodo de retención aplicando
otra etiqueta.
 Seleccionar un flujo de Power Automate. Se puede ejecutar un flujo de
Power Automate para satisfacer una necesidad empresarial específica.
Centro Crip tológico Nacional 58

![Imagen 1 - Página 58](CCN-STIC 885A_assets\pagina58_img1.png)

![Imagen 2 - Página 58](CCN-STIC 885A_assets\pagina58_img2.png)

![Imagen 3 - Página 58](CCN-STIC 885A_assets\pagina58_img3.png)

![Imagen 4 - Página 58](CCN-STIC 885A_assets\pagina58_img4.png)

![Imagen 5 - Página 58](CCN-STIC 885A_assets\pagina58_img5.png)

![Imagen 6 - Página 58](CCN-STIC 885A_assets\pagina58_img6.png)

![Imagen 7 - Página 58](CCN-STIC 885A_assets\pagina58_img7.png)

---

<!-- Página 59 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
 Desactivar la configuración de retención. Con esta opción los elementos
etiquetados no se conservarán ni eliminarán cuando se desactive su
configuración de retención.
Creación de una etiqueta de retención
a) Acceder al menú [Etiquetas] y pulsamos el botón “Crear una etiqueta”.
b) Asignar nombre a la etiqueta.
c) Definimos la configuración de la etiqueta.
Centro Crip tológico Nacional 59

![Imagen 1 - Página 59](CCN-STIC 885A_assets\pagina59_img1.png)

![Imagen 2 - Página 59](CCN-STIC 885A_assets\pagina59_img2.png)

![Imagen 3 - Página 59](CCN-STIC 885A_assets\pagina59_img3.png)

![Imagen 4 - Página 59](CCN-STIC 885A_assets\pagina59_img4.png)

![Imagen 5 - Página 59](CCN-STIC 885A_assets\pagina59_img5.png)

![Imagen 6 - Página 59](CCN-STIC 885A_assets\pagina59_img6.png)

![Imagen 7 - Página 59](CCN-STIC 885A_assets\pagina59_img7.png)

![Imagen 8 - Página 59](CCN-STIC 885A_assets\pagina59_img8.png)

---

<!-- Página 60 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
d) Configurar el periodo de retención de la etiqueta.
e) Configuramos la acción a suceder después del periodo de retención
f) Revisar y Crear.
Centro Crip tológico Nacional 60

![Imagen 1 - Página 60](CCN-STIC 885A_assets\pagina60_img1.png)

![Imagen 2 - Página 60](CCN-STIC 885A_assets\pagina60_img2.png)

![Imagen 3 - Página 60](CCN-STIC 885A_assets\pagina60_img3.png)

![Imagen 4 - Página 60](CCN-STIC 885A_assets\pagina60_img4.png)

![Imagen 5 - Página 60](CCN-STIC 885A_assets\pagina60_img5.png)

![Imagen 6 - Página 60](CCN-STIC 885A_assets\pagina60_img6.png)

![Imagen 7 - Página 60](CCN-STIC 885A_assets\pagina60_img7.png)

---

<!-- Página 61 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Directivas de etiquetas (Publicar etiquetas)
Una vez creada la etiqueta, el siguiente paso para poder utilizarla es “Publicar
etiqueta”.
a) se puede hacer desde la misma pestaña de Etiquetas, haciendo click en
“Publicar etiqueta” o desde la pestaña “Directiva de etiquetas”.
Centro Crip tológico Nacional 61

![Imagen 1 - Página 61](CCN-STIC 885A_assets\pagina61_img1.png)

![Imagen 2 - Página 61](CCN-STIC 885A_assets\pagina61_img2.png)

![Imagen 3 - Página 61](CCN-STIC 885A_assets\pagina61_img3.png)

![Imagen 4 - Página 61](CCN-STIC 885A_assets\pagina61_img4.png)

![Imagen 5 - Página 61](CCN-STIC 885A_assets\pagina61_img5.png)

![Imagen 6 - Página 61](CCN-STIC 885A_assets\pagina61_img6.png)

![Imagen 7 - Página 61](CCN-STIC 885A_assets\pagina61_img7.png)

![Imagen 8 - Página 61](CCN-STIC 885A_assets\pagina61_img8.png)

---

<!-- Página 62 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
b) Elegir las etiquetas.
c) Elegir ámbito de directiva, es decir, si se aplicara a todo el Directorio o a una
unidad de Administración en concreto.
d) Elegir tipo de directiva de retención
Centro Crip tológico Nacional 62

![Imagen 1 - Página 62](CCN-STIC 885A_assets\pagina62_img1.png)

![Imagen 2 - Página 62](CCN-STIC 885A_assets\pagina62_img2.png)

![Imagen 3 - Página 62](CCN-STIC 885A_assets\pagina62_img3.png)

![Imagen 4 - Página 62](CCN-STIC 885A_assets\pagina62_img4.png)

![Imagen 5 - Página 62](CCN-STIC 885A_assets\pagina62_img5.png)

![Imagen 6 - Página 62](CCN-STIC 885A_assets\pagina62_img6.png)

![Imagen 7 - Página 62](CCN-STIC 885A_assets\pagina62_img7.png)

![Imagen 8 - Página 62](CCN-STIC 885A_assets\pagina62_img8.png)

![Imagen 9 - Página 62](CCN-STIC 885A_assets\pagina62_img9.png)

---

<!-- Página 63 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
e) Elegir ubicaciones.
Hay que tener en cuenta que, en Exchange, las etiquetas de retención de
aplicación automática (tanto para consultas como para tipos de información
sensible) solo se aplican en los nuevos mensajes enviados (datos en tránsito),
no en todos los elementos que ya están presentes en el buzón (datos en reposo).
Además, las etiquetas de retención de aplicación automática para tipos de
información sensible se aplican a todos los buzones (no se pueden seleccionar
buzones específicos).
f) Dar un nombre a la directiva.
Centro Crip tológico Nacional 63

![Imagen 1 - Página 63](CCN-STIC 885A_assets\pagina63_img1.png)

![Imagen 2 - Página 63](CCN-STIC 885A_assets\pagina63_img2.png)

![Imagen 3 - Página 63](CCN-STIC 885A_assets\pagina63_img3.png)

![Imagen 4 - Página 63](CCN-STIC 885A_assets\pagina63_img4.png)

![Imagen 5 - Página 63](CCN-STIC 885A_assets\pagina63_img5.png)

![Imagen 6 - Página 63](CCN-STIC 885A_assets\pagina63_img6.png)

![Imagen 7 - Página 63](CCN-STIC 885A_assets\pagina63_img7.png)

---

<!-- Página 64 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
g) Revisar y Publicar.
Nota: Las etiquetas tardarán hasta 1 día en mostrarse a los usuarios. Las
etiquetas aparecerán en Outlook y Outlook Web App solo para los buzones que
tengan al menos 10 MB de datos.
Puede consultarse la nueva directiva en la pestaña correspondiente:
Uso de las directivas de retención
Más información en las guías específicas de cada servicio: Sharepoint Online
[CCN-STIC-885B - Guía de configuración segura para Sharepoint Online], Exchange
Online [CCN-STIC-885C - Guía de configuración segura para Exchange Online].
DLPS (DATA LOSS PREVENTION)
Con estas políticas de Prevención de Pérdida de Datos se puede identificar,
supervisar y proteger información sensible en todo Office 365. Por ejemplo, puede
configurar directivas para asegurarse de que la información en correos electrónicos
y documentos no se comparta con los contactos inadecuados.
Ejemplos de datos susceptibles de aplicación:
 Datos financieros
 Información de identificación personal
o Tarjetas de crédito
Centro Crip tológico Nacional 64

| Nota: Las etiquetas tardarán hasta 1 día en mostrarse a los usuarios. Las |
| --- |
| etiquetas aparecerán en Outlook y Outlook Web App solo para los buzones que |
| tengan al menos 10 MB de datos. |


![Imagen 1 - Página 64](CCN-STIC 885A_assets\pagina64_img1.png)

![Imagen 2 - Página 64](CCN-STIC 885A_assets\pagina64_img2.png)

![Imagen 3 - Página 64](CCN-STIC 885A_assets\pagina64_img3.png)

![Imagen 4 - Página 64](CCN-STIC 885A_assets\pagina64_img4.png)

![Imagen 5 - Página 64](CCN-STIC 885A_assets\pagina64_img5.png)

![Imagen 6 - Página 64](CCN-STIC 885A_assets\pagina64_img6.png)

![Imagen 7 - Página 64](CCN-STIC 885A_assets\pagina64_img7.jpeg)

---

<!-- Página 65 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
o Números de Seguridad Social
o Registros Médicos, etc.
Elementos de una directa DLP
 Dónde proteger el contenido: ubicaciones como Exchange Online, SharePoint
Online y sitios de OneDrive para la Empresa, así como mensajes de chat y
canales de Microsoft Teams.
 Cuándo y cómo proteger el contenido aplicando reglas compuestas de:
o Condiciones que el contenido debe cumplir antes de que se aplique la regla.
Por ejemplo, una regla se puede configurar para que busque solo contenido
que incluya números de seguridad social y que se haya compartido con
personas de fuera de su organización.
o Acciones que quiere que la regla realice automáticamente cuando se
encuentra contenido que coincide con las condiciones. Por ejemplo, una
regla se puede configurar para bloquear el acceso a un documento y enviar
una notificación por correo electrónico al usuario y al responsable de
cumplimiento.
Por ejemplo, se podría tener una directiva DLP que ayude al tratamiento de
datos relativos a la salud.
¿el qué? Proteger los datos de salud
¿dónde? En todos los sitios de SharePoint Online y OneDrive para la Empresa
¿condiciones? Al buscar cualquier documento que contenga información sensible y
que se comparte con personas de fuera de la organización
¿acciones? Bloquear el acceso al documento y enviar una notificación
Estos requisitos se almacenan como reglas individuales y se agrupan de forma
conjunta como directiva DLP para simplificar la administración y la creación de
informes.
Casos de uso de una DLP
Con una directiva DLP se puede:
 Identificar información sensible en varias ubicaciones, como Exchange Online,
SharePoint Online, OneDrive para la empresa y Microsoft Teams. Por ejemplo,
identificar cualquier documento que contenga un número de tarjeta de crédito,
o bien supervisar solo los sitios de personas específicas.
 Evitar el uso compartido accidental de información sensible. Por ejemplo,
identificar cualquier documento o correo electrónico que contenga un registro
de mantenimiento compartido con personas de fuera de la organización y, a
continuación, bloquear automáticamente el acceso a ese documento o impedir
que se envíe el correo electrónico.
Centro Crip tológico Nacional 65

| ¿el qué? | Proteger los datos de salud |  |  |
| --- | --- | --- | --- |
| ¿dónde? | En todos los sitios de SharePoint Online y OneDrive para la Empresa |  |  |
| ¿condiciones? |  | Al buscar cualquier documento que contenga información sensible y |  |
|  |  | que se comparte con personas de fuera de la organización |  |
| ¿acciones? | Bloquear el acceso al documento y enviar una notificación |  |  |


![Imagen 1 - Página 65](CCN-STIC 885A_assets\pagina65_img1.png)

![Imagen 2 - Página 65](CCN-STIC 885A_assets\pagina65_img2.png)

![Imagen 3 - Página 65](CCN-STIC 885A_assets\pagina65_img3.png)

![Imagen 4 - Página 65](CCN-STIC 885A_assets\pagina65_img4.png)

![Imagen 5 - Página 65](CCN-STIC 885A_assets\pagina65_img5.png)

---

<!-- Página 66 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
 Supervisar y proteger información sensible en las versiones de escritorio de
Excel, PowerPoint y Word. Al igual que en Exchange Online, SharePoint Online y
OneDrive para la empresa, estos programas de escritorio de Office incluyen las
mismas capacidades para identificar información sensible y aplicar directivas de
DLP. DLP proporciona supervisión continua cuando las personas comparten
contenido en estos programas de Office.
 Ayudar a los usuarios a aprender a cumplir sin interrumpir el flujo de trabajo.
Puede educar a sus usuarios acerca de las directivas DLP y ayudar a que sigan
manteniendo el cumplimiento normativo sin bloquear su trabajo. Por ejemplo,
si un usuario intenta compartir un documento que contiene información
sensible, una directiva DLP puede enviarle una notificación por correo
electrónico y mostrarle una sugerencia de directiva en el contexto de la
biblioteca de documentos que le permite invalidar la directiva si tiene una
justificación comercial. Las mismas sugerencias de directiva también aparecen
en Outlook en la web, Outlook, Excel, PowerPoint y Word.
 Ver informes de DLP que muestran contenido que coincide con las directivas
DLP de su organización. Para evaluar si la organización está cumpliendo con
una directiva DLP, puede ver cuántas coincidencias tienen la directiva y la regla
a lo largo del tiempo. Si una directiva DLP permite a los usuarios invalidar una
sugerencia de directiva e informar de un falso positivo, también puede ver qué
han informado los usuarios.
Crear una nueva política DLP
a) Desde el Centro de Seguridad de Office 365 en el menú [Prevención de pérdida
de datos\Directiva], pulsar el botón “Crear una directiva”.
b) Elegir reglamento del sector o crear una política a medida.
Seleccionar la opción Personalizado para crear una directiva personalizada:
Centro Crip tológico Nacional 66

![Imagen 1 - Página 66](CCN-STIC 885A_assets\pagina66_img1.png)

![Imagen 2 - Página 66](CCN-STIC 885A_assets\pagina66_img2.png)

![Imagen 3 - Página 66](CCN-STIC 885A_assets\pagina66_img3.png)

![Imagen 4 - Página 66](CCN-STIC 885A_assets\pagina66_img4.png)

![Imagen 5 - Página 66](CCN-STIC 885A_assets\pagina66_img5.png)

![Imagen 6 - Página 66](CCN-STIC 885A_assets\pagina66_img6.png)

![Imagen 7 - Página 66](CCN-STIC 885A_assets\pagina66_img7.png)

---

<!-- Página 67 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
c) Asignar nombre y descripción.
d) Elegir ámbito de directiva, es decir, si se aplicara a todo el Directorio o a una
unidad de Administración en concreto.
Centro Crip tológico Nacional 67

![Imagen 1 - Página 67](CCN-STIC 885A_assets\pagina67_img1.png)

![Imagen 2 - Página 67](CCN-STIC 885A_assets\pagina67_img2.png)

![Imagen 3 - Página 67](CCN-STIC 885A_assets\pagina67_img3.png)

![Imagen 4 - Página 67](CCN-STIC 885A_assets\pagina67_img4.png)

![Imagen 5 - Página 67](CCN-STIC 885A_assets\pagina67_img5.png)

![Imagen 6 - Página 67](CCN-STIC 885A_assets\pagina67_img6.png)

![Imagen 7 - Página 67](CCN-STIC 885A_assets\pagina67_img7.png)

![Imagen 8 - Página 67](CCN-STIC 885A_assets\pagina67_img8.png)

---

<!-- Página 68 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
e) Elegir ubicaciones.
Una directiva DLP puede buscar y proteger información sensible en todo
Office 365, independientemente de si esa información se encuentra en
Exchange Online, SharePoint Online, OneDrive para la Empresa o Microsoft
Teams. Puede elegir proteger el contenido en el correo electrónico de Exchange,
y los mensajes de canales y chats de Microsoft Teams, y todas las bibliotecas de
SharePoint o OneDrive, o bien seleccionar ubicaciones específicas para una
directiva.
Si se elige incluir o excluir sitios de SharePoint o cuentas de OneDrive
específicos, una directiva DLP no puede contener más de 100 inclusiones y
exclusiones. Aunque este límite exista, se puede superar este límite aplicando
una directiva para toda la organización o una directiva que se aplique
ubicaciones completas.
f) Definir reglas.
Centro Crip tológico Nacional 68

![Imagen 1 - Página 68](CCN-STIC 885A_assets\pagina68_img1.png)

![Imagen 2 - Página 68](CCN-STIC 885A_assets\pagina68_img2.png)

![Imagen 3 - Página 68](CCN-STIC 885A_assets\pagina68_img3.png)

![Imagen 4 - Página 68](CCN-STIC 885A_assets\pagina68_img4.png)

![Imagen 5 - Página 68](CCN-STIC 885A_assets\pagina68_img5.png)

![Imagen 6 - Página 68](CCN-STIC 885A_assets\pagina68_img6.png)

![Imagen 7 - Página 68](CCN-STIC 885A_assets\pagina68_img7.png)

---

<!-- Página 69 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Las reglas son las que aplican los requisitos empresariales en el contenido de
su organización. Una directiva contiene una o más reglas, y cada regla consta de
las condiciones y acciones. Para cada regla, cuando se cumplen las condiciones,
las acciones se realizan automáticamente. Las reglas se ejecutan
secuencialmente, comenzando por la regla de mayor prioridad de cada directiva.
Una regla también proporciona opciones para notificar a los usuarios (con
sugerencias de directiva y notificaciones por correo electrónico) y los
administradores (con informes de incidentes por correo electrónico) de que el
contenido ha coincidido con la regla.
Centro Crip tológico Nacional 69

![Imagen 1 - Página 69](CCN-STIC 885A_assets\pagina69_img1.png)

![Imagen 2 - Página 69](CCN-STIC 885A_assets\pagina69_img2.png)

![Imagen 3 - Página 69](CCN-STIC 885A_assets\pagina69_img3.png)

![Imagen 4 - Página 69](CCN-STIC 885A_assets\pagina69_img4.png)

![Imagen 5 - Página 69](CCN-STIC 885A_assets\pagina69_img5.png)

![Imagen 6 - Página 69](CCN-STIC 885A_assets\pagina69_img6.png)

![Imagen 7 - Página 69](CCN-STIC 885A_assets\pagina69_img7.png)

---

<!-- Página 70 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
f1. Condiciones
Las condiciones son importantes porque determinan los tipos de
información que está buscando y cuándo se debe realizar una acción.
Las condiciones se centran en el contenido, como el tipo de información
sensible que está buscando, y también en el contexto, como con quién se
comparte el documento.
Puede usar condiciones para asignar acciones diferentes a distintos
niveles de riesgo. Por ejemplo, el contenido sensible compartido
internamente podría ser de menor riesgo y necesitar menos acciones que el
contenido sensible compartido con personas de fuera de la organización.
Nota: Dependiendo de las localizaciones seleccionadas, en el apartado
“Condiciones”, veremos más o menos opciones.
Centro Crip tológico Nacional 70

| Nota: Dependiendo de las localizaciones seleccionadas, en el apartado |
| --- |
| “Condiciones”, veremos más o menos opciones. |


![Imagen 1 - Página 70](CCN-STIC 885A_assets\pagina70_img1.png)

![Imagen 2 - Página 70](CCN-STIC 885A_assets\pagina70_img2.png)

![Imagen 3 - Página 70](CCN-STIC 885A_assets\pagina70_img3.png)

![Imagen 4 - Página 70](CCN-STIC 885A_assets\pagina70_img4.png)

![Imagen 5 - Página 70](CCN-STIC 885A_assets\pagina70_img5.png)

![Imagen 6 - Página 70](CCN-STIC 885A_assets\pagina70_img6.png)

---

<!-- Página 71 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Una directiva DLP puede ayudar a proteger información sensible, lo que se
define como un tipo de información sensible. Office 365 incluye definiciones
para muchos tipos comunes de información sensible en muchas regiones
diferentes que están listas para su uso, como números de tarjeta de crédito,
números de cuentas bancarias, números de identificación nacionales y
números de pasaporte.
f2. Acciones
Cuando el contenido coincide con una condición en una regla, se pueden
aplicar acciones para proteger automáticamente el contenido.
Nota: Dependiendo de las localizaciones seleccionadas, en el apartado
“Acciones”, veremos más o menos opciones.
 Bloquear el uso compartido para los usuarios y restringir el acceso al
contenido compartido.
De forma predeterminada, los usuarios no podrán enviar a otros
usuarios mensajes de correo electrónico, chats de Teams ni mensajes del
canal que incluyan el tipo de contenido que está protegiendo. Pero se
puede elegir quién tiene acceso a los archivos compartidos de
Centro Crip tológico Nacional 71

| Nota: Dependiendo de las localizaciones seleccionadas, en el apartado |
| --- |
| “Acciones”, veremos más o menos opciones. |


![Imagen 1 - Página 71](CCN-STIC 885A_assets\pagina71_img1.png)

![Imagen 2 - Página 71](CCN-STIC 885A_assets\pagina71_img2.png)

![Imagen 3 - Página 71](CCN-STIC 885A_assets\pagina71_img3.png)

![Imagen 4 - Página 71](CCN-STIC 885A_assets\pagina71_img4.png)

![Imagen 5 - Página 71](CCN-STIC 885A_assets\pagina71_img5.png)

![Imagen 6 - Página 71](CCN-STIC 885A_assets\pagina71_img6.png)

![Imagen 7 - Página 71](CCN-STIC 885A_assets\pagina71_img7.png)

![Imagen 8 - Página 71](CCN-STIC 885A_assets\pagina71_img8.png)

---

<!-- Página 72 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
SharePoint y OneDrive. También decidir si se quiere permitir que los
usuarios puedan ignorar las restricciones de la directiva.
Bloquear estos usuarios para que no tengan acceso al contenido de
SharePoint, OneDrive y Teams:
o Todos. Solo el propietario del contenido, el último usuario que lo
modificó y el administrador del sitio seguirán teniendo acceso
o Solo los usuarios fuera de la organización. Los usuarios de la
organización seguirán teniendo acceso.
f3. Notificaciones de usuario e invalidaciones de usuario
Se puede utilizar notificaciones de usuario e invalidaciones de usuario para
concienciarles sobre las directivas DLP y ayudarles a que sigan manteniendo
el cumplimiento normativo sin bloquear su trabajo.
f4. Reemplazos de usuarios
Esta opción permite a los usuarios invalidar las restricciones de la directiva
configurada en el apartado “Acciones”.
f5. Informes de incidentes
Cuando una regla coincide, es posible enviar un informe de incidentes a su
responsable de cumplimento normativo (o a la persona que elija) con los
detalles del evento.
Centro Crip tológico Nacional 72

![Imagen 1 - Página 72](CCN-STIC 885A_assets\pagina72_img1.png)

![Imagen 2 - Página 72](CCN-STIC 885A_assets\pagina72_img2.png)

![Imagen 3 - Página 72](CCN-STIC 885A_assets\pagina72_img3.png)

![Imagen 4 - Página 72](CCN-STIC 885A_assets\pagina72_img4.png)

![Imagen 5 - Página 72](CCN-STIC 885A_assets\pagina72_img5.png)

![Imagen 6 - Página 72](CCN-STIC 885A_assets\pagina72_img6.png)

![Imagen 7 - Página 72](CCN-STIC 885A_assets\pagina72_img7.png)

---

<!-- Página 73 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
f6. Opciones adicionales
g) Modo de directiva
Centro Crip tológico Nacional 73

![Imagen 1 - Página 73](CCN-STIC 885A_assets\pagina73_img1.png)

![Imagen 2 - Página 73](CCN-STIC 885A_assets\pagina73_img2.png)

![Imagen 3 - Página 73](CCN-STIC 885A_assets\pagina73_img3.png)

![Imagen 4 - Página 73](CCN-STIC 885A_assets\pagina73_img4.png)

![Imagen 5 - Página 73](CCN-STIC 885A_assets\pagina73_img5.png)

![Imagen 6 - Página 73](CCN-STIC 885A_assets\pagina73_img6.png)

![Imagen 7 - Página 73](CCN-STIC 885A_assets\pagina73_img7.png)

![Imagen 8 - Página 73](CCN-STIC 885A_assets\pagina73_img8.png)

---

<!-- Página 74 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
h) Revisar y finalizar
PROTECCIÓN DE LA INFORMACIÓN DE MICROSOFT PURVIEW (ETIQUETAS DE SENSIBILIDAD)
Las sensitivity labels se utilizan para clasificar mensajes de correo electrónico,
documentos, sitios y mucho más. Cuando se aplique una etiqueta
(independientemente de si la aplica el usuario o se aplica automáticamente), el
contenido o el sitio se protegerá en función de la configuración que se elija. Por
ejemplo, pueden crearse etiquetas que cifren archivos, que agreguen marcadores
de contenido y que controlen el acceso de los usuarios a sitios específicos.
Nota: Las sensitivity labels son distintas de las etiquetas de retención (se usan para
conservar o eliminar el contenido en función de las directivas que se definan).
Centro Crip tológico Nacional 74

| Nota: Las sensitivity labels son distintas de las etiquetas de retención (se usan para |
| --- |
| conservar o eliminar el contenido en función de las directivas que se definan). |


![Imagen 1 - Página 74](CCN-STIC 885A_assets\pagina74_img1.png)

![Imagen 2 - Página 74](CCN-STIC 885A_assets\pagina74_img2.png)

![Imagen 3 - Página 74](CCN-STIC 885A_assets\pagina74_img3.png)

![Imagen 4 - Página 74](CCN-STIC 885A_assets\pagina74_img4.png)

![Imagen 5 - Página 74](CCN-STIC 885A_assets\pagina74_img5.png)

![Imagen 6 - Página 74](CCN-STIC 885A_assets\pagina74_img6.png)

---

<!-- Página 75 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Crear sensitivity labels
Abrir el Portal de Purview de Office 365, menú [Protección de la
información\Etiquetas].
 En primer lugar, se debe establecer una taxonomía para definir los diferentes
niveles de contenido sensible. Lo mejor es usar nombres o términos comunes
que tengan sentido para los usuarios. Por ejemplo, se puede empezar con las
etiquetas por defecto: Personal, Public, General, Confidential y Highly
Confidential.
 Después, definir qué puede hacer cada etiqueta. Configurar las opciones de
protección que se quiere asociar a cada etiqueta. Por ejemplo, el contenido con
un nivel de sensibilidad menor (una etiqueta "General") podría simplemente
tener un encabezado o pie de página aplicados, mientras que al contenido con
un nivel de sensibilidad mayor (una etiqueta "Confidential") se le podrían aplicar
marcas de agua, encriptación para asegurarse de que solo los usuarios con
privilegios pueden acceder a él.
 Y, por último, definir quién obtiene las etiquetas. Después de definir las
etiquetas de la organización, se publican en una directiva de etiqueta que
controla qué usuarios y grupos pueden ver esas etiquetas. Una misma etiqueta
puede reutilizarse: definirla una vez y después incluirla en varias directivas de
etiqueta asignadas a diferentes usuarios. Pero para que una etiqueta pueda
asignarse a un contenido, primero debe publicarse dicha etiqueta para que esté
disponible en las aplicaciones de Office y otros servicios.
Centro Crip tológico Nacional 75

![Imagen 1 - Página 75](CCN-STIC 885A_assets\pagina75_img1.png)

![Imagen 2 - Página 75](CCN-STIC 885A_assets\pagina75_img2.png)

![Imagen 3 - Página 75](CCN-STIC 885A_assets\pagina75_img3.png)

![Imagen 4 - Página 75](CCN-STIC 885A_assets\pagina75_img4.png)

![Imagen 5 - Página 75](CCN-STIC 885A_assets\pagina75_img5.png)

![Imagen 6 - Página 75](CCN-STIC 885A_assets\pagina75_img6.png)

---

<!-- Página 76 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Ejemplo de creación de sensitivity labels:
Los archivos etiquetados estarán protegidos dondequiera que se lleven, tanto
si están guardados en la nube o como si están descargados en un equipo.
a) Desde el Portal de Purview de Office 365, menú [Protección de la
información\Etiquetas]. Pulsar el botón: “Crear una etiqueta”.
b) Cumplimentar el siguiente formulario con el nombre que tendrá la etiqueta,
la prioridad, la descripción y el color.
Centro Crip tológico Nacional 76

![Imagen 1 - Página 76](CCN-STIC 885A_assets\pagina76_img1.png)

![Imagen 2 - Página 76](CCN-STIC 885A_assets\pagina76_img2.png)

![Imagen 3 - Página 76](CCN-STIC 885A_assets\pagina76_img3.png)

![Imagen 4 - Página 76](CCN-STIC 885A_assets\pagina76_img4.png)

![Imagen 5 - Página 76](CCN-STIC 885A_assets\pagina76_img5.png)

![Imagen 6 - Página 76](CCN-STIC 885A_assets\pagina76_img6.png)

![Imagen 7 - Página 76](CCN-STIC 885A_assets\pagina76_img7.png)

---

<!-- Página 77 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
c) Ámbito
Aquí se elige a que tipo de elementos aplicara esta etiqueta.
d) Elementos - Cifrado
d1. Cifrado - Para cifrar elementos elegimos la opción “Controlar acceso”.
Centro Crip tológico Nacional 77

![Imagen 1 - Página 77](CCN-STIC 885A_assets\pagina77_img1.png)

![Imagen 2 - Página 77](CCN-STIC 885A_assets\pagina77_img2.png)

![Imagen 3 - Página 77](CCN-STIC 885A_assets\pagina77_img3.png)

![Imagen 4 - Página 77](CCN-STIC 885A_assets\pagina77_img4.png)

![Imagen 5 - Página 77](CCN-STIC 885A_assets\pagina77_img5.png)

![Imagen 6 - Página 77](CCN-STIC 885A_assets\pagina77_img6.png)

![Imagen 7 - Página 77](CCN-STIC 885A_assets\pagina77_img7.png)

---

<!-- Página 78 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
d2. ¿Asignar permisos ahora o permitir que los usuarios decidan?
d3. Asignar permisos ahora
Esta opción determina exactamente los permisos para el contenido con
esa etiqueta y los usuarios que los obtendrán.
 En Outlook, aplique una de las siguientes restricciones:
o No reenviar: Cuando los usuarios aplican la etiqueta a un
correo electrónico en Outlook, los destinatarios podrán leer el
mensaje, pero no podrá reenviar, imprimir ni copiar el
contenido. El remitente tiene permiso total para sus mensajes
y todas las respuestas.
o Solo cifrar: Cuando los usuarios aplican la etiqueta a un correo
en Outlook, el correo se cifra y los destinatarios deben
autenticarse. Los destinatarios no tienen restricciones,
excepto que no pueden quitar el cifrado.
 En Word, PowerPoint y Excel, pedir a los usuarios que especifiquen
permisos: Cuando los usuarios aplican la etiqueta a los archivos de
Word, PowerPoint o Excel, aparece un cuadro de diálogo en el que se
Centro Crip tológico Nacional 78

![Imagen 1 - Página 78](CCN-STIC 885A_assets\pagina78_img1.png)

![Imagen 2 - Página 78](CCN-STIC 885A_assets\pagina78_img2.png)

![Imagen 3 - Página 78](CCN-STIC 885A_assets\pagina78_img3.png)

![Imagen 4 - Página 78](CCN-STIC 885A_assets\pagina78_img4.png)

![Imagen 5 - Página 78](CCN-STIC 885A_assets\pagina78_img5.png)

![Imagen 6 - Página 78](CCN-STIC 885A_assets\pagina78_img6.png)

![Imagen 7 - Página 78](CCN-STIC 885A_assets\pagina78_img7.png)

---

<!-- Página 79 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
les pide que elijan uno de los niveles de permisos predefinidos,
especifiquen los usuarios o grupos a los que se aplican y, de forma
opcional, establezcan una fecha de expiración para el archivo
etiquetado.
 Usar el cifrado de doble clave: Active DKE si desea utilizar dos llaves
para controlar aún más el acceso a los elementos etiquetados.
Microsoft almacena una clave en Azure y usted tiene la otra. Tenga en
cuenta que, si activa esta opción, no podrá editar la etiqueta una vez
creada.
d4. Permitir a los usuarios asignar permisos al aplicar la etiqueta al
contenido.
De esta forma, puede permitir a los usuarios de su organización cierta
flexibilidad que pueden necesitar para colaborar y llevar a cabo su
trabajo.
1. El acceso del usuario al contenido expira
Si desea limitar el tiempo que los usuarios pueden acceder al
contenido con esta etiqueta, especifique una fecha o un número de días
en los que el acceso deba vencer. Más información:
 Después de este tiempo, los usuarios no podrán abrir archivos que
tengan esta etiqueta aplicada. Sin embargo, para los correos
electrónicos, la expiración no siempre se aplica debido a los
mecanismos de almacenamiento en caché usados por algunos
clientes de correo electrónico.
 Si especifica una fecha, es efectiva la medianoche en la zona horaria
actual.
 Si especifica un número de días, la hora comienza en el momento en
que se aplica la etiqueta al contenido.
Centro Crip tológico Nacional 79

![Imagen 1 - Página 79](CCN-STIC 885A_assets\pagina79_img1.png)

![Imagen 2 - Página 79](CCN-STIC 885A_assets\pagina79_img2.png)

![Imagen 3 - Página 79](CCN-STIC 885A_assets\pagina79_img3.png)

![Imagen 4 - Página 79](CCN-STIC 885A_assets\pagina79_img4.png)

![Imagen 5 - Página 79](CCN-STIC 885A_assets\pagina79_img5.png)

![Imagen 6 - Página 79](CCN-STIC 885A_assets\pagina79_img6.png)

---

<!-- Página 80 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
2. Permitir acceso sin conexión
Si especifica que el contenido etiquetado nunca esté disponible sin
conexión o que solo esté disponible sin conexión durante un número de
días, cuando se alcanza ese umbral, los usuarios deben volver a
autenticarse y su acceso se registra. Cuando esto sucede, si sus
credenciales no se almacenan en caché, se pedirá a los usuarios que
inicien sesión en Microsoft 365 para poder abrir el documento o el
correo electrónico.
3. Asignar permisos a usuarios y grupos específicos
Aquí se asignan los permisos a usuarios específicos para que solo ellos
puedan interactuar con contenido que tenga esta etiqueta aplicada.
Centro Crip tológico Nacional 80

![Imagen 1 - Página 80](CCN-STIC 885A_assets\pagina80_img1.png)

![Imagen 2 - Página 80](CCN-STIC 885A_assets\pagina80_img2.png)

![Imagen 3 - Página 80](CCN-STIC 885A_assets\pagina80_img3.png)

![Imagen 4 - Página 80](CCN-STIC 885A_assets\pagina80_img4.png)

![Imagen 5 - Página 80](CCN-STIC 885A_assets\pagina80_img5.png)

![Imagen 6 - Página 80](CCN-STIC 885A_assets\pagina80_img6.png)

![Imagen 7 - Página 80](CCN-STIC 885A_assets\pagina80_img7.png)

![Imagen 8 - Página 80](CCN-STIC 885A_assets\pagina80_img8.png)

---

<!-- Página 81 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
4. Usar el cifrado de doble clave
Active DKE si desea utilizar dos llaves para controlar aún más el acceso a
los elementos etiquetados. Microsoft almacena una clave en Azure y
usted tiene la otra. Tenga en cuenta que, si activa esta opción, no podrá
editar la etiqueta una vez creada. Para más información ver Aplicar
cifrado mediante etiquetas de confidencialidad | Microsoft Learn
e) Elementos - Marcado de contenido
Se pueden asignar encabezados, pies o marcas de agua que se agregará al
documento o correo electrónico.
f) Etiquetado automático
Centro Crip tológico Nacional 81

![Imagen 1 - Página 81](CCN-STIC 885A_assets\pagina81_img1.png)

![Imagen 2 - Página 81](CCN-STIC 885A_assets\pagina81_img2.png)

![Imagen 3 - Página 81](CCN-STIC 885A_assets\pagina81_img3.png)

![Imagen 4 - Página 81](CCN-STIC 885A_assets\pagina81_img4.png)

![Imagen 5 - Página 81](CCN-STIC 885A_assets\pagina81_img5.png)

![Imagen 6 - Página 81](CCN-STIC 885A_assets\pagina81_img6.png)

![Imagen 7 - Página 81](CCN-STIC 885A_assets\pagina81_img7.png)

![Imagen 8 - Página 81](CCN-STIC 885A_assets\pagina81_img8.png)

---

<!-- Página 82 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Cuando se detecte contenido sensible en el correo electrónico o en los
documentos que cumplan las condiciones que se elija, se puede aplicar
automáticamente esta etiqueta o mostrar un mensaje a los usuarios que les
recomiende que la apliquen ellos mismos.
g) Parámetros de protección de los grupos y sitios.
Esta configuración se aplica a equipos, grupos y sitios que tengan esta
etiqueta aplicada. Pero no se aplica directamente a los archivos almacenados
en estos contenedores.
h) Etiquetado automático para recursos de datos esquematizados
Publicar sensitivity labels
Una vez creada la etiqueta se publica, así estará disponible en aplicaciones de Office
(Word, Excel, PowerPoint y Outlook), sitios de SharePoint y Teams, y grupos de Office
365 de usuarios específicos.
a) Pulsar el botón “Publicar etiqueta”.
Centro Crip tológico Nacional 82

![Imagen 1 - Página 82](CCN-STIC 885A_assets\pagina82_img1.png)

![Imagen 2 - Página 82](CCN-STIC 885A_assets\pagina82_img2.png)

![Imagen 3 - Página 82](CCN-STIC 885A_assets\pagina82_img3.png)

![Imagen 4 - Página 82](CCN-STIC 885A_assets\pagina82_img4.png)

![Imagen 5 - Página 82](CCN-STIC 885A_assets\pagina82_img5.png)

![Imagen 6 - Página 82](CCN-STIC 885A_assets\pagina82_img6.png)

![Imagen 7 - Página 82](CCN-STIC 885A_assets\pagina82_img7.png)

![Imagen 8 - Página 82](CCN-STIC 885A_assets\pagina82_img8.png)

---

<!-- Página 83 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
b) Seleccionar las etiquetas desde el asistente de publicación (panel derecho).
c) Ámbito
d) Elegir usuarios o grupos
e) Configuración de la directiva
Se puede tener una etiqueta de forma predeterminada, una etiqueta obligatoria
o requerir a los usuarios que justifiquen las acciones en su extremo.
Centro Crip tológico Nacional 83

![Imagen 1 - Página 83](CCN-STIC 885A_assets\pagina83_img1.png)

![Imagen 2 - Página 83](CCN-STIC 885A_assets\pagina83_img2.png)

![Imagen 3 - Página 83](CCN-STIC 885A_assets\pagina83_img3.png)

![Imagen 4 - Página 83](CCN-STIC 885A_assets\pagina83_img4.png)

![Imagen 5 - Página 83](CCN-STIC 885A_assets\pagina83_img5.png)

![Imagen 6 - Página 83](CCN-STIC 885A_assets\pagina83_img6.png)

![Imagen 7 - Página 83](CCN-STIC 885A_assets\pagina83_img7.png)

![Imagen 8 - Página 83](CCN-STIC 885A_assets\pagina83_img8.png)

![Imagen 9 - Página 83](CCN-STIC 885A_assets\pagina83_img9.png)

---

<!-- Página 84 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
f) Configuración predeterminada para documentos
g) Configuración predeterminada para los correos electrónicos
h) Configuración predeterminada para reuniones y eventos de calendario
Centro Crip tológico Nacional 84

![Imagen 1 - Página 84](CCN-STIC 885A_assets\pagina84_img1.png)

![Imagen 2 - Página 84](CCN-STIC 885A_assets\pagina84_img2.png)

![Imagen 3 - Página 84](CCN-STIC 885A_assets\pagina84_img3.png)

![Imagen 4 - Página 84](CCN-STIC 885A_assets\pagina84_img4.png)

![Imagen 5 - Página 84](CCN-STIC 885A_assets\pagina84_img5.png)

![Imagen 6 - Página 84](CCN-STIC 885A_assets\pagina84_img6.png)

![Imagen 7 - Página 84](CCN-STIC 885A_assets\pagina84_img7.png)

![Imagen 8 - Página 84](CCN-STIC 885A_assets\pagina84_img8.png)

---

<!-- Página 85 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
i) Configuración predeterminada para el contenido de Fabric y Power BI
j) Nombrar la directiva.
3.2.2.2 LIMPIEZA DE DOCUMENTOS
Al compartir una copia electrónica de determinados documentos de Office365 o al
exponer cierta documentación en internet, es una buena práctica revisar los
documentos en busca de datos ocultos, información personal y en general cualquier
metadato que pudiera estar asociado. Es posible eliminar esta información a través del
Inspector de documentos, característica que se accede desde las propias aplicaciones
de Word, Excel, PowerPoint o Visio.
3.2.2.3 COPIAS DE SEGURIDAD
En el Modelo de responsabilidad compartida de Office 365 de Microsoft donde se
especifica qué es responsabilidad de Microsoft y qué responsabilidad del cliente en
materia de copias de seguridad.
No existe una solución global de respaldo de Office 365. Consultar las guías
específicas de los servicios para información más concreta.
Centro Crip tológico Nacional 85

![Imagen 1 - Página 85](CCN-STIC 885A_assets\pagina85_img1.png)

![Imagen 2 - Página 85](CCN-STIC 885A_assets\pagina85_img2.png)

![Imagen 3 - Página 85](CCN-STIC 885A_assets\pagina85_img3.png)

![Imagen 4 - Página 85](CCN-STIC 885A_assets\pagina85_img4.png)

![Imagen 5 - Página 85](CCN-STIC 885A_assets\pagina85_img5.png)

![Imagen 6 - Página 85](CCN-STIC 885A_assets\pagina85_img6.png)

![Imagen 7 - Página 85](CCN-STIC 885A_assets\pagina85_img7.png)

---

<!-- Página 86 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
3.2.3 PROTECCIÓN DE LOS SERVICIOS
3.2.3.1 PROTECCIÓN FRENTE A DENEGACIÓN DE SERVICIO
Office 365 ofrece un sistema avanzado de detección de amenazas y sistemas de
mitigación para proteger la infraestructura subyacente de los ataques de denegación
de servicio (DoS) y prevenir la interrupción de servicio a los clientes.
El sistema de defensa DDoS de Azure está diseñado no solo para resistir ataques
desde el exterior, sino también desde otros tenants de Azure. Los mecanismos de
limitación de peticiones de Exchange Online y SharePoint Online forman parte de un
enfoque de varias capas para defenderse contra ataques DoS.
Consultar la guía [CCN-STIC-884A - Guía de configuración segura para Azure] para
obtener más información sobre el sistema de defensa DDoS de Azure.
Centro Crip tológico Nacional 86

![Imagen 1 - Página 86](CCN-STIC 885A_assets\pagina86_img1.png)

![Imagen 2 - Página 86](CCN-STIC 885A_assets\pagina86_img2.png)

![Imagen 3 - Página 86](CCN-STIC 885A_assets\pagina86_img3.png)

![Imagen 4 - Página 86](CCN-STIC 885A_assets\pagina86_img4.png)

![Imagen 5 - Página 86](CCN-STIC 885A_assets\pagina86_img5.png)

---

<!-- Página 87 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
4. OTRAS CONSIDERACIONES DE SEGURIDAD
4.1 SERVICIOS Y COMPLEMENTOS
Es interesante, de cara a tener un mayor control sobre las operaciones que puedan
realizar los usuarios, restringir o habilitar el uso de ciertos servicios y complementos
adicionales que puedan estar disponibles para los usuarios de Office 365. Este control
se realiza desde el Centro de administración de Microsoft 365, menú
[Configuración\Configuración de la organización].
Centro Crip tológico Nacional 87

![Imagen 1 - Página 87](CCN-STIC 885A_assets\pagina87_img1.png)

![Imagen 2 - Página 87](CCN-STIC 885A_assets\pagina87_img2.png)

![Imagen 3 - Página 87](CCN-STIC 885A_assets\pagina87_img3.png)

![Imagen 4 - Página 87](CCN-STIC 885A_assets\pagina87_img4.png)

![Imagen 5 - Página 87](CCN-STIC 885A_assets\pagina87_img5.png)

![Imagen 6 - Página 87](CCN-STIC 885A_assets\pagina87_img6.png)

---

<!-- Página 88 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
5. CARACTERÍSTICAS DISPONIBLES POR LICENCIAMIENTO
Administración de cuentas de usuario Microsoft 365 E Microsoft 365 Office 365 E1 Microsoft 365 Microsoft 365 Microsoft 365 Microsoft 365
mpresa Básico Empresa E3 y Office 365 E5 y Office 365 F1 F3 y Office 365
y Estándar Premium E3 E5 Enterprise F3
Identidad en la nube, identidad federada Sí Sí Sí Sí Sí Sí Sí
o autenticación multifactor
Configuración de escritorio de Office 365 Sí Sí No Sí Sí No No
Eliminar cuentas y restablecer Sí Sí Sí Sí Sí Sí Sí
contraseñas de usuario de Microsoft 365
o mediante Windows PowerShell
Los usuarios pueden cambiar su propia Sí Sí Sí Sí Sí Sí Sí
contraseña
Administración de licencias Sí Sí Sí Sí Sí Sí Sí
Informes de actividad del centro de Microsoft 365 Microsoft 365 Office 365 E1 Microsoft 365 Microsoft 365 Microsoft 365 Microsoft 365
Administración Empresa Básico Empresa E3 y Office 365 E5 y Office 365 F1 F3 y Office 365
y Estándar Premium E3 E5 Enterprise F3
Informes de actividad Sí Sí Sí Sí Sí Sí Sí
API de informes de uso de Microsoft Sí Sí Sí Sí Sí Sí Sí
Graph
Microsoft Graph API (BETA) Sí Sí Sí Sí Sí Sí Sí
Confianza Microsoft 365 Microsoft 365 Office 365 E1 Microsoft 365 Microsoft 365 Microsoft 365 Microsoft 365
Empresa Básico Empresa E3 y Office 365 E5 y Office 365 F1 F3 y Office 365
y Estándar Premium E3 E5 Enterprise F3
Office 365 Cloud App Security No No No No Sí No No
Detección de Microsoft Defender for No Sí No Sí (solo M365 Sí Sí Sí (solo M365
Cloud Apps E3) F3)
Microsoft Defender for Cloud Apps No No No No Sí (solo M365 No No
E5)
Microsoft Defender para Office 365 No Sí No No Sí No No
Centro C riptológico Nacional 88

| Administración de cuentas de usuario |  |  |  | Microsoft 365 | E |  | Microsoft 365 |  | Office 365 E1 |  |  |  | Microsoft 365 |  |  | Microsoft 365 |  | Microsoft 365 <br> F1 |  |  |  | Microsoft 365 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | mpresa Básico |  |  | Empresa |  |  |  |  |  | E3 y Office 365 |  |  | E5 y Office 365 |  |  |  |  |  | F3 y Office 365 |  |
|  |  |  |  | y Estándar |  |  | Premium |  |  |  |  |  | E3 |  |  | E5 |  |  |  |  |  | Enterprise F3 |  |
|  | Identidad en la nube, identidad federada |  | Sí | Sí |  | Sí | Sí |  | Sí |  |  | Sí | Sí |  | Sí | Sí |  | Sí |  |  | Sí | Sí |  |
|  | o autenticación multifactor |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Configuración de escritorio de Office 365 |  |  | Sí |  |  | Sí |  |  | No |  |  | Sí |  |  | Sí |  |  | No |  |  | No |  |  |
|  | Eliminar cuentas y restablecer |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  |
|  | contraseñas de usuario de Microsoft 365 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | o mediante Windows PowerShell |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Los usuarios pueden cambiar su propia <br> contraseña |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  |
|  | Administración de licencias |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |
| Informes de actividad del centro de <br> Administración | Informes de actividad del centro de |  |  | Microsoft 365 | o |  | Microsoft 365 |  | Office 365 E1 | Office 365 E1 |  |  | Microsoft 365 |  |  | Microsoft 365 |  | Microsoft 365 <br> F1 | Microsoft 365 |  |  | Microsoft 365 |  |
|  | Administración |  |  | Empresa Básic |  |  | Empresa |  |  |  |  |  | E3 y Office 365 |  |  | E5 y Office 365 |  |  | F1 |  |  | F3 y Office 365 |  |
|  |  |  |  | y Estándar |  |  | Premium |  |  |  |  |  | E3 |  |  | E5 |  |  |  |  |  | Enterprise F3 |  |
|  | Informes de actividad |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |
| API de informes de uso de Microsoft <br> Graph |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  |
|  | Microsoft Graph API (BETA) |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |
| Confianza | Confianza |  |  | Microsoft 365 | o |  | Microsoft 365 |  | Office 365 E1 | Office 365 E1 |  |  | Microsoft 365 |  |  | Microsoft 365 |  | Microsoft 365 <br> F1 | Microsoft 365 |  |  | Microsoft 365 |  |
|  |  |  |  | Empresa Básic |  |  | Empresa |  |  |  |  |  | E3 y Office 365 |  |  | E5 y Office 365 |  |  | F1 |  |  | F3 y Office 365 |  |
|  |  |  |  | y Estándar |  |  | Premium |  |  |  |  |  | E3 |  |  | E5 |  |  |  |  |  | Enterprise F3 |  |
|  | Office 365 Cloud App Security |  |  | No |  |  | No |  |  | No |  |  | No |  |  | Sí |  |  | No |  |  | No |  |
| Detección de Microsoft Defender for <br> Cloud Apps |  |  | No |  |  | Sí |  |  | No |  |  | Sí (solo M365 <br> E3) |  |  | Sí |  |  | Sí |  |  | Sí (solo M365 <br> F3) |  |  |
| Microsoft Defender for Cloud Apps |  |  | No |  |  | No |  |  | No |  |  | No |  |  |  | Sí (solo M365 |  | No |  |  | No |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | E5) |  |  |  |  |  |  |  |
| Microsoft Defender para Office 365 |  |  | No |  |  | Sí |  |  | No |  |  | No |  |  | Sí |  |  | No |  |  | No |  |  |


| Microsoft 365 |
| --- |
| F1 |


![Imagen 1 - Página 88](CCN-STIC 885A_assets\pagina88_img1.png)

![Imagen 2 - Página 88](CCN-STIC 885A_assets\pagina88_img2.png)

![Imagen 3 - Página 88](CCN-STIC 885A_assets\pagina88_img3.png)

![Imagen 4 - Página 88](CCN-STIC 885A_assets\pagina88_img4.png)

![Imagen 5 - Página 88](CCN-STIC 885A_assets\pagina88_img5.png)

---

<!-- Página 89 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
Caja de seguridad del cliente de No No No No Sí No No
Microsoft Purview
Clave de cliente de Microsoft Purview No No No No Sí No No
Microsoft Purview eDiscovery (Premium) No No No No Sí No No
Auditoría de Microsoft Purview Sí Sí Sí Sí Sí Sí Sí
(estándar)
Auditoría de Microsoft Purview No No No No Sí No No
(Premium)
Puntuación de seguridad de Microsoft Sí Sí Sí Sí Sí Sí Sí
Office 365 Threat Intelligence No No No No Sí No No
Centro C riptológico Nacional 89

|  | Caja de seguridad del cliente de |  | No |  |  | No |  |  | No |  |  | No |  |  | Sí |  |  | No |  |  | No |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Microsoft Purview |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Clave de cliente de Microsoft Purview |  |  | No |  |  | No |  |  | No |  |  | No |  |  | Sí |  |  | No |  |  | No |  |  |
|  | Microsoft Purview eDiscovery (Premium) |  |  | No |  |  | No |  |  | No |  |  | No |  |  | Sí |  |  | No |  |  | No |  |
| Auditoría de Microsoft Purview <br> (estándar) |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  |
|  | Auditoría de Microsoft Purview |  | No |  |  | No |  |  | No |  |  | No |  |  | Sí |  |  | No |  |  | No |  |  |
|  | (Premium) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Puntuación de seguridad de Microsoft |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  | Sí |  |  |
|  | Office 365 Threat Intelligence |  |  | No |  |  | No |  |  | No |  |  | No |  |  | Sí |  |  | No |  |  | No |  |


![Imagen 1 - Página 89](CCN-STIC 885A_assets\pagina89_img1.png)

![Imagen 2 - Página 89](CCN-STIC 885A_assets\pagina89_img2.png)

![Imagen 3 - Página 89](CCN-STIC 885A_assets\pagina89_img3.png)

![Imagen 4 - Página 89](CCN-STIC 885A_assets\pagina89_img4.png)

![Imagen 5 - Página 89](CCN-STIC 885A_assets\pagina89_img5.png)

---

<!-- Página 90 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
6. GLOSARIO Y ABREVIATURAS
A continuación de describen una serie de términos, acrónimos y abreviaturas en
materia de seguridad utilizados en esta guía:
Término Definición
AD DS Active Directory Domain Services (Servicios de dominio de
Directorio Activo).
Microsoft Entra Conocido anteriormente como Azure Active Directory.
ID
Azure RMS Azure Rights Management (Azure RMS).
Centro de Portal de Administración de Office 365.
Administración Accesible desde la url: admin.microsoft.com.
de Microsoft
365
CSP Cloud Service Provider
DDoS Distributed Denial of Service (Ataque de Denegación de Servicio
Distribuido), el cual se lleva a cabo generando un gran flujo de
información desde varios puntos de conexión hacia un mismo
punto de destino.
ENS Esquema Nacional de Seguridad.
MFA Multifactor Authentication (Autenticación Multifactor). Sistema
de seguridad que requiere más de una forma de autenticarse, por
ejemplo, a través de una app, sms, etc.
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
PowerShell PowerShell (originalmente llamada Windows PowerShell) es una
interfaz de consola (CLI) con posibilidad de escritura y unión de
comandos por medio de instrucciones (scripts).
PS PowerShell.
SaaS Software as a Service (Software como Servicio). Modelo de
distribución de software donde el soporte lógico y los datos que
Centro Criptológico Nacional

|  | Término |  |  | Definición |  |
| --- | --- | --- | --- | --- | --- |
| AD DS | AD DS |  |  | Active Directory Domain Services (Servicios de dominio de |  |
|  |  |  |  | Directorio Activo). |  |
| Microsoft Entra <br> ID |  |  | Conocido anteriormente como Azure Active Directory. |  |  |
|  | Azure RMS |  |  | Azure Rights Management (Azure RMS). |  |
| Centro de <br> Administración <br> de Microsoft <br> 365 |  |  | Portal de Administración de Office 365. <br> Accesible desde la url: admin.microsoft.com. |  |  |
|  | CSP |  |  | Cloud Service Provider |  |
| DDoS |  |  | Distributed Denial of Service (Ataque de Denegación de Servicio <br> Distribuido), el cual se lleva a cabo generando un gran flujo de <br> información desde varios puntos de conexión hacia un mismo <br> punto de destino. |  |  |
|  | ENS |  |  | Esquema Nacional de Seguridad. |  |
| MFA |  |  | Multifactor Authentication (Autenticación Multifactor). Sistema <br> de seguridad que requiere más de una forma de autenticarse, por <br> ejemplo, a través de una app, sms, etc. |  |  |
| Microsoft <br> Intune |  |  |  | Microsoft Intune es un servicio de administración de movilidad |  |
|  |  |  |  | empresarial (EMM) basado en nube que ayuda a los empleados a |  |
|  |  |  |  | ser productivos mientras mantiene protegidos los datos |  |
|  |  |  |  | corporativos. Al igual que otros servicios de Azure, Microsoft |  |
|  |  |  |  | Intune está disponible en el portal de Azure. Intune permite: |  |
|  |  |  |  | - Administrar los dispositivos móviles y los equipos que los |  |
|  |  |  |  | empleados usan para tener acceso a datos de la empresa. |  |
|  |  |  |  | - Administrar las aplicaciones móviles que usa la plantilla. |  |
|  |  |  |  | - Proteger la información de la empresa al ayudar a controlar la |  |
|  |  |  |  | manera en que los empleados tienen acceso a ella y la |  |
|  |  |  |  | comparten. |  |
|  |  |  |  | - Garantizar que los dispositivos y las aplicaciones sean |  |
|  |  |  |  | compatibles con los requisitos de seguridad de la empresa |  |
| O365 |  |  | Office 365. |  |  |
| PowerShell |  |  |  | PowerShell (originalmente llamada Windows PowerShell) es una |  |
|  |  |  |  | interfaz de consola (CLI) con posibilidad de escritura y unión de |  |
|  |  |  |  | comandos por medio de instrucciones (scripts). |  |
| PS |  |  | PowerShell. |  |  |
| SaaS |  |  |  | Software as a Service (Software como Servicio). Modelo de |  |
|  |  |  |  | distribución de software donde el soporte lógico y los datos que |  |


| Microsoft |
| --- |
| Intune |


![Imagen 1 - Página 90](CCN-STIC 885A_assets\pagina90_img1.png)

![Imagen 2 - Página 90](CCN-STIC 885A_assets\pagina90_img2.png)

![Imagen 3 - Página 90](CCN-STIC 885A_assets\pagina90_img3.png)

![Imagen 4 - Página 90](CCN-STIC 885A_assets\pagina90_img4.png)

---

<!-- Página 91 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
maneja se alojan en servidores de una compañía de TIC, y se
accede vía internet.
Sensitivity label Etiqueta de sensibilidad. Permiten clasificar, cifrar, agregar
marcadores y controlar accesos en documentos y correos
electrónicos en Office 365.
Tenant Un tenant de Office 365 es un espacio reservado en la nube de
Microsoft desde el que tendremos acceso a los recursos y
servicios que Microsoft ofrece.
TLS TLS (Seguridad de la capa de transporte) y SSL (antecesor de TLS)
son protocolos criptográficos que protegen la comunicación por
red con certificados de seguridad que cifran una conexión entre
equipos.
Centro Criptológico Nacional

|  |  | maneja se alojan en servidores de una compañía de TIC, y se |  |
| --- | --- | --- | --- |
|  |  | accede vía internet. |  |
| Sensitivity label | Etiqueta de sensibilidad. Permiten clasificar, cifrar, agregar <br> marcadores y controlar accesos en documentos y correos <br> electrónicos en Office 365. |  |  |
| Tenant |  | Un tenant de Office 365 es un espacio reservado en la nube de |  |
|  |  | Microsoft desde el que tendremos acceso a los recursos y |  |
|  |  | servicios que Microsoft ofrece. |  |
| TLS | TLS (Seguridad de la capa de transporte) y SSL (antecesor de TLS) <br> son protocolos criptográficos que protegen la comunicación por <br> red con certificados de seguridad que cifran una conexión entre <br> equipos. |  |  |


![Imagen 1 - Página 91](CCN-STIC 885A_assets\pagina91_img1.png)

![Imagen 2 - Página 91](CCN-STIC 885A_assets\pagina91_img2.png)

![Imagen 3 - Página 91](CCN-STIC 885A_assets\pagina91_img3.png)

![Imagen 4 - Página 91](CCN-STIC 885A_assets\pagina91_img4.png)

---

<!-- Página 92 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
7. ANEXO A. CREAR UNA CUENTA DE USUARIO INDIVIDUAL
Import-Module Microsoft.Graph.Users
Connect-MgGraph -Scopes "User.ReadWrite.All"
$params_CreateUsers = @{
accountEnabled = $true
displayName = "Adele Vance"
givenName = "Adele"
surname = "Vance"
mailNickname = "AdeleV"
userPrincipalName = "AdeleV@domain.com"
usageLocation = "ES"
passwordProfile = @{
forceChangePasswordNextSignIn = $true
password = "CONTRASEÑA"
}
}
$params_AddLincese = @{
addLicenses = @(
@{
disabledPlans = @(
# "39b5c996-467e-4e60-bd62-46066f572726"
)
skuId = "f245ecc8-75af-4f8e-b61f-27d8114de5f3"
}
)
removeLicenses = @(
)
}
# Comando para crear el usuario
New-MgUser -BodyParameter $params_CreateUsers
# Comando para asignar la licencia
Set-MgUserLicense -UserId "AdeleV@domain.com" -BodyParameter $params_AddLincese
# Una vez terminado el proceso, nos desconectamos de la sesión.
Disconnect-MgGraph
a) Import-Module Microsoft.Graph.Users: Con la primera línea importamos el
módulos
b) Connect-MgGraph -Scopes "User.ReadWrite.All": Nos conectamos a
Microsoft Graph con el rol de lectura y escritura de usuarios.
c) $params_CreateUsers: En este array añadimos los datos del usuario.
d) passwordProfile:
a. forceChangePasswordNextSignIn: Al poner en true esta línea
estamos indicando que el usuario debe cambiar la contraseña en el
siguiente inicio de sesión.
b. Password: Aquí se debe escribir la contraseña del usuario. Por
defecto exige que la contraseña sea fuerte.
e) $params_AddLincese: En este array añadimos las opciones de las licencias.
a. addLicenses:
i. disabledPlans: Si hay algún plan de la licencia que se desea
desactivar, se debera escribir el skuID de ese plan dentro de
este array.
ii. skuId: Escribimos el skuID de la licencia a asignar.
Centro Criptológico Nacional
92

| Import-Module Microsoft.Graph.Users <br> Connect-MgGraph -Scopes "User.ReadWrite.All" <br> $params_CreateUsers = @{ <br> accountEnabled = $true <br> displayName = "Adele Vance" <br> givenName = "Adele" <br> surname = "Vance" <br> mailNickname = "AdeleV" <br> userPrincipalName = "AdeleV@domain.com" <br> usageLocation = "ES" <br> passwordProfile = @{ <br> forceChangePasswordNextSignIn = $true <br> password = "CONTRASEÑA" <br> } <br> } <br> $params_AddLincese = @{ <br> addLicenses = @( <br> @{ <br> disabledPlans = @( <br> # "39b5c996-467e-4e60-bd62-46066f572726" <br> ) <br> skuId = "f245ecc8-75af-4f8e-b61f-27d8114de5f3" <br> } <br> ) <br> removeLicenses = @( <br> ) <br> } <br> # Comando para crear el usuario <br> New-MgUser -BodyParameter $params_CreateUsers <br> # Comando para asignar la licencia <br> Set-MgUserLicense -UserId "AdeleV@domain.com" -BodyParameter $params_AddLincese <br> # Una vez terminado el proceso, nos desconectamos de la sesión. <br> Disconnect-MgGraph | Import-Module Microsoft.Graph.Users |  |  |
| --- | --- | --- | --- |
|  | Connect-MgGraph -Scopes "User.ReadWrite.All" |  |  |
|  | $params_CreateUsers = @{ |  |  |
|  | accountEnabled = $true |  |  |
|  | displayName = "Adele Vance" |  |  |
|  | givenName = "Adele" |  |  |
|  | surname = "Vance" |  |  |
|  | mailNickname = "AdeleV" |  |  |
|  | userPrincipalName = "AdeleV@domain.com" |  |  |
|  | usageLocation = "ES" |  |  |
|  | passwordProfile = @{ |  |  |
|  | forceChangePasswordNextSignIn = $true |  |  |
|  | password = "CONTRASEÑA" |  |  |
|  | } |  |  |
|  | } |  |  |
|  | $params_AddLincese = @{ |  |  |
|  | addLicenses = @( |  |  |
|  | @{ |  |  |
|  | disabledPlans = @( |  |  |
|  |  | # "39b5c996-467e-4e60-bd62-46066f572726" |  |
|  |  | ) |  |
|  | skuId = "f245ecc8-75af-4f8e-b61f-27d8114de5f3" |  |  |
|  | } |  |  |
|  | ) |  |  |
|  | removeLicenses = @( |  |  |
|  | ) |  |  |
|  | } |  |  |
|  | # Comando para crear el usuario |  |  |
|  | New-MgUser -BodyParameter $params_CreateUsers |  |  |
|  | # Comando para asignar la licencia |  |  |
|  | Set-MgUserLicense -UserId "AdeleV@domain.com" -BodyParameter $params_AddLincese |  |  |
|  | # Una vez terminado el proceso, nos desconectamos de la sesión. |  |  |
|  | Disconnect-MgGraph |  |  |


![Imagen 1 - Página 92](CCN-STIC 885A_assets\pagina92_img1.png)

![Imagen 2 - Página 92](CCN-STIC 885A_assets\pagina92_img2.png)

![Imagen 3 - Página 92](CCN-STIC 885A_assets\pagina92_img3.png)

![Imagen 4 - Página 92](CCN-STIC 885A_assets\pagina92_img4.png)

![Imagen 5 - Página 92](CCN-STIC 885A_assets\pagina92_img5.png)

---

<!-- Página 93 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
b. removeLicenses = @(): Si el usuario ya tuviese alguna licencia
asignada y hubiera que quitarla, se deberá escribir el skuID de esta
licencia.
f) New-MgUser -BodyParameter $params_CreateUsers: Este comando crea el
usuario.
g) Set-MgUserLicense -UserId "AdeleV@domain.com" -BodyParameter
$params_AddLincese: Este comando asigna la licencia al usuario creado.
h) Disconnect-MgGraph: Este comando termina la conexión con Microsoft
Graph.
8. ANEXO B. CREAR VARIAS CUENTAS DE USUARIO
a) Crear un archivo de valores separados por comas (CSV) que contenga la
información necesaria de la cuenta de usuario. Por ejemplo:
Usuario 1,Usuario,1,Usuario1,Usuario1@dominio.com,ES,f245ecc8-75af-4f8e-b61f-
27d8114de5f3,AcugWKQ4_{94
Usuario 2,Usuario,2,Usuario2,Usuario2@dominio.com,ES,f245ecc8-75af-4f8e-b61f-
27d8114de5f3,AcugWKQ4_{94
Usuario 3,Usuario,3,Usuario3,Usuario3@dominio.com,ES,f245ecc8-75af-4f8e-b61f-
27d8114de5f3,AcugWKQ4_{94
b) Ejecutar desde PowerShell:
Import-Module Microsoft.Graph.Users
Connect-MgGraph -Scopes "User.ReadWrite.All"
$UsersList = Import-Csv -Path "C:\Users\<user>\Downloads\CCN\users.csv" -
Delimiter ","
foreach ($User in $UsersList) {
$params_CreateUsers = @{
accountEnabled = $true
displayName = $User.displayName.Trim()
givenName = $User.givenName.Trim()
surname = $User.surname.Trim()
mailNickname = $User.mailNickname.Trim()
userPrincipalName = $User.userPrincipalName.Trim()
usageLocation = $User.usageLocation.Trim()
passwordProfile = @{
forceChangePasswordNextSignIn = $true
password = $User.password.Trim()
}
}
$params_AddLincese = @{
addLicenses = @(
@{
disabledPlans = @(
)
skuId = $User.license.Trim()
}
)
removeLicenses = @(
)
}
# Comando para crear el usuario
New-MgUser -BodyParameter $params_CreateUsers
# Comando para asignar la licencia
Set-MgUserLicense -UserId $User.userPrincipalName.Trim() -BodyParameter
$params_AddLincese
}
# Una vez terminado el proceso, nos desconectamos de la sesión.
Disconnect-MgGraph
Centro Criptológico Nacional
93

|  | Usuario 1,Usuario,1,Usuario1,Usuario1@dominio.com,ES,f245ecc8-75af-4f8e-b61f- |  |
| --- | --- | --- |
|  | 27d8114de5f3,AcugWKQ4_{94 |  |
|  | Usuario 2,Usuario,2,Usuario2,Usuario2@dominio.com,ES,f245ecc8-75af-4f8e-b61f- |  |
|  | 27d8114de5f3,AcugWKQ4_{94 |  |
|  | Usuario 3,Usuario,3,Usuario3,Usuario3@dominio.com,ES,f245ecc8-75af-4f8e-b61f- |  |
|  | 27d8114de5f3,AcugWKQ4_{94 |  |


| Import-Module Microsoft.Graph.Users <br> Connect-MgGraph -Scopes "User.ReadWrite.All" <br> $UsersList = Import-Csv -Path "C:\Users\<user>\Downloads\CCN\users.csv" - <br> Delimiter "," <br> foreach ($User in $UsersList) { <br> $params_CreateUsers = @{ <br> accountEnabled = $true <br> displayName = $User.displayName.Trim() <br> givenName = $User.givenName.Trim() <br> surname = $User.surname.Trim() <br> mailNickname = $User.mailNickname.Trim() <br> userPrincipalName = $User.userPrincipalName.Trim() <br> usageLocation = $User.usageLocation.Trim() <br> passwordProfile = @{ <br> forceChangePasswordNextSignIn = $true <br> password = $User.password.Trim() <br> } <br> } <br> $params_AddLincese = @{ <br> addLicenses = @( <br> @{ <br> disabledPlans = @( <br> ) <br> skuId = $User.license.Trim() <br> } <br> ) <br> removeLicenses = @( <br> ) <br> } <br> # Comando para crear el usuario <br> New-MgUser -BodyParameter $params_CreateUsers <br> # Comando para asignar la licencia <br> Set-MgUserLicense -UserId $User.userPrincipalName.Trim() -BodyParameter <br> $params_AddLincese <br> } <br> # Una vez terminado el proceso, nos desconectamos de la sesión. <br> Disconnect-MgGraph | Import-Module Microsoft.Graph.Users |  |  |
| --- | --- | --- | --- |
|  | Connect-MgGraph -Scopes "User.ReadWrite.All" |  |  |
|  | $UsersList = Import-Csv -Path "C:\Users\<user>\Downloads\CCN\users.csv" - |  |  |
|  | Delimiter "," |  |  |
|  | foreach ($User in $UsersList) { |  |  |
|  |  | $params_CreateUsers = @{ |  |
|  | accountEnabled = $true |  |  |
|  | displayName = $User.displayName.Trim() |  |  |
|  | givenName = $User.givenName.Trim() |  |  |
|  | surname = $User.surname.Trim() |  |  |
|  | mailNickname = $User.mailNickname.Trim() |  |  |
|  | userPrincipalName = $User.userPrincipalName.Trim() |  |  |
|  | usageLocation = $User.usageLocation.Trim() |  |  |
|  | passwordProfile = @{ |  |  |
|  | forceChangePasswordNextSignIn = $true |  |  |
|  |  | password = $User.password.Trim() |  |
|  |  | } |  |
|  | } |  |  |
|  | $params_AddLincese = @{ |  |  |
|  | addLicenses = @( |  |  |
|  | @{ |  |  |
|  | disabledPlans = @( |  |  |
|  | ) |  |  |
|  | skuId = $User.license.Trim() |  |  |
|  | } |  |  |
|  | ) |  |  |
|  | removeLicenses = @( |  |  |
|  | ) |  |  |
|  | } |  |  |
|  | # Comando para crear el usuario |  |  |
|  | New-MgUser -BodyParameter $params_CreateUsers |  |  |
|  | # Comando para asignar la licencia |  |  |
|  | Set-MgUserLicense -UserId $User.userPrincipalName.Trim() -BodyParameter |  |  |
|  | $params_AddLincese |  |  |
|  | } |  |  |
|  | # Una vez terminado el proceso, nos desconectamos de la sesión. |  |  |
|  | Disconnect-MgGraph |  |  |


![Imagen 1 - Página 93](CCN-STIC 885A_assets\pagina93_img1.png)

![Imagen 2 - Página 93](CCN-STIC 885A_assets\pagina93_img2.png)

![Imagen 3 - Página 93](CCN-STIC 885A_assets\pagina93_img3.png)

![Imagen 4 - Página 93](CCN-STIC 885A_assets\pagina93_img4.png)

![Imagen 5 - Página 93](CCN-STIC 885A_assets\pagina93_img5.png)

---

<!-- Página 94 de 102 -->

CCN-STIC 885A Guía de configuración segura para Office 365
a) Import-Module Microsoft.Graph.Users: Con la primera línea importamos el
módulos
b) Connect-MgGraph -Scopes "User.ReadWrite.All": Nos conectamos a
Microsoft Graph con el rol de lectura y escritura de usuarios.
c) $UsersList: Aqui se añadira la ruta del CSV de los usuarios
d) $params_CreateUsers: En este array añadimos los datos del usuario.
e) passwordProfile:
a. forceChangePasswordNextSignIn: Al poner en true esta línea
estamos indicando que el usuario debe cambiar la contraseña en el
siguiente inicio de sesión.
b. Password: Aquí se debe escribir la contraseña del usuario. Por
defecto exige que la contraseña sea fuerte.
f) $params_AddLincese: En este array añadimos las opciones de las licencias.
a. addLicenses:
i. disabledPlans: Si hay algún plan de la licencia que se desea
desactivar, se debera escribir el skuID de ese plan dentro de
este array.
ii. skuId: Escribimos el skuID de la licencia a asignar.
b. removeLicenses = @(): Si el usuario ya tuviese alguna licencia
asignada y hubiera que quitarla, se deberá escribir el skuID de esta
licencia.
g) New-MgUser -BodyParameter $params_CreateUsers: Este comando crea el
usuario.
h) Set-MgUserLicense -UserId "<>" -BodyParameter $params_AddLincese:
Este comando asigna la licencia al usuario creado.
i) Disconnect-MgGraph: Este comando termina la conexión con Microsoft
Graph.
Centro Criptológico Nacional
94

![Imagen 1 - Página 94](CCN-STIC 885A_assets\pagina94_img1.png)

![Imagen 2 - Página 94](CCN-STIC 885A_assets\pagina94_img2.png)

![Imagen 3 - Página 94](CCN-STIC 885A_assets\pagina94_img3.png)

![Imagen 4 - Página 94](CCN-STIC 885A_assets\pagina94_img4.png)

![Imagen 5 - Página 94](CCN-STIC 885A_assets\pagina94_img5.png)

---

<!-- Página 95 de 102 -->

CCN-STIC-885A Guía de configuración segura para Office 365
9. CUADRO RESUMEN DE MEDIDAS DE SEGURIDAD
Se facilita a continuación un cuadro resumen de configuraciones a aplicar para la protección del servicio, donde la organización podrá
valorar qué medidas de las propuestas se cumplen.
Control ENS Configuración Estado
Op Marco Operacional
Op.acc Control de Acceso
Op.acc.1 Identificación
Se ha configurado el uso de cuentas y la asignación de licencias a usuarios. Aplica: Cumple:
Cada usuario debe disponer de un acceso nominal y personal a Office 365
que permita su identificación de forma única. Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Op.acc.3 Segregación de funciones y tareas
Se ha asignado adecuadamente los roles de administración. Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Centro Criptológico Nacional 95

|  | Control ENS |  |  | Configuración |  |  | Estado |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Op |  |  | Marco Operacional |  |  |  |  |  |  |
| Op.acc |  |  | Control de Acceso |  |  |  |  |  |  |
| Op.acc.1 |  |  | Identificación |  |  |  |  |  |  |
|  |  |  | Se ha configurado el uso de cuentas y la asignación de licencias a usuarios. <br> Cada usuario debe disponer de un acceso nominal y personal a Office 365 <br> que permita su identificación de forma única. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |
| Op.acc.3 |  |  | Segregación de funciones y tareas |  |  |  |  |  |  |
|  |  |  | Se ha asignado adecuadamente los roles de administración. |  |  | Aplica: <br> Si No |  | Cumple: <br> Si No |  |
|  |  |  |  |  |  | Evidencias Recogidas: <br> Si No |  | Observaciones: |  |


![Imagen 1 - Página 95](CCN-STIC 885A_assets\pagina95_img1.png)

![Imagen 2 - Página 95](CCN-STIC 885A_assets\pagina95_img2.png)

![Imagen 3 - Página 95](CCN-STIC 885A_assets\pagina95_img3.png)

![Imagen 4 - Página 95](CCN-STIC 885A_assets\pagina95_img4.png)

![Imagen 5 - Página 95](CCN-STIC 885A_assets\pagina95_img5.png)

---

<!-- Página 96 de 102 -->

CCN-STIC-885A Guía de configuración segura para Office 365
Op.acc.5 Mecanismo de autenticación
Op.acc.6
Se ha habilitado Multi-Factor Authentication (MFA) para los usuarios de la Aplica: Cumple:
organización y externos.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Evidencias Recogidas: Observaciones:
Si No
op.exp Explotación
op.exp.6 Protección frente a código dañino
Se han habilitado y configurado una o varias medidas de protección del Aplica: Cumple:
correo electrónico como Antispam, Antispoofing, Antiphishing y
Antimalware. Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Centro Criptológico Nacional 96

| Op.acc.5 <br> Op.acc.6 | Mecanismo de autenticación |  |  |
| --- | --- | --- | --- |
|  | Se ha habilitado Multi-Factor Authentication (MFA) para los usuarios de la <br> organización y externos. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| op.exp | Explotación |  |  |
| op.exp.6 | Protección frente a código dañino |  |  |
|  | Se han habilitado y configurado una o varias medidas de protección del <br> correo electrónico como Antispam, Antispoofing, Antiphishing y <br> Antimalware. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |


![Imagen 1 - Página 96](CCN-STIC 885A_assets\pagina96_img1.png)

![Imagen 2 - Página 96](CCN-STIC 885A_assets\pagina96_img2.png)

![Imagen 3 - Página 96](CCN-STIC 885A_assets\pagina96_img3.png)

![Imagen 4 - Página 96](CCN-STIC 885A_assets\pagina96_img4.png)

![Imagen 5 - Página 96](CCN-STIC 885A_assets\pagina96_img5.png)

---

<!-- Página 97 de 102 -->

CCN-STIC-885A Guía de configuración segura para Office 365
op.exp.6 Protección frente a código dañino
Se comprueba periódicamente la detección de amenazas en tiempo real, Aplica: Cumple:
accesible desde el Centro de Seguridad de Office 365, y se genera el informe
pertinente. Si No Si No
* Si la organización dispone de las licencias correspondientes.
Evidencias Recogidas: Observaciones:
Si No
op.exp.7 Gestión de incidentes
Se ha revisado el panel de incidentes y han aplicado las medidas necesarias Aplica: Cumple:
para corregirlas.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
op.exp.8 Registro de la actividad
Se ha comprobado que el registro de Auditoría está activado y capturando Aplica: Cumple:
eventos.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Centro Criptológico Nacional 97

| op.exp.6 | Protección frente a código dañino |  |  |
| --- | --- | --- | --- |
|  | Se comprueba periódicamente la detección de amenazas en tiempo real, <br> accesible desde el Centro de Seguridad de Office 365, y se genera el informe <br> pertinente. <br> * Si la organización dispone de las licencias correspondientes. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| op.exp.7 | Gestión de incidentes |  |  |
|  | Se ha revisado el panel de incidentes y han aplicado las medidas necesarias <br> para corregirlas. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| op.exp.8 | Registro de la actividad |  |  |
|  | Se ha comprobado que el registro de Auditoría está activado y capturando <br> eventos. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |


![Imagen 1 - Página 97](CCN-STIC 885A_assets\pagina97_img1.png)

![Imagen 2 - Página 97](CCN-STIC 885A_assets\pagina97_img2.png)

![Imagen 3 - Página 97](CCN-STIC 885A_assets\pagina97_img3.png)

![Imagen 4 - Página 97](CCN-STIC 885A_assets\pagina97_img4.png)

![Imagen 5 - Página 97](CCN-STIC 885A_assets\pagina97_img5.png)

---

<!-- Página 98 de 102 -->

CCN-STIC-885A Guía de configuración segura para Office 365
op.exp.8 Registro de la actividad
Se ha securizado la consulta del registro de actividad mediante el Aplica: Cumple:
establecimiento de los roles adecuados.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
op.mon Monitorización del sistema
Se han configurado alertas en el Centro de Seguridad de Office 365. Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Centro Criptológico Nacional 98

| op.exp.8 | Registro de la actividad |  |  |
| --- | --- | --- | --- |
|  | Se ha securizado la consulta del registro de actividad mediante el <br> establecimiento de los roles adecuados. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| op.mon | Monitorización del sistema |  |  |
|  | Se han configurado alertas en el Centro de Seguridad de Office 365. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |


![Imagen 1 - Página 98](CCN-STIC 885A_assets\pagina98_img1.png)

![Imagen 2 - Página 98](CCN-STIC 885A_assets\pagina98_img2.png)

![Imagen 3 - Página 98](CCN-STIC 885A_assets\pagina98_img3.png)

![Imagen 4 - Página 98](CCN-STIC 885A_assets\pagina98_img4.png)

![Imagen 5 - Página 98](CCN-STIC 885A_assets\pagina98_img5.png)

---

<!-- Página 99 de 102 -->

CCN-STIC-885A Guía de configuración segura para Office 365
mp Medidas de Protección
mp.info Protección de la información
mp.info.2 Calificación de la información
Se han aplicado políticas de retención. Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
mp.info.2 Calificación de la información
Se han aplicado políticas de DLPs. Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
mp.info.2 Calificación de la información
Se han aplicado sensitivity labels. Aplica: Cumple:
Si No Si No
Centro Criptológico Nacional 99

| mp | Medidas de Protección |  |  |
| --- | --- | --- | --- |
| mp.info | Protección de la información |  |  |
| mp.info.2 | Calificación de la información |  |  |
|  | Se han aplicado políticas de retención. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| mp.info.2 | Calificación de la información |  |  |
|  | Se han aplicado políticas de DLPs. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| mp.info.2 | Calificación de la información |  |  |
|  | Se han aplicado sensitivity labels. | Aplica: <br> Si No | Cumple: <br> Si No |


![Imagen 1 - Página 99](CCN-STIC 885A_assets\pagina99_img1.png)

![Imagen 2 - Página 99](CCN-STIC 885A_assets\pagina99_img2.png)

![Imagen 3 - Página 99](CCN-STIC 885A_assets\pagina99_img3.png)

![Imagen 4 - Página 99](CCN-STIC 885A_assets\pagina99_img4.png)

![Imagen 5 - Página 99](CCN-STIC 885A_assets\pagina99_img5.png)

---

<!-- Página 100 de 102 -->

CCN-STIC-885A Guía de configuración segura para Office 365
Evidencias Recogidas: Observaciones:
Si No
mp.info.5 Limpieza de documentos
Se ha eliminado información personal y en general cualquier metadato que Aplica: Cumple:
pudiera estar asociado a los documentos.
*Mediante la herramienta Inspector de documentos (característica que se Si No Si No
accede desde las propias aplicaciones de Word, Excel, PowerPoint o Visio) o
aplicaciones de terceros. Evidencias Recogidas: Observaciones:
Si No
mp.info.6 Copias de seguridad
Se dispone de planes específicos de copias de seguridad de la información en Aplica: Cumple:
aquellos servicios en donde se admita.
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
mp.s Protección de los servicios
mp.s.8 Protección frente a denegación de servicio
Se ha tenido en cuenta la información detallada en la guía [CCN-STIC-884A - Aplica: Cumple:
Guía de configuración segura para Azure] sobre el sistema de defensa DDoS
de Azure. Si No Si No
Centro Criptológico Nacional 100

|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| --- | --- | --- | --- |
| mp.info.5 | Limpieza de documentos |  |  |
|  | Se ha eliminado información personal y en general cualquier metadato que <br> pudiera estar asociado a los documentos. <br> *Mediante la herramienta Inspector de documentos (característica que se <br> accede desde las propias aplicaciones de Word, Excel, PowerPoint o Visio) o <br> aplicaciones de terceros. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| mp.info.6 | Copias de seguridad |  |  |
|  | Se dispone de planes específicos de copias de seguridad de la información en <br> aquellos servicios en donde se admita. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| mp.s | Protección de los servicios |  |  |
| mp.s.8 | Protección frente a denegación de servicio |  |  |
|  | Se ha tenido en cuenta la información detallada en la guía [CCN-STIC-884A - <br> Guía de configuración segura para Azure] sobre el sistema de defensa DDoS <br> de Azure. | Aplica: <br> Si No | Cumple: <br> Si No |


![Imagen 1 - Página 100](CCN-STIC 885A_assets\pagina100_img1.png)

![Imagen 2 - Página 100](CCN-STIC 885A_assets\pagina100_img2.png)

![Imagen 3 - Página 100](CCN-STIC 885A_assets\pagina100_img3.png)

![Imagen 4 - Página 100](CCN-STIC 885A_assets\pagina100_img4.png)

![Imagen 5 - Página 100](CCN-STIC 885A_assets\pagina100_img5.png)

---

<!-- Página 101 de 102 -->

CCN-STIC-885A Guía de configuración segura para Office 365
Evidencias Recogidas: Observaciones:
Si No
Servicios y complementos
Se ha controlado los servicios y complementos disponibles para los usuarios. Aplica: Cumple:
Si No Si No
Evidencias Recogidas: Observaciones:
Si No
Centro Criptológico Nacional 101

|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |
| --- | --- | --- | --- |
|  | Servicios y complementos |  |  |
|  | Se ha controlado los servicios y complementos disponibles para los usuarios. | Aplica: <br> Si No | Cumple: <br> Si No |
|  |  | Evidencias Recogidas: <br> Si No | Observaciones: |


![Imagen 1 - Página 101](CCN-STIC 885A_assets\pagina101_img1.png)

![Imagen 2 - Página 101](CCN-STIC 885A_assets\pagina101_img2.png)

![Imagen 3 - Página 101](CCN-STIC 885A_assets\pagina101_img3.png)

![Imagen 4 - Página 101](CCN-STIC 885A_assets\pagina101_img4.png)

![Imagen 5 - Página 101](CCN-STIC 885A_assets\pagina101_img5.png)

---

<!-- Página 102 de 102 -->

CCN-STIC-885A Guía de configuración segura para Office 365
Centro Crip tológico Nacional 102

![Imagen 1 - Página 102](CCN-STIC 885A_assets\pagina102_img1.png)

![Imagen 2 - Página 102](CCN-STIC 885A_assets\pagina102_img2.png)

![Imagen 3 - Página 102](CCN-STIC 885A_assets\pagina102_img3.png)

![Imagen 4 - Página 102](CCN-STIC 885A_assets\pagina102_img4.png)

![Imagen 5 - Página 102](CCN-STIC 885A_assets\pagina102_img5.png)

![Imagen 6 - Página 102](CCN-STIC 885A_assets\pagina102_img6.png)

![Imagen 7 - Página 102](CCN-STIC 885A_assets\pagina102_img7.png)