import React, { useContext } from 'react'
import ContactList from '../../Components/ContactList/ContactList'
import './Home.css'
import GlobalContext from '../../Context/GlobalContext'

const Home = () => {
  const { contacts } = useContext(GlobalContext)

  return (
    <div className='home-container'>
      <div className='home-whatsapp'>
        <h1 className='home-top-bar'>Contactos</h1>
          <ContactList contactos={contacts} />
      </div>
    </div>
  )
}

export default Home