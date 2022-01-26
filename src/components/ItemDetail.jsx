import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ product }) {
    const [addCart, setAddCart] = useState(false);
    const [precioTotal, setPrecioTotal] = useState(0);
    const { cartList, addToCart } = useContext(CartContext);

    function onAdd(cantidad) {
        let cantidadTotal = parseInt(cantidad) * parseInt(product.price);
        addToCart({ ...product, cantidad: cantidad, precioTotal: cantidadTotal });
        setAddCart(true);
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
                    {!addCart ? (
                        <ItemCount stock={product.stock} onAdd={onAdd} />
                    ) : (
                        <Link to="/cart">
                            {" "}
                            <button className="btnBlue"> Ir Carrito </button>{" "}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
