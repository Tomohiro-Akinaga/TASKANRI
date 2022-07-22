import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [userExist, setUserExist] = useState(false);

    return (
        <div>
            {userExist && <p>You already have account!</p>}
            <SignUpForm setUserExist={setUserExist} />
            <Link to="/signin">Sign In </Link>
        </div>
    );
};

export default SignUp;
