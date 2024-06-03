import "./Hero.css";

const Hero = () => {
  return (
    <div className="all">
        <div>
            <img 
            src="../public/images/furniture/furniture1.png" alt="Phone sign" className='furniture-image-one'/>
        </div>
        <div className="two-and-threefour">
            <div>
                <img 
                src="../public/images/furniture/furniture2.png" alt="Phone sign" className='furniture-image-two'/>
            </div>
            <div className="three-and-four">
                <img 
                src="../public/images/furniture/furniture3.png" alt="Phone sign" className='furniture-images'/>
                <img 
                src="../public/images/furniture/furniture4.png" alt="Phone sign" className='furniture-image'/>
            </div>
        </div>
    </div>
  )
}

export default Hero