import { Link, useParams } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import styles from './ProjectDetails.module.css';
import defaultImg from '../../assets/logo.png';
import NotFound from '../NotFound/NotFound';

const categoryLabel = {
  principal: 'Projeto principal',
  estudo: 'Projeto de estudo',
} as const;

const statusLabel = {
  finalizado: 'Finalizado',
  'em-evolucao': 'Em evolução',
  manutencao: 'Em manutenção',
} as const;

const levelLabel = {
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
} as const;

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return (
      <NotFound
        title="Projeto não encontrado"
        description="Não encontrei um projeto com este endereço. Você pode voltar para a lista e escolher outro card."
        actionLabel="Voltar para projetos"
        actionTo="/projects"
      />
    );
  }

  const image = project.image || defaultImg;

  return (
    <main className={styles.details}>
      <Link to="/projects" className={styles.backLink}>
        Voltar para projetos
      </Link>
      <article className={styles.content}>
        <div className={styles.imageWrap}>
          <img
            src={image}
            alt={project.imageAlt ?? `Screenshot do projeto ${project.title}`}
            loading="eager"
            decoding="async"
            width="960"
            height="720"
          />
        </div>
        <div className={styles.text}>
          <div className={styles.metaRow}>
            <span>{categoryLabel[project.category]}</span>
            {project.status ? <span>{statusLabel[project.status]}</span> : null}
            {project.level ? <span>{levelLabel[project.level]}</span> : null}
            {project.type ? <span>{project.type}</span> : null}
          </div>
          <h1>{project.title}</h1>
          <p className={styles.lead}>{project.description}</p>
          <h2>Sobre o projeto</h2>
          <p>{project.details ?? 'Projeto prático desenvolvido para consolidar fundamentos de desenvolvimento web.'}</p>
          <h2>O que pratiquei neste projeto</h2>
          <p>{project.learning ?? 'Estruturação de página, organização visual e publicação de uma experiência navegável.'}</p>
          <ul className={styles.tags} aria-label={`Tecnologias usadas em ${project.title}`}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          {project.futureImprovements && project.futureImprovements.length > 0 ? (
            <>
              <h2>Melhorias futuras</h2>
              <ul className={styles.futureList}>
                {project.futureImprovements.map((improvement) => (
                  <li key={improvement}>{improvement}</li>
                ))}
              </ul>
            </>
          ) : null}
          <div className={styles.actions}>
            {project.repository ? (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="strict-origin-when-cross-origin"
              >
                Repositório
              </a>
            ) : null}
            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="strict-origin-when-cross-origin"
              >
                Ver website
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  );
}
