import React from "react";
import glideShift from "../assets/glideShift.jpg";
import hikeCo from "../assets/HikeCo.jpg";
import { Title } from "./Title";

export const Projects = () => {
  return (
    <>
      <div className="projects container" id="projects">
        <Title title={"My Projects"} />
        <div className="grid my-projects">
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
          <div className="projects-card">
            <img src={hikeCo} alt="Project 1" />
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
        </div>
      </div>
    </>
  );
};
