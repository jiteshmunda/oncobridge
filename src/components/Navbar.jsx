import React, { useEffect, useState } from 'react';
import { NavLink  } from 'react-router-dom';
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
          <h4>OncoBridge</h4>
         {/* <img src={logo} className='logo_nabvar'/>       */}
        </div>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><NavLink  to="/" onClick={closeMenu}  className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}><span>Home</span></NavLink></li>
          <li><NavLink  to="/about" onClick={closeMenu}  className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}><span>About Us</span></NavLink></li>
          {/* <li><Link to="/hospital" onClick={closeMenu}><span>Products</span></Link></li> */}
          {/* <li><Link to="/productdesc" onClick={closeMenu}><span>Product Description</span></Link></li> */}
        
<div className="dropdown">
  <NavLink  className=" " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
Second Opinion
  </NavLink >
  <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton">
    <li><NavLink  to="/patients"  onClick={closeMenu}  className={({ isActive }) => isActive ? "menu-link active" : "dropdown-item "}>Patients</NavLink></li>
    <li><NavLink to="/hospital"  onClick={closeMenu}  className={({ isActive }) => isActive ? "menu-link active" : "dropdown-item"}>Hospital</NavLink></li>
    <li><NavLink  to="/insurance"  onClick={closeMenu}  className={({ isActive }) => isActive ? "menu-link active" : "dropdown-item"}>Insurance</NavLink></li>
        {/* <li><Link className="dropdown-item" to="/productdesc">Product description</Link></li> */}
  </ul>
</div>

<div className="dropdown">
  <NavLink  className=" " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
Resource
  </NavLink >
  <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton">
      <li><NavLink    to="/blog" onClick={closeMenu}  className={({ isActive }) => isActive ? "menu-link active" : "dropdown-item"}>Blog</NavLink></li>
    <li><NavLink  to="/testimonial" onClick={closeMenu}  className={({ isActive }) => isActive ? "menu-link active" : "dropdown-item"}>Testimonials</NavLink></li>
    <li><NavLink    to="/Videos" onClick={closeMenu}  className={({ isActive }) => isActive ? "menu-link active" : "dropdown-item"}>Videos</NavLink></li>
    <li><NavLink    to="/newsletter" onClick={closeMenu}  className={({ isActive }) => isActive ? "menu-link active" : "dropdown-item"}>Newsletters</NavLink></li>
      <li><NavLink   to="/myths" onClick={closeMenu}  className={({ isActive }) => isActive ? "menu-link active" : "dropdown-item"}>Myths and Fact</NavLink></li>
      <li><NavLink to="/faq" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "dropdown-item"}><span>FAQ</span></NavLink></li>
          
     {/* <li><NavLink  className="dropdown-item" to="/productdesc" onClick={closeMenu}  className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Product description</NavLink></li>  */}
        </ul>
</div>

          {/* <li><Link to="/partners" onClick={closeMenu}><span>Partners</span></Link></li> */}
          <li><NavLink to="/career" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}><span>Career</span></NavLink></li>
         <li><NavLink   to="/partners" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Partners</NavLink></li> 

           {/* <li><NavLink to="/faq" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}><span>FAQ</span></NavLink></li> */}
            {/* <li><Link to="/blog" onClick={closeMenu}><span>Blog</span></Link></li> */}
          {/* <li><Link to="/blog" onClick={closeMenu}><span>Blog</span></Link></li> */}
          <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}><span>Contact</span></NavLink></li>
          {/* <li><Link to="/career" onClick={closeMenu}><span>Career</span></Link></li>
          <li><Link to="/terms" onClick={closeMenu}><span>Terms</span></Link></li>
          <li><Link to="/disclaimers" onClick={closeMenu}><span>Disclaimers</span></Link></li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
