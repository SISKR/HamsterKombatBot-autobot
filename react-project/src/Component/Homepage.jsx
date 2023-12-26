import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider'
import Navbar from './Navbar'
import Footer from './Footer';
import Cards from './Cards'

import './css/page.css'
import FixedContainer from './Container';
import Gallery from './gallery';
import Testimonials from './Testimonials';
import ContactForm from './Contact';


export default function Homepage() {
  return (
    <div>
    <Navbar />
    <Slider/>
    <br></br>
    <br></br>
    <Cards /> 
    <br></br>
    <br></br>
    <Gallery/>
    <FixedContainer></FixedContainer>
    <Testimonials />
    <ContactForm />
    <Footer />
    </div>
  )
}



