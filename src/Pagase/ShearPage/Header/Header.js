import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../img/log.png";
import "./Header.css";
const Header = () => {
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
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Service</Nav.Link>
              <Nav.Link href="#deets">About</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
