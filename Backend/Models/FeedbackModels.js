const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = {
  from_username: {
    type: String,
    required: true,
  },
  to_username: {
    type: String,
    required: true,
  },
  answer1: {
    type: String,
    enum: ["Excellent", "Good", "Average", "Poor", "Terrible"],
    required: true
  },
  answer2: {
    type: String,
    enum: ["Excellent", "Good", "Average", "Poor", "Terrible"],
    required: true
  },
  answer3: {
    type: String,
    required: true
  }
}

const studentFeedbackSchema = new Schema(schema, { timestamps: true });
const volunteerFeedbackSchema = new Schema(schema, { timestamps: true });
const coordinatorFeedbackSchema = new Schema(schema, { timestamps: true });

const StudentFeedback = mongoose.model('StudentFeedback', studentFeedbackSchema);
const VolunteerFeedback = mongoose.model('VolunteerFeedback', volunteerFeedbackSchema);
const CoordinatorFeedback = mongoose.model('CoordinatorFeedback', coordinatorFeedbackSchema);

module.exports = { StudentFeedback, VolunteerFeedback, CoordinatorFeedback };
