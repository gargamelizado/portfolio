/**
 * Barra superior: links de rota (NavLink), âncoras com scroll na landing,
 * menu mobile e toggle de classe darkmode no body.
 */
import styles from "./Header.module.css";
import LogoGithub from "../../assets/github-logo2.png";
import LogoHeader from "../../assets/log2.jpeg";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";
import Off from "../../assets/toggle_off.png";
import On from "../../assets/toggle_on.png";
import Cv from "../cv/Marcelo-Henrique-Curriculo.pdf"

const storageThemeKey = 'portfolio-theme';

const getSavedTheme = (): string | null => {
  try {
    return localStorage.getItem(storageThemeKey);
  } catch {
    return null;
  }
};

const saveTheme = (theme: 'dark' | 'light'): void => {
  try {
    localStorage.setItem(storageThemeKey, theme);
  } catch {
    // O tema continua funcionando na sessão mesmo se o navegador bloquear storage.
  }
};

type SocialLink = {
  href: string;
  label: string;
  icon: ReactNode;
};

/** Links externos exibidos à direita no desktop */
const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/gargamelizado",
    label: "GitHub",
    icon: <img src={LogoGithub} alt="GitHub" className={styles.socialIcon} />,
  },
  {
    href: "https://www.linkedin.com/in/marcelo-henrique-sarzedas-justo-64841440b/",
    label: "LinkedIn",
    icon: <span aria-hidden="true">in</span>,
  },
  {
    href: Cv,
    label: "Visualizar ou baixar currículo",
    icon: "📄",
  },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = getSavedTheme();
    return savedTheme === 'dark';
  });

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };
  const closeMenu = () => {
    setMenuActive(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevState) => {
      const nextState = !prevState;
      saveTheme(nextState ? 'dark' : 'light');
      return nextState;
    });
  };

  useEffect(() => {
    document.body.classList.toggle('darkmode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!menuActive) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuActive]);

  useEffect(() => {
    document.body.style.overflow = menuActive ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuActive]);

  /** Scroll suave até um elemento com id (só útil quando esse id existe no DOM). */
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  /** Na home faz scroll; em /projects volta para / e Home usa location.state para rolar depois do mount. */
  const goToSection = (id: string): void => {
    if (location.pathname !== "/") {
      navigate('/', { state: { scrollTo: id } });
    } else {
      scrollToSection(id);
    }
    closeMenu();
  };

  /** Destaque visual do item de menu cuja rota está ativa (NavLink). */
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLinkActive}` : undefined;

  return (
    <header className={styles.header}>
      <a href="#main-content" className={styles.skipLink}>
        Pular para o conteúdo
      </a>
      <div className={styles.wrapperHeader}>
        <NavLink to="/" className={styles.logoButton} end aria-label="Início">
          <img src={LogoHeader} alt="" />
        </NavLink>

        <button
          type="button"
          className={styles.buttonMobile}
          onClick={toggleMenu}
          aria-label={menuActive ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuActive}
          aria-controls="primary-navigation"
        >
          <img
            src={menuActive ? iconCloser : iconBars}
            className={styles.menuIcon}
            alt=""
          />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${menuActive ? styles.navOpen : ""}`}
          aria-label="Navegação principal"
        >
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <NavLink to="/" end className={navClass} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className={styles.navLi}>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("about");
                }}
              >
                Sobre
              </a>
            </li>
            <li className={styles.navLi}>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("skills");
                }}
              >
                Skills
              </a>
            </li>
            <li className={styles.navLi}>
              <NavLink to="/projects" className={navClass} onClick={closeMenu}>
                Projetos
              </NavLink>
            </li>
            <li className={styles.navLi}>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("experience");
                }}
              >
                Experiência
              </a>
            </li>
            {/*
              <li className={styles.navLi}>
                <NavLink
                  to="/typescript-demo"
                  className={navClass}
                  onClick={closeMenu}
                >
                  TS Demo
                </NavLink>
              </li>
            */}
            <li className={styles.navLi}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("contact");
                }}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="strict-origin-when-cross-origin"
              title={link.label}
              className={styles.socialLink}
            >
              {link.icon}
            </a>
          ))}
          <div className={styles.darkModeToggle}>
            <button
              type="button"
              onClick={toggleDarkMode}
              className={styles.darkModeButton}
              aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {darkMode ? (
                <>
                  <span aria-hidden="true" className={styles.themeIcon}>☀</span>
                  <img src={On} alt="" />
                </>
              ) : (
                <>
                  <span aria-hidden="true" className={styles.themeIcon}>☾</span>
                  <img src={Off} alt="" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        className={`${styles.backdrop} ${menuActive ? styles.backdropOpen : ""}`}
        onClick={closeMenu}
        aria-label="Fechar menu"
      />
    </header>
  );
};

export default Header;
