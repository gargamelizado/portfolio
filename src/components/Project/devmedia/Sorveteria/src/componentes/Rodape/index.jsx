import Image from 'next/image';
import Logo from '../../../public/logo.png';
import style from './rodape.module.css';
import styleGlogal from '../globals.module.css';

export default function Rodape() {
  return(
    <footer className={`${styleGlogal.container} ${styleGlogal.rodape}`}>
      <section className={style.container_rodape}>
        <Image src={Logo} className={style.Image} />
        <div>
          <h3>ENDEREÇO</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div>
          <h3>CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div>
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </section>
      <section className={style.text}>
          <p>Gelateria. desenvolvido por gargamel</p>
      </section>
    </footer>
  );
};
