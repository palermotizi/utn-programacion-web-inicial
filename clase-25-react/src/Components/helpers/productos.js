import { productos } from "../../data/productsData"

export const obtenerProductoPorId = (id) => {
    return productos.find(producto => Number(producto.id) === Number(id))
} 