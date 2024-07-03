import React from 'react'

/*
lo que van a tener todas las paginas por defecto, despues si quiero crear pags dentro de pags, ya queda la estructura definida
*/


const Layout = (props) => {
  return (
    <div>
        <header>
            <h2>Logo</h2>
            <nav>
                <a href="">Link 1</a>
                <a href="">Link 2</a>
            </nav>
        </header>
        <main>
            {props.children}
        </main>
    </div>
  )
}


export default Layout