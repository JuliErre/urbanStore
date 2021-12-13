import React from 'react'
import './ItemDetail.css'

function ItemDetail({ product }) {
    console.log(product)
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
                <button  className="btnBlue">Comprar</button>
                <button className="btnBlue">Agregar al carrito</button>
                </div>
            </div>



        </div>

    )

}

export default ItemDetail

