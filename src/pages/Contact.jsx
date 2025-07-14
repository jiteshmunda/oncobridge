import React from 'react';

function Contact() {
  return (
    <section className="section  ">
      <div className="container my-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">
            We’re here to help. Reach out to us anytime — we’d love to hear from you.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="row">
          {/* Contact Details */}
          <div className="col-md-5 mb-4">
            <div className=' text-justify rounded-4 contact_us_left'>
              <h5 className="mb-3">Get in Touch</h5>
              <p>
                <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                <strong>Address:</strong><br />
                123 Health Street, Mumbai, India
              </p>

              <p>
                <i className="fas fa-envelope me-2 text-primary"></i>
                <strong>Email:</strong><br />
                <a href="mailto:support@oncologycare.in">support@oncologycare.in</a>
              </p>

              <p>
                <i className="fas fa-phone-alt me-2 text-primary"></i>
                <strong>Phone:</strong><br />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
             <div className=' text-justify rounded-4 contact_us_right'>
            <form>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Mobile</label>
                    <input type="text" className="form-control" id="subject" />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" />
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            </div>
          </div>
        </div>

        {/* Google Map (Optional) */}
        <div className="my-5">
          <h5 className="mb-3">Our Location</h5>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6911784715924!2d72.87765547508086!3d19.076090752012664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b64e6ddcd8f3%3A0x21a1d36f3b4a7e3a!2sMumbai%2C%20India!5e0!3m2!1sen!2sin!4v1712345678901"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
