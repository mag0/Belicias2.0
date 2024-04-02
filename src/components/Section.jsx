import React from 'react'
import lista from '../Productos.json'
import Producto from './Producto.jsx'
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import '../css/section.css';

const Section = () => {

    const productos = lista.productos
    const [buscador,setBuscador] = useState('')
    const [minimo, setMinimo] = useState(0)
    const [maximo, setMaximo] = useState(100000)
    const [sinResultados, setSinResultados] = useState(false)
    const productosBuscados = productos
    .filter(e=>e.nombre.toLowerCase().includes(buscador)
    &&e.precio>=minimo && e.precio <= maximo)

    const sinProductos = ()=>{
        if(productosBuscados.length == 0){
        setSinResultados(true)
        }
    } 

    const buscar = (e)=>{
        setBuscador(e.target.value)
        sinProductos()
        
    }

    const cambiarMinimo = (e)=>{
        setMinimo(e.target.value)
        sinProductos()
    }
    
    const cambiarMaximo = (e)=>{
        sinProductos()
        if(e.target.value != 0){
            setMaximo(e.target.value)
        }else{
            setMaximo(100000)
        }
    }

    return (
        <>

            <div id='Productos' className="seccion-buscador">
                <div className="buscador">
                    <IoSearch className='icon'></IoSearch>
                    <input onChange={buscar} className='input' type="text" />
                </div>
                <div className='filtro-precio'>
                    <label htmlFor="Min">Min</label>
                    <input onChange={cambiarMinimo} type="number" name="Min" id="Min" />
                    <label htmlFor="Max">Max</label>
                    <input onChange={cambiarMaximo} type="number" name="Max" id="Max" />
                </div>
            </div>

            <section className='productos'>
            {
                    productosBuscados.map((list, index)=>{
                        return <div key={index}>
                                <Producto 
                                nombre={list.nombre}
                                precio={list.precio}
                                imagen={list.imagen}
                                ></Producto>
                        </div>
                    })
                    
                }
                
            </section>

            <div className={sinResultados ? "sin-resultados-activado" : "sin-resultados-desactivado"}>
                    <h4>No se han encontrado resultados</h4>
            </div>
        </>
    )
}

export default Section