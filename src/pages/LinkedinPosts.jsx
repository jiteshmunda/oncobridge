import React from "react";

function LinkedinPosts() {
  return (
    <section className="linkedin-section py-5">
      <div className="container">

        {/* Title */}
        <h1 className="linkedin-title">Latest Updates from LinkedIn</h1>

        {/* Description text */}
        <p className="linkedin-description">
          Stay updated with awareness posts, announcements, and key oncology insights shared by our team.
        </p>

        {/* White card wrapper */}
        <div className="linkedin-card">
          <iframe
            src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25629534"
            frameBorder="0"
            width="100%"
            height="1600"
            className="linkedin-iframe"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default LinkedinPosts;
