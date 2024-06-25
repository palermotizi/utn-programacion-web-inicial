
// const login = () => {
//     const emailRequired = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

//     while (true){
//         email = prompt('ingrese su email')
//         if(emailRequired.test(email)){
//             break
//         } else {
//             console.log('Email no valido')
//         }
//     } 

//     while (true) {
//         password = prompt('ingrese una contraseña')

//         if (password === '' || password === null) {
//             alert('contraseña no valida')
//         } else if (password.length <= 6) {
//             alert('La contraseña debe tener más de 6 caracteres')
//         } else if (password == password.toLowerCase) {
//         alert('La contraseña debe tener minimo una letra mayuscula')
//         } else {
//             break
//         }
//     }
//     alert(`Usuario ${email} registrado con exito`)
// }

// login()
/*
================================================================================
*/

const tieneMayuscula = (palabra) => password.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validarPassword = (password) =>{
    return password && password.length > 6 && password.toLowerCase() !== password
}

// conviene tener las validaciones separadas del while asi podemos reutilizarlas y que sea mas facil de leer, funciona mejor. primero validaciones y despues while
// asi sabemos que retorna el usuario con user y password mejor

const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    let email = prompt('ingrese su email')
    while(!validacionEmail(email)){
        email = prompt('Error: ingrese nuevamente su email')
    }
    usuario.email = email

    let password = prompt('ingrese una contraseña que tenga mas de 6 caracteres y una mayuscula')
    while(!validarPassword(password)){
        password = prompt('Error contraseña invalida')
    }
    usuario.password = password

    alert(`usuario ${usuario.email} registrado con exito`)

    return usuario
}

console.log(login())


// const validacionOperacion = (numero1, numero2) => numeros.Number

// const calculadora = () => {
//     const numeros = {
//         numero1: null,
//         numero2: null
//     }
//     let numero1 = prompt('ingresa un numero')
//     while(!validacionOperacion(Number))
// }
// calculadora()

/*
version alternativa
    const OPERACIONES_DISPONIBLES = ['+', '-']
    return OPERACIONES_DISPONIBLES.includes(operacion)

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