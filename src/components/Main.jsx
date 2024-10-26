import React from 'react'
import '../css/main.css';
import '../css/secciones/menu.css';
import '../css/secciones/quienSoy.css';
import '../css/secciones/contactanos.css';
import productos from '../../public/json/productos.json';
import { useState } from 'react';

const Section = () => {
    const [categoria, setCategoria] = useState('');

    // const handleCategoriaChange = (e) => {
    //     setCategoria(e.target.value);
    // }

    const productosFiltrados = categoria === '' ? productos : productos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());

    return (
        <>
            <main>
                <div id='menu' className="linea-con-texto">Productos</div>
                
                {/* <div className="filter-container">
                    <label htmlFor="categoria">Filtrar por Categoría:</label>
                    <select id="categoria" value={categoria} onChange={handleCategoriaChange} className="categoria-select">
                        <option value="">Todas</option>
                        <option value="tortas">Tortas</option>
                        <option value="cupcakes">Cupcakes</option>
                        <option value="postres">Postres</option>
                        <option value="galletas">Galletas</option>
                        <option value="sin-gluten">Sin Gluten</option>
                    </select>
                </div> */}

                <div className="menu">
                    {productosFiltrados.map(producto => (
                    <div key={producto.id}>
                        <img src={`img/${producto.imagen}`} alt={producto.nombre} />
                        <h3 style={{color:'#CB6CE6'}}>{producto.nombre}</h3>
                    </div>
                    ))}
                </div>

                <div id='quienSoy' className="linea-con-texto">Conoceme</div>

                <section className="quien-soy">
                    <img src='img/perfil.png' alt="" />                    
                    <h1>María Belén Guerreiro</h1>
                    <p>
                    Hace un par de años descubrí el maravilloso mundo de la pastelería y, desde entonces, no he parado de batir. Adoro cocinar tortas, masas y galletas. Me encanta diseñar formas, nuevas decoraciones y probar rellenos. Es un placer plasmar en mis productos los deseos y preferencias de mis clientes, y que mis preparaciones los dejen satisfechos y felices. Cocino para deleitarme y para que quienes compran mis productos también lo hagan.
                    Elegí lo que más te guste y descubrí cómo estas delicias pueden alegrar tu día. ¡Contá conmigo para endulzar tus celebraciones!
                    </p>
                </section>

                <div id='contacto' className="linea-con-texto">Contactanos</div>

                <section className="contactanos">
                    <p>
                        <span className="icon">✉️</span>
                        <a href="mailto:maryy.belu1@gmail.com">maryy.belu1@gmail.com</a>
                    </p>
                    <p>
                        <span className="icon">📸</span>
                        <a href="https://www.instagram.com/belu_guerreiro/">Instagram</a>
                    </p>
                </section>
            </main>
        </>
    )
}

export default Section