import React from 'react';
import './Testimonials.css';

// Example testimonials data (replace with your actual data)
const testimonials = [
  {
    id: 1,
    name: 'Cliente 1',
    quote: 'Ótimo profissional! Entregou o projeto no prazo e superou minhas expectativas.',
    image: '/src/assets/client1.jpg' // Replace with actual image path
  },
  {
    id: 2,
    name: 'Cliente 2',
    quote: 'Excelente comunicação e habilidades técnicas impressionantes. Recomendo!',
    image: '/src/assets/client2.jpg' // Replace with actual image path
  },
  // Add more testimonials
];

function Testimonials() {
  return (
    <section id="depoimentos" className="testimonials">
      <div className="container">
        <h2>Depoimentos</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="quote">"{testimonial.quote}"</p>
              <h4 className="name">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;