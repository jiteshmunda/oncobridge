import React from "react";
import { NavLink } from "react-router-dom";
import footerlogo from '../assets/1-removebg-preview.png';
function Footer() {
  return (
    <footer className="bg-white text-dark pt-5 pb-4 footer">
      <div className="container">
        <div className="row">
          {/* Brand Description */}
          <div className="col-md-3 mb-4">
            <img
              src={footerlogo}
              alt="OncoBridge Logo"
              style={{ maxWidth: "120px" }}
              className="mb-3"
            />
            <p>
              Bridging cancer care and technology. OncoBridge connects patients,
              providers, and data for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <div className="d-flex justify-content-end">
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Home</span></NavLink>
                </li>
                {/* <li>
                  <a href="/" className="text-dark text-decoration-none">
                    Home
                  </a>
                </li> */}
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>About Us</span></NavLink></li>
                <li><NavLink to="/patients" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Patients</span></NavLink></li>
                <li><NavLink to="/hospital" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Hospital</span></NavLink></li>
                <li><NavLink to="/insurance" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Insurance</span></NavLink></li>

                <li><NavLink to="/blog" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>blog</span></NavLink></li>
<li><NavLink to="/blog" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Testimonials</span></NavLink></li>
                <li><NavLink to="/blog" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Videos</span></NavLink></li>
              
              </ul>
              <ul className="list-unstyled mx-auto ">
                  <li><NavLink to="/blog" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Newsletters</span></NavLink></li>
                <li><NavLink to="/myths" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Myths</span></NavLink></li>
                <li><NavLink to="/faq" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>FAQ</span></NavLink></li>


                <li><NavLink to="/career" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Career</span></NavLink></li>
                <li><NavLink to="/partners" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Partners</span></NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Contact</span></NavLink></li>
                <li>
                  <NavLink
                    to="/disclaimers"
                    className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}
                  >
                    <span>Disclaimers</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Contact</h5>
            <p>
              <i className="fas fa-home me-2"></i>
              18-2, Ground Floor, 4th Street, Gokulam Colony
              PN Pudur Coimbatore, Tamil Nadu, India

            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> care@oncobridge.in
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> +91 90256 65212
            </p>

            {/* Social Icons moved here */}
            <div className="d-flex gap-2 mt-3">
              <a href="https://www.facebook.com/share/1WvrTsomYM/" target="_blank" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/OncoBridge?t=b0ixO1WXQ-4UlIlO56b4wg&s=09" target="_blank" className="social-icon" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/onco-bridge-b3204b375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/onco_bridge?igsh=MXAyYXh6cjUzZzZmbQ==&utm_source=ig_contact_invite"  target="_blank" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Newsletter</h5>
            <p>Stay informed with updates and health tips from OncoBridge.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="position-relative">
                <input
                  type="email"
                  className="form-control rounded-pill pe-5 py-2"
                  placeholder="Your email"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary position-absolute end-0 top-0 mt-1 me-1 rounded-pill px-3 d-flex align-items-center justify-content-center"
                  style={{ height: "80%" }}
                >
                  send
                </button>
              </div>
            </form>
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