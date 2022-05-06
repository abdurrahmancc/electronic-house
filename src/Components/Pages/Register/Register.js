import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../../img/img/title-logo.png";

const Register = () => {
  const [hide, setHide] = useState(false);
  const [showConfiremPassword, setConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const handleHide = (e) => {
    e.preventDefault();
    setHide(!hide);
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmPassword(!showConfiremPassword);
  };
  return (
    <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
      <div className="container ">
        <div className="w-50 mx-auto  py-5 rounded login-form bg-white ">
          <h3 className="text-center mb-3">Please Register</h3>
          <Form className="w-75 mx-auto">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <div className="text-end">
              <button className="register-toggoler" onClick={handleHide}>
                {hide ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <Form.Group className=" m-top" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={hide ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <div className="text-end">
              <button className="register-toggoler" onClick={handleConfirmPassword}>
                {showConfiremPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <Form.Group className="mb-3 m-top" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type={showConfiremPassword ? "text" : "password"}
                placeholder="Password"
                name="confirmPassword"
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicCheckbox">
              <Form.Check
                className="agree-Terms"
                onClick={() => setAgree(!agree)}
                type="checkbox"
                label="Accept Terms & Condition"
              />
            </Form.Group>
            <Button disabled={!agree} className="w-100 " variant="primary" type="submit">
              Registration
            </Button>
          </Form>
          <div className="w-75 mx-auto">
            <span>
              Already have an account?
              <Link to={"/login"} className="btn btn-link p-0 mb-3 ms-1 mt-2">
                please Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
