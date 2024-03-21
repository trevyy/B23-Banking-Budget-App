import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { userData } from "../../Data";

import { SiteLogo, LoginOverlay } from "../../assets/icons";

import handleGetUserEmail from "../../hooks/handleGetUserEmail";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const user = handleGetUserEmail(email, userData);

    const handleLogin = () => {
        if (user && user.password === password) {
            user.isLoggedIn = true;
            localStorage.setItem("isLoggedIn", user.isLoggedIn); 
            localStorage.setItem("currentUser", user.userId);
            toast.success("Welcome!");
            onLogin(); 
            navigate('/dashboard');
        } else {
            toast.error("Incorrect email or password.");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };
 
    return (
        <div className="login">
            <ToastContainer />
            <div className="login-logo"> 
                <p className="login-logo-img"> <SiteLogo className="login-logo-img"/> </p>
                <p className="login-logo-txt"> JTT Bank, Inc. </p>
            </div>
            <div className="login-main">
                <LoginOverlay className="login-bg"/>
                <div className="login-details">
                    Login
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        className="login-email-txt"
                        onChange={(event) => setEmail(event.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        className="login-password-txt"
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleLogin}> Login </button>
                </div>
            </div>
        </div>
    );
};
export default Login;