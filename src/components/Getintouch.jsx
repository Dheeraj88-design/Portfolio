import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./Getintouch.css";
import SocialMedia from "./SocialMedia";

const Getintouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div  className="contact-wrap" id="contact">
      <div className="container">
        <h3 className="mb-5">Get in Touch</h3>
        <div className="row">
        <div className="col-md-6">
            <h4>Contact Details</h4>
            <p><FaEnvelope className="text-primary me-2" /> Email: dheerajkotyaan489@gmail.com</p>
            <p><FaPhone className="text-primary me-2" /> Phone: +123 456 7890</p>
            <h4 className="mt-3">Social Media</h4>
            <SocialMedia />
          </div>
        <div className="col-md-6">
            <h4>Send a Message</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} required />
              </Form.Group>
              <Button className="contact-btn">Send Message</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
