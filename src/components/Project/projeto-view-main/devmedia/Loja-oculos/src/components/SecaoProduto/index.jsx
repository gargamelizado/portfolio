import estilos from './SecaoProduto.module.css';
import Image from 'next/image';
import Oculos1 from '../../../public/oculos01.png';
import Oculos2 from '../../../public/oculos02.png';
import Oculos3 from '../../../public/oculos03.png';
import Oculos4 from '../../../public/oculos04.png';

export default function SecaoProduto() {
  return (
    <section className={estilos.container_produtos}>
      <div className={estilos.container_text}>
        <h3>Nossos Produtos</h3>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
      </div>
      <div className={estilos.container_produtos_list}>
        <div className={estilos.container_produtos_itens}>
          <h4>Óculos de grau</h4>
          <Image src={Oculos1} alt="Oculos de grau" className={estilos.classsImage}/>
          <p>R$ 500,00</p>
        </div>
        <div className={estilos.container_produtos_itens}>
          <h4>Óculos transition</h4>
          <Image src={Oculos2} alt="Oculos de transition" className={estilos.classsImage}/>
          <p>R$ 750,00</p>
        </div>
        <div className={estilos.container_produtos_itens}>
          <h4>Óculos de sol</h4>
          <Image src={Oculos3} alt="Oculos de sol" className={estilos.classsImage}/>
          <p>R$ 700,00</p>
        </div>
        <div className={estilos.container_produtos_itens}>
          <h4>Óculos infantil</h4>
          <Image src={Oculos4} alt="Oculos de infantil" className={estilos.classsImage}/>
          <p>R$ 500,00</p>
        </div>
      </div>
      <div className={estilos.container_information}>
        <h3>Todos os nossos produtos incluem:</h3>
        <ul type ="none">
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
};
