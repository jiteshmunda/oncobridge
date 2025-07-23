import React from "react";
import myths1 from "../assets/myths1.jpg";
import { Link } from "react-router-dom";
import myths2 from "../assets/myths2.jpg";
import myths3 from "../assets/myths3.jpg";
import myths4 from "../assets/myths4.jpg";
import myths5 from "../assets/myths5.jpg";
import myths6 from "../assets/myths6.jpg";
import myths_bg from "../assets/myths_bg.png";
import myths_step1 from "../assets/myths_step1.jpg";
import myths_step2 from "../assets/myths_step2.jpg";
import myths_step3 from "../assets/myths_step3.jpg";
import myths_step4 from "../assets/myths_step4.jpg";

function Myths() {
  return (
    <>
      <section className="text-center">
        <div className="container-fluid px-0">
          <div className="row gx-0 align-items-center">
            <div className="bg-image-myths d-flex justify-content-left align-items-center text-left text-white vh-100">
              <div className="overlay-content">
                <div className="col-md-7 p-3 ms-lg-5 ms-md-5 ms-sm-4">
                  <h1 className="fw-bold text-white display-4 animate__animated animate__fadeIn">
                    Cancer: Understanding Facts, Dispelling Myths
                  </h1>
                  <p className="lead animate__animated animate__fadeIn animate__delay-1s">
                    {/* Optional subtitle or leave empty */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* block 1 */}
      <section className="text-center py-5">
        <div className="container ">
          <div className="row  align-items-center">
            <div className="col-md-7">
              <div className="text-start  mb-3">
                <h2 className="section-title fw-bold">
                  A Message to Patients and Families
                </h2>
              </div>
              <p className="text-start">
                Receiving a cancer diagnosis can feel overwhelming, and it's
                natural to have many questions and concerns. This guide aims to
                provide you with accurate, evidence-based information to help
                you understand cancer better and make informed decisions about
                your care. Remember, you're not alone in this journey, and
                knowledge can be empowering.
              </p>
              <p className="text-start">
                As a partner, OHPL is committed to collaborating with Iylon to
                advance precision oncology, ensuring that patients across our
                network benefit from cutting-edge, evidence-based treatment
                plans. By integrating Iylon’s expertise in molecular oncology,
                radiology, and AI-driven diagnostics, we aim to enhance patient
                outcomes and expand access to personalized cancer care.
                Together, we are dedicated to supporting Iylon’s mission to
                reduce cancer mortality and make precision oncology accessible
                globally, including through initiatives like the Iylon
                Foundation, which provides free treatments to underserved
                patients.
              </p>
            </div>
            <div className="col-md-5 ">
              <img
                src={myths1}
                alt="myths1"
                className="img-fluid main-img extra-rounded"
              />
            </div>
          </div>
        </div>
      </section>
      {/* block 2 */}
      <section className="text-center  bg-light">
        <div className="container-fluid ">
          <div className="row align-items-center">
            <div className="col-md-5">
              <img
                src={myths2}
                alt="caner cell body"
                className="img-fluid rounded-4"
              />
            </div>
            <div className="col-md-7">
              <div className="text-start ">
                <h2 className="section-title fw-bold">
                  Understanding Cancer: The Basics
                </h2>
              </div>
              <p className="text-start">
                Cancer occurs when cells in your body begin to grow
                uncontrollably. Unlike normal cells that grow, divide, and die
                in an orderly way, cancer cells continue to grow and form new,
                abnormal cells. These cells can form tumors and may spread to
                other parts of the body.
              </p>
              <div className="text-start">
                <h5>What Cancer Is NOT:</h5>
                <div>
                  <ul>
                    <li>
                      Cancer is not a single disease—it’s actually more than 100
                      different diseases.
                    </li>
                    <li>
                      It’s not always a death sentence—many cancers are highly
                      treatable, especially when caught early.
                    </li>
                    <li>
                      It’s not contagious—you cannot catch cancer from another
                      person.
                    </li>
                    <li>
                      It’s not always hereditary—only 5–10% of cancers are
                      directly inherited.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tab block 3 */}
      <section className="text-center py-5">
        <div className="container-fluid ">
          <div className="text-center mb-5">
            <h2 className="section-title fw-bold">Common Types of Cancer</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12">
              <ul
                className="nav nav-pills mb-5 justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-patients-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-breast-cancer"
                    type="button"
                    role="tab"
                    aria-controls="pills-breast-cancer"
                    aria-selected="true"
                  >
                    Breast Cancer
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-doctors-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-lung-cancer"
                    type="button"
                    role="tab"
                    aria-controls="pills-lung-cancer"
                    aria-selected="false"
                  >
                    Lung Cancer
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-color-cancer"
                    type="button"
                    role="tab"
                    aria-controls="pills-color-cancer"
                    aria-selected="false"
                  >
                    Colorectal Cancer
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-prost-cancer"
                    type="button"
                    role="tab"
                    aria-controls="pills-prost-cancer"
                    aria-selected="false"
                  >
                    Prostate Cancer
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active "
                  id="pills-breast-cancer"
                  role="tabpanel"
                  aria-labelledby="pills-patients-tab"
                >
                  <div className="tab_title_cancer">
                    <h3 className="text-center text-black mb-5">
                      Breast Cancer
                    </h3>
                  </div>
                  <div className="container">
                    <div className="row g-4 align-items-stretch">
                      <div className="col-md-6">
                        <div className="card myths_cards  h-100">
                          <div className="card-header">
                            <h5 className="card-title mb-0">Facts</h5>
                          </div>
                          <div className="card-body">
                            <div className="types_cancer_list">
                              <ul className="list-unstyled text-start">
                                <li>
                                  <i className="fas fa-check me-2"></i>Most
                                  common cancer in women worldwide, but men can
                                  also develop breast cancer.
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Early
                                  detection through mammograms significantly
                                  improves outcomes.
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Five-year
                                  survival rate is over 90% when caught early.
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Treatment
                                  options include surgery, chemotherapy,
                                  radiation, hormone therapy, and targeted
                                  drugs.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card myths_cards  h-100">
                          <div className="card-header">
                            <h5 className="card-title mb-0">Myths Dispelled</h5>
                          </div>
                          <div className="card-body">
                            <div className="types_cancer_list">
                              <ul className="list-unstyled text-start">
                                <li>
                                  <i className="fas fa-check me-2"></i>
                                  Myth: Only women with a family history get
                                  breast cancer
                                </li>
                                <li>
                                  <i className="fas fa-check me-2 "></i>
                                  Fact: About 85% of breast cancers occur in
                                  women with no family history
                                </li>
                                <li>
                                  <i className="fas fa-check me-2 "></i>
                                  Myth:Finding a lump means you have cancer
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>
                                  Fact: 80% of breast lumps are benign
                                  (non-cancerous)
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show"
                  id="pills-lung-cancer"
                  role="tabpanel"
                  aria-labelledby="pills-patients-tab"
                >
                  <div className="tab_title_cancer">
                    <h3 className="text-center text-black mb-5">Lung Cancer</h3>
                  </div>
                  <div className="container">
                    <div className="row g-4 align-items-stretch">
                      <div className="col-md-6">
                        <div className="card myths_cards  h-100">
                          <div className="card-header">
                            <h5 className="card-title mb-0">Facts</h5>
                          </div>
                          <div className="card-body">
                            <div className="types_cancer_list">
                              <ul className="list-unstyled text-start">
                                <li>
                                  <i className="fas fa-check me-2 "></i>Leading
                                  cause of cancer death worldwide
                                </li>
                                <li>
                                  <i className="fas fa-check me-2 "></i>Smoking
                                  is the primary risk factor, but non-smokers
                                  can also develop lung cancer
                                </li>
                                <li>
                                  <i className="fas fa-check me-2 "></i>Symptoms
                                  may include persistent cough, chest pain,
                                  shortness of breath, and coughing up blood
                                </li>
                                <li>
                                  <i className="fas fa-check me-2 "></i>
                                  Treatment depends on type (small cell vs.
                                  non-small cell) and stage
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card myths_cards  h-100">
                          <div className="card-header">
                            <h5 className="card-title mb-0">Myths Dispelled</h5>
                          </div>
                          <div className="card-body">
                            <div className="types_cancer_list">
                              <ul className="list-unstyled text-start">
                                <li>
                                  <i className="fas fa-check me-2"></i>Myth:
                                  Only smokers get lung cancer
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Fact:
                                  10–15% of lung cancers occur in people who
                                  have never smoked
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Myth:
                                  Switching to light cigarettes reduces risk
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Fact:
                                  There is no safe level of smoking; all tobacco
                                  products increase cancer risk
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show"
                  id="pills-color-cancer"
                  role="tabpanel"
                  aria-labelledby="pills-patients-tab"
                >
                  <div className="tab_title_cancer">
                    <h3 className="text-center text-black mb-5">
                      Colorectal Cancer
                    </h3>
                  </div>
                  <div className="container">
                    <div className="row g-4 align-items-stretch">
                      <div className="col-md-6">
                        <div className="card myths_cards  h-100">
                          <div className="card-header">
                            <h5 className="card-title mb-0">Facts</h5>
                          </div>
                          <div className="card-body">
                            <div className="types_cancer_list">
                              <ul className="list-unstyled text-start">
                                <li>
                                  <i className="fas fa-check me-2"></i>Third
                                  most common cancer worldwide
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Screening
                                  can prevent cancer by detecting and removing
                                  precancerous polyps
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Symptoms
                                  may include changes in bowel habits, blood in
                                  stool, and abdominal pain
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Treatment
                                  often involves surgery, and may include
                                  chemotherapy and radiation
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card myths_cards  h-100">
                          <div className="card-header">
                            <h5 className="card-title mb-0">Myths Dispelled</h5>
                          </div>
                          <div className="card-body">
                            <div className="types_cancer_list">
                              <ul className="list-unstyled text-start">
                                <li>
                                  <i className="fas fa-check me-2"></i>Myth:
                                  Colorectal cancer only affects older adults
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Fact:
                                  While more common after age 50, rates are
                                  rising in younger adults
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Myth:
                                  Colonoscopies are always painful
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Fact:
                                  Most people tolerate the procedure well with
                                  sedation
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show"
                  id="pills-prost-cancer"
                  role="tabpanel"
                  aria-labelledby="pills-patients-tab"
                >
                  <div className="tab_title_cancer">
                    <h3 className="text-center text-black mb-5">
                      Prostate Cancer
                    </h3>
                  </div>
                  <div className="container">
                    <div className="row g-4 align-items-stretch">
                      <div className="col-md-6">
                        <div className="card myths_cards  h-100">
                          <div className="card-header">
                            <h5 className="card-title mb-0">Facts</h5>
                          </div>
                          <div className="card-body">
                            <div className="types_cancer_list">
                              <ul className="list-unstyled text-start">
                                <li>
                                  <i className="fas fa-check me-2"></i>Second
                                  most common cancer in men
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Often
                                  grows slowly and may not cause symptoms
                                  initially
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>PSA
                                  testing can help with early detection
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Treatment
                                  options range from active surveillance to
                                  surgery and radiation
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card myths_cards  h-100">
                          <div className="card-header">
                            <h5 className="card-title mb-0">Myths Dispelled</h5>
                          </div>
                          <div className="card-body">
                            <div className="types_cancer_list">
                              <ul className="list-unstyled text-start">
                                <li>
                                  <i className="fas fa-check me-2"></i>Myth:
                                  Prostate cancer is always aggressive
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Fact:
                                  Many prostate cancers grow slowly and may not
                                  require immediate treatment
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Myth:
                                  Prostate cancer treatment always causes
                                  impotence
                                </li>
                                <li>
                                  <i className="fas fa-check me-2"></i>Fact:
                                  Modern treatments often preserve sexual
                                  function
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* block 4 */}
      <section className="text-center py-5 bg-white">
        <div className="container-fluid ">
          <div className="text-center mb-5">
            <h2 className="section-title fw-bold">
              Cancer Diagnosis: What to Expect
            </h2>
            <p className="subtitle_myths">Common Diagnostic Tests</p>
          </div>
          <div className="row g-4 diagnosis_text">
            {/* Imaging Tests Card */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={myths3}
                  className="card-img-top"
                  alt="Imaging equipment"
                />
                <div className="card-body text-start">
                  <h5 className="card-title">Imaging Tests</h5>
                  <p>
                    <i className="fas fa-check me-2"></i>X-rays, CT scans, MRIs,
                    and PET scans help locate tumors
                  </p>
                  <p>
                    <i className="fas fa-check me-2"></i>Ultrasounds can examine
                    organs and tissues
                  </p>
                  <p>
                    <i className="fas fa-check me-2"></i>These tests are
                    generally painless and non-invasive
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src={myths4} className="card-img-top" alt="Lab testing" />
                <div className="card-body text-start">
                  <h5 className="card-title">Laboratory Tests</h5>
                  <p>
                    <i className="fas fa-check me-2"></i>Blood tests can detect
                    cancer markers
                  </p>
                  <p>
                    <i className="fas fa-check me-2"></i>Urine tests may reveal
                    cancer cells
                  </p>
                  <p>
                    <i className="fas fa-check me-2"></i>Genetic testing can
                    identify hereditary cancer risks
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={myths5}
                  className="card-img-top"
                  alt="Biopsy procedure"
                />
                <div className="card-body text-start">
                  <h5 className="card-title">Biopsy</h5>
                  <p>
                    <i className="fas fa-check me-2"></i>The only definitive way
                    to diagnose cancer
                  </p>
                  <p>
                    <i className="fas fa-check me-2"></i>A small tissue sample
                    is examined under a microscope
                  </p>
                  <p>
                    <i className="fas fa-check me-2"></i>Types include needle,
                    surgical, and liquid biopsy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* block 5 */}
      <section className="text-center py-5 ">
        <div className="container-fluid ">
          <div className="text-center mb-5">
            <h2 className="section-title fw-bold">
              Understanding Your Diagnosis
            </h2>
            <p className="subtitle_myths">
              When you receive your diagnosis, your healthcare team will
              explain:
            </p>
          </div>

          <div className="container">
            <div className="d-flex flex-column flex-md-row align-items-center gap-4 bg-light p-4 rounded shadow-sm">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <img
                  src={myths6}
                  alt="Doctor consulting patient"
                  className="img-fluid  main-img rounded-4"
                  style={{ maxWidth: "300px" }}
                />
              </div>

              {/* Text Section */}
              <div>
                <ul className="list-unstyled text-start mb-0 diagnosis_list">
                  <li>
                    <i className="fas fa-check me-2 text-primary"></i>The type
                    and location of your cancer
                  </li>
                  <li>
                    <i className="fas fa-check me-2 text-primary"></i>The stage
                    (how far the cancer has spread)
                  </li>
                  <li>
                    <i className="fas fa-check me-2 text-primary"></i>The grade
                    (how abnormal the cancer cells look)
                  </li>
                  <li>
                    <i className="fas fa-check me-2 text-primary"></i>Your
                    prognosis and treatment options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* block 6 */}
      <section className=" py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Cancer Treatment: Options and Approaches
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4 col-lg-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="bi bi-hospital "></i>
                </div>
                <h5 className="fw-semibold mb-2">Surgery</h5>
                <ul className="text-start">
                  <li>Often the first treatment for solid tumors</li>
                  <li>May be curative if cancer is caught early</li>
                  <li>Can also be used for symptom relief in advanced cases</li>
                  <li>Modern techniques are increasingly minimally invasive</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="bi bi-capsule-pill"></i>
                </div>
                <h5 className="fw-semibold mb-2">Chemotherapy</h5>
                <ul className="text-start">
                  <li>Uses drugs to kill cancer cells throughout the body</li>
                  <li>
                    Can be given before surgery (neoadjuvant) or after
                    (adjuvant)
                  </li>
                  <li>Side effects vary but are often manageable</li>
                  <li>May be combined with other treatments</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="bi bi-broadcast"></i>
                </div>
                <h5 className="fw-semibold mb-2">Radiation Therapy</h5>
                <ul className="text-start">
                  <li>Uses high-energy rays to destroy cancer cells</li>
                  <li>
                    Can be external (from outside the body) or internal
                    (radioactive implants)
                  </li>
                  <li>Often combined with surgery and/or chemotherapy</li>
                  <li>
                    Side effects are usually localized to the treatment area
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h5 className="fw-semibold mb-2">Immunotherapy</h5>
                <ul className="text-start">
                  <li>Helps your immune system fight cancer</li>
                  <li>Includes checkpoint inhibitors and CAR-T cell therapy</li>
                  <li>
                    May cause different side effects than traditional treatments
                  </li>
                  <li>Showing promise for many cancer types</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="bi bi-bullseye"></i>
                </div>
                <h5 className="fw-semibold mb-2">Targeted Therapy</h5>
                <ul className="text-start">
                  <li>Attacks specific features of cancer cells</li>
                  <li>Often has fewer side effects than chemotherapy</li>
                  <li>Requires testing to identify specific targets</li>
                  <li>May be used alone or with other treatments</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3">
                  <i className="bi bi-slash-circle"></i>
                </div>
                <h5 className="fw-semibold mb-2">Hormone Therapy</h5>
                <ul className="text-start">
                  <li>Blocks hormones that fuel certain cancers</li>
                  <li>Used primarily for breast and prostate cancers</li>
                  <li>Can significantly reduce recurrence risk</li>
                  <li>May be taken for several years</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* block 7 */}
      {/* <section className=" py-5">
        <div className="container-fluid">
            <div className="text-center mb-5">
                <h2 className="section-title">Debunking Common Cancer Myths</h2>
            </div>
            <div className="">
                <div className="row">
                    <div className="col mb-4">
                        <div className="p-4 border rounded shadow-sm bg-white h-100">
                            <p><strong>Myth:</strong> "Cancer is always fatal"</p>
                            <p><strong>Fact:</strong> Cancer survival rates have improved dramatically. Many cancers are
                                now considered chronic diseases that can be managed for years.</p>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="p-4 border rounded shadow-sm bg-white h-100">
                            <p><strong>Myth:</strong> "Cancer treatments are worse than the disease"</p>
                            <p><strong>Fact:</strong> While treatments can have side effects, supportive care has
                                advanced significantly. Many people continue working and maintaining quality of life
                                during treatment.</p>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="p-4 border rounded shadow-sm bg-white h-100">
                            <p><strong>Myth:</strong> "Natural remedies can cure cancer"</p>
                            <p><strong>Fact:</strong> While complementary therapies can support well-being, there's no
                                scientific evidence that natural remedies alone can cure cancer. Always discuss
                                supplements with your healthcare team.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-4 col-12 col-sm-6 col-lg-6">
                        <div className="p-4 border rounded shadow-sm bg-white h-100">
                            <p><strong>Myth:</strong> "Positive thinking can cure cancer"</p>
                            <p><strong>Fact:</strong> While maintaining hope and a positive outlook can improve quality
                                of life, cancer is a complex disease that requires medical treatment.</p>
                        </div>
                    </div>
                    <div className=" col-12 col-sm-3 col-lg-3 mb-4">
                        <div className="p-4 border rounded shadow-sm bg-white h-100">
                            <p><strong>Myth:</strong> "Cancer is preventable if you live a healthy lifestyle"</p>
                            <p><strong>Fact:</strong> While healthy habits reduce risk, cancer can affect anyone. Don't
                                blame yourself if you develop cancer despite living healthily.</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-3 col-lg-3  mb-4'>
                        <div className="p-4 border rounded shadow-sm bg-white h-100">
                            <p><strong>Myth:</strong> "Cancer always comes back"</p>
                            <p><strong>Fact:</strong> Many people are completely cured of cancer. Even when cancer
                                returns, it can often be treated successfully.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

      <section className="testimonial-section-myths">
        <h2 className="mb-3 text-white">Debunking Common Cancer Myths</h2>
        <p></p>
      </section>

      <section className="py-5">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-0 fact_row">
            <div className="col">
              <div className="testimonial-myths">
                <div className="d-flex">
                  <div className="myths_testi_img">🧠</div>
                  <div className="testi_myths_text">
                    <p>
                      <strong>Myth:</strong> "Cancer is always fatal"
                    </p>
                    <p>
                      <strong>Fact:</strong> Cancer survival rates have improved
                      dramatically. Many cancers are now considered chronic
                      diseases that can be managed for years.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="testimonial-myths">
                <div className="d-flex">
                  <div className="myths_testi_img">💉</div>
                  <div className="testi_myths_text">
                    <p>
                      <strong>Myth:</strong> "Cancer treatments are worse than
                      the disease"
                    </p>
                    <p>
                      <strong>Fact:</strong> While treatments can have side
                      effects, supportive care has advanced significantly. Many
                      people continue working and maintaining quality of life
                      during treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="testimonial-myths">
                <div className="d-flex">
                  <div className="myths_testi_img">🌿</div>
                  <div className="testi_myths_text">
                    <p>
                      <strong>Myth:</strong> "Natural remedies can cure cancer"
                    </p>
                    <p>
                      <strong>Fact:</strong> While complementary therapies can
                      support well-being, there's no scientific evidence that
                      natural remedies alone can cure cancer. Always discuss
                      supplements with your healthcare team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col fact_row_lastrow">
              <div className="testimonial-myths">
                <div className="d-flex">
                  <div className="myths_testi_img">🔁</div>
                  <div className="testi_myths_text">
                    <p>
                      <strong>Myth:</strong> "Cancer always comes back"
                    </p>
                    <p>
                      <strong>Fact:</strong> Many people are completely cured of
                      cancer. Even when cancer returns, it can often be treated
                      successfully.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col fact_row_lastrow">
              <div className="testimonial-myths">
                <div className="d-flex">
                  <div className="myths_testi_img">😊</div>
                  <div className="testi_myths_text">
                    <p>
                      <strong>Myth:</strong> "Positive thinking can cure cancer"
                    </p>
                    <p>
                      <strong>Fact:</strong> While maintaining hope and a
                      positive outlook can improve quality of life, cancer is a
                      complex disease that requires medical treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-myths">
                <div className="d-flex">
                  <div className="myths_testi_img">🥗</div>
                  <div className="testi_myths_text">
                    <p>
                      <strong>Myth:</strong> "Cancer is preventable if you live
                      a healthy lifestyle"
                    </p>
                    <p>
                      <strong>Fact:</strong> While healthy habits reduce risk,
                      cancer can affect anyone. Don't blame yourself if you
                      develop cancer despite living healthily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* block 8 */}
      <section className="py-5 bg-white">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Living with Cancer: Support and Resources
          </h2>
        </div>

        <div className="container my-5 myths_stpe">
          <div className="step-section">
            <div className="step-number">01</div>
            <div className="step-card">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-6 col-sm-6">
                  <h5 className="fw-bold"> Building Your Support Team</h5>
                  <ul className="ps-4 text-start list-unstyled">
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Oncologists and specialized nurses
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Social
                      workers and patient navigators
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Mental
                      health counselors
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Dietitians and physical therapists
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Family
                      and friends
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Support
                      groups (in-person and online)
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src={myths_step1}
                    alt="Building Your Support Team"
                    className="img-fluid d-none d-lg-block d-md-none  extra-rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="step-section">
            <div className="step-number">02</div>
            <div className="step-card">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-6 col-sm-6">
                  <h5 className="fw-bold"> Managing Side Effects</h5>
                  <ul className="ps-4 text-start list-unstyled">
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Most
                      side effects are temporary and manageable
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Anti-nausea medications can help with chemotherapy
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Fatigue
                      is common but can be addressed
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Nutritional support is important
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Exercise, when appropriate, can improve energy and mood
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src={myths_step2}
                    alt="Managing Side Effects"
                    className="img-fluid d-none d-lg-block d-md-none  extra-rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="step-section">
            <div className="step-number">03</div>
            <div className="step-card">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-6 col-sm-6">
                  <h5 className="fw-bold"> Emotional Support</h5>
                  <ul className="  text-start list-unstyled">
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>It's
                      normal to feel scared, angry, or sad
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Professional counseling can be very helpful
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Support
                      groups connect you with others who understand
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Mind-body practices like meditation may help
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Maintaining connections with loved ones is important
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src={myths_step3}
                    alt="Emotional Support"
                    className="img-fluid d-none d-lg-block d-md-none  extra-rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="step-section">
            <div className="step-number">04</div>
            <div className="step-card">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-6 col-sm-6">
                  <h5 className="fw-bold"> Financial Considerations</h5>
                  <ul className="text-start list-unstyled">
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Cancer
                      treatment can be expensive
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Insurance coverage varies
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Financial counselors can help navigate costs
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Many
                      organizations offer financial assistance
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Social
                      workers can connect you with resources
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    src={myths_step4}
                    alt="Financial Considerations"
                    className="img-fluid d-none d-lg-block d-md-none  extra-rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container ">
            <div className='row'>
                <div className='col-md-5'>
                    <ul className="nav nav-tabs justify-content-center myths_navtab" id="iconTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="connect-tab" data-bs-toggle="tab"
                                data-bs-target="#connect" type="button" role="tab">
                                <i className="fas fa-comments tab-icon-myths"></i>
                                Building Your Support Team
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="create-tab" data-bs-toggle="tab" data-bs-target="#create"
                                type="button" role="tab">
                                <i className="fab fa-firefox-browser tab-icon-myths"></i>
                                Managing Side Effects
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="discover-tab" data-bs-toggle="tab"
                                data-bs-target="#discover" type="button" role="tab">
                                <i className="fas fa-leaf tab-icon-myths"></i>
                                Emotional Support
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="align-tab" data-bs-toggle="tab" data-bs-target="#align"
                                type="button" role="tab">
                                <i className="fas fa-graduation-cap tab-icon-myths"></i>
                                Financial Considerations
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='col-md-7'>
                    <div className="tab-content" id="iconTabContent">
                        <div className="tab-pane  tab-pane-myths fade show active" id="connect" role="tabpanel">
                            <div className=''>
                                <ul className="ps-4 text-start list-unstyled">
                                    <li><i className="fas fa-check me-2 text-primary"></i>Oncologists and specialized
                                        nurses</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Social workers and patient
                                        navigators</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Mental health counselors</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Dietitians and physical
                                        therapists</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Family and friends</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Support groups (in-person and
                                        online)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane  tab-pane-myths fade" id="create" role="tabpanel">
                            <div className=''>
                                <ul className="ps-4 text-start list-unstyled">
                                    <li><i className="fas fa-check me-2 text-primary"></i>Most side effects are
                                        temporary and manageable</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Anti-nausea medications can
                                        help with chemotherapy</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Fatigue is common but can be
                                        addressed</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Nutritional support is
                                        important</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Exercise, when appropriate,
                                        can improve energy and mood</li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane  tab-pane-myths fade" id="discover" role="tabpanel">
                            <div className=''>
                                <ul className="  text-start list-unstyled">
                                    <li><i className="fas fa-check me-2 text-primary"></i>It's normal to feel scared,
                                        angry, or sad</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Professional counseling can be
                                        very helpful</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Support groups connect you
                                        with others who understand</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Mind-body practices like
                                        meditation may help</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Maintaining connections with
                                        loved ones is important</li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane  tab-pane-myths fade" id="align" role="tabpanel">
                            <div className=''>
                                <ul className="text-start list-unstyled">
                                    <li><i className="fas fa-check me-2 text-primary"></i>Cancer treatment can be
                                        expensive</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Insurance coverage varies</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Financial counselors can help
                                        navigate costs</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Many organizations offer
                                        financial assistance</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Social workers can connect you
                                        with resources</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      </section>

      {/* block 8 */}
      <section className="py-5 ">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Questions to Ask Your Healthcare Team
          </h2>
        </div>
        <section className="bg-image-question position-relative text-white">
          <div className="position-absolute top-0 start-0 w-100 h-100  opacity-50"></div>

          <div className="container-fluid position-relative">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-7  col-sm-7">
                <div className="col-lg-12 p-5">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="bg-white text-dark p-4 rounded shadow-sm h-100">
                        <ul className="list-unstyled faq_list">
                          <li>
                            <i className="fas fa-check me-2 text-success"></i>
                            <strong>About Your Diagnosis:</strong>
                          </li>
                          <li className="ms-4">
                            What type of cancer do I have?
                          </li>
                          <li className="ms-4">What stage is it?</li>
                          <li className="ms-4">What is my prognosis?</li>
                          <li className="ms-4">
                            Should I get a second opinion?
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-white text-dark p-4 rounded shadow-sm h-100">
                        <ul className="list-unstyled faq_list">
                          <li>
                            <i className="fas fa-check me-2 text-primary"></i>
                            <strong>About Your Treatment:</strong>
                          </li>
                          <li className="ms-4">
                            What are my treatment options?
                          </li>
                          <li className="ms-4">
                            What are the benefits and risks of each?
                          </li>
                          <li className="ms-4">
                            How will treatment affect my daily life?
                          </li>
                          <li className="ms-4">
                            What side effects should I expect?
                          </li>
                          <li className="ms-4">
                            How will we monitor my progress?
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="bg-white text-dark p-4 rounded shadow-sm h-100">
                        <ul className="list-unstyled faq_list">
                          <li>
                            <i className="fas fa-check me-2 text-primary"></i>
                            <strong>About Support:</strong>
                          </li>
                          <li className="ms-4">
                            What support services are available?
                          </li>
                          <li className="ms-4">How can my family help?</li>
                          <li className="ms-4">
                            Are there support groups I can join?
                          </li>
                          <li className="ms-4">
                            What should I do if I'm struggling emotionally?
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 position-relative">
                <img
                  src={myths_bg}
                  className="img-fluid bg_question_right d-none d-lg-block d-sm-block d-md-none"
                  alt="Example Image"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* block 9 */}
      <section className="py-5 ">
        <div className="text-center mb-5">
          <h2 className="section-title">Prevention and Early Detection</h2>
        </div>
        <div className="container">
          <ul
            className="nav nav-tabs justify-content-center myths_navtab_previous"
            id="iconTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="connect-tab"
                data-bs-toggle="tab"
                data-bs-target="#one_tab"
                type="button"
                role="tab"
              >
                <i className="fas fa-shield-alt me-2 text-primary"></i>
                Prevention and Early Detection
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="create-tab"
                data-bs-toggle="tab"
                data-bs-target="#two_tab"
                type="button"
                role="tab"
              >
                <i className="fas fa-hands-helping me-2 text-primary"></i>
                Resources for Patients and Families
              </button>
            </li>
          </ul>
          <div className="tab-content " id="iconTabContent">
            <div
              className="tab-pane  tab-pane-myths fade show active pt-5"
              id="one_tab"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <h6> Reducing Your Risk </h6>
                  </div>
                  <ul className="ps-4 text-start list-unstyled">
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Don't
                      smoke or use tobacco products
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Limit
                      alcohol consumption
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Maintain
                      a healthy weight
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Exercise
                      regularly
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Eat a
                      diet rich in fruits and vegetables
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Protect
                      your skin from sun exposure
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Get
                      vaccinated (HPV, Hepatitis B)
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Practice
                      safe sex
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <div>
                    <h6>Importance of Screening </h6>
                  </div>
                  <ul className="ps-4 text-start list-unstyled">
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Mammograms for breast cancer
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Colonoscopies for colorectal cancer
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Pap
                      smears for cervical cancer
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Low-dose
                      CT scans for lung cancer (high-risk individuals)
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>PSA
                      tests for prostate cancer (discuss with your doctor)
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <div>
                    <h6>Know Your Body </h6>
                  </div>
                  <ul className="ps-4 text-start list-unstyled">
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Perform
                      self-examinations
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Be aware
                      of changes in your body
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Don't
                      ignore persistent symptoms
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>See your
                      doctor regularly
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Know
                      your family history
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane  tab-pane-myths fade pt-5"
              id="two_tab"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <h6> National Organizations in India</h6>
                  </div>
                  <ul className="ps-4 text-start list-unstyled">
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Indian
                      Cancer Society
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Cancer
                      Patients Aid Association (CPAA)
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Tata
                      Memorial Centre
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>All
                      India Institute of Medical Sciences (AIIMS)
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Kidwai
                      Memorial Institute of Oncology
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Apollo
                      Cancer Institutes
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Fortis
                      Cancer Institute
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Max
                      Cancer Care
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div>
                    <h6>Online Resources</h6>
                  </div>
                  <ul className="ps-4 text-start list-unstyled">
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      <a
                        href="https://www.cancer.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        Cancer.gov (National Cancer Institute - International
                        resource)
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      <a
                        href="https://www.indiancancersociety.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        Indiancancersociety.org
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      <a
                        href="https://www.cpaaonline.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        Cpaaonline.org (Cancer Patients Aid Association)
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      <a
                        href="https://www.tmc.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        Tmc.gov.in (Tata Memorial Centre)
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      <a
                        href="https://www.cancerindia.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        Cancerindia.org.in
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div>
                    <h6>Financial Assistance in India </h6>
                  </div>
                  <ul className="ps-4 text-start list-unstyled">
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Cancer
                      Patients Aid Association (CPAA) Financial Support
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Tata
                      Memorial Centre Patient Welfare schemes
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>PM-JAY
                      (Ayushman Bharat) scheme
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>State
                      government health insurance schemes
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Corporate CSR programs (Tata Trusts, Reliance Foundation)
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Pharmaceutical company patient assistance programs
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Indian
                      Cancer Society support programs
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Local
                      charitable trusts and NGOs
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div>
                    <h6>Government Healthcare Schemes</h6>
                  </div>
                  <ul className="ps-4 text-start list-unstyled">
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Ayushman
                      Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      Rashtriya Swasthya Bima Yojana (RSBY)
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>
                      State-specific health insurance schemes
                    </li>
                    <li>
                      <i className="fas fa-check me-2 text-primary"></i>Employee
                      State Insurance (ESI) for organized sector workers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* block 10 */}
      <section className="py-5 bg-light">
        <div className="text-center mb-5">
          <h2 className="section-title">Final Thoughts</h2>
        </div>
        <div className="container">
          <p>
            Cancer is a serious disease, but it's important to remember that
            treatments continue to improve, and many people go on to live full,
            meaningful lives after a cancer diagnosis. Every person's journey is
            unique, and there is reason for hope.
          </p>
          <p>
            Take your time to process information, ask questions, and build a
            strong support network. Remember that seeking help—whether medical,
            emotional, or practical—is a sign of strength, not weakness.
          </p>
          <p>
            You are more than your diagnosis. While cancer may be part of your
            story, it doesn't define who you are. Focus on what you can control,
            take things one day at a time, and remember that you have people who
            care about you and want to help.
          </p>
          <h6>Important Reminder</h6>
          <p>
            This information is for educational purposes only and should not
            replace professional medical advice. Always consult with your
            healthcare team about your specific situation, treatment options,
            and concerns. Every person's cancer journey is unique, and your
            medical team is the best source of personalized information and
            care.
          </p>
          <p className="fst-italic">
            If you or someone you know is struggling with a cancer diagnosis,
            please reach out to healthcare professionals, cancer support
            organizations, or mental health services for help and support.
          </p>
        </div>
      </section>
    </>
  );
}

export default Myths;
