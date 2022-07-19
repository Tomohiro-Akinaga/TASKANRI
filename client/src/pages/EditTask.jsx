import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditContainer from "../components/EditContainer";

const EditTask = () => {
    const [todo, setTodo] = useState();

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const response = await axios.get("/tasks/");
            setTodo(response.data);
        })();
    }, []);

    return (
        <div>
            <h2>hello</h2>
            {todo && <EditContainer todo={todo} id={id} />}
        </div>
    );
};

export default EditTask;
