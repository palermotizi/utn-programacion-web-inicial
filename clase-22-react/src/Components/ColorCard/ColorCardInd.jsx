import React from 'react'
import ColorCard from './ColorCard'

const ColorCardInd = (props) => {
  return (
        <div className='colores-individuales'>
            <div className='primer-color'>{props.primerColor}</div>
            <div className='segundo-color'>{props.segundoColor}</div>
            <div className='tercer-color'>{props.tercerColor}</div>
            <div className='cuarto-color'>{props.cuartoColor}</div>
        </div>
        
  )
}

export default ColorCardInd