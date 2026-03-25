/**
 * Barra superior: links de rota (NavLink), âncoras com scroll na landing,
 * menu mobile e toggle de classe darkmode no body.
 */
import styles from "./Header.module.css";
import LogoGithub from "../../assets/github-logo2.png";
import LogoHeader from "../../assets/log2.jpeg";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";

/** Links externos exibidos à direita no desktop */
const socialLinks = [
  { href: 'https://github.com/gargamelizado', label: 'GitHub', icon: <img src={LogoGithub} alt="GitHub" className={styles.socialIcon} /> },
  { href: 'https://www.linkedin.com/in/marcelo-henrique-sarzedas-623690371/', label: 'LinkedIn', icon: '💼' },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('darkmode', !darkMode);
  };
  /** Scroll suave até um elemento com id (só útil quando esse id existe no DOM). */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuActive(false);
  };

  /** Na home faz scroll; em /projects volta para / e Home usa location.state para rolar depois do mount. */
  const goToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      scrollToSection(id);
    }
    setMenuActive(false);
  };

  /** Destaque visual do item de menu cuja rota está ativa (NavLink). */
  const navClass = ({ isActive }) =>
    isActive ? `${styles.navLinkActive}` : undefined;
  
  return (
    <header className={`${styles.header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.wrapperHeader}>
        <NavLink to="/" className={styles.logoButton} end aria-label="Início">
          <img src={LogoHeader} alt="" />
        </NavLink>
        <button onClick={toggleMenu} id={styles.buttonMobile}>
          <img src={menuActive ? iconCloser : iconBars} id={styles.menuIcon} alt="" />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <NavLink to="/" end className={navClass}>
                Home
              </NavLink>
            </li>
            <li className={styles.navLi}>
              <a href="#about" onClick={(e) => { e.preventDefault(); goToSection('about'); }}>
                Sobre
              </a>
            </li>
            <li className={styles.navLi}>
              <a href="#skills" onClick={(e) => { e.preventDefault(); goToSection('skills'); }}>
                Skills
              </a>
            </li>
            <li className={styles.navLi}>
              <NavLink to="/projects" className={navClass}>
                Projetos
              </NavLink>
            </li>
            <li className={styles.navLi}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); goToSection('contact'); }}>
                Contato
              </a>
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
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
