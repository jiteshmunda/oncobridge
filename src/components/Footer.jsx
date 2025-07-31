import React from "react";
import { NavLink, Link } from "react-router-dom";
import footerlogo from '../assets/logo_bg.jpeg';
function Footer() {
  return (
    <footer className="bg-white text-dark pt-5 pb-4 footer">
      <div className="container">
        <div className="row">
          {/* Brand Description */}
          <div className="col-md-4 col-lg-3 col-sm-12 ">
            <div className="footer_logo">          
            </div>
                {/* social media  */}
              <div className="d-none d-md-block d-lg-none">
                <h5 className=" fw-bold mb-3 footer_heading">Follow Us</h5>
                {/* Social Icons moved here */}
                <div className="d-flex gap-2 mt-3">
                  <Link to="https://www.facebook.com/share/1WvrTsomYM/" target="_blank" className="social-icon" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="https://x.com/OncoBridge?t=b0ixO1WXQ-4UlIlO56b4wg&s=09" target="_blank" className="social-icon" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
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

          {/* Quick Links */}
          <div className="col-md-4 col-lg-3 col-sm-12 ">
            <h5 className=" fw-bold mb-3 footer_heading">Quick Links</h5>
            <div className="d-flex justify-content-end">
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Home</span></NavLink>
                </li>
                {/* <li>
                  <Link to="/" className="text-dark text-decoration-none">
                    Home
                  </Link>
                </li> */}
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>About Us</span></NavLink></li>
                <li><NavLink to="/patients" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Patients</span></NavLink></li>
                <li><NavLink to="/hospital" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Hospital</span></NavLink></li>
                <li><NavLink to="/insurance" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Insurance</span></NavLink></li>

                {/* <li><NavLink to="/blog" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Blog</span></NavLink></li>
                <li><NavLink to="/blog" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Testimonials</span></NavLink></li>
                <li><NavLink to="/blog" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Videos</span></NavLink></li> */}
                <li><NavLink to="/myths" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Myths & Facts</span></NavLink></li>

              </ul>
              <ul className="list-unstyled mx-auto ">
                {/* <li><NavLink to="/blog" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Newsletters</span></NavLink></li> */}
                <li><NavLink to="/faq" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>FAQ</span></NavLink></li>


                <li><NavLink to="/careers" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Careers</span></NavLink></li>
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
          <div className="col-md-4 col-lg-3 col-sm-12 location_block">
            <h5 className=" fw-bold mb-3 footer_heading">Contact</h5>
            <p className="d-flex">
              <i className="fas fa-map-marker-alt me-2"></i>
              18-2, Ground Floor, 4th Street, Gokulam Colony
              PN Pudur Coimbatore, Tamil Nadu, India

            </p>
            <p>
              <i className="fas fa-envelope me-2"></i>
              <Link to="mailto:care@oncobridge.in" className='text-primary text-decoration-none'>care@oncobridge.in </Link>
            </p>
            <p>
              <i className="fas fa-phone me-2"></i>+91 90256 65212
            </p>
          </div>

          {/* Newsletter */}
          <div className="col-md-12 col-lg-3 col-sm-12  d-lg-block d-sm-block d-md-none">
            <div className="col-lg-12 col-sm-12  col-md-6 mx-auto">
              <h5 className=" fw-bold mb-3 footer_heading">Follow Us</h5>
              {/* <form onSubmit={(e) => e.preventDefault()}>
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
              </form> */}
              {/* Social Icons moved here */}
              <div className="d-flex gap-2 mt-3">
                <Link to="https://www.facebook.com/share/1WvrTsomYM/" target="_blank" className="social-icon" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="https://x.com/OncoBridge?t=b0ixO1WXQ-4UlIlO56b4wg&s=09" target="_blank" className="social-icon" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/oncobridge-b3204b375/" target="_blank" className="social-icon" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="https://www.instagram.com/oncobridge17" target="_blank" className="social-icon" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </Link>
                {/* <Link to="https://www.instagram.com/onco_bridge?igsh=MXAyYXh6cjUzZzZmbQ==&utm_source=ig_contact_invite" target="_blank" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </Link> */}
              </div>
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