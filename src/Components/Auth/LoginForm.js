import React from "react";
import { Input, Button, Form, message, Checkbox } from "antd";
import { Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { login } from "./AuthAction";

import { KeyOutlined, MailOutlined } from "@ant-design/icons";

function LoginForm(props) {
  function onChangeCheckbox(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  function handleLoginCallback() {
    console.log(props.loggedIn);
    if (props.loggedIn !== null) {
      props.history.push("/home");
      message.success("Login Successful.");
    } else {
    }
  }
  return (
    <Formik
      initialValues={{ emailAddress: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        props.login(values);
        handleLoginCallback();
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
          <Form.Item>
            <Checkbox onChange={onChangeCheckbox}>Remember me</Checkbox>
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
