import React from "react"
import Messages from "./components/messages/Messages"
import './App.css'

// function App() {
// // let condicion = false
// // let estaRegistrado = true

// const userData = {
//   isLogged: false,
//   isAdmin: true,
//   lang: 'en'
// }

// // const dataLang = {
// //   EN: {
// //     title: 'name',
// //     price: 'Price: $200'
// //   },
// //   EN: {
// //     title: 'nombre',
// //     price: 'Precio: $200'
// //   }
// // }


// const Navbar = (props) => {
//   const userInfo = props.userData


//   return(
//     <nav>
//       {!userInfo.isLogged && <button>login</button>}
//       {userInfo.isAdmin && <button>Crear producto</button>}
//     </nav>
//   )
// }

//   return (
//     <>
//     <div><Navbar userData={userData}/></div>
//     </>

//     /* {
//       condicion
//       ? <h2>se cumplió</h2>
//       : <h3>No se cumplió</h3>
      
//     }

//     {
//       condicion && <h2>Se cumple la condicion</h2>
//     }
//     {
//       estaRegistrado && <h2>Logueado</h2>
//     } */
//   )
// }

/*
Crear un componente llamado Navbar y van a pasarle por props el objeto userData.
Si isLogged es false entonces mostraran un button que diga 'login'
Si isAdmin es true mostraran un button que diga 'crear producto'
OPCIONAL:
si lang esta en 'en' todos los textos deben ser en ingles 
si lang esta en 'es' todos los textos deben ser en español
*/


const App = () => {

  const DATA_MOOK = [
    {
      author: 'Pepe',
      content: 'Hola? Sos juan?',
      date: 'ayer a 15:34',
      status: 'visto',
      id: 1
    },
   
    {
      author: 'yo',
      content: 'Hola, como estas? Si, y vos quien sos?',
      date: 'ayer a 15:35',
      status: 'visto',
      id: 2
    },
    {
      author: 'Pepe',
      content: 'Soy Pepe',
      date: 'ayer a 15:36',
      status: 'visto',
      id: 3
    },
    {
      author: 'yo',
      content: 'Ah bueno, saludos.',
      date: 'ayer a 15:37',
      status: 'entregado',
      id: 4
    },
  ]


  const listaJSXMensajes = DATA_MOOK.map((data) => {
    return (
      <Messages 
      key={data.id} 
      author={data.author} 
      content={data.content} 
      date={data.date} 
      status={data.status} />
    )
  })

  return (
    <>
    <div className="app-container">
      <div className="whatsapp">
        <div className="top-bar">
          <button className="back">
            {/* flecha hacia atras */}
            <i className="bi bi-arrow-left"></i>
          </button>

          {/* nombre usuario */}
          <span>Pepe</span>

          {/* videollamada */}
          <button className="videocall">
            <i className="bi bi-camera-video"></i>
          </button>

          {/* llamada */}
          <button className="phonecall">
            <i className="bi bi-telephone"></i>
          </button>

          {/* 3 puntitos */}
          <button className="three-dots">
            <i className="bi bi-three-dots-vertical"></i>
          </button>

        </div>
        <div className="message-container">
          <span>Ayer</span>
        {listaJSXMensajes}
        </div>

        <div className="low-bar">
          <div className="default-txt">

            {/* primer button de emoji */}
            <button className="emojis">
              <i className="bi bi-emoji-smile"></i>
            </button>

          {/* texto por defecto */}
            <span>Mensaje</span>

            {/* clip de archivos */}
              <button className="files">
                <i className="bi bi-paperclip"></i>
              </button>

              {/* camara de fotos */}
            <button className="camera">
            <i className="bi bi-camera"></i>
            </button>

          </div>

            <button className="microphone">
              <i className="bi bi-mic-fill"></i>
            </button>

        </div>
          
      </div>
    </div>
    </>
  )
}

export default App
