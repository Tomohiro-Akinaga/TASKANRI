import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/Home";
import EditTask from "./pages/EditTask";
import SignUp from "./pages/SignUp";
import CurrentUserContext from ".";

function App() {
    const currentUser = useContext(CurrentUserContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/tasks/:userid" element={<Home />} />
                <Route path="/tasks/:userid/:taskid" element={<EditTask />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
