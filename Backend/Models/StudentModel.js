const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  username: {
    type: String,
    required: true,  // Ensures that username is provided
  },
  email: {
    type: String,
    required: true,  // Ensures that email is provided
    unique: true,    // Ensures that email is unique across all students
  },
  password: {
    type: String,
    required: true,  // Ensures that password is provided
  },
  age: {
    type: Number,    // Optional field for student's age
  },
  class: {
    type: String,
    required: true,  // Ensures that class is provided
  },
  preferedtime: {
    type: String,
    enum: ['evening', 'day'],  // Limits the preferred time to 'evening' or 'day'
    required: true,  // Ensures that preferred time is provided
  },
  languagePreference: {
    type: [String],  // Array to store multiple language preferences
    required: true,  // Ensures that language preferences are provided
  },
  learningMethodPreference: {
    flashcards: {
      type: Boolean,
      default: false,  // Default value is false
    },
    worksheets: {
      type: Boolean,
      default: false,  // Default value is false
    },
    ppt: {
      type: Boolean,
      default: false,  // Default value is false
    },
  },
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
