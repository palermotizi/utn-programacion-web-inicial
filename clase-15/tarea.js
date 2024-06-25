/*
mejorar la calculadora con el mejor codigo de calculadora-mejorada
*/

const validacionOperacion = (operacion) => {
    const OPERACIONES_DISPONIBLES = ['+', '-']
    for(let Operacion_disponible of OPERACIONES_DISPONIBLES){
        if(Operacion_disponible === operacion){
            return true
        }
    }
    return false
}

const validacionNumero = (numero) => {
    return numero && !isNaN(numero)
}

const calculadora = () =>{
    let operacion = prompt('ingrese una operacion')
    while(!validacionOperacion(operacion)){
        operacion = prompt('error: operacion no disponible. Seleccione una operacion')
    }
    let a = prompt('ingrese un primer numero')
    while(!validacionNumero(a)){
        a = prompt('Error: numero invalido. ingrese otro')
    }
    let b = prompt('ingrese un segundo numero')
    while(!validacionNumero(b)){
        b= prompt('Error: numero invalido. ingrese otro numero')
    }


    let resultado = 0

    if(operacion === '+'){
        resultado = Number(a) + Number(b)
    }else if(operacion === '-'){
        resultado = Number(a) - Number(b)
    }
    alert(`el resultado de ${a} ${operacion} ${b} es ${resultado}`)
}

calculadora()
