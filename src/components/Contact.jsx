import React from "react";
import classes from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={classes.contact}>
      <img
        src="https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_mail-1024.png"
        alt="Contact Me Icon"
      />
      <h2>Contact Me</h2>
      <p>Feel free to reach out. Let's turn your ideas into reality!</p>
    </section>
  );
}

export default Contact;