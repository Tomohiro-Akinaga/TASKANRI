const router = require("express").Router();
const Task = require("../models/Task");
const User = require("../models/User");

//Fetch tasks
router.get("/all/:id", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.id);
        const userTasks = await Task.find({ userId: currentUser._id });
        return res.status(200).json(userTasks);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//Save new task
router.post("/", async (req, res) => {
    const newTask = new Task(req.body);
    try {
        const savedTask = await newTask.save();
        return res.status(200).json(savedTask);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//Edit the task
router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task.userId === req.body.userId) {
            await task.updateOne({ $set: req.body });
            return res.status(200).json("Edited the task");
        } else {
            return res.status(403).json("Fail to edit the task");
        }
    } catch (err) {
        return res.send(403).json(err);
    }
});

//Delete the task
router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task.userId === req.body.userId) {
            await task.deleteOne();
            return res.status(200).json("Deleted the task");
        } else {
            return res.status(403).json("Fail to delete the task");
        }
    } catch (err) {
        return res.send(403).json(err);
    }
});

module.exports = router;
