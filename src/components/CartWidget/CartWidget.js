import React from 'react'
import logo from'../../assets/carrito1.png'
import './CartWidget.css'
const CartWidget = () => {
  return (
    <div className='navbar-logo'>
        <img className='navbar-img'src={logo} alt="cart widget"></img>
    </div>
  )
}

export default CartWidget