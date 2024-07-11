## npm create vite@latest

proyect name
package name
variant: javaScript

## PACKAGE.JSON:

<!-- DEPENDENCIES Y DEVDEPENDENCIES -->

lista de paquetes que debemos instalar para que el proyecto funcione (para que el proyecto de react se ejecute)

Cuando se instalan las dependencies, lo harán en una carpeta llamada node_modules

Para instalar las dependencies debemos ejecutar: npm install (se instala node_modules)

nunca subir el nodemodule al github por el maximo de tamaño de transferencia. Para eso existe el .gitignore

al finalizar la descarga se crea un archivo package-lock.json pero NO SE TOCA. Es un objeto que tiene la lista de paquetes. Tiene info mas detallada que el package.json

hay que leer los scripts del package json => acciones disponibles que nos permite el proyecto

para verlo en live server:
para ejecutar un script del json => escribir npm run script-name
(reemplazar script-name por el nombre el scrippt)
