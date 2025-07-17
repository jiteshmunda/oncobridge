import React from 'react';
import myths1 from '../assets/myths1.jpg';
import { Link } from 'react-router-dom';
import myths2 from '../assets/myths2.jpg';
import myths3 from '../assets/myths3.jpg';
import myths4 from '../assets/myths4.jpg';
import myths5 from '../assets/myths5.jpg';
import myths6 from '../assets/myths6.jpg';
function Myths() {
    return (
        <>
            <section className="text-center">
                <div className='container-fluid px-0'>
                    <div className='row gx-0 align-items-center'>
                        <div className="bg-image-partners d-flex justify-content-left align-items-center text-center text-white vh-100">
                            <div className="overlay-content">
                                <div className='col-md-7 p-3 ms-lg-5 ms-sm-5 ms-md-5'>
                                    <h2 className="fw-bold text-white">Cancer: Understanding Facts, Dispelling Myths</h2>
                                    <p className="lead">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* block 1 */}
            <section className="text-center py-5">
                <div className='container '>
                    <div className='row  align-items-center'>
                        <div className='col-md-7'>
                            <div className="text-start  mb-3">
                                <h2 className="section-title fw-bold">A Message to Patients and Families</h2>
                            </div>
                            <p className='text-start'>
                                Receiving a cancer diagnosis can feel overwhelming, and it's natural to have many questions and concerns.
                                This guide aims to provide you with accurate, evidence-based information to help you understand cancer better
                                and make informed decisions about your care. Remember,
                                you're not alone in this journey, and knowledge can be empowering.
                            </p>
                            <p className='text-start'>
                                As a partner, OHPL is committed to collaborating with Iylon to advance precision oncology,
                                ensuring that patients across our network benefit from cutting-edge, evidence-based treatment plans.
                                By integrating Iylon’s expertise in molecular oncology, radiology, and AI-driven diagnostics, we aim to
                                enhance patient outcomes and expand access to personalized cancer care. Together, we are dedicated to supporting Iylon’s
                                mission to reduce cancer mortality and make precision oncology accessible globally, including through initiatives like the
                                Iylon Foundation, which provides free treatments to underserved patients.
                            </p>
                        </div>
                        <div className='col-md-5 '>
                            <Link to="https://app.iylon.com/#/home">
                                <img src={myths1} alt="myths1" className='img-fluid main-img extra-rounded' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* block 2 */}
            <section className="text-center py-5 bg-light">
                <div className='container-fluid '>
                    <div className='row align-items-center'>
                        <div className='col-md-5'>
                            <img src={myths2} alt="caner cell body" className='img-fluid main-img extra-rounded' />
                        </div>
                        <div className='col-md-7'>
                            <div className="text-start ">
                                <h2 className="section-title fw-bold">
                                    Understanding Cancer: The Basics</h2>
                            </div>
                            <p className='text-start'>
                                Cancer occurs when cells in your body begin to grow uncontrollably. Unlike normal cells that grow, divide, and die in an orderly way,
                                cancer cells continue to grow and form new, abnormal cells.
                                These cells can form tumors and may spread to other parts of the body.
                            </p>
                            <div className='text-start'>
                                <h5>What Cancer Is NOT:</h5>
                                <div>
                                    <ul>
                                        <li>Cancer is not a single disease—it’s actually more than 100 different diseases.</li>
                                        <li>It’s not always a death sentence—many cancers are highly treatable, especially when caught early.</li>
                                        <li>It’s not contagious—you cannot catch cancer from another person.</li>
                                        <li>It’s not always hereditary—only 5–10% of cancers are directly inherited.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* tab block 3 */}
            <section className="text-center py-5">
                <div className='container-fluid '>
                    <div className="text-center mb-5">
                        <h2 className="section-title fw-bold">
                            Common Types of Cancer</h2>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-md-12'>
                            <ul className="nav nav-pills mb-5 justify-content-center" id="pills-tab" role="tablist">
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
                                    aria-labelledby="pills-patients-tab">
                                    <div className='tab_title_cancer'>
                                        <h3 className='text-center text-black mb-5'>
                                            Breast Cancer
                                        </h3>
                                    </div>
                                    <div className='container'>
                                        <div className='row g-4 align-items-stretch'>
                                            <div className='col-md-6'>
                                                <div className="card myths_cards  h-100">
                                                    <div className="card-header">
                                                        <h5 className="card-title mb-0">Facts</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className='types_cancer_list'>
                                                            <ul className='list-unstyled text-start'>
                                                                <li><i className="fas fa-check me-2"></i>Most common cancer in women worldwide, but men can also develop breast cancer.</li>
                                                                <li><i className="fas fa-check me-2"></i>Early detection through mammograms significantly improves outcomes.</li>
                                                                <li><i className="fas fa-check me-2"></i>Five-year survival rate is over 90% when caught early.</li>
                                                                <li><i className="fas fa-check me-2"></i>Treatment options include surgery, chemotherapy, radiation, hormone therapy, and targeted drugs.</li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="card myths_cards  h-100">
                                                    <div className="card-header">
                                                        <h5 className="card-title mb-0">Myths Dispelled</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className='types_cancer_list'>
                                                            <ul className='list-unstyled text-start'>
                                                                <li>
                                                                    <i className="fas fa-check me-2"></i>
                                                                    Myth: Only women with a family history get breast cancer
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check me-2 "></i>
                                                                    Fact: About 85% of breast cancers occur in women with no family history
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check me-2 "></i>
                                                                    Myth:Finding a lump means you have cancer
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check me-2"></i>
                                                                    Fact: 80% of breast lumps are benign (non-cancerous)
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
                                    aria-labelledby="pills-patients-tab">
                                    <div className='tab_title_cancer'>
                                        <h3 className='text-center text-black mb-5'>
                                            Lung Cancer
                                        </h3>
                                    </div>
                                    <div className='container'>
                                        <div className='row g-4 align-items-stretch'>
                                            <div className='col-md-6'>
                                                <div className="card myths_cards  h-100">
                                                    <div className="card-header">
                                                        <h5 className="card-title mb-0">Facts</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className='types_cancer_list'>
                                                            <ul className='list-unstyled text-start'>
                                                                <li><i className="fas fa-check me-2 "></i>Leading cause of cancer death worldwide</li>
                                                                <li><i className="fas fa-check me-2 "></i>Smoking is the primary risk factor, but non-smokers can also develop lung cancer</li>
                                                                <li><i className="fas fa-check me-2 "></i>Symptoms may include persistent cough, chest pain, shortness of breath, and coughing up blood</li>
                                                                <li><i className="fas fa-check me-2 "></i>Treatment depends on type (small cell vs. non-small cell) and stage</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="card myths_cards  h-100">
                                                    <div className="card-header">
                                                        <h5 className="card-title mb-0">Myths Dispelled</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className='types_cancer_list'>
                                                            <ul className="list-unstyled text-start">
                                                                <li><i className="fas fa-check me-2"></i>Myth: Only smokers get lung cancer</li>
                                                                <li><i className="fas fa-check me-2"></i>Fact: 10–15% of lung cancers occur in people who have never smoked</li>
                                                                <li><i className="fas fa-check me-2"></i>Myth: Switching to light cigarettes reduces risk</li>
                                                                <li><i className="fas fa-check me-2"></i>Fact: There is no safe level of smoking; all tobacco products increase cancer risk</li>
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
                                    aria-labelledby="pills-patients-tab">
                                    <div className='tab_title_cancer'>
                                        <h3 className='text-center text-black mb-5'>
                                            Colorectal Cancer
                                        </h3>
                                    </div>
                                    <div className='container'>
                                        <div className='row g-4 align-items-stretch'>
                                            <div className='col-md-6'>
                                                <div className="card myths_cards  h-100">
                                                    <div className="card-header">
                                                        <h5 className="card-title mb-0">Facts</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className='types_cancer_list'>
                                                            <ul className="list-unstyled text-start">
                                                                <li><i className="fas fa-check me-2"></i>Third most common cancer worldwide</li>
                                                                <li><i className="fas fa-check me-2"></i>Screening can prevent cancer by detecting and removing precancerous polyps</li>
                                                                <li><i className="fas fa-check me-2"></i>Symptoms may include changes in bowel habits, blood in stool, and abdominal pain</li>
                                                                <li><i className="fas fa-check me-2"></i>Treatment often involves surgery, and may include chemotherapy and radiation</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="card myths_cards  h-100">
                                                    <div className="card-header">
                                                        <h5 className="card-title mb-0">Myths Dispelled</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className='types_cancer_list'>
                                                            <ul className="list-unstyled text-start">
                                                                <li><i className="fas fa-check me-2"></i>Myth: Colorectal cancer only affects older adults</li>
                                                                <li><i className="fas fa-check me-2"></i>Fact: While more common after age 50, rates are rising in younger adults</li>
                                                                <li><i className="fas fa-check me-2"></i>Myth: Colonoscopies are always painful</li>
                                                                <li><i className="fas fa-check me-2"></i>Fact: Most people tolerate the procedure well with sedation</li>
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
                                    aria-labelledby="pills-patients-tab">
                                    <div className='tab_title_cancer'>
                                        <h3 className='text-center text-black mb-5'>
                                            Prostate Cancer
                                        </h3>
                                    </div>
                                    <div className='container'>
                                        <div className='row g-4 align-items-stretch'>
                                            <div className='col-md-6'>
                                                <div className="card myths_cards  h-100">
                                                    <div className="card-header">
                                                        <h5 className="card-title mb-0">Facts</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className='types_cancer_list'>
                                                            <ul className="list-unstyled text-start">
                                                                <li><i className="fas fa-check me-2"></i>Second most common cancer in men</li>
                                                                <li><i className="fas fa-check me-2"></i>Often grows slowly and may not cause symptoms initially</li>
                                                                <li><i className="fas fa-check me-2"></i>PSA testing can help with early detection</li>
                                                                <li><i className="fas fa-check me-2"></i>Treatment options range from active surveillance to surgery and radiation</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="card myths_cards  h-100">
                                                    <div className="card-header">
                                                        <h5 className="card-title mb-0">Myths Dispelled</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className='types_cancer_list'>
                                                            <ul className="list-unstyled text-start">
                                                                <li><i className="fas fa-check me-2"></i>Myth: Prostate cancer is always aggressive</li>
                                                                <li><i className="fas fa-check me-2"></i>Fact: Many prostate cancers grow slowly and may not require immediate treatment</li>
                                                                <li><i className="fas fa-check me-2"></i>Myth: Prostate cancer treatment always causes impotence</li>
                                                                <li><i className="fas fa-check me-2"></i>Fact: Modern treatments often preserve sexual function</li>
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
                <div className='container-fluid '>
                    <div className="text-center mb-5">
                        <h2 className="section-title fw-bold">
                            Cancer Diagnosis: What to Expect</h2>
                        <p className='subtitle_myths'>
                            Common Diagnostic Tests
                        </p>
                    </div>
                    <div className='row g-4 diagnosis_text'>
                        {/* Imaging Tests Card  */}
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <img src={myths3} className="card-img-top" alt="Imaging equipment" />
                                <div className="card-body text-start">
                                    <h5 className="card-title">Imaging Tests</h5>
                                    <p><i className="fas fa-check me-2"></i>X-rays, CT scans, MRIs, and PET scans help locate tumors</p>
                                    <p><i className="fas fa-check me-2"></i>Ultrasounds can examine organs and tissues</p>
                                    <p><i className="fas fa-check me-2"></i>These tests are generally painless and non-invasive</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <img src={myths4} className="card-img-top" alt="Lab testing" />
                                <div className="card-body text-start">
                                    <h5 className="card-title">Laboratory Tests</h5>
                                    <p><i className="fas fa-check me-2"></i>Blood tests can detect cancer markers</p>
                                    <p><i className="fas fa-check me-2"></i>Urine tests may reveal cancer cells</p>
                                    <p><i className="fas fa-check me-2"></i>Genetic testing can identify hereditary cancer risks</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <img src={myths5} className="card-img-top" alt="Biopsy procedure" />
                                <div className="card-body text-start">
                                    <h5 className="card-title">Biopsy</h5>
                                    <p><i className="fas fa-check me-2"></i>The only definitive way to diagnose cancer</p>
                                    <p><i className="fas fa-check me-2"></i>A small tissue sample is examined under a microscope</p>
                                    <p><i className="fas fa-check me-2"></i>Types include needle, surgical, and liquid biopsy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* block 5 */}
            <section className="text-center py-5 ">
                <div className='container-fluid '>
                    <div className="text-center mb-5">
                        <h2 className="section-title fw-bold">
                            Understanding Your Diagnosis</h2>
                        <p className='subtitle_myths'>
                            When you receive your diagnosis, your healthcare team will explain:
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
                                    style={{ maxWidth: '300px' }}
                                />
                            </div>

                            {/* Text Section */}
                            <div>
                                <ul className="list-unstyled text-start mb-0 diagnosis_list">
                                    <li><i className="fas fa-check me-2 text-primary"></i>The type and location of your cancer</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>The stage (how far the cancer has spread)</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>The grade (how abnormal the cancer cells look)</li>
                                    <li><i className="fas fa-check me-2 text-primary"></i>Your prognosis and treatment options</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* block 6  */}
            <section className=" py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Cancer Treatment: Options and Approaches</h2>
                    </div>

                    <div className="row g-4">
                        <div class="col-md-4 col-lg-4">
                            <div class="feature-card text-center p-4 h-100">
                                <div class="feature-icon mb-3"><i class="bi bi-hospital "></i></div>
                                <h5 class="fw-semibold mb-2">Surgery</h5>
                                <ul class="text-start">
                                    <li>Often the first treatment for solid tumors</li>
                                    <li>May be curative if cancer is caught early</li>
                                    <li>Can also be used for symptom relief in advanced cases</li>
                                    <li>Modern techniques are increasingly minimally invasive</li>
                                </ul>

                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="feature-card text-center p-4 h-100">
                                <div class="feature-icon mb-3"><i class="bi bi-capsule-pill"></i></div>
                                <h5 class="fw-semibold mb-2">Chemotherapy</h5>
                                <ul class="text-start">
                                    <li>Uses drugs to kill cancer cells throughout the body</li>
                                    <li>Can be given before surgery (neoadjuvant) or after (adjuvant)</li>
                                    <li>Side effects vary but are often manageable</li>
                                    <li>May be combined with other treatments</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="feature-card text-center p-4 h-100">
                                <div class="feature-icon mb-3"><i class="bi bi-broadcast"></i></div>
                                <h5 class="fw-semibold mb-2">Radiation Therapy</h5>
                                <ul class="text-start">
                                    <li>Uses high-energy rays to destroy cancer cells</li>
                                    <li>Can be external (from outside the body) or internal (radioactive implants)</li>
                                    <li>Often combined with surgery and/or chemotherapy</li>
                                    <li>Side effects are usually localized to the treatment area</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="feature-card text-center p-4 h-100">
                                <div class="feature-icon mb-3"><i class="bi bi-shield-check"></i></div>
                                <h5 class="fw-semibold mb-2">Immunotherapy</h5>
                                <ul class="text-start">
                                    <li>Helps your immune system fight cancer</li>
                                    <li>Includes checkpoint inhibitors and CAR-T cell therapy</li>
                                    <li>May cause different side effects than traditional treatments</li>
                                    <li>Showing promise for many cancer types</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="feature-card text-center p-4 h-100">
                                <div class="feature-icon mb-3"><i class="bi bi-bullseye"></i></div>
                                <h5 class="fw-semibold mb-2">Targeted Therapy</h5>
                                <ul class="text-start">
                                    <li>Attacks specific features of cancer cells</li>
                                    <li>Often has fewer side effects than chemotherapy</li>
                                    <li>Requires testing to identify specific targets</li>
                                    <li>May be used alone or with other treatments</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="feature-card text-center p-4 h-100">
                                <div class="feature-icon mb-3"><i class="bi bi-slash-circle"></i></div>
                                <h5 class="fw-semibold mb-2">Hormone Therapy</h5>
                                <ul class="text-start">
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
            {/* block 7  */}
            <section className=" py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Debunking Common Cancer Myths</h2>
                    </div>
                    <div className="row g-4">
                        sdfasdas
                    </div>
                </div>
            </section>

        </>
    );
}

export default Myths;
