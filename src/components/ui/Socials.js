import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import "../styles/Socials.css";

const Socials = () => {
  return (
    <div className="socials">
      <div className="social-ikon">
        <a href="https://www.linkedin.com/in/robertborowy/">
          <AiFillLinkedin className="social" />
        </a>
      </div>

      <div className="social-ikon">
        <a href="https://github.com/RoberBorowy">
          <AiOutlineGithub className="social" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
