import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <p>
          Sou um desenvolvedor Front-end especializado em criar interfaces modernas, responsivas e acessíveis. 
          Com sólida experiência em HTML5, CSS3, JavaScript (ES6+) e React, transformo conceitos em experiências 
          web de alta qualidade, focando sempre em performance e usabilidade.
        </p>
        <p>
          Minha abordagem combina senso estético com boas práticas de desenvolvimento. Estou em constante 
          aprendizado, explorando novas tecnologias e padrões de design para entregar soluções inovadoras. 
          Quando não estou codificando, gerencio uma confeitaria onde aplico os mesmos princípios: atenção 
          aos detalhes e satisfação do cliente.
        </p>
      </div>
    </section>
  );
}
