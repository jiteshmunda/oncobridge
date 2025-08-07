import React from "react";
import { Link } from "react-router-dom";
import second_op1 from "../assets/doctor-patient.jpg";
import second_opt2 from "../assets/second_opt2.jpg";
import second_opt3 from "../assets/second_opt3.jpg";
import "../styles/SecondOpinion.css";

function SecondOpinion() {
  return (
    <>
      <section className="text-center">
        <div className="container-fluid px-0">
          <div className="row gx-0 align-items-left">
            <div className="bg-image-second-opt d-flex justify-content-left align-items-center text-left text-white">
              <div className="overlay-content">
                <div className="col-md-12 p-3 ms-lg-5 ps-lg-4">
                  <h1 className="text-white display-3 animate__animated animate__fadeIn">
                    <span className="font_bold">Expert View</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-3 mt-4 mb-5">
        <div className="background d-flex justify-content-between align-items-start px-4 py-4">

          {/* Card 1 */}
          <div className="second-option-card flex-fill px-3">
            <h5>Patients & Family</h5>
            <img
              src={second_op1}
              className="w-100 rounded-3 hover-zoom"
              alt="For Patients"
            />
            <p className="mt-3">
              Access to world-class oncologists, personalized insights, and true peace of mind.
            </p>
            <Link to="/patients" className="learn-more-btn">Learn More</Link>
          </div>

          <div className="vertical-divider"></div>

          {/* Card 2 */}
          <div className="second-option-card flex-fill px-3">
            <h5>Doctors & Hospitals</h5>
            <img
              src={second_opt2}
              className="w-100 rounded-3 hover-zoom"
              alt="For Hospitals"
            />
            <p className="mt-3">
              Enhance insight, support patients with second opinions, and collaborate seamlessly.
            </p>
            <Link to="/hospital" className="learn-more-btn">Learn More</Link>
          </div>

          <div className="vertical-divider"></div>

          {/* Card 3 */}
          <div className="second-option-card flex-fill px-3">
            <h5>Insurance Providers</h5>
            <img
              src={second_opt3}
              className="w-100 rounded-3 hover-zoom"
              alt="For Insurance Providers"
            />
            <p className="mt-3">
              Ensure the right care, control costs and improve policyholder experience.
            </p>
            <Link to="/insurance" className="learn-more-btn">Learn More</Link>
          </div>

        </div>

        <div className="text-center mt-4">
          <Link to="/contact" className="lets-connect-btn">Let’s Connect</Link>
        </div>
      </div>
    </>
  );
}

export default SecondOpinion;
