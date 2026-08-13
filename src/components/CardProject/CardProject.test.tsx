import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { projectsData } from '../../data/projectsData';
import CardProject from './CardProject';

describe('CardProject', () => {
  it('renderiza título, tecnologias e links principais', () => {
    const project = projectsData.find((item) => item.slug === 'chock-trufas-react');

    expect(project).toBeDefined();
    if (!project) return;

    render(
      <MemoryRouter>
        <CardProject project={project} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Detalhes' })).toHaveAttribute(
      'href',
      `/projects/${project.slug}`
    );
    expect(screen.getByRole('link', { name: /repositório/i })).toHaveAttribute('href', project.repository);
    expect(screen.getByRole('link', { name: /website/i })).toHaveAttribute('href', project.website);
  });
});
