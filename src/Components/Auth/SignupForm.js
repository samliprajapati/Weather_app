import React from "react";
import { Input, Button, Form, message } from "antd";
import { Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { register } from "./AuthAction";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function SignupForm(props) {
  function handleLoginCallback(status) {
    console.log(status);

    if (status == "success") {
      debugger;
      props.history.push("/");
      message.success("Register Successful.");
    } else {
      message.error(
        " Email id and Password not match . Please try again later"
      );
    }
  }
  return (
    <Formik
      initialValues={{ emailAddress: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        props.register(values, handleLoginCallback);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <Form.Item
            name="emailAddress"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.emailAddress}
          >
            <Input />
          </Form.Item>
          <p>Password</p>
          <Form.Item
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          >
            <Input.Password />
          </Form.Item>

          <br />
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </form>
      )}
    </Formik>
  );
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ register }, dispatch);
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignupForm)
);
