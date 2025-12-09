import './portfolio.css'
import { Link } from "react-router-dom";
import img7 from'../../assets/img/7.png'
import img8 from'../../assets/img/8.png'
import img9 from'../../assets/img/9.png'
import img10 from'../../assets/img/10.png'
import img11 from'../../assets/img/11.png'
import img12 from '../../assets/img/12.png'
import img13 from'../../assets/img/13.png'
import img14 from '../../assets/img/14.png'
import img4 from '../../assets/img/4.png'
import img5 from '../../assets/img/5.png'
function Portfolio() {
  return (
    <>
    <div className='porthead'>
    <h1 className='headport1'>Projects We've Deliverd</h1>
    <p className='ppoet'>Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished <br />various web and mobile apps related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented  <br />reality, action sports, finance and sharing economy.
</p>
    </div>
    <div  className='portdiv'>
        <div className='img1ofport'>
           <img src={img8} className='img9' />
           
            <a href="https://www.revivesalon.pk/*" target='blank' ><img src={img7} className='img10' /></a>
           
        </div>
        <div className='img1ofport'>
            <a href=" https://voeuxcosmetics.com/" target='blank'><img src={img10} className='img10' /></a>
          <img src={img9} className='img9 '/>
        
        </div>
        <div className='img1ofport'>
         <img src={img11} className='img9' />
         <a href="https://kingz.com/" target='blank'><img src={img12} className='img10' /></a>
        </div>
        <div className='img1ofport'>
           <a href="https://unifresh.com.au/" target='blank'><img src={img13}className='img10'  /></a>
           <img src={img14} className='img9'  />
        </div>
    </div>
    
    <img src={img4}  className='img14' />
    <img src={img5}  className='img15' />

    </>
  )
}

export default Portfolio
