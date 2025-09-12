import React from "react";
import { Link } from "react-router-dom";
import iylonLogo from "../assets/iylon-logo2.png";
import teamImage from "../assets/partners image.jpg";
import "../styles/partners.css";

function Partners() {
  return (
    <>
      {/* Section 1 */}
      <section className="partners-hero container-fluid">
        <div className="row gx-0 w-100">
          {/* Left */}
          <div className="col-md-6 partners-left order-2 order-md-1">
            <h2 className="fw-bold mb-4 partners-heading">
              Proudly partnering with
            </h2>
            <img
              src={iylonLogo}
              alt="Iylon Logo"
              className="iylon-logo img-fluid"
            />
          </div>

          {/* Right */}
          <div className="col-md-6 partners-right order-1 order-md-2">
            <img
              src={teamImage}
              alt="Doctors discussing oncology"
              className="img-fluid partners-right-img"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="partners-details py-4">
        <div className="container">
          <div className="text-start">
            <h2 className="section-title fw-bold mb-4 ">
              Advancing Precision Oncology with Iylon
            </h2>
            <ul className="partners-list text-start">
              <li>
                Iylon Precision Oncology is a leader in personalized cancer care
                based in Providence, Rhode Island, USA.
              </li>
              <li>
                Iylon employs genomic analysis and AI to deliver customized
                cancer treatment recommendations.
              </li>
              <li>
                Together, we expand access to advanced, evidence-based oncology
                care.
              </li>
              <li>
                Integrating Iylon’s molecular oncology and AI diagnostics to
                improve patient outcomes.
              </li>
              <li>
                Committed to reducing cancer mortality and providing free care
                to underserved communities.
              </li>
            </ul>
            <p className="text-start mt-4">
              For more information visit{" "}
              <a
                href="https://oncobridge.iylon.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" fw-bold"
                style={{ color: "#1a97ad" }}
              >
                oncobridge.iylon.com
              </a>{" "}
              or email us at{" "}
              <a
                href="mailto:care@oncobridge.in"
                className=" fw-bold"
                style={{ color: "#1a97ad" }}
              >
                care@oncobridge.in
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
