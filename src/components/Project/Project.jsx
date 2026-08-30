/**
 * Lista de projetos do portfólio. Reutilizada na home (dentro de Home) e sozinha na rota /projects.
 * projectsData: metadados + screenshots em ./img
 */
import { useState } from "react";
import styles from "./Project.module.css";
import CardProject from "../CardProject/CardProject";
import {
  featuredProjects,
  getProjectsByCategory,
  sortedProjects,
} from "../../data/projectsData";

const projectMode = "featured";

const filterOptionsList = [
  "todos",
  "principais",
  "estudos",
  "react",
  "html-css",
  "typescript",
];

const baseFilters = [
  { label: "Todos", value: "todos" },
  { label: "Principais", value: "principais" },
  { label: "Estudos", value: "estudos" },
  { label: "React", value: "react" },
  { label: "HTML/CSS", value: "html-css" },
];

const hasTypeScriptProjects = sortedProjects.some((project) =>
  project.technologies.some((technology) => technology.toLowerCase().includes("typescript"))
);

const filterOptions = hasTypeScriptProjects
  ? [...baseFilters, { label: "TypeScript", value: "typescript" }]
  : baseFilters;

const projectMatchesFilter = (project, filter) => {
  const normalizedTechs = project.technologies.map((technology) => technology.toLowerCase());

  if (filter === "principais") return project.category === "principal";
  if (filter === "estudos") return project.category === "estudo";
  if (filter === "react") return normalizedTechs.includes("react") || project.type === "React";
  if (filter === "html-css") {
    return (
      project.type === "HTML/CSS" ||
      (normalizedTechs.some((technology) => technology.includes("html")) &&
        normalizedTechs.some((technology) => technology.includes("css")))
    );
  }
  if (filter === "typescript") {
    return normalizedTechs.some((technology) => technology.includes("typescript")) || project.type === "TypeScript";
  }

  return true;
};

const renderProjectGrid = (projects) => (
  <div className={styles.projectGrid}>
    {projects.map((project) => (
      <CardProject key={project.id} project={project} />
    ))}
  </div>
);

export default function Project({ mode = "all" }) {
  const [activeFilter, setActiveFilter] = useState("todos");
  const isFeaturedMode = mode === "featured";
  const projects = isFeaturedMode
    ? featuredProjects
    : sortedProjects.filter((project) => projectMatchesFilter(project, activeFilter));
  const mainProjects = getProjectsByCategory("principal");
  const studyProjects = getProjectsByCategory("estudo");

  return (
    <section id="projects" className={styles.projectSection}>
      <p className={styles.projectEyebrow}>
        {isFeaturedMode ? "Trabalhos selecionados" : "Catálogo de projetos"}
      </p>
      <h1 className={styles.projectTitle}>
        {isFeaturedMode ? "Projetos em destaque" : "Todos os projetos"}
      </h1>
      <p className={styles.projectIntro}>
        {isFeaturedMode
          ? "Projetos selecionados que refletem meu processo de criação com React, TypeScript, HTML e CSS, com foco em interfaces funcionais, responsivas e bem estruturadas."
          : "Abaixo estão projetos principais e estudos práticos desenvolvidos ao longo da minha evolução como desenvolvedor, com foco em aplicação real de conceitos, qualidade de código e boa experiência de uso."}
      </p>

      {!isFeaturedMode ? (
        <div className={styles.filters} aria-label="Filtros de projetos">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={activeFilter === filter.value ? styles.filterActive : styles.filterButton}
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      ) : null}

      {isFeaturedMode ? renderProjectGrid(projects) : null}

      {!isFeaturedMode && activeFilter === "todos" ? (
        <div className={styles.projectGroups}>
          <div className={styles.projectGroup}>
            <h2>Projetos principais</h2>
            {renderProjectGrid(mainProjects)}
          </div>
          <div className={styles.projectGroup}>
            <h2>Projetos de estudo</h2>
            {renderProjectGrid(studyProjects)}
          </div>
        </div>
      ) : null}

      {!isFeaturedMode && activeFilter !== "todos" && projects.length > 0
        ? renderProjectGrid(projects)
        : null}

      {!isFeaturedMode && projects.length === 0 ? (
        <p className={styles.emptyState}>Nenhum projeto encontrado para este filtro.</p>
      ) : null}
    </section>
  );
}
