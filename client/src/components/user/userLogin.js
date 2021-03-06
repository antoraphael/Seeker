import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import TextField from "./textField";
import * as Yup from "yup";
import image from "../../resuable/images/png.png";

const UserLogin = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("email address is required"),
    password: Yup.string()
      .required("password cannot be empty")
      .min(8, "minimum of 8 characters is required"),
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/userlist");
  };
  return (
    <div>
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
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validate}
              >
                {(formik) => (
                  <div>
                    {console.log(formik.values)}
                    <Form onSubmit={handleSubmit}>
                      <TextField
                        label="email"
                        name="email"
                        type="email"
                        placeholder="email"
                      />
                      <TextField
                        label="password"
                        name="password"
                        type="password"
                        placeholder="password"
                      />
                      <Button type="submit" className="w-100 mt-4 mb-2">
                        Submit form
                      </Button>
                    </Form>
                  </div>
                )}
              </Formik>

              <div className="text-center text-lg-start mt-4 pt-2">
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link to="/usersingup" className="link-danger m-1">
                    Register
                  </Link>
                </p>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Login as
                  <Link to="/" className="link-primary m-1">
                    Company
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserLogin;
