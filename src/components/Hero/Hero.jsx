/**
 * Primeira dobra da landing: foto + apresentação textual.
 */
import style from './Hero.module.css'
import Perfil from '../../assets/foto perfil.jpeg'
import Cv from '../cv/Marcelo deve frod-end.pdf'

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
        
          <h1>Marcelo Henrique</h1>
          <p className={style.subtitle}>Desenvolvedor Full Stack Júnior</p>
          <p className={style.description}>
            Crio interfaces web modernas, responsivas e acessíveis com foco em usabilidade, performance e organização de código. Tenho formação em Análise e Desenvolvimento de Sistemas e experiência prática com HTML, CSS, JavaScript, React e Node.js.
          </p>
          <p className={style.description}>
            Busco evoluir em equipes colaborativas, entregando soluções bem estruturadas, fáceis de manter e orientadas à experiência do usuário.
          </p>
          <ul className={style.highlights} aria-label="Destaques profissionais">
            <li>React + Vite</li>
            <li>UI responsiva</li>
            <li>Git e boas práticas</li>
          </ul>
          <div className={style.heroActions}>
            <a
              href={Cv}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="strict-origin-when-cross-origin"
              className={style.primaryAction}
            >
              Ver currículo
            </a>
            <a href="#projects" className={style.secondaryAction}>
              Ver projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
