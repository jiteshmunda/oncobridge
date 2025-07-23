import React from 'react';
import iylon from '../assets/iylon.png';
import { Link } from 'react-router-dom';
function Partners() {
  return (
    <>
      <section className="text-center">
        <div className='container-fluid px-0'>
          <div className='row gx-0 align-items-center'>
            <div className="bg-image-partners d-flex justify-content-left align-items-center text-center text-white vh-100">
              <div className="overlay-content">
                <div className='col-md-8 p-3 ps-lg-5 ms-lg-5 ms-sm-5 ms-md-5'>
                  <h2 className="fw-bold text-white partner_overlay"> Iylon Precision Oncology, USA </h2>
                  <p className="lead">
                  </p>
                  {/* <div className="d-flex justify-content-left gap-3">
                    <button className="btn btn-primary">Start Your Second Opinion Request</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center py-5">
        <div className='container '>
          <div className='row  align-items-center'>
            <div className='col-md-7 partners_text'>
              <div class="text-center mb-5"><h2 class="section-title fw-bold">OncoBridge : Proud Partner of Iylon Precision Oncology</h2>
              </div>
              <p className='text-start'>
                We, at OncoBridge Healthcare Private Limited, are thrilled to announce our partnership with Iylon Precision Oncology,
                a leader in personalized cancer care based in Providence, Rhode Island. Accessible at iylon.com, Iylon is
                transforming the landscape of cancer treatment through its innovative use of genomic analysis and artificial
                intelligence to deliver tailored treatment recommendations.
              </p>
              <p className='text-start'>
                As a partner, OncoBridge is committed to collaborating with Iylon to advance precision oncology,
                ensuring that patients across our network benefit from cutting-edge, evidence-based treatment plans.
                By integrating Iylon’s expertise in molecular oncology, radiology, and AI-driven diagnostics, we aim to
                enhance patient outcomes and expand access to personalized cancer care. Together, we are dedicated to supporting Iylon’s
                mission to reduce cancer mortality and make precision oncology accessible globally, including through initiatives like the
                Iylon Foundation, which provides free treatments to underserved patients.
              </p>
              <p className='text-start'>
                For more information about our partnership or to explore how we can work together to improve cancer care,
                please contact us at in   <a href='mailto:care@oncobridge.in' target='_blank' className='text-primary'>  care@oncobridge</a> or
                visit
                <a href='iylon.com' target='_blank' className='text-primary'>  iylon.com</a>



              </p>
            </div>
            <div className='col-md-5 '>
              <Link to="https://app.iylon.com/#/home">
                <img src={iylon} alt="iylon" className='partner_logo' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
