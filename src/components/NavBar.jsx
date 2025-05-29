import React from "react";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navigation flex-center container">
        <div className="nav-title flex-center">
          <p className="name">Roshan</p>
          <p className="slash">|</p>
          <p className="job-title">Full Stack Developer</p>
        </div>

        <label htmlFor="hamburgerMenu">
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" name="" id="hamburgerMenu" />
        <div className="nav-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/skills">Skills</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
