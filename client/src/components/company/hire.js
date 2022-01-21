import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import CompNav from "./compNav";

const Hire = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="box">
      <CompNav />
      <p className="h2 p-3">Create job</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="email"
            defaultValue=""
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Position</Form.Label>
          <Form.Control
            required
            type="test"
            placeholder="Position"
            defaultValue=""
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Required Expeirence</Form.Label>
          <Form.Control
            required
            type="test"
            placeholder="Required Expeirence"
            defaultValue=""
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>No of vacancies</Form.Label>
          <Form.Control
            required
            type="test"
            placeholder="No of vacancies"
            defaultValue=""
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>

        <Button type="submit" href="/complist">
          Submit form
        </Button>
      </Form>
    </div>
  );
};

export default Hire;
