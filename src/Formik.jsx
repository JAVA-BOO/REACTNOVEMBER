import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Formik = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "username should not be less than 3 characterss")
        .trim()
        .required("username cannot be empty"),
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
      setloading(true);
      console.log(values);
      const { email, username, password } = values;
      try {
        const res = await axios.get("http://localhost:6789/user");
        console.log(res);
        const alluser = res.data;
        const existuser = alluser.find((user) => user.email == email);
        console.log(existuser);
        if (existuser) {
          setloading(false);
          return toast.error("user already exist");
        }
        const response = await axios.post("http://localhost:6789/user", values);
        console.log(response);

        if (response.status == 201) {
          setloading(false);
          toast.success("Sign up successsfull");
          navigate("/login");
        }
      } catch (error) {
        setloading(false);
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
          name="username"
          onChange={formik.handleChange}
          placeholder="Username"
          type="text"
        />
        {formik.errors.username && formik.touched.username && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {formik.errors.username}
          </p>
        )}
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
        <button className="btn btn-dark" disabled={loading} type="submit">
          {loading ? "loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Formik;
