import React from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext([])


function CartContextProvider({ children }) {
    const [cartList, setCarList] = useState([])


    function addToCart(prod) {
        const index = cartList.findIndex(p => p.id == prod.id)
        if (index > -1) {
            const oldCant = cartList[index].cantidad
            const oldTotal = cartList[index].precioTotal

            cartList.splice(index, 1)

            setCarList([...cartList,{...prod, cantidad:prod.cantidad + oldCant, precioTotal: prod.precioTotal + oldTotal}])

            //cartList[index].cantidad += prod.cantidad
            
        }

        else setCarList([...cartList, prod])
    }

    function clearCart() {
        setCarList([])
    }

    function removeProduct(prod) {
        const index = cartList.findIndex(p => p.id == prod.id)
        cartList.splice(index, 1)
        setCarList([...cartList])

    }



    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            removeProduct

        }}>
            {children}

        </CartContext.Provider>
    )

}

export default CartContextProvider