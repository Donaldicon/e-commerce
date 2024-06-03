import React from 'react'
import "./CartReach.css";

const CartReach = () => {
  return (
    <div>
        <div className='cart-reach-container'>
            <div className='cart-reach'>
                <h1 className='header'>What they say about us</h1>
                <img 
                src="../public/images/user1.png" alt="Phone sign" className='frame1'/> 
                <img 
                src="../public/images/stars.png" alt="Phone sign" className='frame2'/> 
                <p className='cart-reach-p'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                <div className='r-miles'>Reginal Miles</div>
                <div className='designer'>Designer</div>
            </div>  
            <img 
            src="../public/images/Frame1.png" alt="Phone sign" className='frame'/>  
        </div>
        <div>
            <img 
            src="../public/images/desktop-8.png" alt="Phone sign" className='frame3'/> 
        </div>
    </div>
  )
}

export default CartReach