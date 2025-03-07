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
  liItem : {
    // width : "50px",
    border : "1px solid rgb(4, 42, 82)",
    padding : "5px",
  }
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
        <li style={styles.liItem}>React.js</li>
        <li style={styles.liItem}>Node.js</li>
        <li style={styles.liItem}>Express.js</li>
        <li style={styles.liItem}>Mongodb & Postgresql</li>
        <li style={styles.liItem}>Javascript (es6+)</li>
      </ul>
    </div>
  );
}

export default About;
