import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Subscribe from "../Subscribe/Subscribe";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
