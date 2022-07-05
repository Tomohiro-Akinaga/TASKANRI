const router = require("express").Router();
const Save = require("../models/Save");

router.post("/", (req, res) => {
    const newSave = new Save(req.body);
    try {
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
