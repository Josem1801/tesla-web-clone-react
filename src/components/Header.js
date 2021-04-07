import React from 'react'
import './css/Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'
import MenuIcon from '@material-ui/icons/Menu';
import CloseMenuIcon from '@material-ui/icons/Close'
import {Link} from 'react-router-dom'
import { useState } from 'react/cjs/react.development';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/"><img src={TeslaLogo} alt=""/></Link>
            </div>

            <div className="header__center">
                <a href='/model-s'>Model S</a>
                <a href='/model-3'>Model 3</a>
                <a href='/model-X'>Model X</a>
                <a href='/model-Y'>Model Y</a>
                <a href='#'>Solar Roof</a>
                <a href='#'>Solar Panel</a>
            </div>

            <div className="header__rigth">
                <p>Tesla Account</p>
                <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <CloseMenuIcon/>: <MenuIcon/>}
                </div>
                <div className={`header__rigth__menu ${isMenuOpen &&("header__rigth__menu__toggle")}`}>
                    <p>INVENTARIO EXISTENTE</p>
                    <p>INVENTARIO USADO</p>
                    <p>ROADSTER</p>
                    <p>ENERGÍA</p>
                    <p>PRUEBA DE MANEJO</p>
                    <p>CARGA</p>
                    <p>UBÍQUENOS</p>
                    <p>PRUEBA DE MANEJO</p>
                    <p>MÉXICO</p>
                </div>
            </div>
         
        </div>
    )
}

export default Header
