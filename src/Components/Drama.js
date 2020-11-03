import React from "react";
// import { Link } from "react-router-dom";

export const Drama = ({ drama }) => (
  <div className="card">
    <img className="card-img-top" src={drama.poster} alt="drama poster" />
    <div className="card-body">
      <h5 className="card-title">{drama.title}</h5>
      <p className="card-text">{drama.description.substring(0, 70) + "..."}</p>
      {/* <Link className="btn btn-primary btn-lg">View Drama</Link> */}
      <button className="btn btn-outline-primary btn-sm">More >></button>
    </div>
  </div>
);
