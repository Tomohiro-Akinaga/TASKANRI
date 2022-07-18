const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        userid: {
            type: String,
            required: true,
        },
        task: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
