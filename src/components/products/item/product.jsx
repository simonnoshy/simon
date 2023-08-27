
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-3 mb-4 mt-1">
      <div className="card h-100">
        <img
          src={product.thumbnail}
          alt=""
          className="card-img-top"
          style={{ height: "40%" }}
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{product.title}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <span>{product.price + "$"}</span>
          <button className="btn btn-secondary" onClick={() => navigate(`details/${product.id}`)} > Details</button>
        </div>
      </div>
    </div>
  );
}