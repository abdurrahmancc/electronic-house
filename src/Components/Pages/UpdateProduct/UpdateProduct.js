import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [reload, setReload] = useState(false);
  const refInputQuantity = useRef();

  useEffect(() => {
    fetch("https://rocky-citadel-06569.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.find((item) => item._id === id);
        setProduct(remaining);
      });
  }, [reload]);
  console.log(product);

  //shift product
  const shiftProduct = async (id) => {
    const { data } = await axios.put(`https://rocky-citadel-06569.herokuapp.com/product/${id}`, {
      quantity: product?.quantity - 1,
    });
    if (data) {
      setReload(!reload);
    }
  };

  //update Quantity
  const updateQuantity = async (id) => {
    if (!/^\d*[1-9]\d*$/.test(refInputQuantity.current.value)) {
      toast.error("invalid quantity");
      return;
    }
    const inputQuantity = parseInt(refInputQuantity.current.value);
    const { data } = await axios.put(`https://rocky-citadel-06569.herokuapp.com/product/${id}`, {
      quantity: product?.quantity + inputQuantity,
    });
    if (data) {
      setReload(!reload);
    }
  };
  return (
    <div className="container my-5">
      <div className="w-50 mx-auto">
        {" "}
        <img style={{ objectFit: "cover" }} className=" w-100" src={product?.img} alt="" />
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
                <td colSpan={2}>Description</td>
                <td colSpan={3}>{product?.description?.slice(0, 160)}...</td>
              </tr>
            </tbody>
          </Table>
          <div>
            <button
              onClick={() => shiftProduct(product?._id)}
              className="w-100 border-0 btn-primary text-white rounded py-2"
            >
              Shift
            </button>

            <div className="input-group my-3">
              <input
                type="text"
                ref={refInputQuantity}
                className="form-control text-center"
                placeholder="Enter Quantity"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                onClick={() => updateQuantity(product._id)}
                className="btn btn-primary "
                type="button"
                id="button-addon2"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
