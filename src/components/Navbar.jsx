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
          <li><Link to="/about" onClick={closeMenu}><span>About Us</span></Link></li>
          {/* <li><Link to="/hospital" onClick={closeMenu}><span>Products</span></Link></li> */}
          {/* <li><Link to="/productdesc" onClick={closeMenu}><span>Product Description</span></Link></li> */}
        
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
Services
  </button>

 
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="/patients">Patients</a></li>
    <li><a class="dropdown-item" href="/hospital">Hospital </a></li>
    <li><a class="dropdown-item" href="/insurance">Insurance</a></li>
     <li><a class="dropdown-item" href="/blog">Blog</a></li>
      <li><a class="dropdown-item" href="/productdesc">Product description</a></li>
  </ul>
</div>



          <li><Link to="/partners" onClick={closeMenu}><span>Partners</span></Link></li>
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
