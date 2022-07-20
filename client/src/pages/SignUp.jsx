import React from "react";
import UserForm from "../components/UserForm";

const SignUp = () => {
    const userid = localStorage.getItem("userid");
    console.log(userid);
    return (
        <div>
            <UserForm />
        </div>
    );
};

export default SignUp;
