let numero = prompt ('ingresa una calificación numérica entre 0 y 100')
if (numero < 0 || numero > 100) {
    console.log('Calificación no valida')
} else if (numero >= 90 && numero <= 100) {
    console.log('A')
} else if (numero >=80 && numero <= 89) {
    console.log('B')
} else if (numero >= 70 && numero <=79) {
    console.log('C')
} else if (numero >= 60 && numero <= 69) {
    console.log('D')
} else if (numero >= 0 && numero <= 59) {
    console.log('E')
}