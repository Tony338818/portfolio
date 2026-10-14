import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
export default function Journey() {
  return <section className="journey-container" id="journey" aria-labelledby="journey-title"><div className="journey">
    <div className="section-heading"><span className="eyebrow">LEARNING. BUILDING. GROWING.</span><h2 id="journey-title">My <span>journey.</span></h2><p>The education and experience behind the work.</p></div>
    <div className="journey-content"><div className="card"><div className="card-title"><FaGraduationCap className="icon" /><h2>Education</h2></div>
      <div className="item"><span className="date">Sept 2025 – June 2026 · Graduated</span><h3>Middlesex University, London</h3><p>BSc Information Technology & Business Information Systems</p><p className="highlight-text">First Class Honours</p><p>Data modelling, Agile software development, and business strategy.</p></div>
      <div className="item"><span className="date">July 2022 – Dec 2024</span><h3>Aptech Computer Education, Lagos</h3><p>Advanced Diploma in Software Engineering</p><p className="highlight-text">Distinction</p><p>Data structures, OOP, databases, backend engineering, and machine learning.</p></div>
    </div><div className="card"><div className="card-title"><FaBriefcase className="icon" /><h2>Experience & teaching</h2></div>
      <div className="item"><span className="date">Jan 2025 – July 2025 · Remote</span><h3>Software Engineer · TVSM</h3><p>Contract role building a FastAPI backend for member management and communication workflows serving a community of 1,500+ members.</p><p>Implemented 30 endpoints across authentication, administration, events, and media.</p></div>
      <div className="item"><span className="date">Aug 2024 – Jan 2025 · Nigeria</span><h3>Mobile Developer Intern · BSSL Technologies</h3><p>Contributed to an enterprise Flutter ERP application in a three-engineer team, integrating REST APIs and resolving UI and integration defects.</p></div>
      <div className="item"><span className="date">Volunteering</span><h3>Programming Instructor</h3><p>Taught Java and C# to 15+ students through OOP, application development, and practical programming exercises.</p></div>
    </div></div>
  </div></section>;
}
