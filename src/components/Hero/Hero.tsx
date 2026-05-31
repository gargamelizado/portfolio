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
          <h1>Desenvolvedor Full Stack Júnior em formação</h1>
          <p className={style.description}>
            Crio interfaces responsivas com React, JavaScript, TypeScript, HTML e CSS, aplicando boas práticas de componentização, organização de código e experiência do usuário.
          </p>
          <p className={style.description}>
            Estou construindo projetos próprios e estudos práticos para evoluir como desenvolvedor e atuar em aplicações web modernas.
          </p>
          <ul className={style.highlights} aria-label="Destaques profissionais">
            <li>React + Vite</li>
            <li>TypeScript</li>
            <li>UI responsiva</li>
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
