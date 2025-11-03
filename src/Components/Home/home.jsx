import './home.css'
import img2 from './/..////////./////////////////////.//////////////////////////////.//////////////////////////////////////////////////..///assets/img/2.png'
import Services from '../Services/services'
import About from '../about/about'
import Portfolio from '../Portfolio/portfolio'

function Home() {
  return (
    <>
     <div className='divhome'>
        <img src={img2}  className='imghome'/>
        <div className='divflex'>
        <h1  className='heading1'>We are full Services</h1>
        <h1 className='heading2'>Digital Marketing Agency</h1>
        <h2 className='heading3'>Welcome to the Digital Impacts</h2>
        <div  className='hr1'></div>
        <p className='p1'>We partner with our clients with a team of professionals, we are able to provide <br />
the best on our side. We strive to be leaders in digital marketing services worldwide 
by revolutionizing the industry and setting new standards of professionalism and success.</p>
 <button className='b1'>Message us now</button>
        </div>
        
     </div>
    <Services/>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <About/>
    <br /><br /><br /><br />
    <Portfolio/>
    </>
  )
}

export default Home
