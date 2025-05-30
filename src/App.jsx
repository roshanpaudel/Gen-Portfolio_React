import React from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
