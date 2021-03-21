import React from 'react'
import './css/Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'
import MenuIcon from '@material-ui/icons/Menu';
import CloseMenuIcon from '@material-ui/icons/Close'

const Header = ({isMenuOpen, setIsMenuOpen}) => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt=""/>
            </div>

            <div className="header__center">
                <p>Model 5</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>

            <div className="header__rigth">
                <p>Tesla Account</p>
                <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <MenuIcon/>: <CloseMenuIcon/>}
                </div>
                <div className={`header__rigth__menu ${!isMenuOpen &&("header__rigth__menu__toggle")}`}>
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
