import React from 'react'
import '../css/producto.css'

const Producto = ({imagen,nombre,precio}) => {

    return (
    
    <>
        <div className='producto'>
            <img className='imagen-producto' src={imagen} alt={nombre} />
            <h5 className='h5-producto'>$ {precio}</h5>
            <h4 className='h4-producto'>{nombre}</h4>
        </div>
    </>
  )
}

export default Producto