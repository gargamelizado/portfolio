import styles from "./Header.module.css";
import Button from "../Button/button"
import LogoHeader from "../../assets/logo.png";
import { useState } from "react";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";

// Ícones de redes sociais (pode usar SVGs ou emojis)
const socialLinks = [
  { href: 'https://github.com/gargamelizado', label: 'GitHub', icon: '🐙' },
  { href: 'https://www.linkedin.com/in/marcelo-henrique-sarzedas-623690371/', label: 'LinkedIn', icon: '💼' },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuActive(false);
  };

  return (
    <header className={`${styles.header} ${menuActive ? styles.active : ""}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
      <div className={styles.wrapperHeader}>
        <div>
          
            <img src={LogoHeader} alt="logo" />
          
        </div>
        <button onClick={toggleMenu} id={styles.buttonMobile}>
          <img src={menuActive ? iconCloser : iconBars} id={styles.menuIcon} alt="" />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <a href="#home" onClick={() => scrollToSection('home')} style={{ margin: '0 1rem', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Home</a>
            </li>
            <li className={styles.navLi}>
              <a href="#about" onClick={() => scrollToSection('about')} style={{ margin: '0 1rem', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Sobre</a>
            </li>
            <li className={styles.navLi}>
              <a href="#skills" onClick={() => scrollToSection('skills')} style={{ margin: '0 1rem', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Skills</a>
            </li>
            <li className={styles.navLi}>
              <a href="#projects" onClick={() => scrollToSection('projects')} style={{ margin: '0 1rem', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Projetos</a>
            </li>
            <li className={styles.navLi}>
              <a href="#contact" onClick={() => scrollToSection('contact')} style={{ margin: '0 1rem', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Contato</a>
            </li>
          </ul>
        </nav>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1.5rem' }}>
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" title={link.label} style={{ fontSize: '1.5rem', textDecoration: 'none' }}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
