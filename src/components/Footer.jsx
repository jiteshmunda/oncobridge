import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="bg-white text-dark pt-5 pb-4 footer px-3">
      <div className="container">
        <div className="row text-start justify-content-center footer-row">

          {/* Quick Links */}
          <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
            <h5 className="fw-bold mb-3 footer_heading">Quick Links</h5>
            <div className="d-flex flex-wrap">
              <ul className="list-unstyled me-4">
                <li><NavLink to="/" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Home</span></NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>About Us</span></NavLink></li>
                <li><NavLink to="/patients" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Patients</span></NavLink></li>
                <li><NavLink to="/hospital" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Hospital</span></NavLink></li>
                <li><NavLink to="/insurance" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Insurance</span></NavLink></li>
                <li><NavLink to="/myths" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Myths & Facts</span></NavLink></li>
              </ul>
              <ul className="list-unstyled">
                <li><NavLink to="/faq" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>FAQ</span></NavLink></li>
                <li><NavLink to="/careers" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Careers</span></NavLink></li>
                <li><NavLink to="/partners" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Partners</span></NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Contact</span></NavLink></li>
                <li><NavLink to="/disclaimers" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Disclaimers</span></NavLink></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
            <h5 className="fw-bold mb-3 footer_heading">Contact</h5>
            <div className='d-flex mb-2'>
              <i className="fas fa-map-marker-alt me-2 mt-1"></i>
              <p className="mb-0">
                18-2, Ground Floor, <br />4th Street
                Gokulam Colony,<br /> PN Pudur
                Coimbatore - 641041,<br />
                Tamil Nadu, India
              </p>
            </div>
            <p className="mb-1">
              <i className="fas fa-envelope me-2"></i>
              <Link to="mailto:care@oncobridge.in" className='text-primary text-decoration-none'>care@oncobridge.in</Link>
            </p>
            <p className="mb-0">
              <i className="fas fa-phone me-2"></i>+91 90256 65212
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-12 col-lg-2 col-sm-12 mb-4">
            <h5 className="fw-bold mb-3 footer_heading">Follow Us</h5>
            <div className="d-flex gap-3 mt-3">
              <Link to="https://www.facebook.com/share/1WvrTsomYM/" target="_blank" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="https://x.com/OncoBridge?t=b0ixO1WXQ-4UlIlO56b4wg&s=09" target="_blank" className="social-icon" aria-label="Twitter">
                <i className="fab fa-x"></i>
              </Link>
              <Link to="https://www.linkedin.com/in/oncobridge-b3204b375/" target="_blank" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="https://www.instagram.com/oncobridge17" target="_blank" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row border-top pt-3 mt-4">
          <div className="col text-center">
            <small>
              &copy; {new Date().getFullYear()} OncoBridge. All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
