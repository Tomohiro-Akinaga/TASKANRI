import React from "react";
import axios from "axios";

const Card = ({ item, taskCounter, setTaskCounter }) => {
    const editTask = (id) => {
        console.log(id);
    };
    const deleteTask = async (id) => {
        try {
            await axios.delete(`/tasks/${id}`);
        } catch (err) {
            console.log(err);
        }
        setTaskCounter(taskCounter - 1);
    };

    return (
        <li id={item._id}>
            {item.task}
            <button onClick={() => editTask(item._id)}>edit</button>
            <button onClick={() => deleteTask(item._id)}>delete</button>
        </li>
    );
};

export default Card;
