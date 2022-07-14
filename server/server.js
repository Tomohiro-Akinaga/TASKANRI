const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const taskRoute = require("./routes/tasks");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 8080;
app.listen(PORT, console.log("server is ready"));

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB is ready"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/tasks", taskRoute);
