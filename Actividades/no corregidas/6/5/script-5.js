/*
5)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null
*/

function sumar(a, b){
    let resultado = a + b
    return('el resultado es:' + resultado)
}

function restar(a, b){
    let resultado = a - b
    return('el resultado es: ' + resultado)
}

function calcular(operacion, a, b){
    if (operacion === '+') {
        return sumar(a,b)
    } else if (operacion === 'restar') {
        return restar(a, b)
    } else {
        return null
    }
}