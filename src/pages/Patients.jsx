import React from 'react';
import pat1 from '../assets/pat1.jpg';
import pat3 from '../assets/pat3.jpg';
import pat2 from '../assets/pat2.jpg';
import doct1 from '../assets/doct1.png';
import doct2 from '../assets/doct2.png';
const testimonials = [
  {
    quote: "OncoBridge helped me feel sure about my treatment. The expert guidance was clear, compassionate, and empowering.",
    author: "Rohan K.",
    title: "Cancer patient",
    image: pat1
  },
  {
    quote: "Thanks to OncoBridge, I felt informed and supported every step of the way.",
    author: "Anjali S.",
    title: "Breast cancer survivor",
    image: pat2
  },
  {
    quote: "Exceptional care and guidance! Truly life-changing.",
    author: "Amit P.",
    title: "Leukemia survivor",
    image: pat3
  }
];
function Patients() {
  return (
    <section className="section py-5 text-center">
      <div className="container-fluid">
        <h2>Patients OncoBridge</h2>
        <section className="text-center mb-3 mt-5">
          <div className='row align-items-center'>
            <div className='col-md-12 col-lg-6 col-sm-6'>
              <h4 className="fw-bold">Your Second Opinion Journey: Clearer Answers, Confident Decisions.</h4>
              <p className="lead"> OncoBridge empowers you with expert insights from world-renowned oncologists, giving you clarity and control over your cancer treatment path.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-primary">Start Your Second Opinion Request</button>
              </div>
            </div>
            <div className='col-md-12 col-lg-6 col-sm-6'>
              <img src="https://thumbs.dreamstime.com/b/happy-smiling-indian-recovered-breast-cancer-patient-showing-thumbs-up-looking-camera-bed-hospital-concept-happy-291921382.jpg"
                className="img-fluid rounded shadow"
                alt="Indian doctors and medical staff collaborating in a modern hospital setting." />
            </div>
          </div>
        </section>
           <section className="mb-5 mt-5 pt-3">
          <div class="text-center mb-5">
            <h2 class="section-title fw-bold">Why Get a Second Opinion with OncoBridge?</h2>
            <p class="section-subtitle text-muted">Unlocking Peace of Mind and Better Outcomes</p>
          </div>
          <div className="row bg-white">
             <div className="col-md-12 col-lg-6 col-sm-12  mt-4  mt-lg-0 p-0">
              <div className="text-center">
                <img className='img-fluid shadow-lg ' src="https://media.gettyimages.com/id/940272286/vector/bunch-of-keys.jpg?s=1024x1024&w=gi&k=20&c=zRAlCmg3nEJjOUvlvFbq-ZROD7gqJAOCSOdhaq1qQ2o=" alt="Symbolic image of a key unlocking clarity and new treatment options." />
              </div>
            </div>
            <div className=" col-md-12 col-lg-6 col-sm-12 mt-4">
              <ul className="list-style-disc text-justify rounded-4 patients_list">
                <li className="">
                
                  <strong>Confirmation & Validation:</strong> Confirm your diagnosis and treatment plan from an independent expert.</li>
                <li className="">
              
                  <strong>Expanded Options:</strong>  Discover alternative or emerging treatment strategies you might not have known about.</li>
                <li className="">
                
                  <strong>Personalized Insights:</strong> Receive tailored recommendations based on the latest research and your unique case</li>
                <li className="">
                 
                  <strong>Access to Top Specialists:</strong> Connect with leading oncologists globally, regardless of your location.</li>
                <li className="">
                 
                  <strong>Confidence & Control:</strong> : Make informed decisions about your health with renewed assurance.</li>
                <li className="">
               
                  <strong>Reduced Anxiety:</strong> Alleviate doubts and concerns about your diagnosis and future..</li>
              </ul>
            </div>
           
          </div>
        </section>
        {/* <section className="text-center mb-5">
          <h1 className="display-5 fw-bold">Your Second Opinion Journey: Clearer Answers, Confident Decisions.</h1>
          <p className="lead text-muted">
            OncoBridge empowers you with expert insights from world-renowned oncologists, giving you clarity and control over your cancer treatment path.
          </p>
          <a href="#start" className="btn btn-primary btn-lg mt-3">Start Your Second Opinion Request</a>
          <div className="mt-4">
            <img src="https://thumbs.dreamstime.com/b/happy-smiling-indian-recovered-breast-cancer-patient-showing-thumbs-up-looking-camera-bed-hospital-concept-happy-291921382.jpg" className="img-fluid rounded shadow"
              alt="Empowered Indian cancer patient looking confidently towards their treatment journey." />
          </div>
        </section> */}
      </div>
      <div className="container py-5">
     

        <section className="mb-5">
          <div class="text-center mb-5">
            <h2 className="section-title fw-bold ">Your Path to an Expert Second Opinion in 4 Simple Steps</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100">
                <img src="https://thumbs.dreamstime.com/b/indian-family-children-sits-cozy-sofa-laptop-indian-family-children-sits-together-cozy-sofa-laptop-366130877.jpg" className="card-img-top steps_img_height" alt="Patient securely uploading medical documents from home." />
                <div className="card-body">
                  <h5 className="card-title">Step 1: Request & Upload</h5>
                  <p className="card-text">Easily submit your medical records (reports, scans, pathology) securely through our platform</p>
                  <a href="#upload" className="btn btn-outline-primary">Upload Your Documents</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <img src={doct2}
                  className="card-img-top steps_img_height" alt="Global oncology experts collaborating virtually." />
                <div className="card-body">
                  <h5 className="card-title">Step 2: Expert Matching</h5>
                  <p className="card-text">Our dedicated team matches your case with the most relevant, world-renowned oncologist from our network</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <img src="https://static.vecteezy.com/system/resources/previews/007/292/871/large_2x/a-close-up-of-the-hand-of-a-female-doctor-or-nurse-is-using-a-pen-writing-information-or-something-with-a-blurred-background-photo.jpg" className="card-img-top steps_img_height" alt="Doctor meticulously reviewing a medical report." />
                <div className="card-body">
                  <h5 className="card-title">Step 3: In-Depth Review</h5>
                  <p className="card-text">: The expert meticulously reviews your case, providing a comprehensive report and personalized
                    recommendations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <img src="https://thumbs.dreamstime.com/b/doctor-consulting-indian-woman-patient-online-video-call-laptop-screen-female-doctor-gp-consulting-indian-woman-patient-make-191067995.jpg" className="card-img-top steps_img_height" alt="Indian patient in a virtual consultation with an expert." />
                <div className="card-body">
                  <h5 className="card-title">Step 4: Receive & Discuss</h5>
                  <p className="card-text">Receive your detailed second opinion report. Options for follow-up discussions with the expert
                    or our care team are available</p>
                  <a href="#sample-report" className="btn btn-outline-secondary">View Sample Report</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 text-center about_services">
          <div class="text-center mb-5">
            <h2 className="section-title fw-bold ">Choose the Right Second Opinion Service for You</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-primary">
                <div class="mt-3 icon-box text-primary">
                  <i class="bi  bi-search"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Basic Review</h5>
                  <p className="card-text">Expert review of documents and written report.</p>
                  <a href="#pricing" className="fw-bold me-3"> Pricing</a>
                  <a href="#pricing" className="fw-bold "> Inquire</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-success">
                <div class="mt-3 icon-box text-primary">
                  <i class="bi-chat-dots"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Comprehensive + Consultation</h5>
                  <p className="card-text">In-depth review, written report, and a virtual consultation with the expert</p>
                  <a href="#pricing" className="fw-bold me-3"> Pricing</a>
                  <a href="#pricing" className="fw-bold "> Inquire</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-warning">
                <div class="mt-3 icon-box text-primary">
                  <i class="bi-file-earmark-text"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Premium Panel Review</h5>
                  <p className="card-text">Review by a multi-disciplinary panel, detailed report, and virtual consultation.</p>
                  <a href="#pricing" className="fw-bold me-3"> Pricing</a>
                  <a href="#pricing" className="fw-bold "> Inquire</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div class="text-center mb-5">
            <h2 className="section-title fw-bold ">Frequently Asked Questions</h2>
          </div>
          <div className="accordion" id="faqAccordion">
            {[
              "Who are your experts?",
              "How long does it take?",
              "Is my data secure?",
              "What if I don't have all my records?",
              "Is this covered by insurance?"
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

        <section className="py-5 ">
          <div className="container text-center">
            <div class="text-center mb-5">
              <h2 className="section-title fw-bold ">What Our Patients Say</h2>
            </div>
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">

                {testimonials.map((item, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <p className="fs-5 fst-italic text-dark mx-auto" style={{ maxWidth: "800px" }}>
                      "{item.quote}"
                    </p>
                    <p className="text-secondary mt-3 fw-semibold">
                      — {item.author}, <span className="fw-normal">{item.title}</span>
                    </p>
                    <img
                      src={item.image}
                      alt={item.author}
                      className="rounded-circle mt-3"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>

              <div className="carousel-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <section className="mb-5 text-center">
            <div class="text-center mb-5">
              <h2 className="section-title fw-bold ">What Our Patients Say</h2>
            </div>
            <blockquote className="blockquote">
              <p className="mb-0">"OncoBridge helped me feel sure about my treatment. The expert guidance was clear, compassionate, and empowering."</p>
              <footer className="blockquote-footer mt-2">Rohan K., cancer patient</footer>
            </blockquote>
            <img src="https://placehold.co/600x400" className="rounded-circle mt-3" alt="Rohan K., an Indian cancer patient, sharing his hopeful story." width="100" height="100" />
          </section> */}


        <section className="text-center py-5 bg-light rounded mt-3">
          <h2 className="fw-bold mb-3">Don't face cancer alone. Get the clarity you deserve.</h2>
          <a href="#start" className="btn btn-lg btn-danger">Get Started</a>
        </section>
      </div>


    </section>
  );
}

export default Patients;
