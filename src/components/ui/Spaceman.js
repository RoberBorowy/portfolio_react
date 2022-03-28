import React from "react";
import spaceman from "../assets/spaceman.png";
import "../styles/Spaceman.css";
import { motion } from "framer-motion";

const Spaceman = () => {
  return (
    <div className="spaceman">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        className="spaceman-title"
      >
        <span>Hello i'm Robert</span>
        <br />
        <span>future junior frontend developer</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.01, x: 350, y: 350 }}
        animate={{ opacity: 1, scale: 1, x: 35, y: 0 }}
        exit={{ opacity: 1 }}
      >
        <img src={spaceman} alt="" />
      </motion.div>
    
    </div>
   
  );
};

export default Spaceman;
