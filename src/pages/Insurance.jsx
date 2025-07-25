import React from "react";
import insurance from "../assets/insurance.jpg";
import digi from "../assets/digi.png";
import quality from "../assets/quality.png";
import teamuser from "../assets/teamuser.png";
import case1 from "../assets/case1.jpg";
import case2 from "../assets/case2.jpg";
import { Link } from "react-router-dom";
function Insurance() {
  return (
    <>
      <section className="text-left">
        <div className="container-fluid px-0">
          <div className="row gx-0 align-items-center">
            <div className="bg-image_ins d-flex justify-content-left align-items-center text-left text-white vh-100">
              <div className="overlay-content">
                <div className="col-md-7 p-3 ps-lg-5 ms-lg-5 ms-md-5 ms-sm-5">
                  <h1 className="fw-bold text-white display-6 animate__animated animate__fadeIn">
                    Optimizing Cancer Care: Strategic Partnerships for Insurance
                    Providers
                  </h1>
                  <p className="lead mt-3 animate__animated animate__fadeIn animate__delay-1s">
                    OncoBridge collaborates with insurance companies to ensure
                    policyholders receive the most appropriate,
                    <br />
                    high-quality cancer care, leading to better outcomes and
                    managed costs.
                  </p>
                  <div className="d-flex justify-content-start gap-3 mt-3 animate__animated animate__fadeInUp animate__delay-2s">
                    <Link to="/contact" target="_blank" className="btn btn-primary">
                      Start Your Second Opinion Request
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div class="text-center mb-5">
            <h2 class="section-title fw-bold">
              Driving Value Through Informed Oncology Decisions
            </h2>
          </div>
          <div className="row">
            <div className=" col-md-12 col-lg-8 col-sm-12  mx-auto">
              <div class="card shadow rounded-4 p-4 insurance_list">
                <div class="row">
                  <div class="col-md-12 col-lg-10 col-sm-10">
                    <div class="row gy-3">
                      <div class="col-12 d-flex">
                        <i class="bi bi-shield-check text-primary me-2"></i>
                        <p>
                          <strong>Improved Outcomes:</strong> Facilitate access
                          to expert opinions, leading to more accurate diagnoses
                          and effective treatment plans.
                        </p>
                      </div>
                      <div class="col-12 d-flex">
                        <i class="bi bi-shield-check text-primary me-2"></i>
                        <p>
                          <strong>Enhanced Policyholder Satisfaction:</strong>{" "}
                          Receive tailored recommendations based on the latest
                          research and your unique case.
                        </p>
                      </div>
                      <div class="col-12 d-flex">
                        <i class="bi bi-shield-check text-primary me-2"></i>
                        <p>
                          <strong>Access to Top Specialists:</strong> Offer a
                          valuable service that empowers policyholders and
                          demonstrates commitment to their well-being.
                        </p>
                      </div>
                      <div class="col-12 d-flex">
                        <i class="bi bi-shield-check text-primary me-2"></i>
                        <p>
                          <strong>Reduced Claims Appeals:</strong> Strengthen
                          initial treatment decisions, potentially reducing the
                          need for costly appeals.
                        </p>
                      </div>
                      <div class="col-12 d-flex">
                        <i class="bi bi-shield-check text-primary me-2"></i>
                        <p>
                          <strong>Data-Driven Insights:</strong> Potential for
                          aggregate insights on oncology trends and treatment
                          efficacy (anonymized).
                        </p>
                      </div>
                      <div class="col-12 d-flex">
                        <i class="bi bi-shield-check text-primary me-2"></i>
                        <p>
                          <strong>Seamless Integration:</strong> Our platform
                          can be integrated to streamline the second opinion
                          process for your members.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* image  */}
                <div className=" insurance_list_img">
                  <img
                    className="img-fluid rounded-4 shadow-lg  d-none d-lg-block"
                    src={quality}
                    alt="Symbolic image of a key unlocking clarity and new treatment options."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
                        <div className=" col-md-12 col-lg-8 col-sm-12">
                            <ul className="list-group list-group-flush text-justify rounded-4 ">
                                <li className="list-group-item">
                                    <i class="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                                    <strong>Cost Containment:</strong> Reduce unnecessary or suboptimal treatments by ensuring best-practice care from the outset.</li>
                                <li className="list-group-item">
                                    <i class="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                                    <strong>Improved Outcomes: </strong>
                                    Facilitate access to expert opinions, leading to more accurate diagnoses and effective treatment plans.
                                </li>
                                <li className="list-group-item">
                                    <i class="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                                    <strong>Enhanced Policyholder Satisfaction:</strong> Receive tailored recommendations based on the latest research and your unique case</li>
                                <li className="list-group-item">
                                    <i class="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                                    <strong>Access to Top Specialists: </strong>
                                    Offer a valuable service that empowers policyholders and demonstrates commitment to their well-being.
                                </li>
                                <li className="list-group-item">
                                    <i class="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                                    <strong>Reduced Claims Appeals: </strong> Strengthen initial treatment decisions, potentially reducing the need for costly appeals.</li>
                                <li className="list-group-item">
                                    <i class="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                                    <strong>Data-Driven Insights:</strong>Potential for aggregate insights on oncology trends and treatment efficacy (anonymized).</li>
                                <li className="list-group-item">
                                    <i class="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                                    <strong>Seamless Integration:</strong>
                                    Our platform can be integrated to streamline the second opinion process for your members.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-lg-4 col-sm-12  mt-4  mt-lg-0">
                            <div className="text-center">
                                <img className='img-fluid rounded-4 shadow-lg unlocking_img  d-none d-lg-block' src={quality} alt="Symbolic image of a key unlocking clarity and new treatment options." />
                            </div>
                        </div>
                    </div> */}
      </section>

      {/* Value Proposition Section */}
      <section className="py-5">
        <div className="container-fluid ps-0">
          <div class="text-center mb-5">
            <h2 class="section-title fw-bold">
              A Proactive Approach to Oncology Management
            </h2>
          </div>

          <div class="bg-cover d-flex align-items-center justify-content-center text-center">
            <div class="bg-overlay"></div>

            <div class="container content-wrapper col-lg-p-0 p-4">
              <div className="row g-4  justify-content-center">
                <div className="col-md-5">
                  <div className="card h-100 shadow-sm">
                    <div className="card-header card_header_for_hospital">
                      <h5 className="card-title mb-0">Expert Network</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Access to a vetted global network of oncology
                        specialists.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card h-100 shadow-sm">
                    <div className="card-header card_header_for_hospital">
                      <h5 className="card-title mb-0">Rigorous Process</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Standardized, confidential, and timely second opinion
                        delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card h-100 shadow-sm">
                    <div className="card-header card_header_for_hospital">
                      <h5 className="card-title mb-0">
                        Customizable Solutions
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Tailored programs to fit your specific policyholder
                        needs and operational models.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card h-100 shadow-sm">
                    <div className="card-header card_header_for_hospital">
                      <h5 className="card-title mb-0">Compliance & Security</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Adherence to data privacy and healthcare regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Flow Section */}
      <section className=" py-4">
        <div className="container">
          <div class="text-center mb-2">
            <h2 className="section-title fw-bold ">
              How the Partnership Works
            </h2>
          </div>
          <p>
            From member referral to expert review to informed decision – the
            process is seamless and fully integrable with your systems.
          </p>
          <div className="text-center">
            <img
              src={teamuser}
              alt="Infographic illustrating the seamless process of OncoBridge's insurance partnership"
              className="img-fluid  rounded-4 shadow-lg w-25"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className=" py-5">
        <div className="container">
          <div class="text-center">
            <h2 className="section-title fw-bold ">
              Case Studies & Success Metrics
            </h2>
          </div>
          <p className="text-center">
            Explore anonymized data showing improvements in cost and patient
            outcomes.
          </p>
          <div className="row">
            <div className="col-md-6">
              <img
                src={case1}
                alt="Graph showing reduction in healthcare costs"
                className="img-fluid mb-3 height-50"
              />
            </div>
            <div className="col-md-6">
              <img
                src={case2}
                alt="Icon representing improved patient outcomes"
                className="img-fluid mb-3 height-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-5 bg-light rounded">
        <h2 className="fw-bold mb-1">Invest in smarter oncology care.</h2>
        <p>Connect with OncoBridge to discuss a strategic partnership.</p>
        <Link to="/contact" target="_blank" className="btn btn-lg btn-danger">  Schedule a Partnership Discussion</Link>
      </section>
    </>
  );
}

export default Insurance;
