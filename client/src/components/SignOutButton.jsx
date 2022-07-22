import React from "react";
import { Link } from "react-router-dom";

const SignOutButton = () => {
    const SignOut = (e) => {
        localStorage.removeItem("userid");
    };
    return (
        <Link to="/signup" onClick={() => SignOut()}>
            Sign out
        </Link>
    );
};

export default SignOutButton;
