import React from 'react'
import styles from "./Styling/CartSideTemplate.module.css"

const CartSideTemplate = ({ image, title, price, removeFromCart, id }) => {
    
    return (
        <div className={styles.container}>
            <img src={image} alt={title} />
            <div className={styles.title}>
                <div>{ title}</div>
                <div> $ {price}</div>
                <button onClick={()=>removeFromCart(id)}>REMOVE</button>
            </div>
        </div>
    )
}

export default CartSideTemplate
