/*
fetch es una funcion que me permite hacer peticiones HTTP, recibe dos parametros.
1) URL (string que será la url que vamos a consultar o peticionar)
2) un objeto de configuración de la petición

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET' //para obtener todos los usuarios
})
*/



// peticiones http con js (lo que hacemos para conectarnos a las API's de las empresas que trabajemos)
/* async await */

// const solicitarUsuarios = async () => {
//     const respuesta = await fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'GET' //para obtener todos los usuarios
//     })
//     console.log(respuesta)
//     const resultado = await respuesta.json()
//     console.log(resultado)
// }

// solicitarUsuarios()


/*
ejecutar una peticion http con metodo GET a esta dire: https://jsonplaceholder.typicode.com/posts

una vez obtenido el JSON en esa dire deberas renderizar en html un div con la sgte estructura:

<div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <button>♥</button>
</div>

*/

const solicitarPost = async () => {
    const respuestaPost = await fetch ('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    })
    console.log(respuestaPost)
    const resultadoPost = await respuestaPost.json()
    console.log(resultadoPost)



let postHTML = ''

    for (const post of resultadoPost) {
        postHTML += `
        <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button>♥</button>
        </div>
    `
}
document.getElementById('post-container').innerHTML = postHTML

}
solicitarPost()



/*
Crear un form de posteo
el form tendrá un input para el título
un textarea para el body 
y un button con el texto post que active el evento submit:

Cuando se envíe el form se deberá capturar título y body y se enviará vía fetch a esta dire (con el metodo post): 'https://jsonplaceholder.typicode.com/posts'
y van a mostrar por consola un 'enviado'

*/

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

const handleSubmit = ( event ) => {
    event.preventDeault()
    
}

formHTML.addEventListener('submit', handleSubmit)
