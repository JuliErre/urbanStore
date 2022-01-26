import React from 'react'
import { Link } from 'react-router-dom';
import './ItemFilter.css'

function ItemFilter (){
    return(
        <div className="ItemFilter">
            <div>
            <h4>Categoria</h4>
            <h5>Marcas</h5>
            </div>
            <ul className="marcas">
                <li><Link className="marcaLink "to={'/productos/adidas'} >Adidas</Link></li>
                <li><Link className="marcaLink "to={'/productos/reebok'}>Reebok</Link></li>
                <li><Link className="marcaLink"to={'/productos/nike'}>Nike</Link></li>
            </ul>
        </div>
    )

}


export default ItemFilter