// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Loginpage from './Component/Loginpage';
// import SignupForm from './Component/SignupForm';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/css/Slider.scss'
import './Component/css/page.css'
import Homepage from './Component/Homepage';
import Footer from './Component/Footer';
import Testimonals from './Component/Testimonals';
import './Component/css/Footer.css'


// import './Component/Slider.css'
export default function App() {
  return (
    <div>
    <Homepage />
    <br></br>
    <Testimonals />
    <Footer />
    </div>
  )
}


