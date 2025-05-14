import React, { useState, useEffect } from 'react';
import './header.css';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpened(false);
  }, [location]);

  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" };
    }
    return {};
  };

  return (
    <header className={`h-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="h-container">
        {/* Logo */}
        <motion.div 
          className="h-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">DA</Link>
        </motion.div>
        
        {/* Desktop Menu */}
        <nav className="h-desktop-menu">
          {[
            { path: '/', name: 'Home' },
            { path: '/Designs', name: 'Designs' },
            { path: '/Projects', name: 'Engineering' },
            { path: '/Publications', name: 'Literary' },
            { path: '/Credentials', name: 'Education' }
          ].map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/Contact" className="contact-button">
              Contact
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.div 
          className="menu-icon" 
          onClick={() => setMenuOpened((prev) => !prev)}
          aria-label="Menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpened ? <BiX size={30} /> : <BiMenuAltRight size={30} />}
        </motion.div>

        {/* Mobile Menu */}
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <motion.div 
            className={`h-mobile-menu ${menuOpened ? 'open' : ''}`} 
            style={getMenuStyles()}
            initial={{ x: '100%' }}
            animate={{ x: menuOpened ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {[
              { path: '/', name: 'Home' },
              { path: '/Designs', name: 'Designs' },
              { path: '/Projects', name: 'Engineering' },
              { path: '/Publications', name: 'Literary' },
              { path: '/Credentials', name: 'Education' },
              { path: '/Contact', name: 'Contact' }
            ].map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => setMenuOpened(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </OutsideClickHandler>
      </div>
    </header>
  );
};

export default Header;