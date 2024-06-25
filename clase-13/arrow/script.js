/*
ARROW FUNCTIONS: 
se pueden abreviar. la flecha es el return, por eso queda abreviado. cuando faltan las llaves, la flecha se convierte en return


crear una funcyion que dado 3 valores nos devuevla la sumatoria
esta igual que con function
*/
/*no tiene hoisting, no se puede redeclarar en el mismo bloque, son mejores */
// const calcularSumatoria = (a,b,c) => a + b + c
// console.log(calcularSumatoria(1,2,3))


/*las FUNCTIONS tienen hoisting, las podemos declarar mas de una vez(dos veces la misma funcion y return y eso*/

// function sumar(a,b){
//     a = Number(a)
//     b = Number(b)
//     return a + b
// }
// console.log(sumar(8,8))


/*validar string con esto vemos uqe no siempre podemos abreviar, conviene que hagamos la function asi y listo. cuando hay if o multiples retornos no se puede abreviar, no conviene.*/

// const solicitar_y_validar_string = () => {
//     let stringSolicitado = prompt('ingrese un dato')
//     while(!stringSolicitado || !isNaN(stringSolicitado)){
//         alert('error datosolicitado debe ser un string')
//         stringSolicitado = prompt('ingrese el dato')
//     }
//     return stringSolicitado
// }

// solicitar_y_validar_string()

// =================================EJERCICIOS======================================
// function sumar(a,b){
//     a = Number(a)
//     b = Number(b)
//     return a + b
// }

const sumar = (a,b) => a + b

console.log(sumar(3,5))

// function numeroMayor(a,b){
//     if(a>b){
//         return a
//     } else {
//         return b
//     }
// } 

const numeroMayor = (a,b) => {
        if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(numeroMayor(1,2))

// function generarEmail(nombreDeUsuario){
//     return (nombreDeUsuario + '@gmail.com')
// }

const generarEmail = (nombreDeUsuario) => nombreDeUsuario + '@gmail.com'


console.log(generarEmail('pepe'))

