import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Stats from './components/Stats/Stats';
import Skills from './components/Skills/Skills';
import AITools from './components/AITools/AITools';
import GitHubStats from './components/GitHubStats/GitHubStats';
import Projects from './components/Projects/Projects';
import Timeline from './components/Timeline/Timeline';
import Certifications from './components/Certifications/Certifications';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <AITools />
        <GitHubStats />
        <Projects />
        <Timeline />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
