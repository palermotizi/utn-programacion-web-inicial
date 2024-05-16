/*Operadores logicos */

/*
||NOT -> negacion (devuelve el valor opuesto booleano del dato)

|| OR -> o logico 
si el primer valor es un truly devuelve el primer valor
sino devuelve el segundo valor sea true o false
let resultado = true || 'pepe'

&& AND -> y logico
si el primer valor es un truly devuelve el segundo valor
sino (si el primero es falsy) devuelve el primero (opuesto al OR)

*/

/*
falsy:
false
0
-0
''
null
NaN
undefined
*/

/*

(0 * null) ---> true porque la negacion de 0 da true

!('' - 1) ----> false

!NaN      ----> true

*/

// let resultado = true || 'pepe' /*true */
// let resultado = '' || 'pepe' /*'pepe' */
// let resultado = '' || 0  /*  */
// console.log(resultado)
/*

quieor dejar pasar a alguien que tenga mas de 18 año o tenga mas de 100000

edad= 28
dinero = 100

condicion = edad > 18 || dinero >100000

condicion: true || false

condicion: true

==========================================================================

edad= 10
dinero= 1000000

condicion = edad > 18 || dinero >100000

condicion: false || true

condicion: true 

============================================================================
edad= 10
dinero= 10

condicion = edad > 18 || dinero >100000

condicion: false || false

condicion: false (el segundo)

==============================================================================

si el usuario tiene nombre o mail lo registro

nombre = 'pepe'
email = ''

condicion = nombre || email 

condicion = 'pepe' 

===============================================================================

nombre = ''
email = 'pepe@gmail.com'

condicion = nombre || email 

condicion = 'pepe@gmail.com' 

===============================================================================
nombre = ''
email = ''

condicion = nombre || email 

condicion = '' (segunda comilla vacia) 

============================================================================
nombre_usuario = solicitarNombre() ||  'unknown'

*/

/*
si dejo pasar al usuario si tiene mas de 18 y mas de 6000

edad = 70 
dinero = 90000

condicion = edad >= 18 && dinero > 6000

            true       && true

            true (segundo valor)

            ==============================================================
edad = 10 
dinero = 90000

condicion = edad >= 18 && dinero > 6000

            false      && true

            false (primer valor)
si no cumple la primer o segunda condicion es false porque es "y" y solo "y"

===============================================================================

edad = 60 
dinero = 900

condicion = edad >= 18 && dinero > 6000

            true      &&  false
            false (segundo valor)


*/

/*

*******************************************************************************

TABLAS DE LA VERDAD:

OR:
true || true = true (primer valor)
false || true = true
true || false = true
false || false = false

AND:
true && true = true (segundo valor)
false && true = false 
true && false = false
false && false = false

*******************************************************************************

*/



/*
EJERCICIO:

!(NaN == NaN) || 'pepe'
siemre que comparo nan con otro nan es un false
si niego un false da un true
y si tengo un false || true en un or: true


EJERCICIO:

'pepe' * 1 + '' && 0
string no se multiplica entonces:
'pepe' * 1 = NaN
NaN + '' = 'NaN'
'NaN' && 0 = 0
porque el primer valor es un true

EJERCICIO:

9 * '9' * null || 'pepe' && 'juan' 
9 * '9' = '81'
'81' * null = 0
0 || 'pepe' = 'pepe'
'pepe' && 'juan' = 'juan'
porque los dos son true elije al segundo 


EJERCICIO:

!('' + 0 - 0 * !null + false) && 'juan' || 'pepe' || 'maria'

'0' - 0 = 0
0 * true (1) = 0
0 + false(0) = 0
!0 = true

true && 'juan' = 'juan' (segundo valor)
'juan' || 'pepe' || 'maria' = devuelve el primer valor verdadero osea 'juan'

!false || true && false
se lee asi por orden de prioridad:
ORDEN -> NOT, AND, OR osea

=============================================================================
!false || {true && false} =

true || false =
true

=============================================================================
esto esta mal:
true || true && false
true && false = false

*/


/*
Variables:

sintaxis 

<tipo_variable> identificador = dato de la variable


*/
// el valor por defecto implicito es undefined a menos que lo defina
// Tiene hoisting


// // declaracion (var tipo de variable)
// // inicializar la variable (implicito)
// var edad 

// // inicializacion (explicito) (valor de la variable)
// var nombre = 'pepe'


// // reasignacion, le doy valor despues
// edad = 90

// // alert(nombre)
// // el console.log va despues de definir las variables sino me da undefined

// console.log(edad)
// console.log('pepe')




/*
===============================================================================
*/
// ============================= HOISTING =====================================
// si pongo esto:
// console.log(apellido)

// var apellido = 'suarez'

// hace esto 

// var apellido = undefined

// console.log(apellido)

// apellido = 'suarez'

// var nombre

// var nombre = 'pepe'

// console.log(nombre)

/*
VAR ESS 

tiene hoisting? SI
valor implicito en undefined? SI
se puede reasignar? SI
se puede redeclarar? SI

*/




// LET

// console.log(nombre) si la llamo antes de inicializar da error

// let edad 
// // declarando e inicializando variable de manera 
// let nombre = 'pepe'
// // let nombre = 

// console.log(edad)

// nombre = 'juan'

// console.log(nombre)


/*
LET ES6+ (EcmaScript 6)
tiene hoisting? NO
valor implicito en undefined? SI
se puede reasignar? SI
se puede redeclarar? NO (por el momento)
*/


/* 
tiene hoisting? NO
valor implicito en undefined? NO tengo que darle el valor
se puede reasignar? NO
se puede redeclarar? NO 
*/

// console.log(nombre) ¿hoisting?
// const nombre = 'pepe'
// // const nombre  ¿implicito?
// // nombre = 'juan' ¿reasignar? 
// console.log(nombre)


/*
Scope y block (bloque y alcance)
*/

// Crear un bloque de codigo
// var tiene alcance o scope global
// {
//     var nombre = 'pepe'
//     console.log(nombre)
// }
// console.log(nombre)



// let tiene alcance local
// {
//     let nombre = 'pepe'
//     console.log(nombre)
// }
// esto va a dar error
// console.log(nombre)


// SCOPE GLOBAL
// let nombre = 'juan'
// {
//     // SCOPE LOCAL pone los dos nombres
//     let nombre = 'pepe'
//     console.log(nombre)
// }

// console.log(nombre)



// scope global
// var nombre = 'juan'
// {
//     // scope local aca se sobreescribe y quedan los 2 nombres iguales
//         var nombre = 'pepe'
//         console.log(nombre)
// }

// console.log(nombre)



// let nombre = 'juan'
// {
//     // scope local puedo hacerlo como si fuese let o var
//         nombre = 'pepe'
//         console.log(nombre)
// }

// console.log(nombre)

// permite reutilizar nombres de variables
// let precio = 2000

// {
//     let precio = 20
//     {
//         let precio = 90
//     }
// }

// // no podemos repetir nombre de variables
// var precio_1 = 2000
// {
//     var precio_2 = 20
// }

// reasignando variable global
// let total = 0

// {
//     total = total + 20
// }

// console.log(total)


// si quiero dos variables nombre total
// let total = 0

// {
//     let total = 0 + 20
// }

// console.log(total)

// let nombre = 'pepe'

// {
//     let nombre = 'juan'
//     {
//         let nombre = 'maria'
//         // reasignacion
//     }
//     console.log(nombre)
// }

// console.log(nombre)






// ================================= PRACTICA ===================================

// let nombre = 'pedro'
// console.log(nombre) /*llama a pedro */
// {
//     let nombre = 'alexis'
//     {
//         let nombre = 'juan'
//         console.log(nombre) /*llama a juan */
//     }
//     console.log(nombre) /*llama a alexis */
//     {
//         nombre = 'damian'
//         console.log(nombre)/*llama a damian */
//     }
//     // nombre = 'maria'
//     console.log(nombre) /*llama a damian */
// }
// console.log(nombre) /*llama a pedro */







// IF (condicionar) 
/*
Si el usuario se llama pepe lo dejo pasar
*/

/*sintaxis:
if(condicion){
    bloque de codigo
} 
if verifica que la condicion sea un thruly
else se ejecuta cuando la condicion del if sea false

else SIEMPRE debe ir luego del cierre del bloque del if
*/

// let nombre = 'manuel'
//  if(nombre === 'pepe'){
//     console.log('te dejo pasar')
//  }
// else {
//     console.log('no te dejo pasar')
// }

// let email = prompt('ingresa tu email')
// console.log(email)
// // devuelve un null porque es falsy y se ejecuta el else
// if (email) {
//     console.log('correcto')
// } else {
//     console.log('ERROR: mail ingresado incorrectamente')
// }

// let edad = prompt ('ingresa tu edad')
// let lenguaje = prompt ('ingresa tu lenguaje favorito')
// if (edad > 16 && lenguaje === 'JS'){
//     console.log('Bienvenido al desarrollo frontend')
// } else {
//     console.log('No se puede ser perfecto')
// }

let edad = prompt ('ingresa tu edad')
let lenguaje = prompt ('ingresa tu lenguaje favorito')
if (edad > 16 && lenguaje === 'JS'){
    console.log('Bienvenido al desarrollo frontend')
} 
else if(edad > 14 && lenguaje == 'PHP'){
    console.log('bienvenido al desarrollo web backend')
} 
else {
    console.log('No se puede ser perfecto')
}