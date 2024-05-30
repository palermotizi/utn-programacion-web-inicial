/*
============================== EJERCICIO ======================================

obtener cantidad total de caract de una lista de nombres:
dado el array de los nombres, por cada nombre sumar la cantidad de caracteres.
Al finalizar el recorrido decir 'la cantidad de caracteres es: (sumatoria caractetes)


ejemplo: ['pepe', 'juan'] la sumatoria es 8
*/

const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

let sumarCaracteres = 0

for (let index = 0; index < nombres3.length; index = index + 1){
    console.log(nombres3[index])
    sumarCaracteres = sumarCaracteres + nombres3[index].length
}

console.log('la cantidad de caracteres es: ', sumarCaracteres)

