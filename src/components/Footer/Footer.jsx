/**
 * Rodapé simples com ano atual (portfólio costuma aparecer só na rota / com Home).
 */
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} Marcelo Henrique • Desenvolvedor Full Stack Júnior
    </footer>
  );
}
