import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const EditContainer = ({ todo }) => {
    const [inputValue, setInputValue] = useState(todo.task);
    const [completed, setCompleted] = useState(todo.completed);
    const { userid, taskid } = useParams();

    const updateTask = async () => {
        const newTask = { task: inputValue, completed: completed };

        try {
            await axios.put(`/tasks/${userid}/${taskid}`, newTask);
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
            <Link to={"/tasks/" + userid}>Cancel</Link>
            <Link to={"/tasks/" + userid} onClick={updateTask}>
                Save
            </Link>
        </div>
    );
};

export default EditContainer;
