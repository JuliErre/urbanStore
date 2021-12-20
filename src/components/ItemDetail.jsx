import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import ItemCount from './ItemCount'
import './ItemDetail.css'

function ItemDetail({ product }) {
    console.log(product.stock)
    const [addCart, setAddCart] = useState(false);

    function onAdd (cantidad) {
        setAddCart(true);
        console.log(cantidad)
    }
    return (

        <div className="detailCard">
            <div className="imgDetailContainer">
                <img className="imgDetail" src={product.img} alt="" />
            </div>
            <div className="infoDetail">
                <h1>{product.name}</h1>
                <h3>$ {product.price} </h3>
                <p>{product.desc}</p>
                <div className="detailBtns">
                    {!addCart ? <ItemCount stock={product.stock} onAdd={onAdd} /> :
                        <Link to="/cart"> <button className="btnBlue"> Ir Carrito </button> </Link>
                    }
                    <button className="btnBlue">Comprar</button>
                </div>
            </div>



        </div>

    )

}

export default ItemDetail

