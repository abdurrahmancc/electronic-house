import React from "react";

const Footer = () => {
  return (
    <>
      <p style={{ backgroundColor: "#120E43" }} className="text-center  text-white m-0 py-3">
        copyright &copy; Bayezit mir {new Date().getFullYear()}
      </p>
    </>
  );
};

export default Footer;
