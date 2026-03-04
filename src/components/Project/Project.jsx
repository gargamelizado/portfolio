import CardProject from "../CardProject/CardProject";

const projectsData = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    link: 'https://github.com/gargamelizado',
    image: null,
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    link: 'https://github.com/gargamelizado',
    image: null,
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto 3',
    link: 'https://github.com/gargamelizado',
    image: null,
  },
];

export default function Project() {
  return (
    <section id="projects" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>🚀 Projetos</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projectsData.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}