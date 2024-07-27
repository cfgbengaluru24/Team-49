const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define subject schema with resources and volunteer reference
const subjectSchema = new Schema({
  subjectName: {
    type: String,
    required: true,
    unique: true
  },
  resources: [{
    type: {
      type: String,
      enum: ['PDF', 'Video', 'PPT'],
      required: true
    },
    url: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }],
  volunteerId: {
    type: Schema.Types.ObjectId,
    ref: 'Volunteer',
    required: true
  }
}, {
  timestamps: true
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
