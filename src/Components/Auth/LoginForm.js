import React from "react";
import { Input, Button, Form, message } from "antd";
import { Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { login } from "./AuthAction";
import { createBrowserHistory } from "history";
import { authReducer } from "./AuthReducer";
import { KeyOutlined, MailOutlined } from "@ant-design/icons";
const history = createBrowserHistory();

function LoginForm(props) {
  function handleLoginCallback(status) {
    if (props.loggedIn !== null) {
      debugger;
      props.history.push("/");
      message.success("Login Successful.");
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
        console.log(values);
        props.login(values, handleLoginCallback);
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
          <Form.Item
            name="emailAddress"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.emailAddress}
          >
            <Input placeholder="Your Email" prefix={<MailOutlined />} />
          </Form.Item>

          <br />
          <Form.Item
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          >
            <Input.Password prefix={<KeyOutlined />} placeholder="Password" />
          </Form.Item>

          <br />
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </form>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ login }, dispatch);
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
