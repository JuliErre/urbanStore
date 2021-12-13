import React, { useState } from 'react'
import './ItemCount.css'


/* <img src={logo} className="App-logo" alt="logo" />
<p>Hello Vite + React!</p>
<p>
  <button type="button" onClick={() => setCount((count) => count + 1)}>
    count is: {count}
  </button>
</p>
*/

function ItemCount() {
    const [count, setCount] = useState(0)
    
    const sumCount = () => {
        count < 10 ? setCount(count + 1) : console.log("no se puede sumar mas");
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
            <button className="btnBlue" onClick={() => console.log("la cantidad del carrito es " + count)}>Agregar al carrito</button>
            </div>
        </div>



    )
}

export default ItemCount