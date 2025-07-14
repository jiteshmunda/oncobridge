import React from 'react';
import pat2 from '../assets/pat2.jpg';
function ProductDesc() {
    return (
        <section className="section py-5">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Comprehensive Oncology Second Opinion Package</h2>
                    <h5 className="text-muted">
                        Gain Unparalleled Clarity: Comprehensive Oncology Second Opinion with Virtual Consultation
                    </h5>
                </div>

                <div className="row g-4">
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush text-justify rounded-4 mb-5">
                            {[
                                {
                                    title: "In-depth Medical Record Review",
                                    desc: "A meticulously detailed analysis of all your pathology reports, imaging scans (CT, MRI, PET), genetic tests, and treatment history."
                                },
                                {
                                    title: "Expert Matching",
                                    desc: "Matched with a highly specialized, board-certified oncologist whose expertise aligns perfectly with your specific cancer type and stage."
                                },
                                {
                                    title: "Personalized Written Report",
                                    desc: "Receive a comprehensive report detailing the expert's findings, confirmation or refinement of diagnosis, and actionable recommendations for your treatment plan."
                                },
                                {
                                    title: "Dedicated Virtual Consultation (60 mins)",
                                    desc: "Engage in a live, one-on-one video call with the reviewing oncologist to discuss the report, ask questions, and gain deeper insights directly."
                                },
                                {
                                    title: "Streamlined Process",
                                    desc: "Our secure platform ensures easy document upload and efficient communication."
                                },
                                {
                                    title: "Dedicated Case Manager",
                                    desc: "A personal OncoBridge representative to guide you through every step."
                                }
                            ].map((item, idx) => (
                                <li key={idx} className="list-group-item">
                                    <i class="bi bi-shield-check fs-4 text-primary align-middle pe-2"></i>
                                    <strong>{item.title}:</strong> {item.desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-2">
                            <h5><strong>Who is this for?</strong></h5>
                            <p className='lead'>
                                Patients seeking thorough validation, exploring advanced treatment options, or desiring direct interaction with a world-renowned specialist.
                            </p>
                        </div>
                        <div className="mb-2">
                            <p className="lead">
                                Our most popular package provides an in-depth review of your entire medical history by a leading global oncologist,
                                culminating in a personalized report and a direct virtual consultation.
                            </p>
                        </div>
                        <div className="mb-2">
                            <h5><strong>What's Included</strong></h5>
                            <ul className="list-unstyled">
                                {[
                                    "Secure Document Upload & Management",
                                    "Expert Oncologist Matching",
                                    "Comprehensive Medical Record Review",
                                    "Detailed Written Second Opinion Report",
                                    "60-Minute Virtual Consultation with Expert",
                                    "Access to OncoBridge Patient Support"
                                ].map((feature, idx) => (
                                    <li key={idx} className='mb-2'>✔ {feature}</li>
                                ))}
                            </ul>
                        </div>

                        <p className='lead'><strong>Turnaround Time:</strong> 7–10 business days for report, consultation in 3–5 days after report.</p>
                        <h4 className="text-danger">Price: ₹ 3999</h4>

                        <div className="d-flex gap-3 mt-4">
                            <button className="btn btn-primary btn-lg">Add to Cart</button>
                            <button className="btn btn-outline-secondary btn-lg">Request This Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDesc;
