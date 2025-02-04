import React from "react";
import { Link } from "react-router-dom";

function Projects({ projects }) {
  return (
    <section id="projects" className="">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row">
          {projects.length > 0 ? (
            projects
              .slice()
              .reverse()
              .map((project, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card shadow-sm h-100">
                    <div className="card-body d-flex flex-column">
                      <h4 className="card-title text-center">
                        {project.title}
                      </h4>
                      <p className="card-text text-center text-muted">
                        {project.description}
                      </p>
                      <div className="mt-auto text-center">
                        <Link
                          to={project.projectLink}
                          className="btn btn-primary me-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </Link>
                        <Link
                          to={project.githubLink}
                          className="btn btn-outline-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Source
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center w-100">
              <h4>No Projects Available</h4>
              <p>Check back later to see exciting projects!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
