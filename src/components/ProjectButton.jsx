import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectButton.css";

const ProjectButton = () => {
  const navigate = useNavigate();

  const goToProject = () => {
    navigate("/Projects");
  };
  const goToPlayers = () => {
    navigate("/Players");
  };

  const goToAbout = () => {
    navigate("/About");
  };

  return (
    <main>
      <div className="projet">
        <button onClick={goToProject} className="Project">
          Découvrir mes différents Projets
        </button>
      </div>
      <div className="projet">
        <button onClick={goToAbout} className="Project">
          Découvrir mon CV
        </button>
      </div>
      <div className="projet">
        <button onClick={goToPlayers} className="Project">
          Découvrir le jeux
        </button>
      </div>
    </main>
  );
};

export default ProjectButton;
