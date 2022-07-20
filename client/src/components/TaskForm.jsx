import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TaskForm = ({ taskCounter, setTaskCounter }) => {
    const [inputValue, setInputValue] = useState("");
    const { userid } = useParams();

    const addNewTask = async (e) => {
        e.preventDefault();
        const newTodo = { task: inputValue };
        try {
            await axios.post("/tasks/" + userid, newTodo);
        } catch (err) {
            console.log(err);
        }
        setTaskCounter(taskCounter + 1);
    };

    return (
        <form onSubmit={addNewTask}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskForm;
