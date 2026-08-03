import Navbar from '@/components/Navbar';
import Background from '@/components/Background';
import Hero from '@/sections/Hero';
import Education from '@/sections/Education';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Contact from '@/sections/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container relative">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;