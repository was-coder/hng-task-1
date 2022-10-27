import React, { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <footer className="footer-container">
        <img
          src="/assets/internship.png"
          alt="zuri Internship"
          className="footer-img"
        />
        <p id="task-paragraph">HNG Internship 9 Frontend Task</p>
        <img src="/assets/I4G.png" alt="I4G logo" className="footer-img" />
      </footer>
    </Fragment>
  );
}

export default Footer;
