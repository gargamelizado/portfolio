import Image from 'next/image'

import estilos from "./CampoDeBusca.module.css";
import Lupa from '../../public/Assets/lupa.png';

const CampoDeBusca = ({ textoBuscaDigitado, handleBusca }) => {
  return (
    <div className={estilos.container}>
      <Image className={estilos.icone} src={Lupa} alt="icone"/>
      <input
        type="text"
        value={textoBuscaDigitado}
        onChange={(event) => handleBusca(event.target.value)}
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
      />
    </div>
  );
};

export default CampoDeBusca;