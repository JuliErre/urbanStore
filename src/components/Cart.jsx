import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'


function Cart() {
    const [total,setTotal] = useState()

    const { cartList, clearCart, removeProduct } = useContext(CartContext)
    console.log(CartContext)
    useEffect(()=> {
        let totals = 0
     cartList.forEach(prod=> {
         totals+=prod.precioTotal
         
     });
     setTotal(totals)
    }, [cartList])

    return (
        <div>
            <button onClick={clearCart}>Vaciar carrito</button>
            <p>{total}</p>
            <div className="cartList">
                {cartList.length ?
                    cartList.map(prod =>
                        <div className="itemCart" key={prod.id}>
                            <img src={prod.img} alt="" />
                            <h3>{prod.name}</h3>
                            <h4>{prod.cantidad}</h4>
                            <h4> $ {prod.precioTotal} </h4>
                            <button onClick={() =>removeProduct(prod)}>eliminar</button>
                        </div>
                    )
                    : <div>
                        <h3>Carrito Vacio</h3>
                        <Link to={'/productos'} > <button className="btnBlue"> Volver a productos </button> </Link>
                    </div>
                }

                


            </div>
            <button>Terminar compra</button>
        </div>


    )

}

export default Cart