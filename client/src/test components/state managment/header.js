import React, { useContext } from "react";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import NavBar from "../nav";
import { MovieContext } from "./movieContext";

const StateMhead = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="mb-3">
      <NavBar />
      <Navbar bg="dark" expand="lg" className="mb-5" variant="dark">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>No of Movies: {movies.length}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default StateMhead;
