import './navbar.css'
import img1 from  '././//////./////////.////////..//////.//../assets/img/1.png'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
     <nav>
        <img src={img1} className='imgnav' />
        <div className='navdiv'>
        <ol className='navol'>
            <li  className='li1'><Link to="/">Home</Link></li>
            <li className='li1'><Link to="/services">Services </Link></li>
            <li className='li1'><Link to="/about">About Us</Link></li>
            <li className='li1'><Link to="/portfolio">Portfolio</Link></li>
        </ol>
        <button className='buttonnav'>Contact us</button>
        </div>

     </nav> 
     <div className='navdiv2'></div>

    </>
  )
}

export default Navbar
