/**
 * Formulario de contato: usa endpoint externo quando configurado e mailto como fallback.
 */
import { useState } from 'react';
import './Contact.css';

const contactEmail = 'marcelohdjusto@gmail.com';
const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  website: string;
};

type ContactCleanData = Omit<ContactFormData, 'website'>;

type ContactStatus = {
  type: 'success' | 'error' | 'info';
  message: string;
} | null;

const initialFormData: ContactFormData = { name: '', email: '', message: '', website: '' };
const maxLengths = {
  name: 80,
  email: 120,
  message: 1500,
  website: 120,
} satisfies Record<keyof ContactFormData, number>;

const isSafeContactEndpoint = (endpoint: string | undefined): endpoint is string => {
  if (!endpoint) return false;

  try {
    const url = new URL(endpoint);
    const isLocalhost = ['localhost', '127.0.0.1'].includes(url.hostname);
    return url.protocol === 'https:' || (import.meta.env.DEV && url.protocol === 'http:' && isLocalhost);
  } catch {
    return false;
  }
};

const normalizeFormData = (data: ContactFormData): ContactCleanData => ({
  name: data.name.trim(),
  email: data.email.trim(),
  message: data.message.trim(),
});

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [statusMessage, setStatusMessage] = useState<ContactStatus>(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (!Object.prototype.hasOwnProperty.call(maxLengths, name)) return;

    const fieldName = name as keyof ContactFormData;
    setFormData((currentData) => ({
      ...currentData,
      [fieldName]: value.slice(0, maxLengths[fieldName]),
    }));
    setStatusMessage(null);
  };

  const openEmailClient = (data: ContactCleanData) => {
    const subject = encodeURIComponent(`Contato pelo portfolio - ${data.name}`);
    const body = encodeURIComponent(
      `Nome: ${data.name}\nEmail: ${data.email}\n\nMensagem:\n${data.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanData = normalizeFormData(formData);

    if (formData.website) {
      setFormData(initialFormData);
      setStatusMessage({ type: 'success', message: 'Mensagem recebida. Obrigado pelo contato!' });
      return;
    }

    if (!cleanData.name || !cleanData.email || !cleanData.message) {
      setStatusMessage({ type: 'error', message: 'Preencha todos os campos antes de enviar.' });
      return;
    }

    setIsSending(true);

    if (!isSafeContactEndpoint(contactEndpoint)) {
      openEmailClient(cleanData);
      setFormData(initialFormData);
      setStatusMessage({
        type: 'info',
        message: 'Seu aplicativo de email foi aberto com a mensagem pronta para enviar.',
      });
      setIsSending(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: cleanData.name,
          email: cleanData.email,
          message: cleanData.message,
          to: contactEmail,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      setFormData(initialFormData);
      setStatusMessage({ type: 'success', message: 'Mensagem enviada com sucesso. Obrigado pelo contato!' });
    } catch {
      openEmailClient(cleanData);
      setStatusMessage({
        type: 'info',
        message: 'Não consegui enviar direto, então abri seu email com a mensagem pronta.',
      });
    } finally {
      window.clearTimeout(timeoutId);
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <h2>Vamos conversar</h2>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="contact-name">Nome</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            maxLength={maxLengths.name}
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
            autoComplete="email"
            maxLength={maxLengths.email}
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
            maxLength={maxLengths.message}
            required
            rows={5}
          />
        </div>
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
            maxLength={maxLengths.website}
          />
        </div>
        <button type="submit" className="submit-btn" disabled={isSending}>
          {isSending ? 'Enviando...' : 'Enviar mensagem'}
        </button>
        {statusMessage && (
          <p className={`form-status form-status--${statusMessage.type}`} role="status" aria-live="polite">
            {statusMessage.message}
          </p>
        )}
      </form>
    </section>
  );
}
