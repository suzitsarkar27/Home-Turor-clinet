import React from "react";
import img from "../../../src/img/SUZIT.jpg";

const About = () => {
  return (
    <div>
      <h2>Well come of our website</h2>
      <div className="card mx-auto w-25">
        <img
          className="mx-auto img-fulid w-100"
          height={350}
          src={img}
          alt=""
        />
      </div>
      <h2>Next To Month My Gole</h2>
      <div className="card w-50 mx-auto mt-5">
        <h2>My Targer </h2>
        <p>
          Next 2 month i will to seriuslly hard word.My Gole is scis chance . I
          want to full stack developer
        </p>
        <h2>Education</h2>
        <p>
          I am student in Pogramming Hero batch no 5.I have complect in ssc in
          Shahsjalal Govt Collage .
        </p>
      </div>
    </div>
  );
};

export default About;
