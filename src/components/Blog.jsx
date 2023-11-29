import React from "react";
import classes from "./Blog.module.css";

function Blog() {
  return (
    <section id="blog" className={classes.blog}>
      <div className={classes["blog-post"]}>
        <img
          src="https://www.inventicons.com/uploads/iconset/1215/wm/512/blog-post-browser-ui-seo-and-web-blogging-60.png"
          alt="Blog Post Icon"
        />
        <h2>Latest Blog Post</h2>
        <p>Unlocking the Potential of Mobile Apps in 2023</p>
      </div>
      <div className={classes["blog-post"]}>
        <img
          src="https://static.thenounproject.com/png/2040789-200.png"
          alt="Web Development Trends Icon"
        />
        <h2>Web Development Trends</h2>
        <p>
          Exploring the latest trends shaping the future of web development.
        </p>
      </div>
      <div className={classes["blog-post"]}>
        <img
          src="https://static.thenounproject.com/png/1919231-200.png"
          alt="Behind the Scenes Icon"
        />
        <h2>Behind the Scenes: Project X</h2>
        <p>A glimpse into the process and challenges of a recent project.</p>
      </div>
    </section>
  );
}

export default Blog;