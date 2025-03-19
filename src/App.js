
import './App.css';
import './index.css';
import  Navbar  from './components/Navbar';
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Pojects';
import Skills from "./components/Skills";
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Getintouch from './components/Getintouch';
import Footer from './components/Footer';

function App() {
  return (
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
  );
}

export default App;
