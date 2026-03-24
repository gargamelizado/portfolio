import estilos from './Rodape.module.css';
import Image from 'next/image';
import Logo from '../assets/logo.png';
import iconeFacebook from '../assets/facebook.png';
import iconeTwitter from '../assets/twitter.png';
import iconeLinkedin from '../assets/linkedin.png';
import iconeDribble from '../assets/dribble.png';
import iconeBehance from '../assets/behance.png';
import iconeGooglePlus from '../assets/google.png';

export default function Rodape(props) {

  return(
    <footer className={props.temaEscuro ? estilos.rodape_modo_escuro : estilos.rodape_modo_claro}>
      <div className={estilos.container_informacoes}>
        <div>
          <Image src={Logo} alt="logomarca"/>
          <p className={estilos.paragrafo}>
            Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
            ferramentas e tecnologias personalizadas.
          </p>
        </div>
        <div>
          <Image src={iconeFacebook} alt="facebook"/>
          <Image src={iconeTwitter} alt="twitter"/>
          <Image src={iconeLinkedin} alt="linkedin"/>
          <Image src={iconeDribble} alt="dribble"/>
          <Image src={iconeBehance} alt="behance"/>
          <Image src={iconeGooglePlus} alt="google plus"/>
        </div>
      </div>
      <div className={estilos.copyright}>
        <p>Copyright 2022 &copy; <span>gargamel</span></p>
      </div>
    </footer>
  )
}