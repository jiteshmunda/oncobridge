import React from "react";

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer efficitur tortor eu egestas pulvinar
              </p>
              <div>
                <a href="/secondoption" className="btn btn-light me-3 px-4 py-2 mb-4">Get Your Second Opinion </a>
                <a href="#services" className="btn btn-outline-light px-4 py-2 mb-4">How It Works </a>
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
      <section className="research-innovation py-5 bg-light">
        <div className="container text-center">
          {/* <h2 className="section-title">Pioneering Cancer Research</h2> */}
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
      </section>


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

            {/* Left: Image with graphics */}
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

            {/* Right: Text */}
            <div className="col-md-6">
              {/* <h3 className="section-heading">A Unified Network of Experts</h3> */}
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
              <button className="btn-theme">
                <i className="bi bi-arrow-right-circle"></i>
                Meet Our Experts
              </button>

            </div>
          </div>
        </div>
      </section>




      {/* Section 3*/}
      <section className="empowering-care py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Left: Text Content */}
            <div className="col-md-6 mb-4 mb-md-0">
              {/* <h3 className="section-heading">Empowering Global Cancer Care</h3> */}
              <h3 className="section-heading">Trusted by Thousands, Backed by Experts.</h3>
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

            {/* Right: Image with Decorations */}
            <div className="col-md-6 position-relative">
              <div className="image-wrapper">
                <img src={global} alt="Indian patient thoughtfully considering medical information on a tablet, seeking clarity for complex decisions"
                  className="img-fluid main-img rounded" />
                {/* <img
            src="https://www.mdanderson.org/content/dam/mdanderson/images/publications/cancerfrontline/WorldCancerDay2017.jpeg.resize.jpg"
            alt="Global Cancer Care"
            className="img-fluid main-img rounded"
          /> */}
                <div className="decor-circle top-right d-flex justify-content-center align-items-center">
                  <i className="bi bi-globe icon-inside"></i>
                </div>
                <div className="decor-circle bottom-left d-flex justify-content-center align-items-center">
                  <i className="bi bi-people icon-inside"></i>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


















      {/* Section 4 */}
      <section className="why-choose-us py-5">
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
      </section>




      {/* Section 5 */}
      <section className="onco-app-section text-white py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">

            {/* Left Content */}
            <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold mb-3 text-white">Lorem ipsum dolor sit amet</h2>
              <p className="lead mb-4 text-light-subtle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pellentesque leo Nam venenatis eros
              </p>

              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <a href="#" className="store-btn google-play">
                  <i className="bi bi-google-play me-2"></i> Google Play
                </a>
                <a href="#" className="store-btn app-store">
                  <i className="bi bi-apple me-2"></i> App Store
                </a>
              </div>
            </div>

            {/* Right Animation */}
            <div className="col-lg-6 text-center">
              <div className="app-animation">
                <Lottie animationData={mobileAnimation} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </section>



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

      {/* Section 6 */}
      <section className="cancer-hero-alt py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="hero-heading">
              Lorem ipsum dolor   <span> adipiscing elit.</span>
            </h1>
            <p className="hero-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pellentesque leo.
            </p>
          </div>

          <div className="row align-items-center gy-4 gx-5">
            <div className="col-md-6">
              <div className="hero-alt-image-box">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80"
                  alt="Empathy in Cancer Care"
                  className="img-fluid rounded-4 shadow-lg"
                />
                <div className="hero-badge">Global Experts, One Mission</div>
              </div>
            </div>

            <div className="col-md-6">
              <ul className="list-unstyled hero-feature-list">
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
              </ul>
              <a href="#contact" className="btn btn-cta mt-4">Join Our Mission</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 */}

      <section className="how-helps-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">How OncoBridge Helps </h2>
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
                  <Link to="/patients" className="read-more-btn">For Patients </Link>
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
                  <Link to="/hospital" className="read-more-btn">For Hospitals </Link>
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
                  <Link to="/insurance" className="read-more-btn">For Insurance Providers </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="timeline">
            {[

              {
                title: "For Patients",
                desc: "Access to leading global oncologists, personalized insights, peace of mind.",
                icon: "bi-person-check",
              },
              {
                title: "For Hospitals",
                desc: "Expand your expertise, support your patients with external validation, collaborate seamlessly.",
                icon: "bi-camera-video",
              },
              {
                title: "For Insurance Providers",
                desc: ": Ensure appropriate care, manage costs effectively, enhance policyholder satisfaction.",
                icon: "bi-heart-pulse",
              },
            ].map((step, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-icon">
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <div className="timeline-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>



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