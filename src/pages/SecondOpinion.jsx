import React from "react";
import { Link } from "react-router-dom";
import second_op1 from "../assets/doctor-patient.jpg";
import second_opt2 from "../assets/second_opt2.jpg";
import second_opt3 from "../assets/second_opt3.jpg";
import "../styles/SecondOpinion.css";
import Expert_view_banner from "../assets/Expert-view.png";
import { FaRegCommentDots } from "react-icons/fa";

function SecondOpinion() {
  return (
    <>
      {/* Banner Section */}
      <section className="bg-image-home">
        <div className="container-fluid">
          <div className="row align-items-center pt-5 pb-5 px-lg-5 px-md-4 px-3">
            <div className="col-md-6 col-lg-6 col-sm-12 text-center text-md-end order-1 order-md-2 mb-4 mb-md-0 px-lg-5 px-md-4">
              <img
                src={Expert_view_banner}
                className="img-fluid home-banner-img"
                alt="Doctor holding patient hand"
                style={{ borderRadius: "20px" }}
              />
            </div>

            <div className="col-md-6 col-lg-6 col-sm-12 text-start ps-lg-5 ps-md-4 ps-sm-3 order-2 order-md-1">
              <h1 className="home_banner_heading">
                <span
                  className="fw-bold display-4"
                  style={{ color: "#1a97ad", lineHeight: "1px" }}
                >
                  Expert
                </span>
                <span className="fw-normal display-4" style={{ color: "#1a97ad" }}>
                  View
                </span>
              </h1>

              <h5
                className="home_banner_subheading mb-4"
                style={{ color: "#1a97ad" }}
              >
                Elevating Cancer Care <br /> through Second Opinion
              </h5>

              <Link
                to="/contact"
                className="btn startjourney px-4 py-2 mt-3 "
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-3 mt-4 mb-5">
        <div className="background d-flex justify-content-between align-items-start px-4 py-4">
          {/* Card 1 */}
          <div className="second-option-card flex-fill px-2">
            <h5>Patients & Family</h5>
            <img
              src={second_op1}
              className="w-100 rounded-3 hover-zoom"
              alt="For Patients"
            />
            <p className="mt-3">
              Access to world-class oncologists, personalized insights, and true
              peace of mind.
            </p>
            <Link to="/patient-login" className="learn-more-btn">
              Learn More
            </Link>
          </div>

          <div className="vertical-divider"></div>

          {/* Card 2 */}
          <div className="second-option-card flex-fill px-2">
            <h5>Doctors & Hospitals</h5>
            <img
              src={second_opt2}
              className="w-100 rounded-3 hover-zoom"
              alt="For Hospitals"
            />
            <p className="mt-3">
              Enhance insight, support patients with second opinions, and
              collaborate seamlessly.
            </p>
            <Link to="/hospital" className="learn-more-btn">
              Learn More
            </Link>
          </div>

          <div className="vertical-divider"></div>

          {/* Card 3 */}
          <div className="second-option-card flex-fill px-2">
            <h5>Insurance Providers</h5>
            <img
              src={second_opt3}
              className="w-100 rounded-3 hover-zoom"
              alt="For Insurance Providers"
            />
            <p className="mt-3">
              Ensure the right care, control costs and improve policyholder
              experience.
            </p>
            <Link to="/insurance" className="learn-more-btn">
              Learn More
            </Link>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link
            to="/contact"
            className="lets-connect-btn d-inline-flex align-items-center gap-2"
          >
            <FaRegCommentDots size={18} />
            Let’s Connect
          </Link>
        </div>
      </div>
    </>
  );
}

export default SecondOpinion;
