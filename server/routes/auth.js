const router = require("express").Router();
const User = require("../models/User");

//Sign up
router.post("/signup", async (req, res) => {
    try {
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const user = await newUser.save();
        return res.status(200).json(user);
    } catch (err) {
        return req.status(500).json(err);
    }
});

//Log in
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).send("Not found User");

        const validPassword = req.body.password === user.password;
        if (!validPassword) return res.status(400).json("Wrong password");

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(500);
    }
});

module.exports = router;
