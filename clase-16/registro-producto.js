/*
crear una funcion llamada registrarProducto
La funcion solicitara al usuario:
-Titulo: debe ser un string con mas de 4 caracteres
-Precio: debe ser un numero positivo mayor a 1
-Descripcion: debe ser un string con almenos 10 caracteres
-Categoria: debe ser un string que este dentro de las sig opciones ['tecnologia', 'hogar', 'otros']
-Marca: debe ser un string con almenos 3 caracteres
validar con while porqeu se vuelve a pedir


Se solicitara siempre mediante uso de prompts
Se  mostrara al usuario la sig plantilla/texto por prompt:
Confirmar producto:
-Titulo: 'Mesa de trabajo de madera',
-Precio: '300'
-Descripcion: 'mesa de trabajo ideal para astillarse'
-Categoria: 'hogar
-Marca: 'jorge el carpintero'
si el usuario elije cancelar (con el button) o escribe 'cancelar' o 'no', se volvera a comenzar.
el prompt devuelve null por ej, no es ''

Si el usuario presiona 'aceptar' o 'si', entonces la funcion creará un objeto del producto y lo mostrará por consola
*/

const categoriaDisponible = ['tecnologia', 'hogar', 'otros']

const validarStringConMinimo = (valor, minimo) => valor && isNaN(valor) && valor.length >= minimo
const validarTitulo = (valor) => validarStringConMinimo(valor, 4)
const validarPrecio = (valor) => valor && !isNaN(valor) && valor > 1
const validarDescripcion = (valor) => validarStringConMinimo (valor, 10)
const validarCategoria = (valor) => categoriaDisponible.includes(valor)
const validarMarca = (valor) => validarStringConMinimo(valor, 3)
const validarNegacion = (confirmacion) => confirmacion === null || confirmacion.toLowerCase === 'cancelar' || confirmacion.toLowerCase === 'no'

const crearObjetoConfeccion = (mensaje, error, validacion) => {
    return {
        mensaje: mensaje,
        error: error,
        validacion: validacion
    }
}

const DATOS_PRODUCTO = {
    TITULO: crearObjetoConfeccion(
        'ingrese un titulo min (4) caracteres:',
        'error al ingresar titulo, intente nuevamente',
        validarTitulo
    ),
    PRECIO: crearObjetoConfeccion(
        'ingrese un precio positivo mayor a $1:',
        'error al ingresar precio, intente nuevamente',
        validarPrecio
    ),
    DESCRIPCION: crearObjetoConfeccion(
        'ingrese una descripcion min (10) caracteres:',
        'error al ingresar descripcion, intente nuevamente',
        validarDescripcion
    ),
    CATEGORIA:crearObjetoConfeccion(
        'ingrese una categoria. (Categorias validas' + categoriaDisponible.join(', ')+')',
        'error al ingresar categoria, (Categorias validas' + categoriaDisponible.join(', ')+')',
        validarCategoria
    ),
    MARCA: crearObjetoConfeccion(
        'ingrese una marca min (3) caracteres:',
        'error al ingresar marca, intente nuevamente',
        validarMarca
    ),
}

const solicitarDato = (objetoDeConfeccion) => {
    let dato = prompt (objetoDeConfeccion.mensaje)
    while(!objetoDeConfeccion.validacion(dato)){
        dato=prompt(objetoDeConfeccion.error)
    }
}

// const registrarProducto = () => {
//     let titulo = solicitarDato(DATOS_PRODUCTO.TITULO)
//     let precio = solicitarDato(DATOS_PRODUCTO.PRECIO)
//     let descripcion = solicitarDato(DATOS_PRODUCTO.DESCRIPCION)
//     let categoria = solicitarDato(DATOS_PRODUCTO.CATEGORIA)
//     let marca = solicitarDato(DATOS_PRODUCTO.MARCA)

//     let mensajeConfirmacion = `
//     quiere confirmar el producto:
//     titulo: ${titulo},
//     precio: ${precio},
//     descripcion: ${descripcion},
//     categoria: ${categoria},
//     marca: ${marca}
//     `
//     let confirmacion = prompt(mensajeConfirmacion)
//     if(validarNegacion(confirmacion)){
//         registrarProducto()
//     } else {
//         const producto = {
//             titulo,
//             precio,
//             descripcion,
//             categoria,
//             marca
//         }
//         console.log(producto)
//     }
// }

// registrarProducto()


const registrarProducto = () => {
    const producto = {}
    for (let propiedad in DATOS_PRODUCTO){
        let dato = solicitarDato(DATOS_PRODUCTO[propiedad])
        producto[propiedad.toLowerCase()] = dato 
    }

    let mensajeConfirmacion = `
    quiere confirmar el producto:
    titulo: ${producto.titulo},
    precio: ${producto.precio},
    descripcion: ${producto.descripcion},
    categoria: ${producto.categoria},
    marca: ${producto.marca}
    `
    let confirmacion = prompt(mensajeConfirmacion)
    if(validarNegacion(confirmacion)){
        registrarProducto()
    } else {
        console.log(producto)
    }
}

registrarProducto()







// const registrarProducto = () => {
//     let titulo = prompt('Ingrese un título con más de 4 caracteres')
//     while(titulo.length < 4){
//         titulo = prompt('ERROR: titulo no valido. Por favor, ingrese un título de 4 caracteres o más')
//     }
//     let precio = prompt('Ingrese un precio mayor a 1')
//     while(precio <= 1){
//         precio = prompt('ERROR: precio no valido. Por favor ingrese un numero mayor a 1')
//     }
//     let descripcion = prompt('Ingrese una descripción con al menos 10 caracteres')
//     while(descripcion.length < 10){
//         descripcion = prompt('ERROR: descripcion no valida, ingrese una descripcion de al menos 10 numeros')
//     }
//     let categoria = prompt('Ingrese una categoría (tecnología, hogar, otros')
//     while(!validarCategoria(categoria)){
//         categoria = prompt('ERROR: ingrese una categoria valida (tecnologia, hogar, otros')
//     }
//     let marca = prompt('Ingrese una marca con al menos 3 caracteres')
//     while(marca.length < 3){
//         marca = prompt('ERROR: marca no valida. Por favor, ingrese una marca con al menos 3 caracteres')
//     }
// }

// const subirProducto = 
// `Confirmar producto:
// Título:${producto.titulo}
// Precio:${producto.precio}
// Descripcion:${producto.descripcion}
// Categoria: ${producto.categoria}
// Marca: ${producto.marca}
// `

// let confirmacion = prompt(`¿Desea confirmar el producto ${resultado}?`)
// if(confirmacion === null || confirmacion.toLowerCase === 'no' || confirmacion.toLowerCase === 'cancelar') {
//     registrarProducto()
// } else if (confirmacion === '' || confirmacion.toLowerCase === 'si' || confirmacion.toLowerCase === 'aceptar'){
//     console.log(resultado)
// }

// registrarProducto()

