'use client';
import Image from 'next/image';
import estilos from './page.module.css';
import Banner from '../../public/banner.jpg';
import Logo from '../../public/barbearia.png';
import { useState } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";

export default function Home() {

  const [ TemaEscuro, setTemaEscuro ] = useState(false);

  const alterarTema = () => {
    setTemaEscuro(!TemaEscuro);
  }

  return (
    
    <div className={TemaEscuro ? estilos.modo_escuro : estilos.modo_claro}>

      <header className={estilos.header_container}>
        <div>
          <Image src={Logo} alt="logomarca" />
          <button onClick={alterarTema}>
            {TemaEscuro ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </header>

      <main className={estilos.main_container}>
        <section className={estilos.secao_banner}>
          <Image src={Banner} alt='banner' />
        </section>

        <section className={estilos.secao_texto}>
          <div>


            <h1>Bem-vindo a Barber Shop</h1>
            <p>
              Nossa barbearia sempre oferece profissionais de qualidade e
              estamos prontos para lidar com suas maiores expectativas.
            </p>
            <p>
              Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
              uma equipe premiada que demonstrou o talento de mestres barbeiros
              em vários concursos de estilo. Deixe nosso barbeiro ser seu
              estilista pessoal e você nunca ficará desapontado.
            </p>
            <p className={estilos.assinatura}>S. Kelly</p>

            
          </div>
        </section>
      </main>
    </div>
  );
}