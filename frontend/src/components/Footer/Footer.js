import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <h2 className="FooterTitle">&copy; noteIT</h2>
      <div className="Router">
        <Link className="Routes" to="/aboutus">
          About Us
        </Link>
        <span className="Routes">Contact Us</span>
      </div>
    </div>
  );
};

export default Footer;
