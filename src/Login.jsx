import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("email is not valid")
        .trim()
        .required("email cannot be empty"),
      password: Yup.string()
        .min(6, "passwrod cannot be less than 6 characters")
        .matches(
          passwordRegex,
          "Password must be at least one uppercase letter lowercase letter, and one number",
        )
        .max(109)
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const { email, password } = values;
      try {
        const response = await axios.get("http://localhost:6789/user");
        const alluser = response.data;
        const existuser = alluser.find(
          (user) => user.email == email && user.password == password,
        );
        console.log(existuser);
        if (existuser) {
          return alert("login successful");
        }
        return alert("user does not exist");
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log(formik.errors);
  console.log(formik.touched);

  return (
    <div>
      <form
        className="w-50 py-3 px-3 shadow mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <input
          onBlur={formik.handleBlur}
          className="form-control mb-3"
          name="email"
          onChange={formik.handleChange}
          placeholder="Email"
          type="text"
        />
        {formik.errors.email && formik.touched.email && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {formik.errors.email}
          </p>
        )}
        <input
          onBlur={formik.handleBlur}
          className="form-control mb-3"
          name="password"
          onChange={formik.handleChange}
          placeholder="Password"
          type="text"
        />
        {formik.errors.password && formik.touched.password && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {formik.errors.password}
          </p>
        )}
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
