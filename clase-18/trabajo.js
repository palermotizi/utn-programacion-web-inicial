/*
Renderizar un carrito:

Un array de items llamado carrito
cada item tiene el sgte formato:
    object:
        nombre: string
        id: numero positivo != 0
        precio: numero positivo != 0
        cantidad: numero positivo != 0 (no son validaciones)
        img: string con la direccion de alguna img (como arriba)

cada item mostrado en html va a tener este formato

div 
    h3 = {nombre} id:#{id}
    img = el src tendra el valor {img} y el ancho el 100px
    span = precio unitario: ${precio} x {cantidad} unidades
    span = total: ${precio * cantidad}

por debajo del div donde renderizamos el carrito, crear en HTML un span que este vacio
LLamar dicho span por JS y cambiar el texto para que diga: TOTAL: ${precio total} 
*/

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
        id: 4,
        precio: 500,
        cantidad: 0,
        
    },
]

agregarITemAlCarrito({
    nombre: 'computadora Samsung Galaxy book3',
   id: 4,
   precio: 500,
   thumbnail:'https://medias.musimundo.com/medias/size515-179326-01.png?context=bWFzdGVyfGltYWdlc3w0MTY2MTl8aW1hZ2UvcG5nfGFHVTBMMmd6WkM4eE1EVTJPRFk0TmpBeE1ETTVPQzl6YVhwbE5URTFYekUzT1RNeU5sOHdNUzV3Ym1jfGEyYWY4ZmJjOGM2NDZlNWNlYWRmMmFmOTFjYTczNmFiNzJiNDFmMDk3ODgwNGExNGNjODYxMDI4ZTVlZmRiZjk'
})

const renderizarCarrito = (carritos) =>{
    const carritoProductosHTML = document.getElementById('carritoProductos')
    const totalHTML = document.getElementById('total')
    
    let total = 0
    let plantillaProductos = ''
    for(const carrito of carritos){
        total = total + (carrito.precio * carrito.cantidad)
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


/*
Crear funcion llamada eliminarItemPorId que va a recibir un id
Y deberá buscar en el array carrito y eliminar al item con el id recibido PERO solamente vamos a eliminar si la cantidad es 1, sino deberemos reducir la cantidad en 1

Ejemplo:

eliminarItemPorId(2)
busca al proudcto id2 y como tiene 5 de cantidad cambia el 5 por uno menos, es decir 4

Al finalizar invocaremos nuevamente a renderizar carrito

eliminarItemPorId(3)
busca el producto y como tiene 1 de cantidad elimina el item del carrito

Al finalizar invocaremos nuevamente a renderizar carrito
*/

// find = buscar un elemento en un array de objetos con lo que queramos (id, precio,nombre). Si lo encuentra retorna dicho objeto, sino retorna un undefined

// cuando la function dé truly va a devolver el producto. depende completamente de la condicion que le pongamos al return (carrito.id === id)


const buscarPorId = (id) => {
    for(const item of carritos){
        if(item.id === id){
            return item
        }
    }
}

// const buscarPosicionPorId = (id) => {
//     for(let i = 0; i < carritos.length; i = i + 1){
//         const item = carritos[i]
//         if(item.id === id){
//             return i
//         }
//     }
// }
// otra forma de escrubir findIndex

const eliminarItemPorId = (id) =>{
    /*const itemBuscado = carrito.find(carrito) =>{
        return item.id === id}
     */
    const itemBuscado = carritos.find((carrito) => carrito.id === id)
    if(itemBuscado){
        if(itemBuscado.cantidad === 1){
            // logica para eliminar item
            const posicionItem = carritos.findIndex((carrito) => carrito.id === id)
            // otra forma mas simple de findIndex
            carritos.splice(posicionItem, 1)
        } else {
            // logica para decrementar en 1 la cantidad
            itemBuscado.cantidad = itemBuscado.cantidad - 1
        }
        renderizarCarrito(carritos)
    }else {
        console.error('ERROR: item con id inexistente')
    }
    // es lo mismo con el find que con el const
    // const itemBuscado = buscarPorId(id)
    console.log(itemBuscado)
}

eliminarItemPorId(2)
// ahora si pongo el id del producto cuando tenga 1 sola cantidad, se elimina directamente de la pagina

/*
crear la funcion llamada agregarItemAlCarrito(item)
item es un objeto con {
 nombre: 'celular samsung',
        id: 1,
        precio: 500,
        thumbnail: 'https://http2.mlstatic.com/D_805856-MLA76904041445_062024-O.jpg'
}

buscar si en el carrito ya existe un ekemento con ese id, si existe incrementamos la cantidad en 1, sino agregamos al carrito y creamos una propiedad para ese item llamada cantidad y con el valor 1

EJEMPLO:
agregarITemAlCarrito({
         nombre: 'celular samsung',
        id: 1,
        precio: 500,
        thumbnail: 'https://http2.mlstatic.com/D_805856-MLA76904041445_062024-O.jpg'
})
        va a incrementar la cantidad de toyota en 1 en el carrito porque ya existia

agregarITemAlCarrito({
         nombre: 'compu toshiba',
        id: 11,
        precio: 500,
        thumbnail: 'https://http2.mlstatic.com/D_805856-MLA76904041445_062024-O.jpg'
})
        se agrega al array carrito pero con la propiedad cantidad en 1 ( no hacemos lo del splice porque no elimina nada )
*/



const agregarItemAlCarrito = (producto) => {
    const itemBuscado = carritos.find((item) => item.id === producto.id)
    if(itemBuscado){
        // sugar sintax += es lo mismo que (itemBuscado.cantidad = itemBuscado.cantidad + 1) 
        itemBuscado.cantidad += 1
    } else {
            producto.cantidad = 1
            carritos.push(producto)
        }
    /*simepre que modifico el carrito debo rerenderizar */
    renderizarCarrito(carritos)
}



/*
=============== Funcion de find explicada en codigo ==================
es para saber como funciona pero usamos directamente .find
*/

//                   funcion pasada por parámetro
const find = (array, callback) => {
    for(const element of array) {
        /*callback va a retornar o verdadero o falso (retorna la condicion) */
        if(callback(element)){
            return element
        }
    }
    return undefined
}


// guarda el usuario en esta variable
const usuarioBuscado = find(users, (user) => {
    return user.id == 3
})

console.log(usuarioBuscado)