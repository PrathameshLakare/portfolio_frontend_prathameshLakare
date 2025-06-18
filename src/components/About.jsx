import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-5">
      <div className="container text-center">
        <h1 className="mb-4" data-aos="fade-up">
          About Me
        </h1>
        <p className="lead" data-aos="fade-in">
          Hello! I'm <strong>Prathamesh Lakare</strong>, a passionate Software
          Engineer. I enjoy building applications and solving problems through
          code.
        </p>
        <div data-aos="fade-up" className="mt-4">
          <a
            href="https://res.cloudinary.com/dxhy9u126/image/upload/v1747390846/i2yzsmpbbqylgdulslxr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
