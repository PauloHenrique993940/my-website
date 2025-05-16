import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2>Habilidades</h2>
        <div className="resume-content">
          
          
          
          <div className="skills">
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Sass</li>
              <li>NPM</li>
              <li>Vue.JS</li>
              <li>TYPESCRIPT</li>
              <li>UX/UI</li>
              <li>GRUNT</li>
              <li>Gulp</li>
              <li>Jest</li>
              <li>Cypress</li>
              {/* Add more skills */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;