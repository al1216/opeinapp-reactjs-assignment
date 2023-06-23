import React from "react";
import "./Right.css";
import { useNavigate } from "react-router-dom";

export default function Right() {
  let navigate = useNavigate();
  return (
    <div className="right-main">
      <div className="sign-in-caption">
        <div className="wrapper-caption">
          <h1 className="sign-in-name">Sign In</h1>
          <p className="sign-in-text">Sign in to your account</p>
        </div>
      </div>
      <div className="login-signup-buttons">
        <div className="google-button">
          <img src="google.png" alt="" className="google-icon" />
          <p className="google-caption">Sign in with Google</p>
        </div>
        <div className="apple-button">
          <img src="apple.png" alt="" className="apple-icon" />
          <p className="google-caption">Sign in with Apple</p>
        </div>
      </div>
      <div className="form-right">
        <p className="label-email">Email address</p>
        <input
          type="email"
          name="email"
          className="email"
          placeholder="johndoe@gmail.com"
        />
        <p className="label-password">Password</p>
        <input
          type="password"
          name="password"
          className="password"
          placeholder="••••••••"
        />
        <p className="label-forgot-password">Forgot password?</p>
        <button className="sign-in-btn" onClick={() => {
          navigate("/dashboard");
        }}>Sign In</button>
      </div>
      <div className="register-caption">
        <p className="register-caption-btn">
          Don’t have an account? <span>Register here</span>
        </p>
      </div>
    </div>
  );
}
