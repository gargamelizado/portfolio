/**
 * Lista de projetos do portfólio. Reutilizada na home (dentro de Home) e sozinha na rota /projects.
 * projectsData: metadados + screenshots em ./img
 */
import styles from "./Project.module.css";
import CardProject from "../CardProject/CardProject";
import Petshop from "./img/pet-shop.png";
import ClinicaMedica from "./img/clinica-medica.png";
import Padaria from "./img/padaria.png";
import Alfatech from "./img/alfa-tech.png";
import PousadaSecreta from "./img/pousada-secreta.png";
import AgeciaDesgin from "./img/agecia-desing.png";


const projectsData = [
  /* Cada item: link (GitHub), web opcional (demo local/URL), image importada */
  {
    title: 'Pet shop',
    description: 'site de pet shop para divucaçao de produtos e serviços.Desenvolvido com HTML e CSS.',
    link: 'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Petshop',
    web: 'src/components/Project/devmedia/Petshop/index.html',
    image: Petshop,
  },
  {
    title: 'Alfa tech',
    description: 'site de empresa de tecnologia com uso de tabelas e multiple páginas. Desenvolvido com HTML e CSS.',
    link: 'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Provedor-Hospedagem',
    web: 'src/components/Project/devmedia/Provedor-Hospedagem/home.html',
    image: Alfatech,
  },
  {
    title: 'Clinica Medica',
    description: 'site de clínica médica com multiple páginas. Desenvolvido com HTML e CSS.',
    link: 'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Clinica',
    web: 'src/components/Project/devmedia/Clinica/index.html',
    image: ClinicaMedica,
  },
  {
    title: 'Padaria',
    description: 'site de padaria simples. Desenvolvido com HTML e CSS para melhor experiência do usuário.',
    link: 'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Padaria',
    web: 'src/components/Project/devmedia/Padaria/index.html',
    image: Padaria,
  },
  {
    title: 'Pousada Secreta',
    description: 'site de pousada secreta com multiple páginas. Desenvolvido com HTML e CSS.',
    link: 'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Pousada',
    web: 'src/components/Project/devmedia/Pousada/index.html',
    image: PousadaSecreta,
  },
/*   {
    title: 'Agência Design',
    description: 'site de agência de design digital. Desenvolvido com React com efeito de troca de cor de fundo .',
    link: 'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Agencia-de-Design-Digital/agencia-de-design-digital',
    web: 'src/components/Project/devmedia/Agencia-de-Design-Digital/agencia-de-design-digital/index.html',
    image: AgeciaDesgin,
  }, */
];

export default function Project() {
  return (
    <section id="projects" className={styles.projectSection}>
      <h1 className={styles.projectTitle}>🚀 Projetos</h1>
      <div className={styles.projectGrid}>
        {projectsData.map((project, index) => (
          <CardProject
            key={project.title ?? index}
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