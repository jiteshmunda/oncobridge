import React, { useState, useEffect, useRef } from "react";
import "../styles/CareerPage.css";
import { FiArrowUpRight } from "react-icons/fi";
import emailjs from "emailjs-com";
import Career_banner from "../assets/job.jpg";
import { toast } from "react-toastify";

const filters = [
  "View all",
  "Patient Support",
  "Business Development",
  "Medical Advisory",
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const phone = e.target.user_phone.value;
    const file = e.target.attachments.files[0];
    const jobCode = e.target.job_code.value;

    try {
      let fileLink = "";
      if (file) fileLink = await uploadToGoFile(file);

      await emailjs.send(
        "service_lfjgn1k",
        "template_jex75zr",
        {
          user_name: name,
          user_email: email,
          user_phone: phone,
          file_link: fileLink,
          job_code: jobCode,
          date: new Date().toLocaleString(),
        },
        "l0cD42p3tCb7Pv8LS"
      );

      e.target.reset();

      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Error submitting form: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const uploadToGoFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("token", "tPxHbdUZfhnZGJ4KKu9sJsRySTULxs7T");

    // You can also choose folder ID if you organize uploads in folders:
    // formData.append("folderId", "abc123xyz");

    const res = await fetch("https://store1.gofile.io/uploadFile", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.status === "ok") {
      return data.data.downloadPage;
    } else {
      throw new Error("GoFile upload failed: " + data.status);
    }
  };

  const openModal = (jobCode) => setSelectedJob(jobCode);
  const closeModal = () => {
    setSelectedJob(null);
    setShowApplicationForm(false);
  };

  useEffect(() => {
    document.body.style.overflow = selectedJob ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedJob]);

  return (
    <>
      <section className="bg-image-home">
        <div className="container-fluid">
          <div className="row align-items-center pt-5 pb-5 px-lg-5 px-md-4 px-3">
            {/* Right Image Column */}
            <div className="col-md-6 col-lg-6 col-sm-12 text-center text-md-end order-1 order-md-2 mb-4 mb-md-0 px-lg-5 px-md-4">
              <img
                src={Career_banner}
                className="img-fluid "
                alt="Doctor holding patient hand"
                style={{ borderRadius: "20px" }}
              />
            </div>

            {/* Left Text Column */}
            <div className="col-md-6 col-lg-6 col-sm-12 text-start order-2 order-md-1 px-lg-4 px-md-4">
              <h1
                className="fw-bold display-5 animate__animated animate__fadeIn home_banner_heading"
                style={{ color: "#1a97ad" }}
              >
                Be a part of our
                <br /> Team
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="career-page">
        <div className="career-header">
          <h1>Career Opportunities at OncoBridge</h1>
          <p>
            Below are the career opportunities currently available at
            OncoBridge. Please review the job descriptions and contact us at{" "}
            <a href="mailto:care@oncobridge.in">care@oncobridge.in</a> with the
            relevant job code to apply.
          </p>
        </div>

        <div className="filters-row">
          <ul
            className="nav  justify-content-left"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item " role="presentation">
              <button
                className="nav-link active filter-btn "
                id="pills-patients-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-carr-one"
                type="button"
                role="tab"
                aria-controls="pills-carr-one"
                aria-selected="true"
              >
                View All
              </button>
            </li>
            <li className="nav-item ms-2" role="presentation">
              <button
                className="nav-link filter-btn"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-carr-three"
                type="button"
                role="tab"
                aria-controls="pills-carr-three"
                aria-selected="false"
              >
                Business Development
              </button>
            </li>
            <li className="nav-item ms-2" role="presentation">
              <button
                className="nav-link filter-btn"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-carr-four"
                type="button"
                role="tab"
                aria-controls="pills-carr-four"
                aria-selected="false"
              >
                Medical Advisor
              </button>
            </li>
          </ul>
          <input
            type="text"
            className="search-input"
            placeholder="Search job title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="tab-content " id="pills-tabContent">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-content" id="pills-tabContent">
              {/* View All Tab */}
              <div
                className="tab-pane fade show active"
                id="pills-carr-one"
                role="tabpanel"
                aria-labelledby="pills-patients-tab"
              >
                <div className="job-list">
                  <div
                    className="job-card clickable"
                    onClick={() => openModal("BDE001")}
                  >
                    <h3>Business Development Executive</h3>
                    <p className="job-code">Job Code: BDE001</p>
                    <p className="job-code">
                      Location: Cochin, Bangalore (India)
                    </p>
                    <p className="job-code">Employment Type: Full-Time </p>
                    <span className="job-popup-link">
                      View Details <FiArrowUpRight />
                    </span>
                  </div>
                </div>
              </div>

              {/* Business Development Tab */}
              <div
                className="tab-pane fade"
                id="pills-carr-three"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="job-list">
                  <div
                    className="job-card clickable"
                    onClick={() => openModal("BDE001")}
                  >
                    <h3>Business Development Executive</h3>
                    <p className="job-code">Job Code: BDE001</p>
                    <p className="job-code">
                      Location: Cochin, Bangalore (India)
                    </p>
                    <p className="job-code">Employment Type: Full-Time </p>
                    <span className="job-popup-link">
                      View Details <FiArrowUpRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {selectedJob && (
          <div className="job-popup" onClick={closeModal}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
              <div className="popup-scroll">
                {selectedJob === "BDE001" && (
                  <>
                    <h2>Business Development Executive</h2>
                    <p>Cochin, Bangalore (India)</p>

                    <h4>Job Description</h4>
                    <p>
                      OncoBridge is seeking a dynamic Business Development
                      Manager to drive our growth across Bangalore, Kochi, and
                      surrounding regions. This role will focus on promoting our
                      second opinion services, molecular diagnostic tools (e.g.,
                      PCR, NGS-based tests), and tissue diagnostic solutions
                      (e.g., histopathology, immunohistochemistry) to hospitals,
                      medical colleges, and diagnostic labs. The ideal candidate
                      will be responsible for building strong client
                      partnerships, driving sales, and ensuring seamless
                      onboarding and customer satisfaction.
                    </p>

                    <h4>Key Responsibilities</h4>
                    <ul>
                      <li>
                        <strong>Client Acquisition:</strong> Identify and engage
                        hospitals, medical colleges, and diagnostic labs to
                        promote OncoBridge’s solutions.
                      </li>
                      <li>
                        <strong>Sales & Promotion:</strong> Conduct
                        presentations, product demonstrations, and negotiations
                        to secure contracts and achieve revenue goals.
                      </li>
                      <li>
                        <strong>Relationship Management:</strong> Serve as the
                        primary client contact, nurturing long-term partnerships
                        and providing continuous support and training.
                      </li>
                      <li>
                        <strong>Market Expansion:</strong> Develop and execute
                        territory-specific strategies to strengthen OncoBridge’s
                        footprint across South India.
                      </li>
                      <li>
                        <strong>Pipeline Management:</strong> Track leads,
                        manage sales pipelines, and maintain accurate CRM
                        records.
                      </li>
                      <li>
                        <strong>Market Intelligence:</strong> Monitor competitor
                        activities, industry trends, and regulatory updates
                        (e.g., ICMR guidelines) to refine business strategy.
                      </li>
                      <li>
                        <strong>Collaboration:</strong> Work closely with
                        marketing, clinical operations, and technical teams to
                        ensure seamless service delivery.
                      </li>
                      <li>
                        <strong>Compliance:</strong> Uphold ethical standards,
                        Indian health regulations, and company policies in all
                        promotional activities.
                      </li>
                    </ul>

                    <h4>Qualifications</h4>
                    <ul>
                      <li>
                        Bachelor’s degree in Life Sciences, Biotechnology,
                        Business Administration, or related field.
                      </li>
                      <li>
                        MBA/Advanced certification in sales or marketing
                        preferred.
                      </li>
                      <li>
                        3 - 6 years of B2B sales experience in the healthcare
                        sector, ideally in molecular diagnostics, tissue
                        diagnostics, or second opinion services.
                      </li>
                      <li>
                        Familiarity with cancer diagnostics, telemedicine
                        platforms, and hospital/lab workflows.
                      </li>
                      <li>
                        Strong communication & negotiation skills (proficiency
                        in English + Kannada/Malayalam preferred).
                      </li>
                      <li>
                        Proficiency with CRM systems (e.g., Salesforce) and
                        digital collaboration tools.
                      </li>
                    </ul>

                    <h4>Key Competencies</h4>
                    <ul>
                      <li>
                        Proven track record of achieving/exceeding sales
                        targets.
                      </li>
                      <li>
                        Strong relationship-building and client management
                        skills.
                      </li>
                      <li>
                        Ability to work in a fast-paced, competitive
                        environment.
                      </li>
                      <li>
                        High attention to detail with a strong commitment to
                        ethical practices.
                      </li>
                      <li>
                        Ability to collaborate with clinical and technical teams
                        to deliver integrated client solutions.
                      </li>
                    </ul>

                    <h4>Preferred Experience</h4>
                    <ul>
                      <li>
                        Previous sales experience with hospitals, medical
                        colleges, or diagnostic labs in South India.
                      </li>
                      <li>
                        Exposure to oncology diagnostics, second opinion
                        platforms, or digital health solutions.
                      </li>
                      <li>
                        Understanding of Indian health regulations (ICMR) and
                        awareness of global standards.
                      </li>
                    </ul>
                  </>
                )}

                {!showApplicationForm ? (
                  <button
                    className="apply-link"
                    onClick={() => setShowApplicationForm(true)}
                  >
                    Apply Now <FiArrowUpRight />
                  </button>
                ) : (
                  <form className="application-form" onSubmit={handleSubmit}>
                    <h4>Apply for this position</h4>

                    <input type="hidden" name="job_code" value={selectedJob} />

                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" name="user_name" required />
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" name="user_email" required />
                    </div>

                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" name="user_phone" required />
                    </div>

                    <div className="form-group">
                      <label>Upload Resume (PDF/DOCX)</label>
                      <input
                        type="file"
                        name="attachments"
                        accept=".pdf,.docx"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className={`submit-btn ${isSubmitting ? "disabled" : ""}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span> Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="footer-text">
          To apply, send your resume and cover letter to{" "}
          <a href="mailto:care@oncobridge.in">care@oncobridge.in</a>, mentioning
          the relevant Job Code in the subject line.
        </div>
      </div>
    </>
  );
}
