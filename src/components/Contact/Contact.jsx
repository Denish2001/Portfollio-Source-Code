import React, { useState } from 'react';
import './Contact.css';
import { MdCall, MdEmail } from 'react-icons/md';
import { BsWhatsapp, BsChatDotsFill } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact-wrapper" id="contact">
      <div className="innerWidth contact-container paddings">
        {/* Left Side - Contact Methods */}
        <div className="contact-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-header"
          >
            <span className="section-subtitle">Get in touch</span>
            <h2 className="section-title">Contact Me</h2>
            <p className="section-description">
              Have a project in mind or want to collaborate? Reach out through any of these channels.
            </p>
          </motion.div>

          <div className="contact-modes">
            {/* Phone */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="contact-card"
            >
              <div className="contact-card-inner">
                <div className="contact-icon phone">
                  <MdCall size={24} />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+254 705 369 048</p>
                </div>
              </div>
              <a href="tel:+254705369048" className="contact-button">
                Call Now <RiSendPlaneFill className="button-icon" />
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="contact-card"
            >
              <div className="contact-card-inner">
                <div className="contact-icon whatsapp">
                  <BsWhatsapp size={24} />
                </div>
                <div className="contact-details">
                  <h3>WhatsApp</h3>
                  <p>+254 705 369 048</p>
                </div>
              </div>
              <a href="https://wa.me/+254705369048" target="_blank" rel="noreferrer" className="contact-button">
                Chat Now <RiSendPlaneFill className="button-icon" />
              </a>
            </motion.div>

            {/* Email */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="contact-card"
            >
              <div className="contact-card-inner">
                <div className="contact-icon email">
                  <MdEmail size={24} />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>awajodenish@gmail.com</p>
                </div>
              </div>
              <a href="mailto:awajodenish@gmail.com" className="contact-button">
                Email Now <RiSendPlaneFill className="button-icon" />
              </a>
            </motion.div>

            {/* Other */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="contact-card"
            >
              <div className="contact-card-inner">
                <div className="contact-icon other">
                  <BsChatDotsFill size={24} />
                </div>
                <div className="contact-details">
                  <h3>Direct Message</h3>
                  <p>Available on request</p>
                </div>
              </div>
              <button className="contact-button">
                Message Now <RiSendPlaneFill className="button-icon" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="contact-right"
        >
          <div className="contact-form-container">
            <h3 className="form-title">Send Me a Message</h3>
            <p className="form-subtitle">I'll get back to you within 24 hours</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="form-input"
                />
                <label htmlFor="name" className="form-label">Your Name</label>
                <div className="form-highlight"></div>
              </div>

              <div className="form-group">
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  className="form-input"
                />
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <div className="form-highlight"></div>
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="form-input"
                />
                <label htmlFor="email" className="form-label">Email Address</label>
                <div className="form-highlight"></div>
              </div>

              <div className="form-group textarea-group">
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="form-textarea"
                  rows="4"
                ></textarea>
                <label htmlFor="message" className="form-label">Your Message</label>
                <div className="form-highlight"></div>
              </div>

              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <RiSendPlaneFill className="button-icon" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;