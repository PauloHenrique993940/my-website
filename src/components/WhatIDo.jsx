import React, { useEffect, useState } from 'react';
import './WhatIDo.css';

const keywords = [
  'React', 'JavaScript', 'UX/UI', 'HTML5', 'CSS3',
  'TypeScript', 'Vue.js', 'Git', 'APIs REST',
  'Bootstrap', 'Material UI', 'SEO', 'Acessibilidade',
  'Talwind', 'SASS', 'LESS'
];

function WhatIDo() {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="o-que-eu-faco" className="what-i-do">
      <div className="container">
        <h2>O que eu faço</h2>
        <p className="summary">
          Crio interfaces modernas, responsivas e otimizadas, com foco em experiência do usuário e performance.
        </p>
        <div className="keywords-display">
          <span className="highlight">{keywords[currentKeywordIndex]}</span>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Desenvolvimento Web (Front-end)</h3>
            <p>
              Crio interfaces de usuário modernas e responsivas, focadas em UX e performance, utilizando <strong>React</strong>, <strong>Vue.js</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>TypeScript</strong> e mais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
