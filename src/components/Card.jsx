import React from "react";

export const Card = ({ image, github, url, title, description }) => {
  return (
    <>
      <div className="projects-card">
        <img src={image} alt="Project 1" />
        <div className="tech-link">
          <a href={github}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={url}>
            <i className="fa-brands fa-chrome"></i>
          </a>
        </div>
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
