/* WHILE 
el bucle while repite un bloque de codigo mientras se cumpla x condicion
*/

// ================================ EJEMPLO ====================================

// let numero = prompt('ingrese un numero')

// while(!numero || isNaN(numero)){
//     alert('no ingresaste un dato numerico')
//     numero = prompt('ingresa un dato numerico porfavor')
// }

// cuando la condicion se deja de cumplir (osea pones un numero) el while se corta

// ================================  EJERCICIO ======================================
// KISS: keep it simple
// let string = prompt('ingrese un string')

// while(!string || !isNaN(string)){
//     alert('no ingresaste un string')
//     string = prompt('ingresa un string')
// }

// =================================== BUCLE FOR ====================================
/*
bucle de conteo: lo usamos cuando queremos repetir un bloque de codigo una determinada cantidad de veces
*/
// DRY: dont repeat yourself ( no repetir codigo, si queremos repetir algo siempre hay un codigo para simplificar)

// ================================== EJEMPLO =========================================

//     inicio;          limite;       ritmo de actualizacion;
// for(let iterador = 1; iterador <= 5; iterador = iterador + 1){
//     console.log('hola mundo ' + iterador)
// }

/*
 declaro nombre de variable (iterador o cualquiera pero comunmente se le pone asi (i) abreviado)
 empieza en 1;
 mientras mi i sea <= 5 va a repetir la accion;
 i cada vez que termine, se le suma un uno y asi pasa a dos y despues a tres, etc.
*/


// ================================== EJERCICIO FOR ====================================

// for(let i = 1; i <= 3; i = i + 1){
//     let nombre = prompt('ingrese un nombre')
//     alert(nombre)
// }

// =============================== ACUMULACION ==============================================
 
// let listaDeNombres = 'Lista de nombres: '
// for(let i = 1; i <= 3; i = i + 1){
//     let nombre = prompt('ingrese nombre')
//     listaDeNombres = listaDeNombres + '\n' + nombre
// }

// alert(listaDeNombres)


// ==================================== EJERCICIO =================================================


// pedirle al usuario 3 numeros y que aparezca un alert con la suma de los 3 resultados
// usar camelCase osea mayusculas en primer letra de c/palabra
// let listaDeNumeros = ''
// let sumaNumeros = 0
// for(let i = 1; i <= 3; i = i + 1){
//     let numero = Number(prompt('ingrese un numero'))
//     listaDeNumeros = listaDeNumeros + '\n' + numero
//     sumaNumeros = sumaNumeros + numero
// }

// alert(listaDeNumeros)
// alert(sumaNumeros)

// ================================== EJERCICIO ==========================================
function validarYSolicitarNumero() {
    let numero = prompt('ingrese un numero')
    while (!numero || isNaN(numero)){
        alert('dato no valido')
        numero = prompt('ingrese un numero')
    }
    return Number(numero)
}

// let edad = validarYSolicitarNumero()
// alert(edad)

let numero = validarYSolicitarNumero()
let sumaNumeros = 0 

for(let i = 1; i <= numero; i = i + 1) {
    numero = validarYSolicitarNumero()
    sumaNumeros = sumaNumeros + numero
}
alert(sumaNumeros)


// =========================== FUNCIONES ===================================================
// declarar una funcion:
// function saludar(nombre){
//     alert('Hola a ' + nombre)
// }

// // parametro es nombre, la x, osea el function saludar(nombre)
// // el argumetno es el valor que le doy a nombre osea saludar('pepe')
// // invocar a la funcion:
// saludar('juan')
// saludar('pepe')


//f(x) = 2x + 1
//f(x = 3) = 2 . 3 + 1
// f(x = 4) = 2 . 4 + 1
// es distinto


// ============================ EJERCICIO ================================================
// function sumar(numero1, numero2) {
//     let resultado = numero1 + numero2
//     console.log("El resultado de la suma es: " + resultado)
// }

// se pone en la consola calcularIva(precio osea numero) y ahi te da el iva


// =============================== EJERCICIO =============================================
// function calcularIva(precio) {
//     return precio * 0.21
// }

// si queremos que se muestre en caulquier lado que yo quiera ponemos return y
// mas abajo definimos donde queremos que se muestre el resultado

// let iva = calcularIva(100)

// alert(iva)
// console.log(iva)

// no hace falta crear let podemos poner:

// alert(calcularIva(200))
// y ahi aparece en el alert
