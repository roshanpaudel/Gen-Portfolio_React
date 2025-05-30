import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";

export const Layout = () => {
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

        {/* Dynamic page contents will be within main class */}
        <main className="main"></main>

        <Footer scrollYposition={scrollYposition} />
      </div>
    </>
  );
};
