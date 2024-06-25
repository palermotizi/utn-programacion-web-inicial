//localStorage y sessionStorage


// localStorage.setItem('username', nombre)

/*
localStorage.setItem(key, value) guarda un item
localStorage.getItem(key) obtiene un item

para eliminar un dato:
localStorage.removeItem('edad')

para eliminar todo: 
localStorage.clear()
*/

// console.log(String({nombre:'pepe'}))
// const user = {nombre: 'pepe'}

// localStorage.setItem('user', JSON.stringify(user))

// let usuarioFromLocal = JSON.parse(localStorage.getItem('user'))
// // get item siempre retorna string

// console.log(usuarioFromLocal)

// es imprtante uqe el string tenga notacion de objetos para que despues lo pueda volver a llamar y no buscar uno por uno


/*
no se pueden escribir objects o arrays

JSON: javascript object notation
*/

// string escrito como objeto (formato JSON) transformar un string a objeto
// '{"nombre": "pepe"}'

// parse permite transformar un string con notacion de objetos a un objeto
// console.log(JSON.parse('{"nombre": "pepe"}'))

// stringgify siquerenos un objeto transformado a string usanos este

// const producto = {
//     nombre: 'tv samsung',
//     precio: 700
// }
// let stringConNotacionDeObjeto = JSON.stringify(producto)
// console.log(stringConNotacionDeObjeto)

/*
=============================== EJERCICIO =====================================
*/

/*mejorar la funcion login para que el objeto retornado lo guarde en localStorage*/
/*guardar este objeto en localStorage */










