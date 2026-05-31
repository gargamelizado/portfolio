/**
 * Grade de tecnologias; dados em array local (fácil de estender).
 */
import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import git from '../../assets/git.png';
import figma from '../../assets/figma.png';
import Mysql from '../../assets/mysql.png';
import styles from './Skills.module.css';

const skills = [
  { name: 'HTML5', icon: html },
  { name: 'CSS3', icon: css },
  { name: 'JavaScript', icon: js },
  { name: 'React', icon: react },
  { name: 'Node.js', icon: node },
  { name: 'Git', icon: git },
  { name: 'Figma', icon: figma },
  { name: 'MySQL', icon: Mysql }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillCard}>
            <img src={skill.icon} alt={skill.name} className={styles.icon} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
