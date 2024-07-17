import React from 'react'
import '../css/header.css'

const Header = () => {

    return (
    <>
        <header>

            <div className="imagen-header">
                <img src='logo.jpeg' alt="oso" className="logo"/>
            </div>

            <h1>Pasteleria Guerreiro</h1>

            <nav className="nav-header">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#menu">Productos</a></li>
                    <li><a href="#quienSoy">Conoceme</a></li>
                    <li><a href="#contacto">Contactanos</a></li>
                </ul>
            </nav>

        </header>
        </>
  )
}

export default Header
