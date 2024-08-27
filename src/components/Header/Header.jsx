import React, { useState } from 'react';
import './header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "4rem" : "-100%" };
    }
    return {};
  };

  return (
    <nav className="h-wrapper" id="nav">
      <div className="flexCenter paddings innerWidth h-container">
        <a href="#home"><img src="./logo.png" className="logo" alt="logo" /></a>

        <OutsideClickHandler onOutsideClick={() => { setMenuOpened(false); }}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#projects">Projects</a>
            <a href="#articles">Articles</a>
            <a href="#stack">Stack</a>
            <a href="#cert">Certifications</a>
            <button className="button"><a href="#contact">Contact</a></button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
