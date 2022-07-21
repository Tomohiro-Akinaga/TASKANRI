import React, { useEffect, useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [userExist, setUserExist] = useState(false);
    const navigate = useNavigate();
    const userid = localStorage.getItem("userid");

    useEffect(() => {
        if (userid) navigate(`/tasks/${userid}`);
    }, []);

    return (
        <div>
            {userExist && <p>You already have account!</p>}
            <SignUpForm setUserExist={setUserExist} />
            <Link to="/signin">Sign In </Link>
        </div>
    );
};

export default SignUp;
