import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 ">
      <div className="container">
        <h5 className="text-center mb-4">Connect with Me</h5>
        <div className="d-flex justify-content-center">
          <ul className="list-inline">
            <li className="list-inline-item mx-3">
              <a
                className="text-white text-decoration-none fs-4"
                href="https://github.com/PrathameshLakare"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a
                className="text-white text-decoration-none fs-4"
                href="https://www.instagram.com/invites/contact/?i=t3l51jmnk6lt&utm_content=l18a3av"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a
                className="text-white text-decoration-none fs-4"
                href="https://www.linkedin.com/in/prathamesh-lakare-8a3388206"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <p className="text-center mt-4 mb-0">&copy; 2025 Prathamesh Lakare.</p>
      </div>
    </footer>
  );
}

export default Footer;
