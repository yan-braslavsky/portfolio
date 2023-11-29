import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import classes from "./Portfolio.module.css";

function Portfolio() {
  return (
    <>
      <body className={classes.body}>
        <Header />
        <Navigation />

        <div className={classes.container}>
          <Services />

          <Testimonial />
          <Blog />
          <Contact />
        </div>

        <Footer />
      </body>
    </>
  );
}

export default Portfolio;
