import React from "react";
import "./auth.css";
import signinimage from "../../Assets/images/signin-image.webp";
import { Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import SignupForm from "./SignupForm";

function SignUp() {
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
          <div className="header">Sign Up</div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
