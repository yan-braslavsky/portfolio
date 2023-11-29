import React from "react";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <a href="#services">Services</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navigation;
