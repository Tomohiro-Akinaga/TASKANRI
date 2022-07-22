import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import CardList from "../components/CardList";
import SignOutButton from "../components/SignOutButton";

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
            <TaskForm
                taskCounter={taskCounter}
                setTaskCounter={setTaskCounter}
            />
            {todos && (
                <CardList
                    todos={todos}
                    taskCounter={taskCounter}
                    setTaskCounter={setTaskCounter}
                />
            )}
            <SignOutButton />
        </div>
    );
};

export default Home;
