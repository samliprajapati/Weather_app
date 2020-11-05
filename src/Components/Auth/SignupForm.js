import React from "react";
import { Input, Button, Form, message, Checkbox } from "antd";
import { Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { register } from "./AuthAction";
import { createBrowserHistory } from "history";
import { KeyOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
const history = createBrowserHistory();

function SignupForm(props) {
  function onChangeCheckbox(e) {
    console.log(`checked = ${e.target.checked}`);
  }
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
      initialValues={{
        userName: "",
        emailAddress: "",
        password: "",
        Confirmpassword: "",
      }}
      onSubmit={(values) => {
        console.log(values);
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
          <Form.Item
            name="userName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName}
          >
            <Input placeholder="Your Name" prefix={<UserOutlined />} />
          </Form.Item>
          <br />
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
          <Form.Item
            name="Confirmpassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          >
            <Input.Password
              prefix={<KeyOutlined />}
              placeholder="Repeat your password"
            />
          </Form.Item>

          <br />
          <Form.Item>
            <Checkbox onChange={onChangeCheckbox}>
              I agree all statements in Terms of services
            </Checkbox>
          </Form.Item>
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
