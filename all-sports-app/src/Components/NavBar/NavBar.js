import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand href="/">All Sports</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sportslist">Sports List</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div className="">
    //   <h3>NavBar</h3>
    //   <ul>
    //     <Link to={"/"}>
    //       <li>Homepage</li>
    //     </Link>
    //     <Link to="/sportslist">
    //       <li>Sports List</li>
    //     </Link>
    //     <Link to="/worldrecords">
    //       <li>World Records</li>
    //     </Link>
    //     <Link to="/locations">
    //       <li>Locations</li>
    //     </Link>
    //   </ul>
    // </div>
  );
};

export default NavBar;
