// let temperatura = prompt ('ingrese temperatura en grados celsius')
// if (temperatura === '' || temperatura === null || isNaN(temperatura)) {
//     console.log('temperatura no valida')
// } else if (temperatura <= 0) {
//     console.log('estado solido del agua')
// } else if (temperatura < 100) {
//     console.log('estado liquido del agua')
// } else {
//     console.log('estado gaseoso del agua')
// } 

// cuando queremos que se valide un num ponemos isNaN. hay que validar el cancel o aceptar vacio, por eso
// va temperatura === '' || temp === null || isNaN(temp)

let temperatura = prompt ('ingrese temperatura en grados celsius')
// if (temperatura === '' || temperatura === null || isNaN(temperatura)) {
    if (!temperatura|| isNaN(temperatura)) {
        // se puede poner el distinto de temperatura para resumir el '' y el null
    console.log('temperatura no valida')
} else {

    if (temperatura <= 0) {
        console.log('estado solido del agua')
    } else if (temperatura < 100) {
        console.log('estado liquido del agua')
    } else if (temperatura >= 100) {
        console.log('estado gaseoso del agua')
    } 
}

// ponemos adentro de un else para q primero valide el primer if y despues dentro de un else
// ponemos el if. pero es lo mismo funciona igual