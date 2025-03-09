import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
<>

    <nav className="navbar">
      <h1>Portfolio</h1>

     
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to={"/"} onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to={"/about"} onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to={"/projects"} onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link to={"/contact"} onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
        <button className="dark-mode-btn"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>

</>

  );
}

export default Navbar;
