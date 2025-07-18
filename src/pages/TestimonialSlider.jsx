import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Marketing Manager',
    image: 'https://via.placeholder.com/80',
    message: 'This service changed the way we approach patient care. Highly professional team!',
  },
  {
    name: 'John Smith',
    role: 'Oncology Specialist',
    image: 'https://via.placeholder.com/80',
    message: 'The second opinion package provided incredible insights for my patients.',
  },
  {
    name: 'Emily Carter',
    role: 'Insurance Consultant',
    image: 'https://via.placeholder.com/80',
    message: 'Very easy to integrate into our patient support process. Recommended!',
  },
];

const TestimonialSlider = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <div className="d-flex justify-content-center">
                <div className="card p-4 text-center" style={{ maxWidth: '600px' }}>
                  <img
                    src={item.image}
                    className="rounded-circle mx-auto mb-3"
                    alt={item.name}
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <h5>{item.name}</h5>
                  <p className="text-muted small">{item.role}</p>
                  <p className="fst-italic">"{item.message}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
