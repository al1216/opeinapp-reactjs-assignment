import React, { useState } from "react";
import "./Right.css";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

export default function Right() {
  let navigate = useNavigate();
  let [isClickedRegister,setIsClickedRegister] = useState(false);
  let [error,setError] = useState(false);
  let [errMsg,setErrorMsg] = useState("");
  let [email,setEmail] = useState("");
  let [pass,setPass] = useState("");

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log("Login Failed:", error);
      setError(true);
      setErrorMsg(error);
    }
  });
  
  let isValidEmail = (email) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
    if (re.test(email)) {
      return true;
    }
  
    return false;
  };

  let onClickSignButtonCustom = () => {
    
    if (isValidEmail(email) && pass.trim().length >= 1) {
      setError(false);
      navigate("/dashboard");
    }
    else{
      setErrorMsg("Please enter valid emali-id or password!");
      setError(true);
    }
  }
  return (
    <div className="right-main">
      <div className="sign-in-caption">
        <div className="wrapper-caption">
          <h1 className="sign-in-name">{`Sign ${!isClickedRegister ? 'In' : 'Up'}`}</h1>
          <p className="sign-in-text">{`Sign ${!isClickedRegister ? 'In' : 'Up'} to your account`}</p>
        </div>
      </div>
      <div className="login-signup-buttons">
        <div className="google-button" onClick={() => login()}>
          <img src="google.png" alt="" className="google-icon" />
          <p className="google-caption">Sign {`${!isClickedRegister ? 'in' : 'up'}`} with Google</p>
        </div>
        <div className="apple-button">
          <img src="apple.png" alt="" className="apple-icon" />
          <p className="google-caption">Sign {`${!isClickedRegister ? 'in' : 'up'}`} with Apple</p>
        </div>
      </div>
      <div className="form-right">
        <p className="label-email">Email address</p>
        <input
          type="email"
          name="email"
          className="email"
          placeholder="johndoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="label-password">Password</p>
        <input
          type="password"
          name="password"
          className="password"
          placeholder="••••••••"
          onChange={(e) => setPass(e.target.value)}
        />
        <p className="label-forgot-password">Forgot password?</p>
        <button
          className="sign-in-btn"
          onClick={() => onClickSignButtonCustom()}
        >
          Sign {`${!isClickedRegister ? 'In' : 'Up'}`}
        </button>
      </div>
      <div className="register-caption">
        {error === true && <p className="register-caption-btn" style={{color: "red"}}>Login Failed: {errMsg}</p> }
        {isClickedRegister === false && <p className="register-caption-btn">
          Don’t have an account? <span onClick={() => setIsClickedRegister(true)}>Register here</span>
        </p>}
        {isClickedRegister === true && <p className="register-caption-btn">
          Already have an account? <span onClick={() => setIsClickedRegister(false)}>Sign In here</span>
        </p>}
      </div>
    </div>
  );
}
