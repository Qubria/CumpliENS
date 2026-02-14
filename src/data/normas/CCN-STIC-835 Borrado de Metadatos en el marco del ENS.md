---
**Company:** ..
**CreationDate:** D:20170626205107+02'00'
**ModDate:** D:20170626205107+02'00'
**SourceModified:** D:20170626184521
---

<!-- Página 1 de 68 -->

SIN CLASIFICAR
Guía de Seguridad de las TIC
CCN-STIC 835
Esquema Nacional de Seguridad
Borrado de Metadatos
Marzo 2017
SIN CLASIFICAR

![Imagen 1 - Página 1](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina1_img1.jpeg)

---

<!-- Página 2 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Edita:
 Centro Criptológico Nacional, 2017
NIPO: 785-17-011-6
Fecha de Edición: junio de 2017
El Ministerio de Hacienda y Función Pública ha financiado el desarrollo de la presente guía.
Isdefe ha participado en la elaboración y modificación del presente documento y sus anexos.
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
Centro Crip tológico Nacional SIN CLASIFICAR 2

![Imagen 1 - Página 2](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina2_img1.png)

![Imagen 2 - Página 2](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina2_img2.jpeg)

![Imagen 3 - Página 2](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina2_img3.jpeg)

---

<!-- Página 3 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
PRÓLOGO
El uso masivo de las tecnologías de la información y las telecomunicaciones (TIC), en todos los
ámbitos de la sociedad, ha creado un nuevo espacio, el ciberespacio, donde se producirán
conflictos y agresiones, y donde existen ciberamenazas que atentarán contra la seguridad
nacional, el estado de derecho, la prosperidad económica, el estado de bienestar y el
normal funcionamiento de la sociedad y de las administraciones públicas.
La Ley 11/2002, de 6 de mayo, reguladora del Centro Nacional de Inteligencia (CNI),
encomienda al Centro Nacional de Inteligencia el ejercicio de las funciones relativas a la
seguridad de las tecnologías de la información en su artículo 4.e), y de protección de la
información clasificada en su artículo 4.f), a la vez que confiere a su Secretario de Estado
Director la responsabilidad de dirigir el Centro Criptológico Nacional (CCN) en su artículo
9.2.f).
Partiendo del conocimiento y la experiencia del CNI sobre amenazas y vulnerabilidades
en materia de riesgos emergentes, el Centro realiza, a través de su Centro Criptológico
Nacional, regulado por el Real Decreto 421/2004, de 12 de marzo, diversas actividades
directamente relacionadas con la seguridad de las TIC, orientadas a la formación de
personal experto, a la aplicación de políticas y procedimientos de seguridad, y al empleo
de tecnologías de seguridad adecuadas.
El Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad
en el ámbito de la Administración Electrónica (ENS, en adelante), al que se refiere el apartado
segundo del artículo 156 de la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector
Público, establece la política de seguridad en la utilización de medios electrónicos que permita
una protección adecuada de la información.
Precisamente el Real Decreto 3/2010 de 8 de Enero, actualizado por el Real Decreto 951/2015,
de 23 de octubre, fija los principios básicos y requisitos mínimos así como las medidas de
protección a implantar en los sistemas de la Administración, y promueve la elaboración y
difusión de guías de seguridad de las tecnologías de la información y las comunicaciones
(STIC) por parte de CCN para facilitar un mejor cumplimiento de dichos requisitos
mínimos.
En definitiva, la serie de documentos CCN-STIC se elabora para dar cumplimiento a los
cometidos del Centro Criptológico Nacional y a lo reflejado en el Esquema Nacional de
Seguridad, conscientes de la importancia que tiene el establecimiento de un marco de
referencia en esta materia que sirva de apoyo para que el personal de la Administración lleve
a cabo su difícil, y en ocasiones, ingrata tarea de proporcionar seguridad a los sistemas de las
TIC bajo su responsabilidad.
Marzo de 2017
Félix Sanz Roldán
Secretario de Estado
Director del Centro Criptológico Nacional
Centro Crip tológico Nacional SIN CLASIFICAR 3

![Imagen 1 - Página 3](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina3_img1.png)

![Imagen 2 - Página 3](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina3_img2.jpeg)

---

<!-- Página 4 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
ÍNDICE
1. INTRODUCCIÓN ................................................................................................... 6
2. OBJETO ................................................................................................................ 7
3. ALCANCE .............................................................................................................. 7
4. METADATOS ........................................................................................................ 8
4.1 DEFINICIÓN Y GENERALIDADES................................................................................ 8
4.2 TIPOS DE METADATOS ........................................................................................... 10
4.3 RIESGOS Y AMENAZAS ........................................................................................... 13
5. MEDIDAS DE SEGURIDAD EN EL ENS ................................................................... 17
6. HERRAMIENTAS DE INSPECCIÓN Y BORRADO DE METADATOS ........................... 21
6.1 TIPOS DE HERRAMIENTAS ...................................................................................... 22
6.2 CARACTERÍSTICAS DE LAS HERRAMIENTAS ........................................................... 25
ANEXO A. METADATOS EN DOCUMENTOS MICROSOFT OFFICE ............................... 28
1. TIPOS DE METADATOS E INFORMACIÓN OCULTA ............................................... 28
2. CONFIGURACIÓN DE SEGURIDAD ....................................................................... 32
3. INSPECCIÓN Y BORRADO DE METADATOS E INFORMACIÓN OCULTA .................. 33
ANEXO B. METADATOS EN DOCUMENTOS OPENOFFICE .......................................... 40
1. TIPOS DE METADATOS E INFORMACIÓN OCULTA ............................................... 40
2. CONFIGURACIÓN DE SEGURIDAD ....................................................................... 42
3. INSPECCIÓN Y BORRADO DE METADATOS E INFORMACIÓN OCULTA .................. 44
ANEXO C. METADATOS EN DOCUMENTOS PDF ....................................................... 46
1. TIPOS DE METADATOS E INFORMACIÓN OCULTA ............................................... 46
2. CONFIGURACIÓN DE SEGURIDAD ....................................................................... 49
3. INSPECCIÓN Y BORRADO DE METADATOS E INFORMACIÓN OCULTA .................. 49
ANEXO D. METADATOS EN IMÁGENES .................................................................... 53
1. TIPOS DE METADATOS ....................................................................................... 53
2. CONFIGURACIÓN DE SEGURIDAD ....................................................................... 57
3. INSPECCIÓN Y BORRADO DE METADATOS .......................................................... 59
3.1. UTILIDADES PARA ORDENADOR ............................................................................ 59
3.2. UTILIDADES PARA DISPOSITIVOS MÓVILES ........................................................... 64
ANEXO E. DEFINICIONES ......................................................................................... 66
ANEXO F. REFERENCIAS .......................................................................................... 68
Centro Crip tológico Nacional SIN CLASIFICAR 4

![Imagen 1 - Página 4](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina4_img1.png)

---

<!-- Página 5 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
TABLAS
Tabla 1. Formatos de metadatos comunes según los tipos de Documento..................... 13
Tabla 2. Metadatos y datos ocultos en los documentos y sus riesgos asociados. ........... 17
Tabla 3. Propiedades de los documentos Microsoft Office 2010 (Word, Excel y
PowerPoint). ..................................................................................................... 29
Tabla 4. Información oculta en los documentos Office 2010/2013/2016. ..................... 32
Tabla 5. Información que inspecciona y elimina el Inspector de Documentos para Office
2010/2013/2016. ............................................................................................... 37
Tabla 6. Información que revisa, pero no elimina el Inspector de Documentos en Office
2010/2013/2016. ............................................................................................... 38
Tabla 7. Metadatos en Propiedades de documentos OpenOffice.org (versión 4) .......... 41
Tabla 8. Información que inspecciona y elimina la utilidad “Eliminar Información
oculta” de Adobe Acrobat X. ........................................................................... 52
Tabla 9. Detalle de Metadatos comunes o exclusivos en cada estándar......................... 56
FIGURAS
Figura 1. Ejemplo de un documento que revela información sensible a través de los
metadatos de las propiedades del documento. .............................................. 13
Figura 2. Medidas del ENS relacionadas. ........................................................................ 19
Figura 3. Diagrama ejemplo del funcionamiento de una herramienta de inspección y
borrado de metadatos para correo electrónico. ............................................. 24
Figura 4. Propiedades del documento en Adobe Acrobat 9. ......................................... 46
Figura 5. Metadatos XMP en documento Adobe Acrobat 9. ......................................... 47
Figura 6. Utilidad de Examinar documento en Acrobat 9. ............................................. 50
Figura 7. Ejemplo de Metadatos EXIF. ............................................................................ 53
Figura 8. Ejemplo de Metadatos IPTC. ........................................................................... 54
Figura 9. Ejemplo de Metadatos XMP. ........................................................................... 55
Figura 10. Metadatos comunes o exclusivos en cada estándar. .................................... 55
Figura 11. Mapeo de metadatos a XMP. ........................................................................ 56
Figura 12. Tipos de Metadatos en ficheros JPEG. .......................................................... 56
Figura 13. Deshabilitar localización en cámara iOS 10.x. ............................................... 58
Figura 14. Deshabilitar localización en cámara Android 5.x. ......................................... 59
Figura 15. Metadatos mostrados por explorador de ficheros Windows. ...................... 60
Figura 16. Eliminar metadatos con Explorador de ficheros Windows. .......................... 61
Figura 17. Visualizador de fotos de Windows. ............................................................... 61
Figura 18. Propiedades con Visualizador de fotos de Windows. ................................... 62
Figura 19. Metadatos visualizados en GIMP 2.8.20. ...................................................... 62
Figura 20. Eliminar metadatos en GIMP 2.8.20. Paso 1. ................................................ 63
Figura 21. Eliminar metadatos en GIMP 2.8.20. Paso 2. ................................................ 63
Figura 22. Eliminar metadatos en GIMP 2.8.20. Paso 3. ................................................ 63
Figura 23. Ejemplos de visualización de metadatos en iPhone. .................................... 64
Figura 24. Ejemplo de borrado de metadatos en iPhone. ............................................. 65
Figura 25. Ejemplos de compartir imagen con o sin metadatos en iPhone. .................. 65
Centro Crip tológico Nacional SIN CLASIFICAR 5

![Imagen 1 - Página 5](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina5_img1.png)

---

<!-- Página 6 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
1. INTRODUCCIÓN
1. El Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de
Seguridad (ENS) en el ámbito de la Administración Electrónica, modificado a su vez
por el Real Decreto 951/2015, de 23 de octubre, establece una serie de medidas de
seguridad en su Anexo II, entre las que se encuentra la [mp.info.6] sobre la
“Limpieza de documentos”, destinada a la protección de la Confidencialidad de la
Información.
2. El Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de
Interoperabilidad en el ámbito de la Administración Electrónica, define documento
electrónico como “información de cualquier naturaleza en forma electrónica,
archivada en un soporte electrónico según un formato determinado y susceptible
de identificación y tratamiento diferenciado”.
3. Para su uso en esta guía, se tienen en cuenta las siguientes definiciones:
- Se definen programas de generación y tratamiento de documentos, como
aquellos programas de ordenador destinados a la generación de documentos en
cualquier formato (por ejemplo, en formato PDF). Dentro de estos programas, se
encuentran los programas ofimáticos que se definen como un conjunto de
programas básicos para su uso en oficinas, con un interfaz y funciones comunes y
cuyo objetivo será el tratamiento de textos, hojas de cálculo, presentaciones,
gráficos, tablas, etc. Dos ejemplos de programas ofimáticos muy conocidos, son
Microsoft Office y Apache OpenOffice.
- Se definen documentos ofimáticos como un tipo de documento electrónico
generado por los programas ofimáticos.
- Se define metadato como información estructurada que describe, explica,
localiza y además hace más fácil recuperar, utilizar o gestionar un recurso de
información. Los metadatos son comúnmente llamados “datos sobre los datos” o
“información sobre la información”.
- Se define información o datos ocultos como aquellos datos existentes en el
contenido de los documentos electrónicos, que no son visibles con la
configuración estándar o configuración por defecto de los programas utilizados
para su creación y tratamiento, siendo necesario aplicar alguna opción específica
dentro de la configuración de estos programas, para su visualización. Un ejemplo
de datos ocultos es el texto oculto, filas o columnas ocultas, comentarios o
información del documento, etc.
4. Los metadatos y los datos ocultos pueden contener información sensible, y esto
representa un riesgo que las organizaciones y sus usuarios deben entender. Este
riesgo está asociado a la posibilidad de revelar información sensible cuando el
documento sea compartido y salga fuera de su dominio de seguridad.
5. El impacto causado, por un lado, podría conducir a la organización a una pérdida
de confidencialidad, enojo por parte de los clientes, acciones disciplinarias, daño
Centro Crip tológico Nacional SIN CLASIFICAR 6

![Imagen 1 - Página 6](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina6_img1.png)

---

<!-- Página 7 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
en su reputación, escándalo y sanciones legales. Pudiendo ser más grave en caso
de que esta información contenga datos personales identificables (PII) que podrían
estar sujetos a la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de
Datos de Carácter Personal.
6. Por otro lado, los metadatos en los archivos electrónicos, resultan un medio muy
útil para la ingeniería social. A través de ellos se puede obtener cierta información
de forma sencilla, costosa de conseguir por otros medios.
7. Para mitigar el riesgo asociado a los metadatos y datos ocultos, el Esquema
Nacional de Seguridad (ENS) dispone la medida de protección [mp.info.6], que
establece la necesidad de un Proceso de Limpieza de Documentos. No disponer de
un proceso de limpieza de documentos adecuado, tal y como se indica en el
apartado 5.7.6 del Anexo II del Esquema Nacional de Seguridad, puede perjudicar:
a) Al mantenimiento de la confidencialidad de información que no debería
haberse revelado al receptor del documento.
b) Al mantenimiento de la confidencialidad de las fuentes y orígenes de la
información, que no debe conocer el receptor del documento.
c) A la buena imagen de la organización que difunde el documento por cuanto
demuestra un descuido en su buen hacer.
2. OBJETO
8. Este documento forma parte del conjunto de normas desarrolladas por el Centro
Criptológico Nacional para la implementación del Esquema Nacional de Seguridad
(CCN-STIC-800), siendo de aplicación para el Sector Público y teniendo como objeto
la protección de los servicios prestados a los ciudadanos y entre las diferentes
administraciones.
9. El objeto del documento es proporcionar una guía de buenas prácticas para realizar
la inspección y borrado tanto de metadatos, como de otros datos ocultos asociados
a los documentos electrónicos, que facilite la implementación de un proceso de
limpieza de documentos adecuado para la organización.
10. Establece unas pautas de carácter general que puedan resultar de aplicación a
entidades de distinta naturaleza, dimensión y sensibilidad, sin entrar en casuísticas
específicas. Por ello, es de esperar que cada organización las particularice para
adaptarlas a su entorno singular.
3. ALCANCE
11. El Esquema Nacional de Interoperabilidad en el ámbito de la Administración
Electrónica (ENI), regulado por el RD 4/2010, de 8 de enero, y la Norma Técnica de
Interoperabilidad de Documento Electrónico, aprobada por la resolución de 19 de
julio de 2011, de la Secretaría de Estado para la Función Pública, establecen un
esquema de metadatos con metadatos mínimos obligatorios que deben estar
necesariamente presentes en cualquier proceso de intercambio de documentos
Centro Crip tológico Nacional SIN CLASIFICAR 7

![Imagen 1 - Página 7](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina7_img1.png)

---

<!-- Página 8 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
electrónicos, entre órganos de la Administración y Entidades de Derecho Público
vinculadas o dependientes de aquella, y con el ciudadano.
12. El alcance de la presente guía, no abarca la inspección y borrado de estos
metadatos pertenecientes al esquema de metadatos especificado en el ENI y en la
Norma Técnica de Interoperabilidad de Documento Electrónico. Será cada
organización, en función de los métodos empleados para la implementación del
esquema de metadatos del ENI y de sus posibles escenarios de almacenado e
intercambio de documentos electrónicos, la que deberá realizar el análisis
correspondiente y determinar las medidas más adecuadas que minimicen los
riesgos asociados a la información incluida en estos metadatos.
13. El alcance de la presente guía abarca la inspección y borrado de los metadatos y
otros datos ocultos existentes en los documentos electrónicos, incorporados de
forma automática por los programas de generación y tratamiento de estos
documentos, o por los propios usuarios de la organización.
14. En esta guía no se hace referencia a ninguna herramienta gratuita ni comercial
para la inspección y borrado de metadatos. No obstante, establece las
funcionalidades y características recomendables para este tipo de herramientas,
con objeto de facilitar la evaluación y selección de la herramienta más adecuada
para cada organización. En la Guía CCN-STIC-818 de Herramientas de Seguridad en
el ENS, se incluyen en su Anexo A varias herramientas orientativas para análisis y
limpieza de metadatos.
15. Así mismo, se indican en esta guía las utilidades para inspección y borrado de
metadatos, de las que disponen de forma integrada determinados programas de
generación y tratamiento de documentos, por considerarlas muy extendidas en las
organizaciones. Estas aplicaciones son Microsoft Office, OpenOffice.org y Adobe
Acrobat.
4. METADATOS
4.1 Definición y Generalidades
16. La Sociedad Española de Documentación e Información Científica (SEDIC), define
metadato como “toda aquella información descriptiva sobre el contexto, calidad,
condición o características de un recurso u objeto de información que tiene la
finalidad de facilitar su recuperación, autentificación, evaluación, preservación y/o
interoperabilidad”.
17. En el caso de fotografías digitales, por ejemplo, la propia cámara a la vez que
captura las imágenes puede ir guardando en forma de metadatos, información de
cómo fue tomada la fotografía: fecha, hora, diafragma, velocidad, uso de flash,
modo de captura o localización.
18. En el caso de archivos de audio o vídeo, los metadatos pueden almacenar
información como el título de la obra, álbum, año, autor, carátula o género.
19. En el caso de documentos ofimáticos, los metadatos pueden almacenar
Centro Crip tológico Nacional SIN CLASIFICAR 8

![Imagen 1 - Página 8](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina8_img1.png)

---

<!-- Página 9 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
información de quién lo creó, quién lo modificó, quien realizó el último acceso al
documento y las fechas correspondientes, tiempo que ha tardado en editarse el
documento, dispositivo o software utilizado para la creación del documento, o
compañía y departamento al que pertenece.
20. La principal razón para crear metadatos es facilitar la búsqueda de información
relevante utilizando diversos criterios de búsqueda. Los metadatos pueden ayudar
a organizar los documentos electrónicos, facilitar la interoperabilidad entre
organizaciones, proveer la identificación digital y dar soporte a la gestión del ciclo
de vida de los documentos.
21. Un esquema de metadatos, es una colección de elementos de metadatos
diseñados para un propósito específico, como describir un tipo particular de
documento electrónico. A la definición de cada elemento se le llama semántica del
esquema y a los valores asignados a cada elemento se les llama contenido. Un
esquema de metadatos normalmente especifica los nombres de los elementos y su
semántica. También puede especificar reglas de contenido para indicar como debe
formularse el contenido y reglas de sintaxis para indicar cómo deben codificarse los
elementos y su contenido.
22. Normalmente las organizaciones disponen de un esquema de metadatos, que
responderá a las particularidades y necesidades específicas de gestión de los
documentos electrónicos de cada organización.
23. Un ejemplo de esquema de metadatos, es el Esquema de Metadatos para la
Gestión del Documento Electrónico (e-EMGDE), disponible en el Centro de
Interoperabilidad Semántica, que incluye los metadatos mínimos obligatorios,
definidos en las Normas Técnicas de Interoperabilidad de Documento electrónico y
Expediente electrónico, así como otros metadatos complementarios pertinentes en
una política de gestión y conservación de documentos electrónicos.
24. Cada organización, dentro de las políticas implantadas para el desempeño de sus
actividades, dispondrá de una Política de Gestión Documental en la que se
establecerán los criterios y normas en relación con la gestión de los documentos
electrónicos. Dentro de esta política se especificará el esquema de metadatos
asociados a los documentos electrónicos para asegurar la gestión, recuperación y
conservación de los mismos durante todo su ciclo de vida
25. Por otro lado, es importante indicar que tanto los dispositivos (ordenadores o
cámaras, por ejemplo), como muchos de los programas de generación y
tratamiento de documentos, insertan sus propios metadatos sin que en muchos
casos el usuario sea consciente de ello.
26. Los metadatos normalmente se encuentran ocultos y no son visibles usando la
configuración estándar de la aplicación con la que estemos trabajando sobre el
archivo. Para visualizarlos es necesario establecer una configuración específica o
incluso utilizar un software específico para revelar esos datos ocultos.
27. En el caso de los documentos ofimáticos, además de los metadatos, también
puede existir otro tipo de información oculta en el propio contenido del
Centro Crip tológico Nacional SIN CLASIFICAR 9

![Imagen 1 - Página 9](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina9_img1.png)

---

<!-- Página 10 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
documento, como por ejemplo texto y objetos formateados como invisibles, datos
fuera del área de visión del documento, o información relativa a comentarios y
cambios de revisión e identidad de quién realizó cada uno de ellos. Esto
normalmente se conoce como Información oculta o Datos ocultos y puesto que no
es visible a simple vista, el usuario puede no ser consciente de su existencia y
supone igualmente un riesgo en caso de que el documento sea distribuido a
personal ajeno a la organización.
28. Por lo tanto, y dado que el canal de difusión de los archivos de información es cada
vez mayor, las personas y las organizaciones deben establecer medidas para
proteger su información privada y confidencial. Parte de esas medidas de
protección exigen procedimientos y herramientas de revisión y limpieza de
documentos y archivos, para minimizar el riesgo de que información sensible se
revele a través de metadatos o datos ocultos.
4.2 Tipos de Metadatos
29. Tipos de metadatos según su propósito:
a) Metadatos descriptivos, que describen aspectos del documento electrónico
tales como título, asunto, autor o fechas de creación.
b) Metadatos estructurales, que indican cómo se construye el documento a
partir de sus componentes (por ejemplo, un fichero de texto principal y
varios ficheros de textos complementarios o anexos).
c) Metadatos administrativos, que proveen información que permitirá la
gestión, recuperación y conservación de los documentos a lo largo de todo su
ciclo de vida.
30. Tipos de metadatos según sea su origen:
a) Metadatos corporativos, que son agregados a los documentos como
resultado de aplicación del esquema de metadatos de la organización,
definido en la Política de Gestión Documental para la gestión, recuperación y
conservación de sus documentos y otros objetos de información a lo largo de
todo su ciclo de vida.
b) Metadatos de usuario, que son agregados a los documentos por el propio
usuario que crea, modifica o revisa el documento para su propia gestión y
seguimiento.
c) Metadatos de la aplicación, que son agregados a los documentos de forma
automática por los programas de generación y tratamiento de estos
documentos y que en algunos casos se pueden modificar o eliminar y en
otros casos no.
Centro Crip tológico Nacional SIN CLASIFICAR 10

![Imagen 1 - Página 10](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina10_img1.png)

---

<!-- Página 11 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
31. Tipos de metadatos según sea el método mediante el que se asocian al
documento:
a) Metadatos embebidos en el documento, que no pueden separarse del
documento (por ejemplo, metadatos embebidos en documentos HTML, en
cabeceras de archivos de imagen o en las propiedades de documentos). Este
método de asociación tiene como ventajas asegurar que los metadatos no se
van a perder, evitar los problemas derivados de enlazar los metadatos y los
datos y asegurar que los metadatos y el documento serán actualizados
simultáneamente.
b) Metadatos separados del documento, que pueden ir en archivos adicionales
o en bases de datos enlazadas con el documento. Este método de asociación
tiene como ventaja que se simplifica la gestión de los metadatos y se facilita
la búsqueda y recuperación de los documentos.
32. Tipos de metadatos según el tipo de documento al que van asociados:
a) Metadatos en Documento ofimáticos y PDF
Este tipo de documentos, contienen metadatos embebidos a través de las
propiedades del documento. Estos metadatos contienen información como:
título, asunto, comentarios, etiquetas, autor, fechas de creación y
modificación, fecha de impresión, último usuario que modificó el documento,
tiempo de edición, estadísticas, etc.
Los metadatos en las propiedades de los documentos pueden ser estándar
(metadatos prefijados por el programa) cumplimentados por el programa de
forma automática, o de forma manual por el usuario o la organización.
También pueden ser metadatos personalizados, que son tipos específicos de
metadatos que el usuario o la organización crean y cumplimentan.
Estos documentos, además de contener metadatos en sus propiedades,
pueden llevar asociados metadatos más específicos en diversos formatos
(XMP, RDF, etc.), bien embebidos en el documento, bien separados de él (por
ejemplo, en ficheros aparte que se denominan “sidecar files”).
b) Metadatos en Documentos de Imagen
Los documentos que consisten en imágenes incluyen metadatos:
- Descriptivos, que serán introducidos por el que genera o gestiona las
fotografías o imágenes para incluir información sobre el contenido de la
imagen, como título, etiquetas, lugar de captura de la imagen, etc.
- Técnicos, que son generados por los dispositivos de captura de imagen
(como las cámaras digitales). Son datos sobre la configuración usada en
el dispositivo para la captura de la imagen (por ejemplo, tiempo de
exposición, distancia focal, modo de flash, velocidad ISO, etc.).
Centro Crip tológico Nacional SIN CLASIFICAR 11

![Imagen 1 - Página 11](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina11_img1.png)

---

<!-- Página 12 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
- Administrativos, que incluyen información administrativa como
licencias, propietario del copyright, restricciones de uso de la imagen,
información de contacto, etc.
Los metadatos se pueden incluir embebidos formando parte del archivo de
imagen o almacenados en un fichero aparte (sidecar file).
c) Metadatos en Documentos multimedia
Los metadatos en los documentos multimedia (por ejemplo audios o vídeos)
se utilizan normalmente para su catalogación, ya que la clasificación
únicamente por carpetas y nombres de fichero es insuficiente para grandes
colecciones y es necesario disponer de más criterios de clasificación y
búsqueda, que proporcionan los metadatos a través de información como:
título, artista, álbum, discográfica, número de pista, compositor, copyright,
propietario del copyright, propietario de los derechos de publicación, fecha
de edición, género, idioma, y muchos más datos.
33. Hay multitud de esquemas, modelos o estándares de metadatos según el estándar
o formato utilizado. Se incluye a continuación una tabla en la que se indica para
cada tipo de documento, los formatos de metadatos más empleados.
FORMATO DE
TIPO DE DOCUMENTO EXTENSIÓN ARCHIVO
METADATOS
DOCUMENTOS OFIMÁTICOS
.doc /.docx /.docm
Documentos Microsoft Office: Word®,
.xls /.xlsx /.xlsm Propiedades del Documento
Excel®, PowerPoint®
.ppt /.pptx /.pptm
Documentos OpenDocument: texto, hojas
.odt /.ods /.odp /.odg Propiedades del Documento
de cálculo, presentaciones, gráficos
DOCUMENTOS PDF
Propiedades del Documento
Documentos PDF .pdf
Metadatos XMP
IMÁGENES
.jpeg /.jpg IPTC (IIM / Core /Extension)
.tiff / .tif
Imagen JPEG, TIFF, PSD, Raw EXIF
.psd
Formatos raw XMP
Imagen PNG .png XMP
ARCHIVOS MULTIMEDIA
Vídeo AVI .avi INFO; XMP
ID3v1 tag; ID3v2 tag;
Audio MP3 .mp3
APE tag; XMP
Archivo MP4 .mp4 /.m4a /.m4v XMP
Archivo F4V .f4v XMP
Audio WAVE / BWF .wav INFO; XMP; ID3v2 tag;
Centro Crip tológico Nacional SIN CLASIFICAR 12

|  |  |  |  |  |  |  | FORMATO DE |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | TIPO DE DOCUMENTO |  |  | EXTENSIÓN ARCHIVO |  |  |  |  |
|  |  |  |  |  |  |  | METADATOS |  |
|  | DOCUMENTOS OFIMÁTICOS |  |  |  |  |  |  |  |
| Documentos Microsoft Office: Word®, <br> Excel®, PowerPoint® |  |  | .doc /.docx /.docm <br> .xls /.xlsx /.xlsm <br> .ppt /.pptx /.pptm |  |  | Propiedades del Documento |  |  |
| Documentos OpenDocument: texto, hojas <br> de cálculo, presentaciones, gráficos |  |  | .odt /.ods /.odp /.odg |  |  | Propiedades del Documento |  |  |
|  | DOCUMENTOS PDF |  |  |  |  |  |  |  |
| Documentos PDF |  |  | .pdf |  |  | Propiedades del Documento <br> Metadatos XMP |  |  |
|  | IMÁGENES |  |  |  |  |  |  |  |
| Imagen JPEG, TIFF, PSD, Raw |  |  | .jpeg /.jpg <br> .tiff / .tif <br> .psd <br> Formatos raw |  |  | IPTC (IIM / Core /Extension) |  |  |
|  |  |  |  |  |  | EXIF |  |  |
|  |  |  |  |  |  | XMP |  |  |
| Imagen PNG |  |  | .png |  |  | XMP |  |  |
|  | ARCHIVOS MULTIMEDIA |  |  |  |  |  |  |  |
| Vídeo AVI |  |  | .avi |  |  | INFO; XMP |  |  |
| Audio MP3 |  |  | .mp3 |  |  | ID3v1 tag; ID3v2 tag; |  |  |
|  |  |  |  |  |  | APE tag; XMP |  |  |
| Archivo MP4 |  |  | .mp4 /.m4a /.m4v |  |  | XMP |  |  |
| Archivo F4V |  |  | .f4v |  |  | XMP |  |  |
| Audio WAVE / BWF |  |  | .wav |  |  | INFO; XMP; ID3v2 tag; |  |  |


![Imagen 1 - Página 12](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina12_img1.png)

---

<!-- Página 13 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
FORMATO DE
TIPO DE DOCUMENTO EXTENSIÓN ARCHIVO
METADATOS
Broadcast Audio Extension;
iXML; Cart Chunk; ISRC
Audio AIFF .aif ID3v2 tag; XMP
Audio WavPack .wv ID3v1 tag; APE tag
Audio Monkey's .ape APE tag
Audio Musepack .mpc /.mpp /.mp+ APE tag
Audio OptimFROG .ofr /.ofs APE tag
Audio comprimido Tom's Audio .tak APE tag
Extensible Metadata Platform File .xmp XMP
Tabla 1.- Formatos de metadatos comunes según los tipos de Documento.
4.3 Riesgos y Amenazas
34. Como se ha comentado ya en apartados anteriores, los metadatos son una fuente
de riesgo, ya que pueden contener información sensible que no debe revelarse a
personal ajeno a la organización. Por ello, es necesario que las organizaciones y los
usuarios sean conscientes del riesgo que supone la fuga de esta información
sensible, como datos de clientes, propiedad intelectual, detalles financieros o
cualquier otra información que dar a conocer resulte un inconveniente para la
organización.
35. La siguiente figura muestra un ejemplo del impacto que podría causar el exponer
cierta información almacenada en los metadatos de un documento.
Figura 1.- Ejemplo de un documento que revela información sensible a través de los metadatos de las
propiedades del documento.
Centro Crip tológico Nacional SIN CLASIFICAR 13

|  |  |  |  |  |  |  | FORMATO DE |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | TIPO DE DOCUMENTO |  |  | EXTENSIÓN ARCHIVO |  |  |  |  |
|  |  |  |  |  |  |  | METADATOS |  |
|  |  |  |  |  |  | Broadcast Audio Extension; |  |  |
|  |  |  |  |  |  | iXML; Cart Chunk; ISRC |  |  |
| Audio AIFF |  |  | .aif |  |  | ID3v2 tag; XMP |  |  |
| Audio WavPack |  |  | .wv |  |  | ID3v1 tag; APE tag |  |  |
| Audio Monkey's |  |  | .ape |  |  | APE tag |  |  |
| Audio Musepack |  |  | .mpc /.mpp /.mp+ |  |  | APE tag |  |  |
| Audio OptimFROG |  |  | .ofr /.ofs |  |  | APE tag |  |  |
| Audio comprimido Tom's Audio |  |  | .tak |  |  | APE tag |  |  |
| Extensible Metadata Platform File |  |  | .xmp |  |  | XMP |  |  |


![Imagen 1 - Página 13](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina13_img1.png)

![Imagen 2 - Página 13](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina13_img2.png)

---

<!-- Página 14 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
36. Como vemos en la figura, las implicaciones y la severidad del riesgo, varía
dependiendo del tipo de información que pueda ser desvelada o deducida. En el
mejor de los casos, sólo dañará la reputación de la organización (por ejemplo, en
caso de que el cliente deduzca que ha recibido un documento cuyo contenido ha
sido copiado de otro). En el peor de los casos, podría conducir a invalidar
contratos, pleitos, sanciones o causar serios perjuicios a la organización.
37. La ingeniería social utiliza multitud de métodos y técnicas, y los metadatos y datos
ocultos, son un medio muy útil para estos fines, ya que de forma relativamente
sencilla se puede extraer gran cantidad de información valiosa sobre la
organización para utilizar en posteriores ataques.
38. La ingeniería social en el contexto de la seguridad de la información, se puede
definir como el arte de averiguar información sensible y/o manipular a los
individuos para realizar ciertas acciones, que resulten en una brecha en la
seguridad de la organización.
39. En el caso de los documentos de imagen, los metadatos pueden contener
información sobre el dispositivo que ha tomado la fotografía (por ejemplo, el tipo
de smartphone y su sistema operativo) o la localización geográfica del lugar donde
se tomó la fotografía (en el caso de los dispositivos que disponen de GPS). La
localización es una información muy sensible, ya que si la imagen se publica a
través de algún medio en Internet podría desvelarse la ubicación y dar publicidad,
por ejemplo, a alguna infraestructura crítica de la organización.
40. En el caso de los documentos ofimáticos y PDF, los metadatos y datos ocultos
pueden contener información como: nombre, iniciales o incluso nombre de usuario
(username) que ha creado o modificado el documento, nombre del ordenador, su
sistema operativo y el programa que ha creado el documento, direcciones de
correo electrónico, etc. De esta manera, podrían utilizarse estos datos para realizar
diferentes acciones:
- A través de los nombres de empleado y complementando con la búsqueda en
redes sociales (por ejemplo, LinkedIn), se puede obtener todo un listado de
empleados de la organización, sus cargos, e incluso sus correos electrónicos, lo
cual puede servir para ataques de phishing.
- A través del sistema operativo y las aplicaciones que utilizan los ordenadores, se
puede conocer el entorno tecnológico de la organización y realizar ataques
dirigidos más efectivos.
- A través de los nombres de usuario (usernames), se puede deducir la convención
de nombres empleada en la organización y componer direcciones de correo para
ataques de phishing o intentar ataques de fuerza bruta.
41. A continuación, se incluye una tabla con algunos metadatos y datos ocultos que
pueden estar presentes en los documentos y sus riesgos asociados.
Centro Crip tológico Nacional SIN CLASIFICAR 14

![Imagen 1 - Página 14](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina14_img1.png)

---

<!-- Página 15 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
TIPO DE METADATO
DESCRIPCIÓN RIESGOS
O DATO OCULTO
Uno de los riesgos asociados consiste en
revelar información sobre el documento
que pueda resultar sensible. Por ejemplo,
los nombres de usuario (Autor,
Administrador o última persona que
modificó el documento) son información
Datos que contienen información
personal que afecta a la privacidad.
descriptiva del documento, como
Propiedades
También supone un riesgo que el
Título, Asunto, Etiquetas, Categoría,
Estándar
documento cuente con información
Comentarios, Autor, Administrador,
obsoleta o incorrecta en estos datos y el
Compañía, Plantilla, etc.
documento se reutiliza para otros fines.
Finalmente está el riesgo asociado a la
ingeniería social y sus capacidades de
obtener información a través de estos
datos.
Normalmente se utilizan para incluir
metadatos corporativos especificados por
la Política de Gestión documental de la
organización y sirven para posibilitar la
Datos insertados a medida por los gestión del documento a lo largo de su
usuarios o por la organización. Por ciclo de vida. El riesgo asociado a estos
Propiedades
ejemplo, Cliente, Departamento, metadatos depende de su contenido y de
Personalizadas
División, Identificador del la información sensible que incluyan y no
documento, Proyecto, etc. deba ser revelada, pero sí representan un
elevado riesgo en relación con la
ingeniería social, ya que de ellos se puede
deducir información muy valiosa sobre la
organización.
Datos que contienen información de El riesgo asociado es muy bajo, ya que las
estadísticas del documento como estadísticas almacenan detalles de
Estadísticas
número de páginas, líneas, palabras, edición del documento y no revelan
tiempo de edición, etc. información sensible.
El riesgo asociado consiste en que revelar
Datos que contienen fechas
información asociada a las fechas del
asociadas al documento: Fecha de
Fechas documento, puede resultar en algunas
creación, de última modificación, de
circunstancias un gran inconveniente para
última impresión, etc.
la organización.
Las versiones de un documento se
El riesgo consiste en dejar accesibles
pueden almacenar en un mismo
Versiones versiones anteriores del documento que
fichero. Esto permite recuperar una
no fueron creadas para su distribución.
versión anterior del documento.
Centro Crip tológico Nacional SIN CLASIFICAR 15

|  | TIPO DE METADATO |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | DESCRIPCIÓN |  |  | RIESGOS |  |
|  | O DATO OCULTO |  |  |  |  |  |  |  |
|  |  |  | Datos que contienen información <br> descriptiva del documento, como <br> Título, Asunto, Etiquetas, Categoría, <br> Comentarios, Autor, Administrador, <br> Compañía, Plantilla, etc. |  |  | Uno de los riesgos asociados consiste en <br> revelar información sobre el documento <br> que pueda resultar sensible. Por ejemplo, <br> los nombres de usuario (Autor, <br> Administrador o última persona que <br> modificó el documento) son información <br> personal que afecta a la privacidad. <br> También supone un riesgo que el <br> documento cuente con información <br> obsoleta o incorrecta en estos datos y el <br> documento se reutiliza para otros fines. <br> Finalmente está el riesgo asociado a la <br> ingeniería social y sus capacidades de <br> obtener información a través de estos <br> datos. |  |  |
|  | Propiedades |  |  |  |  |  |  |  |
|  | Estándar |  |  |  |  |  |  |  |
|  |  |  | Datos insertados a medida por los <br> usuarios o por la organización. Por <br> ejemplo, Cliente, Departamento, <br> División, Identificador del <br> documento, Proyecto, etc. |  |  | Normalmente se utilizan para incluir <br> metadatos corporativos especificados por <br> la Política de Gestión documental de la <br> organización y sirven para posibilitar la <br> gestión del documento a lo largo de su <br> ciclo de vida. El riesgo asociado a estos <br> metadatos depende de su contenido y de <br> la información sensible que incluyan y no <br> deba ser revelada, pero sí representan un <br> elevado riesgo en relación con la <br> ingeniería social, ya que de ellos se puede <br> deducir información muy valiosa sobre la <br> organización. |  |  |
|  | Propiedades |  |  |  |  |  |  |  |
|  | Personalizadas |  |  |  |  |  |  |  |
|  |  |  | Datos que contienen información de <br> estadísticas del documento como <br> número de páginas, líneas, palabras, <br> tiempo de edición, etc. |  |  | El riesgo asociado es muy bajo, ya que las <br> estadísticas almacenan detalles de <br> edición del documento y no revelan <br> información sensible. |  |  |
|  | Estadísticas |  |  |  |  |  |  |  |
|  |  |  | Datos que contienen fechas <br> asociadas al documento: Fecha de <br> creación, de última modificación, de <br> última impresión, etc. |  |  | El riesgo asociado consiste en que revelar <br> información asociada a las fechas del <br> documento, puede resultar en algunas <br> circunstancias un gran inconveniente para <br> la organización. |  |  |
|  | Fechas |  |  |  |  |  |  |  |
|  |  |  | Las versiones de un documento se <br> pueden almacenar en un mismo <br> fichero. Esto permite recuperar una <br> versión anterior del documento. |  |  | El riesgo consiste en dejar accesibles <br> versiones anteriores del documento que <br> no fueron creadas para su distribución. |  |  |
|  | Versiones |  |  |  |  |  |  |  |


![Imagen 1 - Página 15](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina15_img1.png)

---

<!-- Página 16 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
TIPO DE METADATO
DESCRIPCIÓN RIESGOS
O DATO OCULTO
El riesgo de que el documento contenga
la ruta de red a un fichero, supone
proporcionar una vista de la topología de
red de la organización y desvelar nombres
Los documentos pueden contener
de carpetas que podrían contener
otros archivos insertados (por
información sensible (por ejemplo,
Rutas de archivos ejemplo archivos multimedia) y
nombres de clientes). Este dato es muy
almacenar la ruta completa del
valioso para la ingeniería social, ya que
archivo.
revela información sensible sobre el
entorno tecnológico de la organización
permitiendo diseñar ataques dirigidos.
El riesgo asociado es la exposición de
Los documentos pueden contener
información personal (normalmente
los nombres de los últimos autores
nombres de usuario) y la visibilidad de
Histórico de Autores que guardaron el documento,
rutas locales o de red que indiquen dónde
del documento almacenados en un área del
se almacenó cada versión del documento.
documento inaccesible a través de
Claramente, esta información es muy
la aplicación.
valiosa para la ingeniería social.
Los documentos pueden contener En función del tipo de comentario o
comentarios y registros de cambios, registro de revisión, el riesgo puede
Comentarios y
insertados por las personas que han resultar menor (si por ejemplo el objetivo
registros de revisión
llevado a cabo la revisión del es clarificar algún texto) o mayor (si se
documento. trata de discusiones internas).
Los datos de la conexión son claramente
Los documentos pueden contener
datos sensibles, ya que posibilitan a un
conexiones a Bases de Datos desde
usuario no autorizado, realizar consultas
las que se importan datos. Estas
de forma independiente a una Base de
Conexiones a Bases conexiones pueden contener los
Datos que puede contener datos
de Datos datos del Servidor de Base de datos,
sensibles. Además, las sentencias de
nombres y contraseñas de conexión
consulta también tienen el riesgo de ser
y sentencias de consulta a la Base de
utilizadas para deducir la estructura de la
Datos.
Base de Datos.
Los documentos insertados (archivos
origen) pueden traer consigo metadatos
Los documentos pueden contener no visibles en el documento en el que se
Objetos Insertados
otros documentos insertados. insertan (archivo destino). El riesgo radica
en que estos metadatos contengan
información sensible.
Normalmente el documento contiene
Los documentos pueden contener objetos ocultos porque el usuario los ha
objetos ocultos, como imágenes, ocultado intencionadamente. Por lo tanto
Objetos Ocultos
gráficos, textos, hojas de cálculo, contienen información sensible que debe
diapositivas, etc. ser eliminada antes de distribuir el
documento.
Centro Crip tológico Nacional SIN CLASIFICAR 16

|  | TIPO DE METADATO |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | DESCRIPCIÓN |  |  | RIESGOS |  |
|  | O DATO OCULTO |  |  |  |  |  |  |  |
|  |  |  | Los documentos pueden contener <br> otros archivos insertados (por <br> ejemplo archivos multimedia) y <br> almacenar la ruta completa del <br> archivo. |  |  | El riesgo de que el documento contenga <br> la ruta de red a un fichero, supone <br> proporcionar una vista de la topología de <br> red de la organización y desvelar nombres <br> de carpetas que podrían contener <br> información sensible (por ejemplo, <br> nombres de clientes). Este dato es muy <br> valioso para la ingeniería social, ya que <br> revela información sensible sobre el <br> entorno tecnológico de la organización <br> permitiendo diseñar ataques dirigidos. |  |  |
|  | Rutas de archivos |  |  |  |  |  |  |  |
|  |  |  | Los documentos pueden contener <br> los nombres de los últimos autores <br> que guardaron el documento, <br> almacenados en un área del <br> documento inaccesible a través de <br> la aplicación. |  |  | El riesgo asociado es la exposición de <br> información personal (normalmente <br> nombres de usuario) y la visibilidad de <br> rutas locales o de red que indiquen dónde <br> se almacenó cada versión del documento. <br> Claramente, esta información es muy <br> valiosa para la ingeniería social. |  |  |
|  | Histórico de Autores |  |  |  |  |  |  |  |
|  | del documento |  |  |  |  |  |  |  |
|  |  |  | Los documentos pueden contener <br> comentarios y registros de cambios, <br> insertados por las personas que han <br> llevado a cabo la revisión del <br> documento. |  |  | En función del tipo de comentario o <br> registro de revisión, el riesgo puede <br> resultar menor (si por ejemplo el objetivo <br> es clarificar algún texto) o mayor (si se <br> trata de discusiones internas). |  |  |
|  | Comentarios y |  |  |  |  |  |  |  |
|  | registros de revisión |  |  |  |  |  |  |  |
|  |  |  | Los documentos pueden contener <br> conexiones a Bases de Datos desde <br> las que se importan datos. Estas <br> conexiones pueden contener los <br> datos del Servidor de Base de datos, <br> nombres y contraseñas de conexión <br> y sentencias de consulta a la Base de <br> Datos. |  |  | Los datos de la conexión son claramente <br> datos sensibles, ya que posibilitan a un <br> usuario no autorizado, realizar consultas <br> de forma independiente a una Base de <br> Datos que puede contener datos <br> sensibles. Además, las sentencias de <br> consulta también tienen el riesgo de ser <br> utilizadas para deducir la estructura de la <br> Base de Datos. |  |  |
|  | Conexiones a Bases |  |  |  |  |  |  |  |
|  | de Datos |  |  |  |  |  |  |  |
|  |  |  | Los documentos pueden contener <br> otros documentos insertados. |  |  | Los documentos insertados (archivos <br> origen) pueden traer consigo metadatos <br> no visibles en el documento en el que se <br> insertan (archivo destino). El riesgo radica <br> en que estos metadatos contengan <br> información sensible. |  |  |
|  | Objetos Insertados |  |  |  |  |  |  |  |
|  |  |  | Los documentos pueden contener <br> objetos ocultos, como imágenes, <br> gráficos, textos, hojas de cálculo, <br> diapositivas, etc. |  |  | Normalmente el documento contiene <br> objetos ocultos porque el usuario los ha <br> ocultado intencionadamente. Por lo tanto <br> contienen información sensible que debe <br> ser eliminada antes de distribuir el <br> documento. |  |  |
|  | Objetos Ocultos |  |  |  |  |  |  |  |


![Imagen 1 - Página 16](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina16_img1.png)

---

<!-- Página 17 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
TIPO DE METADATO
DESCRIPCIÓN RIESGOS
O DATO OCULTO
Las macros y otro tipo de código, además
de la posibilidad de distribuir código
Los documentos pueden contener malicioso, también pueden contener
Macros y Código macros u otro tipo de código (por información sensible dentro del código
ejemplo en Visual Basic). (nombres de usuario, comentarios y
líneas de código confidenciales para
acceder a los recursos corporativos).
El riesgo asociado consiste en que se está
revelando información de la ruta de la
impresora de red y puede que también
Los documentos pueden almacenar
Información de datos de la impresora (fabricante y
información de la impresora de red
Impresoras modelo). Al igual que otras rutas, estos
utilizada.
son datos valiosos para la ingeniería
social, que puede deducir la topología y
entorno tecnológico de la organización.
El riesgo asociado es que los hipervínculos
sean enlaces a recursos ubicados en la
Los documentos pueden contener red interna de la organización, y se pueda
Hipervínculos
hipervínculos. desvelar a través de la ruta, la topología
de red de la organización o información
sensible de nombre de carpetas.
Tabla 2.- Metadatos y datos ocultos en los documentos y sus riesgos asociados.
5. MEDIDAS DE SEGURIDAD EN EL ENS
42. El Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de
Seguridad en el ámbito de la Administración Electrónica (ENS), modificado a su vez
por el Real Decreto 951/2015, de 23 de octubre, es de aplicación por las
Administraciones Públicas y tiene como objetivo asegurar el acceso,
confidencialidad, integridad, autenticidad, trazabilidad, disponibilidad y
conservación de los datos, informaciones y servicios utilizados en los medios
electrónicos que gestionen el ejercicio de sus competencias.
43. El ENS establece una serie de medidas de seguridad en su Anexo II, que se
aplicarán “para lograr el cumplimiento de los principios básicos y requisitos
mínimos establecidos” y que “serán proporcionales a las dimensiones de seguridad
relevantes en el sistema a proteger y a la categoría del sistema de información a
proteger”.
44. Dentro de estas medidas de seguridad definidas en el ENS, las medidas de
protección [mp] “se centran en proteger activos concretos, según su naturaleza y la
calidad exigida por el nivel de seguridad de las dimensiones afectadas”.
45. Dentro de las medidas de protección, la [mp.info.6] se refiere a la “Limpieza de
documentos”, y es una medida destinada a la protección de la Confidencialidad de
Centro Crip tológico Nacional SIN CLASIFICAR 17

|  | TIPO DE METADATO |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | DESCRIPCIÓN |  |  | RIESGOS |  |
|  | O DATO OCULTO |  |  |  |  |  |  |  |
|  |  |  | Los documentos pueden contener <br> macros u otro tipo de código (por <br> ejemplo en Visual Basic). |  |  | Las macros y otro tipo de código, además <br> de la posibilidad de distribuir código <br> malicioso, también pueden contener <br> información sensible dentro del código <br> (nombres de usuario, comentarios y <br> líneas de código confidenciales para <br> acceder a los recursos corporativos). |  |  |
|  | Macros y Código |  |  |  |  |  |  |  |
|  |  |  | Los documentos pueden almacenar <br> información de la impresora de red <br> utilizada. |  |  | El riesgo asociado consiste en que se está <br> revelando información de la ruta de la <br> impresora de red y puede que también <br> datos de la impresora (fabricante y <br> modelo). Al igual que otras rutas, estos <br> son datos valiosos para la ingeniería <br> social, que puede deducir la topología y <br> entorno tecnológico de la organización. |  |  |
|  | Información de |  |  |  |  |  |  |  |
|  | Impresoras |  |  |  |  |  |  |  |
|  |  |  | Los documentos pueden contener <br> hipervínculos. |  |  | El riesgo asociado es que los hipervínculos <br> sean enlaces a recursos ubicados en la <br> red interna de la organización, y se pueda <br> desvelar a través de la ruta, la topología <br> de red de la organización o información <br> sensible de nombre de carpetas. |  |  |
|  | Hipervínculos |  |  |  |  |  |  |  |


![Imagen 1 - Página 17](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina17_img1.png)

---

<!-- Página 18 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
la Información, que aplica por igual a todos los Sistemas, cualquiera que sea su
nivel de seguridad exigido (Alto, Medio o Bajo).
46. Se consideran como documentos electrónicos, los archivos de imagen (por
ejemplo, fotografías digitales), los archivos multimedia, los documentos PDF, las
hojas de cálculo, las presentaciones, gráficos, los documentos de texto
formateado, etc.
47. La medida de protección [mp.info.6] determina que “En el proceso de limpieza de
documentos, se retirará de estos toda la información adicional contenida en
campos ocultos, metadatos, comentarios o revisiones anteriores, salvo cuando
dicha información sea pertinente para el receptor del documento”.
48. El primer requisito que se extrae por lo tanto de la medida, es la necesidad de que
exista en la organización un proceso de limpieza de documentos en el que
deberán tenerse en cuenta no sólo los metadatos, sino también otro tipo de
información o datos ocultos que puedan contener los documentos. Y que, tal y
como se indica en la [mp.info.6], dicho proceso deberá aplicarse especialmente
“cuando el documento se difunde ampliamente, como ocurre cuando se ofrece al
público en un servidor web y otro tipo de repositorio de información”.
49. El Proceso de limpieza de documentos deberá indicar las herramientas a emplear
en función del tipo de documento, y cómo se utilizará cada una de ellas para
eliminar el metadato o dato oculto deseado. Deberá incluir el detalle de las
acciones a llevar a cabo para completar la limpieza del documento, y también las
acciones necesarias para verificar que la limpieza se ha completado de forma
efectiva.
50. La medida de protección [mp.info.6] no especifica, sin embargo, cuáles son los
metadatos o datos ocultos que deben eliminarse. Esto dependerá, por un lado, de
las circunstancias en las que el documento va a ser almacenado o distribuido y, por
otro lado, también dependerá de las necesidades, criterios y normativa específica
de la organización. Deberá ser la Política de Gestión Documental de la organización
la que defina por lo tanto qué metadatos y datos ocultos no deben estar presentes
en los documentos según los escenarios siendo el procedimiento de limpieza de
documentos el que especifique cómo eliminar estos metadatos.
51. En muchos casos puede no resultar conveniente mantener metadatos relacionados
con información personal (PII), como el autor, o el usuario o usuarios que
realizaron cambios en el documento, especialmente cuando tales datos hayan sido
introducidos de forma automática por los dispositivos o los programas, sin
intervención del usuario o de la organización. Serán este tipo de metadatos los que
exijan una especial revisión dentro del proceso de limpieza de documentos de la
organización.
52. Por otro lado, existen metadatos, como los relacionados con la información de
copyright, que no deben eliminarse. En la advertencia de copyright, el propietario
reivindica que el documento no puede usarse sin autorización por ninguna otra
persona u organización. Los metadatos de copyright, por lo tanto, deben
Centro Crip tológico Nacional SIN CLASIFICAR 18

![Imagen 1 - Página 18](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina18_img1.png)

---

<!-- Página 19 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
permanecer en los documentos para indicar a otros, los derechos de uso del
archivo.
53. Además de la medida de protección de la información [mp.info.6], que exige un
proceso de limpieza de documentos en la organización, existen también otras
medidas dentro del ENS que emanan de ésta o se relacionan con ella, tal y como se
indica en la siguiente figura.
Figura 2.- Medidas del ENS relacionadas.
54. Medida [op.exp.2] - Configuración de seguridad.
Esta medida de seguridad, perteneciente al conjunto de medidas del marco
operacional definidas en el ENS, y de aplicación a todos los sistemas
independientemente de su categoría, establece entre sus directrices la necesidad
de aplicar las reglas de “seguridad por defecto” y “mínima funcionalidad” a los
sistemas. Si extendemos estas reglas a los documentos electrónicos, se derivan los
siguientes requisitos:
a) Los documentos deberán contener únicamente la información requerida
para que la organización alcance sus objetivos, y ninguna otra información.
b) Se eliminará o desactivará mediante control de la configuración, el
almacenado de aquella información que no sea de interés, no sea necesaria,
e incluso sea inadecuada para el fin que se persigue.
c) Las medidas de seguridad activadas sobre los documentos serán respetuosas
con el usuario y protegerán a éste, salvo que se exponga conscientemente a
un riesgo.
d) Para reducir la seguridad en los documentos, el usuario tiene que realizar
acciones conscientes.
e) El uso natural, en los casos que el usuario no ha consultado el procedimiento,
será un uso seguro.
Centro Crip tológico Nacional SIN CLASIFICAR 19

![Imagen 1 - Página 19](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina19_img1.png)

![Imagen 2 - Página 19](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina19_img2.png)

---

<!-- Página 20 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Estos requisitos sobre los documentos electrónicos, están alineados con el
objetivo que se persigue con el proceso de limpieza de documentos especificado
en la [mp.info.6].
De ellos se deriva la necesidad de establecer la configuración de seguridad en
los dispositivos y programas de generación y tratamiento de documentos, que
favorezca el cumplimiento de estos requisitos en los documentos electrónicos y
ayude, por lo tanto, al cumplimiento de la [mp.info.6].
55. Medida [org.3] - Procedimientos de seguridad.
Esta medida de seguridad, perteneciente al conjunto de medidas del marco
organizativo definidas en el ENS y de aplicación a todos los sistemas
independientemente de su categoría, establece que la organización deberá
disponer de una serie de procedimientos de seguridad y los requisitos que éstos
deberán cumplir.
Puesto que de las medidas de Limpieza de Documentos [mp.info.6] y
Configuración de Seguridad [op.exp.2] se derivan dos (2) procedimientos, éstos
deberán formar parte de los procedimientos de seguridad y deberán cumplir los
requisitos establecidos en esta medida, por lo que “deberán detallar de forma clara
y precisa”:
a) Cómo llevar a cabo las tareas habituales.
b) Quién debe hacer cada tarea.
c) Cómo identificar y reportar comportamientos anómalos.
56. Medida [mp.per.3] - Concienciación y [mp.per.4] - Formación
Estas medidas de seguridad, pertenecientes al conjunto de medidas de
protección definidas en el ENS y relacionadas con la gestión del personal,
establecen requisitos sobre la concienciación y la formación continua y regular del
personal. Para lograr el cumplimiento de estos requisitos, deberá tenerse en
cuenta la limpieza de documentos especificada en la medida [mp.info.6].
Dentro de las acciones de concienciación, deberá incluirse la concienciación a
los usuarios en la necesidad de limpieza de documentos, y en los riesgos asociados
con revelar información sensible o confidencial, a través de metadatos incluidos en
documentos que no han sido saneados adecuadamente. Tal y como se indica en el
ENS, “esta medida es especialmente relevante cuando el documento se difunde
ampliamente, como ocurre cuando se ofrece al público en un servidor web y otro
tipo de repositorio de información”.
Igualmente, dentro de las acciones de formación, es necesario llevar a cabo
acciones de formación relativas a la adecuada gestión de los documentos
electrónicos. Especialmente deberán conocer el proceso de limpieza de
documentos y cómo y con qué herramientas deberán llevase a cabo.
57. Otras acciones recomendables que pueden ayudar a lograr el objetivo de limpieza
de documentos, y con ello a mitigar el riesgo asociado a revelar información a
Centro Crip tológico Nacional SIN CLASIFICAR 20

![Imagen 1 - Página 20](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina20_img1.png)

---

<!-- Página 21 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
través de los metadatos, son las siguientes:
- Utilizar herramientas evaluadas para realizar la inspección y borrado de
metadatos.
- Configurar en las herramientas de seguridad de la organización, tales como
cortafuegos, IPS/IDS, etc., las reglas adecuadas para detectar y bloquear los
escaneos cuyo fin sea la extracción y análisis de metadatos.
- Realizar supervisiones periódicas de las actividades realizadas por el personal y
de los documentos generados, para verificar el cumplimiento y la efectividad del
proceso de limpieza, siempre que esté permitido por la legislación o las
normativas vigentes.
- Existe una categoría especial de herramientas de inspección de metadatos, cuyo
objetivo es recopilar y examinar los metadatos de los archivos de información
que se le indiquen y sacar conclusiones a partir de ellos. Las llamadas
Herramientas de Análisis de Metadatos del Apartado 6 de esta guía.
58. Es necesario hacer énfasis en que el equipo del usuario, ya sea un ordenador o
dispositivo móvil, debe cumplir con la Normativa de seguridad vigente en la
organización de tal manera que implemente una configuración de seguridad
apropiada que permita un uso seguro de los equipos y dispositivos empleados. Por
otro lado, hay que tener en cuenta las recomendaciones recogidas en las guías
CCN-STIC pudiendo ser de aplicación la CCN-STIC-827 sobre Gestión y uso de
dispositivos móviles o las series CCN-STIC-850 y 899 sobre la implantación del ENS
para sistemas MS Windows.
59. Por último, son de aplicación las recomendaciones realizadas en la presente guía,
relativas a la configuración de seguridad apropiada en los dispositivos y programas
de generación y/o tratamiento de documentos electrónicos, en relación con el
almacenamiento automático de metadatos.
6. HERRAMIENTAS DE INSPECCIÓN Y BORRADO DE METADATOS
60. En general, los dispositivos y los programas dificultan la visualización, edición o
borrado de los metadatos adjuntos en los documentos, ya que muchas veces estos
metadatos se encuentran en lugares que no son fáciles de alcanzar por los usuarios
habituales.
61. Algunos sistemas operativos, como por ejemplo Microsoft Windows, permiten
visualizar determinados metadatos contenidos en los documentos de forma
sencilla, basta con seleccionar el archivo, hacer clic con el botón derecho del ratón
y seleccionar Propiedades.
62. Algunos programas incluyen utilidades para visualizar, editar o eliminar metadatos
(por ejemplo, el Inspector de Documentos de Microsoft Office para Windows a
partir de la versión 2007 o la utilidad de Eliminar Información oculta de Adobe
Acrobat X).
63. También existe una variedad bastante amplia, de programas gratuitos, y programas
Centro Crip tológico Nacional SIN CLASIFICAR 21

![Imagen 1 - Página 21](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina21_img1.png)

---

<!-- Página 22 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
comerciales diseñados para inspeccionar, editar y eliminar metadatos en diversos
formatos para multitud de tipos de documentos. La Guía CCN-STIC-818 de
Herramientas de Seguridad en el ENS, en su Anexo A incluye varias de estas
herramientas.
64. Normalmente, estas herramientas de inspección y borrado de metadatos son
automáticas, es decir, permiten aplicar una configuración específica de manera
uniforme a toda la organización, para cumplir con los requisitos establecidos en la
Política de Gestión Documental sobre la presencia de metadatos, y no requieren de
la intervención de los usuarios.
65. El uso de las herramientas de inspección y borrado de metadatos puede reportar
grandes beneficios a la organización:
- Reducción del riesgo, al depurar los metadatos de los documentos de forma
automática antes de que puedan ser distribuidos fuera de la organización
evitando costes financieros o daño en la reputación.
- Incremento de la seguridad, ya que previenen de revelar información privada o
sensible.
- Ahorro de tiempo, ya que al ser automáticas evitan repetir las actividades que
supone depurar de forma manual los documentos.
- Cumplimiento de normativas y regulaciones y cumplimiento de la Política de
Gestión Documental de la organización.
6.1 Tipos de Herramientas
66. Tipos de herramientas según su propósito:
a) Inspección y borrado de metadatos, cuyo objetivo es inspeccionar los
metadatos asociados a los documentos, visualizarlos, modificarlos o
eliminarlos.
b) Búsqueda de Metadatos, cuyo objetivo es buscar documentos a partir de los
valores de sus metadatos.
c) Análisis de Metadatos, cuyo objetivo es analizar los metadatos de los
documentos para inferir datos a partir de ellos.
d) Dentro de estas herramientas, merecen especial mención aquellas
especializadas en la búsqueda, inspección y análisis de metadatos de
documentos publicados en Internet. Son herramientas especializadas en usar
varios buscadores para encontrar y descargar todos los documentos de un
dominio web, extraer sus metadatos y llevar a cabo el análisis para deducir
información útil, como por ejemplo documentos creados desde un mismo
equipo, y qué servidores y clientes se pueden inferir de ellos.
Centro Crip tológico Nacional SIN CLASIFICAR 22

![Imagen 1 - Página 22](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina22_img1.png)

---

<!-- Página 23 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Es habitual que una misma herramienta cumpla varios propósitos de los
anteriores. La organización debe disponer al menos, de herramientas de inspección
y borrado de metadatos, para llevar a cabo las actividades de revisión y limpieza de
metadatos de sus documentos, necesarias para el proceso de limpieza de
documentos.
67. Tipos de herramientas según el tipo de documento y formato de metadatos que
tratan:
a) Metadatos en documentos ofimáticos y PDF. Herramientas especializadas en
el tratamiento de metadatos de documentos ofimáticos (generados por
programas ofimáticos como Microsoft Office o Apache OpenOffice) y PDF,
tanto incrustados en el propio contenido del documento, como separados en
otro archivo.
Estas herramientas normalmente además de los metadatos, también
inspeccionan y eliminan información o datos ocultos en los documentos, e
incluso pueden revisar, modificar o censurar su contenido siguiendo patrones
y reglas.
b) Metadatos en documentos de imagen. Herramientas especializadas en el
tratamiento de metadatos de documentos de imágenes con formatos de
metadatos especializados como EXIF, XMP, IPTC-IMM, IPTC Core & Extensión,
etc.
c) Metadatos en documentos multimedia. Herramientas especializadas en el
tratamiento de metadatos en documentos multimedia como audio o vídeo
con formatos de metadatos especializados como XMP, APE tag, ID3 tag, etc.
Es habitual que una herramienta de tratamiento de metadatos trate varios
tipos de documentos y formatos de metadatos.
68. Según su arquitectura:
a) Basadas en Cliente (Client Based). Herramientas que se instalan y operan en
la parte cliente, es decir, localmente en los equipos de los usuarios.
b) Basadas en Servidor (Server Based). Herramientas que se instalan y operan
en la parte servidor (servidores de archivos, servidores de correo electrónico,
etc.) y que dan servicio de forma centralizada a todos los usuarios.
69. Según su modo de operación:
a) Inspección de documentos almacenados (data at rest). Herramientas que
inspeccionan documentos que se encuentran almacenados (en servidores de
ficheros, estaciones de trabajo, sistemas de almacenamiento, etc.),
permitiendo seleccionarlos para buscar y eliminar metadatos. Algunas de
ellas tienen capacidades para procesar varios documentos simultáneamente
(lo que se llama procesamiento batch).
Estas herramientas pueden funcionar de forma automática eliminando todos
los metadatos y datos ocultos que encuentren en su inspección, y según las
Centro Crip tológico Nacional SIN CLASIFICAR 23

![Imagen 1 - Página 23](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina23_img1.png)

---

<!-- Página 24 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
reglas que se hayan configurado en la herramienta, o bien pueden informar
al usuario o administrador de los datos encontrados y requerir su
intervención para proceder a eliminarlos.
b) Inspección de documentos en tránsito (data in transit). Herramientas que se
instalan habitualmente en los servidores de correo electrónico de la
organización (basadas en servidor) y permiten configurar reglas para realizar
la inspección y borrado de los metadatos incluidos en los documentos
adjuntos de todos y cada uno de los correos electrónicos de la organización,
antes de realizar su envío al destino.
Estas herramientas se configuran de acuerdo a un conjunto de reglas
establecidas por la organización de forma centralizada dictadas por su
Política de Gestión Documental.
Existen otras herramientas con la misma finalidad que se instalan en el
cliente de correo electrónico (basadas en cliente), de forma que cuando el
usuario envía un correo electrónico que lleva adjunto un documento, la
herramienta lo detecta e informa al usuario ofreciendo la posibilidad de
inspeccionar el documento en busca de metadatos para depurarlo.
Figura 3.- Diagrama ejemplo del funcionamiento de una herramienta de inspección y borrado de
metadatos para correo electrónico.
c) Ambas herramientas pueden funcionar de forma automática, realizando la
inspección y depuración del documento adjunto según las reglas
configuradas, o bien pueden funcionar de forma manual y avisar al usuario
de la presencia del documento adjunto y requerir su intervención para
realizar la inspección y eliminación de los metadatos.
d) Estas herramientas también pueden admitir excepciones y disponer, por
ejemplo, de listas blancas, de forma que cuando los mensajes vayan dirigidos
a determinados destinatarios no se realice la inspección o permitir que los
Centro Crip tológico Nacional SIN CLASIFICAR 24

![Imagen 1 - Página 24](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina24_img1.png)

![Imagen 2 - Página 24](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina24_img2.png)

---

<!-- Página 25 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
usuarios impidan la inspección de ciertos correos especificando algún tipo de
etiqueta en el asunto del correo.
70. Según el tipo de dispositivo:
a) Herramientas para Ordenadores. Herramientas diseñadas para funcionar en
PC o estaciones de trabajo (herramientas basadas en cliente) o servidores
(herramientas basadas en servidor). Constituyen la mayor parte de las
herramientas de inspección y borrado de metadatos y pueden tratar muchos
formatos de metadatos y documentos.
b) Herramientas para Smartphones y Tablets. Existen muchas herramientas de
inspección y borrado de metadatos para documentos de imagen, disponibles
para iOS (desde iTunes) y Android (desde Google Play). Algunas son gratuitas
y otras son comerciales. Para la inspección de documentos ofimáticos y PDF,
existen herramientas para ordenadores que disponen de clientes para su uso
en dispositivos móviles.
6.2 Características de las Herramientas
71. A continuación, se relacionan una serie de características recomendables, que las
organizaciones deben tener en cuenta a la hora de seleccionar una herramienta de
inspección y borrado de metadatos adecuada para el Proceso de limpieza de
documentos.
72. Integración con el Sistema de Gestión documental de la organización.
Es recomendable que la herramienta pueda integrarse con el sistema de
gestión documental que se utilice en la organización, para la gestión del ciclo de
vida de los documentos.
De esta forma, la herramienta participará en el flujo de trabajo del
documento y así, por ejemplo, cuando un documento pase de borrador a versión
definitiva, cuando sea exportado del sistema o cuando finalice su ciclo de vida, será
automáticamente inspeccionado y sus metadatos serán depurados según los
requisitos especificados en la Política de Gestión Documental, que definirán
múltiples criterios en función del tipo y clasificación de los documentos, o de los
usuarios que lleven a cabo determinadas acciones.
73. Flexibilidad de reglas.
Es recomendable que la herramienta tenga flexibilidad, a la hora de
configurar las reglas bajo las que realizará la inspección y depuración de los
metadatos del documento.
Debe permitir la implementación de reglas sofisticadas para ofrecer mayores
posibilidades de satisfacer los requisitos de la Política de Gestión Documental,
siempre manteniendo el equilibrio con la simplicidad y usabilidad que faciliten el
uso de la herramienta por parte de los usuarios y administradores.
Centro Crip tológico Nacional SIN CLASIFICAR 25

![Imagen 1 - Página 25](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina25_img1.png)

---

<!-- Página 26 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
74. Flexibilidad en Formatos de documentos.
Es recomendable que la herramienta pueda realizar la inspección y
depuración de metadatos de los formatos de documentos más extendidos (al
menos Microsoft Office, OpenOffice y PDF). También es recomendable que
disponga de compatibilidad con versiones obsoletas (por ejemplo, Microsoft Office
2000) ya que existirán muchos documentos creados en el pasado que pueden
necesitar ser inspeccionados y depurados. También es recomendable que tenga
capacidad de detectar metadatos, aunque los documentos se encuentren en
formato comprimido (en un ZIP, por ejemplo).
75. Flexibilidad en Formatos de Metadatos.
Es recomendable que la herramienta pueda realizar la inspección y
depuración de metadatos tanto incrustados en los documentos a examinar, como
introducidos en ficheros separados y en múltiples formatos: EXIF, IPTC, XMP,
Dublin Core, etc.
76. Soluciones basadas en Servidor.
Es recomendable que la solución se base en Servidor, de forma que no sea
necesaria la instalación de software en cada uno de los equipos de los usuarios, lo
cual además de añadir complejidad a su instalación y despliegue, podría elevar el
coste con mucha probabilidad.
77. Independencia de la Plataforma.
Es recomendable que la herramienta sea independiente de la plataforma, y
sea compatible con los sistemas operativos más extendidos para equipos y
estaciones de trabajo de usuarios, sistemas de virtualización de escritorio,
servidores o sistemas de correo electrónico (incluidos webmails).
78. Simplicidad y Usabilidad.
Es recomendable que la herramienta sea sencilla de manejar e intuitiva, lo
que facilitará su manejo a los usuarios y administradores y reducirá costes y
tiempos de formación.
79. Inspección de información o datos ocultos.
Es recomendable que la herramienta tenga capacidad para además de los
metadatos, inspeccionar y depurar también información o datos ocultos, como
texto u objetos invisibles, capas ocultas, comentarios, rutas de archivos, etc.
80. Tratamiento masivo de documentos y escalabilidad.
Es recomendable que la herramienta disponga de capacidades para el
tratamiento masivo de documentos y que sea escalable, de forma que permita
desde inspeccionar y depurar un solo documento solicitado por un usuario, hasta
inspeccionar un número elevado de documentos simultáneos solicitados por el
administrador del sistema.
También deberá ser capaz de inspeccionar y tratar documentos de gran
tamaño, al menos del máximo tamaño de documento usado en la organización.
Centro Crip tológico Nacional SIN CLASIFICAR 26

![Imagen 1 - Página 26](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina26_img1.png)

---

<!-- Página 27 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
81. Automática.
Es recomendable que la herramienta tenga capacidad para funcionar de
forma automática gobernada por las reglas configuradas, sin necesidad de
intervención del usuario.
82. Análisis de resultados y elaboración de informes.
Es recomendable que la herramienta disponga de capacidad de análisis de los
resultados de la inspección realizada sobre los documentos, indicando al menos los
metadatos encontrados y el riesgo asociado a cada uno de ellos y permitiendo
exportar estos resultados a Informes.
83. Presentación de mensajes a los usuarios.
Es recomendable que la herramienta tenga capacidad de mostrar mensajes a
los usuarios. De esta forma, por ejemplo, se puede enviar un mensaje recordatorio
de la necesidad de depurar los metadatos de un documento antes de enviarlo por
correo electrónico, cuando haya detectado de forma automática un correo con
archivo adjunto, o para transmitirles cualquier otra información relevante.
84. Inspección de contenido.
Otra característica deseable es que la herramienta tenga capacidades de
inspección del contenido de documentos, de forma que se puedan especificar
expresiones regulares (palabras, frases o párrafos) que supongan información
sensible, para que la herramienta las detecte de forma automática y active la
correspondiente alarma.
Centro Crip tológico Nacional SIN CLASIFICAR 27

![Imagen 1 - Página 27](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina27_img1.png)

---

<!-- Página 28 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
ANEXO A. METADATOS EN DOCUMENTOS MICROSOFT OFFICE
85. Toda la información recogida en este anexo, aplica a los documentos generados
por los programas de Microsoft Office: Word, Excel y PowerPoint en versiones
2010, 2013 y 2016. Serán estos documentos a los que se haga referencia como
“documentos Office” a lo largo del anexo.
1. Tipos de Metadatos e Información oculta
86. Los documentos de Microsoft Office contienen metadatos en las Propiedades del
documento que incluyen detalles sobre el archivo para describirlo e identificarlo,
como el título, nombre del autor, asunto y etiquetas para identificar el contenido
del documento y poder filtrar en las búsquedas.
87. La información de Propiedades del documento contiene los siguientes datos:
a) Metadatos generados de forma automática por los programas de Office.
Incluyen datos y estadísticas que se generan y mantienen de forma
automática por los programas Office, tanto características propias del fichero
como son el tamaño, fechas de creación y de última modificación, o
localización del documento (para versiones de Excel 2013 o superiores),
como estadísticas (número de palabras o de páginas).
Esta información no puede ser modificada por el usuario y puede resultar
especialmente sensible ya que, al ser generada de forma automática, el
usuario puede no ser consciente de su existencia y con ella puede revelar
información que no desea difundir (por ejemplo, el Autor del documento).
b) Metadatos generados manualmente. Son propiedades cuyo valor se rellena
de forma manual. Incluyen por un lado metadatos estándar predefinidos por
la aplicación (como por ejemplo Título, Asunto, Etiquetas, Comentario, etc.).
Por otro lado, también incluyen metadatos personalizados, que definen un
tipo específico de metadatos representados por una etiqueta y un valor.
Estos metadatos son creados por el usuario o por la organización en
aplicación de la Política de Gestión Documental para la gestión, recuperación
y conservación de los documentos. Pueden contener información como el
identificador del documento, departamento, unidad, código de la oficina,
número de expediente asociado, advertencias de seguridad, etc.
88. A continuación, se muestra una tabla con los metadatos existentes en las
propiedades del documento, indicando si se generan de forma automática por el
programa, o de forma manual por el usuario u organización.
Generado de forma Generado de forma
Automática Manual
Tamaño X
(1)
Número de Páginas X
(1)
Número de Palabras X
(1)
Diapositivas X
(1)
Diapositivas ocultas X
Centro Crip tológico Nacional SIN CLASIFICAR 28

|  |  | Generado de forma |  |  | Generado de forma |  |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | Automática |  |  | Manual |  |
| Tamaño | X |  |  |  |  |  |
| Número de Páginas (1) | X |  |  |  |  |  |
| Número de Palabras (1) | X |  |  |  |  |  |
| Diapositivas (1) | X |  |  |  |  |  |
| Diapositivas ocultas (1) | X |  |  |  |  |  |


![Imagen 1 - Página 28](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina28_img1.png)

---

<!-- Página 29 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Generado de forma Generado de forma
Automática Manual
(1)
Notas X
(1)
Clips Multimedia X
(1)
Formato de Presentación X
(2)
Tiempo de Edición X
Título X
Etiquetas X
Comentarios X
(2)
Plantilla X
Estado X
Categorías X
Asunto X
Base de hipervínculo X
Compañía X
F/H última modificación X
F/H creación X
F/H última impresión X
Administrador X
(3)
Autor X
Último modificador X
(2)
Número de Revisiones X
(1) Estas propiedades estarán presentes o no, dependiendo del tipo de documento Office del que se trate. Por
ejemplo, el Número de páginas sólo estará presente en documentos Word.
(2) Estas propiedades no aplican a documentos Excel.
(3) El Autor es una propiedad creada automáticamente por los programas Office, pero que puede ser modificada o
incluso eliminada por el usuario.
Tabla 3. Propiedades de los documentos Microsoft Office 2010 (Word, Excel y PowerPoint).
89. La información de Propiedades de un documento Office, se puede visualizar de la
siguiente forma:
a) Con el archivo abierto, hacer clic en la pestaña Archivo y a continuación clic
en Información para ver las propiedades del documento, que aparecerán en
el lado derecho de la pantalla.
b) Para ver más propiedades, hacer clic en Mostrar todas las propiedades. Para
ver menos propiedades, hacer clic en Mostrar menos propiedades.
c) Para ver las propiedades personalizadas, hacer clic en Propiedades y
seleccionar Propiedades avanzadas. Se abrirá una ventana en la que se
muestran todas las propiedades del documento agrupadas en varias
pestañas. Las propiedades personalizadas estarán en la pestaña Personalizar.
d) En caso de que se hayan añadido metadatos particulares de la organización o
si el documento ha sido almacenado en un servidor de documentos,
posiblemente habrá más vistas adicionales disponibles.
90. Por otro lado, dentro del propio documento también puede existir información
Centro Crip tológico Nacional SIN CLASIFICAR 29

|  |  | Generado de forma |  |  | Generado de forma |  |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | Automática |  |  | Manual |  |
| Notas (1) | X |  |  |  |  |  |
| Clips Multimedia (1) | X |  |  |  |  |  |
| Formato de Presentación (1) | X |  |  |  |  |  |
| Tiempo de Edición (2) | X |  |  |  |  |  |
| Título |  |  |  | X |  |  |
| Etiquetas |  |  |  | X |  |  |
| Comentarios |  |  |  | X |  |  |
| Plantilla (2) | X |  |  |  |  |  |
| Estado |  |  |  | X |  |  |
| Categorías |  |  |  | X |  |  |
| Asunto |  |  |  | X |  |  |
| Base de hipervínculo |  |  |  | X |  |  |
| Compañía |  |  |  | X |  |  |
| F/H última modificación | X |  |  |  |  |  |
| F/H creación | X |  |  |  |  |  |
| F/H última impresión | X |  |  |  |  |  |
| Administrador |  |  |  | X |  |  |
| Autor | X (3) |  |  |  |  |  |
| Último modificador | X |  |  |  |  |  |
| Número de Revisiones (2) | X |  |  |  |  |  |


![Imagen 1 - Página 29](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina29_img1.png)

---

<!-- Página 30 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
oculta, es decir, información que no es visible a simple vista y de la cual el usuario
puede no ser consciente. Es por ello que este tipo de información debe ser objeto
de especial revisión, ya que podría descubrir a personas ajenas datos que el
responsable del documento no desea revelar.
91. La información oculta del documento puede contener los siguientes datos:
a) Comentarios, revisiones, versiones y anotaciones.
Comentarios y cambios insertados en el documento por personas que
colaboran en la revisión del mismo. Esta información normalmente es visible,
pero puede ser ocultada y contiene nombres o iniciales de los participantes
en la revisión del documento, sus comentarios y los cambios que realizaron.
b) Encabezados, Pies de página y marcas de agua.
Los documentos pueden contener información dentro de los encabezados y
pies de página o en las marcas de agua, que pueden no ser visibles a simple
vista.
c) Texto, Filas y Columnas, Hojas ocultas.
Los documentos Word pueden contener texto que ha sido formateado como
texto oculto. Los documentos Excel pueden contener filas, columnas y hojas
de cálculo ocultas.
d) Contenido invisible.
Los documentos pueden tener objetos invisibles (imágenes, formas, cuadros
de texto, gráficos, tablas, etc.) que pueden haber sido marcados como no
visibles.
e) Contenido externo a las diapositivas.
Los documentos PowerPoint pueden contener objetos que no son
inmediatamente visibles porque han sido colocados en el área externa a la
diapositiva. Estos objetos pueden ser cajas de texto, imágenes, gráficos y
tablas.
f) Notas de Presentación.
Los documentos PowerPoint tienen una sección para notas sobre la
presentación en la que se puede colocar texto. Normalmente estas notas
están escritas únicamente para la persona que va a llevar a cabo la
presentación y el autor no desea que sea compartido por nadie más.
g) Datos XML personalizados.
Los documentos pueden contener también datos XML que no son visibles
desde el propio documento.
h) Vínculos externos.
Las hojas de cálculo de un documento Excel, pueden contener vínculos a los
datos de hojas de cálculo de otros documentos Excel (vínculos externos). Los
nombres de esas hojas de cálculo que contienen los datos a los que el
documento está vinculado, se almacenan junto con el documento, pero
puede que no sean visibles.
Centro Crip tológico Nacional SIN CLASIFICAR 30

![Imagen 1 - Página 30](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina30_img1.png)

---

<!-- Página 31 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
i) Archivos incrustados u objetos.
Los documentos pueden tener incrustados archivos u objetos que podrían
tener metadatos asociados que no son visibles. Por ejemplo, si copiamos un
gráfico Excel en una diapositiva PowerPoint, estamos copiando el gráfico y
sus datos asociados, los cuales no son visibles, pero están en la caché.
j) Macros de código VBA.
Los documentos pueden contener macros, módulos VBA (Visual Basic para
Aplicaciones), controles ActiveX o COM, formularios de usuario o funciones
definidas por el usuario (UDF) que pueden contener datos ocultos.
k) Elementos que pueden tener datos en caché.
Algunas características de los programas Office utilizan datos en caché. Esto
puede ser un problema, ya que estos datos en cache pueden contener
metadatos y pueden quedar asociados al documento de forma oculta. Un
ejemplo es el uso de tablas y gráficos dinámicos en Excel, que almacena los
datos en caché para poder realizar de forma rápida el cálculo dinámico y
aunque se elimine posteriormente la tabla o el gráfico, esos datos de caché
quedan asociados al documento de forma no visible.
l) Encuestas de Excel.
Los documentos Excel (a partir de 2013) pueden contener de forma oculta
preguntas de las encuestas Excel que hayan sido introducidas desde Excel
Online, ya que han sido guardadas con el documento, pero no son visibles.
m) Escenarios del Administrador de escenarios.
Los documentos Excel pueden contener escenarios definidos a través del
Administrador de escenarios. Estos escenarios pueden contener datos
ocultos o en caché.
n) Filtros.
Los documentos Excel pueden contener filtros automáticos o filtros de tabla
activos que podrían provocar que se almacenen datos ocultos o en caché en
el documento. En caso de que, por ejemplo, apliquemos un filtro a una
columna y después borremos algunas de sus celdas, los valores borrados
pueden continuar en caché como parte del filtro, mientras que ya no
aparecen de forma visible en el documento.
o) Nombres ocultos.
Los documentos Excel pueden contener nombres ocultos que podrían ser el
origen de parte de los datos ocultos.
Word Excel PowerPoint
Comentarios, revisiones, versiones y anotaciones X X X
Propiedades del Documento e Información personal X X X
Encabezados, Pies de página y marcas de agua X X
Texto oculto X
Filas y Columnas ocultas X
Hojas de cálculo ocultas X
Centro Crip tológico Nacional SIN CLASIFICAR 31

|  |  | Word |  |  | Excel |  |  | PowerPoint |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Comentarios, revisiones, versiones y anotaciones | X |  |  | X |  |  | X |  |  |
| Propiedades del Documento e Información personal | X |  |  | X |  |  | X |  |  |
| Encabezados, Pies de página y marcas de agua | X |  |  | X |  |  |  |  |  |
| Texto oculto | X |  |  |  |  |  |  |  |  |
| Filas y Columnas ocultas |  |  |  | X |  |  |  |  |  |
| Hojas de cálculo ocultas |  |  |  | X |  |  |  |  |  |


![Imagen 1 - Página 31](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina31_img1.png)

---

<!-- Página 32 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Word Excel PowerPoint
Contenido Invisible X X X
Contenido externo a las diapositivas X
Notas de Presentación X
Datos XML personalizados X X
Vínculos externos X
Archivos incrustados y objetos X X X
Macros de código VBA X X X
Elementos que pueden tener datos en caché X X X
Encuestas de Excel X
Escenarios del Administrador de escenarios X
Filtros X
Nombres ocultos X
Tabla 4.- Información oculta en los documentos Office 2010/2013/2016.
92. Finalmente, además de los metadatos en Propiedades del documento y de la
Información oculta en documentos Office, los documentos también pueden
contener:
a) Metadatos con propiedades del Servidor de Documentos. En caso de que el
documento haya sido almacenado en un servidor de gestión de documentos,
como un espacio de trabajo de documentos o una librería basados en
Microsoft SharePoint Server, el documento puede contener propiedades
adicionales o información relacionada con el servidor de documentos.
b) Otros Metadatos. En caso de utilizar características especiales, el documento
puede contener tipos adicionales de información personal, como cabeceras
de correo electrónico (incrustadas en el documento al usar ciertas
características de flujos de revisión), información enviada para revisión o
listas de distribución del documento.
2. Configuración de Seguridad
93. Los programas Microsoft Office ofrecen varias opciones para llevar a cabo una
configuración de seguridad que ejerza el control sobre los datos personales que se
almacenan en el documento.
a) Especificar la información personal que aparece en todos los documentos de
Office
Es una buena práctica especificar de forma apropiada la información personal
que aparecerá en todos los documentos Office que un usuario vaya crear o
modificar.
Esta información se encuentra en las opciones de configuración de Office y
puede ser editada o eliminada, especificando con ello la información que se
mostrará en Autor del documento, Última persona que ha realizado
modificaciones y Autor de comentarios de revisión del documento.
Centro Crip tológico Nacional SIN CLASIFICAR 32

|  |  | Word |  |  | Excel |  |  | PowerPoint |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Contenido Invisible | X |  |  | X |  |  | X |  |  |
| Contenido externo a las diapositivas |  |  |  |  |  |  | X |  |  |
| Notas de Presentación |  |  |  |  |  |  | X |  |  |
| Datos XML personalizados | X |  |  | X |  |  |  |  |  |
| Vínculos externos |  |  |  | X |  |  |  |  |  |
| Archivos incrustados y objetos | X |  |  | X |  |  | X |  |  |
| Macros de código VBA | X |  |  | X |  |  | X |  |  |
| Elementos que pueden tener datos en caché | X |  |  | X |  |  | X |  |  |
| Encuestas de Excel |  |  |  | X |  |  |  |  |  |
| Escenarios del Administrador de escenarios |  |  |  | X |  |  |  |  |  |
| Filtros |  |  |  | X |  |  |  |  |  |
| Nombres ocultos |  |  |  | X |  |  |  |  |  |


![Imagen 1 - Página 32](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina32_img1.png)

---

<!-- Página 33 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Una vez que se actualiza la información de una aplicación de Office, la
información se actualiza automáticamente para el resto de aplicaciones de
Office.
La forma de acceder a esta información es la siguiente:
• Con el archivo abierto, hacer clic en Archivo y a continuación hacer clic
en Opciones. Se abrirá la ventana de Opciones de la aplicación,
seleccionar General.
• En el área de Personalizar la copia de Microsoft Office aparece el
Nombre de usuario (con el que Office rellenará de forma automática el
Autor y Última persona que ha realizado modificaciones en el
documento) y también las Iniciales (que se emplearán para identificar el
Autor de comentarios de revisión de documento).
b) No guardar la información personal de un documento Office
Otra buena práctica es evitar que se archive información personal cuando se
guarda un documento. Office permite seleccionar esta opción, de forma que
cada vez que el documento se guarde, no se almacenará ningún metadato
relacionado con información personal (Autor, Administrador, Última persona
que ha realizado modificaciones en el documento, Compañía o Autor de
comentarios de revisión del documento). Esta selección debe realizarse en
cada documento.
La forma de acceder a esta información es la siguiente:
• Con el archivo abierto, hacer clic en Archivo y a continuación hacer clic
en Opciones. Se abrirá la ventana de Opciones de la aplicación,
seleccionar Centro de Confianza y pulsar en Configuración del Centro de
Confianza. Se abre la ventana de Centro de Confianza.
• Seleccionar Opciones de privacidad y en el cuadro destinado a
Configuración específica del documento aparecerá la opción “Quitar
Información personal de las propiedades del archivo al guardarlo”. Esta
opción sólo podrá seleccionarse cuando previamente se haya eliminado
toda la información personal del documento y hace que cada vez que el
documento se guarde, se elimine la información personal.
3. Inspección y Borrado de Metadatos e Información oculta
94. Existen multitud de aplicaciones, tanto gratuitas, como comerciales, que realizan la
inspección y borrado de metadatos para documentos Microsoft Office. Aparte de
estas soluciones, Microsoft Office dispone de varias utilidades que permiten
eliminar metadatos de las propiedades de los documentos.
95. Una de ellas, es la opción de “Eliminar Propiedades e Información personal”, a la
que se accede haciendo clic sobre el nombre del archivo, botón derecho del ratón,
seleccionar Propiedades, seleccionar Detalles y pulsar la opción al final de la
ventana “Eliminar Propiedades e Información personal”.
96. Se recomienda el uso del Inspector de Documentos, que es una utilidad incluida en
Centro Crip tológico Nacional SIN CLASIFICAR 33

![Imagen 1 - Página 33](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina33_img1.png)

---

<!-- Página 34 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Microsoft Office para revisar documentos a partir de la versión de Office 2007. Esta
utilidad permite inspeccionar los documentos para revisar, modificar o eliminar no
sólo sus metadatos, sino también información y datos ocultos que pueda contener
el documento.
97. Es importante indicar que Microsoft no permite el uso del Inspector de
Documentos para revisar y eliminar información en documentos que han sido
protegidos o firmados. Tampoco en aquellos documentos que utilicen Information
Rights Management (IRM), que es una utilidad de Microsoft que permite restringir
los permisos de un documento para evitar que personas no autorizadas impriman,
reenvíen o copien información confidencial. Por lo tanto, antes de proteger o
firmar el archivo será cuando deba realizarse la revisión con el Inspector de
Documentos.
98. Asimismo, cuando se eliminen metadatos y datos ocultos a través del Inspector de
Documentos, es muy probable que éstos no puedan ser recuperados de nuevo con
el comando Deshacer, por lo que es recomendable realizar una copia del
documento original antes de eliminar los datos.
99. Funcionamiento del Inspector de Documentos
a) Abrir el documento que se quiere inspeccionar.
b) Realizar una copia del documento original, si procede.
c) Abrir el Inspector de Documentos. Se accede haciendo clic en Archivo,
seleccionar Información, hacer clic en Comprobar si hay problemas y
seleccionar Inspeccionar Documento.
d) Se abre una caja de diálogo en la que se deberá seleccionar el tipo de
metadatos e información oculta que se desea revisar en el documento. Una
vez seleccionados hacer clic en Inspeccionar.
e) Una vez que el Inspector de Documentos finaliza su inspección, muestra los
resultados de cada uno de los módulos inspeccionados en una ventana. Si ha
encontrado datos en un módulo determinado, la ventana incluirá el botón
“Quitar todo”, en el que podrá pincharse para borrar los datos encontrados
en ese módulo. Si no ha encontrado datos en el módulo, la ventana mostrará
un mensaje indicándolo.
f) En caso de haber seleccionado “Quitar todo” para un módulo, al finalizar se
mostrará un texto indicando si la operación se ha realizado con éxito o no. Si
el Inspector de Documentos encuentra errores en la operación, marcará con
un aviso el módulo y mostrará un mensaje de error, no modificando los datos
de ese módulo en el documento.
Centro Crip tológico Nacional SIN CLASIFICAR 34

![Imagen 1 - Página 34](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina34_img1.png)

---

<!-- Página 35 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
100. Información que inspecciona y elimina el Inspector de Documentos.
El Inspector de Documentos en sus módulos destinados a la inspección y
borrado de contenido invisible, sólo detectará aquel contenido que haya sido
formateado explícitamente como oculto o invisible. Por ejemplo, datos de un
documento Excel que hayan sido colocados en la fila 10.000 y que por lo tanto no
se encuentran dentro del área visible del documento, pueden considerarse por ello
ocultos, pero no son detectados por el Inspector de Documentos, que los
considerará como datos válidos.
Como excepción a esto, PowerPoint posee un módulo de Inspector de
Documentos que sí permite detectar contenido fuera de la diapositiva, pero al igual
que en Excel y Word, el Inspector de Documentos no detectará objetos no
formateados como invisibles, pero ocultados por otros métodos (por ejemplo,
formas sin contorno ni relleno, que por lo tanto no son visibles).
Word Excel PowerPoint
Propiedades del Documento e Información personal
- Metadatos generados de forma automática por los
programas Office
- Metadatos generados manualmente por el usuario o por la organización
- Propiedades del Servidor de documentos
- Otras propiedades
X X X
Fragmento de la Ventana del Inspector de Documentos relativo a Propiedades en un
documento Microsoft Word 2010.
Comentarios, revisiones, versiones y anotaciones
(1)
- Comentarios
- Marcas de revisión de los cambios realizados
- Información de versión del documento
(1)
- Anotaciones con lápiz
X
X
X Sólo
Sólo (1)
(1)
Fragmento de la Ventana del Inspector de Documentos relativo a Comentarios y
revisiones, en un documento Microsoft Word 2010.
Fragmento de la Ventana del Inspector de Documentos relativo a Comentarios y
revisiones, en un documento Microsoft Excel 2010.
Centro Crip tológico Nacional SIN CLASIFICAR 35

|  |  | Word |  |  | Excel |  |  | PowerPoint |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Propiedades del Documento e Información personal <br> - Metadatos generados de forma automática por los <br> programas Office <br> - Metadatos generados manualmente por el usuario o por la organización <br> - Propiedades del Servidor de documentos <br> - Otras propiedades <br> Fragmento de la Ventana del Inspector de Documentos relativo a Propiedades en un <br> documento Microsoft Word 2010. | X |  |  | X |  |  | X |  |  |
| Comentarios, revisiones, versiones y anotaciones <br> - Comentarios (1) <br> - Marcas de revisión de los cambios realizados <br> - Información de versión del documento <br> - Anotaciones con lápiz (1) <br> Fragmento de la Ventana del Inspector de Documentos relativo a Comentarios y <br> revisiones, en un documento Microsoft Word 2010. <br> Fragmento de la Ventana del Inspector de Documentos relativo a Comentarios y <br> revisiones, en un documento Microsoft Excel 2010. | X |  |  | X <br> Sólo <br> (1) |  |  | X <br> Sólo (1) |  |  |


![Imagen 1 - Página 35](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina35_img1.png)

![Imagen 2 - Página 35](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina35_img2.png)

![Imagen 3 - Página 35](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina35_img3.png)

![Imagen 4 - Página 35](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina35_img4.png)

---

<!-- Página 36 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Word Excel PowerPoint
Encabezados, Pies de página y marcas de agua
- Información de encabezados de los documentos (1)
- Información de los pies de página de los documentos (1)
- Marcas de Agua
X
X Sólo -
Fragmento de la Ventana del Inspector de Documentos relativo a encabezado y pie (1)
de página en un documento Microsoft Word 2010.
Fragmento de la Ventana del Inspector de Documentos relativo a encabezado y pie
de página en un documento Microsoft Excel 2010.
Texto oculto
- Texto cuyo formato es de texto oculto
- No detecta texto ocultado por otros métodos (por ejemplo, en color blanco)
X - -
Fragmento de la Ventana del Inspector de Documentos relativo a texto oculto en un
documento Microsoft Word 2010.
Filas y Columnas ocultas
- Filas ocultas
- Columnas ocultas que contienen datos o que no contienen datos en el caso de
que estén situadas entre columnas que sí los contengan.
- No detecta formas, gráficos, controles, objetos o controles de Microsoft
ActiveX, imágenes ni elementos gráficos SmartArt que puedan estar situados
en columnas ocultas.
- No elimina filas o columnas ocultas si forman parte de un encabezado de tabla,
- X -
de la lista o una tabla dinámica.
Fragmento de la Ventana del Inspector de Documentos relativo a filas y columnas
ocultas en un documento Microsoft Excel 2010.
Hojas de cálculo ocultas
- X -
Fragmento de la Ventana del Inspector de Documentos relativo a hojas ocultas en un
documento Microsoft Excel 2010.
Centro Crip tológico Nacional SIN CLASIFICAR 36

|  |  | Word |  |  | Excel |  |  | PowerPoint |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Encabezados, Pies de página y marcas de agua <br> - Información de encabezados de los documentos (1) <br> - Información de los pies de página de los documentos (1) <br> - Marcas de Agua <br> Fragmento de la Ventana del Inspector de Documentos relativo a encabezado y pie <br> de página en un documento Microsoft Word 2010. <br> Fragmento de la Ventana del Inspector de Documentos relativo a encabezado y pie <br> de página en un documento Microsoft Excel 2010. | X |  |  | X <br> Sólo <br> (1) |  |  | - |  |  |
| Texto oculto <br> - Texto cuyo formato es de texto oculto <br> - No detecta texto ocultado por otros métodos (por ejemplo, en color blanco) <br> Fragmento de la Ventana del Inspector de Documentos relativo a texto oculto en un <br> documento Microsoft Word 2010. | X |  |  | - |  |  | - |  |  |
| Filas y Columnas ocultas <br> - Filas ocultas <br> - Columnas ocultas que contienen datos o que no contienen datos en el caso de <br> que estén situadas entre columnas que sí los contengan. <br> - No detecta formas, gráficos, controles, objetos o controles de Microsoft <br> ActiveX, imágenes ni elementos gráficos SmartArt que puedan estar situados <br> en columnas ocultas. <br> - No elimina filas o columnas ocultas si forman parte de un encabezado de tabla, <br> de la lista o una tabla dinámica. <br> Fragmento de la Ventana del Inspector de Documentos relativo a filas y columnas <br> ocultas en un documento Microsoft Excel 2010. | - |  |  | X |  |  | - |  |  |
| Hojas de cálculo ocultas <br> Fragmento de la Ventana del Inspector de Documentos relativo a hojas ocultas en un <br> documento Microsoft Excel 2010. | - |  |  | X |  |  | - |  |  |


![Imagen 1 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img1.png)

![Imagen 2 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img2.png)

![Imagen 3 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img3.png)

![Imagen 4 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img4.png)

![Imagen 5 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img5.png)

![Imagen 6 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img6.png)

![Imagen 7 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img7.png)

![Imagen 8 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img8.png)

![Imagen 9 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img9.png)

![Imagen 10 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img10.png)

![Imagen 11 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img11.png)

![Imagen 12 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img12.png)

![Imagen 13 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img13.png)

![Imagen 14 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img14.png)

![Imagen 15 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img15.png)

![Imagen 16 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img16.png)

![Imagen 17 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img17.png)

![Imagen 18 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img18.png)

![Imagen 19 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img19.png)

![Imagen 20 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img20.png)

![Imagen 21 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img21.png)

![Imagen 22 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img22.png)

![Imagen 23 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img23.png)

![Imagen 24 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img24.png)

![Imagen 25 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img25.png)

![Imagen 26 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img26.png)

![Imagen 27 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img27.png)

![Imagen 28 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img28.png)

![Imagen 29 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img29.png)

![Imagen 30 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img30.png)

![Imagen 31 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img31.png)

![Imagen 32 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img32.png)

![Imagen 33 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img33.png)

![Imagen 34 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img34.png)

![Imagen 35 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img35.png)

![Imagen 36 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img36.png)

![Imagen 37 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img37.png)

![Imagen 38 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img38.png)

![Imagen 39 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img39.png)

![Imagen 40 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img40.png)

![Imagen 41 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img41.png)

![Imagen 42 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img42.png)

![Imagen 43 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img43.png)

![Imagen 44 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img44.png)

![Imagen 45 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img45.png)

![Imagen 46 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img46.png)

![Imagen 47 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img47.png)

![Imagen 48 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img48.png)

![Imagen 49 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img49.png)

![Imagen 50 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img50.png)

![Imagen 51 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img51.png)

![Imagen 52 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img52.png)

![Imagen 53 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img53.png)

![Imagen 54 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img54.png)

![Imagen 55 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img55.png)

![Imagen 56 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img56.png)

![Imagen 57 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img57.png)

![Imagen 58 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img58.png)

![Imagen 59 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img59.png)

![Imagen 60 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img60.png)

![Imagen 61 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img61.png)

![Imagen 62 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img62.png)

![Imagen 63 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img63.png)

![Imagen 64 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img64.png)

![Imagen 65 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img65.png)

![Imagen 66 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img66.png)

![Imagen 67 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img67.png)

![Imagen 68 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img68.png)

![Imagen 69 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img69.png)

![Imagen 70 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img70.png)

![Imagen 71 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img71.png)

![Imagen 72 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img72.png)

![Imagen 73 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img73.png)

![Imagen 74 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img74.png)

![Imagen 75 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img75.png)

![Imagen 76 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img76.png)

![Imagen 77 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img77.png)

![Imagen 78 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img78.png)

![Imagen 79 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img79.png)

![Imagen 80 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img80.png)

![Imagen 81 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img81.png)

![Imagen 82 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img82.png)

![Imagen 83 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img83.png)

![Imagen 84 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img84.png)

![Imagen 85 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img85.png)

![Imagen 86 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img86.png)

![Imagen 87 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img87.png)

![Imagen 88 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img88.png)

![Imagen 89 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img89.png)

![Imagen 90 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img90.png)

![Imagen 91 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img91.png)

![Imagen 92 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img92.png)

![Imagen 93 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img93.png)

![Imagen 94 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img94.png)

![Imagen 95 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img95.png)

![Imagen 96 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img96.png)

![Imagen 97 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img97.png)

![Imagen 98 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img98.png)

![Imagen 99 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img99.png)

![Imagen 100 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img100.png)

![Imagen 101 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img101.png)

![Imagen 102 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img102.png)

![Imagen 103 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img103.png)

![Imagen 104 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img104.png)

![Imagen 105 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img105.png)

![Imagen 106 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img106.png)

![Imagen 107 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img107.png)

![Imagen 108 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img108.png)

![Imagen 109 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img109.png)

![Imagen 110 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img110.png)

![Imagen 111 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img111.png)

![Imagen 112 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img112.png)

![Imagen 113 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img113.png)

![Imagen 114 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img114.png)

![Imagen 115 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img115.png)

![Imagen 116 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img116.png)

![Imagen 117 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img117.png)

![Imagen 118 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img118.png)

![Imagen 119 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img119.png)

![Imagen 120 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img120.png)

![Imagen 121 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img121.png)

![Imagen 122 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img122.png)

![Imagen 123 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img123.png)

![Imagen 124 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img124.png)

![Imagen 125 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img125.png)

![Imagen 126 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img126.png)

![Imagen 127 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img127.png)

![Imagen 128 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img128.png)

![Imagen 129 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img129.png)

![Imagen 130 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img130.png)

![Imagen 131 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img131.png)

![Imagen 132 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img132.png)

![Imagen 133 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img133.png)

![Imagen 134 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img134.png)

![Imagen 135 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img135.png)

![Imagen 136 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img136.png)

![Imagen 137 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img137.png)

![Imagen 138 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img138.png)

![Imagen 139 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img139.png)

![Imagen 140 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img140.png)

![Imagen 141 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img141.png)

![Imagen 142 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img142.png)

![Imagen 143 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img143.png)

![Imagen 144 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img144.png)

![Imagen 145 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img145.png)

![Imagen 146 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img146.png)

![Imagen 147 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img147.png)

![Imagen 148 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img148.png)

![Imagen 149 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img149.png)

![Imagen 150 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img150.png)

![Imagen 151 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img151.png)

![Imagen 152 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img152.png)

![Imagen 153 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img153.png)

![Imagen 154 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img154.png)

![Imagen 155 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img155.png)

![Imagen 156 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img156.png)

![Imagen 157 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img157.png)

![Imagen 158 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img158.png)

![Imagen 159 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img159.png)

![Imagen 160 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img160.png)

![Imagen 161 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img161.png)

![Imagen 162 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img162.png)

![Imagen 163 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img163.png)

![Imagen 164 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img164.png)

![Imagen 165 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img165.png)

![Imagen 166 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img166.png)

![Imagen 167 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img167.png)

![Imagen 168 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img168.png)

![Imagen 169 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img169.png)

![Imagen 170 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img170.png)

![Imagen 171 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img171.png)

![Imagen 172 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img172.png)

![Imagen 173 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img173.png)

![Imagen 174 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img174.png)

![Imagen 175 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img175.png)

![Imagen 176 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img176.png)

![Imagen 177 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img177.png)

![Imagen 178 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img178.png)

![Imagen 179 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img179.png)

![Imagen 180 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img180.png)

![Imagen 181 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img181.png)

![Imagen 182 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img182.png)

![Imagen 183 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img183.png)

![Imagen 184 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img184.png)

![Imagen 185 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img185.png)

![Imagen 186 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img186.png)

![Imagen 187 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img187.png)

![Imagen 188 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img188.png)

![Imagen 189 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img189.png)

![Imagen 190 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img190.png)

![Imagen 191 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img191.png)

![Imagen 192 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img192.png)

![Imagen 193 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img193.png)

![Imagen 194 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img194.png)

![Imagen 195 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img195.png)

![Imagen 196 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img196.png)

![Imagen 197 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img197.png)

![Imagen 198 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img198.png)

![Imagen 199 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img199.png)

![Imagen 200 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img200.png)

![Imagen 201 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img201.png)

![Imagen 202 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img202.png)

![Imagen 203 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img203.png)

![Imagen 204 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img204.png)

![Imagen 205 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img205.png)

![Imagen 206 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img206.png)

![Imagen 207 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img207.png)

![Imagen 208 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img208.png)

![Imagen 209 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img209.png)

![Imagen 210 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img210.png)

![Imagen 211 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img211.png)

![Imagen 212 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img212.png)

![Imagen 213 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img213.png)

![Imagen 214 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img214.png)

![Imagen 215 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img215.png)

![Imagen 216 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img216.png)

![Imagen 217 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img217.png)

![Imagen 218 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img218.png)

![Imagen 219 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img219.png)

![Imagen 220 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img220.png)

![Imagen 221 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img221.png)

![Imagen 222 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img222.png)

![Imagen 223 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img223.png)

![Imagen 224 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img224.png)

![Imagen 225 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img225.png)

![Imagen 226 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img226.png)

![Imagen 227 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img227.png)

![Imagen 228 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img228.png)

![Imagen 229 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img229.png)

![Imagen 230 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img230.png)

![Imagen 231 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img231.png)

![Imagen 232 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img232.png)

![Imagen 233 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img233.png)

![Imagen 234 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img234.png)

![Imagen 235 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img235.png)

![Imagen 236 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img236.png)

![Imagen 237 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img237.png)

![Imagen 238 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img238.png)

![Imagen 239 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img239.png)

![Imagen 240 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img240.png)

![Imagen 241 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img241.png)

![Imagen 242 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img242.png)

![Imagen 243 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img243.png)

![Imagen 244 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img244.png)

![Imagen 245 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img245.png)

![Imagen 246 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img246.png)

![Imagen 247 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img247.png)

![Imagen 248 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img248.png)

![Imagen 249 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img249.png)

![Imagen 250 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img250.png)

![Imagen 251 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img251.png)

![Imagen 252 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img252.png)

![Imagen 253 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img253.png)

![Imagen 254 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img254.png)

![Imagen 255 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img255.png)

![Imagen 256 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img256.png)

![Imagen 257 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img257.png)

![Imagen 258 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img258.png)

![Imagen 259 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img259.png)

![Imagen 260 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img260.png)

![Imagen 261 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img261.png)

![Imagen 262 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img262.png)

![Imagen 263 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img263.png)

![Imagen 264 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img264.png)

![Imagen 265 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img265.png)

![Imagen 266 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img266.png)

![Imagen 267 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img267.png)

![Imagen 268 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img268.png)

![Imagen 269 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img269.png)

![Imagen 270 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img270.png)

![Imagen 271 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img271.png)

![Imagen 272 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img272.png)

![Imagen 273 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img273.png)

![Imagen 274 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img274.png)

![Imagen 275 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img275.png)

![Imagen 276 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img276.png)

![Imagen 277 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img277.png)

![Imagen 278 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img278.png)

![Imagen 279 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img279.png)

![Imagen 280 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img280.png)

![Imagen 281 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img281.png)

![Imagen 282 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img282.png)

![Imagen 283 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img283.png)

![Imagen 284 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img284.png)

![Imagen 285 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img285.png)

![Imagen 286 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img286.png)

![Imagen 287 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img287.png)

![Imagen 288 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img288.png)

![Imagen 289 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img289.png)

![Imagen 290 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img290.png)

![Imagen 291 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img291.png)

![Imagen 292 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img292.png)

![Imagen 293 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img293.png)

![Imagen 294 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img294.png)

![Imagen 295 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img295.png)

![Imagen 296 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img296.png)

![Imagen 297 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img297.png)

![Imagen 298 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img298.png)

![Imagen 299 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img299.png)

![Imagen 300 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img300.png)

![Imagen 301 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img301.png)

![Imagen 302 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img302.png)

![Imagen 303 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img303.png)

![Imagen 304 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img304.png)

![Imagen 305 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img305.png)

![Imagen 306 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img306.png)

![Imagen 307 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img307.png)

![Imagen 308 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img308.png)

![Imagen 309 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img309.png)

![Imagen 310 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img310.png)

![Imagen 311 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img311.png)

![Imagen 312 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img312.png)

![Imagen 313 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img313.png)

![Imagen 314 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img314.png)

![Imagen 315 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img315.png)

![Imagen 316 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img316.png)

![Imagen 317 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img317.png)

![Imagen 318 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img318.png)

![Imagen 319 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img319.png)

![Imagen 320 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img320.png)

![Imagen 321 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img321.png)

![Imagen 322 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img322.png)

![Imagen 323 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img323.png)

![Imagen 324 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img324.png)

![Imagen 325 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img325.png)

![Imagen 326 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img326.png)

![Imagen 327 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img327.png)

![Imagen 328 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img328.png)

![Imagen 329 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img329.png)

![Imagen 330 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img330.png)

![Imagen 331 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img331.png)

![Imagen 332 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img332.png)

![Imagen 333 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img333.png)

![Imagen 334 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img334.png)

![Imagen 335 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img335.png)

![Imagen 336 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img336.png)

![Imagen 337 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img337.png)

![Imagen 338 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img338.png)

![Imagen 339 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img339.png)

![Imagen 340 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img340.png)

![Imagen 341 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img341.png)

![Imagen 342 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img342.png)

![Imagen 343 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img343.png)

![Imagen 344 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img344.png)

![Imagen 345 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img345.png)

![Imagen 346 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img346.png)

![Imagen 347 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img347.png)

![Imagen 348 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img348.png)

![Imagen 349 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img349.png)

![Imagen 350 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img350.png)

![Imagen 351 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img351.png)

![Imagen 352 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img352.png)

![Imagen 353 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img353.png)

![Imagen 354 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img354.png)

![Imagen 355 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img355.png)

![Imagen 356 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img356.png)

![Imagen 357 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img357.png)

![Imagen 358 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img358.png)

![Imagen 359 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img359.png)

![Imagen 360 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img360.png)

![Imagen 361 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img361.png)

![Imagen 362 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img362.png)

![Imagen 363 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img363.png)

![Imagen 364 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img364.png)

![Imagen 365 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img365.png)

![Imagen 366 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img366.png)

![Imagen 367 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img367.png)

![Imagen 368 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img368.png)

![Imagen 369 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img369.png)

![Imagen 370 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img370.png)

![Imagen 371 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img371.png)

![Imagen 372 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img372.png)

![Imagen 373 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img373.png)

![Imagen 374 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img374.png)

![Imagen 375 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img375.png)

![Imagen 376 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img376.png)

![Imagen 377 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img377.png)

![Imagen 378 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img378.png)

![Imagen 379 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img379.png)

![Imagen 380 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img380.png)

![Imagen 381 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img381.png)

![Imagen 382 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img382.png)

![Imagen 383 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img383.png)

![Imagen 384 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img384.png)

![Imagen 385 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img385.png)

![Imagen 386 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img386.png)

![Imagen 387 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img387.png)

![Imagen 388 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img388.png)

![Imagen 389 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img389.png)

![Imagen 390 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img390.png)

![Imagen 391 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img391.png)

![Imagen 392 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img392.png)

![Imagen 393 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img393.png)

![Imagen 394 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img394.png)

![Imagen 395 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img395.png)

![Imagen 396 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img396.png)

![Imagen 397 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img397.png)

![Imagen 398 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img398.png)

![Imagen 399 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img399.png)

![Imagen 400 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img400.png)

![Imagen 401 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img401.png)

![Imagen 402 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img402.png)

![Imagen 403 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img403.png)

![Imagen 404 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img404.png)

![Imagen 405 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img405.png)

![Imagen 406 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img406.png)

![Imagen 407 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img407.png)

![Imagen 408 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img408.png)

![Imagen 409 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img409.png)

![Imagen 410 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img410.png)

![Imagen 411 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img411.png)

![Imagen 412 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img412.png)

![Imagen 413 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img413.png)

![Imagen 414 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img414.png)

![Imagen 415 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img415.png)

![Imagen 416 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img416.png)

![Imagen 417 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img417.png)

![Imagen 418 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img418.png)

![Imagen 419 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img419.png)

![Imagen 420 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img420.png)

![Imagen 421 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img421.png)

![Imagen 422 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img422.png)

![Imagen 423 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img423.png)

![Imagen 424 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img424.png)

![Imagen 425 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img425.png)

![Imagen 426 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img426.png)

![Imagen 427 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img427.png)

![Imagen 428 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img428.png)

![Imagen 429 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img429.png)

![Imagen 430 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img430.png)

![Imagen 431 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img431.png)

![Imagen 432 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img432.png)

![Imagen 433 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img433.png)

![Imagen 434 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img434.png)

![Imagen 435 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img435.png)

![Imagen 436 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img436.png)

![Imagen 437 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img437.png)

![Imagen 438 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img438.png)

![Imagen 439 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img439.png)

![Imagen 440 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img440.png)

![Imagen 441 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img441.png)

![Imagen 442 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img442.png)

![Imagen 443 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img443.png)

![Imagen 444 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img444.png)

![Imagen 445 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img445.png)

![Imagen 446 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img446.png)

![Imagen 447 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img447.png)

![Imagen 448 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img448.png)

![Imagen 449 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img449.png)

![Imagen 450 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img450.png)

![Imagen 451 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img451.png)

![Imagen 452 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img452.png)

![Imagen 453 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img453.png)

![Imagen 454 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img454.png)

![Imagen 455 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img455.png)

![Imagen 456 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img456.png)

![Imagen 457 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img457.png)

![Imagen 458 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img458.png)

![Imagen 459 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img459.png)

![Imagen 460 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img460.png)

![Imagen 461 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img461.png)

![Imagen 462 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img462.png)

![Imagen 463 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img463.png)

![Imagen 464 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img464.png)

![Imagen 465 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img465.png)

![Imagen 466 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img466.png)

![Imagen 467 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img467.png)

![Imagen 468 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img468.png)

![Imagen 469 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img469.png)

![Imagen 470 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img470.png)

![Imagen 471 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img471.png)

![Imagen 472 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img472.png)

![Imagen 473 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img473.png)

![Imagen 474 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img474.png)

![Imagen 475 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img475.png)

![Imagen 476 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img476.png)

![Imagen 477 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img477.png)

![Imagen 478 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img478.png)

![Imagen 479 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img479.png)

![Imagen 480 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img480.png)

![Imagen 481 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img481.png)

![Imagen 482 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img482.png)

![Imagen 483 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img483.png)

![Imagen 484 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img484.png)

![Imagen 485 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img485.png)

![Imagen 486 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img486.png)

![Imagen 487 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img487.png)

![Imagen 488 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img488.png)

![Imagen 489 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img489.png)

![Imagen 490 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img490.png)

![Imagen 491 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img491.png)

![Imagen 492 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img492.png)

![Imagen 493 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img493.png)

![Imagen 494 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img494.png)

![Imagen 495 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img495.png)

![Imagen 496 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img496.png)

![Imagen 497 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img497.png)

![Imagen 498 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img498.png)

![Imagen 499 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img499.png)

![Imagen 500 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img500.png)

![Imagen 501 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img501.png)

![Imagen 502 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img502.png)

![Imagen 503 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img503.png)

![Imagen 504 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img504.png)

![Imagen 505 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img505.png)

![Imagen 506 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img506.png)

![Imagen 507 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img507.png)

![Imagen 508 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img508.png)

![Imagen 509 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img509.png)

![Imagen 510 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img510.png)

![Imagen 511 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img511.png)

![Imagen 512 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img512.png)

![Imagen 513 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img513.png)

![Imagen 514 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img514.png)

![Imagen 515 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img515.png)

![Imagen 516 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img516.png)

![Imagen 517 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img517.png)

![Imagen 518 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img518.png)

![Imagen 519 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img519.png)

![Imagen 520 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img520.png)

![Imagen 521 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img521.png)

![Imagen 522 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img522.png)

![Imagen 523 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img523.png)

![Imagen 524 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img524.png)

![Imagen 525 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img525.png)

![Imagen 526 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img526.png)

![Imagen 527 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img527.png)

![Imagen 528 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img528.png)

![Imagen 529 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img529.png)

![Imagen 530 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img530.png)

![Imagen 531 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img531.png)

![Imagen 532 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img532.png)

![Imagen 533 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img533.png)

![Imagen 534 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img534.png)

![Imagen 535 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img535.png)

![Imagen 536 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img536.png)

![Imagen 537 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img537.png)

![Imagen 538 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img538.png)

![Imagen 539 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img539.png)

![Imagen 540 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img540.png)

![Imagen 541 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img541.png)

![Imagen 542 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img542.png)

![Imagen 543 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img543.png)

![Imagen 544 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img544.png)

![Imagen 545 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img545.png)

![Imagen 546 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img546.png)

![Imagen 547 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img547.png)

![Imagen 548 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img548.png)

![Imagen 549 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img549.png)

![Imagen 550 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img550.png)

![Imagen 551 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img551.png)

![Imagen 552 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img552.png)

![Imagen 553 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img553.png)

![Imagen 554 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img554.png)

![Imagen 555 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img555.png)

![Imagen 556 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img556.png)

![Imagen 557 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img557.png)

![Imagen 558 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img558.png)

![Imagen 559 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img559.png)

![Imagen 560 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img560.png)

![Imagen 561 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img561.png)

![Imagen 562 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img562.png)

![Imagen 563 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img563.png)

![Imagen 564 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img564.png)

![Imagen 565 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img565.png)

![Imagen 566 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img566.png)

![Imagen 567 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img567.png)

![Imagen 568 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img568.png)

![Imagen 569 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img569.png)

![Imagen 570 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img570.png)

![Imagen 571 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img571.png)

![Imagen 572 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img572.png)

![Imagen 573 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img573.png)

![Imagen 574 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img574.png)

![Imagen 575 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img575.png)

![Imagen 576 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img576.png)

![Imagen 577 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img577.png)

![Imagen 578 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img578.png)

![Imagen 579 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img579.png)

![Imagen 580 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img580.png)

![Imagen 581 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img581.png)

![Imagen 582 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img582.png)

![Imagen 583 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img583.png)

![Imagen 584 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img584.png)

![Imagen 585 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img585.png)

![Imagen 586 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img586.png)

![Imagen 587 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img587.png)

![Imagen 588 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img588.png)

![Imagen 589 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img589.png)

![Imagen 590 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img590.png)

![Imagen 591 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img591.png)

![Imagen 592 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img592.png)

![Imagen 593 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img593.png)

![Imagen 594 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img594.png)

![Imagen 595 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img595.png)

![Imagen 596 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img596.png)

![Imagen 597 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img597.png)

![Imagen 598 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img598.png)

![Imagen 599 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img599.png)

![Imagen 600 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img600.png)

![Imagen 601 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img601.png)

![Imagen 602 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img602.png)

![Imagen 603 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img603.png)

![Imagen 604 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img604.png)

![Imagen 605 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img605.png)

![Imagen 606 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img606.png)

![Imagen 607 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img607.png)

![Imagen 608 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img608.png)

![Imagen 609 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img609.png)

![Imagen 610 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img610.png)

![Imagen 611 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img611.png)

![Imagen 612 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img612.png)

![Imagen 613 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img613.png)

![Imagen 614 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img614.png)

![Imagen 615 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img615.png)

![Imagen 616 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img616.png)

![Imagen 617 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img617.png)

![Imagen 618 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img618.png)

![Imagen 619 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img619.png)

![Imagen 620 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img620.png)

![Imagen 621 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img621.png)

![Imagen 622 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img622.png)

![Imagen 623 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img623.png)

![Imagen 624 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img624.png)

![Imagen 625 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img625.png)

![Imagen 626 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img626.png)

![Imagen 627 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img627.png)

![Imagen 628 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img628.png)

![Imagen 629 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img629.png)

![Imagen 630 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img630.png)

![Imagen 631 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img631.png)

![Imagen 632 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img632.png)

![Imagen 633 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img633.png)

![Imagen 634 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img634.png)

![Imagen 635 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img635.png)

![Imagen 636 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img636.png)

![Imagen 637 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img637.png)

![Imagen 638 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img638.png)

![Imagen 639 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img639.png)

![Imagen 640 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img640.png)

![Imagen 641 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img641.png)

![Imagen 642 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img642.png)

![Imagen 643 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img643.png)

![Imagen 644 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img644.png)

![Imagen 645 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img645.png)

![Imagen 646 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img646.png)

![Imagen 647 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img647.png)

![Imagen 648 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img648.png)

![Imagen 649 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img649.png)

![Imagen 650 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img650.png)

![Imagen 651 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img651.png)

![Imagen 652 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img652.png)

![Imagen 653 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img653.png)

![Imagen 654 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img654.png)

![Imagen 655 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img655.png)

![Imagen 656 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img656.png)

![Imagen 657 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img657.png)

![Imagen 658 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img658.png)

![Imagen 659 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img659.png)

![Imagen 660 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img660.png)

![Imagen 661 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img661.png)

![Imagen 662 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img662.png)

![Imagen 663 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img663.png)

![Imagen 664 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img664.png)

![Imagen 665 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img665.png)

![Imagen 666 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img666.png)

![Imagen 667 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img667.png)

![Imagen 668 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img668.png)

![Imagen 669 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img669.png)

![Imagen 670 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img670.png)

![Imagen 671 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img671.png)

![Imagen 672 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img672.png)

![Imagen 673 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img673.png)

![Imagen 674 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img674.png)

![Imagen 675 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img675.png)

![Imagen 676 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img676.png)

![Imagen 677 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img677.png)

![Imagen 678 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img678.png)

![Imagen 679 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img679.png)

![Imagen 680 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img680.png)

![Imagen 681 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img681.png)

![Imagen 682 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img682.png)

![Imagen 683 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img683.png)

![Imagen 684 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img684.png)

![Imagen 685 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img685.png)

![Imagen 686 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img686.png)

![Imagen 687 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img687.png)

![Imagen 688 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img688.png)

![Imagen 689 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img689.png)

![Imagen 690 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img690.png)

![Imagen 691 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img691.png)

![Imagen 692 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img692.png)

![Imagen 693 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img693.png)

![Imagen 694 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img694.png)

![Imagen 695 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img695.png)

![Imagen 696 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img696.png)

![Imagen 697 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img697.png)

![Imagen 698 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img698.png)

![Imagen 699 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img699.png)

![Imagen 700 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img700.png)

![Imagen 701 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img701.png)

![Imagen 702 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img702.png)

![Imagen 703 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img703.png)

![Imagen 704 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img704.png)

![Imagen 705 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img705.png)

![Imagen 706 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img706.png)

![Imagen 707 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img707.png)

![Imagen 708 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img708.png)

![Imagen 709 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img709.png)

![Imagen 710 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img710.png)

![Imagen 711 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img711.png)

![Imagen 712 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img712.png)

![Imagen 713 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img713.png)

![Imagen 714 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img714.png)

![Imagen 715 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img715.png)

![Imagen 716 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img716.png)

![Imagen 717 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img717.png)

![Imagen 718 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img718.png)

![Imagen 719 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img719.png)

![Imagen 720 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img720.png)

![Imagen 721 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img721.png)

![Imagen 722 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img722.png)

![Imagen 723 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img723.png)

![Imagen 724 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img724.png)

![Imagen 725 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img725.png)

![Imagen 726 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img726.png)

![Imagen 727 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img727.png)

![Imagen 728 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img728.png)

![Imagen 729 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img729.png)

![Imagen 730 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img730.png)

![Imagen 731 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img731.png)

![Imagen 732 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img732.png)

![Imagen 733 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img733.png)

![Imagen 734 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img734.png)

![Imagen 735 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img735.png)

![Imagen 736 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img736.png)

![Imagen 737 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img737.png)

![Imagen 738 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img738.png)

![Imagen 739 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img739.png)

![Imagen 740 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img740.png)

![Imagen 741 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img741.png)

![Imagen 742 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img742.png)

![Imagen 743 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img743.png)

![Imagen 744 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img744.png)

![Imagen 745 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img745.png)

![Imagen 746 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img746.png)

![Imagen 747 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img747.png)

![Imagen 748 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img748.png)

![Imagen 749 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img749.png)

![Imagen 750 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img750.png)

![Imagen 751 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img751.png)

![Imagen 752 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img752.png)

![Imagen 753 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img753.png)

![Imagen 754 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img754.png)

![Imagen 755 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img755.png)

![Imagen 756 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img756.png)

![Imagen 757 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img757.png)

![Imagen 758 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img758.png)

![Imagen 759 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img759.png)

![Imagen 760 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img760.png)

![Imagen 761 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img761.png)

![Imagen 762 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img762.png)

![Imagen 763 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img763.png)

![Imagen 764 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img764.png)

![Imagen 765 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img765.png)

![Imagen 766 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img766.png)

![Imagen 767 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img767.png)

![Imagen 768 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img768.png)

![Imagen 769 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img769.png)

![Imagen 770 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img770.png)

![Imagen 771 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img771.png)

![Imagen 772 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img772.png)

![Imagen 773 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img773.png)

![Imagen 774 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img774.png)

![Imagen 775 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img775.png)

![Imagen 776 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img776.png)

![Imagen 777 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img777.png)

![Imagen 778 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img778.png)

![Imagen 779 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img779.png)

![Imagen 780 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img780.png)

![Imagen 781 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img781.png)

![Imagen 782 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img782.png)

![Imagen 783 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img783.png)

![Imagen 784 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img784.png)

![Imagen 785 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img785.png)

![Imagen 786 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img786.png)

![Imagen 787 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img787.png)

![Imagen 788 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img788.png)

![Imagen 789 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img789.png)

![Imagen 790 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img790.png)

![Imagen 791 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img791.png)

![Imagen 792 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img792.png)

![Imagen 793 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img793.png)

![Imagen 794 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img794.png)

![Imagen 795 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img795.png)

![Imagen 796 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img796.png)

![Imagen 797 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img797.png)

![Imagen 798 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img798.png)

![Imagen 799 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img799.png)

![Imagen 800 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img800.png)

![Imagen 801 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img801.png)

![Imagen 802 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img802.png)

![Imagen 803 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img803.png)

![Imagen 804 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img804.png)

![Imagen 805 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img805.png)

![Imagen 806 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img806.png)

![Imagen 807 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img807.png)

![Imagen 808 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img808.png)

![Imagen 809 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img809.png)

![Imagen 810 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img810.png)

![Imagen 811 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img811.png)

![Imagen 812 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img812.png)

![Imagen 813 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img813.png)

![Imagen 814 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img814.png)

![Imagen 815 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img815.png)

![Imagen 816 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img816.png)

![Imagen 817 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img817.png)

![Imagen 818 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img818.png)

![Imagen 819 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img819.png)

![Imagen 820 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img820.png)

![Imagen 821 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img821.png)

![Imagen 822 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img822.png)

![Imagen 823 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img823.png)

![Imagen 824 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img824.png)

![Imagen 825 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img825.png)

![Imagen 826 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img826.png)

![Imagen 827 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img827.png)

![Imagen 828 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img828.png)

![Imagen 829 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img829.png)

![Imagen 830 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img830.png)

![Imagen 831 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img831.png)

![Imagen 832 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img832.png)

![Imagen 833 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img833.png)

![Imagen 834 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img834.png)

![Imagen 835 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img835.png)

![Imagen 836 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img836.png)

![Imagen 837 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img837.png)

![Imagen 838 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img838.png)

![Imagen 839 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img839.png)

![Imagen 840 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img840.png)

![Imagen 841 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img841.png)

![Imagen 842 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img842.png)

![Imagen 843 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img843.png)

![Imagen 844 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img844.png)

![Imagen 845 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img845.png)

![Imagen 846 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img846.png)

![Imagen 847 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img847.png)

![Imagen 848 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img848.png)

![Imagen 849 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img849.png)

![Imagen 850 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img850.png)

![Imagen 851 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img851.png)

![Imagen 852 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img852.png)

![Imagen 853 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img853.png)

![Imagen 854 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img854.png)

![Imagen 855 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img855.png)

![Imagen 856 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img856.png)

![Imagen 857 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img857.png)

![Imagen 858 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img858.png)

![Imagen 859 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img859.png)

![Imagen 860 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img860.png)

![Imagen 861 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img861.png)

![Imagen 862 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img862.png)

![Imagen 863 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img863.png)

![Imagen 864 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img864.png)

![Imagen 865 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img865.png)

![Imagen 866 - Página 36](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina36_img866.png)

---

<!-- Página 37 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Word Excel PowerPoint
Contenido Invisible
- Objetos que se han seleccionado como no visibles
- No detecta objetos ocultados por otros métodos (por ejemplo, cubiertos por
otros objetos)
Fragmento de la Ventana del Inspector de Documentos relativo al contenido invisible X X X
en un documento Microsoft Excel 2010.
Fragmento de la Ventana del Inspector de Documentos relativo al contenido invisible
en un documento Microsoft PowerPoint 2010.
Contenido externo a las diapositivas
- Detecta contenido y objetos ubicados fuera del área de la diapositiva:
imágenes, cuadros de texto, gráficos, tablas, etc.
- No detecta objetos externos a la diapositiva con efectos de animación.
- - X
Fragmento de la Ventana del Inspector de Documentos relativo al contenido externo
a dispositivas en un documento Microsoft PowerPoint 2010.
Notas de Presentación
- Detecta y elimina texto que se haya agregado a la sección Notas de una
presentación.
- No elimina imágenes agregadas a la sección Notas de una presentación.
- - X
Fragmento de la Ventana del Inspector de Documentos relativo a notas de
presentación en un documento Microsoft PowerPoint 2010.
Datos XML personalizados
X X X
Fragmento de la Ventana del Inspector de Documentos relativo a notas de Datos
XML personalizados en un documento Microsoft Word 2010.
Tabla 5. Información que inspecciona y elimina el Inspector de Documentos para Office
2010/2013/2016.
Centro Crip tológico Nacional SIN CLASIFICAR 37

|  |  | Word |  |  | Excel |  |  | PowerPoint |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Contenido Invisible <br> - Objetos que se han seleccionado como no visibles <br> - No detecta objetos ocultados por otros métodos (por ejemplo, cubiertos por <br> otros objetos) <br> Fragmento de la Ventana del Inspector de Documentos relativo al contenido invisible <br> en un documento Microsoft Excel 2010. <br> Fragmento de la Ventana del Inspector de Documentos relativo al contenido invisible <br> en un documento Microsoft PowerPoint 2010. | X |  |  | X |  |  | X |  |  |
| Contenido externo a las diapositivas <br> - Detecta contenido y objetos ubicados fuera del área de la diapositiva: <br> imágenes, cuadros de texto, gráficos, tablas, etc. <br> - No detecta objetos externos a la diapositiva con efectos de animación. <br> Fragmento de la Ventana del Inspector de Documentos relativo al contenido externo <br> a dispositivas en un documento Microsoft PowerPoint 2010. | - |  |  | - |  |  | X |  |  |
| Notas de Presentación <br> - Detecta y elimina texto que se haya agregado a la sección Notas de una <br> presentación. <br> - No elimina imágenes agregadas a la sección Notas de una presentación. <br> Fragmento de la Ventana del Inspector de Documentos relativo a notas de <br> presentación en un documento Microsoft PowerPoint 2010. | - |  |  | - |  |  | X |  |  |
| Datos XML personalizados <br> Fragmento de la Ventana del Inspector de Documentos relativo a notas de Datos <br> XML personalizados en un documento Microsoft Word 2010. | X |  |  | X |  |  | X |  |  |


![Imagen 1 - Página 37](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina37_img1.png)

![Imagen 2 - Página 37](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina37_img2.png)

![Imagen 3 - Página 37](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina37_img3.png)

![Imagen 4 - Página 37](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina37_img4.png)

![Imagen 5 - Página 37](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina37_img5.png)

![Imagen 6 - Página 37](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina37_img6.png)

---

<!-- Página 38 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
101. Información que inspecciona, pero no elimina el Inspector de Documentos
Hay datos que el Inspector de Documentos revisa y detecta, pero que no
puede eliminar ya que su desaparición podría provocar que el documento no
funcionase correctamente.
Por ejemplo, no puede eliminar el nombre de la plantilla de un documento,
ya que si lo hiciese el documento al abrirse no sabría que plantilla usar. O no puede
eliminar un código VBA (Visual Basic for Applications), ya que no puede determinar
si eso eliminaría datos críticos o no. Es el usuario quien debe examinar de forma
manual los elementos encontrados y eliminarlos o reemplazarlos si corresponde.
Word Excel PowerPoint
Propiedades
- Nombre y ruta de la plantilla X X X
- Nombre y ruta del fichero
Vínculos externos
Llamadas a otros documentos Excel, que se usan en:
- Celdas de hojas de cálculo
- X -
- Nombres
- Objetos
- Títulos y series de datos de gráficos
Archivos u objetos incrustados X X X
Macros de código VBA
- Macros y Módulos VBA
- Controles COM o ActiveX X X X
- Formularios de usuario
- Funciones definidas por el usuario (UDF)
Elementos que podrían contener datos en caché
Por ejemplo: Tablas y gráficos dinámicos, Segmentaciones y escalas de X X X
tiempo y Fórmulas de cubo
Encuestas de Excel
- X -
Preguntas de la Encuesta de Excel (Excel Online)
Escenarios del Administrador de escenarios
Escenarios definidos con el Administrador de escenarios que podrían - X -
almacenar datos en caché y ocultos
Filtros
Filtros automáticos o filtros de tabla aplicados, que podrían almacenar - X -
datos en caché y ocultos.
Nombres ocultos
- X -
Nombres ocultos que podrían almacenar datos ocultos.
Tabla 6. Información que revisa, pero no elimina el Inspector de Documentos en Office
2010/2013/2016.
Centro Crip tológico Nacional SIN CLASIFICAR 38

|  |  | Word |  |  | Excel |  |  | PowerPoint |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Propiedades <br> - Nombre y ruta de la plantilla <br> - Nombre y ruta del fichero | X |  |  | X |  |  | X |  |  |
| Vínculos externos <br> Llamadas a otros documentos Excel, que se usan en: <br> - Celdas de hojas de cálculo <br> - Nombres <br> - Objetos <br> - Títulos y series de datos de gráficos | - |  |  | X |  |  | - |  |  |
| Archivos u objetos incrustados | X |  |  | X |  |  | X |  |  |
| Macros de código VBA <br> - Macros y Módulos VBA <br> - Controles COM o ActiveX <br> - Formularios de usuario <br> - Funciones definidas por el usuario (UDF) | X |  |  | X |  |  | X |  |  |
| Elementos que podrían contener datos en caché <br> Por ejemplo: Tablas y gráficos dinámicos, Segmentaciones y escalas de <br> tiempo y Fórmulas de cubo | X |  |  | X |  |  | X |  |  |
| Encuestas de Excel <br> Preguntas de la Encuesta de Excel (Excel Online) | - |  |  | X |  |  | - |  |  |
| Escenarios del Administrador de escenarios <br> Escenarios definidos con el Administrador de escenarios que podrían <br> almacenar datos en caché y ocultos | - |  |  | X |  |  | - |  |  |
| Filtros <br> Filtros automáticos o filtros de tabla aplicados, que podrían almacenar <br> datos en caché y ocultos. | - |  |  | X |  |  | - |  |  |
| Nombres ocultos <br> Nombres ocultos que podrían almacenar datos ocultos. | - |  |  | X |  |  | - |  |  |


![Imagen 1 - Página 38](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina38_img1.png)

---

<!-- Página 39 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
102. Metadatos fuera del alcance de los módulos estándar del Inspector de
Documentos
Para aquellos metadatos específicos adscritos al documento, que el Inspector
de Documentos deba revisar y eliminar y que no se encuentren dentro de sus
módulos disponibles de forma integrada, se podrá personalizar el Inspector de
Documentos mediante programación, ya que Microsoft ofrece un interfaz para
acceder a los métodos de los objetos del Inspector de Documentos.
Las organizaciones, por lo tanto, pueden crear e instalar módulos que utilicen
el modelo de objetos del Inspector de documentos para inspeccionar y eliminar
información de sus metadatos corporativos y personalizados.
Centro Crip tológico Nacional SIN CLASIFICAR 39

![Imagen 1 - Página 39](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina39_img1.png)

---

<!-- Página 40 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
ANEXO B. METADATOS EN DOCUMENTOS OPENOFFICE
103. El Formato de Documento Abierto para Aplicaciones Ofimáticas
(OpenDocument Format, ODF) de OASIS, es un formato abierto y estándar para
archivos de documentos ofimáticos. Esto incluye documentos de texto (extensión
.odt), libros de cálculo (extensión .ods), presentaciones (extensión .odp), dibujos
(extensión .odg), gráficos (extensión .odc), fórmulas matemáticas (extensión .odf) e
imágenes (extensión .odi). Este formato ha sido aprobado por ISO e IEC como
estándar internacional y está basado en XML.
104. Existen varias aplicaciones de código abierto (open source) que soportan el
formato ODF. De entre todas ellas la más extendida es OpenOffice.org que dispone
de una suite de aplicaciones ofimáticas para procesar textos, hojas de cálculo y
presentaciones. Es un software gratuito y se encuentra publicado por la Fundación
Software Apache, disponible en varios idiomas y para varias plataformas.
105. Toda la información recogida en este anexo, aplica a los documentos generados
por los programas de OpenOffice: Writer, Calc e Impress en versión 4. Serán estos
documentos a los que se haga referencia como “documentos OpenOffice” a lo
largo del Anexo.
1. Tipos de Metadatos e Información oculta
106. Un documento OpenOffice es un paquete zip que contiene varios ficheros,
existiendo una clara separación entre el contenido, la disposición de éste en el
documento, y los metadatos. De entre todos los ficheros, existe uno que contiene
los metadatos y es el fichero meta.xml. En este fichero se registran entre otros, los
metadatos que se visualizan desde la Propiedades del documento en OpenOffice.
107. Metadatos en Propiedades del Documento.
Al igual que los documentos Office, los documentos OpenOffice contienen
metadatos en las propiedades del documento. Estos metadatos pueden ser
añadidos automáticamente por la aplicación, o pueden ser metadatos estándar y
personalizados añadidos por el usuario o por la organización.
Se accede a ellos desde la opción del menú Archivo y seleccionando
Propiedades. En la ventana de propiedades del documento, se podrán visualizar los
metadatos agrupados en varias pestañas: General, Descripción y Propiedades
personalizadas.
A continuación, se muestra una tabla con los metadatos existentes en las
propiedades del documento, indicando si se generan de forma automática por el
programa, o de forma manual por el usuario u organización.
Generado de forma Generado de
Metadato
Automática forma Manual
Tipo de archivo X
Herramienta con la que se creó el archivo X
Centro Crip tológico Nacional SIN CLASIFICAR 40

|  |  |  |  | Generado de forma |  |  | Generado de |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Metadato |  |  |  |  |  |  |  |
|  |  |  |  | Automática |  |  | forma Manual |  |
| Tipo de archivo |  |  | X |  |  |  |  |  |
| Herramienta con la que se creó el archivo |  |  | X |  |  |  |  |  |


![Imagen 1 - Página 40](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina40_img1.png)

---

<!-- Página 41 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Generado de forma Generado de
Metadato
Automática forma Manual
Tamaño X
Fecha Hora de Creación X
Usuario de creación X
Fecha Hora de última Modificación X
Usuario que realizó la última modificación X
Fecha Hora de última Impresión X
Usuario que realizó la última impresión X
Tiempo de edición total del documento X
Número de revisión del documento X
Plantilla X
Título X
Tema X
Palabras clave X
Comentarios X
Propiedades Personalizadas X
Estadísticas del documento (número de páginas,
tablas, imágenes, objetos OLE, párrafos, palabras, X
caracteres y líneas)
Tabla 7. Metadatos en Propiedades de documentos OpenOffice.org (versión 4)
108. Metadatos incrustados en el documento.
Se pueden insertar metadatos también en el contenido del documento para
documentos de texto (Writer). Deben ser metadatos definidos dentro de las
propiedades del documento, o bien estándar o bien personalizados, y contenidos
por lo tanto en el fichero meta.xml.
Estos metadatos se insertan desde la opción del menú Insertar,
seleccionando Campos. Se despliega una ventana donde se listan metadatos
estándar que se pueden insertar. Si seleccionamos Otros y en la pestaña de
Información del Documento, se listan todos los metadatos estándar y
personalizados que se pueden insertar en el contenido del documento.
109. Metadatos RDF.
RDF (Resource Description Framework) es un formato de metadatos utilizado
por ODF 1.2 y es un estándar W3C. Los documentos OpenOffice pueden contener
metadatos en formato RDF. Estos metadatos se pueden asociar a entidades del
documento de texto, como párrafos, encabezados, tablas, filas o columnas de
tablas, secciones, etc. y se almacenan en repositorios RDF desde los cuales, se
referencian en la entidad del documento.
110. Los documentos OpenOffice también pueden contener información oculta, es
decir, información que no es directamente visible en el documento a través de la
configuración estándar de la aplicación, sino que es necesario seleccionar una
configuración determinada para ver estos datos.
Centro Crip tológico Nacional SIN CLASIFICAR 41

|  |  |  |  | Generado de forma |  |  | Generado de |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Metadato |  |  |  |  |  |  |  |
|  |  |  |  | Automática |  |  | forma Manual |  |
| Tamaño |  |  | X |  |  |  |  |  |
| Fecha Hora de Creación |  |  | X |  |  |  |  |  |
| Usuario de creación |  |  | X |  |  |  |  |  |
| Fecha Hora de última Modificación |  |  | X |  |  |  |  |  |
| Usuario que realizó la última modificación |  |  | X |  |  |  |  |  |
| Fecha Hora de última Impresión |  |  | X |  |  |  |  |  |
| Usuario que realizó la última impresión |  |  | X |  |  |  |  |  |
| Tiempo de edición total del documento |  |  | X |  |  |  |  |  |
| Número de revisión del documento |  |  | X |  |  |  |  |  |
| Plantilla |  |  | X |  |  |  |  |  |
| Título |  |  |  |  |  | X |  |  |
| Tema |  |  |  |  |  | X |  |  |
| Palabras clave |  |  |  |  |  | X |  |  |
| Comentarios |  |  |  |  |  | X |  |  |
| Propiedades Personalizadas |  |  |  |  |  | X |  |  |
| Estadísticas del documento (número de páginas, <br> tablas, imágenes, objetos OLE, párrafos, palabras, <br> caracteres y líneas) |  |  | X |  |  |  |  |  |


![Imagen 1 - Página 41](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina41_img1.png)

---

<!-- Página 42 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
a) Comentarios y Cambios.
Los comentarios y cambios insertados en el documento por personas que
colaboran en la revisión del mismo, contienen nombres o iniciales de los
participantes en la revisión, sus comentarios y los cambios que realizaron.
Para hacer visibles los cambios, acceder desde la opción de menú Editar,
seleccionando Cambios y seleccionando Mostrar para que se hagan visibles
todos los cambios.
Respecto a los comentarios, acceder desde la opción de menú Ver, y
seleccionar Comentarios para que se hagan todos ellos visibles.
b) Información de Versiones del documento.
La información de versiones del documento solo es visible desde la opción
del menú Archivo, seleccionando Versiones. Esto abre una ventana donde
pueden gestionarse las versiones y añadir, revisar, comparar o eliminar
versiones.
c) Párrafos Ocultos.
En los documentos de Writer, se pueden insertar párrafos ocultos que no
serán visibles a no ser que acceda a la opción de menú Ver, y seleccionando
Párrafos ocultos.
d) Texto Oculto.
En los documentos de Writer, se puede insertar texto oculto que no será
visible a no ser que acceda a la opción de menú Ver, y seleccionando
Caracteres no imprimibles.
e) Secciones Ocultas.
En los documentos de Writer, se pueden ocultar secciones que no serán
visibles a no ser que acceda a la opción de menú Formato, seleccionando
Secciones y en la ventana de Modificar secciones hacer clic en cada una de
ellas para revisar está activo el check de ocultar, en cuyo caso habrá que
desactivarlo para hacer la sección visible.
f) Filas, Columnas, celdas y Hojas ocultas.
Las hojas de cálculo de Calc, pueden contener filas, columnas, celdas y hojas
de cálculo ocultas. Para mostrar las hojas, filas y columnas ocultas, acceder
desde la opción del menú Formato, seleccionando fila, columna, hoja y a
continuación Mostrar.
Para mostrar una celda oculta, acceder desde el menú Formato y seleccionar
la opción Celdas. En la ventana de Formato de Celdas, ir a la pestaña de
Protección de celda y desactivar las opciones de ocultar.
2. Configuración de Seguridad
111. Los programas OpenOffice ofrecen varias opciones para llevar a cabo una
configuración de seguridad que ejerza un cierto control sobre los datos personales
que se almacenan en el documento.
Centro Crip tológico Nacional SIN CLASIFICAR 42

![Imagen 1 - Página 42](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina42_img1.png)

---

<!-- Página 43 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
a) Especificar la información personal que aparece en todos los documentos de
OpenOffice.
Es una buena práctica especificar de forma apropiada la información personal
que aparecerá en todos los documentos OpenOffice que un usuario vaya
crear o modificar.
Esta información se encuentra en las opciones de configuración y puede ser
editada o eliminada, especificando con ello la información que se mostrará
en Autor del documento, Última persona que ha realizado modificaciones,
Autor de comentarios del documento y última persona que ha impreso el
documento.
Una vez que se actualiza esta información de una aplicación de OpenOffice,
la información se actualiza automáticamente para el resto de aplicaciones de
OpenOffice.
La forma de acceder a esta información es la siguiente:
• Con el archivo abierto, desde el menú Herramientas, seleccionar
Opciones. Se abrirá la ventana de Opciones de la aplicación.
• En el área de OpenOffice seleccionar Datos del Usuario. Aparecerá el
Nombre de usuario (con el que OpenOffice rellenará de forma
automática el Autor, Última persona que ha realizado modificaciones en
el documento, última persona que ha impreso el documento y autor de
cambios y comentarios del documento).
b) No guardar la información personal en un documento OpenOffice.
Otra buena práctica es evitar que se archive información personal cuando se
guarda un documento. OpenOffice permite seleccionar esta opción, de forma
que cada vez que el documento se guarde, no se almacenará la información
del usuario que crea, modifica o imprime el documento. Esta configuración
debe realizarse en cada documento.
La forma de acceder a esta información es la siguiente:
• Con el archivo abierto, desde la opción del menú Herramientas,
seleccionar Opciones. Se abrirá la ventana de Opciones de la aplicación.
• En el área de OpenOffice, seleccionar Seguridad, y pulsar el botón
Opciones en el área de Opciones de seguridad y alertas. Se abre la
ventana de seguridad con las siguientes opciones que habrá que
seleccionar:
- Advertir si el documento contiene cambios, versiones,
información oculta o notas al guardar o enviar, al firmar, al
imprimir y al crear archivos PDF.
- Eliminar la información personal al guardar el documento.
• Desde la opción de menú Archivo, seleccionar Propiedades. En la
pestaña General, deseleccionar el check “Utilizar los datos del usuario” y
pulsar Restablecer para que elimine los datos actuales si los tiene.
Centro Crip tológico Nacional SIN CLASIFICAR 43

![Imagen 1 - Página 43](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina43_img1.png)

---

<!-- Página 44 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
3. Inspección y Borrado de Metadatos e Información oculta
112. Existen multitud de aplicaciones, tanto gratuitas, como comerciales, que
realizan la inspección y borrado de metadatos para documentos OpenOffice.
113. El Inspector de Documentos de Microsoft Office, también se puede aplicar
sobre documentos OpenOffice para eliminar metadatos e información oculta del
mismo modo que se indica en el Anexo A. Únicamente indicar, que debe ejecutarse
el Inspector de Documentos cada vez que se guarde el archivo en formato de
OpenDocument.
114. Aparte de estas soluciones, existen varias opciones para eliminar metadatos de
los documentos OpenOffice:
a) Modificar o Eliminar el archivo meta.xml.
Dado que un documento OpenOffice no es realmente un archivo individual,
sino que son varios archivos comprimidos en un paquete zip, se puede
descomprimir el documento (por ejemplo, cambiándole la extensión a zip y
usando un descompresor) y del listado de ficheros resultantes, eliminar o
modificar el fichero meta.xml, que es el que contiene los metadatos del
documento.
Una vez eliminado o modificado este fichero, se deberá volver a realizar la
compresión para obtener el documento sin metadatos (cambiando la
extensión zip resultante por la del documento). Esta acción habría que
realizarla cada vez que se guarde el archivo, ya que el fichero meta.xml se
regenera y es necesario eliminarlo o modificarlo de nuevo.
Esta opción, sin embargo, no elimina otra información oculta del documento,
como por ejemplo los Cambios y comentarios, información de versiones, etc.
Para ello será necesario Editar el documento y eliminarlos manualmente.
b) Borrado manual de metadatos.
Se pueden también borrar los metadatos de forma manual de la siguiente
forma:
• A través de la utilidad “Restablecer” se pueden eliminar datos
personales. Se accede desde la opción de menú Archivo, seleccionando
Propiedades y en la pestaña General, abajo a la derecha figura el botón
“Restablecer”.
Si lo activamos, se eliminan los siguientes datos: Fecha de creación (la
reinicia a la Fecha y Hora actual), Fecha y usuario que realizó la última
modificación, Fecha y usuario que realizó la última impresión, tiempo
total de edición y número de revisión. En caso de que también se quiera
eliminar el usuario de creación, deseleccionar el check “Utilizar los datos
del usuario” y pulsar “Restablecer”.
• Para borrar el resto de metadatos estándar y personalizados, se deberá
acceder a las pestañas Descripción y Propiedades personalizadas y
borrar los metadatos de forma manual.
Centro Crip tológico Nacional SIN CLASIFICAR 44

![Imagen 1 - Página 44](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina44_img1.png)

---

<!-- Página 45 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
• Para eliminar otra información oculta del documento, como cambios o
versiones, habrá que editarlo y eliminar esta información de forma
manual.
Centro Crip tológico Nacional SIN CLASIFICAR 45

![Imagen 1 - Página 45](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina45_img1.png)

---

<!-- Página 46 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
ANEXO C. METADATOS EN DOCUMENTOS PDF
115. Toda la información recogida en este anexo, aplica a los documentos generados
por los programas Adobe Acrobat X, XI, DC. Serán estos documentos a los que se
haga referencia como “documentos PDF” a lo largo del anexo.
1. Tipos de Metadatos e Información oculta
116. Metadatos en Propiedades del Documento.
Al igual que los documentos Office, los documentos PDF disponen también
de propiedades del documento donde se almacenan metadatos insertados de
forma automática por la aplicación o metadatos estándar y personalizados
insertados por el usuario o la organización.
A estos metadatos se accede desde la opción de menú Archivo,
seleccionando Propiedades.
Los metadatos estándar se encuentran en la pestaña Descripción y serán
propiedades ya predefinidas por la aplicación, como son el Título, Autor, Asunto,
Palabras clave, Fechas de creación y modificación o Aplicación con la que se creó el
documento PDF. Los metadatos personalizados se encuentran en la Pestaña
Personalizar y son creados por el usuario o la organización añadiendo una etiqueta,
un tipo de dato y un valor.
Figura 4.- Propiedades del documento en Adobe Acrobat 9.
Centro Crip tológico Nacional SIN CLASIFICAR 46

![Imagen 1 - Página 46](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina46_img1.png)

![Imagen 2 - Página 46](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina46_img2.png)

---

<!-- Página 47 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
117. Metadatos XMP.
A partir de la versión 5.0 de Adobe Acrobat y PDF 1.4, los documentos PDF
pueden contener metadatos XML usando el formato XMP (Extensible Metadata
Platform). Desde un documento PDF se pueden guardar, exportar e importar
metadatos en formato XMP, para poder compartir metadatos entre varios
documentos PDF.
Estos metadatos se pueden ver desde la opción de menú Archivo,
seleccionando Propiedades, seleccionando la pestaña Descripción, pinchar en
Metadatos adicionales seleccionar Avanzado. Se mostrarán los metadatos
incrustados en el documento y según el esquema XMP, es decir, en grupos
predefinidos de información relacionada.
Desde aquí también se podrán añadir o reemplazar metadatos XMP
utilizando la opción de Anexar o Reemplazar y seleccionando un archivo XMP.
Figura 5.- Metadatos XMP en documento Adobe Acrobat 9.
118. Metadatos en plantilla.
Adobe Acrobat también permite exportar a una plantilla de metadatos, los
metadatos de un documento para poder reutilizarlos en otros documentos PDF. La
exportación e importación de este tipo de metadatos, se hace desde la opción de
menú Archivo, seleccionando Propiedades, pestaña Descripción, hacer clic en
Metadatos adicionales, seleccionar Avanzado y Guardar plantilla de metadatos.
Centro Crip tológico Nacional SIN CLASIFICAR 47

![Imagen 1 - Página 47](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina47_img1.png)

![Imagen 2 - Página 47](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina47_img2.png)

---

<!-- Página 48 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
119. Metadatos de Objetos dentro de un documento.
Además de los metadatos asociados al documento PDF, hay ciertos objetos,
etiquetas e imágenes dentro de un PDF que también pueden tener sus propios
metadatos.
120. Los documentos PDF también pueden contener información oculta, es decir,
información que no es directamente visible en el documento a través de la
configuración estándar de la aplicación, sino que es necesario seleccionar una
configuración determinada para ver estos datos.
a) Archivos adjuntos. Archivos en cualquier formato pueden ir asociados a un
documento PDF como adjuntos. En algunos casos puede resultar
inconveniente que el documento lleve ciertos archivos adjuntos por lo que
deben revisarse.
b) Marcadores. Los marcadores son enlaces en algún texto representativo, que
conducen a ciertas secciones del documento. Dada su función, no suelen
representar ningún riesgo, salvo que el título del marcador sea
comprometedor.
c) Comentarios. Los documentos PDF pueden contener comentarios que han
sido realizados a través de la herramienta de comentarios y marcas. Pero
estos comentarios además pueden estar ocultos y no ser visibles para el
usuario, por lo que es imprescindible revisar el documento para evitar que
información sensible contenida en los comentarios sea distribuida. Los
comentarios pueden contener también archivos adjuntos.
d) Campos de Formularios. Los documentos PDF pueden contener campos de
formularios, en los que se pueden incluir campos de firma o cualquier tipo de
acción o cálculo asociados a ellos. Es por lo tanto necesario revisar el
contenido de estos campos antes de la distribución del documento.
e) Texto oculto. Los documentos PDF pueden contener texto que haya sido
ocultado por diversos métodos: texto transparente, del color del fondo o
cubierto por otro texto y objetos. Es prioritario examinar el documento en
busca de texto oculto, ya que al no ser visible puede contener información
que no debe ser distribuida.
f) Capas ocultas. Los documentos PDF pueden contener varias capas, que
pueden estar visibles u ocultas. Las capas ocultas pueden contener texto u
objetos sensibles que no se ven a simple vista y que hay que examinar antes
de distribuir el documento.
g) Índices de Búsqueda. Los índices de búsqueda se utilizan en los documentos
PDF para realizar búsquedas en el documento con mayor rapidez. No suelen
representar un riesgo.
h) Contenido eliminado. Los documentos PDF pueden en algunos casos retener
contenido que haya sido eliminado y no sea ya visible, como páginas
eliminadas o cortadas, o imágenes borradas.
Centro Crip tológico Nacional SIN CLASIFICAR 48

![Imagen 1 - Página 48](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina48_img1.png)

---

<!-- Página 49 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Al tratarse de información que ha sido eliminada, supone un contenido que
no se quiere mostrar, por lo que el riesgo de que sea distribuido es elevado y
debe revisarse el documento para buscar este tipo de contenido.
i) Enlaces (links), Acciones y Scripts de Java. Los documentos PDF pueden
contener enlaces a páginas web y acciones añadidas a través de la utilidad
Acciones y scripts de Java (por ejemplo, lanzar un mensaje mediante un script
de java cuando se realice la acción de cerrar el documento). Los enlaces son
difíciles de encontrar en un documento ya que pueden estar asociados a
múltiples objetos.
j) Objetos solapados. Los documentos PDF pueden contener objetos que
cubren o solapan a otros objetos. Estos objetos pueden ser imágenes,
gráficos, patrones, etc.
Los objetos solapados pueden ser información obsoleta o información
sensible, por lo que deben ser revisados antes de distribuir el documento.
2. Configuración de Seguridad
121. En el caso de que los documentos PDF no tengan que llevar ningún metadato o
información oculta, sino que deban ser documentos PDF planos, se puede
automatizar el proceso de eliminación de estos ítems a través de las preferencias
de Adobe Acrobat.
122. Para ello, dentro de las preferencias seleccionar la categoría Documento y
seleccionar las opciones correspondientes dependiendo de la versión de Adobe
Acrobat.
123. En Acrobat 9, dentro del área examinar documento estarán las opciones:
• Examinar documento al cerrar documento.
• Examinar documento al enviarlo por correo electrónico.
124. En Acrobat X, dentro del área de Información oculta:
• Eliminar la información oculta, cuando el documento es guardado.
• Eliminar la información oculta, cuando el documento es enviado por
correo electrónico.
3. Inspección y Borrado de Metadatos e Información oculta
125. Existen multitud de aplicaciones, tanto gratuitas, como comerciales, que
realizan la inspección y borrado de metadatos para documentos PDF. Aparte de
estas soluciones, Adobe Acrobat dispone de varias utilidades que permiten
eliminar metadatos de las propiedades de los documentos.
Centro Crip tológico Nacional SIN CLASIFICAR 49

![Imagen 1 - Página 49](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina49_img1.png)

---

<!-- Página 50 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
126. Censurar contenido.
Para eliminar o censurar información sensible o privada del contenido de un
PDF que no queremos que se muestre cuando el documento sea distribuido, Adobe
Acrobat dispone de utilidades que eliminan de forma permanente estas palabras,
frases, párrafos, gráficos o imágenes del documento, permitiendo sustituirlo por un
área en blanco, por cajas de color (negro, por ejemplo) o por otro texto y objetos.
La ubicación de esta utilidad depende de la versión de Adobe Acrobat. En
Acrobat DC, por ejemplo, se encuentra en Herramientas – Redacción.
127. Borrado manual de metadatos.
Los metadatos que se encuentran en las Propiedades de documento, se
pueden modificar y eliminar de forma manual con Adobe Acrobat accediendo a
ellos y modificando o borrando su contenido.
128. Inspección y borrado automático de metadatos: “Eliminar Información
oculta”
Adobe Acrobat dispone de una utilidad para inspeccionar y eliminar todos los
metadatos e información oculta de un documento: en Acrobat 9, es la utilidad de
“Examinar Documento” y en Adobe X, XI y DC es la utilidad de “Eliminar
Información oculta”.
Una vez que se ejecuta la utilidad, se despliega el listado ítems de metadatos
y datos ocultos que ha encontrado sobre el documento, dando la opción de pre
visualizaros para poder verificar de que datos se trata. La utilidad permite
seleccionar qué ítems se quieren eliminar.
Figura 6.- Utilidad de Examinar documento en Acrobat 9.
Centro Crip tológico Nacional SIN CLASIFICAR 50

![Imagen 1 - Página 50](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina50_img1.png)

![Imagen 2 - Página 50](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina50_img2.png)

---

<!-- Página 51 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
La utilidad de “Eliminar Información oculta”, debe ser usada con
minuciosidad, ya que puede también eliminar cualquier otro objeto adjunto al
documento, como pueden ser firmas digitales, información añadida a través de
plugins y aplicaciones de terceras partes o características especiales de Acrobat
Reader, a través de las cuales los usuarios revisan, firman y rellenan documentos
PDF.
a) Funcionamiento de “Eliminar Información oculta” para Adobe Acrobat X:
• Abrir el documento que se quiere inspeccionar con Adobe Acrobat.
• Desde el panel de Herramientas, desplegar el panel de Protección y
seleccionar Eliminar Información oculta.
• Se abre una ventana y comienza el análisis del documento. Seleccionar
Expandir todo, para poder ver los ítems de información oculta que va
encontrando.
• Una vez finaliza, seleccionar los ítems de metadatos e información
oculta que queremos eliminar y pulsar Eliminar.
• Los cambios al documento no se aplicarán hasta que se guarde. Dado
que una vez guardado los cambios son permanentes y no se podrá
recuperar la información y metadatos eliminados, es recomendable
haber realizado una copia de seguridad previa.
La utilidad permite previsualizar los ítems de metadatos e información oculta
previamente a seleccionarlos para su borrado. De esta forma podemos
acceder a los ítems para modificarlos (por ejemplo, en el caso de metadatos),
y desactivarlos en caso de que una vez modificados ya no nos interese
eliminarlos.
b) Metadatos e Información oculta que inspecciona y elimina la utilidad
“Eliminar Información oculta” para Adobe Acrobat X:
Tipo de Metadato
“Eliminar Información oculta”
o Información oculta
Metadatos en Propiedades del documento Sí
Metadatos XMP Sí
Metadatos importados con plantilla Adobe Sí
Metadatos en Objetos dentro del documento Sí
Archivos Adjuntos Sí
Marcadores Sí
Comentarios Sí
Texto Oculto Sí
Centro Crip tológico Nacional SIN CLASIFICAR 51

|  | Tipo de Metadato |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | “Eliminar Información oculta” |  |
|  | o Información oculta |  |  |  |  |
| Metadatos en Propiedades del documento |  |  | Sí |  |  |
| Metadatos XMP |  |  | Sí |  |  |
| Metadatos importados con plantilla Adobe |  |  | Sí |  |  |
| Metadatos en Objetos dentro del documento |  |  | Sí |  |  |
| Archivos Adjuntos |  |  | Sí |  |  |
| Marcadores |  |  | Sí |  |  |
| Comentarios |  |  | Sí |  |  |
| Texto Oculto |  |  | Sí |  |  |


![Imagen 1 - Página 51](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina51_img1.png)

---

<!-- Página 52 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Tipo de Metadato
“Eliminar Información oculta”
o Información oculta
Sí, pero si se eliminan las capas ocultas, se
Capas ocultas formatean las demás capas visibles en una
sola capa.
Enlaces a URL y Acciones y Scripts de Java Sí
Objetos solapados Sí
Contenido eliminado Sí
Sí, pero si se eliminan estos índices, se
Índices de Búsqueda reduce el tamaño del archivo pero se
incrementan los tiempos de búsqueda.
Sí, pero si se eliminan estos campos, se
Campos de Formulario dejan formateados y no se podrán rellenar,
editar o firmar.
Tabla 8.- Información que inspecciona y elimina la utilidad “Eliminar Información oculta” de Adobe
Acrobat X.
Centro Crip tológico Nacional SIN CLASIFICAR 52

|  | Tipo de Metadato |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | “Eliminar Información oculta” |  |
|  | o Información oculta |  |  |  |  |
| Capas ocultas |  |  | Sí, pero si se eliminan las capas ocultas, se <br> formatean las demás capas visibles en una <br> sola capa. |  |  |
| Enlaces a URL y Acciones y Scripts de Java |  |  | Sí |  |  |
| Objetos solapados |  |  | Sí |  |  |
| Contenido eliminado |  |  | Sí |  |  |
| Índices de Búsqueda |  |  | Sí, pero si se eliminan estos índices, se <br> reduce el tamaño del archivo pero se <br> incrementan los tiempos de búsqueda. |  |  |
| Campos de Formulario |  |  | Sí, pero si se eliminan estos campos, se <br> dejan formateados y no se podrán rellenar, <br> editar o firmar. |  |  |


![Imagen 1 - Página 52](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina52_img1.png)

---

<!-- Página 53 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
ANEXO D. METADATOS EN IMÁGENES
129. Los documentos de imagen (a los que nos referiremos como imágenes
digitales), emplean múltiples formatos de fichero. Los más comunes son: TIFF,
JPEG, PSD y RAW. Cada uno de estos formatos, tiene sus propias reglas sobre cómo
almacenar los metadatos asociados.
130. Existen a su vez múltiples estándares y formatos de metadatos que permiten
incluir datos informativos en las imágenes digitales. Cada uno de ellos especifica
cómo se deben almacenar, ordenar y codificar los metadatos, así como la
agrupación semántica que define la representación de los metadatos (por ejemplo,
cadenas de caracteres, números, arrays, etc.).
131. Algunos metadatos son de sólo lectura, mientras que otros pueden ser
modificados por el usuario. Algunos metadatos son implementados por un único
estándar, mientras que otros (por ejemplo, el Copyright) son implementados por
varios estándares, utilizando una semántica parecida, pero con sutiles diferencias.
1. Tipos de Metadatos
132. Los principales estándares que existen para la definición de metadatos en las
imágenes digitales son: EXIF, IPTC y XPM.
133. EXIF – Exchangeable Image File Format.
EXIF es el formato de metadatos más utilizado por las cámaras digitales.
Define una serie de etiquetas (tags), que describen las características de la cámara
(fabricante, modelo, software, etc.), y su configuración en el momento de captura
de la imagen. Los metadatos EXIF también contienen las coordenadas de
localización en caso de que la cámara disponga de GPS, así como otros metadatos
descriptivos como título, autor, copyright, etc.
Figura 7.- Ejemplo de Metadatos EXIF.
Centro Crip tológico Nacional SIN CLASIFICAR 53

![Imagen 1 - Página 53](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina53_img1.png)

![Imagen 2 - Página 53](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina53_img2.jpeg)

---

<!-- Página 54 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
134. IPTC – International Press Telecommunication Council.
IPTC es un consorcio formado por las principales agencias de noticias y
empresas de comunicación. En IPTC las organizaciones de la industria periodística
desarrollan y mantienen estándares técnicos, para mejorar y homogeneizar el
intercambio de noticias entre las agencias del mundo.
El estándar IPTC añade metadatos a las noticias en formato texto y en
formato de imagen digital. Ha ido evolucionando desde IPTC-IMM (Information
Interchange Model), que introducía lo que se llamaba “Cabecera IPTC” y que fue
adoptada por Adobe Photoshop y otras aplicaciones similares. Actualmente los
estándares usados son IPTC Core e IPTC Extension, que adoptan el formato XMP
introducido por Adobe, como sucesor de IIM.
Figura 8.- Ejemplo de Metadatos IPTC.
135. XMP – Extensible Metadata Platform.
XMP es un estándar que define un modelo para la creación y procesamiento
de metadatos, basado en etiquetas XML. Este modelo utiliza un esquema de
metadatos para almacenar propiedades básicas, y otro para que cada dispositivo o
aplicación pueda almacenar su propia información. De este modo, cada aplicación
podrá usar este método común para capturar y compartir sus metadatos.
XMP utiliza como formato de almacenamiento RDF (Resource Description
Framework).
Centro Crip tológico Nacional SIN CLASIFICAR 54

![Imagen 1 - Página 54](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina54_img1.png)

![Imagen 2 - Página 54](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina54_img2.png)

---

<!-- Página 55 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Figura 9.- Ejemplo de Metadatos XMP.
136. Algunos tipos de metadatos, son creados y utilizados en exclusiva por alguno de
los estándares. En cambio, otros tipos de metadatos son implementados por más
de un estándar.
La siguiente figura y la siguiente tabla, muestran metadatos compartidos en
los tres estándares y metadatos usados en exclusiva por alguno de ellos.
Figura 10.- Metadatos comunes o exclusivos en cada estándar.
Metadato Descripción EXIF XMP IPTC
Descripción Descripción de la imagen X X X
Fecha Creación Cuándo la imagen fue tomada o digitalizada X X X
Copyright Información del copyright X X X
Autor Autor de la imagen X X X
Etiquetas para identificar la imagen y poder filtrar
Etiquetas X X
en las búsquedas.
Datos textuales
Datos de texto sobre la localización: Región del
sobre X X
mundo, País, Provincia, Ciudad, Zona.
localización
Puntuación de la imagen (por ejemplo, de 1 a 5
Clasificación X
estrellas)
Centro Crip tológico Nacional SIN CLASIFICAR 55

|  | Metadato |  |  | Descripción |  |  | EXIF |  |  | XMP |  |  | IPTC |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Descripción |  |  | Descripción de la imagen |  |  | X |  |  | X |  |  | X |  |  |
| Fecha Creación |  |  | Cuándo la imagen fue tomada o digitalizada |  |  | X |  |  | X |  |  | X |  |  |
| Copyright |  |  | Información del copyright |  |  | X |  |  | X |  |  | X |  |  |
| Autor |  |  | Autor de la imagen |  |  | X |  |  | X |  |  | X |  |  |
| Etiquetas |  |  | Etiquetas para identificar la imagen y poder filtrar <br> en las búsquedas. |  |  |  |  |  | X |  |  | X |  |  |
| Datos textuales <br> sobre <br> localización |  |  | Datos de texto sobre la localización: Región del <br> mundo, País, Provincia, Ciudad, Zona. |  |  |  |  |  | X |  |  | X |  |  |
| Clasificación |  |  | Puntuación de la imagen (por ejemplo, de 1 a 5 <br> estrellas) |  |  |  |  |  | X |  |  |  |  |  |


![Imagen 1 - Página 55](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina55_img1.png)

![Imagen 2 - Página 55](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina55_img2.png)

![Imagen 3 - Página 55](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina55_img3.png)

---

<!-- Página 56 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Coordenadas GPS creadas automáticamente por
Localización GPS X
el dispositivo de captura de imagen.
Tipo de Tipo de dispositivo con el que se ha capturado la
X
dispositivo imagen: fabricante, modelo, número de serie, etc.
Configuración del dispositivo con el que se ha
Configuración capturado la imagen: tiempo de exposición,
X
del dispositivo número F o abertura, distancia focal, modo de
flash, etc.
Tabla 9.- Detalle de Metadatos comunes o exclusivos en cada estándar.
137. Por otro lado, y como se muestra en la siguiente figura, las últimas versiones de
XPM ya permiten mapear casi todos los metadatos EXIF e IPTC.
Figura 11.- Mapeo de metadatos a XMP.
138. Un archivo de imagen digital (por ejemplo, JPEG, TIFF o PSD) puede almacenar
metadatos en varios formatos (EXIF, XPM o IPTC). Cada tipo de metadato deberá ir
en el segmento apropiado del fichero. Por ejemplo, en un archivo JPEG los
segmentos APP1 son los destinados a metadatos EXIF y XMP. El segmento APP13
se destina a información “no gráfica” de Adobe Photoshop y en este segmento irán
los metadatos IPTC.
Figura 12.- Tipos de Metadatos en ficheros JPEG.
Centro Crip tológico Nacional SIN CLASIFICAR 56

| Localización GPS | Coordenadas GPS creadas automáticamente por <br> el dispositivo de captura de imagen. | X |  |  |
| --- | --- | --- | --- | --- |
| Tipo de <br> dispositivo | Tipo de dispositivo con el que se ha capturado la <br> imagen: fabricante, modelo, número de serie, etc. | X |  |  |
| Configuración <br> del dispositivo | Configuración del dispositivo con el que se ha <br> capturado la imagen: tiempo de exposición, <br> número F o abertura, distancia focal, modo de <br> flash, etc. | X |  |  |


![Imagen 1 - Página 56](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina56_img1.png)

![Imagen 2 - Página 56](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina56_img2.png)

![Imagen 3 - Página 56](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina56_img3.png)

---

<!-- Página 57 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
2. Configuración de Seguridad
139. Los dispositivos móviles, tanto iOS como Android, permiten añadir información
de la localización geográfica a las fotografías realizadas con la cámara del
dispositivo. Esta información es conocida como geoetiquetas (o geotags). Al
realizar la fotografía se añaden a la cabecera EXIF de la imagen las coordenadas
GPS en el momento de realizar la captura.
140. En lo que respecta a las cámaras digitales, algunas disponen de opción para
deshabilitar las coordenadas GPS de localización geográfica, y otras no. Dependerá
del fabricante y modelo, y para modificar la configuración será necesario consultar
el Manual de instrucciones de la cámara.
141. Se recomienda no hacer uso de esta funcionalidad que incluye la información
de localización en fotografías, especialmente para su publicación o distribución en
Internet, salvo que se quiera hacer uso explícito e intencionado de estas
capacidades. En caso contrario, las imágenes revelarán los detalles exactos de
dónde han sido tomadas.
142. Dispositivos iOS.
Por defecto, iOS no tiene definido si la información de localización se
incorporará a las fotografías tomadas con el dispositivo. La primera vez que se hace
uso de la cámara, iOS solicita permiso al usuario para incorporar la información de
localización a las fotografías.
Esta funcionalidad es utilizada automáticamente por iOS una vez la aplicación
"Cámara" ha sido añadida al centro de gestión de localización de iOS.
A través del menú de configuración del centro de gestión de localización, es
posible habilitar o deshabilitar la incorporación de esta información a las
fotografías que se realicen con la cámara. En iOS 10.x, se realizará siguiendo estos
pasos:
• Acceder a Ajustes, seleccionar privacidad.
• Seleccionar Localización. Esto nos da acceso al centro de gestión de
localización.
• De entre las aplicaciones disponibles en el centro, seleccionar Cámara.
• Dentro de las opciones de Permitir acceso a ubicación, seleccionar
Nunca.
Centro Crip tológico Nacional SIN CLASIFICAR 57

![Imagen 1 - Página 57](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina57_img1.png)

---

<!-- Página 58 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Paso 1
Paso 2
Paso 3
Paso 4
Figura 13. Deshabilitar localización en cámara iOS 10.x.
Para comprobar si una imagen de la galería de imágenes tiene asociados
metadatos de localización, se debe seleccionar y pulsar Detalles. Ahí se podrá
observar si se encuentran los metadatos de la localización donde fue tomada la
imagen, e incluso si dispone de estos metadatos la situará en un plano.
143. Dispositivos Android.
En Android la primera vez que se ejecuta la aplicación "Cámara", se pregunta
al usuario si desea etiquetar las fotografías y vídeos con la información de la
ubicación donde se han capturado (opción habilitada por defecto).
Esta funcionalidad puede ser habilitada y deshabilitada en cualquier
momento a través del menú de configuración de la cámara.
En Android 5.x, se realizará siguiendo estos pasos:
• Abrir la cámara.
Centro Crip tológico Nacional SIN CLASIFICAR 58

![Imagen 1 - Página 58](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina58_img1.png)

![Imagen 2 - Página 58](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina58_img2.png)

![Imagen 3 - Página 58](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina58_img3.png)

![Imagen 4 - Página 58](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina58_img4.png)

![Imagen 5 - Página 58](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina58_img5.png)

---

<!-- Página 59 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
• Seleccionar configuración.
• Dentro de la ventana de configuración, ir a la pestaña de ajustes.
• Deshabilitar la opción “Etiquetado Geográfico”.
Figura 14. Deshabilitar localización en cámara Android 5.x.
Cuando seleccionamos una imagen de la galería de imágenes, al pulsar
Información observamos si se encuentran los metadatos de la localización donde
fue tomada la imagen, e incluso la situará en un plano.
144. Deshabilitar la función de localización de la cámara puede no evitar que otras
aplicaciones del dispositivo que tengan acceso a ella, y que tengan habilitada la
localización (como, por ejemplo, WhatsApp, Facebook, Instagram, etc.), sean
todavía capaces de almacenar los datos de localización en la imagen digital que se
capture directamente con ellas. Esto dependerá de las versiones de sistema
operativo del teléfono y de las versiones de dichas aplicaciones.
145. Es por lo tanto conveniente capturar primero la imagen con la cámara del
dispositivo, que tendrá deshabilitada la captura de datos de localización, antes de
proceder a compartirla con estas aplicaciones.
3. Inspección y Borrado de Metadatos
3.1. Utilidades para Ordenador
146. Cuando la imagen digital se encuentra en el ordenador, se pueden emplear
varios métodos para visualizar y eliminar los metadatos que contiene. Por un lado,
existen utilidades propias del sistema operativo del equipo, y, por otro lado,
existen multitud de aplicaciones, tanto gratuitas como comerciales, que permiten
Centro Crip tológico Nacional SIN CLASIFICAR 59

![Imagen 1 - Página 59](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina59_img1.png)

![Imagen 2 - Página 59](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina59_img2.jpeg)

---

<!-- Página 60 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
visualizar y borrar los metadatos asociados a las imágenes digitales.
147. Utilidades de Microsoft Windows.
Microsoft Windows permite visualizar y eliminar metadatos asociados a una
imagen digital a través de las siguientes utilidades.
a) Explorador de Archivos.
Abrir el explorador de archivos y navegar hasta la imagen. Sobre ella, pulsar
botón derecho del ratón, seleccionar Propiedades y seleccionar la pestaña
Detalles.
Windows detecta dos categorías de metadatos EXIF: “Cámara” y “Fotografía
avanzada”. En ellas se recogen las características de la cámara (fabricante,
modelo, software, etc.), y la configuración en el momento de captura de la
imagen (distancia focal, velocidad ISO, etc.).
Figura 15. Metadatos mostrados por explorador de ficheros Windows.
En la parte baja de la ventana se encuentra la opción de “Quitar propiedades
e información personal”. Al pulsar en esta opción, se abre la herramienta de
Windows para eliminar los datos EXIF. Esta herramienta permite dos
opciones:
• Seleccionar los datos que queremos borrar (todos, o un conjunto de
ellos marcando su correspondiente check).
• Dejar que Windows cree una copia de la imagen eliminando todos los
datos que sea posible.
Centro Crip tológico Nacional SIN CLASIFICAR 60

![Imagen 1 - Página 60](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina60_img1.png)

![Imagen 2 - Página 60](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina60_img2.png)

![Imagen 3 - Página 60](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina60_img3.png)

---

<!-- Página 61 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Figura 16. Eliminar metadatos con Explorador de ficheros Windows.
b) Visualizador de fotos de Windows.
Si abrimos la imagen digital con el visualizador por defecto de Windows, al
seleccionar Archivo y a continuación Propiedades, se abre la misma ventana
que desde el explorador de ficheros.
Permite por lo tanto visualizar y eliminar los metadatos tal y como se ha
explicado en el apartado anterior.
Figura 17. Visualizador de fotos de Windows.
Centro Crip tológico Nacional SIN CLASIFICAR 61

![Imagen 1 - Página 61](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina61_img1.png)

![Imagen 2 - Página 61](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina61_img2.png)

![Imagen 3 - Página 61](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina61_img3.png)

![Imagen 4 - Página 61](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina61_img4.png)

---

<!-- Página 62 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Figura 18. Propiedades con Visualizador de fotos de Windows.
148. GIMP (GNU Image Manipulation Program)
GIMP es un software libre de edición de imágenes compatible con múltiples
plataformas. Se incluye en esta guía como ejemplo para ilustrar el borrado de
metadatos, pero existen muchos otros.
Desde GIMP se pueden visualizar, agregar, editar o borrar los metadatos
asociados a las imágenes digitales. A continuación, se indican los pasos a seguir con
la versión 2.8.20 para eliminar metadatos.
• Desde GIMP, abrir la imagen digital que queremos modificar. Si
seleccionamos Archivo y a continuación Propiedades, se pueden
observar los metadatos que contiene.
Figura 19. Metadatos visualizados en GIMP 2.8.20.
Centro Crip tológico Nacional SIN CLASIFICAR 62

![Imagen 1 - Página 62](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina62_img1.png)

![Imagen 2 - Página 62](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina62_img2.jpeg)

![Imagen 3 - Página 62](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina62_img3.png)

---

<!-- Página 63 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
• Para eliminar los metadatos, seleccionar la opción de menú Archivo y a
continuación seleccionar Exportar. Indicar el nuevo nombre de la
imagen que vamos a crear sin metadatos. Seleccionar la carpeta en la
que vamos a guardar la imagen exportada.
Figura 20. Eliminar metadatos en GIMP 2.8.20. Paso 1.
• Pulsar Exportar. Esto abre una ventana con las opciones para exportar.
Expandir las opciones seleccionando el panel de Opciones Avanzadas.
Figura 21. Eliminar metadatos en GIMP 2.8.20. Paso 2.
• Quitar el check de “Guardar datos EXIF” y “Guardar datos XMP”.
Seleccionar el resto de opciones según corresponda, y pulsar Exportar.
Figura 22. Eliminar metadatos en GIMP 2.8.20. Paso 3.
Centro Crip tológico Nacional SIN CLASIFICAR 63

![Imagen 1 - Página 63](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina63_img1.png)

![Imagen 2 - Página 63](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina63_img2.png)

![Imagen 3 - Página 63](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina63_img3.png)

![Imagen 4 - Página 63](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina63_img4.png)

---

<!-- Página 64 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
3.2. Utilidades para Dispositivos móviles
149. En caso de que las imágenes digitales se encuentren en un dispositivo móvil
(por ejemplo, Smartphone o Tablet), puede ser más apropiado emplear una
aplicación que elimine los metadatos directamente en el dispositivo, en lugar de
trasladar la imagen digital al ordenador.
150. Existen multitud de aplicaciones en la tienda de aplicaciones, tanto de Apple
(App Store), como de Android (Play Store), que se pueden descargar de forma
gratuita, y que permiten abrir una imagen digital del álbum del dispositivo y
realizar varias funciones como las siguientes.
• Visualizar sus metadatos. En la siguiente figura se muestran dos
ejemplos de cómo se pueden visualizar los metadatos de una imagen
digital, en aplicaciones gratuitas para iPhone.
Figura 23. Ejemplos de visualización de metadatos en iPhone.
• Eliminar sus metadatos. En las siguientes figuras se muestra un ejemplo
de cómo se pueden eliminar los metadatos de una imagen digital, con
una aplicación gratuita para iPhone. La primera figura representa la
imagen original con los metadatos EXIF, incluida la localización. La
segunda es la copia de la imagen original que ha creado la aplicación,
con los metadatos eliminados.
Centro Crip tológico Nacional SIN CLASIFICAR 64

![Imagen 1 - Página 64](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina64_img1.png)

![Imagen 2 - Página 64](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina64_img2.jpeg)

![Imagen 3 - Página 64](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina64_img3.png)

---

<!-- Página 65 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Figura 24. Ejemplo de borrado de metadatos en iPhone.
• Compartir imagen. Algunas aplicaciones ofrecen la opción de compartir
la imagen con o sin metadatos. Otras, no permiten compartir la imagen
y generan un aviso para indicar que deben eliminarse primero sus
metadatos sensibles.
• La siguiente figura muestra un ejemplo de ambos casos, con
aplicaciones gratuitas para iPhone.
Figura 25. Ejemplos de compartir imagen con o sin metadatos en iPhone.
Centro Crip tológico Nacional SIN CLASIFICAR 65

![Imagen 1 - Página 65](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina65_img1.png)

![Imagen 2 - Página 65](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina65_img2.jpeg)

![Imagen 3 - Página 65](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina65_img3.jpeg)

![Imagen 4 - Página 65](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina65_img4.jpeg)

![Imagen 5 - Página 65](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina65_img5.jpeg)

---

<!-- Página 66 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
ANEXO E. DEFINICIONES
Archivo electrónico. Un tipo de objeto de información electrónica perdurable,
normalmente generado por un programa de ordenador y disponible para su uso por
otros programas.
Documentos Ofimáticos. Son un tipo de documento electrónico generado por los
‘programas ofimáticos’.
EXIF. Exchangeable Image File Format. Especificación para formatos de archivos de
imagen usado por las cámaras digitales. Esta especificación usa los formatos de
archivos de imagen más comunes, como JPEG, TIFF Rev. 6.0, RIFF y agrega ítems
específicos de metadatos.
Información o datos ocultos. Son aquellos datos existentes en el contenido de los
documentos electrónicos, que no son visibles con la configuración estándar o
configuración por defecto de los programas office, siendo necesario aplicar alguna
opción específica dentro de la configuración de estos programas para su visualización.
Un ejemplo de datos ocultos es el texto oculto, filas o columnas ocultas, comentarios o
información del documento, etc.
IPTC (International Press Telecommunication Council). Organización que crea y
mantiene estándares de metadatos.
IPTC – IIM (IPTC Information Interchange Model). Estándar de formato de metadatos
multimedia creado por IPTC.
IPTC Core. Estándar de formato de metadatos para imágenes digitales basado en XMP,
creado por IPTC.
IRM (Information Rights Management). Utilidad de Microsoft que permite restringir
los permisos de un documento para evitar que personas no autorizadas impriman,
reenvíen o copien información confidencial.
JPEG (Joint Photographic Experts Group). Formato de ficheros digitales, ampliamente
utilizado para ficheros de imagen y fotografía.
Metadatos. Información estructurada que describe, explica, localiza y además hace
más fácil recuperar, utilizar o gestionar un recurso de información. Los metadatos son
comúnmente llamados “datos sobre los datos” o “información sobre la información”.
ODF (OpenDocument Format). Formato de documento abierto. Es un formato abierto
y estándar para archivos de documentos ofimáticos. Esto incluye documentos de texto
(extensión .odt), libros de cálculo (extensión .ods), presentaciones (extensión .odp),
dibujos (extensión .odg), gráficos (extensión .odc), fórmulas matemáticas (extensión
.odf) e imágenes (extensión .odi). Este formato ha sido aprobado por ISO e IEC como
estándar internacional y está basado en XML.
PII (Personally Identificable Information). Información personalmente identificable.
Información que puede usarse para identificar, contactar o localizar a una persona en
concreto, o puede usarse junto con otras fuentes de información para hacerlo.
Centro Crip tológico Nacional SIN CLASIFICAR 66

![Imagen 1 - Página 66](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina66_img1.png)

---

<!-- Página 67 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
Política de Gestión documental. Dentro de las Políticas implantadas en la organización
para el desempeño de sus actividades, la Política de Gestión documental establecerá
unos criterios y normas en relación con la gestión de los documentos. En ella estarán
especificados y detallados los metadatos que deben contener los documentos para
asegurar la gestión, recuperación y conservación de los mismos durante todo su ciclo
de vida.
Proceso de Configuración Segura de las aplicaciones. Proceso que describe cómo
establecer la Configuración de Seguridad en las aplicaciones o programas que realicen
el tratamiento y gestión de documentos electrónicos, de forma que se eviten o al
menos se limiten los metadatos e información oculta que dichos programas puedan
almacenar en los documentos.
Proceso de limpieza de documentos. Proceso perteneciente a los Procedimientos de
Seguridad de la organización, cuyo objetivo es especificar las actividades a realizar para
eliminar los metadatos e información oculta de los documentos. Deberá indicar las
herramientas a emplear en función del tipo de documento, y cómo se utilizará cada
una de ellas para eliminar el metadato o dato oculto deseado, incluyendo el detalle de
las acciones a llevar a cabo para completar la limpieza del documento y también las
acciones necesarias para verificar que la limpieza se ha completado de forma efectiva.
Programas de generación y tratamiento de documentos. Programas de ordenador
destinados a la generación de documentos en cualquier formato (por ejemplo, Adobe
Acrobat).
Programas o Aplicaciones Ofimáticas. Dentro de los programas de generación y
tratamiento de documentos, los programas ofimáticos son un conjunto de programas
básicos para su uso en oficinas, con un interfaz y funciones comunes y cuyo objetivo
será el tratamiento de textos, hojas de cálculo, presentaciones, gráficos, tablas, etc.
Dos ejemplos de programas ofimáticos muy conocidos, son Microsoft Office y Apache
OpenOffice.
PSD. Formato de fichero nativo de Adobe Photoshop.
Sidecar files. Ficheros que almacenan datos, normalmente metadatos, no soportados
por el formato del documento fuente. Cada documento puede llevar asociados uno o
más “sidecar files” con metadatos en diversos formatos.
TIFF (Tagged Image File Format). Formato de fichero para almacenamiento de
imágenes y fotografías digitales.
Usuario. Individuo que crea, modifica, almacena o distribuye un documento
electrónico.
XMP. Plataforma Extensible de Metadatos (Extensible Metadata Platform). Es un tipo
de lenguaje especificado extensible de marcado (eXtensible Markup Language)
introducido por Adobe System y usado en los documentos PDF y aplicaciones de
fotografía o de retoque fotográfico para introducir metadatos específicos.
Centro Crip tológico Nacional SIN CLASIFICAR 67

![Imagen 1 - Página 67](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina67_img1.png)

---

<!-- Página 68 de 68 -->

SIN CLASIFICAR
CCN-STIC-835 Esquema Nacional de Seguridad. Borrado de Metadatos
ANEXO F. REFERENCIAS
- Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de
Seguridad en el ámbito de la Administración Electrónica.
- Real Decreto 951/2015, de 23 de octubre, de modificación del Real Decreto 3/2010,
de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el ámbito de
la Administración Electrónica.
- Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de
Interoperabilidad en el ámbito de la Administración Electrónica.
- Resolución de 19 de julio de 2011, de la Secretaría de Estado para la Función
Pública, por la que se aprueba la Norma Técnica de Interoperabilidad de
Documento Electrónico.
- CCN-STIC-818 de Herramientas de Seguridad en el ENS.
- PAe – Portal de administración electrónica – Archivo electrónico.
- https://administracionelectronica.gob.es/pae_Home/pae_Estrategias/Archivo_ele
ctronico.html#.WFK2dmfmqic
- Sociedad Española de Documentación e Información Científica (SEDIC) -
http://www.sedic.es/
- Oracle White Paper – March 2007 – “The Risks of Metadata an Hidden
Information”
- NISO (National Information Standards Organization) booklet “Understanding
Metadata”
- Guidelines for Handling Image Metadata. Version 2. November 2010. Metadata
Working Group.
- Web de Soporte de Microsoft - https://support.office.com
- Web de soporte Apache OpenOffice - https://wiki.openoffice.org
- Web de soporte Adobe Acrobat - https://helpx.adobe.com
Centro Crip tológico Nacional SIN CLASIFICAR 68

![Imagen 1 - Página 68](CCN-STIC-835 Borrado de Metadatos en el marco del ENS_assets\pagina68_img1.png)