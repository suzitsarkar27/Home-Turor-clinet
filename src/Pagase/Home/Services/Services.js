import React from "react";
import Service from "../Service/Service";
import img1 from "../../../img/book/1.jpg";
import img2 from "../../../img/book/2.jpg";
import img3 from "../../../img/book/3.jpg";
import img4 from "../../../img/book/4.jpg";
import img5 from "../../../img/book/5.jpg";
import img6 from "../../../img/book/6.jpg";

const CourseInfro = [
  {
    id: 1,
    name: "BANGLA",
    price: 500,
    img: img1,
    Description:
      "Oure Bangla Couser is best .I have bangla teacher .Any time support here.",
  },
  {
    id: 2,
    name: "ENGLISH",
    price: 1000,
    img: img2,
    Description:
      "Oure English Couser is best .I have bangla teacher .Any time support here.",
  },
  {
    id: 3,
    name: "ICT",
    price: 1000,
    img: img3,
    Description:
      "Oure Ict Couser is best .I have bangla teacher .Any time support here.",
  },
  {
    id: 4,
    name: "ECONOMICE",
    price: 500,
    img: img4,
    Description:
      "Oure Economice  Couser is best .I have bangla teacher .Any time support here.",
  },
  {
    id: 5,
    name: "HISTORY",
    price: 500,
    img: img5,
    Description:
      "Oure History Couser is best .I have bangla teacher .Any time support here.",
  },
  {
    id: 6,
    name: "MATH",
    price: 1000,
    img: img6,
    Description:
      "Oure Math Couser is best .I have bangla teacher .Any time support here.",
  },
];
const Services = () => {
  return (
    <div id="service" className="row mt-5">
      <h2 className="text-primary">Oure course</h2>
      {CourseInfro.map((course) => (
        <Service key={course.is} course={course}></Service>
      ))}
    </div>
  );
};

export default Services;
