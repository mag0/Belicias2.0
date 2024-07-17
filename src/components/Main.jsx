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
                
                <div className="filter-container">
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
                        <h3 style={{color:'#F7C608'}}>{producto.nombre}</h3>
                    </div>
                    ))}
                </div>

                <div id='quienSoy' className="linea-con-texto">Conoceme</div>

                <section className="quien-soy">
                    <img src='perfil.jpeg' alt="" />                    
                    <h1>María Belén Guerreiro</h1>
                    <p>
                        ¡Hola! Soy Laura Martínez, una apasionada pastelera con 10 años de experiencia en 
                        la creación de deliciosos y hermosos postres. Mi amor por la repostería comenzó desde joven, 
                        experimentando con diferentes recetas en la cocina de mi familia. Me especializo en tortas 
                        personalizadas, cupcakes gourmet y postres sin gluten, pero siempre estoy abierta a nuevos 
                        desafíos y a personalizar mis creaciones según los gustos y necesidades de mis clientes. Cada 
                        uno de mis productos es elaborado con ingredientes de la más alta calidad y mucho cariño, 
                        asegurándome de que cada bocado sea una experiencia inolvidable. Ya sea para una boda, cumpleaños, 
                        aniversario, o cualquier ocasión especial, me esfuerzo por hacer que mis postres no solo sean 
                        deliciosos, sino también una pieza central que sorprenda y deleite a todos los invitados. Estoy 
                        deseando poder endulzar tu día con mis creaciones. ¡No dudes en ponerte en contacto conmigo para 
                        hacer realidad tu próxima idea deliciosa!.
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
                        123 Calle Principal, Ciudad, País
                    </p>
                </section>
            </main>
        </>
    )
}

export default Section