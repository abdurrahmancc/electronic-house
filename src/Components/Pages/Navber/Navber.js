import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../../../img/img/logo.png";
import auth from "../../Hooks/Firebase/Firebase";
import { signOut } from "firebase/auth";
import "./Navber.css";
const Navber = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar style={{ backgroundColor: "#120E43" }} className=" py-3" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-white">
            Electronics House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <NavLink
                id="home"
                to={"/home"}
                className={({ isActive }) => (isActive ? "active" : "inActive")}
              >
                Home
              </NavLink>
              <NavLink
                style={user ? { display: "block" } : { display: "none" }}
                to={"/manageproducts"}
                className={({ isActive }) => (isActive ? "active" : "inActive")}
              >
                Manage Products
              </NavLink>
              <NavLink
                style={user ? { display: "block" } : { display: "none" }}
                to={"/myitem"}
                className={({ isActive }) => (isActive ? "active" : "inActive")}
              >
                MY ITEM
              </NavLink>

              <NavLink
                style={user ? { display: "block" } : { display: "none" }}
                to={"/add"}
                className={({ isActive }) => (isActive ? "active" : "inActive")}
              >
                Add
              </NavLink>

              <NavLink
                to={"/blog"}
                className={({ isActive }) => (isActive ? "active" : "inActive")}
              >
                Blog
              </NavLink>

              {user ? (
                <span
                  onClick={() => signOut(auth)}
                  className="btn text-decoration-none text-white pt-0 border-top-0 fw-bold pb-1"
                >
                  SIGN OUT
                </span>
              ) : (
                <NavLink
                  to={"/login"}
                  className={({ isActive }) => (isActive ? "active" : "inActive")}
                >
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navber;
