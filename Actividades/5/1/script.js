let edad = prompt('ingresa tu edad')
if (edad < 0) {
    console.log('Edad no válida')
} else if (edad < 13) {
    console.log('Eres un niño')
} else if (edad >= 13 && edad <= 17) {
    console.log('Eres un adolescente')
} else if (edad >= 18 && edad <= 64) {
    console.log('Eres un adulto')
} else if (edad >= 65) {
    console.log('Eres una persona mayor')
}

/*
corregido: no poner espacios entre variable y parentesis por ejemplo prompt
*/