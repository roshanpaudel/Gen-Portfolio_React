import React from "react";
import glideShift from "../assets/GlideShift.jpg";
import hikeCo from "../assets/HikeCo.jpg";
import { Title } from "./Title";
import { Card } from "./Card";

export const Projects = () => {
  const projects = [
    {
      image: glideShift,
      github: "https://github.com/roshanpaudel",
      url: "https://roshanpaudel.github.io/GLIDEshift/",
      title: "GlideShift HTML Template",
      description: "Techstack: HTML5, CSS",
    },
    {
      image: hikeCo,
      github: "https://github.com/roshanpaudel",
      url: "https://roshanpaudel.github.io/GLIDEshift/",
      title: "HikeCo HTML Template",
      description: "Techstack: HTML5, CSS",
    },
  ];
  return (
    <>
      <div className="projects container" id="projects">
        <Title title="My Projects" />
        <div className="grid my-projects">
          {projects.map((projects, i) => (
            <Card key={i} {...projects} />
          ))}
        </div>
      </div>
    </>
  );
};
