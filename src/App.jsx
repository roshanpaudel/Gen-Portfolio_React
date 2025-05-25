import { useState } from "react";
import "./App.css";

import roshan from "./assets/Roshan.png";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <input type="checkbox" id="darkmode" />

      <div className="wrapper">
        <label htmlFor="darkmode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- navbar --> */}
        <NavBar />

        <div className="page-container">
          <Hero />

          {/* <!-- skills  --> */}
          <Skills />

          {/* <!-- my-projects  --> */}
          <Projects />
        </div>

        {/* <!-- about-me  --> */}
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

        {/* <!-- contact  --> */}
        <div className="contact flex-center" id="contact">
          <div className="title-header contact-title">
            <h2>Contact</h2>
          </div>
          <div className="contact-links">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-solid fa-mobile"></i>
          </div>
          <p>OR</p>

          <form>
            <div className="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@email.com"
                required
              />
              <a href="#">
                <i className="fa-solid fa-paper-plane"></i>
              </a>
            </div>
          </form>
        </div>

        {/* <!-- footer  --> */}
        <div className="footer flex-center">
          <div className="footer-links-socials flex">
            <div className="footer-links">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <h3>Social Links</h3>

              <ul>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; All rights reserved. Made by Roshan 🤘🏽</p>
          </div>
        </div>

        {/* <!-- go UP --> */}
        <div className="go-up">
          <a className="flex-center" href="#home">
            <i className="fa-solid fa-chevron-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
