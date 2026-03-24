import styles from "./Project.module.css";
import CardProject from "../CardProject/CardProject";
import Petshop from "./img/pet-shop.png";
import ClinicaMedica from "./img/clinica-medica.png";
import Padaria from "./img/padaria.png";
import Alfatech from "./img/alfa-tech.png";
import PousadaSecreta from "./img/pousada-secreta.png";
import AgeciaDesgin from "./img/agecia-desing.png";


const projectsData = [
  {
    title: 'Pet shop',
    description: 'site de pet shop ',
    link: 'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Petshop',
    image: Petshop,
    web: 'src/components/Project/devmedia/Petshop/index.html',
  },
  {
    title: 'Alfa tech',
    description: 'Página promocional para agência digital com foco em conversão. Implementado com React, animações CSS e otimizações de performance.',
    link: 'https://github.com/gargamelizado',
    image: Alfatech,
  },
  {
    title: 'Clinica Medica',
    description: 'Plataforma de e-commerce com carrinhos de compras, filtros avançados e integração de pagamentos. Desenvolvido com React e Node.js.',
    link: 'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Clinica',
    image: ClinicaMedica,
  },
  {
    title: 'Padaria',
    description: 'Projeto focado em gestão e visualização de informações de pessoas. Desenvolvido com React para melhor experiência do usuário.',
    link: 'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Padaria',
    image: Padaria,
  },
  {
    title: 'Pousada Secreta',
    description: 'Aplicativo de gerenciamento de tarefas com funcionalidades de criação, edição e exclusão. Desenvolvido com React Native para dispositivos móveis.',
    link: 'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Pousada',
    image: PousadaSecreta,
  },
  {
    title: 'Agência Design',
    description: 'Blog pessoal com sistema de postagem, comentários e categorias. Desenvolvido com React e Firebase para backend.',
    link: 'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Agencia-de-Design-Digital/agencia-de-design-digital',
    image: AgeciaDesgin,
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
            web={project.web}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}