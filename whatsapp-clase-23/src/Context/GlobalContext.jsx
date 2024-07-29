import React, { createContext } from "react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { v4 as uuid} from "uuid"
import { DATA_CONTACTOS } from "../data/contactsData"

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts')
    return savedContacts ? JSON.parse(savedContacts) : DATA_CONTACTOS
  })
  const navigate = useNavigate()

  const handleDeleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
    localStorage.setItem('contacts', JSON.stringify(newContacts))
    navigate('/')
  }

  const handleCreateContact = (contact) => {
    const newContact = {
      ...contact,
      id: uuid(),
    }
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
    localStorage.setItem('contacts', JSON.stringify(newContacts))
    navigate('/')
  }

  return (
    <GlobalContext.Provider value={{ contacts, handleDeleteContact, handleCreateContact }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}


export default GlobalContext