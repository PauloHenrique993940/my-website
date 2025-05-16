import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container">
        <h2>Contato</h2>
        <p className="contact-intro">
          Sinta-se à vontade para entrar em contato comigo. Envie uma mensagem utilizando o formulário abaixo ou através das minhas informações de contato.
        </p>
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <p>Email: seu_email@exemplo.com</p>
            <p>Telefone: (XX) XXXXX-XXXX</p>
            {/* Add social media links or other contact methods */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;