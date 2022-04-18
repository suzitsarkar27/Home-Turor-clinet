import React from "react";
import Service from "../Service/Service";
const CourseInfro = [
  { id: 1, name: "BANGLA", price: 500, img: "", Description: "" },
  { id: 2, name: "ENGLISH", price: 1000, img: "", Description: "" },
  { id: 3, name: "ICT", price: 1000, img: "", Description: "" },
  { id: 4, name: "ECONOMICE", price: 500, img: "", Description: "" },
  { id: 5, name: "HISTORY", price: 500, img: "", Description: "" },
  { id: 6, name: "MATH", price: 1000, img: "", Description: "" },
];
const Services = () => {
  return (
    <div className="row">
      <h2>Oure course</h2>
      {CourseInfro.map((course) => (
        <Service key={course.is} course={course}></Service>
      ))}
    </div>
  );
};

export default Services;
