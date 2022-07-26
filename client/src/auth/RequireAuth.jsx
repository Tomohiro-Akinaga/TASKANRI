import { Children } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const loginUser = localStorage.getItem("userid");

    if (!loginUser) {
        return <Navigate to="/signup" replace={true} />;
    }

    return children;
};

export default RequireAuth;
