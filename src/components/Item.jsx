import React from 'react'
import ItemCount from './ItemCount';
import './Item.css'
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';



function Item({ product }) {

    function onAdd (cantidad) {
        console.log(cantidad)
    }
    return (
        <div className="cardProduct">
            <div className="productImgContainer">
                <img src={product.img} alt="Producto" className="productoImg" />
            </div>
            <div className="info">
                <div className="infoHead" >
                    <h4> {product.name} </h4>
                    <h3>${product.price}</h3>
                </div>
                <ItemCount stock={product.stock} onAdd={onAdd}/>
                <Link to={`/detalle/${product.id}`}>
                    <button className="btnBlue">Detalle</button>
                </Link>
            </div>
        </div>

    )

}

export default Item;