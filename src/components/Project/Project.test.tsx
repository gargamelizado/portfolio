import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Project from './Project';

describe('Project', () => {
  it('filtra a lista de projetos sem recarregar a página', () => {
    render(
      <MemoryRouter>
        <Project />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Projetos principais' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Projetos de estudo' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'React' }));

    expect(screen.getByRole('button', { name: 'React' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('heading', { name: 'Chock Trufas em React' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Burger Heaven' })).not.toBeInTheDocument();
  });
});
