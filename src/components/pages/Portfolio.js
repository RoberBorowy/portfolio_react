import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import PartilcesBackgroundAbout from "../ui/ParticlesBackgroundAbout.js";
import Button from "../ui/Button";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <motion.div
      initial={{
        x: -1000,
        transition: { type: "spring", dealy: 0.3 },
      }}
      animate={{
        x: 0,
        transition: { type: "spring", dealy: 0.3 },
      }}
      className="portfolio"
    >
      <div>
        <PartilcesBackgroundAbout />
        <Link to="/">
          <Button />
        </Link>
      </div>
      <div className="portfolio-content">
        <div className="portfolio-title">
          <span>W</span>
          <span>O</span>
          <span>R</span>
          <span>K</span>
        </div>
        <Card />
      </div>
    </motion.div>
  );
};

export default Portfolio;
