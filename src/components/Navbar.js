import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
    <nav className="navbar">
      <h1>Portfolio</h1>

      <div className={`nav-links`}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contact"}>Contact</Link>
        <button
          className="dark-mode-btn"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
