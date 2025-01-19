import { useEffect } from "react";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import About from "../components/About";

import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="text-center py-5 bg-primary text-white">
        <div className="container my-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/codeThink_Hero.svg"
                alt="Hero"
                className="img-fluid my-4 rounded object-fit w-100"
                style={{
                  maxWidth: "500px",
                  animation: "fadeIn 1s ease-in-out",
                }}
              />
            </div>
            <div className="col-md-6">
              <About />
            </div>
          </div>
        </div>
      </div>

      <Skills />

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-8 text-center p-4 shadow bg-white rounded"
              data-aos="fade-up"
            >
              <h2 className="mb-3 fw-bold text-primary">Projects</h2>
              <p className="mb-4 text-muted">
                I like to showcase my work, and you can explore all my projects
                hosted online.
              </p>
              <Link to="/projects" className="btn btn-outline-primary px-4">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-8 text-center p-4 shadow bg-white rounded"
              data-aos="fade-up"
            >
              <h2 className="mb-3 fw-bold text-primary">Blogs</h2>
              <p className="mb-4 text-muted">
                I enjoy working on blogs and documenting my learning and
                experiences.
              </p>
              <Link to="blogs" className="btn btn-outline-primary px-4">
                Read Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Home;
