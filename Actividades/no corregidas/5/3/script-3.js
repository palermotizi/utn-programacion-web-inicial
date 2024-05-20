let lado1 = prompt ('introduce la longitud del primer lado del triangulo')
let lado2 = prompt ('introduce la longitud del segundo lado del triangulo')
let lado3 = prompt ('introduce la longitud del tercer lado del triangulo')
if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log('longitudes no validas')
} else if (lado1 === lado2 && lado2 === lado3) {
    console.log('el triangulo es equilatero')
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log('el triangulo es isósceles')
} else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    console.log('el triangulo es escaleno')
}