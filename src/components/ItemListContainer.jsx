import React from 'react'
import ItemCount from './ItemCount';
import './ItemListContainer.css'

function ItemListContainer(props){
    return(
        <div className="ItemListContainer">
            <h3 style={{textAlign: 'center'}}> {props.saludo} </h3>
            <ItemCount/>
        </div>
       
    )

    
}

export default ItemListContainer;