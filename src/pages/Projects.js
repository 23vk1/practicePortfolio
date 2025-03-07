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

const styles = {
    container : {
        textAlign : "center",
        padding :"50px",
    },
    heading : {
        fontSize : "2.5rem",
        marginBottom : "20px",
    },
    projectGrid : {
        display : "grid",
        gridTemplateColumn : "repeat (auto-fit, minmax(300px, 1fr))",
        gap :"20px",
        maxWidth : "800px",
        margin : "auto",
    },
    card : {
        padding : "20px",
        border :"1px solid #ddd",
        borderRadius : "10px",
        backgroundColor : "#f9f9f9",
        color:"black"
    },
    link : {
        display : "inline-block",
        marginTop : "10px",
        padding :"8px 15px",
        backgroundColor : "#007BFF",
        color :"black",
        textDecoration :"none",
        borderRadius : "5px",
    }

}

function Projects() {
  return (
  <div style={styles.container}>
    <h1 style={styles.heading}>My Projects</h1>
    <div style={styles.projectGrid}>
        {
            ProjectList.map((project, index)=>{
                return(

                    <div key={index} style={styles.card}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <a href="https://google.com" target="blank" rel="noopener noreferrer" style={styles.link}>View Project</a>
                </div>
                )
            })
        }
    </div>
  </div>
)
}

export default Projects;
