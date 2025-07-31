import React, { useState } from "react";
import "../styles/Disclaimers.css";

const disclaimerData = [
  {
    id: 1,
    title: "Service Nature and Medical Disclaimer",
    content: (
      <>
        <p>
          OncoBridge functions as a channel partner in India for a U.S.-based
          healthcare organization that facilitates expert second opinions in
          oncology and precision medicine.
        </p>
        <ul>
          <li>
            The services offered through this platform are advisory in nature
            and do not constitute primary diagnosis or treatment.
          </li>
          <li>
            All medical insights are provided by certified and experienced
            U.S.-based oncology experts and affiliated institutions, with the
            support of Registered Medical Practitioners (RMPs) for contextual
            adaptation where applicable.
          </li>
          <li>
            The second opinion is intended to assist the patient and their
            treating oncologist and should not replace consultation with your
            local healthcare provider.
          </li>
          <li>
            Any decisions related to treatment must be taken in consultation
            with your primary or treating physician. OncoBridge does not assume
            responsibility for independent interpretation or misuse of the
            second opinion advice.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Platform Use & Limitation of Liability",
    content: (
      <>
        <ul>
          <li>
            All content and services on the Site are provided on an “as is” and
            “as available” basis, without warranties of any kind.
          </li>
          <li>
            The Site and its parent organization in the U.S. make no
            representations or warranties—express or implied—regarding the
            accuracy, reliability, or completeness of the content.
          </li>
          <li>
            Neither OncoBridge nor its U.S. service provider shall be liable for
            any direct, indirect, incidental, or consequential damages resulting
            from:
          </li>
          <ul>
            <li>Use of or reliance on the Site’s content</li>
            <li>Delays in service delivery</li>
            <li>Errors, omissions, or technical issues</li>
          </ul>
          <li>
            Users are responsible for verifying the suitability of any advice
            obtained and for ensuring their local physician is involved in
            treatment decision-making.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Telemedicine and Consultation Services",
    content: (
      <>
        <ul>
          <li>
            All consultations are conducted via secure telemedicine platforms,
            involving U.S.-licensed oncologists and cancer specialists.
          </li>
          <li>
            Consultations are delivered in compliance with international
            telehealth standards, and Indian telemedicine norms where
            applicable.
          </li>
          <li>
            No AI or machine-generated advice is used. All insights are
            human-reviewed and evidence-based.
          </li>
          <li>
            Services are non-emergency and intended for second opinion support
            only.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Data Privacy and Consent",
    content: (
      <>
        <p>
          By using the Site, you consent to the cross-border transfer,
          processing, and storage of your Personal and Sensitive Personal Data
          (SPD) by our U.S.-based service provider, as outlined in our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        <ul>
          <li>
            Data is used strictly for second opinion services and shared only
            with registered experts and supporting RMPs.
          </li>
          <li>
            Your information is never sold or disclosed to third parties for
            marketing or unrelated purposes.
          </li>
          <li>
            In compliance with the Digital Personal Data Protection (DPDP) Act,
            2023, Indian users have the right to:
          </li>
          <ul>
            <li>Access their data</li>
            <li>Request corrections</li>
            <li>Withdraw consent</li>
          </ul>
          <li>
            Requests can be directed to:{" "}
            <a href="mailto:care@oncobridge.in">care@oncobridge.in</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "Third-Party Content and External Links",
    content: (
      <>
        <ul>
          <li>
            The Site may include links to third-party websites or resources for
            user convenience. OncoBridge:
          </li>
          <ul>
            <li>Does not control or endorse such external content</li>
            <li>
              Is not responsible for any loss, damage, or consequences arising
              from reliance on third-party links or sites
            </li>
          </ul>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Intellectual Property Rights",
    content: (
      <>
        <ul>
          <li>
            All content, graphics, logos, reports, and documents on this Site
            are owned or licensed by the U.S. parent company or OncoBridge and
            are protected under relevant intellectual property laws.
          </li>
          <li>
            Content may be used for personal, non-commercial use only, with all
            copyright and proprietary notices retained.
          </li>
          <li>
            Any unauthorized reproduction, modification, or distribution is
            strictly prohibited and may result in legal action.
          </li>
        </ul>
      </>
    ),
  },
];

const additionalTermsData = [
  {
    id: "1",
    title: "Terms of Use and User Conduct",
    content: (
      <>
        <p>By accessing this Site, you agree to:</p>
        <ul>
          <li>Use it only for lawful and intended purposes</li>
          <li>
            Not engage in activities that damage or impair the Site or interfere
            with its use by others
          </li>
          <li>
            Refrain from unauthorized data mining, scraping, or duplication of
            services/content
          </li>
        </ul>
        <p>
          The Site reserves the right to modify, suspend, or terminate access or
          content at any time without prior notice.
        </p>
      </>
    ),
  },
  {
    id: "2",
    title: "Jurisdiction and Governing Law",
    content: (
      <>
        <p>
          This Site and its content are governed under the laws of Delaware,
          United States, where the parent organization is incorporated.
        </p>
        <ul>
          <li>
            Any disputes related to medical services rendered will fall under
            the jurisdiction of U.S. courts.
          </li>
          <li>
            For users in India, OncoBridge acts only as a facilitation platform;
            all advisory content originates from the U.S. service provider.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "3",
    title: "Statutory Rights",
    content: (
      <p>
        Nothing in these terms affects your statutory rights as a user under
        applicable Indian or international law.
      </p>
    ),
  },
  {
    id: "4",
    title: "Contact Information",
    content: (
      <p>
        For questions, service clarifications, or privacy inquiries, please
        contact us via email:
        <br />
        <a href="mailto:care@oncobridge.in">care@oncobridge.in</a>
      </p>
    ),
  },
  {
    id: "5",
    title: "Consent Acknowledgement",
    content: (
      <>
        <p>By using this Site or availing services, you confirm that:</p>
        <ul>
          <li>
            You understand the second opinion is advisory and originates from a
            U.S. provider
          </li>
          <li>You have read and agree to this Disclaimer and Terms of Use</li>
          <li>
            You grant consent for data handling and transfer as per the above
            terms
          </li>
        </ul>
      </>
    ),
  },
];

const Disclaimer = () => {
  const [selectedId, setSelectedId] = useState(disclaimerData[0].id);
  const active = disclaimerData.find((item) => item.id === selectedId);

  return (
    <>
      {/* Banner Section */}
      <section className="disclaimer-banner d-flex align-items-center text-white position-relative">
  <div className="overlay"></div>
  <div className="container text-left position-relative z-1">
    <div className="col-md-12 p-3 ">
      <h1 className="fw-bold text-white display-5 animate__animated animate__fadeIn">
        Disclaimer & Terms of Use
      </h1>
      <p className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s">
        Please read carefully before using our services
      </p>
    </div>
  </div>
</section>


      {/* Disclaimer Section 1 */}
      <section className="disclaimer-section">
        <h2 className="disclaimer-main-heading mb-5">
          Website Disclaimer & Terms of Use
        </h2>
        {/* <p className="text-muted mb-5 text-center">Last Updated: 17-07-2025</p> */}

        <div className="container d-flex disclaimer-wrapper">
          {/* Sidebar Menu */}
          <div className="disclaimer-menu">
            {disclaimerData.map((item) => (
              <div
                key={item.id}
                className={`disclaimer-item ${
                  selectedId === item.id ? "active" : ""
                }`}
                onClick={() => setSelectedId(item.id)}
              >
                <h5>{item.title}</h5>
                <span className="arrow">&rarr;</span>
              </div>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="disclaimer-content">
            <h3>{active.title}</h3>
            <div className="disclaimer-text">{active.content}</div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section 2 */}

      <section className="terms-timeline-section">
        <div className="container">
          <h2 className="terms-timeline-title">
            Additional Terms & Conditions
          </h2>

          <div className="terms-timeline">
            {additionalTermsData.map((item) => (
              <div className="terms-timeline-item" key={item.id}>
                <div className="terms-timeline-icon">{item.id}</div>
                <div className="terms-timeline-content">
                  <h4>{item.title}</h4>
                  <div>{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Disclaimer;
