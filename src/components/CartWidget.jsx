import React from 'react'
import './CartWidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
}

export default CartWidget;