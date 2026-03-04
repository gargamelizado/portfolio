import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center', color: '#fff' }}>Sobre Mim</h2>
      <div style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#fff' }}>
        <p>
          Sou uma desenvolvedora Front-end apaixonada por criar interfaces intuitivas e responsivas.
          Com experiência em HTML, CSS, JavaScript e React, transformo ideias em soluções web funcionais.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Quando não estou codificando, gerencio uma confeitaria familiar, combinando criatividade 
          em dois mundos: o visual do código e a delicia dos doces artesanais.
        </p>
      </div>
    </section>
  );
}
