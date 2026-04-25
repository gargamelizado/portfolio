/**
 * Lista de projetos do portfólio. Reutilizada na home (dentro de Home) e sozinha na rota /projects.
 * projectsData: metadados + screenshots em ./img
 */
import styles from "./Project.module.css";
import CardProject from "../CardProject/CardProject";
import { projectsData } from "./projectsData";

export default function Project() {
  return (
    <section id="projects" className={styles.projectSection}>
      <p className={styles.projectEyebrow}>Trabalhos selecionados</p>
      <h1 className={styles.projectTitle}>Projetos</h1>
      <div className={styles.projectGrid}>
        {projectsData.map((project, index) => (
          <CardProject
            key={project.title ?? index}
            title={project.title}
            description={project.description}
            link={project.link}
            web={project.web}
            image={project.image}
            slug={project.slug}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}
