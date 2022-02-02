import React, { useContext, useEffect, useState } from 'react'
import styles from "./Styling/Home.module.css"
import UserCard from './UserCard';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AppContextProvider';

const TV = () => {
    const {isAuth, data, isLoading, isError , fetchData} = useContext(AuthContext)
    
    useEffect(() => {
        fetchData("category", "tv");
    }, [])
    const history = useHistory();
    const showProduct = id => {
        history.push(`/items/${id}`)
    }

    const addToCart = id => {
        const array = [...data]
        const updated = array.find(item => item.id === id)
        console.log(updated)
        updated.cart = !updated.cart
        const cart = updated.cart
        if (isAuth) {
            axios.patch(`https://restorent-details.herokuapp.com/items/${id}`, {
            cart,
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
        isAuth ? 
        (axios.patch(`https://restorent-details.herokuapp.com/items/${id}`, {
            wishlist,
        })
        .then(() => fetchData())
        .catch(function (error) {
        console.log(error);
        })) : 
            alert("Please Login To Add")
            history.push("/login")
    }

    
    return (
        isLoading ?
                    <h3 className={styles.status}>Loading...</h3> :
                    isError ? <h3 className={styles.status}>Something went wrong</h3> :
        (<div>
            <div className={styles.banner}>
                
            </div>
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

export default TV
