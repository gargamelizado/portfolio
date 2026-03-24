import estilos from './SecaoCapa.module.css';

export default function SecaoCapa() {
  return (    
    <section className={estilos.container_capa}>      
      <div className={estilos.container_text}>        
        <p>Preços baixos em</p>
        <h1>ÓCULOS DE GRAU E DE SOL</h1>
        <p>Você só encontra aqui</p>         
      </div>
    </section>
  );
};
