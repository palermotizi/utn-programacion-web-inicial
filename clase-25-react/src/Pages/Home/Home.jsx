import React from 'react'
import { ProductList } from '../../Components'
import { productos } from '../../data/productsData'


const Home = () => {
  return (
    <div>
        <h1>Elije nuestros productos</h1>
        <ProductList productos={productos} />
    </div>
  )
}

export default Home