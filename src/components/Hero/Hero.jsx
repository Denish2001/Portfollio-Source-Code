import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';
import { FaCode, FaPenFancy, FaRobot } from 'react-icons/fa';

const Hero = () => {
  const roles = [
    { icon: <FaPenFancy />, title: "Designer" },
    { icon: <FaRobot />, title: "Storyteller" },
    { icon: <FaCode />, title: "Engineer" }
  ];

  return (
    <section className="hero-wrapper" id='home'>
      {/* Animated background elements */}
      <div className="hero-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="paddings innerWidth hero-container">
        {/* Left side - Content */}
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-subtitle">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Just Denish
            </motion.span>
          </div>

          <div className="hero-title">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Denish <span className="highlight">Awajo</span> Otieno
            </motion.h1>
            
            <motion.div 
              className="roles-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {roles.map((role, index) => (
                <motion.div 
                  key={index}
                  className="role-pill"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="role-icon">{role.icon}</span>
                  <span>{role.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="hero-des"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="hero-text">
              The little boy in me was creative child drawn to the magic of storytelling by Disney and Pixar. 
              Their worlds weren't just movies to me—they were blueprints for possibility, proof that imagination 
              could shape reality.
            </p>
            <p className="hero-text">
              Writing, design, and code are all languages of storytelling, and I speak them fluently. Whether I'm 
              crafting an intuitive interface, shaping a data-driven solution, or weaving a narrative, my goal is 
              always the same—<span className="text-highlight">to create something that resonates</span>.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="button-container"
            >
              <Link to="/Contact" className="hero-button">
                <span>Let's Create Together</span>
                <RiArrowRightLine className="button-icon" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <div className="image-frame">
              <motion.img
                src="Denish.jpg"
                alt="Denish Awajo Otieno"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              />
            </div>
            <div className="image-decoration"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;