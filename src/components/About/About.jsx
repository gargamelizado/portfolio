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
          Sou Marcelo Henrique, desenvolvedor web com foco em front-end e base sólida em back-end.
          Antes de migrar para a tecnologia, atuava em ambientes que exigiam organização, atenção ao cliente,
          resolução de problemas e cumprimento de prazos — habilidades que hoje me ajudam a criar produtos mais claros, úteis e orientados a resultado.
        </p>
        <p>
          Essa experiência me ensinou a transformar demandas em soluções práticas e a pensar cada projeto pela experiência de quem vai usar o produto.
          Hoje, aplico essa mesma lógica no desenvolvimento de interfaces e aplicações web: código limpo, comunicação objetiva, raciocínio técnico e atenção à jornada do usuário.
        </p>
        <p>
          Meu objetivo é contribuir em um ambiente de tecnologia com dedicação, aprendizado contínuo e uma visão que combina técnica, organização e foco em entregar valor real.
        </p>
      </div>
    </section>
  );
}
