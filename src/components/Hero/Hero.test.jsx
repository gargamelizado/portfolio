import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
  it('apresenta disponibilidade e ações principais', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(screen.getByText('Disponível para projetos e oportunidades')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver projetos' })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: 'Entrar em contato' })).toBeInTheDocument();
  });
});
