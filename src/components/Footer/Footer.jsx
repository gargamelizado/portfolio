/**
 * Rodapé simples com ano atual (portfólio costuma aparecer só na rota / com Home).
 */
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} Marcelo | Portfólio Web Dev
    </footer>
  );
}
