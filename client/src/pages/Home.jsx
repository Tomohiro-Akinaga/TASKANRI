import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import CardList from "../components/CardList";
import { useParams } from "react-router-dom";

const Home = () => {
    const [todos, setTodos] = useState();
    const [taskCounter, setTaskCounter] = useState(0);

    const { userid } = useParams();

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/tasks/${userid}`);
            setTodos(response.data);
        })();
    }, [taskCounter]);

    return (
        <div>
            <Form taskCounter={taskCounter} setTaskCounter={setTaskCounter} />
            {todos && (
                <CardList
                    todos={todos}
                    taskCounter={taskCounter}
                    setTaskCounter={setTaskCounter}
                />
            )}
        </div>
    );
};

export default Home;
