import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="nav-brand">
            <a href="#hero">Chidubem T. Igwe</a>
          </div>

          <ul className={`links ${isOpen ? "links--open" : ""}`}>
            <li><a href="#hero" className="nav-link" onClick={handleNavClick}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={handleNavClick}>About</a></li>
            <li><a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a></li>
            <li><a href="#contacts" className="nav-link" onClick={handleNavClick}>Contacts</a></li>
          </ul>

          <div className="menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;