import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">Dr. M. Julias Ceasar</Link>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/awards">Awards</NavLink>
          <NavLink to="/seminars">Seminars</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}


