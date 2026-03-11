import estilos from './Topo.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';

export default function Topo() {
  return (
    <header className={estilos.container}>
      <div className={estilos.container_topo}>
       <Image src={Logo} alt="Logo da loja" className={estilos.logo_topo} />        
        <nav className={estilos.link_topo}>
          <Link className={estilos.link_text} href="/SecaoProduto" scroll={false}>PRODUTOS</Link>
          <Link className={estilos.link_text} href="sobre">SOBRE</Link>
          <Link className={estilos.link_text} href="contato">CONTATO</Link>
        </nav>
      </div>
    </header>
  );
};
