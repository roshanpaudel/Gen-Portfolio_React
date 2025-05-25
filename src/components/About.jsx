import React from "react";
import roshan from "../assets/Roshan.png";

export const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <div className="title-header about-title flex">
          <h2>About me</h2>
        </div>

        <div className="about-me flex container">
          <div className="my-photo">
            <img src={roshan} alt="My photo" />
          </div>
          <div className="my-details flex">
            <h1>Roshan Paudel</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              harum voluptate numquam autem cupiditate maiores dolor ducimus,
              deserunt ipsa consequatur quasi fugit dolore ab pariatur impedit
              minima doloribus laboriosam neque.
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
