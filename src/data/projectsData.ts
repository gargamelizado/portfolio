import type { Project, ProjectCategory } from '../types/project';
import Petshop from '../components/Project/img/pet-shop.webp';
import ClinicaMedica from '../components/Project/img/clinica-medica.webp';
import Padaria from '../components/Project/img/padaria.webp';
import Alfatech from '../components/Project/img/alfa-tech.webp';
import PousadaSecreta from '../components/Project/img/pousada-secreta.webp';
import AgenciaViagens from '../components/Project/img/Agencia-de-Viagens.webp';
import Cafeteria from '../components/Project/img/Cafeteria.webp';
import Imobiliaria from '../components/Project/img/Imobiliaria.webp';
import DivulgacaoLivro from '../components/Project/img/Pagina-de-Divulgacao-do-Livro.webp';
import ParqueLogin from '../components/Project/img/pagina-login.webp';
import LinkBioNeymar from '../components/Project/img/LinkBio-do-Neymar-Jr-.webp';
import BurgerHeaven from '../components/Project/img/BURGER-HEAVEN.webp';
import ChockTrufas from '../components/Project/img/Chock-Trufas.webp';
import ChockTrufasReact from '../components/Project/img/Chock Trufas React.webp';

const demoUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const projectsData = [
  {
    id: 1,
    slug: 'chock-trufas-react',
    title: 'Chock Trufas em React',
    description:
      'Versão do projeto Chock Trufas criada com React, componentes reutilizáveis e organização de interface para cardápio e compra.',
    technologies: ['React', 'JavaScript', 'CSS3', 'Componentização'],
    details:
      'Projeto próprio recriado em React para evoluir uma landing page real para uma experiência mais organizada, com componentes, páginas internas e fluxo de apresentação dos produtos.',
    learning:
      'Pratiquei componentização, organização de pastas, reaproveitamento de seções, controle de estado e melhoria progressiva de uma ideia própria.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/proprio/chock-trufas-react',
    website: demoUrl('project-demos/chock-trufas-react/index.html'),
    image: ChockTrufasReact,
    imageAlt: 'Screenshot do projeto Chock Trufas em React',
    category: 'principal',
    featured: true,
    priority: 10,
    status: 'em-evolucao',
    level: 'intermediario',
    type: 'React',
    caseStudy: {
      problem:
        'A Chock Trufas precisava evoluir de uma venda informal em WhatsApp para uma experiência de compra mais clara, organizada e escalável.',
      challenge:
        'Transformar a ideia visual em uma solução com catalogação de produtos, carrinho e fluxo de pedido sem perder a identidade da marca.',
      solution:
        'Reestruturei a interface em React, organizei o catálogo em componentes reutilizáveis e adicionei um fluxo de compra mais didático e consistente para o cliente.',
      learning:
        'A principal aprendizagem foi enxergar que a experiência do usuário melhora quando a interface reduz atrito, dá clareza ao produto e fortalece a confiança na compra.',
    },
    futureImprovements: [
      'Aprimorar responsividade fina em telas muito pequenas.',
      'Evoluir a página de compra com validações e estados mais completos.',
      'Adicionar testes para os principais componentes do fluxo.',
    ],
  },
  {
    id: 2,
    slug: 'burger-heaven',
    title: 'Burger Heaven',
    description:
      'Landing page de hamburgueria com cardápio, apresentação visual forte e chamada para contato.',
    technologies: ['HTML5', 'CSS3', 'Landing page', 'Responsividade'],
    details:
      'Página criada para praticar estrutura semântica, hierarquia visual, seções comerciais e acabamento responsivo em uma marca fictícia.',
    learning:
      'Pratiquei composição visual, organização de conteúdo promocional, responsividade e ajustes de HTML/CSS para uma apresentação mais profissional.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/mentoria/BURGER%20HEAVEN',
    website: demoUrl('project-demos/burger-heaven/index.html'),
    image: BurgerHeaven,
    imageAlt: 'Screenshot do projeto Burger Heaven',
    category: 'principal',
    featured: true,
    priority: 20,
    status: 'finalizado',
    level: 'intermediario',
    type: 'Landing Page',
    futureImprovements: [
      'Adicionar pequenas interações com JavaScript.',
      'Criar variações de seções para cardápio e depoimentos.',
    ],
  },
  {
    id: 3,
    slug: 'chock-trufas',
    title: 'Chock Trufas',
    description:
      'Landing page própria para loja de doces, com cardápio, identidade visual e informações de contato.',
    technologies: ['HTML5', 'CSS3', 'Landing page', 'Projeto próprio'],
    details:
      'Projeto próprio em HTML e CSS usado como base para evoluir a comunicação visual da marca e preparar a versão posterior em React.',
    learning:
      'Pratiquei estruturação de página comercial, organização de imagens, seções de produtos e chamadas para ação.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/proprio/chock%20trufas',
    website: demoUrl('project-demos/chock-trufas/index.html'),
    image: ChockTrufas,
    imageAlt: 'Screenshot do projeto Chock Trufas',
    category: 'principal',
    featured: true,
    priority: 30,
    status: 'finalizado',
    level: 'intermediario',
    type: 'Projeto próprio',
    futureImprovements: [
      'Refinar performance das imagens do catálogo.',
      'Padronizar componentes visuais com a versão em React.',
    ],
  },
  {
    id: 4,
    slug: 'alfa-tech',
    title: 'Alfa Tech',
    description:
      'Site institucional para empresa de tecnologia, com páginas internas e tabela de preços.',
    technologies: ['HTML5', 'CSS3', 'Tabelas', 'Multi-páginas'],
    details:
      'Projeto com navegação entre páginas, apresentação de planos e estrutura pensada para um provedor de hospedagem.',
    learning:
      'Pratiquei tabelas, links internos, consistência visual e organização de conteúdo em mais de uma página.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Provedor-Hospedagem',
    website: demoUrl('project-demos/alfa-tech/home.html'),
    image: Alfatech,
    imageAlt: 'Screenshot do projeto Alfa Tech',
    category: 'principal',
    featured: true,
    priority: 40,
    status: 'finalizado',
    level: 'intermediario',
    type: 'HTML/CSS',
    futureImprovements: [
      'Revisar metadados da página demonstrativa.',
      'Adicionar estados de foco mais visíveis nos links.',
    ],
  },
  {
    id: 5,
    slug: 'cafeteria',
    title: 'Cafeteria',
    description:
      'Site de cafeteria com seções parallax, informações de contato e apresentação do ambiente.',
    technologies: ['HTML5', 'CSS3', 'Parallax', 'Responsividade'],
    details:
      'Projeto visual com foco em atmosfera, navegação por seções e uso de imagens de fundo para criar profundidade.',
    learning:
      'Pratiquei efeitos visuais com CSS, posicionamento de fundos e organização de conteúdo institucional.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Cafeteria',
    website: demoUrl('project-demos/cafeteria/index.html'),
    image: Cafeteria,
    imageAlt: 'Screenshot do projeto Cafeteria',
    category: 'principal',
    featured: true,
    priority: 50,
    status: 'finalizado',
    level: 'intermediario',
    type: 'Landing Page',
    futureImprovements: [
      'Reduzir dependência de imagens pesadas.',
      'Adicionar pequenos ajustes de acessibilidade em links internos.',
    ],
  },
  {
    id: 6,
    slug: 'clinica-medica',
    title: 'Clínica Médica',
    description:
      'Site para clínica médica com páginas de especialidades, contato e apresentação dos serviços.',
    technologies: ['HTML5', 'CSS3', 'Layout responsivo'],
    details:
      'Projeto voltado para organização de informações de saúde, com hierarquia visual e navegação objetiva.',
    learning:
      'Reforcei boas práticas de estrutura de páginas e uso de conteúdo informativo em seções.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Clinica',
    website: demoUrl('project-demos/clinica-medica/index.html'),
    image: ClinicaMedica,
    imageAlt: 'Screenshot do projeto Clínica Médica',
    category: 'estudo',
    featured: false,
    priority: 110,
    status: 'finalizado',
    level: 'iniciante',
    type: 'HTML/CSS',
  },
  {
    id: 7,
    slug: 'pet-shop',
    title: 'Pet Shop',
    description:
      'Site responsivo para divulgação de produtos e serviços de pet shop, desenvolvido com HTML e CSS.',
    technologies: ['HTML5', 'CSS3', 'Responsividade'],
    details:
      'Projeto criado para praticar estrutura semântica, composição visual e organização de seções comerciais.',
    learning:
      'Aprimorei a construção de layouts promocionais com foco em leitura clara e navegação simples.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Petshop',
    website: demoUrl('project-demos/pet-shop/index.html'),
    image: Petshop,
    imageAlt: 'Screenshot do projeto Pet Shop',
    category: 'estudo',
    featured: false,
    priority: 120,
    status: 'finalizado',
    level: 'iniciante',
    type: 'HTML/CSS',
  },
  {
    id: 8,
    slug: 'pousada-secreta',
    title: 'Pousada Secreta',
    description:
      'Site para pousada com páginas de quartos, informações e apresentação visual do local.',
    technologies: ['HTML5', 'CSS3', 'Multi-páginas'],
    details:
      'Projeto com foco em turismo, apresentando acomodações, chamadas visuais e navegação entre conteúdos.',
    learning:
      'Pratiquei organização de múltiplas páginas e consistência de estilos em uma experiência completa.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Pousada',
    website: demoUrl('project-demos/pousada-secreta/index.html'),
    image: PousadaSecreta,
    imageAlt: 'Screenshot do projeto Pousada Secreta',
    category: 'estudo',
    featured: false,
    priority: 130,
    status: 'finalizado',
    level: 'iniciante',
    type: 'HTML/CSS',
  },
  {
    id: 9,
    slug: 'agencia-de-viagens',
    title: 'Agência de Viagens',
    description:
      'Página para agência de viagens com formulário de orçamento, banner e seções de ofertas.',
    technologies: ['HTML5', 'CSS3', 'Formulário'],
    details:
      'Projeto criado para praticar formulários, organização de imagens, banners e blocos comerciais em uma landing page.',
    learning:
      'Aprimorei a montagem de formulários e a distribuição de conteúdo em seções de fácil leitura.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Agencia-de-Viagens',
    website: demoUrl('project-demos/agencia-de-viagens/index.html'),
    image: AgenciaViagens,
    imageAlt: 'Screenshot do projeto Agência de Viagens',
    category: 'estudo',
    featured: false,
    priority: 140,
    status: 'finalizado',
    level: 'iniciante',
    type: 'Landing Page',
  },
  {
    id: 10,
    slug: 'imobiliaria',
    title: 'Imobiliária',
    description:
      'Página institucional para imobiliária, com apresentação de serviços, corretores e contatos.',
    technologies: ['HTML5', 'CSS3', 'Institucional'],
    details:
      'Projeto pensado para comunicar serviços de forma objetiva, usando seções simples e chamadas de contato.',
    learning:
      'Reforcei o uso de estrutura semântica, links de contato e composição visual para negócios locais.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Imobiliária',
    website: demoUrl('project-demos/imobiliaria/index.html'),
    image: Imobiliaria,
    imageAlt: 'Screenshot do projeto Imobiliária',
    category: 'estudo',
    featured: false,
    priority: 150,
    status: 'finalizado',
    level: 'iniciante',
    type: 'HTML/CSS',
  },
  {
    id: 11,
    slug: 'padaria',
    title: 'Padaria',
    description:
      'Landing page para padaria, com apresentação de produtos e visual simples para o usuário.',
    technologies: ['HTML5', 'CSS3', 'Landing page'],
    details:
      'Projeto de página única, pensado para comunicar rapidamente os produtos e a identidade do negócio.',
    learning:
      'Trabalhei espaçamento, composição de textos e construção de uma experiência direta.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Padaria',
    website: demoUrl('project-demos/padaria/index.html'),
    image: Padaria,
    imageAlt: 'Screenshot do projeto Padaria',
    category: 'estudo',
    featured: false,
    priority: 160,
    status: 'finalizado',
    level: 'iniciante',
    type: 'Landing Page',
  },
  {
    id: 12,
    slug: 'divulgacao-livro',
    title: 'Divulgação de Livro',
    description:
      'Página de divulgação de livro com informações sobre a obra, autor e chamada para compra.',
    technologies: ['HTML5', 'CSS3', 'Landing page'],
    details:
      'Projeto de landing page editorial com foco em apresentação de produto e hierarquia de conteúdo.',
    learning:
      'Pratiquei construção de textos, destaque visual e organização de informações promocionais.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/Página-de-Divulgação-do-Livro',
    website: demoUrl('project-demos/divulgacao-livro/index.html'),
    image: DivulgacaoLivro,
    imageAlt: 'Screenshot do projeto Divulgação de Livro',
    category: 'estudo',
    featured: false,
    priority: 170,
    status: 'finalizado',
    level: 'iniciante',
    type: 'Landing Page',
  },
  {
    id: 13,
    slug: 'linkbio-neymar',
    title: 'LinkBio Neymar Jr',
    description:
      'Página estilo link bio com vídeo, links, visual temático e tabela de estatísticas.',
    technologies: ['HTML5', 'CSS3', 'Mídia'],
    details:
      'Projeto com foco em página pessoal temática, usando imagens, vídeo, links externos e tabela.',
    learning:
      'Pratiquei composição visual, uso de mídias e criação de uma página de links mais elaborada.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/devmedia/LinkBio-do-Neymar-Jr',
    website: demoUrl('project-demos/linkbio-neymar/index.html'),
    image: LinkBioNeymar,
    imageAlt: 'Screenshot do projeto LinkBio Neymar Jr',
    category: 'estudo',
    featured: false,
    priority: 180,
    status: 'finalizado',
    level: 'iniciante',
    type: 'HTML/CSS',
  },
  {
    id: 14,
    slug: 'parque-login',
    title: 'Página de Login',
    description:
      'Página de login criada para praticar composição visual, formulário e layout centralizado.',
    technologies: ['HTML5', 'CSS3', 'Formulário'],
    details:
      'Projeto simples para treinar campos de formulário, imagem de apoio e organização de uma tela de autenticação estática.',
    learning:
      'Trabalhei alinhamento, contraste, estados básicos de formulário e apresentação direta em uma tela pequena.',
    repository:
      'https://github.com/gargamelizado/portfolio/tree/master/src/components/Project/mentoria/pagina-login',
    website: demoUrl('project-demos/parque-login/index.html'),
    image: ParqueLogin,
    imageAlt: 'Screenshot do projeto Página de Login',
    category: 'estudo',
    featured: false,
    priority: 190,
    status: 'finalizado',
    level: 'iniciante',
    type: 'HTML/CSS',
  },
] satisfies Project[];

export const sortProjectsByPriority = (projects: Project[]): Project[] =>
  [...projects].sort((current, next) => current.priority - next.priority);

export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
  sortProjectsByPriority(projectsData.filter((project) => project.category === category));

export const featuredProjects = sortProjectsByPriority(
  projectsData.filter((project) => project.featured)
);

export const sortedProjects = sortProjectsByPriority(projectsData);
