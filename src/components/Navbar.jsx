import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
// import logo from '../assets/logo.jpg'; 
// import logo from '../assets/logo.png';

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
        <div className="navbar-logo">
         {/* <img src={logo} className='logo_nabvar'/>       */}
        </div>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}><span>Home</span></Link></li>
          <li><Link to="/patients" onClick={closeMenu}><span>About Us</span></Link></li>
          <li><Link to="/hospital" onClick={closeMenu}><span>Products</span></Link></li>
          {/* <li><Link to="/productdesc" onClick={closeMenu}><span>Product Description</span></Link></li> */}
          <li><Link to="/insurance" onClick={closeMenu}><span>Services</span></Link></li>
          <li><Link to="/blog" onClick={closeMenu}><span>Partners</span></Link></li>
          <li><Link to="/career" onClick={closeMenu}><span>Career</span></Link></li>
           <li><Link to="/faq" onClick={closeMenu}><span>FAQ</span></Link></li>
          {/* <li><Link to="/blog" onClick={closeMenu}><span>Blog</span></Link></li> */}
          <li><Link to="/contact" onClick={closeMenu}><span>Contact</span></Link></li>
          {/* <li><Link to="/career" onClick={closeMenu}><span>Career</span></Link></li>
          <li><Link to="/terms" onClick={closeMenu}><span>Terms</span></Link></li>
          <li><Link to="/disclaimers" onClick={closeMenu}><span>Disclaimers</span></Link></li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
