import Image from 'next/image';
import ImageSabor from '../../public/banner-sabores.jpg';
import ImageEvento from '../../public/eventos-image.jpg';
import ImageSobre from '../../public/sobre-image.jpg';
import style from './page.module.css';

export default function Home() {
  return (
    <main className={style.container}>
      <section className={style.container_banner}>
        <h1>SORVETE ARTESANAL</h1>
      </section>
      <section className={style.container_box}>
        <Image src={ImageSabor} className={`${style.largura_box} ${style.item1}`}/>
        <div className={`${style.largura_box} ${style.box_text} ${style.item2}`}>
          <h2>Nossos produtos</h2>
          <span>Novos e deliciosos!</span>
          <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
        </div>       
        <div className={`${style.largura_box} ${style.box_text} ${style.item3}`}>
          <h2>Nossos Eventos</h2>
          <span>Delicias com sorvete!</span>
          <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
        </div>
        <Image src={ImageEvento}  className={`${style.largura_box} ${style.item4}`}/>
        <Image src={ImageSobre}  className={`${style.largura_box} ${style.item5}`}/>
        <div className={`${style.largura_box} ${style.box_text} ${style.item6}`}>
          <h2>Sobre Nós</h2>
          <span>Alegria em cada casquinha!</span>
          <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
        </div>
      </section>
    </main>
  );
}
