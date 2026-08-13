/**
 * Card de um projeto: repositório (link) e, se existir, segunda URL (web) para demo/site.
 */
import { Link } from 'react-router-dom';
import styles from './CardProject.module.css';
import defaultImg from '../../assets/logo.png';
import type { Project } from '../../types/project';

type CardProjectProps = {
  project: Project;
};

const categoryLabel = {
  principal: 'Projeto principal',
  estudo: 'Projeto de estudo',
} as const;

const statusLabel = {
  finalizado: 'Finalizado',
  'em-evolucao': 'Em evolução',
  manutencao: 'Em manutenção',
} as const;

export default function CardProject({ project }: CardProjectProps) {
  const imgSrc = project.image || defaultImg;
  const repositoryLabel = project.repository ? `Abrir repositório de ${project.title}` : undefined;
  const websiteLabel = project.website ? `Abrir website de ${project.title}` : undefined;

  return (
    <div className={styles.card}>
      <div className={styles.metaRow}>
        <span>{categoryLabel[project.category]}</span>
        {project.status ? <span>{statusLabel[project.status]}</span> : null}
      </div>
      <div className={styles.thumbWrap}>
        <img
          src={imgSrc}
          alt={project.imageAlt ?? `Screenshot do projeto ${project.title}`}
          className={styles.thumb}
          loading="lazy"
          decoding="async"
          width="640"
          height="400"
        />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className={styles.tags} aria-label={`Tecnologias usadas em ${project.title}`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <div className={styles.actions}>
        <Link to={`/projects/${project.slug}`} className={styles.link}>
          Detalhes
        </Link>
        {project.repository ? (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="strict-origin-when-cross-origin"
            className={styles.link}
            aria-label={repositoryLabel}
          >
            Repositório
          </a>
        ) : null}
      </div>
      {project.website ? (
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="strict-origin-when-cross-origin"
          className={styles.web}
          aria-label={websiteLabel}
        >
          Ver website
        </a>
      ) : null}
      {project.status === 'em-evolucao' ? (
        <p className={styles.legenda}>
          Projeto em evolução com melhorias planejadas de responsividade, componentização e acabamento visual.
        </p>
      ) : null}
    </div>
  );
}
