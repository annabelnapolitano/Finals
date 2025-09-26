import React from 'react';
import './CustomersSay.css';

const testimonials = [
  {
    name: 'John Doe',
    image: '/images/customer1.jpg',
    text: 'Great experience! The food was fantastic and the staff very friendly.',
  },
  {
    name: 'Jane Smith',
    image: '/images/customer2.jpg',
    text: 'Delicious meals and cozy ambiance. Highly recommend!',
  },
  {
    name: 'Michael Johnson',
    image: '/images/customer3.jpg',
    text: 'A lovely place for family dinners. Excellent service.',
  },
];

function CustomersSay() {
  return (
    <section className="customers-say">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map(({ name, image, text }) => (
          <div className="testimonial-card" key={name}>
            <img src={image} alt={`${name} photo`} className="customer-image" />
            <p className="testimonial-text">"{text}"</p>
            <h4 className="customer-name">- {name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
