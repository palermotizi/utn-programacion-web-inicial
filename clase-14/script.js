/* 
=================================== ARRAYS ===================================
*/
/*en vez de listar asi con 50 variables */
let nombre1 = 'pepe'
let nombre2 = 'juan'
let nombre3 = 'ezequiel'

/*listamos con arrays, lista de elementos ordenados */
//position/index:   0       1        2
const nombres = ['pepe', 'juan', 'ezequiel']

console.log(nombres['1'])
console.log('Tengo ' + nombres.length + ' nombres')
/*accedemos a alguno de nuestros valores del array  */

/* length te cuenta los valores que tenes en la variable */

/*no siempre se pone const pero es buena practica hacerlo para evitar que lo cambien otros programadores */

/*ARRAYS OBJETOS Y FUNCIONES: siempre con const */

/*para js el array es un tipo de objeto, por eso se parece a lo de la clase pasada */


/*
======================== METODOS DE ARRAYS ====================================
como son metodos se ponen siempre los puntos al principio osea array.metodo()
*/

/*
.push() nos permite agregar un elemento al final de nuestro array y devuelve la nueva longitud (modifica al array original)
*/

nombres.push('maria')

console.log(nombres)


/*
.unshift() nos permite agregar un elemento al principio del array y devuelve la nueva longitud (modifica al array original)
*/

nombres.unshift('tata')

console.log(nombres)

/*si no pongo nombre=nombre.toUpperCase() no se pasa a mayuscula porque necesito llamar a la variable. osea si pongo nombre.toUpperCase() no se pasa a mayus (no modifica al array original ´pr si solo) */

let nombre = 'pepe'
nombre = nombre.toUpperCase()

console.log(nombre)

/*
.pop() elimina el ultimo elemento y lo retorna
.shift() elimina el primer elemento y lo retorna 
*/

nombres.pop()

console.log(nombres)

//let ultimoElemento = nombres.pop()

// console.log(ultimoElemento) devuelve el elemento eliminado

nombres.shift()

console.log(nombres)

//let primerElemento = nombres.shift()

// console.log(primerElemento) devuelve el elemento eliminado


/* SOLO FUNCIONA BIEN CON LOS ARRAYS DE STRING
.indexOf() devuelve la posicion de un string en el array de strings
*/

let posicionDeJuan = nombres.indexOf('juan')
console.log('La posicion de juan es ' + posicionDeJuan)

/*
.splice() recibe 3 parametros
el primero es desde donde va a posicionarse
segundo parametro cantidad de elementos que se quieran borrar
tercer parametro: elementos a agregar (ponemos el primer parametro, mponemos 0 en el segundo, en el tercero ponemos el string que queremos agregar)


*/

nombres.splice(posicionDeJuan, 1)
// nombres.splice(1, 1)



/*
================================ EJERCICIO ====================================
*/

const nombres2 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias'] 

let posicionDeEzequiel = nombres2.indexOf('ezequiel')

console.log('La posicion de ezequiel es: ' + posicionDeEzequiel)

const listaDeEliminados = nombres2.splice(posicionDeEzequiel, 0, 'lucas')

console.log(nombres2)
console.log('La lista de eliminados es: ', listaDeEliminados)

/*si quiero eliminar dos elementos que estan separados lo hacemos dos veces a esto, sino podemos crear una funcion que encierre a los dos que queremos eliminar */


/*
================================ EJERCICIO ====================================
*/


// const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

// eliminar a leonel
// eliminar al anterior a lucas
// agregar antes de abril a sofia sin eliminar a abril

// let posicionDeLeonel = nombres3.indexOf('leonel')
// console.log('La posicion de leonel es: ', posicionDeLeonel)

// nombres3.splice(posicionDeLeonel, 1)
// console.log(nombres3)


// let posicionDeLucas = nombres3.indexOf('lucas')
// console.log('La posicion de lucas es: ', posicionDeLucas)

// nombres3.splice(posicionDeLucas - 1, 1)
// console.log(nombres3)


// let posicionDeAbril = nombres3.indexOf('abril')
// console.log('La posicion de abril es: ', posicionDeAbril)

// nombres3.splice(posicionDeAbril, 0, 'sofia')
// console.log(nombres3)

// let posicionDeLeonel = nombres3.indexOf('leonel')
// nombres3.splice(posicionDeLeonel, 1)

// let posicionDeLucas = nombres3.indexOf('lucas')
// nombres3.splice(posicionDeLucas - 1, 1)

// let posicionDeAbril = nombres3.indexOf('abril')
// nombres3.splice(posicionDeAbril, 0, 'sofia')

// console.log(nombres3)
/*ahorramos codigo y no sucede el DRY :)*/



/*
============================= ULTIMOS ARRAYS ==================================
*/
// included:
// console.log(nombres3.includes('leonel'))

// const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

// console.log(nombres3[0])
// console.log(nombres3[1])
// console.log(nombres3[2])
// console.log(nombres3[3])
// console.log(nombres3[4])
// en vez de hacer eso hacemos:

// for(let index = 0; index < nombres3.length; index = index + 1){
//     console.log(nombres3[index])
// }

// for(let nombre of nombres3){
//     console.log(nombre)
// }

/*esto hace lo mismo que el for de arriba, es mas comodo y corto para escribir */

/*
================================== EJERCICIO ==================================
*/

const nombres5 = ['pepe', 'lucas', 'PEDRO', 'JuaN', 'Pedrin']

// // esto debe generar un segundo array con [PEDRO, JuaN] 


const estaEnMinuscula = (str) => str == str.toLowerCase()
const tieneMayuscula = (str) => !estaEnMinuscula(str)

const mayusculas = []
for (let nombre of nombres5) {
    if (tieneMayuscula(nombre)){
        mayusculas.push(nombre)
    }
}

console.log(mayusculas)

// let string = 'pepE'

// let estaEnMinuscula = string === string.toLowerCase() 

// let tieneMayuscula = !estaEnMinuscula //opuesta a estaEnMinuscula, si el de arriba esta en true, este esta en false y viceversa

// console.log(tieneMayuscula)


const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
]

/*crear un array llamado samsung que contenga los productos que sean de la marca samsung */

// const samsung = []

// for (let marca of productos){
//     if(productos.marca === 'samsung'){
//         samsung.push(marca)
//     }
// }

// console.log(marca)


const samsung = []

for (const producto of productos){
    /*se usa for(const) porque son objetos, siemore se usa const en objetos */
    if(producto.marca === 'samsung'){
        samsung.push(producto)
    }    
}

console.log(samsung)

