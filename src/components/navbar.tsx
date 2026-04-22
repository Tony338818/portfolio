function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="nav-brand">
            <a href="#hero">Chidubem T. Igwe</a>
          </div>

          <ul className="links">
            <li>
              <a href="#hero" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contacts" className="nav-link">
                Contacts
              </a>
            </li>
          </ul>

          <div className="menu">Menu</div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
