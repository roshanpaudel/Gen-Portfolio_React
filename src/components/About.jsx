import React from "react";
import roshan from "../assets/Roshan.png";
import { Title } from "./Title";

export const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <Title title="About me" />

        <div className="about-me flex container">
          <div className="my-photo">
            <img src={roshan} alt="My photo" />
          </div>
          <div className="my-details flex">
            <h1>Roshan Paudel</h1>
            <p>
              I focus on developing efficient and user-friendly web
              applications, with a strong emphasis on React. My Master of
              Information Technology from Charles Sturt University equipped me
              with solid IT fundamentals and essential software development
              skills. I sought practical experience and completed the Web
              Development Professional Year at QIBA, immersing myself in the
              Australian industry and enhancing my skills and network, which
              further fueled my desire to build impactful solutions. To become a
              well-rounded developer, I started the intensive Job Ready Program
              at Dented Code Academy. This program provided comprehensive
              knowledge in planning, managing, and deploying complex projects
              using JavaScript, React.js, MongoDB, Node.js, and Express.js. My
              Bachelor of Computer Engineering from Pokhara University
              established a strong base in computer science fundamentals.
              Through this evolving journey, I am now eager to contribute my
              growing skills to innovative web development projects.
            </p>
            <h3>Toowoomba, Australia</h3>
            <h3>Interest</h3>
            <div className="interest flex">
              <span>Coding</span>
              <span>Football</span>
              <span>Scifi movies</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
