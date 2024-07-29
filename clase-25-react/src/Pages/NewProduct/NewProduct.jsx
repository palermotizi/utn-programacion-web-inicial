import React, { useState } from 'react'
import { useGlobalContext } from '../../Context/GlobalContext'

const NewProduct = () => {
    const {handleCreateProduct} = useGlobalContext()   

    const CATEGORIAS_DISPONIBLES = [
        'tecnologia',
        'hogar',
        'deporte',
    ]
    const [formValues, setFormValues] = useState(
        {
            categoria: ''
        }
    )

    const handleChangeValue = (e) => {
        const nameInput = e.target.name
        const selectedOption = e.target.value
        setFormValues({...formValues, [nameInput]: selectedOption})
    }
  return (
    <div>
        <h1>Crear producto</h1>
        <form onSubmit={handleCreateProduct}>
            <div>
                <label htmlFor="nombre">Nombre del producto</label>
                    <input type="text" name='nombre' id='nombre'/>
            </div>
            <div>
                <label htmlFor="descripcion">Descripcion</label>
                    <input type="text" name='descripcion' id='descripcion' />
            </div>
            <div>
                <label htmlFor="precio">Precio:</label>
                    <input type="number" id='precio' name='precio'/>
            </div>
            <div>
                <label htmlFor="stock">Stock</label>
                    <input type="number" id='stock' name='stock'/>
            </div>
            <div>
                <label htmlFor="codigo">Codigo</label>
                    <input type="number" id='codigo' name='codigo' />
            </div>
            <div>
                <label htmlFor="categoria">Seleccione una categoria</label>
                <select 
                    name="categoria" 
                    id="categoria" 
                    onChange={handleChangeValue} 
                    defaultValue={''}
                >
                    {CATEGORIAS_DISPONIBLES.map((categoria, index)=> 
                        <option 
                            key={index + categoria} 
                            value={categoria}
                        >
                            {categoria}
                        </option>
                    )}
                    <option value={''} disabled>No seleccionado</option>
                </select>
            </div>
            <div>
                <label htmlFor="thumbnail">ingrese una direccion de imagen</label>
                    <input type="text" name='thumbnail' id='thumbnail' />
            </div>
            <input type="submit" value='crear producto' />
        </form>
    </div>
  )
}

export default NewProduct