import React from "react";

export const Footer = ({ scrollYposition }) => {
  return (
    <>
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
      {scrollYposition > 800 && (
        <div className="go-up">
          <a className="flex-center" href="#home">
            <i className="fa-solid fa-chevron-up"></i>
          </a>
        </div>
      )}
    </>
  );
};
