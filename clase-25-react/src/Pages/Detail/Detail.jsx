import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../../Components/helpers/productos'
import { useGlobalContext } from '../../Context/GlobalContext'
/*useparams retorna un objeto con los parametros d busqueda */

const Detail = () => {
    const parametros = useParams()
    const {handleDeleteProduct} = useGlobalContext()
    // funcionalidades de navegacion de la libreria que usemos (react router dom)
    console.log(parametros)

    const producto = obtenerProductoPorId(parametros.producto_id)

  return (
    <div>
        {
            producto
            ?
            <>
            <h1>{producto.nombre}</h1>
        <span>{producto.categoria}</span>
        <p>
            {producto.descripcion}
        </p>
        <span>
            <b>Precio</b> {producto.precio}
        </span>
        <br />
        <span>
            <b>Unidades disponibles:</b> {producto.stock}
        </span>
        <button>Comprar</button>
        <button onClick={() => handleDeleteProduct(id)}>Eliminar</button>
        <br />
        </>
        :
        <h1>Producto no encontrado</h1>}

     </div>
        
  )
}

export default Detail