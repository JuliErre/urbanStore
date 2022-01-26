import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <nav>
            <div className="imgNav">
            <img src="https://i.ibb.co/8BymH6v/Urban.png" alt="Urban" />
            </div>
            <ul className={"navbar"}>
                <li><Link className="navLink "to={'/'} >Home</Link></li>
                <li><Link className="navLink "to={'/productos'}>Productos</Link></li>
                <li><Link className="navLink "to={'/ayuda'}>Ayuda</Link></li>
                <li><Link className="navLink "to={'/cuenta'}>Cuenta</Link></li>
                <li><Link className="navLink "to={'/contacto'}>Contacto</Link></li>
            </ul>
                <CartWidget/> 
        </nav>
    )

}


export default NavBar