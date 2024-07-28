const express = require('express');
const router = express.Router();
const FeedbackController = require('../Controllers/FeedbackController');

router.get('/students', FeedbackController.listStudentUsernames);
router.get('/volunteers', FeedbackController.listVolunteerUsernames);
router.post('/student', FeedbackController.saveStudentFeedback);
router.post('/volunteer', FeedbackController.saveVolunteerFeedback);
router.post('/coordinator', FeedbackController.saveCoordinatorFeedback);

module.exports = router;
