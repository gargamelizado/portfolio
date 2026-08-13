/**
 * Primeira dobra da landing: foto + apresentação textual.
 */
import style from './Hero.module.css'
import Perfil from '../../assets/foto perfil.jpeg'
import Cv from '../cv/Marcelo-Henrique-Curriculo.pdf'

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.heroWrapper}>
        <div className={style.fotoPerfil}>
          <img
            src={Perfil}
            alt="Marcelo sorrindo para foto de perfil"
            width="400"
            height="400"
            fetchPriority="high"
          />
        </div>
        <div className={style.boxText}>
          <p className={style.eyebrow}>Marcelo Henrique</p>
          <p className={style.status}>Disponível para projetos e oportunidades</p>
          <h1>Desenvolvedor Full Stack Júnior criando interfaces digitais com clareza, performance e valor</h1>
          <p className={style.description}>
            Construo aplicações web com React, TypeScript, HTML e CSS, com foco em experiência do usuário, organização da interface e qualidade de entrega.
          </p>
          <p className={style.description}>
            Minha abordagem combina lógica técnica, comunicação clara e atenção aos detalhes para transformar ideias em produtos digitais mais úteis, consistentes e confiáveis.
          </p>
          <ul className={style.highlights} aria-label="Destaques profissionais">
            <li>React &amp; TypeScript</li>
            <li>UI/UX</li>
            <li>Aplicações web</li>
            <li>Performance</li>
          </ul>
          <div className={style.heroActions}>
            <a href="#projects" className={style.primaryAction}>
              Ver projetos
            </a>
            <a
              href={Cv}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="strict-origin-when-cross-origin"
              className={style.secondaryAction}
            >
              Baixar currículo
            </a>
            <a href="#contact" className={style.secondaryAction}>
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
