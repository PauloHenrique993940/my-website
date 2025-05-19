import React, { useState, useEffect } from 'react';
import './Navbar.css';
import 'animate.css/animate.min.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const closeSidebar = () => {
    if (isMobile) setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); // garante sidebar visível no desktop
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <nav className="top-nav">
          <button className="menu-toggle" onClick={toggleSidebar}>
            &#9776;
          </button>
        </nav>
      )}

      <aside
        className={`sidebar animate__animated ${
          isMobile ? (isOpen ? 'animate__fadeInLeft active' : 'hidden') : ''
        }`}
        style={{ animationDuration: '0.6s' }}
      >
        <div className="profile animate__animated animate__fadeIn" style={{ animationDelay: '0.5s' }}>
          <div className="profile-image">
            <span>PH</span>
          </div>
          <h1 className="name">Paulo Henrique</h1>
        </div>
        <nav className="navigation animate__animated animate__fadeInUp" style={{ animationDelay: '1s' }}>
          <ul>
            <li><a href="#inicio" onClick={closeSidebar}>Início</a></li>
            <li><a href="#sobre-mim" onClick={closeSidebar}>Sobre</a></li>
            <li><a href="#o-que-eu-faco" onClick={closeSidebar}>Descrição</a></li>
            <li><a href="#resume" onClick={closeSidebar}>Habilidades</a></li>
            <li><a href="#portfolio" onClick={closeSidebar}>Portfólio</a></li>
            <li><a href="#depoimentos" onClick={closeSidebar}>Depoimentos</a></li>
            <li><a href="#contato" onClick={closeSidebar}>Contato</a></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;

