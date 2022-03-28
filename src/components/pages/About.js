import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import PartilcesBackgroundAbout from "../ui/ParticlesBackgroundAbout.js";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <motion.div
      initial={{
        y: 1000,
        transition: { type: "spring", dealy: 0.3 },
      }}
      animate={{
        y: 0,
        transition: { type: "spring", dealy: 0.3 },
      }}
      className="about"
    >
      <div>
        <PartilcesBackgroundAbout />
        <Link to="/">
          <Button />
        </Link>
      </div>
      <div className="about-content">
        <div className="about-title">
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </div>
        <div className="about-text">
          <span className="text">
            When I was running my own business, I started to be interested in
            the IT industry. I believe that this is an area that gives the
            opportunity for continuous development and learning about new
            technologies.I would like to try my hand in the IT industry and take
            a job as a Junior Frontend Developer.In my portfolio you will find
            some projects that I have done. 
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
