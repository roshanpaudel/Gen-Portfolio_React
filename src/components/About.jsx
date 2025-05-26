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
              I’m a passionate web developer focused on creating efficient,
              user-friendly applications, especially with React. I hold a Master
              of IT from Charles Sturt University and a Bachelor's in Computer
              Engineering from Pokhara University. My hands-on skills were
              sharpened through the Web Development Professional Year at QIBA
              and the Job Ready Program at Dented Code Academy, where I worked
              with JavaScript, React, MongoDB, Node.js, and Express. I'm now
              ready to contribute to innovative and impactful web projects.
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
