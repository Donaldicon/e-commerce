import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./NavbarMain.css";

const NavbarMain = () => {
  return (
    <nav>
        <div className='navbar-main-container'>
            <div className='navbar-links'>
                <p className='bandage'>Bandage</p>
                <div>Home</div>
                <div className='shop-arrow'>
                    <div className='shop'>Shop</div>
                    <FontAwesomeIcon icon={faChevronDown} className='arrow'/>
                </div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
                <div>Pages</div>
            </div>

            <div className='search-cart'>
                <div className='user-icon-container'>
                    <img src="../public/images/user.svg"  alt="user icon" className='image-width'/>
                    <p className='log-reg'>Login / Register</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faSearch} className='search'/>
                </div>
                <div className='img-and-number'>
                    <FontAwesomeIcon icon={faCartShopping} className='search'/>
                    <div className='number'>1</div>
                </div>
                <div className='img-and-number'>
                    <img src="../public/images/heart.svg"  alt="heart icon" className='image-width'/>
                    <div className='number'>1</div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavbarMain;
