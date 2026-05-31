/**
 * Seção "Sobre mim". id="about" é alvo do menu do Header.
 */
import './About.css';

export default function About() {
  return (
    <section id="about">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <p>
          Sou um desenvolvedor Full Stack especializado em criar interfaces modernas, responsivas e acessíveis. 
          Tenho formação em Análise e Desenvolvimento de Sistemas e também fiz curso de Front-end no SENAI.
          Com sólida experiência em HTML5, CSS3, JavaScript (ES6+) e React, transformo conceitos em experiências 
          web de alta qualidade, focando em performance, usabilidade e aprendizado contínuo.
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
