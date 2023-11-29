import React from "react";

function Portfolio() {
  return (
    <>
      <body>
        <header>
          <h1>Yan Braslavsky</h1>
          <h2>IT Professional</h2>
        </header>

        <nav>
          <a href="#services">Services</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <div class="container">
          <section id="services">
            <div class="services">
              <div class="service">
                <img
                  src="https://images.vexels.com/media/users/3/205564/isolated/preview/181219b1720d66fb3b80e3a2f2c87c1b-strich-des-website-cursorsymbols.png"
                  alt="Website Building Icon"
                />
                <h2>Website Building</h2>
                <p>
                  Your website is your online identity. Let's create a modern
                  and responsive site that reflects your brand.
                </p>
              </div>
              <div class="service">
                <img
                  src="https://static.thenounproject.com/png/1248972-200.png"
                  alt="App Development Icon"
                />
                <h2>App Development</h2>
                <p>
                  From Android and iOS apps to hybrid solutions, I bring your
                  ideas to life on the digital forefront.
                </p>
              </div>
              <div class="service">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9323/9323008.png"
                  alt="Consultancy Icon"
                />
                <h2>Consultancy</h2>
                <p>
                  As a seasoned team leader and CTO, I provide strategic
                  insights and guidance for your IT projects.
                </p>
              </div>
            </div>
          </section>

          <section id="testimonial" class="testimonial">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6734/6734879.png"
              alt="Client Testimonial Icon"
            />
            <h2>What Clients Say</h2>
            <p>
              "Working with Your Name was a game-changer for our business. The
              website and app exceeded our expectations."
            </p>
            <p>- Client Name, CEO at XYZ Company</p>
          </section>

          <section id="blog" class="blog">
            <div class="blog-post">
              <img
                src="https://www.inventicons.com/uploads/iconset/1215/wm/512/blog-post-browser-ui-seo-and-web-blogging-60.png"
                alt="Blog Post Icon"
              />
              <h2>Latest Blog Post</h2>
              <p>Unlocking the Potential of Mobile Apps in 2023</p>
            </div>
            <div class="blog-post">
              <img
                src="https://static.thenounproject.com/png/2040789-200.png"
                alt="Web Development Trends Icon"
              />
              <h2>Web Development Trends</h2>
              <p>
                Exploring the latest trends shaping the future of web
                development.
              </p>
            </div>
            <div class="blog-post">
              <img
                src="https://static.thenounproject.com/png/1919231-200.png"
                alt="Behind the Scenes Icon"
              />
              <h2>Behind the Scenes: Project X</h2>
              <p>
                A glimpse into the process and challenges of a recent project.
              </p>
            </div>
          </section>

          <section id="contact" class="contact">
            <img
              src="https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_mail-1024.png"
              alt="Contact Me Icon"
            />
            <h2>Contact Me</h2>
            <p>Feel free to reach out. Let's turn your ideas into reality!</p>
          </section>
        </div>

        <footer>
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </footer>
      </body>
    </>
  );
}

export default Portfolio;
