import React from "react";
import pat1 from "../assets/pat1.jpg";
import pat3 from "../assets/pat3.jpg";
import pat2 from "../assets/pat2.jpg";
const testimonials = [
  {
    image: pat1,
    name: "Alice",
    role: "UX Designer",
    message: "This service helped me immensely. Highly recommend!",
  },
  {
    image: pat2,
    name: "Bob",
    role: "Web Developer",
    message: "Smooth experience from start to finish.",
  },
  {
    image: pat3,
    name: "Carol",
    role: "Product Manager",
    message: "Professional and reliable team.",
  },
  {
    image: pat1,
    name: "David",
    role: "Engineer",
    message: "Everything was handled with care and precision.",
  },
  {
    image: pat2,
    name: "Eva",
    role: "Consultant",
    message: "Truly exceeded my expectations.",
  },
  {
    image: pat3,
    name: "Frank",
    role: "Marketer",
    message: "Great communication and support throughout.",
  },
];

// Utility to chunk testimonials into groups of 3
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const TestimonialSlider = () => {
  const chunks = chunkArray(testimonials, 3);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light text-center">
        <div className="p-4">
          <h1 className="display-4 fw-bold text-primary">🚧 Coming Soon</h1>
          <p className="lead text-muted mb-4">
            We're working hard to bring you something awesome. Stay tuned!
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
