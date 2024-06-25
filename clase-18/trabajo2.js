
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
    const carritoProductoHTML = document.getElementById('carritoProducto')
    const precioTotalHTML = document.getElementById('precioTotal')
    
    let precioTotal = 0
    let plantillaProductos = ''
    for(const carrito of carritos){
        precioTotal = precioTotal + (carrito.precio * carrito.cantidad)
        plantillaProductos = plantillaProductos + `
        <div>
            <h3>${carrito.nombre} #${carrito.id}</h3>
            <img width="100px" src="${carrito.thumbnail}"></img>
            <span>Precio unitario: ${carrito.precio} x ${carrito.cantidad} unidades</span>
            <span">Total: ${carrito.cantidad * carrito.precio}</span>
            <button class="comprar" data-id="${carrito.id}">comprar</button>
            <button class="cancelar" data-id="${carrito.id}">cancelar</button>
        </div>
        `
    }

    carritoProductoHTML.innerHTML = plantillaProductos;
    precioTotalHTML.innerText = 'Precio Total: $' + precioTotal;

    const botonesComprar = document.querySelectorAll('.comprar')
    const botonesCancelar = document.querySelectorAll('.cancelar')

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const id = parseInt(event.target.getAttribute('data-id'))
            agregarItemAlCarrito(id)
        })
    })

    botonesCancelar.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const id = parseInt(event.target.getAttribute('data-id'))
            eliminarItemPorId(id)
        })
    })
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
        itemBuscado.cantidad += 1
    } else {
        const nuevoItem = carrito.find((item) => item.id === id)
        if(nuevoItem){
            nuevoItem.cantidad = 1
            carritos.push(nuevoItem)
        } else {
            console.error('ERROR: id no existente')
        }
    }
    renderizarCarrito(carritos)
}

agregarItemAlCarrito(4)
agregarItemAlCarrito(2)
agregarItemAlCarrito(3)
