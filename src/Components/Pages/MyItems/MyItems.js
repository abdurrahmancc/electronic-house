import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Hooks/Firebase/Firebase";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import "./MyItems.css";
import { useNavigate } from "react-router-dom";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    (async () => {
      const email = user?.email;
      try {
        const url = `https://rocky-citadel-06569.herokuapp.com/items?email=${email}`;
        const { data } = await axios.get(url, {
          headers: {
            authentication: `Bearar ${localStorage.getItem("accessToken")}`,
          },
        });
        setItems(data);
      } catch (error) {
        console.log(error.response.status);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    })();
  }, [user, reload]);

  // delete my product
  const handleDelete = async (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      const url = `https://rocky-citadel-06569.herokuapp.com/product/${id}`;
      const result = await axios.delete(url);
      if (result) {
        setReload(!reload);
        toast.success("Delete Success", { id: "deleteSuccess" });
      }
    }
  };

  return (
    <div style={{ minHeight: "100vh" }} className="container ">
      <div className="w-75 mx-auto">
        <h3 className="text-center mt-5">Manage Products {items.length}</h3>
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
            {items.map((item) => {
              return (
                <tr key={item?._id}>
                  <td>{item?.productName}</td>
                  <td className="text-center">{item?.price} </td>
                  <td className="text-center">{item?.supplierName}</td>
                  <td className="text-center">
                    <img
                      style={{ maxWidth: "100px", maxHeight: "50px", objectFit: "cover" }}
                      className="ps-4 "
                      src={item?.img}
                      alt=""
                    />
                  </td>
                  <td className="text-center">
                    <FaTrashAlt
                      onClick={() => handleDelete(item?._id)}
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

export default MyItems;
