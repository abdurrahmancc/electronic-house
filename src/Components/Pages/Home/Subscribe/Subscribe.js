import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className=" ">
      <div className="subscribe-section text-center py-5">
        <h3>
          <span className="pb-2 border-bottom border-3 border-white">Subscribe</span>
        </h3>
        <p className="pt-3 pb-4">subscribe our newsletter to stay update every moment</p>
        <div className="w-50 mx-auto d-flex  justify-content-around">
          <input type="text" className="w-75 border-0 py-2" name="" id="" />
          <button className="border-0 py-2 px-4">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
