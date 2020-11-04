import React from "react";
import "./auth.css";
import signinimage from "../../Assets/images/signin-image.webp";
import { Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import LoginForm from "./LoginForm";
import { withRouter } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="main">
        <div className="left">
          <div className="image">
            {" "}
            <img src={signinimage} />
          </div>
        </div>
        <div className="right">
          <div className="header">Sign In</div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
