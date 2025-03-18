import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons

function Contact() {
  return (
    <div className="container">
      <div className="glass contact-card">
        <h1 className="title">Contact Me</h1>
        <p className="contact-text">
          Feel free to reach out to me via email or connect with me on social
          media.
        </p>

        <div className="contact-info">
          <p>
            Email{" "}
            <a href="mailto:vkmakwana1122@yahoo.com" className="contact-link">
              <FaEnvelope className="contact-icon" /> vijay
            </a>
          </p>
          <p>
            GitHub{" "}
            <a
              href="https://github.com/23vk1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub className="contact-icon" /> github
            </a>
          </p>
          <p>
            LinkdIn{" "}
            <a
              href="https://www.linkedin.com/in/vijay-k-makwana/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin className="contact-icon" /> Linkdin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
