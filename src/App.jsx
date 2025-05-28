import React, { useEffect, useState } from "react";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [scrollYposition, setScrollY] = useState(0);
  const handleScrollY = (e) => {
    setScrollY(window.scrollY);
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
        <About />

        {/* <!-- contact  --> */}

        <Contact />
        {/* <!-- footer  --> */}
        <Footer scrollYposition={scrollYposition} />
      </div>
    </>
  );
}

export default App;
