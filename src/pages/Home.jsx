import React from "react";
import { useRef } from "react";
import "../styles/Home.css";
import Lottie from "lottie-react";
import mobileAnimation from "../assets/lottie/mobile-app.json";
import mobileAnimations from "../assets/lottie/banner-animation.json";
import pat1 from '../assets/pat1.jpg';
import pat3 from '../assets/pat3.jpg';
import pat2 from '../assets/pat2.jpg';
import global from '../assets/globle.jpg';
import for_paitent from '../assets/for_paitent.jpg';
import for_hospital from '../assets/for_hospital.jpg';
import for_insurance from '../assets/for_insurance.jpg';
import hands_to from '../assets/hands_to.jpg';
import { Link } from 'react-router-dom';

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
      <section className="text-center">
        <div className='container-fluid px-0'>
          <div className='row gx-0 align-items-left'>
            <div className="bg-image-home d-flex justify-content-left align-items-center text-left text-white ">
              <div className="overlay-content">
                <div className='col-md-7 p-3 ms-lg-5 ps-lg-4'>
                  <h1 className="display-4 fw-bold text-white">
                    Lorem ipsum dolor sit amet
                  </h1>
                  <p className="lead mb-4 text-white">
                    Bridging cancer care and technology. OncoBridge connects patients,
                    providers, and data for a better tomorrow.
                  </p>
                  <div>
                    <Link to="/secondoption" target="_blank" className="btn btn-light me-3 px-4 py-2 mb-4">Get Your Second Opinion</Link>
                    {/* <a href="/secondoption" className="btn btn-light me-3 px-4 py-2 mb-4">Get Your Second Opinion </a> */}
                    {/* <a href="#services" className="btn btn-outline-light px-4 py-2 mb-4">How It Works </a> */}
                    {/* <button onClick={scrollToSection4} className="btn btn-outline-light px-4 py-2 mb-4">
                      How It Works
                    </button> */}
                    <Link to="/contact" target="_blank" className="btn btn-outline-light px-4 py-2 mb-4"> How It Works</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="hero-banner d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-4 fw-bold">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer efficitur tortor eu egestas pulvinar
              </p>
              <div>
                <a href="/secondoption" className="btn btn-primary me-3 px-4 py-2 mb-4">Get Your Second Opinion </a>
                <a href="#services" className="btn btn-outline-light px-4 py-2 mb-4">How It Works </a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <Lottie animationData={mobileAnimations} loop={true} />
            </div>
          </div>
        </div>
      </section> */}


      {/* Section 1 */}
      {/* <section className="research-innovation py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-title">Lorem ipsum dolor sit amet.</h2>
          <p className="section-subtitle">

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pellentesque leo
          </p>
          <div className="row mt-4">
            {[
              { icon: "bi bi-bar-chart", title: "Lorem ipsum dolor sit consectetur" },
              { icon: "bi bi-globe-central-south-asia", title: "Lorem ipsum dolor sit consectetur" },
              { icon: "bi bi-capsule", title: "Lorem ipsum dolor sit consectetur" }, // <- FIXED HERE
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="research-card p-4 h-100">
                  <i className={`${item.icon} display-6 text-primary mb-3`}></i>
                  <h5>{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Section 1: Mission Quote */}
      {/* <section className="mission-quote-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <blockquote className="mission-quote text-muted fst-italic">
                “OncoBridge unites pioneers in precision oncology to deliver compassionate, data-driven cancer care — one patient at a time.”
              </blockquote>
            </div>
          </div>
        </div>
      </section> */}



      {/* Section 2 */}
      <section className="about-oncobridge py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Left: Text */}
            <div className="col-md-6">
              <h3 className="section-heading"> Lorem ipsum dolor sit amet</h3>
              <div className="theme-underline mb-3"></div>
              <p className="text-muted">
                Doubts about diagnosis, treatment options, or potential side effects are natural.
                A second opinion from a specialized oncologist can provide invaluable peace of mind,
                confirm your diagnosis, refine treatment strategies,
                and open doors to advanced therapies, ultimately improving outcomes.
              </p>
              <p className="text-muted">
                A cancer diagnosis brings immense challenges and critical decisions.

              </p>

              {/* Button */}
              <button className="btn-theme mb-5 mb-lg-0 mb-md-0 mb-sm-0">
                <i className="bi bi-arrow-right-circle"></i>
                Meet Our Experts
              </button>

            </div>
            {/* Right: Image with graphics */}
            <div className="col-md-6 position-relative mb-4 mb-md-0">
              <div className="image-wrapper">
                <img
                  src="https://iylon.com/wp-content/uploads/2024/04/800x500-focus-on-group-of-young-and-mature-clinicians-look-2023-11-27-05-28-04-utc.jpg"
                  alt="OncoBridge Team"
                  className="img-fluid main-img extra-rounded"
                />
                <div className="decor-circle top-left d-flex justify-content-center align-items-center">
                  <i className="bi bi-stars icon-inside"></i>
                </div>
                <div className="decor-circle bottom-right d-flex justify-content-center align-items-center">
                  <i className="bi bi-globe icon-inside"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Section 3*/}
      <section className="empowering-care py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Left: Image with Decorations */}
            <div className="col-md-6 position-relative">
              <div className="image-wrapper">
                <img src={global} alt="Indian patient thoughtfully considering medical information on a tablet, seeking clarity for complex decisions"
                  className="img-fluid main-img  extra-rounded" />
                <div className="decor-circle top-right d-flex justify-content-center align-items-center">
                  <i className="bi bi-globe icon-inside"></i>
                </div>
                <div className="decor-circle bottom-left d-flex justify-content-center align-items-center">
                  <i className="bi bi-people icon-inside"></i>
                </div>
              </div>
            </div>
            {/* Right: Text Content */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="section-heading mt-5 mt-lg-0 mt-md-0 mt-sm-0">Trusted by Thousands, Backed by Experts.</h3>
              <div className="theme-underline mb-3"></div>
              <p className="text-muted">
                We partner with a network of board-certified oncologists from premier institutions globally.
                Secure, confidential, and compliant processes.
                Dedicated case management team to guide you every step of the way.
              </p>
              <p className="text-muted">
                Indian patient thoughtfully considering medical information on a tablet,
                seeking clarity for complex decisions.

              </p>
              {/* <p className="text-muted">
          With access to international expertise and evidence-based practices, we break down barriers
          to quality cancer care — no matter where you are. OncoBridge serves as your digital gateway 
          to seamless coordination, faster second opinions, and innovative treatment strategies.
        </p> */}
              {/* <p className="text-muted">
          Our patient-first philosophy drives our commitment to accessibility, technology, and transparency 
          in oncology. We believe every life deserves the best chance.
        </p> */}

              {/* Button */}
              <button className="btn-theme-section4">
                <i className="bi bi-activity me-2"></i>
                How It Works
              </button>

            </div>
          </div>
        </div>
      </section>


















      {/* Section 4 */}
      {/* <section ref={section4Ref} className="why-choose-us py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Lorem ipsum dolor</h2>
            <p className="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              Nunc vitae pellentesque leo.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Lorem ipsum dolor",
                icon: "bi bi-person-badge",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pellentesque"
              },
              {
                title: "Lorem ipsum dolor",
                icon: "bi bi-wallet2",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pellentesque"
              },
              {
                title: "Lorem ipsum dolor",
                icon: "bi bi-building-add",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pellentesque"
              },
              {
                title: "Lorem ipsum dolor",
                icon: "bi bi-calendar2-check",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pellentesque"
              }
            ].map((item, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="feature-card text-center p-4 h-100">
                  <div className="feature-icon mb-3">
                    <i className={item.icon}></i>
                  </div>
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted small mb-4">{item.desc}</p>
                  <a href="#" className="read-more-btn">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}




      {/* Section 5 Mobile App */}

      {/* <section className="onco-app-section text-white py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">

            
            <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
              <h1 className="display-5 fw-bold mb-3 text-white pb-5 comming_soon">    Comming Soon</h1>
              <p className="lead mb-4 text-light-subtle">
          
              </p>

              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
              
                 <a href="#" className="store-btn google-play" onClick={(e) => e.preventDefault()}
                  style={{ pointerEvents: 'none', color: 'gray', cursor: 'not-allowed' }} >
                  <i className="bi bi-google-play me-2"></i> Google Play
                </a>
                <a href="#" className="store-btn app-store" onClick={(e) => e.preventDefault()}
                  style={{ pointerEvents: 'none', color: 'gray', cursor: 'not-allowed' }}>
                  <i className="bi bi-apple me-2"></i> App Store
                </a> 
              </div>
            </div>

            
            <div className="col-lg-6 text-center">
              <div className="app-animation">
                <Lottie animationData={mobileAnimation} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </section> */}



      {/* <section className="research-innovation py-5 bg-light">
  <div className="container text-center">
    <h2 className="section-title">Pioneering Cancer Research</h2>
    <p className="section-subtitle">
      Backed by global experts and data-driven platforms, we contribute to the evolution of oncology care.
    </p>
    <div className="row mt-4">
      {[
        { icon: "bi bi-bar-chart", title: "AI-Powered Diagnostics" },
        { icon: "bi bi-globe-central-south-asia", title: "Cross-Border Studies" },
        { icon: "bi bi-capsule", title: "Precision Medicine Trials" }, // <- FIXED HERE
      ].map((item, i) => (
        <div className="col-md-4" key={i}>
          <div className="research-card p-4 h-100">
            <i className={`${item.icon} display-6 text-primary mb-3`}></i>
            <h5>{item.title}</h5>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}


      {/* <section className="vision-section text-white d-flex align-items-center">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-10">
        <h2 className="display-5 fw-bold mb-4">A Future Without Borders in Cancer Care</h2>
        <p className="lead mb-5">
          Imagine a world where expert opinions are a click away. Where data empowers healing. 
          Where language, distance, and cost no longer define your treatment.  
        </p>

        <div className="quote-highlight fst-italic">
          “At OncoBridge, this future is not imagined. It's being built every day.”
        </div>

        <div className="mt-5">
          <a href="#contact" className="btn btn-outline-light btn-lg px-5 py-3">
            Join Our Mission
          </a>
        </div>
      </div>
    </div>
  </div>
</section> */}


      {/* <section className="vision-section-upgraded text-white d-flex align-items-center">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-10">

        <h2 className="display-4 fw-bold mb-4 animate-fade-in">
          A Future Without Borders in Cancer Care
        </h2>

        <p className="lead mb-5 animate-fade-in-slow">
          Imagine a world where expert opinions are a click away. Where data empowers healing. 
          Where language, distance, and cost no longer define your treatment.
        </p>

        <div className="quote-glass animate-fade-in-delay">
          <i className="bi bi-stars me-2 text-info"></i>
          “At OncoBridge, this future is not imagined. It's being built every day.”
        </div>

        <div className="mt-5">
          <a href="#contact" className="btn-join-glow px-5 py-3">
            Join Our Mission
          </a>
        </div>
        
      </div>
    </div>
  </div>
</section> */}


      {/* <section className="vision-hero">
  <div className="container">
    <div className="row gx-5 align-items-center">

     
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="vision-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80"
            alt="Vision"
            className="vision-image"
          />
          <div className="vision-label">Future-Ready</div>
        </div>
      </div>

      
      <div className="col-lg-6">
        <h1 className="vision-heading">
          A New Era of <br />
          <span>Borderless Cancer Care</span>
        </h1>

        <p className="vision-subtitle">
          Empowering healing through global access, precision data, and seamless expert connections.  
          Where distance, language, and cost are no longer obstacles.
        </p>

        <div className="vision-quote">
          “At OncoBridge, this future isn't a dream. It's what we deliver every day.”
        </div>

        <a href="#contact" className="vision-button">Join Our Mission</a>
      </div>
    </div>
  </div>
</section> */}



      {/* <section className="vision-elevated text-white">
  <div className="vision-glass container">
    <div className="row align-items-center gx-5 gy-5">

      
      <div className="col-lg-6 text-content">
        <h1 className="display-title">
          Breaking Barriers in <span>Cancer Care</span>
        </h1>
        <p className="vision-lead">
          Access expert opinions in seconds. Connect across borders. Empower healing through smart, human-centered innovation.
        </p>
        <blockquote className="vision-quote">
          <i className="bi bi-activity me-2 text-info"></i>
          “We’re not imagining the future. We’re engineering it.”
        </blockquote>
        <a href="#contact" className="btn-glow">
          Join Our Mission
        </a>
      </div>

      
      <div className="col-lg-6">
        <div className="vision-image-stack">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80"
            alt="Cancer Research"
            className="main-image"
          />
          <div className="image-float-box">Trusted by experts worldwide</div>
        </div>
      </div>

    </div>
  </div>
</section> */}




      {/* Section 7 */}
      <section className="py-0 bg_grey bg_color">
        <div className="container-fluid px-0">
          <div className="row gx-0 align-items-center">
            <div className="bg-image-bridge d-flex justify-content-left align-items-center text-start  ">
              <div className="overlay-content">
                <div className='col-md-7 p-5'>
                  <div className="text-center mb-5">
                    <h1 className="hero-heading"> The Bridge to Hope</h1>
                  </div>
                  <p className="text-black text-start bridge_txt_space">
                    Imagine if Dr. Sharma could access <strong> every relevant Indian and international study, treatment outcomes from similar
                      genetic populations, and success stories from Tier-1 to Tier-3 cities </strong> with a single query.
                    Imagine if breakthrough therapies could reach patients in Patna or Coimbatore in weeks, not years.
                  </p>
                  <p className="text-black text-start bridge_txt_space">
                    OncoBridge intends to transform cancer care across India by creating intelligent connections between experts from premier
                    global research institutions and Indian hospitals , patients, and community healthcare networks.
                  </p>
                  <p className="text-black text-start bridge_txt_space">
                    We don't just bridge urban-rural gaps – we improve <strong>access to world-class oncology insights </strong>  tailored for the Indian healthcare ecosystem.
                    We understand the unique challenges of Indian healthcare – from genetic diversity to resource optimization –
                    creating a network that serves everyone from Mumbai's corporate hospitals to primary health centres in rural Rajasthan.
                  </p>
                  <button className="read-more-btn" onClick={scrollToChallenge}>Begin the Journey</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* live transform  */}
      <section className="lives-transformed-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="card border-0 shadow-lg rounded-4 p-4 bg-white position-relative">
                <div className=" mb-3 live_transform">Lives Transformed</div>
                <p className="">
                  Today,  Dr. Sharma uses OncoBridge to connect her patient
                  Rajesh, a 45-year-old teacher from Kanpur, with a precision therapy protocol
                  that's <strong> more effective for his specific genetic profile.</strong>
                </p>
                <p>
                  Rajesh represents thousands of Indian patients whose lives are transformed when cutting-edge care
                  transcends geographical barriers. His story proves that when we bridge knowledge gaps across India's
                  diverse healthcare landscape, we don't just treat cancer – we <strong>bring hope home to
                    every family.</strong>
                </p>
                <div className="story-quote mt-4">
                  <i className="bi bi-chat-quote fs-3 me-2 text-primary"></i>
                  <span className="quote-text">“Every life we reach is a story worth telling.”</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 6 */}
      <section className="cancer-hero-alt py-5" ref={challengeRef} >
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="hero-heading">
              The Challenge We Face
            </h1>
          </div>
          <div className="row align-items-center gy-4 gx-5">
            <div className="col-md-6">
              <div className="hero-alt-image-box">
                <div className="row ">
                  {/* <div class="container py-5">
                    <div class="row g-4 justify-content-center">
                      <div class="col-md-6 col-lg-5 challenge_card">
                        <div class="card h-100 shadow">
                          <div class="card-body">
                            <h5 class="card-title">13.9 L</h5>  
                            <p class="card-text">New cancer case in India annually</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-5 challenge_card">
                        <div class="card h-100 shadow">
                          <div class="card-body">
                            <h5 class="card-title">75%</h5>
                            <p class="card-text">Patients diagnosed in advanced stages</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row g-4 justify-content-center mt-4">
                      <div class="col-md-6 col-lg-5 challenge_card">
                        <div class="card h-100 shadow">
                          <div class="card-body">
                            <h5 class="card-title">8-15</h5>
                            <p class="card-text">Months to access specialized care</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="col-md-12">
                    <div className="card">
                      <p>13.9 L</p>
                      <p>caner dfgdh udghjdfhgdfert </p>
                    </div>
                    <div className="card">
                      <p>13.9 L</p>
                      <p>caner dfgdh udghjdfhgdfert </p>
                    </div>

                    <div className="card">
                      <p>13.9 L</p>
                      <p>caner dfgdh udghjdfhgdfert </p>
                    </div>                 
                     </div> */}
                </div>
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80"
                  alt="Empathy in Cancer Care"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>

            <div className="col-md-6">
              <p className="challenge_txt">
                Meet Dr. Sharma, a dedicated oncologist at Delhi who spends her days fighting an invisible enemy.
                Despite her access to international research and decades of medical training,
                she finds herself <strong> struggling to connect
                  global breakthroughs </strong>  with the diverse patient population she serves across India.
                Dr. Sharma represents thousands of Indian healthcare professionals who face unique
                challenges:<strong>  bridging international
                  research with local patient genetics, managing resource constraints,
                  and ensuring equitable access </strong> to life-saving treatments across urban
                metros and rural communities.
              </p>
              {/* <ul className="list-unstyled hero-feature-list">
                {[
                  {
                    icon: "bi bi-lightning-charge",
                    title: "Lorem ipsum dolor",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pellentesque leo. ",
                  },
                  {
                    icon: "bi bi-graph-up-arrow",
                    title: "Lorem ipsum dolor",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pellentesque leo.",
                  },
                  {
                    icon: "bi bi-person-heart",
                    title: "Lorem ipsum dolor",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pellentesque leo.",
                  },
                ].map((item, i) => (
                  <li key={i} className="d-flex mb-4">
                    <div className="me-3 icon-box text-primary">
                      <i className={`${item.icon} fs-3`}></i>
                    </div>
                    <div>
                      <h5 className="mb-1">{item.title}</h5>
                      <p className="mb-0 text-muted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul> */}
              {/* <a href="#contact" className="btn btn-cta mt-4">Join Our Mission</a> */}
            </div>
          </div>
          {/* counts  */}
          <div className="stats-section text-white d-flex align-items-center mt-5 pt-4">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-4 mb-4 mt-5 count_block">
                  <div className="icon-circle mb-2">
                    <i className="fas fa-user-md fa-2x mb-2"></i>
                  </div>
                  <h3 className="my-2 text-white">13.9 L</h3>
                  <p className="mb-0 fw-bold">Medical Experts</p>
                </div>
                <div className="col-md-4 mb-4 mt-5 count_block">
                  <div className="icon-circle mb-2">
                    <i className="fas fa-procedures fa-2x mb-2"></i>
                  </div>
                  <h3 className="my-2 text-white">75%</h3>
                  <p className="mb-0 fw-bold">Hospital Rooms</p>
                </div>
                <div className="col-md-4 mb-4 mt-5 count_block">
                  <div className="icon-circle mb-2">
                    <i className="fas fa-gem fa-2x mb-2"></i>
                  </div>
                  <h3 className="my-2 text-white">8-15</h3>
                  <p className="mb-0 fw-bold">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* your story  */}
      <div className="container-fluid hero-wrapper story-section text-white">
        <div className="row">
          {/* Left Content */}
          <div className="col-md-6 d-flex flex-column justify-content-center p-5 text-white hero-bg">
            <h1 className="display-5 fw-bold">Your Story Starts Here</h1>
            <p className=" mt-4">
              Join us in building bridges that <strong>transform cancer care across every corner of India.</strong>
              Whether you're a patient, a clinician in a district hospital, or a healthcare institution
              ready to improve access – your impact story begins with OncoBridge.
            </p>
            <Link to="/contact" target="_blank" className="btn btn-light btn-lg mt-4 px-4 rounded-pill shadow col-md-5">
              Get Started
            </Link>
          </div>
          {/* Right Image */}
          <div className="col-md-6 p-0">
            <img src="https://doctery-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2020/12/img-08.jpg" alt="Doctor" className="img-fluid h-100 w-100 object-fit-cover" />
          </div>
          {/* Play Button in Center */}
          {/* <div className="play-button-wrapper">
          <div className="play-button">
            <i className="bi bi-play-fill text-primary fs-4"></i>
          </div>
        </div> */}
        </div>
      </div>
      {/* <section className="story-section text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold">Your Story Starts Here</h1>
              <p className="lead mt-4">
                Join us in building bridges that transform cancer care across every corner of India.
                Whether you're a patient, a clinician in a district hospital, or a healthcare institution
                ready to improve access – your impact story begins with <strong>OncoBridge</strong>.
              </p>
              <a href="/get-started" className="btn btn-light btn-lg mt-4 px-4 rounded-pill shadow">
                Get Started
              </a>
            </div>
            <div className="col-lg-5 text-center">
              <img
                src="https://doctery-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2020/12/img-08.jpg"
                alt="OncoBridge Impact"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section> */}


      <section className="newsletter-beauty text-white">
        <div className="container py-5 text-center">
          <h2 className="newsletter-heading">Your Journey to Clarity Starts Here</h2>
          <p className="newsletter-subtext">
            Connect your family with world-class US oncologists for personalized second opinions.
            Because every treatment decision deserves global expertise and local understanding.
          </p>
          <div className="mt-5">
            <Link className="journey_btn" target="_blank" to="/contact">Start Your Journey</Link>
            <Link className="journey_btn" target="_blank" to="/about"> Learn More</Link>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fluid py-5 clarity_bg" >
          <div className="container py-4">
            <div className="row align-items-center">
              {/* Right Form */}
              <div className="col-lg-6 ms-auto bg-white bg-opacity-75 p-5 rounded-4 shadow">
                {/* <div className="d-flex align-items-center mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1486/1486426.png"
                alt="Heart Icon"
                width="40"
                className="me-2"
              />
              <span className="text-primary fw-bold">ONLINE APPOINTMENT</span>
            </div> */}
                <h3 className="fw-bold text-dark mb-4">
                  Take the First Step Towards Clarity
                </h3>
                <p>
                  Join thousands of families who found peace of mind through expert second opinions.
                  Your journey to the best possible care starts with one click.
                </p>
                <ul className="list-unstyles">
                  <li>
                    Free 15-minute consultation call
                  </li>
                  <li>
                    No commitment required
                  </li>
                  <li>
                    Complete privacy guaranteed
                  </li>
                </ul>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Your Name*"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Your E-Mail*"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Phone Number*"
                      />
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn btn-primary px-4 py-2">
                        Get Your Second Opinion
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* journey forms
 <div className="container py-5 d-flex justify-content-center">
      <div className="col-md-8 col-lg-6 bg-light rounded-4 shadow-lg p-4 px-md-5 text-center animate__animated animate__fadeIn" style={{
        background: "linear-gradient(135deg, #0288D1, #01579B)",
        color: "white"
      }}>
        <h2 className="fw-bold mb-3">Take the First Step Towards Clarity</h2>
        <p className="mb-4">
          Join thousands of families who found peace of mind through expert second opinions.
        </p>

        <form>
          <input
            type="text"
            className="form-control form-control-lg mb-3 rounded-pill"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="form-control form-control-lg mb-3 rounded-pill"
            placeholder="Your Email"
          />
          <input
            type="tel"
            className="form-control form-control-lg mb-3 rounded-pill"
            placeholder="Your Phone Number"
          />
          <button
            type="submit"
            className="btn btn-light text-primary fw-bold w-100 rounded-pill py-2"
          >
            Get Your Second Opinion
          </button>
        </form>

        <ul className="list-unstyled mt-4 text-white-50 small">
          <li>✓ Free 15-minute consultation call</li>
          <li>✓ No commitment required</li>
          <li>✓ Complete privacy guaranteed</li>
        </ul>
      </div>
    </div> */}

      {/* <section className="how-helps-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">How Second opinion Helps </h2>
            <p className="section-subtitle">
              Bridging You to World-Class Oncology Expertise
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4 col-lg-4 col-sm-4 how-helps-cards">
              <div className="card h-100">
                <img src={for_paitent} className="card-img-top " alt="Indian oncologist reviewing patient file" />
                <div className="card-body">
                  <p className="card-text">
                    Access to leading global oncologists, personalized insights, peace of mind
                  </p>
                  <Link to="/secondoption" className="read-more-btn">For Patients </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 how-helps-cards">
              <div className="card h-100">
                <img src={for_hospital} className="card-img-top " alt="Diverse medical team collaborating in a modern hospital." />
                <div className="card-body">
                  <p className="card-text">
                    Expand your expertise, support your patients with external validation,
                    collaborate seamlessly.
                  </p>
                  <Link to="/secondoption" className="read-more-btn">For Hospitals </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 how-helps-cards">
              <div className="card h-100">
                <img src={for_insurance} className="card-img-top " alt="Insurance executive analyzing data for strategic healthcare partnerships" />
                <div className="card-body">
                  <p className="card-text">
                    Ensure appropriate care, manage costs effectively, enhance policyholder s
                    atisfaction.
                  </p>
                  <Link to="/secondoption" className="read-more-btn">For Insurance Providers </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="testimonials-section py-5 bg-light">
        <div className="container">
          <div className="">
            <div className="">
              {[
                {
                  title: "OncoBridge Connect",
                  desc1: "B2B Partnerships Platform",
                  desc2: "Sub-essence: Global quality. Delivered with trust.",
                  desc3: "Ecosystem-building through partnerships and distribution.",
                  icon: "bi-heart-pulse",
                },
              ].map((step, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc1}</p>
                    <p>{step.desc2}</p>
                    <p>{step.desc3}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}


      {/* <section className="testimonials-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title fw-bold">Real Stories, Real Impact</h2>
            <p className="section-subtitle text-muted">
              OncoBridge gave us confidence. We felt supported and informed.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                name: "Priya S",
                role: "Breast Cancer Survivor",
                message:
                  "I felt lost after my cancer diagnosis. OncoBridge connected me to a top oncologist who reassured me and explained all my options.",
                image: pat1
              },
              {
                name: "Rajesh Patel",
                role: "Patient, Delhi",
                message:
                  "As a caregiver, I needed clarity fast. OncoBridge’s team was responsive, kind, and truly expert. They made a tough time easier",
                image: pat3
              },
              {
                name: "Fatima Noor",
                role: "Caregiver, Jaipur",
                message:
                  "OncoBridge helped us understand my father's diagnosis clearly. The second opinion gave us the confidence to move forward with the right treatment.",
                image: pat2
              }
            ].map((t, idx) => (
              <div key={idx} className="col-md-4 col-lg-4">
                <div className="testimonial-box shadow-sm p-4 h-100 bg-white rounded-4 text-center fade-up">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="testimonial-avatar mb-3"
                    width="70"
                    height="70"
                  />
                  <h6 className="fw-bold mb-1">{t.name}</h6>
                  <small className="text-muted">{t.role}</small>
                  <p className="text-muted mt-3 fst-italic">“{t.message}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}




      {/* Section 6: Testimonials */}
      {/* <section className="testimonials-section py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="section-title">Real Stories, Real Impact</h2>
      <p className="section-subtitle">
        Hear from patients and families who’ve experienced compassionate care with OncoBridge.
      </p>
    </div>

    <div className="row g-4">
      {[
        {
          name: "Anjali Mehta",
          role: "Breast Cancer Survivor",
          message: "OncoBridge gave me the confidence to explore options I didn’t even know existed. The virtual tumor board saved my life.",
          image: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
          name: "Rajesh Patel",
          role: "Family Caregiver",
          message: "The care coordination team was always available, always kind. I felt heard and supported throughout my wife's treatment.",
          image: "https://randomuser.me/api/portraits/men/33.jpg"
        },
        {
          name: "Fatima Noor",
          role: "Patient, Middle East",
          message: "Connecting to international specialists from my home country was seamless. OncoBridge truly empowers patients globally.",
          image: "https://randomuser.me/api/portraits/women/44.jpg"
        }
      ].map((testimonial, idx) => (
        <div className="col-md-6 col-lg-4" key={idx}>
          <div className="testimonial-card p-4 h-100 shadow-sm bg-white rounded">
            <div className="d-flex align-items-center mb-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                <small className="text-muted">{testimonial.role}</small>
              </div>
            </div>
            <p className="text-muted fst-italic">“{testimonial.message}”</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}



      {/* <section className="how-it-works py-5 bg-light">
  <div className="container text-center">
    <h2 className="section-title mb-4">How OncoBridge Works</h2>
    <div className="row">
      {[
        { step: "1", title: "Submit Your Case", desc: "Upload reports, symptoms, and case history." },
        { step: "2", title: "Get Matched", desc: "We match you with global oncology experts." },
        { step: "3", title: "Consult & Plan", desc: "Video consult and receive a detailed treatment plan." },
        { step: "4", title: "Ongoing Support", desc: "Continuous care coordination through our platform." }
      ].map((item, idx) => (
        <div key={idx} className="col-md-3 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <div className="step-number display-4 text-primary">{item.step}</div>
              <h5 className="card-title mt-3">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}



      {/* <section className="cta-banner text-white text-center py-5" style={{ backgroundColor: '#0a2540' }}>
  <div className="container">
    <h2>Ready to take the next step in your cancer care?</h2>
    <p>Connect with world-class oncologists now — no matter where you are.</p>
    <a href="/register" className="btn btn-warning px-4 py-2 mt-3">Get Started</a>
  </div>
</section> */}



      {/* Section 8 */}
      {/* <section className="ready-next">
        <div className="container-fluid p-0">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6 col-lg-6 col-sm-6">
          <div className="card ready-next-card">
          <h2 className="newsletter-heading">Ready for Clarity? Take the Next Step.</h2>
          <p className="newsletter-subtext">
            Whether you're a patient seeking answers,
            a hospital enhancing care, or an insurance provider ensuring quality, OncoBridge is here to help.
          </p>
          </div>
          </div>
           <div className="col-md-6 col-lg-6 col-sm-6">
            <img src={hands_to} className="img-fluid d-none d-lg-block d-sm-block d-md-block" alt="Hands joining, symbolizing collaboration and support in cancer care." />
           </div>
          </div>
        </div>
      </section> */}
      {/* <section className="newsletter-beauty text-white">
        <div className="container py-5 text-center">
          <h2 className="newsletter-heading">Get Health Insights & Breakthroughs</h2>
          <p className="newsletter-subtext">
            Join our newsletter for expert tips, latest research, and early access to new care innovations — exclusively for subscribers.
          </p>

          <form className="newsletter-form mt-4">
            <div className="newsletter-input-wrapper">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
                required
              />
              <button type="submit" className="btn-inside">Subscribe</button>
            </div>
          </form>

          <small className="newsletter-note mt-3 d-block">
            No spam. Unsubscribe anytime.
          </small>
        </div>
      </section> */}



      {/* Section: FAQ */}
      {/* <section className="faq-section py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Got questions? We’ve got answers.</p>
          </div>

          <div className="accordion" id="faqAccordion">
            {[
              {
                question: "Who are your experts?",
                answer:
                  "OncoBridge offers virtual tumor boards, second opinions, care coordination, and access to global oncologists and diagnostic tools.",
              },
              {
                question: "How long does it take?",
                answer:
                  "You can book an appointment directly through our platform or mobile app. A coordinator will guide you through the process.",
              },
              {
                question: "What if I don't have all my records?",
                answer:
                  "Yes, we serve patients worldwide through virtual consultations, international partnerships, and digital tools.",
              },
              {
                question: "Is this covered by insurance?",
                answer:
                  "Yes, we serve patients worldwide through virtual consultations, international partnerships, and digital tools.",
              },
            ].map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                    }`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;