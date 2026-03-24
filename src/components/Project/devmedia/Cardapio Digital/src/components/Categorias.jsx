import estilos from "./Categorias.module.css";

import Image from 'next/image'

import icone1 from "../../public/assets/entrada.png";
import icone2 from "../../public/assets/massa.png";
import icone3 from "../../public/assets/carne.png";
import icone4 from "../../public/assets/bebidas.png";
import icone5 from "../../public/assets/salada.png";
import icone6 from "../../public/assets/sobremesa.png";

const Categorias = ({ handleFiltro, botaoClicado }) => {
  return (
    <section className={estilos.secao_categorias}>
      <div className={estilos.container_botoes}>
        <button className={botaoClicado === "Entradas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Entradas")}>
          <Image className={estilos.icone} src={icone1} alt="ícone" />Entradas
        </button>

        <button className={botaoClicado === "Massas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Massas")}>
          <Image className={estilos.icone} src={icone2} alt="ícone" />Massas
        </button>

        <button className={botaoClicado === "Carnes" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Carnes")}>
          <Image className={estilos.icone} src={icone3} alt="ícone" />Carnes
        </button>
        <button className={botaoClicado === "Bebidas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Bebidas")}>
          <Image className={estilos.icone} src={icone4} alt="ícone" />Bebidas
        </button>
        <button className={botaoClicado === "Saladas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Saladas")}>
          <Image className={estilos.icone} src={icone5} alt="ícone" />Saladas
        </button>
        <button className={botaoClicado === "Sobremesas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Sobremesas")}>
          <Image className={estilos.icone} src={icone6} alt="ícone" />Sobremesas
        </button>
      </div>
    </section>
  );
};
export default Categorias;