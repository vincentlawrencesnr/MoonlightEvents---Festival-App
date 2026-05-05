import React from "react";
import Style from "./Hero.module.css";
import globe from "../assets/globe.png";

function Hero() {
  return (
    <div className={Style.hero + " d-flex flex-column justify-content-center align-items-center text-white position-relative mb-5"}>
      <h1 className="display-3 fw-bold z-3 d-flex align-items-center justify-content-center px-5" style={{  verticalAlign: "middle" }}>Moonlight Events <img className="mb-2" src={globe} style={{ width: "135px", height: "105px"}} alt="Globe" /></h1>
      <p className="lead mt-0 z-3 px-auto">
        Discover cultures, festivals, and traditions around the world
      </p>

      <button className="btn btn-warning mt-3 px-4 z-3"
        onClick={() => {
        const section = document.getElementById("festival-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    }}>
        Explore Festivals
      </button>
    </div>
  );
}

export default Hero;


// 🌍