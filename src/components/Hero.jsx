import React from "react";
import Style from "./Hero.module.css";
import globe from "../assets/globe.png";

// style={{ width: "135px", height: "105px"}}

function Hero() {
  return (
    <div className={Style.hero + " d-flex flex-column justify-content-center align-items-center text-white position-relative mb-5"}>
      <h1 className="hero-title display-3 fw-bold z-3 d-flex flex-column flex-md-row align-items-center justify-content-center text-center gap-3 px-3" style={{  verticalAlign: "middle" }}>Moonlight Events <img className="" style={{ width: "135px", height: "105px" }} src={globe}  alt="Globe" /></h1>
      <p className="lead mt-0 z-3 px-auto text-center">
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