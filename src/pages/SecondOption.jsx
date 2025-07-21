import React from 'react';
import { Link } from 'react-router-dom';
function SecondOption() {
    return (
        <>
        <section className="text-center">
        <div className='container-fluid px-0'>
          <div className='row gx-0 align-items-left'>
            <div className="bg-image-second-opt d-flex justify-content-left align-items-center text-left text-white ">
              <div className="overlay-content">
                <div className='col-md-12 p-3 ms-lg-5 ps-lg-4'>
                  <h2 className="fw-bold text-white">Second Opinion</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
        <section className="section py-5 terms_block mt-5 mb-4">
            {/* <div className="container">
                <h2>Second Opinion</h2>
            </div> */}
            <div className="container py-4">
                <div className="row g-3">
                    <div className="col-6 col-md-4">
                        <div className="second-option-card text-center p-4 h-100 p-3 shadow-sm">
                            <div className="stat-content">
                                <p>
                                    Access to leading global oncologists, personalized insights, peace of mind
                                </p>
                                <Link to="/patients" className="read-more-btn-white">For Patients </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="second-option-card text-center p-4 h-100 p-3 shadow-sm">
                            <div className="stat-content">
                                <p>
                                   Expand your expertise, support your patients with external validation, collaborate seamlessly.
                                </p>
                                <Link to="/hospital" className="read-more-btn-white">For Hospitals  </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="second-option-card text-center p-4 h-100 p-3 shadow-sm">
                            <div className="stat-content">
                                <p>
                                  Ensure appropriate care, manage costs effectively, enhance policyholder s atisfaction.
                                </p>
                                <Link to="/insurance" className="read-more-btn-white">For Insurance Providers  </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </>
    );
}

export default SecondOption;
