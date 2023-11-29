import React from "react";
import classes from "./Testimonial.module.css";

function Testimonial() {
  return (
    <section id="testimonial" className={classes.testimonial}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/6734/6734879.png"
        alt="Client Testimonial Icon"
      />
      <h2>What Clients Say</h2>
      <p>
        "Working with Your Name was a game-changer for our business. The website
        and app exceeded our expectations."
      </p>
      <p>- Client Name, CEO at XYZ Company</p>
    </section>
  );
}

export default Testimonial;
