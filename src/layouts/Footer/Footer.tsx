import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icon">
        <FaFacebookF size={25} />
        <FaInstagram size={25} />
        <FaTwitter size={25} />
        <FaLinkedinIn size={25} />
      </div>
      <div className="footer-member">
        <ul>
          <li>
            <a href="#">Audio and Subtitles</a>
          </li>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
