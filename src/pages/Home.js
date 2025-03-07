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
  },
  button: {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px, 20px",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  },
};

const Home = () => {
  return (
    <>
      <div style={styles.container}>
        <div className="glass">
          <h1 style={styles.heading}>Hi, I'm Vijay</h1>
          <p style={styles.description}>A passionate MERN Stack Developer</p>
          <button style={styles.button}>View my Work</button>
        </div>
      </div>
    </>
  );
};

export default Home;
