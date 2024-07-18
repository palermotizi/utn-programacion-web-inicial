import React from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import { DATA_CONTACTOS } from '../../data/contactsData';
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-whatsapp'>
        <h1 className='home-top-bar'>Contactos</h1>
          <ContactList contactos={DATA_CONTACTOS} />
      </div>
    </div>
  );
};

export default Home;