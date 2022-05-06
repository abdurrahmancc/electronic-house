import React from "react";
import { Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import "./ManageProducts.css";

const ManageProducts = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="container ">
      <div className="w-75 mx-auto">
        <h3 className="text-center mt-5">Manage Products</h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th> Name</th>
              <th>price</th>
              <th>Supplier</th>
              <th>image</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>unnda</td>
              <td>shudho </td>
              <td>khali</td>
              <td>danda</td>
              <td className="text-center">
                <FaTrashAlt className="trash-icon"></FaTrashAlt>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageProducts;
