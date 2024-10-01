import React from 'react'
import '../css/main.css';
import '../css/secciones/menu.css';
import '../css/secciones/quienSoy.css';
import '../css/secciones/contactanos.css';
import productos from '../productos.json';
import { useState } from 'react';

const Section = () => {
    const [categoria, setCategoria] = useState('');

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
    }

    const productosFiltrados = categoria === '' ? productos : productos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());

    return (
        <>
            <main>
                <div id='menu' className="linea-con-texto">Productos</div>
                
                <div style={{display:"none"}} className="filter-container">
                    <label htmlFor="categoria">Filtrar por Categoría:</label>
                    <select id="categoria" value={categoria} onChange={handleCategoriaChange} className="categoria-select">
                        <option value="">Todas</option>
                        <option value="tortas">Tortas</option>
                        <option value="cupcakes">Cupcakes</option>
                        <option value="postres">Postres</option>
                        <option value="galletas">Galletas</option>
                        <option value="sin-gluten">Sin Gluten</option>
                    </select>
                </div>

                <div className="menu">
                    {productosFiltrados.map(producto => (
                    <div key={producto.id}>
                        <img src={`${producto.imagen}`} alt={producto.nombre} />
                        <h3 style={{color:'#CB6CE6'}}>{producto.nombre}</h3>
                    </div>
                    ))}
                </div>

                <div id='quienSoy' className="linea-con-texto">Conoceme</div>

                <section className="quien-soy">
                    <img src='perfil.png' alt="" />                    
                    <h1>María Belén Guerreiro</h1>
                    <p>
                        Apasionada por la pastelería, llevo años perfeccionando mis recetas para 
                        ofrecer productos caseros y deliciosos. Desde tortas y postres hasta galletas 
                        y panes, cada creación es el resultado de dedicación y amor por la repostería. 
                        Mi objetivo es brindar productos de calidad, hechos a mano, utilizando ingredientes 
                        frescos y naturales. ¡Descubre mis dulces y comparte momentos inolvidables con los tuyos!
                    </p>
                </section>

                <div id='contacto' className="linea-con-texto">Contactanos</div>

                <section className="contactanos">
                    <p>
                        <span className="icon">📞</span>
                        <a href="tel:+123456789">+123 456 789</a>
                    </p>
                    <p>
                        <span className="icon">✉️</span>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                    <p>
                        <span className="icon">📍</span>
                        Evaristo Carriego 1306
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