// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Loginpage from './Component/Loginpage';
// import SignupForm from './Component/SignupForm';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Component/Slider'
import Navbar from './Component/Navbar'
import Content from './Component/Content'
import './Component/css/Slider.scss'
import './Component/css/page.css'


// import './Component/Slider.css'
export default function App() {
  return (
    <div>
    <Navbar />
    <Slider/>
    <Content />

    </div>
  )
}


