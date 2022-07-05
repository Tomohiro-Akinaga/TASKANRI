const router = require("express").Router();
const User = require("../models/user");

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

module.exports = router;
