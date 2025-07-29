import React, { useState, useEffect } from "react";
import "../styles/CareerPage.css";
import { FiArrowUpRight } from "react-icons/fi";


const filters = [
  "View all",
  "Patient Support",
  "Business Development",
  "Medical Advisory"
];

const jobListings = [
  {
    title: "Patient Navigator",
    code: "PN001",
    category: "Patient Support",
    description:
      "As a Patient Navigator, you will guide patients through their healthcare journey, ensuring seamless coordination and support in oncology care.",
    responsibilities: [
      "Guide patients through registration and digital consent process",
      "Assist in uploading medical records, imaging, pathology reports",
      "Monitor case progress, liaise with clinical ops and tech teams",
      "Act as a single point of contact for patient queries and updates",
      "Schedule review calls, explain reports, coordinate clarifications",
      "Help patients access further care (in India or abroad if needed)",
      "Collect patient feedback and identify workflow improvement areas",
      "Maintain detailed logs and ensure compliance with health data laws"
    ],
    qualifications: [
      "Bachelor’s in Life Sciences, Nursing, or Allied Health (master’s preferred)",
      "3+ years in patient-facing roles",
      "Familiarity with cancer care workflows",
      "Strong communication (English + regional language)",
      "Comfort with digital tools and remote coordination"
    ],
    applyLink: "mailto:care@oncobridge.in?subject=Application%20for%20PN001"
  },
  {
    title: "Business Development Executive",
    code: "BDE001",
    location: "Mumbai, Delhi, Hyderabad (India)",
    employmenttype: "Full-Time",
    category: "Business Development",
    description:
      "Drive growth by building partnerships and expanding OncoBridge’s reach in the oncology sector.",
    responsibilities: [
      "Establish and maintain relationships with hospitals and diagnostic chains",
      "Promote targeted therapy products, diagnostic kits, and instruments",
      "Identify cancer cases for second opinions",
      "Achieve referral and sales targets",
      "Conduct product demos and presentations",
      "Analyze competitor activity and market trends",
      "Maintain CRM and compliance reporting"
    ],
    qualifications: [
      "Bachelor’s in Business, Marketing, or Life Sciences. MBA preferred.",
      "3–5 years in healthcare/pharma sales",
      "Networking with hospitals, diagnostics, insurance",
      "Strong negotiation, communication, CRM proficiency",
      "Willingness to travel (Mumbai, Delhi, Hyderabad)"
    ],
    applyLink: "mailto:care@oncobridge.in?subject=Application%20for%20BDE001"
  },
  {
    title: "Medical Advisor - Oncologist",
    code: "MAO001",
    location: " Coimbatore (Hybrid – Remote + On-site if required) ",
    employmenttype: "Part-Time / Consulting / Case-Based",
    category: "Medical Advisory",
    description:
      "Shape our oncology initiatives by providing medical expertise and supporting patient-focused programs.",
    responsibilities: [
      "Prepare structured case summaries and referral documents",
      "Liaise with internal teams and senior oncologists",
      "Maintain medical accuracy and confidentiality",
      "Participate in ongoing clinical training and updates",
      "Fill clinical data gaps via patient or physician communication"
    ],
    qualifications: [
      "MBBS + MD/DNB (Radiation / Medical / Surgical Oncology) or relevant experience",
      "Strong documentation and analytical skills",
      "Familiarity with oncology care and EMR systems",
      "Based in or open to relocating to Coimbatore",
      "Flexible consulting role with 1–2 hours per case"
    ],
    applyLink: "mailto:care@oncobridge.in?subject=Application%20for%20MAO001"
  }
];

export default function CareerPage() {
  const [activeFilter, setActiveFilter] = useState("View all");
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const openModal = (jobCode) => setSelectedJob(jobCode);
  const closeModal = () => setSelectedJob(null);


  useEffect(() => {
    document.body.style.overflow = selectedJob ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedJob]);

  const filteredJobs = jobListings.filter((job) => {
    const matchesCategory =
      activeFilter === "View all" || job.category === activeFilter;
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="text-center">
        <div className="container-fluid px-0">
          <div className="row gx-0 align-items-left">
            <div className="bg-image-career d-flex justify-content-left align-items-center text-left text-white">
              <div className="overlay-content">
                <div className="col-md-12 p-3 ms-lg-5 ps-lg-4">
                  <h1 className="fw-bold text-white display-3 animate__animated animate__fadeIn">
                    Careers
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="career-page">
        <div className="career-header">
          {/* <div className="tag">We’re hiring!</div> */}
          <h1>Career Opportunities at OncoBridge</h1>
          <p>
            Below are the career opportunities currently available at
            OncoBridge. Please review the job descriptions and contact us at{" "}
            <a href="mailto:care@oncobridge.in">care@oncobridge.in</a> with the
            relevant job code to apply.
          </p>
        </div>

        {/* <div className="filters-row">
          <div className="filters">
            {filters.map((label) => (
              <button
                key={label}
                className={`filter-btn ${activeFilter === label ? "active" : ""
                  }`}
                onClick={() => setActiveFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>

          <input
            type="text"
            className="search-input"
            placeholder="Search job title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}

        {/* <div className="job-list">
          {filteredJobs.map((job, index) => (
            <div
              className="job-card clickable"
              key={index}
              onClick={() => {
                setSelectedJob(job);
                setShowApplicationForm(false);
              }}
            >
              <div>
                <h3>{job.title}</h3>
                <p className="job-code">Job Code: {job.code}</p>
                 <p className="job-code">Location: {job.location}</p>
                  <p className="job-code">Employment Type: {job.employmenttype}</p>
                 <span className="job-popup-link">
                View Details <FiArrowUpRight />
              </span>
              </div>
             
            </div>
          ))}
        </div> */}
        <div className="filters-row">
        <ul
          className="nav  justify-content-center"
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
              id="pills-doctors-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-carr-two"
              type="button"
              role="tab"
              aria-controls="pills-carr-two"
              aria-selected="false"
            >
              Patient Support
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
          <div
            className="tab-pane fade show active  "
            id="pills-carr-one"
            role="tabpanel"
            aria-labelledby="pills-patients-tab"
          >
            {/* view all */}
            <div className="job-list">
          <div className="job-card clickable" onClick={() => openModal("PN001")}>
            <h3>Patient Navigator</h3>
            <p className="job-code">Job Code: PN001</p>
            <p className="job-code">Location: </p>
            <p className="job-code">Employment Type: </p>
            <span className="job-popup-link">View Details <FiArrowUpRight /></span>
          </div>

          <div className="job-card clickable" onClick={() => openModal("BDE001")}>
            <h3>Business Development Executive</h3>
            <p className="job-code">Job Code: BDE001</p>
            <p className="job-code">Location: Mumbai, Delhi, Hyderabad (India)</p>
            <p className="job-code">Employment Type: Full-Time </p>
            <span className="job-popup-link">View Details <FiArrowUpRight /></span>
          </div>

          <div className="job-card clickable" onClick={() => openModal("MAO001")}>
            <h3>Medical Advisor - Oncologist</h3>
            <p className="job-code">Job Code: MAO001</p>
            <p className="job-code">Location: Coimbatore (Hybrid – Remote + On-site if required)</p>
            <p className="job-code">Employment Type: Part-Time / Consulting / Case-Based </p>
            <span className="job-popup-link">View Details <FiArrowUpRight /></span>
          </div>
        </div> 
          </div>
          <div
            className="tab-pane fade show"
            id="pills-carr-two"
            role="tabpanel"
            aria-labelledby="pills-patients-tab"
          >
            <div className="job-list">
              <div className="job-card clickable" onClick={() => openModal("PN001")}>
                <h3>Patient Navigator</h3>
                <p className="job-code">Job Code: PN001</p>
                <p className="job-code">Location: </p>
                <p className="job-code">Employment Type: </p>
                <span className="job-popup-link">View Details <FiArrowUpRight /></span>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show"
            id="pills-carr-three"
            role="tabpanel"
            aria-labelledby="pills-patients-tab"
          >
            <div className="job-list">
              <div className="job-card clickable" onClick={() => openModal("BDE001")}>
                <h3>Business Development Executive</h3>
                <p className="job-code">Job Code: BDE001</p>
                <p className="job-code">Location: Mumbai, Delhi, Hyderabad (India)</p>
                <p className="job-code">Employment Type: Full-Time </p>
                <span className="job-popup-link">View Details <FiArrowUpRight /></span>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show"
            id="pills-carr-four"
            role="tabpanel"
            aria-labelledby="pills-patients-tab"
          >
            <div className="job-list">
              <div className="job-card clickable" onClick={() => openModal("MAO001")}>
                <h3>Medical Advisor - Oncologist</h3>
                <p className="job-code">Job Code: MAO001</p>
                <p className="job-code">Location: Coimbatore (Hybrid – Remote + On-site if required)</p>
                <p className="job-code">Employment Type: Part-Time / Consulting / Case-Based </p>
                <span className="job-popup-link">View Details <FiArrowUpRight /></span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="job-list">
          <div className="job-card clickable" onClick={() => openModal("PN001")}>
            <h3>Patient Navigator</h3>
            <p className="job-code">Job Code: PN001</p>
            <p className="job-code">Location: </p>
            <p className="job-code">Employment Type: </p>
            <span className="job-popup-link">View Details <FiArrowUpRight /></span>
          </div>

          <div className="job-card clickable" onClick={() => openModal("BDE001")}>
            <h3>Business Development Executive</h3>
            <p className="job-code">Job Code: BDE001</p>
            <p className="job-code">Location: Mumbai, Delhi, Hyderabad (India)</p>
            <p className="job-code">Employment Type: Full-Time </p>
            <span className="job-popup-link">View Details <FiArrowUpRight /></span>
          </div>

          <div className="job-card clickable" onClick={() => openModal("MAO001")}>
            <h3>Medical Advisor - Oncologist</h3>
            <p className="job-code">Job Code: MAO001</p>
            <p className="job-code">Location: Coimbatore (Hybrid – Remote + On-site if required)</p>
            <p className="job-code">Employment Type: Part-Time / Consulting / Case-Based </p>
            <span className="job-popup-link">View Details <FiArrowUpRight /></span>
          </div>
        </div> */}
        {selectedJob && (
          <div className="job-popup" onClick={() => setSelectedJob(null)}>
            <div
              className="popup-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedJob(null)}
              >
                &times;
              </button>
              <div className="popup-scroll">

                {selectedJob === "PN001" && (
                  <>
                    <h2>Patient Navigator</h2>
                    <p>The Patient Navigator serves as the primary liaison between patients and OncoBridge's global second opinion services...</p>
                    <p>
                      The Patient Navigator serves as the primary liaison between patients and OncoBridge's global second opinion services.
                      This role ensures a seamless and supportive journey from case initiation to delivery of expert opinion and post-opinion guidance.
                      The navigator helps reduce friction, enhance understanding, and provide personalized care
                      coordination throughout the process.
                    </p>
                    <h4>Key Responsibilities</h4>
                    <ul className="key_respon mb-4">
                      <li><strong>Patient Onboarding:</strong> Guide patients through registration and digital consent process</li>
                      <li><strong>Data Coordination:</strong> Assist in uploading medical records, imaging, pathology reports</li>
                      <li><strong>Case Tracking:</strong> Monitor case progress, liaise with clinical ops and tech teams</li>
                      <li><strong>Communication:</strong> Act as a single point of contact for patient queries and updates</li>
                      <li><strong>Opinion Delivery:</strong> Schedule review calls, explain reports, coordinate clarifications</li>
                      <li><strong>Navigation Support:</strong> Help patients access further care (in India or abroad if needed)</li>
                      <li><strong>Feedback & Quality:</strong> Collect patient feedback and identify workflow improvement areas</li>
                      <li><strong>Documentation:</strong> Maintain detailed logs and ensure compliance with health data laws</li>
                    </ul>
                    <h4>Qualifications</h4>
                    <ul>
                      <li>Bachelor's degree in Life Sciences, Nursing, or Allied Health (master’s preferred)</li>
                      <li>3+ years of experience in patient-facing roles (oncology, diagnostics, or telehealth preferred)</li>
                      <li>Familiarity with cancer care workflows and medical terminology</li>
                      <li>Strong communication skills (English + one regional language)</li>
                      <li>Comfort with digital tools, EMR systems, and remote coordination</li>
                    </ul>
                    <h4>Key Competencies</h4>
                    <ul>
                      <li>Empathy and active listening</li>
                      <li>Cultural and linguistic sensitivity</li>
                      <li>Ability to multitask in a fast-paced setting</li>
                      <li>High attention to detail and patient confidentiality</li>
                      <li>Comfortable working with international clinical protocols</li>
                    </ul>
                    <h4>Preferred</h4>
                    <ul>
                      <li>Experience with second opinion services, tumor boards, or global medical collaborations</li>
                      <li>Prior work in oncology hospitals, diagnostics companies, or digital health platforms</li>
                      <li>Familiarity with HIPAA, GDPR, and Indian health data regulations</li>
                    </ul>
                    <h4>Why Join Us?</h4>
                    <ul>
                      <li>Be a part of a growing tech-enabled oncology platform delivering world-class second opinions.</li>
                      <li>Work closely with top-tier cancer specialists from India, the US, and the UK.</li>
                      <li>Enhance your clinical documentation and multidisciplinary case assessment skills.</li>
                      <li>Flexible, impactful, and intellectually enriching role for junior oncologists.</li>
                    </ul>

                  </>
                )}



                {selectedJob === "BDE001" && (
                  <>
                    <h2>Business Development Executive</h2>
                    <p>The Business Development Executive will drive growth by partnering with hospitals and diagnostics...</p>
                    <p>
                      The Business Development Manager (Oncology) will be responsible for driving business growth by networking with
                      private and public hospitals, cancer hospitals, and diagnostic chains to identify cancer cases for referral and
                      second-opinion services. The role involves promoting and selling cancer-related targeted therapy products, diagnostic kits,
                      and instruments while building strong relationships with hospitals, diagnostic centers, and insurance companies.
                    </p>
                    <h4>Key Responsibilities</h4>
                    <ul>
                      <li>
                        <strong>Networking and Lead Generation:</strong>
                        <ul>
                          <li>Establish and maintain relationships with key stakeholders in private and public hospitals, cancer hospitals, and diagnostic chains in Mumbai, Delhi, and Hyderabad.</li>
                          <li>Identify and refer cancer cases for second opinions and specialized treatments.</li>
                          <li>Achieve a minimum number of referrals as per set targets.</li>
                        </ul>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <strong>Sales and Promotion:</strong>
                        <ul>
                          <li>Promote and sell cancer-related targeted therapy products, diagnostic kits, and instruments to healthcare providers.</li>
                          <li>Develop and implement strategies to meet sales targets and expand market share.</li>
                          <li>Conduct product demonstrations and presentations to hospital staff and decision-makers.</li>
                        </ul>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <strong>Market Intelligence:</strong>
                        <ul>
                          <li>Maintain in-depth knowledge of hospital networks, diagnostic centers, and insurance companies in the oncology space.</li>
                          <li>Stay updated on advancements in cancer diagnostics, treatments, and market trends.</li>
                          <li>Analyze competitor activities and market demands to identify new opportunities.</li>
                        </ul>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <strong>Relationship Management:</strong>
                        <ul>
                          <li>Build and nurture long-term partnerships with healthcare professionals, administrators, and insurance providers.</li>
                          <li>Collaborate with internal teams to ensure seamless delivery of products and services.</li>
                          <li>Address client queries and provide post-sales support to ensure customer satisfaction.</li>
                        </ul>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <strong>Reporting and Compliance:</strong>
                        <ul>
                          <li>Maintain accurate records of sales, referrals, and client interactions.</li>
                          <li>Prepare regular reports on business development activities and market insights.</li>
                          <li>Ensure compliance with all regulatory and ethical standards in healthcare sales.</li>
                        </ul>
                      </li>
                    </ul>

                    <h4>Qualifications and Skills</h4>
                    <ul>
                      <li><strong>Education:</strong> Bachelor’s degree in Business, Marketing, Life Sciences, or a related field. MBA or equivalent is a plus.</li>
                    </ul>
                    <ul>
                      <li>
                        <strong>Experience:</strong>
                        <ul>
                          <li>Minimum 3-5 years of experience in business development or sales in the healthcare/pharmaceutical industry, preferably in oncology.</li>
                          <li>Proven track record of networking with hospitals, diagnostic chains, or insurance companies.</li>
                        </ul>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <strong>Skills:</strong>
                        <ul>
                          <li>Strong knowledge of hospital ecosystems, diagnostic processes, and insurance operations in India.</li>
                          <li>Excellent communication, negotiation, and presentation skills.</li>
                          <li>Ability to build and maintain professional relationships with healthcare stakeholders.</li>
                          <li>Self-motivated with a results-driven approach to achieving sales and referral targets.</li>
                          <li>Familiarity with oncology products, targeted therapies, and diagnostic kits is highly desirable.</li>
                        </ul>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <strong>Other Requirements:</strong>
                        <ul>
                          <li>Willingness to travel extensively within the assigned region (Mumbai, Delhi, or Hyderabad).</li>
                          <li>Proficiency in CRM tools and MS Office Suite.</li>
                          <li>Fluency in English and Hindi; knowledge of local languages (Marathi, Telugu) is a plus.</li>
                        </ul>
                      </li>
                    </ul>
                    <h4>Preferred Locations</h4>
                    <ul>
                      <li>Candidates should be based in or willing to relocate to Mumbai, Delhi, or Hyderabad.</li>
                      <li>Each post will focus on one of these cities, with potential for cross-city collaboration.</li>
                    </ul>
                    <h4>Compensation and Benefits</h4>
                    <ul>
                      <li>Competitive salary with performance-based incentives.</li>
                      <li>Health insurance, travel allowances, and professional development opportunities.</li>
                      <li>Supportive work environment with opportunities for career growth.</li>
                    </ul>
                    <h4>Why Join Us?</h4>
                    <ul>
                      <li>Be a part of a growing tech-enabled oncology platform delivering world-class second opinions.</li>
                      <li>Work closely with top-tier cancer specialists from India, the US, and the UK.</li>
                      <li>Enhance your clinical documentation and multidisciplinary case assessment skills.</li>
                      <li>Flexible, impactful, and intellectually enriching role for junior oncologists.</li>
                    </ul>


                  </>
                )}



                {selectedJob === "MAO001" && (
                  <>
                    <h2>Medical Advisor – Oncologist</h2>
                    <p>Support second opinion services by preparing case summaries and referral documents...</p>
                    <h4>About the Role</h4>
                    <p>
                      We are seeking a detail-oriented and compassionate Junior Oncologist to support our second opinion services.
                      The primary responsibility is to prepare concise, structured case summaries and referral documents that enable effective
                      and informed expert consultations (national or international). This role is ideal for early-career oncologists looking to
                      expand into collaborative, technology-enabled oncology care.
                    </p>
                    <h4>Key Responsibilities</h4>
                    <ul>
                      <li>Review patient records, including pathology, imaging, biomarker reports, and clinical notes.</li>
                      <li>Summarize key clinical data into a structured, specialist-ready format.</li>
                      <li>Prepare comprehensive yet concise referral documents tailored for second opinion consultations.</li>
                      <li>Liaise with internal teams and senior oncologists to ensure completeness and clarity of each file.</li>
                      <li>Maintain high standards of medical accuracy, confidentiality, and patient empathy.</li>
                      <li>Participate in periodic training and updates on evolving standards of care.</li>
                      <li>Optionally, communicate with patients or treating physicians to fill clinical gaps (as needed).</li>
                    </ul>
                    <h4>Qualifications</h4>
                    <ul>
                      <li>MBBS + MD/DNB (Radiation / Medical / Surgical Oncology) OR MBBS with relevant cancer care experience (2+ years).</li>
                      <li>Fresh graduates from reputed institutions with oncology rotations may also apply.</li>
                      <li>Strong documentation and analytical skills.</li>
                      <li>Proficient in medical terminology, case writing, and EMR systems.</li>
                      <li>Comfortable working independently and under deadlines.</li>
                      <li>Based in or willing to relocate to Coimbatore (preferred for team sync-ups).</li>
                    </ul>
                    <h5>Compensation Plan: To be Discussed In Person as per OHPL  Policy & Guidelines </h5>
                    <h6>Work Hours</h6>
                    <ul>
                      <li>Flexible work hours; average 1–2 hours per case.</li>
                      <li>Response turnaround: 24–48 hours from case assignment.</li>
                    </ul>
                    <h4>Why Join Us?</h4>
                    <ul>
                      <li>Be a part of a growing tech-enabled oncology platform delivering world-class second opinions.</li>
                      <li>Work closely with top-tier cancer specialists from India, the US, and the UK.</li>
                      <li>Enhance your clinical documentation and multidisciplinary case assessment skills.</li>
                      <li>Flexible, impactful, and intellectually enriching role for junior oncologists.</li>
                    </ul>


                  </>
                )}

                {/* <h2>{selectedJob.title}</h2>
                <p>
                  <strong>Job Code:</strong> {selectedJob.code}
                </p>
                <p>{selectedJob.description}</p> */}

                {/* <h4>Responsibilities:</h4>
                <ul className="job-bullets">
                  {selectedJob.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul> */}

                {/* <h4>Qualifications:</h4>
                <ul className="job-bullets">
                  {selectedJob.qualifications.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul> */}

                {!showApplicationForm ? (
                  <button
                    className="apply-link"
                    onClick={() => setShowApplicationForm(true)}
                  >
                    Apply Now <FiArrowUpRight />
                  </button>
                ) : (
                  <form
                    className="application-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Application submitted!");
                      setShowApplicationForm(false);
                    }}
                  >
                    <h4>Apply for this position</h4>

                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" required />
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" required />
                    </div>

                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" required />
                    </div>

                    <div className="form-group">
                      <label>Upload Resume (PDF)</label>
                      <input type="file" accept=".pdf" required />
                    </div>

                    <button type="submit" className="submit-btn">
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="footer-text">
          To apply, send your resume and cover letter to{" "}
          <a href="mailto:care@oncobridge.in">care@oncobridge.in</a>,
          mentioning the relevant Job Code in the subject line.
        </div>
      </div>
    </>
  );
}
