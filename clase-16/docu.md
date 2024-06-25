## historial

-agregarAlHistorial
-mostrarHistorial/renderizarHistorial

ESTO NO ES FUNCION: intentar obtener el historial del localStorage si nos devudlve null el getItem deberemos guardar un array vacio en el localStorage

vamos a crear en nuestro programa la funcion guardarEnHistorial que reciba un objeto y lo guarde en el local storage dentro del array historial.
vamos a crear funcion llamada obtener historial que nos devuelva el array historial. Debe retornar un array

EJEMPLO DE USO:
obtenerHistorial() => retornara un array historial [{}, {}]
guardarEnHistorial(objeto) => agrega al array guardado en localStorage el objeto recibido.

cada elemento del historial tendra el sig formato:
{
accion: 'calculadora'
operacion: '+' || '-',
a: number,
b: number,
resultado: number,
fecha: dd/mm/aaaa || '18/02/2024'
}

esto significa que cuando usemos guardar en historial debemos guardar el objeto de esa manera

=============================================================================

crear funcion llamada renderizar historial:
va a llamar al historial guardado y por cada elemento del historial vamos a crear la siguiente plantila:
`Accion: {accion}
Operacion: {operacion}
Numeros: {a}, {b}
Resultado: {resultado}
Fecha: {fecha}`

y la acumularan en un string y al finalizar el recorrido mostraran el string por alerta

para hacer el ejercicio recuerden previamente guardar algunas operaciones en el historial y borrar las anteriores

guardarEnElHistorial({
accion: 'calculadora'
operacion: '+',
a: 3,
b: 3,
resultado: 6,
fecha: '18/02/2024'
})
