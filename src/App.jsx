import { useCallback } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './App.css';

function App() {
  const handleNavigate = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <main className="bg-black min-h-screen">
      <Navbar onNavigate={handleNavigate} />
      <Home />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
