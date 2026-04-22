import hero from "../assets/me.jpeg";
import cv from "../assets/Chidubem I.pdf";

function Hero() {
  return (
    <div className="hero-container" id="hero">
      <div className="container">
        <div className="hero">
          <div className="left-content">
            <h1>Hello</h1>
            <h3>
              <div className="line"></div>
              <span className="name">I'm Tony</span>
            </h3>
            <h1>Software Engineer</h1>
            <p>
              I'm based in London focused on building scalable systems and
              impactful products.
            </p>
            <a href={cv} target="_blank" rel="noreferrer">
              <button className="resume">My Resume</button>
            </a>
          </div>

          <div className="right-content">
            <img src={hero} alt="Tony" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
