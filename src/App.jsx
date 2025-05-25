import { useState } from "react";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

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
        <About />

        {/* <!-- contact  --> */}

        <Contact />
        {/* <!-- footer  --> */}
        <Footer />
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
