import React from "react";
import { useRef } from "react";
import "../styles/Home.css";
import Lottie from "lottie-react";
import mobileAnimation from "../assets/lottie/mobile-app.json";
import mobileAnimations from "../assets/lottie/banner-animation.json";
import pat1 from "../assets/pat1.jpg";
import pat3 from "../assets/pat3.jpg";
import pat2 from "../assets/pat2.jpg";
import global from "../assets/globle.jpg";
import for_paitent from "../assets/for_paitent.jpg";
import for_hospital from "../assets/for_hospital.jpg";
import for_insurance from "../assets/for_insurance.jpg";
import home_banner from "../assets/home_banner.jpg";
import { Link } from "react-router-dom";
import doctorImage from "../assets/doctor.jpg";

const Home = () => {
  const section4Ref = useRef(null);
  const challengeRef = useRef(null);
  const scrollToSection4 = () => {
    section4Ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToChallenge = () => {
    challengeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* Banner Section */}
      <section className="bg-image-home">
        <div className="container-fluid">
          <div className="row align-items-center pt-5 pb-5 px-lg-5 px-md-4 px-3">
            {/* Right Image Column */}
            <div className="col-md-6 col-lg-6 col-sm-12 text-center text-md-end order-1 order-md-2 mb-4 mb-md-0 px-lg-5 px-md-4">
              <img
                src={home_banner}
                className="img-fluid home-banner-img"
                alt="Doctor holding patient hand"
                style={{ borderRadius: "20px" }}
              />
            </div>

            {/* Left Text Column */}
            <div className="col-md-6 col-lg-6 col-sm-12 text-start order-2 order-md-1 px-lg-4 px-md-4">
              <h1 className="home_banner_heading">
                <span
                  className="fw-bold display-6 mb-5"
                  style={{ color: "#1a97ad" }}
                >
                  Bringing you World-class Oncology Expertise
                </span>
              </h1>
              <h5
                className="home_banner_subheading mb-4 display-6"
                style={{ color: "#1a97ad", fontWeight: 450 }}
              >
                Get access to global experts, with your trusted doctor guiding every step
              </h5>

              <Link
                to="/secondopinion"
                className="btn startjourney px-4 py-2 mt-4"
              >
                Start your journey
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Section 1 */}
      <section
        className="cancer-hero-alt py-5 text-white home_bg_blue"
        ref={challengeRef}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="text_white_heading">The Challenge We Face</h1>

            {/* counts  */}
            <div className="stats-section text-white d-flex align-items-center mt-5 pt-4">
              <div className="container">
                <div className="row text-center">
                  <div className="col-md-4 mb-4 mt-5 count_block">
                    <div className="icon-circle mb-2">
                      <i className="fas fa-user-md fa-2x mb-2"></i>
                    </div>
                    <h3 className="my-2 text-white">13.9 L</h3>
                    <p className="mb-0 fw-bold">
                      New cancer cases in <br /> India annually
                    </p>
                  </div>
                  <div className="col-md-4 mb-4 mt-5 count_block">
                    <div className="icon-circle mb-2">
                      <i className="fas fa-procedures fa-2x mb-2"></i>
                    </div>
                    <h3 className="my-2 text-white">75%</h3>
                    <p className="mb-0 fw-bold">
                      Patients diagnosed in advanced stages
                    </p>
                  </div>
                  <div className="col-md-4 mb-4 mt-5 count_block">
                    <div className="icon-circle mb-2">
                      <i className="fas fa-gem fa-2x mb-2"></i>
                    </div>
                    <h3 className="my-2 text-white">8-15</h3>
                    <p className="mb-0 fw-bold">
                      Months to access specialized care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center gy-4 gx-5 challenge-row">
            <div className="col-md-6">
              <div className="hero-alt-image-box">
                <div className="row "></div>
                <img
                  src={doctorImage}
                  alt="Empathy in Cancer Care"
                  className="img-fluid rounded-4 doctorimage"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="challenge-text">
                <h4>
                  Imagine a future where cancer care in India is{" "}
                  <strong>truly connected</strong>.
                </h4>

                <p>
                  Where oncologists across the country — from urban hospitals to
                  rural clinics — can instantly access the latest global
                  research, treatment outcomes from similar genetic populations,
                  and real-world success stories from Tier-1 to Tier-3 cities,
                  all in one place.
                </p>

                <p>
                  Where breakthrough therapies reach patients in{" "}
                  <strong>Patna</strong> or
                  <strong> Coimbatore</strong> within weeks, not years.
                </p>

                <p>
                  <strong>OncoBridge</strong> is making this future a reality.
                </p>

                <p>
                  We are transforming cancer care in India by creating
                  intelligent connections between leading global oncology
                  experts and the Indian healthcare ecosystem — hospitals,
                  clinicians, patients, and community networks.
                </p>

                <p>
                  This isn’t just about bridging urban-rural divides. It’s about
                  enabling access to tailored, world-class oncology insights
                  that work for India’s unique healthcare landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-0 bg_grey  home_bg_blue">
        <div className="container-fluid px-0">
          <div className="row gx-0 align-items-center">
            <div className="bg-image-bridge d-flex justify-content-left align-items-center text-start  ">
              <div className="overlay-content">
                <div className="col-md-12 col-lg-7 p-md-5 p-lg-5 p-2">
                  <div className="text-center mb-5">
                    <h1 className="hero-heading"> The Bridge to Hope</h1>
                  </div>
                  <p className="text-black text-start bridge_txt_space">
                    Imagine if Dr. Sharma could access{" "}
                    <strong>
                       every relevant Indian and international study, treatment
                      outcomes from similar genetic populations, and success
                      stories from Tier-1 to Tier-3 cities 
                    </strong>{" "}
                    with a single query. Imagine if breakthrough therapies could
                    reach patients in Patna or Coimbatore in weeks, not years.
                  </p>
                  <p className="text-black text-start bridge_txt_space">
                    OncoBridge intends to transform cancer care across India by
                    creating intelligent connections between experts from
                    premier global research institutions and Indian hospitals ,
                    patients, and community healthcare networks. We don't just
                    bridge urban-rural gaps – we improve{" "}
                    <strong>access to world-class oncology insights </strong>{" "}
                     tailored for the Indian healthcare ecosystem.
                  </p>
                  <p className="text-black text-start bridge_txt_space">
                    We understand the unique challenges of Indian healthcare –
                    from genetic diversity to resource optimization – creating a
                    network that serves everyone from Mumbai's corporate
                    hospitals to primary health centres in rural Rajasthan.
                  </p>
                  <Link className="read-more-btn reachout-btn" to="/contact">
                    Reach Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="lives-transformed-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="card border-0 shadow-lg rounded-4 p-4 bg-white position-relative">
                <div className=" mb-3 live_transform">Lives Transformed</div>
                <div className="live_trans_text">
                  <p>
                    Where oncologists across the country — from urban hospitals
                    to rural clinics — can instantly access the latest global
                    research, treatment outcomes from similar genetic
                    populations, and real-world success stories from Tier-1 to
                    Tier-3 cities, all in one place.
                  </p>
                  <p>
                    Where breakthrough therapies reach patients in Patna or
                    Coimbatore within weeks, not years.
                  </p>
                  <p>OncoBridge is making this future a reality.</p>
                  <p>
                    We are transforming cancer care in India by creating
                    intelligent connections between leading global oncology
                    experts and the Indian healthcare ecosystem — hospitals,
                    clinicians, patients, and community networks.
                  </p>
                  <p>
                    This isn’t just about bridging urban-rural divides. It’s
                    about enabling access to tailored, world-class oncology
                    insights that work for India’s unique healthcare landscape.
                  </p>
                </div>
                {/* <p className="">
                  Today,  Dr. Sharma uses OncoBridge to connect her patient
                  Rajesh, a 45-year-old teacher from Kanpur, with a precision therapy protocol
                  that's <strong> more effective for his specific genetic profile.</strong>
                </p>
                <p>
                  Rajesh represents thousands of Indian patients whose lives are transformed when cutting-edge care
                  transcends geographical barriers. His story proves that when we bridge knowledge gaps across India's
                  diverse healthcare landscape, we don't just treat cancer – we <strong>bring hope home to
                    every family.</strong>
                </p> */}
                <div className="story-quote mt-4">
                  <i className="bi bi-chat-quote fs-3 me-2"></i>
                  <span className="quote-text">
                    “Imagine a future where cancer care in India is truly
                    connected.”
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
