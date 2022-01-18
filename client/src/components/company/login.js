import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompLogin = () => {
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
      <Link to="/formik">Formik</Link> {/* study */}
      <p className="h2 p-3">Login</p>
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
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
            defaultValue=""
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
      <Link to="/signupa">signup</Link>
      <br />
      <Link to="/userlogin">User Login</Link>
    </div>
  );
};

export default CompLogin;
