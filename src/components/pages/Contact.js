import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import PartilcesBackgroundAbout from "../ui/ParticlesBackgroundAbout.js";
import Socials from '../ui/Socials';
import { motion } from "framer-motion";
import swal from "sweetalert";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ije6vz",
        "mail",
        form.current,
        "user_hfw6dKVwHc1tl4z6HY9eV"
      )
      .then(
        (result) => {
          swal({
            text: "Message was sent!",
            className: "modal",
            buttons: false,
            timer: 2000,
          });
        },
        (error) => {
          swal("Oops", "Something went wrong!", "error");
        }
      );
    form.current.reset();
  };

  return (
    <motion.div
      initial={{
        x: 1000,
        transition: { type: "spring", dealy: 0.3 },
      }}
      animate={{
        x: 0,
        transition: { type: "spring", dealy: 0.3 },
      }}
      className="contact"
    >
      <div>
      
        <PartilcesBackgroundAbout />
        <Link to="/">
          <Button />
        </Link>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h1>Contact me</h1>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <textarea type="text" placeholder="Message" name="message"></textarea>
        <input type="submit" className="submit" value="Send" />
        <Socials />
      </form>
    </motion.div>
  );
};

export default Contact;
