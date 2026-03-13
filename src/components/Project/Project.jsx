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
  {
    title: 'Projeto Pessoas',
    description: 'Projeto focado em gestão e visualização de informações de pessoas. Desenvolvido com React para melhor experiência do usuário.',
    link: 'https://github.com/gargamelizado',
    image: null,
  },
  {
    title: 'App de Tarefas',
    description: 'Aplicativo de gerenciamento de tarefas com funcionalidades de criação, edição e exclusão. Desenvolvido com React Native para dispositivos móveis.',
    link: 'https://github.com/gargamelizado',
    image: null,
  },
  {
    title: 'Blog Pessoal',
    description: 'Blog pessoal com sistema de postagem, comentários e categorias. Desenvolvido com React e Firebase para backend.',
    link: 'https://github.com/gargamelizado',
    image: null,
  }
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