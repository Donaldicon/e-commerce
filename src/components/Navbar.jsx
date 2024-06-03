import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-details">
        <div className="navbar-container">
            {/* Phone and email container */}
            <div className='phone-and-email'>
                {/* phone number */}
                <div className='call-number'>
                    <img 
                    src="../public/images/phone.png" 
                    alt="Phone sign" 
                    className='call-image'/>
                    <div>(225) 555-0118</div>
                </div>

                {/* Email */}
                <div className='email-address'>
                    <img 
                    src="../public/images/email.png" 
                    alt="Phone sign" 
                    className='call-image'/>
                    <div>michelle.rivera@example.com</div>
                </div>
            </div>

            <p>Follow Us  and get a chance to win 80% off</p>

            <div className='social-media-platforms'>
                <p>Follow Us :</p>
                {/* social media platforms */}
                <div className='social-image-container'>
                    <img 
                    src="../public/images/socials/instagram.png" 
                    alt="Phone sign" 
                    className='social-image'/>

                    <img 
                    src="../public/images/socials/youtube.png" 
                    alt="Phone sign" 
                    className='social-image'/>

                    <img 
                    src="../public/images/socials/facebook.png" 
                    alt="Phone sign" 
                    className='social-image'/>

                    <img 
                    src="../public/images/socials/twitter.png" 
                    alt="Phone sign" 
                    className='social-image'/>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
