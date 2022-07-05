const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("save router");
});

module.exports = router;
