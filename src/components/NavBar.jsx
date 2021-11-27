import React from 'react'
import './NavBar.css'
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
        </nav>
    )

}


export default NavBar