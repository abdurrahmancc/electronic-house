import React from "react";

const PageLoading = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex w-100 justify-content-center align-items-center"
    >
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default PageLoading;
