const express = require('express');
const router = express.Router();
const {
  createVolunteerResource,
  getAllVolunteerResources,
  getVolunteerResourceById,
  getVolunteerResourcesBySubjectName,
  getVolunteerResourcesByTopic,
  updateVolunteerResourceById,
  deleteVolunteerResourceById
} = require('../Controllers/VolunteerResourceController');

// Route to create a new volunteer resource
router.post('/volunteer-resources', createVolunteerResource);

// Route to get all volunteer resources
router.get('/volunteer-resources', getAllVolunteerResources);

// Route to get a volunteer resource by ID
router.get('/volunteer-resources/:id', getVolunteerResourceById);

// Route to get volunteer resources by subject name
router.get('/volunteer-resources/subject/:subjectName', getVolunteerResourcesBySubjectName);

// Route to get volunteer resources by topic
router.get('/volunteer-resources/topic/:topic', getVolunteerResourcesByTopic);

// Route to update a volunteer resource by ID
router.put('/volunteer-resources/:id', updateVolunteerResourceById);

// Route to delete a volunteer resource by ID
router.delete('/volunteer-resources/:id', deleteVolunteerResourceById);

module.exports = router;
