import React from 'react';
import about2 from '../assets/abt2.jpg';
import vision from '../assets/vision.jpg';
function About() {
  return (
    <>
      <section className="text-center">
  <div className="container-fluid px-0">
    <div className="row gx-0 align-items-left">
      <div className="bg-image-about d-flex justify-content-left align-items-center text-left text-white">
        <div className="overlay-content">
          <div className="col-md-12 p-3 ms-lg-5 ps-lg-4">
            <h1 className="fw-bold text-white display-3 animate__animated animate__fadeIn">
              About Us
            </h1>
            {/* <p className="lead"> Our Vision  Mission </p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className=' py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <div className='m-lg-5'>
              <h5> Vision Statement</h5>
              <p>
                To democratize access to world-class cancer diagnostics and expert medical opinions,
                empowering every patient in India and beyond to make confident, informed decisions
                in their cancer journey
              </p>
              <h5> Mission Statement</h5>
              <p>
                At OncoBridge, we are building a trusted bridge between patients and the world’s leading
                cancer experts. We deliver precision diagnostics and global second opinions through a seamless,
                tech-enabled platform — combining cutting-edge tools, compassionate care, and medical excellence to
                improve outcomes
                and bring peace of mind to patients and their families.
              </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <div className='m-lg-5'>
                <div className='   '>
              
                  <img src={vision} className='about_img2 rounded shadow' alt="our vision mission image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className=' py-5 bg-light'>
        <div className='container'>
          <h5> Mission Statement</h5>
          <p>
            At OncoBridge, we are building a trusted bridge between patients and the world’s leading
            cancer experts. We deliver precision diagnostics and global second opinions through a seamless,
            tech-enabled platform — combining cutting-edge tools, compassionate care, and medical excellence to
            improve outcomes
            and bring peace of mind to patients and their families.
          </p>
        </div>
      </section> */}
    </>
  );
}

export default About;
