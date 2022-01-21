import React, { useState } from "react";
import {
  Button,
  Offcanvas,
  ListGroup,
  Navbar,
  Container,
} from "react-bootstrap";
import "../../resuable/overwrite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const CompNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Company name</Navbar.Brand>
          <Button variant="outline-primary" onClick={handleShow}>
            <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faBars} />
            Menu
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Company name</Offcanvas.Title>
        </Offcanvas.Header>
        <div className="dropdown-divider"></div>
        <Offcanvas.Body className="mt-4">
          <ListGroup defaultActiveKey="/complist">
            <ListGroup.Item action href="/complist">
              Lists
            </ListGroup.Item>
            <ListGroup.Item href="/hire" action>
              New Job
            </ListGroup.Item>
            <ListGroup.Item href="#" action>
              Edit profile
            </ListGroup.Item>
            <ListGroup.Item href="/" action>
              Log out
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default CompNav;
