import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import { GoogleLogin } from "react-google-login";

const SignIn = () => {
    const [userExist, setUserExist] = useState(true);

    return (
        <div>
            {!userExist && <p>User does not exist</p>}
            <SignInForm setUserExist={setUserExist} />
            <Link to="/signup">Sign Up</Link>
        </div>
    );
};

export default SignIn;
