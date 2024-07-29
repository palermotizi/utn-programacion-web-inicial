// import React from "react"
// import TopBar from "./Components/Messages/TopBar/TopBar"
// import MessageContainer from "./MessageContainer/MessageContainer"
// import LowBar from "./LowBar/LowBar"
// import './App.css'


// const App = () => {

//   const initialMessages = [

//     {
//       author: 'Pepe',
//       content: 'Hola? Sos juan?',
//       date: 'ayer a 15:34',
//       status: 'visto',
//       id: 1
//     },
   
//     {
//       author: 'yo',
//       content: 'Hola, como estas? Si, y vos quien sos?',
//       date: 'ayer a 15:35',
//       status: 'visto',
//       id: 2
//     },
//     {
//       author: 'Pepe',
//       content: 'Soy Pepe',
//       date: 'ayer a 15:36',
//       status: 'visto',
//       id: 3
//     },
//     {
//       author: 'yo',
//       content: 'Ah bueno, saludos.',
//       date: 'ayer a 15:37',
//       status: 'entregado',
//       id: 4
//     },
//   ]


//   const [messages, setMessages] = useState(initialMessages)

//   const addMessage = (content) => {
//     const newMessage = {
//       author: 'yo',
//       content,
//       date: 'hoy',
//       status: 'entregado',
//       id: messages.length + 1,
//     }
//     setMessages([...messages, newMessage])
//   }

//   return (
//     <div className="app-container">
//       <div className="whatsapp">
//         <TopBar />
//         <MessageContainer messages={messages} />
//         <LowBar addMessage={addMessage}/>
//       </div>
//     </div>

//   )
// }

// export default App


import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Detail, Profile } from './Pages'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:contact_id' element={<Detail />} />
      <Route path='/profile/:contact_id' element={<Profile />} />
    </Routes>
  )
}

export default App

