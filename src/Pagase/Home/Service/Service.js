import React from "react";

const Service = ({ course }) => {
  const { name, price } = course;
  return (
    <div className="col-ms-12 col-md-6 col-lg-4  col-lx-3 g-5">
      <div className="card">
        <h2>Name:{name}</h2>
        <p>Price:{price}</p>
        <button className="bg-danger rounded">Buy Now</button>
      </div>
    </div>
  );
};

export default Service;
