import React, { useState } from 'react'
import './ItemCount.css'


function ItemCount({stock, onAdd}) {
    
    const [count, setCount] = useState(0)
    
    const sumCount = () => {
        count < stock ? setCount(count + 1) : console.log("no se puede sumar mas");
    }
    
    const resCount = () => {

        count > 0 ? setCount(count - 1) : console.log("no se puede restar mas");
    }

    return (

        <div className="ItemCountContainer">
            <div className="itemHead">
                <div>
                    <button className="btnCount" onClick={sumCount}>+</button>
                </div>
                <p>{count}</p>
                <div className="less">
                    <button className="btnCount" onClick={resCount}>-</button>
                </div>
            </div>
            <div>
            <button className="btnBlue" disabled={count === 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>



    )
}

export default ItemCount