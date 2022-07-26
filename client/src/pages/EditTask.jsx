import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditContainer from "../components/EditContainer";

const EditTask = () => {
    const [todo, setTodo] = useState();

    const { userid, taskid } = useParams();

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/tasks/${userid}/${taskid}`);
            setTodo(response.data);
        })();
    }, []);

    return (
        <div>
            <h2>Edit Task</h2>
            {todo && <EditContainer todo={todo} />}
        </div>
    );
};

export default EditTask;
