import axios from "axios";

async function createTodosAPI(task) {
    const newTask = {
        userId: "62c39d9d6198576ac76496d1",
        task: task,
    };
    try {
        await axios.post("/tasks", newTask);
    } catch (err) {
        console.log(err);
    }
}

export default createTodosAPI;
