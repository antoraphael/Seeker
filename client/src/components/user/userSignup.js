import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import TextField from "./textField";
import * as Yup from "yup";
import image from "../../resuable/images/png.png";

const UserSignup = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("email address is required"),
    password: Yup.string()
      .required("password cannot be empty")
      .min(8, "minimum of 8 characters is required"),
  });
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
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validate}
              >
                {(formik) => (
                  <div>
                    <h1>Sign up</h1>
                    {console.log(formik.values)}
                    <Form>
                      <TextField
                        label="first name"
                        name="fname"
                        type="text"
                        placeholder="first name"
                      />
                      <TextField
                        label="last name"
                        name="lname"
                        type="text"
                        placeholder="last name"
                      />

                      <TextField
                        label="email"
                        name="email"
                        type="email"
                        placeholder="email"
                      />
                      <TextField
                        label="experience"
                        name="exp"
                        type="text"
                        placeholder="months of experience"
                      />
                      <span className="small mb-3">
                        NOTES! : Your experience should be mentioned in total
                        months
                      </span>
                      <TextField
                        label="skills"
                        name="skills"
                        type="text"
                        placeholder="skills"
                      />
                      <TextField
                        label="password"
                        name="password"
                        type="password"
                        placeholder="password"
                      />
                      <Button type="submit" className="mt-5 mb-3 w-100">
                        Submit form
                      </Button>
                    </Form>
                  </div>
                )}
              </Formik>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Alread have an account?
                <Link to="/userlogin" className="link-primary m-1">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserSignup;
