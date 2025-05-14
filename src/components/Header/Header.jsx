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

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/Designs', name: 'Designs' },
    { path: '/Projects', name: 'Engineering' },
    { path: '/Publications', name: 'Literary' },
    { path: '/Credentials', name: 'Education' }
  ];

  return (
    <header className={`nav-header ${scrolled ? 'nav-header--scrolled' : ''}`} role="banner">
      <div className="nav-header__container">
        {/* Logo */}
        <motion.div 
          className="nav-header__logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" aria-label="Home">DA</Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="nav-header__desktop" aria-label="Main navigation">
          <ul className="nav-header__desktop-list">
            {navItems.map((item) => (
              <motion.li
                key={item.path}
                className="nav-header__desktop-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path} 
                  className={`nav-header__link ${location.pathname === item.path ? 'nav-header__link--active' : ''}`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              className="nav-header__desktop-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/Contact" className="nav-header__button">
                Contact
              </Link>
            </motion.li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button 
          className="nav-header__toggle" 
          onClick={() => setMenuOpened((prev) => !prev)}
          aria-label={menuOpened ? "Close menu" : "Open menu"}
          aria-expanded={menuOpened}
          aria-controls="mobile-navigation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpened ? <BiX size={30} /> : <BiMenuAltRight size={30} />}
        </motion.button>

        {/* Mobile Navigation */}
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <motion.nav 
            id="mobile-navigation"
            className={`nav-header__mobile ${menuOpened ? 'nav-header__mobile--open' : ''}`} 
            style={getMenuStyles()}
            initial={{ x: '100%' }}
            animate={{ x: menuOpened ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            aria-label="Mobile navigation"
          >
            <ul className="nav-header__mobile-list">
              {[...navItems, { path: '/Contact', name: 'Contact' }].map((item) => (
                <motion.li
                  key={item.path}
                  className="nav-header__mobile-item"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={item.path} 
                    className={`nav-header__link ${location.pathname === item.path ? 'nav-header__link--active' : ''}`}
                    onClick={() => setMenuOpened(false)}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </OutsideClickHandler>
      </div>
    </header>
  );
};

export default Header;