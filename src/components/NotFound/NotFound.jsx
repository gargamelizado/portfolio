import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound({
  title = 'Página não encontrada',
  description = 'O endereço acessado não existe ou foi movido.',
  actionLabel = 'Voltar para a home',
  actionTo = '/',
}) {
  return (
    <main className={styles.notFound}>
      <section className={styles.panel}>
        <p className={styles.eyebrow}>404</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={actionTo} className={styles.action}>
          {actionLabel}
        </Link>
      </section>
    </main>
  );
}
