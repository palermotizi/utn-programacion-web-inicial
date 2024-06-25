/* DOM = document object model = modelo objeto del documento 
objeto que se crea cada vez que abro mi html
es cmo una replica para poder tener tood lo que tiene nuestro html
document es una variable global que se crea al abrir la pagina
*/

// console.log(document) 
console.dir(document) //muestra el html como objeto (es el que se usa)

// obtiene un elemento por id, si lo encuentra lo retorna (como objeto), sino retorna null. siempre guardamos en una const
const titulo = document.getElementById('titulo')
console.dir(titulo.innerText)
// muestra el texto del h1

// modifico desde js en innnettext del titulo h1 y por ser el document modifica la pagina. lo mismo en viceversa
titulo.innerText = 'hola'
// let nombre = prompt('ingresa tu nombre')
// titulo.innerText = 'Hola ' + nombre
// muestra el mensaje + el nombre del usuario del prompt

const caja = document.getElementById('caja-producto')
console.dir(caja)

caja.innerHTML = `
<h2>Soy un subtitulo</h2>
<p>tv samsung</p>
`
// permite interpretar html dentro de un string. no usar comillas simples, sino invertidas para poder hacer saltos de linea


/*
const usuario = {
    nombre,
    apellido,
    direccion,
    edad
}

mostrarlo dentro de un div 

<h2> nombre completo: {nombre} {apellido} 
<span> direccion: {direccion}
<span> edad: {edad}
*/

const usuario = {
    nombre: 'juancito',
    apellido: 'perez',
    direccion: 'san martin 890',
    edad: 21
}


const mostrarDatos = document.getElementById('infoUsuario')
infoUsuario.innerHTML = `
<h2> nombre completo: ${usuario.nombre} ${usuario.apellido}</h2>
<span> direccion: ${usuario.direccion}</span> <br>
<span> edad: ${usuario.edad}</span>
`
// console.dir(usuario)



const productos = [
    {
        nombre: 'tv samsung',
        precio: 500,
        id: 1,
        descripcion: 'Volumen de color al 100%, protección contra el quemado de pantalla, diseño e inteligencia, entre los aspectos más importantes a la hora de escoger televisor',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/qn77s90cagczb/gallery/ar-oled-s90c-459250-qn77s90cagczb-539048226?$650_519_PNG$'
    },
    {
        nombre: 'tv samsung',
        precio: 2000,
        id: 2,
        descripcion: 'Volumen de color al 100%, protección contra el quemado de pantalla, diseño e inteligencia, entre los aspectos más importantes a la hora de escoger televisor',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/qn77s90cagczb/gallery/ar-oled-s90c-459250-qn77s90cagczb-539048226?$650_519_PNG$'
    },
    {
        nombre: 'tv samsung',
        precio: 1500,
        id: 3,
        descripcion: 'Volumen de color al 100%, protección contra el quemado de pantalla, diseño e inteligencia, entre los aspectos más importantes a la hora de escoger televisor',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/qn77s90cagczb/gallery/ar-oled-s90c-459250-qn77s90cagczb-539048226?$650_519_PNG$'
    }
]
const productosHTML = document.getElementById('productos')


let plantillaProductos = ''
for(const producto of productos){
    plantillaProductos = plantillaProductos + `
    <div>
    <h2>${producto.nombre}</h2>
    <img src="${producto.thumbnail}"></img>
    <span>Precio: ${producto.precio}</span>
    <p>${producto.descripcion}</p>
    <button>comprar</button>
    </div>
    <hr>
    `
}

productosHTML.innerHTML = plantillaProductos




























// console.error('pepe esta enojado')
