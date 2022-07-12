const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const PORT = 8080;

app.use(express.json());
app.use("/api/tasks", taskRoute);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => console.log("Server is ready"));
    } catch (err) {
        console.log(err);
    }
};

start();
