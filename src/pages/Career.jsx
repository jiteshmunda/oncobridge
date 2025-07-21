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

  // Disable scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = selectedJob ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedJob]);

  // Combine filter and search logic
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
        <div className='container-fluid px-0'>
          <div className='row gx-0 align-items-left'>
            <div className="bg-image-career d-flex justify-content-left align-items-center text-left text-white ">
              <div className="overlay-content">
                <div className='col-md-12 p-3 ms-lg-5 ps-lg-4'>
                  <h2 className="fw-bold text-white">Career</h2>
                  {/* <p className="lead"> Our Vision  Mission
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <div className="career-page">
      <div className="career-header">
        <div className="tag">We’re hiring!</div>
        <h1>Career Opportunities at OncoBridge</h1>
        <p>
          Below are the career opportunities currently available at OncoBridge. Please review the job
          descriptions and contact us at <a href="mailto:care@oncobridge.in">care@oncobridge.in</a> with
          the relevant job code to apply.
        </p>
      </div>

      <div className="filters-row">
        <div className="filters">
          {filters.map((label) => (
            <button
              key={label}
              className={`filter-btn ${activeFilter === label ? "active" : ""}`}
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
      </div>

      <div className="job-list">
        {filteredJobs.map((job, index) => (
          <div
            className="job-card clickable"
            key={index}
            onClick={() => setSelectedJob(job)}
          >
            <div>
              <h3>{job.title}</h3>
              <p className="job-code">Job Code: {job.code}</p>
            </div>
            <span className="job-popup-link">
              View Details <FiArrowUpRight />
            </span>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="job-popup" onClick={() => setSelectedJob(null)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelectedJob(null)}>&times;</button>
            <div className="popup-scroll">
              <h2>{selectedJob.title}</h2>
              <p><strong>Job Code:</strong> {selectedJob.code}</p>
              <p>{selectedJob.description}</p>

              <h4>Responsibilities:</h4>
              <ul className="job-bullets">
                {selectedJob.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4>Qualifications:</h4>
              <ul className="job-bullets">
                {selectedJob.qualifications.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <a href={selectedJob.applyLink} className="apply-link" target="_blank" rel="noreferrer">
                Apply Now <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="footer-text">
        To apply, send your resume and cover letter to <a href="mailto:care@oncobridge.in">care@oncobridge.in</a>,
        mentioning the relevant Job Code in the subject line.
      </div>
    </div>
    </>
  );
}
