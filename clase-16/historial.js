const tieneMayuscula = (palabra) => password.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validarPassword = (password) =>{
    return password && password.length > 6 && password.toLowerCase() !== password
}

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
    // usuario.password = password

    alert(`usuario ${usuario.email} registrado con exito`)    
    return usuario
}
const usuario = login()

localStorage.setItem(
    'usuario', 
    JSON.stringify(usuario)
)

// const guardarEnHistorial = (objeto) => {
//     // Obtener el historial actual desde localStorage o un array vacío si no existe
//     const historial = obtenerHistorial()

//     // Agregar el objeto al historial
//     historial.push(objeto)

//     // Guardar el historial actualizado en localStorage
//     localStorage.setItem('historial', JSON.stringify(historial))
// }

// // Función para obtener el historial del localStorage
// const obtenerHistorial = () => {
//     // Intentar obtener el historial del localStorage
//     const historialGuardado = localStorage.getItem('historial')

//     // Si el historial es null, devolver un array vacío
//     if (historialGuardado === null) {
//         // Guardar un array vacío en localStorage
//         localStorage.setItem('historial', JSON.stringify([]))
//         return []
//     }

//     // Si hay un historial guardado, parsearlo desde JSON y devolverlo
//     return JSON.parse(historialGuardado)
// }

// login()
// console.log(obtenerHistorial())

if(localStorage.getItem('historial') === null){
    localStorage.setItem('historial', JSON.stringify([]))
}
const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))
const guardarEnHistorial = (objeto) =>{
    const historial = obtenerHistorial()
    historial.push(objeto)
    return localStorage.setItem('historial', JSON.stringify(historial))
}

 
// const productos = [
//     {
//         nombre: 'tv samsung',
//         precio: 3000
//     },
//     {
//         nombre: 'tv samsung',
//         precio: 3000
//     },
//     {
//         nombre: 'tv samsung',
//         precio: 3000
//     },
// ]

// let listaProductos = ''

// for(const producto of productos){
//     listaProductos = listaProductos + `
//     Producto: 
//     `
// }

/*caso correcto pero hacerlo por mi cuenta */
const renderizarHistorial = () =>{
  const historial = obtenerHistorial()
  let listaHistorial = ''
  for(const obj of historial){
    listaHistorial = listaHistorial + `
    Accion: ${obj.accion}
    Operacion: ${obj.operacion}
    Numeros: ${obj.a}, ${obj.b}
    Resultado: ${obj.resultado}
    fecha: ${obj.fecha}
    `
  }
  return listaHistorial
}
alert(renderizarHistorial())

