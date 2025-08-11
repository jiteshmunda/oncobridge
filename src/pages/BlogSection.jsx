import React from "react";
import "../styles/Blog.css";
import doct_blog from "../assets/doct_blog.jpg";
import { Link } from "react-router-dom";
function Terms() {
  return (
    <section className="section py-5 text-center">
      <div className="container">
        <h2>Blog</h2>
        <div className="container">
          {/* <h2 className="mb-5 text-center">Insights from OncoBridge</h2> */}
          <div className="row">
            {/* tab start  */}
            <div className="container py-4 ">
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
                    data-bs-target="#pills-patients"
                    type="button"
                    role="tab"
                    aria-controls="pills-patients"
                    aria-selected="true"
                  >
                    For Patients
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-doctors-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-doctors"
                    type="button"
                    role="tab"
                    aria-controls="pills-doctors"
                    aria-selected="false"
                  >
                    For Doctors
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    For Insurance Providers
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-patients"
                  role="tabpanel"
                  aria-labelledby="pills-patients-tab"
                >
                  <div className="row">
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3  d-flex">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            The Top 5 Reasons to Get a Second Opinion for Cancer
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Understanding Your Cancer Pathology Report: A
                            Patient's Guide
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Navigating Treatment Options: Chemotherapy,
                            Radiation, Surgery, and Beyond
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            What Questions Should I Ask My Oncologist?
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            The Role of Clinical Trials in Cancer Treatment
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Coping with a Cancer Diagnosis: Emotional Support
                            and Resources
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Debunking Myths About Cancer Second Opinions
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            How Technology is Transforming Cancer Care
                            (Tele-oncology, AI, etc.)"
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Patient Story: How a Second Opinion Changed My Life
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-doctors"
                  role="tabpanel"
                  aria-labelledby="pills-doctors-tab"
                >
                  <div className="row">
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Enhancing Patient Referrals Through Collaborative
                            Second Opinion Services
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            The Value of Multi-Disciplinary Tumor Boards in
                            Complex Cases
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Integrating Tele-Oncology for Improved Patient
                            Access
                          </p>
                        </div>
                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Best Practices for Sharing Patient Data Securely for
                            Consultations
                          </p>
                        </div>
                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            How Second Opinions Can Inform Precision Medicine
                            Strategies
                          </p>
                        </div>
                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Navigating Ethical Considerations in Cancer Second
                            Opinions
                          </p>
                        </div>
                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div className="row">
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Cost-Benefit Analysis: The ROI of Proactive Cancer
                            Second Opinions for Insurers
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Improving Member Satisfaction: The Role of Expert
                            Medical Opinions
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            {/* <ul className="entry-meta list-unstyled d-flex mb-2">
                              <li>
                                <a className="link-primary text-decoration-none" href="#!">Business</a>
                              </li>
                            </ul> */}
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Streamlining Claims: How Early, Informed Decisions
                            Reduce Denials
                          </p>
                        </div>

                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-3 col-md-4  d-flex mb-3">
                      <div className="card border-0 flex-fill blog_single_card">
                        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                          <Link to="/blogdetail">
                            <img
                              className="img-fluid bsb-scale bsb-hover-scale-up"
                              loading="lazy"
                              src={doct_blog}
                              alt="Online cancer consultation with expert oncologists"
                            />
                          </Link>
                          <figcaption>
                            <i className="fas fa-eye text-white bsb-hover-fadeInLeft fa-2x"></i>
                            <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">
                              Read More
                            </h4>
                          </figcaption>
                        </figure>

                        <div className="card-body border bg-white p-4">
                          <div className="entry-header mb-3">
                            <h2 className="card-title entry-title h4 mb-0">
                              <a
                                className="link-dark text-decoration-none"
                                href="#!"
                              >
                                Lorem ipsum dolor sit amet
                              </a>
                            </h2>
                          </div>
                          <p className="card-text entry-summary text-secondary">
                            Leveraging Data to Optimize Oncology Care Pathways
                          </p>
                        </div>
                        <div className="card-footer border border-top-0 bg-white p-4">
                          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                            <li>
                              <a
                                className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-calendar-alt me-2"></i>
                                <span className="fs-7">7 Feb 2023</span>
                              </a>
                            </li>
                            <li>
                              <span className="px-3">•</span>
                            </li>
                            <li>
                              <a
                                className="link-secondary text-decoration-none d-flex align-items-center"
                                href="#!"
                              >
                                <i className="fas fa-comment-dots me-2"></i>
                                <span className="fs-7">55</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tab end  */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terms;
