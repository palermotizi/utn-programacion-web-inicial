import React, { useState } from 'react'
import './LowBar.css'

const LowBar = ({ addMessage }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addMessage(inputValue)
      setInputValue('')
    }
  }

  const handleSendClick = () => {
    if (inputValue.trim()) {
      addMessage(inputValue)
      setInputValue('')
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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