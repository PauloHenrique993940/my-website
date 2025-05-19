import React from 'react';
import './WhyChooseMe.css';

const qualities = [
  {
    id: 1,
    title: 'Comprometimento',
    description: 'Dedicação total a cada projeto, respeitando prazos e entregando resultados de qualidade.'
  },
  {
    id: 2,
    title: 'Código Limpo',
    description: 'Escrevo códigos organizados, comentados e de fácil manutenção.'
  },
  {
    id: 3,
    title: 'Comunicação Clara',
    description: 'Facilidade para explicar conceitos técnicos de forma simples e objetiva.'
  },
  {
    id: 4,
    title: 'Atualizado',
    description: 'Sempre estudando as tecnologias mais modernas para aplicar nas soluções.'
  }
];

function WhyChooseMe() {
  return (
    <section id="diferenciais" className="why-choose-me">
      <div className="container">
        <h2>Por que me escolher?</h2>
        <div className="qualities-grid">
          {qualities.map((item) => (
            <div key={item.id} className="quality-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseMe;
