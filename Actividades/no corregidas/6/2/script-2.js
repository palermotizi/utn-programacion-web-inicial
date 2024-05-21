/*
Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta
*/

function saludar(){
    return ('Hola' + nombre)
} 

let nombre = prompt('ingresa tu nombre')
alert(saludar(nombre))

