import aboutImg from "../assets/me.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="about-container">
      <div className="container">
        <div className="about">
          {/* LEFT */}
          <div className="about-left">
            <div className="image-area">
              <div className="sphere"></div>
              <img src={aboutImg} alt="Tony" />
            </div>

            {/* TAGS BELOW IMAGE */}
            <div className="tags">
              <span>AI/ML</span>
              <span>LLMs</span>
              <span>Web Development</span>
              <span>Backend Systems</span>
              <span>Cloud & DevOps</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-right">
            <h4 className="section-title">— About Me</h4>

            <h1>
              Who is <span className="highlight">Tony?</span>
            </h1>

            <p>
              It started with a terrible idea… my friends and I wanted to build
              a game. Not play one — build one. None of us knew what we were
              doing, but that didn’t stop us from dreaming like we were about to
              create the next GTA.
            </p>

            <p>
              500+ bugs later (and a lot of confusion), I found myself deep in
              tech. What started as curiosity quickly turned into something more
              serious, I began to see how much technology actually shapes the
              way people live and how businesses operate.
            </p>

            <p>
              With my background in business, my focus shifted. Now, I’m not
              just interested in building things, I’m focused on using
              technology to improve systems, streamline operations, and help
              businesses work smarter.
            </p>

            <p className="ps">
              P.S. We never built the game… but it did build my career.
            </p>

            {/* CONNECT */}
            <div className="connect">
              <p>Connect with me:</p>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </div>

            {/* BUTTON */}
            <button className="cv-btn">
              Download CV <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
