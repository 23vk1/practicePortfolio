import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ParticlesBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
