let temperatura = prompt ('ingrese temperatura en grados celsius')
if (isNaN(temperatura)) {
    console.log('temperatura no valida')
} else if (temperatura <= 0) {
    console.log('estado solido del agua')
} else if (temperatura < 100) {
    console.log('estado liquido del agua')
} else {
    console.log('estado gaseoso del agua')
} 

// cuando queremos que se valide un num ponemos isNaN