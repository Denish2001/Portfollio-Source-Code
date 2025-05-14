import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { RiSendPlaneFill } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      {/* Animated border */}
      <div className="footer-border">
        <div className="border-line"></div>
      </div>

      <div className="innerWidth paddings footer-container">
        {/* Social Links */}
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://x.com/AwajoOndiegi" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="social-icon"
          >
            <FiTwitter className="icon" />
            <span className="tooltip">Twitter</span>
          </motion.a>
          
          <motion.a 
            href="https://www.instagram.com/_denish.awajo/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="social-icon"
          >
            <FiInstagram className="icon" />
            <span className="tooltip">Instagram</span>
          </motion.a>
          
          <motion.a 
            href="https://www.linkedin.com/in/denish-awajo/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="social-icon"
          >
            <FiLinkedin className="icon" />
            <span className="tooltip">LinkedIn</span>
          </motion.a>

          <motion.a 
            href="mailto:awajodenish@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="social-icon"
          >
            <FiMail className="icon" />
            <span className="tooltip">Email</span>
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="copyright"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="copyright-text">
            &copy; {currentYear} Denish Awajo. All rights reserved.
          </span>
        </motion.div>

        {/* Back to Top */}
        <motion.a 
          href="#home"
          className="back-to-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RiSendPlaneFill className="arrow-icon" />
          <span>Back to Top</span>
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;