import React from "react";
import { useState } from "react";
import axios from "axios";

const ToDoList = ({ todos, currentUserId }) => {
    const [task, setTask] = useState("");

    if (!todos) return;
    console.log(todos);
    
    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const addTask = async (e) => {
        e.preventDefault();
        const newTask = {
            userId: currentUserId,
            task: task,
        };
        await axios.post("/tasks", newTask);
    };

    // const initialState = [
    //     { task: "Learn JS", isCompleted: false },
    //     { task: "Learn React Hook", isCompleted: false },
    //     { task: "Learn Gatsby.js", isCompleted: false },
    // ];

    // const [todos, setTodos] = useState(initialState);
    // const [task, setTask] = useState("");

    // const handleChange = (e) => {
    //     setTask(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (task === "") return;
    //     setTodos((todos) => [...todos, { task: task, isCompleted: false }]);
    //     setTask("");
    // };

    // const handleUpdateTask = (index) => {
    //     const newTodos = todos.map((todo, todoIndex) => {
    //         if (todoIndex === index) {
    //             todo.isCompleted = !todo.isCompleted;
    //         }
    //         return todo;
    //     });
    //     console.log(newTodos);
    //     setTodos(newTodos);
    // };

    return (
        <div>
            <h1>ToDoList</h1>
            <form onSubmit={addTask}>
                <input
                    placeholder="New Task"
                    value={task}
                    onChange={handleChange}
                ></input>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default ToDoList;
