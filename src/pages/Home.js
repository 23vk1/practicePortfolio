import React from "react";
import { useNavigate } from "react-router-dom";



const Home = () => {

  const navigate = useNavigate();

  const goToProject = () =>{
    navigate("/projects");
  }

  return (
    <>
      <div className="container">
        <div className="glass">
          <h1 >Hi, I'm Vijay</h1>
          <p >A passionate MERN Stack Developer</p>
          <button onClick={goToProject}>View my Work</button>
        </div>
      </div>
    </>
  );
};

export default Home;
