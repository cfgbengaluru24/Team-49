const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema(
    {
        topic: {
            type: String,
            required: true,
        },
        assignment_type: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        link: {
            type: String,
            required: true,
        },
        volunteer: { type: Schema.Types.ObjectId, ref: "volunteer", required: true },
    },
    {
        timestamps: true,
    }
);

const AssignmentModel = mongoose.model("assignment", assignmentSchema);
module.exports = AssignmentModel;
