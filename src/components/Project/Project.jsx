import styles from "./Project.module.css";
import CardProject from "../CardProject/CardProject";

const projectsData = [
  {
    title: 'Portfólio Pessoal',
    description: 'Site responsivo desenvolvido com React e CSS Modules. Apresenta projetos, habilidades e informações profissionais com design moderno.',
    link: 'https://github.com/gargamelizado',
    image: null,
  },
  {
    title: 'Landing Page Agência',
    description: 'Página promocional para agência digital com foco em conversão. Implementado com React, animações CSS e otimizações de performance.',
    link: 'https://github.com/gargamelizado',
    image: null,
  },
  {
    title: 'E-commerce Responsivo',
    description: 'Plataforma de e-commerce com carrinhos de compras, filtros avançados e integração de pagamentos. Desenvolvido com React e Node.js.',
    link: 'https://github.com/gargamelizado',
    image: null,
  },
];

export default function Project() {
  return (
    <section id="projects" className={styles.projectSection}>
      <h1 className={styles.projectTitle}>🚀 Projetos</h1>
      <div className={styles.projectGrid}>
        {projectsData.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}