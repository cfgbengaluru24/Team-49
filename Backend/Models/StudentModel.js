const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  class: {
    type: String,
    required: true
  },
  preferedtime: {
    type: String,
    enum: ['evening', 'day'],
    required: true
  },
  languagePreference: {
    type: [String],
    required: true
  },
  learningMethodPreference: {
    flashcards: {
      type: Boolean,
      default: false
    },
    worksheets: {
      type: Boolean,
      default: false
    },
    ppt: {
      type: Boolean,
      default: false
    }
  }
}, {
  timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
