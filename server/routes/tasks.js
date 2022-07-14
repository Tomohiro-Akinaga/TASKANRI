const router = require("express").Router();

router.get("/tasks", async (req, res) => {
    try {
        const newTask = new Task({});
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
