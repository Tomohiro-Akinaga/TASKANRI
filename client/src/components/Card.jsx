import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ item, taskCounter, setTaskCounter }) => {
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
            <Link to={item._id}>Edit</Link>
            <button onClick={() => deleteTask(item._id)}>delete</button>
        </li>
    );
};

export default Card;
