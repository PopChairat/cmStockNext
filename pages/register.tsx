import React from "react";
import { Formik, Form, Field, FormikProps } from "formik";

type Props = {};

export default function register({}: Props) {
  return (
    <div>
      <Formik
        initialValues={{ username: "jj", password: "ll" }}
        onSubmit={(value) => alert(JSON.stringify(value))}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              onChange={handleChange}
              value={values.username}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="password"
              onChange={handleChange}
              value={values.password}
            />{" "}
            <br />
            <button type="submit">Register</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
