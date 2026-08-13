import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Contact from './Contact';

describe('Contact', () => {
  it('valida campos obrigatórios antes do envio', () => {
    render(<Contact />);

    const form = screen.getByRole('button', { name: 'Enviar mensagem' }).closest('form');
    expect(form).not.toBeNull();
    if (!form) return;

    fireEvent.submit(form);

    expect(screen.getByRole('status')).toHaveTextContent('Preencha todos os campos antes de enviar.');
  });
});
