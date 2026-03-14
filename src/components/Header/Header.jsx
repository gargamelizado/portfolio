import styles from "./Header.module.css";
import LogoGithub from "../../assets/github-logo2.png";
import LogoHeader from "../../assets/log2.jpeg";
import { useState } from "react";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";

// Ícones de redes sociais (pode usar SVGs ou emojis)
const socialLinks = [
  { href: 'https://github.com/gargamelizado', label: 'GitHub', icon: <img src={LogoGithub} alt="GitHub" className={styles.socialIcon} /> },
  { href: 'https://www.linkedin.com/in/marcelo-henrique-sarzedas-623690371/', label: 'LinkedIn', icon: '💼' },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
 const [darkMdode, setDarkMode] = useState(false);
const toggleDarkMode = () => {
  setDarkMode(!darkMdode);
  document.body.classList.toggle('dark-mode', !darkMdode);
  
}
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuActive(false);
  };
  
  return (
    <header className={`${styles.header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.wrapperHeader}>
        <div className={styles.logoButton}>
          
            <img src={LogoHeader} alt="logo" />
          
        </div>
        <button onClick={toggleMenu} id={styles.buttonMobile}>
          <img src={menuActive ? iconCloser : iconBars} id={styles.menuIcon} alt="" />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className={styles.navLi}>
              <a href="#about" onClick={() => scrollToSection('about')}>Sobre</a>
            </li>
            <li className={styles.navLi}>
              <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            </li>
            <li className={styles.navLi}>
              <a href="#projects" onClick={() => scrollToSection('projects')}>Projetos</a>
            </li>
            <li className={styles.navLi}>
              <a href="#contact" onClick={() => scrollToSection('contact')}>Contato</a>
            </li>
          </ul>
        </nav>
        <div className={styles.socialLinks}>
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" title={link.label} className={styles.socialLink}>
              {link.icon}
            </a>
          ))}
        <div className={styles.darkModeToggle}>
          <button onClick={toggleDarkMode} className={styles.darkModeButton}>
            {darkMdode ? '🌞' : '🌙'}
          </button>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
