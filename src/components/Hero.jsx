import React from "react";
import Style from "./Hero.module.css";
import globe from "../assets/globe.png";

// style={{ width: "135px", height: "105px"}}
// <img className="" style={{ width: "135px", height: "105px" }} src={globe}  alt="Globe" />

function Hero() {
  return (
    <div className={Style.hero + " d-flex flex-column justify-content-center text-white position-relative mb-5"}>
    <div className="container">

    <h1 className={Style["hero-title"] + " display-1"}>Moonlight Events</h1>
    <p className="lead mt-3" style={{color: "#faf3e0", zIndex: 999}}>Discover cultures, festivals, and traditions around the world</p>

    <button
      className="btn btn-danger mt-3 px-4"
      onClick={() => {
        const section = document.getElementById("festival-section");

        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }}
      style={{ zIndex: 999 }}
    >
      Explore Festivals
    </button>

  </div>
</div>
  );
}

export default Hero;


// 🌍