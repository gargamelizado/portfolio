import './Experience.css';

const experiences = [
  {
    title: 'Projetos de estudo em desenvolvimento web',
    period: 'Pratica continua',
    description:
      'Crio paginas e interfaces para consolidar HTML, CSS, JavaScript, React, responsividade, organizacao visual e boas praticas de codigo.',
  },
  {
    title: 'Curso de Front-end no SENAI',
    period: 'Formacao complementar',
    description:
      'Estudei fundamentos de desenvolvimento Front-end, praticando estrutura de paginas, estilos, responsividade e criacao de interfaces para web.',
  },
  {
    title: 'Formacao em Analise e Desenvolvimento de Sistemas',
    period: 'Base tecnica',
    description:
      'Construo minha base em logica, estrutura de sistemas, desenvolvimento web e resolucao de problemas com foco em evoluir como Full Stack.',
  },
  {
    title: 'Gestao de confeitaria',
    period: 'Experiencia profissional',
    description:
      'Desenvolvi responsabilidade com prazos, atendimento, organizacao, qualidade de entrega e comunicacao com clientes.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experiencia</h2>
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-item" key={experience.title}>
            <span>{experience.period}</span>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
