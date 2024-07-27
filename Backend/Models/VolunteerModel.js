const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
  username: {
    type: String,
    required: true,             
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  skills: {
    type: [String],  // An array of skills
    required: true
  },
  location: {
    type: String,
    required: true
  },
  language: {
    type: [String],  // An array of languages
    required: true
  },
  attendance: {
    type: Number,  // Number of days attended or a similar metric
    default: 0
  }
}, {
  timestamps: true
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
