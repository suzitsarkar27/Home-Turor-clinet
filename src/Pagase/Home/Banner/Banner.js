import React from "react";
import { Carousel } from "react-bootstrap";
import logo from "../../../img/banner/14893.jpg";
import logo2 from "../../../img/banner/5881969.jpg";
import logo3 from "../../../img/banner/6101073.jpg";
import logo4 from "../../../img/banner/Investor presentation-pana.svg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            height={800}
            className="d-block w-100"
            src={logo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            height={800}
            className="d-block w-100"
            src={logo2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={800}
            className="d-block w-100"
            src={logo4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
