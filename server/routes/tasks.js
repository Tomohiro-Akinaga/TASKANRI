const router = require("express").Router();
const Task = require("../models/Task");

router.post("/", async (req, res) => {
    try {
        const newTask = await new Task({
            task: req.body.task,
        });
        const task = await newTask.save();
        return res.status(200).json(task);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
