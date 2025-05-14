import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Designs from './components/Designs/Designs';
import SoftwareEngineering from './components/Projects/Projects';
import Certifications from './components/Credentials/Credentials';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <AnimatePresence mode='wait'>
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero />
                </motion.div>
              } 
            />
            <Route 
              path="/Designs" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Designs />
                </motion.div>
              } 
            />
            <Route 
              path="/Projects" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Publications />
                </motion.div>
              } 
            />
            <Route 
              path="/Publications" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Publications />
                </motion.div>
              } 
            />
            <Route 
              path="/Credentials" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Certifications />
                </motion.div>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;