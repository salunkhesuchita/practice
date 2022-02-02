import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import styles from "./Styling/SpecificProduct.module.css"
import { AuthContext } from '../context/AppContextProvider';


const SpecificProduct = () => {
    const [product, setProduct] = useState([]);
    const [changeBtn, setChangeBtn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();
    const { data, fetchData } = useContext(AuthContext)


    useEffect(() => {
        fetchCartData(id);
    }, [])
    const fetchCartData = () => {
        console.log(id)
        setIsLoading(true)
        axios.get(`https://restorent-details.herokuapp.com/items/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => setIsError(true))
            .finally(() => setIsLoading(false))
    }
    const addToCart = () => {
        const array = [...data]
        const updated = array.find((item) => item.id === id)
        // console.log(array[3].id, updated, id)

        product.cart = !product.cart
        const cart = product.cart
        axios.patch(`https://restorent-details.herokuapp.com/items/${id}`, {
            cart,
        })
        .then(() => fetchData())
        .catch(function (error) {
        console.log(error);
        })
    }

    const { image, title, price, description } = product;
    return (
        isLoading ?
            <h3 className={styles.status}>Loading...</h3> :
            isError ? <h3 className={styles.status}>Something went wrong</h3> :
        (<div>
            <div className={styles.banner}>
               
            </div>
                <div className={styles.container}>
                        <div className={styles.image}>
                            <img src={image} alt="" />
                        </div>
                        <div className={styles.description}>
                            <h3>{title}</h3>
                            <div>Price ${ price}</div>
                            <div>{description}</div>
                            <div className={styles.buyNowBtn}>
                                <button onClick={() => addToCart()}>{ changeBtn ? "Remove From Cart" : "Add To Cart"}</button>
                                <button>Buy Now</button>
                            </div>
                        </div>
                </div>
        </div>)
    )
}

export default SpecificProduct

