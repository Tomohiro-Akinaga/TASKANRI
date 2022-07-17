const router = require("express").Router();
const Task = require("../models/Task");

router.get("/:id", async (req, res) => {
    try {
        const data = await Task.findById(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const newTask = await new Task({
            userid: req.body.userid,
            task: req.body.task,
        });
        const task = await newTask.save();
        return res.status(200).json(task);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
