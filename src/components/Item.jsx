import React from 'react'
import ItemCount from './ItemCount';
import './Item.css'
import { Link } from 'react-router-dom';



function Item({ product }) {
    return (
        <div className="cardProduct">
            <img src={product.img} alt="Producto" className="productoImg" />
                <h4> {product.name} </h4>
                <h3>$ {product.price} </h3>
            <ItemCount />
            <Link to={`/detalle/${product.id}`}>
            <button className="btnBlue">Detalle</button>
            </Link>
        </div>

    )

}

export default Item;