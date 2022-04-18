import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebass.init";
import logo from "../../../img/log.png";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const handelSingOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/home"} href="#">
            <img className="ms-5" height={50} src={logo} alt="" />
            <span className="ms-4 text-primary">Tutor</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav className="me-5">
              <Nav.Link href="home#courses">Courses</Nav.Link>
              <Nav.Link href="home#about">About</Nav.Link>
              <Nav.Link eventKey={2} href="home#contact">
                Contact
              </Nav.Link>
              {user ? (
                <button
                  className="bg-danger text-white rounded-pill"
                  onClick={handelSingOut}
                >
                  Sing Out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
