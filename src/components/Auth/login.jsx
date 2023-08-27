import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../services/auth.service";
import { gState } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setData } = useContext(gState);
  const [userData, setUserData] = useState(null);

  const loginForm = useFormik({
    initialValues: {
      username: "lkjhg",
      password: "mnbvc",
    },
    onSubmit: async (formValues) => {
      const data = await login(formValues);
      setData((prevState) => {
        return {
          ...prevState,
          isLoggedIn: true,
          userData: data,
        };
      });
      navigate("/products");
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .required("Password is Required")
        .min(5, "Minimum is 5 characters"),
    }),
  });

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Welcome back!</h2>
        <form onSubmit={loginForm.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              value={loginForm.values.username}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
              name="username"
              type="text"
              id="username"
              className={`form-control ${
                loginForm.touched.username && loginForm.errors.username
                  ? "is-invalid"
                  : ""
              }`}
            />
            {loginForm.touched.username && loginForm.errors.username && (
              <div className="invalid-feedback">
                {loginForm.errors.username}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
              name="password"
              type="password"
              id="password"
              className={`form-control ${
                loginForm.touched.password && loginForm.errors.password
                  ? "is-invalid"
                  : ""
              }`}
            />
            {loginForm.touched.password && loginForm.errors.password && (
              <div className="invalid-feedback">
                {loginForm.errors.password}
              </div>
            )}
          </div>
          <button disabled={!loginForm.isValid} className="btn btn-secondary btn-block mt-3" type="submit" > Login</button>
          <div className="text-center mt-3">
            <p className="mb-1">Don't have an account?</p>
            <Link to="/register" className="text-decoration-none text-secondary">  Register now</Link>
          </div>
        </form>
        {userData && (
          <div className="mt-4 text-center">
            <p className="mt-2 mb-0">{userData.firstName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;