import React from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext([])


function CartContextProvider({children}){
    const [cartList, setCarList] = useState([])
    

    function addToCart(prod){
        const index = cartList.findIndex(p => p.id == prod.id)
        if(index > -1){

            cartList[index].cantidad += prod.cantidad
            cartList[index].precioTotal += prod.precioTotal
        }

        else setCarList([...cartList,prod])
    }

    function clearCart() {
        setCarList([])
    }

    function removeProduct(prod){
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