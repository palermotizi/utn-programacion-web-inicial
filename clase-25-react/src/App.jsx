import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { Detail, Home, Cart, Review } from './Pages'
import NewProduct from './Pages/NewProduct/NewProduct'
import Login from './Pages/Login/Login'

function App() {
  

  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:producto_id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/new' element={<NewProduct />}/>
        <Route path='/reviews' element={<Review />} />
      </Routes>
  )
}

export default App 
