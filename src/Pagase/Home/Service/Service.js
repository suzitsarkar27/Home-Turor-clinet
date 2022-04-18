import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ course }) => {
  const { id, name, price, img, Description } = course;
  const navigate = useNavigate();
  const navigatetoServiceDetail = (id) => {
    navigate(`/course/${id}`);
  };
  return (
    <div className="col-ms-12 col-md-6 col-lg-4  col-lx-3 g-5 rounded">
      <div className="card">
        <img height={300} src={img} alt="" />
        <h2>Name:{name}</h2>
        <p>Price:{price}</p>
        <p>{Description}</p>
        <button
          onClick={() => navigatetoServiceDetail(id)}
          className="bg-danger rounded text-white py-2"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Service;
