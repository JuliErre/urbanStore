import React from 'react'
import ItemCount from './ItemCount';
import './Item.css'



function Item({ product }) {
    return (
        <div className="cardProduct">
            <img src={product.img} alt="Producto" className="productoImg" />
                <h4> {product.name} </h4>
                <h3>$ {product.price} </h3>
            <ItemCount />
        </div>

    )

}

export default Item;