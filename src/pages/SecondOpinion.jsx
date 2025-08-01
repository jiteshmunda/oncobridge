import React from 'react';
import { Link } from 'react-router-dom';
import second_op1 from '../assets/second_op1.jpg';
import second_opt2 from '../assets/second_opt2.jpg';
import second_opt3 from '../assets/second_opt3.jpg';


function SecondOpinion() {
    return (
        <>
            <section className="text-center">
                <div className='container-fluid px-0'>
                    <div className='row gx-0 align-items-left'>
                        <div className="bg-image-second-opt d-flex justify-content-left align-items-center text-left text-white ">
                            <div className="overlay-content">
                                <div className='col-md-12 p-3 ms-lg-5 ps-lg-4'>
                                    <h1 className=" text-white display-3 animate__animated animate__fadeIn">
                                        <span className='font_bold'>Expert</span>View
                                    </h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section py-3 terms_block mt-3 mb-4">
                {/* <div className="container">
                <h2>Second Opinion</h2>
            </div> */}
                <div className="container py-3">
                    <div className="row g-3">
                        <div className="col-12 col-md-4 col-lg-4 col-sm-4">
                            <div className='text-center m-auto'>
                            <Link to="/patients" className="read-more-btn">For Patients </Link>
                            </div>
                            <div className="second-option-card text-center p-4  mt-2 p-3 shadow-sm">
                                <img src={second_op1} className='w-100' />
                                <div className="stat-content mt-3 ">
                                    <p className=''>
                                        Access to leading global oncologists, personalized insights, <br /> peace of mind
                                    </p>
                                        <Link to="/contact" className="read-more-btn-white">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-sm-4">
                            <div className='text-center m-auto'>
                            <Link to="/hospital" className="read-more-btn">For Hospitals  </Link>
                            </div>
                            <div className="second-option-card text-center p-4  mt-2 p-3 shadow-sm">
                                <img src={second_opt2} className='w-100' />
                                <div className="stat-content mt-3 ">
                                    <p>
                                        Expand your expertise, support your patients with external validation, collaborate seamlessly.
                                    </p>
                                    <Link to="/contact" className="read-more-btn-white">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-sm-4">
                             <div className='text-center m-auto'>
                            <Link to="/insurance" className="read-more-btn">For Insurance Providers  </Link>
                            </div>
                            <div className="second-option-card text-center p-4 mt-2  p-3 shadow-sm">
                                <img src={second_opt3} className='w-100' />
                                <div className="stat-content mt-3  ">
                                    <p>
                                        Ensure appropriate care, manage costs effectively, enhance policyholder <br /> satisfaction.
                                    </p>
                                    <Link to="/contact" className="read-more-btn-white">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SecondOpinion;
