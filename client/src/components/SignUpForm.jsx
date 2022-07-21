import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setUserExist }) => {
    const [userNameValue, setUserNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();
        const newUser = {
            username: userNameValue,
            email: emailValue,
            password: passwordValue,
        };
        try {
            const user = await axios.post("/users/signup", newUser);
            if (user) {
                navigate(`/tasks/${user.data._id}`);
                localStorage.setItem("userid", user.data._id);
            }
        } catch (err) {
            console.log(err);
            if (err.response.status === 409) setUserExist(true);
        }
    };

    return (
        <form onSubmit={signUp}>
            <input
                type="text"
                placeholder="user name"
                value={userNameValue}
                onChange={(e) => setUserNameValue(e.target.value)}
            />
            <input
                type="email"
                placeholder="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                minLength={6}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
            />
            <button type="submit" onSubmit={signUp}>
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
