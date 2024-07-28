const express = require('express');
const router = express.Router();
const {
  saveStudentFeedback,
  saveVolunteerFeedback,
  saveCoordinatorFeedback,
  listStudentUsernames,
  listVolunteerUsernames,
  getFeedbacks
} = require('../Controllers/FeedbackController');

// Routes for saving feedback
router.post('/feedback/student', saveStudentFeedback);
router.post('/feedback/volunteer', saveVolunteerFeedback);
router.post('/feedback/coordinator', saveCoordinatorFeedback);

// Routes for listing usernames
router.get('/usernames/students', listStudentUsernames);
router.get('/usernames/volunteers', listVolunteerUsernames);

// Route for getting all feedbacks
router.get('/feedbacks', getFeedbacks);

module.exports = router;
