import React from 'react'
import ItemCount from './ItemCount';
import './ItemListContainer.css'
import List from '../List.json'
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Loading from '../loading.svg';
import { useParams } from 'react-router-dom';
import ItemFilter from './ItemFilter';
import { doc, getDoc, getFirestore, collection, getDocs,query,where } from 'firebase/firestore'



// const getFetched = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(List)
//     }, 3000)
// })


function ItemListContainer(props) {
    const [List, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();
    // if (category) {
    //     useEffect(() => {
    //         getFetched.then(data => setList(data.filter(prod => prod.marca == category)))
    //             .catch(err => console.log(err))
    //             .finally(() => setLoading(false))

    //     }, [category]);
    // }

    // else {
    //     useEffect(() => {
    //         getFetched.then(data => setList(data))
    //             .catch(err => console.log(err))
    //             .finally(() => setLoading(false))

    //     }, [category]);


    useEffect(() => {
        if (!category) {
            const db = getFirestore();
            const queryCollection = collection(db, 'productos')
            getDocs(queryCollection)
                .then(resp => setList(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
        else {
            const db = getFirestore();
            const queryCollection = query(collection(db,'productos'),where('marca','==',category))
            getDocs(queryCollection)
                .then(resp => setList(resp.docs.map(prod =>({id: prod.id, ...prod.data()}))))
                .catch(err =>console.log(err))
                .finally(() => setLoading(false))

        }
    }, [category])

    return (
        <>
            <div className="filtro">
                <ItemFilter />
            </div>
            <div className="ItemListContainer">
                <h3 style={{ textAlign: 'center' }}> {props.saludo} </h3>
                {loading ? <img src={Loading} alt="Cargando" className="loading" /> :
                    <ItemList products={List} />}
            </div>
        </>

    )


}

export default ItemListContainer;