import React from "react";

const Service = ({ course }) => {
  const { name, price, img, Description } = course;
  return (
    <div className="col-ms-12 col-md-6 col-lg-4  col-lx-3 g-5">
      <div className="card">
        <img height={300} src={img} alt="" />
        <h2>Name:{name}</h2>
        <p>Price:{price}</p>
        <p>{Description}</p>
        <button className="bg-danger rounded text-white">Buy Now</button>
      </div>
    </div>
  );
};

export default Service;
