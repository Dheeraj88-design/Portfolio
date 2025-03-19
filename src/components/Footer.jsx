import React from "react";
import "./Footer.css";
import SocialMedia from "./SocialMedia";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h3 className="name">Dheeraj Kotyaan</h3>
            <p>Front-End Developer & UI Designer</p>
            <p>Crafting clean, responsive, and user-friendly websites.</p>
          </div>

          <div className="col-lg-4">
            <h4>Contact</h4>
            <p><FaEnvelope className="me-3"/> dheerajkotyaan489@gmail.com</p>
            <p><FaPhone className="me-3"/> +91 122347893</p>
          </div>

          <div className="col-lg-4">
            <h4>Follow Me</h4>
              <SocialMedia />
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <hr></hr>
          <p>© {new Date().getFullYear()} Dheeraj Kotyaan. All Rights Reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
