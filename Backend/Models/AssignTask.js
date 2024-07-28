const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignTask = new Schema(
    {
        volunteer: { type: Schema.Types.ObjectId, ref: "volunteer", required: true },
        student: { type: Schema.Types.ObjectId, ref: "student", required: true },
        assignment: { type: Schema.Types.ObjectId, ref: "assignment", required: true },
        iscompleted: {
            type: Boolean,
            default: false,
        },
        marks: {
            type: Number,
            default: -1
        }
    },
    {
        timestamps: true,
    }
);

const AssignmentModel = mongoose.model("assigntask", assignTask);
module.exports = AssignmentModel;
