import React from 'react'
import { ProductList } from '../../Components'
import { productos } from '../../data/productsData'
import { obtenerProductos } from '../../Components/helpers/productos'


const Home = () => {
  const lista_productos = obtenerProductos()
  console.log(lista_productos)
  return (
    <div>
        <h1>Elije nuestros productos</h1>
        <ProductList productos={productos} />
    </div>
  )
}

export default Home