import React from "react";


function About() {
  return (
    <div className="container">
      <div className="glass about-card">
        <h1 className="title">About Me</h1>
        <p className="about-text">
          {" "}
          I'm a passionate <b>full-stack developer</b> with experience in <b>React.js, Node.js, Express, and databases like PostgreSQL and MongoDB</b>.  
          I enjoy solving problems, optimizing performance, and building <b>scalable web applications</b>.
        </p>
        <h2 className="subtitle">Skils</h2>

        <div className="skills-grid">
          <div className="skill-box">⚡ Node.js</div>
          <div className="skill-box">⚡ React.js</div>
          <div className="skill-box">⚡ Express.js</div>
          <div className="skill-box">⚡ PostgreSQL</div>
          <div className="skill-box">⚡ MongoDB</div>
          <div className="skill-box">⚡ REST APIs</div>
          <div className="skill-box">⚡ Git</div>
        </div>
      </div>
    </div>
  );
}

export default About;
