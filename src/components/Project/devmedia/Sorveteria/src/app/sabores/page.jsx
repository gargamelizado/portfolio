import Image from 'next/image';
import SaborOreo from '../../../public/sabor-oreo.png';
import SaborPistache from '../../../public/sabor-pistache.png';
import SaborKiwi from '../../../public/sorbet-kiwi.png';
import SaborLimao from '../../../public/sorbet-limao.png';
import SaborMorango from '../../../public/sorbet-morango.png';
import SaborAvela from '../../../public/sabor-cookies-avela.png';
import style from './sabores.module.css';

export default function PageSabores() {
  return (
    <main className={style.container}>
      <setcion className={style.container_banner}>
        <h1>NOSSOS SABORES</h1>
      </setcion>
      <setcion className={style.container_box}>
        <h2>SABORES DE SORVETE</h2>
        <div className={style.box}>
          <div>
            <Image src={SaborOreo} className={style.Image}/>
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>
          <div>
            <Image src={SaborPistache} className={style.Image}/>
            <h3>Sorvete Pistache</h3>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>
          <div>
            <Image src={SaborAvela} className={style.Image}/>
            <h3>Sorvete Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>
          <div>
            <Image src={SaborKiwi} className={style.Image}/>
            <h3>Sorvete de Kiwi</h3>
            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
          </div>
          <div>
            <Image src={SaborMorango} className={style.Image}/>
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>
          <div>
            <Image src={SaborLimao} className={style.Image}/>
            <h3>Sorvete de Limão Siciliano</h3>
            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
          </div>
        </div>
      </setcion>
    </main>
  );
};
