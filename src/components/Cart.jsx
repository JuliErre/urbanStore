import React,{ useContext }  from 'react'
import { CartContext } from '../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';




function Cart() {
  

    const { cartList, clearCart, removeProduct, total } = useContext(CartContext)
    

    return (



        <div className="cartList">
            <div className="head">
                <div>
                    <button className="btnBlack" onClick={clearCart}>Vaciar carrito</button>
                   <Link to={'/form'}> <button className="btnBlack">Terminar compra</button> </Link>
                </div>
                <h4>Total: $ {total} </h4>
            </div>
            {!cartList.length ?
                <div className="carritoVacio">
                    <h3>Carrito Vacio</h3>
                    <Link to={'/productos'} > <button className="btnBlue"> Volver a productos </button> </Link>
                </div>
                :
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>SubTotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList.map(prod =>
                                <tr key={prod.id}>
                                    <td><img src={prod.img} alt="" className="imgCart" /> </td>
                                    <td><h3>{prod.name}</h3></td>
                                    <td><h4>{prod.cantidad}</h4></td>
                                    <td><h4> $ {prod.price}</h4></td>
                                    <td><h4>  $ {prod.precioTotal} </h4></td>
                                    <td><button onClick={() => removeProduct(prod)} > <FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            }


        </div>




    )

}

export default Cart