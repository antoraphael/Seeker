import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Container>
        {/* <Navbar.Brand href="#">Demo1</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/formik">formik</Nav.Link>

            <NavDropdown title="Fun comp" id="basic-nav-dropdown">
              <NavDropdown.Item href="/funcomp">UseState</NavDropdown.Item>
              <NavDropdown.Item href="/effectHook">useEffect</NavDropdown.Item>
              <NavDropdown.Item href="/usemem">UseMemo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cls comp" id="basic-nav-dropdown">
              <NavDropdown.Item href="/lifecycle">Lifecycle</NavDropdown.Item>
              <NavDropdown.Item href="/hocmain">Highorder</NavDropdown.Item>
              <NavDropdown.Item href="/purecomp">Pure Comp</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="State managment" id="basic-nav-dropdown">
              <NavDropdown.Item href="/statemovs">Simple</NavDropdown.Item>
              <NavDropdown.Item href="/reindex">Redux</NavDropdown.Item>
              <NavDropdown.Item href="/dreindex">
                redux concept
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
