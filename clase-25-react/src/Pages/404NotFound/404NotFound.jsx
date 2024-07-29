import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>
            error 404 no encontramos esta ruta
        </h1>
        <Link to='/'>Volver al inicio</Link>

        </div>

  )
}

export default NotFound