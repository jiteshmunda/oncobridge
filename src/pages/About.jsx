import React, { useEffect, useRef, useState } from "react";
import About_us_banner from "../assets/About-us.png";
import "../styles/About.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import arunImg from "../assets/team/arun.png";
import saravananImg from "../assets/team/saravanan.png";
import kannanImg from "../assets/team/kannan.png";
import zaheerImg from "../assets/team/zaheer.png";
import devaImg from "../assets/team/devadharshini.png";



const teamMembers = [
  {
    name: "Arun Padmanabhan",
    title: "Co-Founder & Director",
    image: arunImg,
    linkedin: "https://www.linkedin.com/in/arun-padmanabhan-7529374",
    email: "arun@oncobridge.in",
    bio: `Arun Padmanabhan is a seasoned life sciences executive with over 27 years of leadership in molecular diagnostics, life sciences research, and medtech commercialization. He has held senior roles at Thermo Fisher Scientific, PerkinElmer (now Revvity), and BD Biosciences, driving nationwide growth and launching patient-focused innovations. With a strong foundation in business strategy and precision oncology, Arun as Co-Founder & Director, now leads OncoBridge’s mission to make world-class cancer expertise and advanced diagnostics globally accessible. He holds a Master’s in Biological Sciences and a Bachelor’s in Pharmacy from BITS Pilani, along with the General Management Program from IIM Ahmedabad.`,
  },
  {
    name: "Saravanan Sankarram",
    title: "Co-Founder & Director",
    image: saravananImg,
    linkedin: "https://www.linkedin.com/in/saravanansankarram/",
    email: "sara@oncobridge.in",
    bio: `
    Saravanan Sankarram is the <strong>Co-founder and Director</strong> of OncoBridge Healthcare and the <strong>Founder</strong> of Biobeams. He brings over <strong>32 years of experience</strong> to the <strong>Scientific and Healthcare industry</strong>.<br/><br/>
    He holds a <strong>Master of Science</strong>, along with <strong>Postgraduate Diplomas in Marketing & Sales and Import & Export Management</strong>. With a strong passion for <strong>precision medicine, molecular diagnostics, and healthcare innovation</strong>, Saravanan leads strategic initiatives that connect <strong>global scientific advancements</strong> with the <strong>Indian medical ecosystem</strong>.<br/><br/>
    His mission is to <strong>empower cancer patients in India</strong> through <strong>trusted second opinions</strong> and <strong>personalized medicine</strong>, integrating cutting-edge technology with clinical excellence to improve patient outcomes. Through Biobeams, he has been instrumental in <strong>bridging the gap between science and industry</strong>, supplying <strong>innovative laboratory and diagnostic solutions</strong> from leading global manufacturers to strengthen research and healthcare infrastructure across India.<br/><br/>
    In his free time, Saravanan enjoys <strong>science fiction, cooking, and chess</strong>.
  `,
  },
  {
    name: "Dr. Kannan Maharajan",
    title: "Chief Medical Officer - Radiation Oncologist",
    image: kannanImg,
    linkedin: "https://www.linkedin.com/in/dr-kannan-maharajan-47b36618a",
    email: "cmo@oncobridge.in",
    bio: `Dr. Kannan Maharajan is the <strong> Chief Medical Officer </strong> with a deep passion for<strong> comprehensive oncology care</strong> With over <strong>3 years of experience </strong>in <strong>precision oncological management</strong>, Dr. Kannan specializes in <strong>advanced radiation techniques, including IMRT, VMAT, Brachytherapy, and Proton Therapy </strong> They have contributed to several<strong> international open-access research publications</strong> and have actively <strong>presented their work at national and state-level conferences</strong>.<br/><br/>Committed to delivering <strong>compassionate, patient-centred cancer care</strong>, Dr. Kannan continually strives to <strong>integrate cutting-edge technology with holistic treatment approaches </strong><br/><br/>In their free time, Dr. Kannan enjoys <strong>playing chess and spending quality time with family</strong>`,
  },
  {
    name: "Zaheer Ahmed",
    title: "Health Navigator",
    image: zaheerImg,
    linkedin: "https://www.linkedin.com/in/zaheer-ahmed-261487b3",
    email: "admin@oncobridge.in",
    bio: `Zaheer Ahmed is a <strong>Health Navigator</strong> who is passionate about <strong>compassion and healthcare advocacy</strong><br/><br/>
Zaheer has<strong> 15 years of expertise</strong> in the healthcare sector and is an expert in<strong> patient data evaluation and telehealth for oncology</strong>. Their work in remote patient management 
also includes<strong> virtual consultations for chronic disease management, pre- and post-operative check-ins, and triage</strong>.
They have added depth and specialization for a <strong>vital function in a cancer program, focusing on complicated coordination, clinical expertise, and psychological support</strong>.<br/><br/>
Zaheer likes to<strong> read, play cricket, take digital photos, and pick up new languages </strong>in their spare time`,
  },
  {
    name: "G. Devadharshini",
    title: "Health Navigator",
    image: devaImg,
    linkedin: "https://www.linkedin.com/in/deva-dharshini-0092a71a2/",
    email: "admin@oncobridge.in",
    bio: `G. Devadharshini is a <strong>Health Navigator</strong> with a passion for <strong>counselling for diagnosed patients and caregivers, psychotherapy, AI Annotation and 3D Lidar</strong>.<br/><br/>
With<strong> 4 years of experience </strong>in the <strong>Medical Field</strong>, she specializes in <strong>Cognitive therapy, Psychotherapy, and child development</strong>.
She is dedicated to the core values of <strong>Compassion and strategic decision-making</strong>.<br/><br/>
In her free time, Devadharshini enjoys <strong>Cooking, Music, and Traveling</strong>`,
  },
];

function About() {
  const leftContentRef = useRef(null);
  const rightWrapperRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const leftContent = leftContentRef.current;
    const rightWrapper = rightWrapperRef.current;

    const handleWheel = (e) => {
      const scrollTop = leftContent.scrollTop;
      const scrollHeight = leftContent.scrollHeight;
      const clientHeight = leftContent.clientHeight;

      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight;

      if ((!atTop && e.deltaY < 0) || (!atBottom && e.deltaY > 0)) {
        e.preventDefault();
        leftContent.scrollTop += e.deltaY;
      }
    };

    rightWrapper.addEventListener("wheel", handleWheel, { passive: false });
    return () => rightWrapper.removeEventListener("wheel", handleWheel);
  }, []);

  
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedMember]);

  return (
    <section className="about-section">
      <div className="container-fluid mb-0">
        <div className="row about-row g-0 about-responsive">
          {/* Left Content Scroll */}
          <div className="col-lg-6 col-md-6 about-content" ref={leftContentRef}>
            <div className="m-lg-5">
              <h1 className="fw-bold display-5 mb-3 animate__animated animate__fadeIn extra-space-bottom home_banner_heading">
                Erasing Cancer,
                <br /> Embracing Life
              </h1>
              <p className="para-font-size">
                We empower cancer patients in India and beyond by providing
                trusted access to world-class diagnostics and expert medical
                opinions. Through our seamless, tech-driven platform, we connect
                patients with leading cancer specialists, delivering precision
                insights and compassionate support.
              </p>
            </div>
          </div>

          {/* Right Side Scroll-Linked */}
          <div
            className="col-lg-6 col-md-6 about-image-wrapper"
            ref={rightWrapperRef}
          >
            <img
              src={About_us_banner}
              className="about-sticky-image"
              alt="Our Vision and Mission"
            />
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="team-section container py-0">
          <h2 className="fw-bold mb-5 team-heading ">
            Meet Our Team
          </h2>

          {/* First Row (3 Members) */}
          <div className="row justify-content-center g-4 mb-4">
            {teamMembers.slice(0, 3).map((member, idx) => (
              <div
                key={idx}
                className="col-lg-4 col-md-4 col-sm-6 text-center team-card"
              >
                <div
                  className="team-photo-wrapper"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="photo-circle">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-photo mb-3"
                    />
                  </div>
                  <h5 className="fw-bold team-name">{member.name}</h5>
                  <p className="team-title">{member.title}</p>
                </div>
                <div className="d-flex justify-content-center gap-3 mt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-icon"
                  >
                    <FaLinkedin size={22} />
                  </a>
                  <a href={`mailto:${member.email}`} className="email-icon">
                    <MdOutlineEmail size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row (2 Members) */}
          <div className="row justify-content-center g-4">
            {teamMembers.slice(3).map((member, idx) => (
              <div
                key={idx}
                className="col-lg-4 col-md-4 col-sm-6 text-center team-card"
              >
                <div
                  className="team-photo-wrapper"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="photo-circle">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-photo mb-3"
                    />
                  </div>
                  <h5 className="fw-bold team-name">{member.name}</h5>
                  <p className="team-title">{member.title}</p>
                </div>
                <div className="d-flex justify-content-center gap-3 mt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-icon"
                  >
                    <FaLinkedin size={22} />
                  </a>
                  <a href={`mailto:${member.email}`} className="email-icon">
                    <MdOutlineEmail size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Popup Modal */}
      {selectedMember && (
        <div className="team-modal" onClick={() => setSelectedMember(null)}>
          <div
            className="team-modal-outer"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="team-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedMember(null)}
              >
                ×
              </button>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="modal-photo mb-3"
              />
              <h3>{selectedMember.name}</h3>
              <p className="text-muted">{selectedMember.title}</p>
              <p dangerouslySetInnerHTML={{ __html: selectedMember.bio }}></p>
              <div className="d-flex justify-content-center gap-4 mt-3">
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="email-icon"
                >
                  <MdOutlineEmail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
