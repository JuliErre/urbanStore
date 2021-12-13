import React from 'react'
import ItemCount from './ItemCount';
import './ItemListContainer.css'
import List from '../List.json'
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Loading from '../loading.svg';
import { useParams } from 'react-router-dom';

const getFetched = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(List)
    }, 3000)
})


function ItemListContainer(props){
    const [List, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        getFetched.then(data => setList(data))
        .catch(err => console.log(err) )
        .finally(() => setLoading(false))

    }, []);
    return(
        <div className="ItemListContainer">
            <h3 style={{textAlign: 'center'}}> {props.saludo} </h3>
            {loading ? <img src={Loading} alt="Cargando" className="loading"/>:
            <ItemList products = {List} />}
        </div>
       
    )

    
}

export default ItemListContainer;