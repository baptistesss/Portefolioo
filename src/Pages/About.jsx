import React from "react";
import cv from "../assets/cv.png";
import "../styles/About.css";
import Experience from "../components/Experience";

const About = () => {
  return (
    <div className="cv">
      <Experience />
      <div className="right-column">
        <img src={cv} className="img-cv" />
      </div>
    </div>
  );
};

export default About;
