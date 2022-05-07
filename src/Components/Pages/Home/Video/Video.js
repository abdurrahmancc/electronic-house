import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div className="mx-auto w-50 text-center">
      <iframe
        className="video-section"
        src="https://www.youtube.com/embed/IMPbKVb8y8s"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
