import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("https://rocky-citadel-06569.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [reload]);

  const handleDelete = async (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      const url = `https://rocky-citadel-06569.herokuapp.com/product/${id}`;
      const result = await axios.delete(url);
      console.log(result);
      if (result) {
        setReload(!reload);
        toast.success("Delete Success", { id: "deleteSuccess" });
      }
    }
  };

  console.log(products);
  return (
    <div style={{ minHeight: "100vh" }} className="container ">
      <div className="w-75 mx-auto">
        <h3 className="text-center mt-5">Manage Products {products.length}</h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th> Name</th>
              <th className="text-center">price</th>
              <th className="text-center">Supplier</th>
              <th className="text-center">image</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product?._id}>
                  <td>{product?.productName}</td>
                  <td className="text-center">{product?.price} </td>
                  <td className="text-center">{product?.supplierName}</td>
                  <td className="text-center">
                    <img
                      style={{ maxWidth: "100px", maxHeight: "50px", objectFit: "cover" }}
                      className="ps-4 "
                      src={product?.img}
                      alt=""
                    />
                  </td>
                  <td className="text-center">
                    <FaTrashAlt
                      onClick={() => handleDelete(product?._id)}
                      className="trash-icon"
                    ></FaTrashAlt>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageProducts;
