import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider'
import Navbar from './Navbar'
import Content from './Content'
import './css/Slider.scss'
import './css/page.css'


export default function Homepage() {
  return (
    <div>
    <Navbar />
    <Slider/>
    <Content />
      
    </div>
  )
}



