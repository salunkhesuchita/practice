import React from 'react'
import styles from "../Components/Styling/Footer.module.css"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (<>
        <div className={styles.footer}>
            <div>
                <Link className={styles.links} to="/careers">Careers</Link>
                <Link className={styles.links} to="/about">About</Link>
                <Link className={styles.links} to="/support">Support</Link>
                <Link className={styles.links} to="/ourTeam">Our Team</Link>
            </div>
            <div className={styles.footer_part2}>
                <h3>Contact Us</h3>
                <div>
                    <input type="email" name="contactUs" placeholder="Your Email..."/>
                    <input type="submit"/>
                </div>
                <div className={styles.icons}>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-twitter"></i>
                </div>
            </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.copyright}>
            
                <footer>&copy; Copyright 2021 Wow Coupons. All Rights reserved.</footer>

            </div>
        </div>
    </>
    )
}

export default Footer
