import React from 'react'
import './About.css';

function About() {
  return ( 
    <div className='about-wrap' id='about'>
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-6 mt-lg-0 mt-3">
              <div className="about-right-wrap">
                <img src="assets/about-image.jpg" alt="" srcset=""  className='w-100'/>
                <div className="about-left">
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-3">
                <h3 className='mb-4'>About Me</h3>
                <p>Hi, I'm Dheeraj, a passionate web developer with 2 years of experience in crafting modern, responsive, and user-friendly websites. I specialize in React.js, TypeScript, Bootstrap, and Redux Toolkit, ensuring seamless functionality and smooth user experiences.</p>
                <p>My expertise extends to HTML, CSS, WordPress, and Figma, allowing me to build visually appealing and fully functional web solutions. Currently, I’m working on an e-commerce project, implementing dynamic filters, sorting, and state management for a smooth shopping experience.</p>
                <p>I am always eager to learn and explore new technologies to enhance my skills and create innovative web applications. Let’s build something amazing together!</p>
                <div className="line">
                  <div className="dot"></div>
                </div>
                <h4>Lets Connect</h4>
                <ul>
                    <li>dheerajkotyaan489@gmail.com</li>
                    <li>Dheeraj Kotian</li>
                </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About;