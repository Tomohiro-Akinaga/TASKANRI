import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditTask from "./pages/EditTask";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/tasks/:id" element={<Home />} />
                <Route path="/:id" element={<EditTask />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
