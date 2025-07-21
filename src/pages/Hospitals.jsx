import React from 'react';
import doct3 from '../assets/doct3.jpg';
import hospital_banner from '../assets/hospital_banner.jpg';
import hospital_center from '../assets/hospital_center.jpg';

import hospital1 from '../assets/hospital1.png';
import hospital2 from '../assets/hospital2.jpg';
import hospital3 from '../assets/hospital3.jpg';

function Hospitals() {
  return (
    <>
      <section className="text-center">
        <div className='container-fluid px-0'>
          <div className='row gx-0 align-items-center'>
            <div className="bg-image_hospital d-flex justify-content-center align-items-center text-center text-white vh-100">
              <div className="overlay-content">
                <div className='col-md-7 p-3'>
                  <h2 className="fw-bold text-white">Collaborate for Excellence: Empowering Your Practice with OncoBridge.</h2>
                  <p className="lead"> 
                    OncoBridge partners with hospitals and treating physicians to provide timely, 
                    <br/>
                    specialized second opinions, enhancing patient care and extending your expert reach.
                  </p>
                  <div className="d-flex justify-content-left gap-3">
                    <button className="btn btn-primary">Start Your Second Opinion Request</button>
                  </div>
                </div>
              </div>
              {/* <div className="overlay-content">
                <div className='col-md-7 p-3'>
                  <h2 className="fw-bold text-white">Collaborate for Excellence: Empowering Your Practice with OncoBridge.</h2>
                  <p className="lead"> OncoBridge partners with hospitals and treating physicians to provide timely, specialized second opinions, enhancing patient care and extending your expert reach.
                  </p>
                  <div className="d-flex justify-content-left gap-3">
                    <button className="btn btn-primary">Partner With Us</button>
                    <button className="btn btn-primary">Request a Demo</button>
                  </div>
                </div>
              </div> */}
            </div>

          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className=" py-5 bg-light">
        <div className='container'>


          <div className="text-center mb-5">
            <h2 className="section-title fw-bold ">Expand Your Capabilities, Elevate Patient Outcomes</h2>
          </div>
          <div className='row text-start'>
            <div className='col-md-6 col-lg-4 col-sm-12'>
              <div className='row text-start'>
                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className=" p-3 border rounded shadow-sm bg-white">
                    <h6 className="fw-bold mb-1">Access Global Expertise</h6>
                    <p className="mb-0 small">Offer your patients access to a network of world-leading oncologists without geographical limitations.</p>
                  </div>
                </div>

                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className=" p-3 border rounded shadow-sm bg-white">
                    <h6 className="fw-bold mb-1">Validated Treatment Plans</h6>
                    <p className="mb-0 small">Gain external validation for complex cases, reinforcing your treatment strategies.</p>
                  </div>
                </div>

                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className=" p-3 border rounded shadow-sm bg-white">
                    <h6 className="fw-bold mb-1">Reduce Patient Outflow</h6>
                    <p className="mb-0 small">Retain patients by offering comprehensive second opinion services within your ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 col-sm-12 d-none d-lg-block'>
              <img className="img-fluid  unlocking_img rounded shadow " 
              src={hospital_center} alt="Interconnected gears symbolizing seamless collaboration in healthcare" />
            </div>
            <div className='col-md-6 col-lg-4 col-sm-12'>
              <div className='row text-start'>
                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className=" p-3 border rounded shadow-sm bg-white">
                    <div>
                      <h6 className="fw-bold mb-1">Streamlined Process</h6>
                      <p className="mb-0 small">Our platform simplifies the medical record sharing and review process for your team.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className="p-3 border rounded shadow-sm bg-white">
                    <div>
                      <h6 className="fw-bold mb-1">Support for Complex Cases</h6>
                      <p className="mb-0 small">Get specialized insights for rare cancers or challenging diagnoses.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-12 mb-3">
                  <div className=" p-3 border rounded shadow-sm bg-white">
                    <div>
                      <h6 className="fw-bold mb-1">Educational Resource</h6>
                      <p className="mb-0 small">Leverage expert opinions for internal learning and professional development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          {/* <div className="row">
              <div className="col-md-12 col-lg-7 col-sm-12">
                <ul className="list-group list-group-flush text-justify rounded-4 ">
                  <li className="list-group-item">
                    <i className="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                    <strong>Access Global Expertise:</strong> Offer your patients access to a network of world-leading oncologists without geographical limitations.
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                    <strong>Validated Treatment Plans:</strong>
                    Gain external validation for complex cases, reinforcing your treatment strategies
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                    <strong>Reduce Patient Outflow:</strong>
                    Retain patients by offering comprehensive second opinion services within your ecosystem.
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                    <strong>Streamlined Process:</strong>
                    Our platform simplifies the medical record sharing and review process for your team.
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                    <strong>Support for Complex Cases:</strong>
                    Get specialized insights for rare cancers or challenging diagnoses.
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                    <strong>Educational Resource:</strong>
                    Leverage expert opinions for internal learning and professional development.
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                    <strong>Image Suggestion:</strong>
                    A visual metaphor like interconnected gears or a bridge spanning a gap, overlaid with medical symbols or a global map, representing seamless collaboration and extended reach.
                  </li>
                </ul>
              </div>
              <div className="col-md-12 col-lg-5 col-sm-12  mt-4  mt-lg-0">
                <div className="text-center">
                  <img src="http://thumbs.dreamstime.com/b/interconnected-gears-d-render-teamwork-collaboration-network-technology-387327864.jpg" className="img-fluid  unlocking_img rounded shadow" alt="Interconnected gears symbolizing seamless collaboration in healthcare." />
                </div>
              </div>
            </div> */}
        </div>
      </section>

      {/* How It Works Section */}
      <section className=" py-5 ">
        <div className='container'>
          <div className="text-center mb-5">
            <h2 className="section-title fw-bold ">
              Seamless Integration for Enhanced Patient Care</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 col-sm-6">
              <div className="card h-100">
                <img src={hospital1} className="card-img-top hospital_img_height" alt="Patient securely uploading medical documents from home." />
                <div className="card-body">
                  <h5 className="card-title">Referral & Secure Upload</h5>
                  <p className="card-text">
                    Easily refer patients and securely upload their medical data to our HIPAA-compliant platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <div className="card h-100">
                <img src={hospital2}
                  className="card-img-top hospital_img_height" alt="Global oncology experts collaborating virtually." />
                <div className="card-body">
                  <h5 className="card-title">Expert Matching & Review</h5>
                  <p className="card-text">We match the case with a top specialist who provides a comprehensive second opinion report.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <div className="card h-100">
                <img src={hospital3} className="card-img-top hospital_img_height" alt="Doctor meticulously reviewing a medical report." />
                <div className="card-body">
                  <h5 className="card-title">Collaborative Insights</h5>
                  <p className="card-text">Receive detailed reports that can be integrated into your patient's file, facilitating informed decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6">
              <div className="card h-100">
                <img src={hospital_banner} className="card-img-top hospital_img_height" alt="Indian patient in a virtual consultation with an expert." />
                <div className="card-body">
                  <h5 className="card-title">Follow-up & Support</h5>
                  <p className="card-text">Access to our support team for any queries or follow-up needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Benefits */}
      <section className=" ">
        <section className=" rounded shadow-sm bg-white text-dark py-5">
          <div className="container">
            <div className="row">
              {/* Left Section */}
              <div className="col-lg-6 mb-4">
                <h2 className="fw-bold">What is Benefits?</h2>
                <div className="border-bottom border-2 border-primary  w-25 mb-3"></div>
                <p className="lead">
                  Benefits for Different Stakeholders within Hospitals
                </p>
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
                        "Peer validation, access to sub-specialists, new treatment perspectives."
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-light-blue text-dark p-4 rounded shadow-sm h-100">
                      <p>
                        <b>  For Hospital Administrators</b>
                      </p>
                      <p>
                        "Enhanced patient satisfaction, potential for new revenue streams, competitive advantage."
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="bg-light-blue text-dark p-4 rounded shadow-sm h-100">
                      <p>
                        <b> For Referring Physicians </b>
                      </p>
                      <p>
                        "Confident referrals, comprehensive patient support."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-header card_header_for_hospital">
                    <h5 className="card-title mb-0">For Oncologists</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">Peer validation, access to sub-specialists, new treatment perspectives.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-header card_header_for_hospital">
                    <h5 className="card-title mb-0">For Hospital Administrators</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">Enhanced patient satisfaction, potential for new revenue streams, competitive advantage.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-header card_header_for_hospital">
                    <h5 className="card-title mb-0">For Referring Physicians</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">Confident referrals, comprehensive patient support.</p>
                  </div>
                </div>
              </div>
            </div> */}
      </section>

      {/* Case Studies */}
      <section className="py-5 ">
        <div className='container'>
          <div className="text-center mb-4">
            <h2 className="section-title fw-bold ">
              Success Stories</h2>
          </div>
          <div className="row align-items-center ">
            <div className="card mb-3 p-0">
              <div className="row g-0">
                <div className="col-md-2 p-0">
                  <img src={doct3} className="img-fluid rounded-start w-100" alt="Dr. Sanjeev Gupta, Head of Oncology, sharing his hospital's success with OncoBridge" />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title text-start">A professional headshot of Dr. Sanjeev Gupta, an Indian physician, conveying authority and trust</h5>
                    <p className="card-text text-start"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non odio nec odio sollicitudin vulputate. Aenean nec fringilla lorem. </p>
                    <p className="card-text text-start"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


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


      {/* Final CTA */}
      <section className="text-center py-5 bg-light rounded">
        <div className='container'>
          <h2 className="fw-bold mb-3">Strengthen your oncology program. Partner with OncoBridge today.</h2>
          <a href="#start" className="btn btn-lg btn-danger">Schedule a Partnership Discussion</a>
        </div>
      </section>


    </>
  );
}

export default Hospitals;
