import React, { useEffect, useState } from 'react';
import { Link, NavLink  } from 'react-router-dom';
import '../styles/navbar.css';
// import logo from '../assets/logo.jpg'; 
 import logo from '../assets/logo_bg.jpeg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
  <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="navbar-container">

      {/* Left Full-Height Logo */}
      <div className="navbar-logo full-height-logo">
        <Link to="/" className="text-decoration-none">
          <div className="logo_navbar"></div>
          <h4 className="d-lg-none mobile-logo">OncoBridge</h4>
        </Link>
      </div>

      {/* Right 3-Strip Section */}
      <div className="navbar-right-section">

        {/* Top White Strip */}
        <div className="navbar-top-strip"></div>

        {/* Middle Blue Strip with Menu */}
        <div className="navbar-middle-strip">
          {/* Hamburger */}
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menu Items */}
          <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
            <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>About Us</NavLink></li>
            <li><NavLink to="/secondopinion" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Second Opinion</NavLink></li>

            <div className="dropdown">
              <NavLink className="" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><NavLink to="/myths" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "dropdown-item"}>Myths & Facts</NavLink></li>
                <li><NavLink to="/faq" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "dropdown-item"}>FAQ</NavLink></li>
              </ul>
            </div>

            <li><NavLink to="/careers" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Careers</NavLink></li>
            <li><NavLink to="/partners" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Partners</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Contact</NavLink></li>
          </ul>
        </div>
        <div className="navbar-bottom-gap"></div>

        {/* Bottom White Strip */}
        <div className="navbar-bottom-strip"></div>

      </div>
    </div>
  </nav>
);

}

export default Navbar;

