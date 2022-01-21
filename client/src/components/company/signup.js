import React, { useState, useEffect } from "react";
import { Button, Form, Label } from "react-bootstrap";
import "../../resuable/style.css";
import { Link } from "react-router-dom";
import image from "../../resuable/images/png.png";

const CompSignup = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    // console.log(formValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formError);

    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log("no error ", formValue);
    }
  }, [formError]);

  const validate = (values) => {
    const error = {};
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const emailRegex =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!values.username) {
      error.username = "user name required";
    }
    if (!values.email) {
      error.email = "user email required";
    } else if (!emailRegex.test(values.email)) {
      error.email = "invalid email";
    }
    if (!values.password) {
      error.password = "user password required";
    } else if (!passwordRegex.test(values.password)) {
      error.password = "weak password";
    }
    return error;
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={image} className="img-fluid" alt="Sample image" />
          </div>
          <div
            className="card p-4 col-md-8 col-lg-6 col-xl-4 offset-xl-1"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            {/* <Link to="/formik">Formik</Link> study */}
            <h1 className=" fw-normal mb-3 me-3">Login</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  name="username"
                  placeholder="User name"
                  value={formValue.username}
                  onChange={handleChange}
                />
                <Form.Text className="text-error">
                  {formError.username}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Enter email"
                  value={formValue.email}
                  onChange={handleChange}
                />
                <Form.Text className="text-error">{formError.email}</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formValue.password}
                  onChange={handleChange}
                />
                <Form.Text className="text-error">
                  {formError.password}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <div className="text-center text-lg-start mt-4 pt-2">
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?
                  <Link to="/" className="link-primary m-1">
                    Login
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompSignup;
