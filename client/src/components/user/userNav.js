import React, { Component } from "react";
import {
  Container,
  Navbar,
  Link,
  NavDropdown,
  Item,
  Nav,
} from "react-bootstrap";

const UserNav = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand href="#">User Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/complist">Lists</Nav.Link>
            {/* <Nav.Link href="/hire">New Job</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default UserNav;
