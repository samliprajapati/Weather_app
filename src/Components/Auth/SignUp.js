import React from "react";
import "./auth.css";
import signinimage from "../../Assets/images/signup-image.webp";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="main">
        <div className="right">
          <div className="header">Sign Up</div>
          <div className="form_wrapper">
            {" "}
            <SignupForm />
          </div>
        </div>
        <div className="left">
          <div className="image">
            {" "}
            <img src={signinimage} />
            <Link to="/signin">
              {" "}
              <div style={{ marginTop: "10px" }}>I am already member</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
