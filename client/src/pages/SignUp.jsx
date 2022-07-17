import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [userNameValue, setUserNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const navigate = useNavigate();

    const userSignUp = async (e) => {
        e.preventDefault();
        const newUser = {
            username: userNameValue,
            email: emailValue,
            password: passwordValue,
        };
        try {
            await axios.post("/users/signup", newUser);
        } catch (err) {
            console.log(err);
        }
        // navigate("/"); // How can I pass user id to Home URL?
    };

    return (
        <form onSubmit={userSignUp}>
            <input
                type="text"
                placeholder="user name"
                value={userNameValue}
                onChange={(e) => setUserNameValue(e.target.value)}
            />
            <input
                type="text"
                placeholder="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
            />
            <input
                type="text"
                placeholder="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
            />
            <button type="submit" onSubmit={userSignUp}>
                Sign Up
            </button>
        </form>
    );
};

export default SignUp;
