import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
  it('apresenta disponibilidade para oportunidades e ações principais', () => {
    render(<Hero />);

    expect(screen.getByText('Disponível para oportunidades')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver projetos' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Entrar em contato' })).toBeInTheDocument();
  });
});
