const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const Volunteer = require('../Models/VolunteerModel');

// Signup function with all fields
const signup = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      phoneNo,
      gender,
      skills,
      location,
      language
    } = req.body;

    if (!username || !email || !password || !phoneNo || !gender || !skills || !location || !language) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newVolunteer = new Volunteer({
      username,
      email,
      password: hashedPassword,
      phoneNo,
      gender,
      skills,
      location,
      language
    });

    await newVolunteer.save();

    res.status(201).json({
      message: 'Volunteer signed up successfully',
      volunteer: newVolunteer
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Login function with JWT
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const volunteer = await Volunteer.findOne({ email });
    if (!volunteer) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, volunteer.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: volunteer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful',
      token,
      volunteer: {
        id: volunteer._id,
        username: volunteer.username,
        email: volunteer.email,
        phoneNo: volunteer.phoneNo,
        gender: volunteer.gender,
        skills: volunteer.skills,
        location: volunteer.location,
        language: volunteer.language,
        attendance: volunteer.attendance
        // Include any other details you want to send
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  signup,
  login
};
