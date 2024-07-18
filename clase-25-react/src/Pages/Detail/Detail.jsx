import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../../Components/helpers/productos'
/*useparams retorna un objeto con los parametros d busqueda */

const Detail = () => {
    const parametros = useParams()
    console.log(parametros)

    
    const {
        nombre, 
        descripcion, 
        precio,
        id, 
        stock, 
        codigo, 
        categoria} = obtenerProductoPorId(parametros.producto_id)


  return (
    <div>
        <h1>{nombre}</h1>
        <span>{categoria}</span>
        <p>
            {descripcion}
        </p>
        <span>
            <b>Precio</b> {precio}
        </span>
        <br />
        <span>
            <b>Unidades disponibles:</b> {stock}
        </span>
        <button>Comprar</button>
        <br />
    </div>
  )
}

export default Detail