import React from "react";
import classes from "./Services.module.css";

function Services() {
  return (
    <section className={classes["services-section"]} id="services">
      <div className={classes.services}>
        <div className={classes.service}>
          <img
            src="https://images.vexels.com/media/users/3/205564/isolated/preview/181219b1720d66fb3b80e3a2f2c87c1b-strich-des-website-cursorsymbols.png"
            alt="Website Building Icon"
          />
          <h2>Website Building</h2>
          <p>
            Your website is your online identity. Let's create a modern and
            responsive site that reflects your brand.
          </p>
        </div>
        <div className={classes.service}>
          <img
            src="https://static.thenounproject.com/png/1248972-200.png"
            alt="App Development Icon"
          />
          <h2>App Development</h2>
          <p>
            From Android and iOS apps to hybrid solutions, I bring your ideas to
            life on the digital forefront.
          </p>
        </div>
        <div className={classes.service}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9323/9323008.png"
            alt="Consultancy Icon"
          />
          <h2>Consultancy</h2>
          <p>
            As a seasoned team leader and CTO, I provide strategic insights and
            guidance for your IT projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
