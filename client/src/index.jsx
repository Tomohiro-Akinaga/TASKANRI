import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const currentUser = {
    userId: "62c39d9d6198576ac76496d1",
    userName: "Tanaka",
};

const CurrentUserContext = createContext(currentUser);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CurrentUserContext.Provider value={currentUser}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </CurrentUserContext.Provider>
);

export default CurrentUserContext;
