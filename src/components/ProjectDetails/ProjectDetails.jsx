import { Link, Navigate, useParams } from 'react-router-dom';
import { projectsData } from '../Project/projectsData.js';
import styles from './ProjectDetails.module.css';
import defaultImg from '../../assets/logo.png';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectsData.find((item) => item.slug === slug);
  const image = project?.image || defaultImg;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className={styles.details}>
      <Link to="/projects" className={styles.backLink}>
        Voltar para projetos
      </Link>
      <article className={styles.content}>
        <div className={styles.imageWrap}>
          <img
            src={image}
            alt={`Screenshot do projeto ${project.title}`}
            loading="eager"
            decoding="async"
          />
        </div>
        <div className={styles.text}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <h2>Sobre o projeto</h2>
          <p>{project.details}</p>
          <h2>Aprendizado</h2>
          <p>{project.learning}</p>
          <ul className={styles.tags} aria-label={`Tecnologias usadas em ${project.title}`}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <div className={styles.actions}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Repositorio
            </a>
            <a href={project.web} target="_blank" rel="noopener noreferrer">
              Ver website
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
