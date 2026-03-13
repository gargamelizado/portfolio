import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [screenGlowEnabled, setScreenGlowEnabled] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('screen-glow-disabled', !screenGlowEnabled)

    return () => {
      document.body.classList.remove('screen-glow-disabled')
    }
  }, [screenGlowEnabled])

  const toggleScreenGlow = () => {
    setScreenGlowEnabled((prev) => !prev)
  }

  return (
    <>
      <Header
        screenGlowEnabled={screenGlowEnabled}
        onToggleScreenGlow={toggleScreenGlow}
      />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App

