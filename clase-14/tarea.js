
/* 
Crear una funcion que se llame buscarProducto(string) recibira un string y por cada producto del array 
de productos verificara si el titulo tiene incluido el string buscado
Esta funcion debe retornar un array de productos
*/

const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'celular samsung 64gb',
        price: 1100,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 2000,
        marca: 'samsung'
    },
]

function buscarProducto(buscado){
    const resultadoDeBusqueda = []
    for (const producto of productos) {
        if (producto.title.includes(buscado.toLowerCase()) || producto.title.toUpperCase().includes(buscado.toUpperCase())){
            resultadoDeBusqueda.push(producto);
        }
    }
    return resultadoDeBusqueda
}
const resultado = buscarProducto('')
console.log(resultado)


    /*
    EJEMPLO:
    buscarProducto('noblex') //retorna:  
    [ 
        {
            title: 'tv noblex 65"',
            price: 6000,
            marca: 'noblex'
        },
        {
            title: 'tv noblex 50"',
            price: 4500,
            marca: 'noblex'
        }
    ]
    buscarProducto('celular')
    [
        {
            title: 'celular samsung 64gb',
            price: 4500,
            marca: 'samsung'
        },
        {
            title: 'celular samsung 128gb',
            price: 4500,
            marca: 'samsung'
        }
    ]
    
    */