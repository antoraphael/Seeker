import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../resuable/images/png.png";

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

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <Form.Group controlId="validationCustom01">
                  <Form.Label>email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="email"
                    defaultValue=""
                  />
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>
              </div>
              <div className="form-outline mb-4">
                <Form.Group controlId="validationCustom01">
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="password"
                    defaultValue=""
                  />
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>
              </div>
              <div className="form-outline mb-5">
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="remember me"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
              </div>

              <Button type="submit" className="w-100" href="/complist">
                Submit form
              </Button>
            </Form>

            <div className="text-center text-lg-start mt-4 pt-2">
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?
                <Link to="/signupa" className="link-danger m-1">
                  Register
                </Link>
              </p>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Login as
                <Link to="/userlogin" className="link-primary m-1">
                  User
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompLogin;
