export type ProjectCategory = 'principal' | 'estudo';

export type ProjectStatus = 'finalizado' | 'em-evolucao' | 'manutencao';

export type ProjectLevel = 'iniciante' | 'intermediario';

export type ProjectType =
  | 'React'
  | 'Landing Page'
  | 'HTML/CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'Projeto próprio';

export type ProjectCaseStudy = {
  problem: string;
  challenge: string;
  solution: string;
  learning: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  details?: string;
  learning?: string;
  technologies: string[];
  repository?: string;
  website?: string;
  image: string;
  imageAlt?: string;
  category: ProjectCategory;
  featured: boolean;
  priority: number;
  status?: ProjectStatus;
  level?: ProjectLevel;
  type?: ProjectType;
  futureImprovements?: string[];
  caseStudy?: ProjectCaseStudy;
};
