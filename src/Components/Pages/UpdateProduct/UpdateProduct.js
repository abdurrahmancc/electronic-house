import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://floating-wildwood-16493.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.find((item) => item._id === id);
        setProduct(remaining);
      });
  }, []);
  console.log(product);
  return (
    <div className="container my-5">
      <div className="w-50 mx-auto">
        {" "}
        <img style={{ objectFit: "cover" }} className=" w-100 " src={product.img} alt="" />
        <div className=" mx-auto  ">
          <Table striped bordered hover className="mb-0" variant="dark">
            <thead>
              <tr>
                <th className="text-center py-3" colSpan={3}>
                  {" "}
                  Update Inventory
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>Name</td>
                <td colSpan={3}>{product?.name}</td>
              </tr>
              <tr>
                <td colSpan={2}>price</td>
                <td colSpan={3}>$ {product?.price}</td>
              </tr>
              <tr>
                <td colSpan={2}>Quantity</td>
                <td colSpan={3}>{product?.quantity}</td>
              </tr>
              <tr>
                <td colSpan={2}>Supplier:</td>
                <td colSpan={3}>{product?.supplierName}</td>
              </tr>
              <tr>
                <td colSpan={2}>Product Id</td>
                <td colSpan={3}>{product?._id}</td>
              </tr>
              <tr>
                <td colSpan={2}>Quantity</td>
                <td colSpan={3}>{product?.description?.slice(0, 160)}...</td>
              </tr>
            </tbody>
          </Table>
          <div>
            <button className="w-100 border-0 btn-primary text-white rounded py-2">Update</button>

            <div class="input-group my-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Quantity"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button class="btn btn-primary " type="button" id="button-addon2">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
