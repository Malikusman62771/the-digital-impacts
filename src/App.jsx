import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/home'
import Navbar from './Components/navbar/navbar'
import Services from './Components/Services/services'
import About from './Components/about/about'
import Portfolio from './Components/Portfolio/portfolio'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
         <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    
  
    </>
  )
}

export default App
