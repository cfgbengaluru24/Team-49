const VolunteerResourceSchema = require('../Models/VolunteerResourceModel');

// Create a new volunteer resource
const createVolunteerResource = async (req, res) => {
  try {
    const { subjectName, topic, resources } = req.body;

    if (!subjectName || !topic || !resources || !Array.isArray(resources)) {
      return res.status(400).json({ error: 'Subject name, topic, and an array of resources are required' });
    }

    const newResource = new VolunteerResourceSchema({
      subjectName,
      topic,
      resources
    });

    await newResource.save();

    res.status(201).json({ message: 'Volunteer resource created successfully', resource: newResource });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all volunteer resources
const getAllVolunteerResources = async (req, res) => {
  try {
    const resources = await VolunteerResourceSchema.find();
    res.status(200).json({ resources });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get volunteer resource by ID
const getVolunteerResourceById = async (req, res) => {
  try {
    const { id } = req.params;
    const resource = await VolunteerResourceSchema.findById(id);

    if (!resource) {
      return res.status(404).json({ error: 'Volunteer resource not found' });
    }

    res.status(200).json({ resource });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get volunteer resources by subject name
const getVolunteerResourcesBySubjectName = async (req, res) => {
  try {
    const { subjectName } = req.params;
    const resources = await VolunteerResourceSchema.find({ subjectName });

    if (!resources.length) {
      return res.status(404).json({ error: 'No volunteer resources found for the given subject name' });
    }

    res.status(200).json({ resources });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get volunteer resources by topic
const getVolunteerResourcesByTopic = async (req, res) => {
  try {
    const { topic } = req.params;
    const resources = await VolunteerResourceSchema.find({ topic });

    if (!resources.length) {
      return res.status(404).json({ error: 'No volunteer resources found for the given topic' });
    }

    res.status(200).json({ resources });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a volunteer resource by ID
const updateVolunteerResourceById = async (req, res) => {
  try {
    const { id } = req.params;
    const { subjectName, topic, resources } = req.body;

    // Validate input
    if (!subjectName || !topic || !resources || !Array.isArray(resources)) {
      return res.status(400).json({ error: 'Subject name, topic, and an array of resources are required' });
    }

    // Find the resource by ID and update it
    const updatedResource = await VolunteerResourceSchema.findByIdAndUpdate(
      id,
      { subjectName, topic, resources },
      { new: true }  // Return the updated document
    );

    // Check if the resource was found and updated
    if (!updatedResource) {
      return res.status(404).json({ error: 'Volunteer resource not found' });
    }

    // Return the updated resource
    res.status(200).json({ message: 'Volunteer resource updated successfully', resource: updatedResource });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a volunteer resource by ID
const deleteVolunteerResourceById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedResource = await VolunteerResourceSchema.findByIdAndDelete(id);

    if (!deletedResource) {
      return res.status(404).json({ error: 'Volunteer resource not found' });
    }

    res.status(200).json({ message: 'Volunteer resource deleted successfully', resource: deletedResource });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createVolunteerResource,
  getAllVolunteerResources,
  getVolunteerResourceById,
  getVolunteerResourcesBySubjectName,
  getVolunteerResourcesByTopic,
  updateVolunteerResourceById,
  deleteVolunteerResourceById,
};
