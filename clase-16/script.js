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

    // let email = prompt('ingrese su email')
    // while(!validacionEmail(email)){
    //     email = prompt('Error: ingrese nuevamente su email')
    // }
    // usuario.email = email

    // let password = prompt('ingrese una contraseña que tenga mas de 6 caracteres y una mayuscula')
    // while(!validarPassword(password)){
    //     password = prompt('Error contraseña invalida')
    // }
    // usuario.password = password

    alert(`usuario ${usuario.email} registrado con exito`)    
}

localStorage.setItem(
    'usuario', 
    JSON.stringify(login())
)


// const validacionOperacion = (operacion) => {
//     const OPERACIONES_DISPONIBLES = ['+', '-']
//     for(let Operacion_disponible of OPERACIONES_DISPONIBLES){
//         if(Operacion_disponible === operacion){
//             return true
//         }
//     }
//     return false
// }

// const validacionNumero = (numero) => {
//     return numero && !isNaN(numero)
// }

// const calculadora = () =>{
//     let operacion = prompt('ingrese una operacion')
//     while(!validacionOperacion(operacion)){
//         operacion = prompt('error: operacion no disponible. Seleccione una operacion')
//     }
//     let a = prompt('ingrese un primer numero')
//     while(!validacionNumero(a)){
//         a = prompt('Error: numero invalido. ingrese otro')
//     }
//     let b = prompt('ingrese un segundo numero')
//     while(!validacionNumero(b)){
//         b= prompt('Error: numero invalido. ingrese otro numero')
//     }


//     let resultado = 0

//     if(operacion === '+'){
//         resultado = Number(a) + Number(b)
//     }else if(operacion === '-'){
//         resultado = Number(a) - Number(b)
//     }
//     alert(`el resultado de ${a} ${operacion} ${b} es ${resultado}`)
// }

// calculadora()


