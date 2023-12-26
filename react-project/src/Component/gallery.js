import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./assets/slider-data1";
import "./css/Slider1.scss";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }

    return () => {
      clearInterval(slideInterval);
    };
  }, [autoScroll, currentSlide]);

  return (
    <div>
    <center>
    <h1 className="Gallery" id="Gallery">Gallery</h1>
    </center>
    <br></br>
    <div className="slider1">
    <AiOutlineArrowLeft className="arrow1 prev" onClick={prevSlide} />
    <AiOutlineArrowRight className="arrow1 next" onClick={nextSlide} />
    {sliderData.map((slide, index) => (
      <div
      className={index === currentSlide ? "slide current" : "slide"}
      key={index}
      >
      {index === currentSlide && (
        <div>
        <img src={slide.image} alt="slide1" className="image1" />
        </div>
        )}
        </div>
        ))}
        </div>
        </div>
  );
};

export default Gallery;
