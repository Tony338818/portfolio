import hero from '../assets/me.jpeg'
import Navbar from '../components/navbar'

function Hero() {
  return (
    <div className="hero-container">
      <div className="container">
        <Navbar />
        <div className="hero">
          <div className="left-content">
            <h1>Hello</h1>
            <h3>
              <div className="line"></div>
              <span className="name">I'm Tony</span>
            </h3>
            <h1>Software Engineer</h1>
            <p>
              I'm based in London focused on building scalable
              systems and impactful products.
            </p>
            <button className="resume">My Resume</button>
          </div>

          <div className="right-content">
            <img src={hero} alt="Tony" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero