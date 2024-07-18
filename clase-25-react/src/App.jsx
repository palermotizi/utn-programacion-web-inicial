import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { Detail, Home, Cart } from './Pages'

function App() {
  

  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:producto_id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
  )
}

export default App 
