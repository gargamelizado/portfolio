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
          Sou Marcelo Henrique, desenvolvedor web em formação com foco em Front-end e fundamentos de Back-end.
          Tenho praticado React, TypeScript, JavaScript, HTML, CSS, Node.js, Express e MySQL por meio de projetos
          próprios, landing pages, sistemas simples e aplicações organizadas em componentes.
        </p>
        <p>
          Meu objetivo é conquistar minha primeira oportunidade como desenvolvedor júnior, contribuindo com
          dedicação, aprendizado constante e código cada vez mais limpo.
        </p>
      </div>
    </section>
  );
}
