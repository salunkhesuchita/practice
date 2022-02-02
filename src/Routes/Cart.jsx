import React, { useContext, useEffect, useState } from 'react'
import CartSideTemplate from '../Components/CartSideTemplate';
import styles from "../Components/Styling/Cart.module.css"
import axios from 'axios'
import { AuthContext } from '../context/AppContextProvider';

const Cart = () => {
    const [cartTab, setCartTab] = useState(true);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const {isAuth, data, isLoading, isError , fetchData} = useContext(AuthContext)
    

    const showCart = () => {
        setCartTab(!cartTab)
        fetchData();
    }

    const removeFromCart = (id) => {
        const array = [...data]
        const updated = array.find(item => item.id === id)
        updated.cart = !updated.cart
        const cart = updated.wishlist
        axios.patch(`https://restorent-details.herokuapp.com/items/${id}`, {
            cart,
        })
        .then(() => fetchData())
        .catch(function (error) {
        console.log(error);
        });
    }

    useEffect(() => {
        const array = [...data]
        const updated = array.filter(item=> item.cart === true)
        setCount(updated.length)
        const sum = updated.map(e => e.price).reduce((e, a) => {
            return e + a
        }, 0)
        setTotal(sum)
        // console.log(sum)
    }, [data])
    return (
        
        <div>
            <div className={styles.cart_icon} onClick={()=>showCart()}>
                <i class="fas fa-cart-plus"></i>
                {count === 0 ? null : <div className={styles.count}>{ count }</div>}
            </div>
            <div className={cartTab? styles.cart : styles.displayCart} >
                <div className={styles.header} onClick={()=>setCartTab(!cartTab)}>
                    <i class="fas fa-times"></i>
                    <button >MANAGE</button>
                </div>
                <div className={styles.price}>
                    <h3>{count} Items</h3>
                    <h3>Overall ${total} </h3>
                </div>
                {count === 0 ? 
                    <div className={styles.emptyCart}>
                        <img width="400px" src="empty.png" alt="" />
                        <h3>Oops! Your bag is empty.</h3>
                    </div> :
                    <div>
                    {isLoading ? <div>Loading...</div> : isError ? <div>Something went wrong.</div> :
                        data?.filter(item => item.cart === true).map(item => (
                        <CartSideTemplate {...item}
                        removeFromCart={removeFromCart}
                    />
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default Cart
