import React from 'react';

function Career() {
  return (
    <section className="section py-5 text-center">
      <div className="container">
        <h2>Career OncoBridge</h2>

        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">Lorem ipsum dolor, adipiscing elit.</h1>
          <p className="lead">
           Aliquam pellentesque ipsum et nisi suscipit, sollicitudin volutpat nulla ultricies
          </p>
        </div>

        {/* Culture/Values Section */}
        <div className="row my-5">
          <div className="col-md-4">
            <h4>Heading 1</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4">
            <h4>Heading 2</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4">
            <h4>Heading 3</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Job Listings */}
        <div className="my-5">
          <h2 className="mb-4">Current Openings</h2>
          <div className="row my-5">
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">React Frontend Developer</h5>
                  <p className="card-text">3+ years experience · Remote/Hybrid · Full-time</p>
                  <a href="#apply" className="btn btn-outline-primary">Apply Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Healthcare Content Writer</h5>
                  <p className="card-text">Experience with medical content · Remote · Contract</p>
                  <a href="#apply" className="btn btn-outline-primary">Apply Now</a>
                </div>
              </div>
            </div>
              <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Healthcare Content Writer</h5>
                  <p className="card-text">Experience with medical content · Remote · Contract</p>
                  <a href="#apply" className="btn btn-outline-primary">Apply Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div id="apply" className="bg-light p-5 rounded">
          <h3>Didn't find your role?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Email us your resume at <a href="mailto:careers@oncologycare.in">careers@oncologycare.in</a></p>
        </div>
      </div>
    </section>
  );
}

export default Career;
