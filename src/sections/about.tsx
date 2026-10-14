import portrait from "../assets/me.jpeg";
import { HiOutlineCode, HiOutlineChip, HiOutlineLightBulb } from "react-icons/hi";
import { FaUtensils, FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlinePuzzle } from "react-icons/hi";
export default function About() {
  return <section className="about-container" id="about" aria-labelledby="about-title"><div className="container">
    <div className="section-heading"><span className="eyebrow">THE PERSON BEHIND THE CODE</span><h2 id="about-title">About <span>me.</span></h2><p>Understanding systems. Building things that help.</p></div>
    <div className="about"><div className="about-portrait"><img src={portrait} alt="Tony Igwe" loading="lazy" /><span>BSc graduate · Middlesex University<br /><strong>First Class Honours</strong></span></div>
    <div className="about-story"><h3 className="gradient-text">I’m Chidubem Tony Igwe.</h3>
    <p>I recently graduated from Middlesex University London with a BSc in Information Technology and Business Information Systems. Before university, I studied Software Engineering at Aptech in Lagos, where I developed my interest in backend engineering and how systems work behind the scenes.</p>
    <p>Since then, I’ve worked mainly with Python, FastAPI, Java, and Spring Boot. On TradeAid, a WhatsApp-based business assistant, I worked across the APIs, PostgreSQL database, Redis, and NLP components. It gave me the chance to think about how the different parts of a system work together.</p>
    <p>I want to build things that are useful to people. I’m looking for an environment where I can contribute to meaningful problems at scale, learn from experienced engineers, and keep growing as a software engineer.</p>
    <div className="specialties"><div><HiOutlineCode /><span>Backend engineering & API development</span></div><div><HiOutlineChip /><span>NLP & business automation</span></div><div><HiOutlineLightBulb /><span>Understanding how systems work together</span></div></div></div></div>
    <div className="personal-interests"><div className="interests-intro"><span className="eyebrow">BEYOND THE CODE</span><h3>A little more about me.</h3></div><div className="interest"><FaUtensils aria-hidden="true" /><h4>Cooking</h4><p>I enjoy spending time in the kitchen and making something good to share.</p></div><div className="interest"><HiOutlinePuzzle aria-hidden="true" /><h4>Sudoku</h4><p>A favourite train companion. There’s something satisfying about solving a good puzzle.</p></div><div className="interest"><FaChalkboardTeacher aria-hidden="true" /><h4>Teaching & sharing</h4><p>From programming to faith and personal development, I enjoy sharing things that could help someone else.</p></div></div>
  </div></section>;
}
