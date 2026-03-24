import Image from 'next/image';
import Link from 'next/link';
import style from './topo.module.css';
import styleGlogal from '../globals.module.css'
import Logo from '../../../public/logo.png';

export default function Topo() {
  return(
    <header className={`${styleGlogal.container} ${styleGlogal.topo}`}>
      <section className={`${style.container_topo}`}>
        <Image src={Logo} className={style.Image}/>
        <div className={style.line}></div>
        <nav className={style.container_nav}>
          <Link href="/" className={style.text}>HOME</Link>
          <Link href="/sabores" className={style.text}>SABORES</Link>
          <Link href="/sobre" className={style.text}>SOBRE</Link>
        </nav>
      </section>
    </header>
  );
};
