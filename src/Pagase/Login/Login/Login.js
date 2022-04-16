import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-title">Sign up</div>
      <form className="login-form">
        <input type="text" placeholder="Your Email" />
        <div className="relative">
          <input type="password" placeholder="password" />
        </div>
        <input type="password" placeholder="confirm password" />

        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Login;
