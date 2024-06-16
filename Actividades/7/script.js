const contadorHTML = document.getElementById('contador')
const btnComprarHTML = document.querySelector('.btn-comprar')
const btnIncrementarHTML = document.querySelector('.btn-incrementar')
const btnDecrementarHTML = document.querySelector('.btn-decrementar')
const mostrarContadorHTML = document.querySelector('.mostrarContador')


const renderizarContador = () => {
    contadorHTML.innerText = estadoContador
}

const ocultarContador = () => {
    mostrarContadorHTML.hidden = true
    btnComprarHTML.hidden = false
}
    
const mostrarContador = () => {
    mostrarContadorHTML.hidden = false
    btnComprarHTML.hidden = true
}
    


const incrementarContador = () => {
    estadoContador += 1
    renderizarContador()
}
    
const decrementarContador = () => {
    if(estadoContador > 1){
        estadoContador -= 1
        renderizarContador()
    } else {
        estadoContador = 1
        renderizarContador()
        ocultarContador()
    }
}



let estadoContador = 1
renderizarContador()



btnComprarHTML.addEventListener('click', () => {
    renderizarContador()
    mostrarContador()
})

btnIncrementarHTML.addEventListener('click', incrementarContador)
btnDecrementarHTML.addEventListener('click', decrementarContador)
