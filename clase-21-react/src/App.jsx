import React from 'react'
import {nombre, persona} from './funciones'
import { Boton } from './components/Boton'
import Carta from './components/Carta'
import { RowArticle } from './components/Ejercicio'



/*
Los archivos .jsx permiten la sintaxis JSX (html)
si o si losarchivos con esta sintaxis va con jsx porque el html no es nativo de js. 
osea, los archivos que etengan sintaxis html van con .jsx
*/
console.log(nombre)
console.log(persona)
const App = () => {
  let nombreUsuario = 'julieta'
  const obtenerRandom = () => 'dato random'
  return (
    <>
      <div>
        <h1>Hola {nombreUsuario}</h1>
        <Boton texto='boton 1'/>
        <Carta />
      </div>

      <div>
        <h1>Hola {obtenerRandom()}</h1>
        <Boton texto='agregar a favoritos'/>
        <Carta />
      </div>


      <div>
        <RowArticle title='Lift-off: The MDN Curriculum launch' fecha='4 months ago' direccion_autor='developer.mozilla.org'></RowArticle>
      </div>
    </>
  )
}


// function App() {
  
//   console.log(persona)
//   let nombreUsuario = 'julieta'
//   const obtenerRandom = () => 'dato random'
//   return (
//     <>
//         <div>
//             <h1>Hola {nombreUsuario}</h1>
//             <Button texto={'boton 1'}/>
//             <Carta/>
//         </div>

//         <div>
//             <h1>Hola {obtenerRandom()} </h1>
//             <Button texto={'agregar a favoritos'}/>
//             <Carta/>
//         </div>
//     </>
  
//   )
// }

/*
Las funciones que retornan html/jsx se llamaran como Componentes

Los componentes, por regla general, es buena declararlos con mayuscula osea App, Car, Product. La primer letra mayus.

Los componentes solo pueden retornar un elemento padre

el fragmento (<> </>) nos permite hacer una etiqueta padre que al instanciarse/invocarse el componente se desechara


Se puede hacer con function o con arrow function:

const App = () = {

  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
}
*/




export default App




