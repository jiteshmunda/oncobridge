import React from "react";
import { useState } from "react";
function Contact() {
  const [department, setDepartment] = useState("");
  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };
  return (
    <>
      <section className="text-center">
        <div className="container-fluid px-0">
          <div className="row gx-0 align-items-left">
            <div className="bg-image-contact d-flex justify-content-left align-items-center text-left text-white">
              <div className="overlay-content">
                <div className="col-md-12 p-3 ms-lg-5 ps-lg-4">
                  <h1 className="fw-bold text-white display-3 animate__animated animate__fadeIn">
                    Contact Us
                  </h1>
                  {/* <p className="lead"> Our Vision  Mission </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact_block ">
        <div className="container my-5">
          {/* Page Header */}
          <div className="text-center mb-5">
            <h1 className="fw-bold">Contact Us</h1>
            {/* <p className="text-muted">
              We’re here to help. Reach out to us anytime — we’d love to hear from you.
            </p> */}
          </div>

          {/* Contact Info + Form */}
          <div className="row">
            {/* Contact Details */}
            <div className="col-md-5 mb-4">
              <div className="text-justify rounded-4 contact_us_left">
                {/* Address */}
                <div className="d-flex flex-column align-items-md-start align-items-center text-md-start text-center mb-3">
                  <i className="fas fa-map-marker-alt mb-1"></i>
                  <strong>Address:</strong>
                  <span>18-2, Ground Floor, 4th Street</span>
                  <span>Gokulam Colony, PN Pudur</span>
                  <span>Coimbatore - 641041</span>
                  <span>Tamil Nadu, India</span>
                </div>

                {/* Email */}
                <div className="d-flex flex-column align-items-md-start align-items-center text-md-start text-center mb-3">
                  <i className="fas fa-envelope mb-1"></i>
                  <strong>Email:</strong>
                  <a
                    href="mailto:care@oncobridge.in"
                    className="text-primary text-decoration-none"
                  >
                    care@oncobridge.in
                  </a>
                </div>

                {/* Phone */}
                <div className="d-flex flex-column align-items-md-start align-items-center text-md-start text-center">
                  <i className="fas fa-phone mb-1"></i>
                  <strong>Phone:</strong>
                  <a
                    href="tel:+919025665212"
                    className="text-primary text-decoration-none"
                  >
                    +91 90256 65212
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <div className=" text-justify rounded-4 contact_us_right">
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label">
                          Mobile
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      {/* <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject" />
                      </div> */}
                      <div className="mb-3">
                        <label className="form-label">Who you are </label>
                        <select
                          id="department"
                          name="department"
                          className="form-select"
                          value={department}
                          onChange={handleDepartmentChange}
                        >
                          <option value="Patients">Patient </option>
                          <option value="Patients">Family Member </option>
                          <option value="Hospital">Hospital</option>
                          <option value="Insurance">Insurance Provider </option>
                        </select>
                      </div>
                    </div>
                    <div className="">
                      <div className="row mb-3">
                        {/* Conditional fields for Hospital and Insurance */}
                        {department === "Hospital" && (
                          <>
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                              <label
                                htmlFor="hospitalName"
                                className="form-label"
                              >
                                Name of Hospital
                              </label>
                              <input
                                type="text"
                                id="hospitalName"
                                className="form-control"
                                placeholder="Enter hospital name"
                              />
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                              <label
                                htmlFor="hospitalCity"
                                className="form-label"
                              >
                                City
                              </label>
                              <input
                                type="text"
                                id="hospitalCity"
                                className="form-control"
                                placeholder="Enter city"
                              />
                            </div>
                          </>
                        )}

                        {department === "Insurance" && (
                          <div className="row mb-3">
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                              <label
                                htmlFor="insuranceName"
                                className="form-label"
                              >
                                Name of Insurance
                              </label>
                              <input
                                type="text"
                                id="insuranceName"
                                className="form-control"
                                placeholder="Enter insurance name"
                              />
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                              <label
                                htmlFor="insuranceCity"
                                className="form-label"
                              >
                                City
                              </label>
                              <input
                                type="text"
                                id="insuranceCity"
                                className="form-control"
                                placeholder="Enter city"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows="4"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="read-more-btn ">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Google Map (Optional) */}
          <div className="my-5 col-md-12 map">
            <h5 className="mb-3">Our Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.274263412425!2d76.9212757750453!3d11.018037289145777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzA0LjkiTiA3NsKwNTUnMjUuOSJF!5e0!3m2!1sen!2sin!4v1752921016780!5m2!1sen!2sin"
              width="1090"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3554280838634!2d76.9508426!3d10.936501199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b003744db31%3A0xb7e0703f11c83c84!2sKovai%20Pudur%20pirivu!5e0!3m2!1sen!2sin!4v1752825269860!5m2!1sen!2sin" 
         width="1090" height="450" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
