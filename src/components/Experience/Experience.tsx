import './Experience.css';

type ExperienceItem = {
  title: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    title: 'Projetos de estudo em desenvolvimento web',
    period: 'Prática contínua',
    description:
      'Crio páginas e interfaces para consolidar HTML, CSS, JavaScript, React, responsividade, organização visual e boas práticas de código.',
  },
  {
    title: 'Curso de Front-end no SENAI',
    period: 'Formação complementar',
    description:
      'Estudei fundamentos de desenvolvimento Front-end, praticando estrutura de páginas, estilos, responsividade e criação de interfaces para web.',
  },
  {
    title: 'Formação em Análise e Desenvolvimento de Sistemas',
    period: 'Base técnica',
    description:
      'Construo minha base em lógica, estrutura de sistemas, desenvolvimento web e resolução de problemas com foco em evoluir como Full Stack.',
  },
  {
    title: 'Gestão de confeitaria',
    period: 'Experiência profissional',
    description:
      'Desenvolvi responsabilidade com prazos, atendimento, organização, qualidade de entrega e comunicação com clientes.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experiência</h2>
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
