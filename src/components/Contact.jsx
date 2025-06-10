import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-8 text-center p-5 shadow-lg home-card rounded"
            data-aos="fade-up"
          >
            <h2 className="mb-4 fw-bold">Contact</h2>
            <p className="lead home-card-description mb-4">
              Feel free to reach out for collaborations, inquiries, or just to
              say hello! I’m always open to new opportunities.
            </p>
            <a
              href="mailto:prathameshlakare001@gmail.com"
              className="btn btn-primary btn-lg px-4 py-2"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
