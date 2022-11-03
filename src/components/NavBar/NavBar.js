import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {
    return (
    <div className='menu-navbar'>
        <h1 className='title'>Barber Shop Rosario</h1>
        <ul className='items'>
            <li>
                <a href='' className='items-list'>Accesorios</a>
            </li>
            <li>
                <a href='' className='items-list'>Equipamientos</a>
            </li>
            <li>
                <a href='' className='items-list'>Mi Cuenta</a>
            </li>
        </ul>
<CartWidget/>
    </div>
)
}

export default NavBar