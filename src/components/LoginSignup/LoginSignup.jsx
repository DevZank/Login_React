import React, { useState } from "react";
import "./LoginSignup.css";
import user_img from "../../assets/user_img.png";
import user_mail from "../../assets/user_mail.png";
import user_pass from "../../assets/user_pass.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_img} alt="User Icon" />
            <input type="text" placeholder="Enter your Name" />
          </div>
        )}
        <div className="input">
          <img src={user_mail} alt="User Mail" />
          <input type="email" placeholder="Enter your Email" />
        </div>
        <div className="input">
          <img src={user_pass} alt="User Password" />
          <input type="password" placeholder="Enter your Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
