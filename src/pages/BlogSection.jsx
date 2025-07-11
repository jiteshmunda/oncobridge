import React from 'react';

function Terms() {
  return (
    <section className="section py-5 text-center">
      <div className="container">
        <h2>Terms OncoBridge</h2>
         <div className="container">
        <h2 className="mb-5 text-center">Insights from OncoBridge</h2>
        <div className="row">
          {/* Blog 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://placehold.co/600x400"
                className="card-img-top"
                alt="Second opinion for cancer"
              />
              <div className="card-body">
                <h5 className="card-title">Top 5 Reasons to Get a Second Opinion</h5>
                <p className="card-text">
                  Getting a second opinion can bring clarity, confidence, and peace of mind in your cancer care journey.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">By Dr. Asha Mehta</small>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://placehold.co/600x400"
                className="card-img-top"
                alt="Cancer pathology report"
              />
              <div className="card-body">
                <h5 className="card-title">Understanding Your Cancer Pathology Report</h5>
                <p className="card-text">
                  A simple guide for patients to interpret their cancer diagnosis and understand what the pathology report means.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">By Dr. Karan Patel</small>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://placehold.co/600x400"
                className="card-img-top"
                alt="Doctor collaboration"
              />
              <div className="card-body">
                <h5 className="card-title">Enhancing Referrals Through Second Opinion Services</h5>
                <p className="card-text">
                  Learn how hospitals and doctors can collaborate effectively to improve patient outcomes via expert consultations.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">By Dr. Arvind Rao</small>
              </div>
            </div>
          </div>
        </div>
      </div>
       </div>
    </section>
  );
}

export default Terms;
