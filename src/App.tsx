import "./App.css";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Journey from "./sections/journey";
import Project from "./sections/project";
import Skills from "./sections/skills";

function App() {
  return (
    <div>
      <Navbar />
      <main id="main">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Journey />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
