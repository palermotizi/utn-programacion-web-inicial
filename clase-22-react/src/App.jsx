import React from 'react'
// import Button from './Components/Button'
// import Layout from './Components/Layout'
// import CodePointInfo from './Components/CodePointInfo'
import ColorCard from './Components/ColorCard/ColorCard'
import ColorCardInd from './Components/ColorCard/ColorCardInd'




const App = () => {

  const tarjetas = [
    {
      colores: ['#000000', '#FF4191', '#E90074', '#FFF078'],
      likes: '256',
      fecha: '14 hours'
    },
    {
      colores: ['#000000', '#FF4191', '#E90074', '#FFF078'],
      likes: '120',
      fecha: '3 hours',
    },
    {
      colores: ['#000000', '#FF4191', '#E90074', '#FFF078'],
      likes: '18',
      fecha: '5 minutes',
    },
  ]

  const colors = [
    {
      primerColor: '#000000',
      segundoColor: '#FF4191',
      tercerColor: '#E90074',
      cuartoColor: '#FFF078'
    },
    {
      primerColor: '#000000',
      segundoColor: '#FF4191',
      tercerColor: '#E90074',
      cuartoColor: '#FFF078'
    },
    {
      primerColor: '#000000',
      segundoColor: '#FF4191',
      tercerColor: '#E90074',
      cuartoColor: '#FFF078'
    },
  ]

  const listaJSXColores = tarjetas.map((tarjeta) => {
    return (<ColorCard colores={tarjeta.colores} likes={tarjeta.likes} fecha={tarjeta.fecha} /> )
  })

  
  const listaJSXIndividual = colors.map((color) => {
    return (<ColorCardInd primerColor={color.primerColor} segundoColor={color.segundoColor} tercerColor={color.tercerColor} cuartoColor={color.cuartoColor}/>)
  })
  

  return (
    <div> 
      {listaJSXColores} 
      {listaJSXIndividual}
    </div>
  )
}
export default App


/*
const Colores = [
    {
      colors: ['#000000', '#FF4191', '#E90074', '#FFF078'],
      likes: 50,
      fecha: '13 hours'
    },
    {
      colors: ['#000000', '#FF4191', '#E90074', '#FFF078'],
      likes: 50,
      fecha: '13 hours'
    }
  ]
  
  const listaJSXColores = Colores.map((color) => {
    return <div>{color}</div>
    })
*/
  // const nombres = ['pepe', 'juan', 'diego', 'maria']

  /*La callback se ejecuta por cada elemento del array y se le pasará dicho elemento por parámetro.
  Lo que retorna la callback va a ser el elemtno nuevo agregado al array resultante
  MAP: retorna SIEMPRE un array, si no funciona es pq falta el return
  */
  // const result = nombres.map((nombre) =>{
  //   return '<div>' + nombre + '</div>'
  // })

// ================================================================
//   const nombres = ['pepe', 'juan', 'diego', 'maria']
//   const listaJSXNombres = nombres.map((nombre) => {
//     return <div>{nombre}</div>
//   })


//   return (
//     <div>
//       <h2>Nombres</h2>
//       {listaJSXNombres}
//     </div>
//   )
// }


  // const listaJSXNombres = [
  //   <div>Pepe</div>,
  //   <div>Juan</div>,
  //   <div>Maria</div>,
  // ]


/*
Todo lo que usamo dentro de const App:
  <Layout>
      <Button>Click <i class="bi bi-airplane-fill"></i></Button>
    </Layout>
    <ContactScreen></ContactScreen>
    <CodePoint></CodePoint>
    <ProductsScreen></ProductsScreen>
*/

// const ContactScreen = () => {
//   return (
//     <Layout>
//       <h2>Esta es la pagina de contacto</h2>
//       <form></form>
//       <Button>Click <i class="bi bi-window-sidebar"></i></Button>
//     </Layout>
//   )
// }

// const ProductsScreen = () => {
//   return (
//     <Layout>
//       <h2>Esta es la pagina de productos</h2>
//       <h3>Este es el subtitulo</h3>
//     </Layout>
//   )
// }

// const CodePoint  = () => {
//   return (
//     <CodePointInfo>
      
//       <div>
//         <h1>Icon Font</h1>
//         <span>Using the web font? Copy, paste and go.</span>
//         <a href="#">
//           <pre>
//             <code data-lang='html'>
//             {`<i class= "bi bi-window sidebar">`}
//             </code>
//           </pre>
//           </a>
//       </div>

//       <div>
//         <h1>Code Point</h1>
//         <span>Unicode: U+F61F</span>
//         <span>CSS: \F61F</span>
//         <span>JS: \uF61F</span>
//         <span>HTML: &#xF61F</span>
//       </div>

//       <div>
//         <h1>Copy HTML</h1>
//         <span>Paste the SVG right into your project's code.</span>
//         <span>
//           <pre>
//             <code data-lang='html'>
//             {`
// <svg xmlns="http://www.w3.org/2000/svg" width="16 height="16" fill="currentColor" class="bi bi-window-sidebar" viewbox=" 0 0 16 16">
// <path d="M2 1a2 4a.5.5 0 1 0 0 1 0 1m2- m45 .6. 334. n5. t 1a2 4a.5.5 0 1 0 0 1 0 1m2- m45 .6. 334. n5. t 1a2 4a.5.5 0 1 0 0 1 0 1m2- m45 .6. 334. n5. 1 0 0 1-1 1z"/></svg>`}
//             </code>
//           </pre>
//           </span>
//       </div>

//     </CodePointInfo>
//   )
// }




