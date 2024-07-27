const express = require('express');
const router = express.Router();
const ResourceController = require('../Controllers/ResourceController');

// Create a new resource
router.post('/', ResourceController.createResource);

// Get all resources
router.get('/', ResourceController.getAllResources);

// Get a resource by ID
router.get('/:id', ResourceController.getResourceById);

// Get resources by subject name
router.get('/subject/:subjectName', ResourceController.getResourcesBySubjectName);

// Get resources by topic
router.get('/topic/:topic', ResourceController.getResourcesByTopic);

// Update a resource by ID
router.put('/:id', ResourceController.updateResourceById);

// Delete a resource by ID
router.delete('/:id', ResourceController.deleteResourceById);



module.exports = router;
