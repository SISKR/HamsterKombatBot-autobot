import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/css/Slider.scss';
import './Component/css/page.css';
import Homepage from './Component/Homepage';
import Footer from './Component/Footer';
import Testimonals from './Component/Testimonials';
import Slider from './Component/Slider';
import Gallery from './Component/gallery';
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';
import FixedContainer from './Component/Container';
import Testimonials from './Component/Testimonials';


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home/:username" />
          <Route path="/testimonials" element={<Testimonals />} />
          {/* Add more routes as needed */}
        </Routes>
      <Homepage />
      </div>
    </Router>
  );
}
