import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditContainer from "../components/EditContainer";

const EditTask = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState();

    useEffect(() => {
        (async () => {
            const response = await axios.get(`tasks/${id}`);
            setTodo(response.data);
        })();
    }, []);

    return (
        <div>
            <h2>hello, {id}</h2>
            {todo && <EditContainer todo={todo} id={id} />}
        </div>
    );
};

export default EditTask;
