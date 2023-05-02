import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <h1>Socials</h1>
      <div className="social-media">
        <div className="social-icons">
          <Link 
            className="social-icon-link linkedin" 
            to="/" 
            aria-label="Linkedin">
            <i className="fab fa-linkedin-in"/>
          </Link>
          <Link 
            className="social-icon-link github" 
            to="/" 
            aria-label="Github">
            <i className="fab fa-github"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
