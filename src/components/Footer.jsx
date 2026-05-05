import React from "react";
import Style from "./Footer.module.css";
import Moonlight from '../assets/MoonRed.png';
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <div className={`${Style["moonlight-footer"]} container-fluid`}>
      <div className="container">
        <div className="row gy-4 text-sm-start text-md-start">

          {/* Logo Section */}
          <div className="col-12 col-md-6 col-lg-4 me-lg-5">
            <Link
              className="navbar-brand d-flex align-items-center justify-content-sm-start justify-content-md-start fw-bold"
              style={{ color: "#faf3e0", fontSize: "30px", fontFamily: 'Montserrat, sans-serif' }}
              to="/"
            >
              <img src={Moonlight} alt="Moonlight Events" width="30" height="30" className="me-1"/>
              events
            </Link>

            <p className={`${Style.tagline}`}>
              Discover cultures, festivals, and traditions around the world.
            </p>

            <div className={`${Style["social-icons"]} d-flex justify-content-sm-start justify-content-md-start mt-3`}>
              <i className="ri-instagram-line fs-3 me-3"></i>
              <i className="ri-facebook-fill fs-3 me-3"></i>
              <i className="ri-twitter-fill fs-3 me-3"></i>
              <i className="ri-linkedin-fill fs-3"></i>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3 col-lg-3 ms-lg-5">
            <h5 className={Style.footerTitle}>Quick Links</h5>

            <div className={`${Style["support-links"]} d-flex flex-column gap-2`}>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/festivals">View Festivals</Link>
              <Link to="/gallery"> Gallery</Link>
            </div>
          </div>

          {/* Support */}
          <div className="col-12 col-md-3 col-lg-3 ms-lg-5">
            <h5 className={Style.footerTitle}>Support</h5>

            <div className={`${Style["support-links"]} d-flex flex-column gap-2`}>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/">Terms of Service</Link>
              <Link to="/">Careers</Link>
            </div>
          </div>

        </div>

        <hr className={Style.footerLine} />

        <p className={` ${Style.copyright} pb-4 pb-lg-0 text-center`}>
          © 2026 MoonlightEvents. All rights reserved. 
        </p>

      </div>
    </div>
  );
}

export default Footer;

/*
onClick = {() => {const section = document.getElementById("faq");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }}}
*/