import React from 'react';
import styles from './CardProject.module.css';
import defaultImg from '../../assets/logo.png';

export default function CardProject({ title, description, link, image }) {
  const imgSrc = image || defaultImg;
  return (
    <div className={styles.card}>
      <div className={styles.thumbWrap}>
        <img src={imgSrc} alt={title} className={styles.thumb} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        Ver Projeto
      </a>
    </div>
  );
}
