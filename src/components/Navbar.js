import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-full">Dr. M. Julias Ceasar</span>
          <span className="brand-short">Dr. M. J. Ceasar</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Desktop navigation */}
        <nav className="nav-links desktop-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/awards">Awards</NavLink>
          <NavLink to="/seminars">Seminars</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Mobile dropdown menu */}
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/experience" onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
          <NavLink to="/research" onClick={() => setIsMenuOpen(false)}>Research</NavLink>
          <NavLink to="/awards" onClick={() => setIsMenuOpen(false)}>Awards</NavLink>
          <NavLink to="/seminars" onClick={() => setIsMenuOpen(false)}>Seminars</NavLink>
          <NavLink to="/publications" onClick={() => setIsMenuOpen(false)}>Publications</NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}


