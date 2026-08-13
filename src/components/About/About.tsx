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
          Antes de me dedicar ao desenvolvimento, trabalhei em contextos que exigiam organização, atenção ao cliente,
          resolução de problemas e cumprimento de prazos, o que me ajudou a construir uma postura mais responsável e orientada a resultados.
        </p>
        <p>
          Essa experiência me ensinou a transformar demandas em soluções práticas, ouvir o usuário e entregar experiências mais claras e úteis.
          Hoje, aplico essa mesma lógica no desenvolvimento de interfaces e sistemas: código limpo, comunicação objetiva, foco na jornada do usuário e preocupação com a entrega real do produto.
        </p>
        <p>
          Meu objetivo é conquistar minha primeira oportunidade como desenvolvedor júnior, contribuindo com dedicação,
          aprendizado constante e uma visão que combina técnica, boa comunicação e preocupação com a experiência de quem usa o sistema.
        </p>
      </div>
    </section>
  );
}
