import React, { useCallback, useContext, useState } from 'react'
import styles from "../Components/Styling/Navbar.module.css";
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AppContextProvider';
import Cart from './Cart';

export const Navbar = () => {
    const { isAuth, handleSignOut, hamBurgerHandlerFromNav, showHamBurger } = useContext(AuthContext)
    
    const handleHamBurger = () => {
        hamBurgerHandlerFromNav();
    }

    const signOut = () => {
        handleSignOut();
    }
    return (
        <div className={styles.Navbar}>

            <div className={styles.hamBurger}>
                <div className={styles.hamburger_icon}
                    onClick={handleHamBurger}>
                    <i class="fas fa-bars"></i>
                </div>
                <div className={showHamBurger ? styles.show : styles.hide}>

                    <div className={styles.leftArrow}
                    onClick={handleHamBurger} >
                        <i class="fas fa-arrow-left"></i>
                    </div>

                    <div className={showHamBurger ? styles.showMenu: styles.hideMenu}>
                        <Link key="/electronis" className={styles.category} to="/electronis">Electronic <i class="fas fa-caret-down"></i>
                            <div className={styles.item}>
                                <Link key="tv" className={styles.item__category} to="/tv">TV</Link>
                                <Link key="smartphone" className={styles.item__category} to="/smartphone">Smartphone</Link>
                                <Link key="computer" className={styles.item__category} to="computer">Computer</Link>
                            </div> 
                        </Link>
                        <Link key="fashion" className={styles.category} to="/fashion">Fashion <i class="fas fa-caret-down"></i>
                            <div className={styles.item}>
                                <Link key="men" className={styles.item__category} to="/men">Men</Link>
                                <Link key="women" className={styles.item__category} to="/women">Women</Link>
                                <Link key="kids" className={styles.item__category} to="/kids">Kids</Link>
                            </div>  
                        </Link>
                        <Link key="about" className={styles.category} to="/about">About Us</Link>
                        <Link key="faqs" className={styles.category} to="/faqs">FAQs</Link>
                        <Link key="contactUs" className={styles.category} to="/contactUs">ContactUs</Link>
                    </div>
                </div>
            </div>

            <Link key="home" to="/" >
                <img className={styles.logo} src="./new1.png" alt="logo"/>
            </Link>
            <div className={styles.midNavbar}>
                <Link key="/electronis" className={styles.category} to="/electronis">Electronic <i class="fas fa-caret-down"></i>
                    <div className={styles.item}>
                        <Link key="tv" className={styles.item__category} to="/tv">TV</Link>
                        <Link key="smartphone" className={styles.item__category} to="/smartphone">Smartphone</Link>
                        <Link key="computer" className={styles.item__category} to="computer">Computer</Link>
                    </div> 
                </Link>
                <Link key="fashion" className={styles.category} to="/fashion">Fashion <i class="fas fa-caret-down"></i>
                    <div className={styles.item}>
                        <Link key="men" className={styles.item__category} to="/men">Men</Link>
                        <Link key="women" className={styles.item__category} to="/women">Women</Link>
                        <Link key="kids" className={styles.item__category} to="/kids">Kids</Link>
                    </div>  
                </Link>
                <Link key="about" className={styles.category} to="/about">About Us</Link>
                <Link key="faqs" className={styles.category} to="/faqs">FAQs</Link>
                <Link key="contactUs" className={styles.category} to="/contactUs">ContactUs</Link>
            </div>
            <div className={styles.navbarRight}>
                {!isAuth ? <Link key="login" className={styles.login} to="/login">Login</Link> : 
                    <div className={styles.user}>
                        <i class="far fa-user-circle"></i> Hi User...!
                            <div className={styles.user_item}>
                                <Link  className={styles.user_item_details} to="/account">My Account</Link>
                                <Link  className={styles.user_item_details} to="/orders">My Orders</Link>
                                <Link  className={styles.user_item_details} to="/wishlist">Wishlist</Link>
                                <Link  className={styles.user_item_details} to="/addresses">Addreses</Link>
                                <div className={styles.user_item_details, styles.signout}
                                    onClick={signOut}
                                    >Sign Out
                                </div>
                            </div>
                    </div>
                }
                
                <div key="cart" className={styles.login}>
                    <Cart  />
                    {/* <i class="fas fa-cart-plus"></i> */}
                </div>
            </div>
        </div>
    )
}
