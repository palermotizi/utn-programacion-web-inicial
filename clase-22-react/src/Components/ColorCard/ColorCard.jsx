import './ColorCard.css'
import './ColorCardInd'
import React from 'react'



const ColorCard = (props) => {
  return (
    <div className='color-card'>

        <h3 className='rgb'>{props.colores}</h3>
        <div className='likes'>
            Likes: {props.likes} 
            <button><i class="bi bi-heart"></i></button>
        </div>
        <div className='fecha'>Fecha: {props.fecha}</div>
    </div>
  )
}


export default ColorCard