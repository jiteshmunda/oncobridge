import React from 'react';

function Faq() {
    return (
        <section className="section py-5 faq_block">
            <div className="container">
                <h2 className='mb-4 section-title'>
                    Precision Medicine, Molecular Profiling & Second Opinion Services
                </h2>
                <p>
                    We offer specialised services in <strong> precision oncology,</strong>
                    including <strong>molecular tumour profiling </strong> and <strong> expert second opinions</strong>  for
                    individuals seeking clarity, personalised care guidance, and advanced
                    diagnostic insights. Below are answers to commonly asked questions.
                </p>
                <p>
                    For personalised assistance, Please reach out to us at
                    <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                </p>
            </div>
            <div className="container">
                <div className="accordion" id="faqAccordion">
                    {/* Item 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                1. Why should I consider getting a second opinion for a cancer diagnosis?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse "
                            aria-labelledby="headingOne"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p> A second opinion can</p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2"></i>Confirm your diagnosis</li>
                                    <li><i className="fas fa-check me-2"></i>Offer alternative or more precise treatment options</li>
                                    <li><i className="fas fa-check me-2"></i>Potentially reduce the intensity or invasiveness of treatment</li>
                                    <li><i className="fas fa-check me-2"></i>Improve quality of life through tailored recommendations</li>
                                    <li><i className="fas fa-check me-2"></i>Identify new therapies or clinical trials based on the latest scientific evidence</li>
                                </ul>
                                <p>
                                    Second opinions are especially valuable in <strong>  rare cancers, complex cases, </strong> or when you're uncertain about your
                                    current treatment plan.  Please reach out to us at
                                    <a href='mailto:care@oncobridge.in' className='text-primary'>  care@oncobridge.in</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                2. When is the right time to seek a second opinion?
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    You can seek a second opinion at any of the following stages:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2"></i>Right after your initial cancer diagnosis, before starting treatment</li>
                                    <li><i className="fas fa-check me-2"></i>If test results are unclear or raise doubts</li>
                                    <li><i className="fas fa-check me-2"></i>When a rare or complex type of cancer is involved</li>
                                    <li><i className="fas fa-check me-2"></i>If you're advised to undergo major surgery or high-risk treatment</li>
                                    <li><i className="fas fa-check me-2"></i>If you're already in treatment but not responding well</li>
                                    <li><i className="fas fa-check me-2"></i>If your insurance provider requires it</li>
                                </ul>
                                <p>
                                    Our services are accessible at any stage of your cancer journey.
                                    Please reach out to us at  <a href='mailto:care@oncobridge.in' className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                3. What does a second opinion involve?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    A second opinion typically includes:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i>A detailed review of your <strong> medical records, pathology slides, biomarker and genomic test results, and imaging </strong> </li>
                                    <li><i className="fas fa-check me-2 "></i>Evaluation by a relevant oncology specialist or  <strong> a multidisciplinary review panel </strong></li>
                                    <li><i className="fas fa-check me-2 "></i>A comprehensive report outlining diagnosis confirmation (if applicable), revised staging (if needed), and personalised treatment options</li>
                                    <li><i className="fas fa-check me-2 "></i>Consideration of  <strong> available treatments internationally</strong></li>
                                </ul>
                                <p>
                                    We also facilitate virtual consults, eliminating the need for immediate travel. Please reach out to us at
                                    <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour "
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                4. How do I prepare for a second opinion?
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    To make the most of your consultation:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li>
                                        <i className="fas fa-check me-2 "></i>Gather and digitise all relevant medical documents:
                                        <ul className="ms-* mt-2 ms-4">
                                            <li className='list-style-disc'>Pathology & biopsy reports</li>
                                            <li className='list-style-disc'>Imaging reports and CDs (MRI, PET-CT, etc.)</li>
                                            <li className='list-style-disc'>Surgical notes, discharge summaries, and previous treatment history</li>
                                        </ul>
                                    </li>
                                    <li><i className="fas fa-check me-2 "></i>Ensure all documents are in <strong> English </strong> (translated if necessary)</li>
                                    <li><i className="fas fa-check me-2 "></i>Write down specific questions or concerns about your diagnosis</li>
                                    <li><i className="fas fa-check me-2 "></i>Optionally, involve a caregiver for support</li>
                                </ul>
                                <p>
                                    Our coordinators can help you with secure transfer of your records and offer a checklist. Please reach out to us at
                                    <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 5 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                            >
                                5. What if the second opinion differs from the first?
                            </button>
                        </h2>
                        <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    If the second opinion varies from the original diagnosis or plan:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li>
                                        <i className="fas fa-check me-2 "></i>
                                        You may return to your current doctor with the new insights and consider an adjusted approach
                                    </li>
                                    <li><i className="fas fa-check me-2 "></i>You might choose to follow the new recommendations independently</li>
                                    <li><i className="fas fa-check me-2 "></i>	We can facilitate a discussion between your treating doctor and our consulting specialist to <strong> align on a unified plan, </strong> ensuring continuity of care</li>
                                </ul>
                                <p>
                                    Differing opinions are common and often helpful in choosing the best path forward. Please reach out to us at
                                    <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 6 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                            >
                                6. How do I contact your team for a second opinion?
                            </button>
                        </h2>
                        <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Please reach out to us at <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                                <p>
                                    Our team will guide you on the next steps, record submissions, and consultation timelines.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 7 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven"
                                aria-expanded="false"
                                aria-controls="collapseSeven"
                            >
                                7. Are second opinions covered by insurance?
                            </button>
                        </h2>
                        <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Second opinions are generally <strong> self-funded </strong>  or covered by  <strong> private health insurance.</strong> We can assist you with:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i>Transparent cost estimates </li>
                                    <li><i className="fas fa-check me-2 "></i>Payment plans (if applicable)</li>
                                    <li><i className="fas fa-check me-2 "></i>Letters for insurance claims or reimbursement, if needed</li>
                                </ul>
                                <p>
                                    We also suggest checking with your insurer regarding international consultation benefits or charitable support options.
                                    Please reach out to us at  <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 8 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEight"
                                aria-expanded="false"
                                aria-controls="collapseEight"
                            >
                                8. Can I get a second opinion remotely?
                            </button>
                        </h2>
                        <div
                            id="collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEight"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Yes. Our <strong> telehealth-enabled model </strong> allows:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i>Remote consultations from your home</li>
                                    <li><i className="fas fa-check me-2 "></i>Secure upload of medical records via email or patient portals</li>
                                    <li><i className="fas fa-check me-2 "></i>Written opinion reports and/or video consultations</li>
                                    <li><i className="fas fa-check me-2 "></i>Timely guidance without the need for travel or visa processes</li>
                                </ul>
                                <p>
                                    This is especially useful for National, International or regionally distant patients. Neighbouring countries Please reach out to us at
                                    <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 9 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingNine">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseNine"
                                aria-expanded="false"
                                aria-controls="collapseNine"
                            >
                                9. What is precision medicine in cancer care?
                            </button>
                        </h2>
                        <div
                            id="collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingNine"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Precision medicine refers to designing treatment based on the unique  <strong> genomic, molecular, and biological profile  </strong> of a patient’s cancer. It helps in:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i>Personalising treatment strategies</li>
                                    <li><i className="fas fa-check me-2 "></i>Predicting response to therapies</li>
                                    <li><i className="fas fa-check me-2 "></i>Avoiding unnecessary or ineffective treatments</li>
                                    <li><i className="fas fa-check me-2 "></i>Matching patients to targeted drugs or trials</li>
                                </ul>
                                <p>
                                    Please reach out to us at <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 10 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTen">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTen"
                                aria-expanded="false"
                                aria-controls="collapseTen"
                            >
                                10. What is molecular profiling, and how does it help?
                            </button>
                        </h2>
                        <div
                            id="collapseTen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTen"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Molecular profiling (also called <strong> genomic testing or biomarker analysis  </strong>) identifies:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i>Genetic mutations</li>
                                    <li><i className="fas fa-check me-2 "></i>Protein expressions</li>
                                    <li><i className="fas fa-check me-2 "></i>Tumour markers</li>
                                </ul>
                                <p>
                                    This information is used to match patients with <strong> targeted therapies, </strong> assess <strong> resistance to drugs, </strong>  or recommend
                                    <strong> immunotherapy </strong> based on tumour behaviour. 
                                    Please reach out to us at <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 11 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEleven">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEleven"
                                aria-expanded="false"
                                aria-controls="collapseEleven"
                            >
                                11. Who should consider molecular tumour profiling?
                            </button>
                        </h2>
                        <div
                            id="collapseEleven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEleven"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    We recommend profiling for:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i>Patients with <strong> advanced, metastatic, or treatment-resistant cancers </strong> </li>
                                    <li><i className="fas fa-check me-2 "></i>Those diagnosed with <strong> rare tumours or cancers of unknown origin </strong> </li>
                                    <li><i className="fas fa-check me-2 "></i>Individuals looking to explore <strong> targeted or immunotherapies </strong> </li>
                                    <li><i className="fas fa-check me-2 "></i>Anyone seeking a more precise, biology-driven treatment approach</li>
                                </ul>
                                <p>
                                    Please reach out to us at <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 12 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwelve">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwelve"
                                aria-expanded="false"
                                aria-controls="collapseTwelve"
                            >
                                12. What samples are needed for molecular profiling?
                            </button>
                        </h2>
                        <div
                            id="collapseTwelve"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwelve"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Depending on the test type:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i><strong>FFPE tumour blocks or slides </strong> (preferred)  </li>
                                    <li><i className="fas fa-check me-2 "></i><strong>Liquid biopsies </strong>  (blood sample) – where tissue is unavailable </li>
                                    <li><i className="fas fa-check me-2 "></i><strong>Fresh frozen samples </strong> – rarely required, but possible in specific cases</li>
                                </ul>
                                <p>
                                    We can guide you on lab selection and sample preparation.
                                </p>
                                <p>
                                    Please reach out to us at <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 13 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThirteen">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThirteen"
                                aria-expanded="false"
                                aria-controls="collapseThirteen"
                            >
                                13. How long does it take to receive molecular profiling results?
                            </button>
                        </h2>
                        <div
                            id="collapseThirteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThirteen"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Turnaround time depends on the type of panel selected:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i><strong>Standard panels: </strong> 7–10 working days </li>
                                    <li><i className="fas fa-check me-2 "></i><strong>Comprehensive/whole-exome panels:</strong> 10–15 working days</li>
                                    <li><i className="fas fa-check me-2 "></i><strong>Liquid biopsy:</strong> 5–7 working days</li>
                                </ul>
                                <p>
                                    A detailed interpretive report with therapeutic implications is provided.
                                    Please reach out to us at <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 14 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFourteen">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFourteen"
                                aria-expanded="false"
                                aria-controls="collapseFourteen"
                            >
                                14. Can molecular profiling be done during treatment?
                            </button>
                        </h2>
                        <div
                            id="collapseFourteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFourteen"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Yes. Profiling can be helpful at <strong> any point,</strong>  especially if:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i>Your current therapy isn't working </li>
                                    <li><i className="fas fa-check me-2 "></i>You’re exploring second-line or third-line treatments</li>
                                    <li><i className="fas fa-check me-2 "></i>You're considering <strong> clinical trial enrolment</strong></li>
                                </ul>
                                <p>
                                    Insights gained can supplement or redirect existing treatment strategies.
                                </p>
                                <p>
                                    Please reach out to us at <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 15 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFiveteen">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFiveteen"
                                aria-expanded="false"
                                aria-controls="collapseFiveteen"
                            >
                                15. How do I send my medical reports or biopsy material?
                            </button>
                        </h2>
                        <div
                            id="collapseFiveteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFiveteen"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    You can: Please reach out to us at  <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i>Email digitised documents (PDF preferred) </li>
                                    <li><i className="fas fa-check me-2 "></i>Coordinate biopsy/sample shipping via our logistics support team</li>
                                    <li><i className="fas fa-check me-2 "></i>Use secure transfer platforms if required</li>
                                </ul>
                                <p>
                                    We’ll confirm receipt and guide you on the rest of the process.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 16 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSixteen">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSixteen"
                                aria-expanded="false"
                                aria-controls="collapseSixteen"
                            >
                                16. Can you help recommend labs for testing?
                            </button>
                        </h2>
                        <div
                            id="collapseSixteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSixteen"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Yes. We work with a network of trusted labs for:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i><strong> NGS Panels (DNA/RNA-based)</strong></li>
                                    <li><i className="fas fa-check me-2 "></i><strong>  Liquid Biopsies </strong></li>
                                    <li><i className="fas fa-check me-2 "></i><strong>  Immunohistochemistry (IHC) </strong></li>
                                    <li><i className="fas fa-check me-2 "></i><strong>  Whole Exome/Transcriptome Sequencing </strong></li>
                                </ul>
                                <p>
                                    Our team can assist in <strong>  lab selection, test ordering,</strong>  and <strong>
                                        report interpretation.</strong>  Please reach out to us at <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 17 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeventeen">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSeventeen"
                                aria-expanded="false"
                                aria-controls="collapseSeventeen"
                            >
                                17. Do you collaborate with doctors or care providers?
                            </button>
                        </h2>
                        <div
                            id="collapseSeventeen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeventeen"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Yes. We actively support healthcare professionals in:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i>Interpreting complex molecular data</li>
                                    <li><i className="fas fa-check me-2 "></i>Providing tumour board-style opinions</li>
                                    <li><i className="fas fa-check me-2 "></i>Customising treatment recommendations</li>
                                    <li><i className="fas fa-check me-2 "></i>Identifying appropriate global clinical trials</li>
                                </ul>
                                <p>
                                    Clinicians are welcome to refer patients directly or request co-consultation. Please reach out to us at
                                    <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 18 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEighteen">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEighteen"
                                aria-expanded="false"
                                aria-controls="collapseEighteen"
                            >
                                18. Are your services available globally?
                            </button>
                        </h2>
                        <div
                            id="collapseEighteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEighteen"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    Absolutely. All services—molecular analysis, second opinions, report interpretation, and expert
                                    consults—are available to anyone seeking treatment in India and medical tourism patient
                                    physically in India . Please reach out to us at
                                    <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i>Interpreting complex molecular data</li>
                                    <li><i className="fas fa-check me-2 "></i>Providing tumour board-style opinions</li>
                                    <li><i className="fas fa-check me-2 "></i>Customising treatment recommendations</li>
                                    <li><i className="fas fa-check me-2 "></i>Identifying appropriate global clinical trials</li>
                                </ul>
                                <p>
                                    Clinicians are welcome to refer patients directly or request co-consultation. Please reach out to us at
                                    <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 19 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingNineteen">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseNineteen"
                                aria-expanded="false"
                                aria-controls="collapseNineteen"
                            >
                                19. What types of cancer are commonly supported?
                            </button>
                        </h2>
                        <div
                            id="collapseNineteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingNineteen"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>
                                    We support a wide spectrum of cancers, including:
                                </p>
                                <ul className="list-unstyled faq_list">
                                    <li><i className="fas fa-check me-2 "></i><strong> Lung, Breast, Colorectal, Prostate</strong></li>
                                    <li><i className="fas fa-check me-2 "></i><strong> Brain Tumours, Head & Neck Cancers </strong></li>
                                    <li><i className="fas fa-check me-2 "></i><strong> Blood Cancers (Leukaemia, Lymphoma, Myeloma) </strong></li>
                                    <li><i className="fas fa-check me-2 "></i><strong> Ovarian, Cervical, Pancreatic, and Rare Cancers </strong></li>
                                </ul>
                                <p>
                                    We customise recommendations based on tumour biology, not just cancer type. Please reach out to us at
                                    <a href="mailto:care@oncobridge.in" className='text-primary'> care@oncobridge.in </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
