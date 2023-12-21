import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider'
import Navbar from './Navbar'
// import Footer from './Footer';
import Cards from './Cards'
import './css/Slider.scss'
import './css/page.css'
import FixedContainer from './Container';


export default function Homepage() {
  return (
    <div>
    <Navbar />
    <Slider/>
    <br></br>
    <Cards /> 
    <br></br>
    <br></br>
    <FixedContainer></FixedContainer>
    </div>
  )
}



