import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'
function NavBar() {
    return (
        <nav>
            <div className="imgNav">
                <img src="/src/assets/Urban.png" alt="" />
            </div>
            <ul>
                <li>Home</li>
                <li>Ayuda</li>
                <li>Cuenta</li>
                <li>Contacto</li>
            </ul>
            <CartWidget/>
        </nav>
    )

}


export default NavBar