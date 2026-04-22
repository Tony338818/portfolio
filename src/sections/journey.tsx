import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

function Journey() {
  return (
    <div className="journey-container">
      <div className="journey">

        {/* HEADER */}
        <div className="journey-header">
          <h4>— Education & Work</h4>
          <h1>
            My <span>Academic & Professional</span> Journey
          </h1>
        </div>

        <div className="journey-content">

          {/* EDUCATION */}
          <div className="card">
            <div className="card-title">
              <FaGraduationCap className="icon" />
              <h2>Education</h2>
            </div>

            <div className="item">
              <span className="date">2025 – 2026</span>
              <h3>Middlesex University, London</h3>
              <p>BSc Information Technology & Business Information Systems</p>
            </div>

            <div className="item">
              <span className="date">2022 – 2024</span>
              <h3>Aptech Computer Education</h3>
              <p>Advanced Diploma in Software Engineering</p>
              <p className="highlight-text">
                • Most Outstanding Student (Academic & Project Excellence)
              </p>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="card">
            <div className="card-title">
              <FaBriefcase className="icon" />
              <h2>Work Experience</h2>
            </div>

            {/* <div className="item">
              <span className="date">Jan 2026 – Present</span>
              <h3>Software Engineer</h3>
              <p>Isometry Studios · London, UK</p>
            </div> */}

            <div className="item">
              <span className="date">Jan 2025 – Sep 2025</span>
              <h3>Backend Engineer</h3>
              <p>Botnova Technologies Ltd. · Lagos, Nigeria</p>
            </div>

            <div className="item">
              <span className="date">Aug 2024 – Jan 2025</span>
              <h3>Mobile Developer Intern</h3>
              <p>BSSL Technologies · Lagos, Nigeria</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Journey;