import React from "react";
import Style from "./FestivalCard.module.css";

function FestivalCard({ festival, onClick  }) {

  return (
    <div className="col-md-4 mb-4" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className={`card h-100 shadow ${Style.card}`}>

        <img
          src={festival.image}
          className="card-img-top"
          alt={festival.name}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{festival.name}</h5>
          <p className="card-text" style={{ fontSize: "14px", fontWeight: "600"}}>
            {festival.country} • {festival.month}
          </p>
          <p style={{color: '#313030', fontSize: "16px", fontWeight: "400"}}>{festival.description}</p>
        </div>
        
      </div>
    </div>
  );
}

export default FestivalCard;