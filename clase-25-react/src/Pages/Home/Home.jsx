import React from 'react'
import { ProductList } from '../../Components'


import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Context/GlobalContext'

const Home = () => {
  const {productos, getUserData, logout} = useGlobalContext()
  const user = getUserData()
 
  

  return (
    <div>
      {
        user 
        ?
        <button onClick={logout}>Cerrar sesion</button>
        :
        <Link to={'/login'}>Login</Link>
      }
      {
        (user && user.role === 'admin') 
        &&
        <>
          <Link to={'/product/new'}>Crear producto</Link>
          <Link to={'/cart'}>Carrito</Link>
        </>
      }
      {
        (user && user.role === 'user') 
        &&
        <>
          <Link to={'/cart'}>Carrito</Link>
        </>
      }

      <div className='imageContainer'>
        <img src="/imagenes/Juan.jpg" alt="" />
      </div>
      <h1>Elige nuestros productos</h1>
      <ProductList productos={productos}/>
    </div>
  )
}


export default Home