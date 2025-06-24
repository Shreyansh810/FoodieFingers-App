import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>

            <div className="footer-content">

                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Craving something awesome? You’re in the right place! At FoodieFingers, we bring flavor, fun, and freshness right to your fingertips. From spicy cravings to sweet surprises, we’ve got your mood-food match covered. Fast delivery, tasty bites, and zero hassle — just the way food should be. Thanks for making us part of your foodie adventure! 🍕🍜🍩</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-right">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-center">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91 1102244890</li>
                        <li>contact@foodiefingers.com</li>
                    </ul>
                </div>

            </div>

            <hr />
            <p className='footer-copyright'>Copyright 2024 © foodiefingers.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
