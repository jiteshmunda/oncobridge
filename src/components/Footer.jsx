import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-dark pt-5 pb-4 footer">
      <div className="container">
        <div className="row">
          {/* Brand Description */}
          <div className="col-md-3 mb-4">
            <img
              src="/src/assets/1-removebg-preview.png"
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
                  <NavLink to="/"  className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Home</span></NavLink>
                </li>
                {/* <li>
                  <a href="/" className="text-dark text-decoration-none">
                    Home
                  </a>
                </li> */}
                <li>
                  <NavLink to="/about"  className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>About</span></NavLink>
                  {/* <a
                    href="/patients"
                    className="text-dark text-decoration-none"
                  >
                    About
                  </a> */}
                </li>
                <li>
                  {/* <a
                    href="/hospital"
                    className="text-dark text-decoration-none"
                  >
                    Product
                  </a> */}
                  <NavLink to="/productdesc" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Product</span></NavLink>
                
                </li>
                <li>
                  {/* <a
                    href="/insurance"
                    className="text-dark text-decoration-none"
                  >
                    Services
                  </a> */}
                    <NavLink to="/secondoption" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Services</span></NavLink>
                
                </li>
                <li>
                  {/* <a href="/contact" className="text-dark text-decoration-none">
                    Contact
                  </a> */}
                    <NavLink to="/contact"  className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}><span>Contact</span></NavLink>
                
                </li>
              </ul>
              <ul className="list-unstyled mx-auto ">
                <li>
                  <NavLink to="/career" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}>
                    <span>Career</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms" className={({ isActive }) => isActive ? "menu-link active" : "text-dark text-decoration-none"}>
                    <span>Terms</span>
                  </NavLink>
                </li>
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
              <i className="fas fa-home me-2"></i> 123 Health Street, Mumbai,
              India
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> support@oncologycare.in
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> +91 98765 43210
            </p>

            {/* Social Icons moved here */}
            <div className="d-flex gap-2 mt-3">
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