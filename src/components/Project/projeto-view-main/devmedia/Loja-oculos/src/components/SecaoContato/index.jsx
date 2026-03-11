import estilos from './SecaoContato.module.css';
import Image from 'next/image';
import TT from '../../../public/tt.png';
import FB from '../../../public/fb.png';
import IG from '../../../public/ig.png';
import LG from '../../../public/local.png';
import EMAIL from '../../../public/email.png';
import TEL from '../../../public/telefone.png';

export default function SecaoContato() {
  return (
    <section className={estilos.container_contato}>
      <div className={estilos.container_text}>
        <h3>Fale conosco</h3>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
      </div>
      <div className={estilos.container_content}>       
        <div className={estilos.container_box}>
          <h3>Nossos Contatos</h3>
          <div>
            <Image className={estilos.Image} src={LG} />
            <Image className={estilos.Image} src={TEL} />
            <Image className={estilos.Image} src={EMAIL} />
          </div>
          <div>
            <span>Nova Iguaçu, RJ</span>            
            <span>(21) 9999-9999</span>            
            <span>contato@oticavida.com</span>
          </div>         
        </div>        
        <div className={estilos.container_box}>
          <h3>Nossas Redes Sociais</h3>
          <div>
            <Image className={estilos.Image} src={FB} />
            <Image className={estilos.Image} src={IG} />
            <Image className={estilos.Image} src={TT} />          
          </div>
          <div>            
            <span>/OticaVida</span>            
            <span>@oticavidarj</span>            
            <span>@oticavidarj</span>
          </div>
        </div>
      </div>
    </section>
  );
};
