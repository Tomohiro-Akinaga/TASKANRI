const router = require("express").Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        const findUser = await User.findOne({ email: req.body.email });
        if (findUser) {
            return res.status(200).json(findUser);
        } else {
            const user = await newUser.save();
            return res.status(200).json(user);
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
