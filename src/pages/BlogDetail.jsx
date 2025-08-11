import React from "react";
import blogdetail from "../assets/blog_detail.jpg";
function BlogDetail() {
  return (
    <section className="section py-5 text-center">
      <div class="container">
        <div class="row clearfix">
          <div class="col-lg-9 col-md-12 left-box">
            <div class="card single_post">
              <div class="body">
                <div class="img-post">
                  <img
                    class="d-block img-fluid"
                    src={blogdetail}
                    alt="First slide"
                  />
                </div>
                <h3>
                  <a href="blog-details.html">All photographs are accurate</a>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-12 right-box">
            <div class="card mb-4">
              <div class="header">
                <h2>Categories Clouds</h2>
              </div>
              <div class="body widget">
                <ul class="list-unstyled categories-clouds m-b-0">
                  <li>
                    <a href="javascript:void(0);">Tags 1</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Tags 2</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Tags 3</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Tags 4</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Tags 5 </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Tags 6</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Tags 7</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Tags 8</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Tags 9</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="header">
                <h2>Popular Posts</h2>
              </div>
              <div class="body widget popular-post">
                <div class="row">
                  <div class="col-lg-12 col-sm-12 col-md-6">
                    <div class="single_post">
                      <div class="img-post">
                        <img
                          src="https://www.bootdey.com/image/280x280/87CEFA/000000"
                          alt="Awesome Image"
                        />
                      </div>
                      <p class="m-b-0">Apple Introduces Search Ads Basic</p>
                      <span>jun 22, 2018</span>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-md-6">
                    <div class="single_post">
                      <div class="img-post">
                        <img
                          src="https://www.bootdey.com/image/280x280/87CEFA/000000"
                          alt="Awesome Image"
                        />
                      </div>
                      <p class="m-b-0">Apple Introduces Search Ads Basic</p>
                      <span>jun 22, 2018</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetail;
