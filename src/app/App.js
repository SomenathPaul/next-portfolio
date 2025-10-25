import './App.css'


import Navbar from "../components/1-navbar/Navbar";
import Home from "../components/2-home/Home";
import About from "../components/3-about/About";
import Skills from "../components/4-skills/Skills"; 
import Projects from "../components/5-projects/Projects";
import Achievements from "../components/7-achievements/Achievements";
import ContactForm from "../components/9-Form/ContactForm";
import Footer from "../components/8-footer/Footer";
import Experience from '@/components/6-experiance/Experience';
import FixedScroll from '../components/ui-components/fixedScroll';

export default function App() {
  return (
    <div className="portfolio-main">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <ContactForm />
      <Footer />
      <FixedScroll />
    </div>
  );
}