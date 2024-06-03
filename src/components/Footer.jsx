import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='header'>
            <div className='bandage'>Bandage</div>
            <div className='socials'>
                <img 
                src="../public/images/socials/facebook-one.png" 
                alt="Phone sign" 
                className='social-image'/>
                <img 
                src="../public/images/socials/instagram-one.png" 
                alt="Phone sign" 
                className='social-image'/>
                <img 
                src="../public/images/socials/twitter-two.png" 
                alt="Phone sign" 
                className='social-image'/>
            </div>
        </div>
        <div className='column-container'>
           <div className='column'>
                <div className='item'>Company Info</div>
                <div className='items'>About Us</div>
                <div className='items'>Carrier</div>
                <div className='items'>We are hiring</div>
                <div className='items'>Blog</div>
            </div> 

           <div className='column'>
                <div className='item'>Legal</div>
                <div className='items'>About Us</div>
                <div className='items'>Carrier</div>
                <div className='items'>We are hiring</div>
                <div className='items'>Blog</div>

            </div> 

           <div className='column'>
                <div className='item'>Features</div>
                <div className='items'>Business Marketing</div>
                <div className='items'>User Analytic</div>
                <div className='items'>Live Chat</div>
                <div className='items'>Unlimited Support</div>
            </div> 

           <div className='column'>
                <div className='item'>Resources</div>
                <div className='items'>IOS & Android</div>
                <div className='items'>Watch a Demo</div>
                <div className='items'>Customers</div>
                <div className='items'>API</div>
            </div> 

           <div className='column'>
                <div className='item'>Get in Touch</div>
                <div className='subscribe'>
                    <input type="text" name="Email" id="email-input" placeholder='Your Email'/>
                    <button className='subscribe-btn'>Subscribe</button>
                </div>
            </div> 

        </div>
    </div>
  )
}

export default Footer