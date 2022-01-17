import React from "react";
import { Button, Form, Label } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="box">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" href="/funcomp">
          Submit
        </Button>
        <Link to="/signupa">signup</Link>
      </Form>
    </div>
  );
};

export default LoginPage;
