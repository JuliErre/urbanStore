import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react';
import products from '../List.json'
import { useParams } from 'react-router-dom';
import Loading from '../loading.svg';
import './ItemDetailContainer.css'


const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    },2000)
})



function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getItem.then(data => setProduct(data.find(prod => prod.id == id)))
            .finally(() => setLoading(false))
    }, [id]);

    
  


    return (

        <div className="itemDetailContainer">
            {loading ? <img src={Loading} alt="Cargando" className="loading" /> :
                <ItemDetail key={product.id} product={product} />}
        </div>

       

    )
    
}


export default ItemDetailContainer