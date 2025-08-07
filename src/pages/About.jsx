import React, { useEffect, useRef } from "react";
import vision from "../assets/vision.jpg";
import "../styles/About.css";

function About() {
  const leftContentRef = useRef(null);
  const rightWrapperRef = useRef(null);

  useEffect(() => {
    const leftContent = leftContentRef.current;
    const rightWrapper = rightWrapperRef.current;

    const handleWheel = (e) => {
      const scrollTop = leftContent.scrollTop;
      const scrollHeight = leftContent.scrollHeight;
      const clientHeight = leftContent.clientHeight;

      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight;

     
      if ((!atTop && e.deltaY < 0) || (!atBottom && e.deltaY > 0)) {
        e.preventDefault();
        leftContent.scrollTop += e.deltaY;
      }
    };

    
    rightWrapper.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      rightWrapper.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="about-section">
      <div className="container-fluid">
        <div className="row about-row g-0">
          {/* Left Content Scroll */}
          <div className="col-lg-6 col-md-6 about-content" ref={leftContentRef}>
            <div className="m-lg-5">
              <h1 className="fw-bold display-5 mb-3 animate__animated animate__fadeIn about-title">
                Erasing Cancer,
                <br /> Embracing Life
              </h1>

              <h5>Vision Statement</h5>
              <p>
                To democratize access to world-class cancer diagnostics and
                expert medical opinions, empowering every patient in India and
                beyond to make confident, informed decisions in their cancer
                journey.
              </p>
              <h5>Mission Statement</h5>
              <p>
                At OncoBridge, we are building a trusted bridge between patients
                and the world’s leading cancer experts. We deliver precision
                diagnostics and global second opinions through a seamless,
                tech-enabled platform — combining cutting-edge tools,
                compassionate care, and medical excellence to improve outcomes
                and bring peace of mind to patients and their families.
              </p>
              <p>
                Our platform ensures timely access to the right diagnosis,
                reduces uncertainty for patients, and empowers doctors to
                collaborate globally, driving better cancer care.
              </p>
              <p>
                By combining innovation, expertise, and empathy, OncoBridge
                strives to transform the cancer journey into a path of hope and
                confidence.
              </p>
            </div>
          </div>

          {/* Right Side Scroll-Linked */}
          <div
            className="col-lg-6 col-md-6 about-image-wrapper"
            ref={rightWrapperRef}
          >
            <img
              src={vision}
              className="about-sticky-image rounded shadow"
              alt="Our Vision and Mission"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
