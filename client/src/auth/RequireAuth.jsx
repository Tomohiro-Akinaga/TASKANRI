import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const loginUser = localStorage.getItem("userid");

    if (!loginUser) {
        return <Navigate to="/" replace={true} />;
    } else {
        return children;
    }
};

export default RequireAuth;
