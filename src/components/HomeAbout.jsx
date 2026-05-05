import React from "react";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#e9e9e3" }}>

      <div className="row align-items-center px-3 px-md-5">

        {/* LEFT TEXT */}
        <div className="col-md-6">
          <h2 style={{ fontWeight: "700", color: "#2b323c" }}>
            About Moonlight Events 🌍
          </h2>

          <p className="text-muted mt-3">
            We connect cultures and celebrate traditions from around the world
            through festivals.
          </p>

          <p className="text-muted">
            Every festival tells a story — and we bring those stories to life
            in one place.
          </p>

          <Link to="/about" className="btn btn-danger mt-3">
            Learn More →
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-md-6 mt-4 mt-md-0">
          <img
            src="https://unsplash.com/photos/AcmsXGJ7c8U/download?force=true&w=1920"
            alt="festival"
            className="img-fluid rounded shadow"
            style={{ height: "350px", width: "100%", objectFit: "cover" }}
          />
        </div>

      </div>

    </div>
  );
}

export default HomeAbout;