import React from 'react';
import './Navbar.css';
import 'animate.css/animate.min.css';

function Navbar() {
  return (
    <aside className="sidebar animate__animated animate__fadeInLeft" style={{ animationDuration: '1s' }}>
      <div className="profile animate__animated animate__fadeIn" style={{ animationDelay: '0.5s' }}>
        <div className="profile-image">
          <span>PH</span>
        </div>
        <h1 className="name">Paulo Henrique</h1>
      </div>
      <nav className="navigation animate__animated animate__fadeInUp" style={{ animationDelay: '1s' }}>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre-mim">Sobre</a></li>
          <li><a href="#o-que-eu-faco">Descrição</a></li>
          <li><a href="#resume">Habilidades</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
