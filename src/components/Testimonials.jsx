import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Great experience working with Dheeraj! Delivered on time with excellent quality.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Very professional and skilled in web development. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Brown",
    feedback: "Fantastic work! The project was completed with attention to detail and modern UI.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="testimonials-section" aria-live="polite">
      <div className="container ">
        <div className="col-lg-10 m-auto">
          <motion.div
            key={currentIndex}
            className="testimonial-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src={testimonials[currentIndex].image}
              alt={`Portrait of ${testimonials[currentIndex].name}`}
              className="testimonial-img"
              loading="lazy"
            />
            <p className="testimonial-text">"{testimonials[currentIndex].feedback}"</p>
            <h5 className="testimonial-name">{testimonials[currentIndex].name}</h5>

            {/* Controls */}
            <div className="controls">
              <button
                className="prev-btn"
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
              >
                &#8592;
              </button>
              <button
                className="next-btn"
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
              >
                &#8594;
              </button>
            </div>

            {/* Navigation Indicators */}
            <div className="navigation-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
