const ResourceSchema = require('../Models/ResourceModel');

// Create a new resource
const createResource = async (req, res) => {
  try {
    const { subjectName, topic, resources } = req.body;

    if (!subjectName || !topic || !resources || !Array.isArray(resources)) {
      return res.status(400).json({ error: 'Subject name, topic, and an array of resources are required' });
    }

    const newResource = new ResourceSchema({
      subjectName,
      topic,
      resources
    });

    await newResource.save();

    res.status(201).json({ message: 'Resource created successfully', resource: newResource });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all resources
const getAllResources = async (req, res) => {
  try {
    const resources = await ResourceSchema.find();
    res.status(200).json({ resources });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get resource by ID
const getResourceById = async (req, res) => {
  try {
    const { id } = req.params;
    const resource = await ResourceSchema.findById(id);

    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    res.status(200).json({ resource });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get resources by subject name
const getResourcesBySubjectName = async (req, res) => {
  try {
    const { subjectName } = req.params;
    const resources = await ResourceSchema.find({ subjectName });

    if (!resources.length) {
      return res.status(404).json({ error: 'No resources found for the given subject name' });
    }

    res.status(200).json({ resources });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get resources by topic
const getResourcesByTopic = async (req, res) => {
  try {
    const { topic } = req.params;
    const resources = await ResourceSchema.find({ topic });

    if (!resources.length) {
      return res.status(404).json({ error: 'No resources found for the given topic' });
    }

    res.status(200).json({ resources });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a resource by ID
const updateResourceById = async (req, res) => {
  try {
    const { id } = req.params;
    const { subjectName, topic, resources } = req.body;

    // Validate input
    if (!subjectName || !topic || !resources || !Array.isArray(resources)) {
      return res.status(400).json({ error: 'Subject name, topic, and an array of resources are required' });
    }

    // Find the resource by ID and update it
    const updatedResource = await ResourceSchema.findByIdAndUpdate(
      id,
      { subjectName, topic, resources },
      { new: true }  // Return the updated document
    );

    // Check if the resource was found and updated
    if (!updatedResource) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    // Return the updated resource
    res.status(200).json({ message: 'Resource updated successfully', resource: updatedResource });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a resource by ID
const deleteResourceById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedResource = await ResourceSchema.findByIdAndDelete(id);

    if (!deletedResource) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    res.status(200).json({ message: 'Resource deleted successfully', resource: deletedResource });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




module.exports = {
  createResource,
  getAllResources,
  getResourceById,
  getResourcesBySubjectName,
  getResourcesByTopic,
  updateResourceById,
  deleteResourceById,
};
