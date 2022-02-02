import React, { useContext, useEffect, useState } from 'react'
import styles from "./Styling/Home.module.css"
import UserCard from './UserCard';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AppContextProvider';

const Home = () => {
    
    const {isAuth, fetchData, data, isError, isLoading} = useContext(AuthContext)
    useEffect(() => {
        fetchData();
    }, [])
  
    const history = useHistory();
    const showProduct = id => {
        history.push(`/items/${id}`)
    }

    const addToCart = id => {
        // const array = [...data]
        // const updated = array.find(item => item.id === id)
        // console.log(isAuth)
        // updated.cart = !updated.cart
        // const cart = updated.cart
        if (isAuth) {
            axios.patch(`https://restorent-details.herokuapp.com/items/${id}`, {
            cart : true,
            })
            .then(() => fetchData())
            .catch(function (error) {
            console.log(error);
            })
        } else {
            alert("Please Login To Add")
            history.push("/login")
        } 
    }

    const addToWishlist = id => {
        const array = [...data]
        const updated = array.find(item => item.id === id)
        updated.wishlist = !updated.wishlist
        const wishlist = updated.wishlist
        axios.patch(`https://restorent-details.herokuapp.com/items/${id}`, {
            wishlist,
        })
        .then(() => fetchData())
        .catch(function (error) {
        console.log(error);
        });
    }

    // const deleteTask = (id) => {
    //     deleteData(id)
    //   .then(() => fetchData())
    //   .catch(function (error) {
    //     console.log(error);
    //     });
    // }
    
    return (
        isLoading ?
                    <h3 className={styles.status}>Loading...</h3> :
                    isError ? <h3 className={styles.status}>Something went wrong</h3> :
        (<div>
            <div className={styles.banner}>
                <img  src="https://c0.wallpaperflare.com/preview/447/552/983/ecommerce-online-shop-euro.jpg" alt=""/>
                {/* <img  width="100%" src="https://image.freepik.com/free-vector/black-friday-sale-shopping-cart-banner-with-text-space_1017-28049.jpg" alt=""/> */}
            </div>
            <h3 className={styles.trinding}>Trending Products</h3>
            <div className={styles.cards}>
                {data?.map(item => (<UserCard {...item}
                    showProduct={showProduct}
                    addToCart={addToCart}
                    addToWishlist={addToWishlist}
                />))}
            </div>
        </div>)
    )
}

export default Home
