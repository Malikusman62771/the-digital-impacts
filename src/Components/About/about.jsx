import { Route, Routes } from 'react-router-dom'
import './about.css'
import img6 from'../../assets/img/6.png'
import img7 from'../../assets/img/4.png'
import img8 from'../../assets/img/5.png'

function About() {
  return (
    <>
    <div className='aboutdiv'>
      <h1>EVERYTHING YOU NEED TO KNOW ABOUT</h1>
      <div className='headerabout'>
      <h1 className='head1'>THE DIGITAL IMPACTS</h1>
      <p>The Digital Impacts create a perfect company for its customers. Digital Impacts offers the best services to ensure <br /> your business thrives online. Because we partner with our clients with a team of professionals, we can to provide the <br /> best on our side. We strive to be leaders in digital marketing services worldwide by revolutionizing the industry and <br />setting new standards of professionalism and success.</p>
      <h1 className='head1'>OUR VISION</h1>
      <p>We strive to be leaders in digital marketing services across the world by revolutionizing the industry and setting new standards of professionalism and success. Our vision is to become a top agency offering online marketing strategies, digital sales solutions, and internet brand management in the international business sphere.</p>
      <h1 className='head1'>OUR MISSION</h1>
      <p>Our mission is to partner with customers for their success as we create diverse client base including companies and <br /> individuals functioning in many different fields and economies. We will be best in providing consistently successful <br />, unique,  and forward-thinking digital marketing solutions that take into account the individual requirements and <br /> unique demands of each client.</p>
      </div>
   <img src={img6}  className='img6'/>
   <img src={img7}   className='img7'/>
   <img src={img8}  className='img8' />
      </div>
         
    </>
  )
}

export default About
