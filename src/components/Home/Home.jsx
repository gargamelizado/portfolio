import React from 'react';
import Hero from '../Hero/Hero';
import Headers from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <section id="home">
      <Headers />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </section>
  );
}
