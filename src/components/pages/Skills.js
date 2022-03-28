import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiSass,
  DiReact,
  DiJavascript1,
  DiGitBranch,
} from "react-icons/di";
import PartilcesBackgroundAbout from "../ui/ParticlesBackgroundAbout.js";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <motion.div
      initial={{
        y: -1000,
        transition: { type: "spring", dealy: 0.3 },
      }}
      animate={{
        y: 0,
        transition: { type: "spring", dealy: 0.3 },
      }}
      className="skills"
    >
      <div>
        <PartilcesBackgroundAbout />
        <Link to="/">
          <Button />
        </Link>
      </div>
      <div className="skills-content">
        <div className="skills-title">
          <span>S</span>
          <span>K</span>
          <span>I</span>
          <span>L</span>
          <span>L</span>
          <span>S</span>
        </div>
        <div className="skills-description">
          <div className="skills-icon">
            <AiOutlineHtml5 className="img" />
            <span className="ikon-title">itermediate</span>
          </div>
          <div className="skills-icon">
            <DiCss3 className="img" />
            <span className="ikon-title">itermediate</span>
          </div>
          <div className="skills-icon">
            <DiJavascript1 className="img" />
            <span className="ikon-title">beginner</span>
          </div>
          <div className="skills-icon">
            <DiSass className="img" />
            <span className="ikon-title">beginner</span>
          </div>
          <div className="skills-icon">
            <DiReact className="img" />
            <span className="ikon-title">beginner</span>
          </div>
          <div className="skills-icon">
            <DiGitBranch className="img" />
            <span className="ikon-title">beginner</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
