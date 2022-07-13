import React, { useState } from "react";
import axios from "axios";

const Form = ({ taskCounter, setTaskCounter }) => {
    const [inputValue, setInputValue] = useState("");

    const addNewTask = async (e) => {
        e.preventDefault();
        const newTodo = { task: inputValue, completed: false };
        try {
            await axios.post("/tasks", newTodo);
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

export default Form;
