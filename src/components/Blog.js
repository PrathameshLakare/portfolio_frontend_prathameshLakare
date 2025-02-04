import React from "react";
import { Link } from "react-router-dom";

function Blog({ blogs }) {
  return (
    <section id="blogs">
      <div className="container">
        <h2 className="text-center mb-5">My Blogs</h2>
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{blog.title}</h5>
                    {blog.blogDescription && (
                      <p className="card-text text-center text-muted">
                        {blog.blogDescription}
                      </p>
                    )}
                    <div className="mt-auto text-center">
                      <Link
                        to={blog.link}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Blog
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center w-100">
              <h4>No Blogs Available</h4>
              <p>Check back later to read some interesting blogs!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Blog;
