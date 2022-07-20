import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

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
            <UserForm setUserExist={setUserExist} />
        </div>
    );
};

export default SignUp;
