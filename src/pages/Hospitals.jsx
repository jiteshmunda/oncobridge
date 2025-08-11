import React from "react";
import doct3 from "../assets/doct3.jpg";
import hospital_banner from "../assets/hospital_banner.jpg";
import { Link } from "react-router-dom";

import hospital1 from "../assets/hospital1.png";
import hospital2 from "../assets/hospital2.png";
import hospital3 from "../assets/hospital3.jpg";
import hospital4 from "../assets/hospital4.jpg";
import Hospital_banner from "../assets/Doctors and Hospital.png";
function Hospitals() {
  return (
    <>
      {/* <section className="text-left">
        <div className="container-fluid px-0">
          <div className="row gx-0 align-items-center">
            <div className="bg-image_hospital d-flex justify-content-left align-items-center text-left text-white">
              <div className="overlay-content">
                <div className="col-md-7 p-3 ps-lg-5 ms-lg-5 ms-md-5 ms-sm-5">
                  <h1 className="fw-bold text-white display-6 animate__animated animate__fadeIn">
                    Collaborate for Excellence: Empowering Your Practice with
                    OncoBridge.
                  </h1>
                  <p className="lead mt-3 animate__animated animate__fadeIn animate__delay-1s">
                    OncoBridge partners with hospitals and treating physicians
                    to provide timely, <br />
                    specialized second opinions, enhancing patient care and
                    extending your expert reach.
                  </p>
                  <div className="d-flex justify-content-start gap-3 mt-3 animate__animated animate__fadeInUp animate__delay-2s">
                    <Link
                      to="/contact"
                      target="_blank"
                      className="read-more-btn-white"
                    >
                      Start Your Second Opinion Request
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-image-home">
        <div className="container-fluid">
          <div className="row align-items-center pt-5 pb-5 px-lg-5 px-md-4 px-3">
            {/* Right Image Column */}
            <div className="col-md-6 col-lg-6 col-sm-12 text-center text-md-end order-1 order-md-2 mb-4 mb-md-0 px-lg-5 px-md-4">
              <img
                src={Hospital_banner}
                className="img-fluid home-banner-img"
                alt="Doctor holding patient hand"
                style={{ borderRadius: "20px" }}
              />
            </div>

            {/* Left Text Column */}
            <div className="col-md-6 col-lg-6 col-sm-12 text-start order-2 order-md-1 px-lg-4 px-md-4">
              <h1
                className="fw-bold display-6 animate__animated animate__fadeIn hospital_banner_heading"
                style={{ color: "#1a97ad" }}
              >
                Collaborate for Excellence: Empowering Your Practice with
                OncoBridge.
              </h1>
              <p
                className="lead mt-3 animate__animated animate__fadeIn animate__delay-1s"
                style={{ fontSize: "18px" }}
              >
                OncoBridge partners with hospitals and treating physicians to
                provide timely, specialized second opinions, enhancing patient
                care and extending your expert reach.
              </p>
              <div className="d-flex justify-content-start gap-3 mt-3 animate__animated animate__fadeInUp animate__delay-2s">
                <Link to="/contact" className="btn startjourney px-4 py-2 mt-3">
                  Start Your Second Opinion Request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className=" py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title fw-bold ">
              Expand Your Capabilities, Elevate Patient Outcomes
            </h2>
          </div>
          <div className="row text-start expand_block">
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="row text-start">
                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className=" p-3 border rounded shadow-sm bg-white">
                    <h6 className="fw-bold mb-1">Access Global Expertise</h6>
                    <p className="mb-0 small">
                      Offer your patients access to a network of world-leading
                      oncologists without geographical limitations.
                    </p>
                  </div>
                </div>

                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className=" p-3 border rounded shadow-sm bg-white">
                    <h6 className="fw-bold mb-1">Validated Treatment Plans</h6>
                    <p className="mb-0 small">
                      Gain external validation for complex cases, reinforcing
                      your treatment strategies.
                    </p>
                  </div>
                </div>

                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className=" p-3 border rounded shadow-sm bg-white">
                    <h6 className="fw-bold mb-1">Reduce Patient Outflow</h6>
                    <p className="mb-0 small">
                      Retain patients by offering comprehensive second opinion
                      services within your ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12 d-none d-lg-block bg_expand">
              {/* <img
                className="img-fluid    "
                src={hospital_center}
                alt="Interconnected gears symbolizing seamless collaboration in healthcare"
              /> */}
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="row text-start">
                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className=" p-3 border rounded shadow-sm bg-white">
                    <div>
                      <h6 className="fw-bold mb-1">Streamlined Process</h6>
                      <p className="mb-0 small">
                        Our platform simplifies the medical record sharing and
                        review process for your team.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className="p-3 border rounded shadow-sm bg-white">
                    <div>
                      <h6 className="fw-bold mb-1">
                        Support for Complex Cases
                      </h6>
                      <p className="mb-0 small">
                        Get specialized insights for rare cancers or challenging
                        diagnoses.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className=" p-3 border rounded shadow-sm bg-white">
                    <div>
                      <h6 className="fw-bold mb-1">Educational Resource</h6>
                      <p className="mb-0 small">
                        Leverage expert opinions for internal learning and
                        professional development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className=" py-5 ">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title fw-bold ">
              Seamless Integration for Enhanced Patient Care
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 col-sm-6">
              <div className="card h-100">
                <img
                  src={hospital1}
                  className="card-img-top hospital_img_height"
                  alt="Patient securely uploading medical documents from home."
                />
                <div className="card-body">
                  <h5 className="card-title">Referral & Secure Upload</h5>
                  <p className="card-text">
                    Easily refer patients and securely upload their medical data
                    to our HIPAA-compliant platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <div className="card h-100">
                <img
                  src={hospital2}
                  className="card-img-top hospital_img_height"
                  alt="Global oncology experts collaborating virtually."
                />
                <div className="card-body">
                  <h5 className="card-title">Expert Matching & Review</h5>
                  <p className="card-text">
                    We match the case with a top specialist who provides a
                    comprehensive second opinion report.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <div className="card h-100">
                <img
                  src={hospital3}
                  className="card-img-top hospital_img_height"
                  alt="Doctor meticulously reviewing a medical report."
                />
                <div className="card-body">
                  <h5 className="card-title">Collaborative Insights</h5>
                  <p className="card-text">
                    Receive detailed reports that can be integrated into your
                    patient's file, facilitating informed decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <div className="card h-100">
                <img
                  src={hospital4}
                  className="card-img-top hospital_img_height"
                  alt="Indian patient in a virtual consultation with an expert."
                />
                <div className="card-body">
                  <h5 className="card-title">Follow-up & Support</h5>
                  <p className="card-text">
                    Access to our support team for any queries or follow-up
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Benefits */}
      <section className=" rounded shadow-sm bg-white text-dark py-5 bg_benifits">
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold section-title">What is Benefits?</h2>
              <div className="border-bottom border-2 border-primary  w-25 mb-3"></div>
              <p className="lead">
                Benefits for Different Stakeholders within Hospitals
              </p>
              {/* <img src="https://doctery-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2021/01/bg-07.jpg"/> */}
            </div>

            {/* Right Section */}
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="bg-light-blue text-dark p-4 rounded shadow-sm h-100">
                    <p>
                      <b> For Oncologists</b>
                    </p>
                    <p>
                      "Peer validation, access to sub-specialists, new treatment
                      perspectives."
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light-blue text-dark p-4 rounded shadow-sm h-100">
                    <p>
                      <b> For Hospital Administrators</b>
                    </p>
                    <p>
                      "Enhanced patient satisfaction, potential for new revenue
                      streams, competitive advantage."
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="bg-light-blue text-dark p-4 rounded shadow-sm h-100">
                    <p>
                      <b> For Referring Physicians </b>
                    </p>
                    <p>"Confident referrals, comprehensive patient support."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-5 bg-light rounded get_start_block">
        <div className="container">
          <h2 className="fw-bold mb-4">
            Strengthen your oncology program. Partner with OncoBridge today.
          </h2>
          <Link
            to="/contact"
            target="_blank"
            className="read-more-btn-white-cardbtn"
          >
            {" "}
            Schedule a Partnership Discussion
          </Link>
        </div>
      </section>
    </>
  );
}

export default Hospitals;
