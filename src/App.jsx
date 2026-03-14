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
  const [lighterBackgroundEnabled, setLighterBackgroundEnabled] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('lighter-background', lighterBackgroundEnabled)

    return () => {
      document.body.classList.remove('lighter-background')
    }
  }, [lighterBackgroundEnabled])

  const toggleLighterBackground = () => {
    setLighterBackgroundEnabled((prev) => !prev)
  }

  return (
    <>
      <Header
        lighterBackgroundEnabled={lighterBackgroundEnabled}
        onToggleLighterBackground={toggleLighterBackground}
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
