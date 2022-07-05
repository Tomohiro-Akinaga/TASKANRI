const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const saveRoute = require("./routes/save");
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
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/save", saveRoute);

app.get("/", (req, res) => {
    res.send("hello express");
});

app.listen(PORT, console.log("Server is ready"));
