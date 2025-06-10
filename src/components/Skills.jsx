import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4" data-aos="fade-up">
          Skills
        </h2>
        <div className="row gy-4">
          <div className="col-md-4" data-aos="fade-up">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-code-slash"></i> Programming Languages
                </h5>
                <p className="card-text">JavaScript</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-globe"></i> Web Technologies
                </h5>
                <p className="card-text">HTML, CSS, React, Node.js, Express</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-ui-checks-grid"></i> UI Frameworks
                </h5>
                <p className="card-text">Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-diagram-2"></i> State Management
                </h5>
                <p className="card-text">Redux</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-database"></i> Database Management
                </h5>
                <p className="card-text">MongoDB, MongoDB Atlas, NoSQL</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-tools"></i> Tools & Frameworks
                </h5>
                <p className="card-text">Git, GitHub, Vercel</p>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 mx-auto"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-bar-chart"></i> Data Visualization
                </h5>
                <p className="card-text">Chart.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
