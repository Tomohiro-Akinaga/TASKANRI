import React from "react";
import Card from "./Card";

const CardList = ({ todos, taskCounter, setTaskCounter }) => {
    return (
        <ul>
            {todos.map((item) => (
                <Card
                    item={item}
                    key={item._id}
                    taskCounter={taskCounter}
                    setTaskCounter={setTaskCounter}
                />
            ))}
        </ul>
    );
};

export default CardList;
