import React from 'react'
import './TopBar.css'

const TopBar = ({ contactName }) => {
  return (
    <div className="top-bar">
      <button className="back">
        <i className="bi bi-arrow-left"></i>
      </button>
      <span className='name'>
        {contactName}</span>
      <button className="videocall">
        <i className="bi bi-camera-video"></i>
      </button>
      <button className="phonecall">
        <i className="bi bi-telephone"></i>
      </button>
      <button className="three-dots">
        <i className="bi bi-three-dots-vertical"></i>
      </button>
    </div>
  )
}

export default TopBar