const mongoose = require("mongoose");

const SaveSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Save", SaveSchema);
