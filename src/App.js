import './App.css';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';  // Use HashRouter
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';  // Fixed typo: Pojects -> Projects
import Skills from "./components/Skills";
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Getintouch from './components/Getintouch';
import Footer from './components/Footer';

function App() {
  return (
    <Router>  {/* Wrap with HashRouter */}
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Getintouch />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
