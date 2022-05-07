import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import logo from "../../../img/img/title-logo.png";
import auth from "../../Hooks/Firebase/Firebase";
import toast from "react-hot-toast";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const [hide, setHide] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState({ email: "", emailError: "" });
  const [password, setPassword] = useState({ password: "", passwordError: "" });
  const [inputError, setInputError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState({
    confirmPassword: "",
    confirmPasswordError: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  //handle Hide
  const handleHide = (e) => {
    e.preventDefault();
    setHide(!hide);
  };

  // handle Confirm password Hide
  const handleConfirmHide = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  // handle email
  const handleEmail = (inputEmail) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)) {
      setEmail({ email: inputEmail, emailError: "" });
    } else {
      setEmail({ email: "", emailError: "Invalid Email" });
    }
  };

  // handle email
  const handlepassword = (inputPassword) => {
    if (/(?=.*?[#?!@$%^&*-])/.test(inputPassword)) {
      setPassword({ password: inputPassword, passwordError: "" });
    } else {
      setPassword({ password: "", passwordError: "Invalid Password" });
    }
  };

  // handle confirm email
  const handleConfirmpassword = (inputConfirmPassword) => {
    if (/(?=.*?[#?!@$%^&*-])/.test(inputConfirmPassword)) {
      setConfirmPassword({ confirmPassword: inputConfirmPassword, confirmPasswordError: "" });
    } else {
      setConfirmPassword({ confirmPassword: "", confirmPasswordError: "Invalid Password" });
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (password.password === confirmPassword.confirmPassword) {
      createUserWithEmailAndPassword(email.email, password.password);
      toast.success("success", { id: "user-create-success" });
    } else {
      setInputError("not match your password!");
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
      <div className="container ">
        <div className="w-50 mx-auto  py-5 rounded login-form bg-white ">
          <h3 className="text-center mb-3">Please Register</h3>
          <Form onSubmit={handleSubmitForm} className="w-75 mx-auto">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => handleEmail(e.target.value)}
                name="email"
                placeholder="Enter email"
              />
              <span className="text-danger">{email?.emailError && email?.emailError}</span>
            </Form.Group>

            <div className="text-end">
              <button className="register-toggoler" onClick={handleHide}>
                {hide ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <Form.Group className=" m-top" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => handlepassword(e.target.value)}
                type={hide ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <span className="text-danger">
                {password?.passwordError && password?.passwordError}
              </span>
            </Form.Group>

            <div className="text-end">
              <button className="register-toggoler" onClick={handleConfirmHide}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <Form.Group className="mb-3 m-top" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={(e) => handleConfirmpassword(e.target.value)}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Password"
                name="confirmPassword"
              />
              <span className="text-danger">
                {confirmPassword?.confirmPasswordError
                  ? confirmPassword?.confirmPasswordError
                  : inputError && inputError}
              </span>
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
