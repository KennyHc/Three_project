import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import ThreeScene from './components/ThreeScene'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <div className="canvas-container">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={0.3} />
              <spotLight
                position={[-10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={0.2}
              />
              <Environment preset="city" />
              <ThreeScene />
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
          <div className="hero-content">
            <h2>Welcome to My World</h2>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-content">
            <h2>About Me</h2>
            <p>I'm a passionate developer with expertise in 3D graphics and web development. My work focuses on creating immersive digital experiences that blend creativity with technical excellence.</p>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-content">
            <h2>Projects</h2>
            <div className="projects-grid">
              {/* Project cards will go here */}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-content">
            <h2>Get in Touch</h2>
            <p>Feel free to reach out for collaborations or just a friendly hello! I'm always open to discussing new projects and opportunities.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
