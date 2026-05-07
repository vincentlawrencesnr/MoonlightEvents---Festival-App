import React, { useEffect } from "react";
import talents from "../data/talents.json";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeTalents() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">

      {/* Section Title */}
      <div className="text-center mb-5" >
        <h2 style={{ fontWeight: "700", color: "#2b323cff" }}>
          Featured <span style={{ color: "#c60707" }}>Talents</span> 🎭
        </h2>
        <p className="text-muted">
          Discover creative minds behind global cultural expressions
        </p>
      </div>

      {/* Cards */}
      <div className="row">
        {talents.map((talent) => (
          <div key={talent.id} className="col-md-4 mb-4" data-aos="zoom-in">
           <div className="card shadow h-100 border-0">
        
              <img
                src={talent.image}
                className="card-img-top"
                alt={talent.name}
                style={{ height: "250px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5 className="card-title">{talent.name}</h5>
                <p className="mb-2" style={{ fontSize: "14px", fontWeight: "600"}}>
                  {talent.talent} • {talent.country}
                </p>
                <p className="card-text small">
                  {talent.description}
                </p>

                <button className="btn btn-outline-danger btn-sm mt-2" onClick={() => alert(`Thank you for supporting ${talent.name}!`)}>
                  Support Talent
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default HomeTalents;

// onClick={() => window.open("https://instagram.com", "_blank")}