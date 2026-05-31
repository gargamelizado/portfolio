import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ProjectDetails from './ProjectDetails';

const renderDetailsRoute = (path: string) => {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('ProjectDetails', () => {
  it('mostra dados do projeto quando o slug existe', () => {
    renderDetailsRoute('/projects/chock-trufas-react');

    expect(screen.getByRole('heading', { name: 'Chock Trufas em React' })).toBeInTheDocument();
    expect(screen.getByText('O que pratiquei neste projeto')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Repositório' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver website' })).toBeInTheDocument();
  });

  it('trata slug inexistente com estado controlado', () => {
    renderDetailsRoute('/projects/slug-inexistente');

    expect(screen.getByRole('heading', { name: 'Projeto não encontrado' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Voltar para projetos' })).toHaveAttribute('href', '/projects');
  });
});
