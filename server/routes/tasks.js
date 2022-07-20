const router = require("express").Router();
const Task = require("../models/Task");
const User = require("../models/User");

// Get all tasks
router.get("/:userid", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userid);
        const userTasks = await Task.find({ userid: currentUser._id });
        return res.status(200).json(userTasks);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// Get single task
router.get("/:userid/:taskid", async (req, res) => {
    try {
        const singleTask = await Task.findById(req.params.taskid);
        return res.status(200).json(singleTask);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.post("/:userid", async (req, res) => {
    try {
        const newTask = await new Task({
            userid: req.params.userid,
            task: req.body.task,
        });
        const task = await newTask.save();
        return res.status(200).json(task);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.delete("/:userid", async (req, res) => {
    try {
        const task = await Task.findById(req.body.id);
        await task.deleteOne();
        return res.status(200).json("Success to delete task");
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
