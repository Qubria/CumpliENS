---
**Producer:** Microsoft® Office Word 2007
**Creator:** Microsoft® Office Word 2007
**CreationDate:** D:20121025101719
**ModDate:** D:20121025101719
---

<!-- Página 1 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
ANEXO I.
PROCEDIMIENTO DE GESTIÓN DE USUARIOS: ALTAS, BAJAS,
IDENTIFICACIÓN, AUTENTICACIÓN Y CONTROL DE ACCESO
LÓGICO
PR10
Centro Criptológico Nacional 1

|  | PROCEDIMIENTO DE GESTIÓN DE USUARIOS: ALTAS, BAJAS, |  |
| --- | --- | --- |
|  | IDENTIFICACIÓN, AUTENTICACIÓN Y CONTROL DE ACCESO |  |
|  | LÓGICO |  |
|  | PR10 |  |


---

<!-- Página 2 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
INDICE
1. OBJETO ........................................................................................................................................................ 3
2. ÁMBITO DE APLICACIÓN ...................................................................................................................... 3
3. VIGENCIA .................................................................................................................................................... 3
4. REVISIÓN Y EVALUACIÓN ..................................................................................................................... 4
5. REFERENCIAS ........................................................................................................................................... 4
6. ROLES Y RESPONSABILIDADES .......................................................................................................... 4
7. GESTIÓN DE USUARIOS ......................................................................................................................... 6
7.1 ALTA/BAJA DE PERSONAL ................................................................................................................................ 7
7.1.1 PROCESO DE ALTA DE EMPLEADOS PÚBLICOS EN EL <<ORGANISMO>> .......................... 7
7.1.2 PROCESO DE BAJA DE EMPLEADOS PÚBLICOS EN EL <<ORGANISMO>>........................... 11
7.1.3 PROCESO DE ALTA DE PERSONAL EXTERNO EN EL <<ORGANISMO>> ............................. 15
7.1.4 PROCESO DE BAJA DE PERSONAL EXTERNO EN EL <<ORGANISMO>> .............................. 20
7.1.5 INCORPORACIÓN DE NUEVO EMPLEADO PÚBLICO ................................................................ 25
7.1.6 INCORPORACIÓN DE NUEVO PERSONAL EXTERNO COLABORADOR .................................. 29
7.2. GESTIÓN DE PRIVILEGIOS ............................................................................................................................. 31
7.2.1 INTRODUCCIÓN .............................................................................................................................. 31
7.2.2 GESTIÓN DE PRIVILEGIOS ............................................................................................................ 31
7.2.3 REVISIÓN DE PRIVILEGIOS .......................................................................................................... 32
7.2.4 CANCELACIÓN DE PRIVILEGIOS .................................................................................................. 33
8. CONTROL DE ACCESO .......................................................................................................................... 33
8.1 IDENTIFICADORES .......................................................................................................................................... 33
8.2 SERVICIO DE IDENTIDAD DIGITAL ............................................................................................................ 33
8.3 PRINCIPIOS DE CONTROL DE ACCESO ..................................................................................................... 34
8.4 REVISIÓN DEL CONTROL DE ACCESO ....................................................................................................... 34
9. AUTENTICACIÓN DE USUARIOS ....................................................................................................... 35
9.1 AUTENTICACIÓN MEDIANTE CONTRASEÑAS ....................................................................................... 35
9.2 AUTENTICACIÓN PERSONAL MEDIANTE CERTIFICADO DIGITAL ............................................... 39
9.3 GESTIÓN DE INICIOS DE SESIÓN.................................................................................................................. 39
9.4 CONTROL DE ACCESO A BASES DE DATOS Y APLICACIONES .......................................................... 40
9.5 CONTROL DE ACCESO A LA RED .................................................................................................................. 40
9.6 MONITORIZACIÓN DE LOS ACCESOS ........................................................................................................ 41
10. REGISTROS E INDICADORES .............................................................................................................. 41
10.1. TABLA DE REGISTROS .................................................................................................................................. 41
10.2. TABLA DE INDICADORES ............................................................................................................................ 42
10.3 REGISTRO DE SUCESOS ................................................................................................................................. 42
11. SOPORTE Y MODELOS.......................................................................................................................... 45
11.1. SOPORTE ............................................................................................................................................................ 45
11.2. MODELOS ........................................................................................................................................................... 45
ANEXO I:.............................................................................................................................................................. 46
MODELO DE SOLICITUD DE ALTA/BAJA DE RECURSOS IT .......................................................... 46
ANEXO II: ............................................................................................................................................................ 48
MODELO DE SOLICITUD ALTA/BAJA DE TELEFONÍA FIJA ........................................................... 48
ANEXO III: .......................................................................................................................................................... 49
MODELO DE SOLICITUD ALTA/BAJA DE TELEFONÍA MÓVIL Y/O DATOS EN MOVILIDAD49
Centro Criptológico Nacional 2

---

<!-- Página 3 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
1. OBJETO
1. El objeto del presente documento es la definición del Procedimiento aplicable a la
Gestión de Usuarios: Altas, Bajas, Identificación, Autenticación y Control de Acceso
Lógico de los usuarios de los Sistemas de Información del <<ORGANISMO>>,
dentro del alcance señalado en el ENS.
Se implantará el presente Procedimiento atendiendo al nivel de seguridad de la
información y los servicios prestados, y la categoría de los sistemas del
<<ORGANISMO>>, que resulten de la aplicación de las previsiones contempladas
en los Anexos I y II del Real Decreto 3/2010, de 8 de enero, por el que se regula el
Esquema Nacional de Seguridad en el ámbito de la administración electrónica (ENS).
2. ÁMBITO DE APLICACIÓN
2. Este Procedimiento es de aplicación a todo el ámbito de actuación del
<<ORGANISMO>>, y sus contenidos traen causa de las directrices de carácter más
general definidas en la Política de Seguridad de la Información y en las Normas de
Seguridad del <<ORGANISMO>>.
3. El presente Procedimiento es de aplicación y de obligado cumplimiento para todo el
personal que, de manera permanente o eventual, preste sus servicios en el
<<ORGANISMO>>, incluyendo el personal de proveedores externos, cuando sean
usuarios de los Sistemas de Información del <<ORGANISMO>>.
4. En el ámbito de la presente normativa, se entiende por usuario cualquier empleado público
perteneciente o ajeno al <<ORGANISMO>>, así como personal de organizaciones
privadas externas, entidades colaboradoras o cualquier otro con algún tipo de vinculación
con el <<ORGANISMO>> y que utilice o posea acceso a los Sistemas de Información del
<<ORGANISMO>>.
3. VIGENCIA
5. El presente Procedimiento ha sido aprobado por la <<U/OC>> del <<ORGANISMO>>,
estableciendo de esta forma las directrices generales para el uso adecuado de los recursos
de tratamiento de información que el <<ORGANISMO>> pone a disposición de sus
usuarios para el ejercicio de sus funciones y que, correlativamente, asumen las
obligaciones descritas, comprometiéndose a cumplir con lo dispuesto en los siguientes
epígrafes.
6. Cualquier modificación posterior entrará en vigor inmediatamente después de su
publicación por parte del <<ORGANISMO>>.
7. Las versiones anteriores que hayan podido distribuirse constituyen borradores que se han
desarrollado temporalmente, por lo que su vigencia queda anulada por la última versión de
este Procedimiento.
Centro Criptológico Nacional 3

|  | Se implantará el presente Procedimiento atendiendo al nivel de seguridad de la |  |
| --- | --- | --- |
|  | información y los servicios prestados, y la categoría de los sistemas del |  |
|  | <<ORGANISMO>>, que resulten de la aplicación de las previsiones contempladas |  |
|  | en los Anexos I y II del Real Decreto 3/2010, de 8 de enero, por el que se regula el |  |
|  | Esquema Nacional de Seguridad en el ámbito de la administración electrónica (ENS). |  |


---

<!-- Página 4 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
4. REVISIÓN Y EVALUACIÓN
8. La gestión de este Procedimiento corresponde a la <<U/OC>>, que es competente para:
 Interpretar las dudas que puedan surgir en su aplicación.
 Proceder a su revisión, cuando sea necesario para actualizar su contenido o se
cumplan los plazos máximos establecidos para ello.
 Verificar su efectividad.
9. Anualmente (o con menor periodicidad, si existen circunstancias que así lo aconsejen), la
<<U/OC>> revisará el presente Procedimiento, que se someterá, de haber modificaciones,
a la aprobación de la <<U/OC>> del <<ORGANISMO>>.
10. La revisión se orientará tanto a la identificación de oportunidades de mejora en la gestión
de la seguridad de la información, como a la adaptación a los cambios habidos en el marco
legal, infraestructura tecnológica, organización general, etc.
11. Será el Responsable de Seguridad la persona encargada de la custodia y divulgación de la
versión aprobada de este documento.
5. REFERENCIAS
12. La implantación de un Procedimiento como el descrito requiere el examen previo de la
siguiente documentación:
 Normativa de Seguridad [org.2]: Normativa General de Utilización de los Recursos y
1
Sistemas de Información del <<ORGANISMO>> .
 Normativa de Seguridad [org.2]: Normas Especiales o Particulares del
2
<<ORGANISMO>> .
6. ROLES Y RESPONSABILIDADES
13. Las responsabilidades definidas por las tareas contempladas en el procedimiento son las
siguientes:
3
Roles Responsabilidades
Usuarios Aplicar el presente Procedimiento.
Responsable de Seguridad (RSEG)  Mantener la seguridad de la
información manejada y de los
servicios prestados por los sistemas de
información en su ámbito de
responsabilidad, de acuerdo a lo
1 Véase “Guía CCN-STIC 821. Normas de Seguridad en el ENS”. En concreto, puede consultarse la Norma
NG00-Normativa General de Utilización de los Recursos y Sistemas de Información del <<ORGANISMO>>, de
Anexo I.
2 Véase “Guía CCN-STIC 821. Normativa de Seguridad en el ENS”. En concreto, pueden consultarse las
Normas Particulares del Anexo II.
3 Véase Guía CCN-STIC 801. Responsabilidades en el ENS.
Centro Criptológico Nacional 4

|  | Roles |  |  | Responsabilidades3 |  |
| --- | --- | --- | --- | --- | --- |
| Usuarios |  |  | Aplicar el presente Procedimiento. |  |  |
| Responsable de Seguridad (RSEG) |  |  |  Mantener la seguridad de la <br> información manejada y de los <br> servicios prestados por los sistemas de <br> información en su ámbito de <br> responsabilidad, de acuerdo a lo |  |  |


---

<!-- Página 5 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
establecido en la Política de Seguridad
del <<ORGANISMO>>.
 Promover la formación y
concienciación en materia de
seguridad de la información dentro de
su ámbito de responsabilidad.
 Determinación de la categoría del
sistema.
 Análisis de riesgos.
 Declaración de aplicabilidad.
 Medidas de seguridad adicionales.
 Elaborar configuración de seguridad.
 Documentación de seguridad del
sistema.
 Elaborar Normativa de seguridad.
 Aprobar Procedimientos de seguridad.
 Elaborar planes de mejora de la
seguridad.
 Elaborar planes de concienciación y
formación.
 Validar Planes de Continuidad.
 Aprobar el ciclo de vida de seguridad:
especificación, arquitectura,
desarrollo, operación y cambios.
 Analizar y proponer salvaguardas que
prevengan incidentes similares en el
futuro.
Responsable del sistema (RSIS)  Desarrollar, operar y mantener el
Sistema de Información.
 Definir la topología y sistema de
gestión del Sistema de Información.
 Cerciorarse de que las medidas
específicas de seguridad se integren
adecuadamente.
 Elaborar os Procedimientos de
seguridad.
 Elaborar el Plan de mejora de la
seguridad.
 Elaborar el Plan de Continuidad.
 Propone la suspensión temporal del
servicio.
 Elabora el ciclo de vida de seguridad:
especificación, arquitectura,
desarrollo, operación y cambios.
 Planifica la implantación de las
salvaguardas en el sistema.
 Ejecuta el Plan de Seguridad
Centro Criptológico Nacional 5

|  | establecido en la Política de Seguridad <br> del <<ORGANISMO>>. <br>  Promover la formación y <br> concienciación en materia de <br> seguridad de la información dentro de <br> su ámbito de responsabilidad. <br>  Determinación de la categoría del <br> sistema. <br>  Análisis de riesgos. <br>  Declaración de aplicabilidad. <br>  Medidas de seguridad adicionales. <br>  Elaborar configuración de seguridad. <br>  Documentación de seguridad del <br> sistema. <br>  Elaborar Normativa de seguridad. <br>  Aprobar Procedimientos de seguridad. <br>  Elaborar planes de mejora de la <br> seguridad. <br>  Elaborar planes de concienciación y <br> formación. <br>  Validar Planes de Continuidad. <br>  Aprobar el ciclo de vida de seguridad: <br> especificación, arquitectura, <br> desarrollo, operación y cambios. <br>  Analizar y proponer salvaguardas que <br> prevengan incidentes similares en el <br> futuro. |
| --- | --- |
| Responsable del sistema (RSIS) |  Desarrollar, operar y mantener el <br> Sistema de Información. <br>  Definir la topología y sistema de <br> gestión del Sistema de Información. <br>  Cerciorarse de que las medidas <br> específicas de seguridad se integren <br> adecuadamente. <br>  Elaborar os Procedimientos de <br> seguridad. <br>  Elaborar el Plan de mejora de la <br> seguridad. <br>  Elaborar el Plan de Continuidad. <br>  Propone la suspensión temporal del <br> servicio. <br>  Elabora el ciclo de vida de seguridad: <br> especificación, arquitectura, <br> desarrollo, operación y cambios. <br>  Planifica la implantación de las <br> salvaguardas en el sistema. <br>  Ejecuta el Plan de Seguridad |


---

<!-- Página 6 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
aprobado.
Administrador de Seguridad del  Implantación, gestión y
Sistema (ASS) mantenimiento de las medidas de
seguridad.
 Gestión, configuración y
actualización, en su caso, del hardware
y software de seguridad, así como su
supervisión.
 Gestión de las autorizaciones y
privilegios concedidos a los usuarios
del sistema.
 Aplicación de los Procedimientos de
seguridad y verificación de su
cumplimiento.
 Aprobar los cambios en la
configuración de seguridad.
 Asegurar que los controles de
seguridad se cumplen.
 Monitorizar el estado de seguridad del
sistema.
 Informar al RSEG y RSIS de cualquier
anomalía.
 Colaborar en la investigación y
resolución de incidentes de seguridad.
 Llevar a cabo el registro, contabilidad
y gestión de los incidentes de
seguridad.
 Aislar el incidente para evitar la
propagación.
 Tomar decisiones a corto plazo si la
información se ha visto comprometida
de tal forma que pudiera tener
consecuencias graves.
 Asegurar la integridad de los
elementos críticos del Sistema si se ha
visto afectada la disponibilidad de los
mismos.
 Mantener y recuperar la información
almacenada por el Sistema y sus
servicios asociados.
 Investigar el incidente: Determinar el
modo, los medios, los motivos y el
origen del incidente.
Responsable de personal Comunicar el alta y baja de usuarios, a
través del procedimiento descrito en el
presente documento.
7. GESTIÓN DE USUARIOS
Centro Criptológico Nacional 6

|  | aprobado. |
| --- | --- |
| Administrador de Seguridad del <br> Sistema (ASS) |  Implantación, gestión y <br> mantenimiento de las medidas de <br> seguridad. <br>  Gestión, configuración y <br> actualización, en su caso, del hardware <br> y software de seguridad, así como su <br> supervisión. <br>  Gestión de las autorizaciones y <br> privilegios concedidos a los usuarios <br> del sistema. <br>  Aplicación de los Procedimientos de <br> seguridad y verificación de su <br> cumplimiento. <br>  Aprobar los cambios en la <br> configuración de seguridad. <br>  Asegurar que los controles de <br> seguridad se cumplen. <br>  Monitorizar el estado de seguridad del <br> sistema. <br>  Informar al RSEG y RSIS de cualquier <br> anomalía. <br>  Colaborar en la investigación y <br> resolución de incidentes de seguridad. <br>  Llevar a cabo el registro, contabilidad <br> y gestión de los incidentes de <br> seguridad. <br>  Aislar el incidente para evitar la <br> propagación. <br>  Tomar decisiones a corto plazo si la <br> información se ha visto comprometida <br> de tal forma que pudiera tener <br> consecuencias graves. <br>  Asegurar la integridad de los <br> elementos críticos del Sistema si se ha <br> visto afectada la disponibilidad de los <br> mismos. <br>  Mantener y recuperar la información <br> almacenada por el Sistema y sus <br> servicios asociados. <br>  Investigar el incidente: Determinar el <br> modo, los medios, los motivos y el <br> origen del incidente. |
| Responsable de personal | Comunicar el alta y baja de usuarios, a <br> través del procedimiento descrito en el <br> presente documento. |


---

<!-- Página 7 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
7.1 ALTA/BAJA DE PERSONAL
14. A continuación se identifican las Áreas/Personal del <<ORGANISMO>> involucrado en
la ejecución de alguna de las tareas que se van a describir en este epígrafe y que tendrán
que ser debidamente informados para la correcta ejecución del procedimiento.
4.
 Responsable de Asignación de Recursos IT
 Secretaría.
 Jefes de Área / Jefes de Servicio.
 CAU.
 Área de Sistemas.
 Área de Comunicaciones.
 Área de Desarrollo.
 Área de Administración Electrónica.
 Grupo de Telefonía Fija.
 Grupo de Dispositivos Móviles.
 RRHH
 Habilitación General.
5
 Área de Seguridad .
7.1.1 PROCESO DE ALTA DE EMPLEADOS PÚBLICOS EN EL <<ORGANISMO>>
15. El empleado público que se incorpore al <<ORGANISMO>> proporcionará, entre otros,
los siguientes datos:
 Nombre.
 Apellidos.
 DNI.
 Otros datos de distinta naturaleza (bancarios, etc.)
16. Seguidamente, se describe el proceso requerido para la incorporación de un empleado
público al <<ORGANISMO>>. En el momento en el que el empleado público se incorpore
a su puesto en el área correspondiente del <<ORGANISMO>>, su responsable definirá
sus necesidades tecnológicas, pudendo incluir: alta en ciertos sistemas, asignación de
ordenador, teléfono, etc.
4 Suele tratarse de una función asignada al Departamento de Sistemas de los organismos.
5 En ciertos organismos, estas funciones están centralizadas en la Oficialía Mayor.
Centro Criptológico Nacional 7

---

<!-- Página 8 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
Proceso de ALTA DE EMPLEADOS PÚBLICOS en el <<ORGANISMO>>
 El responsable del empleado público enviará una solicitud vía correo electrónico al Responsable de Asignación de Recursos IT del
<<ORGANISMO>> <<señalar dirección de email>>, indicándole las necesidades del nuevo usuario e incluyendo, entre otros, los
siguientes datos:
o Nombre y Apellidos.
o NIF.
o Perfil (permisos de acceso a recursos del sistema).
o Puesto de trabajo (denominación del puesto y unidades administrativas a las que pertenece).
o Ubicación (edificio, planta, despacho).
o Teléfono, si ya se conoce.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará un correo electrónico al Área de Seguridad del
6
<<ORGANISMO>> <<señalar dirección de email>> solicitando la credencial de acceso al <<ORGANISMO>>. El correo electrónico
incluirá los datos del empleado público que se va a incorporar: nombre, apellidos, NIF, un teléfono de contacto, etc.
ALTA EN SISTEMAS Y ASIGNACIÓN ALTA EN TELEFONÍA FIJA ALTA EN TELEFONÍA MÓVIL O
DE EQUIPAMIENTO DATOS EN MOVILIDAD
 En caso de que la solicitud requiera el  En caso de que la solicitud requiera  En caso de que la solicitud requiera
ALTA EN LOS SISTEMAS DE TELÉFONO FIJO, el Responsable TELÉFONO MÓVIL O
INFORMACIÓN Y/O de Asignación de Recursos IT del CONEXIÓN DE DATOS DE
EQUIPAMIENTO <<ORGANISMO>> remitirá un MOVILIDAD PARA PORTÁTIL,
INFORMÁTICO, el Responsable de correo electrónico al Grupo de el Responsable de Asignación de
Asignación de Recursos IT del Telefonía Fija <<señalar dirección de Recursos IT del <<ORGANISMO>>
<<ORGANISMO>> remitirá un correo email>> con la Solicitud de Alta/Baja remitirá un correo electrónico al Grupo
9
electrónico al CAU <<señalar de Telefonía Fija , incluyendo la de Móviles <<señalar dirección de
6 Suele ser frecuente el uso de tarjetas personalizadas, que pueden incluir ciertos datos personales tales como: nombre, apellidos, cargo, fotografía e, incluso, un chip
criptográfico para contener certificados digitales.
Centro Criptológico Nacional 8

|  | Proceso de ALTA DE EMPLEADOS PÚBLICOS en el <<ORGANISMO>> |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  El responsable del empleado público enviará una solicitud vía correo electrónico al Responsable de Asignación de Recursos IT del <br> <<ORGANISMO>> <<señalar dirección de email>>, indicándole las necesidades del nuevo usuario e incluyendo, entre otros, los <br> siguientes datos: <br> o Nombre y Apellidos. <br> o NIF. <br> o Perfil (permisos de acceso a recursos del sistema). <br> o Puesto de trabajo (denominación del puesto y unidades administrativas a las que pertenece). <br> o Ubicación (edificio, planta, despacho). <br> o Teléfono, si ya se conoce. |  |  |  |  |  |  |  |  |
|  El Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará un correo electrónico al Área de Seguridad del <br> <<ORGANISMO>> <<señalar dirección de email>> solicitando la credencial6 de acceso al <<ORGANISMO>>. El correo electrónico <br> incluirá los datos del empleado público que se va a incorporar: nombre, apellidos, NIF, un teléfono de contacto, etc. |  |  |  |  |  |  |  |  |
|  | ALTA EN SISTEMAS Y ASIGNACIÓN |  |  | ALTA EN TELEFONÍA FIJA |  |  | ALTA EN TELEFONÍA MÓVIL O |  |
|  | DE EQUIPAMIENTO |  |  |  |  |  | DATOS EN MOVILIDAD |  |
|  En caso de que la solicitud requiera el <br> ALTA EN LOS SISTEMAS DE <br> INFORMACIÓN Y/O <br> EQUIPAMIENTO <br> INFORMÁTICO, el Responsable de <br> Asignación de Recursos IT del <br> <<ORGANISMO>> remitirá un correo <br> electrónico al CAU <<señalar |  |  |  En caso de que la solicitud requiera <br> TELÉFONO FIJO, el Responsable <br> de Asignación de Recursos IT del <br> <<ORGANISMO>> remitirá un <br> correo electrónico al Grupo de <br> Telefonía Fija <<señalar dirección de <br> email>> con la Solicitud de Alta/Baja <br> de Telefonía Fija9, incluyendo la |  |  |  En caso de que la solicitud requiera <br> TELÉFONO MÓVIL O <br> CONEXIÓN DE DATOS DE <br> MOVILIDAD PARA PORTÁTIL, <br> el Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>> <br> remitirá un correo electrónico al Grupo <br> de Móviles <<señalar dirección de |  |  |


---

<!-- Página 9 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
dirección de email>> con la Solicitud información recibida del responsable email>> con la Solicitud de Alta/Baja
7
de Alta/Baja de Recursos IT , del nuevo empleado público. de Telefonía Móvil o Datos en
10
incluyendo la información recibida del Movilidad .
responsable del nuevo empleado o El Grupo de Telefonía Fija
público. ejecutará las acciones pertinentes o El Grupo de Móviles ejecutará las
para asignar un teléfono y una línea acciones pertinentes para asignar y
o El CAU dará de alta al usuario e al usuario e informará vía correo entregar el teléfono móvil y/o
informará de ello al Responsable de electrónico del número de teléfono configurar la conexión de datos de
Asignación de Recursos IT del fijo y su extensión al Responsable movilidad al nuevo empleado
<<ORGANISMO>> <<señalar de Asignación de Recursos IT del público, e informará vía correo
dirección de email>>. Para ello, <<ORGANISMO>>, utilizando la electrónico la finalización de las
utilizará la Solicitud de Alta/Baja de Solicitud de Alta/Baja de Telefonía tareas solicitadas, al Responsable
8
Recursos IT , completando la Fija. de Asignación de Recursos IT del
información requerida en la plantilla. <<ORGANISMO>>, utilizando el
o El Responsable de Asignación de formulario Solicitud de Alta/Baja
o El Responsable de Asignación de Recursos IT del de Telefonía Móvil o Datos en
Recursos IT del <<ORGANISMO>> <<ORGANISMO>> enviará al Movilidad.
enviará la información del alta al responsable del nuevo empleado
responsable del funcionario que la ha público funcionario que ha o El Responsable de Asignación de
solicitado. solicitado la línea de teléfono la Recursos IT del
información recibida del Grupo de <<ORGANISMO>> enviará al
Telefonía Fija y pondrá en copia responsable del nuevo empleado
del correo electrónico al nuevo público que ha solicitado el
empleado público. teléfono móvil o la conexión de
9 Un modelo de esta solicitud puede encontrase en el Anexo II.
7 Un modelo de esta solicitud puede encontrase en el Anexo I.
8 Un modelo de esta solicitud puede encontrase en el Anexo I.
10 Un modelo de esta solicitud puede encontrase en el Anexo III. Esta solicitud podrá requerir la inclusión de la autorización de la Jefatura de Comunicaciones.
Centro Criptológico Nacional 9

| dirección de email>> con la Solicitud <br> de Alta/Baja de Recursos IT7, <br> incluyendo la información recibida del <br> responsable del nuevo empleado <br> público. <br> o El CAU dará de alta al usuario e <br> informará de ello al Responsable de <br> Asignación de Recursos IT del <br> <<ORGANISMO>> <<señalar <br> dirección de email>>. Para ello, <br> utilizará la Solicitud de Alta/Baja de <br> Recursos IT8, completando la <br> información requerida en la plantilla. <br> o El Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>> <br> enviará la información del alta al <br> responsable del funcionario que la ha <br> solicitado. | información recibida del responsable <br> del nuevo empleado público. <br> o El Grupo de Telefonía Fija <br> ejecutará las acciones pertinentes <br> para asignar un teléfono y una línea <br> al usuario e informará vía correo <br> electrónico del número de teléfono <br> fijo y su extensión al Responsable <br> de Asignación de Recursos IT del <br> <<ORGANISMO>>, utilizando la <br> Solicitud de Alta/Baja de Telefonía <br> Fija. <br> o El Responsable de Asignación de <br> Recursos IT del <br> <<ORGANISMO>> enviará al <br> responsable del nuevo empleado <br> público funcionario que ha <br> solicitado la línea de teléfono la <br> información recibida del Grupo de <br> Telefonía Fija y pondrá en copia <br> del correo electrónico al nuevo <br> empleado público. | email>> con la Solicitud de Alta/Baja <br> de Telefonía Móvil o Datos en <br> Movilidad10. <br> o El Grupo de Móviles ejecutará las <br> acciones pertinentes para asignar y <br> entregar el teléfono móvil y/o <br> configurar la conexión de datos de <br> movilidad al nuevo empleado <br> público, e informará vía correo <br> electrónico la finalización de las <br> tareas solicitadas, al Responsable <br> de Asignación de Recursos IT del <br> <<ORGANISMO>>, utilizando el <br> formulario Solicitud de Alta/Baja <br> de Telefonía Móvil o Datos en <br> Movilidad. <br> o El Responsable de Asignación de <br> Recursos IT del <br> <<ORGANISMO>> enviará al <br> responsable del nuevo empleado <br> público que ha solicitado el <br> teléfono móvil o la conexión de |
| --- | --- | --- |


---

<!-- Página 10 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
datos de movilidad, la información
recibida del grupo de móviles y
pondrá en copia del correo
electrónico al nuevo empleado
público.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> deberá dar de alta al nuevo empleado público en la <<Aplicación
de Gestión de Accesos del Organismo>>, para ello deberá recabar del empleado público los siguientes datos:
o Nombre.
o Apellidos.
o NIF.
o Fecha de alta.
o Teléfono.
o Puesto de trabajo.
El Responsable de Asignación de Recursos IT del <<ORGANISMO>> será responsable del registro y seguimiento de las solicitudes
realizadas a las distintas áreas. En el caso de que existiera algún problema, el Responsable de Asignación de Recursos IT del
<<ORGANISMO>> deberá informar de la situación al solicitante, señalando la causa de la demora en la ejecución de las solicitudes.
Centro Criptológico Nacional 10

|  |  | datos de movilidad, la información <br> recibida del grupo de móviles y <br> pondrá en copia del correo <br> electrónico al nuevo empleado <br> público. |
| --- | --- | --- |
|  El Responsable de Asignación de Recursos IT del <<ORGANISMO>> deberá dar de alta al nuevo empleado público en la <<Aplicación <br> de Gestión de Accesos del Organismo>>, para ello deberá recabar del empleado público los siguientes datos: <br> o Nombre. <br> o Apellidos. <br> o NIF. <br> o Fecha de alta. <br> o Teléfono. <br> o Puesto de trabajo. <br> El Responsable de Asignación de Recursos IT del <<ORGANISMO>> será responsable del registro y seguimiento de las solicitudes <br> realizadas a las distintas áreas. En el caso de que existiera algún problema, el Responsable de Asignación de Recursos IT del <br> <<ORGANISMO>> deberá informar de la situación al solicitante, señalando la causa de la demora en la ejecución de las solicitudes. |  |  |


---

<!-- Página 11 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
7.1.2 PROCESO DE BAJA DE EMPLEADOS PÚBLICOS EN EL
<<ORGANISMO>>
17. Procedimiento a seguir al producirse la baja de un empleado público destinado en el
<<ORGANISMO>>, al objeto de proceder a la retirada del equipamiento
tecnológico asignado, baja en los sistemas, etc.
Centro Criptológico Nacional 11

---

<!-- Página 12 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
Proceso de BAJA DE EMPLEADOS PÚBLICOS en el <<ORGANISMO>>
 El Responsable del empleado público que se da de baja informará mediante correo electrónico al Responsable de Asignación de
Recursos IT del <<ORGANISMO>> <<señalar dirección de email>> de la baja del empleado público. En dicho correo electrónico se
deberán identificar entre otros datos: nombre, apellidos, NIF, Área del <<ORGANISMO>> en la que trabaja, puesto de trabajo y la fecha
de baja del personal.
BAJA DE SISTEMAS Y BAJA DE TELEFONÍA FIJA BAJA EN TELEFONÍA MÓVIL O
RETIRADA DE EQUIPO DATOS EN MOVILIDAD
 El Responsable de Asignación de  El Responsable de Asignación de  El Responsable de Asignación de
Recursos IT del <<ORGANISMO>> Recursos IT del <<ORGANISMO>> Recursos IT del <<ORGANISMO>>,
remitirá al CAU <<señalar dirección remitirá al Grupo de Telefonía Fija remitirá al Grupo de Dispositivos
de email>> la Solicitud de Alta/Baja <<señalar dirección de email>> la Móviles <<señalar dirección de
de Recursos IT, informando de la baja Solicitud de Alta/Baja de Telefonía email>> la Solicitud de Alta/Baja de
del empleado público y solicitando la Fija, informando de la baja del Telefonía Móvil o Datos en Movilidad,
baja del empleado público en los empleado público y solicitando la informando de la baja del empleado
sistemas, la retirada del equipo que en retirada del equipamiento que tuviere público y solicitando la retirada del
su caso tenga asignado, y señalando la asignado, y señalando la fecha de baja. equipo de telefonía móvil o tarjeta de
fecha de baja. conexión de datos de movilidad que
o En el caso de que no tuviera tuviere asignado, y señalando la fecha
o El CAU ejecutará las acciones ningún equipo de telefonía fija de baja.
pertinentes para dar de baja al asignado, el Grupo de Telefonía
usuario de los sistemas en la fecha Fija informará de ello al o En el caso de que no tuviera ningún
de baja señalada. Responsable de Asignación de equipo de telefonía móvil o tarjeta
Recursos IT del de conexión de datos en movilidad
o El CAU se pondrá en contacto con <<ORGANISMO>> y se dará por asignada, el Grupo de Dispositivos
el empleado público que va a cerrada la solicitud. Móviles informará de ello al
causar baja y le reclamará la Responsable de Asignación de
devolución del equipo facilitado o En el caso de tener asignado un Recursos IT del
Centro Criptológico Nacional 12

|  | Proceso de BAJA DE EMPLEADOS PÚBLICOS en el <<ORGANISMO>> |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  El Responsable del empleado público que se da de baja informará mediante correo electrónico al Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>> <<señalar dirección de email>> de la baja del empleado público. En dicho correo electrónico se <br> deberán identificar entre otros datos: nombre, apellidos, NIF, Área del <<ORGANISMO>> en la que trabaja, puesto de trabajo y la fecha <br> de baja del personal. |  |  |  |  |  |  |  |  |
|  | BAJA DE SISTEMAS Y |  |  | BAJA DE TELEFONÍA FIJA |  |  | BAJA EN TELEFONÍA MÓVIL O |  |
|  | RETIRADA DE EQUIPO |  |  |  |  |  | DATOS EN MOVILIDAD |  |
|  El Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>> <br> remitirá al CAU <<señalar dirección <br> de email>> la Solicitud de Alta/Baja <br> de Recursos IT, informando de la baja <br> del empleado público y solicitando la <br> baja del empleado público en los <br> sistemas, la retirada del equipo que en <br> su caso tenga asignado, y señalando la <br> fecha de baja. <br> o El CAU ejecutará las acciones <br> pertinentes para dar de baja al <br> usuario de los sistemas en la fecha <br> de baja señalada. <br> o El CAU se pondrá en contacto con <br> el empleado público que va a <br> causar baja y le reclamará la <br> devolución del equipo facilitado |  |  |  El Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>> <br> remitirá al Grupo de Telefonía Fija <br> <<señalar dirección de email>> la <br> Solicitud de Alta/Baja de Telefonía <br> Fija, informando de la baja del <br> empleado público y solicitando la <br> retirada del equipamiento que tuviere <br> asignado, y señalando la fecha de baja. <br> o En el caso de que no tuviera <br> ningún equipo de telefonía fija <br> asignado, el Grupo de Telefonía <br> Fija informará de ello al <br> Responsable de Asignación de <br> Recursos IT del <br> <<ORGANISMO>> y se dará por <br> cerrada la solicitud. <br> o En el caso de tener asignado un |  |  |  El Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>>, <br> remitirá al Grupo de Dispositivos <br> Móviles <<señalar dirección de <br> email>> la Solicitud de Alta/Baja de <br> Telefonía Móvil o Datos en Movilidad, <br> informando de la baja del empleado <br> público y solicitando la retirada del <br> equipo de telefonía móvil o tarjeta de <br> conexión de datos de movilidad que <br> tuviere asignado, y señalando la fecha <br> de baja. <br> o En el caso de que no tuviera ningún <br> equipo de telefonía móvil o tarjeta <br> de conexión de datos en movilidad <br> asignada, el Grupo de Dispositivos <br> Móviles informará de ello al <br> Responsable de Asignación de <br> Recursos IT del |  |  |


---

<!-- Página 13 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
por el <<ORGANISMO>>. equipo de telefonía fija asignado, <<ORGANISMO>> y se dará por
el Grupo de Telefonía Fija retirará cerrada la solicitud.
o Una vez completada la solicitud, el equipo del puesto de trabajo
el CAU informará mediante correo indicado en la solicitud. o En el caso de tener asignado un
electrónico al Responsable de equipo de telefonía móvil o tarjeta
Asignación de Recursos IT de la o Una vez realizadas las acciones de conexión de datos en movilidad,
SGTIC la finalización del trabajo solicitadas, el Grupo de Telefonía el Grupo de Dispositivos Móviles,
solicitado. Para ello Fija informará mediante correo mediante su procedimiento interno,
cumplimentará los campos electrónico al Responsable de se pondrá en contacto con el
asignados en el formulario de Asignación de Recursos IT del empleado público que causa baja y
Solicitud de Alta/Baja de Recursos <<ORGANISMO>> la retirará el material que el empleado
IT. finalización del trabajo. Para ello público tuviera asignado.
utilizará los campos asignados en
la Solicitud de Alta/Baja de o Una vez completada la solicitud, el
Telefonía Fija. Grupo de Dispositivos Móviles
informará mediante correo
electrónico al Responsable de
Asignación de Recursos IT del
<<ORGANISMO>> la finalización
del trabajo solicitado. Para ello
utilizará los campos asignados en
la Solicitud de Alta/Baja de
Telefonía Móvil o Datos en
Movilidad.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> informará al Área de Seguridad del <<ORGANISMO>>
<<señalar dirección de email>> la fecha de baja del empleado público, al objeto de que, a partir de dicha fecha, se revoque el permiso de
acceso físico a las instalaciones.
 En el día en el que el empleado público cause baja en el <<ORGANISMO>>, el Responsable de Asignación de Recursos IT del
Centro Criptológico Nacional 13

| por el <<ORGANISMO>>. <br> o Una vez completada la solicitud, <br> el CAU informará mediante correo <br> electrónico al Responsable de <br> Asignación de Recursos IT de la <br> SGTIC la finalización del trabajo <br> solicitado. Para ello <br> cumplimentará los campos <br> asignados en el formulario de <br> Solicitud de Alta/Baja de Recursos <br> IT. | equipo de telefonía fija asignado, <br> el Grupo de Telefonía Fija retirará <br> el equipo del puesto de trabajo <br> indicado en la solicitud. <br> o Una vez realizadas las acciones <br> solicitadas, el Grupo de Telefonía <br> Fija informará mediante correo <br> electrónico al Responsable de <br> Asignación de Recursos IT del <br> <<ORGANISMO>> la <br> finalización del trabajo. Para ello <br> utilizará los campos asignados en <br> la Solicitud de Alta/Baja de <br> Telefonía Fija. | <<ORGANISMO>> y se dará por <br> cerrada la solicitud. <br> o En el caso de tener asignado un <br> equipo de telefonía móvil o tarjeta <br> de conexión de datos en movilidad, <br> el Grupo de Dispositivos Móviles, <br> mediante su procedimiento interno, <br> se pondrá en contacto con el <br> empleado público que causa baja y <br> retirará el material que el empleado <br> público tuviera asignado. <br> o Una vez completada la solicitud, el <br> Grupo de Dispositivos Móviles <br> informará mediante correo <br> electrónico al Responsable de <br> Asignación de Recursos IT del <br> <<ORGANISMO>> la finalización <br> del trabajo solicitado. Para ello <br> utilizará los campos asignados en <br> la Solicitud de Alta/Baja de <br> Telefonía Móvil o Datos en <br> Movilidad. |
| --- | --- | --- |
|  El Responsable de Asignación de Recursos IT del <<ORGANISMO>> informará al Área de Seguridad del <<ORGANISMO>> <br> <<señalar dirección de email>> la fecha de baja del empleado público, al objeto de que, a partir de dicha fecha, se revoque el permiso de <br> acceso físico a las instalaciones. <br>  En el día en el que el empleado público cause baja en el <<ORGANISMO>>, el Responsable de Asignación de Recursos IT del |  |  |


---

<!-- Página 14 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
<<ORGANISMO>> se pondrá en contacto con el empleado público para retirarle la tarjeta de acceso.
11
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará a la unidad competente , por valija interna, las tarjetas
de acceso de los empleados públicos dados de baja en el <<ORGANISMO>>.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> dará de baja al usuario en la <<Aplicación de Gestión de Accesos
del Organismo>> y, en su caso, en la <<Aplicación de Control Horario del Organismo>>.
 Una vez confirmado que se ha dado de baja al usuario en los sistemas, que se le ha retirado el equipo, el teléfono y la tarjeta de acceso, el
Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará la confirmación de la baja completa al responsable del
empleado público que solicitó la baja.
11 Por ejemplo, la Oficialía Mayor.
Centro Criptológico Nacional 14

| <<ORGANISMO>> se pondrá en contacto con el empleado público para retirarle la tarjeta de acceso. <br>  El Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará a la unidad competente11, por valija interna, las tarjetas <br> de acceso de los empleados públicos dados de baja en el <<ORGANISMO>>. <br>  El Responsable de Asignación de Recursos IT del <<ORGANISMO>> dará de baja al usuario en la <<Aplicación de Gestión de Accesos <br> del Organismo>> y, en su caso, en la <<Aplicación de Control Horario del Organismo>>. |
| --- |
|  Una vez confirmado que se ha dado de baja al usuario en los sistemas, que se le ha retirado el equipo, el teléfono y la tarjeta de acceso, el <br> Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará la confirmación de la baja completa al responsable del <br> empleado público que solicitó la baja. |


---

<!-- Página 15 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
7.1.3 PROCESO DE ALTA DE PERSONAL EXTERNO EN EL
<<ORGANISMO>>
18. El trabajador externo que se incorpore al <<ORGANISMO>> proporcionará, entre
otros, los siguientes datos:
 Nombre.
 Apellidos.
 NIF.
 Empresa.
 Categoría Profesional.
 Proyecto.
 Jefe de Proyecto en el <<ORGANISMO>>.
 Tiempo estimado de estancia.
19. Seguidamente se describe el proceso de Alta.
Centro Criptológico Nacional 15

---

<!-- Página 16 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
Proceso de ALTA DE PERSONAL EXTERNO en el <<ORGANISMO>>
 Con anterioridad a la incorporación de nuevo personal externo en el área correspondiente del <<ORGANISMO>>, se identificarán las
necesidades de tal personal externo por parte del responsable del personal externo, pudendo incluir: alta en los sistemas, asignación de
ordenador, teléfono, etc.
 Para satisfacer las anteriores necesidades, el responsable del personal externo enviará una solicitud vía correo electrónico al Responsable
de Asignación de Recursos IT del <<ORGANISMO>> <<señalar dirección de email>>, indicándole las necesidades del nuevo usuario e
incluyendo la siguiente información:
o Nombre.
o Apellidos.
o NIF.
o Perfil.
o Puesto de trabajo.
o Empresa.
o Fecha de incorporación.
o Fecha prevista de finalización.
Adicionalmente, en esa misma comunicación, el responsable del personal externo deberá informar si el nuevo personal externo va a
utilizar el equipo de su propia organización o si, por el contrario, va a ser necesario que se le asigne un equipo perteneciente al
<<ORGANISMO>>.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará un correo electrónico solicitando al Área de Seguridad
12 13
del <<ORGANISMO>> <<señalar dirección de email>> las credenciales de acceso al <<ORGANISMO>> para el nuevo personal
externo. El correo electrónico incluirá los datos de la persona externa que se va a incorporar: nombre, apellidos, NIF, organización a la
12 En muchas ocasiones, se trata de la Oficialía Mayor.
13 Usualmente, una tarjeta personalizada, que podrá incluir un chip criptográfico para alojar certificados digitales.
Centro Criptológico Nacional 16

|  | Proceso de ALTA DE PERSONAL EXTERNO en el <<ORGANISMO>> |  |
| --- | --- | --- |
|  Con anterioridad a la incorporación de nuevo personal externo en el área correspondiente del <<ORGANISMO>>, se identificarán las <br> necesidades de tal personal externo por parte del responsable del personal externo, pudendo incluir: alta en los sistemas, asignación de <br> ordenador, teléfono, etc. <br>  Para satisfacer las anteriores necesidades, el responsable del personal externo enviará una solicitud vía correo electrónico al Responsable <br> de Asignación de Recursos IT del <<ORGANISMO>> <<señalar dirección de email>>, indicándole las necesidades del nuevo usuario e <br> incluyendo la siguiente información: <br> o Nombre. <br> o Apellidos. <br> o NIF. <br> o Perfil. <br> o Puesto de trabajo. <br> o Empresa. <br> o Fecha de incorporación. <br> o Fecha prevista de finalización. <br> Adicionalmente, en esa misma comunicación, el responsable del personal externo deberá informar si el nuevo personal externo va a <br> utilizar el equipo de su propia organización o si, por el contrario, va a ser necesario que se le asigne un equipo perteneciente al <br> <<ORGANISMO>>. <br>  El Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará un correo electrónico solicitando al Área de Seguridad <br> del <<ORGANISMO>>12 <<señalar dirección de email>> las credenciales de acceso al <<ORGANISMO>>13 para el nuevo personal <br> externo. El correo electrónico incluirá los datos de la persona externa que se va a incorporar: nombre, apellidos, NIF, organización a la |  |  |


---

<!-- Página 17 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
que pertenece y un teléfono de contacto.
ALTA EN SISTEMAS Y/O ASIGNACIÓN ALTA EN TELEFONÍA FIJA ALTA EN TELEFONÍA MÓVIL O
DE EQUIPAMIENTO DATOS EN MOVILIDAD
 En caso de solicitud de alta en los  En caso de requerir teléfono fijo, el  En caso de requerir teléfono móvil o
sistemas y/o equipamiento Responsable de Asignación de conexión de datos en movilidad, el
informático del <<ORGANISMO>>, Recursos IT del <<ORGANISMO>> Responsable de Asignación de
el Responsable de Asignación de remitirá un correo electrónico al Recursos IT del <<ORGANISMO>>
Recursos IT del <<ORGANISMO>> Grupo de Telefonía Fija <<señalar remitirá un correo electrónico al Grupo
remitirá un correo electrónico al CAU dirección de email>> con la Solicitud de Dispositivos Móviles <<señalar
<<señalar dirección de email>> con la de Alta/Baja de Telefonía Fija, dirección de email>> con la Solicitud
Solicitud de Alta/Baja de Recursos IT, incluyendo la información recibida del de Alta/Baja de Telefonía Móvil o
14
incluyendo la información recibida del responsable del personal externo. Datos en Movilidad .
responsable del personal externo.
o El Grupo de Telefonía Fija o El Grupo de Dispositivos Móviles
o El CAU ejecutará las acciones ejecutará las acciones pertinentes realizará las acciones pertinentes
pertinentes para de alta al usuario para asignar un teléfono y una línea para asignar y entregar el teléfono
y/o para asignarle equipo y tras su al usuario, e informará al móvil y/o configurar la conexión
finalización, informará vía correo Responsable de Asignación de de datos de movilidad al personal
electrónico al Responsable de Recursos IT del externo, e informará al
Asignación de Recursos IT del <<ORGANISMO>> del teléfono Responsable de Asignación de
<<ORGANISMO>>. Para ello, fijo y la extensión vía correo Recursos IT del
utilizará la Solicitud de Alta/Baja electrónico utilizando el formulario <<ORGANISMO>>, la
de Recursos IT, completando la de Solicitud de Alta/Baja de finalización de las tareas
información requerida en la Telefonía Fija. solicitadas. Para ello utilizará la
plantilla. Solicitud de Alta/Baja de Telefonía
o El Responsable de Asignación de Móvil o Datos en Movilidad.
o El Responsable de Asignación de Recursos IT del
14 Que podrá incluir la autorización del Jefe de Área de Comunicaciones (o unidad equivalente).
Centro Criptológico Nacional 17

| que pertenece y un teléfono de contacto. |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | ALTA EN SISTEMAS Y/O ASIGNACIÓN |  |  | ALTA EN TELEFONÍA FIJA |  |  | ALTA EN TELEFONÍA MÓVIL O |  |
|  | DE EQUIPAMIENTO |  |  |  |  |  | DATOS EN MOVILIDAD |  |
|  En caso de solicitud de alta en los <br> sistemas y/o equipamiento <br> informático del <<ORGANISMO>>, <br> el Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>> <br> remitirá un correo electrónico al CAU <br> <<señalar dirección de email>> con la <br> Solicitud de Alta/Baja de Recursos IT, <br> incluyendo la información recibida del <br> responsable del personal externo. <br> o El CAU ejecutará las acciones <br> pertinentes para de alta al usuario <br> y/o para asignarle equipo y tras su <br> finalización, informará vía correo <br> electrónico al Responsable de <br> Asignación de Recursos IT del <br> <<ORGANISMO>>. Para ello, <br> utilizará la Solicitud de Alta/Baja <br> de Recursos IT, completando la <br> información requerida en la <br> plantilla. <br> o El Responsable de Asignación de |  |  |  En caso de requerir teléfono fijo, el <br> Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>> <br> remitirá un correo electrónico al <br> Grupo de Telefonía Fija <<señalar <br> dirección de email>> con la Solicitud <br> de Alta/Baja de Telefonía Fija, <br> incluyendo la información recibida del <br> responsable del personal externo. <br> o El Grupo de Telefonía Fija <br> ejecutará las acciones pertinentes <br> para asignar un teléfono y una línea <br> al usuario, e informará al <br> Responsable de Asignación de <br> Recursos IT del <br> <<ORGANISMO>> del teléfono <br> fijo y la extensión vía correo <br> electrónico utilizando el formulario <br> de Solicitud de Alta/Baja de <br> Telefonía Fija. <br> o El Responsable de Asignación de <br> Recursos IT del |  |  |  En caso de requerir teléfono móvil o <br> conexión de datos en movilidad, el <br> Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>> <br> remitirá un correo electrónico al Grupo <br> de Dispositivos Móviles <<señalar <br> dirección de email>> con la Solicitud <br> de Alta/Baja de Telefonía Móvil o <br> Datos en Movilidad14. <br> o El Grupo de Dispositivos Móviles <br> realizará las acciones pertinentes <br> para asignar y entregar el teléfono <br> móvil y/o configurar la conexión <br> de datos de movilidad al personal <br> externo, e informará al <br> Responsable de Asignación de <br> Recursos IT del <br> <<ORGANISMO>>, la <br> finalización de las tareas <br> solicitadas. Para ello utilizará la <br> Solicitud de Alta/Baja de Telefonía <br> Móvil o Datos en Movilidad. |  |  |


---

<!-- Página 18 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
Recursos IT del <<ORGANISMO <<ORGANISMO>> remitirá al o El Responsable de Asignación de
enviará la información del alta o responsable del personal externo Recursos IT del
baja al responsable del personal que ha solicitado la línea de <<ORGANISMO>> remitirá al
externo que la ha solicitado. teléfono fijo la información responsable del personal externo
recibida del Grupo de Telefonía que ha solicitado el teléfono móvil
Fija y pondrá en copia del correo y/o la conexión de datos en
electrónico al usuario final. movilidad, la información recibida
del Grupo de Dispositivos Móviles
y pondrá en copia del correo
electrónico al personal externo.
 Como norma general, el personal externo no podrá conectar sus propios equipos al dominio del <<ORGANISMO>>, utilizando los que
le sean proporcionados por el <<ORGANISMO>>. En casos excepcionales en los que se autorice aquel uso, se adoptarán las siguientes
cautelas:
o El responsable del personal externo que va a utilizar su propio equipamiento (ordenador portátil, por ejemplo) debe de realizar las
tareas definidas en el procedimiento de <<Normativa de seguridad para ordenadores de usuarios externos>>.
o El Responsable de Asignación de Recursos IT del <<ORGANISMO>> remitirá vía correo electrónico al CAU <<señalar dirección
de email>> la Solicitud de Alta/Baja de Recursos IT, que incluirá la autorización del responsable del personal externo.
o El Responsable de Asignación de Recursos IT del <<ORGANISMO>> acompañará al CAU al personal externo incorporado.
o El CAU realizará el procedimiento interno definido e informará al Responsable de Asignación de Recursos IT, vía correo electrónico,
la finalización del trabajo solicitado. Para ello usará la Solicitud de Alta/baja de Recursos IT.
o El Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará la información del alta al responsable del personal
externo que la ha solicitado y pondrá en copia del correo electrónico al usuario final.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> deberá de dar de alta al usuario externo en la <<Aplicación de
Gestión de Accesos del Organismo>>. Para ello, deberá recabar los datos necesarios, tales como:
o Nombre.
Centro Criptológico Nacional 18

| Recursos IT del <<ORGANISMO <br> enviará la información del alta o <br> baja al responsable del personal <br> externo que la ha solicitado. | <<ORGANISMO>> remitirá al <br> responsable del personal externo <br> que ha solicitado la línea de <br> teléfono fijo la información <br> recibida del Grupo de Telefonía <br> Fija y pondrá en copia del correo <br> electrónico al usuario final. | o El Responsable de Asignación de <br> Recursos IT del <br> <<ORGANISMO>> remitirá al <br> responsable del personal externo <br> que ha solicitado el teléfono móvil <br> y/o la conexión de datos en <br> movilidad, la información recibida <br> del Grupo de Dispositivos Móviles <br> y pondrá en copia del correo <br> electrónico al personal externo. |
| --- | --- | --- |
|  Como norma general, el personal externo no podrá conectar sus propios equipos al dominio del <<ORGANISMO>>, utilizando los que <br> le sean proporcionados por el <<ORGANISMO>>. En casos excepcionales en los que se autorice aquel uso, se adoptarán las siguientes <br> cautelas: <br> o El responsable del personal externo que va a utilizar su propio equipamiento (ordenador portátil, por ejemplo) debe de realizar las <br> tareas definidas en el procedimiento de <<Normativa de seguridad para ordenadores de usuarios externos>>. <br> o El Responsable de Asignación de Recursos IT del <<ORGANISMO>> remitirá vía correo electrónico al CAU <<señalar dirección <br> de email>> la Solicitud de Alta/Baja de Recursos IT, que incluirá la autorización del responsable del personal externo. <br> o El Responsable de Asignación de Recursos IT del <<ORGANISMO>> acompañará al CAU al personal externo incorporado. <br> o El CAU realizará el procedimiento interno definido e informará al Responsable de Asignación de Recursos IT, vía correo electrónico, <br> la finalización del trabajo solicitado. Para ello usará la Solicitud de Alta/baja de Recursos IT. <br> o El Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará la información del alta al responsable del personal <br> externo que la ha solicitado y pondrá en copia del correo electrónico al usuario final. |  |  |
|  El Responsable de Asignación de Recursos IT del <<ORGANISMO>> deberá de dar de alta al usuario externo en la <<Aplicación de <br> Gestión de Accesos del Organismo>>. Para ello, deberá recabar los datos necesarios, tales como: <br> o Nombre. |  |  |


---

<!-- Página 19 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
o Apellidos.
o NIF.
o Perfil.
o Puesto de trabajo.
o Empresa.
o Fecha de incorporación.
o Fecha de finalización.
El Responsable de Asignación de Recursos IT del <<ORGANISMO>> será responsable del registro y seguimiento de las solicitudes
realizadas a las distintas áreas. En el caso de que existiera algún problema, el Responsable de Asignación de Recursos IT del
<<ORGANISMO>> deberá informar de la situación al solicitante, señalando la causa de la demora en la ejecución de las solicitudes.
Centro Criptológico Nacional 19

---

<!-- Página 20 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
7.1.4 PROCESO DE BAJA DE PERSONAL EXTERNO EN EL
<<ORGANISMO>>
20. Seguidamente se describe el proceso de baja de personal externo, al objeto de
revocar los permisos de acceso a los sistemas, retirada de equipamiento, etc.
Centro Criptológico Nacional 20

---

<!-- Página 21 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
Proceso de BAJA DE PERSONAL EXTERNO en el <<ORGANISMO>>
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>>, realiza un seguimiento continuo de las fechas de expiración de
las credenciales de identificación del personal externo al <<ORGANISMO>>. Para ello, en el momento en el que a un personal externo
se le entregue una credencial de acceso, el Responsable de Asignación de Recursos IT del <<ORGANISMO>> deberá registrar la fecha
en la que le caduca la misma en la <<Aplicación de Gestión de Accesos del Organismo>>.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> controlará periódicamente las tarjetas próximas a caducar y
remitirá un correo electrónico a los distintos responsables para interesarse por su eventual renovación o la confirmación de su definitiva
baja.
 El responsable de cada personal externo consultado confirmará al Responsable de Asignación de Recursos IT del <<ORGANISMO>>
si es necesaria o no la renovación de las credenciales de acceso del personal externo. En el caso de que lo sea, el Responsable de
Asignación de Recursos IT del <<ORGANISMO>> acompañará al personal externo a renovar la credencial, de manera análoga a la que
se ha descrito anteriormente en el procedimiento.
 En el caso de que el responsable del personal externo informe al Responsable de Asignación de Recursos IT del <<ORGANISMO>>
que el usuario externo va a causar baja definitiva en el <<ORGANISMO>>, entonces se deberán realizar las acciones pertinentes para
que le sea retirado el equipamiento tecnológico del <<ORGANISMO>> que se le hubiere entregado o que tuviere asignado, así como
darle de baja de los sistemas.
BAJA DE SISTEMAS Y BAJA DE TELEFONÍA FIJA BAJA EN TELEFONÍA MÓVIL O
RETIRADA DE EQUIPO DATOS EN MOVILIDAD
 El Responsable de Asignación de  El Responsable de Asignación de  El Responsable de Asignación de
Recursos IT del <<ORGANISMO>> Recursos IT del <<ORGANISMO>> Recursos IT del <<ORGANISMO>>
remitirá por correo electrónico al CAU remitirá por correo electrónico al remitirá por correo electrónico al
<<señalar dirección de email>> la Grupo de Telefonía Fija del Grupo de Dispositivos Móviles del
Solicitud de Alta/Baja de Recursos IT, <<ORGANISMO>> <<señalar <<ORGANISMO>> <<señalar
solicitando la baja del usuario del dirección de email>> la Solicitud de dirección de email>> la Solicitud de
Centro Criptológico Nacional 21

|  | Proceso de BAJA DE PERSONAL EXTERNO en el <<ORGANISMO>> |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  El Responsable de Asignación de Recursos IT del <<ORGANISMO>>, realiza un seguimiento continuo de las fechas de expiración de <br> las credenciales de identificación del personal externo al <<ORGANISMO>>. Para ello, en el momento en el que a un personal externo <br> se le entregue una credencial de acceso, el Responsable de Asignación de Recursos IT del <<ORGANISMO>> deberá registrar la fecha <br> en la que le caduca la misma en la <<Aplicación de Gestión de Accesos del Organismo>>. <br>  El Responsable de Asignación de Recursos IT del <<ORGANISMO>> controlará periódicamente las tarjetas próximas a caducar y <br> remitirá un correo electrónico a los distintos responsables para interesarse por su eventual renovación o la confirmación de su definitiva <br> baja. |  |  |  |  |  |  |  |  |
|  El responsable de cada personal externo consultado confirmará al Responsable de Asignación de Recursos IT del <<ORGANISMO>> <br> si es necesaria o no la renovación de las credenciales de acceso del personal externo. En el caso de que lo sea, el Responsable de <br> Asignación de Recursos IT del <<ORGANISMO>> acompañará al personal externo a renovar la credencial, de manera análoga a la que <br> se ha descrito anteriormente en el procedimiento. <br>  En el caso de que el responsable del personal externo informe al Responsable de Asignación de Recursos IT del <<ORGANISMO>> <br> que el usuario externo va a causar baja definitiva en el <<ORGANISMO>>, entonces se deberán realizar las acciones pertinentes para <br> que le sea retirado el equipamiento tecnológico del <<ORGANISMO>> que se le hubiere entregado o que tuviere asignado, así como <br> darle de baja de los sistemas. |  |  |  |  |  |  |  |  |
|  | BAJA DE SISTEMAS Y |  |  | BAJA DE TELEFONÍA FIJA |  |  | BAJA EN TELEFONÍA MÓVIL O |  |
|  | RETIRADA DE EQUIPO |  |  |  |  |  | DATOS EN MOVILIDAD |  |
|  El Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>> <br> remitirá por correo electrónico al CAU <br> <<señalar dirección de email>> la <br> Solicitud de Alta/Baja de Recursos IT, <br> solicitando la baja del usuario del |  |  |  El Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>> <br> remitirá por correo electrónico al <br> Grupo de Telefonía Fija del <br> <<ORGANISMO>> <<señalar <br> dirección de email>> la Solicitud de |  |  |  El Responsable de Asignación de <br> Recursos IT del <<ORGANISMO>> <br> remitirá por correo electrónico al <br> Grupo de Dispositivos Móviles del <br> <<ORGANISMO>> <<señalar <br> dirección de email>> la Solicitud de |  |  |


---

<!-- Página 22 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
sistema y, en su caso, la retirada del Alta/Baja de Telefonía Fija, Alta/Baja de Telefonía Móvil o Datos
equipo propiedad del informando de la baja del personal en Movilidad, informando sobre la
<<ORGANISMO>> que tuviere externo, y solicitando la retirada del baja del personal externo y solicitando,
asignado, y señalando la fecha de baja equipo de telefonía fija que tuviere en su caso, la retirada del equipo de
del externo. asignado, señalando la fecha de baja telefonía móvil o la tarjeta de
del personal externo. conexión de datos de movilidad que
o El CAU ejecutará las acciones tuviere asignados, y la fecha de baja
pertinentes para dar de baja al o En caso de que no tuviera ningún del personal externo.
usuario externo de los sistemas, en equipo de telefonía fija asignado, el
la fecha señalada. Grupo de Telefonía Fija informará o En caso de que no tuviera ningún
de ello al Responsable de equipo de telefonía móvil o
o En caso de que tuviera asignado Asignación de Recursos IT del tarjeta de conexión de datos en
un equipo del <<ORGANISMO>> y se dará por movilidad asignados, el Grupo de
<<ORGANISMO>>, el CAU, cerrada la solicitud. Dispositivos Móviles informará
mediante su procedimiento de ello al Responsable de
interno, retirará tal equipo en el o En caso de tener asignado un Asignación de Recursos IT del
puesto de trabajo indicado en la equipo de telefonía fija, el Grupo <<ORGANISMO>> y se dará por
solicitud. de Telefonía Fija del cerrada la solicitud.
<<ORGANISMO>> retirará tal el
o En caso de que no tuviera equipo en el puesto de trabajo o En caso de tener asignado un
asignado ningún equipo del indicado en la solicitud. equipo de telefonía móvil o una
<<ORGANISMO>> por haber tarjeta de conexión de datos en
estado utilizando el personal o Una vez realizadas las acciones movilidad, el Grupo de
externo su propio equipamiento, pertinentes, el Grupo de Telefonía Dispositivos Móviles del
es necesario que el Jefe de Fija del <<ORGANISMO>> <<ORGANISMO>>, mediante su
Proyecto del <<ORGANISMO>> informará mediante correo procedimiento interno, retirará
realice las tareas definidas en el electrónico al Responsable de tales equipos.
procedimiento de <<Normativa de Asignación de Recursos IT del
seguridad para ordenadores de <<ORGANISMO>> la finalización o Una vez realizadas las acciones
usuarios externos>>. del trabajo solicitado. Para ello pertinentes, el Grupo de
Centro Criptológico Nacional 22

| sistema y, en su caso, la retirada del <br> equipo propiedad del <br> <<ORGANISMO>> que tuviere <br> asignado, y señalando la fecha de baja <br> del externo. <br> o El CAU ejecutará las acciones <br> pertinentes para dar de baja al <br> usuario externo de los sistemas, en <br> la fecha señalada. <br> o En caso de que tuviera asignado <br> un equipo del <br> <<ORGANISMO>>, el CAU, <br> mediante su procedimiento <br> interno, retirará tal equipo en el <br> puesto de trabajo indicado en la <br> solicitud. <br> o En caso de que no tuviera <br> asignado ningún equipo del <br> <<ORGANISMO>> por haber <br> estado utilizando el personal <br> externo su propio equipamiento, <br> es necesario que el Jefe de <br> Proyecto del <<ORGANISMO>> <br> realice las tareas definidas en el <br> procedimiento de <<Normativa de <br> seguridad para ordenadores de <br> usuarios externos>>. | Alta/Baja de Telefonía Fija, <br> informando de la baja del personal <br> externo, y solicitando la retirada del <br> equipo de telefonía fija que tuviere <br> asignado, señalando la fecha de baja <br> del personal externo. <br> o En caso de que no tuviera ningún <br> equipo de telefonía fija asignado, el <br> Grupo de Telefonía Fija informará <br> de ello al Responsable de <br> Asignación de Recursos IT del <br> <<ORGANISMO>> y se dará por <br> cerrada la solicitud. <br> o En caso de tener asignado un <br> equipo de telefonía fija, el Grupo <br> de Telefonía Fija del <br> <<ORGANISMO>> retirará tal el <br> equipo en el puesto de trabajo <br> indicado en la solicitud. <br> o Una vez realizadas las acciones <br> pertinentes, el Grupo de Telefonía <br> Fija del <<ORGANISMO>> <br> informará mediante correo <br> electrónico al Responsable de <br> Asignación de Recursos IT del <br> <<ORGANISMO>> la finalización <br> del trabajo solicitado. Para ello | Alta/Baja de Telefonía Móvil o Datos <br> en Movilidad, informando sobre la <br> baja del personal externo y solicitando, <br> en su caso, la retirada del equipo de <br> telefonía móvil o la tarjeta de <br> conexión de datos de movilidad que <br> tuviere asignados, y la fecha de baja <br> del personal externo. <br> o En caso de que no tuviera ningún <br> equipo de telefonía móvil o <br> tarjeta de conexión de datos en <br> movilidad asignados, el Grupo de <br> Dispositivos Móviles informará <br> de ello al Responsable de <br> Asignación de Recursos IT del <br> <<ORGANISMO>> y se dará por <br> cerrada la solicitud. <br> o En caso de tener asignado un <br> equipo de telefonía móvil o una <br> tarjeta de conexión de datos en <br> movilidad, el Grupo de <br> Dispositivos Móviles del <br> <<ORGANISMO>>, mediante su <br> procedimiento interno, retirará <br> tales equipos. <br> o Una vez realizadas las acciones <br> pertinentes, el Grupo de |
| --- | --- | --- |


---

<!-- Página 23 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
Adicionalmente, se informará al cumplimentará los campos Dispositivos Móviles informará
personal externo que debe de correspondientes en la Solicitud de mediante correo electrónico al
acudir al CAU para retirar su Alta/Baja de Telefonía Fija. Responsable de Asignación de
equipo del dominio. Recursos IT del
<<ORGANISMO>> la
o El CAU reclamará al personal finalización del trabajo solicitado.
externo la devolución del material Para ello cumplimentará los
informático facilitado por campos correspondientes en la
el<<ORGANISMO>>. Solicitud de Alta/Baja de
Telefonía Móvil o Datos en
 Una vez realizadas las acciones Movilidad.
pertinentes, el CAU remitirá un correo
electrónico al Responsable de
Asignación de Recursos IT del
<<ORGANISMO>>, informándole
sobre la finalización del trabajo
solicitado.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>>, informará al Área de Seguridad del <<ORGANISMO>>
<<señalar dirección de email>> la fecha de baja del personal externo, al objeto de, a partir de tal fecha, se le revoque el permiso de
acceso físico a las instalaciones.
 En el día en el que el personal externo cause baja en el <<ORGANISMO>>, el Responsable de Asignación de Recursos IT del
<<ORGANISMO>> se pondrá en contacto con el externo para retirarle la tarjeta de acceso.
15
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> remitirá a la unidad competente , por valija interna, las tarjetas
de acceso del personal externo dado de baja en el <<ORGANISMO>>.
15 En ocasiones será la Oficialía Mayor.
Centro Criptológico Nacional 23

| Adicionalmente, se informará al <br> personal externo que debe de <br> acudir al CAU para retirar su <br> equipo del dominio. <br> o El CAU reclamará al personal <br> externo la devolución del material <br> informático facilitado por <br> el<<ORGANISMO>>. <br>  Una vez realizadas las acciones <br> pertinentes, el CAU remitirá un correo <br> electrónico al Responsable de <br> Asignación de Recursos IT del <br> <<ORGANISMO>>, informándole <br> sobre la finalización del trabajo <br> solicitado. | cumplimentará los campos <br> correspondientes en la Solicitud de <br> Alta/Baja de Telefonía Fija. | Dispositivos Móviles informará <br> mediante correo electrónico al <br> Responsable de Asignación de <br> Recursos IT del <br> <<ORGANISMO>> la <br> finalización del trabajo solicitado. <br> Para ello cumplimentará los <br> campos correspondientes en la <br> Solicitud de Alta/Baja de <br> Telefonía Móvil o Datos en <br> Movilidad. |
| --- | --- | --- |
|  El Responsable de Asignación de Recursos IT del <<ORGANISMO>>, informará al Área de Seguridad del <<ORGANISMO>> <br> <<señalar dirección de email>> la fecha de baja del personal externo, al objeto de, a partir de tal fecha, se le revoque el permiso de <br> acceso físico a las instalaciones. <br>  En el día en el que el personal externo cause baja en el <<ORGANISMO>>, el Responsable de Asignación de Recursos IT del <br> <<ORGANISMO>> se pondrá en contacto con el externo para retirarle la tarjeta de acceso. |  |  |
|  El Responsable de Asignación de Recursos IT del <<ORGANISMO>> remitirá a la unidad competente15, por valija interna, las tarjetas <br> de acceso del personal externo dado de baja en el <<ORGANISMO>>. |  |  |


---

<!-- Página 24 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> dará de baja al externo en la <<Aplicación de Gestión de
Accesos del Organismo>>.
 Una vez confirmada la baja del personal externo en los sistemas del <<ORGANISMO>>, y verificado que se le ha retirado el equipo, el
teléfono y la tarjeta de acceso, el Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará la confirmación de la
baja completa al jefe de Área del <<ORGANISMO>> a la que el externo pertenecía.
Centro Criptológico Nacional 24

|  El Responsable de Asignación de Recursos IT del <<ORGANISMO>> dará de baja al externo en la <<Aplicación de Gestión de <br> Accesos del Organismo>>. |
| --- |
|  Una vez confirmada la baja del personal externo en los sistemas del <<ORGANISMO>>, y verificado que se le ha retirado el equipo, el <br> teléfono y la tarjeta de acceso, el Responsable de Asignación de Recursos IT del <<ORGANISMO>> enviará la confirmación de la <br> baja completa al jefe de Área del <<ORGANISMO>> a la que el externo pertenecía. |


---

<!-- Página 25 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
7.1.5 INCORPORACIÓN DE NUEVO EMPLEADO PÚBLICO
21. Seguidamente se describe un ejemplo del proceso de alta de un nuevo empleado
16.
público en el <<ORGANISMO>>
16
Este proceso suele ofrecer múltiples variantes, dependiendo de la tipología del Organismo de que se
trate. El Organismo en cuestión deberá adaptarlo a sus especiales circunstancias administrativas.
Centro Criptológico Nacional 25

---

<!-- Página 26 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
Incorporación de NUEVO EMPLEADO PÚBLICO
 El nuevo empleado público solicitará acceso temporal al <<ORGANISMO>>, facilitando su DNI en el Control de Acceso.
 El nuevo empleado público accederá al <<ORGANISMO>> y se dirigirá a la Secretaría del <<ORGANISMO>> <<señalar ubicación
física, telefónica y electrónica>>, donde comunicará su incorporación como empleado público del <<ORGANISMO>>.
 Desde la Secretaría del <<ORGANISMO>>, se informará de la incorporación de un nuevo empleado público al Responsable de
Asignación de Recursos IT del <<ORGANISMO>>, quién deberá dirigirse a la Secretaría del <<ORGANISMO>> para acompañar
físicamente al nuevo empleado público.
 El nuevo empleado público esperará al Responsable de Asignación de Recursos IT del <<ORGANISMO>> al que acompañará al
Departamento de RRHH. Del <<ORGANISMO>> <<señalar ubicación física, telefónica y electrónica>>. Una vez en RRHH, se
iniciarán los trámites de gestión del alta del nuevo empleado público.
 En RRHH el nuevo empleado público cumplimentará, en general, los siguientes documentos:
o Toma de Posesión.
o Cumplimiento de funciones.
o Documento de incompatibilidades.
o Justificante de la toma de posesión.
Todos los documentos entregados serán cumplimentados por el nuevo empleado público, que los entregará a RRHH. Excepcionalmente,
el empleado público guardará el justificante de la toma de posesión que posteriormente deberá ser firmado y sellado por el cargo personal
competente del <<ORGANISMO>> en el momento de su presentación al área correspondiente y entregado a RRHH para que se realice
una copia del mismo.
 Por lo general, a continuación el Responsable de Asignación de Recursos IT del <<ORGANISMO>> acompañará al nuevo empleado
público al departamento de Habilitación General del <<ORGANISMO>> <<señalar ubicación física, telefónica y electrónica>>, donde
Centro Criptológico Nacional 26

|  | Incorporación de NUEVO EMPLEADO PÚBLICO |  |
| --- | --- | --- |
|  El nuevo empleado público solicitará acceso temporal al <<ORGANISMO>>, facilitando su DNI en el Control de Acceso. <br>  El nuevo empleado público accederá al <<ORGANISMO>> y se dirigirá a la Secretaría del <<ORGANISMO>> <<señalar ubicación <br> física, telefónica y electrónica>>, donde comunicará su incorporación como empleado público del <<ORGANISMO>>. <br>  Desde la Secretaría del <<ORGANISMO>>, se informará de la incorporación de un nuevo empleado público al Responsable de <br> Asignación de Recursos IT del <<ORGANISMO>>, quién deberá dirigirse a la Secretaría del <<ORGANISMO>> para acompañar <br> físicamente al nuevo empleado público. <br>  El nuevo empleado público esperará al Responsable de Asignación de Recursos IT del <<ORGANISMO>> al que acompañará al <br> Departamento de RRHH. Del <<ORGANISMO>> <<señalar ubicación física, telefónica y electrónica>>. Una vez en RRHH, se <br> iniciarán los trámites de gestión del alta del nuevo empleado público. <br>  En RRHH el nuevo empleado público cumplimentará, en general, los siguientes documentos: <br> o Toma de Posesión. <br> o Cumplimiento de funciones. <br> o Documento de incompatibilidades. <br> o Justificante de la toma de posesión. <br> Todos los documentos entregados serán cumplimentados por el nuevo empleado público, que los entregará a RRHH. Excepcionalmente, <br> el empleado público guardará el justificante de la toma de posesión que posteriormente deberá ser firmado y sellado por el cargo personal <br> competente del <<ORGANISMO>> en el momento de su presentación al área correspondiente y entregado a RRHH para que se realice <br> una copia del mismo. <br>  Por lo general, a continuación el Responsable de Asignación de Recursos IT del <<ORGANISMO>> acompañará al nuevo empleado <br> público al departamento de Habilitación General del <<ORGANISMO>> <<señalar ubicación física, telefónica y electrónica>>, donde |  |  |


---

<!-- Página 27 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
cumplimentará los formularios de gestión de las nóminas.
 En Habilitación General, por lo general, se le suministrarán varios formularios para cumplimentar, entre ellos:
o El formulario de datos a cumplimentar en las altas en nómina.
o El formulario de datos del pagador - Retenciones sobre rendimientos de trabajo. Modelo 145.
El nuevo empleado público devolverá ambos formularios, una vez cumplimentados.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> y el nuevo empleado público deberán dirigirse a la Secretaría del
<<ORGANISMO>> <<señalar ubicación física, telefónica y electrónica>> y solicitar el formulario autenticado de solicitud de la
credencial de acceso al <<ORGANISMO>> <<Impreso Solicitud Acreditación Personal empleado público>>.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> acompañará al nuevo empleado público al Área de Seguridad del
<<ORGANISMO>> <<señalar ubicación física, telefónica y electrónica>> donde solicitará al personal responsable la tarjeta de acceso.
 En el Área de Seguridad, el nuevo empleado público deberá de entregar el formulario <<Impreso Solicitud Acreditación Personal
empleado público>> cumplimentado, firmado y autenticado. Se le realizará una fotografía para ser incluida en la tarjeta de acceso y se le
entregarán dos impresos, uno con las <<Normas de Uso de la Tarjeta>> que deberá firmar y devolver, y una <<Nota Informativa sobre
las Capacidades de la Tarjeta>>, para su conocimiento.
o El Área de Seguridad proporcionará una tarjeta provisional, activada con una duración máxima de <<x>> meses.
17
o Una vez que la tarjeta definitiva esté disponible, la unidad competente comunicará al empleado público que pase a recoger su
tarjeta definitiva.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>>, junto con el nuevo empleado público, se dirigirán al Área del
<<ORGANISMO>> en la que el nuevo empleado público debe incorporarse y se le presentará al Jefe de Área o al Jefe de Servicio que
corresponda.
17 Puede tratarse de la Oficialía Mayor.
Centro Criptológico Nacional 27

---

<!-- Página 28 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> deberá obtener los datos del usuario así como el número de
tarjeta del nuevo empleado público para ser dado de alta, en su caso, en la <<Aplicación de Control Horario del Organismo>>.
Centro Criptológico Nacional 28

---

<!-- Página 29 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
7.1.6 INCORPORACIÓN DE NUEVO PERSONAL EXTERNO
COLABORADOR
22. Seguidamente se describe un ejemplo del proceso de alta de un nuevo personal
18.
externo colaborador del <<ORGANISMO>>
18
Este proceso suele ofrecer múltiples variantes, dependiendo de la tipología del Organismo de que se
trate. El Organismo en cuestión deberá adaptarlo a sus especiales circunstancias administrativas.
Centro Criptológico Nacional 29

---

<!-- Página 30 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
Incorporación de NUEVO PERSONAL EXTERNO COLABORADOR
 En el momento en el que el Jefe de Área o Jefe de Servicio conoce la fecha y los datos del personal externo que se va a incorporar en el
<<ORGANISMO>>, informará al Responsable de Asignación de Recursos IT del <<ORGANISMO>>.
 El nuevo personal externo solicitará acceso temporal al <<ORGANISMO>> facilitando el DNI en el Control de Acceso.
 El nuevo personal externo deberá dirigirse a la Secretaría del <<ORGANISMO>> <<señalar ubicación física, telefónica y electrónica>>
y solicitar el formulario Impreso Solicitud Acreditación Personal Colaborador, para obtener la credencial de acceso al
<<ORGANISMO>>. Dicho formulario estará debidamente autenticado.
 Desde la Secretaría del <<ORGANISMO>>, se informará al Responsable de Asignación de Recursos IT del <<ORGANISMO>> de la
incorporación de nuevo personal externo.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>> deberá dirigirse a la Secretaría del <<ORGANISMO>> para
acompañar al nuevo personal externo, para la tramitación de la credencial de acceso al <<ORGANISMO>>.
 El nuevo personal externo y el Responsable de Asignación de Recursos IT del <<ORGANISMO>> se dirigirán al Área de Seguridad del
<<ORGANISMO>> <<señalar ubicación física, telefónica y electrónica>> donde deberá dirigirse al personal responsable junto con el
Impreso Solicitud Acreditación Personal Colaborador cumplimentado.
 En el Área de Seguridad, el nuevo personal externo deberá de entregar el <<Impreso Solicitud Acreditación Personal Colaborador>>,
completado, firmado y sellado. Se le realizará una fotografía para ser incluida en la tarjeta y se le entregará un impreso con las
<<Normas de Uso de la Tarjeta>> que la tendrá que firmar y entregar y se le proporcionará otra copia del mismo para su conocimiento.
 El Área de Seguridad proporcionará al nuevo usuario una tarjeta activada con una duración máxima de seis meses.
 El Responsable de Asignación de Recursos IT del <<ORGANISMO>>, deberá registrar la fecha de caducidad de la tarjeta del nuevo
colaborador externo para incluirlo dentro de la ficha del usuario en la <<Aplicación de Gestión de Accesos del Organismo>> para
realizar un seguimiento de la caducidad de las tarjetas de acceso.
Centro Criptológico Nacional 30

|  | Incorporación de NUEVO PERSONAL EXTERNO COLABORADOR |  |
| --- | --- | --- |
|  En el momento en el que el Jefe de Área o Jefe de Servicio conoce la fecha y los datos del personal externo que se va a incorporar en el <br> <<ORGANISMO>>, informará al Responsable de Asignación de Recursos IT del <<ORGANISMO>>. <br>  El nuevo personal externo solicitará acceso temporal al <<ORGANISMO>> facilitando el DNI en el Control de Acceso. <br>  El nuevo personal externo deberá dirigirse a la Secretaría del <<ORGANISMO>> <<señalar ubicación física, telefónica y electrónica>> <br> y solicitar el formulario Impreso Solicitud Acreditación Personal Colaborador, para obtener la credencial de acceso al <br> <<ORGANISMO>>. Dicho formulario estará debidamente autenticado. <br>  Desde la Secretaría del <<ORGANISMO>>, se informará al Responsable de Asignación de Recursos IT del <<ORGANISMO>> de la <br> incorporación de nuevo personal externo. <br>  El Responsable de Asignación de Recursos IT del <<ORGANISMO>> deberá dirigirse a la Secretaría del <<ORGANISMO>> para <br> acompañar al nuevo personal externo, para la tramitación de la credencial de acceso al <<ORGANISMO>>. <br>  El nuevo personal externo y el Responsable de Asignación de Recursos IT del <<ORGANISMO>> se dirigirán al Área de Seguridad del <br> <<ORGANISMO>> <<señalar ubicación física, telefónica y electrónica>> donde deberá dirigirse al personal responsable junto con el <br> Impreso Solicitud Acreditación Personal Colaborador cumplimentado. <br>  En el Área de Seguridad, el nuevo personal externo deberá de entregar el <<Impreso Solicitud Acreditación Personal Colaborador>>, <br> completado, firmado y sellado. Se le realizará una fotografía para ser incluida en la tarjeta y se le entregará un impreso con las <br> <<Normas de Uso de la Tarjeta>> que la tendrá que firmar y entregar y se le proporcionará otra copia del mismo para su conocimiento. <br>  El Área de Seguridad proporcionará al nuevo usuario una tarjeta activada con una duración máxima de seis meses. <br>  El Responsable de Asignación de Recursos IT del <<ORGANISMO>>, deberá registrar la fecha de caducidad de la tarjeta del nuevo <br> colaborador externo para incluirlo dentro de la ficha del usuario en la <<Aplicación de Gestión de Accesos del Organismo>> para <br> realizar un seguimiento de la caducidad de las tarjetas de acceso. |  |  |


---

<!-- Página 31 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
7.2. GESTIÓN DE PRIVILEGIOS
7.2.1 INTRODUCCIÓN
23. Los privilegios de acceso de los usuarios a los Sistemas de Información del
<<ORGANISMO>> deben ser gestionados y controlados adecuadamente para evitar
accesos o usos no autorizados de la información y de los sistemas que la soportan. Por ello,
se realizarán revisiones periódicas de los privilegios asignados, que posibiliten la adopción
de las medidas correctivas, en su caso.
24. A falta de realización de los procesos descritos en el epígrafe anterior, y con carácter
general, el acceso a los Recursos y Sistemas de Información del <<ORGANISMO>> está
totalmente prohibido.
25. Todos los accesos deben estar basados en la necesidad de saber. Sólo se permitirá el acceso
a los recursos cuando exista una necesidad legítima para el desarrollo de las actividades
profesionales del usuario. Por otro lado, los permisos otorgados a cada usuario deberán ser
los mínimos para el desarrollo de sus funciones.
7.2.2 GESTIÓN DE PRIVILEGIOS
26. La asignación, modificación o revocación de privilegios en los Sistemas de Información
del <<ORGANISMO>> será solicitada por los responsables del departamento o área a la
que pertenezca el destinatario de dichos privilegios.
27. Se mantendrá una Inventario para Control de Accesos, en la que se identifiquen los
usuarios y los privilegios autorizados y denegados.
28. Existirán privilegios asociados a:
 Cada usuario.
 Cada perfil, tales como:
o Administrador
o Operador
o Usuario Externo
o Usuario Interno
o Usuario Temporal
o Etc.
 Cada recurso, tales como:
o Bases de datos.
o Aplicaciones.
o Etc.
 Cada permiso, tales como:
o Lectura.
o Escritura.
o Control total.
o Etc.
Centro Criptológico Nacional 31

---

<!-- Página 32 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
29. El Departamento de Sistemas del <<ORGANISMO>> será responsable de registrar,
19.
mantener y custodiar los permisos otorgados a los usuarios
30. Los sistemas deben estar diseñados o configurados de tal forma que sólo se acceda a las
funciones permitidas.
31. Los soportes y documentos que contengan datos de carácter personal serán accesibles
únicamente por el personal autorizado en el correspondiente Documento de Seguridad,
conforme a lo dispuesto en el Real Decreto 1720/2007, de 21 de diciembre, por el que se
aprueba el Reglamento de Desarrollo de la LOPD.
32. Por tanto, será necesario crear y mantener un Inventario de Privilegios de Acceso, que
contendrá información relativa a cada usuario y sus privilegios de acceso concedidos, para
cada uno de os Sistemas de Información en los que hubiere sido segregada la Seguridad IT.
33. La información se creará al dar de alta a un usuario por primera vez en alguno de los
sistemas afectados, y deberá mantenerse actualizada, registrándose todas aquellas
modificaciones que se produzcan en los privilegios de acceso hasta el momento en que el
usuario haya causado baja en todos los sistemas incluidos en el alcance.
34. En el epígrafe 11 del presente Procedimiento se incluye un modelo para el inventariado de
privilegios de acceso.
7.2.3 REVISIÓN DE PRIVILEGIOS
35. Al menos, cada <<señalar periodicidad>>, se realizará una revisión de los privilegios de
acceso de todos los usuarios.
36. Cuando se trate de privilegios especiales (administrador, root, etc.), tal revisión de
privilegios se deberá realizar, al menos, cada <<señalar periodicidad>>, y, en cualquier
caso, siempre que existan:
 Alta de nuevos usuarios
 Baja de usuarios
37. Además, los privilegios de acceso de usuarios, tanto internos como externos, deben ser
revisados siempre que existan cambios en las funciones o responsabilidades.
38. Para ambos tipos de usuarios se tendrán en cuenta, al menos, las siguientes cuestiones:
 Necesidad de nuevos permisos.
 Cancelación de antiguos permisos.
 Segregación de funciones.
 Devolución de activos y modificación o cancelación de permisos de accesos físicos.
 Modificación de contraseñas de acceso.
 Notificación al personal implicado de su baja o cambio.
 Necesidad de retención de registros.
19 Funciones encomendadas a las figuras del Responsable del Sistema / Administrador de Seguridad del Sistema,
según los casos. Ver Guía CCN-STIC 801. Responsabilidades en el ENS.
Centro Criptológico Nacional 32

---

<!-- Página 33 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
7.2.4 CANCELACIÓN DE PRIVILEGIOS
39. Todos los privilegios de accesos de usuarios tanto internos como externos deben ser
cancelados en el momento de la finalización de su contrato o prestación de sus servicios en
el <<ORGANISMO>>.
40. Existirán flujos de comunicación que aseguren que este Procedimiento se realiza
correctamente, tal y como hemos visto en el epígrafe anterior de este Procedimiento.
8. CONTROL DE ACCESO
8.1 IDENTIFICADORES
41. Reglas generales:
 Todos los identificadores personales del <<ORGANISMO>> deben estar
normalizados, para posibilitar la identificación biunívoca y fiel de los usuarios.
 La creación de un identificador de usuario debe estar autorizada por su superior
jerárquico, de acuerdo con las normas internas y procedimentales del
20
<<ORGANISMO>> , tal y como hemos señalado en el epígrafe anterior de este
documento.
 No se permitirá el uso de identificadores de grupo, salvo cuando sea estrictamente
necesario y por razones operacionales. Esta circunstancia deberá estar debidamente
justificada y aprobada formalmente, aplicando los controles de seguridad precisos.
 Los identificadores de usuarios anónimos y los identificadores por defecto estarán
siempre deshabilitados.
 Los identificadores no deben dar indicios de nivel de privilegio asociado.
 Siempre que sea posible:
o Se deben establecer listas de control de acceso a los recursos de información.
o Los identificadores deben tener asignada una fecha de validez, tras la cual se
deshabilitarán.
8.2 SERVICIO DE IDENTIDAD DIGITAL
42. Dentro de la <<U/OC>> del <<ORGANISMO>> se configurará un Servicio de Identidad
Digital (SID), encargado de la gestión de las credenciales digitales de los usuarios de los
21.
Sistemas de Información del <<ORGANISMO>>
43. Reglas generales:
 Se deben aplicar controles de acceso en todos los niveles de la arquitectura y
topología de los Sistemas de Información del <<ORGANISMO>>. Esto incluye:
redes, plataformas o sistemas operativos, bases de datos y aplicaciones. Los atributos
20 Véase Guía CCN-STIC 821. Normativa de Seguridad y Procedimiento PR10 Procedimiento de Gestión de
Usuarios y Contraseñas, en esta misma Guía.
21 Este Servicio de Identidad Digital puede encuadrase dentro de la estructura del Departamento de Sistemas,
Responsable del Sistema o del CAU.
Centro Criptológico Nacional 33

---

<!-- Página 34 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
de cada uno de ellos deben reflejar alguna forma de identificación y autenticación,
autorización de acceso, verificación de recursos de información y registro y
monitorización de las actividades.
 Los usuarios son responsables de todas las actividades realizadas con sus
identificadores, contraseñas y dispositivos de acceso. Por lo tanto, no deben permitir
que otras personas los utilicen y conozcan.
8.3 PRINCIPIOS DE CONTROL DE ACCESO
44. Los principios que determinan el control de acceso a los Sistemas de Información del
<<ORGANISMO>> son las siguientes:
 El acceso a los Sistemas de Información del <<ORGANISMO>> requerirá siempre
de autenticación.
 El control de acceso a los Sistemas de Información del <<ORGANISMO>> se
gestionará a través de los Servicios de Identidad Digital descritos en el apartado
anterior.
 Los usuarios deberán siempre autenticarse como usuarios no privilegiados del
sistema, excepcionalmente y sólo con fines de administración podrán autenticarse
como administradores del mismo.
 Los usuarios deberán en todo momento hacer un uso responsable de la información y
los sistemas de información accedidos, garantizando el nivel de seguridad adecuado
de acuerdo a las directrices marcadas en la Normativa General de Utilización de los
22,
Recursos y Sistemas de Información del <<ORGANISMO>> de aplicación a todos
los usuarios.
 Todas las contraseñas asignadas a las cuentas de usuario deberán respetar la política
23.
de contraseñas detallada en el apartado anterior
8.4 REVISIÓN DEL CONTROL DE ACCESO
45. Reglas generales:
 Cada <<señalar periodicidad>> se realizará una revisión periódica de los derechos de
acceso asignados a los usuarios.
 Los derechos de acceso privilegiados deberán revisarse con una periodicidad menor.
Esta periodicidad será de <<señalar periodicidad>.
 Además de lo anterior, deberá realizarse una revisión de los permisos de acceso
correspondientes a un usuario siempre que hubiere sufrido modificación significativa
de sus responsabilidades, posición o rol en el <<ORGANISMO>>.
22 Véase Guía CCN-STIC 821. Normativa de Seguridad. En concreto, Norma NG00: Normativa General de
Utilización de los Recursos y Sistemas de Información del <<ORGANISMO>>.
23 Véase Guía CCN-STIC 821. Normativa de Seguridad. En concreto, Norma Particular NP40 – Creación y Uso
de Contraseñas.
Centro Criptológico Nacional 34

---

<!-- Página 35 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
9. AUTENTICACIÓN DE USUARIOS
9.1 AUTENTICACIÓN MEDIANTE CONTRASEÑAS
Alta y baja de contraseñas
46. Las gestiones asociadas a la creación o eliminación de contraseñas son responsabilidad de
los administradores de los Servicios de Identidad Digital del <<ORGANISMO>> y deberá
aplicarse lo contemplado en el epígrafe anterior de este Procedimiento.
Sustitución de contraseñas
47. El cambio de contraseñas podrá obedecer a:
 Cumplimiento del periodo de rotación establecido para la contraseña.
 Cambio de contraseña decidido por el usuario o el Departamento de Sistemas del
<<ORGANISMO>>.
 Cambio de contraseña por olvido, pérdida o sospecha de haber sido comprometida la
seguridad de la anterior.
 Cambio de una contraseña por defecto.
48. El responsable de iniciar un procedimiento de cambio de contraseña podrá ser el dueño de
la cuenta cuya contraseña ha de cambiarse, o el Departamento de Sistemas (Responsable
del Sistema) del <<ORGANISMO>>, y constará de los siguientes pasos:
Por decisión del usuario: El usuario dispone de Si el Servicio de Identidad
contraseña válida para Digital (SID) dispone de
acceder al servicio: autoservicio de
credenciales de
autenticación, se seguirá el
procedimiento específico
del SID para gestionar el
cambio de contraseña.
Si el Servicio de Identidad
Digital (SID) no dispone
de autoservicio de
credenciales de
autenticación, contactará
con el administrador del
sistema de información
para que haga uso de sus
privilegios de
administración y realice el
cambio de contraseña por
una contraseña provisional,
de un solo uso, que el
usuario deberá sustituir en
el inicio de la siguiente
sesión.
Centro Criptológico Nacional 35

| Por decisión del usuario: | El usuario dispone de <br> contraseña válida para <br> acceder al servicio: | Si el Servicio de Identidad <br> Digital (SID) dispone de <br> autoservicio de <br> credenciales de <br> autenticación, se seguirá el <br> procedimiento específico <br> del SID para gestionar el <br> cambio de contraseña. |
| --- | --- | --- |
|  |  | Si el Servicio de Identidad <br> Digital (SID) no dispone <br> de autoservicio de <br> credenciales de <br> autenticación, contactará <br> con el administrador del <br> sistema de información <br> para que haga uso de sus <br> privilegios de <br> administración y realice el <br> cambio de contraseña por <br> una contraseña provisional, <br> de un solo uso, que el <br> usuario deberá sustituir en <br> el inicio de la siguiente <br> sesión. |


---

<!-- Página 36 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
Si el usuario no dispone de Contactará con el
contraseña válida para administrador del sistema
acceder al servicio: de información para que
haga uso de sus privilegios
de administración y realice
el cambio de contraseña
por una contraseña
provisional, de un solo uso,
que el usuario deberá
sustituir en el inicio de la
siguiente sesión.
Por decisión del El administrador del
Departamento de sistema de información,
Sistemas (Responsable haciendo uso de sus
del Sistema). privilegios de
administración, realizará el
cambio de contraseña por
una contraseña por una
contraseña provisional, de
un solo uso, que el usuario
deberá sustituir en el inicio
de la siguiente sesión.
Directiva de contraseñas
49. Todos los usuarios, independientemente del sistema de información para el que se definan
o sean válidas, son responsables de sus contraseñas de acceso a servicios y de los accesos
que se produzcan haciendo uso de dichas contraseñas.
50. En este sentido, se recomienda a los usuarios observar las siguientes indicaciones en
24:
cuanto a la custodia de sus contraseñas
 No compartir sus contraseñas con otros usuarios.
 No anotar sus contraseñas ni introducirlas si alguien está observando.
 No enviar contraseñas por medios electrónicos o almacenarlas en ficheros de
ordenador sin cifrar.
51. El usuario deberá custodiar sus contraseñas de forma efectiva siguiendo las directrices
indicadas en la Normativa General de Utilización de los Recursos y Sistemas de
25,
Información del <<ORGANISMO>> de aplicación a todos los usuarios.
24 Véase Guía CCN-STIC 821. En concreto, Norma Particular NP40 – Creación y Uso de Contraseñas.
25 Puede encontrarse un modelo en la Guía CCN-STIC 821. En concreto, Norma General NG00 Normativa
General de Utilización de los Recursos y Sistemas de Información del <<ORGANISMO>>.
Centro Criptológico Nacional 36

|  | Si el usuario no dispone de <br> contraseña válida para <br> acceder al servicio: | Contactará con el <br> administrador del sistema <br> de información para que <br> haga uso de sus privilegios <br> de administración y realice <br> el cambio de contraseña <br> por una contraseña <br> provisional, de un solo uso, <br> que el usuario deberá <br> sustituir en el inicio de la <br> siguiente sesión. |
| --- | --- | --- |
| Por decisión del <br> Departamento de <br> Sistemas (Responsable <br> del Sistema). | El administrador del <br> sistema de información, <br> haciendo uso de sus <br> privilegios de <br> administración, realizará el <br> cambio de contraseña por <br> una contraseña por una <br> contraseña provisional, de <br> un solo uso, que el usuario <br> deberá sustituir en el inicio <br> de la siguiente sesión. |  |


---

<!-- Página 37 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
52. Los servicios de Identidad Digital del <<ORGANISMO>>, siempre que sea posible,
deberán emplear herramientas de control que garanticen el cumplimiento de la Directiva de
Contraseñas.
53. Todas las contraseñas asignadas a las cuentas activas en los sistemas de información del
<<ORGANISMO>> deberán observar las restricciones que se detallan en la siguiente
tabla.
26
Parámetro Valor
Periodo máximo de rotación  <<x>> días para cuentas de usuario.
 <<y>> días para cuentas de administración de
sistemas.
Caducidad de contraseñas Automática, al finalizar el periodo máximo de
rotación, excepto para contraseñas de
administración de sistemas.
Reutilización de contraseñas Ninguna de las <<z>> últimas
Intervalo mínimo entre cambios <<d>> días
Longitud mínima 8 caracteres.
Requisitos de complejidad  No contener en parte o en su totalidad el
nombre de usuario.
 Estar compuesta por al menos 3 de entre los
siguientes 4 conjuntos de caracteres:
o Caracteres alfanuméricos en mayúsculas.
o Caracteres alfanuméricos en minúsculas.
o Caracteres numéricos.
o Símbolos/caracteres especiales.
Semántica de contraseñas Se deberán evitar las contraseñas basadas en:
 Repetición de caracteres.
 Palabras del diccionario.
 Secuencias simples de letras, números o
secuencias de teclado.
 Información fácilmente asociable al usuario
como nombres de familiares o mascotas,
números de teléfono, matrículas, fechas o en
general información biográfica del usuario.
Cautelas generales  Mantenerlas en secreto. Las contraseñas no
deben compartirse con nadie.
 Preferiblemente, las contraseñas iniciales deben
26 Véase Guía CCN-STIC 821. Normativa de Seguridad. En concreto, Norma Particular NP40 – Creación y Uso
de Contraseñas.
Centro Criptológico Nacional 37

|  | Parámetro |  |  | Valor26 |  |
| --- | --- | --- | --- | --- | --- |
| Periodo máximo de rotación |  |  |  <<x>> días para cuentas de usuario. <br>  <<y>> días para cuentas de administración de <br> sistemas. |  |  |
| Caducidad de contraseñas |  |  | Automática, al finalizar el periodo máximo de <br> rotación, excepto para contraseñas de <br> administración de sistemas. |  |  |
| Reutilización de contraseñas |  |  | Ninguna de las <<z>> últimas |  |  |
| Intervalo mínimo entre cambios |  |  | <<d>> días |  |  |
| Longitud mínima |  |  | 8 caracteres. |  |  |
| Requisitos de complejidad |  |  |  No contener en parte o en su totalidad el <br> nombre de usuario. <br>  Estar compuesta por al menos 3 de entre los <br> siguientes 4 conjuntos de caracteres: <br> o Caracteres alfanuméricos en mayúsculas. <br> o Caracteres alfanuméricos en minúsculas. <br> o Caracteres numéricos. <br> o Símbolos/caracteres especiales. |  |  |
| Semántica de contraseñas |  |  | Se deberán evitar las contraseñas basadas en: <br>  Repetición de caracteres. <br>  Palabras del diccionario. <br>  Secuencias simples de letras, números o <br> secuencias de teclado. <br>  Información fácilmente asociable al usuario <br> como nombres de familiares o mascotas, <br> números de teléfono, matrículas, fechas o en <br> general información biográfica del usuario. |  |  |
| Cautelas generales |  |  |  Mantenerlas en secreto. Las contraseñas no <br> deben compartirse con nadie. <br>  Preferiblemente, las contraseñas iniciales deben |  |  |


---

<!-- Página 38 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
ser entregadas en mano o a través de algún
medio que no permita su acceso por personas
no autorizadas. En el caso de enviarlas por
medios telemáticos (correo electrónico, SMS,
etc.) o en un soporte, se enviarán separadas del
identificador.
 Las contraseñas iniciales deben ser generadas
automáticamente y se cambiarán en el primer
acceso a los sistemas.
 Los ficheros de contraseñas se deben almacenar
con algún método de protección que garantice
su confidencialidad e integridad (p. e. cifrado).
 Los sistemas, no deben mostrar las contraseñas
en claro por pantalla.
 Todas las contraseñas por defecto de los
sistemas o aplicaciones deben ser cambiadas o
desactivadas cuando no sean necesarias.
 La autenticación en los sistemas debe ser
individual, no estando permitida la
autenticación por grupo. Cuando sea necesario
por razones operacionales, deberá estar
justificado y aprobado formalmente, aplicando
los controles de seguridad compensatorios
necesarios.
 El número de intentos de accesos sin éxito
consecutivos debe estar limitado, tras el cual,
se bloquearán los sistemas.
 Los salvapantallas deben tener activada la
protección por contraseña, bloqueándose tras
un periodo de inactividad.
 Cuando se considere necesario en servicios
críticos, se contará con medidas adicionales a
las establecidas en este Procedimiento.
 No deben ser incluidas en correos electrónicos
o en otros medios de comunicación electrónica
ni comunicadas por teléfono.
 No se deben escribir o almacenar contraseñas
en texto claro o en formas fácilmente
reversibles.
 Se debe evitar la característica “Recordar
Contraseña” existente en algunas aplicaciones
y formularios.
 Deben existir mecanismos de expiración y
caducidad de contraseñas para obligar a los
usuarios al cambio de la misma.
 Todas las contraseñas con privilegios
especiales (administrador, root, etc.) deben
cambiarse, al menos, <<señalar
Centro Criptológico Nacional 38

|  | ser entregadas en mano o a través de algún <br> medio que no permita su acceso por personas <br> no autorizadas. En el caso de enviarlas por <br> medios telemáticos (correo electrónico, SMS, <br> etc.) o en un soporte, se enviarán separadas del <br> identificador. <br>  Las contraseñas iniciales deben ser generadas <br> automáticamente y se cambiarán en el primer <br> acceso a los sistemas. <br>  Los ficheros de contraseñas se deben almacenar <br> con algún método de protección que garantice <br> su confidencialidad e integridad (p. e. cifrado). <br>  Los sistemas, no deben mostrar las contraseñas <br> en claro por pantalla. <br>  Todas las contraseñas por defecto de los <br> sistemas o aplicaciones deben ser cambiadas o <br> desactivadas cuando no sean necesarias. <br>  La autenticación en los sistemas debe ser <br> individual, no estando permitida la <br> autenticación por grupo. Cuando sea necesario <br> por razones operacionales, deberá estar <br> justificado y aprobado formalmente, aplicando <br> los controles de seguridad compensatorios <br> necesarios. <br>  El número de intentos de accesos sin éxito <br> consecutivos debe estar limitado, tras el cual, <br> se bloquearán los sistemas. <br>  Los salvapantallas deben tener activada la <br> protección por contraseña, bloqueándose tras <br> un periodo de inactividad. <br>  Cuando se considere necesario en servicios <br> críticos, se contará con medidas adicionales a <br> las establecidas en este Procedimiento. <br>  No deben ser incluidas en correos electrónicos <br> o en otros medios de comunicación electrónica <br> ni comunicadas por teléfono. <br>  No se deben escribir o almacenar contraseñas <br> en texto claro o en formas fácilmente <br> reversibles. <br>  Se debe evitar la característica “Recordar <br> Contraseña” existente en algunas aplicaciones <br> y formularios. <br>  Deben existir mecanismos de expiración y <br> caducidad de contraseñas para obligar a los <br> usuarios al cambio de la misma. <br>  Todas las contraseñas con privilegios <br> especiales (administrador, root, etc.) deben <br> cambiarse, al menos, <<señalar |
| --- | --- |


---

<!-- Página 39 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
periodicidad>>.
 Todas las cuentas de usuario (acceso a sistema
operativo, correo, servicios web, etc.) deben
cambiarse, al menos, <<señalar
periodicidad>>.
 Adicionalmente, deberán modificarse siempre
que se sospeche que está comprometida a
través de los procedimientos establecidos.
9.2 AUTENTICACIÓN PERSONAL MEDIANTE CERTIFICADO DIGITAL
54. Normas generales27:
 Cada certificado digital debe identificar inequívocamente a un solo usuario, y sólo
deberá ser utilizado por él.
 El certificado digital debe haber sido emitido por un Prestador de Servicios de
Certificación válido y de confianza.
 Cada certificado debe tener asignado un periodo de de vida, tras el cual su uso se
considerará ineficaz a todos los efectos, y deberá procederse a su renovación.
 En el supuesto de pérdida, robo o indicios de uso indebido por terceros, el certificado
deberá ser revocado a la mayor brevedad posible.
 En autenticaciones basadas en certificado digital, su validez e identidad del usuario
deberá ser verificada contra una infraestructura de PKI.
9.3 GESTIÓN DE INICIOS DE SESIÓN
55. Se describen seguidamente los aspectos que deben tenerse en cuenta de cara a minimizar el
número de accesos no autorizados a los sistemas.
 Hasta que no se haya completado con éxito el proceso de autenticación, no se deberá
mostrar ningún tipo de información relativa al sistema (tal como identificadores del
sistema o versiones de software instalado), que puedan ayudar a identificarlo, así
como cualquier otro tipo de información que pueda facilitar su acceso no autorizado.
 Una vez se haya accedido correctamente al sistema, se deberá mostrar un mensaje
que advierta que el uso del sistema sólo está permitido a usuarios autorizados. Un
ejemplo de tal mensaje podría ser el siguiente:
AVISO A LOS USUARIOS DEL SISTEMA:
El uso de este sistema sólo está permitido a los usuarios autorizados.
El acceso no autorizado está terminantemente prohibido y podrá ser objeto de
acciones disciplinarias, sin perjuicio de las restantes acciones de naturaleza
27 Sin perjuicio de contemplar lo regulado en la Resolución de 19 de julio de 2011, de la Secretaría de Estado
para la Función Pública, por la que se aprueba la Norma Técnica de Interoperabilidad de Política de Firma
Electrónica y de certificados de la Administración.
Centro Criptológico Nacional 39

|  | periodicidad>>. <br>  Todas las cuentas de usuario (acceso a sistema <br> operativo, correo, servicios web, etc.) deben <br> cambiarse, al menos, <<señalar <br> periodicidad>>. <br>  Adicionalmente, deberán modificarse siempre <br> que se sospeche que está comprometida a <br> través de los procedimientos establecidos. |
| --- | --- |


|  | AVISO A LOS USUARIOS DEL SISTEMA: |  |
| --- | --- | --- |
|  | El uso de este sistema sólo está permitido a los usuarios autorizados. |  |
|  | El acceso no autorizado está terminantemente prohibido y podrá ser objeto de |  |
|  | acciones disciplinarias, sin perjuicio de las restantes acciones de naturaleza |  |


---

<!-- Página 40 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
legal a las que hubiere lugar.
Toda la actividad de este sistema se registra y es revisada periódicamente por
el personal designado por la dirección del <<ORGANISMO>>.
Cualquier usuario que acceda al sistema lo hace declarando conocer y
aceptar íntegramente estas reglas y la Normativa General de Utilización de
los Recursos y Sistemas de Información del <<ORGANISMO>>, accesibles
en <<URL>> y <<localización física>>.
 Respecto del proceso de validación de entrada, los sistemas deberán tener en cuenta
los siguientes extremos:
o La validación de la información de entrada se realizará únicamente cuando se
hayan completado todos los datos de entrada. Si ocurre alguna condición de
error, el sistema no deberá indicar en ningún caso la parte del dato que es
incorrecta. (Por ejemplo, nunca deberá indicar si lo que se ha introducido de
forma incorrecta es el nombre de usuario, o la contraseña, etc.).
o Se limitará a <<número de intentos>> el número de intentos de acceso.
o Si se alcanza el número máximo de intentos de acceso fallidos, se deberá
bloquear la cuenta de usuario, al menos durante <<tiempo de bloqueo>>28.
o Una vez completado con éxito el proceso de autenticación en el sistema, deberá
mostrarse la información de la última entrada satisfactoria.
o Siempre que sea posible, deberán utilizarse protocolos de comunicación que
permitan el envío de las credenciales de usuario de forma cifrada para evitar
que sean capturadas en algún punto intermedio de la comunicación.
9.4 CONTROL DE ACCESO A BASES DE DATOS Y APLICACIONES
 El acceso a las aplicaciones y bases de datos debe ser independiente del acceso al
sistema operativo.
 Se debe tener en cuenta el aislamiento de sistemas sensibles.
9.5 CONTROL DE ACCESO A LA RED
 Se debe establecer un control de acceso a la red, tanto interna como externamente,
implantando medidas de seguridad y procedimientos de autorización de acceso.
 Se debe establecer autenticación de usuarios en los accesos remotos a través de
técnicas criptográficas, “tokens”, protocolos de pregunta/respuesta, líneas dedicadas
privadas, verificación de origen de conexión, etc.
 Se protegerán los servicios de red, puertos de configuración y diagnóstico remoto.
Cuando no sean necesarios estarán deshabilitados.
 La red debe estar segmentada según su criticidad.
28 Puede expresarse en minutos, horas, días o de forma permanente.
Centro Criptológico Nacional 40

|  | legal a las que hubiere lugar. |  |
| --- | --- | --- |
|  | Toda la actividad de este sistema se registra y es revisada periódicamente por |  |
|  | el personal designado por la dirección del <<ORGANISMO>>. |  |
|  | Cualquier usuario que acceda al sistema lo hace declarando conocer y |  |
|  | aceptar íntegramente estas reglas y la Normativa General de Utilización de |  |
|  | los Recursos y Sistemas de Información del <<ORGANISMO>>, accesibles |  |
|  | en <<URL>> y <<localización física>>. |  |


---

<!-- Página 41 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
 Se debe contar con controles de conexión a la red (filtros, reglas, etc.), de
enrutamiento y de identificación del equipamiento en la red.
9.6 MONITORIZACIÓN DE LOS ACCESOS
56. Se deben realizar labores periódicas de monitorización de los sistemas con el fin de
detectar accesos no autorizados y desviaciones, registrando eventos que suministren
evidencias en caso de producirse incidentes relativos a la seguridad.
57. A tal efecto, se tendrán en cuenta:
 Registro de eventos:
o Intentos de acceso fallidos.
o Bloqueos de cuenta.
o Debilidad de contraseñas.
o Normalización de identificadores.
o Cuentas inactivas y deshabilitadas.
o Últimos accesos a cuentas.
o Etc.
 Registro de uso de los sistemas:
o Accesos no autorizados.
o Uso de Privilegios.
o Alertas de sistema.
o Etc.
58. Debe existir sincronización de relojes para exactitud de los registros de tiempo.
10. REGISTROS E INDICADORES
10.1. TABLA DE REGISTROS
(Ejemplos de uso)
Identificador Nombre Frecuencia Archivo Genera Custodia
Procedimiento Altas N/A Gestor de Dirección Departamento
de que se trate personal incidencias Departamento Sistemas
interno Sistemas
Procedimiento Bajas N/A Gestor de Dirección Departamento
de que se trate personal incidencias Departamento Sistemas
interno Sistemas
Procedimiento Altas N/A Gestor de Responsable Departamento
de que se trate personal incidencias de proyecto Sistemas
Centro Criptológico Nacional 41

|  | Identificador |  |  | Nombre |  |  | Frecuencia |  |  | Archivo |  |  | Genera |  |  | Custodia |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Procedimiento <br> de que se trate |  |  | Altas <br> personal <br> interno |  |  | N/A |  |  | Gestor de <br> incidencias |  |  | Dirección <br> Departamento <br> Sistemas |  |  | Departamento <br> Sistemas |  |  |
| Procedimiento <br> de que se trate |  |  | Bajas <br> personal <br> interno |  |  | N/A |  |  | Gestor de <br> incidencias |  |  | Dirección <br> Departamento <br> Sistemas |  |  | Departamento <br> Sistemas |  |  |
| Procedimiento <br> de que se trate |  |  | Altas <br> personal |  |  | N/A |  |  | Gestor de <br> incidencias |  |  | Responsable <br> de proyecto |  |  | Departamento <br> Sistemas |  |  |


---

<!-- Página 42 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
externo
Procedimiento Bajas N/A Gestor de Responsable Departamento
de que se trate personal incidencias de proyecto Sistemas
externo
Procedimiento Revisión 6 meses Gestor Departamento Departamento
de que se trate Permisos documental Sistemas Sistemas
de acceso
usuarios
Procedimiento Revisión 3 meses Gestor Departamento Departamento
de que se trate permisos documental Sistemas Sistemas
de acceso
usuarios
admin
10.2. TABLA DE INDICADORES
Identificador Rango Freq Métrica Objetivo Descripción
XXXX % 1 / A Porcentaje 0% Se
de comprobará
operaciones que
sobre bajas una vez
de abierta la
usuarios con petición, se
una dio de baja
variación al usuario
del en todos los
tiempo servicios
superior a corporativos
un día en menos de
24 horas
10.3 REGISTRO DE SUCESOS
59. Los sistemas de información qué procesen, transmitan o almacenen información deben
generar un registro de los accesos lógicos producidos, siempre que técnicamente sea
posible, y bajo las siguientes características:
 Este registro recogerá los sucesos en orden cronológico, posibilitando la
reconstrucción, revisión y examen de la secuencia de actividades relacionadas con un
determinado evento.
 El registro de sucesos será siempre obligatorio en todos los sistemas que contengan
información confidencial, así como en aquellos que conforman el perímetro de
Centro Criptológico Nacional 42

|  | externo |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Procedimiento <br> de que se trate | Bajas <br> personal <br> externo | N/A | Gestor de <br> incidencias | Responsable <br> de proyecto | Departamento <br> Sistemas |
| Procedimiento <br> de que se trate | Revisión <br> Permisos <br> de acceso <br> usuarios | 6 meses | Gestor <br> documental | Departamento <br> Sistemas | Departamento <br> Sistemas |
| Procedimiento <br> de que se trate | Revisión <br> permisos <br> de acceso <br> usuarios <br> admin | 3 meses | Gestor <br> documental | Departamento <br> Sistemas | Departamento <br> Sistemas |


|  | Identificador |  |  | Rango |  |  | Freq |  | Métrica |  |  | Objetivo |  |  | Descripción |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| XXXX |  |  | % |  |  | 1 / A |  |  | Porcentaje <br> de <br> operaciones <br> sobre bajas <br> de <br> usuarios con <br> una <br> variación <br> del <br> tiempo <br> superior a <br> un día |  | 0% |  |  | Se <br> comprobará <br> que <br> una vez <br> abierta la <br> petición, se <br> dio de baja <br> al usuario <br> en todos los <br> servicios <br> corporativos <br> en menos de <br> 24 horas |  |  |


---

<!-- Página 43 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
seguridad como los cortafuegos, con el objeto de aportar las pruebas necesarias para
el seguimiento de los mismos, en el caso de accesos no autorizados.
 El registro de accesos lógicos y su auditoria deben proporcionar trazabilidad sobre
los accesos al sistema, actividades de administración y otros eventos críticos.
 Tipo de actividades a registrar:
o I. Actividad sospechosa.
o II. Intentos de acceso no autorizado.
o III. Excepciones y otro tipo de actividad inusual.
o IV. Conexiones establecidas con éxito.
o V. Intentos de conexión denegados y rechazados.
o VI. Inicios de sesión válidos y erróneos.
o VII. Mensajes de error y alertas
o VIII. Tiempos de conexión elevados.
o IX. Uso concurrente de identificadores de usuario duplicados.
o X. Acceso remoto de proveedores para tareas de mantenimiento y diagnostico.
o XI. Actividad del cortafuegos.
o XII. Actividad del administrador.
o XIII. Inicio y apagado del sistema. Válido o fallido.
o XIV. Acceso fallido a ficheros u objetos.
o XV. Cambios en la política de seguridad. Logrados y fallidos.
o XVI. Cambios en los ficheros del sistema o en el registro.
o XVII. Copias de seguridad y restauración de las mismas.
o XVIII. Actividad del antivirus.
o XIX. En general, todas las actividades de administración de seguridad.
 Para facilitar la monitorización y la investigación de sucesos, los registros de
conexiones y otros eventos relativos a la seguridad serán almacenados durante, al
menos, <<señalar periodicidad>> (excepto los sujetos a la LOPD, que se custodiarán
por el periodo señalado en dicha ley).
 Dichos registros contendrán, como mínimo, la siguiente información:
o I. Identificador del Usuario.
o II. Actividad del usuario.
o III. Fecha / hora del inicio y fin de sesión.
o IV. Identificación del inicio y fin de sesión remota.
o V. Identificación de la identidad del terminal y/o su localización (si es posible).
o VI. Causa del evento de conexión (ej. acceso prohibido)
Centro Criptológico Nacional 43

---

<!-- Página 44 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
 El responsable del área o departamento correspondiente, o la persona que designe a
tal fin, revisaran el contenido de los registros de sucesos con una periodicidad
mínima de <<señalar periodicidad>>.
 El acceso a los registros estará restringido al responsable del área o departamento
correspondiente y a las personas designadas por este. Se evitara el acceso de
personas no autorizadas que puedan ver, alterar o eliminar registros.
 Los registros deberán ser protegidos y custodiados adecuadamente puesto que podrán
usarse en el seguimiento y obtención de pruebas de eventos o incidentes.
 Se usarán herramientas o utilidades que faciliten la revisión de los registros de
sucesos. Todas las redes y sistemas operativos dependientes de cada área o
departamento, deberán contar con medios para monitorizarlos y generar alarmas o
alertas.
 Los responsables de cada área o departamento deberán ser informados cuando los
registros de sucesos muestren evidencias de problemas en la seguridad de los
sistemas monitorizados.
 Todos los equipos que cuenten con un reloj interno estarán sincronizados entre sí
para garantizar la precisión de los sucesos registrados y permitir la correlación de los
diferentes eventos.
 Los registros de sucesos serán almacenados siguiendo lo establecido en la
planificación que establezca cada área o departamento sobre los sistemas
monitorizados de su responsabilidad, y protegidos según el nivel de clasificación de
la información tratada.
 En el caso de los servidores de ficheros los registros de sucesos serán almacenados
durante, al menos, <<señalar periodicidad, por ejemplo: 1 mes>>. En aquellos
equipos que contengan información sensible los registros de sucesos serán
almacenados durante un periodo no inferior a <<señalar periodicidad, por ejemplo: 1
año>>. No obstante, el periodo mínimo de almacenamiento podrá aumentar cuando
así lo exija la legislación vigente.
 La rotación de los registros de sucesos se realizará en base a los criterios propuestos
por la propia aplicación/producto/herramienta y en el tamaño de los ficheros de
registro de sucesos. Como norma, los registros de sucesos serán rotados con una
periodicidad <<señalar periodicidad, por ejemplo: mensual>> siempre que los
anteriores condicionantes lo permitan.
 Los ficheros de registro de sucesos estarán protegidos física y lógicamente para
prevenir su acceso no autorizado.
 Los sistemas de registro de sucesos no deben ser configurados para sobrescribir
registros antes de su rotación y archivado.
 Si la rotación automática de los ficheros de registro de sucesos no es posible, el
sistema deberá avisar cuando los ficheros de registro de sucesos se encuentren en el
límite de su almacenamiento y no sea posible registrar sucesos adicionales. Los
ficheros de registro de sucesos deberán ser archivados antes del restablecimiento o
borrado derivado de su rotación.
Centro Criptológico Nacional 44

---

<!-- Página 45 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
11. SOPORTE Y MODELOS
11.1. SOPORTE
60. El soporte necesario para la implantación de este procedimiento se realiza en base a los
siguientes elementos:
 Gestor de incidencias.
 Servicio de directorio del dominio del <<ORGANISMO>>.
 Dispositivo de generación de túneles VPN-SSL.
 Inventario de privilegios de acceso.
11.2. MODELOS
61. A continuación se detalla el modelo para el inventariado de privilegios de acceso de los
usuarios del <<ORGANISMO>>.
Nombre Cód. Sistema Fecha Permisos Vigente Fecha de Fecha
Usuario Usuario o de de Caducidad de
Servidor Alta Acceso Baja
Centro Criptológico Nacional 45

|  | Nombre |  |  | Cód. |  |  | Sistema |  |  | Fecha |  |  | Permisos |  |  | Vigente |  |  | Fecha de |  |  | Fecha |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Usuario |  |  | Usuario |  |  | o |  |  | de |  |  | de |  |  |  |  |  | Caducidad |  |  | de |  |
|  |  |  |  |  |  |  | Servidor |  |  | Alta |  |  | Acceso |  |  |  |  |  |  |  |  | Baja |  |


---

<!-- Página 46 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
ANEXO I:
MODELO DE SOLICITUD DE ALTA/BAJA DE RECURSOS IT
<<ORGANISMO>>
Solicitud de Alta/Baja de Recursos IT
[Información que deberá cumplimentar el Responsable de Asignación de Recursos IT
del <<ORGANISMO>>] para remitir al CAU <<señalar dirección de email>>
1. Datos del usuario
Apellidos y Nombre (*) DNI, NIE o Pasaporte (*)
Teléfono de contacto Empresa (*) (Sólo personal externo)
Proyecto Perfil (*)
Ubicación física
Fecha de incorporación ¿Necesita correo electrónico? (*)
2. Tipo de usuario (*)
⃝ Empleado público del <<ORGANISMO>>
⃝ Personal externo
3. Solicitante (*)
Apellidos y Nombre Cargo
Fecha de solicitud Teléfono + email
4. Motivo de la solicitud (*)
⃝ Alta en los Sistemas ⃝ Asignar equipo
⃝ Baja en los Sistemas ⃝ Retirar equipo
5. Equipo procedente de
⃝ <<U/OC>> del ⃝ Equipo propio
<<ORGANISMO>>
6. Software que se solicita instalar en el equipo
⃝ Software de Base
⃝ Otros (especificar)
7. Permisos adicionales requeridos (especificar)
Datos procedentes del CAU del <<ORGANISMO>>
8. Información del usuario
Usuario de dominio Dirección de correo electrónico
Contraseña (de un solo uso, en su caso)
Centro Criptológico Nacional 46

| 1. Datos del usuario |  |
| --- | --- |
| Apellidos y Nombre (*) | DNI, NIE o Pasaporte (*) |
| Teléfono de contacto | Empresa (*) (Sólo personal externo) |
| Proyecto | Perfil (*) |
| Ubicación física |  |
| Fecha de incorporación | ¿Necesita correo electrónico? (*) |


| 3. Solicitante (*) |  |
| --- | --- |
| Apellidos y Nombre | Cargo |
| Fecha de solicitud | Teléfono + email |


| 4. Motivo de la solicitud (*) |  |
| --- | --- |
| ⃝ Alta en los Sistemas | ⃝ Asignar equipo |
| ⃝ Baja en los Sistemas | ⃝ Retirar equipo |


| 5. Equipo procedente de |  |
| --- | --- |
| ⃝ <<U/OC>> del <br> <<ORGANISMO>> | ⃝ Equipo propio |


|  | Datos procedentes del CAU del <<ORGANISMO>> |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | 8. Información del usuario |  |  |  |  |  |
|  |  | Usuario de dominio |  |  | Dirección de correo electrónico |  |  |
|  |  | Contraseña (de un solo uso, en su caso) |  |  |  |  |  |


---

<!-- Página 47 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
9. Fecha de alta o baja en los sistemas
Para equipos del <<ORGANISMO>> Para equipos ajenos
10. Fecha en la que se ha 11. Fecha en la que se ha
proporcionado/retirado el equipo incluido/excluido del dominio
12. Comentarios
(*) Estos campo son obligatorios
Centro Criptológico Nacional 47

|  |  | 9. Fecha de alta o baja en los sistemas |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Para equipos del <<ORGANISMO>> |  |  | Para equipos ajenos |  |  |
|  |  | 10. Fecha en la que se ha |  |  | 11. Fecha en la que se ha |  |  |
|  |  | proporcionado/retirado el equipo |  |  | incluido/excluido del dominio |  |  |
|  |  | 12. Comentarios |  |  |  |  |  |


---

<!-- Página 48 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
ANEXO II:
MODELO DE SOLICITUD ALTA/BAJA DE TELEFONÍA FIJA
<<ORGANISMO>>
Solicitud de Alta/Baja de Telefonía Fija
[Información que deberá cumplimentar el Responsable de Asignación de Recursos IT
del <<ORGANISMO>>] para remitir al Grupo de Telefonía Fija del
<<ORGANISMO>> <<señalar dirección de email>>
1. Datos del usuario para el que se solicita teléfono fijo (*)
Apellidos y Nombre Ubicación física
2. Tipo de solicitud (*)
⃝ Alta
⃝ Baja
3. Solicitante (*)
Apellidos y Nombre Cargo
Fecha de solicitud Teléfono + email
4. Comentarios
Datos procedentes del Grupo de Telefonía Fija del <<ORGANISMO>>
5. Teléfono Fijo (*)
Número externo Extensión
6. Comentarios
(*) Estos campo son obligatorios
Centro Criptológico Nacional 48

| 1. Datos del usuario para el que se solicita teléfono fijo (*) |  |
| --- | --- |
| Apellidos y Nombre | Ubicación física |


| 3. Solicitante (*) |  |
| --- | --- |
| Apellidos y Nombre | Cargo |
| Fecha de solicitud | Teléfono + email |


|  | Datos procedentes del Grupo de Telefonía Fija del <<ORGANISMO>> |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | 5. Teléfono Fijo (*) |  |  |  |  |  |
|  |  | Número externo |  |  | Extensión |  |  |
|  |  | 6. Comentarios |  |  |  |  |  |


---

<!-- Página 49 de 49 -->

SIN CLASIFICAR
CCN-STIC-822 Procedimientos de Seguridad en el ENS. Anexo I.
ANEXO III:
MODELO DE SOLICITUD ALTA/BAJA DE TELEFONÍA MÓVIL Y/O DATOS EN
MOVILIDAD
<<ORGANISMO>>
Solicitud de Alta/Baja de Telefonía Móvil o Datos en Movilidad
[Información que deberá cumplimentar el Responsable de Asignación de Recursos IT
del <<ORGANISMO>>] para remitir al Grupo de Dispositivos Móviles del
<<ORGANISMO>> <<señalar dirección de email>>
1. Datos del usuario para el que se solicita teléfono móvil y/o datos en movilidad (*)
Apellidos y Nombre Ubicación física
2. Tipo de solicitud (*)
⃝ Teléfono móvil.
⃝ Tarjeta de Datos en Movilidad.
3. Solicitante (*)
Apellidos y Nombre Cargo
Fecha de solicitud Teléfono + email
4. Motivo de la solicitud (*)
⃝ Alta
⃝ Baja
5. Comentarios
Datos procedentes del Grupo de Dispositivos Móviles del <<ORGANISMO>>
6. Teléfono Móvil (*)
Número externo Extensión
Tarjeta de Datos en Movilidad
Número externo Extensión
7. Comentarios
(*) Estos campo son obligatorios
Centro Criptológico Nacional 49

| 1. Datos del usuario para el que se solicita teléfono móvil y/o datos en movilidad (*) |  |
| --- | --- |
| Apellidos y Nombre | Ubicación física |


| 3. Solicitante (*) |  |
| --- | --- |
| Apellidos y Nombre | Cargo |
| Fecha de solicitud | Teléfono + email |


|  | Datos procedentes del Grupo de Dispositivos Móviles del <<ORGANISMO>> |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | 6. Teléfono Móvil (*) |  |  |  |  |  |
|  |  | Número externo |  |  | Extensión |  |  |
|  |  | Tarjeta de Datos en Movilidad |  |  |  |  |  |
|  |  | Número externo |  |  | Extensión |  |  |
|  |  | 7. Comentarios |  |  |  |  |  |
