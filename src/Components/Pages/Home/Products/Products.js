import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  products.length = 6;
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div style={{ maxWidth: "950px" }} className="container mt-5">
      <h2 className="fs-1 fw-bold text-center mb-4 pb-2">
        <span className="product-bottom">Products</span>
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((item) => {
          return (
            <div className="col rounded-3 ">
              <div style={{ width: "18rem" }} className="card p-2 mx-auto">
                <img
                  style={{ maxHeight: "150px", objectFit: "cover" }}
                  src={item?.img}
                  className="rounded-3"
                  alt="..."
                />
                <div className="card-body p-2">
                  <h5 className="card-title">{item.name}</h5>
                  <p>price: {item?.price}</p>
                  <p>Quantity: {item?.quantity}</p>
                  <p className="card-text">Description: {item.description?.slice(0, 45)}...</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>price: {item?.supplierName}</span>
                    <button className=" border-0 btn-background  px-4 py-2 rounded-3 ">
                      <Link
                        to={`/updateproduct/${item._id}`}
                        className="text-decoration-none  text-white"
                      >
                        Update
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center my-5">
        <button className=" border-0 btn-background  px-5 py-3 rounded-3 ">
          <Link to={`/manageproducts`} className="text-decoration-none  text-white">
            Manage Inventory
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
