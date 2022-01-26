import React,{ useContext }  from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'


function Item({ product }) {
    const {cartList, addToCart} = useContext(CartContext)

    function onAdd (cantidad) {
        let cantidadTotal = parseInt(cantidad) * parseInt(product.price)
        addToCart({...product,cantidad:cantidad,precioTotal:cantidadTotal})
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