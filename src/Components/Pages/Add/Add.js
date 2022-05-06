import React from "react";
import { Button, Form } from "react-bootstrap";

const Add = () => {
  return (
    <div className="container my-5">
      <div className="w-50 mx-auto bg-white">
        <div className="w-75 mx-auto py-4">
          <h4 className="text-center">Add products</h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="m-0">Name</Form.Label>
              <Form.Control type="text" placeholder="product name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="m-0">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="m-0">price</Form.Label>
              <Form.Control type="text" placeholder="price" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="m-0">Quantity</Form.Label>
              <Form.Control type="text" placeholder="Quantity" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="m-0">Image URL</Form.Label>
              <Form.Control type="text" placeholder="Image URL" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="m-0">Supplier Name</Form.Label>
              <Form.Control type="text" placeholder="Supplier Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="m-0">Description</Form.Label>
              <Form.Control as="textarea" placeholder="Description" rows={2} />
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
