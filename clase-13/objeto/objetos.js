/*TIPOS DE DATOS OBJETOS:
*/

let edadUsuario = 19

let nombreUsuario ='pepe'

let apellidoUsuario = 'suarez'

let usuario = {
    'edad': 19,
    'nombre': 'pepe',
    'apellido': 'suarez',
    'mejor amigo':{
        "nombre": 'juan'
    }
}

// console.log(usuario)
console.log('hola ' + usuario['mejor amigo']['nombre'])

// se escribe con comillas la propiedad porque originalmente
// es un string, se representa como string
/*siempre que se pueda usamos la abreviación sin string (sin comillas) 
NO se puede hacer con abreviacion cuando hay espacio, tilde, operadores (+-), guiones
para evitar usar strings se usa camelCase o camel_case es mejor
*/



/*Crear un objeto llamado producto que tenga las sgtes prop:
 
precio : number
nombre : string
marca : string
id : number 
descripcion: string
*/


// formato key-value
let producto = {
    precioUnitario: 210,
    precio: 200,
    nombre: 'redmi note 8 pro',
    marca: 'xiaomi',
    id: 321,
    descripcion: 'el celular es de color verde'
}

// console.log('hola' + producto)
/*no puedo concatenar string de manera directa con objetos entonces:*/
console.log ('El producto ' + producto['nombre'] + ' cuesta $' + producto['precioUnitario'])



const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info': {
        'created_at': '18/9/2005',
        'address': 'av siempre viva 742',
        tel: '+22 1323-2122'
    }
}

/*reasignamos el valor de la propiedad nombre */
user['name'] = 'juan'
/*cambiamos apellido con abreviacion por eso sin corchetes. 
NOTACION DE PUNTOS (la usamos siempre que se pueda) */
user.lastname = 'gomez'
user['isAdmin'] = false 
/*cambiamos apellido con abreviacion por eso sin corchetes */
user.isAdmin = true

/*NO usamos notacion de puntos si la propiedad tiene -(cualquier operador), ñ, tilde o espacios */

console.log(user)

/*por consola mostrar un informe del usuario =>
'El usuario{nombre} {lastname} tiene las preferencias de usuario en: \nModo: {theme} \nLenguaje: {lang}'
'El usuario {name} {lastname} creo su cuenta en fecha {created_at} vive en {address} y su telefono es {tel}'
*/

console.log('El usuario ' + user['name'] + ' ' + user['lastname'] + 
' tiene las preferencias en: ' +
'\n' + user['user preferences']['theme'] +
'\n' + user['user preferences']['lang']
)

console.log('El usuario ' + user['name'] + ' ' + user['lastname'] +
'\n' +
'Creó su cuenta en la fecha: ' + user['user info']['created_at'] +
'\n' + 'Vive en: ' + user['user info']['address'] +
'\n' + 'Y su teléfono es: ' + user['user info']['tel']
)

/*FORMA MAS PROLIJA, ORDENADA Y FACIL. TEMPLATE GRID */
// con las `` se pueden hacer saltos de linea con tecla enter
console.log(`
    El usuario ${user['name']} ${user['lastname']} tiene las preferencias en:
    -Modo: ${user['user preferences']['theme']}
    -Lenguaje: ${user['user preferences']['lang']}
`)

/*
console.log('El usuario ' + user['name'] + ' ' + user['lastname'] + 
' tiene las preferencias en: ' +
'\n' + user['user preferences']['theme'] +
'\n' + user['user preferences']['lang']
)
*/

console.log(`
    El usuario ${user['name']} ${user['lastname']} tiene las preferencias en:
    -Modo: ${user['user preferences']['theme']}
    -Lenguaje: ${user['user preferences']['lang']}
`)


/*
console.log('El usuario ' + user['name'] + ' ' + user['lastname'] +
'\n' +
'Creó su cuenta en la fecha: ' + user['user info']['created_at'] +
'\n' + 'Vive en: ' + user['user info']['address'] +
'\n' + 'Y su teléfono es: ' + user['user info']['tel']
)
*/


console.log(`
El usuario ${user['name']} ${user['lastname']}
-Creó su cuenta en la fecha: ${user['user info']['created_at']}
-Vive en: ${user['user info']['address']}
-Y su teléfono es: ${user['user info']['tel']}
`)

/*pasar nuestro mensaje a notacion de puntos siempre que se pueda */

console.log(`
    El usuario ${user.name} ${user.lastname} tiene las preferencias en:
    -Modo: ${user['user preferences'].theme}
    -Lenguaje: ${user['user preferences'].lang}
`)

console.log(`
El usuario ${user.name} ${user.lastname}
-Creó su cuenta en la fecha: ${user['user info'].created_at}
-Vive en: ${user['user info'].address}
-Y su teléfono es: ${user['user info'].tel}
`)

/*Crear funcion llamada 
calcularIva(precio, tipo_factura) 

tipo_factura: 'A', 'B', 'C'

en el caso de b y c, el iva esta incluido. el la factura a esta discriminado
ejemplo: 
calcularIva(100, c||b)
{
    precio: 121
    iva: 21
    precioConIva: 121
    factura: 'b' || 'c'
}

calcularIva(100, a)
{
    precio: 100
    iva: 21
    precioConIva: 121
    factura: a
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
}
*/

// const calcularIva = (precio, tipo__factura) => {
//     if(tipo_factura === 'C' || tipo__factura === 'B'){
//         return {
//             precio: precio * 1.21,
//             iva: precio * 0.21,
//             precioConIva: precio * 1.21,
//             factura: tipo_factura
//         }
//     } else if(tipo_factura === 'A'){
//         return {
//             precio: precio, 
//             iva: precio * 0.21,
//             precioConIva: precio * 1.21,
//             factura: tipo__factura
//         }
//     }
// }


// ============================ manera correcta ===============================
const calcularIva = (precio, tipo_factura) => {
    let iva = precio * 0.21

    const resultado = {
        precio: null,
        iva: iva,
        precioConIva: precio + iva,
        factura: tipo_factura
    }
    if(tipo_factura === 'C' || tipo_factura === 'B'){
        resultado.precioConIva = resultado.precio

    } else if(tipo_factura === 'A'){
        resultado.precio = precio
    }

    return resultado 
}

console.log(calcularIva(1000, 'A'))
console.log(calcularIva(1000, 'B'))
console.log(calcularIva())
