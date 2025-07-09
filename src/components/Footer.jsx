import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 footer">
      <div className="container">
        <div className="row">

          {/* Brand Description */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">OncoBridge</h5>
            <p>
              Bridging cancer care and technology. OncoBridge connects patients, providers, and data for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <div className='d-flex'>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#about" className="text-light text-decoration-none">Product</a></li>
              <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
            <ul className="list-unstyled mx-auto ">
             <li><Link to="/career" className='text-white text-decoration-none'><span>Career</span></Link></li>
          <li><Link to="/terms" className='text-white text-decoration-none'><span>Terms</span></Link></li>
          <li><Link to="/disclaimers" className='text-white text-decoration-none'><span>Disclaimers</span></Link></li> 
          </ul>
          </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Contact</h5>
            <p><i className="fas fa-home me-2"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope me-2"></i> info@oncobridge.com</p>
            <p><i className="fas fa-phone me-2"></i> +1 234 567 890</p>
          </div>

          {/* Social Icons */}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-2">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="row border-top pt-3 mt-4">
          <div className="col text-center">
            <small>&copy; {new Date().getFullYear()} OncoBridge. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
