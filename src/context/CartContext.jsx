import React from 'react'
import { useState, useEffect, createContext } from 'react'

export const CartContext = createContext([])


function CartContextProvider({ children }) {
    const [cartList, setCarList] = useState([])
    const [total, setTotal] = useState()

    useEffect(() => {
             let precioTotal = 0
             cartList.map(prod => {
                 precioTotal += prod.precioTotal
    
             });
             setTotal(precioTotal)
         }, [cartList])


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

    // function getTotal(){
    //     let precioTotal = 0
    //     cartList.map(prod => {
    //         precioTotal += prod.precioTotal

    //     });

    //     setTotal(precioTotal)
    // }



    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            removeProduct,
            total

        }}>
            {children}

        </CartContext.Provider>
    )

}

export default CartContextProvider