/**
 * Card de um projeto: repositório (link) e, se existir, segunda URL (web) para demo/site.
 */
import { Link } from 'react-router-dom';
import styles from './CardProject.module.css';
import defaultImg from '../../assets/logo.png';

export default function CardProject({ title, description, link, web, image, slug, technologies = [] }) {
  const imgSrc = image || defaultImg;
  return (
    <div className={styles.card}>
      <div className={styles.thumbWrap}>
        <img
          src={imgSrc}
          alt={`Screenshot do projeto ${title}`}
          className={styles.thumb}
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className={styles.tags} aria-label={`Tecnologias usadas em ${title}`}>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <div className={styles.actions}>
        {slug ? (
          <Link to={`/projects/${slug}`} className={styles.link}>
            Detalhes
          </Link>
        ) : null}
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Repositorio
        </a>
      </div>
      {web ? (
        <a href={web} target="_blank" rel="noopener noreferrer" className={styles.web}>
          Ver Website
        </a>
      ) : null}
    </div>
  );
}
