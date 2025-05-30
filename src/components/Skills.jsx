import React from "react";
import { Title } from "./Title";
import { Layout } from "./Layout";

export const Skills = () => {
  return (
    <Layout>
      <section id="skills">
        <Title title="Skills" />
        <div className="skill-icons flex-center container">
          <div className="icon-text">
            <i className="fa-brands fa-html5"></i>
            <p>HTML</p>
          </div>
          <div className="icon-text flex-center">
            <i className="fa-brands fa-css"></i>
            <p>CSS</p>
          </div>
          <div className="icon-text flex-center">
            <i className="fa-brands fa-js"></i>
            <p>Javascript</p>
          </div>
          <div className="icon-text flex-center">
            <i className="fa-brands fa-github"></i>
            <p>Github</p>
          </div>
          <div className="icon-text flex-center">
            <i className="fa-brands fa-figma"></i>
            <p>fa-figma</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
