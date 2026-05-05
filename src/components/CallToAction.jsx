import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div className="container-fluid py-5 text-center" style={{background: "linear-gradient(135deg, #283341, #1a2238)",
        color: "#fff"}}>
      <div className="container">

        <h2 style={{fontWeight: "700", fontSize: "28.5px",}}>Discover Festivals Around the World 🌍</h2>
        <p className="mt-3" style={{fontSize: "15.5px", color: "#ccc", maxWidth: "600px", margin: "0 auto"}}>
          Explore cultural celebrations, traditions, and stories from different
          parts of the world — all in one place.
        </p>
 
        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">

          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const section = document.getElementById("festival-section");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="btn btn-danger px-4 py-2"
            style={{ fontWeight: "500" }}
          >
            Explore Festivals
          </Link>

          <Link
            to="/about"
            className="btn btn-outline-light px-4 py-2"
            style={{ fontWeight: "500" }}
          >
            Learn More
          </Link>

        </div>

      </div>
    </div>
  );
}

export default CallToAction;