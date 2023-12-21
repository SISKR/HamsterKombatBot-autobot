import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Testimonials = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    onRest: () => {
      // Change the testimonial after the animation is complete
      const nextIndex = (index + 1) % testimonials.length;
      setIndex(nextIndex);
    },
  });

  const { name, position, quote } = testimonials[index];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Testimonials</h2>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <animated.div style={props}>
          <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
            <h4>{name}</h4>
            <p>{position}</p>
            <p>{quote}</p>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

const RenovationTestimonials = () => {
  const renovationTestimonials = [
    {
      id: 1,
      name: "Renovation Expert 1",
      position: "Renovation Specialist",
      quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    },
    {
      id: 2,
      name: "Renovation Expert 2",
      position: "Renovation Architect",
      quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    },
    {
      id: 3,
      name: "Renovation Pro 1",
      position: "Certified Renovation Contractor",
      quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.   - Albert Einstein",
    },
    {
      id: 4,
      name: "Renovation Pro 2",
      position: "Home Remodeling Expert",
      quote:
      "The only way to do great work is to love what you do.- Steve Jobs",
    },
    // Add more renovation testimonials as needed
  ];

  return <Testimonials testimonials={renovationTestimonials} />;
};

export default RenovationTestimonials;
