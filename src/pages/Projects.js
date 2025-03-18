import React from "react";

const ProjectList = [
  {
    title: "Hospital Management System",
    description:
      "A full-stack MERN application for managing hospital records, appointments, and patient data.",
    image: "/images/demo_img.jpg",
    link: "https://github.com/",
  },
  {
    title: "News App",
    description:
      "A React-based news aggregator fetching real-time news from APIs.",
    image: "/images/demo_img.jpg",
    link: "https://github.com/",
  },
  {
    title: "Text-Utils",
    description:
      "A simple React app for text formatting and manipulation, including word count and case conversion.",
    image: "/images/demo_img.jpg",
    link: "https://github.com/",
  },
  {
    title: "Chat App",
    description:
      "A Node.js-based real-time chat application with user authentication and messaging.",
    image: "/images/demo_img.jpg",
    link: "https://github.com/",
  },
  {
    title: "Book Management System",
    description:
      "A MERN-based system for managing books, authors, and categories in a library.",
    image: "/images/demo_img.jpg",
    link: "https://github.com/",
  },
];

function Projects() {
  return (
    <div id="projects-section" className="container">
      <h1 className="title">My Projects</h1>
      <div className="projects-grid">
        {ProjectList.map((project, index) => {
          return (
            <div key={index} className="card glass">
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <button>
                <a
                  href={project.link}
                  target="blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Project
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
