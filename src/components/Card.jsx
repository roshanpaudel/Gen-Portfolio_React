import React from "react";
import glideShift from "../assets/glideShift.jpg";

export const Card = () => {
  return (
    <>
      <div className="projects-card">
        <img src={glideShift} alt="Project 1" />
        <div className="tech-link">
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-chrome"></i>
          </a>
        </div>
        <div className="project-info">
          <h3>GlideShift HTML Template</h3>
          <p>Techstack: HTML5, CSS</p>
        </div>
      </div>
    </>
  );
};
