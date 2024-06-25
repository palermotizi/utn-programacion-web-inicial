const tieneMayuscula = (palabra) => password.toLowerCase() !== palabra

const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validarPassword = (password) =>{
    return password && password.length >= 6 && password.toLowerCase() !== password
}

const solicitarDatos = (objeto) => {
    let dato = prompt(objeto.mensaje)
    while(!objeto.fn_validacion(dato)){
        dato = prompt(objeto.error)
    }
    return dato
}
// para cambiar los mensajes cuando queramos sin hacerlo manual buscando uno a uno hacemos esto
const DATOS = {
    EMAIL: {
        mensaje: 'ingrese email',
        error: 'error: email invalido',
        fn_validacion: validacionEmail
    },
    PASSWORD: {
        mensaje: 'ingrese contraseña',
        error:'error: contraseña no valida',
        fn_validacion: validarPassword
    }
}

const login = () => {
    const usuario = {
        email: null,
        password: null
    }

    usuario.email = solicitarDatos = (DATOS.EMAIL)
    usuario.password = solicitarDatos = (DATOS.PASSWORD)

    alert(`usuario ${usuario.email} registrado con exito`)

    return usuario
}

login()