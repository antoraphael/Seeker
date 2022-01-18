import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import TextField from "./textField";
import * as Yup from "yup";

const UserLogin = () => {
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
      <Link to="/signupa">signup</Link>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validate}
      >
        {(formik) => (
          <div>
            <h1>Login</h1>
            {console.log(formik.values)}
            <Form>
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
              <Button type="submit" className="m-3">
                Submit form
              </Button>
              <Button type="submit" className="m-3">
                Reset form
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default UserLogin;
