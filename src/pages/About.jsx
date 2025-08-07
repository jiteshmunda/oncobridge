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
              <h1 className="fw-bold display-5 mb-3 animate__animated animate__fadeIn about-title extra-space-bottom">
                Erasing Cancer,
                <br /> Embracing Life
              </h1>

              <p>
                We empower cancer patients in India and beyond by providing
                trusted access to world-class diagnostics and expert medical
                opinions. Through our seamless, tech-driven platform, we connect
                patients with leading cancer specialists, delivering precision
                insights and compassionate support. Our goal is to help every
                patient make confident, informed decisions, improve treatment
                outcomes, and bring peace of mind to them and their families.
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
