import { useRef, useState } from "react";
import CvModal from "../components/cv_modal";
import portrait from "../assets/me.jpeg";
import { FaGithub, FaLinkedin, FaPython, FaJava } from "react-icons/fa";
import { SiSpringboot, SiPostgresql } from "react-icons/si";
export default function Hero() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const cvButton = useRef<HTMLButtonElement>(null);
  return <><section className="hero-container" id="hero" aria-labelledby="hero-title"><div className="container hero">
    <div className="hero-copy">
      <span className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER · LONDON, UK</span>
      <h1 id="hero-title">Hi, I’m <span>Tony Igwe.</span></h1>
      <h2 className="gradient-text">Backend engineer.<br />Building with purpose.</h2>
      <p className="hero-description">I build APIs and backend systems with Python, FastAPI, Java, and Spring Boot. A recent Middlesex University graduate, focused on useful products and meaningful problems.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work ↗</a><button ref={cvButton} className="button button-outline" onClick={() => setIsCvOpen(true)} aria-haspopup="dialog">View résumé ↗</button></div>
      <div className="hero-socials"><a href="https://github.com/Tony338818" target="_blank" rel="noreferrer" aria-label="Tony on GitHub"><FaGithub /></a><a href="https://www.linkedin.com/in/chidubem-tony-igwe/" target="_blank" rel="noreferrer" aria-label="Tony on LinkedIn"><FaLinkedin /></a><span>Good ideas. Thoughtful code. Real impact.</span></div>
    </div>
    <div className="hero-visual"><div className="portrait-orbit"><img src={portrait} alt="Chidubem Tony Igwe" fetchPriority="high" /></div><span className="floating-tech tech-python" title="Python"><FaPython /></span><span className="floating-tech tech-react" title="Java"><FaJava /></span><span className="floating-tech tech-typescript" title="Spring Boot"><SiSpringboot /></span><span className="floating-tech tech-database" title="PostgreSQL"><SiPostgresql /></span><div className="portrait-label"><span className="status-dot" /> Always learning. Always building.</div></div>
  </div><a className="scroll-cue" href="#about">Discover more <span>↓</span></a></section>{isCvOpen && <CvModal returnFocusTo={cvButton} onClose={() => setIsCvOpen(false)} />}</>;
}
