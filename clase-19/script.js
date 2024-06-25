const alertar = () => {
    alert('hola mundo')
}

const btn2HTML = document.getElementById('btn-2')


btn2HTML.onclick = alertar 

// mismos selectores de css para seleccionar por clase osea el .clase (para id es # pero se recomienda para esto el getelementbyid)

// esta es la mejor forma para trabajar con js
const btn3HTML = document.querySelector('.btn-3')

// btn3HTML.addEventListener('click', alertar)
btn3HTML.addEventListener('mouseover', alertar)

/*
En html tendremos un numero que se mostrará en un span, dicho numero será inicialmente 1
Debemos crear el numero mediante JS 
Habrá un botón <button>+</button> 
Cuando ese boton sea clickeado, el numero deberá incrementarse en 1

Crear el boton para decrementar
(opcional) que no se pueda decrementar a menos de 1 
*/ 

// para no repetir linea de codigo, solo ponemos renderizarContador()
const contadorHTML = document.getElementById('contador')
const btnIncrementarHTML = document.querySelector('.btn-incrementar')
const btnDecrementarHTML = document.querySelector('.btn-decrementar')
const errorContadorHTML = document.querySelector('.error-contador')
const renderizarError = (textoError) => {
    errorContadorHTML.innerText = textoError
}

// economizar funciones, es mucho mejor asi que poner en cada variable de incrementar o decrementar el renderizarError('')
const limpiarError = () => {
    if(errorContadorHTML.innerText){
    renderizarError('')
    }
}

const renderizarContador = () => {
    contadorHTML.innerText = estadoContador
}

const incrementarContador = () => {
    estadoContador = estadoContador + 1
    renderizarContador()
    // para que se elimine el error cuando incremento 
    limpiarError()
}

const decrementarContador = () => {
    if(estadoContador > 1){
        // se puede usar el sugar sintax -= || --
        estadoContador = estadoContador - 1
        limpiarError()
        renderizarContador()
    }else {
        renderizarError('No se puede decrementar a 0')
    }
}

let estadoContador = 1
renderizarContador()


btnIncrementarHTML.addEventListener('click', incrementarContador)
btnDecrementarHTML.addEventListener('click', decrementarContador)
// poner handle en incremnetar y decrementar y en todos los lados donde estene sas variables


/*
========================= FORMULARIOS ===========================
*/
/*
nunca mas alertas ni prompts, solo console.log para ver como va quedando
*/
const formLoginHTML = document.getElementById('form-login')



// funciones asociadas a eventos se pone handle y el nombre de la variable. las func handle siempre teiene acceso al evento
// evento: objeto que se pasa por parametro cuando se ejecuta la funcion
const handleLogin = (evento) => {
    // asi prevenimos que se recargue la pag al enviarse el form
    evento.preventDefault()
    console.log('formulario enviado')
    // aparece un minisegundo porque los submit recargan la apgina por defecto
    console.dir(formLoginHTML.password.value)
    console.dir(formLoginHTML.username.value)
}

formLoginHTML.addEventListener('submit', handleLogin)
// no poner () despues del handlelogin porque sino se invoca y da error

// a partir de aca podemos hacer todo lo que aprendimos pero con un login, por ejemplo el localstorage, podemos validarlo, etc
