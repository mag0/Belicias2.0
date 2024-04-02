import React from 'react'
import '../css/header.css'
import logo from '../img/logo.png'
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { FaX } from "react-icons/fa6";

const Header = () => {

    const [menuResponsive, setMenuResponsive] = useState(true)

    const modoResponsive = ()=>{
        setMenuResponsive(!menuResponsive)
    } 

    return (
    <>
        <header className={menuResponsive ? "menu-responsive-activo": "menu-responsive-inactivo"}>
            <div className="imagen-header">
                <img src={logo} alt="oso" className="logo" />
                <h1>Belicias</h1>
            </div>

            <div className="cont-nav-redes">
                <nav className="nav-header">
                    <li className="li">
                        <a href="#Productos">Productos</a>
                    </li>
                    <li className="li">
                        <a href="#">Instagram</a>
                    </li>
                    <li className="li">
                    <a href="#">Contactanos</a>
                    </li>
                </nav>
                <div className="redes-header">
                    <li onClick={modoResponsive} className="li">
                            <IoMdMenu className='icon icon-responsive'></IoMdMenu>
                    </li>
                </div>
            </div>
        </header>

        <header className={menuResponsive ? "menu-responsive-inactivo": "menu-responsive-activo menu-responsive-ac"}>
            <nav>
                <li className="menu-especial">
                    <a href="#">Menú</a>
                    <FaX onClick={modoResponsive} className='icon icon-responsive'></FaX>
                </li>
                <li className="li">
                    <a href="#">Productos</a>
                </li>
                <li className="li">
                    <a href="#">Instagram</a>
                </li>
                <li className="li">
                    <a href="#">Contáctanos</a>
                </li>
                <li className="li">
                    <a href="#">Cuenta</a>
                </li>
            </nav>
        </header>
        </>
  )
}

export default Header

