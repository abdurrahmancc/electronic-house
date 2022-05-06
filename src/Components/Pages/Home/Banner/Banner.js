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
              src={"https://www.codrey.com/wp-content/uploads/2019/04/LCSC-3.png"}
              alt="First slide"
            />
            <Carousel.Caption className="d-flex  flex-column align-items-center mb-md-5"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={400000}>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src={
                "https://content3.jdmagicbox.com/comp/khandwa/m5/9999p7332.7332.180319154345.f2m5/catalogue/the-electronics-warehouse-anand-nagar-khandwa-electronic-goods-showrooms-gvjv47jsw3.jpg?clr=2d392d"
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
