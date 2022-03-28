import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Skills from "./components/pages/Skills";
import Portfolio from "./components/pages/Portfolio";
import { AnimatePresence } from "framer-motion";


ReactDOM.render(
  <AnimatePresence>
    <Router>
      <Routes>
      
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  </AnimatePresence>,
  document.getElementById("root")
);
