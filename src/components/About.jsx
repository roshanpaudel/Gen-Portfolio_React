import React, { useEffect, useState } from "react";
import roshan from "../assets/Roshan.png";
import { Title } from "./Title";

export const About = () => {
  const [scrollYposition, setScrollY] = useState(0);
  const handleScrollY = (e) => {
    console.log(e);
  };
  useEffect(() => {
    //Add event
    window.addEventListener("scroll", handleScrollY);
    //cleanup event
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  });
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
              I’m a passionate full-stack web developer specializing in the
              **MERN stack**—**MongoDB, Express.js, React.js, and Node.js**—with
              a focus on building efficient, user-friendly, and scalable web
              applications. I hold a Master of Information Technology from
              Charles Sturt University. My practical experience was strengthened
              through the Web Development Professional Year at QIBA and the Job
              Ready Program at Dented Code Academy, where I worked on real-world
              projects involving front-end interfaces, RESTful APIs, and
              database integration. I’m now eager to contribute my skills to
              innovative and impactful web development projects.
            </p>
            <h3>Toowoomba City, Australia</h3>
            <h3>Interests</h3>
            <div className="interest flex">
              <span>Coding</span>
              <span>Football</span>
              <span>Scifi movies</span>
              <span>Future Tech</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
