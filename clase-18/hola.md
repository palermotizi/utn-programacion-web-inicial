const carritos = [
{
nombre: 'celular samsung',
id: 1,
precio: 500,
cantidad: 1,
thumbnail: 'https://http2.mlstatic.com/D_805856-MLA76904041445_062024-O.jpg'
},
{
nombre: 'auriculares samsung',
id: 2,
precio: 200,
cantidad: 2,
thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_662526-MLA52678025326_122022-O.webp'
},
{
nombre: 'cargador samsung',
id: 3,
precio: 250,
cantidad: 1,
thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_608890-MLA50500959226_062022-O.webp'
},
{
nombre: 'computadora Samsung Galaxy book3',
id: 4,
precio: 500,
cantidad: 0,
thumbnail:'https://medias.musimundo.com/medias/size515-179326-01.png?context=bWFzdGVyfGltYWdlc3w0MTY2MTl8aW1hZ2UvcG5nfGFHVTBMMmd6WkM4eE1EVTJPRFk0TmpBeE1ETTVPQzl6YVhwbE5URTFYekUzT1RNeU5sOHdNUzV3Ym1jfGEyYWY4ZmJjOGM2NDZlNWNlYWRmMmFmOTFjYTczNmFiNzJiNDFmMDk3ODgwNGExNGNjODYxMDI4ZTVlZmRiZjk'
},
]

const renderizarCarrito = (carritos) =>{
const carritoProductosHTML = document.getElementById('carritoProductos')
const totalHTML = document.getElementById('total')

    let total = 0
    let plantillaProductos = ''
    for(const carrito of carritos){
        total = total + (carrito.precio + carrito.cantidad)
        plantillaProductos = plantillaProductos + `
        <div>
            <h3>${carrito.nombre} #${carrito.id}</h3>
            <img width="100px" src="${carrito.thumbnail}"></img>
            <span>Precio unitario: ${carrito.precio} x ${carrito.cantidad} unidades</span>
            <span>Total: ${carrito.precio * carrito.cantidad}</span>
            <button>comprar</button>
            <button>cancelar</button>
        </div>
        <hr>
        `
    }

    carritoProductosHTML.innerHTML = plantillaProductos
    totalHTML.innerText = 'TOTAL: $' + total

}

renderizarCarrito(carritos)

const buscarPorId = (id) => {
for(const item of carritos){
if(item.id === id){
return item
}
}
}

const eliminarItemPorId = (id) =>{
const itemBuscado = carritos.find((carrito) => carrito.id === id)
if(itemBuscado){
if(itemBuscado.cantidad === 1){
const posicionItem = carritos.findIndex((carrito) => carrito.id === id)
carritos.splice(posicionItem, 1)
} else {
itemBuscado.cantidad = itemBuscado.cantidad - 1
}
renderizarCarrito(carritos)
}else {
console.error('ERROR: item con id inexistente')
}
console.log(itemBuscado)
}

eliminarItemPorId(2)

const agregarItemAlCarrito = (id) => {
const itemBuscado = carritos.find((carrito) => carrito.id === id)
if(itemBuscado){
if(itemBuscado.cantidad === 0){
const posicionItem = carritos.findIndex((carrito) => carrito.id === id)
carritos.push(posicionItem, 1)
} else {
itemBuscado.cantidad = itemBuscado.cantidad + 1
}
renderizarCarrito(carritos)
} else {
console.error('ERROR: id no existente')
}
console.log(itemBuscado)
}
agregarItemAlCarrito(4)
