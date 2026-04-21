import "./App.css";
import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Journey from "./sections/journey";
import Project from "./sections/project";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Journey />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
