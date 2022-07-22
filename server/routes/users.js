const router = require("express").Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        const existUser = await User.findOne({ email: req.body.email });
        if (existUser) {
            return res.status(409).json({ message: "User already exist" });
        } else {
            const user = await newUser.save();
            return res.status(200).json(user);
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) res.status(404).send("User does not exist");
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get("/:userid", async (req, res) => {
    try {
        const user = await User.findById(req.params.userid);
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
