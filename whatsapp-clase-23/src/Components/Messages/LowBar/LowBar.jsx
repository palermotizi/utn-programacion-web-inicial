import React, { useState } from 'react'
import './LowBar.css'

const LowBar = ({ addMessage }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      addMessage(message)
      setMessage('')
    }
  }

  const handleSendClick = () => {
    if (message.trim()) {
      addMessage(message)
      setMessage('')
    }
  }

  return (
    <div className="low-bar">
      <form className="message-input" onSubmit={handleSubmit}>
        <button type="button" className="emojis">
          <i className="bi bi-emoji-smile"></i>
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='mensaje'
          className='message-field'
        />
        <button type='button' className="files">
          <i className="bi bi-paperclip"></i>
        </button>
        <button className="camera">
          <i className="bi bi-camera"></i>
        </button>
      </form>
      <button type='button' className="send" onClick={handleSendClick}>
        <i className="bi bi-send-fill"></i>
      </button>
    </div>
  )
}

export default LowBar