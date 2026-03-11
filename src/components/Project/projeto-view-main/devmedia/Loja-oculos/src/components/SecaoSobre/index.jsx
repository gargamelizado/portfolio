import estilos from './SecaoSobre.module.css';
import Image from 'next/image';
import Atedimento from '../../../public/atendimento.png';
import Loja from '../../../public/loja.png';


export default function SecaoSobre() {
  return (
    <section className={estilos.container_sobre}>
      <div className={estilos.container_text}>
        <h3>QUEM SOMOS NÓS?</h3>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
      </div>
      <div className={estilos.container_box}>
        <div className={estilos.container_box_itens}>
          <Image src={Atedimento} className={estilos.Image} />
        </div>
        <div className={`${estilos.container_box_itens} ${estilos.box_text}`}>
          <h4>Nossas Filiais</h4>
          <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
        </div>
        <div className={`${estilos.container_box_itens} ${estilos.box_text}`}>
          <h4>Atendimento flexível</h4>
          <p>Nossa equipe possui é treinada para te atender</p>
        </div>
        <div className={estilos.container_box_itens}>
          <Image src={Loja} className={estilos.Image} />
        </div>       
      </div>
    </section>
  );
};
