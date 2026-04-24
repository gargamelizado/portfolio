/**
 * Formulário de contato usando mailto para sites estáticos.
 */
import { useState } from 'react';
import './Contact.css';

const contactEmail = 'marcelohdjusto@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setStatusMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contato pelo portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
    setStatusMessage('Seu aplicativo de email foi aberto com a mensagem pronta para enviar.');
  };

  return (
    <section id="contact">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          />
        </div>
        <button type="submit" className="submit-btn">
          Enviar
        </button>
        {statusMessage && (
          <p className="form-status" role="status">
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  );
}
