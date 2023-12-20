const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name"]
        },

        completed: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timeStamps:true
    }
);

const Task = mongoose.model("task", taskSchema);

module.exports = Task