import { useState } from "react";
import "./App.css";
import glideShift from "./assets/glideShift.jpg";
import hikeCo from "./assets/HikeCo.jpg";
import roshan from "./assets/Roshan.png";
import { NavBar } from "./components/NavBar";

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
        <NavBar/>
       
        <div className="page-container">
          {/* <!-- hero  --> */}
          <section id="home">
            <div className="hero grid container">
              <div className="banner flex">
                <p className="intro">
                  Hi I'm
                  <span style={{ fontWeight: "bold" }}>Roshan Paudel</span>
                </p>

                <h3 style={{ letterSpacing: "3.6px" }}>Full Stack Developer</h3>
                <p>I love coding and tech related stuff</p>
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

          {/* <!-- skills  --> */}
          <section id="skills">
            <div className="title-header flex skills-section">
              <h2>Skills</h2>
            </div>
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

          {/* <!-- my-projects  --> */}
          <div className="projects container" id="projects">
            <div className="title-header flex">
              <h2>My Projects</h2>
            </div>
            <div className="grid my-projects">
              <div className="projects-card">
                <img src={glideShift} alt="Project 1" />
                <div className="tech-link">
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <div className="project-info">
                  <h3>GlideShift HTML Template</h3>
                  <p>Techstack: HTML5, CSS</p>
                </div>
              </div>
              <div className="projects-card">
                <img src={hikeCo} alt="Project 1" />
                <div className="tech-link">
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <div className="project-info">
                  <h3>GlideShift HTML Template</h3>
                  <p>Techstack: HTML5, CSS</p>
                </div>
              </div>
            </div>
          </div>
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
