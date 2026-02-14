---
**Author:** CCN
**CreationDate:** D:20230710132927+02'00'
**ModDate:** D:20230710132927+02'00'
---

<!-- Página 1 de 38 -->

Guía de Seguridad de las TIC
CCN-STIC-812
GUÍA DE SEGURIDAD EN ENTORNOS Y
APLICACIONES WEB
JUNIO 2023

![Imagen 1 - Página 1](812-Entornos_y_aplicaciones_web_assets\pagina1_img1.png)

![Imagen 2 - Página 1](812-Entornos_y_aplicaciones_web_assets\pagina1_img2.jpeg)

![Imagen 3 - Página 1](812-Entornos_y_aplicaciones_web_assets\pagina1_img3.jpeg)

---

<!-- Página 2 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
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
Edita: .
e
g
a
p
Pº de la Castellana 109, 28046 Madrid
c
 Centro Criptológico Nacional, 2023
Fecha de Edición: junio de 2023
NIPO: 083-23-153-0
LIMITACIÓN DE RESPONSABILIDAD
El presente documento se proporciona de acuerdo con los términos en él recogidos, rechazando expresamente
cualquier tipo de garantía implícita que se pueda encontrar relacionada. En ningún caso, el Centro Criptológico
Nacional puede ser considerado responsable del daño directo, indirecto, fortuito o extraordinario derivado de
la utilización de la información y software que se indican incluso cuando se advierta de tal posibilidad.
AVISO LEGAL
Quedan rigurosamente prohibidas, sin la autorización escrita del Centro Criptológico Nacional, bajo las
sanciones establecidas en las leyes, la reproducción parcial o total de este documento por cualquier medio o
procedimiento, comprendidos la reprografía y el tratamiento informático, y la distribución de ejemplares del
mismo mediante alquiler o préstamo públicos.
Centro Criptológico Nacional 2

![Imagen 1 - Página 2](812-Entornos_y_aplicaciones_web_assets\pagina2_img1.jpeg)

![Imagen 2 - Página 2](812-Entornos_y_aplicaciones_web_assets\pagina2_img2.jpeg)

![Imagen 3 - Página 2](812-Entornos_y_aplicaciones_web_assets\pagina2_img3.png)

---

<!-- Página 3 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
ÍNDICE
1. INTRODUCCIÓN ............................................................................................................ 4
2. OBJETO ........................................................................................................................ 4
3. ALCANCE ...................................................................................................................... 5
4. SEGURIDAD DE ENTORNOS Y APLICACIONES WEB ......................................................... 5
4.1 RIESGOS Y AMENAZAS DE SEGURIDAD EN ENTORNOS WEB ........................................... 5
4.2 INCIDENTES DE SEGURIDAD EN ENTORNOS WEB ............................................................ 6
4.3 VULNERABILIDADES DE SEGURIDAD EN ENTORNOS WEB ............................................... 7
4.4 ESTRATEGIA Y METODOLOGÍA DE SEGURIDAD DE APLICACIONES WEB ......................... 8
4.5 ARQUITECTURAS DE SEGURIDAD EN ENTORNOS WEB .................................................. 10
4.6 DESARROLLO SEGURO DEL SOFTWARE DE APLICACIONES WEB .................................... 12
4.6.1 RECOMENDACIONES GENERALES ............................................................................ 13
4.6.2 FILTRADO DE DATOS DE ENTRADA DEL USUARIO ................................................... 13
4.6.3 MENSAJES DE ERROR Y OTROS CONTENIDOS ......................................................... 16
4.6.4 AUTENTIFICACIÓN Y GESTIÓN DE SESIONES ........................................................... 16
4.6.5 CSRF ......................................................................................................................... 17
4.6.6 GESTIÓN DE LOGS .................................................................................................... 17
4.7 ANÁLISIS DE SEGURIDAD DE APLICACIONES WEB .......................................................... 18
4.7.1 METODOLOGÍA DE ANALISIS DE CAJA NEGRA ......................................................... 18
4.7.2 METODOLOGÍA DE ANALISIS DE CAJA BLANCA ....................................................... 19
5. ESPECIFICACIÓN DE REQUISITOS DE AUDITORÍAS DE SEGURIDAD DE ENTORNOS WEB . 20
5.1 ÁMBITO DE LA AUDITORÍA DE SEGURIDAD .................................................................... 21
5.2 RECONOCIMIENTO .......................................................................................................... 21
5.2.1 INFORMACIÓN DE REGISTRO DE DOMINIOS (DNS) Y DIRECCIONES ....................... 21
5.2.2 SERVICIOS DE BÚSQUEDAS EN INTERNET ............................................................... 22
5.2.3 UBICACIÓN EN LA RED ............................................................................................. 22
5.3 ESCANEO ......................................................................................................................... 22
5.3.1 SERVICIOS WEB ........................................................................................................ 23
5.3.2 CONTENIDOS WEB ................................................................................................... 23
5.4 ANÁLISIS DE VULNERABILIDADES ................................................................................... 24
5.4.1 VULNERABILIDADES DE APLICACIONES WEB .......................................................... 24
5.4.2 PRUEBAS DE CARGA Y DENEGACIÓN DE SERVICIO (DOS) ....................................... 25
REFERENCIAS PRINCIPALES ...................................................................... 27
LISTA DE COMPROBACIÓN Y REQUISITOS ................................................. 28
GLOSARIO DE TÉRMINOS Y ABREVIATURAS.............................................. 34
REFERENCIAS ........................................................................................... 36
Centro Criptológico Nacional 3

![Imagen 1 - Página 3](812-Entornos_y_aplicaciones_web_assets\pagina3_img1.png)

![Imagen 2 - Página 3](812-Entornos_y_aplicaciones_web_assets\pagina3_img2.png)

![Imagen 3 - Página 3](812-Entornos_y_aplicaciones_web_assets\pagina3_img3.png)

![Imagen 4 - Página 3](812-Entornos_y_aplicaciones_web_assets\pagina3_img4.png)

---

<!-- Página 4 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
1. INTRODUCCIÓN
Dada la criticidad tanto de los entornos de producción como de los dispositivos embebidos, se
hace necesario establecer una metodología que permita evaluar y reforzar la seguridad de los
entornos y aplicaciones Web asociados a éstos.
Desde el punto de vista de la seguridad, todos los elementos que conforman el entorno o
aplicación Web descritos en el punto previo deben ser tenidos en cuenta a la hora de evaluar y
diseñar los mecanismos de protección.
El presente documento establece unas pautas de carácter general enfocadas a las características
propias de las aplicaciones y servicios web para establecer una política de seguridad en dichos
sistemas teniendo en cuenta los requerimientos establecidos en el Real Decreto 311/2022, de 3
de mayo, por el que se regula el Esquema Nacional de Seguridad. Se espera que cada
organización las particularice para adaptarlas a su entorno singular.
2. OBJETO
Actuar como guía de referencia en la identificación y el análisis de los requisitos de seguridad
asociados a las aplicaciones y entornos Web en el ámbito del Esquema Nacional de Seguridad,
con el objetivo de reducir las posibles amenazas de seguridad asociadas a estos entornos y
aplicaciones durante su diseño y antes de su paso a producción.
Existen dos procedimientos para mejorar la seguridad de las aplicaciones y entornos Web:
a) Durante el proceso de diseño y desarrollo de la aplicación, estableciendo unos requisitos y
verificaciones de seguridad que debe cumplir toda aplicación Web.
b) Posteriormente, tras la puesta en producción, realizando el análisis de la aplicación Web
mediante auditorías de seguridad, análisis de vulnerabilidades y pruebas de intrusión.
El objetivo del presente documento es proporcionar la información necesaria para la aplicación
de ambos procedimientos, incluyendo una lista de recomendaciones que deberían ser aplicadas
durante las fases de diseño, desarrollo y auditoría de la aplicación Web, dependiendo de la
categoría del sistema.
Adicionalmente, la presente guía define los requisitos necesarios para la realización de auditorías
de entornos Web por terceros, con el objetivo de obtener unos resultados que sean un reflejo
completo de la seguridad de los servicios Web prestados, los resultados sean relevantes desde el
punto de vista práctico, y la información obtenida se trate con la reserva oportuna.
Adicionalmente a la información contenida en la presente guía, en el proceso de contratación de
una aplicación Web a un tercero, es necesario fijar una serie de requisitos, dentro de los cuales
se encuentran los de seguridad. Esta guía pretende ofrecer recomendaciones para el
establecimiento y elaboración detallada de esos requisitos mínimos, y se complementa con la
guía de OWASP centrada en los contenidos propios de un contrato de estas características, y
denominada Secure Software Contract Annex [Ref.- 15].
Centro Criptológico Nacional 4

---

<!-- Página 5 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
3. ALCANCE
Dar cumplimiento con lo establecido por el Real Decreto 311/2022, de 3 de mayo, por el que se
regula el Esquema Nacional de Seguridad, y más específicamente en lo relativo a las medidas de
protección como son; Protección de servicios y aplicaciones web [mp.s.2], Protección frente a
denegación de servicio [mp.s.4], y Desarrollo de aplicaciones [mp.sw.1] entre otras.
4. SEGURIDAD DE ENTORNOS Y APLICACIONES WEB
4.1 RIESGOS Y AMENAZAS DE SEGURIDAD EN ENTORNOS WEB
La seguridad en el proceso de diseño y desarrollo de una aplicación Web debe abordar
principalmente dos elementos:
a) El entorno de desarrollo Web, en el que se deberá disponer de la última versión que
soluciona vulnerabilidades de seguridad previas y conocidas.
b) La aplicación Web propietaria, código propio, basada en el lenguaje de programación
empleado.
Las grandes amenazas de seguridad de las aplicaciones Web están asociadas a las siguientes
características intrínsecas a este tipo de entornos:
a) Las aplicaciones Web en Internet están públicamente disponibles.
b) La ubicuidad de las aplicaciones Web es muy elevada, ya que están disponibles en
prácticamente cualquier entorno de computación.
c) Las aplicaciones Web estándar utilizan el puerto TCP/80 (HTTP) y las que emplean cifrado
mediante SSL (Secure Socker Layer) o TLS (Transport Layer Security) emplean el puerto
TCP/443 (HTTPS). Por tanto, los firewalls tradicionales de manera general deben dejar
pasar el tráfico hacia estos puertos, y son de poca utilidad en el filtrado de ataques directos
sobre la aplicación Web.
d) HTTP es un protocolo complejo que permite recibir datos del usuario (en la URL mediante
el método GET, en el cuerpo de la petición mediante el método POST, mediante métodos
HTTP más avanzados, a través de cookies, mediante cabeceras HTTP, etc.) para su
procesamiento.
e) Las técnicas y herramientas de ataque necesarias para explotar vulnerabilidades en los
entornos Web son muy sencillas, siendo en algunos casos más que suficiente el uso
exclusivo de un navegador Web estándar.
f) Los ataques desde Internet sobre las aplicaciones Web disponibles públicamente conllevan
un anonimato muy elevado por parte del atacante. Este anonimato se incrementa
notablemente cuando el atacante emplea dispositivos intermedios (proxies anónimos)
para ocultar su origen real.
g) La mayoría de aplicaciones Web tienen carácter propietario y han sido desarrolladas
internamente o mediante la solicitud de este servicio a una tercera compañía. Por estos
motivos, es muy probable que la aplicación no haya pasado los controles y verificaciones
de seguridad pertinentes para detectar posibles vulnerabilidades de seguridad.
Centro Criptológico Nacional 5

---

<!-- Página 6 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
h) Las capacidades de autentificación y mantenimiento de sesiones en HTTP son muy
limitadas, motivo por el que es necesario mediante software proporcionar un sistema de
autentificación y de gestión de sesiones robusto. El desarrollo de este sistema puede
introducir nuevas vulnerabilidades de seguridad dada su complejidad.
Adicionalmente a los diferentes elementos que forman parte de una arquitectura Web, existen
otros elementos que son potenciales objetivos para los atacantes, tales como el tráfico Web
intercambiado entre clientes y servidores, y la posibilidad de realizar ataques de denegación de
servicio (DoS), afectando la disponibilidad del entorno.
Las vulnerabilidades de seguridad más comunes y relevantes en aplicaciones Web en los últimos
años son:
a) Implementaciones inseguras de los mecanismos de control de acceso
b) Configuraciones inseguras a nivel de criptografía
c) XSS, Cross-Site Scripting
d) CSRF, Cross-Site Request Forgery
e) Inyección SQL
f) Otros ataques de inyección, sobre XPath (el lenguaje de consulta de información en
repositorios de XML) y LDAP (servicio de directorio)
g) Publicación de información sensible
h) HTTP Response Splitting
i) Path traversal
Cada una de estas vulnerabilidades y sus ataques asociados se describe en detalle
posteriormente en esta guía.
4.2 INCIDENTES DE SEGURIDAD EN ENTORNOS WEB
Diariamente se producen numerosos incidentes de seguridad sobre entornos y aplicaciones Web.
Los incidentes de mayor relevancia son publicados mediante la OWASP WHID, Web Hacking
Incidents Database, de WASC [Ref- 2].
Esta base de datos recoge los detalles sobre incidentes y ataques reales sobre entornos y
aplicaciones Web, e identifica cada uno de ellos de forma unívoca con un código que refleja el
año en el que se produjo el incidente, y el número de incidente dentro de ese año, como por
ejemplo, “WHID 2007-82”.
Se recomienda su consulta para disponer de una visión real y actualizada sobre los ataques e
incidentes de seguridad que se están llevando a cabo en entornos Web.
Existen referencias similares como, The Daily Swig [Ref.- 12], dónde se publican frecuentemente
incidentes asociados únicamente a vulnerabilidades de XSS, Cross- Site Scripting, en entornos y
aplicaciones Web reales.
Uno de los objetivos fundamentales de todo responsable de seguridad de un entorno Web debe
ser el evitar aparecer en estas bases de datos de incidentes, dónde se reflejaría el entorno Web
o dominio bajo su responsabilidad como vulnerable.
Centro Criptológico Nacional 6

---

<!-- Página 7 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
En los últimos años los incidentes de seguridad sobre aplicaciones Web tienen una relación
directa con la distribución de software malicioso (malware) y la creación de complejas
infraestructuras para la realización de ataques en Internet, como botnets [Ref.- 3].
En el caso de identificar un incidente de seguridad en un entorno Web, uno de los recursos de
mayor relevancia es el CCN-CERT. Según el artículo 33 del RD 311/2022, el Centro Criptológico
Nacional (CCN) articulará la respuesta a los incidentes de seguridad en torno a la estructura
denominada CCN-CERT (Centro Criptológico Nacional-Computer Emergency Reaction Team), que
actuará sin perjuicio de las capacidades de respuesta a incidentes de seguridad que pueda tener
cada administración pública y de la función de coordinación a nivel nacional e internacional del
CCN.
La finalidad principal del CCN-CERT es contribuir a la mejora del nivel de seguridad de los sistemas
de información en las administraciones públicas de España. La comunidad a la que presta servicio
el CCN-CERT está constituida por el conjunto de organismos de la Administración: Administración
General, Autonómica y Local.
El registro en el portal del CCN-CERT [Ref.- 1], permite disponer de acceso a los múltiples recursos
de seguridad publicados, así como a las directrices para reportar incidentes al CCN-CERT.
Es recomendable disponer de una serie de pautas para la implantación de una capacidad de
respuesta ante incidentes informáticos, definiendo procedimientos de actuación e identificando
responsabilidades para resolver en el menor tiempo posible y del modo más efectivo el incidente.
Para cumplir con este objetivo se recomienda la lectura de las siguientes guías CCN:
a) CCN-STIC-810 Creación de CERT’s [Ref.- 6]
b) CCN-STIC-817 Esquema Nacional de Seguridad. Gestión de Ciberincidentes [Ref.- 7]
4.3 VULNERABILIDADES DE SEGURIDAD EN ENTORNOS WEB
Desde el punto de vista de las vulnerabilidades de seguridad, diariamente se publican numerosos
fallos de seguridad en productos y aplicaciones Web.
Se recomienda consultar de forma periódica las bases de datos de vulnerabilidades para estar al
día sobre los últimos ataques, incidentes y vulnerabilidades sobre entornos Web y su impacto.
Las fuentes recomendadas con información detallada respecto a vulnerabilidades de seguridad
son CCN-CERT [Ref.- 1], OWASP [Ref.- 4] y SANS [Ref.- 5].
Las vulnerabilidades Web más relevantes son:
a) Cross-Site Scripting (XSS): la aplicación Web envía los datos proporcionados por el usuario
al navegador Web sin realizar ninguna validación o codificación del contenido. Este ataque
permite a un atacante ejecutar código (scripts) en el navegador de la víctima: robo de
sesiones, modificación de los contenidos de la Web y su configuración.
b) Ataques de inyección: los datos proporcionados por el usuario se envían a un intérprete
como parte de un comando o consulta. El ejemplo más conocido es la inyección SQL en
bases de datos. El atacante puede ejecutar código dañino y modificar datos a través del
intérprete atacado: SQL, XPath, LDAP, etc.
Centro Criptológico Nacional 7

---

<!-- Página 8 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
c) Ejecución de ficheros y código malicioso: el código vulnerable a la inclusión de ficheros
remotos (o código remoto), Remote File Inclusion (RFI), permite a un atacante incluir
código y datos dañinos en la aplicación Web. El resultado permite tener control completo
del servidor Web. Este ataque afecta a cualquier entorno de desarrollo (eg. PHP) que
acepte ficheros o nombres de ficheros de los usuarios.
d) Referencias directas a objetos inseguras: una referencia directa a un objeto ocurre si el
desarrollador expone un objeto interno de la implementación (fichero, directorio, registro
de la BD, clave…) en forma de URL o de parámetro de un formulario. Un atacante puede
manipular estas referencias para acceder a otros objetos sin autorización.
e) Cross Site Request Forgery (CSRF): los ataques CSRF fuerzan al navegador de la víctima a
enviar peticiones pre-autenticadas a una aplicación Web vulnerable. La petición obliga al
navegador de la víctima a realizar acciones hostiles no deseadas en beneficio del atacante
sobre una sesión previamente establecida. Los límites de este ataque están en el tipo de
aplicación Web atacada.
f) Filtrado de información y gestión incorrecta de errores: las aplicaciones Web pueden
revelar información sobre su configuración, detalles internos de implementación o violar
la privacidad de los datos, de forma no intencionada. El atacante emplea esta debilidad
para obtener información sensible o realizar ataques más avanzados.
g) Autentificación y gestión de sesiones: las credenciales de acceso y los tokens (o
identificadores) de sesión no son protegidos adecuadamente. Un atacante puede
comprometer claves, secretos e identificadores de autentificación y robar la identidad de
otros usuarios.
h) Almacenamiento criptográfico inseguro: la aplicación Web no utiliza funciones
criptográficas adecuadamente para proteger los datos y las credenciales empleadas. Un
atacante puede usar los datos no protegidos para robar la identidad de otros usuarios y
realizar otros ataques, como fraude con tarjetas de crédito.
i) Comunicaciones inseguras: la aplicación Web no cifra el tráfico de red correctamente
cuando es necesario proteger datos y comunicaciones sensibles.
j) Fallo al restringir el acceso a URLs: la aplicación Web sólo protege la funcionalidad sensible
no mostrando enlaces o URLs a usuarios no autorizados. Un atacante puede usar esta
debilidad para acceder directamente de forma no autorizada a esas URLs.
4.4 ESTRATEGIA Y METODOLOGÍA DE SEGURIDAD DE APLICACIONES WEB
La estrategia y metodología de seguridad de aplicaciones Web está formada por numerosos
componentes que se complementan entre sí. Este apartado detalla los aspectos fundamentales
a considerar para el diseño, desarrollo, mantenimiento y evaluación de la seguridad en entornos
Web.
Los elementos de seguridad principales de un entorno o aplicación Web deben incluir:
a) Formación en seguridad de aplicaciones Web
b) Arquitectura e infraestructura (sistemas y redes) segura
c) Metodología de seguridad de desarrollo de aplicaciones Web
d) Metodología de análisis de seguridad de aplicaciones Web
Centro Criptológico Nacional 8

---

<!-- Página 9 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
La estrategia y metodología de seguridad debe incluir adicionalmente los siguientes
componentes:
a) Formación en seguridad
b) Instalación y configuración segura de sistemas y redes (arquitectura)
– Actualizaciones: servidor Web y de aplicación, framework, etc
c) Desarrollo de software seguro
– Gestión de versiones y actualizaciones
d) Web Application Firewalls (WAF)
e) Auditorías de seguridad
– Caja negra: pruebas de intrusión y Web Application Security Scanners (WASS)
– Caja blanca: revisión de código manual y automático
f) Respuesta ante incidentes
Para alcanzar un nivel de seguridad adecuado en el entorno o aplicación Web es necesario
involucrar tanto a administradores como a desarrolladores. No es posible proporcionar un
entorno Web seguro sin la colaboración de ambos grupos.
La formación de seguridad debe centrarse en proporcionar un conocimiento adecuado a
administradores y desarrolladores respecto a las vulnerabilidades y amenazas de seguridad en
entornos Web, los diferentes tipos de ataques existentes y los mecanismos de defensa asociados,
preferiblemente mediante ejemplos prácticos. El objetivo es disponer del conocimiento para
construir una infraestructura y aplicación Web más seguros.
Ilustración 1. Estrategia y metodología de seguridad de aplicaciones web
Nota: dentro de las diferentes fases de la estrategia de seguridad de aplicaciones Web, algunas tareas
están más asociadas a los administradores (A) y otras a los desarrolladores (D). Los círculos de la figura
que contienen las letras A y D denotan el grupo principal al que se asocia cada tarea.
Centro Criptológico Nacional 9

| Nota: dentro de las diferentes fases de la estrategia de seguridad de aplicaciones Web, algunas tareas |
| --- |
| están más asociadas a los administradores (A) y otras a los desarrolladores (D). Los círculos de la figura |
| que contienen las letras A y D denotan el grupo principal al que se asocia cada tarea. |


![Imagen 1 - Página 9](812-Entornos_y_aplicaciones_web_assets\pagina9_img1.png)

---

<!-- Página 10 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
Entre otros, los servidores Web de una organización puede incluir:
a) Servidor Web corporativo principal y públicamente disponible en Internet
b) Servidores Web para terceros (socios, proveedores, clientes, etc.) públicamente
disponibles en Internet o desde Extranet
c) Los numerosos servidores Web internos, accesibles sólo desde la red interna de la
compañía o Intranet
d) Servidores Web de aplicaciones comerciales: Citrix, SharePoint, VNC, etc.
e) Servidores Web de administración y revisión de logs
f) Servidores Web de los dispositivos embebidos
4.5 ARQUITECTURAS DE SEGURIDAD EN ENTORNOS WEB
Existen fundamentalmente dos modelos de arquitectura de aplicaciones Web:
a) En dos capas: donde el servidor Web y de aplicación conviven en el mismo sistema.
b) En tres capas: donde cada elemento (servidor Web, servidor de aplicación y servidor de
base de datos) corresponde a un sistema independiente.
Desde el punto de vista de la seguridad, el modelo en tres capas es preferible ya que ofrece
separación entre los distintos componentes y un mayor aislamiento frente a incidentes de
seguridad en cualquiera de los elementos.
Adicionalmente, la arquitectura de tres capas, aunque más compleja, ofrece:
a) Mayor escalabilidad para poder gestionar un mayor número de peticiones y usuarios de la
aplicación.
b) La posibilidad de introducir controles de acceso avanzados, como filtrado del tráfico, y
elementos avanzados de monitorización, como sistemas de detección de intrusos, entre
cualesquiera elementos de la arquitectura.
c) Permite aplicar una securización más estricta sobre cada uno de los componentes, ya que
cada uno tiene asignada una funcionalidad y tareas claramente definidas.
A la hora de diseñar una aplicación Web es necesario tener en cuenta múltiples factores:
arquitectura, desarrollo de la aplicación y mecanismos de auditoría.
La arquitectura de la aplicación Web debe disponer de mecanismos de detección y protección a
nivel de red, incluyendo elementos de seguridad tradicionales como cortafuegos o sistemas de
detección de intrusos.
Se recomienda seguir las pautas reflejadas en la siguiente guía CCN para cortafuegos de
seguridad perimetral: CCN-STIC-408 Seguridad Perimetral – Cortafuegos [Ref.- 9]
Uno de los elementos principales empleados en la protección de entornos y aplicaciones Web
son los cortafuegos (firewalls) de aplicaciones Web, también conocidos como WAF, Web
Application Firewall.
Centro Criptológico Nacional 10

---

<!-- Página 11 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
Es necesario de disponer de dispositivos dedicados exclusivamente a la inspección y filtrado del
tráfico Web, es decir, el protocolo HTTP (o HTTPS), ya que los cortafuegos tradicionales no
disponen de capacidades avanzadas para analizar y bloquear los ataques recibidos a través de
este protocolo.
Los WAF típicamente se sitúan desde el punto de vista de la arquitectura de red delante del
servidor Web, con el objetivo de monitorizar y filtrar todas las peticiones maliciosas recibidas por
la aplicación Web.
En arquitecturas Web de tres capas (servidor Web, servidor de aplicación y base de datos), existe
la posibilidad de emplear WAF dedicados entre cada una de las capas.
Los WAF más conocidos y ampliamente utilizados sin carácter comercial son:
a) mod_security (Apache) [Ref.- 13]
b) URLScan/Lockdown (Microsoft IIS) [Ref.- 14]
Algunos de los WAF más conocidos en el ámbito comercial son AppShield, F5, DenyAll, SecureIIS,
Microsoft ISA, Profense, Cloudflare, Imperva WAF, Forti WAF, Akamai etc.
Entre los criterios de evaluación de WAF más comunes se encuentran:
a) Modo de operación: bridge, router, proxy inverso, plug-in del servidor Web, etc.
b) Gestión de SSL/TLS: terminador, capacidades de descifrado o no puede inspeccionarlo
c) Técnicas de bloqueo de tráfico
d) Tipo de solución (appliance o software)
e) Capacidades de reescritura de peticiones Web
f) Mecanismos de alta disponibilidad y rendimiento de la solución
g) Soporte de otros protocolos distintos a HTTP
h) Soporte de métodos de HTTP y extensiones (como WebDav)
i) Detección de ataques mediante firmas y técnicas de normalización
j) Protección frente a ataques de fuerza bruta, cookies, sesiones, campos HTML ocultos,
parámetros, etc.
k) Logging, notificación de alertas, informes, interfaz de gestión, etc.
En el caso de ser necesario asegurar la confidencialidad de las comunicaciones Web, es necesario
hacer uso de la versión segura del protocolo, HTTPS.
HTTPS utiliza SSL (Secure Socket Layer) o TLS (Transport Layer Security) para cifrar las
comunicaciones entre el navegador Web y el servidor Web. Se recomienda la utilización TLS a
partir de la versión 1.2 y habilitar algoritmos de cifrado robustos.
Adicionalmente a los elementos de seguridad propios de un entorno Web, es necesario proteger
todos los elementos de la infraestructura en la que reside la aplicación Web, tales como
dispositivos de comunicaciones (routers, switches, etc.) o la infraestructura de servidores de
nombres (DNS).
Centro Criptológico Nacional 11

---

<!-- Página 12 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
Las mejores prácticas de seguridad para cada uno de los elementos que conforman el entorno
Web no pueden ser detalladas específicamente en la presente guía con el objetivo de limitar su
alcance. Es recomendable seguir las pautas reflejadas en las siguientes guías CCN para reforzar
la seguridad de todos estos elementos:
a) CCN-STIC-5xx Conjunto de guías de seguridad de Windows [Ref.- 10]
b) CCN-STIC-6xx Conjunto de guías de seguridad de entornos Unix (HP-UX, Solaris, Linux, etc),
base de datos Oracle, equipos de comunicaciones (routers, switches, etc), servidor DNS,
servidor Web Apache y Oracle Application Server (OAS) [Ref.- 11]
Los mecanismos de protección a implementar deben proteger los diferentes equipos frente a:
a) Ataques directos, tales como accesos no autorizados sobre cualquiera de los elementos
que conforman el entorno o aplicación Web.
b) Ataques indirectos, dónde cualquiera de los elementos es empleado como herramienta en
el ataque. Por ejemplo, un ataque sobre los servidores de DNS podría permitir
redireccionar el tráfico de los clientes Web hacia un entorno malicioso que suplante la
aplicación Web real.
c) Ataques de denegación de servicio (DoS). Las arquitecturas Web están basadas en
tecnologías TCP/IP y por tanto son vulnerables a los ataques de DoS comunes en TCP/IP. Es
necesario disponer de contramedidas técnicas y procedimientos de actuación frente a este
tipo de ataques.
Se deberán aplicar los últimos parches de seguridad en cada uno de los elementos software que
forman parte de la plataforma de la aplicación Web: software de los dispositivos de red y
firewalls, sistema operativo de los servidores (Web, aplicación, y base de datos), y software de la
plataforma de desarrollo empleada (PHP, ASP, Java, etc).
Desde el punto de vista de la infraestructura Web, se debe disponer de un análisis detallado del
usuario, grupo, permisos y derechos con los que ejecutarán cada uno de los componentes de la
aplicación Web como, por ejemplo, los procesos del servidor Web o de aplicación. Este análisis
permitirá aplicar todos los mecanismos de autorización necesarios.
Adicionalmente, se debe disponer de un análisis detallado de las credenciales con las que unos
componentes podrán acceder y obtener información de otros componentes. Por ejemplo,
¿cuáles son las credenciales y permisos de acceso del servidor de aplicación a la base de datos?
4.6 DESARROLLO SEGURO DEL SOFTWARE DE APLICACIONES WEB
El elemento fundamental en la metodología de seguridad de desarrollo de software de
aplicaciones Web pasa por incluir todos los aspectos de seguridad en el ciclo de vida de desarrollo
de software (SDLC, Software Development Life Cycle).
Las aplicaciones Web raramente son gestionadas con un sistema exhaustivo de control de
versiones que permita controlar en todo momento cual es la versión existente en producción, tal
y como ocurre con otro tipo de software.
Debido al dinamismo y la demanda de nueva funcionalidad en este tipo de aplicaciones, nuevo
código y contenidos son añadidos a la aplicación Web en tiempo real sin realizar un control
detallado de los cambios.
Centro Criptológico Nacional 12

---

<!-- Página 13 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
4.6.1 RECOMENDACIONES GENERALES
De forma general, se recomienda el uso del método GET de HTTP sólo para la consulta de
información, y el método POST para el intercambio y envío de información por parte de los
clientes Web a la aplicación Web.
Las cabeceras HTTP pueden ser manipuladas fácilmente por un atacante y no deben emplearse
como método de validación o de envío de información.
Todos los mecanismos de interacción entre los distintos componentes del entorno Web (servidor
Web, de aplicación y base de datos) deben realizarse de forma segura. Las comunicaciones entre
estos elementos deberán estar cifradas, autentificadas y asegurarse su integridad.
El almacenamiento de información sensible, tanto propia de la lógica de la aplicación como las
credenciales de acceso, debe de almacenarse cifrada en todos los servidores, y especialmente en
el de base de datos.
4.6.2 FILTRADO DE DATOS DE ENTRADA DEL USUARIO
Es necesario ser consistente en la aplicación de los mecanismos de seguridad, como por ejemplo
el filtrado de datos enviados por el usuario.
Algunos de los ataques Web mencionados, como por ejemplo XSS o inyección SQL, pueden ser
mitigados filtrando los datos maliciosos (código HTML y scripts, o sentencias SQL,
respectivamente) en la entrada de la aplicación, en la salida, o en ambas. Se recomienda,
aplicando criterios de defensa en profundidad, aplicar los mecanismos de filtrado tanto en la
entrada como en la salida.
Los datos de entrada proporcionados por el usuario (o atacante) deben ser considerados dañinos
por naturaleza, por ello es necesaria su verificación y análisis antes de ser procesados por la
aplicación.
Existen dos modelos para el filtrado de datos de entrada:
a) Eliminar los caracteres maliciosos y permitir el resto.
b) Permitir sólo los caracteres válidos para cada entrada en la aplicación.
Desde el punto de vista de la seguridad, el segundo modelo es el más restrictivo y recomendado,
aunque no siempre puede ser aplicado al desconocerse el conjunto total de caracteres válidos.
Se recomienda establecer una única librería de código que contemple toda la funcionalidad
necesaria para filtrar cualquier entrada del usuario. Toda entrada recibida por parte del usuario
debe ser procesada y filtrada por esta librería, independientemente del método empleado:
variables en métodos GET o POST, cookies, cabeceras HTTP (Referer, User-Agent, etc), etc
La disponibilidad de una única librería central permite aplicar de forma homogénea los mismos
mecanismos de filtrado en cualquier parte del código de la aplicación. Para ello sólo hace falta
invocar desde código a la función correspondiente de la librería.
Asimismo, la existencia de una única librería central simplifica el mantenimiento y las
actualizaciones de los mecanismos de filtrado en la totalidad de la aplicación Web.
Centro Criptológico Nacional 13

---

<!-- Página 14 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
Los mecanismos de filtrado de la entrada del usuario permiten mitigar ataques como XSS,
inyección SQL, desplazamiento por directorios, referencias directas a ficheros, ejecución de
comandos del sistema operativo o HTTP Response Splitting. A continuación, se analiza en detalle
las recomendaciones de seguridad en el código de la aplicación para evitar este tipo de ataques.
La librería debería proporcionar funciones para filtrar la entrada del usuario según:
a) El tipo de datos: debería haber funciones sólo para letras, números, caracteres
alfanuméricos, así como otros tipos de datos más concretos como fechas, DNI, números de
teléfono, etc.
b) Funciones de filtrado frente a ataques de XSS:
– Se deben filtrar cualquier contenido recibido por el usuario que tenga validez en el
lenguaje HTML, es decir, etiquetas (o tags HTML) de representación de objetos como,
por ejemplo: <script>, <img>, <a href=…>, <object>, <iframe>, etc.
– Adicionalmente y de manera general si es posible, se recomienda filtrar los caracteres
para la creación de etiquetas HTML, “<” y “>”, y sus múltiples representaciones: &lt;
y &gt;, %60 y %62, &#60; y &#62;, junto a otros caracteres propios de código de
scripts: = “ ’ ( ) ; &.
– Los ataques de XSS no se centran únicamente en la inyección de la etiqueta <script>,
sino que hacen uso de muchos otros elementos para referenciar scripts remotos
mediante etiquetas HTML qué permiten referenciar otras fuentes, “src=” (source).
– Se recomienda filtrar no sólo la entrada del usuario, sino también la salida de la
aplicación, para eliminar aquellos contenidos no deseados de la misma, como por
ejemplo scripts o iframes que referencian sitios Web remotos.
c) Funciones de filtrado frente a ataques de inyección SQL: el filtrado depende en gran
medida del tipo de base de datos empleada.
– Se debe filtrar el envío de caracteres especiales para la base de datos y palabras SQL
reservadas, como comentarios (--, #, /* o */), “;” (fin de consulta SQL), caracteres
comodín (*, %, o _), concatenación (+ o ||), u operadores SQL: OR, TRUE, 1=1, SELECT,
JOIN, UPDATE, INNER, INSERT, PRINT, waitfor delay “xx”, etc.
– Adicionalmente es necesario filtrar todas las representaciones de los caracteres
especiales. Por ejemplo, la “‘” es igual a %27 o el “=” es %3D. Asimismo, deben
traducirse las funciones propias de la base de datos, como la función CHAR(). Por
ejemplo, CHAR(77) es igual al carácter ‘M’ (valor ASCII decimal: 77).
– Criterios de filtrado similares deben aplicarse a la inyección de comandos en otros
lenguajes de consulta, como por ejemplo LDAP, con sus operadores asociados: AND
(&), OR (|), NOT (!), <=, >=, = y ~= y el carácter comodín (*).
– Otro de los lenguajes de consulta comúnmente empleados en la actualidad en
servicios Web es XPath, que permite la consulta de repositorios de datos en XML.
– Una de las técnicas recomendadas para evitar la inyección SQL es la utilización de
procedimientos almacenados, donde la entrada del usuario se convierte en
parámetros específicos del procedimiento. Deben filtrarse los parámetros
correctamente y no emplear SQL dinámico en el procedimiento almacenado para
evitar ataques de inyección.
Centro Criptológico Nacional 14

---

<!-- Página 15 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
d) Funciones de filtrado frente al desplazamiento por directorios:
– Se deben filtrar referencias relativas a los directorios padre, como “..” y todas sus
representaciones (Unicode: %c0%af, %c1%9c, %255c, etc.), o referencias absolutas a
directorios mediante “/” o “\”.
– Ejemplo de funciones vulnerables: fopen() en PHP.
e) Funciones de filtrado frente a referencias directas a ficheros (locales o remotas):
– Debe limitarse el acceso a ficheros o recursos en URLs (es decir, remotos) como si
fueran ficheros o recursos locales.
– Ejemplo de funciones vulnerables: include() en PHP.
f) Funciones de filtrado frente a ejecución de comandos del sistema operativo:
– Debe limitarse el envío de caracteres especiales para el sistema operativo, como por
ejemplo “;”, “>”, “<”, “|”, etc.
– Ejemplo de funciones vulnerables: exec(), shell_exec(), system(), o passthru() en PHP.
g) Funciones de filtrado frente a HTTP Response Splitting:
– Se deben filtrar los caracteres de fin de línea que podrían permitir añadir cabeceras
HTTP adicionales o inyectar datos en la cabecera, tales como “\r”, “\n” o ambas:
 \r: CR – carriage return
 \n: LF – line feed
h) Una opción común a cualquier función de filtrado en el caso de no disponer de funciones
asociadas en el lenguaje o entorno de desarrollo empleados es aplicar filtros mediante
expresiones regulares.
i) Adicionalmente debe realizarse el filtrado de los datos de entrada frente a ataques más
tradicionales, como por ejemplo desbordamientos de buffer. Para ello es necesario fijar y
comprobar la longitud de los datos de entrada.
El filtrado de los datos de entrada del usuario se debería realizar tanto en el cliente como en el
servidor, de nuevo, aplicando criterios de defensa en profundidad. En caso de ser necesario un
único nivel de validación, por ejemplo, por motivos de rendimiento, este siempre se llevará a
cabo en el servidor, ya que la validación en el cliente puede ser fácilmente manipulada por parte
del atacante.
Dado que es posible representar los datos de entrada a las aplicaciones Web de múltiples formas,
como por ejemplo ASCII, codificación de la URL en hexadecimal (mediante el código %XX del
carácter a representar), en Unicode, etc., existen ataques que pretenden evadir los filtros
empleando diferentes técnicas de codificación. Por ejemplo, la herramienta “nikto” implementa
múltiples técnicas de evasión de sistemas de detección de intrusos en el tráfico Web que genera.
Previo a la verificación y filtrado de los datos de usuario, se recomienda realizar una
normalización de los mismos, en ese orden: primero se debe normalizar y posteriormente filtrar.
El objetivo de la normalización es convertir los datos en un lenguaje común, en concreto, el
empleado por los filtros, independientemente de cómo los haya codificado el usuario o atacante.
Centro Criptológico Nacional 15

---

<!-- Página 16 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
4.6.3 MENSAJES DE ERROR Y OTROS CONTENIDOS
El entorno Web debe considerar una gestión de errores adecuada, minimizando la cantidad de
información que se proporciona al usuario o atacante.
La información contenida en los errores puede ser empleada durante el reconocimiento del
entorno, y proporcionar información del software y las versiones empleadas, información del
sistema de ficheros y detalles de dónde se encuentran ubicados los recursos empleados por la
aplicación Web. Adicionalmente puede contener información más detallada de la base de datos
que puede ser empleada por un atacante para ejecutar ataques de inyección de código más
efectivos.
Es necesario en todo momento capturar las condiciones de error y mostrar mensajes de error
personalizados con la mínima cantidad de información posible. No se recomienda mostrar
directamente los mensajes de error detallados generados por el servidor Web, el servidor de
aplicaciones o la base de datos.
La gestión de errores debe aplicarse tanto en los accesos a contenidos estáticos como dinámicos,
tras la ejecución de código y scripts.
Con el objetivo de minimizar la cantidad de información disponible a través de la aplicación Web,
se recomienda no disponer del código fuente de la aplicación en el entorno de producción, así
como eliminar todos los recursos existentes por defecto en el software empleado.
No debe existir ningún tipo de información confidencial en los datos proporcionados al usuario,
tal como campos ocultos en documentos HTML o claves de la aplicación, en los documentos
enviados a los clientes Web. Si en algún caso es necesario enviar algún campo sensible hacia el
cliente Web, este campo debería estar cifrado, expirar tras cierto tiempo y no ser reutilizable.
4.6.4 AUTENTIFICACIÓN Y GESTIÓN DE SESIONES
Un caso concreto de mensajes de error son los asociados al mecanismo de autentificación. En
ningún caso la aplicación debe desvelar los detalles de que componentes de las credenciales de
acceso no son válidos. Por ejemplo, mensajes de error indicando que el usuario es válido, pero la
clave no, facilitan enormemente a un atacante las tareas de adivinación de claves.
El mecanismo de autentificación debe proporcionar capacidades para definir una política de
acceso, definir la longitud y complejidad de las claves, los mecanismos de log de acceso, y la
política de bloqueo temporal de cuentas en base al tiempo tras un número de intentos de acceso
fallidos.
La gestión de sesiones en la aplicación Web debe realizarse empleando identificadores de sesión
o tokens no predecibles (es decir, suficientemente aleatorios), de suficiente longitud para que no
puedan ser adivinados mediante técnicas de fuerza bruta, y que caduquen tras cierto tiempo.
Los identificadores de sesión pueden intercambiarse como parte de la URL (variables en el
método GET), como campos HTML ocultos, cookies (método más comúnmente utilizado y
recomendado), cabeceras HTTP estándar o propietarias, o como variables y valores en el método
POST.
Centro Criptológico Nacional 16

---

<!-- Página 17 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
Para sistemas de nivel ALTO se deberán implantar comprobaciones de integridad sobre el
identificador de sesión para detectar y evitar su manipulación. Para ello se deben emplear hashes
criptográficos como SHA-2, y cifrados, no codificados (en, por ejemplo, base64). El identificador
de sesión puede ser contrastado constantemente con otros datos que no son fácilmente
manipulables por el usuario por parte de la aplicación, como por ejemplo la dirección IP origen
empleada en el momento de la creación de la sesión.
Se deberá hacer un uso adecuado de los dos tipos de cookies existentes, persistentes y no
persistentes, en función de su propósito y de la duración estimada de la sesión del usuario;
además del uso de las capacidades extendidas en la definición de cookies, como “secure”
(cookies sólo disponibles a través de TLS) o “httponly” (cookies sólo disponibles para la página
Web, y no para los scripts).
Se deberán emplear los mecanismos de gestión de sesiones existentes en el lenguaje o entorno
de programación empleado. En el caso en el que sean necesarios mecanismos de seguridad más
avanzados, se deberán extender las capacidades del mecanismo existente, y no construir desde
cero el sistema de gestión de sesiones.
4.6.5 CSRF
Los ataques de CSRF sólo pueden ser evitados mediante la implementación de elementos
conocidos como tokens de formulario, o tokens anti-CSRF. La aplicación debe ser capaz de seguir
la propia lógica de la aplicación antes de realizar una acción crítica. Es posible llevar a cabo este
control mediante tokens dinámicos, creados por cada sesión, usuario y formulario crítico,
suficientemente aleatorios, y que deben tener una fecha o tiempo de expiración.
Otras soluciones como el sustentar la validez de las peticiones sobre la aplicación en el campo
“Referer” (cabecera HTTP) no son válidas ya que este campo puede ser fácilmente modificado
por el atacante.
Adicionalmente, es posible evitar este tipo de ataques y proporcionar más control de la aplicación
Web al usuario mediante la solicitud de verificación para acciones críticas. Una implementación
común de esta verificación es el uso de imágenes CAPTCHA, dónde el usuario debe introducir el
texto existente en una imagen, o la utilización de autentificación de dos factores mediante
tarjetas de coordenadas o dispositivos de claves de un solo uso.
4.6.6 GESTIÓN DE LOGS
Existen numerosos motivos para la generación, almacenamiento y gestión de logs, tales como
motivos legales y/o de regulación, de contabilidad, para la resolución problemas, auditoría,
estadísticas, respuesta ante incidentes y análisis forense.
Se recomienda la aplicación de las mejores prácticas en la gestión de logs, no sólo a nivel de los
diferentes elementos que componen la plataforma del entorno Web, tales como los dispositivos
de red, firewalls, IDS, WAF, servidor Web, servidor de aplicación o servidor de base de datos, sino
también en el propio código de la aplicación Web.
Dentro de las mejores prácticas de gestión de logs es necesario considerar su rotación, ubicación
(local y remota), espacio necesario en disco, permisos, rendimiento, política de retención de logs,
centralización y correlación de logs, y las herramientas y soluciones para su análisis detallado
(automático y manual).
Centro Criptológico Nacional 17

---

<!-- Página 18 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
A nivel de la aplicación Web es necesario definir qué acciones van a generar eventos de logs y
con qué nivel de detalle.
Para generar los logs en la aplicación Web deben emplearse los mecanismos estándar del
lenguaje o entorno de desarrollo Web empleado, como por ejemplo Log4J (Java), Log4PHP (PHP),
etc.
Se recomienda centralizar la función de logging en una librería para la totalidad de la aplicación
Web, de forma que se disponga de un mecanismo único y consistente de logging para el conjunto
global de la aplicación. En cualquier punto del código donde sea necesario generar logs sólo será
necesario invocar a las funciones correspondientes de la librería de logs.
4.7 ANÁLISIS DE SEGURIDAD DE APLICACIONES WEB
Una vez se ha implementado una metodología de desarrollo de software para aplicaciones Web
que contempla los aspectos de seguridad pertinentes, es necesario complementarla con análisis
y auditorías del entorno y la aplicación Web.
El objetivo del análisis de seguridad de una aplicación Web es pasar de una aplicación Web que
presenta vulnerabilidades, a una aplicación que es segura y no tiene vulnerabilidades conocidas.
Es importante reseñar que la seguridad al 100% no se puede asegurar, por lo que el objetivo de
la metodología de análisis es aumentar lo más posible el nivel de seguridad de la aplicación Web
mediante el estudio de aquellas vulnerabilidades y errores conocidos.
La metodología de análisis debe incluir dos áreas (descritas en detalle a continuación):
a) Caja negra
b) Caja blanca
4.7.1 METODOLOGÍA DE ANALISIS DE CAJA NEGRA
El análisis de caja negra se centra en estudiar las vulnerabilidades de seguridad de la aplicación
Web desde el punto de vista de un atacante externo.
El analista, actuando como atacante, no dispone de ningún tipo de información previa relativa a
la aplicación y mucho menos del código de la misma.
El análisis se basa en la interacción del analista con la aplicación Web. Mediante la generación de
diferentes estímulos o datos de entrada, se analiza la respuesta o datos de salida, con el objetivo
de identificar posibles vulnerabilidades.
Los datos de entrada deben ser especialmente manipulados para provocar la ejecución de
excepciones y condiciones no esperadas, como errores en la ejecución de scripts, errores
provenientes de la base de datos, errores del servidor Web (HTTP 500), etc. Este proceso implica
típicamente la utilización de caracteres especiales según los elementos que conforman la
aplicación Web.
Ejemplos:
a) Para detectar la existencia de vulnerabilidades de inyección SQL es necesario enviar como
datos de entrada caracteres especiales para la base de datos, como por ejemplo el carácter
“ ’ ” (comilla simple) empleado en las consultas SQL.
Centro Criptológico Nacional 18

---

<!-- Página 19 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
b) Para detectar la existencia de vulnerabilidades de XSS (Cross-Site Scripting) es necesario
enviar como datos de entrada caracteres especiales en el procesamiento de scripts en los
navegadores Web, como por ejemplo la etiqueta HTML <script> empleada en la inclusión
de scripts en páginas Web.
La metodología a seguir es similar a la empleada en las pruebas de intrusión, donde el análisis
desde el punto de vista del atacante se divide en varias fases que permiten obtener información
de la aplicación y sus posibles vulnerabilidades.
Las fases típicas de este proceso son:
a) Reconocimiento, también conocida como descubrimiento o identificación
b) Enumeración o escaneo
c) Detección y verificación de vulnerabilidades
Para el estudio necesario en cada una de estas fases existen numerosas herramientas que
permiten analizar e identificar vulnerabilidades en aplicaciones Web de forma automática. Se
recomienda la lectura de la guía CCN-STIC-818 Herramientas de Seguridad en el ENS [Ref.- 8]
El análisis mediante herramientas automáticas debe ser complementado con análisis manuales
(pruebas de intrusión), ya que dada la naturaleza y complejidad de las aplicaciones Web, se
estima que estas herramientas sólo pueden encontrar entre un 20-60% de las vulnerabilidades
existentes en la aplicación.
4.7.2 METODOLOGÍA DE ANALISIS DE CAJA BLANCA
El análisis de caja blanca se centra en estudiar las vulnerabilidades de seguridad de la aplicación
Web desde el punto de vista del desarrollador.
El analista, actuando como desarrollador, dispone de acceso completo al código fuente de la
aplicación para su revisión.
La metodología a seguir se centra en realizar un análisis exhaustivo del código de la aplicación en
busca de funciones vulnerables o de la ausencia de métodos que permitan, por ejemplo, validar
la entrada recibida por el usuario.
Desde un punto de vista general, a la hora de establecer controles específicos sobre una
aplicación Web es necesario conocer las recomendaciones y soluciones disponibles para el
lenguaje de programación empleado: Java, PHP, .NET, etc.
Por este motivo, es necesario disponer de documentación adicional relativa al lenguaje de
programación de la aplicación Web, tal como funciones y librerías que permiten validar y
normalizar las entradas del usuario en el lenguaje empleado.
Dentro de las áreas de revisión de código se deberá analizar el código de la aplicación Web en
busca de vulnerabilidades de:
a) Desbordamientos de memoria (buffer overruns y overflows)
b) Inyección de comandos en el sistema operativo
c) Inyección de comandos SQL en la base de datos
d) Validación de los datos de entrada
e) XSS (Cross-Site Scripting)
Centro Criptológico Nacional 19

---

<!-- Página 20 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
f) CSRF, Cross Site Request Forgery
g) Manejo y generación de errores
h) Gestión de logs
i) Autentificación
j) Autorización
k) Gestión de sesiones
l) Cifrado, tanto en almacenamiento como en tránsito
m) Condiciones de carrera (race conditions)
5. ESPECIFICACIÓN DE REQUISITOS DE AUDITORÍAS DE SEGURIDAD DE
ENTORNOS WEB
El presente apartado pretende proporcionar un mayor nivel de detalle sobre la metodología a
emplear en la realización de análisis de seguridad de caja negra sobre entornos Web.
El objetivo principal es definir los requisitos necesarios para que una auditoría de seguridad de
los entornos Web de la administración llevada a cabo por terceros obtenga unos resultados que
sean un reflejo completo y realista de la seguridad de los servicios Web prestados, los resultados
sean relevantes desde el punto de vista práctico, y la información obtenida se trate con la reserva
oportuna.
a) Completitud: la auditoría debe reflejar el estado real y completo de la seguridad de los
servicios Web ofrecidos por el entorno objetivo, sin importar su base tecnológica a efectos
de alcance.
b) Relevancia: la auditoría deberá reflejar, de forma concisa y práctica, las posibilidades,
teóricas o prácticas, de que un atacante altere las características de Disponibilidad,
Integridad, Confidencialidad, Autenticidad, y Trazabilidad ofrecidas por los servicios Web.
c) Secreto: se deberá comunicar toda la información personal de los terceros implicados en
la auditoría. Los auditores tendrán un acuerdo de confidencialidad que reforzará en lo
posible la legislación de referencia, con penalización económica en caso de incumplimiento
y avales suficientes.
Los resultados de la auditoría deben ser reproducibles. Con este objetivo se almacenará una
captura de los resultados obtenidos tras la ejecución de las diferentes pruebas. El formato de los
resultados dependerá del tipo de prueba, tal como páginas Web obtenidas, capturas de tráfico
en formato PCAP, listas de URLs auditadas y vulnerables, etc.
La información detallada contenida en el informe de resultados debe incluir las fechas concretas
en las que se llevaron a cabo las pruebas.
Es recomendable disponer en el informe de resultados de una lista detallada de las
vulnerabilidades y problemas de seguridad encontrados, clasificados por orden de criticidad.
El tipo de análisis de seguridad de un entorno Web planteado se centra en los aspectos técnicos
y tecnológicos de la aplicación Web [Ref.- 16]. De forma complementaria es necesario analizar la
inclusión de pruebas de denegación de servicio y de ingeniería social.
Centro Criptológico Nacional 20

---

<!-- Página 21 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
El análisis de seguridad debe identificar complementariamente alguno de los aspectos asociados
a la gestión del entorno e infraestructura Web, tales como:
d) La política de actualizaciones de software para todos los componentes del entorno Web.
e) El ciclo de vida de la aplicación Web y la metodología de actualizaciones, resolución de
errores (bugs), e inclusión de nuevas funcionalidades.
f) Análisis de seguridad de los mecanismos de copia de seguridad (backup) de los contenidos
de la aplicación Web, incluyendo todos los elementos que la componen (servidor Web, de
aplicación y base de datos), así como los mecanismos de cifrado de las copias de seguridad.
5.1 ÁMBITO DE LA AUDITORÍA DE SEGURIDAD
El determinar y cerrar el ámbito o alcance de la auditoría de seguridad de un entorno Web no es
una tarea sencilla debido a las relaciones existentes entre múltiples dominios y aplicaciones Web.
Se recomienda cerrar el alcance inicialmente mediante una lista de dominios objetivo de la
auditoría. Todas las aplicaciones Web existentes en el dominio o los dominios del alcance, serían
objeto de las pruebas englobadas dentro de la auditoría.
Adicionalmente, es posible limitar aún más el alcance en entornos muy complejos mediante la
definición de un límite máximo en la profundidad del número de enlaces recorridos desde la
página Web principal. Por ejemplo, la auditoría puede limitarse a los recursos y aplicaciones Web
existentes en la página Web principal y hasta una distancia de 3 enlaces para sus organismos
dependientes.
Las auditorías así definidas se realizarán sobre un nivel de profundidad de enlaces de 3 niveles,
tanto en el dominio y subdominios principales como en los organismos dependientes accesibles
dentro de esos 3 niveles, sin importar el puerto que presta el servicio y si es HTTP o HTTPS.
Serán objeto de análisis todos los subdominios detectados a partir del dominio objetivo inicial,
salvo excepciones explícitas reflejadas en el alcance. Las páginas que se analizarán serán las que
se puedan encontrar en estos dominios y subdominios, independientemente de si están
enlazadas.
Las fases de la metodología de análisis recomendada son:
a) Reconocimiento, también conocida como descubrimiento o identificación
b) Enumeración o escaneo
c) Análisis (detección y verificación) de vulnerabilidades
Cada una de estas fases deben incluir información detallada sobre los elementos y fuentes de
datos relacionadas con el entorno o aplicación Web objetivo de la auditoría de seguridad.
5.2 RECONOCIMIENTO
5.2.1 INFORMACIÓN DE REGISTRO DE DOMINIOS (DNS) Y DIRECCIONES
Es necesario analizar en detalle toda la información disponible en los servicios de registro de
dominios y rangos de direcciones IP.
La información está disponible a través del servicio WHOIS, de los registradores de dominios del
nivel de nombres principal, y del proveedor del rango de direcciones IP.
Centro Criptológico Nacional 21

---

<!-- Página 22 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
Información administrativa contenida en el servicio de nombres (DNS): personas de contacto,
servidores de nombres, dominios, etc.
Seguridad de los DNS: versión del software de DNS, vulnerabilidades de seguridad asociadas al
software de DNS, tipos de registros de DNS, transferencias de zona (por dominio y por rango de
direcciones IP), etc.
5.2.2 SERVICIOS DE BÚSQUEDAS EN INTERNET
Información confidencial y sensible en buscadores accesibles públicamente (Google, Yahoo, etc)
mediante técnicas de búsqueda avanzadas, conocidas como “Google Hacking”.
Identificación de relaciones con otras organizaciones, entornos Web y dominios.
Obtención de un mapa Web completo en modo texto y/o gráfico del entorno objetivo, separando
claramente partes estáticas y dinámicas.
Análisis de correspondencias y discrepancias entre el mapa Web obtenido previamente y el mapa
descrito en el sitio Web objetivo.
5.2.3 UBICACIÓN EN LA RED
Información de la ubicación en la red del entorno Web objetivo y tráfico ICMP permitido.
Identificación de los sistemas de comunicaciones y dispositivos de red: routers, balanceadores,
etc.
Identificación de los sistemas de protección de perímetro (firewalls, IDS, etc).
5.3 ESCANEO
Es necesario obtener la mayor información posible sobre los servicios y recursos del entorno Web
objetivo, incluyendo tanto su ubicación en la red como los detalles de los elementos que lo
conforman.
Enumeración de los servicios disponibles en el entorno objetivo, obtenida mediante escaneos de
puertos (TCP y UDP) exhaustivos.
Información detallada de los servicios disponibles en el entorno objetivo, obtenida mediante
técnicas de fingerprinting sobre cada servicio/puerto (TCP y UDP) descubierto.
Identificación de la plataforma y sistema operativo (OS fingerprinting) de los servidores objetivo,
al menos, servidor Web, servidor de aplicación y base de datos.
Identificación de la política de tráfico permitido en los sistemas de protección de perímetro.
Centro Criptológico Nacional 22

---

<!-- Página 23 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
5.3.1 SERVICIOS WEB
Identificación e información sobre el tipo de servicios, aplicación y versión para el servidor Web,
servidor de aplicación y base de datos.
Soporte de los métodos HTTP soportados por el entorno Web.
Soporte TLS del servidor Web: protocolo TLS, siendo recomendada la versión 1.2 o superior,
algoritmos de cifrado e integridad soportados (incluyendo longitudes de clave de cifrado
admitidas), certificados digitales y validez (expiración del certificado), Autoridad Certificadora
(CA), etc.
5.3.2 CONTENIDOS WEB
Identificación de recursos existentes en el entorno Web, tanto enlazados como
adivinados/obtenidos por fuerza bruta o técnicas de diccionario.
Información de la estructura de la Web de los dominios objetivo, diferenciando contenidos y
recursos estáticos y dinámicos.
Listado de las páginas dinámicas detectadas, sus parámetros de entrada, los tipos de los
parámetros y el método de transferencia al servidor.
Identificación del(los) lenguaje(s) y entorno(s) de programación empleado(s).
Acceso y análisis de los códigos de error generados por la aplicación Web.
Identificación de las extensiones de ficheros empleadas en los recursos Web y la gestión de las
diferentes extensiones de ficheros.
Identificación de contenidos por defecto propios de las tecnologías empleadas en el entorno
Web.
Acceso público a páginas administrativas, de gestión, estadísticas, etc.
Identificación de recursos con control de accesos, es decir, que requieren autentificación
(páginas de login).
Identificación de copias de seguridad/versiones anteriores de recursos accesibles, tanto
enlazadas como adivinadas/obtenidas por fuerza bruta o técnicas de diccionario.
Identificación de relaciones con otros entornos y aplicaciones Web, y análisis de seguridad en la
invocación y referencias a servicios Web tanto internos y externos.
Análisis de los mecanismos de control de almacenamiento de contenidos en cachés y dispositivos
de red intermedios, tales como proxies.
Análisis de los mecanismos de control de publicación de contenidos en los servidores de
búsqueda de Internet: Google, Bing, etc.
Análisis de los mecanismos existentes centrados en ofrecer una superficie de exposición mínima
a la totalidad del entorno Web.
Identificación de las capacidades de la base de datos, contenidos y funcionalidad disponible por
defecto.
Centro Criptológico Nacional 23

---

<!-- Página 24 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
5.4 ANÁLISIS DE VULNERABILIDADES
5.4.1 VULNERABILIDADES DE APLICACIONES WEB
Identificación de vulnerabilidades de filtrado mediante el chequeo de parámetros de entrada en
los componentes dinámicos de la aplicación, comprobando la existencia de vulnerabilidades de
los siguientes tipos:
a) Inyección SQL
b) Inyección SQL ciega, incluyendo análisis de las diferencias en los tiempos de respuesta
c) Inyección LDAP y XPath
d) XSS, reflejado y persistente
e) CSRF
f) HTTP Response Splitting
g) Inyección de comandos en el sistema operativo
h) Desplazamiento por directorios
i) Referencias directas a ficheros
j) Parámetros y contenidos reflejados en la respuesta del servidor Web
k) Métodos para evitar comprobaciones de tipo CAPTCHA
l) Desbordamiento de buffers
Como resultado de estas operaciones y comprobaciones se obtendrá una lista de los parámetros
chequeados y sus resultados.
Identificación de vulnerabilidades en los mecanismos de autentificación:
a) Descripción de la seguridad de los métodos de autentificación
b) Transporte de credenciales sobre canales de comunicación seguros
c) Determinación de los elementos de protección frente a ataques de enumeración y
adivinación de credenciales: número máximo de intentos de acceso fallidos, limitaciones
por tiempo, etc.
d) Identificación de escenarios de denegación de servicio por bloqueo de cuentas de usuarios
tras un número determinado de intentos de acceso fallidos
e) Análisis de la fortaleza de las claves y de los mecanismos de generación de claves por
defecto
f) En el caso de emplearse certificados de cliente, análisis de los certificados digitales, y de los
procedimientos de gestión de los certificados (alta, verificación, revocación de certificados,
etc.)
g) Ataques de diccionario y fuerza bruta sobre las credenciales de acceso
h) Determinación de métodos para evitar el sistema de autentificación
i) Determinación de los mecanismos de renovación de claves e identificación de
vulnerabilidades en los mismos
Centro Criptológico Nacional 24

---

<!-- Página 25 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
Análisis de seguridad en los mecanismos de control de sesiones:
a) Descripción de la seguridad de las sesiones
b) Determinación de la duración y ámbito de las sesiones
c) Determinación de los elementos empleados para implementar el mantenimiento de
sesiones
d) Determinación del formato y contenido del identificador o token de las sesiones
e) Identificación y análisis de seguridad del uso de tokens (cookies, variables, cabeceras HTTP,
etc.) por parte de la aplicación Web
f) Determinación de mecanismos de manipulación del token de sesión
g) Identificación de ataques de fijación de sesión
h) Identificación y análisis de seguridad de escenarios Single Sign On (SSO)
i) Determinación del mecanismo de cierre de sesiones y gestión de la información de sesión
cacheada en los clientes Web
Análisis de los mecanismos de control de acceso (ACLs):
a) Acceso a contenidos de usuarios conocidos o típicos (existentes por defecto)
b) Acceso a ficheros de configuración del entorno Web
c) Acceso a versiones renombradas (backups) de archivos en producción
d) Acceso a la información de otros usuarios con credenciales
e) Trazabilidad de los accesos de usuario
f) Determinación de métodos para evitar el sistema de autorización
g) Escalada de privilegios
En todos aquellos entornos Web dónde existe el concepto de usuarios autentificados, se
recomienda la realización de los análisis de seguridad desde dos vertientes:
a) Mediante un usuario externo sin credenciales de acceso
b) Mediante un usuario con credenciales de acceso, y que por tanto puede acceder a
contenidos protegidos o privados
5.4.2 PRUEBAS DE CARGA Y DENEGACIÓN DE SERVICIO (DOS)
Se recomienda incluir en el alcance de la auditoría, como elemento opcional, la realización de
pruebas de carga que podrían provocar una denegación de servicio (DoS) sobre el entorno
objetivo.
Este tipo de pruebas debe de ser meticulosamente planeado, especialmente sobre entornos en
producción, para evitar problemas de disponibilidad en el servicio del entorno Web.
Pueden realizarse dos tipos de pruebas de carga:
a) DoS simple: empleando un único cliente, y definiendo el ancho de banda disponible, por
ejemplo 20Mbps.
Centro Criptológico Nacional 25

---

<!-- Página 26 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
b) DoS distribuida (DDoS): empleando múltiples clientes, por ejemplo 20, y definiendo el
ancho de banda disponible para cada uno de ellos, por ejemplo, 20Mbps.
Las pruebas de DDoS requieren disponer de elevados recursos para su consecución, por lo que
no siempre es posible su realización.
Adicionalmente, los ataques de DoS pueden incluir otro tipo de pruebas relacionadas:
a) Bloqueo de cuentas mediante intentos de acceso fallidos
b) Existencia de errores no recuperables en la aplicación, como desbordamiento de buffers
c) Reserva de recursos en base a las peticiones de un usuario, y errores de liberación de
recursos
d) Existencia de bucles de proceso infinitos en función de los parámetros de entrada
e) Consumo excesivo de recursos en los elementos de búsqueda
f) Diferencias de demanda de recursos en los diferentes componentes del entorno Web:
servidor Web, de aplicación o base de datos.
g) Denegación de servicio por rellenado automático de formularios
h) Consumo de recursos de almacenamiento (espacio en disco) en base a las peticiones de un
usuario.
Centro Criptológico Nacional 26

---

<!-- Página 27 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
REFERENCIAS PRINCIPALES
Las dos organizaciones de mayor renombre centradas en la seguridad de las aplicaciones Web
son:
 Open Web Application Security Project (OWASP):
https://www.owasp.org
 SANS Software Security Institute (ésta cubre no sólo el desarrollo seguro de
aplicaciones Web, sino también el desarrollo de cualquier otro tipo de
aplicaciones software)
https://www.sans.org/
Centro Criptológico Nacional 27

![Imagen 1 - Página 27](812-Entornos_y_aplicaciones_web_assets\pagina27_img1.png)

---

<!-- Página 28 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
LISTA DE COMPROBACIÓN Y REQUISITOS
El objetivo de este apartado es proporcionar una herramienta que permita la evaluación
sistemática de un entorno u aplicación Web antes de su desarrollo y adquisición.
Mediante esta lista se pretende evaluar las capacidades y elementos de seguridad empleados
internamente o por un tercero en el desarrollo de aplicaciones Web, dependiendo del nivel en el
que se ha categorizado el sistema.
CATEGORÍA DEL SISTEMA
BAJA MEDIA ALTA COMPROBACIÓN
GESTIÓN DE RIESGOS Y AMENAZAS WEB
Análisis de Riesgos no formal X
Análisis de Riesgos semi formal X
Análisis de Riesgos formal X
INCIDENTES DE SEGURIDAD EN ENTORNOS WEB
Sistema de registro de incidentes de seguridad X X
ESTRATEGIA Y METODOLOGÍAS EN ENTORNOS WEB
Metodología de Seguridad en el desarrollo de
X X
aplicaciones web
El almacenamiento de información sensible, tanto
propia de la lógica de la aplicación, debe de
X
almacenarse cifrada en todos los servidores, y
especialmente en el de base de datos
El almacenamiento de las credenciales de acceso
X
deberá realizarse en forma de hash
ARQUITECTURA DE LA APLICACIÓN WEB
Deben existir recomendaciones de seguridad
asociadas a los dispositivos y entorno de red
X X X
necesario para el despliegue de la aplicación Web:
switches, routers, firewalls, etc.
Deben existir recomendaciones de seguridad
asociadas a los servidores y sistema operativo de los
equipos necesarios para implantar la aplicación Web: X X X
servidor Web, servidor de aplicaciones o servidor de
base de datos
Deben existir recomendaciones respecto a las
actualizaciones de seguridad de los diferentes
elementos software qué conforman la plataforma de
X X X
la aplicación Web: software de los equipos de red,
sistema operativo de los servidores, software del
entorno Web, etc.
Determinar el tipo de arquitectura se emplea en la
aplicación Web, dos o tres capas, así como el por qué X X
y los aspectos considerados para aplicar este diseño
Centro Criptológico Nacional 28

|  |  |  |  | CATEGORÍA DEL SISTEMA |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | BAJA |  |  | MEDIA |  |  | ALTA |  |  | COMPROBACIÓN |  |
|  | GESTIÓN DE RIESGOS Y AMENAZAS WEB |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Análisis de Riesgos no formal | X |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Análisis de Riesgos semi formal |  |  |  | X |  |  |  |  |  |  |  |  |
|  |  | Análisis de Riesgos formal |  |  |  |  |  |  | X |  |  |  |  |  |
|  | INCIDENTES DE SEGURIDAD EN ENTORNOS WEB |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Sistema de registro de incidentes de seguridad |  |  |  | X |  |  | X |  |  |  |  |  |
|  | ESTRATEGIA Y METODOLOGÍAS EN ENTORNOS WEB |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Metodología de Seguridad en el desarrollo de <br> aplicaciones web |  |  |  | X |  |  | X |  |  |  |  |  |
|  |  | El almacenamiento de información sensible, tanto <br> propia de la lógica de la aplicación, debe de <br> almacenarse cifrada en todos los servidores, y <br> especialmente en el de base de datos |  |  |  |  |  |  | X |  |  |  |  |  |
|  |  | El almacenamiento de las credenciales de acceso <br> deberá realizarse en forma de hash |  |  |  |  |  |  | X |  |  |  |  |  |
|  | ARQUITECTURA DE LA APLICACIÓN WEB |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Deben existir recomendaciones de seguridad <br> asociadas a los dispositivos y entorno de red <br> necesario para el despliegue de la aplicación Web: <br> switches, routers, firewalls, etc. | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Deben existir recomendaciones de seguridad <br> asociadas a los servidores y sistema operativo de los <br> equipos necesarios para implantar la aplicación Web: <br> servidor Web, servidor de aplicaciones o servidor de <br> base de datos | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Deben existir recomendaciones respecto a las <br> actualizaciones de seguridad de los diferentes <br> elementos software qué conforman la plataforma de <br> la aplicación Web: software de los equipos de red, <br> sistema operativo de los servidores, software del <br> entorno Web, etc. | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Determinar el tipo de arquitectura se emplea en la <br> aplicación Web, dos o tres capas, así como el por qué <br> y los aspectos considerados para aplicar este diseño |  |  |  | X |  |  | X |  |  |  |  |  |


![Imagen 1 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img1.png)

![Imagen 2 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img2.png)

![Imagen 3 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img3.png)

![Imagen 4 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img4.png)

![Imagen 5 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img5.png)

![Imagen 6 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img6.png)

![Imagen 7 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img7.png)

![Imagen 8 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img8.png)

![Imagen 9 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img9.png)

![Imagen 10 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img10.png)

![Imagen 11 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img11.png)

![Imagen 12 - Página 28](812-Entornos_y_aplicaciones_web_assets\pagina28_img12.png)

---

<!-- Página 29 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
CATEGORÍA DEL SISTEMA
BAJA MEDIA ALTA COMPROBACIÓN
Deben existir elementos de detección (sistema de
detección de intrusos) y de protección (firewall de
aplicación Web, WAF) en la arquitectura. Identificar X X X
dónde están situados en la topología de red y la
justificación de esa ubicación
Deben existir elementos de detección (sistema de
detección de intrusos) y de protección (firewall de
aplicación Web, WAF) específicos entre el servidor X X X
Web y el de aplicaciones. Verificar si se dispone de
estos elementos
Deben existir elementos de detección (sistema de
detección de intrusos) y de protección (firewall de
aplicación Web, WAF) específicos entre el servidor de X
aplicaciones y el de base de datos. Verificar si se
dispone de estos elementos
Identificar qué dispositivo de tipo WAF se emplea y
por qué, así como los criterios empleados para su X X X
elección
Se deberá utilizar tráfico cifrado HTTPS en la
aplicación web, e identificar si existen dispositivos de X X
seguridad para el análisis de este tipo de tráfico
Identificar cuál es el servidor Web empleado para la
aplicación Web: Apache, IIS, etc., y verificar cuáles son
X X X
las recomendaciones de seguridad para la instalación
y configuración del servidor Web
Identificar cuál es el servidor de aplicación empleado
para la aplicación Web: Tomcat, WebSphere,
Weblogic, Jakarta, etc., y verificar X X X
cuáles son las recomendaciones de seguridad para la
instalación y configuración del servidor de aplicación
Identificar cuál es el servidor de base de datos
empleado para la aplicación Web: MySQL, Microsoft
SQL Server, Oracle, DB2, PostgreSQL, etc, y verificar
X X X
cuáles son las recomendaciones de seguridad para la
instalación y configuración del servidor de base de
datos
Comprobar si se emplean aplicaciones Web de
terceros para proporcionar parte de la infraestructura
básica de la aplicación Web, tal como PHPBB,
WordPress, etc. En caso afirmativo, verificar cuáles X X X
son las recomendaciones de seguridad para la
instalación y configuración del software Web de
terceros
Identificar si se emplea HTTPS para el acceso a todos
X
los recursos confidenciales de la aplicación, tales X X
como interfaces de administración
Identificar si se emplea HTTPS para todas las
transacciones Web que requieren reforzar la
X X
confidencialidad de la comunicación, tales como
sesiones de usuario con información sensible
Verificar si se emplea SSL o TLS en algún módulo de la
aplicación y el porqué. Comprobar la versión concreta X X
del protocolo empleada
Centro Criptológico Nacional 29

|  |  |  | CATEGORÍA DEL SISTEMA |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | BAJA |  |  | MEDIA |  |  | ALTA |  |  | COMPROBACIÓN |  |
|  | Deben existir elementos de detección (sistema de <br> detección de intrusos) y de protección (firewall de <br> aplicación Web, WAF) en la arquitectura. Identificar <br> dónde están situados en la topología de red y la <br> justificación de esa ubicación | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Deben existir elementos de detección (sistema de <br> detección de intrusos) y de protección (firewall de <br> aplicación Web, WAF) específicos entre el servidor <br> Web y el de aplicaciones. Verificar si se dispone de <br> estos elementos | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Deben existir elementos de detección (sistema de <br> detección de intrusos) y de protección (firewall de <br> aplicación Web, WAF) específicos entre el servidor de <br> aplicaciones y el de base de datos. Verificar si se <br> dispone de estos elementos |  |  |  |  |  |  | X |  |  |  |  |  |
|  | Identificar qué dispositivo de tipo WAF se emplea y <br> por qué, así como los criterios empleados para su <br> elección | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Se deberá utilizar tráfico cifrado HTTPS en la <br> aplicación web, e identificar si existen dispositivos de <br> seguridad para el análisis de este tipo de tráfico |  |  |  | X |  |  | X |  |  |  |  |  |
|  | Identificar cuál es el servidor Web empleado para la <br> aplicación Web: Apache, IIS, etc., y verificar cuáles son <br> las recomendaciones de seguridad para la instalación <br> y configuración del servidor Web | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Identificar cuál es el servidor de aplicación empleado <br> para la aplicación Web: Tomcat, WebSphere, <br> Weblogic, Jakarta, etc., y verificar <br> cuáles son las recomendaciones de seguridad para la <br> instalación y configuración del servidor de aplicación | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Identificar cuál es el servidor de base de datos <br> empleado para la aplicación Web: MySQL, Microsoft <br> SQL Server, Oracle, DB2, PostgreSQL, etc, y verificar <br> cuáles son las recomendaciones de seguridad para la <br> instalación y configuración del servidor de base de <br> datos | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Comprobar si se emplean aplicaciones Web de <br> terceros para proporcionar parte de la infraestructura <br> básica de la aplicación Web, tal como PHPBB, <br> WordPress, etc. En caso afirmativo, verificar cuáles <br> son las recomendaciones de seguridad para la <br> instalación y configuración del software Web de <br> terceros | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Identificar si se emplea HTTPS para el acceso a todos <br> los recursos confidenciales de la aplicación, tales <br> como interfaces de administración | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Identificar si se emplea HTTPS para todas las <br> transacciones Web que requieren reforzar la <br> confidencialidad de la comunicación, tales como <br> sesiones de usuario con información sensible |  |  |  | X |  |  | X |  |  |  |  |  |
|  | Verificar si se emplea SSL o TLS en algún módulo de la <br> aplicación y el porqué. Comprobar la versión concreta <br> del protocolo empleada |  |  |  | X |  |  | X |  |  |  |  |  |


![Imagen 1 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img1.png)

![Imagen 2 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img2.png)

![Imagen 3 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img3.png)

![Imagen 4 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img4.png)

![Imagen 5 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img5.png)

![Imagen 6 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img6.png)

![Imagen 7 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img7.png)

![Imagen 8 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img8.png)

![Imagen 9 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img9.png)

![Imagen 10 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img10.png)

![Imagen 11 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img11.png)

![Imagen 12 - Página 29](812-Entornos_y_aplicaciones_web_assets\pagina29_img12.png)

---

<!-- Página 30 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
CATEGORÍA DEL SISTEMA
BAJA MEDIA ALTA COMPROBACIÓN
Verificar si existe algún mecanismo en el diseño o
arquitectura de la aplicación para hacer frente a X
ataques de denegación de servicio (DoS)
Verificar si se aplican en la infraestructura de Filtrado,
tanto filtros de tráfico de entrada (ingress) como de X X
salida (egress).
Identificar si se dispone de información detallada
sobre las credenciales y permisos de acceso
necesarios para la ejecución de cada componente de X X X
software existente en todos los servidores, así como
para las interacciones entre éstos
DESARROLLO SEGURO DE LA APLICACIÓN WEB
Verificar si existe una metodología para incluir la
seguridad como elemento fundamental del ciclo de
vida de desarrollo de software como por ejemplo, X X X
CLASP de OWASP. Obtener detalles sobre la
metodología empleada y las acciones que conlleva
Identificar el entorno de desarrollo empleado en la
aplicación Web: PHP, ASP, ASP .NET, Java (J2EE, JSP…),
Python, Ruby on Rails, Perl, etc, así como las X X X
recomendaciones de seguridad específicas para la
instalación y configuración del entorno de desarrollo
Identificar el lenguaje de programación empleado en
la aplicación Web, en la parte servidor: PHP, ASP, ASP
.NET, Java, Python, Ruby, Perl, etc, así como la
X X X
metodología de seguridad específica empleada en el
desarrollo de código mediante el/los lenguajes/s
empleados
Identificar el lenguaje de programación empleado en
la aplicación Web, en la parte cliente: AJAX,
JavaScript, VBScript, ActiveX, Flash, Java applets, etc,
X X X
así como la metodología de seguridad específica
empleada en el desarrollo de código mediante el/los
lenguajes/s empleados
Verificar si el desarrollo contempla la protección
X X
frente a las vulnerabilidades Web más comunes
En caso de respuesta afirmativa en el punto anterior,
identificar qué metodología se emplea para
X X
desarrollar una aplicación Web segura y protegida
frente a las vulnerabilidades más comunes
Comprobar si existe algún mecanismo de soporte tras
el paso a producción de la aplicación que permita
obtener actualizaciones software que resuelvan X X X
nuevas vulnerabilidades de seguridad encontradas en
la aplicación Web
Identificar el modelo de filtrado se emplea en la
aplicación (eliminación de caracteres maliciosos o
X
aceptación de caracteres válidos únicamente) y los
motivos para la aplicación de este modelo
Identificar los mecanismos de filtrado de los datos del
usuario empleados por todos los componentes de la X
aplicación Web que deben interactuar con el cliente
Centro Criptológico Nacional 30

|  |  |  |  | CATEGORÍA DEL SISTEMA |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | BAJA |  |  | MEDIA |  |  | ALTA |  |  | COMPROBACIÓN |  |
|  |  | Verificar si existe algún mecanismo en el diseño o <br> arquitectura de la aplicación para hacer frente a <br> ataques de denegación de servicio (DoS) |  |  |  |  |  |  | X |  |  |  |  |  |
|  |  | Verificar si se aplican en la infraestructura de Filtrado, <br> tanto filtros de tráfico de entrada (ingress) como de <br> salida (egress). |  |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Identificar si se dispone de información detallada <br> sobre las credenciales y permisos de acceso <br> necesarios para la ejecución de cada componente de <br> software existente en todos los servidores, así como <br> para las interacciones entre éstos | X |  |  | X |  |  | X |  |  |  |  |  |
|  | DESARROLLO SEGURO DE LA APLICACIÓN WEB |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Verificar si existe una metodología para incluir la <br> seguridad como elemento fundamental del ciclo de <br> vida de desarrollo de software como por ejemplo, <br> CLASP de OWASP. Obtener detalles sobre la <br> metodología empleada y las acciones que conlleva | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Identificar el entorno de desarrollo empleado en la <br> aplicación Web: PHP, ASP, ASP .NET, Java (J2EE, JSP…), <br> Python, Ruby on Rails, Perl, etc, así como las <br> recomendaciones de seguridad específicas para la <br> instalación y configuración del entorno de desarrollo | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Identificar el lenguaje de programación empleado en <br> la aplicación Web, en la parte servidor: PHP, ASP, ASP <br> .NET, Java, Python, Ruby, Perl, etc, así como la <br> metodología de seguridad específica empleada en el <br> desarrollo de código mediante el/los lenguajes/s <br> empleados | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Identificar el lenguaje de programación empleado en <br> la aplicación Web, en la parte cliente: AJAX, <br> JavaScript, VBScript, ActiveX, Flash, Java applets, etc, <br> así como la metodología de seguridad específica <br> empleada en el desarrollo de código mediante el/los <br> lenguajes/s empleados | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Verificar si el desarrollo contempla la protección <br> frente a las vulnerabilidades Web más comunes |  |  |  | X |  |  | X |  |  |  |  |  |
|  |  | En caso de respuesta afirmativa en el punto anterior, <br> identificar qué metodología se emplea para <br> desarrollar una aplicación Web segura y protegida <br> frente a las vulnerabilidades más comunes |  |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Comprobar si existe algún mecanismo de soporte tras <br> el paso a producción de la aplicación que permita <br> obtener actualizaciones software que resuelvan <br> nuevas vulnerabilidades de seguridad encontradas en <br> la aplicación Web | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Identificar el modelo de filtrado se emplea en la <br> aplicación (eliminación de caracteres maliciosos o <br> aceptación de caracteres válidos únicamente) y los <br> motivos para la aplicación de este modelo |  |  |  |  |  |  | X |  |  |  |  |  |
|  |  | Identificar los mecanismos de filtrado de los datos del <br> usuario empleados por todos los componentes de la <br> aplicación Web que deben interactuar con el cliente |  |  |  |  |  |  | X |  |  |  |  |  |


![Imagen 1 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img1.png)

![Imagen 2 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img2.png)

![Imagen 3 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img3.png)

![Imagen 4 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img4.png)

![Imagen 5 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img5.png)

![Imagen 6 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img6.png)

![Imagen 7 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img7.png)

![Imagen 8 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img8.png)

![Imagen 9 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img9.png)

![Imagen 10 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img10.png)

![Imagen 11 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img11.png)

![Imagen 12 - Página 30](812-Entornos_y_aplicaciones_web_assets\pagina30_img12.png)

---

<!-- Página 31 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
CATEGORÍA DEL SISTEMA
BAJA MEDIA ALTA COMPROBACIÓN
Verificar si se normaliza la entrada del usuario antes
X
X X
de proceder a su verificación y filtrado
Identificar los métodos de normalización
contemplados en la aplicación: ASCII, codificación de X X X
URLs en hexadecimal, Unicode, etc.
Verificar si se dispone de una librería única y
centralizada que proporcione todas las funciones de
normalización y filtrado de los datos recibidos por el
usuario. Asimismo, identificar para que tipo de
X
ataques proporciona funciones específicas esta
librería: XSS, inyección, referencias a ficheros, etc., así
como el conjunto de caracteres que se filtran o
aceptan para cada tipo de ataque
Verificar dónde se realiza el filtrado de los datos de
entrada: en el cliente, en el servidor o en ambos, así X
como el motivo por el qué se aplica un método u otro
Verificar si se han implementado mecanismos de
protección en la aplicación frente a ataques de CSRF, X
como por ejemplo tokens de formulario
Verificar si se implementan mecanismos avanzados
de verificación de operaciones y acciones críticas,
X
como por ejemplo CAPTCHA o tarjetas de
coordenadas
Verificar si se dispone de un sistema de gestión de
X
versiones para la aplicación Web (así como un
programa más general de gestión de cambios).
Obtener detalles de este sistema y de cómo se X X
emplea en el control de vulnerabilidades de seguridad
y en la generación de actualizaciones y nuevas
versiones
Comprobar si existe un criterio para la utilización de
métodos HTTP GET y POST en los diferentes X X
componentes de la aplicación Web
Comprobar si se emplean las cabeceras HTTP por
parte de la aplicación Web como mecanismo de envío
X X X
de información confidencial o de verificación del
estado del cliente
Verificar si se hace uso de peticiones y capacidades
asíncronas, AJAX, en la aplicación Web, así como los
X X X
mecanismos de seguridad empleados para proteger
este tipo de comunicaciones
Identificar los mecanismos y tecnologías que se
emplean para la autentificación de usuarios: métodos
de autentificación HTTP básico o digest, NTLM,
X X
autentificación mediante certificados SSL (cliente y/o
servidor), autentificación mediante formularios y
base de datos, o autentificación de múltiples factores
Identificar si se hace uso de las capacidades de
autentificación del entorno de desarrollo Web
X X X
empleado. Obtener detalles sobre los mecanismos de
autentificación empleados
Centro Criptológico Nacional 31

|  |  |  | CATEGORÍA DEL SISTEMA |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | BAJA |  |  | MEDIA |  |  | ALTA |  |  | COMPROBACIÓN |  |
|  | Verificar si se normaliza la entrada del usuario antes <br> de proceder a su verificación y filtrado | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Identificar los métodos de normalización <br> contemplados en la aplicación: ASCII, codificación de <br> URLs en hexadecimal, Unicode, etc. | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Verificar si se dispone de una librería única y <br> centralizada que proporcione todas las funciones de <br> normalización y filtrado de los datos recibidos por el <br> usuario. Asimismo, identificar para que tipo de <br> ataques proporciona funciones específicas esta <br> librería: XSS, inyección, referencias a ficheros, etc., así <br> como el conjunto de caracteres que se filtran o <br> aceptan para cada tipo de ataque |  |  |  |  |  |  | X |  |  |  |  |  |
|  | Verificar dónde se realiza el filtrado de los datos de <br> entrada: en el cliente, en el servidor o en ambos, así <br> como el motivo por el qué se aplica un método u otro |  |  |  |  |  |  | X |  |  |  |  |  |
|  | Verificar si se han implementado mecanismos de <br> protección en la aplicación frente a ataques de CSRF, <br> como por ejemplo tokens de formulario |  |  |  |  |  |  | X |  |  |  |  |  |
|  | Verificar si se implementan mecanismos avanzados <br> de verificación de operaciones y acciones críticas, <br> como por ejemplo CAPTCHA o tarjetas de <br> coordenadas |  |  |  |  |  |  | X |  |  |  |  |  |
|  | Verificar si se dispone de un sistema de gestión de <br> versiones para la aplicación Web (así como un <br> programa más general de gestión de cambios). <br> Obtener detalles de este sistema y de cómo se <br> emplea en el control de vulnerabilidades de seguridad <br> y en la generación de actualizaciones y nuevas <br> versiones | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Comprobar si existe un criterio para la utilización de <br> métodos HTTP GET y POST en los diferentes <br> componentes de la aplicación Web |  |  |  | X |  |  | X |  |  |  |  |  |
|  | Comprobar si se emplean las cabeceras HTTP por <br> parte de la aplicación Web como mecanismo de envío <br> de información confidencial o de verificación del <br> estado del cliente | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Verificar si se hace uso de peticiones y capacidades <br> asíncronas, AJAX, en la aplicación Web, así como los <br> mecanismos de seguridad empleados para proteger <br> este tipo de comunicaciones | X |  |  | X |  |  | X |  |  |  |  |  |
|  | Identificar los mecanismos y tecnologías que se <br> emplean para la autentificación de usuarios: métodos <br> de autentificación HTTP básico o digest, NTLM, <br> autentificación mediante certificados SSL (cliente y/o <br> servidor), autentificación mediante formularios y <br> base de datos, o autentificación de múltiples factores |  |  |  | X |  |  | X |  |  |  |  |  |
|  | Identificar si se hace uso de las capacidades de <br> autentificación del entorno de desarrollo Web <br> empleado. Obtener detalles sobre los mecanismos de <br> autentificación empleados | X |  |  | X |  |  | X |  |  |  |  |  |


![Imagen 1 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img1.png)

![Imagen 2 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img2.png)

![Imagen 3 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img3.png)

![Imagen 4 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img4.png)

![Imagen 5 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img5.png)

![Imagen 6 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img6.png)

![Imagen 7 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img7.png)

![Imagen 8 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img8.png)

![Imagen 9 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img9.png)

![Imagen 10 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img10.png)

![Imagen 11 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img11.png)

![Imagen 12 - Página 31](812-Entornos_y_aplicaciones_web_assets\pagina31_img12.png)

---

<!-- Página 32 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
CATEGORÍA DEL SISTEMA
BAJA MEDIA ALTA COMPROBACIÓN
Identificar qué mecanismos y tecnologías se emplean
para el mantenimiento de sesiones de usuario: URLs, X X X
cookies, cabeceras HTTP propietarias, etc.
Verificar si se hace uso de las capacidades de
mantenimiento de sesiones del entorno de desarrollo
X X X
Web empleado. Obtener detalles sobre los
mecanismos de gestión de sesiones empleados
Verificar cómo se lleva a cabo la gestión de errores de
las tres capas: servidor Web, de aplicación y de base
X
de datos, así como si existe una librería centralizada
para la gestión y control de los errores
Identificar cómo se realiza la gestión del código
fuente de la aplicación en el entorno de producción,
así como de los recursos existentes por defecto en el X
software empleado, con el objetivo de minimizar la
información disponible
Identificar si se realiza algún tipo de comprobación
para asegurarse de que no existe ningún tipo de
información confidencial, tal como campos ocultos en X X X
documentos HTML o claves de la aplicación, en todos
los documentos y datos enviados a los clientes Web
Verificar qué mecanismos se han implantado a nivel
de la aplicación Web para la generación,
almacenamiento y gestión de logs, así como si se X X
dispone de una librería única y centralizada para la
gestión de logs en la totalidad de la aplicación
Identificar qué entorno de generación y gestión de
logs se ha utilizado para implementar el mecanismo X X
de logging de la aplicación Web
Identificar qué flexibilidad existe para determinar de
qué eventos generar logs, así como el nivel de detalle
de los logs. Obtener un listado detallado con todos los X
campos estándar de cualquier entrada de log
estándar
AUDITORÍAS DE SEGURIDAD DE LA APLICACIÓN WEB
Verificar si se realiza, o se ha planificado la realización
de, una auditoría de seguridad sobre la aplicación
Web una vez completado su desarrollo y antes de su X X X
puesta en producción. Identificar el tipo de auditoría:
caja blanca, negra o ambas
Verificar si se realizan auditorías de seguridad sobre
la aplicación Web durante las fases de desarrollo.
X X X
Identificar el tipo (caja blanca, negra o ambas) y con
qué frecuencia se realizan
Para las auditorías de caja negra, verificar si se
emplean herramientas automáticas, pruebas X X X
manuales o ambas
Identificar la metodología que se sigue en las
X
auditorías de caja negra
Centro Criptológico Nacional 32

|  |  |  |  | CATEGORÍA DEL SISTEMA |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | BAJA |  |  | MEDIA |  |  | ALTA |  |  | COMPROBACIÓN |  |
|  |  | Identificar qué mecanismos y tecnologías se emplean <br> para el mantenimiento de sesiones de usuario: URLs, <br> cookies, cabeceras HTTP propietarias, etc. | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Verificar si se hace uso de las capacidades de <br> mantenimiento de sesiones del entorno de desarrollo <br> Web empleado. Obtener detalles sobre los <br> mecanismos de gestión de sesiones empleados | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Verificar cómo se lleva a cabo la gestión de errores de <br> las tres capas: servidor Web, de aplicación y de base <br> de datos, así como si existe una librería centralizada <br> para la gestión y control de los errores |  |  |  |  |  |  | X |  |  |  |  |  |
|  |  | Identificar cómo se realiza la gestión del código <br> fuente de la aplicación en el entorno de producción, <br> así como de los recursos existentes por defecto en el <br> software empleado, con el objetivo de minimizar la <br> información disponible |  |  |  |  |  |  | X |  |  |  |  |  |
|  |  | Identificar si se realiza algún tipo de comprobación <br> para asegurarse de que no existe ningún tipo de <br> información confidencial, tal como campos ocultos en <br> documentos HTML o claves de la aplicación, en todos <br> los documentos y datos enviados a los clientes Web | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Verificar qué mecanismos se han implantado a nivel <br> de la aplicación Web para la generación, <br> almacenamiento y gestión de logs, así como si se <br> dispone de una librería única y centralizada para la <br> gestión de logs en la totalidad de la aplicación |  |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Identificar qué entorno de generación y gestión de <br> logs se ha utilizado para implementar el mecanismo <br> de logging de la aplicación Web |  |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Identificar qué flexibilidad existe para determinar de <br> qué eventos generar logs, así como el nivel de detalle <br> de los logs. Obtener un listado detallado con todos los <br> campos estándar de cualquier entrada de log <br> estándar |  |  |  |  |  |  | X |  |  |  |  |  |
|  | AUDITORÍAS DE SEGURIDAD DE LA APLICACIÓN WEB |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Verificar si se realiza, o se ha planificado la realización <br> de, una auditoría de seguridad sobre la aplicación <br> Web una vez completado su desarrollo y antes de su <br> puesta en producción. Identificar el tipo de auditoría: <br> caja blanca, negra o ambas | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Verificar si se realizan auditorías de seguridad sobre <br> la aplicación Web durante las fases de desarrollo. <br> Identificar el tipo (caja blanca, negra o ambas) y con <br> qué frecuencia se realizan | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Para las auditorías de caja negra, verificar si se <br> emplean herramientas automáticas, pruebas <br> manuales o ambas | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Identificar la metodología que se sigue en las <br> auditorías de caja negra |  |  |  |  |  |  | X |  |  |  |  |  |


![Imagen 1 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img1.png)

![Imagen 2 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img2.png)

![Imagen 3 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img3.png)

![Imagen 4 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img4.png)

![Imagen 5 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img5.png)

![Imagen 6 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img6.png)

![Imagen 7 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img7.png)

![Imagen 8 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img8.png)

![Imagen 9 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img9.png)

![Imagen 10 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img10.png)

![Imagen 11 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img11.png)

![Imagen 12 - Página 32](812-Entornos_y_aplicaciones_web_assets\pagina32_img12.png)

---

<!-- Página 33 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
CATEGORÍA DEL SISTEMA
BAJA MEDIA ALTA COMPROBACIÓN
Contrastar la metodología y elementos de la auditoría
de caja negra con el listado de recomendaciones
proporcionado en el apartado “ESPECIFICACIÓN DE X
REQUISITOS DE AUDITORÍAS DE SEGURIDAD DE
ENTORNOS WEB” de la presente guía
Para las auditorías de caja blanca, verificar si se
emplean herramientas automáticas, pruebas X
manuales o ambas
Identificar la metodología que se sigue en las
X
auditorías de caja blanca
Identificar qué herramientas de tipo WASS se
emplean y el por qué, así como cuáles han sido los X
criterios empleados para su elección
Identificar qué herramientas de análisis de código se
emplean y el por qué, así como cuáles han sido los X
criterios empleados para su elección
Identificar qué pautas, cláusulas y requisitos se
aplican para la evaluación y contratación de una X X X
aplicación Web a un tercero
FORMACIÓN Y CONCIENCIACIÓN
Se deberán realizar cursos de formación de seguridad
centrados en proporcionar un conocimiento
adecuado a administradores y desarrolladores
respecto a las vulnerabilidades y amenazas de X X X
seguridad en entornos Web, los diferentes tipos de
ataques existentes y los mecanismos de defensa
asociados
Se deberán realizar tareas de concienciación en
X
materia de seguridad, relativas al desarrollo seguro X X
de aplicaciones y servicios Web
Centro Criptológico Nacional 33

|  |  |  |  | CATEGORÍA DEL SISTEMA |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | BAJA |  |  | MEDIA |  |  | ALTA |  |  | COMPROBACIÓN |  |
|  |  | Contrastar la metodología y elementos de la auditoría <br> de caja negra con el listado de recomendaciones <br> proporcionado en el apartado “ESPECIFICACIÓN DE <br> REQUISITOS DE AUDITORÍAS DE SEGURIDAD DE <br> ENTORNOS WEB” de la presente guía |  |  |  |  |  |  | X |  |  |  |  |  |
|  |  | Para las auditorías de caja blanca, verificar si se <br> emplean herramientas automáticas, pruebas <br> manuales o ambas |  |  |  |  |  |  | X |  |  |  |  |  |
|  |  | Identificar la metodología que se sigue en las <br> auditorías de caja blanca |  |  |  |  |  |  | X |  |  |  |  |  |
|  |  | Identificar qué herramientas de tipo WASS se <br> emplean y el por qué, así como cuáles han sido los <br> criterios empleados para su elección |  |  |  |  |  |  | X |  |  |  |  |  |
|  |  | Identificar qué herramientas de análisis de código se <br> emplean y el por qué, así como cuáles han sido los <br> criterios empleados para su elección |  |  |  |  |  |  | X |  |  |  |  |  |
|  |  | Identificar qué pautas, cláusulas y requisitos se <br> aplican para la evaluación y contratación de una <br> aplicación Web a un tercero | X |  |  | X |  |  | X |  |  |  |  |  |
|  | FORMACIÓN Y CONCIENCIACIÓN |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Se deberán realizar cursos de formación de seguridad <br> centrados en proporcionar un conocimiento <br> adecuado a administradores y desarrolladores <br> respecto a las vulnerabilidades y amenazas de <br> seguridad en entornos Web, los diferentes tipos de <br> ataques existentes y los mecanismos de defensa <br> asociados | X |  |  | X |  |  | X |  |  |  |  |  |
|  |  | Se deberán realizar tareas de concienciación en <br> materia de seguridad, relativas al desarrollo seguro <br> de aplicaciones y servicios Web | X |  |  | X |  |  | X |  |  |  |  |  |


![Imagen 1 - Página 33](812-Entornos_y_aplicaciones_web_assets\pagina33_img1.png)

![Imagen 2 - Página 33](812-Entornos_y_aplicaciones_web_assets\pagina33_img2.png)

![Imagen 3 - Página 33](812-Entornos_y_aplicaciones_web_assets\pagina33_img3.png)

![Imagen 4 - Página 33](812-Entornos_y_aplicaciones_web_assets\pagina33_img4.png)

![Imagen 5 - Página 33](812-Entornos_y_aplicaciones_web_assets\pagina33_img5.png)

![Imagen 6 - Página 33](812-Entornos_y_aplicaciones_web_assets\pagina33_img6.png)

![Imagen 7 - Página 33](812-Entornos_y_aplicaciones_web_assets\pagina33_img7.png)

![Imagen 8 - Página 33](812-Entornos_y_aplicaciones_web_assets\pagina33_img8.png)

---

<!-- Página 34 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
GLOSARIO DE TÉRMINOS Y ABREVIATURAS
ACL Access Control List
AJAX Asynchronous JavaScript and XML
ASP Active Server Pages
BD Base de datos
CA Certification Authority
CAPTCHA Completely Automated Public Turing test to tell Computers and Humans Apart
CCN Centro Criptológico Naciomal
CCN-CERT Centro Criptológico Naciomal – Computer Emergency Response Team
CLASP Comprehensive, Lightweight Application Security Process
CMS Content Management Systems
CR Carriage Return
CSRF Cross-Site Request Forgery
DDoS Distributed Denial of Service
DNS Domain Name Service (o System)
DoS Denial of Service
FAQ Frequently Asked Questions
HTML Hyper Text Markup Language
HTTP Hyper Text Transfer Protocol
HTTPS Secure Hyper Text Transfer Protocol
IDS Intrusion Detection System
IIS Internet Information Server
J2EE Java 2 Enterprise Edition
JSP Java Server Pages
LAMP Linux, Apache, MySQL y PHP
LDAP Lightweight Directory Access Protocol
LF Line Feed
OWASP Open Web Application Security Project
PCAP Packet Capture
PHPBB PHP Bulletin Board
RFI Remote File Inclusion
SDLC Software Development Life Cycle
SQL Structured Query Language
Centro Criptológico Nacional 34

![Imagen 1 - Página 34](812-Entornos_y_aplicaciones_web_assets\pagina34_img1.png)

---

<!-- Página 35 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
SSL Secure Socket Layer
SSO Single Sign On
STIC Seguridad de las Tecnologías de la Información y las Comunicaciones
TIC Tecnologías de la Información y las Comunicaciones
TLS Transport Layer Security
URI Uniform Resource Identifier
URL Uniform Resource Locator
VNC Virtual Network Computing
VoIP Voz sobre IP
WAF Web Application Firewall
WASC Web Application Security Consortium
WASS Web Application Security Scanner
Webmail Correo electrónico accesible vía Web
WHID Web Hacking Incidents Database
XML eXtended Markup Language
XSS Cross-Site Scripting
Centro Criptológico Nacional 35

---

<!-- Página 36 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
REFERENCIAS
[Ref.- 1] CCN-CERT
URL: https://www.ccn-cert.cni.es
[Ref.- 2] OWASP WASC Web Hacking Incidents Database Project
URL: https://wiki.owasp.org/index.php/OWASP_WASC
[Ref.- 3] Bots and Botnet: An Overview
URL: https://www.sans.org/white-papers/1299/
[Ref.- 4] OWASP News.
URL: https://owasp.org/news/
[Ref.- 5] SANS Newsletters: @Risk.
URL: https://www.sans.org/newsletters/
[Ref.- 6] CCN-STIC-810 Creación de CERTs. CCN
URL: https://www.ccn-cert.cni.es/series-ccn-stic/800-guia-esquema-nacional-de-
seguridad/520-ccn-stic-810-guia-de-creacion-de-cert-s/file.html
[Ref.- 7] CCN-STIC-817 Esquema Nacional de Seguridad. Gestión de Ciberincidentes. CCN
URL: https://www.ccn-cert.cni.es/series-ccn-stic/800-guia-esquema-nacional-de-
seguridad/988-ccn-stic-817-gestion-de-ciberincidentes/file.html
[Ref.- 8] CCN-STIC-818 Herramientas de Seguridad en el ENS. CCN
URL: https://www.ccn-cert.cni.es/series-ccn-stic/800-guia-esquema-nacional-de-
seguridad/527-ccn-stic-818-herramientas-de-seguridad-en-el-ens/file.html
[Ref.- 9] CCN-STIC-408 Seguridad Perimetral - Cortafuegos. CCN
URL: https://www.ccn-cert.cni.es/series-ccn-stic/guias-de-acceso-publico-ccn-
stic/74-ccn-stic-408-seguridad-perimetral-cortafuegos/file.html
[Ref.- 10] CCN-STIC-5xx Guías de seguridad de Windows. CCN
URL: https://www.ccn-cert.cni.es/guias/guias-series-ccn-stic/500-guias-de-
entornos-windows.html
[Ref.- 11] CCN-STIC-6xx Guías de seguridad de otros entornos. CCN
URL: https://www.ccn-cert.cni.es/guias/guias-series-ccn-stic/600-guias-de-otros-
entornos.html
[Ref.- 12] The Daily Swig: Latest cross-site scripting (XSS) security news
URL: https://portswigger.net/daily-swig/xss
[Ref.- 13] mod_security
URL: https://github.com/SpiderLabs/ModSecurity
[Ref.- 14] IIS Lockdown. Microsoft (sólo soporte Windows y Windows Server 2008)
Centro Criptológico Nacional 36

![Imagen 1 - Página 36](812-Entornos_y_aplicaciones_web_assets\pagina36_img1.png)

---

<!-- Página 37 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
URL: https://learn.microsoft.com/es-es/security-
updates/security/iislockdowntool
[Ref.- 15] OWASP Secure Software Contract Annex
URL:https://owasp.org/www-
community/OWASP_Secure_Software_Contract_Annex
[Ref.- 16] OWASP Web Security Testing Guide
URL: https://owasp.org/www-project-web-security-testing-guide/stable/
Centro Criptológico Nacional 37

---

<!-- Página 38 de 38 -->

CCN-STIC-812 Guía de Seguridad en Entornos y Aplicaciones Web
Centro Criptológico Nacional 38

![Imagen 1 - Página 38](812-Entornos_y_aplicaciones_web_assets\pagina38_img1.png)

![Imagen 2 - Página 38](812-Entornos_y_aplicaciones_web_assets\pagina38_img2.png)