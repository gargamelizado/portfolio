/**
 * Rota "/": landing completa. ids (#about, #skills, …) alimentam o scroll do Header.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

type HomeLocationState = {
  scrollTo?: string;
} | null;

export default function Home() {
  const location = useLocation();
  const state = location.state as HomeLocationState;

  // Navegação vinda do Header em /projects: rola para a seção após render e limpa o state da history.
  useEffect(() => {
    const id = state?.scrollTo;
    if (!id) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
    window.history.replaceState({}, document.title);
    return () => cancelAnimationFrame(frame);
  }, [location.key, state]);

  return (
    <section id="home">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Project mode="featured" />
      <Contact />
      <Footer />
    </section>
  );
}
