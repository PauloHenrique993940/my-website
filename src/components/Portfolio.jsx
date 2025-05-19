import React, { useEffect, useRef } from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    name: 'EPLAY',
    description: 'Loja virtual',
    imageUrl: '/src/assets/eplayMovel.png',
    link: 'https://eplay-one.vercel.app/'
  },
  {
    id: 2,
    name: 'EFOOD',
    description: 'Aplicativo de delivery',
    imageUrl: '/src/assets/rfoodMovel.png',
    link: 'https://efood-seven-azure.vercel.app/'
  },
  {
    id: 3,
    name: 'DisneyPlus',
    description: 'Clone da interface do Disney+',
    imageUrl: '/src/assets/disneiPlus.png',
    link: 'https://clone-disneyplus-woad.vercel.app/#'
  },
  // Adicione mais projetos se quiser
];

function Portfolio() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        // Quando atinge o final, volta ao início
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 20); // velocidade

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Portfólio</h2>
        <div className="carousel-container" ref={carouselRef}>
          <div className="carousel-track">
            {projects.concat(projects).map((project, index) => (
              <div key={index} className="portfolio-item">
                <img src={project.imageUrl} alt={project.name} className='projectImage' />
                <div className="overlay">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver Projeto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
