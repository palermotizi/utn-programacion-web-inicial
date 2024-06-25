const btnComprarHTML = document.getElementById('btn-comprar')
const mostrarContadorHTML = document.getElementById('mostrarContador')
const btnDecrementarHTML = document.getElementById('btn-decrementar')
const contadorHTML = document.getElementById('contador')
const btnIncrementarHTML = document.getElementById('btn-incrementar')


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


/*
OTRA FORMA:

mostrarContadorHTML.style.display = "none"

const handleBuy = () => {
    btnComprarHTML.style.display = "none"
    mostrarContadorHTML.style.display = "flex"
}

btnComprarHTML.addEventListener('click', handleBuy)

const ocultarContador = () => {
    btnComprarHTML.style.display = "flex"    
    mostrarContadorHTML.style.display = "none"
}

const renderizarContador = () => {
    contadorHTML.innerText = estadoContador
}

const incrementarContador = () => {
    estadoContador += 1
    renderizarContador()
}
    
const decrementarContador = () => {
    if(estadoContador > 1){
        estadoContador -= 1
        renderizarContador()
    } else if (estadoContador === 1){
        volver()
    }
} 
    
let estadoContador = 1
renderizarContador()


btnIncrementarHTML.addEventListener('click', incrementarContador)
btnDecrementarHTML.addEventListener('click', decrementarContador)



*/