### Calculadora

## Funcionalidades:

- Login
  -Solicitar un email
  -Solicitar un password

- Calcular Operaciones

  - ## Operaciones Disponibles:
    -

- Historial:
  - agregarAlHistorial
    -mostrarHistorial/renderizarHistorial

## Utilidades:

-Validaciones:
-Numero
-Password
-Email
-OperacionesCalculadora

## Reglas:

Los ejercicios se pueden resolver de muchas formas
Si crees necesario usar funciones, las podes usar
Cumplir en la medida de lo posible con el principio: DRY, KISS

ESTO ESTA MAL(no hay que resumir):
function a(n){
return abc-z
}

## Login

Debo tener una function llamada login que active toda la logica del login

Logica del login:

Vamos a solicitar al usuario un email
Validaremos que sea un email con regex:
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('stringAValidar)

EJEMPLO:
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('pepe@gmail.com')

Vamos a solicitar al usuario una password
Validar que tenga mas de 6 caracteres, que tenga al menos 1 mayuscula y que no sea '' o null

Si todo esta correcto dirá por alerta('Usuario {email} registrado con exito') y retornara al usuario como objeto:

EJEMPLO:

login() // retorna el usuario {
email: 'value@gmail.com',
password: 'Pepe123'
}

## calculadora de operaciones

crear function llamada calculadora() que de inicio a la sgte logica
-operaciones disponibles: - +

solicitar operacion y verificar que la op sea valida (si esta dentro de las op disponibles).
solicitar un numero 1 y validarlo
solicitar un numero 2 y validarlo

al finalizar las solicitudes mostrar el resultado por alerta de la sgte manera:
si la op es '+' se sumaran los numeros y se mostrara el sgte mensaje:
'el resultado de {numero1} {operacion} {numero2} es {resultado}
