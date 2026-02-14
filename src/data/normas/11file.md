---
**CreationDate:** D:20260209165800+01'00'
**ModDate:** D:20260209165800+01'00'
---

<!-- Página 1 de 21 -->

Política de Seguridad de las TIC
CCN-STIC 004
Manejo de información con clasificación
Difusión Limitada, o equivalente, en nube pública
Febrero 2026

![Imagen 1 - Página 1](11file_assets\pagina1_img1.png)

![Imagen 2 - Página 1](11file_assets\pagina1_img2.jpeg)

---

<!-- Página 2 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
Edita:
 Centro Criptológico Nacional, 2026
Fecha de Edición: febrero 2026
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

![Imagen 1 - Página 2](11file_assets\pagina2_img1.png)

---

<!-- Página 3 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
ÍNDICE
1. INTRODUCCIÓN ................................................................................................................................ 4
2. OBJETO Y ALCANCE .......................................................................................................................... 7
3. CONCEPTOS CLAVE ........................................................................................................................... 8
4. ORGANIZACIÓN DE LA SEGURIDAD: ROLES Y RESPONSABILIDADES ............................................... 11
5. ESTRATEGIA DE ACREDITACIÓN DE SISTEMAS DL EN NUBE PÚBLICA .............................................. 13
6. MEDIDAS DE SEGURIDAD PARA NUBE DL ....................................................................................... 15
6.1 SEGURIDAD PERSONAL ................................................................................................................ 15
6.2 SEGURIDAD FÍSICA ........................................................................................................................ 16
6.3 SEGURIDAD DE LA INFORMACIÓN ................................................................................................ 16
7. DECLARACIÓN DE APLICABILIDAD VINCULADA ............................................................................... 18
8. DEFINICIONES ................................................................................................................................. 19
9. REFERENCIAS .................................................................................................................................. 20
10. ABREVIATURAS .............................................................................................................................. 21
Centro Criptológico Nacional 3

---

<!-- Página 4 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
1. INTRODUCCIÓN
a) Escalabilidad de recursos. Los servicios que se contratan a un Proveedor de
Servicios en la Nube (En inglés, Cloud Service Provider - CSP) presentan la
ventaja de ser escalables. De hecho, los CSP suelen ofrecer distintas formas de
contratación que permiten pago por uso, realizar una reserva de recursos con
unas determinadas capacidades, o distintas combinaciones de ambos. En las
arquitecturas tradicionales on premise existen riesgos de infradimensionar los
recursos y tener problemas de caída de servicio por saturación en picos de
trabajo; o bien sobredimensionarlos, lo que supondría una infrautilización de la
infraestructura y un desperdicio de parte de la inversión realizada. Con la
flexibilidad de los servicios en la nube estas decisiones y riesgos asociados
desaparecen.
b) Disponibilidad de recursos. Hoy en día, los servicios en la nube permiten
acceder a los recursos desde cualquier ubicación con una disponibilidad casi
absoluta. Esto contrasta fuertemente con los servicios on premise, que en
muchos casos necesitan desplegar costosas infraestructuras para poder ofrecer
un nivel de capilaridad aceptable y llegar a todos sus usuarios.
c) Despliegue dinámico de arquitectura. Dado que es el CSP el que despliega la
arquitectura y el cliente de servicios en la nube (En inglés, Cloud Service
Customer - CSC) solamente paga por su uso, no es necesario realizar grandes
inversiones para utilizar una arquitectura determinada y es igualmente sencillo
implementar cambios profundos dentro de la arquitectura para adaptarse a las
necesidades cambiantes sin que ello suponga un coste inasumible. En los
sistemas on premise suelen hacerse grandes inversiones a la hora de desplegar
un sistema que deben ser rentabilizadas antes de realizar cambios profundos.
Esto impide, en ocasiones, realizar adaptaciones dinámicas e incluso obliga a
depender de sistemas legacy considerados ineficientes o inseguros.
Centro Criptológico Nacional 4

![Imagen 1 - Página 4](11file_assets\pagina4_img1.png)

![Imagen 2 - Página 4](11file_assets\pagina4_img2.png)

![Imagen 3 - Página 4](11file_assets\pagina4_img3.png)

![Imagen 4 - Página 4](11file_assets\pagina4_img4.png)

![Imagen 5 - Página 4](11file_assets\pagina4_img5.png)

![Imagen 6 - Página 4](11file_assets\pagina4_img6.png)

![Imagen 7 - Página 4](11file_assets\pagina4_img7.png)

![Imagen 8 - Página 4](11file_assets\pagina4_img8.png)

![Imagen 9 - Página 4](11file_assets\pagina4_img9.png)

![Imagen 10 - Página 4](11file_assets\pagina4_img10.png)

![Imagen 11 - Página 4](11file_assets\pagina4_img11.png)

![Imagen 12 - Página 4](11file_assets\pagina4_img12.png)

![Imagen 13 - Página 4](11file_assets\pagina4_img13.png)

![Imagen 14 - Página 4](11file_assets\pagina4_img14.png)

![Imagen 15 - Página 4](11file_assets\pagina4_img15.png)

![Imagen 16 - Página 4](11file_assets\pagina4_img16.png)

![Imagen 17 - Página 4](11file_assets\pagina4_img17.png)

---

<!-- Página 5 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
a) Modificación del perímetro. Uno de los pilares fundamentales de las
arquitecturas de seguridad de sistemas on premise es la protección del
perímetro y de los flujos de información intercambiados, especialmente en el
ámbito de los sistemas clasificados. En este nuevo paradigma, el perímetro se
amplia y se desdibuja hasta tal punto que es prácticamente imposible
delimitarlo, por lo que la protección debe aplicarse en el propio dato. Esto no
quiere decir, ni mucho menos, que el perímetro haya dejado de protegerse o
puedan relajarse dichas medidas de protección, únicamente que el perímetro
pasará a ser el propio dato cuando no pueda determinarse otro mayor. Es lo
que hoy se conoce como el paradigma de Seguridad Centrada en el Dato o Data
Centric Security, del cual los servicios en la nube son un caso particular.
b) Pérdida de gobierno del dato. En los sistemas on premise, el propietario del
Sistema y de la información suele ser el mismo, por lo tanto, es el único
responsable de proteger su información. En los servicios en la nube, el acceso
y la custodia de dicha información podría delegarse en un tercero. En estos
casos, será necesario analizar qué tipo de información y en qué condiciones es
posible realizar esta delegación. Este aspecto adquiere especial relevancia en
el ámbito de la información clasificada.
c) Aislamiento de datos. La tenencia múltiple y la compartición de recursos son
características frecuentes de la computación en la nube. Esto incrementa el
riesgo de divulgación no autorizada de información por fallos de separación en
el almacenamiento, la memoria, el enrutamiento, etc.
Centro Criptológico Nacional 5

![Imagen 1 - Página 5](11file_assets\pagina5_img1.png)

![Imagen 2 - Página 5](11file_assets\pagina5_img2.png)

![Imagen 3 - Página 5](11file_assets\pagina5_img3.png)

![Imagen 4 - Página 5](11file_assets\pagina5_img4.png)

![Imagen 5 - Página 5](11file_assets\pagina5_img5.png)

![Imagen 6 - Página 5](11file_assets\pagina5_img6.png)

![Imagen 7 - Página 5](11file_assets\pagina5_img7.png)

![Imagen 8 - Página 5](11file_assets\pagina5_img8.png)

![Imagen 9 - Página 5](11file_assets\pagina5_img9.png)

![Imagen 10 - Página 5](11file_assets\pagina5_img10.png)

![Imagen 11 - Página 5](11file_assets\pagina5_img11.png)

![Imagen 12 - Página 5](11file_assets\pagina5_img12.png)

![Imagen 13 - Página 5](11file_assets\pagina5_img13.png)

![Imagen 14 - Página 5](11file_assets\pagina5_img14.png)

![Imagen 15 - Página 5](11file_assets\pagina5_img15.png)

![Imagen 16 - Página 5](11file_assets\pagina5_img16.png)

![Imagen 17 - Página 5](11file_assets\pagina5_img17.png)

![Imagen 18 - Página 5](11file_assets\pagina5_img18.png)

![Imagen 19 - Página 5](11file_assets\pagina5_img19.png)

![Imagen 20 - Página 5](11file_assets\pagina5_img20.png)

![Imagen 21 - Página 5](11file_assets\pagina5_img21.png)

![Imagen 22 - Página 5](11file_assets\pagina5_img22.png)

![Imagen 23 - Página 5](11file_assets\pagina5_img23.png)

![Imagen 24 - Página 5](11file_assets\pagina5_img24.png)

![Imagen 25 - Página 5](11file_assets\pagina5_img25.png)

---

<!-- Página 6 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
Centro Criptológico Nacional 6

![Imagen 1 - Página 6](11file_assets\pagina6_img1.png)

![Imagen 2 - Página 6](11file_assets\pagina6_img2.png)

![Imagen 3 - Página 6](11file_assets\pagina6_img3.png)

![Imagen 4 - Página 6](11file_assets\pagina6_img4.png)

![Imagen 5 - Página 6](11file_assets\pagina6_img5.png)

![Imagen 6 - Página 6](11file_assets\pagina6_img6.png)

![Imagen 7 - Página 6](11file_assets\pagina6_img7.png)

![Imagen 8 - Página 6](11file_assets\pagina6_img8.png)

![Imagen 9 - Página 6](11file_assets\pagina6_img9.png)

![Imagen 10 - Página 6](11file_assets\pagina6_img10.png)

![Imagen 11 - Página 6](11file_assets\pagina6_img11.png)

![Imagen 12 - Página 6](11file_assets\pagina6_img12.png)

![Imagen 13 - Página 6](11file_assets\pagina6_img13.png)

![Imagen 14 - Página 6](11file_assets\pagina6_img14.png)

![Imagen 15 - Página 6](11file_assets\pagina6_img15.png)

![Imagen 16 - Página 6](11file_assets\pagina6_img16.png)

![Imagen 17 - Página 6](11file_assets\pagina6_img17.png)

![Imagen 18 - Página 6](11file_assets\pagina6_img18.png)

---

<!-- Página 7 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
2. OBJETO Y ALCANCE
a) Solamente intervienen dos actores: cliente (CSC) y proveedor (CSP). El primero
es el organismo que consume el servicio y el segundo el que lo ofrece, total o
parcialmente. En caso de existir más actores deberá analizarse hasta donde
alcanzan las responsabilidades en toda la cadena de suministros.
b) El CSP y el CSC no pertenecen a la misma organización. Esto implica que el
Responsable del Sistema (RSIS) formado por la infraestructura subyacente y el
de cada sistema alojado en esa nube son diferentes.
Centro Criptológico Nacional 7

![Imagen 1 - Página 7](11file_assets\pagina7_img1.png)

![Imagen 2 - Página 7](11file_assets\pagina7_img2.png)

![Imagen 3 - Página 7](11file_assets\pagina7_img3.png)

![Imagen 4 - Página 7](11file_assets\pagina7_img4.png)

![Imagen 5 - Página 7](11file_assets\pagina7_img5.png)

![Imagen 6 - Página 7](11file_assets\pagina7_img6.png)

![Imagen 7 - Página 7](11file_assets\pagina7_img7.png)

![Imagen 8 - Página 7](11file_assets\pagina7_img8.png)

![Imagen 9 - Página 7](11file_assets\pagina7_img9.png)

![Imagen 10 - Página 7](11file_assets\pagina7_img10.png)

![Imagen 11 - Página 7](11file_assets\pagina7_img11.png)

![Imagen 12 - Página 7](11file_assets\pagina7_img12.png)

![Imagen 13 - Página 7](11file_assets\pagina7_img13.png)

![Imagen 14 - Página 7](11file_assets\pagina7_img14.png)

![Imagen 15 - Página 7](11file_assets\pagina7_img15.png)

![Imagen 16 - Página 7](11file_assets\pagina7_img16.png)

![Imagen 17 - Página 7](11file_assets\pagina7_img17.png)

---

<!-- Página 8 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
3. CONCEPTOS CLAVE
a) Seguridad del CSP. Seguridad de los servicios que el CSP provee al cliente, así
como aquellos acuerdos contractuales y de nivel de servicio que establezca con
cada CSC. Incluye la seguridad de la infraestructura desde la que se prestan los
citados servicios.
b) Seguridad del CSC. Seguridad de los servicios que el CSC despliega sobre la nube
que no son propietarios del CSP, así como las configuraciones que realiza, en
base a sus capacidades, dependiendo de las posibilidades del servicio que haya
contratado.
a) Seguridad Física: El CSP es responsable de la seguridad física de los centros de
datos que albergan la infraestructura, incluyendo el control de acceso a las
instalaciones, sistemas de refrigeración, fuentes de energía, etc.
b) Red y Virtualización: Esto incluye la protección de las capas de red y
virtualización que permiten la creación y ejecución de máquinas virtuales, así
como de otros recursos de infraestructura. Aunque la configuración es
responsabilidad del CSC, el CSP asegura que las conexiones de red y los
hipervisores estén debidamente actualizados y protegidos contra
vulnerabilidades.
c) Hardware: El CSP gestiona y asegura el hardware subyacente (servidores,
almacenamiento, dispositivos de red, etc.), incluyendo las actualizaciones del
hipervisor y del SO del host (no el de la VM), firmware del hardware físico e
infraestructura de red física.
d) Monitorización y Respuesta a Incidentes: El CSP debe implementar
herramientas de monitorización para supervisar el rendimiento y la seguridad
de los sistemas subyacentes que proporcionan los servicios en la nube, y estar
preparado para responder a incidentes de seguridad que afecten a sus sistemas
coordinándose principalmente con las autoridades competentes y, si fuese
necesario, con los CSC, aunque en la mayor parte de las veces únicamente se
requerirá notificar al cliente.
Centro Criptológico Nacional 8

![Imagen 1 - Página 8](11file_assets\pagina8_img1.png)

![Imagen 2 - Página 8](11file_assets\pagina8_img2.png)

![Imagen 3 - Página 8](11file_assets\pagina8_img3.png)

![Imagen 4 - Página 8](11file_assets\pagina8_img4.png)

![Imagen 5 - Página 8](11file_assets\pagina8_img5.png)

![Imagen 6 - Página 8](11file_assets\pagina8_img6.png)

![Imagen 7 - Página 8](11file_assets\pagina8_img7.png)

![Imagen 8 - Página 8](11file_assets\pagina8_img8.png)

![Imagen 9 - Página 8](11file_assets\pagina8_img9.png)

![Imagen 10 - Página 8](11file_assets\pagina8_img10.png)

![Imagen 11 - Página 8](11file_assets\pagina8_img11.png)

![Imagen 12 - Página 8](11file_assets\pagina8_img12.png)

![Imagen 13 - Página 8](11file_assets\pagina8_img13.png)

![Imagen 14 - Página 8](11file_assets\pagina8_img14.png)

![Imagen 15 - Página 8](11file_assets\pagina8_img15.png)

![Imagen 16 - Página 8](11file_assets\pagina8_img16.png)

---

<!-- Página 9 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
a) Gestión de Sistemas Operativos: Aunque el CSP proporciona el mecanismo de
aprovisionamiento de máquinas virtuales, el CSC es responsable de configurar y
mantener el sistema operativo (SO) de esas máquinas virtuales, incluyendo su
bastionado. La gestión de parches y actualizaciones de seguridad será
compartida.
b) Configuración de Red y Seguridad: El CSC debe configurar las reglas de firewall,
gestionar las subredes y asegurarse de que la configuración de red sea segura y
adecuada para sus aplicaciones. Esto también incluye la gestión de VPNs,
balanceadores de carga y otros componentes de red según el entorno operativo.
c) Gestión de Aplicaciones y Datos: Todas las aplicaciones, bases de datos y datos
que el CSC despliega sobre la infraestructura como servicio (IaaS) del CSP son de
su exclusiva responsabilidad. Esto incluye la configuración, mantenimiento,
cifrado y otros aspectos de seguridad, copias de configuraciones, aplicaciones y
datos, incluida su posible restauración.
d) Gestión de Identidades y Accesos (IAM): El CSC debe gestionar las identidades
de los usuarios y sus permisos de acceso a los recursos en la nube, utilizando
servicios como IAM para definir políticas de acceso y autenticación.
e) Monitorización y Respuesta a Incidentes: El CSC debe implementar
herramientas de monitorización para supervisar el rendimiento y la seguridad
de los sistemas bajo su responsabilidad que ejecuta en la nube, y estar
preparado para responder a incidentes de seguridad que afecten a sus
aplicaciones o datos. Estará asimismo pendiente de la información sobre
eventos que le facilite de forma automática el CSP en relación a los elementos
de infraestructura subyacente que puedan llegar a afectarle.
Centro Criptológico Nacional 9

![Imagen 1 - Página 9](11file_assets\pagina9_img1.png)

![Imagen 2 - Página 9](11file_assets\pagina9_img2.png)

![Imagen 3 - Página 9](11file_assets\pagina9_img3.png)

![Imagen 4 - Página 9](11file_assets\pagina9_img4.png)

![Imagen 5 - Página 9](11file_assets\pagina9_img5.png)

![Imagen 6 - Página 9](11file_assets\pagina9_img6.png)

![Imagen 7 - Página 9](11file_assets\pagina9_img7.png)

![Imagen 8 - Página 9](11file_assets\pagina9_img8.png)

![Imagen 9 - Página 9](11file_assets\pagina9_img9.png)

![Imagen 10 - Página 9](11file_assets\pagina9_img10.png)

![Imagen 11 - Página 9](11file_assets\pagina9_img11.png)

![Imagen 12 - Página 9](11file_assets\pagina9_img12.png)

![Imagen 13 - Página 9](11file_assets\pagina9_img13.png)

![Imagen 14 - Página 9](11file_assets\pagina9_img14.png)

![Imagen 15 - Página 9](11file_assets\pagina9_img15.png)

![Imagen 16 - Página 9](11file_assets\pagina9_img16.png)

![Imagen 17 - Página 9](11file_assets\pagina9_img17.png)

![Imagen 18 - Página 9](11file_assets\pagina9_img18.png)

![Imagen 19 - Página 9](11file_assets\pagina9_img19.png)

---

<!-- Página 10 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
Centro Criptológico Nacional 10

![Imagen 1 - Página 10](11file_assets\pagina10_img1.png)

![Imagen 2 - Página 10](11file_assets\pagina10_img2.png)

![Imagen 3 - Página 10](11file_assets\pagina10_img3.png)

![Imagen 4 - Página 10](11file_assets\pagina10_img4.png)

![Imagen 5 - Página 10](11file_assets\pagina10_img5.png)

![Imagen 6 - Página 10](11file_assets\pagina10_img6.png)

![Imagen 7 - Página 10](11file_assets\pagina10_img7.png)

![Imagen 8 - Página 10](11file_assets\pagina10_img8.png)

![Imagen 9 - Página 10](11file_assets\pagina10_img9.png)

![Imagen 10 - Página 10](11file_assets\pagina10_img10.png)

![Imagen 11 - Página 10](11file_assets\pagina10_img11.png)

![Imagen 12 - Página 10](11file_assets\pagina10_img12.png)

---

<!-- Página 11 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
4. ORGANIZACIÓN DE LA SEGURIDAD: ROLES Y RESPONSABILIDADES
Centro Criptológico Nacional 11

![Imagen 1 - Página 11](11file_assets\pagina11_img1.png)

![Imagen 2 - Página 11](11file_assets\pagina11_img2.png)

![Imagen 3 - Página 11](11file_assets\pagina11_img3.png)

![Imagen 4 - Página 11](11file_assets\pagina11_img4.png)

![Imagen 5 - Página 11](11file_assets\pagina11_img5.png)

![Imagen 6 - Página 11](11file_assets\pagina11_img6.png)

![Imagen 7 - Página 11](11file_assets\pagina11_img7.png)

![Imagen 8 - Página 11](11file_assets\pagina11_img8.png)

![Imagen 9 - Página 11](11file_assets\pagina11_img9.png)

![Imagen 10 - Página 11](11file_assets\pagina11_img10.png)

![Imagen 11 - Página 11](11file_assets\pagina11_img11.png)

![Imagen 12 - Página 11](11file_assets\pagina11_img12.png)

![Imagen 13 - Página 11](11file_assets\pagina11_img13.png)

![Imagen 14 - Página 11](11file_assets\pagina11_img14.png)

![Imagen 15 - Página 11](11file_assets\pagina11_img15.png)

![Imagen 16 - Página 11](11file_assets\pagina11_img16.png)

![Imagen 17 - Página 11](11file_assets\pagina11_img17.png)

![Imagen 18 - Página 11](11file_assets\pagina11_img18.png)

![Imagen 19 - Página 11](11file_assets\pagina11_img19.png)

![Imagen 20 - Página 11](11file_assets\pagina11_img20.png)

![Imagen 21 - Página 11](11file_assets\pagina11_img21.png)

![Imagen 22 - Página 11](11file_assets\pagina11_img22.png)

![Imagen 23 - Página 11](11file_assets\pagina11_img23.png)

![Imagen 24 - Página 11](11file_assets\pagina11_img24.png)

![Imagen 25 - Página 11](11file_assets\pagina11_img25.png)

![Imagen 26 - Página 11](11file_assets\pagina11_img26.png)

![Imagen 27 - Página 11](11file_assets\pagina11_img27.png)

![Imagen 28 - Página 11](11file_assets\pagina11_img28.png)

![Imagen 29 - Página 11](11file_assets\pagina11_img29.png)

![Imagen 30 - Página 11](11file_assets\pagina11_img30.png)

![Imagen 31 - Página 11](11file_assets\pagina11_img31.png)

![Imagen 32 - Página 11](11file_assets\pagina11_img32.png)

![Imagen 33 - Página 11](11file_assets\pagina11_img33.png)

![Imagen 34 - Página 11](11file_assets\pagina11_img34.png)

![Imagen 35 - Página 11](11file_assets\pagina11_img35.png)

![Imagen 36 - Página 11](11file_assets\pagina11_img36.png)

![Imagen 37 - Página 11](11file_assets\pagina11_img37.png)

![Imagen 38 - Página 11](11file_assets\pagina11_img38.png)

![Imagen 39 - Página 11](11file_assets\pagina11_img39.png)

![Imagen 40 - Página 11](11file_assets\pagina11_img40.png)

![Imagen 41 - Página 11](11file_assets\pagina11_img41.png)

![Imagen 42 - Página 11](11file_assets\pagina11_img42.png)

![Imagen 43 - Página 11](11file_assets\pagina11_img43.png)

![Imagen 44 - Página 11](11file_assets\pagina11_img44.png)

![Imagen 45 - Página 11](11file_assets\pagina11_img45.png)

![Imagen 46 - Página 11](11file_assets\pagina11_img46.png)

![Imagen 47 - Página 11](11file_assets\pagina11_img47.jpeg)

![Imagen 48 - Página 11](11file_assets\pagina11_img48.png)

![Imagen 49 - Página 11](11file_assets\pagina11_img49.png)

![Imagen 50 - Página 11](11file_assets\pagina11_img50.png)

---

<!-- Página 12 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
Centro Criptológico Nacional 12

![Imagen 1 - Página 12](11file_assets\pagina12_img1.png)

![Imagen 2 - Página 12](11file_assets\pagina12_img2.png)

![Imagen 3 - Página 12](11file_assets\pagina12_img3.png)

![Imagen 4 - Página 12](11file_assets\pagina12_img4.png)

![Imagen 5 - Página 12](11file_assets\pagina12_img5.png)

![Imagen 6 - Página 12](11file_assets\pagina12_img6.png)

![Imagen 7 - Página 12](11file_assets\pagina12_img7.png)

![Imagen 8 - Página 12](11file_assets\pagina12_img8.png)

![Imagen 9 - Página 12](11file_assets\pagina12_img9.png)

![Imagen 10 - Página 12](11file_assets\pagina12_img10.png)

![Imagen 11 - Página 12](11file_assets\pagina12_img11.png)

![Imagen 12 - Página 12](11file_assets\pagina12_img12.png)

![Imagen 13 - Página 12](11file_assets\pagina12_img13.png)

![Imagen 14 - Página 12](11file_assets\pagina12_img14.png)

![Imagen 15 - Página 12](11file_assets\pagina12_img15.png)

![Imagen 16 - Página 12](11file_assets\pagina12_img16.png)

![Imagen 17 - Página 12](11file_assets\pagina12_img17.png)

![Imagen 18 - Página 12](11file_assets\pagina12_img18.png)

![Imagen 19 - Página 12](11file_assets\pagina12_img19.png)

![Imagen 20 - Página 12](11file_assets\pagina12_img20.png)

![Imagen 21 - Página 12](11file_assets\pagina12_img21.png)

![Imagen 22 - Página 12](11file_assets\pagina12_img22.png)

![Imagen 23 - Página 12](11file_assets\pagina12_img23.png)

![Imagen 24 - Página 12](11file_assets\pagina12_img24.png)

![Imagen 25 - Página 12](11file_assets\pagina12_img25.png)

![Imagen 26 - Página 12](11file_assets\pagina12_img26.png)

![Imagen 27 - Página 12](11file_assets\pagina12_img27.png)

![Imagen 28 - Página 12](11file_assets\pagina12_img28.png)

![Imagen 29 - Página 12](11file_assets\pagina12_img29.png)

![Imagen 30 - Página 12](11file_assets\pagina12_img30.png)

![Imagen 31 - Página 12](11file_assets\pagina12_img31.png)

![Imagen 32 - Página 12](11file_assets\pagina12_img32.png)

![Imagen 33 - Página 12](11file_assets\pagina12_img33.png)

![Imagen 34 - Página 12](11file_assets\pagina12_img34.png)

![Imagen 35 - Página 12](11file_assets\pagina12_img35.png)

![Imagen 36 - Página 12](11file_assets\pagina12_img36.png)

![Imagen 37 - Página 12](11file_assets\pagina12_img37.png)

![Imagen 38 - Página 12](11file_assets\pagina12_img38.png)

![Imagen 39 - Página 12](11file_assets\pagina12_img39.png)

![Imagen 40 - Página 12](11file_assets\pagina12_img40.png)

![Imagen 41 - Página 12](11file_assets\pagina12_img41.png)

![Imagen 42 - Página 12](11file_assets\pagina12_img42.png)

![Imagen 43 - Página 12](11file_assets\pagina12_img43.png)

![Imagen 44 - Página 12](11file_assets\pagina12_img44.png)

![Imagen 45 - Página 12](11file_assets\pagina12_img45.png)

![Imagen 46 - Página 12](11file_assets\pagina12_img46.png)

![Imagen 47 - Página 12](11file_assets\pagina12_img47.png)

![Imagen 48 - Página 12](11file_assets\pagina12_img48.png)

![Imagen 49 - Página 12](11file_assets\pagina12_img49.png)

---

<!-- Página 13 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
5. ESTRATEGIA DE ACREDITACIÓN DE SISTEMAS DL EN NUBE PÚBLICA
a) Certificación del CSP: El sistema de información del CSP sobre el que el CSC
desplegará su servicio deberá contar con una Certificación de conformidad con
el ENS en categoría ALTA que, además, incluya todos aquellos servicios del CSP
que utiliza el CSC.
b) Aprobación de SES y SEP: Los productos y servicios que proporcionan seguridad
en el sistema final deberán estar aprobados para manejar información
DIFUSIÓN LIMITADA o equivalente e incluidos en el listado de productos y
servicios aprobados del CPSTIC (guía CCN-STIC 105 Catálogo de Productos y
Servicios de Seguridad de las Tecnologías de la Información y la Comunicación).
Se prestará especial atención a los medios de cifra y a los elementos de
protección de perímetro que garantizan la separación entre dominios de
seguridad.
El listado de SES y SEP que deben estar aprobados incluirá, como mínimo, todos
aquellos servicios cuya funcionalidad principal es la seguridad, pero no está
limitado a ellos. Por ejemplo, en un modelo de nube en el que el CSP y los CSC
tienen distintos propietarios y en el que, además, pueden compartir hardware
distintos CSC, el hipervisor se convierte en un elemento clave desde el punto de
vista de la seguridad, dado que garantiza la separación y el aislamiento entre los
sistemas de los CSC alojados en la infraestructura física subyacente del CSP. Por
ello deberá ser considerado un SES y superar un proceso de aprobación.
c) Acreditación de Seguridad: El sistema de información compuesto por el
CSP+CSC que ofrece el servicio final deberá haber superado un proceso de
acreditación de seguridad para DL. Por lo tanto, en este tipo de escenarios se
contemplará el cumplimiento de requisitos por parte de la organización
responsable de la información clasificada (el CSC), así como la evidencia de que
cumple los suyos el proveedor donde se externaliza (el CSP). En el caso concreto
de DL, para la acreditación de seguridad se exigirá:
a. Certificación de Conformidad con el ENS en categoría ALTA. El propio
Real Decreto del ENS, en su artículo 2.2 señala: “Asimismo, sin perjuicio
de la aplicación de la Ley 9/1968, de 5 de abril, de Secretos Oficiales y
otra normativa especial, este real decreto será de aplicación a los
sistemas que tratan información clasificada, pudiendo resultar necesario
adoptar medidas complementarias de seguridad, específicas para dichos
sistemas, derivadas de los compromisos internacionales contraídos por
España o de su pertenencia a organismos o foros internacionales”, serán
de aplicación a los sistemas que manejan información clasificada las
medidas, requisitos y refuerzos de seguridad del Anexo II del Real
Decreto 311/2022, de 3 de mayo, por el que se regula el Esquema
Nacional de Seguridad, para sistemas de categoría ALTA.
Centro Criptológico Nacional 13

![Imagen 1 - Página 13](11file_assets\pagina13_img1.png)

![Imagen 2 - Página 13](11file_assets\pagina13_img2.png)

![Imagen 3 - Página 13](11file_assets\pagina13_img3.png)

---

<!-- Página 14 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
El CSP debe considerar el nivel ALTO en las cinco dimensiones de la
seguridad que contempla el ENS. Para elaborar la Declaración de
Aplicabilidad, se tendrán en cuenta algunas diferencias en función de si
la organización es un CSP o un CSC.
b. Cumplimiento de requisitos específicos necesarios para sistemas que
manejan información clasificada del grado DL, o equivalente, que se
detallan en otros apartados de este documento. Para la definición de
dichos requisitos se han tenido en cuenta los criterios definidos en la
normativa OTAN en general y más concretamente los definidos en la
norma AC/322-D(2019)0032-REV2 (INV) NATO Cloud Computing
Directive, concretada en el documento Technical and Implementation
Directive for the Protection of NATO Information within Public Cloud-
Based Communication and Information Systems, del 19 de marzo de
2024.
Centro Criptológico Nacional 14

![Imagen 1 - Página 14](11file_assets\pagina14_img1.png)

![Imagen 2 - Página 14](11file_assets\pagina14_img2.png)

![Imagen 3 - Página 14](11file_assets\pagina14_img3.png)

![Imagen 4 - Página 14](11file_assets\pagina14_img4.png)

![Imagen 5 - Página 14](11file_assets\pagina14_img5.png)

![Imagen 6 - Página 14](11file_assets\pagina14_img6.png)

![Imagen 7 - Página 14](11file_assets\pagina14_img7.png)

![Imagen 8 - Página 14](11file_assets\pagina14_img8.png)

![Imagen 9 - Página 14](11file_assets\pagina14_img9.png)

![Imagen 10 - Página 14](11file_assets\pagina14_img10.png)

![Imagen 11 - Página 14](11file_assets\pagina14_img11.png)

![Imagen 12 - Página 14](11file_assets\pagina14_img12.png)

![Imagen 13 - Página 14](11file_assets\pagina14_img13.png)

![Imagen 14 - Página 14](11file_assets\pagina14_img14.png)

![Imagen 15 - Página 14](11file_assets\pagina14_img15.png)

![Imagen 16 - Página 14](11file_assets\pagina14_img16.png)

![Imagen 17 - Página 14](11file_assets\pagina14_img17.png)

![Imagen 18 - Página 14](11file_assets\pagina14_img18.png)

![Imagen 19 - Página 14](11file_assets\pagina14_img19.png)

![Imagen 20 - Página 14](11file_assets\pagina14_img20.png)

---

<!-- Página 15 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
6. MEDIDAS DE SEGURIDAD PARA NUBE DL
31. Con independencia del detalle de las medidas de seguridad, que pueden
consultarse en un documento anexo, vinculado a esta política que recoge las
directrices para elaborar la Declaración de Aplicabilidad, se concretan en este
apartado algunos conceptos relevantes. No obstante, se dispone de la guía CCN-
STIC 001 SEGURIDAD DE LAS TECNOLOGÍAS DE LA INFORMACIÓN Y LAS
COMUNICACIONES QUE MANEJAN INFORMACIÓN CLASIFICADA EN LA
ADMINISTRACIÓN, que contiene la política de seguridad para cualquier sistema
que maneje información clasificada, con independencia de su grado de
clasificación y de su posible externalización en un CSP, o no, incluyendo múltiples
consideraciones generales de seguridad.
32. Medidas y requisitos de seguridad: Las medidas y requisitos de seguridad que
recoge esta política son de aplicación sin perjuicio de las que están recogidas en la
guía CCN-STIC 499 Arquitectura de seguridad para servicios en la nube, que define
el modelo de arquitectura y medidas de seguridad adecuadas para proteger los
servicios externalizados en la nube. Debe considerarse que cualquier marco de
seguridad, corresponde a los mínimos exigibles, debiendo cada organización
potenciarlos en base al riesgo o en base a otra normativa asimismo de obligado
cumplimiento.
6.1 SEGURIDAD PERSONAL
33. El personal con rol de administrador de seguridad o del sistema del CSC debe
disponer de la Habilitación Personal de Seguridad (HPS) de grado de clasificación
Reservado o superior.
34. No se requerirá HPS al personal del sistema del CSP siempre y cuando pueda
demostrar mediante auditorías de cumplimiento continuas e independientes que
cumplen las siguientes medidas:
a) Todo individuo que desarrolle funciones de administrador de sistemas como
parte del CSP será limitado sistemática y procedimentalmente de tal forma que
no podrá impactar en la confidencialidad y la integridad de la información
manejada por el sistema TIC. Estas limitaciones incluirán:
 Acceso físico controlado y limitado a los centros de datos donde se
maneja la información DL.
 Acceso acotado temporalmente a los recursos del sistema TIC que
maneja información DL.
 Acceso acotado en alcance a los recursos del sistema TIC que maneja
información DL.
 Asignación automática controlada por API de tareas administrativas al
personal del CSP.
Centro Criptológico Nacional 15

---

<!-- Página 16 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
 Imposibilidad o baja probabilidad de localizar física o electrónicamente
información DL en la provisión del servicio de nube pública.
 Segregación de responsabilidades estricta y finamente graduada entre
las diferentes funciones asignadas al personal del CSP para reducir el
riesgo de colusión.
b) Cualquier personal contratado por el CSP que pueda ser consciente de la
presencia de un sistema TIC que maneja información DL en regiones específicas
de su provisión de servicio cloud público deberá ser objeto de un Non-Disclosure
Agreements (NDAs) y deberá operar en el contexto de un contrato clasificado
con el CSC.
6.2 SEGURIDAD FÍSICA
6.3 SEGURIDAD DE LA INFORMACIÓN
a) Estarán sometidos exclusivamente a la jurisdicción española.
b) Estarán localizados en territorio nacional.
c) En el caso de sistemas que manejen exclusivamente información clasificada de
otros ámbitos (OTAN, UE, etc.) deberán cumplirse las restricciones de
sometimiento jurisdiccional impuestas por la normativa que sea de aplicación.
39. Ubicación geográfica: El CSP debe proporcionar al CSC información relativa a la
ubicación geográfica de su información (datos, logs, backups, etc…),
especialmente de la clasificada del grado DIFUSIÓN LIMITADA, o equivalente, que
en todo caso deberá estar ubicada en sistemas acreditados o aprobados por la
autoridad correspondiente.
40. Gestión y administración de sistemas: Las medidas de seguridad para la gestión
de sistemas serán aplicables tanto al CSP como al CSC:
Centro Criptológico Nacional 16

![Imagen 1 - Página 16](11file_assets\pagina16_img1.png)

![Imagen 2 - Página 16](11file_assets\pagina16_img2.png)

![Imagen 3 - Página 16](11file_assets\pagina16_img3.png)

![Imagen 4 - Página 16](11file_assets\pagina16_img4.png)

![Imagen 5 - Página 16](11file_assets\pagina16_img5.png)

![Imagen 6 - Página 16](11file_assets\pagina16_img6.png)

![Imagen 7 - Página 16](11file_assets\pagina16_img7.png)

![Imagen 8 - Página 16](11file_assets\pagina16_img8.png)

![Imagen 9 - Página 16](11file_assets\pagina16_img9.png)

![Imagen 10 - Página 16](11file_assets\pagina16_img10.png)

![Imagen 11 - Página 16](11file_assets\pagina16_img11.png)

![Imagen 12 - Página 16](11file_assets\pagina16_img12.png)

![Imagen 13 - Página 16](11file_assets\pagina16_img13.png)

![Imagen 14 - Página 16](11file_assets\pagina16_img14.png)

![Imagen 15 - Página 16](11file_assets\pagina16_img15.png)

![Imagen 16 - Página 16](11file_assets\pagina16_img16.png)

![Imagen 17 - Página 16](11file_assets\pagina16_img17.png)

---

<!-- Página 17 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
a) El plano de control de la nube (a nivel de CSP) y del sistema virtualizado
alojado en la misma (a nivel de CSC) no debe trascender a los propios sistemas
acreditados, es decir, no serán accesibles desde otras ubicaciones físicas o por
personal ajeno o sin las debidas autorizaciones / habilitaciones de seguridad.
b) Los sistemas o equipos desde los que un usuario administrador administra el
servicio y/o los sistemas, deberán estar acreditados al mismo nivel de
clasificación que el sistema que administran. Estos sistemas deberán estar
alojados en zonas de seguridad (ZAP o ZAR)
Centro Criptológico Nacional 17

![Imagen 1 - Página 17](11file_assets\pagina17_img1.png)

![Imagen 2 - Página 17](11file_assets\pagina17_img2.png)

![Imagen 3 - Página 17](11file_assets\pagina17_img3.png)

![Imagen 4 - Página 17](11file_assets\pagina17_img4.png)

![Imagen 5 - Página 17](11file_assets\pagina17_img5.png)

![Imagen 6 - Página 17](11file_assets\pagina17_img6.png)

![Imagen 7 - Página 17](11file_assets\pagina17_img7.png)

![Imagen 8 - Página 17](11file_assets\pagina17_img8.png)

---

<!-- Página 18 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
7. DECLARACIÓN DE APLICABILIDAD VINCULADA
36. La Declaración de Aplicabilidad asociada a esta política, se ha elaborado como
anexo a la misma en la guía CCN-STIC 004 Anexo I Declaración de Aplicabilidad.
Centro Criptológico Nacional 18

---

<!-- Página 19 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
8. DEFINICIONES
Información clasificada y que, por lo tanto, requiere protección de
Información Roja
acuerdo a la Normativa Protección de Información Clasificada
generada por la Oficina Nacional de Seguridad (ONS).
Información no clasificada o información clasificada que ha sido
Información Negra
cifrada con mecanismos de cifra aprobados por la autoridad
competente y que, por lo tanto, puede protegerse con los mismos
medios que la información no clasificada.
Información Información que demanda un alto nivel de seguridad en alguna de
sensible sus dimensiones.
Asuntos, actos, documentos, informaciones, datos y objetos cuyo
Información
conocimiento por personas no autorizadas puedan dañar o poner
Clasificada
en riesgo la seguridad y defensa del Estado.
Ámbito de origen al que pertenece la información, es decir, la
Ámbito de
organización o nación propietaria de la información clasificada a
seguridad
la que puede tener acceso, si es necesario. Por ejemplo: OTAN, UE
o NACIONAL.
Máximo grado de la información clasificada dentro de un mismo
Nivel de seguridad
ámbito de seguridad.
Colección de activos, uniformemente protegidos, habitualmente
Dominio de
bajo una única autoridad. Suelen corresponder a un mismo ámbito
seguridad
y nivel de seguridad.
Nube privada Una nube privada virtual (VPC) es una versión virtual de una red
virtual física, implementada dentro de la red del CSP.
Centro Criptológico Nacional 19

---

<!-- Página 20 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
9. REFERENCIAS
[1] AC/322(CP/4)WP(2021)0003-REV2 DRAFT Technical and Implementation Directive
for the Protection of NATO Information within Public Cloud-Based Communication
and Information Systems (CIS).
[2] CCN-STIC 105 Catálogo de Productos y Servicios de Seguridad TIC (CPSTIC).
[3] CCN-STIC-498 Arquitectura mulidominio de Puesto de Trabajo (Endpoint Seguro).
[4] CCN-STIC-807 Criptología de empleo en el Esquema Nacional de Seguridad.
[5] Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de
2016, relativo a la protección de las personas físicas en lo que respecta al
tratamiento de datos personales y a la libre circulación de estos datos.
[6] CCN-STIC 302 Interconexión de Sistemas TIC que manejan Información nacional
clasificada en la administración, Julio 2012.
[7] CCN-STIC-301 Medidas de Seguridad de las TIC a implementar en Sistemas
Clasificados, Mayo 2020 [desplazada por el ENS categoría ALTA (RD 311/2022)]
[8] CCN-STIC-001 Política de Seguridad de las TIC, Junio 2016.
[9] CCN-STIC-305 Destrucción y Sanitización de soportes informáticos, Mayo 2017.
Centro Criptológico Nacional 20

---

<!-- Página 21 de 21 -->

Manejo de información con clasificación Difusión Limitada, o equivalente,
en nube pública
CCN-STIC-004
10. ABREVIATURAS
CCN Centro Criptológico Nacional
CNI Centro Nacional de Inteligencia
CPSTIC Catálogo de Productos de Seguridad de las Tecnologías de la
Información y la Comunicación
CSC Cloud Service Customer
CSP Cloud Service Provider
DLP Data Loss Prevention
ENECSTI Esquema Nacional de Evaluación y Certificación de la Seguridad de las
Tecnologías de la Información
ENS Esquema Nacional de Seguridad
HPS Habilitación Personal de Seguridad
HSM Hardware Security Modules
HTTPS Hypertext Transfer Protocol Secure
IaaS Infrastructure as a Service
KMS Key Management System
MV Máquina Virtual
ONS Oficina Nacional de Seguridad
PaaS Platform as a Service
PES Procedimiento de Empleo Seguro
RPO Recovery Point Objetive (Objetivo punto de recuperación)
RSIS Responsable del Sistema
RTO Recovery Time Objetive (Objetivo tiempo de recuperación)
SaaS Software as a Service
SDN Software Defined Network
SLA Acuerdo de servicio
SO Sistema Operativo
STIC Seguridad de las Tecnologías de la Información y la Comunicación
TIC Tecnologías de la Información y la Comunicación
TLS Transport Layer Security
VM Virtual Machine
VPN Virtual Private Network
Centro Criptológico Nacional 21