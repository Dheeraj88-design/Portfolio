import React from "react";
import { Typewriter } from "react-simple-typewriter";
import SocialMedia from "./SocialMedia";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrap" id="home">
        <div className="background-wrap">
            <video autoPlay loop muted playsInline>
            <source src="/assets/bg-mp3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>  
        <div className="background-overlay">
        </div>  
      <div className="container  marginer">
        <div className="row align-items-center">
          <div className="col-lg-6 mt-3 order-lg-1 order-2">
            <div className="hero-left">
              <h2>Hi, I’m <span className="highlight">Dheeraj</span></h2>
              <h2>
                <span className="role">
                  <Typewriter
                    words={["UI Designer", "Front-End Developer", "React Developer", "WordPress Expert"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h2>
              <p className="mt-3">Hey, I'm Dheeraj! I design UIs, build websites, and debug my own decisions—one cup of coffee at a time!</p>
              <SocialMedia />
              <a href="/assets/Dheeraj_Resume.pdf" download="Dheeraj_Resume.pdf">
              <button className="cv">Download CV</button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 mt-3 order-lg-2 order-1">
            <div className="hero-right">
                <img src="/assets/hero-profile.jpeg" alt="Profile" className="w-100"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
