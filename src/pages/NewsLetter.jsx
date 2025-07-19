import React from 'react';
import pat1 from '../assets/pat1.jpg';
import pat3 from '../assets/pat3.jpg';
import pat2 from '../assets/blog_detail.jpg';


const NewsLetter = () => {
  return (
    <>
     <div className="container py-5">
      <div className="text-center mb-4">
        <img
          src={pat2}
          alt="Doctor consultation"
          className="img-fluid rounded"
          
        />
      </div>

      <h3 className="text-center fw-bold mb-3">
        Teleconsultations with Specialists Now Available
      </h3>

      <p className="text-center mx-auto" style={{ maxWidth: '720px' }}>
        You can now book virtual appointments with specialists in cardiology, dermatology,
        and internal medicine, with no waiting rooms, secure consultations, and insurance coverage.
      </p>

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <h5 className="fw-semibold">Managing Stress in a Fast Paced World</h5>
          <p>
            Stress can impact your mood, body, and sleep without you realizing it. Manage it
            by staying active, eating well, relaxing, breathing exercises, or seeking professional help.
          </p>
        </div>

        <div className="col-md-6 mb-4">
          <h5 className="fw-semibold">Healthy Habits — Eat Better, Feel Better</h5>
          <p>
            The key focus on your digestive health is eating a clean, fiber-rich diet,
            staying hydrated, and avoiding too much caffeine or alcohol.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default NewsLetter;
