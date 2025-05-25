import React from "react";

export const Contact = () => {
  return (
    <>
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
    </>
  );
};
