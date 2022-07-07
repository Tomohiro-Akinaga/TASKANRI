import "./App.css";
import ToDoList from "./components/ToDoList";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
    const currentUserId = "62c39d9d6198576ac76496d1";
    const [todos, setTodos] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/tasks/all/" + currentUserId);
            setTodos(response.data);
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <ToDoList todos={todos} currentUserId={currentUserId} />
        </div>
    );
}

export default App;
