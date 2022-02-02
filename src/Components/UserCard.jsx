import React from 'react'
import styles from "./Styling/UserCard.module.css"

const UserCard = ({ title, image, price, id, showProduct, addToCart, addToWishlist, cart, wishlist }) => {
    let green = "black"
    let red = ""
    cart ? green = "green" : green = "gray"
    wishlist ? red = "red" : red = "gray"
    return (
        <>
        <div className={styles.card}>
            <div className={styles.icons}>
                
                <div style={{color:`${green}`}} onClick={() => addToCart(id)}>
                    <i class="fas fa-cart-arrow-down"></i>
                </div>
                <div style={{color:`${red}`}} onClick={() => addToWishlist(id)}>
                <i class="fas fa-heart"></i>
                </div>
            </div>
            
                <div onClick={()=>showProduct(id)}>
                    <div className={styles.productImg}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={styles.title}>{ title }</div>
                    <div>$ { price }</div>
                </div>
            </div>
        </>
    )
}

export default UserCard
