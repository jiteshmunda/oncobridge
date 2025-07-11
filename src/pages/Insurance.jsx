import React from 'react';
import insurance from '../assets/insurance.jpg';
import digi from '../assets/digi.png';
import quality from '../assets/quality.png';
import teamuser from '../assets/teamuser.png';

function Insurance() {
    return (
        <section className="section py-5 text-center">
            <div className="container">
                <h2>Terms Insurance</h2>
                <div className="container py-5">
                    {/* Hero Section */}
                    <section className="text-center mb-5">
                        <h1 className="display-5 fw-bold">
                            Optimizing Cancer Care: Strategic Partnerships for Insurance Providers.
                        </h1>
                        <p className="lead">
                            OncoBridge collaborates with insurance companies to ensure policyholders receive the most appropriate,
                            high-quality cancer care, leading to better outcomes and managed costs.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button className="btn btn-primary btn-lg">Explore Partnership Benefits</button>
                            <button className="btn btn-outline-secondary btn-lg">Request a Consultation</button>
                        </div>
                        <div className="mt-4">
                            <img className='img-fluid rounded shadow' src={insurance} alt="Indian insurance executive reviewing strategic healthcare data" />
                        </div>
                    </section>

                    {/* Why Partner Section */}
                    <section className="mb-5">
                        <div class="text-center mb-5">
                            <h2 class="section-title fw-bold">Driving Value Through Informed Oncology Decisions</h2>
                        </div>
                        <div className="row">
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
                        </div>
                    </section>

                    {/* Value Proposition Section */}
                    <section className="mb-5">
                        <div class="text-center mb-5">
                            <h2 class="section-title fw-bold">A Proactive Approach to Oncology Management</h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-12 col-lg-7 col-sm-12">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="card h-100 shadow-sm">
                                            <div className="card-header card_header_for_hospital">
                                                <h5 className="card-title mb-0">Expert Network</h5>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    Access to a vetted global network of oncology specialists.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card h-100 shadow-sm">
                                            <div className="card-header card_header_for_hospital">
                                                <h5 className="card-title mb-0">Rigorous Process</h5>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    Standardized, confidential, and timely second opinion delivery.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card h-100 shadow-sm">
                                            <div className="card-header card_header_for_hospital">
                                                <h5 className="card-title mb-0">Customizable Solutions</h5>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    Tailored programs to fit your specific policyholder needs and operational models.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
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
                            <div className="col-md-12 col-lg-5 col-sm-12">
                                <img src={digi} className='img-fluid  rounded-4 shadow-lg w_70 d-none d-lg-block' alt="Secure digital lock symbolizing data compliance and security" />
                            </div>
                        </div>
                    </section>

                    {/* Partnership Flow Section */}
                    <section className="mb-5">
                        <div class="text-center mb-2">
                            <h2 className="section-title fw-bold ">How the Partnership Works</h2>
                        </div>
                        <p>
                            From member referral to expert review to informed decision – the process is
                            seamless and fully integrable with your systems.
                        </p>
                        <div className="text-center">
                            <img
                                src={teamuser}
                                alt="Infographic illustrating the seamless process of OncoBridge's insurance partnership"
                                className="img-fluid  rounded-4 shadow-lg w-25"
                            />
                        </div>
                    </section>

                    {/* Case Studies Section */}
                    <section className="mb-5">
                        <div class="text-center">
                            <h2 className="section-title fw-bold ">Case Studies & Success Metrics</h2>
                        </div>
                        <p>Explore anonymized data showing improvements in cost and patient outcomes.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://placehold.co/600x400" alt="Graph showing reduction in healthcare costs" className="img-fluid mb-3" />
                            </div>
                            <div className="col-md-6">
                                <img src="https://placehold.co/600x400" alt="Icon representing improved patient outcomes" className="img-fluid mb-3" />
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-5">
                        <div class="text-center mb-5">
                            <h2 className="section-title fw-bold ">Frequently Asked Questions</h2>
                        </div>
                        <div className="accordion" id="faqAccordion">
                            {[
                                "What kind of reporting can you provide?",
                                "How do you ensure data security and compliance?",
                                "What are the typical cost savings?",
                                "Can you customize the service for our plans?",
                            ].map((question, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false">
                                            {question}
                                        </button>
                                    </h2>
                                    <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">Answer coming soon.</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="text-center py-5 bg-light rounded mt-3">
                        <h2 className="fw-bold mb-1">Invest in smarter oncology care.</h2>
                        <p>Connect with OncoBridge to discuss a strategic partnership.</p>
                        <a href="#start" className="btn btn-lg btn-danger">Schedule a Partnership Discussion</a>
                    </section>

                    {/* <section className="text-center py-4 border-top">
                        <h3>Invest in smarter oncology care.</h3>
                        <p>Connect with OncoBridge to discuss a strategic partnership.</p>
                        <button className="btn btn-primary btn-lg">Schedule a Partnership Discussion</button>
                    </section> */}
                </div>
            </div>
        </section>
    );
}

export default Insurance;
