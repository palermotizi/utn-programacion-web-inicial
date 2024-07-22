import { productos } from "../../data/productsData"

export const obtenerProductoPorId = (id) => {
    return productos.find(producto => Number(producto.id) === Number(id))
} 

/* 
Funcion que se llame obtenerProductos
Va a llamar a los productos del localstorage mediante key (si no encuentra nada retorna null), si no estan, va a cargarlos con la key 'productos' y va a retornarlos
Si estan, los parseara y los retornará
*/

/*
LocalStorage: objeto que tiene metodos
.setItem()
.getItem() => obtiene un valor guardado en localstorage mediante key
.removeItem()
.clear()
*/

const guardarProductos = (productos) => {
    const productos_JSON = JSON.stringify(productos)
    localStorage.setItem('productos', productos_JSON)
}

export const obtenerProductos = () => {
    const productos_guardados = localStorage.getItem('productos')
    if(productos_guardados){

        return JSON.parse(productos_guardados)

    } else {

        guaardarProductos(productos)
        return productos

    }
}


export const crearProducto = (nuevo_producto) => {
    const lista_productos = obtenerProductos()
    lista_productos.push(nuevo_producto)
    guardarProductos(lista_productos)
}


export const eliminarProductoPorId = (id) => {
    let productos = obtenerProductos()
    productos = productos.filter(producto => Number(producto.id) !== Number(id))
    guardarProductos(productos)
}

console.log(eliminarProductoPorId(6))

/*
CrearProducto(producto) lo guarda en local storag con la key 'productos'
obtenerProductosPorId(id) retorna el producto que cumpla con ese id
eliminarProductoPorId(id) elimina el producto que cumpla con ese id
*/