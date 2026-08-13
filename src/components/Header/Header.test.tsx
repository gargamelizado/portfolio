import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('exibe um link para pular direto ao conteúdo principal', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const skipLink = screen.getByRole('link', { name: 'Pular para o conteúdo' });

    expect(skipLink).toHaveAttribute('href', '#main-content');
  });
});
