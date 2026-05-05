import React from "react";
import { Link } from "react-router-dom";
import festivals from "../data/festivals.json";

function HomeGallery() {

  //  pick only first 6 images (preview)
  const previewFestivals = festivals.slice(0, 6);

  return (
    <div className="container py-5">

      {/* TITLE */}
      <div className="text-center mt-4 mb-4">
        <h2 style={{ fontWeight: "700", color: "#2b323c" }}>
          Festival <span style={{ color: "#c60707" }}>Gallery</span> 📸
        </h2>

        <p className="text-muted mt-2 mb-4" style={{ fontSize: "16.5px" }}>
          A glimpse into celebrations around the world
        </p>
      </div>

      {/* GRID */}
      <div className="row">
        {previewFestivals.map((festival) => (
          <div key={festival.id} className="col-md-4 mb-4">
            
            <div style={{overflow: "hidden", borderRadius: "8px", }}>
              <img
                src={festival.image}
                alt={festival.name}
                className="img-fluid"
                style={{
                  height: "220px",
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
              />
            </div>

          </div>
        ))}
      </div>

      {/*My CallToAction CTA BUTTON */}
      <div className="text-center mt-3">
        <Link to="/gallery" className="btn btn-outline-danger px-4">
          View Full Gallery →
        </Link>
      </div>

    </div>
  );
}

export default HomeGallery;