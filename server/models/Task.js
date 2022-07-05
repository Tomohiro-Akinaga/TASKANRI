const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        task: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
            required: true,
        },
        important: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
