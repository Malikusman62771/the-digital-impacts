import { Route, Routes } from 'react-router-dom'
import './services.css'
import img3 from '././////////.///////////////////////////./////.////////////..//////..////assets/img/3.png'
import img4 from '././////////.///////////////////////////./////./////////////.///.///////.////////////////////////////////////.//////./////./////////////////../////./////////.///////////////////////////////.///////////////////////////////.//.///..///assets/img/4.png'
import img5 from '..//../assets/img/5.png'
function Services() {
  return (
    <>
      <h1 className='serh1'>We Provide The Best <br />
        Services With Our <br />
        Developers</h1>
      <div className='cardflex'>
        <div className='card1'><h2 className='cardh1'>Digital Marketing</h2>
          <p>The Digital Impacts have compiled a list of the best digital marketing companies in the world.</p></div>
        <div className='card1'><h2 className='cardh1'>Web Development</h2>
          <p>Web design services comprise the process of user interface (UI) and user experience (UX) design of any web-based solution.</p></div>
        <div className='card1'><h2 className='cardh1'>Graphic Designing</h2> <p>Create visual concepts to communicate ideas that inspire and captivate consumers, creative thinking, an aptitude towards art and design</p></div>
      </div>
      <div className='cardflex2'>
        <div className='card1'><h2 className='cardh1'>Content Writter</h2>
          <p>The Digital Impacts have compiled a list of the best digital marketing companies in the world.</p></div>
        <div className='card1'><h2 className='cardh1'>SEO</h2>
          <p>Web design services comprise the process of user interface (UI) and user experience (UX) design of any web-based solution.</p></div>
      </div>
      <div className='hflex'>
        <h1>Industries We </h1>
        <h1 style={{ color: '#0796d6' }}>Work With</h1>
        <p>We work as a technology partner for various industries <br />
          Our expertise can be applied to the specific demands <br />
          and nuances in your industry</p>
      </div>
      <img src={img3} className='img3' />
      <img src={img4} className='img4' />
      <img src={img5} className='img5' />
    </>
  )
}

export default Services
