import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <input type="checkbox" id="darkmode" />

      <div class="wrapper">
        <label for="darkmode">
          <i class="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- navbar --> */}
        <div class="navbar">
          <div class="navigation flex-center container">
            <div class="nav-title flex-center">
              <p class="name">Roshan</p>
              <p class="slash">|</p>
              <p class="job-title">Full Stack Developer</p>
            </div>

            <label for="hamburgerMenu">
              <i class="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" name="" id="hamburgerMenu" />
            <div class="nav-link">
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
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="page-container">
          {/* <!-- hero  --> */}
          <section id="home">
            <div class="hero grid container">
              <div class="banner flex">
                <p class="intro">
                  Hi I'm
                  <span style="font-weight: bold">Roshan Paudel</span>
                </p>

                <h3 style="letter-spacing: 3.6px">Full Stack Developer</h3>
                <p>I love coding and tech related stuff</p>
                <a href="">
                  <button>
                    Download CV <i class="fa-solid fa-download"></i>
                  </button>
                </a>
              </div>
              <div class="image flex">
                <img src="assets/Roshan.png" alt="Roshan" />
              </div>
            </div>
          </section>

          {/* <!-- badge  --> */}
          <div class="badge container flex-center">
            <div class="skillset">
              <p>✪</p>
              <div class="skill-name">
                <p>IT</p>
                <p class="skill-property">Graduation</p>
              </div>
            </div>
            <div class="divider"></div>
            <div class="skillset">
              <p>✪</p>
              <div class="skill-name">
                <p>5+ Projects</p>
                <p class="skill-property">Completed</p>
              </div>
            </div>
            <div class="divider"></div>
            <div class="skillset">
              <p>✪</p>
              <div class="skill-name">
                <p>1+ Year</p>
                <p class="skill-property">Experience</p>
              </div>
            </div>
          </div>

          {/* <!-- skills  --> */}
          <section id="skills">
            <div class="title-header flex skills-section">
              <h2>Skills</h2>
            </div>
            <div class="skill-icons flex-center container">
              <div class="icon-text">
                <i class="fa-brands fa-html5"></i>
                <p>HTML</p>
              </div>
              <div class="icon-text flex-center">
                <i class="fa-brands fa-css"></i>
                <p>CSS</p>
              </div>
              <div class="icon-text flex-center">
                <i class="fa-brands fa-js"></i>
                <p>Javascript</p>
              </div>
              <div class="icon-text flex-center">
                <i class="fa-brands fa-github"></i>
                <p>Github</p>
              </div>
              <div class="icon-text flex-center">
                <i class="fa-brands fa-figma"></i>
                <p>fa-figma</p>
              </div>
            </div>
          </section>

          {/* <!-- my-projects  --> */}
          <div class="projects container" id="projects">
            <div class="title-header flex">
              <h2>My Projects</h2>
            </div>
            <div class="grid my-projects">
              <div class="projects-card">
                <img src="assets/GlideShift.JPG" alt="Project 1" />
                <div class="tech-link">
                  <a href="#">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <div class="project-info">
                  <h3>GlideShift HTML Template</h3>
                  <p>Techstack: HTML5, CSS</p>
                </div>
              </div>
              <div class="projects-card">
                <img src="assets/HikeCo.JPG" alt="Project 1" />
                <div class="tech-link">
                  <a href="#">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                </div>
                <div class="project-info">
                  <h3>GlideShift HTML Template</h3>
                  <p>Techstack: HTML5, CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- about-me  --> */}
        <div class="about-container" id="about">
          <div class="title-header about-title flex">
            <h2>About me</h2>
          </div>

          <div class="about-me flex container">
            <div class="my-photo">
              <img src="assets/Roshan.png" alt="My photo" />
            </div>
            <div class="my-details flex">
              <h1>Roshan Paudel</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
                harum voluptate numquam autem cupiditate maiores dolor ducimus,
                deserunt ipsa consequatur quasi fugit dolore ab pariatur impedit
                minima doloribus laboriosam neque.
              </p>
              <h3>Toowoomba, Australia</h3>
              <h3>Interest</h3>
              <div class="interest flex">
                <span>Coding</span>
                <span>Football</span>
                <span>Scifi movies</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- contact  --> */}
        <div class="contact flex-center" id="contact">
          <div class="title-header contact-title">
            <h2>Contact</h2>
          </div>
          <div class="contact-links">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-mobile"></i>
          </div>
          <p>OR</p>

          <form>
            <div class="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@email.com"
                required
              />
              <a href="#">
                <i class="fa-solid fa-paper-plane"></i>
              </a>
            </div>
          </form>
        </div>

        {/* <!-- footer  --> */}
        <div class="footer flex-center">
          <div class="footer-links-socials flex">
            <div class="footer-links">
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
            <div class="footer-social">
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
          <div class="copyright">
            <p>&copy; All rights reserved. Made by Roshan 🤘🏽</p>
          </div>
        </div>

        {/* <!-- go UP --> */}
        <div class="go-up">
          <a class="flex-center" href="#home">
            <i class="fa-solid fa-chevron-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
