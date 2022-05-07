import React from "react";
import video from "../../../img/img/animation.mp4";

const NotFound = () => {
  return (
    <div>
      <video
        style={{ height: "100vh", objectFit: "cover" }}
        className="videoTag w-100"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default NotFound;
