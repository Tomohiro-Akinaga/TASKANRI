const router = require("express").Router();
const Task = require("../models/Task");
const User = require("../models/User");

router.get("/:id", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.id);
        const userTasks = await Task.find({ userId: currentUser._id });
        return res.status(200).json(userTasks);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.post("/:id", async (req, res) => {
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
