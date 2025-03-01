import React from "react";

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  heading: {
    fontSize: "2.5rem",
  },

  description: {
    fontSize: "1.2rem",
    color: "grey",
    maxWidth: "600px",
    margin: "auto",
  },
  subHeading: {
    fontSize: "1.8rem",
    marginTop: "20px",
  },
  list: {
    listStyle: "none",
    padding: "0",
    fontSize: "1.2rem",
  },
};
function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Me</h1>
      <p style={styles.description}>
        {" "}
        I'm a passionate developer with experience in React.js, Node.js, and
        databases like PostgreSQL and MongoDB.
      </p>
      <h2 style={styles.subHeading}>Skils : </h2>
      <ul style={styles.list}>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Mongodb & Postgresql</li>
        <li>Javascript (es6+)</li>
      </ul>
    </div>
  );
}

export default About;
