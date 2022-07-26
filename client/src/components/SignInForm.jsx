import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = ({ setUserExist }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const SignIn = async (e) => {
        e.preventDefault();
        const existUser = {
            email: email,
            password: password,
        };
        try {
            const user = await axios.post("/users/signin", existUser);
            setUserExist(true);
            navigate(`/tasks/${user.data._id}`);
            localStorage.setItem("userid", user.data._id);
        } catch (err) {
            console.log(err);
            if (err.response.status === 404) setUserExist(false);
        }
    };

    return (
        <form onSubmit={SignIn}>
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInForm;
