import Head from 'next/head';
import Topo from '../components/Topo';
import SecaoCapa from '../components/SecaoCapa';
import SecaoProduto from '../components/SecaoProduto';
import SecaoSobre from '../components/SecaoSobre';
import SecaoContato from '../components/SecaoContato';
import Rodape from '../components/Rodape';
import estilos from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Loja de Óculos</title>
        <meta name="description" content="Projeto de Estudo React.js DevMedia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  className={estilos.container_global}>
        <Topo />
        <SecaoCapa />
        <SecaoProduto />
        <SecaoSobre />
        <SecaoContato />
        <Rodape />
      </main>
    </>
  );
}
