import React, { useState, useEffect } from 'react';
import './header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation(); // Get current route

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" };
    }
    return {};
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      const heroHeight = heroSection.offsetHeight;
      if (window.scrollY > heroHeight * 0.05) {
        setIsTransparent(false); // Add background color
      } else {
        setIsTransparent(true); // Make header transparent
      }
    }
  };

  // Update header background based on route and scroll position
  useEffect(() => {
    if (location.pathname !== '/') {
      // If not on the landing page, set solid background
      setIsTransparent(false);
    } else {
      // If on the landing page, check scroll position
      const heroSection = document.getElementById('home');
      if (heroSection) {
        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll);
      }
    }

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]); // Re-run effect when route changes

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <nav className={`h-wrapper ${isTransparent ? 'transparent' : 'solid'}`} id="nav">
      <div className=" paddings innerWidth h-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src="/logo2.png" // Path to the logo in the public folder
              alt="Logo"
              className="logo-img"
            />
          </Link>
        </div>

        {/* Menu */}
        <OutsideClickHandler onOutsideClick={() => { setMenuOpened(false); }}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link to="/PracticeAreas" onClick={closeMenu} className={location.pathname === '/PracticeAreas' ? 'active' : ''}>
              Practice Areas
            </Link>
            <Link to="/AboutUs" onClick={closeMenu} className={location.pathname === '/AboutUs' ? 'active' : ''}>
              About Us
            </Link>
            <Link to="/Publications" onClick={closeMenu} className={location.pathname === '/Publications' ? 'active' : ''}>
              Publications
            </Link>
            <Link to="/Team" onClick={closeMenu} className={location.pathname === '/Team' ? 'active' : ''}>
              Our Team
            </Link>
            <Link to="/Contact" onClick={closeMenu} className={location.pathname === '/Contact' ? 'active' : ''}>
              Contact Us
            </Link>
          </div>
        </OutsideClickHandler>

        {/* Hamburger Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpened}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Header;