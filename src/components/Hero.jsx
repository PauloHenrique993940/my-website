import React from 'react';
import './Hero.css';
import 'animate.css/animate.min.css';

function Hero() {
  return (
    <section id="inicio" className="hero animate__animated animate__fadeIn">
      <div className="hero-content animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>
        <h2 className="welcome animate__animated animate__fadeInDown" style={{ animationDelay: '0.5s' }}>
          Bem-vindo
        </h2>
        <h1 className="title animate__animated animate__zoomIn" style={{ animationDelay: '0.8s' }}>
          Front end Developer <br /> Desenvolvedor Web
        </h1>
        <button className="contact-button animate__animated animate__fadeInUp" style={{ animationDelay: '1.2s' }}>
          Contratar-me
        </button>
      </div>
      {/* minha imagem */}
    </section>
  );
}

export default Hero;
