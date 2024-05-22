// js es un lenguaje interpretado por v8 engine
// es un lenguaje case sensitive (diferencia mayus y minus)

// alert('hola mundo')

// Tipos de datos:

/*
PRIMITIVOS:
strings: para representar texto
'hola', 'pepe', "hola mundo", '3', '1'

boolean: representar estados booleanos 
true, false


number: representar datos numericos
1, -1, 1.1, NaN (not a number), Infinity


null: representar nulidad osea nulo
null (sin comillas)

undefined: representar estado indefinido
undefined (sin comillas)

*/


/*
constructores:
number -> transformar un dato a Number
string -> transformar un dato a String
boolean -> transformar un dato a Boolean
*/

/* 
 Operadores Aritméticos:
devuelven strings:
+ -> concatenacion (ocurre cuando hay uno o más datos string)

devuelven tipo de datos numericos:
+  -> suma
- ->resta
* -> multiplicacion
/ -> division
% -> resto - porcentaje
*/

/*
1 + true
subproceso: 1 + Number(true)
subproceso: 1 + 1 = 2

el valor true le da el valor de 1

true + true 
Number (true) + Number (true)
1 + 1 = 2
*/

/* 
concatenación
1 + '1'
transoforma el number a formato string
String(1) + '1'
'1' + '1' = '11' porque me tiene que devolver un string


null + 'juan' = concatenacion = 'nulljuan'

5 + true = 6 

null + undefined = suma osea 
subproceso: Number(null) + Number(undefined)
0 + NaN = NaN
siempre que sumo, resto, divido, multiplico, o cualquier cosa que haga con un NaN da como resultado NaN (Not a Number)
undefined no esta bueno para sumar 
 */


/*
strings numericos son los numeros entre comillas
Number('pepe') = NaN
Number('1') = 1
'2' - true = 1

puedo hacer:
'2' * '2' = 4 (no string)

si combina numeros y letras es un string normal

CONCATENACION SOLO CON SUMA pero si hago - * / se transofrma a numero normal

'700000' + 10000
'70000010000' esta mal we

hay que pasarlo a numero
Number('700000') + 10000
*/

/*
ACTIVIDADES:

9 + 0 = type: numer rta: 9

0 + false = type: number rta: 0
como no hay string no es concatenacion entonces es suma, devuelve number

false * null = type: number rta: 0
no es nan porque el subrpoceso: false=0 y null=0 (usar la consola si no estoy segura pongo Number(null) y me da el valor)
0 * 0 = 0

'' + 0 = type: string (concatenacion) rta: '0'

'pepe' * 3 = type: number rta: NaN

undefined - null + 'pepe' = type: string rta: 'NaNpepe'
~
(undefined - null) + 'pepe'
 NaN + 'pepe' = concatenacion -> string 
 String(NaN) = 'NaN'
 'NaN' + 'pepe' = 'NaNpepe'
*/

/* COMPARADORES siempre devuelven booleanos (true o false solo esos)


== igualdad
=== igualdad de valor y tipo de dato (estricta igualdad)
!= diferencia
!== extricta diferencia
> (cuando son strings toma el valor del codigo ascii, es para hacer valores alfabeticos)
< (cuando son strings toma el valor del codigo ascii, es para hacer valores alfabeticos)
>= lo mismo
<= lo mismo


excepciones:
- null solo es igual a null o undefined
- NaN no es igual a NINGUN otro dato nisiquiera a NaN. En caso de querer comparar con NaN debemos usar la función isNaN()
*/

// isNaN() le doy un dato y me dice si es o no es un NaN


/*
VALORES THURTY Y FALSY:
Para saber si un valor es thurty o falsy debemos pasarlo a booleano
Boolean(valor_a_verificar) => true o false

FALSY:
'' 
0 
-0
NaN
false 
undefined
null

*/

// if(0) {
//     console.log('verdadero')
// } else {
//     console.log('falso')
// }


/*
8 == NaN -> type:boolean siempre es boolean cuando comparamos | rta: false nan no se puede comparar con nada 
5 == '5' -> type:boolean | rta: true compara iguadad de valor nomas
1 === Boolean('1') -> type:boolean | rta: false. porque como se que es un boolean es distinto tipo de dato. corta
3 + '' === '3' -> type:primero string ('3') y despues boolean | rta: true porque queda '3' === '3'
*/