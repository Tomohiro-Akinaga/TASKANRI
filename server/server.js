const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const taskRoute = require("./routes/tasks");
const PORT = 8080;
const mongoose = require("mongoose");
require("dotenv").config();

//Connect DB
mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
        console.log("DB is ready");
    })
    .catch((err) => {
        console.log(err);
    });

//Route
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/tasks", taskRoute);

app.get("/", (req, res) => {
    res.send("hello express");
});

app.listen(PORT, console.log("Server is ready"));
