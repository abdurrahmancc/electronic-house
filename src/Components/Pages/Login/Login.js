import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./login.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../../img/Social/google-logo.png";
import facebook from "../../../img/Social/facebook.png";
import gitHub from "../../../img/Social/github.png";
import logo from "../../../img/img/title-logo.png";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Hooks/Firebase/Firebase";
import PageLoading from "../../Shared/PageLoading/PageLoading";
import axios from "axios";
import useAccessToken from "../../Hooks/useAccessToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, signInUser, signInLoading, signInError] = useSignInWithGoogle(auth);
  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [hide, setHide] = useState(false);
  const handleHide = (e) => {
    e.preventDefault();
    setHide(!hide);
  };
  const [token] = useAccessToken(user);
  console.log(token);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) {
      await signInWithEmailAndPassword(email, password);
    }
  };

  if (loading || signInLoading) {
    return <PageLoading></PageLoading>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container my-5">
      <div className="w-50 mx-auto rounded py-5 login-form bg-white ">
        <h3 className="text-center mb-3">Please Login</h3>
        <Form onSubmit={handleFormSubmit} className="w-75 mx-auto">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          </Form.Group>
          <div className="text-end">
            <button className="toggoler" onClick={handleHide}>
              {hide ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <Form.Group className="mb-3 m-top" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type={hide ? "text" : "password"}
              placeholder="Password"
            />
            <span className="text-danger">{error?.message}</span>
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        </Form>
        <div className="w-75 mx-auto">
          <span>
            Don't have an account?
            <Link to={"/register"} className="btn btn-link p-0 mb-3 ms-1 mt-2 ">
              Create an account
            </Link>
          </span>
        </div>
        <div className="  w-75 mx-auto hr-line">
          <hr />
          <p className="mx-2 mb-0">or</p>
          <hr />
        </div>
        <div className="w-75 mx-auto ">
          <button
            onClick={() => signInWithGoogle()}
            className="btn  mt-2 btn-body border-secondary rounded-pill w-100"
          >
            <img src={google} /> Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
