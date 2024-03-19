import React, { useState, useEffect } from "react";
import "./Login.scss";
import CreateAccount from "../../components/CreateAccount/CreateAccount";
import { SiteLogo, LoginOverlay } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("email", email); 
    localStorage.setItem("isLoggedIn", true); 
    onLogin(); 
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    setTimeout(() => {
        if (isLoggedIn) {
            return navigate("/dashboard");
        }
    }, 1000);
  }, []);
  
  return (
    <div className="login">
        <div className="login-logo"> 
            <p className="login-logo-img"> <SiteLogo className="login-logo-img"/> </p>
            <p className="login-logo-txt"> JTT Bank, Inc. </p>
        </div>
        <div className="login-main">
            <LoginOverlay className="login-bg"/>
            <div className="login">
                Login
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="login-email-txt"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="login-password-txt"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
            {/*
            <div className="create-account">
                Create Account <CreateAccount />
            </div>
            */}
        </div>
    </div>
    );
};

export default Login;