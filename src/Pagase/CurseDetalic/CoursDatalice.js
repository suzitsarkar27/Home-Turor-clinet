import React from "react";
import { Link, useParams } from "react-router-dom";
import img from "../../../src/img/book/tutor-with-litthe-girl-studying-home (2).jpg";
const CoursDatalice = () => {
  const { courseId } = useParams();
  return (
    <div>
      <div className="card">
        <img src={img} alt="" />
        <h2 className="mt-2">Well Come of Our Course</h2>
        <Link className="mb-5 pt-5" to={"/cheackout"}>
          <button className="bg-primary rounded py-2 px-3">Enrrol Now</button>
        </Link>
      </div>
    </div>
  );
};

export default CoursDatalice;
