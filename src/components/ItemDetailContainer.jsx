import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react';
import products from '../List.json'
import { useParams } from 'react-router-dom';
import Loading from '../loading.svg';
import './ItemDetailContainer.css'
import {doc, getDoc, getFirestore,  collection, getDocs, query} from 'firebase/firestore'


// const getItem = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(products)
//     },2000)
// })



function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = doc(db,'productos',id)
        getDoc(queryCollection)
        .then(res => setProduct({id: res.id,...res.data()}))
        .catch(err => console.log(err) )
        .finally(() => setLoading(false) )
    },[id])
    
    
    // useEffect(() => {
    //     getItem.then(data => setProduct(data.find(prod => prod.id == id)))
    //         .finally(() => setLoading(false))
    // }, [id]);
    

    return (

        <div className="itemDetailContainer">
            {loading ? <img src={Loading} alt="Cargando" className="loading" /> :
                <ItemDetail key={product.id} product={product} />}
        </div>

       

    )
    
}


export default ItemDetailContainer