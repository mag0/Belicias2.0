import React from 'react'

// import '../css/producto.css'


const Producto = ({imagen,nombre}) => {
    const rutaCompleta = './src/img/' + imagen;

    return (
    <>
        <div className='producto'>
            <img src={rutaCompleta} alt={nombre} />
            <h3 style={{color:'#F7C608'}}>{nombre}</h3>
        </div>
    </>
  )
}

export default Producto