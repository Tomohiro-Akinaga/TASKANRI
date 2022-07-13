import axios from "axios";

async function readTodosAPI() {
    const todos = await axios.get("/tasks/all/62c39d9d6198576ac76496d1");
    return todos;
}

export default readTodosAPI;
