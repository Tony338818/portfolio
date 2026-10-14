import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return <header className="navbar-container"><a className="skip-link" href="#main">Skip to content</a><nav className="navbar" aria-label="Main navigation"><div className="container nav-inner"><a className="nav-brand" href="#hero" onClick={close}>Tony<span className="gradient-text">&lt;/&gt;</span></a><div className={`links ${isOpen ? "links--open" : ""}`} id="navigation-links"><a href="#hero" onClick={close}>Home</a><a href="#about" onClick={close}>About</a><a href="#skills" onClick={close}>Skills</a><a href="#projects" onClick={close}>Projects</a><a href="#journey" onClick={close}>Experience</a><a className="nav-contact" href="#contacts" onClick={close}>Contact ↗</a></div><button className="menu" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="navigation-links">{isOpen ? <HiX /> : <HiMenu />}</button></div></nav></header>;
}
