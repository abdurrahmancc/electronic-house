import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item interval={40000}>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src={
                "https://cdn.dribbble.com/users/1684108/screenshots/15203189/media/dc371af2dca6617c32cd53d347b45d7e.jpeg?compress=1&resize=1200x900&vertical=top"
              }
              alt="First slide"
            />
            <Carousel.Caption className="d-flex  flex-column align-items-center mb-md-5"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={40000}>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src={
                "https://cdn.dribbble.com/users/2198110/screenshots/15641254/media/2771d6d0dbc247479ec4c26fccd89c2c.jpg"
              }
              alt="First slide"
            />
            <Carousel.Caption className="d-flex  flex-column align-items-center mb-md-5"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={400000}>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src={
                "https://cdn.dribbble.com/users/746931/screenshots/17617508/media/2eacfb1118d946c26b28c27f3428dabd.png?compress=1&resize=640x480&vertical=top"
              }
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
