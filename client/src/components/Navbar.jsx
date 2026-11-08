
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];
  const activeSection =
    location.hash.slice(1) || location.pathname.slice(1) || "home";

  return (
    <nav className="navbar">
      <Link
        to="/#home"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        MyPortfolio
      </Link>

      <div className="navbar-actions">
        <div
          className={`nav-links${menuOpen ? " nav-links-open" : ""}`}
          id="primary-navigation"
        >
          {links.map((link) => (
            <Link
              key={link.id}
              to={`/#${link.id}`}
              className={`nav-link${activeSection === link.id ? " active" : ""}`}
              aria-current={activeSection === link.id ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-pressed={theme === "light"}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;