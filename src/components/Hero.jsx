import React from "react";
import roshan from "../assets/Roshan.png";

export const Hero = () => {
  return (
    <>
      {/* <!-- hero  --> */}
      <section id="home">
        <div className="hero grid container">
          <div className="banner flex">
            <p className="intro">
              Hi I'm
              <span style={{ fontWeight: "bold" }}>Roshan Paudel</span>
            </p>

            <h3 style={{ letterSpacing: "3.6px" }}>Full Stack Developer</h3>
            <p>
              Code is my language, tech is my playground—I build, break, and
              learn something new every day.
            </p>
            <a href="">
              <button>
                Download CV <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
          <div className="image flex">
            <img src={roshan} alt="Roshan" />
          </div>
        </div>
      </section>

      {/* <!-- badge  --> */}
      <div className="badge container flex-center">
        <div className="skillset">
          <p>✪</p>
          <div className="skill-name">
            <p>IT</p>
            <p className="skill-property">Graduation</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="skillset">
          <p>✪</p>
          <div className="skill-name">
            <p>5+ Projects</p>
            <p className="skill-property">Completed</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="skillset">
          <p>✪</p>
          <div className="skill-name">
            <p>1+ Year</p>
            <p className="skill-property">Experience</p>
          </div>
        </div>
      </div>
    </>
  );
};
