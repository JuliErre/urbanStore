import React, { useEffect } from 'react'
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useState, memo } from 'react';
import { Link } from 'react-router-dom';



function CartWidget() {
    const { cartList } = useContext(CartContext)
    const [cantidad, setCantidad] = useState()



    useEffect(() => {
        let cantidadTotal = null
        cartList.forEach(prod => cantidadTotal += prod.cantidad)

        setCantidad(cantidadTotal)

    }, [cartList])

    return (
        <div className="cartWidget">
            <Link to={'/cart'}> <FontAwesomeIcon icon={faShoppingCart} className="start" color="white" /> </Link>
            {cantidad ?
                <div className="cant">
                    <p>{cantidad}</p>
                </div>
                :
                <div>
                </div>
            }
        </div>
    )
}

export default CartWidget;