import React from "react";

const ProjectList = [
  {
    name: "Chat Web App",
    description:
      "A real-time chat application using Node.js, Express, and Socket.io.",
    link: "https://github.com/yourusername/chat-app",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website built with React.js and hosted on Vercel.",
    link: "https://yourportfolio.com",
  },
  {
    name: "YouTube Video Downloader",
    description:
      "A web app to download YouTube videos using Node.js and React.",
    link: "https://github.com/yourusername/youtube-downloader",
  },
];


function Projects() {
  return (
  <div id="projects-section" className="container">
    <h1 className="title">My Projects</h1>
    <div className="projects-grid">
        {
            ProjectList.map((project, index)=>{
                return(

                    <div key={index} className="card glass">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <button><a href="https://google.com" target="blank" rel="noopener noreferrer" className="btn">View Project</a></button>
                </div>
                )
            })
        }
    </div>
  </div>
)
}

export default Projects;
