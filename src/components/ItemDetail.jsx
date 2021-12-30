import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react/cjs/react.development'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import './ItemDetail.css'

function ItemDetail({ product }) {
    console.log(product.stock)
    const [addCart, setAddCart] = useState(false);
    const [precioTotal, setPrecioTotal] = useState(0);
     const {cartList, addToCart} = useContext(CartContext)

    
    function onAdd (cantidad) {
        let cantidadTotal = parseInt(cantidad) * parseInt(product.price)
        addToCart({...product,cantidad:cantidad,precioTotal:cantidadTotal})
        setAddCart(true)
    }

    console.log(cartList)
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
                    
                </div>
            </div>

        



        </div>

    )

}

export default ItemDetail

