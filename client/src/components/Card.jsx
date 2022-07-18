import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Card = ({ item, taskCounter, setTaskCounter }) => {
    const id = useParams();
    const taskID = item._id;

    const params = { id: taskID };

    const deleteTask = async () => {
        try {
            await axios.delete("/tasks/" + id, { data: params });
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
