import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";

const Add = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const info = {
      productName: e.target.productName.value,
      email: e.target.email.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      img: e.target.img.value,
      supplierName: e.target.supplierName.value,
      description: e.target.description.value,
    };

    const result = await axios.post("https://rocky-citadel-06569.herokuapp.com/products", info);
    if (result) {
      toast.success("success", { id: "addSuccess" });
      e.target.reset();
    }
  };

  return (
    <div className="container my-5">
      <div className="w-50 mx-auto bg-white">
        <div className="w-75 mx-auto py-4">
          <h4 className="text-center">Add products</h4>
          <Form onSubmit={handleSubmitForm}>
            <Form.Group className="mb-3">
              <Form.Label className="m-0">Name</Form.Label>
              <Form.Control type="text" name="productName" required placeholder="product name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="m-0">Email address</Form.Label>
              <Form.Control type="email" name="email" required placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="m-0">price</Form.Label>
              <Form.Control type="text" name="price" required placeholder="price" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="m-0">Quantity</Form.Label>
              <Form.Control type="text" name="quantity" required placeholder="Quantity" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="m-0">Image URL</Form.Label>
              <Form.Control type="text" name="img" required placeholder="Image URL" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="m-0">Supplier Name</Form.Label>
              <Form.Control type="text" name="supplierName" required placeholder="Supplier Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="m-0">Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                required
                placeholder="Description"
                rows={2}
              />
            </Form.Group>

            <Button className="w-100" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Add;
