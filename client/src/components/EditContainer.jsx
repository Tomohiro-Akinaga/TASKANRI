import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EditContainer = ({ todo, id }) => {
    const [inputValue, setInputValue] = useState(todo.task);
    const [completed, setCompleted] = useState(todo.completed);

    const updateTask = async () => {
        const newTask = { task: inputValue, completed: completed };

        try {
            await axios.put(`/tasks/${id}`, newTask);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => setCompleted(!completed)}>
                {completed ? "not done" : "done"}
            </button>
            <Link to={"/"}>Cancel</Link>
            <Link to={"/"} onClick={updateTask}>
                Save
            </Link>
        </div>
    );
};

export default EditContainer;
