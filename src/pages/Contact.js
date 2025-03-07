import React from "react";

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  heading: {
    fontsize: "2.5rem",
    marginBottom: "20px",
  },
  text: {
    fontSize : "1.2rem",
    color : "grey",
  },
  contactInfo: {
    marginTop : "20px"
  },
  link: {
    color :"#007BFF",
    textDecoration :"none",
    fontWeight : "bold",
  },
};

function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Me</h1>
      <p style={styles.text}>
        Feel free to reach out to me via email or connect with me on social
        media.
      </p>

      <div style={styles.contactInfo}>
        <p>
          Email: <a href="https://google.com" style={styles.link}>vijay@gmail.com</a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >github</a>
        </p>
        <p>
          LinkdIn:{" "}
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >LInkdin</a>
        </p>
      </div>
    </div>
  )
}

export default Contact;
