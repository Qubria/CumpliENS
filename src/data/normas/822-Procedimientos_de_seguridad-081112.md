---
**CreationDate:** D:20121116084309Z
**Creator:** Microsoft® Office Word 2007
**ModDate:** D:20121116100532+01'00'
**Producer:** Microsoft® Office Word 2007
---

<!-- Página 1 de 13 -->

SIN CLASIFICAR
GUÍA DE SEGURIDAD
(CCN-STIC-822)
ESQUEMA NACIONAL DE SEGURIDAD
PROCEDIMIENTOS DE SEGURIDAD
OCTUBRE 2012
SIN CLASIFICAR

![Imagen 1 - Página 1](822-Procedimientos_de_seguridad-081112_assets\pagina1_img1.jpeg)

![Imagen 2 - Página 1](822-Procedimientos_de_seguridad-081112_assets\pagina1_img2.jpeg)

![Imagen 3 - Página 1](822-Procedimientos_de_seguridad-081112_assets\pagina1_img3.jpeg)

---

<!-- Página 2 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
Edita:
 Editor y Centro Criptológico Nacional, 2012
NIPO: 002-12-066-9
Tirada: 1000 ejemplares
Fecha de Edición: octubre de 2012
El Sr. Carlos Galán ha elaborado el presente documento y sus anexos.
LIMITACIÓN DE RESPONSABILIDAD
El presente documento se proporciona de acuerdo con los términos en él recogidos, rechazando expresamente
cualquier tipo de garantía implícita que se pueda encontrar relacionada. En ningún caso, el Centro Criptológico
Nacional puede ser considerado responsable del daño directo, indirecto, fortuito o extraordinario derivado de la
utilización de la información y software que se indican incluso cuando se advierta de tal posibilidad.
AVISO LEGAL
Quedan rigurosamente prohibidas, sin la autorización escrita del Centro Criptológico Nacional, bajo las
sanciones establecidas en las leyes, la reproducción parcial o total de este documento por cualquier medio o
procedimiento, comprendidos la reprografía y el tratamiento informático, y la distribución de ejemplares del
mismo mediante alquiler o préstamo públicos.
Centro Criptológico Nacional 2
SIN CLASIFICAR

![Imagen 1 - Página 2](822-Procedimientos_de_seguridad-081112_assets\pagina2_img1.jpeg)

---

<!-- Página 3 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
PRÓLOGO
El uso masivo de las tecnologías de la información y las telecomunicaciones (TIC), en todos los
ámbitos de la sociedad, ha creado un nuevo espacio, el ciberespacio, donde se producirán conflictos y
agresiones, y donde existen ciberamenazas que atentarán contra la seguridad nacional, el estado de
derecho, la prosperidad económica, el estado de bienestar y el normal funcionamiento de la sociedad y
de las administraciones públicas.
La Ley 11/2002, de 6 de mayo, reguladora del Centro Nacional de Inteligencia, encomienda al Centro
Nacional de Inteligencia el ejercicio de las funciones relativas a la seguridad de las tecnologías de la
información en su artículo 4.e), y de protección de la información clasificada en su artículo 4.f), a la
vez que confiere a su Secretario de Estado Director la responsabilidad de dirigir el Centro Criptológico
Nacional en su artículo 9.2.f).
Partiendo del conocimiento y la experiencia del CNI sobre amenazas y vulnerabilidades en materia de
riesgos emergentes, el Centro realiza, a través de su Centro Criptológico Nacional, regulado por el
Real Decreto 421/2004, de 12 de marzo, diversas actividades directamente relacionadas con la
seguridad de las TIC, orientadas a la formación de personal experto, a la aplicación de políticas y
procedimientos de seguridad, y al empleo de tecnologías de seguridad adecuadas.
Una de las funciones más destacables del Centro Criptológico Nacional es la de elaborar y difundir
normas, instrucciones, guías y recomendaciones para garantizar la seguridad de los sistemas de las
tecnologías de la información y las comunicaciones de la Administración, materializada en la
existencia de la serie de documentos CCN-STIC.
Disponer de un marco de referencia que establezca las condiciones necesarias de confianza en el uso
de los medios electrónicos es, además, uno de los principios que establece la ley 11/2007, de 22 de
junio, de acceso electrónico de los ciudadanos a los servicios públicos, en su artículo 42.2 sobre el
Esquema Nacional de Seguridad (ENS).
Precisamente el Real Decreto 3/2010 de 8 de Enero de desarrollo del Esquema Nacional de Seguridad
fija los principios básicos y requisitos mínimos así como las medidas de protección a implantar en los
sistemas de la Administración, y promueve la elaboración y difusión de guías de seguridad de las
tecnologías de la información y las comunicaciones por parte de CCN para facilitar un mejor
cumplimiento de dichos requisitos mínimos.
En definitiva, la serie de documentos CCN-STIC se elabora para dar cumplimiento a los cometidos del
Centro Criptológico Nacional y a lo reflejado en el Esquema Nacional de Seguridad, conscientes de la
importancia que tiene el establecimiento de un marco de referencia en esta materia que sirva de apoyo
para que el personal de la Administración lleve a cabo su difícil, y en ocasiones, ingrata tarea de
proporcionar seguridad a los sistemas de las TIC bajo su responsabilidad.
Octubre de 2012
Félix Sanz Roldán
Secretario de Estado
Director del Centro Criptológico Nacional
Centro Criptológico Nacional 3
SIN CLASIFICAR

![Imagen 1 - Página 3](822-Procedimientos_de_seguridad-081112_assets\pagina3_img1.jpeg)

---

<!-- Página 4 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
ÍNDICE
1. INTRODUCCIÓN ................................................................................................................................... 5
2. ÁMBITO DE APLICACIÓN .................................................................................................................. 5
3. REGULACIONES INTERNAS A LOS ORGANISMOS DE LAS ADMINISTRACIONES
PÚBLICAS .............................................................................................................................................. 6
4. LAS GUÍAS CCN-STIC COMO FUENTE DE MODELOS DE NORMAS Y PROCEDIMIENTOS .. 7
5. CONVENCIONES USADAS .................................................................................................................. 7
6. CONTENIDO .......................................................................................................................................... 8
7. DESARROLLO NORMATIVO Y PROCEDIMENTAL DE LA POLÍTICA DE SEGURIDAD ......... 8
8. PRECEPTOS DEL ENS CONTEMPLADOS EN ESTA GUÍA ............................................................ 9
9. MÉTRICAS E INDICADORES DE CUMPLIMIENTO ..................................................................... 12
10. RECONOCIMIENTO ........................................................................................................................... 13
ANEXO I. PROCEDIMIENTO DE GESTIÓN DE USUARIOS: ALTAS, BAJAS,
IDENTIFICACIÓN, AUTENTICACIÓN Y CONTROL DE ACCESO LÓGICO. PR10.
ANEXO II. PROCEDIMIENTO DE CLASIFICACIÓN Y TRATAMIENTO DE LA INFORMACIÓN
CLASIFICADA. PR20.DEL CORREO ELECTRÓNICO (E-MAIL)
ANEXO III. PROCEDIMIENTO DE GENERACIÓN DE COPIAS DE RESPALDO Y
RECUPERACIÓN DE LA INFORMACIÓN. PR30.
Centro Criptológico Nacional 4
SIN CLASIFICAR

---

<!-- Página 5 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
1. INTRODUCCIÓN
1. Esta Guía establece unas pautas de carácter general que son aplicables a entidades de
distinta naturaleza, dimensión y sensibilidad, sin entrar en casuísticas específicas. Se
espera que cada organización las particularice para adaptarlas a su entorno singular.
2. El objetivo de esta Guía es proponer a los organismos de las Administraciones públicas
españolas una relación de Procedimientos de Seguridad, recogiendo lo exigido por el
Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de
Seguridad en el ámbito de la administración electrónica (ENS, en adelante).
3. La publicación y el cumplimiento de las antedichas normas contribuirá a:
 Facilitar el máximo aprovechamiento de los recursos y sistemas de información en la
actuación de las Administraciones públicas.
 Asegurar la protección de los derechos de los ciudadanos en sus relaciones con las
Administraciones públicas y el desenvolvimiento profesional de los empleados
públicos y usuarios que tienen acceso a los recursos y sistemas de información de las
Administraciones públicas.
 Mejorar los servicios que las Administraciones públicas prestan a los ciudadanos,
propiciando una gestión eficiente y segura de los procesos incluidos en los sistemas de
información con los que opera.
 Proteger a los sistemas de información de las Administraciones públicas y a los datos
que tratan de los riesgos que puedan deberse a la acción humana, especialmente en lo
referente a conductas incorrectas, inadecuadas o ilegales.
2. ÁMBITO DE APLICACIÓN
4. La normativa contenida en la presente Guía resulta de aplicación a cualquier entidad del
sector público del ámbito de la Ley 11/2007, de 22 de junio, de acceso electrónico de los
ciudadanos a los servicios públicos (LAECSP. En adelante): Administración General del
Estado, Administración de las Comunidades Autónomas y Administración de las
Entidades Locales.
5. Por otro lado, la calificación del nivel de seguridad de la información y de los servicios a
los que pudieran afectar las normas comprendidas en la presente Guía, se ha dispuesto
1
atendiendo a las denominaciones establecidas en el ENS: BAJO, MEDIO o ALTO .
La calificación de información clasificada (SECRETO, RESERVADO,
CONFIDENCIAL y DIFUSIÓN LIMITADA) se hará atendiendo a las regulaciones que
2
le son específicamente de aplicación .
6. Finalmente, todos los preceptos señalados por los Procedimientos contenidos en la
presente Guía se contemplan sin perjuicio de la adicional adopción de las previsiones que
1 Estas denominaciones son independientes de las establecidas para las medidas de seguridad contempladas en el
Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica
15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (BÁSICO, MEDIO o ALTO), que
asimismo resultarán de aplicación cuando se traten datos de carácter personal.
2
Denominaciones definidas en la Ley 9/1968, de 5 de abril, reguladora de los Secretos Oficiales (LSO, en adelante)
y en la Norma NS/04 de la Autoridad Nacional, así como en Políticas de Seguridad de Organizaciones
Internacionales y Acuerdos para Protección de la Información Clasificada, y en determinados Departamentos
Ministeriales (MINISDEF), como desarrollo de la precitada LSO.
Centro Criptológico Nacional 5
SIN CLASIFICAR

---

<!-- Página 6 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
dimanen de otras regulaciones, tales como la Ley Orgánica 15/1999, de 13 de diciembre,
de Protección de Datos de Carácter Personal, etc.
3. REGULACIONES INTERNAS A LOS ORGANISMOS DE LAS
ADMINISTRACIONES PÚBLICAS
7. Las Administraciones públicas, en el desarrollo de sus funciones de servicio, policía o
fomento, están sometidas a diferentes normativas, de carácter estatal, autonómico o local.
La particularidad de la actuación administrativa realizada por medios electrónicos viene
requiriendo, en los mismos tres niveles, la existencia de normas y procedimientos
asimismo específicas, al objeto de acomodar aquellas funciones originarias a los
condicionantes y medios electrónicos.
8. En este sentido, la LAECSP ha supuesto el punto de partida de un extenso compendio de
regulaciones que vienen completando nuestro moderno ordenamiento jurídico
administrativo-electrónico, entre las que cabe destacar: el Real Decreto 1671/2009, de 6
de septiembre, de desarrollo parcial de la LAECSP, el Real Decreto 3/2010, de 8 de
enero, por el que se regula el Esquema Nacional de Seguridad en el ámbito de la
administración electrónica y el Real Decreto 4/2010, de de enero, por el que se regula el
Esquema Nacional de Interoperabilidad, entre otras.
9. Con el objetivo de profundizar en las medidas de seguridad requeridas por los sistemas de
información del ámbito de la LAECSP, el ENS insta a los organismos de las AA.PP. a
desarrollar, publicar y hacer valer Normas y Procedimientos de carácter interno a los
propios organismos, tendentes a mejorar el nivel de seguridad de las informaciones que
manejan y los servicios que prestan.
10. La necesidad de completar el marco normativo aparece explícitamente en muchos de los
preceptos del ENS. Por ejemplo, en los artículos 14 (Gestión del personal), 18
(Adquisición de productos de seguridad), 21 (Protección de información almacenada y en
tránsito), 23 (Registro de actividad), 34 (Auditoría de la seguridad), 37 (Prestación de
servicios de respuesta a incidentes de seguridad en las Administraciones públicas),
Disposición adicional tercera (Comité de Seguridad de la Información de las
Administraciones Públicas), etc.
11. En concreto, en el Anexo II del ENS (Medidas de Seguridad), se encuentra la medida
[org.3], que señala:
3.3 Procedimientos de seguridad [org.3].
Se dispondrá de una serie de documentos que detallen de forma clara y precisa:
a) Cómo llevar a cabo las tareas habituales.
b) Quién debe hacer cada tarea.
c) Cómo identificar y reportar comportamientos anómalos.
12. Esta habilitación a los organismos de las AA.PP. para que promuevan su propia
normativa interna y de relación con terceros se alienta en varias medidas de seguridad
del ENS: Requisitos de acceso [op.acc.2], Deberes y obligaciones [mp.per.2],
Concienciación [mp.per.3], Formación [mp.per.4], Protección del correo electrónico (e-
mail) [mp.s.1], etc.
Centro Criptológico Nacional 6
SIN CLASIFICAR

|  | 3.3 Procedimientos de seguridad [org.3]. |  |
| --- | --- | --- |
|  | Se dispondrá de una serie de documentos que detallen de forma clara y precisa: |  |
|  | a) Cómo llevar a cabo las tareas habituales. |  |
|  | b) Quién debe hacer cada tarea. |  |
|  | c) Cómo identificar y reportar comportamientos anómalos. |  |


---

<!-- Página 7 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
4. LAS GUÍAS CCN-STIC COMO FUENTE DE MODELOS DE
NORMAS Y PROCEDIMIENTOS
13. De acuerdo con lo previsto en el artículo 37 del ENS, el CCN-CERT investigará y
divulgará las mejores prácticas sobre seguridad de la información entre todos los
miembros de las Administraciones públicas. Con esta finalidad, las series de Documentos
CCN-STIC, elaboradas por el Centro Criptológico Nacional, ofrecerán normas,
instrucciones, guías y recomendaciones para aplicar el Esquema Nacional de Seguridad y
para garantizar la seguridad de los sistemas de información en la Administración.
14. Es en base a este mandato por el que se incluyen en la presente Guía algunos Modelos de
Procedimientos de Seguridad que pueden ser usados por los organismos de las
Administraciones públicas españolas, en cumplimiento de lo preceptuado en la
anteriormente citada medida del ENS: Procedimientos de Seguridad [org.3].
15. El conjunto de modelos de procedimientos que contienen los Anexos de esta Guía deben
ser tomados como referencia. Cada organismo deberá adaptar las normas a su casuística
particular.
5. CONVENCIONES USADAS
16. En el conjunto de modelos de procedimientos contenidos en los Anexos de la presente
Guía se han seguido las siguientes convenciones generales:
Término Significado
<<ORGANISMO>> Cualquier organismo de las Administraciones públicas del
ámbito de aplicación del ENS.
Puede ser también aplicado a unidades administrativas inferiores,
si disponen de la autonomía correspondiente para decidir sobre su
propia normativa.
<<U/OC>> Unidad / Organismo Colegiado competente para desarrollar la
acción que se menciona.
En ocasiones, un mismo párrafo puede contener varias de estas
expresiones, que podrán referirse a la misma unidad o a unidades
distintas, según corresponda.
<<texto>> Se incluirá el contenido que se considere adecuado.
Por ejemplo <<señalar periodicidad>> podría dar lugar a
<<mensualmente>>.
Centro Criptológico Nacional 7
SIN CLASIFICAR

|  | Término |  |  | Significado |  |
| --- | --- | --- | --- | --- | --- |
| <<ORGANISMO>> |  |  | Cualquier organismo de las Administraciones públicas del <br> ámbito de aplicación del ENS. <br> Puede ser también aplicado a unidades administrativas inferiores, <br> si disponen de la autonomía correspondiente para decidir sobre su <br> propia normativa. |  |  |
| <<U/OC>> |  |  | Unidad / Organismo Colegiado competente para desarrollar la <br> acción que se menciona. <br> En ocasiones, un mismo párrafo puede contener varias de estas <br> expresiones, que podrán referirse a la misma unidad o a unidades <br> distintas, según corresponda. |  |  |
| <<texto>> |  |  | Se incluirá el contenido que se considere adecuado. <br> Por ejemplo <<señalar periodicidad>> podría dar lugar a <br> <<mensualmente>>. |  |  |


---

<!-- Página 8 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
6. CONTENIDO
17. Además del cuerpo documental, la presente Guía contiene una serie de Anexos
conteniendo Modelos de Procedimientos que desarrollan aspectos concretos.
18. Tales Anexos irán actualizándose y completándose con nuevos procedimientos, a tenor de
la evolución tecnológica de los sistemas de información y de los riesgos derivados de su
uso.
7. DESARROLLO NORMATIVO Y PROCEDIMENTAL DE LA
POLÍTICA DE SEGURIDAD
19. Como señala la Guía CCN-STIC 805: Política de Seguridad de la Información, la Política
de Seguridad de la Información del <<ORGANISMO>> es un documento de alto nivel
que define lo que significa ‘seguridad de la información’ en una organización. El
documento debe estar accesible por todos los miembros de la organización y redactado de
forma sencilla, precisa y comprensible. Conviene que sea breve, dejando los detalles
técnicos para otros documentos normativos.
20. Dado que la Política de Seguridad está escrita a un nivel muy amplio, se requiere
complementarla con documentos más precisos que ayuden a llevar a cabo lo propuesto.
Para ello se utilizan otros instrumentos que reciben diferentes nombres, siendo comunes
3
los siguientes :
– Normas de seguridad (security standards).
– Guías de Seguridad (security guides).
– Procedimientos de seguridad (security procedures).
21. Las Normas uniformizan el uso de aspectos concretos del sistema. Indican el uso correcto
y las responsabilidades de los usuarios. Son de carácter obligatorio.
22. Las Guías tienen un carácter formativo y buscan ayudar a los usuarios a aplicar
correctamente las medidas de seguridad, proporcionando razonamientos donde no existen
procedimientos precisos.
23. Los Procedimientos (operativos) de seguridad afrontan tareas concretas, indicando lo que
hay que hacer, paso a paso. Son útiles en tareas repetitivas.
24. Así pues, la Política de Seguridad de la Información del <<ORGANISMO>> se
desarrollará, entre otros instrumentos, por medio de la normativa de seguridad, que
abordará aspectos generales y específicos y, en general, modelos de comportamiento. La
normativa de seguridad estará a disposición de todos los miembros de la organización que
necesiten conocerla, en particular para aquellos que utilicen, operen o administren los
sistemas de información y comunicaciones.
25. Como regla general, la normativa de seguridad estará disponible en la intranet corporativa
del organismo de que se trate a través de una dirección URL y, en su caso, impresa y
accesible en una determinada ubicación física.
26. La Normativa de Seguridad de cada organismo trae causa y recibe su autoridad ejecutiva
de lo preceptuado en el ENS, en primera instancia, y desarrollando normativamente la
Política de Seguridad del organismo en cuestión, en segunda instancia.
3 Guía NIST SP 800-100. An introduction to Computer Security: The NIST Handbook. October, 1995.
Centro Criptológico Nacional 8
SIN CLASIFICAR

---

<!-- Página 9 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
8. PRECEPTOS DEL ENS CONTEMPLADOS EN ESTA GUÍA
27. Las normas incluidas en la presente Guía contemplan, total o parcialmente, los siguientes
artículos del ENS:
 Artículo 5. La seguridad como un proceso de seguridad, dispuesta de forma que, cuando
integral. una de las capas falle, permita:
1. La seguridad se entenderá como un proceso a) Ganar tiempo para una reacción
integral constituido por todos los elementos adecuada frente a los incidentes que no
técnicos, humanos, materiales y organizativos, han podido evitarse.
relacionados con el sistema. La aplicación del b) Reducir la probabilidad de que el
Esquema Nacional de Seguridad estará sistema sea comprometido en su conjunto.
presidida por este principio, que excluye c) Minimizar el impacto final sobre el
cualquier actuación puntual o tratamiento mismo.
coyuntural. 2. Las líneas de defensa han de estar
2. Se prestará la máxima atención a la constituidas por medidas de naturaleza
concienciación de las personas que organizativa, física y lógica.
intervienen en el proceso y a sus responsables
jerárquicos, para que, ni la ignorancia, ni la  Artículo 11. Requisitos mínimos de
falta de organización y coordinación, ni seguridad.
instrucciones inadecuadas, sean fuentes de 1. Todos los órganos superiores de las
riesgo para la seguridad. Administraciones públicas deberán disponer
formalmente de su política de seguridad, que
 Artículo 7. Prevención, reacción y será aprobada por el titular del órgano
recuperación. superior correspondiente. Esta política de
1. La seguridad del sistema debe contemplar seguridad, se establecerá en base a los
los aspectos de prevención, detección y principios básicos indicados y se desarrollará
corrección, para conseguir que las amenazas aplicando los siguientes requisitos mínimos:
sobre el mismo no se materialicen, no afecten a) Organización e implantación del
gravemente a la información que maneja, o proceso de seguridad.
los servicios que se prestan. b) Análisis y gestión de los riesgos.
2. Las medidas de prevención deben eliminar c) Gestión de personal.
o, al menos reducir, la posibilidad de que las d) Profesionalidad.
amenazas lleguen a materializarse con e) Autorización y control de los accesos.
perjuicio para el sistema. Estas medidas de f) Protección de las instalaciones.
prevención contemplarán, entre otras, la g) Adquisición de productos.
disuasión y la reducción de la exposición. h) Seguridad por defecto.
3. Las medidas de detección estarán i) Integridad y actualización del sistema.
acompañadas de medidas de reacción, de j) Protección de la información
forma que los incidentes de seguridad se almacenada y en tránsito.
atajen a tiempo. k) Prevención ante otros sistemas de
4. Las medidas de recuperación permitirán la información interconectados.
restauración de la información y los servicios, l) Registro de actividad.
de forma que se pueda hacer frente a las m) Incidentes de seguridad.
situaciones en las que un incidente de n) Continuidad de la actividad.
seguridad inhabilite los medios habituales. o) Mejora continua del proceso de
5. Sin merma de los demás principios básicos seguridad.
y requisitos mínimos establecidos, el sistema 2. A los efectos indicados en el apartado
garantizará la conservación de los datos e anterior, se considerarán órganos superiores,
informaciones en soporte electrónico. los responsables directos de la ejecución de la
De igual modo, el sistema mantendrá acción del gobierno, central, autonómico o
disponibles los servicios durante todo el ciclo local, en un sector de actividad específico, de
vital de la información digital, a través de una acuerdo con lo establecido en la Ley 6/1997,
concepción y procedimientos que sean la base de 14 de abril, de organización y
para la preservación del patrimonio digital. funcionamiento de la Administración General
del Estado y Ley 50/1997, de 27 de noviembre,
 Artículo 8. Líneas de defensa. del Gobierno; los estatutos de autonomía
1. El sistema ha de disponer de una estrategia correspondientes y normas de desarrollo; y la
de protección constituida por múltiples capas
Centro Criptológico Nacional 9
SIN CLASIFICAR

---

<!-- Página 10 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
Ley 7/1985, de 2 de abril, reguladora de las a) El sistema proporcionará la mínima
bases del Régimen Local, respectivamente. funcionalidad requerida para que la
Los municipios podrán disponer de una organización sólo alcance sus objetivos, y
política de seguridad común elaborada por la no alcance ninguna otra funcionalidad
Diputación, Cabildo, Consejo Insular u adicional.
órgano unipersonal correspondiente de b) Las funciones de operación,
aquellas otras corporaciones de carácter administración y registro de actividad
representativo a las que corresponda el serán las mínimas necesarias, y se
gobierno y la administración autónoma de la asegurará que sólo son accesibles por las
provincia o, en su caso, a la entidad comarcal personas, o desde emplazamientos o
correspondiente a la que pertenezcan. equipos, autorizados, pudiendo exigirse en
3. Todos estos requisitos mínimos se exigirán su caso restricciones de horario y puntos
en proporción a los riesgos identificados en de acceso facultados.
cada sistema, pudiendo algunos no requerirse c) En un sistema de explotación se
en sistemas sin riesgos significativos, y se eliminarán o desactivarán, mediante el
cumplirán de acuerdo con lo establecido en el control de la configuración, las funciones
artículo 27. que no sean de interés, sean innecesarias
e, incluso, aquellas que sean inadecuadas
 Artículo 14. Gestión de personal. al fin que se persigue.
1. Todo el personal relacionado con la d) El uso ordinario del sistema ha de ser
información y los sistemas deberá ser formado sencillo y seguro, de forma que una
e informado de sus deberes y obligaciones en utilización insegura requiera de un acto
materia de seguridad. Sus actuaciones deben consciente por parte del usuario.
ser supervisadas para verificar que se siguen
los procedimientos establecidos.  Artículo 21. Protección de información
2. El personal relacionado con la información almacenada y en tránsito.
y los sistemas, ejercitará y aplicará los 1. En la estructura y organización de la
principios de seguridad en el desempeño de su seguridad del sistema, se prestará especial
cometido. atención a la información almacenada o en
3. El significado y alcance del uso seguro del tránsito a través de entornos inseguros.
sistema se concretará y plasmará en unas Tendrán la consideración de entornos
normas de seguridad. inseguros los equipos portátiles, asistentes
4. Para corregir, o exigir responsabilidades personales (PDA), dispositivos periféricos,
en su caso, cada usuario que acceda a la soportes de información y comunicaciones
información del sistema debe estar sobre redes abiertas o con cifrado débil.
identificado de forma única, de modo que se 2. Forman parte de la seguridad los
sepa, en todo momento, quién recibe derechos procedimientos que aseguren la recuperación
de acceso, de qué tipo son éstos, y quién ha y conservación a largo plazo de los
realizado determinada actividad. documentos electrónicos producidos por las
Administraciones públicas en el ámbito de sus
 Artículo 16. Autorización y control de los competencias.
accesos. 3. Toda información en soporte no
El acceso al sistema de información deberá electrónico, que haya sido causa o
ser controlado y limitado a los usuarios, consecuencia directa de la información
procesos, dispositivos y otros sistemas de electrónica a la que se refiere el presente real
información, debidamente autorizados, decreto, deberá estar protegida con el mismo
restringiendo el acceso a las funciones grado de seguridad que ésta. Para ello se
permitidas. aplicarán las medidas que correspondan a la
naturaleza del soporte en que se encuentren,
 Artículo 17. Protección de las instalaciones. de conformidad con las normas de aplicación
Los sistemas se instalarán en áreas a la seguridad de los mismos.
separadas, dotadas de un procedimiento de
control de acceso. Como mínimo, las salas  Artículo 23. Registro de actividad.
deben estar cerradas y disponer de un control Con la finalidad exclusiva de lograr el
de llaves. cumplimiento del objeto del presente real
decreto, con plenas garantías del derecho al
 Artículo 19. Seguridad por defecto. honor, a la intimidad personal y familiar y a
Los sistemas deben diseñarse y configurarse la propia imagen de los afectados, y de
de forma que garanticen la seguridad por acuerdo con la normativa sobre protección de
defecto: datos personales, de función pública o
Centro Criptológico Nacional 10
SIN CLASIFICAR

---

<!-- Página 11 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
laboral, y demás disposiciones que resulten de
aplicación, se registrarán las actividades de
los usuarios, reteniendo la información
necesaria para monitorizar, analizar,
investigar y documentar actividades indebidas
o no autorizadas, permitiendo identificar en
cada momento a la persona que actúa.
 Artículo 24. Incidentes de seguridad.
1. Se establecerá un sistema de detección y
reacción frente a código dañino.
2. Se registrarán los incidentes de seguridad
que se produzcan y las acciones de
tratamiento que se sigan. Estos registros se
emplearán para la mejora continua de la
seguridad del sistema.
 Artículo 25. Continuidad de la actividad.
Los sistemas dispondrán de copias de
seguridad y establecerán los mecanismos
necesarios para garantizar la continuidad de
las operaciones, en caso de pérdida de los
medios habituales de trabajo.
 Artículo 29. Guías de seguridad.
Para el mejor cumplimiento de lo establecido
en el Esquema Nacional de Seguridad, el
Centro Criptológico Nacional, en el ejercicio
de sus competencias, elaborará y difundirá las
correspondientes guías de seguridad de las
tecnologías de la información y las
comunicaciones.
 Anexo II: Medidas de Seguridad (Normativa
de seguridad [org.2]).
Centro Criptológico Nacional 11
SIN CLASIFICAR

---

<!-- Página 12 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
9. MÉTRICAS E INDICADORES DE CUMPLIMIENTO
28. Se suele decir que lo que no se mide no puede gobernarse adecuadamente. Este aserto es
igualmente predicable de la presencia y grado de cumplimiento de las Normas y
Procedimientos de Seguridad en los organismos públicos, razón por la cual conviene
determinar qué métricas habrán de proporcionar los indicadores adecuados que permitan a la
dirección del organismo gestionar debidamente la influencia de las antedichas normas en la
seguridad de la información y de los servicios prestados4.
29. En relación con los Procedimientos de Seguridad, pueden utilizarse los siguientes indicadores
clásicos:
- Proporción de procedimientos implantados sobre procedimientos previstos.
- Número de violaciones graves de los procedimientos de seguridad reportadas.
- Encuesta de legibilidad percibida por los usuarios.
- Encuesta de utilidad percibida por los usuarios.
30. Como acabamos de mencionar, las Normas y Procedimientos de Seguridad podrán ser
evaluados atendiendo a dos cualidades:
a) Legibilidad:
Regularmente se puede preguntar a los usuarios a los que van dirigidos los
procedimientos de seguridad por la facilidad con la que se entienden los textos
proporcionados.
Las respuestas podrán valorarse en una escala de 1 a 5, de la siguiente forma:
- [5] Se interpreta perfectamente.
- [4] Entre [3] y [4].
- [3] Se interpreta con cierta dificultad. Puede generar inseguridad.
- [2] Entre [1] y [3].
- [1] No se entiende nada. Genera confusión.
Para calcular la legibilidad de un documento a partir de un conjunto de encuestas, se
usarán dos estadísticos:
- La mediana de las puntuaciones obtenidas.
- La desviación estándar de las puntuaciones obtenidas.
Si la media o la mediana están por debajo de 3, debería revisarse la documentación,
reescribiéndola de forma más clara para los lectores previstos.
Si la desviación estándar es elevada, debería revisarse el colectivo al que va destinada
pues puede que sea en sí heterogéneos y la documentación deba fraccionarse en partes o
incluso redactarse de varias formas para que llegue a cada colectivo específico.
4 Véase Guía CCN-STIC 815 Métricas e indicadores en el ENS.
Centro Criptológico Nacional 12

---

<!-- Página 13 de 13 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS
b) Utilidad:
Regularmente se puede preguntar a los usuarios a los que van dirigidos los
procedimientos de seguridad por la utilidad que obtiene de los textos proporcionados.
Las respuestas podrán valorarse en una escala de 1 a 5, de la siguiente forma:
- [5] Se encuentra rápidamente respuesta a lo que se necesita.
- [4] Entre [3] y [4].
- [3] Aunque cuesta trabajo, leyéndolo con cuidado y detenimiento, se consigue.
- [2] Entre [1] y [3].
- [1] No está claro a qué caso se aplica cada cosa y da muchas cosas por
sobreentendidas. No sirve.
Para calcular la utilidad de un documento a partir de un conjunto de encuestas, se usarán
dos estadísticos:
- La mediana de las puntuaciones obtenidas.
- La desviación estándar de las puntuaciones obtenidas.
Si la media o la mediana están por debajo de 3, debería revisarse la documentación para
ajustarla a los casos de uso previstos.
Si la desviación estándar es elevada, deberían revisarse los escenarios a los que se
pretende aplicar pues puede que sean en sí heterogéneos y la documentación deba
fraccionarse en partes o incluso redactarse de varias formas para que se adapte a cada
caso de aplicación y los lectores sepan cuándo aplica cada cosa que se dice.
10. RECONOCIMIENTO
31. Además de las disposiciones indicadas con anterioridad y las expresamente nombradas en
cada uno de ellos, han inspirado el contenido de los modelos de procedimientos de la presente
Guía, documentos de la Administración en materia de seguridad electrónica, las propias Guías
CCN-STIC de Seguridad de los Sistemas de Información y Comunicaciones, la Metodología
y herramientas de análisis y gestión de riesgos, el Esquema Nacional de Interoperabilidad, así
como una multiplicidad de políticas, criterios y normas internas de distintos organismos
públicos, nacionales e internacionales, a los que agradecemos sus aportaciones.
Centro Criptológico Nacional 13