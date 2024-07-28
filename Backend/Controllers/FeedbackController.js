const { CoordinatorFeedback, StudentFeedback, VolunteerFeedback } = require('../Models/FeedbackModels');
const Student=require( '../Models/StudentModel');
const Volunteer=require('../Models/VolunteerModel');

const listStudentUsernames = async (req, res) => {
    try {
        const usernames = await Student.find({}, 'username');
        res.status(200).json({ message: 'Usernames found', usernames });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching usernames' });
    }
};

const listVolunteerUsernames = async (req, res) => {
    try {
        const usernames = await Volunteer.find({}, 'username');
        res.status(200).json({ message: 'Usernames found', usernames });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching usernames' });
    }
};

const saveStudentFeedback = async (req, res) => {
    const { from_username, to_username, answer1, answer2, answer3 } = req.body;

    StudentFeedback.create({
      from_username,
      to_username,
      answer1,
      answer2,
      answer3
    }).then(feedback => {
      res.status(201).json({ message: 'Feedback saved successfully', feedback });
    }).catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error saving feedback' });
    });
};

const saveVolunteerFeedback = (req, res) => {
  const { from_username, to_username, answer1, answer2, answer3 } = req.body;
  
  VolunteerFeedback.create({
    from_username,
    to_username,
    answer1,
    answer2,
    answer3
  }).then(feedback => {
    res.status(201).json({ message: 'Feedback saved successfully', feedback });
  }).catch(error => {
    console.error(error);
    res.status(500).json({ error: 'Error saving feedback' });
  });
};

const saveCoordinatorFeedback = (req, res) => {
  const { from_username, to_username, answer1, answer2, answer3 } = req.body;
  
  CoordinatorFeedback.create({
    from_username,
    to_username,
    answer1,
    answer2,
    answer3
  }).then(feedback => {
    res.status(201).json({ message: 'Feedback saved successfully', feedback });
  }).catch(error => {
    console.error(error);
    res.status(500).json({ error: 'Error saving feedback' });
  });
};



const getFeedbacks = async (req, res) => {
  try {
    const studentFeedbacks = await StudentFeedback.find().populate('from_username').populate('to_username');
    const volunteerFeedbacks = await VolunteerFeedback.find().populate('from_username').populate('to_username');
    const coordinatorFeedbacks = await CoordinatorFeedback.find().populate('from_username').populate('to_username');
    res.json({ studentFeedbacks, volunteerFeedbacks, coordinatorFeedbacks });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};


module.exports = {
  saveStudentFeedback,
  saveVolunteerFeedback,
  saveCoordinatorFeedback,
  listStudentUsernames,
  listVolunteerUsernames,
  getFeedbacks
};
