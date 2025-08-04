import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [department, setDepartment] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    hospitalName: "",
    hospitalCity: "",
    insuranceName: "",
    insuranceCity: "",
    message: "",
  });

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
  e.preventDefault();

  const templateParams = {
  name: formData.name,
  email: formData.email,
  mobile: formData.mobile || "",
  department: department || "",
  hospitalName: formData.hospitalName || "",
  hospitalCity: formData.hospitalCity || "",
  insuranceName: formData.insuranceName || "",
  insuranceCity: formData.insuranceCity || "",
  message: formData.message,
  to_email: "sethuraman.murugaiyan@outlook.com",
};


  console.log("Sending Email with params:", templateParams);

  emailjs
    .send(
      "service_okdsi85",
      "template_6ges8af",
      templateParams,
      "l0cD42p3tCb7Pv8LS"
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      },
      (err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Check console for details.");
      }
    );
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact_block">
        <div className="container my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Contact Us</h1>
          </div>

          <div className="row">
            {/* Contact Details */}
            <div className="col-md-5 mb-4">
              <div className="text-justify rounded-4 contact_us_left">
                <div className="d-flex flex-column align-items-md-start align-items-center text-md-start text-center mb-3">
                  <i className="fas fa-map-marker-alt mb-1"></i>
                  <strong>Address:</strong>
                  <span>18-2, Ground Floor, 4th Street</span>
                  <span>Gokulam Colony, PN Pudur</span>
                  <span>Coimbatore - 641041</span>
                  <span>Tamil Nadu, India</span>
                </div>

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
              <div className="text-justify rounded-4 contact_us_right">
                <form onSubmit={sendEmail}>
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
                          onChange={handleChange}
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
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">
                          Mobile
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="mobile"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">Who you are</label>
                        <select
                          id="department"
                          name="department"
                          className="form-select"
                          value={department}
                          onChange={handleDepartmentChange}
                        >
                          <option value="">Select</option>
                          <option value="Patients">Patient</option>
                          <option value="Family Member">Family Member</option>
                          <option value="Hospital">Hospital</option>
                          <option value="Insurance">Insurance Provider</option>
                        </select>
                      </div>
                    </div>

                    <div className="">
                      <div className="row mb-3">
                        {department === "Hospital" && (
                          <>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <label htmlFor="hospitalName" className="form-label">
                                Name of Hospital
                              </label>
                              <input
                                type="text"
                                id="hospitalName"
                                className="form-control"
                                placeholder="Enter hospital name"
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <label htmlFor="hospitalCity" className="form-label">
                                City
                              </label>
                              <input
                                type="text"
                                id="hospitalCity"
                                className="form-control"
                                placeholder="Enter city"
                                onChange={handleChange}
                              />
                            </div>
                          </>
                        )}

                        {department === "Insurance" && (
                          <>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <label htmlFor="insuranceName" className="form-label">
                                Name of Insurance
                              </label>
                              <input
                                type="text"
                                id="insuranceName"
                                className="form-control"
                                placeholder="Enter insurance name"
                                onChange={handleChange}
                              />
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <label htmlFor="insuranceCity" className="form-label">
                                City
                              </label>
                              <input
                                type="text"
                                id="insuranceCity"
                                className="form-control"
                                placeholder="Enter city"
                                onChange={handleChange}
                              />
                            </div>
                          </>
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
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="read-more-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="my-5 col-md-12 map">
            <h5 className="mb-3">Our Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.274263412425!2d76.9212757750453!3d11.018037289145777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzA0LjkiTiA3NsKwNTUnMjUuOSJF!5e0!3m2!1sen!2sin!4v1752921016780!5m2!1sen!2sin"
              width="1090"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
