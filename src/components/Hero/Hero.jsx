/**
 * Primeira dobra da landing: foto + apresentação textual.
 */
import style from './Hero.module.css'
import Perfil from '../../assets/foto perfil.jpeg'
import Cv from '../cv/Marcelo deve frod-end.pdf'

export default function Hero() {
  return (
    <>
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
            <h1>Olá, eu sou Marcelo</h1>
            <p className={style.subtitle}>Desenvolvedor Full-Stack</p>
            <p className={style.description}>
              Desenvolvedor Full-Stack Júnior com formação em Análise e Desenvolvimento de Sistemas, especializado na criação de interfaces web modernas, responsivas e acessíveis. Possuo experiência prática em HTML5, CSS3, JavaScript, React e Node.js, com forte foco em UX/UI e performance.
            </p>
            <p className={style.description}>
              Comprometido com qualidade de código, boas práticas de desenvolvimento e versionamento com Git. Proativo, organizado e sempre em busca de aprimoramento contínuo. Estou motivado para contribuir em equipes ágeis, desenvolvendo soluções inovadoras orientadas ao usuário.
            </p>
            <div className={style.heroActions}>
              <a href={Cv} target="_blank" rel="noopener noreferrer" className={style.primaryAction}>
                Ver curriculo
              </a>
              <a href="#contact" className={style.secondaryAction}>
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
