/**
 * Formulario de contato: usa endpoint externo quando configurado e mailto como fallback.
 */
import { useState } from 'react';
import './Contact.css';

const contactEmail = 'marcelohdjusto@gmail.com';
const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
const initialFormData = { name: '', email: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setStatusMessage('');
  };

  const openEmailClient = () => {
    const subject = encodeURIComponent(`Contato pelo portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    if (!contactEndpoint) {
      openEmailClient();
      setFormData(initialFormData);
      setStatusMessage('Seu aplicativo de email foi aberto com a mensagem pronta para enviar.');
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: contactEmail,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      setFormData(initialFormData);
      setStatusMessage('Mensagem enviada com sucesso. Obrigado pelo contato!');
    } catch {
      openEmailClient();
      setStatusMessage('Nao consegui enviar direto, entao abri seu email com a mensagem pronta.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="contact-name">Nome</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-message">Mensagem</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          />
        </div>
        <button type="submit" className="submit-btn" disabled={isSending}>
          {isSending ? 'Enviando...' : 'Enviar'}
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
