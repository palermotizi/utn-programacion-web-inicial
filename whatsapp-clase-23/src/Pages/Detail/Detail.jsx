import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DATA_CONTACTOS } from '../../data/contactsData'
import { LowBar, TopBar } from '../../Components'
import MessageContainer from '../../Components/Messages/MessageContainer/MessageContainer'

const Detail = () => {
  const { contact_id } = useParams()
  const contact = DATA_CONTACTOS.find(contact => contact.id.toString() === contact_id);
  const [messages, setMessages] = useState(contact ? contact.mensajes : [])

  const addMessage = (content) => {
    const newMessage = {
      author: 'yo',
      text: content,
      estado: 'entregado',
      day: 'hoy',
      id: messages.length + 1,
    }
    setMessages([...messages, newMessage])
  }

  return (
    <div className="app-container">
      <div className="whatsapp">
        <TopBar contactName={contact.nombre}/>
        <MessageContainer messages={messages} />
        <LowBar addMessage={addMessage} />
      </div>
    </div>
  )
}

export default Detail