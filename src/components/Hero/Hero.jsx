
import style from './Hero.module.css'
import Perfil from '../../assets/logo.png'

export default function Hero() {
  return (
    <>
      <section className={style.hero}>
        <div className={style.heroWrapper}>
          <div className={style.fotoPerfil}>
            <img src={Perfil} alt="perfil" />
          </div>
          <div className={style.boxText}>
            <h1>Olá, eu sou Marcelo</h1>
            <p>Desenvolvedora Front-end</p>
            <p>Durante o dia, comando uma confeitaria familiar que transforma celebrações em momentos inesquecíveis com doces personalizados feitos com carinho e criatividade. À noite (ou quando sobra tempo), troco o avental pelo editor de código e mergulho no mundo do HTML, CSS, JavaScript, Node.js e MySQL.</p>
          </div>
        </div>
      </section>
    </>
  )
}
