import React, { useState } from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../ui/ParticlesBackground";
import Spaceman from "../ui/Spaceman";
import { PowerSettingsNew } from "@material-ui/icons";
import { motion } from "framer-motion";
import "../styles/Home.css";

const Home = () => {
  const [anime, setAnime] = useState(false);

  const clickHandle = () => {
    setAnime(!anime);
  };

  const clickHandleBack = () => {
    setAnime(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home"
    >
     
      <ParticlesBackground />
      <button className="home-button" onClick={clickHandleBack}>
        <PowerSettingsNew className="icon" />
      </button>
      <div className="home-spaceman">{anime && <Spaceman />}</div>
      <button
        className={anime ? "space-button active" : "space-button"}
        onClick={clickHandle}
      >
        click here
      </button>
      <div className="home-spaceman">{anime && <Spaceman />}</div>
      <div className="home-about">
        <li>
          <Link to="/about">
            <span>about me</span>
          </Link>
        </li>
      </div>
      <div className="home-contact">
        <li>
          <Link to="/contact">
            <span>say hi... </span>
          </Link>
        </li>
      </div>
      <div className="home-skills">
        <li>
          <Link to="/skills">
            <span className="w">w</span>
            <span className="h">h</span>
            <span className="a">a</span>
            <span className="t">t</span>
            <br />
            <span className="i">i</span>
            <br />
            <span className="c">c</span>
            <span className="a3">a</span>
            <span className="n">n</span>
          </Link>
        </li>
      </div>
      <div className="home-portfolio">
        <li>
          <Link to="/portfolio">
            <span className="w">w</span>
            <span className="h">h</span>
            <span className="a">a</span>
            <span className="t">t</span>
            <br />
            <span className="i">i</span>
            <br />
            <span className="d">d</span>
            <span className="i2">i</span>
            <span className="d2">d</span>
          </Link>
        </li>
      </div>
    </motion.div>
  );
};

export default Home;
