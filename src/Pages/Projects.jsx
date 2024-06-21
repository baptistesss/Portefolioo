import projet1 from "../assets/projet1.png";
import projet2 from "../assets/projet2.png";
import portefolio from "../assets/portefolio.png";
import projet3 from "../assets/projet3.png";
import "../styles/Project.css";
import Carousel from "../components/Carousel";
import NasaModale from "./HarryPotterModale.jsx";

const Projects = () => {
  const handleClick1 = () => {
    window.location.href = "https://aurelienchetot.github.io/Projet-1-Team-3/";
  };

  const handleClick2 = () => {
    window.locatiosn.href = "https://globe-guide.netlify.app/";
  };

  const handleClick3 = () => {
    window.locatiosn.href = "https://globe-guide.netlify.app/";
  };

  const handleClick4 = () => {
    window.locatiosn.href = "http://localhost:5173/";
  };
  return (
    <>
      <div className="section-projet">
        <div className="projet-1">
          <h3 className="title-projet">QuizIP</h3>
          <img src={projet1} className="imgg" />
          <button className="voir-site" onClick={handleClick1}>
            Voir le site
          </button>
        </div>
        <div className="projet-2">
          <h3 className="title-projet">Globe Guide</h3>
          <img src={projet2} className="imgg" />
          <button className="voir-site" onClick={handleClick2}>
            Voir le site
          </button>
        </div>
        <div className="projet-3">
          <h3 className="title-projet">Portefolio</h3>
          <img src={portefolio} className="imgg" />
          <button className="voir-site" onClick={handleClick3}>
            Voir le site
          </button>
        </div>
        <div className="projet-4">
          <h3 className="title-projet">AFAC974</h3>
          <img src={projet3} className="imgg" />
          <button className="voir-site" onClick={handleClick4}>
            Voir le site
          </button>
        </div>
      </div>
      <Carousel />
    </>
  );
};

export default Projects;
